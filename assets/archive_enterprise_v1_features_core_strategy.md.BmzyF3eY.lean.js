import{_ as i,c as a,a2 as n,o as l}from"./chunks/framework.DPuwY6B9.js";const c=JSON.parse('{"title":"储存策略","description":"企业版储存策略功能介绍","frontmatter":{"title":"储存策略","description":"企业版储存策略功能介绍"},"headers":[],"relativePath":"archive/enterprise/v1/features/core/strategy.md","filePath":"zh/archive/enterprise/v1/features/core/strategy.md","lastUpdated":1734677202000}'),t={name:"archive/enterprise/v1/features/core/strategy.md"};function p(e,s,h,k,r,d){return l(),a("div",null,s[0]||(s[0]=[n(`<div class="tip custom-block"><p class="custom-block-title">提示</p><p>兰空图床中的储存策略是整个系统的核心部分之一，目前支持<code>本地</code>、<code>AWS S3</code>、<code>阿里云 OSS</code>、<code>腾讯云 COS</code>、<code>七牛云</code>、<code>又拍云</code>、<code>SFTP</code>、<code>FTP</code>、<code>WebDav</code>、<code>Minio</code>。 一个储存策略可以归属于多个角色组，同时某个角色组也可以设置多个储存策略。</p></div><h2 id="如何设置归属角色组" tabindex="-1">如何设置归属角色组？ <a class="header-anchor" href="#如何设置归属角色组" aria-label="Permalink to &quot;如何设置归属角色组？&quot;">​</a></h2><p>在创建、编辑储存策略时，第一栏的角色组输入框会展示全部已存在的角色组，鼠标单击可直接选择，mac 按住 <code>command</code> 加鼠标左键可以多选、取消选择，windows 上为 <code>ctrl</code> 或 <code>alt</code> 键。</p><h2 id="如何自定义一个储存" tabindex="-1">如何自定义一个储存？ <a class="header-anchor" href="#如何自定义一个储存" aria-label="Permalink to &quot;如何自定义一个储存？&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>首先你需要有一定的 PHP 的编程基础，并对 Laravel 有一定的了解。</li><li>兰空图床的储存是由 <a href="https://flysystem.thephpleague.com/" target="_blank" rel="noreferrer">flysystem</a> 实现，flysystem 提供了一个接口来与不同类型的文件系统进行交互(增删改查等)，你只需要按照 flysystem 提供的接口实现你的储存即可。此教程不会详细的指导你如何实现该接口。这里有一份兰空图床实现的又拍云适配器 <a href="https://github.com/0xxb/flysystem-upyun" target="_blank" rel="noreferrer">https://github.com/0xxb/flysystem-upyun</a> 供你参考。</li></ul></div><p>储存驱动适配好以后，接下来要做的就是集成到兰空图床当中。</p><ol><li>你需要使用 <code>composer</code> 安装你的驱动器。现在我们假设你的驱动器名称为 <code>flysystem-custom</code>。</li></ol><p><code>composer install xxx/flysystem-custom</code></p><ol start="2"><li>增加一个枚举类</li></ol><p>在 <code>app/Enums/Strategy</code> 文件夹中新增一个文件 <code>CustomOption</code>，内容如下</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> App\\Enums\\Strategy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomOption</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@var</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 访问地址 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@var</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 用户名 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Username</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;username&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@var</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 密码 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Password</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@var</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 储存名称 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Bucket</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bucket&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>该枚举由你的储存需要的配置而定，其中 <code>url</code> 不管是什么储存都是必须的</p></blockquote><ol start="3"><li>增加一个枚举常量</li></ol><p>打开 <code>app/Enums/StrategyKey.php</code> 文件追加一行</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@var</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Custom */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Custom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div><blockquote><p>此常量值可以自定义，但不要和其他常量值重复。</p></blockquote><ol start="4"><li>更改图片服务类中的 <code>getAdapter</code> 方法</li></ol><p>打开 <code>app/Services/ImageService.php</code> 文件定位到 <code>getAdapter</code> 方法，你可以看到所有储存策略都是通过这个方法进行实例化的。 我们来增加一个 adapter，在 match 表达式中追加内容：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> App\\Enums\\Strategy\\CustomOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ....</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">StrategyKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Custom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CustomAdapter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $configs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CustomOption</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $configs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CustomOption</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bucket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $configs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CustomOption</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bucket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div><ol start="5"><li>给模型中的驱动常量加上自定义储存</li></ol><p>打开 <code>app/Models/Strategy.php</code> 文件，在 DRIVERS 常量中追加一行</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DRIVERS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    StrategyKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Custom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;自定义储存&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div><ol start="6"><li>修改表单验证器</li></ol><p>打开 <code>app/Http/Requests/Admin/StrategyRequest.php</code> 文件， 在 <code>rules</code> 方法里追加验证内容</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> array_merge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($array, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;key&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    StrategyKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Custom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;configs.username&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;required&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;configs.password&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;required&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;configs.bucket&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;required&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div><blockquote><p>验证规则请参考 Laravel 官方文档</p></blockquote><ol start="7"><li>增加 web 设置表单页面</li></ol><p>打开 <code>resources/views/admin/strategy/add.blade.php</code> 和 <code>resources/views/admin/strategy/edit.blade.php</code><br> 参考其他的储存策略表单，例如 minio：<br> 添加页面：<a href="https://github.com/lsky-org/lsky-pro/blob/d428d535f571550ae1bf222672c4611ad93a0238/resources/views/admin/strategy/add.blade.php#L272-L297" target="_blank" rel="noreferrer">add.blade.php</a><br> 编辑页面：<a href="https://github.com/lsky-org/lsky-pro/blob/d428d535f571550ae1bf222672c4611ad93a0238/resources/views/admin/strategy/edit.blade.php#L293-L320" target="_blank" rel="noreferrer">edit.blade.php</a></p><p>至此，一个新的储存就适配完成了，这时候就可以在储存策略添加表单中，选择你的自定义储存策略进行配置、测试上传、管理等。</p><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="储存的特殊说明" tabindex="-1">储存的特殊说明 <a class="header-anchor" href="#储存的特殊说明" aria-label="Permalink to &quot;储存的特殊说明&quot;">​</a></h3><h4 id="本地储存" tabindex="-1">本地储存 <a class="header-anchor" href="#本地储存" aria-label="Permalink to &quot;本地储存&quot;">​</a></h4><p>为了实现本地储存可以更改储存位置，所以本地储存必须有一个域名后缀，例如 <a href="http://domain.com/**uploads**/123.png" target="_blank" rel="noreferrer">http://domain.com/**uploads**/123.png</a> 中的 uploads。后缀对应的是 public 目录下的符号连接。</p><h4 id="阿里云-oss" tabindex="-1">阿里云 OSS <a class="header-anchor" href="#阿里云-oss" aria-label="Permalink to &quot;阿里云 OSS&quot;">​</a></h4><p>如果使用 RAM 账户，请授予该账户以下权限：</p><ul><li>AliyunOSSFullAccess</li><li>AliyunOSSReadOnlyAccess</li></ul><h4 id="腾讯云-cos" tabindex="-1">腾讯云 COS <a class="header-anchor" href="#腾讯云-cos" aria-label="Permalink to &quot;腾讯云 COS&quot;">​</a></h4><ul><li><p>如果使用子账户，请授予该账户以下权限</p><ul><li>QcloudCOSDataFullControl</li><li>QcloudCOSDataReadOnly</li><li>QcloudCOSDataWriteOnly</li><li>QcloudCOSFullAccess</li><li>QcloudCOSListOnly</li><li>QcloudCOSMetaAccMgmt</li><li>QcloudCOSReadOnlyAccess</li><li>QcloudAccessForCSGRole</li><li>QcloudAccessForDsgcRole</li><li>QcloudAccessForTCRRole</li><li>QcloudAccessForTCSRole</li></ul></li><li><p>腾讯云的储存桶名称由 名称+appid 组合，在兰空图床后台的储存策略表单中请分开填写。</p></li></ul><h4 id="minio" tabindex="-1">Minio <a class="header-anchor" href="#minio" aria-label="Permalink to &quot;Minio&quot;">​</a></h4><ul><li>如果使用内网 ip 进行连接，region 可以为空，如果是外网，sdk 则会验证区域，没有设置区域则可以固定为 us-east-1</li></ul>`,40)]))}const g=i(t,[["render",p]]);export{c as __pageData,g as default};