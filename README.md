# SLIT.IO - Ferramentas Online Rápidas e Seguras

SLIT.IO é uma coleção de utilitários web que rodam inteiramente no seu navegador. O foco do projeto é em performance, privacidade e simplicidade. Nenhuma informação do usuário (arquivos, textos) é enviada para um servidor.

## ✨ Visão Geral

O projeto utiliza uma arquitetura moderna para garantir que a experiência seja rápida e segura:

-   **Client-Side:** Todas as operações (compressão, criptografia, conversão, etc.) acontecem no seu navegador usando JavaScript e WebAssembly.
-   **Privacidade:** Seus arquivos nunca saem do seu computador.
-   **Performance:** A interface é construída com Astro para ser leve e rápida, com componentes interativos em React.

## 🚀 Stack de Tecnologias

-   **Framework Principal:** [Astro](https://astro.build/)
-   **Componentes Interativos:** [React](https://react.dev/)
-   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
-   **Deployment:** [Vercel](https://vercel.com/)

## 🛠️ Como Executar Localmente

Para rodar o projeto no seu ambiente de desenvolvimento, siga os passos abaixo.

### Pré-requisitos

-   [Node.js](https://nodejs.org/) (versão 18 ou superior)
-   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

    Isso iniciará o servidor local, geralmente em `https://localhost:4321`. O site usará um certificado SSL autoassinado para que todas as funcionalidades que exigem um contexto seguro (HTTPS) funcionem corretamente. Pode ser necessário aceitar o certificado no seu navegador.

##  scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento.
-   `npm run build`: Compila o projeto para produção na pasta `dist/`.
-   `npm run preview`: Inicia um servidor local para visualizar a build de produção.
-   `npm run test`: Executa a suíte de testes com Vitest.
-   `npm run lint`: Executa a verificação de tipos do Astro.
-   `npm run audit`: Verifica as dependências em busca de vulnerabilidades de segurança.
