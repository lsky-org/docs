import{_ as e,c as t,a2 as s,o as i}from"./chunks/framework.DPuwY6B9.js";const u=JSON.parse('{"title":"角色组","description":"企业版角色组功能介绍","frontmatter":{"title":"角色组","description":"企业版角色组功能介绍"},"headers":[],"relativePath":"archive/enterprise/v1/features/core/group.md","filePath":"zh/archive/enterprise/v1/features/core/group.md","lastUpdated":1731937013000}'),l={name:"archive/enterprise/v1/features/core/group.md"};function o(n,a,c,r,p,d){return i(),t("div",null,a[0]||(a[0]=[s(`<div class="tip custom-block"><p class="custom-block-title">提示</p><p>兰空图床中的角色组是整个系统的核心部分之一，无论是已注册用户、游客、管理员都受角色组控制。系统安装完成以后会默认创建一个默认的角色组，同时也是游客默认组，设置为游客组的角色组会控制游客上传。并且系统只能设置一个游客组。 设置为默认组的角色组，新用户将会默认归属该角色组。</p></div><h2 id="上传频率限制" tabindex="-1">上传频率限制 <a class="header-anchor" href="#上传频率限制" aria-label="Permalink to &quot;上传频率限制&quot;">​</a></h2><p>在创建、编辑角色组时，「常规配置」中可以看到六个名称为<strong>限制</strong>结尾的输入框，配置及作用：</p><ul><li>并发上传限制(限制上传时队列中同时上传图片数量的限制)</li><li>每分钟上传限制(限制一分钟内最大上传数量)</li><li>每小时上传限制(限制一小时内最大上传数量)</li><li>每天上传限制(限制24小时内最大上传数量)</li><li>每周上传限制(限制7天内最大上传数量)</li><li>每月上传限制(限制一个月内最大上传数量)</li></ul><div class="warning custom-block"><p class="custom-block-title">注意</p><p>上传数量限制，是代表当前时间往前推这段时间内所上传的图片数量限制。例如每周上传限制，是指<strong>七天之前</strong>到<strong>当前时间</strong>的这个范围内，而不是指本周内。</p></div><h2 id="命名规则" tabindex="-1">命名规则 <a class="header-anchor" href="#命名规则" aria-label="Permalink to &quot;命名规则&quot;">​</a></h2><p>角色组可以对上传后的图片按照命名规则表中的规则对图片的物理储存路径、文件名称进行重写，并且相同、不同的规则可以组合使用。</p><h2 id="原图保护" tabindex="-1">原图保护 <a class="header-anchor" href="#原图保护" aria-label="Permalink to &quot;原图保护&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>原图保护的作用是隐藏图片的真实 url 路径，未开启前图片是通过运行环境输出并缓存的，开启后请求该图片会通过 PHP 接管，由 PHP 处理图片的输出。</p></div><p><img src="https://user-images.githubusercontent.com/22728201/158729429-ebb0fb57-ce0b-4903-922b-aca94bc8370e.png" alt="image"></p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>原图保护功能对服务器配置要求较高，虽然有缓存驱动，原理还是从内存中读取二进制内容，且每次都将图片内容读取到内存中，对服务器内存有着比较高的要求。 这种负载压力在图片请求量(除了缩略图)过多的时候尤为明显。</p></div><h2 id="图片审核" tabindex="-1">图片审核 <a class="header-anchor" href="#图片审核" aria-label="Permalink to &quot;图片审核&quot;">​</a></h2><h3 id="腾讯云内容安全" tabindex="-1">腾讯云内容安全 <a class="header-anchor" href="#腾讯云内容安全" aria-label="Permalink to &quot;腾讯云内容安全&quot;">​</a></h3><p>申请地址：<a href="https://cloud.tencent.com/product/ims" target="_blank" rel="noreferrer">https://cloud.tencent.com/product/ims</a></p><h5 id="endpoint" tabindex="-1">Endpoint <a class="header-anchor" href="#endpoint" aria-label="Permalink to &quot;Endpoint&quot;">​</a></h5><p>固定为 ims.tencentcloudapi.com 即可。</p><h5 id="地域" tabindex="-1">地域 <a class="header-anchor" href="#地域" aria-label="Permalink to &quot;地域&quot;">​</a></h5><ul><li>华北地区(北京) ap-beijing</li><li>华南地区(广州) ap-guangzhou</li><li>亚太南部(孟买) ap-mumbai</li><li>华东地区(上海) ap-shanghai</li><li>亚太东南(新加坡) ap-singapore</li><li>美国东部(弗吉尼亚) na-ashburn</li><li>美国西部(硅谷) na-siliconvalley</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果使用子用户，请授予该账户 QcloudIMSFullAccess、QcloudIMSReadOnlyAccess 权限</p></div><h3 id="阿里云内容安全" tabindex="-1">阿里云内容安全 <a class="header-anchor" href="#阿里云内容安全" aria-label="Permalink to &quot;阿里云内容安全&quot;">​</a></h3><p>申请地址：<a href="https://www.aliyun.com/product/lvwang" target="_blank" rel="noreferrer">https://www.aliyun.com/product/lvwang</a></p><h5 id="业务场景" tabindex="-1">业务场景 <a class="header-anchor" href="#业务场景" aria-label="Permalink to &quot;业务场景&quot;">​</a></h5><p>业务场景对应内容安全控制台中的 -&gt; 设置 -&gt; 机器审核 -&gt; 业务场景</p><h5 id="地域-1" tabindex="-1">地域 <a class="header-anchor" href="#地域-1" aria-label="Permalink to &quot;地域&quot;">​</a></h5><p>地域目前阿里云支持：</p><ul><li>cn-shanghai：华东2（上海）</li><li>cn-beijing：华北2（北京）</li><li>cn-shenzhen：华南1（深圳）</li><li>ap-southeast-1：新加坡</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果你使用的「子用户 AccessKey」，即 RAM 账户，请授予该账户 AliyunYundunGreenWebFullAccess 权限。</p></div><h3 id="nsfwjs" tabindex="-1">NsfwJS <a class="header-anchor" href="#nsfwjs" aria-label="Permalink to &quot;NsfwJS&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>此图片审核驱动需要自建，该项目地址：<a href="https://github.com/infinitered/nsfwjs" target="_blank" rel="noreferrer">https://github.com/infinitered/nsfwjs</a></p></div><h5 id="接口地址" tabindex="-1">接口地址 <a class="header-anchor" href="#接口地址" aria-label="Permalink to &quot;接口地址&quot;">​</a></h5><p>你自建的审核接口地址<br> 你需要使用 node 环境启动一个服务器，并适配 nsfwjs。然后上传接口必须返回以下结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;porn&quot;: 0,</span></span>
<span class="line"><span>    &quot;sexy&quot;: 0,</span></span>
<span class="line"><span>    &quot;hentai&quot;: 0,</span></span>
<span class="line"><span>    &quot;neutral&quot;: 0,</span></span>
<span class="line"><span>    &quot;drawing&quot;: 0</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>请注意，以上所有属性值，都应该是使用 0-1 之间的数值来表示百分比。</p></blockquote><h5 id="属性名称" tabindex="-1">属性名称 <a class="header-anchor" href="#属性名称" aria-label="Permalink to &quot;属性名称&quot;">​</a></h5><p>接口的文件属性名称，例如 <code>image</code></p><h2 id="水印配置" tabindex="-1">水印配置 <a class="header-anchor" href="#水印配置" aria-label="Permalink to &quot;水印配置&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">警告</p><p>兰空图床并不推荐使用你使用水印功能，这将可能占用大量的内存使用。如果使用了 cdn 或第三方储存，推荐使用第三方的图片处理规则来实现水印功能(或在水印功能中选择「覆盖原图」选项，选择后会直接在上传的原始图片上加上水印)。</p><p>why？</p><p>一个 3MB 的 jpeg 图片，在处理中可能会占用到 60 MB甚至更高，这是理想的状态下，但通常情况下，甚至会有可能达到 30MB 的图片。 这种图片一旦通过合成水印，加上合成水印时所使用的字体文件或图片，这将会占用大量内存，而 PHP 的默认内存限制在 128MB，会很容易导致内存溢出。</p></div><h3 id="水印支持的图片格式" tabindex="-1">水印支持的图片格式 <a class="header-anchor" href="#水印支持的图片格式" aria-label="Permalink to &quot;水印支持的图片格式&quot;">​</a></h3><p><code>jpeg</code>、<code>jpg</code>、<code>png</code>、<code>psd</code>、<code>tif</code>、<code>bmp</code>、<code>webp</code></p><blockquote><p>不支持 gif 格式的图片增加水印。psd、tif、bmp 格式的图片将会以 png 的格式输出</p></blockquote><h3 id="水印位置" tabindex="-1">水印位置 <a class="header-anchor" href="#水印位置" aria-label="Permalink to &quot;水印位置&quot;">​</a></h3><p>水印除了支持九种固定位置外，有一个平铺的选项，会将文字、图片水印以平铺的方式合成到图片中，并且可以通过 x/y 来调整水印距离、位置、旋转角度。</p>`,42)]))}const b=e(l,[["render",o]]);export{u as __pageData,b as default};