# SLIT.IO

> Ferramentas online rápidas, seguras e privadas — 100% no seu navegador.

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](./LICENSE)
![CI](https://img.shields.io/github/actions/workflow/status/p3dr-dev/webutilio/ci.yml?branch=main&label=CI)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Astro](https://img.shields.io/badge/Astro-5.18-orange)

<p align="center">
  <img src="public/og-image.png" alt="SLIT.IO" width="600" />
</p>

## Sobre

O **SLIT.IO** é uma coleção de 12 utilitários web que rodam inteiramente no navegador do usuário. Nenhum arquivo ou dado é enviado para servidores — tudo acontece localmente via JavaScript e WebAssembly.

**Por que usar o SLIT.IO?**

- **Privacidade total** — Seus arquivos nunca saem do seu computador
- **Sem anúncios** — Experiência limpa e focada
- **Gratuito** — Todas as ferramentas são 100% gratuitas
- **Offline** — Funciona após o primeiro carregamento (PWA)

## Ferramentas

| Ferramenta | Categoria | Descrição |
|-----------|-----------|-----------|
| Removedor de Fundo | Imagens | Remove o fundo de imagens com IA |
| Compressor de Mídia | Mídia | Comprime imagens e vídeos |
| Redimensionador de Imagem | Imagens | Redimensiona imagens mantendo qualidade |
| Extrator de EXIF | Imagens | Mostra dados EXIF de fotos |
| Compactador de Arquivos | Arquivos | Compacta arquivos em ZIP |
| Descompactador de Arquivos | Arquivos | Extrai arquivos ZIP e TAR |
| Criptografador de Arquivos | Arquivos | Criptografa arquivos com AES-256 |
| Conversor de Arquivos | Conversores | Converte entre formatos de imagem |
| Gerador de QR Code | Conversores | Gera QR codes a partir de texto/URL |
| Contador de Palavras | Texto | Conta palavras, caracteres e tempo de leitura |
| Formatador de JSON | Texto | Formata e valida JSON |
| Gerador de Hash | Texto | Gera hashes SHA-256, MD5, SHA-1 |

## Stack

- **Framework:** [Astro 5](https://astro.build/)
- **UI:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Estilo:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Deploy:** [Vercel](https://vercel.com/)
- **PWA:** [Vite PWA](https://vite-pwa-org.netlify.app/)

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20+
- npm

### Instalação

```bash
git clone https://github.com/p3dr-dev/webutilio.git
cd webutilio
npm install
npm run dev
```

O site fica disponível em `https://localhost:4321` (SSL autoassinado).

### Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm run preview` | Visualizar build de produção |
| `npm run lint` | Verificar código com ESLint |
| `npm run lint:fix` | Corrigir código automaticamente |
| `npm run format` | Formatar com Prettier |
| `npm run check` | Type checking com Astro |
| `npm run test` | Rodar testes com Vitest (watch mode) |
| `npm run test:run` | Rodar testes uma vez (CI) |

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── tools/           # Componentes das ferramentas
│       ├── common/      # Compartilhados (LoadingSpinner, ErrorBoundary)
│       ├── converters/  # FileConverter, QrGenerator
│       ├── files/       # FileCompressor, FileDecompressor, FileEncryptor
│       ├── images/      # BackgroundRemover, ImageResizer, ExifExtractor
│       ├── media/       # MediaCompressor
│       └── text/        # WordCounter, JsonFormatter, HashGenerator
├── data/tools.ts        # Registro de ferramentas
├── i18n/                # Traduções (PT/EN)
├── layouts/             # Layout principal
├── pages/               # Rotas (PT e EN)
├── utils/               # Funções utilitárias
└── workers/             # Web Workers (FFmpeg, compressão, criptografia)
```

## Contribuir

Contribuições são muito bem-vindas! Veja o [Guia de Contribuição](CONTRIBUTING.md) para mais detalhes.

1. Faça um fork do repositório
2. Crie uma branch: `git checkout -b feat/minha-feature`
3. Faça suas alterações
4. Execute `npm run lint && npm run check`
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito com dedication por [p3dr-dev](https://github.com/p3dr-dev)
