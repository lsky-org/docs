import{_ as l,c as i,a2 as a,o}from"./chunks/framework.DPuwY6B9.js";const u=JSON.parse('{"title":"Lsky Pro V 2.x","description":"使用 Laravel 重构后的 2.x 版本","frontmatter":{"title":"Lsky Pro V 2.x","description":"使用 Laravel 重构后的 2.x 版本"},"headers":[],"relativePath":"archive/free/v2/index.md","filePath":"zh/archive/free/v2/index.md","lastUpdated":1731937013000}'),r={name:"archive/free/v2/index.md"};function t(d,e,c,h,s,n){return o(),i("div",null,e[0]||(e[0]=[a('<h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>Lsky Pro 是一个用于在线上传、管理图片的图床程序，中文名：兰空图床，你可以将它作为自己的云上相册，亦可以当作你的写作贴图库。<br> 兰空图床始于 2017 年 10 月，最早的版本由 ThinkPHP 5 开发，后又经历了数个版本的迭代，在 2021 年末启动了新的重写计划并于 2022 年 3 月份发布全新的 2.0 版本。</p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ul><li>支持<code>本地</code>等多种第三方云储存 <code>AWS S3</code>、<code>阿里云 OSS</code>、<code>腾讯云 COS</code>、<code>七牛云</code>、<code>又拍云</code>、<code>SFTP</code>、<code>FTP</code>、<code>WebDav</code>、<code>Minio</code></li><li>多种数据库驱动支持，<code>MySQL 5.7+</code>、<code>PostgreSQL 9.6+</code>、<code>SQLite 3.8.8+</code>、<code>SQL Server 2017+</code></li><li>支持配置使用多种缓存驱动，<code>Memcached</code>、<code>Redis</code>、<code>DynamoDB</code>、等其他关系型数据库，默认以文件的方式缓存</li><li>多图上传、拖拽上传、粘贴上传、动态设置策略上传、复制、一键复制链接</li><li>强大的图片管理功能，瀑布流展示，支持鼠标右键、单选多选、重命名等操作</li><li>自由度极高的角色组配置，可以为每个组配置多个储存策略，同时储存策略可以配置多个角色组</li><li>可针对角色组设置上传文件、文件夹路径命名规则、上传频率限制、图片审核等功能</li><li>支持图片水印、文字水印、水印平铺、设置水印位置、X/y 轴偏移量设置、旋转角度等</li><li>支持通过接口上传、管理图片、管理相册</li><li>支持在线增量更新、跨版本更新</li><li>图片广场</li></ul><h2 id="线上交流" tabindex="-1">线上交流 <a class="header-anchor" href="#线上交流" aria-label="Permalink to &quot;线上交流&quot;">​</a></h2><ul><li>Telegram 群组：<a href="https://t.me/lsky_pro" target="_blank" rel="noreferrer">https://t.me/lsky_pro</a></li></ul><h2 id="安装要求" tabindex="-1">安装要求 <a class="header-anchor" href="#安装要求" aria-label="Permalink to &quot;安装要求&quot;">​</a></h2><ul><li>PHP &gt;= 8.0.2</li><li>BCMath PHP 扩展</li><li>Ctype PHP 扩展</li><li>DOM PHP 拓展</li><li>Fileinfo PHP 扩展</li><li>JSON PHP 扩展</li><li>Mbstring PHP 扩展</li><li>OpenSSL PHP 扩展</li><li>PDO PHP 扩展</li><li>Tokenizer PHP 扩展</li><li>XML PHP 扩展</li><li>Imagick 拓展</li><li>exec、shell_exec 函数</li><li>readlink、symlink 函数</li><li>putenv、getenv 函数</li></ul><h2 id="支持的数据库" tabindex="-1">支持的数据库 <a class="header-anchor" href="#支持的数据库" aria-label="Permalink to &quot;支持的数据库&quot;">​</a></h2><ul><li>Mysql 5.7+</li><li>PostgreSQL 9.6+</li><li>SQLite 3.8.8+</li><li>SQL Server 2017+</li></ul><h2 id="捐赠" tabindex="-1">捐赠 <a class="header-anchor" href="#捐赠" aria-label="Permalink to &quot;捐赠&quot;">​</a></h2><p>Lsky Pro 的开发和更新等，都是作者在业余时间独立开发，并免费开源使用，如果您认可我的作品，并且觉得对你有所帮助我愿意接受来自各方面的捐赠😃。</p><table width="100%"><tr><th>支付宝</th><th>微信</th></tr><tr><td><img alt="支付宝" src="https://box.kancloud.cn/4f193c14546c32c00bcb415ebfedc421_256x256.png"></td><td><img alt="微信" src="https://img.kancloud.cn/5f/ef/5fef4de362089d614f85566b3a6746b4_228x229.png"></td></tr></table><h2 id="反馈问题" tabindex="-1">反馈问题 <a class="header-anchor" href="#反馈问题" aria-label="Permalink to &quot;反馈问题&quot;">​</a></h2><ul><li>若你在使用过程中遇到了匪夷所思的问题，第一步请先确认该问题是如何导致的，尝试自行检查解决</li><li>如果你觉得可能遇到了错误，认为该错误是程序的 bug，你可以前往 <a href="https://github.com/lsky-org/lsky-pro/issues" target="_blank" rel="noreferrer">https://github.com/lsky-org/lsky-pro/issues</a> 进行反馈</li><li>如果程序出现了崩溃级别的异常，例如 500 错误，通常情况下程序会在 <code>storage/logs</code> 目录下生成错误日志，出现这种情况反馈时请将日志文件携带(注意，日志中可能存在敏感信息)</li><li>不接受任何无厘头的提议、例如： <ul><li>能不能支持上传图片至 github、gitee、jsdelivr 等</li><li>能不能支持上传 mp4、avi 等视频</li></ul></li><li>当你准备向他人提问时，你应该先准备好你的问题，描述清楚你的场景。建议阅读 <a href="https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md" target="_blank" rel="noreferrer">提问的智慧</a></li></ul><h2 id="升级指南" tabindex="-1">升级指南 <a class="header-anchor" href="#升级指南" aria-label="Permalink to &quot;升级指南&quot;">​</a></h2><p>由于 2.x 版本与 1.x 存在巨大差异，且数据库结构层面变化较大，无法从旧版本直接升级至 2.x 版本，但是作者我用了亿点时间写了迁移脚本，尽管如此，从旧版本迁移还是一个比较繁琐的步骤。</p><div class="warning custom-block"><p class="custom-block-title">迁移之前你需要知道的事</p><ol><li>迁移脚本只会将你的旧版本的数据库数据迁移至新版本，如果你的旧版本使用的是本地储存，你需要自己移动物理文件。</li><li>新版本需要图片的尺寸数据，在迁移过程中需要获取图片信息，如果你的数据量较大，迁移可能需要很久，取决于你的网络以及服务器的网络。</li><li>脚本会迁移旧版本的角色组、策略配置、用户、图片数据，迁移后的角色组和储存策略无任何关联关系。</li><li>如果你使用的是本地储存策略，迁移后的图片，所有已迁移的图片访问 url 需要在域名后面加上 <code>i</code> 字母前缀。</li><li>迁移成功后的用户处于未验证状态，账号的密码为 <strong>用户名+邮箱地址</strong> 的组合。</li><li>脚本需要使用 php8 cli (命令行)模式下运行。</li></ol></div><h3 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h3><ol><li>先安装全新的 2.0 版本，安装成功后不要进行任何操作</li><li>保证旧版本只有一个管理员账号</li><li>需要将旧版本中的所有用到的储存策略配置填上访问域名，保证该储存策略的图片能正常通过该域名访问</li><li>如果使用第三方储存，需要关闭防盗链等一切访问限制，避免图像尺寸获取失败</li></ol><h3 id="迁移脚本配置" tabindex="-1">迁移脚本配置 <a class="header-anchor" href="#迁移脚本配置" aria-label="Permalink to &quot;迁移脚本配置&quot;">​</a></h3><p><a href="https://github.com/lsky-org/lsky-pro/releases/download/2.0/migrate.zip" target="_blank" rel="noreferrer">下载迁移脚本</a> ，将脚本解压至已安装 php8 运行环境的服务器的任意文件夹下，然后编辑脚本根目录下的 <code>config.yaml</code> 配置文件，将该文件中的旧版本数据库、新版本数据库配置填写完整。</p><p>同时请保证运行脚本的环境可以同时连接到这两个不同的数据库。</p><h3 id="开始迁移" tabindex="-1">开始迁移 <a class="header-anchor" href="#开始迁移" aria-label="Permalink to &quot;开始迁移&quot;">​</a></h3><p>迁移过程中，建议关闭旧版本网站。</p><p>使用 ssh 工具登录到服务器，cd 到脚本根目录（与 start.php 文件同级）<br> 然后执行迁移命令 <code>php start.php migrate</code></p><p>当命令窗口出现进度条时，表示正在迁移图片数据，如果你的图片量很多，那么等待的时间可能很久，过程中请不要关闭窗口、断网。</p><h3 id="后续操作" tabindex="-1">后续操作 <a class="header-anchor" href="#后续操作" aria-label="Permalink to &quot;后续操作&quot;">​</a></h3><p>当进度条走完以后，则数据迁移完成，旧版本的管理员账号将会被新版本安装时设置的管理员账号所代替，请使用安装时设置的管理员账号登录新版本网站。</p><p>迁移完成后组的配置都是系统默认值，旧版本中设置的配置需要在新版本中重新设置。</p><p>如果旧版本使用的是本地图片，需要将旧版本 <code>public</code> 目录下的图片文件，复制到新版本中的 <code>storage/app/uploads</code> 目录下。</p>',31)]))}const b=l(r,[["render",t]]);export{u as __pageData,b as default};