import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',  // Asegura que rollup use index.html como punto de entrada
      external: [
        '/src/main.jsx'  // Agrega main.jsx a las dependencias externas
      ]
    }
  }
})
