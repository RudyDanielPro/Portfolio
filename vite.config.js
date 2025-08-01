import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Configuración básica
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false // Desactivado en desarrollo para mejor depuración
      },
      
      // Assets a incluir
      includeAssets: [
        '**/*.{png,jpg,jpeg,svg,gif,webp,ico}',
        '**/*.{woff2,ttf}'
      ],
      
      // Configuración de Workbox
      workbox: {
        // Patrones de archivos para precache
        globPatterns: [
          '**/*.{js,css,html}',
          '**/*.{png,jpg,jpeg,svg,gif,webp}'
        ],
        
        // Estrategias de cache
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 200, // Más imágenes en cache
                maxAgeSeconds: 60 * 60 * 24 * 60 // 60 días de cache
              },
              cacheableResponse: {
                statuses: [0, 200] // Soporte para CORS
              }
            }
          },
          {
            urlPattern: /\.(?:js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 días
              }
            }
          }
        ],
        
        // Comportamiento del Service Worker
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        navigateFallback: 'index.html',
        sourcemap: false // Mejor rendimiento
      },
      
      // Desactivar manifest PWA
      manifest: false,
      
      // Configuración de inyección
      injectRegister: 'auto',
      strategies: 'generateSW'
    })
  ],
  
  // Configuración adicional de build
  build: {
    chunkSizeWarningLimit: 1500, // Aumentar límite de chunks
    sourcemap: false, // Mejor rendimiento en producción
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          icons: ['react-icons']
        }
      }
    }
  }
});