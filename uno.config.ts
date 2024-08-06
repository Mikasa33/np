import { defineConfig, presetIcons, presetUno, transformerVariantGroup } from 'unocss'

// https://unocss.dev
export default defineConfig({
  content: {
    filesystem: [
      'node_modules/@rezero/np/es/**/*.js',
    ],
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html|ts)($|\?)/,
        'node_modules/@rezero/np/es/**/*.js',
      ],
    },
  },
  presets: [
    presetUno,
    presetIcons({
      warn: true,
    }),
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'wh-full': 'w-full h-full',
    'transition-300': 'ease-in-out duration-300',
  },
  transformers: [
    transformerVariantGroup(),
  ],
})
