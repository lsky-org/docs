import{_ as e,o as n,c as i,b as a}from"./app.6f703a2f.js";const r={},s=a(`<h1 id="laravel-octane" tabindex="-1"><a class="header-anchor" href="#laravel-octane" aria-hidden="true">#</a> Laravel Octane</h1><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Laravel Octane \u901A\u8FC7\u4F7F\u7528\u9AD8\u6027\u80FD\u5E94\u7528\u7A0B\u5E8F\u670D\u52A1\u5668\u4E3A\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u670D\u52A1\u6765\u589E\u5F3A\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u6027\u80FD\uFF0C\u5305\u62EC Open Swoole\uFF0CSwoole\uFF0C\u548C RoadRunner\u3002Octane \u542F\u52A8\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u4E00\u6B21\uFF0C\u5C06\u5176\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u7136\u540E\u4EE5\u6781\u5FEB\u7684\u901F\u5EA6\u5411\u5B83\u63D0\u4F9B\u8BF7\u6C42\u3002</p></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><ul><li>\u670D\u52A1\u542F\u52A8\u540E\uFF0C\u7A0B\u5E8F\u4F1A\u5E38\u9A7B\u5185\u5B58\uFF0C\u4FEE\u6539\u4EFB\u4F55\u4EE3\u7801\u3001\u5305\u62EC\u7A0B\u5E8F\u5728\u7EBF\u66F4\u65B0\u540E\uFF0C\u90FD\u9700\u8981\u91CD\u65B0\u542F\u52A8\u3002</li><li>Octane \u662F\u901A\u8FC7\u547D\u4EE4\u884C\u7684\u65B9\u5F0F\u542F\u52A8\u5E94\u7528\u7A0B\u5E8F\uFF0C\u542F\u52A8\u540E\u4F60\u9700\u8981\u914D\u7F6E\u53CD\u5411\u4EE3\u7406\u4EE5\u63D0\u4F9B web \u670D\u52A1\u3002</li><li>\u4F7F\u7528 Octane \u540E\uFF0C\u672C\u5730\u7B56\u7565\u5728\u521B\u5EFA\u6216\u7F16\u8F91\u65F6\u4F1A\u51FA\u9519\uFF0C\u65E0\u6CD5\u521B\u5EFA\u7B26\u53F7\u8FDE\u63A5\u3002</li></ul></div><h2 id="\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h2><h3 id="roadrunner" tabindex="-1"><a class="header-anchor" href="#roadrunner" aria-hidden="true">#</a> RoadRunner</h3><ul><li>OCTANE_SERVER=roadrunner</li></ul><h3 id="swoole" tabindex="-1"><a class="header-anchor" href="#swoole" aria-hidden="true">#</a> Swoole</h3><ul><li>OCTANE_SERVER=swoole</li></ul><h3 id="\u914D\u7F6E\u7AD9\u70B9\u8BBF\u95EE\u534F\u8BAE-\u53EF\u9009" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7AD9\u70B9\u8BBF\u95EE\u534F\u8BAE-\u53EF\u9009" aria-hidden="true">#</a> \u914D\u7F6E\u7AD9\u70B9\u8BBF\u95EE\u534F\u8BAE(\u53EF\u9009)</h3><ul><li>OCTANE_HTTPS=true</li></ul><h2 id="\u542F\u52A8\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u7A0B\u5E8F" aria-hidden="true">#</a> \u542F\u52A8\u7A0B\u5E8F</h2><p>\u6267\u884C\u547D\u4EE4 <code>php artisan octane:start</code></p><h2 id="\u91CD\u8F7D-workers" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8F7D-workers" aria-hidden="true">#</a> \u91CD\u8F7D Workers</h2><p>\u6267\u884C\u547D\u4EE4 <code>php artisan octane:reload</code></p><h2 id="\u505C\u6B62\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62\u670D\u52A1\u5668" aria-hidden="true">#</a> \u505C\u6B62\u670D\u52A1\u5668</h2><p>\u6267\u884C\u547D\u4EE4 <code>php artisan octane:stop</code></p><h2 id="\u68C0\u67E5\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u72B6\u6001" aria-hidden="true">#</a> \u68C0\u67E5\u72B6\u6001</h2><p>\u6267\u884C\u547D\u4EE4 <code>php artisan octane:status</code></p><h2 id="nginx-\u53CD\u5411\u4EE3\u7406\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#nginx-\u53CD\u5411\u4EE3\u7406\u793A\u4F8B" aria-hidden="true">#</a> Nginx \u53CD\u5411\u4EE3\u7406\u793A\u4F8B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>map $http_upgrade $connection_upgrade {
    default upgrade;
    &#39;&#39;      close;
}

server {
    listen 80;
    listen [::]:80;
    server_name domain.com;
    server_tokens off;
    root /home/forge/domain.com/public;

    index index.php;

    charset utf-8;

    location /index.php {
        try_files /not_exists @octane;
    }

    location / {
        try_files $uri $uri/ @octane;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/domain.com-error.log error;

    error_page 404 /index.php;

    location @octane {
        set $suffix &quot;&quot;;

        if ($uri = /index.php) {
            set $suffix ?$query_string;
        }

        proxy_http_version 1.1;
        proxy_set_header Host $http_host;
        proxy_set_header Scheme $scheme;
        proxy_set_header SERVER_PORT $server_port;
        proxy_set_header REMOTE_ADDR $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;

        proxy_pass http://127.0.0.1:8000$suffix;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="supervisor" tabindex="-1"><a class="header-anchor" href="#supervisor" aria-hidden="true">#</a> Supervisor</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[program:lsky]
command=php artisan octane:start
directory=/www/html/lsky/
autorestart=true
startsecs=3
startretries=3
stdout_logfile_maxbytes=2MB
stderr_logfile_maxbytes=2MB
user=root
priority=999
numprocs=1
process_name=%(program_name)s_%(process_num)02d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),d=[s];function l(c,o){return n(),i("div",null,d)}var v=e(r,[["render",l],["__file","octane.html.vue"]]);export{v as default};
