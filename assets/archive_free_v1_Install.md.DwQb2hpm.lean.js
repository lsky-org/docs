import{_ as i,c as a,a2 as e,o as l}from"./chunks/framework.DPuwY6B9.js";const o=JSON.parse('{"title":"安装","description":"","frontmatter":{"title":"安装"},"headers":[],"relativePath":"archive/free/v1/Install.md","filePath":"zh/archive/free/v1/Install.md","lastUpdated":1731937013000}'),t={name:"archive/free/v1/Install.md"};function n(p,s,h,k,r,c){return l(),a("div",null,s[0]||(s[0]=[e(`<blockquote><p>因 Lsky Pro 需要使用 rewrite 重写 url，所以不支持虚拟主机安装。</p></blockquote><p>Lsky Pro 安装全程可视化页面，只需要下载程序解压到 web 站点目录，访问首页会自动跳转到安装页面，根据提示操作即可，具体步骤：</p><ol><li><p>下载兰空，上传至 web 运行环境，解压。</p></li><li><p>设置运行目录为 public。</p></li><li><p>配置 Rewrite 规则：</p><ul><li>Nginx：<div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!-e </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request_filename) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> ^(.*)$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /index.php?s=$1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">last</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li>Apache: Apache直接使用 <code>.htaccess</code> 即可。</li></ul></li><li><p>访问首页，未安装自动跳转至安装页面，根据页面提示安装即可。</p></li><li><p>安装完成以后请设置runtime目录 <code>0755</code> 权限，如果你使用本地存储，<code>public</code> 目录也需要设置为 <code>0755</code> 权限。</p></li></ol><div class="warning custom-block"><p class="custom-block-title">注意</p><p>1.6.0 版本开始, 不再支持修改网站运行目录</p></div>`,4)]))}const E=i(t,[["render",n]]);export{o as __pageData,E as default};
