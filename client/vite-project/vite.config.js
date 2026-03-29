import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/contact": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/login": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/messages": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/projects": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
})
