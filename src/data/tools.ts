export type ToolCategory = 'images' | 'files' | 'text' | 'converters' | 'media' | 'generators';

export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de' | 'es' | 'fr' | 'de';

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
      es: 'remover-fondo',
      fr: 'supprimer-arriere-plan',
      de: 'hintergrund-entfernen',
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
      es: 'descomprimir-archivo',
      fr: 'decompresser-fichier',
      de: 'datei-dekomprimieren',
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
      es: 'comprimir-multimedia',
      fr: 'compresser-media',
      de: 'medien-komprimieren',
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
      es: 'cifrar-archivo',
      fr: 'chiffrer-fichier',
      de: 'datei-verschluesseln',
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
      es: 'generador-hash',
      fr: 'generateur-hash',
      de: 'hash-generator',
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
      es: 'comprimir-archivo',
      fr: 'compresser-fichier',
      de: 'datei-komprimieren',
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
      es: 'contador-palabras',
      fr: 'compteur-mots',
      de: 'wort-zaehler',
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
      es: 'convertidor-archivos',
      fr: 'convertisseur-fichiers',
      de: 'datei-konverter',
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
      es: 'redimensionar-imagen',
      fr: 'redimensionner-image',
      de: 'bild-groesse-aendern',
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
      es: 'formateador-json',
      fr: 'formatteur-json',
      de: 'json-formatter',
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
      es: 'generador-qr',
      fr: 'generateur-qr',
      de: 'qr-generator',
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
      es: 'extractor-exif',
      fr: 'extracteur-exif',
      de: 'exif-extraktor',
    },
    icon: 'ℹ️',
    keywords: ['exif reader', 'read metadata', 'ler metadados', 'gps photos', 'camera info'],
  },
  {
    id: 'password-generator',
    category: 'generators',
    slugs: {
      pt: 'gerador-senha',
      en: 'password-generator',
      es: 'generador-contrasena',
      fr: 'generateur-mot-de-passe',
      de: 'passwort-generator',
    },
    icon: '🔑',
    keywords: ['password generator', 'strong password', 'gerador de senha', 'senha segura', 'random password'],
  },
  {
    id: 'base64-tool',
    category: 'text',
    slugs: {
      pt: 'base64',
      en: 'base64',
      es: 'base64',
      fr: 'base64',
      de: 'base64',
    },
    icon: '🔐',
    keywords: ['base64 encode', 'base64 decode', 'base64 converter', 'codificar base64', 'decodificar base64'],
  },
  {
    id: 'uuid-generator',
    category: 'generators',
    slugs: {
      pt: 'gerador-uuid',
      en: 'uuid-generator',
      es: 'generador-uuid',
      fr: 'generateur-uuid',
      de: 'uuid-generator',
    },
    icon: '🆔',
    keywords: ['uuid generator', 'uuid v4', 'gerador uuid', 'unique id', '.randomUUID'],
  },
  {
    id: 'timestamp-converter',
    category: 'text',
    slugs: {
      pt: 'conversor-timestamp',
      en: 'timestamp-converter',
      es: 'convertidor-timestamp',
      fr: 'convertisseur-timestamp',
      de: 'timestamp-konverter',
    },
    icon: '⏱️',
    keywords: ['unix timestamp', 'timestamp converter', 'epoch converter', 'converter timestamp', 'unix time'],
  },
  {
    id: 'lorem-generator',
    category: 'text',
    slugs: {
      pt: 'gerador-lorem',
      en: 'lorem-generator',
      es: 'generador-lorem',
      fr: 'generateur-lorem',
      de: 'lorem-generator',
    },
    icon: '📄',
    keywords: ['lorem ipsum', 'placeholder text', 'lorem gerador', 'texto placeholder', 'dummy text'],
  },
  {
    id: 'case-converter',
    category: 'text',
    slugs: {
      pt: 'conversor-caso',
      en: 'case-converter',
      es: 'convertidor-mayusculas',
      fr: 'convertisseur-casse',
      de: 'gross-klein-schreibung',
    },
    icon: '🔤',
    keywords: ['case converter', 'camelcase', 'snakecase', 'converter caixa', 'uppercase lowercase'],
  },
  {
    id: 'color-picker',
    category: 'generators',
    slugs: {
      pt: 'seletor-cor',
      en: 'color-picker',
      es: 'selector-color',
      fr: 'selecteur-couleur',
      de: 'farbauswahl',
    },
    icon: '🎨',
    keywords: ['color picker', 'hex color', 'rgb color', 'seletor de cores', 'cor hexadecimal'],
  },
  {
    id: 'markdown-preview',
    category: 'text',
    slugs: {
      pt: 'preview-markdown',
      en: 'markdown-preview',
      es: 'vista-markdown',
      fr: 'apercu-markdown',
      de: 'markdown-vorschau',
    },
    icon: '📑',
    keywords: ['markdown preview', 'markdown editor', 'preview markdown', 'editor markdown', 'md preview'],
  },
];
