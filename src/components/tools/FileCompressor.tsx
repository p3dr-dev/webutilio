import React, { useState, useRef, useCallback, useEffect } from 'react';
import JSZip from 'jszip';
import LoadingSpinner from './LoadingSpinner';
import { useTranslations } from '../../i18n/utils';
import { useLoadingPhrases } from './useLoadingPhrases';

const FileCompressor: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [files, setFiles] = useState<File[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [processedSize, setProcessedSize] = useState<number | null>(null);
  const [outputFileName, setOutputFileName] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const loadingText = useLoadingPhrases(isLoading);

  useEffect(() => {
    // This effect runs when the component unmounts or when processedUrl changes.
    return () => {
      if (processedUrl) {
        URL.revokeObjectURL(processedUrl);
      }
    };
  }, [processedUrl]);

  

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (selectedFiles && selectedFiles.length > 0) {
      setFiles(prevFiles => [...prevFiles, ...Array.from(selectedFiles)]);
      setProcessedUrl(null);
      setProcessedSize(null);
      setError('');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(event.target.files);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    handleFileSelect(event.dataTransfer.files);
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

  const formatBytes = (bytes: number | null) => {
    if (bytes === null) return '0 Bytes';
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const compressFiles = async () => {
    if (!files || files.length === 0) {
      setError(t('components.fileCompressor.errorNoFiles'));
      return;
    }

    setIsLoading(true);
    setError('');
    setProcessedUrl(null);
    setProcessedSize(null);

    try {
      let outputBlob: Blob;

      const zip = new JSZip();
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        zip.file(file.name, file);
      }

      outputBlob = await zip.generateAsync(
        {
          type: 'blob',
          compression: 'DEFLATE',
          compressionOptions: {
            level: 9,
          },
        },
        (metadata) => {
          setProgress(metadata.percent / 100);
        }
      );
      setOutputFileName('compressed.zip');

      setProcessedUrl(URL.createObjectURL(outputBlob!));
      setProcessedSize(outputBlob!.size);

    } catch (err: any) {
      setError(`${t('components.fileCompressor.errorCompressing')} ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const resetState = () => {
    setFiles([]);
    setProcessedUrl(null);
    setProcessedSize(null);
    setOutputFileName('');
    setError('');
    setProgress(null);
  }

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoading && <LoadingSpinner text={loadingText} progress={progress} />}

      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
      />

      <div 
        onDrop={handleDrop} 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg transition-colors ${isDragging ? 'border-purple-600 bg-purple-50 dark:bg-gray-700' : 'border-gray-300 dark:border-gray-600'}`}>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{t('components.fileCompressor.dragAndDrop')}</p>
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
          className="w-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400 dark:disabled:bg-purple-800"
        >
          {t('components.fileCompressor.selectFiles')}
        </button>
      </div>

      

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {files.length > 0 && (
        <div className={`mt-6 text-center ${isLoading ? 'opacity-20' : ''}`}> 
          <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.fileCompressor.selectedFilesTitle')}</h3>
          <ul className="text-left list-disc list-inside bg-gray-50 dark:bg-gray-700 p-4 rounded-md my-4 max-h-48 overflow-y-auto">
            {files.map((file, index) => (
              <li key={index} className="text-sm text-gray-700 dark:text-gray-300 truncate">
                {file.name} ({formatBytes(file.size)})
              </li>
            ))}
          </ul>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={compressFiles}
              disabled={isLoading}
              className="w-auto bg-green-500 text-white font-bold py-2 px-6 rounded-md hover:bg-green-600 transition-colors disabled:bg-green-300 dark:disabled:bg-green-800"
            >
              {t('components.fileCompressor.compressButton')}
            </button>
            <button onClick={resetState} className="w-auto bg-gray-500 text-white font-bold py-2 px-6 rounded-md hover:bg-gray-600 transition-colors">
              {t('components.fileCompressor.clear')}
            </button>
          </div>
          
          {processedUrl && (
            <div className="mt-6">
              <p className="text-lg font-semibold dark:text-gray-200">{t('components.fileCompressor.compressedFileReadyTitle')}</p>
              <p className="font-bold text-green-600 dark:text-green-400">{formatBytes(processedSize)}</p>
              <a
                href={processedUrl}
                download={outputFileName}
                className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-8 rounded-md hover:bg-blue-600 transition-colors"
              >
                {t('components.fileCompressor.download')}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileCompressor;