export interface Tool {
  slug: string;
  category: 'Imagens' | 'Arquivos' | 'Texto' | 'Conversores';
}

export const tools: Tool[] = [
  {
    slug: 'remover-fundo',
    category: 'Imagens',
  },
    {
    slug: 'descompactar-arquivo',
    category: 'Arquivos',
  },
  {
    slug: 'comprimir-imagem',
    category: 'Imagens',
  },
  {
    slug: 'criptografar-arquivo',
    category: 'Arquivos',
  },
  {
    slug: 'gerador-hash',
    category: 'Texto',
  },
    {
    slug: 'comprimir-arquivo',
    category: 'Arquivos',
  },
  {
    slug: 'contador-palavras',
    category: 'Texto',
  },
    {
    slug: 'conversor-arquivos',
    category: 'Conversores',
  },
  {
    slug: 'redimensionar-imagem',
    category: 'Imagens',
  }
];