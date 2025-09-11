# GEMINI.MD: Guia de Desenvolvimento para o "Web Util.IO"

Este documento serve como o guia principal para a IA Gemini. O objetivo é construir uma coleção de ferramentas online rápidas, eficientes e que funcionam inteiramente no lado do cliente (client-side).

## 1. Visão Geral do Projeto

- **Nome do Projeto:** Web Util.IO
- **Conceito:** Um portal de utilidades web. Cada ferramenta deve ser uma "single-page application" dentro de sua própria rota, otimizada para performance e simplicidade.
- **Princípio Fundamental:** **Performance e Privacidade.** As operações devem, sempre que possível, ocorrer no navegador do usuário usando JavaScript, WebAssembly (WASM) ou APIs do navegador. Nenhuma informação do usuário (arquivos, textos) deve ser enviada a um servidor, a menos que seja absolutamente necessário.

## 2. Stack de Tecnologias

- **Framework Principal:** **Astro** (para a estrutura de páginas estáticas e "cascas" das ferramentas).
- **Framework de Interatividade:** **React** (para construir a lógica e a UI de cada ferramenta como uma "Astro Island").
- **Linguagem:** **TypeScript** (tipagem estrita).
- **Estilização:** **Tailwind CSS**.

## 3. Arquitetura

- **Página Inicial (`/`):** Uma página estática (`index.astro`) que serve como um menu, apresentando e linkando para todas as ferramentas disponíveis.
- **Páginas das Ferramentas (`/ferramentas/[slug]`):** Uma única rota dinâmica do Astro (`[slug].astro`) que atuará como uma "casca" (shell). Ela renderizará o componente React interativo correto com base no `slug` da URL.
- **Componentes das Ferramentas (`src/components/tools/`):** Cada ferramenta será um componente React (`.tsx`) autocontido (ex: `EncryptDecrypt.tsx`, `ImageCompressor.tsx`). Estes serão renderizados como Ilhas do Astro (`client:only="react"`) dentro da página da ferramenta.

## 4. Diretrizes de Código

- **Componentes React:** Devem ser funcionais, usar Hooks (`useState`, `useCallback`, etc.) e ter uma UI limpa e intuitiva.
- **Foco no Cliente:** Priorize o uso de APIs do navegador como `File API`, `Web Crypto API`, `Canvas API` para manipular arquivos e dados localmente.
- **Layout:** Manter os componentes reutilizáveis `Header.astro`, `Footer.astro` e `Container.astro` para garantir a consistência visual.

- **Idioma:** Responda sempre em **português do Brasil**.
