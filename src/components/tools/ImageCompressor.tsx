import React, { useState, useCallback, useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { useTranslations } from '../../i18n/utils';

const ImageCompressor: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [compressedUrl, setCompressedUrl] = useState<string>('');
  const [quality, setQuality] = useState(0.7);
  const [originalSize, setOriginalSize] = useState<number | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File | null) => {
    if (file && file.type.startsWith('image/')) {
      setOriginalFile(file);
      setOriginalUrl(URL.createObjectURL(file));
      setOriginalSize(file.size);
      setCompressedUrl('');
      setCompressedSize(null);
      setError('');
    } else if (file) { // if a file is selected but it is not an image
      setError(t('components.imageCompressor.errorInvalidFile'));
      setOriginalFile(null);
      setOriginalUrl('');
      setOriginalSize(null);
    } else { // if the file selection is cancelled
        setOriginalFile(null);
        setOriginalUrl('');
        setOriginalSize(null);
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

  const compressImage = useCallback(() => {
    if (!originalFile) return;

    setIsLoading(true);
    setCompressedUrl('');
    setCompressedSize(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setError(t('components.imageCompressor.errorCanvas'));
          setIsLoading(false);
          return;
        }
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              setCompressedUrl(URL.createObjectURL(blob));
              setCompressedSize(blob.size);
            }
            setIsLoading(false);
          },
          'image/jpeg',
          quality
        );
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(originalFile);
  }, [originalFile, quality, t]);

  const formatBytes = (bytes: number | null) => {
    if (bytes === null) return '0 Bytes';
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoading && <LoadingSpinner text={t('components.imageCompressor.compressing')} />}
      
      <input
        type="file"
        accept="image/jpeg, image/png, image/webp"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
      />

      {!originalFile && (
        <div 
          onDrop={handleDrop} 
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg transition-colors ${isDragging ? 'border-purple-600 bg-purple-50 dark:bg-gray-700' : 'border-gray-300 dark:border-gray-600'}`}>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{t('components.imageCompressor.dragAndDrop')}</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            className="w-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400 dark:disabled:bg-purple-800"
          >
            {t('components.imageCompressor.selectImage')}
          </button>
        </div>
      )}

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {originalFile && (
        <div className={isLoading ? 'opacity-20' : ''}>
          <div className="mt-6">
            <div className="mb-4">
              <label htmlFor="quality" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('components.imageCompressor.quality')}: {Math.round(quality * 100)}%
              </label>
              <input
                type="range"
                id="quality"
                min="0.1"
                max="1"
                step="0.05"
                value={quality}
                onChange={(e) => setQuality(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                disabled={isLoading}
              />
            </div>

            <button
              onClick={compressImage}
              disabled={isLoading}
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors disabled:bg-green-300 dark:disabled:bg-green-800"
            >
              {t('components.imageCompressor.compressButton')}
            </button>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6 text-center">
              <div>
                <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.imageCompressor.original')}</h3>
                {originalUrl && <img src={originalUrl} alt="Original" className="mt-2 rounded-lg shadow-sm mx-auto max-h-80" />}
                <p className="mt-2 font-medium text-gray-700 dark:text-gray-300">{formatBytes(originalSize)}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.imageCompressor.compressed')}</h3>
                {compressedUrl ? (
                  <>
                    <img src={compressedUrl} alt="Comprimida" className="mt-2 rounded-lg shadow-sm mx-auto max-h-80" />
                    <p className="mt-2 font-bold text-green-600 dark:text-green-400">
                      {formatBytes(compressedSize)}
                      {originalSize && compressedSize && (
                        <span className="text-sm text-gray-500 ml-2 dark:text-gray-400">
                          ({(((originalSize - compressedSize) / originalSize) * 100).toFixed(0)}% {t('components.imageCompressor.reduction')})
                        </span>
                      )}
                    </p>
                    <a
                        href={compressedUrl}
                        download={`${t('components.imageCompressor.downloadPrefix')}-${originalFile.name}`}
                        className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300 dark:disabled:bg-blue-800"
                      >
                        {t('components.imageCompressor.download')}
                      </a>
                  </>
                ) : (
                  <div className="mt-2 flex items-center justify-center h-80 bg-gray-100 rounded-lg dark:bg-gray-700">
                    <p className="text-gray-500 dark:text-gray-400">{t('components.imageCompressor.waiting')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
           <button onClick={() => handleFileSelect(null)} className="w-full mt-4 text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">{t('components.imageCompressor.selectAnother')}</button>
        </div>
      )}
    </div>
  );
};

export default ImageCompressor;
