import process from 'node:process'
import { defineConfig } from 'vitepress'

const fileAndStyles: Record<string, string> = {}

console.log(process.env.NODE_ENV)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'NP',

  description: '一个基于 Naive UI 的专业组件库',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/form', activeMatch: '/components/' },
      {
        text: '博客',
        link: '/blog/develop-component-library-with-vite',
        activeMatch: '/blog/',
      },
    ],

    sidebar: {
      '/components/': [
        {
          text: '数据录入组件',
          items: [{ text: '表单 Form', link: '/components/form/' }],
        },
        {
          text: '数据展示组件',
          items: [{ text: '表格 Table', link: '/components/table/' }],
        },
      ],
      '/blog/': [
        {
          text: '使用 Vite 开发组件库',
          link: '/blog/develop-component-library-with-vite',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rezero-dev/np' },
    ],

    footer: {
      message: '',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Re:Zero`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    editLink: {
      pattern: 'https://github.com/rezero-dev/np/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  postRender(context) {
    const styleRegex = /<css-render-style>(([\s\S])+)<\/css-render-style>/
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
    const style = styleRegex.exec(context.content)?.[1]
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.content = context.content.replace(styleRegex, '')
    context.content = context.content.replace(vitepressPathRegex, '')
  },

  transformHtml(code, id) {
    const html = id.split('/').pop()
    if (!html)
      return
    const style = fileAndStyles[`/${html}`]
    if (style) {
      return code.replace(/<\/head>/, `${style}</head>`)
    }
  },

  base: process.env.NODE_ENV === 'production' ? '/np-docs/' : '/',
  outDir: '../../np-docs',
})
