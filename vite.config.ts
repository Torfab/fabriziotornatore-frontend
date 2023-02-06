import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from "vite";
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { code, meta, link } from "md-powerpack";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      builders: [code(), meta(), link()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})