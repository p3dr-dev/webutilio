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
  },
  vite: {
    plugins: [
      basicSsl(),
      {
        name: 'add-coep-coop-headers',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
            res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
            next();
          });
        },
      },
    ],
  },
  
});
