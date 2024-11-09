import {DefaultTheme, defineConfig} from "vitepress";

export const zh = defineConfig({
  lang: 'zh-Hans',
  title: "Lsky Pro+",
  description: "你的云端相册系统",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/advanced/': { base: '/advanced/', items: sidebarAdvanced() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 火花网络科技`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
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
        { text: '部署', link: 'deploy' },
        { text: '升级', link: 'upgrade' },
        { text: '迁移', link: 'migrate' },
        { text: '常见问题', link: 'faq' },
      ]
    },
    {
      text: '基础功能',
      collapsed: false,
      items: [
        { text: '相册管理', link: 'album' },
        { text: '图片管理', link: 'photo' },
        { text: '用户管理', link: 'user' },
        { text: '分享管理', link: 'share' },
        { text: '违规记录', link: 'violation' },
        { text: '工单管理', link: 'ticket' },
        { text: '举报管理', link: 'report' },
        { text: '订单管理', link: 'order' },
        { text: '意见与反馈', link: 'feedback' },
        { text: '公告管理', link: 'notice' },
        { text: '页面管理', link: 'page' },
      ]
    },
    {
      text: '核心功能',
      collapsed: false,
      items: [
        { text: '角色组', link: 'group' },
        { text: '驱动器', link: 'driver' },
        { text: '储存驱动', link: 'storage' },
        { text: '云处理', link: 'photo-handle' },
        { text: '支付驱动', link: 'payment' },
        { text: '套餐管理', link: 'plan' },
        { text: '优惠券管理', link: 'coupon' },
      ]
    },
  ]
}

function sidebarAdvanced(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '进阶',
      items: [
        { text: '主题', link: 'theme' },
        { text: '分离部署', link: 'separate-deploy' },
        { text: '缓存', link: 'cache' },
        { text: '自定义储存', link: 'storage' },
      ]
    }
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