import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from '../../i18n/utils';
import { useLoadingPhrases } from './useLoadingPhrases';
import LoadingSpinner from './LoadingSpinner';

const FileEncryptor: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState('');
  const [processedFileUrl, setProcessedFileUrl] = useState<string | null>(null);
  const [processedFileName, setProcessedFileName] = useState<string>('');
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const loadingText = useLoadingPhrases(isLoading);

  useEffect(() => {
    // This effect runs when the component unmounts or when processedFileUrl changes.
    return () => {
      if (processedFileUrl) {
        URL.revokeObjectURL(processedFileUrl);
      }
    };
  }, [processedFileUrl]);

  const getPasswordKey = async (password: string): Promise<CryptoKey> => {
    const encoder = new TextEncoder();
    const passwordBuffer = encoder.encode(password);
    return await crypto.subtle.importKey(
      'raw',
      passwordBuffer,
      'PBKDF2',
      false,
      ['deriveKey']
    );
  };

  const deriveEncryptionKey = async (passwordKey: CryptoKey, salt: Uint8Array): Promise<CryptoKey> => {
    return await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      passwordKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  };

  const handleEncrypt = async () => {
    if (!file || !password) {
      setError(t('components.fileEncryptor.errorFillFile'));
      return;
    }
    if (!crypto.subtle) {
      setError(t('components.fileEncryptor.errorCryptoNotAvailable'));
      return;
    }
    setIsLoading(true);
    setError('');
    setProcessedFileUrl(null);

    try {
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const fileBuffer = await file.arrayBuffer();

      const passwordKey = await getPasswordKey(password);
      const encryptionKey = await deriveEncryptionKey(passwordKey, salt);

      const encryptedData = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: iv },
        encryptionKey,
        fileBuffer
      );

      const encryptedBytes = new Uint8Array(encryptedData);
      const resultBuffer = new Uint8Array(salt.length + iv.length + encryptedBytes.length);
      resultBuffer.set(salt, 0);
      resultBuffer.set(iv, salt.length);
      resultBuffer.set(encryptedBytes, salt.length + iv.length);

      const blob = new Blob([resultBuffer], { type: 'application/octet-stream' });
      setProcessedFileUrl(URL.createObjectURL(blob));
      setProcessedFileName(`${file.name}.enc`);

    } catch (e: any) {
      setError(t('components.fileEncryptor.errorEncrypt'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleDecrypt = async () => {
    if (!file || !password) {
      setError(t('components.fileEncryptor.errorFillEncryptedFile'));
      return;
    }
    if (!crypto.subtle) {
      setError(t('components.fileEncryptor.errorCryptoNotAvailable'));
      return;
    }
    setIsLoading(true);
    setError('');
    setProcessedFileUrl(null);

    try {
      const fileBuffer = await file.arrayBuffer();
      const bytes = new Uint8Array(fileBuffer);

      const salt = bytes.slice(0, 16);
      const iv = bytes.slice(16, 28);
      const encryptedData = bytes.slice(28);

      const passwordKey = await getPasswordKey(password);
      const decryptionKey = await deriveEncryptionKey(passwordKey, salt);

      const decryptedData = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        decryptionKey,
        encryptedData
      );

      const blob = new Blob([decryptedData], { type: 'application/octet-stream' });
      setProcessedFileUrl(URL.createObjectURL(blob));
      setProcessedFileName(file.name.replace(/\.enc$/, ''));

    } catch (e: any) {
      setError(t('components.fileEncryptor.errorDecrypt'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (selectedFile: File | null) => {
    if (selectedFile) {
      setFile(selectedFile);
      setProcessedFileUrl(null);
      setError('');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(event.target.files?.[0] || null);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    handleFileSelect(event.dataTransfer.files?.[0] || null);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'encrypt') {
      handleEncrypt();
    } else {
      handleDecrypt();
    }
  };

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoading && <LoadingSpinner text={loadingText} />}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <fieldset className="flex space-x-4">
            <legend className="sr-only">Modo</legend>
            <div>
              <input type="radio" id="encrypt" name="mode" value="encrypt" checked={mode === 'encrypt'} onChange={() => setMode('encrypt')} className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500 dark:border-gray-600" />
              <label htmlFor="encrypt" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">{t('components.fileEncryptor.encrypt')}</label>
            </div>
            <div>
              <input type="radio" id="decrypt" name="mode" value="decrypt" checked={mode === 'decrypt'} onChange={() => setMode('decrypt')} className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500 dark:border-gray-600" />
              <label htmlFor="decrypt" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">{t('components.fileEncryptor.decrypt')}</label>
            </div>
          </fieldset>
        </div>

        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />

        <div 
          onDrop={handleDrop} 
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg transition-colors ${isDragging ? 'border-purple-600 bg-purple-50 dark:bg-gray-700' : 'border-gray-300 dark:border-gray-600'}`}>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{t('components.fileEncryptor.dragAndDrop')}</p>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
          >
            {t('components.fileEncryptor.selectFile')}
          </button>
          {file && <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{file.name}</p>}
        </div>
        
        <input
          type="password"
          className="mt-4 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 transition-shadow dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          placeholder={t('components.fileEncryptor.passwordPlaceholder')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          type="submit"
          disabled={isLoading || !file || !password}
          className="mt-4 w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 disabled:bg-purple-300 transition-colors dark:disabled:bg-purple-800"
        >
          {isLoading ? t('components.fileEncryptor.processing') : (mode === 'encrypt' ? t('components.fileEncryptor.encryptButton') : t('components.fileEncryptor.decryptButton'))}
        </button>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {processedFileUrl && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.fileEncryptor.result')}</h3>
            <a
              href={processedFileUrl}
              download={processedFileName}
              className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-8 rounded-md hover:bg-blue-600 transition-colors"
            >
              {t('components.fileEncryptor.download')}
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default FileEncryptor;