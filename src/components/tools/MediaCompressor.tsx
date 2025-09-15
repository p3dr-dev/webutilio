import React, { useState, useCallback, useRef, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { useTranslations } from '../../i18n/utils';
import { useLoadingPhrases } from './useLoadingPhrases';

// Importa o worker diretamente do diretório public
const ffmpegWorker = new Worker('/ffmpeg.worker.js', { type: 'module' });

const MediaCompressor: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
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
  const loadingText = useLoadingPhrases(isLoading);
  const workerRef = useRef<Worker>(ffmpegWorker);
  const [ffmpegLogs, setFfmpegLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState<number | null>(null);
  const [estimatedSize, setEstimatedSize] = useState<number | null>(null);

  useEffect(() => {
    // This effect runs when the component unmounts or when the URLs change.
    return () => {
      if (originalUrl) {
        URL.revokeObjectURL(originalUrl);
      }
      if (compressedUrl) {
        URL.revokeObjectURL(compressedUrl);
      }
    };
  }, [originalUrl, compressedUrl]);

  useEffect(() => {
    const worker = workerRef.current;

    worker.onmessage = (event) => {
      const { type, data, progress, time, message: workerMessage, outputFileName } = event.data;

      switch (type) {
        case 'log':
          setFfmpegLogs((prev) => [...prev, workerMessage]);
          break;
        case 'progress':
          setProgress(progress);
          break;
        case 'result':
          const blob = new Blob([data], { type: 'video/mp4' }); // Ajuste o tipo MIME conforme necessário
          const url = URL.createObjectURL(blob);
          setCompressedUrl(url);
          setCompressedSize(blob.size);
          setIsLoading(false);
          break;
        case 'error':
          setError(workerMessage);
          setIsLoading(false);
          console.error('Worker error:', workerMessage);
          break;
        default:
          console.log('Message from worker:', event.data);
      }
    };

    worker.onerror = (error) => {
      console.error('Worker error event:', error);
      setError(t('components.mediaCompressor.errorWorker'));
      setIsLoading(false);
    };

    return () => {
      // worker.terminate(); // Opcional: terminar o worker quando o componente é desmontado
    };
  }, []);

  useEffect(() => {
    if (originalSize) {
      setEstimatedSize(originalSize * quality);
    } else {
      setEstimatedSize(null);
    }
  }, [quality, originalSize]);

  const handleFileSelect = (file: File | null) => {
    if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
      setOriginalFile(file);
      setOriginalUrl(URL.createObjectURL(file));
      setOriginalSize(file.size);
      setCompressedUrl('');
      setCompressedSize(null);
      setError('');
      setProgress(null);
    } else if (file) {
      setError(t('components.mediaCompressor.errorInvalidFile'));
      setOriginalFile(null);
      setOriginalUrl('');
      setOriginalSize(null);
      setProgress(null);
    } else {
      setOriginalFile(null);
      setOriginalUrl('');
      setOriginalSize(null);
      setError('');
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

  const compressImage = useCallback(() => {
    if (!originalFile) return;

    setIsLoading(true);
    setCompressedUrl('');
    setCompressedSize(null);
    setProgress(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setError(t('components.mediaCompressor.errorCanvas'));
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

  const compressVideo = useCallback(async () => {
    if (!originalFile) return;

    setIsLoading(true);
    setCompressedUrl('');
    setCompressedSize(null);
    setProgress(null);

    const inputFileName = originalFile.name;
    const outputFileName = `output-${originalFile.name.split('.').slice(0, -1).join('.')}.mp4`; // Exemplo: converter para mp4

    workerRef.current.postMessage({
      type: 'run',
      payload: {
        file: originalFile,
        fileName: inputFileName,
        outputFileName,
        args: [
          '-i', inputFileName,
          '-c:v', 'libx264',
          '-b:v', `${Math.floor(quality * 1000)}k`,
          '-bufsize', `${Math.floor(quality * 1000)}k`,
          '-preset', 'fast',
          '-c:a', 'aac', // Add audio codec
          '-b:a', '128k', // Add audio bitrate (common default)
          '-v', 'info', // Add verbose logging
          '-y', // Overwrite output files
          outputFileName
        ], // Exemplo: converter para mp4
      },
    });
  }, [originalFile, quality]);

  const compressMedia = useCallback(async () => {
    if (!originalFile) return;

    if (originalFile.type.startsWith('image/')) {
      compressImage();
    } else if (originalFile.type.startsWith('video/')) {
      compressVideo();
    } else {
      setError(t('components.mediaCompressor.errorInvalidFile'));
    }
  }, [originalFile, compressImage, compressVideo, t]);

  const formatBytes = (bytes: number | null) => {
    if (bytes === null) return '0 Bytes';
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const renderMedia = (url: string, isVideo: boolean) => {
    if (isVideo) {
      return <video src={url} controls className="mt-2 rounded-lg shadow-sm mx-auto max-h-80" />;
    } else {
      return <img src={url} alt="Media" className="mt-2 rounded-lg shadow-sm mx-auto max-h-80" />;
    }
  };

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoading && <LoadingSpinner text={loadingText} progress={progress} />}

      {isLoading && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-900 text-white text-xs max-h-24 overflow-y-auto rounded-b-lg">
          {ffmpegLogs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      )}

      <input
        type="file"
        accept="image/jpeg, image/png, image/webp, video/mp4, video/webm, video/ogg"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
        aria-label="Selecionar arquivo de mídia"
      />

      {!originalFile && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg transition-colors ${
            isDragging ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20' : 'border-gray-300 dark:border-gray-600'
          }`}
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">{t('components.mediaCompressor.dragAndDrop')}</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            className="w-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400 dark:disabled:bg-purple-800"
          >
            {t('components.mediaCompressor.selectImage')}
          </button>
        </div>
      )}

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {originalFile && (
        <div className={isLoading ? 'opacity-20' : ''}>
          <div className="mt-6">
            <div className="mb-4">
              <label htmlFor="quality" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('components.mediaCompressor.quality')}: {Math.round(quality * 100)}%
                {estimatedSize && (
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    (Estimado: {formatBytes(estimatedSize)})
                  </span>
                )}
              </label>
              <input
                type="range"
                id="quality"
                min="0.1"
                max="1"
                step="0.05"
                value={quality}
                onChange={(e) => setQuality(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600 dark:bg-gray-700"
                disabled={isLoading}
              />
            </div>

            <button
              onClick={compressMedia}
              disabled={isLoading}
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors disabled:bg-green-300 dark:disabled:bg-green-800"
            >
              {originalFile.type.startsWith('image/') ? t('components.mediaCompressor.compressButton') : t('components.mediaCompressor.compressVideoButton')}
            </button>

            <div className="grid md:grid-cols-2 gap-6 mt-6 text-center">
              <div>
                <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.mediaCompressor.original')}</h3>
                {originalUrl && renderMedia(originalUrl, originalFile.type.startsWith('video/'))}
                <p className="mt-2 font-medium text-gray-700 dark:text-gray-300">{formatBytes(originalSize)}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.mediaCompressor.compressed')}</h3>
                {compressedUrl ? (
                  <>
                    {renderMedia(compressedUrl, originalFile.type.startsWith('video/'))}
                    <p className="mt-2 font-bold text-green-600 dark:text-green-400">
                      {formatBytes(compressedSize)}
                      {originalSize && compressedSize && (
                        <span className="text-sm text-gray-500 ml-2 dark:text-gray-400">
                          ({(((originalSize - compressedSize) / originalSize) * 100).toFixed(0)}% {t('components.mediaCompressor.reduction')})
                        </span>
                      )}
                    </p>
                    <a
                      href={compressedUrl}
                      download={`${t('components.mediaCompressor.downloadPrefix')}-${originalFile.name}`}
                      className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300 dark:disabled:bg-blue-800"
                    >
                      {t('components.mediaCompressor.download')}
                    </a>
                  </>
                ) : (
                  <div className="mt-2 flex items-center justify-center h-80 bg-gray-100 rounded-lg dark:bg-gray-700">
                    <p className="text-gray-500 dark:text-gray-400">{t('components.mediaCompressor.waiting')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleFileSelect(null)}
            className="w-full mt-4 text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            {t('components.mediaCompressor.selectAnother')}
          </button>
        </div>
      )}
    </div>
  );
};

export default MediaCompressor;
