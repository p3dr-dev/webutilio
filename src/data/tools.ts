export type ToolCategory = 'images' | 'files' | 'text' | 'converters' | 'media';

export interface Tool {
  slug: string;
  category: ToolCategory;
}

export const tools: Tool[] = [
  {
    slug: 'comprimir-arquivo',
    category: 'files',
  },
  {
    slug: 'comprimir-midia',
    category: 'media',
  },
  {
    slug: 'contador-palavras',
    category: 'text',
  },
  {
    slug: 'conversor-arquivos',
    category: 'files',
  },
  {
    slug: 'criptografar-arquivo',
    category: 'files',
  },
  {
    slug: 'descompactar-arquivo',
    category: 'files',
  },
  {
    slug: 'gerador-hash',
    category: 'text',
  },
  {
    slug: 'redimensionar-imagem',
    category: 'images',
  },
  {
    slug: 'remover-fundo',
    category: 'images',
  }
];