import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: '[name].[hash].mjs',
        chunkFileNames: '[name].[hash].mjs',
        assetFileNames: '[name].[hash][extname]'
      }
    }
  }
})
