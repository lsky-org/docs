# 安装 Lsky Pro+

在开始安装之前，请确保您已经阅读过前面的[环境要求](./requirement)章节，将必要的环境配置好。

注意，本次安装教程是在**没有安装**服务器控制面板的情况下进行的，仅供参考，如果你使用控制面板进行操作，实际情况可能有所不同。

## 第一步，创建站点

首先我们必须创建一个新的站点，用来搭建兰空图床，如果您需要使用 mysql，你可能还需要创建一个 mysql 数据库。在本次教程中，我们使用推荐的 sqlite3 数据库。

:::: details 安装 sqlite3 (使用其他数据库请跳过)

检查是否安装：

```shell
$ sqlite3 --version
```

如果没有安装，请执行安装命令安装 sqlite3：

::: code-group

```shell [Debian/Ubuntu]
$ sudo apt install sqlite3 libsqlite3-dev
```

```shell [CentOS/RHEL]
$ sudo yum install sqlite sqlite-devel
```

:::

::::

站点配置完毕以后，将安装包文件上传至站点根目录下，现在我们假设我们的站点根目录为 `/www/wwwroot/app.com`，我们的安装包文件名为 `lsky-pro.zip`，上传后安装包路径应该为 `/www/wwwroot/app.com/lsky-pro.zip`。

接下来我们登录 SSH 终端，使用 `cd` 命令进入站点根目录：

```shell
$ cd /www/wwwroot/app.com
```

然后使用 `unzip` 命令解压安装包：

```shell
$ unzip lsky-pro.zip
```

## 第二步，开始安装

解压安装包后，我们先不着急安装程序，我们需要先获取到 Web 运行环境所使用的用户，使用该用户来执行安装命令，否则可能会出现文件权限相关的问题。

要获取 Web 环境的执行用户，我们可以找到 Nginx 或 Apache 的主配置文件。

通常是 `/etc/nginx/nginx.conf` 或 `/etc/nginx/conf.d/default.conf`，而 Apache 通常是在 通常是 `/etc/httpd/conf/httpd.conf` 或 `/etc/apache2/apache2.conf`。

执行以下命令查看用户：

::: code-group

```shell [Nginx]
$ grep "user" /etc/nginx/nginx.conf
```

```shell [Apache]
$ grep -E "^User|^Group" /etc/httpd/conf/httpd.conf
```

:::

我们以 Nginx 为例：

```shell
$ grep "user" grep "user" /etc/nginx/nginx.conf
```

执行后输出：
```shell
$ user  www www;
```

解释：
- 第一个 `www` 表示指定运行 Nginx 的用户为 www
- 第二个 `www` 表示指定运行 Nginx 的组为 www

这个输出表示，我们环境的运行用户是 `www`。

::: info
通常情况下，按照惯例大部分 Web 运行环境都是通过 `www` 或 `www-data` 用户运行的。 
:::

获取到 Web 运行环境的运行用户后，我们便可以开始安装了，注意，请确保以下命令是在站点根目录中执行的：

```shell
$ sudo -u www php artisan app:install
```

执行后程序会自动判断 PHP 是否符合安装要求，根据程序输出的指引，一步步填写内容安装即可。

## 第三步，配置队列

兰空图床在生成缩略图、图片处理以及发送邮件等等功能中，都需要使用消息队列来执行，我们可以使用 `sudo -u www php artisan queue:work` 命令来运行消息队列。

但是这个命令在我们关闭 SSH 终端窗口后就会停止运行，所以我们需要用到 `Supervisor` 这样的进程管理工具，来保证消息队列进程能一直常驻运行。

Supervisor 配置文件通常存储在 `/etc/supervisor/conf.d` 目录中。在此目录中，您可以创建任意数量的配置文件，指示 supervisor 如何监视您的进程。例如，让我们创建一个 `lsky-pro-worker.conf` 文件，用来启动和监视 `queue:work` 进程：

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

注意上面配置文件中的黄色高亮部分，尤其是 `user=www`，这里指的是使用 Web 环境的运行用户 `www` 来运行命令，默认是 `root`，如果你使用 `root` 则可能会出现消息队列任务中创建了的文件在 Web 环境中无法读取，这可能会造成兰空图床在运行中出现文件权限问题。

配置文件创建完毕以后，我们重启 Supervisor：

```shell
$ sudo supervisorctl reread && sudo supervisorctl update && sudo supervisorctl start "lsky-pro-worker:*"
```

## 第四步，配置伪静态

配置完队列后，我们还需要将程序的运行目录配置为 `public`，即站点的 Nginx 配置文件的站点根目录应该设置为 `/www/wwwroot/app.com/public`，配置示例：

```nginx configuration
server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    root /www/wwwroot/app.com/public; # [!code focus]

    # more ...
}
```

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

至此，程序安装完成。