# Relatório Técnico: Projeto WebUtilio (SLIT.IO)

**Data:** 24/01/2026
**Responsável:** Pickle Rick (via Gemini CLI)

## 1. Visão Geral da Arquitetura
O projeto é uma aplicação web focada em utilitários que rodam inteiramente no navegador (Client-Side First), utilizando **Astro** como framework base (SSG) e **React** para ilhas de interatividade.

- **Core Framework**: Astro 5.4.2
- **UI Library**: React 18.3.1
- **Estilização**: Tailwind CSS 3.4
- **Linguagem**: TypeScript 5.7 (Modo estrito)
- **Hospedagem Alvo**: Vercel (Configurado em `vercel.json` e `astro.config.mjs`)

## 2. Análise de Código e Estrutura

### Pontos Fortes
- **Isolamento de Componentes**: O uso de "Astro Islands" (`client:only="react"`) garante que JavaScript pesado só seja carregado nas páginas de ferramentas específicas. A Home Page é leve.
- **Internacionalização (i18n)**: Implementação manual robusta em `src/i18n`, sem depender de bibliotecas pesadas de runtime.
- **Web Workers**: Uso correto de Workers (`workers/ffmpeg.worker.ts`) para evitar travar a thread principal durante compressões de vídeo.
- **Segurança**: Headers HTTP `Cross-Origin-Opener-Policy` e `Cross-Origin-Embedder-Policy` configurados corretamente para permitir `SharedArrayBuffer` (necessário para FFmpeg WASM).

### Pontos de Atenção (Dívida Técnica Potencial)
- **Cálculo de Bitrate de Vídeo**: Em `MediaCompressor.tsx`, a lógica `quality * 1000` resulta em bitrates lineares que podem não ser ideais para diferentes resoluções. Um vídeo 4K a 1000kbps ficará terrível.
- **Gerenciamento de Estado do Worker**: O Worker do FFmpeg é recriado a cada montagem do componente. Considerando o custo de inicialização do WebAssembly, um `WorkerContext` ou um Singleton pattern poderia melhorar a UX em usos repetidos.
- **Organização de Arquivos**: `src/components/tools/` contém todos os componentes misturados. Recomenda-se subdividir por domínio (ex: `/media`, `/security`, `/text`) conforme o projeto escala.

## 3. Análise de Dependências (`package.json`)
- **Essenciais**: `astro`, `react`, `tailwindcss`.
- **Pesadas**: `@ffmpeg/core` (necessário, mas impacta First Load se não for lazy-loaded corretamente).
- **Obs**: Várias libs de polyfill/shim (`js-untar`, `jszip`, `potrace`). Verificar se `potrace` tem tipagem correta (existe um `types/potrace.d.ts`, o que é ótimo).

## 4. Recomendações Imediatas
1. **Refatoração de Pastas**: Mover ferramentas para subpastas para melhor navegabilidade.
2. **Otimização de Vídeo**: Implementar cálculo de bitrate baseado em resolução (width * height * bpp) em vez de apenas um slider linear.
3. **Testes**: Adicionar testes E2E (Playwright/Cypress) para garantir que os Workers WASM carreguem corretamente em produção, já que é um ponto de falha comum.

## 5. Conclusão
O projeto está tecnicamente sólido, seguindo boas práticas modernas de desenvolvimento web (Type Safety, PWA, Componentização). A base é excelente para expansão.

---
*Assinado, Pickle Rick.*
