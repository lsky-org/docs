# 安装 Lsky Pro+

兰空图床提供了两种安装方式，普通安装和 docker 安装，推荐使用 [docker 安装](#docker-安装)。

## Docker 安装

兰空图床的 docker 由已构建好的镜像包（lsky-docker-latest.tar.gz）提供，而非通过 docker hub 仓库拉取。

获取镜像包的方式目前只能本地构建，若需要构建好的镜像包，可通过授权中心->我的授权->管理->产品信息中找到入群链接，通过加入 QQ 群聊获取 docker 镜像文件。获得镜像文件后，使用命令导入：

```bash
gunzip -c lsky-pro-docker-latest.tar.gz | docker load
```

未来会提供授权中心直接下载的方式获取。

### 构建镜像

#### 构建镜像

进入程序根目录，执行：

```bash
docker build -t lsky-pro:latest -f docker/Dockerfile .
```

#### 多平台构建

```bash
docker buildx build --platform linux/amd64,linux/arm64 -t lsky-pro:latest -f docker/Dockerfile .
```

### 运行

#### SQLite 版本

```bash
docker run -d \
  --name lsky-pro \
  -p 8080:80 \
  -e APP_NAME=兰空图床 \
  -e APP_URL=your-domain \
  -e APP_LICENSE_KEY=your-license-key \
  -e ADMIN_USERNAME=admin \
  -e ADMIN_EMAIL=admin@qq.com \
  -e ADMIN_PASSWORD=123456 \
  -v lsky-storage:/var/www/html/storage \
  -v lsky-database:/var/www/html/database \
  lsky-pro:latest
```

#### MySQL 版本

::: warning 注意
- 连接独立的数据库，需要提前安装并启动后创建数据库，或连接宿主机中的 mysql。
- 容器内 MySQL，DB_HOST 对应 docker-compose 中的服务名
- 宿主机 MySQL，DB_HOST 通常为 host.docker.internal（如果在 Linux 系统中无法使用 host.docker.internal，可通过设置 --add-host 或将宿主机 IP 显式写入 /etc/hosts）  
:::

```bash
docker run -d \
  --name lsky-pro \
  -p 8080:80 \
  -e APP_NAME=兰空图床 \
  -e APP_URL=your-domain \
  -e APP_LICENSE_KEY=your-license-key \
  -e ADMIN_USERNAME=admin \
  -e ADMIN_EMAIL=admin@qq.com \
  -e ADMIN_PASSWORD=123456 \
  -e APP_LICENSE_KEY=your-license-key \
  -e DB_CONNECTION=mysql \
  -e DB_HOST=mysql-server \
  -e DB_PORT=3306 \
  -e DB_DATABASE=lsky \
  -e DB_USERNAME=lsky \
  -e DB_PASSWORD=your-password \
  -v lsky-storage:/var/www/html/storage \
  lsky-pro:latest
```

示例：

```bash
docker run -d \
  --name lsky-pro \
  -p 8080:80 \
  -e APP_NAME=兰空图床 \
  -e APP_URL=https://lsky.pro \
  -e APP_LICENSE_KEY=xxxx-xxxx-xxxx \
  -e ADMIN_USERNAME=admin \
  -e ADMIN_EMAIL=admin@qq.com \
  -e ADMIN_PASSWORD=123456 \
  -v lsky-storage:/var/www/html/storage \
  -v lsky-database:/var/www/html/database \
  lsky-pro:latest
```

启动后则安装成功，浏览器输入 http://localhost:8080 访问。后台通过 http://localhost:8080/admin 访问。

容器内部会自动处理并添加队列、计划任务等配置、优化，无需手动操作。

#### 完整配置示例

```bash
docker run -d \
  --name lsky-pro \
  -p 8080:80 \
  -e APP_NAME="兰空图床" \
  -e APP_URL=https://img.example.com \
  -e APP_LICENSE_KEY=your-license-key \
  -e DB_CONNECTION=mysql \
  -e DB_HOST=mysql-server \
  -e DB_DATABASE=lsky \
  -e DB_USERNAME=lsky \
  -e DB_PASSWORD=your-password \
  -e ADMIN_USERNAME=admin \
  -e ADMIN_EMAIL=admin@example.com \
  -e ADMIN_PASSWORD=secure-password \
  -e CACHE_STORE=redis \
  -e REDIS_HOST=redis-server \
  -v lsky-storage:/var/www/html/storage \
  lsky-pro:latest
```

### 环境变量配置

#### 应用基础配置

| 变量名               | 是否必须 | 默认值                 | 说明      |
|-------------------|------|---------------------|---------|
| `APP_LICENSE_KEY` | 是    | -                   | 许可证密钥   |
| `APP_URL`         | 是    | `http://localhost`  | 应用URL   |
| `ADMIN_USERNAME`  | 是    | `admin`             | 管理员用户名  |
| `ADMIN_EMAIL`     | 是    | `admin@example.com` | 管理员邮箱   |
| `ADMIN_PASSWORD`  | 是    | `admin123`          | 管理员密码   |
| `APP_NAME`        | 否    | `兰空图床`              | 应用名称    |
| `DB_CONNECTION`   | 否    | `sqlite`            | 数据库类型   |
| `DB_HOST`         | 否    | `127.0.0.1`         | 数据库主机   |
| `DB_PORT`         | 否    | `3306`              | 数据库主机   |
| `DB_DATABASE`     | 否    | -                   | 数据库名/路径 |
| `DB_USERNAME`     | 否    | -                   | 数据库用户名  |
| `DB_PASSWORD`     | 否    | -                   | 数据库密码   |

::: warning 注意
务必检查 `APP_LICENSE_KEY` 与 `APP_URL` 是否正确，`APP_URL` 必须是完整的协议+域名，例如：https://lsky.pro，`APP_URL` 所填写的域名必须在授权中心添加（使用子域名需要保证主域名已被添加），否则授权验证失败会导致程序安装失败。
:::

### 故障排除

#### 查看日志

```bash
docker logs lsky-pro
```

#### 进入容器

```bash
docker exec -it lsky-pro bash
```

#### 重新安装

```bash
docker exec -it lsky-pro rm /var/www/html/installed.lock /var/www/html/.env
docker restart lsky-pro
```

#### 清除缓存

```bash
docker exec -it lsky-pro php artisan optimize:clear
```

### Docker Compose 示例

#### SQLite 版本

```yaml
services:
  lsky-pro:
    image: lsky-pro:latest
    container_name: lsky-pro
    ports:
      - "8080:80"
    environment:
      - APP_NAME=兰空图床
      - APP_URL=https://lsky.pro
      - APP_LICENSE_KEY=xxxx-xxxx-xxxx-xxxx
      - ADMIN_USERNAME=admin
      - ADMIN_EMAIL=admin@qq.com
      - ADMIN_PASSWORD=secure-password
    volumes:
      - lsky-storage:/var/www/html/storage
      - lsky-database:/var/www/html/database
    restart: unless-stopped

volumes:
  lsky-storage:
  lsky-database:
```

#### MySQL 版本

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
    image: lsky-pro:latest
    depends_on:
      - mysql
    ports:
      - "8080:80"
    environment:
      - APP_NAME=兰空图床
      - APP_URL=https://lsky.pro
      - APP_LICENSE_KEY=xxxx-xxxx-xxxx-xxxx
      - ADMIN_USERNAME=admin
      - ADMIN_EMAIL=admin@qq.com
      - ADMIN_PASSWORD=secure-password
      - DB_CONNECTION=mysql
      - DB_HOST=mysql
      - DB_DATABASE=lsky
      - DB_USERNAME=lsky
      - DB_PASSWORD=lsky-password
    volumes:
      - lsky-storage:/var/www/html/storage
    restart: unless-stopped

volumes:
  mysql-data:
  lsky-storage:
```

#### 编排启动

```bash
docker-compose -p lsky-pro up -d
```

::: danger 警告
如若修改了 `docker-compose.yml` 文件，请不要重复运行 `docker-compose up -d` 命令。否则重建镜像，会让程序重新安装，造成数据被覆盖。
:::

### 挂载宿主机目录？

有时候您可能希望将 `storage` 或其他目录挂载到宿主机中的文件夹，例如 `data` 文件夹：

```bash
  # ...

  volumes:
    - ./data:/var/www/html/storage
  restart: unless-stopped

  # ...
```

从宿主机挂载此 data 文件夹，data 文件夹会替换 docker 容器内 `/var/www/html/storage` 文件夹，而 `storage` 文件夹还存在子目录和文件。

所以我们在挂载的时候一定要注意，若将文件夹替换后导致容器内部的文件夹缺失，可能会导致程序无法正常运行！

解决方法是将程序中的 `storage` 目录中的子文件夹都复制到 `data` 目录中。复制后目录结构类似：

```
data/
├── app/
│   ├── cache/
│   └── ...
├── debugger/
│   └── ...
├── framework/
│   ├── cache/
│   │   └── data/
│   ├── sessions/
│   ├── views/
│   └── testing/
├── logs/
├── pail/
│
```

### 反向代理配置示例

```nginx configuration
location ~ ^/ {
    proxy_pass http://localhost:8080;
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

### 其他

更多信息查阅程序中的 `docker/DOCKER.md` 文件阅读更详细的部署文档。

::: danger 警告
请不要将镜像上传至 docker hub 或打包后分发，否则可能会泄漏密钥等隐私数据。
:::

## 普通安装

在开始安装之前，请确保您已经阅读过前面的[环境要求](./requirement)章节，将必要的环境配置好。

注意，本次安装教程是在**没有安装**服务器控制面板的情况下进行的，仅供参考，如果您使用控制面板进行操作，实际情况可能有所不同。

::: tip 为什么没有可视化安装页面？
由于 PHP 存在两种运行方式：FPM 和 CLI，通常情况下服务器这两种环境中的 PHP 版本是一致的，但是由于集成环境软件存在多个不同版本的
PHP，这就会导致两种环境 PHP 版本不一致，这种情况下就可能会造成很多小伙伴在[配置消息队列](./install#第四步-配置队列)时非常困惑。
:::

### 第一步，创建站点

首先我们必须创建一个新的站点，用来搭建兰空图床，如果您需要使用 mysql，您可能还需要创建一个 mysql
数据库。在本次教程中，为了减少不必要的配置步骤，我们使用推荐的 sqlite3 数据库。

::: tip 我应该使用哪个数据库 ？
一般情况下，如果您的站点使用频率较高或上传时有高并发的需求（比如在上传图片的时候会一次性上传大量的图片），此时如果使用
sqlite 可能会因为并发问题导致 sqlite 锁表后上传失败。若要解决这个问题，推荐使用 mysql。
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

### 第二步，配置伪静态

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

### 第三步，开始安装

解压后的站点根目录存在一个安装脚本文件 `install.sh`，我们给该脚本赋予可执行权限：

```shell
chmod +x install.sh
```

然后执行安装脚本：

```shell
./install.sh
```

然后根据脚本提示安装即可。

### 第四步，配置消息队列

兰空图床在生成缩略图、图片处理以及发送邮件等等功能中，这些耗时任务都需要使用消息队列来执行，我们可以使用
`php artisan queue:work` 命令来运行消息队列。

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

### 第五步，配置计划任务

兰空图床部分功能需要定时去运行处理，我们需要通过服务器的计划任务一分钟执行一次 `schedule:run`
命令来维持任务调度。有关计划任务的更多信息请[点击这里](https://www.runoob.com/w3cnote/linux-crontab-tasks.html)了解更多。

计划任务命令为：

```shell
* * * * * cd /www/wwwroot/app.com && php artisan schedule:run >> /dev/null 2>&1
```

::: tip 温馨提示
若使用宝塔面板，可以在宝塔的「计划任务」页面中可视化设置计划任务。但是需要注意，执行用户建议使用 www。
:::

至此，程序安装完成。
