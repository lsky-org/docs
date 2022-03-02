import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: 'Lsky Pro',
    description: '兰空图床使用文档',

    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://avatars.githubusercontent.com/u/100565733?s=200',
    },
})