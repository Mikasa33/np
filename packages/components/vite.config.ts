import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // 入口文件
      entry: 'src/index.ts',
      // 打包格式
      formats: ['es'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        '@vueuse/core',
        'dayjs',
        'lodash-es',
        'naive-ui',
        'vue',
      ],
      // 输出配置
      output: {
        // 输出目录
        dir: 'es',
        exports: 'named',
        // 重命名
        entryFileNames: (chunkInfo: any) => {
          return `${chunkInfo.name?.replace('.vue', '')}.js`
        },
        // 打包目录和开发目录对应
        preserveModules: true,
        // 指定保留模块结构的根目录
        preserveModulesRoot: 'src',
      },
    },
  },

  plugins: [
    Vue(),
    VueJsx(),
    Dts({
      // 将 '.vue.d.ts' 文件名转换为 '.d.ts'
      cleanVueFileName: true,
      // 将源码里的 .d.ts 文件复制到 `outDir`
      copyDtsFiles: true,
      // 入口文件的根路径
      entryRoot: './src',
      // 输出目录
      outDir: 'es',
    }),
    UnoCSS(),
  ],

  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
