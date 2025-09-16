export type ToolCategory = 'images' | 'files' | 'text' | 'converters' | 'media';

export type Language = 'pt' | 'en';

export interface Tool {
  id: string; // Unique, language-agnostic identifier
  category: ToolCategory;
  title: Record<Language, string>;
  description: Record<Language, string>;
  slugs: Record<Language, string>;
  icon: string;
}

export const tools: Tool[] = [
  {
    id: 'background-remover',
    category: 'images',
    title: {
      pt: 'Removedor de Fundo Online e Grátis',
      en: 'Online Background Remover Free',
    },
    description: {
      pt: 'Remova o fundo de imagens com um clique, usando IA. Ferramenta online gratuita para remover fundo de fotos rapidamente e sem perder qualidade.',
      en: 'Remove the background from images with a single click, using AI. Free online tool to remove photo backgrounds quickly without losing quality.',
    },
    slugs: {
      pt: 'remover-fundo',
      en: 'background-remover',
    },
    icon: '🖼️',
  },
  {
    id: 'file-decompressor',
    category: 'files',
    title: {
      pt: 'Descompactador de Arquivos ZIP Online',
      en: 'Online ZIP File Decompressor',
    },
    description: {
      pt: 'Extraia arquivos de um arquivo .zip diretamente no navegador. Descompacte ZIP online de forma segura e gratuita, sem instalar software.',
      en: 'Extract files from a .zip archive directly in the browser. Unzip files online securely and for free, no software installation required.',
    },
    slugs: {
      pt: 'descompactar-arquivo',
      en: 'file-decompressor',
    },
    icon: '📦',
  },
  {
    id: 'media-compressor',
    category: 'media',
    title: {
      pt: 'Compressor de Mídia Online Grátis',
      en: 'Free Online Media Compressor',
    },
    description: {
      pt: 'Reduza o tamanho de suas imagens e vídeos JPG, PNG, WEBP, MP4, WebM sem perder qualidade. Comprima mídia online gratuitamente.',
      en: 'Reduce the size of your images (JPG, PNG, WEBP) and videos (MP4, WebM, OGG) without losing quality. Compress media online for free.',
    },
    slugs: {
      pt: 'comprimir-midia',
      en: 'media-compressor',
    },
    icon: '🗜️',
  },
  {
    id: 'file-encryptor',
    category: 'files',
    title: {
      pt: 'Criptografia de Arquivos AES Online',
      en: 'Online AES File Encryption',
    },
    description: {
      pt: 'Criptografe e descriptografe arquivos usando o algoritmo AES. Ferramenta segura online para proteger seus arquivos com senha.',
      en: 'Encrypt and decrypt files using the AES algorithm. Secure online tool to protect your files with a password.',
    },
    slugs: {
      pt: 'criptografar-arquivo',
      en: 'file-encryptor',
    },
    icon: '🔒',
  },
  {
    id: 'hash-generator',
    category: 'text',
    title: {
      pt: 'Gerador de Hash SHA-256 Online',
      en: 'Online SHA-256 Hash Generator',
    },
    description: {
      pt: 'Gere hashes SHA-256 para qualquer texto ou arquivo. Verifique integridade de arquivos online gratuitamente.',
      en: 'Generate SHA-256 hashes for any text or file. Check file integrity online for free.',
    },
    slugs: {
      pt: 'gerador-hash',
      en: 'hash-generator',
    },
    icon: '🔢',
  },
  {
    id: 'file-compressor',
    category: 'files',
    title: {
      pt: 'Compressor de Arquivos ZIP Online',
      en: 'Online ZIP File Compressor',
    },
    description: {
      pt: 'Crie arquivos ZIP a partir de múltiplos arquivos de forma fácil. Comprima arquivos online gratuitamente no navegador.',
      en: 'Create ZIP archives from multiple files easily. Compress files online for free in the browser.',
    },
    slugs: {
      pt: 'comprimir-arquivo',
      en: 'file-compressor',
    },
    icon: '📁',
  },
  {
    id: 'word-counter',
    category: 'text',
    title: {
      pt: 'Contador de Palavras Online Grátis',
      en: 'Free Online Word Counter',
    },
    description: {
      pt: 'Conte palavras, caracteres, sentenças e parágrafos em um texto. Ferramenta online para análise de texto rápida e gratuita.',
      en: 'Count words, characters, sentences, and paragraphs in a text. Fast and free online text analysis tool.',
    },
    slugs: {
      pt: 'contador-palavras',
      en: 'word-counter',
    },
    icon: '📝',
  },
  {
    id: 'file-converter',
    category: 'converters',
    title: {
      pt: 'Conversor de Arquivos Online',
      en: 'Online File Converter',
    },
    description: {
      pt: 'Converta arquivos de um formato para outro. Começando com imagens. Ferramenta gratuita online para conversão de arquivos.',
      en: 'Convert files from one format to another. Starting with images. Free online file conversion tool.',
    },
    slugs: {
      pt: 'conversor-arquivos',
      en: 'file-converter',
    },
    icon: '🔄',
  },
  {
    id: 'image-resizer',
    category: 'images',
    title: {
      pt: 'Redimensionador de Imagens Online',
      en: 'Online Image Resizer',
    },
    description: {
      pt: 'Altere as dimensões (largura e altura) de uma imagem. Redimensione fotos online gratuitamente sem perder qualidade.',
      en: 'Change the dimensions (width and height) of an image. Resize photos online for free without losing quality.',
    },
    slugs: {
      pt: 'redimensionar-imagem',
      en: 'image-resizer',
    },
    icon: '📏',
  },
];