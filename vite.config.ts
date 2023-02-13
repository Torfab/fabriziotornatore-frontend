import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from "vite";
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { code, meta, link } from "md-powerpack";
import vue from '@vitejs/plugin-vue'

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