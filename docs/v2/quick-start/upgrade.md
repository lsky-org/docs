---
title: 升级
description: 升级兰空图床
---

## 在线升级
兰空图床支持从 web 端直接升级版本，但不会提醒有新版本发布，如果你希望在新版本发布时得到通知，可以前往 [https://github.com/lsky-org/lsky-pro](https://github.com/lsky-org/lsky-pro)，然后点击右上角的 `Watch` 展开后选择 `Custom`，勾选 `Releases` 然后点击 `Apply` 即可。

新版本发布以后，等待大约三分钟后可以打开兰空图床系统设置，滚动至最底部，会出现新版本的升级信息。

## 手动升级
如果在线升级失败，可以尝试手动升级。首先你需要前往 [https://github.com/lsky-org/lsky-pro/releases](https://github.com/lsky-org/lsky-pro/releases) 找到最新的版本，下载完整的安装包。(如果你不是开发人员，请**不要**下载名为 `Source code` 的压缩包，此为未安装依赖的源码包)

然后按照以下步骤进行升级：
1. 备份 `storage` 和 `public` 目录下的缩略图文件夹(默认该文件夹名称为 `thumbnails`)
2. 删除 **除了** 目录 `.env` 文件和 `installed.lock` 文件以外的所有文件夹以及文件
3. 解压新版本到程序根目录(替换掉旧版本)
4. 将备份的 `storage` 文件夹替换掉**已解压**的 `storage` 文件夹，将备份的缩略图文件夹放到 `public` 目录下
5. 修改版本号，进入数据库找到 `config` 表，修改 `name` 为 `app_version` 的 `value` 值，例如 `V 2.0`，字符串必须完全一致。
6. 进入程序跟目录执行依次执行一下命令(需要PHP 8+)
   - `php artisan route:clear`
   - `php artisan cache:clear`
   - `php artisan view:clear`
   - `php artisan clear`

::: danger 本地储存以及使用 sqlite 需要注意的事情
- 使用 sqlite 默认情况下会将数据库文件放置 `database` 文件夹下，请在升级之前备份该数据库文件，并在上述第三步操作以后将数据库文件放置原位。
- 本地储存策略的所有上传的图片都会保存在 `storage` 文件夹下，数据无价，请注意备份该文件夹。
- 本地储存策略会在 `public` 文件夹下生成符号连接(软连接)，删除 `public` 目录后，请在升级完成以后编辑本地储存策略，保存一下以重新生成符号连接。
:::