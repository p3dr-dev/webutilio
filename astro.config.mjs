import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://astro.build/config
export default defineConfig({
  site: 'https://slitio.vercel.app', // Use a URL do seu site Vercel
  integrations: [react(), tailwind(), sitemap()],
  server: {
    host: '0.0.0.0',
    https: true,
    headers: {
      // Habilita o modo cross-origin isolated, necessário para o multi-threading do WASM.
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  vite: {
    plugins: [basicSsl()],
  },
  response: {
    headers: {
      // Garante que os cabeçalhos também sejam aplicados no build final.
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      // 'unsafe-eval' é um requisito do onnxruntime-web para carregar o modelo WASM.
      // O risco é baixo, pois a aplicação é totalmente client-side.
      'Content-Security-Policy': "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob;",
    },
  },
});