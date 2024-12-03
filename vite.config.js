import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/', // Base URL para la aplicación
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Actualización automática del Service Worker
      manifest: {
        name: 'HotTacos Restaurant',
        short_name: 'HotTacos',
        description: 'Delicious tacos and more, straight to your home!',
        icons: [
          {
            src: '/images/apple-touch-icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/apple-touch-icon3.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
      },
    }),
  ],
});
