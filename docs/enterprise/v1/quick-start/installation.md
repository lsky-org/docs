---
title: 安装
description: 安装 Lsky Pro 企业版本
---

::: warning 请注意
兰空图床不支持共享型虚拟主机(不支持安装拓展、修改 php.ini 等操作)安装
:::

## 推荐运行环境
- Nginx 1.21+
- Mysql 5.7+
- PHP 8.0+
- Redis 7.0+
- Supervisor

## 第一步，准备安装
1. 先创建站点和数据库，然后关闭站点的防跨站攻击功能，设置伪静态。Nginx 如下：
```
location / {
  try_files $uri $uri/ /index.php?$query_string;
}
```
::: warning
请正确配置伪静态，否则可能会导致邮件验证等功能失效。
:::
2. 将安装包上传至站点目录中，并将程序的运行目录设置为 `public`，[如何设置？](https://serverfault.com/a/604307)。
3. 将程序所在目录的所有文件夹、子文件夹、文件的权限，用户组和所有者改为 www，权限改为 0755
> 通常情况下，Web 站点目录的所有者和用户组为 www:www

## 第二步，初始化配置
编辑根目录中的 `.env` 文件，如果没有该文件可以将 `.env.example` 复制一份并重命名为 `.env` ，然后修改对应的配置值：
- `APP_URL`=站点域名(需要 http(s): //，例如 https://pic.iqy.ink)
- `APP_SERIAL_NO`=购买后得到的序列号
- `APP_SECRET`=许可证的密钥
- `REDIS_HOST`=Redis 连接地址(默认为 127.0.0.1)
- `REDIS_PASSWORD`=Redis 连接密码(默认为 null，表示没有密码)
- `REDIS_PORT`=Redis 连接端口(默认为 6379)

## 第三步，开始安装
上述步骤完成以后，即可访问站点首页，程序会自动跳转至图形化安装页面，根据指引完成数据库配置、管理员账号配置等。

## 最后一步，命令行配置(重要)
兰空图床企业版需要通过 [php cli](http://www.php-cli.com/) 的方式启动队列、计划任务处理进程，此操作需要登录 SSH。

#### 1. 配置队列处理进程

在站点根目录下执行命令 `php artisan queue:work` 来启动队列处理进程，但是注意，手动停止或关闭终端后此命令会停止，所以我们需要通过其他命令(nohup、screen)来使该命令在后台运行。  

除了上述命令的方式，我们更推荐使用 [Supervisor](http://supervisord.org/) 来保持进程持续运行。服务器安装 Supervisor 的步骤请自行搜索相关文档，此处不再赘述。  

假设我们的项目绝对路径为 `/www/wwwroot/lsky-pro`，以下是 supervisor 子配置文件。
```ini
[program:lsky-pro-worker]
process_name=%(program_name)s_%(process_num)02d
command=php artisan queue:work --queue=emails,images,thumbnails
directory=/www/wwwroot/lsky-pro/
user=root
numprocs=8
autorestart=true
startsecs=3
startretries=3
stdout_logfile=/www/wwwroot/lsky-pro/storage/logs/supervisor.out.log
stderr_logfile=/www/wwwroot/lsky-pro/storage/logs/supervisor.err.log
stdout_logfile_maxbytes=2MB
stderr_logfile_maxbytes=2MB
```
创建配置文件后，您可以使用以下命令更新 Supervisor 配置并启动进程：
- `sudo supervisorctl reread`
- `sudo supervisorctl update`
- `sudo supervisorctl start lsky-pro-worker:*`

::: tip
宝塔面板集成了 Supervisor 软件，安装后可以直接使用，无需配置，如下图所示：
:::

![supervisor-config](/bt-supervisor-config.png)

::: warning 注意
如果进程无法启动，请尝试解禁 PHP 的 `pcntl_signal`、`pcntl_alarm` 函数。
:::

#### 2. 配置计划任务处理进程

计划任务需要用到 linux 中的 Crontab，我们还是假设项目绝对路径为 `/www/wwwroot/lsky-pro`，登录 SSH 后，执行以下命令：

```shell
crontab -e
```

执行后会进入 vim 编辑页面，按 `i` 键进入编辑模式，输入以下内容：
```shell
* * * * * cd /www/wwwroot/lsky-pro && php artisan schedule:run >> /dev/null 2>&1
```

然后(或按住 `shift` + `:`），输入 `eq` 后回车保存。

重启 crontab 服务
```shell
service crond restart
```

::: tip
宝塔面板集成了可视化计划任务配置页面，可以直接使用，无需配置，如下图所示：
:::
![crontab-config](/bt-crontab-config.png)

至此，完成安装。

::: tip 提示
- 验证队列处理进程有没有正确配置，可以通过查看上传的图片是否生成了缩略图进行判断。
:::