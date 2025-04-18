import{_ as a,c as t,a2 as l,o as r}from"./chunks/framework.DPuwY6B9.js";const m=JSON.parse('{"title":"页面管理","description":"企业版自定义页面功能介绍","frontmatter":{"title":"页面管理","description":"企业版自定义页面功能介绍"},"headers":[],"relativePath":"archive/enterprise/v1/features/basic/page.md","filePath":"zh/archive/enterprise/v1/features/basic/page.md","lastUpdated":1731937013000}'),c={name:"archive/enterprise/v1/features/basic/page.md"};function s(i,e,o,p,d,n){return r(),t("div",null,e[0]||(e[0]=[l('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>程序安装完成后会自带两个默认页面，分别为 <code>page/api-docs.html</code>、<code>page/contact.html</code>。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>页面管理功能，实际编辑的是物理文件，路径为 <code>/resources/views/pages</code>, 创建好页面后你可以直接找到该文件夹中的文件直接进行编辑。</li><li>由于页面编辑里，保存时会传输 html 标签，可能会被防火墙或第三方 cdn 过滤，如果保存失败请关闭防火墙或直接编辑该物理文件。</li></ul></div><ul><li>因为是编辑的是物理文件，所以在这个文件中，可以使用任何 php 代码，甚至可以使用 <a href="https://laravel.com/docs/9.x/blade" target="_blank" rel="noreferrer">laravel blade 模板引擎</a>，但是请注意，使用了错误的语法，会导致该页面访问出现错误，500等。</li><li>样式方面还可以使用 <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwindcss</a>，可以使用以下命令开发或编译 <ul><li><code>npm run watch</code> 开发模式，实时编译</li><li><code>npm run prod</code> 编译并压缩</li></ul></li></ul>',3)]))}const f=a(c,[["render",s]]);export{m as __pageData,f as default};
