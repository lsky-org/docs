import{_ as s,c as n,a2 as e,o as p}from"./chunks/framework.CehHI-68.js";const u=JSON.parse('{"title":"Laravel Octane","description":"加速引擎","frontmatter":{"title":"Laravel Octane","description":"加速引擎"},"headers":[],"relativePath":"archive/free/v2/advanced/octane.md","filePath":"zh/archive/free/v2/advanced/octane.md","lastUpdated":1731937013000}'),l={name:"archive/free/v2/advanced/octane.md"};function o(i,a,r,t,c,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="laravel-octane" tabindex="-1">Laravel Octane <a class="header-anchor" href="#laravel-octane" aria-label="Permalink to &quot;Laravel Octane&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Laravel Octane 通过使用高性能应用程序服务器为您的应用程序提供服务来增强您的应用程序的性能，包括 Open Swoole，Swoole，和 RoadRunner。Octane 启动您的应用程序一次，将其保存在内存中，然后以极快的速度向它提供请求。</p></div><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>服务启动后，程序会常驻内存，修改任何代码、包括程序在线更新后，都需要重新启动。</li><li>Octane 是通过命令行的方式启动应用程序，启动后你需要配置反向代理以提供 web 服务。</li><li>使用 Octane 后，本地策略在创建或编辑时会出错，无法创建符号连接。</li></ul></div><h2 id="配置环境变量" tabindex="-1">配置环境变量 <a class="header-anchor" href="#配置环境变量" aria-label="Permalink to &quot;配置环境变量&quot;">​</a></h2><h3 id="roadrunner" tabindex="-1">RoadRunner <a class="header-anchor" href="#roadrunner" aria-label="Permalink to &quot;RoadRunner&quot;">​</a></h3><ul><li>OCTANE_SERVER=roadrunner</li></ul><h3 id="swoole" tabindex="-1">Swoole <a class="header-anchor" href="#swoole" aria-label="Permalink to &quot;Swoole&quot;">​</a></h3><ul><li>OCTANE_SERVER=swoole</li></ul><h3 id="配置站点访问协议-可选" tabindex="-1">配置站点访问协议(可选) <a class="header-anchor" href="#配置站点访问协议-可选" aria-label="Permalink to &quot;配置站点访问协议(可选)&quot;">​</a></h3><ul><li>OCTANE_HTTPS=true</li></ul><h2 id="启动程序" tabindex="-1">启动程序 <a class="header-anchor" href="#启动程序" aria-label="Permalink to &quot;启动程序&quot;">​</a></h2><p>执行命令 <code>php artisan octane:start</code></p><h2 id="重载-workers" tabindex="-1">重载 Workers <a class="header-anchor" href="#重载-workers" aria-label="Permalink to &quot;重载 Workers&quot;">​</a></h2><p>执行命令 <code>php artisan octane:reload</code></p><h2 id="停止服务器" tabindex="-1">停止服务器 <a class="header-anchor" href="#停止服务器" aria-label="Permalink to &quot;停止服务器&quot;">​</a></h2><p>执行命令 <code>php artisan octane:stop</code></p><h2 id="检查状态" tabindex="-1">检查状态 <a class="header-anchor" href="#检查状态" aria-label="Permalink to &quot;检查状态&quot;">​</a></h2><p>执行命令 <code>php artisan octane:status</code></p><h2 id="nginx-反向代理示例" tabindex="-1">Nginx 反向代理示例 <a class="header-anchor" href="#nginx-反向代理示例" aria-label="Permalink to &quot;Nginx 反向代理示例&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>map $http_upgrade $connection_upgrade {</span></span>
<span class="line"><span>    default upgrade;</span></span>
<span class="line"><span>    &#39;&#39;      close;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    listen [::]:80;</span></span>
<span class="line"><span>    server_name domain.com;</span></span>
<span class="line"><span>    server_tokens off;</span></span>
<span class="line"><span>    root /home/forge/domain.com/public;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    index index.php;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    charset utf-8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /index.php {</span></span>
<span class="line"><span>        try_files /not_exists @octane;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        try_files $uri $uri/ @octane;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location = /favicon.ico { access_log off; log_not_found off; }</span></span>
<span class="line"><span>    location = /robots.txt  { access_log off; log_not_found off; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log off;</span></span>
<span class="line"><span>    error_log  /var/log/nginx/domain.com-error.log error;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    error_page 404 /index.php;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location @octane {</span></span>
<span class="line"><span>        set $suffix &quot;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if ($uri = /index.php) {</span></span>
<span class="line"><span>            set $suffix ?$query_string;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Host $http_host;</span></span>
<span class="line"><span>        proxy_set_header Scheme $scheme;</span></span>
<span class="line"><span>        proxy_set_header SERVER_PORT $server_port;</span></span>
<span class="line"><span>        proxy_set_header REMOTE_ADDR $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection $connection_upgrade;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8000$suffix;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="supervisor" tabindex="-1">Supervisor <a class="header-anchor" href="#supervisor" aria-label="Permalink to &quot;Supervisor&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[program:lsky]</span></span>
<span class="line"><span>command=php artisan octane:start</span></span>
<span class="line"><span>directory=/www/html/lsky/</span></span>
<span class="line"><span>autorestart=true</span></span>
<span class="line"><span>startsecs=3</span></span>
<span class="line"><span>startretries=3</span></span>
<span class="line"><span>stdout_logfile_maxbytes=2MB</span></span>
<span class="line"><span>stderr_logfile_maxbytes=2MB</span></span>
<span class="line"><span>user=root</span></span>
<span class="line"><span>priority=999</span></span>
<span class="line"><span>numprocs=1</span></span>
<span class="line"><span>process_name=%(program_name)s_%(process_num)02d</span></span></code></pre></div>`,22)]))}const _=s(l,[["render",o]]);export{u as __pageData,_ as default};
