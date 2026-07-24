import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import basicSsl from '@vitejs/plugin-basic-ssl';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://slitio.vercel.app', // Use a URL do seu site Vercel
  prefetch: true,
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  integrations: [
    react(), 
    tailwind(), 
    sitemap({
      filter: (page) => !page.includes('/404') && page !== 'https://slitio.vercel.app/',
    }),
    AstroPWA({
      mode: 'production',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.svg'],
      registerType: 'autoUpdate',
      injectRegister: 'script',
      manifestFilename: 'manifest.json',
      devOptions: {
        enabled: true,
      },
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{js,css,html,svg,png,wasm}'],
        maximumFileSizeToCacheInBytes: 40 * 1024 * 1024,
      },
      manifest: {
        id: 'io.slit.app',
        name: 'SLIT.IO - Online Tools',
        short_name: 'SLIT.IO',
        description: 'Collection of fast, secure, and private tools that run directly in your browser.',
        lang: 'en',
        dir: 'ltr',
        theme_color: '#111827',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        categories: ['utilities', 'productivity', 'education'],
        icons: [
          {
            src: '/static/images/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/static/images/slit_preto.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/static/images/slit_preto.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: '/og-image.png',
            sizes: '1200x630',
            type: 'image/png',
            form_factor: 'wide',
            label: 'SLIT.IO Homepage'
          },
          {
            src: '/og-image.png',
            sizes: '1200x630',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'SLIT.IO Mobile'
          }
        ]
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
