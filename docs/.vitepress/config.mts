import { defineConfig } from 'vitepress'
import {
  componentPreview,
  containerPreview,
} from '@vitepress-demo-preview/plugin'
import minimist from 'minimist'
import { components } from '../components'
import type { DefaultTheme } from 'vitepress'

const argv = minimist(process.argv.slice(2))
const build = argv.build || false

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
        { text: '计划', link: '/guide/plan' },
      ],
    },
  ],
  '/components': components,
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Spicomps',
  description: '一个特别的组件库',
  lang: 'cn-ZH',
  base: build ? '/spicomps/' : '/',
  themeConfig: {
    logo: '/logo_image.png',
    siteTitle: 'Spicomps',
    outline: {
      level: [2, 6],
      label: '锚点',
    },
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
