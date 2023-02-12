import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from "vite";
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { code, meta, link } from "md-powerpack";
import vitePluginRaw from 'vite-plugin-raw';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/], // <--
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})