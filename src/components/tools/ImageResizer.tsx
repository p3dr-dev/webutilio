import React, { useState, useRef, useCallback } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { useTranslations } from '../../i18n/utils';

const ImageResizer: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [resizedImageUrl, setResizedImageUrl] = useState<string | null>(null);
  const [width, setWidth] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setOriginalImage(file);
      setOriginalImageUrl(URL.createObjectURL(file));
      setResizedImageUrl(null);
      setError(null);
      // Reset dimensions
      setWidth('');
      setHeight('');

      // Read image to get original dimensions
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setWidth(img.width);
          setHeight(img.height);
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);

    } else {
      setError(t('components.imageResizer.errorInvalidFile'));
      setOriginalImage(null);
      setOriginalImageUrl(null);
    }
  };

  const resizeImage = useCallback(() => {
    if (!originalImage || width === '' || height === '') {
      setError(t('components.imageResizer.errorDimensions'));
      return;
    }

    setIsLoading(true);
    setResizedImageUrl(null);
    setError(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width as number;
        canvas.height = height as number;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          setError(t('components.imageResizer.errorCanvas'));
          setIsLoading(false);
          return;
        }

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (blob) {
            setResizedImageUrl(URL.createObjectURL(blob));
          }
          setIsLoading(false);
        }, originalImage.type);
      };
      img.onerror = () => {
        setError(t('components.imageResizer.errorLoadingImage'));
        setIsLoading(false);
      };
      img.src = event.target?.result as string;
    };
    reader.onerror = () => {
      setError(t('components.imageResizer.errorReadingFile'));
      setIsLoading(false);
    };
    reader.readAsDataURL(originalImage);
  }, [originalImage, width, height, t]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    // setIsDragging(false); // Assuming this state is managed by parent or another handler
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleFileChange({ target: { files: [file] } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    // setIsDragging(true); // Assuming this state is managed by parent or another handler
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    // setIsDragging(false); // Assuming this state is managed by parent or another handler
  };

  const getOutputFileName = () => {
    if (!originalImage) return 'resized_image';
    const name = originalImage.name.substring(0, originalImage.name.lastIndexOf('.'));
    const extension = originalImage.name.substring(originalImage.name.lastIndexOf('.') + 1);
    return `${name}_resized.${extension}`;
  };

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoading && <LoadingSpinner text={t('components.imageResizer.resizing')} />}

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
      />

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg transition-colors border-gray-300 dark:border-gray-600"
      >
        <p className="text-gray-500 dark:text-gray-400 mb-4">{t('components.imageResizer.dragAndDrop')}</p>
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
          className="w-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400 dark:disabled:bg-purple-800"
        >
          {t('components.imageResizer.selectImage')}
        </button>
      </div>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {originalImage && (
        <div className={`mt-6 ${isLoading ? 'opacity-20' : ''}`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.imageResizer.original')}</h3>
              <img src={originalImageUrl || ''} alt="Original" className="mt-2 rounded-lg shadow-sm mx-auto max-h-60" />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{originalImage.name}</p>
            </div>

            {isLoading ? (
              <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin my-8"></div>
            ) : (
              <p className="text-3xl font-light text-gray-400">→</p>
            )}

            <div className="text-center">
              <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.imageResizer.resized')}</h3>
              {resizedImageUrl ? (
                <img src={resizedImageUrl} alt="Redimensionada" className="mt-2 rounded-lg shadow-sm mx-auto max-h-60" />
              ) : (
                <div className="mt-2 flex items-center justify-center h-60 w-80 bg-gray-100 rounded-lg dark:bg-gray-700">
                  <p className="text-gray-500 dark:text-gray-400">{t('components.imageResizer.waiting')}</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <label htmlFor="width-input" className="font-medium text-gray-700 dark:text-gray-300">{t('components.imageResizer.width')}:</label>
            <input
              id="width-input"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value === '' ? '' : Number(e.target.value))}
              className="flex-grow p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              placeholder="Largura"
              min="1"
            />
            <label htmlFor="height-input" className="font-medium text-gray-700 dark:text-gray-300">{t('components.imageResizer.height')}:</label>
            <input
              id="height-input"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))}
              className="flex-grow p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              placeholder="Altura"
              min="1"
            />
            <button
              onClick={resizeImage}
              disabled={isLoading || width === '' || height === '' || Number(width) <= 0 || Number(height) <= 0}
              className="w-full sm:w-auto bg-green-500 text-white font-bold py-2 px-6 rounded-md hover:bg-green-600 transition-colors disabled:bg-green-300 dark:disabled:bg-green-800"
            >
              {t('components.imageResizer.resizeButton')}
            </button>
          </div>

          {resizedImageUrl && (
            <div className="text-center mt-6">
              <a
                href={resizedImageUrl}
                download={getOutputFileName()}
                className="inline-block bg-blue-500 text-white font-bold py-2 px-8 rounded-md hover:bg-blue-600 transition-colors"
              >
                {t('components.imageResizer.download')}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageResizer;
