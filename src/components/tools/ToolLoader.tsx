import React, { Suspense, lazy } from 'react';
import { ToastProvider } from '../Toast';
import { useTranslations } from '../../i18n/utils';

interface ToolLoaderProps {
  toolId: string;
  lang: 'pt' | 'en';
}

// Mapeia o ID da ferramenta (que é neutro em relação ao idioma) para o componente React correspondente.
const toolComponentMap: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  'word-counter': lazy(() => import('./WordCounter')),
  'hash-generator': lazy(() => import('./HashGenerator')),
  'media-compressor': lazy(() => import('./MediaCompressor')),
  'file-encryptor': lazy(() => import('./FileEncryptor')),
  'file-converter': lazy(() => import('./FileConverter')),
  'file-compressor': lazy(() => import('./FileCompressor')),
  'file-decompressor': lazy(() => import('./FileDecompressor')),
  'background-remover': lazy(() => import('./BackgroundRemover')),
  'image-resizer': lazy(() => import('./ImageResizer')),
  'json-formatter': lazy(() => import('./JsonFormatter')),
  'qr-generator': lazy(() => import('./QrGenerator')),
  'exif-extractor': lazy(() => import('./ExifExtractor')),
};

// Componente de fallback para o Suspense
const LoadingFallback: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  return (
    <div className="flex flex-col justify-center items-center p-10 min-h-[400px] bg-white dark:bg-gray-800 rounded-lg shadow-inner">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-purple-200 dark:border-purple-900 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-purple-600 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-500 dark:text-gray-400 font-medium animate-pulse">{t('components.loading.message')}</p>
    </div>
  );
};


const ToolLoader: React.FC<ToolLoaderProps> = ({ toolId, lang }) => {
  const Component = toolComponentMap[toolId];
  const t = useTranslations(lang);

  if (!Component) {
    return (
      <div className="text-center bg-red-100 text-red-700 p-4 rounded-lg dark:bg-red-900 dark:text-red-200">
        <p>{t('components.loading.error').replace('{id}', toolId)}</p>
      </div>
    );
  }

  return (
    <ToastProvider>
      <Suspense fallback={<LoadingFallback lang={lang} />}>
        <Component lang={lang} />
      </Suspense>
    </ToastProvider>
  );
};

export default ToolLoader;
