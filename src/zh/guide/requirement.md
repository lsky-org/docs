# 环境要求 {#require}

兰空图床是使用 [PHP](https://php.net) 语言，并使用 [Laravel](https://laravel.com) 开发框架开发的一款 Web 应用程序。
使用兰空图床，需要有一个 Web 服务器。常见的 Web 服务器例如：[LNMP](https://lnmp.com)(Nginx/MySQL/PHP)、[LNMPA](https://lnmp.org/lnmpa.html)(Nginx/MySQL/PHP/Apache)，它们分别都集成了 Web 应用程序必要的组件。

::: warning 注意
兰空图床不支持虚拟主机搭建，您必须拥有 Web 服务器的最高控制权，而虚拟主机没有这样的条件。
兰空图床自 v2.3.0 版本后(含)，必须在安装了 `SourceGuardian` PHP 拓展（名称可能为 sg16）的 PHP 环境中运行。
:::

### PHP 要求 {#php-requires}

您应该确保您的 Web 服务器具有以下最低 PHP 版本和扩展：

- PHP 版本 >= 8.2
- SourceGuardian PHP 拓展（在宝塔面板中名称为 sg16）
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

### 数据库 {#databases}

- MariaDB 10.3+
- MySQL 5.7+
- PostgreSQL 10.0+（PHP 需要安装 pgsql 拓展）
- SQLite 3.35.0+
- SQL Server 2017+（PHP 需要安装 sqlsrv 和 pdo_sqlsrv 拓展，以及它们可能需要的任何依赖项，例如 Microsoft SQL ODBC 驱动程序）

## 服务器配置 {#server-configuration}

### Nginx {#nginx}

我们推荐您使用 Nginx + PostgreSQL 作为组合来搭建兰空图床，PostgreSQL 可以更好的承受高并发上传请求。您也可以使用 Sqlite，以实现最小化安装。

### Supervisor {#supervisor}

兰空图床使用消息队列来异步运行程序中的耗时任务，而启动消息队列服务，需要使用 PHP 的 CLI 模式，即通过命令终端执行：`php artisan queue:work` 使其正常运作。

在生产环境中，您需要一种方法来保持您的 `queue:work` 进程运行。`queue:work` 进程可能会因各种原因停止运行，例如超过工作者超时或执行 `queue:restart` 命令。

因此，您需要配置一个进程监视器，可以检测您的 `queue:work` 进程何时退出并自动重启它们。此外，进程监视器可以让您指定希望同时运行多少个 `queue:work` 进程。

Supervisor 是 Linux 环境中常用的进程监视器，我们将在以下文档中讨论如何配置它，或者你也可以选择其他任务你熟悉的进程管理软件。在正式安装之前，我们建议你先浏览一遍该示例文档。

::: details Supervisor 安装以及配置教程(示例)
#### 安装 Supervisor {#install-supervisor}

Supervisor 是 Linux 操作系统的进程监视器，如果 `queue:work` 进程失败，它将自动重启它们。要在 Ubuntu 上安装 Supervisor，您可以使用以下命令：

```shell
sudo apt-get install supervisor
```

#### 配置 Supervisor {#configure-supervisor}

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

#### 启动 Supervisor {#start-supervisor}

创建配置文件后，您可以使用以下命令更新 Supervisor 配置并启动进程：

```shell
sudo supervisorctl reread

sudo supervisorctl update

sudo supervisorctl start "lsky-pro-worker:*"
```

有关 Supervisor 的更多信息，请查阅 [Supervisor 文档](http://supervisord.org/index.html)。
:::

### ImageMagick {#image-magick}

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

#### 安装 {#install}

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

### Libvips <Badge type="tip" text="推荐" /> {#libvips}

[Libvips](https://github.com/libvips/libvips) 是一个需求驱动的水平线程图像处理库。与同类库相比，libvips 运行速度更快，占用内存更少。兰空图床同时支持 `ImageMagick` 和 `Libvips` 两种不同驱动来处理图片，但是 `Libvips` 是可选项。

如果可以，我们更推荐使用 `libvips` 库作为兰空图床图片处理驱动。

:::: details Libvips 安装教程(示例)

Libvips 可以访问 [https://github.com/libvips/libvips/tags](https://github.com/libvips/libvips/tags) 找到不同版本预编译的二进制二进制文件，详细的安装教程请访问：https://www.libvips.org/install.html

#### 安装 PHP 拓展 {#install-php-vips}

给服务器安装好 libvips 库后，与 ImageMagick 相同，也需要给 PHP 安装 `vips` 拓展，安装命令：

```shell
pecl install vips
```

安装完成后，在 `php.ini` 中加入：

```ini
extension=vips.so
```

检查是否安装成功：

```shell
php -m | grep vips
```

你也可以手动编译安装 PHP vips 拓展

```shell
# 下载源码
git clone https://github.com/libvips/php-vips-ext.git
cd php-vips-ext

# 编译并安装
phpize
./configure
make
sudo make install
```

然后在 `php.ini` 中启用：

```ini
extension=vips.so
```

#### 启用 FFI 拓展 {#enable-php-ffi}

还需要安装 PHP FFI 拓展并启用，检查是否安装 ffi 拓展：

```shell
php -m | grep FFI
```

如果输出 ffi，说明已经启用。如果没有，可能需要安装并启用。

我们以宝塔的 PHP 8.2 为例，演示如何按照 ffi 拓展：

```shell
cd /www/server/php/82/src/ext/ffi
`

编译扩展

```shell
www/server/php/82/bin/phpize
./configure --with-php-config=/www/server/php/82/bin/php-config
make
make install
```

安装成功后，编辑配置文件：`/www/server/php/82/etc/php.ini`，搜索 `ffi`，增加配置以启用：

```ini
extension=ffi
ffi.enable=1
```

重新执行 `php -m | grep FFI` 命令查看结果，如果输出 ffi，表示已经安装成功。

::::

::: tip
在我们的 docker 镜像中，默认使用 `Libvips` 库作为图片处理驱动。
:::

### 总结 {#summary}

> [!IMPORTANT]
> 综上所述，搭建兰空图片的必要条件为：
> - 使用 Nginx 或 Apache 作为 Web 服务器
> - PHP 的版本和拓展必须达到要求
> - 数据库版本必须达到要求
> - 服务器需要安装 ImageMagick 和进程管理软件
> - 如果可以，我们更推荐使用 Libvips 而非 ImageMagick
