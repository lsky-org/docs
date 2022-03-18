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
            { text: '官网', link: 'https://www.lsky.pro' },
            {
                text: '选择版本',
                children: [
                    {
                        text: 'Lsky Pro',
                        children: [
                            { text: 'V 1.x', link: '/docs/v1/', activeMatch: '^/docs/v1/' },
                            { text: 'V 2.x', link: '/docs/v2/', activeMatch: '^/docs/v2/' }
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
                {
                    text: 'V1.x手册',
                    link: '/docs/v1/',
                    children: [
                        '/docs/v1/Install.md','/docs/v1/env.md',
                        {
                            text: '存储策略',
                            link: '/docs/v1/StorageStrategy.md',
                            children: [
                                '/docs/v1/SS/Local.md','/docs/v1/SS/AliyunOSS.md','/docs/v1/SS/TencentCloudCOS.md','/docs/v1/SS/UpyunUSS.md','/docs/v1/SS/KODO.md','/docs/v1/SS/FTP.md'
                            ]
                        },
                        {
                            text: '系统参数配置',
                            link: '/docs/v1/SystemParameters',
                            children: [
                                '/docs/v1/SP/BasicConf','/docs/v1/SP/UploadConf','/docs/v1/SP/UserConf','/docs/v1/SP/MailConf','/docs/v1/SP/OtherConf','/docs/v1/SP/ImgSex'
                            ]
                        }, '/docs/v1/Watermark','/docs/v1/SystemUpdate','/docs/v1/CommonQ','/docs/v1/UpdateLog'
                    ]
                },
            ],
            '/docs/v2/': [
                {
                    text: '概述',
                    link: '/docs/v2/',
                },
                {
                    text: '快速入门',
                    children: [
                        '/docs/v2/quick-start/installation.md',
                        '/docs/v2/quick-start/upgrade.md',
                        '/docs/v2/quick-start/migration.md',
                        '/docs/v2/quick-start/questions.md'
                    ]
                },
                {
                    text: '角色组',
                    children: [
                        '/docs/v2/group/basic.md',
                        '/docs/v2/group/picture-review.md',
                        '/docs/v2/group/original-protection.md',
                        '/docs/v2/group/watermark.md'
                    ]
                },
                {
                    text: '储存策略',
                    children: [
                        '/docs/v2/storage/intro.md',
                        '/docs/v2/storage/faq.md',
                    ]
                },
            ],
        },
    },
})