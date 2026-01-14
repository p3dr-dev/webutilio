import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import basicSsl from '@vitejs/plugin-basic-ssl';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://slitio.vercel.app', // Use a URL do seu site Vercel
  integrations: [
    react(), 
    tailwind(), 
    sitemap(),
    AstroPWA({
      mode: 'production',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.svg'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'SLIT.IO - Ferramentas Online',
        short_name: 'SLIT.IO',
        description: 'Coleção de ferramentas online rápidas, seguras e privadas que rodam direto no seu navegador.',
        theme_color: '#111827',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        categories: ['utilities', 'productivity', 'education'],
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
            src: 'favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'maskable'
          }
        ],
      },
      workbox: {
        navigateFallback: '/404',
        globPatterns: ['**/*.{js,css,html,svg,png,wasm}'],
        maximumFileSizeToCacheInBytes: 40 * 1024 * 1024, // 40MB
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\//],
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    https: true,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: '_astro/[name].[hash].js',
          chunkFileNames: '_astro/[name].[hash].js',
          assetFileNames: '_astro/[name].[hash][extname]',
        },
      },
    },
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
