import process from 'node:process'
import { defineConfig } from 'vitepress'

const fileAndStyles: Record<string, string> = {}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'NP',
  description: '一个基于 Naive UI 的专业组件库',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/form', activeMatch: '/components' },
      {
        text: '博客',
        link: '/blog/develop-component-library-with-vite',
        activeMatch: '/blog',
      },
    ],

    sidebar: {
      '/components': [
        {
          text: '数据录入组件',
          collapsed: false,
          base: '/components',
          items: [
            { link: '/form/', text: '表单 Form' },
          ],
        },
        {
          text: '数据展示组件',
          collapsed: false,
          base: '/components',
          items: [
            {
              text: '表格 Table',
              link: '/',
              base: '/components/table',
              items: [
                { text: '表格搜索 Table Search', link: '/table-search' },
              ],
            },
            { text: '树 Tree', link: '/tree/' },
            {
              text: '展示 View',
              base: '/components/view',
              items: [
                { text: '展示标签 View Tag', link: '/view-tag' },
                { text: '展示时间 View Time', link: '/view-time' },
              ],
            },
          ],
        },
        {
          text: '布局组件',
          collapsed: false,
          base: '/components',
          items: [
            { text: '弹性布局 Flex', link: '/flex/' },
          ],
        },
      ],
      '/blog/': [
        {
          text: '使用 Vite 开发组件库',
          link: '/blog/develop-component-library-with-vite',
        },
      ],
    },

    darkModeSwitchLabel: '主题',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    editLink: {
      pattern: 'https://mikasa33.github.io/np/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    footer: {
      message: '',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Mikasa33`,
    },
    langMenuLabel: '多语言',
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    lightModeSwitchTitle: '切换到浅色模式',
    outline: {
      label: '页面导航',
      level: [2, 3],
    },
    returnToTopLabel: '回到顶部',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            displayDetails: '显示详细信息',
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '关闭搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    sidebarMenuLabel: '菜单',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mikasa33/np' },
    ],
  },

  markdown: {
    theme: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
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
