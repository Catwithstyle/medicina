import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acceso desde la red local
    port: 5173, // Puerto por defecto de Vite
    strictPort: false, // Si el puerto está ocupado, usa el siguiente disponible
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Usa esbuild que viene incluido con Vite
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
        // Optimización de nombres de archivos
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/\.(gif|jpe?g|png|svg|webp|ico)$/.test(assetInfo.name || '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    // Optimizaciones adicionales
    cssCodeSplit: true,
    reportCompressedSize: false, // Más rápido en builds grandes
  },
  preview: {
    port: 4173,
    host: true,
  },
})
