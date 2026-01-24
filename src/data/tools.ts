export type ToolCategory = 'images' | 'files' | 'text' | 'converters' | 'media';

export type Language = 'pt' | 'en';

export interface Tool {
  id: string;
  category: ToolCategory;
  slugs: Record<Language, string>;
  icon: string;
  keywords: string[]; // New SEO field
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
    keywords: ['remove background', 'transparent png', 'remover fundo', 'fundo transparente', 'ai', 'ia'],
  },
  {
    id: 'file-decompressor',
    category: 'files',
    slugs: {
      pt: 'descompactar-arquivo',
      en: 'file-decompressor',
    },
    icon: '📦',
    keywords: ['unzip', 'untar', 'descompactar', 'extrair', 'zip extractor', 'tar extractor'],
  },
  {
    id: 'media-compressor',
    category: 'media',
    slugs: {
      pt: 'comprimir-midia',
      en: 'media-compressor',
    },
    icon: '🗜️',
    keywords: ['compress video', 'compress image', 'comprimir video', 'comprimir imagem', 'ffmpeg', 'reduce size'],
  },
  {
    id: 'file-encryptor',
    category: 'files',
    slugs: {
      pt: 'criptografar-arquivo',
      en: 'file-encryptor',
    },
    icon: '🔒',
    keywords: ['encrypt file', 'decrypt file', 'criptografar', 'descriptografar', 'aes-256', 'security'],
  },
  {
    id: 'hash-generator',
    category: 'text',
    slugs: {
      pt: 'gerador-hash',
      en: 'hash-generator',
    },
    icon: '🔢',
    keywords: ['sha-256', 'hash generator', 'checksum', 'verificar arquivo', 'verify file'],
  },
  {
    id: 'file-compressor',
    category: 'files',
    slugs: {
      pt: 'comprimir-arquivo',
      en: 'file-compressor',
    },
    icon: '📁',
    keywords: ['create zip', 'compress files', 'criar zip', 'comprimir arquivos', 'zip maker'],
  },
  {
    id: 'word-counter',
    category: 'text',
    slugs: {
      pt: 'contador-palavras',
      en: 'word-counter',
    },
    icon: '📝',
    keywords: ['word counter', 'character counter', 'contador de palavras', 'contador de caracteres', 'stats'],
  },
  {
    id: 'file-converter',
    category: 'converters',
    slugs: {
      pt: 'conversor-arquivos',
      en: 'file-converter',
    },
    icon: '🔄',
    keywords: ['convert image', 'convert pdf', 'converter imagem', 'converter pdf', 'json to csv', 'format conversion'],
  },
  {
    id: 'image-resizer',
    category: 'images',
    slugs: {
      pt: 'redimensionar-imagem',
      en: 'image-resizer',
    },
    icon: '📏',
    keywords: ['resize image', 'redimensionar imagem', 'change resolution', 'mudar resolução', 'pixels'],
  },
  {
    id: 'json-formatter',
    category: 'text',
    slugs: {
      pt: 'formatador-json',
      en: 'json-formatter',
    },
    icon: '{}',
    keywords: ['json formatter', 'json validator', 'json beautifier', 'formatar json', 'validar json'],
  },
  {
    id: 'qr-generator',
    category: 'converters',
    slugs: {
      pt: 'gerador-qrcode',
      en: 'qr-generator',
    },
    icon: '📱',
    keywords: ['qr code generator', 'create qr code', 'gerador qr code', 'criar qr code', 'qrcode'],
  },
  {
    id: 'exif-extractor',
    category: 'images',
    slugs: {
      pt: 'extrator-exif',
      en: 'exif-extractor',
    },
    icon: 'ℹ️',
    keywords: ['exif reader', 'read metadata', 'ler metadados', 'gps photos', 'camera info'],
  },
];