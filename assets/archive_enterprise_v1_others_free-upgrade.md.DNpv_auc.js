import{_ as a,c as i,a2 as e,o as l}from"./chunks/framework.DPuwY6B9.js";const k=JSON.parse('{"title":"从开源版本升级","description":"开源版本升级至企业版","frontmatter":{"title":"从开源版本升级","description":"开源版本升级至企业版"},"headers":[],"relativePath":"archive/enterprise/v1/others/free-upgrade.md","filePath":"zh/archive/enterprise/v1/others/free-upgrade.md","lastUpdated":1744689981000}'),n={name:"archive/enterprise/v1/others/free-upgrade.md"};function p(t,s,o,c,d,h){return l(),i("div",null,s[0]||(s[0]=[e(`<h2 id="升级条件" tabindex="-1">升级条件 <a class="header-anchor" href="#升级条件" aria-label="Permalink to &quot;升级条件&quot;">​</a></h2><ul><li>最低必须是开源 V 2.x 版本</li><li>运行环境达到企业版本的要求(详见安装文档)</li></ul><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><ol><li><strong>备份数据</strong></li><li>获取企业版本安装包</li></ol><h2 id="迁移文件" tabindex="-1">迁移文件 <a class="header-anchor" href="#迁移文件" aria-label="Permalink to &quot;迁移文件&quot;">​</a></h2><ul><li>将开源版本中的 <code>public/thumbnails</code> 目录复制至企业版本 <code>storage/app</code> 文件夹中</li><li>将开源版本中的 <code>storage/app/uploads</code> 和 <code>storage/app/public</code> 目录复制至企业版本 <code>storage/app</code> 文件夹中</li><li>将开源版本中根目录的 <code>installed.lock</code> 文件复制至企业版本的根目录中</li></ul><p>操作后，新版本的目录结构应该是这样的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>www 站点根目录  </span></span>
<span class="line"><span>├─ ...                  ...</span></span>
<span class="line"><span>├─public                静态资源文件夹</span></span>
<span class="line"><span>│  ├─css                层叠式样式表文件夹</span></span>
<span class="line"><span>│  ├─fonts              样式所需的字体文件文件夹</span></span>
<span class="line"><span>│  ├─img                系统所需要的图片文件夹</span></span>
<span class="line"><span>│  └─js                 javascript 文件夹</span></span>
<span class="line"><span>├─ ...                  ...</span></span>
<span class="line"><span>├─storage               储存文件夹</span></span>
<span class="line"><span>│  ├─app                应用储存文件夹</span></span>
<span class="line"><span>│  │  ├─certs           支付功能证书文件夹</span></span>
<span class="line"><span>│  │  ├─public          程序上传文件的文件夹</span></span>
<span class="line"><span>│  │  ├─thumbnails      图片缩略图文件夹</span></span>
<span class="line"><span>│  │  └─uploads         本地策略上传文件的文件夹</span></span>
<span class="line"><span>│  ├─debugbar           Debug 缓存</span></span>
<span class="line"><span>│  ├─framework          核心框架缓存文件夹</span></span>
<span class="line"><span>│  └─logs               日志记录文件夹    </span></span>
<span class="line"><span>├─ ...                  ...</span></span>
<span class="line"><span>├─installed.lock        检测程序是否安装的文件</span></span>
<span class="line"><span>├─ ...                  ...</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果你是直接覆盖旧版本，请删除 public 目录中的所有符号连接以及 thumbnails 文件夹</p></div><h2 id="修改配置" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置" aria-label="Permalink to &quot;修改配置&quot;">​</a></h2><p>在企业版本根目录，将 <code>.env.example</code> 复制一份并重命名为 <code>.env</code>，然后编辑这个文件，下列内容都是必填项：</p><ul><li><code>APP_URL</code>=站点域名(需要 http(s): //，例如 <a href="https://pic.iqy.ink" target="_blank" rel="noreferrer">https://pic.iqy.ink</a>)</li><li><code>APP_LICENSE_KEY</code>=购买后得到的许可证密钥</li><li><code>DB_CONNECTION</code>=(数据库驱动名称 mysql、sqlite、pgsql、sqlsrv)</li><li><code>DB_HOST</code>=数据库连接地址(默认为 127.0.0.1)</li><li><code>DB_PORT</code>=数据库连接端口(默认为 3306)</li><li><code>DB_DATABASE</code>=数据库名称</li><li><code>DB_USERNAME</code>=数据库连接账号</li><li><code>DB_PASSWORD</code>=数据库连接密码</li><li><code>REDIS_HOST</code>=Redis 连接地址(默认为 127.0.0.1)</li><li><code>REDIS_PASSWORD</code>=Redis 连接密码(默认为 null，表示没有密码)</li><li><code>REDIS_PORT</code>=Redis 连接端口(默认为 6379)</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><ul><li>上述 <code>.env</code> 配置文件中的数据库配置表示的是开源版本正在使用的数据库，不需要重新创建</li><li>DB_ 开头的配置，可以直接从将正在运行的旧版本的 <code>.env</code> 文件中复制过来替换</li></ul></div><p>编辑完成后保存，即可将旧版本整站点文件夹以及文件删除，然后使用新版本替换。</p><blockquote><p>注意替换后，站点中的文件夹和文件权限和所有者可能会变，需要设置为 0755/www</p></blockquote><h2 id="执行升级" tabindex="-1">执行升级 <a class="header-anchor" href="#执行升级" aria-label="Permalink to &quot;执行升级&quot;">​</a></h2><p>确保上述配置填写无误后，在企业版本的根目录下依次执行下面的命令进行升级。</p><ol><li>生成 key</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key:generate</span></span></code></pre></div><ol start="2"><li>迁移数据库结构</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --seed</span></span></code></pre></div><ol start="3"><li>填充基础数据</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db:seed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --class=UpgradeFromFreeSeeder</span></span></code></pre></div><ol start="4"><li>重建符号连接</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lsky:symlinks</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果您使用了本地储存，需要登录兰空图床后台，重新保存策略，以此生成本地符号连接，没有符号连接将会无法访问本地所上传的图片。</p></div><ol start="5"><li>清除缓存</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> optimize:clear</span></span></code></pre></div><ol start="6"><li>最后一步(重要)</li></ol><p>此时还差最后一步，配置命令行，此步骤与安装教程中一致。参考安装教程中的最后一步，<a href="/docs/enterprise/v1/quick-start/installation.html#最后一步-命令行配置-重要">命令行配置</a>。</p><p>此时站点正常情况下已经可以访问了，注意需要清除浏览器缓存，否则样式可能会变得奇怪。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>数据无价，请在升级前做好备份。</p></div>`,32)]))}const u=a(n,[["render",p]]);export{k as __pageData,u as default};
