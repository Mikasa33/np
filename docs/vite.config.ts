import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { postcssIsolateStyles } from 'vitepress'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/np/',

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
      '@rezero/np': fileURLToPath(
        new URL('../packages/components/src', import.meta.url),
      ),
      '@vitepress': fileURLToPath(new URL('./.vitepress', import.meta.url)),
    },
  },

  ssr: {
    noExternal: ['naive-ui', 'date-fns', 'vueuc'],
  },
})
