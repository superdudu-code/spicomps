import { defineConfig } from 'vitepress'
import {
  componentPreview,
  containerPreview,
} from '@vitepress-demo-preview/plugin'
import { components } from '../components'
import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/button' },
]

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' },
      ],
    },
  ],
  '/components': [
    {
      items: [...components],
    },
  ],
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Spicomps',
  description: '一个特别的组件库',
  lang: 'cn-ZH',
  base: '/',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Spicomps',
    outline: 3,
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    },
  },
})