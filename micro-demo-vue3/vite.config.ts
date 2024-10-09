import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('demo-vue3', {
      useDevMode: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    headers: {
      'access-control-allow-origin': '*'
    }
  }
})
