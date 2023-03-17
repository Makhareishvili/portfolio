import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  build: {
    assetsDir: 'assets/photos',
    // assetsInlineLimit: 4096,
    // rollupOptions: {
      // output: {
        // manualChunks: undefined
      // }
    // }
  }
})
