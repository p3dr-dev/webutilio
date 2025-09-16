import React, { Suspense, lazy } from 'react';

interface ToolLoaderProps {
  toolId: string;
  lang: 'pt' | 'en';
}

// Mapeia o ID da ferramenta (que é neutro em relação ao idioma) para o componente React correspondente.
const toolComponentMap: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  'word-counter': lazy(() => import('./ContadorPalavras')),
  'hash-generator': lazy(() => import('./GeradorHash')),
  'media-compressor': lazy(() => import('./MediaCompressor')),
  'file-encryptor': lazy(() => import('./FileEncryptor')),
  'file-converter': lazy(() => import('./FileConverter')),
  'file-compressor': lazy(() => import('./FileCompressor')),
  'file-decompressor': lazy(() => import('./FileDecompressor')),
  'background-remover': lazy(() => import('./BackgroundRemover')),
  'image-resizer': lazy(() => import('./ImageResizer')),
};

// Componente de fallback para o Suspense
const LoadingFallback = () => (
  <div className="flex justify-center items-center p-10 min-h-[400px]">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
);


const ToolLoader: React.FC<ToolLoaderProps> = ({ toolId, lang }) => {
  const Component = toolComponentMap[toolId];

  if (!Component) {
    return (
      <div className="text-center bg-red-100 text-red-700 p-4 rounded-lg dark:bg-red-900 dark:text-red-200">
        {/* Esta mensagem agora é genérica ou pode ser traduzida se necessário */}
        <p>Error: Tool with ID "{toolId}" could not be found or is not implemented.</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Component lang={lang} />
    </Suspense>
  );
};

export default ToolLoader;
