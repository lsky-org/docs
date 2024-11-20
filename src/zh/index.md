---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Lsky Pro+"
  text: "你的云端相册系统"
  tagline: 全新版本，全新架构，全新 UI，全新体验
  image:
    src: /logo.png
    alt: logo
  actions:
    - theme: brand
      text: Lsky Pro+ 是什么？ ->
      link: /guide/introduce
    - theme: alt
      text: 💻 查看演示
      link: https://wmimg.com
    - theme: alt
      text: 🎁 购买源码
      link: https://www.lsky.pro/buy

features:
  - title: 稳定
    icon: 🪜
    details: 使用 Laravel 框架开发，庞大的生态系统和用户群体，为程序提供了健壮稳固的底层基础。
  - title: 高效
    icon: 🚀
    details: 多图上传、拖拽上传、粘贴上传、复制图片、复制链接、一键复制链接以及强大的图片处理、管理功能。
  - title: 安全
    icon: 🔒
    details: 得益于强大的 Laravel 框架，我们无需在安全这方面考虑过多，它几乎已经帮我们做好了一切。
  - title: 储存支持
    icon: 💾
    details: 支持多种第三方储存，分别有 AWS S3、阿里云 OSS、腾讯云 COS、七牛云、又拍云、SFTP、FTP、WebDav、Minio。
  - title: 商业化
    icon: 🪩
    details: 程序集成了付费套餐、工单系统、订单管理、意见收集、站内公告、优惠码等等，适配了支付宝、微信官方支付功能。
  - title: 图片审核
    icon: 🔍
    details: 为了防止他人上传违规图片，程序集成了阿里云、腾讯云、Nsfw.js 图片审核功能，可以选择发现违规图片后删除还是标记为不健康的图片。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(110px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(130px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(150px);
  }
}
</style>
