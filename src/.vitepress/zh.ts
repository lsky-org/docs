import {DefaultTheme, defineConfig} from "vitepress";

export const zh = defineConfig({
  lang: 'zh-Hans',
  title: 'Lsky Pro+',
  description: '你的云端相册系统',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/advanced/': { base: '/advanced/', items: sidebarAdvanced() },
      '/archive/': { base: '/archive/', items: sidebarArchive()},
    },

    editLink: {
      pattern: 'https://github.com/lsky-org/archive/edit/master/archive/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      copyright: `版权所有 © 2018-${new Date().getFullYear()} 火花网络科技`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      level: 'deep',
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      link: '/guide/introduce',
      activeMatch: '/guide/'
    },
    {
      text: '进阶',
      link: '/advanced/theme',
      activeMatch: '/advanced/'
    },
    {
      text: '旧版本',
      items: [
        {
          text: 'Lsky Pro 开源版',
          items: [
            {text: 'V 1.x', link: '/archive/free/v1/', activeMatch: '^/archive/free/v1/'},
            {text: 'V 2.x', link: '/archive/free/v2/', activeMatch: '^/archive/free/v2/'}
          ]
        },
        {
          text: 'Lsky Pro 付费版',
          items: [
            {text: 'V 1.x', link: '/archive/enterprise/v1/', activeMatch: '^/archive/enterprise/v1/'},
          ]
        },
      ]
    },
    {
      text: '官网',
      link: 'https://www.lsky.pro',
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '介绍', link: 'introduce' },
        { text: '快速开始', link: 'getting-started' },
        { text: '环境要求', link: 'requirement' },
      ]
    },
    {
      text: '入门',
      collapsed: false,
      items: [
        { text: '安装', link: 'install' },
        { text: '升级', link: 'upgrade' },
        { text: '迁移', link: 'migrate' },
        { text: '常见问题', link: 'faq' },
        { text: '从旧版本导入', link: 'import' },
      ]
    },
    {
      text: '核心功能',
      collapsed: false,
      items: [
        { text: '储存', link: 'storage' },
        { text: '角色组', link: 'group' },
        { text: '支付', link: 'payment' },
        { text: '云处理', link: 'process' },
        { text: '图片处理', link: 'handle' },
      ]
    },
  ]
}

function sidebarAdvanced(): DefaultTheme.SidebarItem[] {
  return [
    { text: '主题', link: 'theme' },
    { text: '分离部署', link: 'separate-deploy' },
    { text: '缓存', link: 'cache' },
    { text: '自定义储存', link: 'storage' },
    { text: '接口文档', link: 'openapi' },
  ]
}

// 旧版本文档归档
function sidebarArchive(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '开源版 V1.x 手册',
      link: 'free/v1/',
      collapsed: true,
      items: [
        {
          text: '安装',
          link: 'free/v1/Install',
        },
        {
          text: '环境变量',
          link: 'free/v1/env',
        },
        {
          text: '存储策略',
          link: 'free/v1/StorageStrategy',
          collapsed: true,
          items: [
            {
              text: '本地',
              link: 'free/v1/SS/Local',
            },
            {
              text: '阿里云OSS',
              link: 'free/v1/SS/AliyunOSS',
            },
            {
              text: '腾讯云COS',
              link: 'free/v1/SS/TencentCloudCOS',
            },
            {
              text: '又拍云USS',
              link: 'free/v1/SS/UpyunUSS',
            },
            {
              text: '七牛云KODO',
              link: 'free/v1/SS/KODO',
            },
            {
              text: 'FTP',
              link: 'free/v1/FTP',
            }
          ]
        },
        {
          text: '系统参数配置',
          link: 'free/v1/SystemParameters',
          collapsed: true,
          items: [
            {
              text: '基础配置',
              link: 'free/v1/SP/BasicConf',
            },
            {
              text: '上传配置',
              link: 'free/v1/SP/UploadConf',
            },
            {
              text: '用户配置',
              link: 'free/v1/SP/UserConf',
            },
            {
              text: '邮件配置',
              link: 'free/v1/SP/MailConf',
            },
            {
              text: '其他配置',
              link: 'free/v1/SP/OtherConf',
            },
            {
              text: '图片鉴黄',
              link: 'free/v1/SP/ImgSex',
            },
          ]
        },
        {
          text: '水印功能',
          link: 'free/v1/Watermark',
        },
        {
          text: '系统升级',
          link: 'free/v1/SystemUpdate',
        },
        {
          text: '系统升级',
          link: 'free/v1/SystemUpdate',
        },
        {
          text: '常见问题',
          link: 'free/v1/CommonQ'
        },
        {
          text: '更新日志',
          link: 'free/v1/UpdateLog',
        }
      ]
    },
    {
      text: '开源版 V2.x 手册',
      link: 'free/v2/',
      collapsed: true,
      items: [
        {
          text: '概述',
          link: 'free/v2',
        },
        {
          text: '快速入门',
          collapsed: true,
          items: [
            {
              text: '安装',
              link: 'free/v2/quick-start/installation',
            },
            {
              text: '升级',
              link: 'free/v2/quick-start/upgrade',
            },
            {
              text: '迁移',
              link: 'free/v2/quick-start/migration',
            },
            {
              text: '常见问题',
              link: 'free/v2/quick-start/questions',
            },
          ],
        },
        {
          text: '角色组',
          collapsed: true,
          items: [
            {
              text: '基础设置',
              link: 'free/v2/group/basic',
            },
            {
              text: '图片审核',
              link: 'free/v2/group/picture-review',
            },
            {
              text: '原图保护',
              link: 'free/v2/group/original-protection',
            },
            {
              text: '水印配置',
              link: 'free/v2/group/watermark',
            },
          ],
        },
        {
          text: '储存策略',
          collapsed: true,
          items: [
            {
              text: '简介',
              link: 'free/v2/storage/intro',
            },
            {
              text: '储存的特殊说明',
              link: 'free/v2/storage/faq',
            }
          ],
        },
        {
          text: '进阶教程',
          collapsed: true,
          items: [
            {
              text: '缓存',
              link: 'free/v2/advanced/cache',
            },
            {
              text: 'Laravel Octane',
              link: 'free/v2/advanced/octane',
            }
          ],
        }
      ]
    },
    {
      text: '付费版 V1.x 手册',
      link: 'enterprise/v1/',
      collapsed: true,
      items: [
        {
          text: '快速入门',
          collapsed: true,
          items: [
            {
              text: '安装',
              link: 'enterprise/v1/quick-start/installation',
            },
            {
              text: '升级',
              link: 'enterprise/v1/quick-start/upgrade',
            },
            {
              text: '迁移',
              link: 'enterprise/v1/quick-start/migration',
            },
            {
              text: '常见问题',
              link: 'enterprise/v1/quick-start/questions',
            },
            {
              text: '基础功能',
              link: 'enterprise/v1/quick-start/basic',
            },
          ],
        },
        {
          text: '基础功能',
          collapsed: true,
          items: [
            {
              text: '页面管理',
              link: 'enterprise/v1/features/basic/page',
            },
            {
              text: '套餐管理',
              link: 'enterprise/v1/features/basic/plan',
            },
            {
              text: '优惠券管理',
              link: 'enterprise/v1/features/basic/coupon',
            },
            {
              text: '支付功能',
              collapsed: true,
              items: [
                {
                  text: '支付宝',
                  link: 'enterprise/v1/features/basic/payment/alipay',
                },
                {
                  text: '微信',
                  link: 'enterprise/v1/features/basic/payment/wechat',
                },
                {
                  text: 'PayPal',
                  link: 'enterprise/v1/features/basic/payment/paypal',
                }
              ]
            }
          ],
        },
        {
          text: '核心功能',
          collapsed: true,
          items: [
            {
              text: '角色组',
              link: 'enterprise/v1/features/core/group',
            },
            {
              text: '储存策略',
              link: 'enterprise/v1/features/core/strategy',
            }
          ],
        },
        {
          text: '其他',
          collapsed: true,
          items: [
            {
              text: 'Imagick 拓展',
              link: 'enterprise/v1/others/imagick',
            },
            {
              text: '优化加载速度',
              link: 'enterprise/v1/others/optimization',
            },
            {
              text: '常用辅助命令',
              link: 'enterprise/v1/others/commands',
            },
            {
              text: '从开源版本升级',
              link: 'enterprise/v1/others/free-upgrade',
            }
          ],
        }
      ]
    },
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  zh: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        footer: {
          selectText: '选择',
          navigateText: '切换'
        }
      }
    }
  }
}