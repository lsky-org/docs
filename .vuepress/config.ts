import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: 'Lsky Pro',
    description: '兰空图床使用文档',

    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/logo.png',
        navbar: [
            { text: '首页', link: '/' },
            {
                text: '选择版本',
                children: [
                    {
                        text: 'Lsky Pro 1.x',
                        children: [
                            { text: 'v1.x', link: '/docs/v1/', activeMatch: '^/docs/v1/' }
                        ]
                    },
                    {
                        text: 'Lsky Pro 2.x',
                        children: [
                            { text: 'v2.x', link: '/docs/v2/', activeMatch: '^/docs/v2/' }
                        ]
                    },
                ]
            }
        ],
        repo: 'https://github.com/lsky-org/lsky-pro',
        docsRepo: 'https://github.com/lsky-org/docs',
        docsBranch: 'master',
        lastUpdated: true,
        sidebarDepth: 2,
        sidebar: {
            '/docs/v1/': [
            ],
            '/docs/v2/': [
                {
                    text: '快速入门',
                    link: '/docs/v2/',
                    children: [
                        '/docs/v2/installation.md',
                    ]
                },
            ],
        }
    },
})