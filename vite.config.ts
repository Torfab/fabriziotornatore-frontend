import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from "vite";
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/], // <--
    }),
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})