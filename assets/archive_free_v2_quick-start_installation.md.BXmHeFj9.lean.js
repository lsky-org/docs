import{_ as e,c as t,a2 as o,o as s}from"./chunks/framework.DPuwY6B9.js";const u=JSON.parse('{"title":"安装","description":"安装 Lsky Pro 2.x","frontmatter":{"title":"安装","description":"安装 Lsky Pro 2.x"},"headers":[],"relativePath":"archive/free/v2/quick-start/installation.md","filePath":"zh/archive/free/v2/quick-start/installation.md","lastUpdated":1731937013000}'),i={name:"archive/free/v2/quick-start/installation.md"};function r(l,a,n,c,p,d){return s(),t("div",null,a[0]||(a[0]=[o(`<h1 id="安装兰空图床" tabindex="-1">安装兰空图床 <a class="header-anchor" href="#安装兰空图床" aria-label="Permalink to &quot;安装兰空图床&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">请注意</p><p>兰空图床不支持共享型虚拟主机(不支持安装拓展、修改 php.ini 等操作)安装</p></div><h2 id="下载正式版本" tabindex="-1">下载正式版本 <a class="header-anchor" href="#下载正式版本" aria-label="Permalink to &quot;下载正式版本&quot;">​</a></h2><p>兰空图床的每个版本都是通过 github 发布，下载正式版本请访问 <a href="https://github.com/lsky-org/lsky-pro/releases" target="_blank" rel="noreferrer">https://github.com/lsky-org/lsky-pro/releases</a></p><p>如果你<strong>不是</strong>开发者，<strong>请不要</strong>下载名称为 <code>Source Code</code> 的压缩包，此为核心源代码，需要自己安装拓展。</p><h2 id="运行环境配置" tabindex="-1">运行环境配置 <a class="header-anchor" href="#运行环境配置" aria-label="Permalink to &quot;运行环境配置&quot;">​</a></h2><ol><li>需要关闭 <code>open_basedir</code>，否则会有意想不到的错误。简单来说，open_basedir 是用来限制 PHP 读取目录。</li><li>安装 nginx 或 apache，PHP 8.0.2+，然后为 php 安装上必须的拓展。详见：<a href="/docs/free/v2/#安装要求">安装要求</a> 章节</li></ol><h2 id="准备安装" tabindex="-1">准备安装 <a class="header-anchor" href="#准备安装" aria-label="Permalink to &quot;准备安装&quot;">​</a></h2><ol><li>将安装包上传至站点目录然后解压，将站点的运行目录指向程序的 <code>public</code> 文件夹</li></ol><blockquote><p>nginx 需要设置伪静态，内容如下</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location / {</span></span>
<span class="line"><span>  try_files $uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>将程序所在目录的所有文件夹、子文件夹、文件的权限，用户组和所有者改为 <code>www</code>，权限改为 <code>0755</code></li></ol><blockquote><p>通常情况下，Web 站点目录的所有者和用户组为 <code>www:www</code></p></blockquote><p>若未正确设置权限，在后续的使用过程中可能会因为权限导致文件无法读取、无法写入、创建文件夹等一系列问题。</p><h2 id="开始安装" tabindex="-1">开始安装 <a class="header-anchor" href="#开始安装" aria-label="Permalink to &quot;开始安装&quot;">​</a></h2><p>配置好域名以后，访问站点 <strong>首页</strong> ，程序会自动跳转至安装页面，环境检测通过以后即可通过引导进行安装。</p>`,16)]))}const b=e(i,[["render",r]]);export{u as __pageData,b as default};
