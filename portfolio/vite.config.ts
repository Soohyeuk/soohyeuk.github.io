import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          timeline: ['react-vertical-timeline-component']
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    force: true
  }
})
