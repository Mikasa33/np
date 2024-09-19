import { fileURLToPath } from 'node:url'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { postcssIsolateStyles } from 'vitepress'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssIsolateStyles({
          includeFiles: [/vp-doc\.css/],
        }),
      ],
    },
  },

  plugins: [VueJsx(), UnoCSS()],

  resolve: {
    alias: {
      '@vitepress': fileURLToPath(new URL('./.vitepress', import.meta.url)),
    },
  },

  ssr: {
    noExternal: ['naive-ui', 'date-fns', 'vueuc'],
  },
})
