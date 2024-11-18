---
title: Laravel Octane
description: 加速引擎
---

# Laravel Octane

::: tip
Laravel Octane 通过使用高性能应用程序服务器为您的应用程序提供服务来增强您的应用程序的性能，包括 Open Swoole，Swoole，和 RoadRunner。Octane 启动您的应用程序一次，将其保存在内存中，然后以极快的速度向它提供请求。
:::

::: warning 注意
- 服务启动后，程序会常驻内存，修改任何代码、包括程序在线更新后，都需要重新启动。
- Octane 是通过命令行的方式启动应用程序，启动后你需要配置反向代理以提供 web 服务。
- 使用 Octane 后，本地策略在创建或编辑时会出错，无法创建符号连接。
:::

## 配置环境变量
### RoadRunner
- OCTANE_SERVER=roadrunner

### Swoole
- OCTANE_SERVER=swoole

### 配置站点访问协议(可选)
- OCTANE_HTTPS=true

## 启动程序
执行命令 `php artisan octane:start`

## 重载 Workers
执行命令 `php artisan octane:reload`

## 停止服务器
执行命令 `php artisan octane:stop`

## 检查状态
执行命令 `php artisan octane:status`

## Nginx 反向代理示例
```
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
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
        set $suffix "";

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
```

## Supervisor
```
[program:lsky]
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
```