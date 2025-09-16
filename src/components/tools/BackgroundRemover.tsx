import React, { useState, useRef, useCallback, useEffect } from 'react';
import { removeBackground } from '@imgly/background-removal';
import LoadingSpinner from './LoadingSpinner';
import { useTranslations } from '../../i18n/utils';
import * as ort from 'onnxruntime-web';
import { useLoadingPhrases } from './useLoadingPhrases';

// Configure o caminho do WASM uma vez fora do componente
ort.env.wasm.wasmPath = '/models/';

const BackgroundRemover: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const phrases = t('components.backgroundRemover.loadingPhrases') as string[];
  const loadingText = useLoadingPhrases(isLoading, phrases);

  useEffect(() => {
    // This effect runs when the component unmounts or when processedUrl changes.
    return () => {
      if (processedUrl) {
        URL.revokeObjectURL(processedUrl);
      }
    };
  }, [processedUrl]);

  const processImage = useCallback(async (file: File) => {
    if (!file) return;

    setIsLoading(true);
    setProcessedUrl(null);
    setError(null);
    
    const reader = new FileReader();
    reader.onloadend = async () => {
      setOriginalUrl(reader.result as string);
      try {
        const resultBlob = await removeBackground(file, {
          onProgress: (progress) => {
            setProgress(progress.value / progress.total);
          },
        });
        if (resultBlob) {
          setProcessedUrl(URL.createObjectURL(resultBlob));
        } else {
          setError(t('components.backgroundRemover.errorProcessing'));
        }
      } catch (err: any) {
        console.error(err); // Log do erro para depuração
        setError(`${t('components.backgroundRemover.errorProcessing')}: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    reader.readAsDataURL(file);
  }, [t, setProgress]);

  const handleFileSelect = (file: File | null) => {
    if (file && file.type.startsWith('image/')) {
      setOriginalFile(file);
      setProgress(null);
      processImage(file);
    } else {
      setError(t('components.backgroundRemover.errorInvalidFile'));
      setOriginalFile(null);
      setOriginalUrl(null);
      setProcessedUrl(null);
      setProgress(null);
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
  
  const getDownloadName = () => {
    const suffix = t('components.backgroundRemover.downloadName');
    if (originalFile) {
      const nameWithoutExt = originalFile.name.substring(0, originalFile.name.lastIndexOf('.'));
      return `${nameWithoutExt}-${suffix}.png`;
    }
    return `image-${suffix}.png`;
  }

  const resetState = () => {
    setOriginalFile(null);
    setOriginalUrl(null);
    setProcessedUrl(null);
    setError(null);
    setProgress(null);
  }

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoading && <LoadingSpinner text={loadingText} progress={progress} />}

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
        disabled={isLoading}
      />

      {!originalFile && (
         <div 
          onDrop={handleDrop} 
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg transition-colors ${isDragging ? 'border-purple-600 bg-purple-50 dark:bg-gray-700' : 'border-gray-300 dark:border-gray-600'}`}>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{t('components.backgroundRemover.dragAndDrop')}</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            className="w-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400 dark:disabled:bg-purple-800"
          >
            {t('components.backgroundRemover.selectImage')}
          </button>
        </div>
      )}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      
      {originalFile && (
        <div className={`mt-6 text-center ${isLoading ? 'opacity-20' : ''}`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.backgroundRemover.original')}</h3>
                <div className="mt-2 flex items-center justify-center h-80 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                  {originalUrl && <img src={originalUrl} alt="Original" className="max-h-full max-w-full" />}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.backgroundRemover.result')}</h3>
                <div className="mt-2 flex items-center justify-center h-80 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Crect width=\'10\' height=\'10\' fill=\'%23eee\'/%3E%3Crect x=\'10\' y=\'10\' width=\'10\' height=\'10\' fill=\'%23eee\'/%3E%3C/svg%3E")'}}>
                  {processedUrl ? <img src={processedUrl} alt={t('components.backgroundRemover.altResult')} className="max-h-full max-w-full" /> : <p className="text-gray-500 dark:text-gray-400">{t('components.backgroundRemover.resultHere')}</p>}
                </div>
                {processedUrl && (
                  <a
                    href={processedUrl}
                    download={getDownloadName()}
                    className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    {t('components.backgroundRemover.download')}
                  </a>
                )}
              </div>
          </div>
          <button onClick={resetState} className="w-full mt-4 text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">{t('components.backgroundRemover.selectAnother')}</button>
        </div>
      )}
    </div>
  );
};

export default BackgroundRemover;

