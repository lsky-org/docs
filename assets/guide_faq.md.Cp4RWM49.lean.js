import{_ as e,c as s,a2 as t,o as i}from"./chunks/framework.DPuwY6B9.js";const k=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"guide/faq.md","filePath":"zh/guide/faq.md","lastUpdated":1732588535000}'),r={name:"guide/faq.md"};function h(n,a,p,l,o,d){return i(),s("div",null,a[0]||(a[0]=[t(`<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><p>这里记录并解释一些常见的问题。</p><h2 id="为什么配置完了以后-访问站点显示-404" tabindex="-1">为什么配置完了以后，访问站点显示 404？ <a class="header-anchor" href="#为什么配置完了以后-访问站点显示-404" aria-label="Permalink to &quot;为什么配置完了以后，访问站点显示 404？&quot;">​</a></h2><p>请检查伪静态、站点运行目录是否设置正确，如果确认正确请尝试重启。</p><h2 id="能不能上传图片以外格式的文件-例如-mp4" tabindex="-1">能不能上传图片以外格式的文件，例如 mp4？ <a class="header-anchor" href="#能不能上传图片以外格式的文件-例如-mp4" aria-label="Permalink to &quot;能不能上传图片以外格式的文件，例如 mp4？&quot;">​</a></h2><p>不可以，程序定位就是管理图片，未做任何图片以外格式的文件支持。</p><h2 id="为什么不支持客户端直传" tabindex="-1">为什么不支持客户端直传 <a class="header-anchor" href="#为什么不支持客户端直传" aria-label="Permalink to &quot;为什么不支持客户端直传&quot;">​</a></h2><p>其一，由于第三方储存的多样性，有些第三方储存通过客户端直传后程序拿不到需要的数据，其二，图片本身就不是非常大的文件。</p><h2 id="我多次上传了相同的图片-图片管理中也出现了图片-这是-bug-还是-feature" tabindex="-1">我多次上传了相同的图片，图片管理中也出现了图片，这是 bug 还是 feature? <a class="header-anchor" href="#我多次上传了相同的图片-图片管理中也出现了图片-这是-bug-还是-feature" aria-label="Permalink to &quot;我多次上传了相同的图片，图片管理中也出现了图片，这是 bug 还是 feature?&quot;">​</a></h2><p>是 feature，在同一个储存策略下，上传相同的图片，程序不会重复的写入文件，但会创建文件记录，多条记录指向同一个物理文件。</p><h2 id="我的图片中-「复制图片」出错-显示-复制失败" tabindex="-1">我的图片中，「复制图片」出错，显示 复制失败 <a class="header-anchor" href="#我的图片中-「复制图片」出错-显示-复制失败" aria-label="Permalink to &quot;我的图片中，「复制图片」出错，显示 复制失败&quot;">​</a></h2><p>这与浏览器限制有关，跨域问题或站点必须以 https 的方式访问。了解更多 <a href="https://w3c.github.io/clipboard-apis/#dom-navigator-clipboard" target="_blank" rel="noreferrer">https://w3c.github.io/clipboard-apis/#dom-navigator-clipboard</a></p><h2 id="更新后出现样式异常、按钮不起作用" tabindex="-1">更新后出现样式异常、按钮不起作用？ <a class="header-anchor" href="#更新后出现样式异常、按钮不起作用" aria-label="Permalink to &quot;更新后出现样式异常、按钮不起作用？&quot;">​</a></h2><p>如果你使用了 cdn，请检查是否未刷新 cdn 的缓存。</p><h2 id="上传出现失败-请稍后重试" tabindex="-1">上传出现失败，请稍后重试？ <a class="header-anchor" href="#上传出现失败-请稍后重试" aria-label="Permalink to &quot;上传出现失败，请稍后重试？&quot;">​</a></h2><p>上传失败有很多原因，比如配置错误、文件较大返回 423 Request Entity Too Large 等等，出现错误通常情况下可以在 <code>storage/logs</code> 文件夹下找到错误日志，如果没有则表示错误并不是发生在程序中，而是其他原因。</p><h2 id="使用反向代理并且域名使用了-https-的情况下-程序请求静态资源、生成的链接却是-http" tabindex="-1">使用反向代理并且域名使用了 https 的情况下，程序请求静态资源、生成的链接却是 http ？ <a class="header-anchor" href="#使用反向代理并且域名使用了-https-的情况下-程序请求静态资源、生成的链接却是-http" aria-label="Permalink to &quot;使用反向代理并且域名使用了 https 的情况下，程序请求静态资源、生成的链接却是 http ？&quot;">​</a></h2><p>这种情况通常是因为你的程序正在从 80 端口进行转发流量，详细解释和解决方法：<a href="https://laravel.com/docs/9.x/requests#configuring-trusted-proxies" target="_blank" rel="noreferrer">https://laravel.com/docs/9.x/requests#configuring-trusted-proxies</a> 请尝试增加反向代理配置：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_http_version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $http_host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Scheme $scheme;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Upgrade $http_upgrade;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Connection $connection_upgrade;</span></span></code></pre></div><h2 id="能不能支持-xxxx-、xxxx-储存" tabindex="-1">能不能支持 xxxx 、xxxx 储存？ <a class="header-anchor" href="#能不能支持-xxxx-、xxxx-储存" aria-label="Permalink to &quot;能不能支持 xxxx 、xxxx 储存？&quot;">​</a></h2><p>市面上各种厂家的产品层出不穷，兰空图床只会对主流的、具备相应接口的产品作适配，兰空图床的储存是由 <a href="https://flysystem.thephpleague.com/" target="_blank" rel="noreferrer">flysystem</a> 实现，欢迎你提交 PR！</p>`,21)]))}const x=e(r,[["render",h]]);export{k as __pageData,x as default};