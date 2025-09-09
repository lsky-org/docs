# 迁移 {#migrate}

本文将指导您如何将兰空图床从 A 服务器迁移到 B 服务器。

## 创建新站点 {#create-new-website}

要将兰空图床迁移到另一台服务器上，需要先在目标服务器上创建新的站点，同样的，目标服务器的运行环境需要达到安装要求，具体请查看[环境要求](./requirement.md)章节。

## 移除符号链接 {#delete-symbolic}

::: warning 注意
以下命令都需要在旧版本的根目录执行。
:::

创建好新站点后，我们需要登录终端，进入要迁移的服务器站点根目录，第一步我们需要移除 `public` 目录下的[符号链接](https://baike.baidu.com/item/%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5/7177630)。

执行命令查看符号链接：

```shell
find public -type l
```

执行后会输出所有符号链接，将符号链接删除：

```shell
find public -type l -exec rm -f {} +
```

::: tip 为什么需要删除符号链接？

1. 符号链接解引用，工具将符号链接指向的实际文件内容也打包进去，相当于复制目标文件到压缩包。
2. 如果目标服务器的站点目录与旧服务器的目录结构不同，可能会造成符号链接存在但是为失效的状态。

:::

## 打包文件 {#packaging-files}

如果您使用 sqlite3，数据库文件默认位置为 `storage/app/database.sqlite`。

执行打包命令，压缩根目录中所有文件，并命名为 `lsky-pro.tar.gz`：

```shell
tar -czvf lsky-pro.tar.gz ./
```

打包完成后，将 `lsky-pro.tar.gz` 文件以任何方式上传到目标服务器的站点根目录。

此外，如果您使用了本地储存，并且在储存配置中，您将储存根目录设置为程序运行目录以外的文件夹；举例：假如您的站点目录为 `/www/wwwroot/app.com`，而您的储存设置的根目录为 `/mnt/data`，那么您还需要将目录 `/mnt/data` 压缩并转移到目标服务器。

## 迁移数据库 {#migrate-database}

如果您使用的是 sqlite3，数据库文件默认位置为 `storage/app/database.sqlite`，只要您没有调整这个文件的位置，那么在上一步「打包文件」中就已经一同打包进 `lsky-pro.tar.gz` 中了，不需要额外处理。

相反，如果您修改了该文件位置，您只需将该文件转移到目标服务器的指定位置，然后修改 `.env` 配置：

```ini
DB_DATABASE=laravel # 将 laravel 替换成您的 sqlite 文件所在路径，例如：storage/app/database.sqlite
```

如果您使用的是 mysql 或其他数据库，并且数据库是和站点是在同一个服务器中安装的，那么您可以登录数据库管理软件或使用终端的方式，导出数据库文件，并将文件转移至目标服务器中的数据库或其他远程数据库。

::: warning 注意
兰空图床的数据库使用了[外键约束](https://baike.baidu.com/item/%E7%BA%A6%E6%9D%9F/12001448)，使用第三方软件备份时需要额外注意，有可能会因为外键约束这个特性造成了部分数据表丢失的情况。推荐使用 navicat 或 phpmyadmin 导出 sql 文件。
:::

## 恢复安装 {#restoring-installation}

::: warning 注意
以下命令都需要在目标服务器站点的根目录执行。
:::

确保数据库、相关文件都转移到目标服务器后，我们需要使用终端进入目标服务器的站点根目录，执行解压命令：

```shell
tar -xzvf lsky-pro.tar.gz
```

如果您使用的是 sqlite3，并且没有更改 sqlite3 数据库的文件位置。那么您可以不做任何改动。

如果您使用的是 sqlite3 以外的数据库，您需要解压后，使用 `vi` 或 `vim` 命令打开 `.env` 文件：

```shell
vim ./.env
```

执行后按下键盘 `i` 键进入编辑模式，将数据配置更新为您的新站点需要的数据库(需提前导入)：

```ini
...

DB_CONNECTION=mysql # 数据库连接类型 // [!code focus]  
DB_HOST=127.0.0.1 # 数据库连接地址 // [!code focus]
DB_PORT=3306 # 数据库连接端口 // [!code focus]
DB_DATABASE=lsky_pro # 数据库名称 // [!code focus]
DB_USERNAME=root # 数据库连接账号 // [!code focus]
DB_PASSWORD=root # 数据库连接密码 // [!code focus]

...
```

编辑完毕后，按 `esc` 退出编辑模式，然后按住键盘 `shift` + `:` 输入 `wq` 以保存并退出。

::: tip
如果您使用了服务器控制面板，您完全可以使用控制面板更方便快捷的的文件管理来编辑该文件。
:::

接下来执行命令生成符号链接：

```shell
php artisan storage:link --force --relative && php artisan symlinks:rebuild
```

别急，还没完，我们还需要像教程[安装](./install)章节中那样，[配置站点运行目录以及伪静态](./install#configure-rewrite)。

另外我们的新站点，记得确保根目录以及子目录的文件夹、文件的用户组都是 web 服务器运行的用户，即 `www` 或 `www-data`。

## 更改配置 {#change-configuration}

如果您使用了本地储存，本地储存的**储存目录**配置也许会在您迁移了新的服务器后路径发生了变化，这个时候需要您去登录程序后台，将储存配置的**储存目录**路径，修改成现在所在服务器的储存根路径。

即使路径没有发生变化，您也需要编辑所有的储存，重新保存一下以生成符号链接。

除此之外：
- 所有「云处理」驱动器需要去确认一下**云处理缓存目录**配置路径是否正确。
- 所有「图片安全」驱动器需要去确认一下**违规图片转移目录**配置路径是否正确。(如果有设置)

## 配置消息队列和计划任务 <Badge type="danger" text="重要" /> {#configure-queue-and-schedule}

最后一步，**请不要忽略了这一步**。我们需要像教程[安装](./install)章节中那样，[配置消息队列](./install#configure-queue) 和 [配置计划任务](./install.md#configure-schedule)。

配置完毕后，通过新站点的域名访问前端，测试功能是否正常。