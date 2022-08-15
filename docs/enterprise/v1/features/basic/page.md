---
title: 页面管理
description: 企业版自定义页面功能介绍
---

::: tip
程序安装完成后会自带两个默认页面，分别为 `page/api-docs.html`、`page/contact.html`。
:::

::: warning
- 页面管理功能，实际编辑的是物理文件，路径为 `/resources/views/pages`, 创建好页面后你可以直接找到该文件夹中的文件直接进行编辑。
- 由于页面编辑里，保存时会传输 html 标签，可能会被防火墙或第三方 cdn 过滤，如果保存失败请关闭防火墙或直接编辑该物理文件。
:::

- 因为是编辑的是物理文件，所以在这个文件中，可以使用任何 php 代码，甚至可以使用 [laravel blade 模板引擎](https://laravel.com/docs/9.x/blade)，但是请注意，使用了错误的语法，会导致该页面访问出现错误，500等。
- 样式方面还可以使用 [Tailwindcss](https://tailwindcss.com/)，可以使用以下命令开发或编译
  - `npm run watch` 开发模式，实时编译
  - `npm run prod` 编译并压缩