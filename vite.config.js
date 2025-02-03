import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  publicDir: 'public',
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    // Warm up frequently used files for better performance
    warmup: {
      clientFiles: [
        './src/grow.js',
        './messages.js'
      ],
    }
  }
}) 