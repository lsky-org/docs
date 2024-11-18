---
title: 迁移
description: 迁移兰空图床企业版
---

# 迁移兰空图床

::: warning 注意
由于程序使用了符号连接的方式实现其图片可以存在磁盘的任意位置，因此迁移兰空图床需要进行一些额外的操作。符号链接[百度百科](https://baike.baidu.com/item/%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5/7177630)，可以简单理解为 Windows 系统中的快捷方式。
:::

### 1. 打包
一般情况下，程序的 `public` 目录中会存在多个个系统保留目录名，目录结构如下：
```
└─ public
   ├─ css           系统层叠式样式表
   ├─ fonts         系统字体文件
   ├─ i             程序默认本地储存的符号链接(可能不存在)
   ├─ img           系统图片文件
   ├─ js            系统 javascript 文件
   ├─ thumbnails    程序图片缩略图的符号链接
   ├─ uploads       系统图片上传的符号链接(例如相册封面、背景图等)
   └─ ...
```

符号链接映射关系：

`public/thumbnails` -> `storage/app/thumbnails`  
`public/uploads` -> `storage/app/public`  
`public/i` -> `storage/app/uploads`  

迁移前，我们先将 `public` 中的 `thumbnails`、`uploads`、`i` 等所有符号链接删除。然后备份数据库，打包程序目录。

::: tip 为什么要删除符号链接？
如果不删除符号链接，打包压缩程序目录时，会将符号链接所指向的文件也打包进去，导致迁移后符号链接失效，无法找到对应的文件。
:::

::: warning 注意
打包时请注意程序中 `.` 符号开头的文件，这些可能在某些文件管理程序中被隐藏，请不要忽略了这些文件。
:::

### 2. 准备新服务器
首先需要打开新服务器的 SSH 终端，使用命令查看 PHP 版本是否正确：  

```shell
php -v
```

然后确认该 PHP 版本的拓展是否都已经安装了：

```shell
php -m | grep -E 'fileinfo|mysqli|curl|mbstring|imagick|openssl|PDO|redis|session'
```

然后打开 `php.ini` 文件，搜索查找 `disable_functions`，将该值清空，例如：

```
...
; This directive allows you to disable certain functions.
; It receives a comma-delimited list of function names.
; https://php.net/disable-functions
disable_functions = 
...
```

修改后重启 PHP 服务。 然后确保新服务器已安装 PHP 5.7+ 以及 Redis 7.0+。

### 3. 迁移到新服务器

将打包后的代码和数据库文件，上传到新服务器站点目录解压，并导入数据库。

打开根目录 `.env` 文件，修改数据库连接信息：

```
APP_DEBUG=true              开启调试模式
DB_CONNECTION=mysql         数据库类型
DB_HOST=127.0.0.1           数据库连接地址
DB_PORT=3306                数据库连接端口
DB_DATABASE=lsky_pro        数据库名称
DB_USERNAME=root            数据库用户名
DB_PASSWORD=root            数据库密码

REDIS_HOST=127.0.0.1        Redis 连接地址，一般默认就好
REDIS_PASSWORD=null         Redis 连接密码，一般默认就好
REDIS_PORT=6379             Redis 连接端口，一般默认就好
```

将以上配置修改为你的环境对应配置值，然后配置站点伪静态、运行目录、设置站点文件权限。具体操作可参考安装章节[第二步-准备运行环境](/docs/enterprise/v1/quick-start/installation.html#第二步-准备运行环境)

### 4. 生成符号链接

进入 SSH 终端，进入站点目录，然后执行重新生成符号链接命令：
```shell
php artisan lsky:symlinks
```

::: warning 注意
如果你使用了本地的储存策略，需要进入后台编辑该策略，重新保存一下以生成对应储存的符号连接。
:::

### 5. 配置异步队列和计划任务

参考安装文档中的[最后一步-命令行配置-重要](/docs/enterprise/v1/quick-start/installation.html#最后一步-命令行配置-重要)，配置配置异步队列和计划任务 **(重要)**