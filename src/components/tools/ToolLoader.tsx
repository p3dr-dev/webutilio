import React, { Suspense, lazy, Component, type ReactNode } from 'react';
import { useTranslations } from '../../i18n/utils';
import { ToastProvider } from '../Toast';

interface ToolLoaderProps {
  toolId: string;
  lang: 'pt' | 'en';
}

class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Mapeia o ID da ferramenta (que é neutro em relação ao idioma) para o componente React correspondente.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toolComponentMap: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  'word-counter': lazy(() => import('./text/WordCounter')),
  'hash-generator': lazy(() => import('./text/HashGenerator')),
  'media-compressor': lazy(() => import('./media/MediaCompressor')),
  'file-encryptor': lazy(() => import('./files/FileEncryptor')),
  'file-converter': lazy(() => import('./converters/FileConverter')),
  'file-compressor': lazy(() => import('./files/FileCompressor')),
  'file-decompressor': lazy(() => import('./files/FileDecompressor')),
  'background-remover': lazy(() => import('./images/BackgroundRemover')),
  'image-resizer': lazy(() => import('./images/ImageResizer')),
  'json-formatter': lazy(() => import('./text/JsonFormatter')),
  'qr-generator': lazy(() => import('./converters/QrGenerator')),
  'exif-extractor': lazy(() => import('./images/ExifExtractor')),
};

// Componente de fallback para o Suspense
const LoadingFallback: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  return (
    <div className="flex flex-col justify-center items-center p-10 min-h-[600px] w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
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
      <ErrorBoundary fallback={
        <div className="text-center bg-red-100 text-red-700 p-4 rounded-lg dark:bg-red-900 dark:text-red-200">
          <p>{t('components.loading.fallbackError')}</p>
        </div>
      }>
        <Suspense fallback={<LoadingFallback lang={lang} />}>
          <Component lang={lang} />
        </Suspense>
      </ErrorBoundary>
    </ToastProvider>
  );
};

export default ToolLoader;
