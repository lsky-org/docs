# 环境要求

兰空图床是使用 [PHP](https://php.net) 语言，并使用 [Laravel](https://laravel.com) 开发框架开发的一款 Web 应用程序。
使用兰空图床，需要有一个 Web 服务器。常见的 Web 服务器例如：[LNMP](https://lnmp.com)(Nginx/MySQL/PHP)、[LNMPA](https://lnmp.org/lnmpa.html)(Nginx/MySQL/PHP/Apache)，它们分别都集成了 Web 应用程序必要的组件。

::: warning 注意
兰空图床不支持虚拟主机搭建，您必须拥有 Web 服务器的最高控制权，而虚拟主机没有这样的条件。
:::

### PHP 要求

您应该确保您的 Web 服务器具有以下最低 PHP 版本和扩展：

- PHP 版本 >= 8.2
- Ctype PHP 扩展
- cURL PHP 扩展
- DOM PHP 扩展
- Fileinfo PHP 扩展
- Filter PHP 扩展
- Hash PHP 扩展
- Mbstring PHP 扩展
- OpenSSL PHP 扩展
- PCRE PHP 扩展
- PDO PHP 扩展
- Session PHP 扩展
- Tokenizer PHP 扩展
- XML PHP 扩展
- Imagick PHP 拓展
- Pcntl PHP 拓展
- Zip PHP 拓展

::: warning 注意
如果你使用了云服务集成面板，控制面板厂商为了极致的安全追求，会将 PHP 的部分函数禁用，这些被禁用的函数中就包含一些程序运行时必要的函数，这时候您需要找到 PHP 的配置文件，搜索 `disable_functions` 配置项，将那些函数从这个配置项中移除。
:::

::: info 提示
通常情况下，这些拓展大部分都是已经安装并启用了的，程序安装时会检测必要的拓展是否安装，未通过检测则无法进行安装。
:::

### 数据库

- MariaDB 10.3+
- MySQL 5.7+
- PostgreSQL 10.0+（PHP 需要安装 pgsql 拓展）
- SQLite 3.35.0+
- SQL Server 2017+（PHP 需要安装 sqlsrv 和 pdo_sqlsrv 拓展，以及它们可能需要的任何依赖项，例如 Microsoft SQL ODBC 驱动程序）

## 服务器配置

### Nginx

我们推荐您使用 Nginx + PostgreSQL 作为组合来搭建兰空图床，PostgreSQL 可以更好的承受高并发上传请求。您也可以使用 Sqlite，以实现最小化安装。

### Supervisor

兰空图床使用消息队列来异步运行程序中的耗时任务，而启动消息队列服务，需要使用 PHP 的 CLI 模式，即通过命令终端执行：`php artisan queue:work` 使其正常运作。

在生产环境中，您需要一种方法来保持您的 `queue:work` 进程运行。`queue:work` 进程可能会因各种原因停止运行，例如超过工作者超时或执行 `queue:restart` 命令。

因此，您需要配置一个进程监视器，可以检测您的 `queue:work` 进程何时退出并自动重启它们。此外，进程监视器可以让您指定希望同时运行多少个 `queue:work` 进程。

Supervisor 是 Linux 环境中常用的进程监视器，我们将在以下文档中讨论如何配置它，或者你也可以选择其他任务你熟悉的进程管理软件。在正式安装之前，我们建议你先浏览一遍该示例文档。

::: details Supervisor 安装以及配置教程(示例)
#### 安装 Supervisor

Supervisor 是 Linux 操作系统的进程监视器，如果 `queue:work` 进程失败，它将自动重启它们。要在 Ubuntu 上安装 Supervisor，您可以使用以下命令：

```shell
sudo apt-get install supervisor
```

#### 配置 Supervisor

Supervisor 配置文件通常存储在 `/etc/supervisor/conf.d` 目录中。在此目录中，您可以创建任意数量的配置文件，指示 supervisor 如何监视您的进程。例如，让我们创建一个 `lsky-pro-worker.conf` 文件，用来启动和监视 `queue:work` 进程：

```ini
[program:lsky-pro-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /www/wwwroot/app.com/artisan queue:work
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www
numprocs=1
redirect_stderr=true
stdout_logfile=/www/wwwroot/app.com/storage/logs/worker.log
stopwaitsecs=3600
```

在此示例中，`numprocs` 指令将指示 Supervisor 运行一个 `queue:work` 进程，并监视所有进程，如果它们失败，则自动重启它们。您应更改配置中的 `command` 指令，以反映您所需的队列连接和工作者选项。

#### 启动 Supervisor

创建配置文件后，您可以使用以下命令更新 Supervisor 配置并启动进程：

```shell
sudo supervisorctl reread

sudo supervisorctl update

sudo supervisorctl start "lsky-pro-worker:*"
```

有关 Supervisor 的更多信息，请查阅 [Supervisor 文档](http://supervisord.org/index.html)。
:::

### ImageMagick

[ImageMagick](https://github.com/ImageMagick/ImageMagick) 是一款免费的开源软件套件，用于编辑和处理数字图像。它可用于创建、编辑、合成或转换位图图像，并支持多种文件格式，包括 JPEG、PNG、GIF、TIFF 和 PDF。

兰空图床依赖 php imagick 拓展，调用操作系统的 ImageMagick 软件实现图片编辑能力。

注意，php imagick 拓展和 ImageMagick 软件是两个东西，这两个都是必须要安装的。

ImageMagick 是一个独立的软件工具，用于在命令行操作图像（如转换格式、调整大小、添加效果等），而 php imagick 拓展是 PHP 的一个扩展库，它提供了 ImageMagick 的 PHP 接口，用于在 PHP 程序中调用 ImageMagick 的功能。

:::: details ImageMagick 安装教程(示例)

#### 检查系统是否安装 imageMagick

::: code-group

```shell [Ubuntu/Debian]
dpkg -l | grep imagemagick
```

```shell [CentOS/RHEL]
rpm -qa | grep ImageMagick
```

:::

如果没有任何输出则表示没有安装。

#### 安装

::: code-group

```shell [Ubuntu/Debian]
sudo apt install imagemagick
```

```shell [CentOS/RHEL]
sudo yum install ImageMagick
```

:::

有关 imageMagick 的更多信息，请查阅 [imageMagick 文档](https://imagemagick.org)。

::::

> [!IMPORTANT]
> 综上所述，搭建兰空图片的必要条件为：
> - 使用 Nginx 或 Apache 作为 Web 服务器
> - PHP 的版本和拓展必须达到要求
> - 数据库版本必须达到要求
> - 服务器需要安装 ImageMagick 和进程管理软件