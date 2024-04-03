import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define el alias para la carpeta de assets
      '@assets': '/assets',
      '@utils': '/src/utils',
      '@components': '/src/components',
      '@layout': '/src/layout',
      '@shared': '/src/shared'
    }
  }
})
