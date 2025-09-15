import React, { Suspense, lazy } from 'react';

interface ToolLoaderProps {
  slug: string;
  lang: 'pt' | 'en';
}

// O seu mapa de componentes está perfeito!
const toolComponentMap: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  'contador-palavras': lazy(() => import('./ContadorPalavras')),
  'gerador-hash': lazy(() => import('./GeradorHash')),
  'comprimir-midia': lazy(() => import('./MediaCompressor')),
  'criptografar-arquivo': lazy(() => import('./FileEncryptor')),
  'conversor-arquivos': lazy(() => import('./FileConverter')),
  'comprimir-arquivo': lazy(() => import('./FileCompressor')),
  'descompactar-arquivo': lazy(() => import('./FileDecompressor')),
  'remover-fundo': lazy(() => import('./BackgroundRemover')),
  'redimensionar-imagem': lazy(() => import('./ImageResizer')),
};

// Componente de fallback para o Suspense
const LoadingFallback = () => (
  <div className="flex justify-center items-center p-10 min-h-[400px]">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
);


const ToolLoader: React.FC<ToolLoaderProps> = ({ slug, lang }) => {
  const Component = toolComponentMap[slug];

  if (!Component) {
    return (
      <div className="text-center bg-red-100 text-red-700 p-4 rounded-lg dark:bg-red-900 dark:text-red-200">
        <p>A ferramenta para "{slug}" ainda não foi implementada.</p>
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
