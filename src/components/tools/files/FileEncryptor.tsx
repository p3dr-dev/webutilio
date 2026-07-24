import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from '../../../i18n/utils';
import { useLoadingPhrases } from '../common/useLoadingPhrases';
import LoadingSpinner from '../common/LoadingSpinner';

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
  const loadingText = useLoadingPhrases(isLoading, t('components.loading.genericPhrases') as string[]);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    return () => {
      if (processedFileUrl) URL.revokeObjectURL(processedFileUrl);
      if (workerRef.current) workerRef.current.terminate();
    };
  }, [processedFileUrl]);

  const processFile = (actionMode: 'encrypt' | 'decrypt') => {
    if (!file || !password) {
      setError(actionMode === 'encrypt' ? t('components.fileEncryptor.errorFillFile') : t('components.fileEncryptor.errorFillEncryptedFile'));
      return;
    }
    setIsLoading(true);
    setError('');
    setProcessedFileUrl(null);

    const worker = new Worker(new URL('../../../workers/encryptor.worker.ts', import.meta.url), { type: 'module' });
    workerRef.current = worker;
    worker.postMessage({ file, password, mode: actionMode });

    worker.onmessage = (e) => {
      const { type, blob, fileName } = e.data;
      if (type === 'result') {
        setProcessedFileUrl(URL.createObjectURL(blob));
        setProcessedFileName(fileName);
      } else {
        setError(actionMode === 'encrypt' ? t('components.fileEncryptor.errorEncrypt') : t('components.fileEncryptor.errorDecrypt'));
      }
      setIsLoading(false);
      worker.terminate();
      workerRef.current = null;
    };

    worker.onerror = () => {
      setError(actionMode === 'encrypt' ? t('components.fileEncryptor.errorEncrypt') : t('components.fileEncryptor.errorDecrypt'));
      setIsLoading(false);
      worker.terminate();
      workerRef.current = null;
    };
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

  const getPasswordStrength = (pw: string) => {
    if (!pw) return 0;
    let strength = 0;
    if (pw.length >= 8) strength++;
    if (/[A-Z]/.test(pw)) strength++;
    if (/[0-9]/.test(pw)) strength++;
    if (/[^A-Za-z0-9]/.test(pw)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);

  const getStrengthColor = () => {
    if (passwordStrength <= 1) return 'bg-red-500';
    if (passwordStrength === 2) return 'bg-yellow-500';
    if (passwordStrength === 3) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getStrengthLabel = () => {
    if (passwordStrength <= 1) return t('components.fileEncryptor.strengthWeak');
    if (passwordStrength === 2) return t('components.fileEncryptor.strengthMedium');
    if (passwordStrength === 3) return t('components.fileEncryptor.strengthStrong');
    return t('components.fileEncryptor.strengthVeryStrong');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processFile(mode);
  };

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoading && <LoadingSpinner text={loadingText} />}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <fieldset className="flex space-x-4">
            <legend className="sr-only">{t('components.fileEncryptor.encrypt')} / {t('components.fileEncryptor.decrypt')}</legend>
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

        {password && mode === 'encrypt' && (
          <div className="mt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">{t('components.fileEncryptor.passwordStrength')}:</span>
              <span className={`text-xs font-bold ${getStrengthColor().replace('bg-', 'text-')}`}>
                {getStrengthLabel()}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div 
                className={`h-1.5 rounded-full transition-all duration-500 ${getStrengthColor()}`} 
                style={{ width: `${(passwordStrength / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
        
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
