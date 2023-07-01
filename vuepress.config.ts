import {defaultTheme, defineUserConfig} from 'vuepress'
import {customTheme} from "./theme";

const {searchPlugin} = require('@vuepress/plugin-search')
const {nprogressPlugin} = require('@vuepress/plugin-nprogress')
const {commentPlugin} = require('vuepress-plugin-comment2')

export default defineUserConfig({
    locales: {
        "/": {
            lang: 'zh-CN',
            title: 'Lsky Pro',
            description: '兰空图床使用文档',
        }
    },

    theme: customTheme({
        logo: '/logo.png',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '最后更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '警告',
        danger: '危险',
        navbar: [
            {text: '🌏 首页', link: '/'},
            {
                text: '📌 ️选择版本',
                children: [
                    {
                        text: 'Lsky Pro 开源版',
                        children: [
                            {text: 'V 1.x', link: '/docs/free/v1/', activeMatch: '^/docs/free/v1/'},
                            {text: 'V 2.x', link: '/docs/free/v2/', activeMatch: '^/docs/free/v2/'}
                        ]
                    },
                    {
                        text: 'Lsky Pro 企业版',
                        children: [
                            {text: 'V 1.x', link: '/docs/enterprise/v1/', activeMatch: '^/docs/enterprise/v1/'},
                        ]
                    },
                ]
            },
            {text: '🚀 官网', link: 'https://www.lsky.pro'},
            {text: '💰 购买', link: 'https://www.lsky.pro/buy'},
        ],
        repo: 'https://github.com/lsky-org/lsky-pro',
        docsRepo: 'https://github.com/lsky-org/docs',
        docsBranch: 'master',
        lastUpdated: true,
        sidebarDepth: 2,
        sidebar: {
            '/docs/free/v1/': [
                {
                    text: 'V1.x手册',
                    link: '/docs/free/v1/',
                    children: [
                        '/docs/free/v1/Install.md', '/docs/free/v1/env.md',
                        {
                            text: '存储策略',
                            link: '/docs/free/v1/StorageStrategy.md',
                            children: [
                                '/docs/free/v1/SS/Local.md', '/docs/free/v1/SS/AliyunOSS.md', '/docs/free/v1/SS/TencentCloudCOS.md', '/docs/free/v1/SS/UpyunUSS.md', '/docs/free/v1/SS/KODO.md', '/docs/free/v1/SS/FTP.md'
                            ]
                        },
                        {
                            text: '系统参数配置',
                            link: '/docs/free/v1/SystemParameters',
                            children: [
                                '/docs/free/v1/SP/BasicConf', '/docs/free/v1/SP/UploadConf', '/docs/free/v1/SP/UserConf', '/docs/free/v1/SP/MailConf', '/docs/free/v1/SP/OtherConf', '/docs/free/v1/SP/ImgSex'
                            ]
                        }, '/docs/free/v1/Watermark', '/docs/free/v1/SystemUpdate', '/docs/free/v1/CommonQ', '/docs/free/v1/UpdateLog'
                    ]
                },
            ],
            '/docs/free/v2/': [
                {
                    text: '概述',
                    link: '/docs/free/v2/',
                },
                {
                    text: '快速入门',
                    children: [
                        '/docs/free/v2/quick-start/installation.md',
                        '/docs/free/v2/quick-start/upgrade.md',
                        '/docs/free/v2/quick-start/migration.md',
                        '/docs/free/v2/quick-start/questions.md'
                    ]
                },
                {
                    text: '角色组',
                    children: [
                        '/docs/free/v2/group/basic.md',
                        '/docs/free/v2/group/picture-review.md',
                        '/docs/free/v2/group/original-protection.md',
                        '/docs/free/v2/group/watermark.md'
                    ]
                },
                {
                    text: '储存策略',
                    children: [
                        '/docs/free/v2/storage/intro.md',
                        '/docs/free/v2/storage/faq.md',
                    ]
                },
                {
                    text: '进阶教程',
                    children: [
                        '/docs/free/v2/advanced/cache.md',
                        '/docs/free/v2/advanced/octane.md',
                    ]
                },
            ],

            '/docs/enterprise/v1/': [
                {
                    text: '概述',
                    link: '/docs/enterprise/v1/',
                },
                {
                    text: '快速入门',
                    children: [
                        '/docs/enterprise/v1/quick-start/installation.md',
                        '/docs/enterprise/v1/quick-start/upgrade.md',
                        '/docs/enterprise/v1/quick-start/migration.md',
                        '/docs/enterprise/v1/quick-start/questions.md',
                        '/docs/enterprise/v1/quick-start/basic.md',
                    ]
                },
                {
                    text: '基础功能',
                    children: [
                        '/docs/enterprise/v1/features/basic/page.md',
                        '/docs/enterprise/v1/features/basic/plan.md',
                        '/docs/enterprise/v1/features/basic/coupon.md',
                        {
                            text: '支付功能',
                            children: [
                                '/docs/enterprise/v1/features/basic/payment/alipay.md',
                                '/docs/enterprise/v1/features/basic/payment/wechat.md',
                                '/docs/enterprise/v1/features/basic/payment/paypal.md',
                            ]
                        }
                    ]
                },
                {
                    text: '核心功能',
                    children: [
                        '/docs/enterprise/v1/features/core/group.md',
                        '/docs/enterprise/v1/features/core/strategy.md',
                    ]
                },
                {
                    text: '其他',
                    children: [
                        '/docs/enterprise/v1/others/imagick.md',
                        '/docs/enterprise/v1/others/optimization.md',
                        '/docs/enterprise/v1/others/commands.md',
                        '/docs/enterprise/v1/others/free-upgrade.md',
                    ]
                },
            ]
        },
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '输入关键字搜索...',
                },
            },
        }),
        nprogressPlugin(),
        commentPlugin({
            provider: "Giscus",
            comment: true,
            mapping: "title",
            repo: "lsky-org/docs",
            repoId: "R_kgDOG7oZ0A",
            category: "Comments",
            categoryId: "DIC_kwDOG7oZ0M4CQ2uw",
            strict: false,
            reactionsEnabled: true,
            inputPosition: "bottom",
            locale: "zh-CN",
            meta: false,
            login: "force",
        }),
    ]
})