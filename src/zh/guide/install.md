# 安装 Lsky Pro+ {#install}

兰空图床提供了两种安装方式，普通安装和 docker 安装，如果您更熟悉 docker，那么我们更推荐您使用 [Docker 安装](#docker-installation)，docker 安装后**不需要**配置消息队列和计划任务。

不熟悉 docker 的情况下建议使用传统的 [普通安装](#normal-installation)。

## Docker 安装 <Badge type="tip" text="推荐" /> {#docker-installation}

::: tip
兰空图床现已支持在[宝塔](https://www.bt.cn) Docker 环境中一键安装。打开宝塔 Docker 应用商店，搜索 `lsky pro`。名称为 Lsky Pro V2 的是付费版本。
:::

docker 版本与普通安装包安装的版本会有一些区别，在 docker 镜像中，我们集成了一个完整的高性能 Web 服务器（[FrankenPHP](https://frankenphp.dev)）来提供服务，并且默认使用更强的 `libvips` 库来处理图片（普通安装默认使用 `imagick`）。
不仅如此，docker 版本还针对 PHP 进行了一些优化，也内置了消息队列和计划任务，无需手动配置，开箱即用。

现在我们假设需要将相关配置文件、静态文件存放在宿主机的 `~/data` 目录。

### 创建持久化数据目录

```shell
mkdir -p ~/data
```

::: warning
首次运行会在此目录生成 `.env` 文件，保持空文件，启动成功后初次访问安装页面，系统检测到是空的文件才会写入正确的内容。这意味着你可以完全可以通过 `~/data/.env` 文件自定义环境变量。
:::

### Docker 容器启动 {#docker-container}

::: tip
你可以在 [https://hub.docker.com/r/0xxb/lsky-pro](https://hub.docker.com/r/0xxb/lsky-pro) 仓库页面找到所有可用的版本标签。
:::

```shell
docker run -d --name lsky-pro -p 8000:8000 \
    -v ~/data:/app/storage/app \
    -v ~/data/themes:/app/themes \
    0xxb/lsky-pro:latest
```

::: details 相关参数解释
- `-p 8000:8000` 参数解释 <Badge type="danger" text="必须" />
  - 前面的 8000 是宿主机端口。
  - 后面的 8000 是容器内部端口。
  - 容器内 8000 端口是提供 web 服务的默认端口，此命令将宿主机 8000 端口转发到容器内容 8000 端口提供 web 服务。

- `-v ~/data:/app/storage/app` 参数解释：<Badge type="danger" text="必须" />
  - `~/data` 是宿主机目录。
  - `/app/storage/app` 是容器内目录。此目录保存了程序运行过程中生成的缩略图文件、上传的文件以及缓存文件。
  - 容器在 `/app/storage/app` 中产生或修改的文件会同步保存在宿主机的 `~/data`。持久化数据（防止容器删除时数据丢失），同时方便宿主机直接管理文件。

- `-v ~/data/themes:/app/themes` 参数解释 <Badge type="info" text="可选" />
  - `~/data/themes` 是储存三方主题的目录。
  - `/app/themes` 是容器内程序存放主题的目录。
  - 如果您希望未来使用第三方主题或自己开发主题，建议将 `themes` 目录映射到宿主机，将主题放到此文件夹即可在后台管理的「主题管理」中识别，同时[创建新的主题](/advanced/theme#create-theme)也是存放在此目录。
:::

在上述命令中，由 docker 启动一个单容器的服务，并将宿主机的 8000 端口转发到容器内部的 8000 端口，启动成功后在宿主机浏览器访问 `http://宿主机IP:8000` 时，即可访问图形化安装页面，按照页面指引进行操作，配置程序基本信息和数据库。

::: tip
程序在容器启动后会自动创建 `~/data/database.sqlite` 文件，如果您不使用 sqlite，可以在程序安装成功后删除此文件。
:::

### Docker Compose 编排启动 {#docker-compose}

有时候你可能希望程序连接 docker 版本的数据库，并配合图床程序一起启动运行，你可以使用一下 docker-compose 配置示例进行编排启动。

#### MySQL 版本 {#docker-compose-mysql}

```yaml
services:
  mysql:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=root-password
      - MYSQL_DATABASE=lsky
      - MYSQL_USER=lsky
      - MYSQL_PASSWORD=lsky-password
    volumes:
      - mysql-data:/var/lib/mysql
    restart: unless-stopped

  lsky-pro:
    image: 0xxb/lsky-pro:latest
    depends_on:
      - mysql
    ports:
      - "8000:8000"
    volumes:
      - storage:/app/storage/app
      - themes:/app/themes
    restart: unless-stopped

volumes:
  mysql-data:
  storage:
  themes:
```

#### PostgreSQL 版本 {#docker-compose-pgsql}

```yaml
services:
  postgres:
    image: postgres:15
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres-data:/var/lib/postgresql/data
    restart: unless-stopped

  lsky-pro:
    image: 0xxb/lsky-pro:latest
    depends_on:
      - postgres
    ports:
      - "8000:8000"
    volumes:
      - storage:/app/storage/app
      - themes:/app/themes
    restart: unless-stopped

volumes:
  postgres-data:
  storage:
  themes:
```

#### 1Panel 外部 MySQL 挂载卷版本 {#docker-compose-mysql-with-volume}

```yaml
services:
  lsky-pro:
    image: 0xxb/lsky-pro:latest
    ports:
      - "8000:8000"
    volumes:
      - storage:/app/storage/app
      - themes:/app/themes
    restart: unless-stopped

networks:
  default:
    external: true
    name: 1panel-network
volumes:
  storage:
  themes:
```

#### 1Panel 外部 MySQL 本机目录版本 {#docker-compose-mysql-with-local}

```yaml
services:
  lsky-pro:
    image: 0xxb/lsky-pro:latest
    ports:
      - "8000:8000"
    volumes:
      - /www/lsky:/app/storage/app
      - /www/lsky/themes:/app/themes   
    restart: unless-stopped

networks:
  default:
    external: true
    name: 1panel-network
```

#### MySQL + Redis 完整版本 {#docker-compose-mysql-redis}

包含 MySQL、Redis 缓存服务的完整编排配置：

```yaml
services:
  mysql:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=root-password
      - MYSQL_DATABASE=lsky
      - MYSQL_USER=lsky
      - MYSQL_PASSWORD=lsky-password
    volumes:
      - mysql-data:/var/lib/mysql
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes --requirepass "redis-password"
    volumes:
      - redis-data:/data
    restart: unless-stopped

  lsky-pro:
    image: 0xxb/lsky-pro:latest
    depends_on:
      - mysql
      - redis
    ports:
      - "8000:8000"
    volumes:
      - storage:/app/storage/app
      - themes:/app/themes
    restart: unless-stopped

volumes:
  mysql-data:
  redis-data:
  storage:
  themes:
```

#### 本机目录映射完整版本 {#docker-compose-local-complete}

将配置文件和数据目录映射到本机的完整配置：

```yaml
services:
  mysql:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=root-password
      - MYSQL_DATABASE=lsky
      - MYSQL_USER=lsky
      - MYSQL_PASSWORD=lsky-password
    volumes:
      - ./mysql-data:/var/lib/mysql
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes --requirepass "redis-password"
    volumes:
      - ./redis-data:/data
    restart: unless-stopped

  lsky-pro:
    image: 0xxb/lsky-pro:latest
    depends_on:
      - mysql
      - redis
    ports:
      - "8000:8000"
    volumes:
      - ./data:/app/storage/app
      - ./data/themes:/app/themes
    restart: unless-stopped
```

::: tip 配置说明
- `redis-password`：Redis 访问密码，建议修改为强密码
- 数据持久化：MySQL 和 Redis 数据都会持久化存储
- 本机映射版本：所有数据直接存储在当前目录的子文件夹中，便于管理和备份
- 安装后，您需要在 `.env` 文件中配置相应的数据库和缓存连接信息
:::

#### Traefik 反向代理版本 {#docker-compose-traefik}

适用于使用 Traefik 作为反向代理的配置：

```yaml
services:
  mysql:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=root-password
      - MYSQL_DATABASE=lsky
      - MYSQL_USER=lsky
      - MYSQL_PASSWORD=lsky-password
    volumes:
      - mysql-data:/var/lib/mysql
    restart: unless-stopped
    networks:
      - lsky-internal

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes --requirepass "redis-password"
    volumes:
      - redis-data:/data
    restart: unless-stopped
    networks:
      - lsky-internal

  lsky-pro:
    image: 0xxb/lsky-pro:latest
    depends_on:
      - mysql
      - redis
    volumes:
      - storage:/app/storage/app
      - themes:/app/themes
    restart: unless-stopped
    networks:
      - lsky-internal
      - traefik
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.lsky.rule=Host(`your-domain.com`)"
      - "traefik.http.routers.lsky.entrypoints=websecure"
      - "traefik.http.routers.lsky.tls.certresolver=myresolver"
      - "traefik.http.services.lsky.loadbalancer.server.port=8000"
      - "traefik.docker.network=traefik"

volumes:
  mysql-data:
  redis-data:
  storage:
  themes:

networks:
  lsky-internal:
    driver: bridge
  traefik:
    external: true
```

#### PostgreSQL + Redis 完整版本 {#docker-compose-pgsql-redis}

包含 PostgreSQL、Redis 缓存服务的完整编排配置：

```yaml
services:
  postgres:
    image: postgres:15
    environment:
      - POSTGRES_DB=lsky
      - POSTGRES_USER=lsky
      - POSTGRES_PASSWORD=lsky-password
    volumes:
      - postgres-data:/var/lib/postgresql/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U lsky -d lsky"]
      interval: 30s
      timeout: 10s
      retries: 3

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes --requirepass "redis-password"
    volumes:
      - redis-data:/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "redis-cli", "--raw", "incr", "ping"]
      interval: 30s
      timeout: 10s
      retries: 3

  lsky-pro:
    image: 0xxb/lsky-pro:latest
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    ports:
      - "8000:8000"
    volumes:
      - storage:/app/storage/app
      - themes:/app/themes
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 30s

volumes:
  postgres-data:
  redis-data:
  storage:
  themes:
```

#### 编排启动 {#docker-compose-up}

```bash
docker-compose -p lsky-pro up -d
```

::: warning
使用编排启动时，启动容器后安装时，填写配置中的连接地址应该填写您编排文件中的服务名，比如 MySQL：

```yaml
services: # [!code focus]
  mysql: # 容器内的数据库连接地址 # [!code focus]
    image: mysql:8.0
    # 省略部分代码 ...
```

:::

### Docker 运维管理 {#docker-maintenance}

#### 查看容器状态和日志

```bash
# 查看所有容器状态
docker-compose -p lsky-pro ps

# 查看 lsky-pro 容器日志
docker-compose -p lsky-pro logs -f lsky-pro

# 查看数据库容器日志
docker-compose -p lsky-pro logs -f mysql
# 或 PostgreSQL
docker-compose -p lsky-pro logs -f postgres

# 查看 Redis 容器日志
docker-compose -p lsky-pro logs -f redis
```

#### 容器重启和更新

```bash
# 重启所有服务
docker-compose -p lsky-pro restart

# 仅重启 lsky-pro 服务
docker-compose -p lsky-pro restart lsky-pro

# 更新镜像并重启
docker-compose -p lsky-pro pull
docker-compose -p lsky-pro up -d
```

#### 备份和恢复

```bash
# 备份数据库（MySQL 示例）
docker-compose -p lsky-pro exec mysql mysqldump -u lsky -plsky-password lsky > backup.sql

# 恢复数据库
docker-compose -p lsky-pro exec -T mysql mysql -u lsky -plsky-password lsky < backup.sql

# 备份整个数据目录（包含符号链接）
tar -czf lsky-backup-$(date +%Y%m%d).tar.gz data/

# 备份数据目录（保持符号链接，不解引用）
tar -czhf lsky-backup-$(date +%Y%m%d).tar.gz --exclude='*.tmp' data/

# 完整备份（包括 Docker volumes）
docker-compose -p lsky-pro stop
tar -czf lsky-full-backup-$(date +%Y%m%d).tar.gz data/ docker-compose.yml .env
docker-compose -p lsky-pro start
```

::: tip 备份说明
- `tar` 命令会备份 `data/` 目录下映射到宿主机的所有实际文件
- 符号链接会被保留，但链接的目标文件需要确保在恢复环境中存在
- 对于 Docker volume 挂载的目录，备份的是宿主机上的实际文件内容
- 建议在备份前停止容器以确保数据一致性，特别是数据库相关文件
- 如果使用 Docker volume 而非本地目录映射，需要使用 `docker cp` 命令备份
:::

### 环境变量配置说明 {#env-configuration}

安装完成后，后续您可以在 `.env` 文件中修改以下重要参数：

```bash
# 应用配置
APP_URL=https://your-domain.com    # 应用访问地址，用于生成链接和邮件
APP_DEBUG=false                    # 调试模式，生产环境必须设为 false
APP_ENV=production                 # 应用环境，生产环境设为 production

# 数据库配置（MySQL 示例）
DB_CONNECTION=mysql                # 数据库类型：mysql、pgsql、sqlite
DB_HOST=mysql                      # 数据库主机地址，Docker Compose 中使用服务名
DB_PORT=3306                       # 数据库端口，MySQL 默认 3306，PostgreSQL 默认 5432
DB_DATABASE=lsky                   # 数据库名称
DB_USERNAME=lsky                   # 数据库用户名
DB_PASSWORD=lsky-password          # 数据库密码

# Redis 缓存配置
CACHE_STORE=redis                  # 缓存驱动，推荐使用 redis，也可设为 file
REDIS_HOST=redis                   # Redis 主机地址，Docker Compose 中使用服务名
REDIS_PASSWORD=redis-password      # Redis 访问密码
REDIS_PORT=6379                    # Redis 端口，默认 6379

# 会话配置
SESSION_DRIVER=redis               # 会话存储驱动，推荐 redis，也可用 file、database
SESSION_CONNECTION=default         # Redis 连接名称，使用默认连接

# 队列配置
QUEUE_CONNECTION=redis             # 队列驱动，推荐 redis，也可用 database、sync
```

::: warning
`.env` 文件修改后需要重启容器使队列重载配置。
:::

### 反向代理配置示例 {#proxy-configuration-example}

```nginx configuration
location ~ ^/ {
    proxy_pass http://localhost:8000;
    proxy_http_version 1.1;

    proxy_set_header Host $host;
    proxy_set_header Scheme $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $http_connection;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    add_header X-Cache $upstream_cache_status;
    add_header Cache-Control no-cache;
}
```

## 普通安装 {#normal-installation}

在开始安装之前，请确保您已经阅读过前面的[环境要求](./requirement)章节，将必要的环境配置好。

注意，本次安装教程是在**没有安装**服务器控制面板的情况下进行的，仅供参考，如果您使用控制面板进行操作，实际情况可能有所不同。

### 第一步，创建站点 {#create-website}

首先我们必须创建一个新的符合兰空图床运行环境的站点，用来搭建兰空图床，如果您需要使用 PostgreSQL，您可能还需要创建一个 PostgreSQL 数据库。在本次教程中，为了减少不必要的配置步骤，我们使用 sqlite3 数据库。

::: tip 我应该使用哪个数据库 ？
一般情况下，如果您的站点使用频率较高或上传时有高并发的需求（比如在上传图片的时候会一次性上传大量的图片），我们更推荐使用 PostgreSQL 或 MySQL。
:::

:::: details 安装 sqlite3 (使用其他数据库请跳过)

检查是否安装：

```shell
sqlite3 --version
```

如果没有安装，请执行安装命令安装 sqlite3：

::: code-group

```shell [Debian/Ubuntu]
sudo apt install sqlite3 libsqlite3-dev
```

```shell [CentOS/RHEL]
sudo yum install sqlite sqlite-devel
```

::::

站点配置完毕以后，将安装包文件上传至站点根目录下，现在我们假设我们的站点根目录为 `/www/wwwroot/app.com`，我们的安装包文件名为
`lsky-pro.zip`，上传后安装包路径应该为 `/www/wwwroot/app.com/lsky-pro.zip`。

接下来我们登录 SSH 终端，使用 `cd` 命令进入站点根目录：

```shell
cd /www/wwwroot/app.com
```

然后使用 `unzip` 命令解压安装包：

```shell
unzip lsky-pro.zip
```

### 第二步，配置伪静态 {#configure-rewrite}

我们需要将程序的运行目录配置为 `public`，即站点的 Nginx 配置文件的站点根目录应该设置为 `/www/wwwroot/app.com/public`
，配置示例：

```nginx configuration
server {
    listen 80;
    listen [::]:80;
    server_name app.com;
    root /www/wwwroot/app.com/public; # [!code focus]

    # more ...
}
```

::: tip 为什么运行目录需要设置为 `public` ？
您的 Web 服务器应该将所有请求定向到您的应用程序的 `public/index.php` 文件。您永远不应该尝试将 index.php
文件移动到项目的根目录，因为从项目根目录提供应用程序将会将许多敏感的配置文件暴露给公共互联网。
:::

然后继续设置伪静态，程序的 Nginx 伪静态配置示例文件位置在 `public/nginx.conf` 中。

```nginx configuration
location / {
    try_files $uri $uri/ /index.php?$query_string;
}

location ~ ^/livewire {
    expires off;
    try_files $uri $uri/ /index.php?$query_string;
}

location ~ .*\.(jpg|jpeg|webp|avif|bmp|gif|png|tif|tiff|jp2|j2k|jpf|jpm|jpg2|j2c|jpc|jpx|heic|heif)$ {
    try_files $uri $uri/ /index.php?$query_string;
}
```

将内容复制后，添加到站点的 nginx 伪静态配置文件中。

### 第三步，开始安装 {#start-installation}

兰空图床从 V 2.3.0 版本后开始提供可视化安装页面，只要完成以上配置后，站点绑定域名访问，程序会重定向至安装页面。

然后根据安装指引进行安装即可。

### 第四步，配置消息队列 {#configure-queue}

兰空图床在生成缩略图、图片处理以及发送邮件等等功能中，这些耗时任务都需要使用消息队列来执行，我们可以使用
`php artisan queue:work` 命令来运行消息队列。（程序安装成功后也会显示运行消息队列的命令，请以程序显示的为准。）

但是这个命令在我们关闭 SSH 终端窗口后就会停止运行，所以我们需要用到 `Supervisor` 这样的进程管理工具，来保证消息队列进程能一直常驻运行。

Supervisor 配置文件通常存储在 `/etc/supervisor/conf.d` 目录中。在此目录中，您可以创建任意数量的配置文件，指示 supervisor
如何监视您的进程。例如，让我们创建一个 `lsky-pro-worker.conf` 文件，用来启动和监视 `queue:work` 进程：

```ini
[program:lsky-pro-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /www/wwwroot/app.com/artisan queue:work // [!code warning]
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www // [!code warning]
numprocs=1
redirect_stderr=true
stdout_logfile=/www/wwwroot/app.com/storage/logs/worker.log // [!code warning]
stopwaitsecs=3600
```

注意上面配置文件中的黄色高亮部分，尤其是 `user=www`，这里指的是使用 Web 环境的运行用户 `www` 来运行命令，默认是 `root`。

兰空图床推荐您使用 Web 服务器所使用的用户运行，避免使用最高权限的账号。没有绝对的安全，如果应用代码被攻击者利用，可能导致系统级权限被滥用，危害整个服务器。

要获取 Web 环境的执行用户，我们可以找到 Nginx 或 Apache 的主配置文件。

通常是 `/etc/nginx/nginx.conf` 或 `/etc/nginx/conf.d/default.conf`，而 Apache 通常是在 `/etc/httpd/conf/httpd.conf` 或
`/etc/apache2/apache2.conf` 中。

执行以下命令查看用户：

::: code-group

```shell [Nginx]
grep "user" /etc/nginx/nginx.conf
```

```shell [Apache]
grep -E "^User|^Group" /etc/httpd/conf/httpd.conf
```

:::

配置文件创建完毕以后，我们重启 Supervisor：

```shell
sudo supervisorctl reread && sudo supervisorctl update && sudo supervisorctl start "lsky-pro-worker:*"
```

### 第五步，配置计划任务 {#configure-schedule}

兰空图床部分功能需要定时去运行处理，我们需要通过服务器的计划任务一分钟执行一次 `schedule:run`
命令来维持任务调度。有关计划任务的更多信息请[点击这里](https://www.runoob.com/w3cnote/linux-crontab-tasks.html)了解更多。

计划任务命令为：

```shell
* * * * * cd /www/wwwroot/app.com && php artisan schedule:run >> /dev/null 2>&1
```

::: tip 温馨提示
- 程序安装成功后也会显示运行计划任务的命令，请以程序显示的为准。
- 若使用宝塔面板，可以在宝塔的「计划任务」页面中可视化设置计划任务。但是需要注意，执行用户建议使用 www。
:::

至此，程序安装完成。

