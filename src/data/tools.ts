export type ToolCategory = 'images' | 'files' | 'text' | 'converters' | 'media';

export type Language = 'pt' | 'en';

export interface Tool {
  id: string; // Unique, language-agnostic identifier
  category: ToolCategory;
  slugs: Record<Language, string>;
  icon: string;
}

export const tools: Tool[] = [
  {
    id: 'background-remover',
    category: 'images',
    slugs: {
      pt: 'remover-fundo',
      en: 'background-remover',
    },
    icon: '🖼️',
  },
  {
    id: 'file-decompressor',
    category: 'files',
    slugs: {
      pt: 'descompactar-arquivo',
      en: 'file-decompressor',
    },
    icon: '📦',
  },
  {
    id: 'media-compressor',
    category: 'media',
    slugs: {
      pt: 'comprimir-midia',
      en: 'media-compressor',
    },
    icon: '🗜️',
  },
  {
    id: 'file-encryptor',
    category: 'files',
    slugs: {
      pt: 'criptografar-arquivo',
      en: 'file-encryptor',
    },
    icon: '🔒',
  },
  {
    id: 'hash-generator',
    category: 'text',
    slugs: {
      pt: 'gerador-hash',
      en: 'hash-generator',
    },
    icon: '🔢',
  },
  {
    id: 'file-compressor',
    category: 'files',
    slugs: {
      pt: 'comprimir-arquivo',
      en: 'file-compressor',
    },
    icon: '📁',
  },
  {
    id: 'word-counter',
    category: 'text',
    slugs: {
      pt: 'contador-palavras',
      en: 'word-counter',
    },
    icon: '📝',
  },
  {
    id: 'file-converter',
    category: 'converters',
    slugs: {
      pt: 'conversor-arquivos',
      en: 'file-converter',
    },
    icon: '🔄',
  },
  {
    id: 'image-resizer',
    category: 'images',
    slugs: {
      pt: 'redimensionar-imagem',
      en: 'image-resizer',
    },
    icon: '📏',
  },
  {
    id: 'json-formatter',
    category: 'text',
    slugs: {
      pt: 'formatador-json',
      en: 'json-formatter',
    },
    icon: '{}',
  },
  {
    id: 'qr-generator',
    category: 'converters',
    slugs: {
      pt: 'gerador-qrcode',
      en: 'qr-generator',
    },
    icon: '📱',
  },
  {
    id: 'exif-extractor',
    category: 'images',
    slugs: {
      pt: 'extrator-exif',
      en: 'exif-extractor',
    },
    icon: 'ℹ️',
  },
];