---
title: 从开源版本升级
description: 开源版本升级至企业版
---

## 升级条件
- 最低必须是开源 V 2.x 版本
- 运行环境达到企业版本的要求(详见安装文档)

## 准备工作
1. **备份数据**
2. 获取企业版本安装包

## 迁移文件
- 将开源版本中的 `public/thumbnails` 目录复制至企业版本 `storage/app` 文件夹中
- 将开源版本中的 `storage/app/uploads` 和 `storage/app/public` 目录复制至企业版本 `storage/app` 文件夹中
- 将开源版本中根目录的 `installed.lock` 文件复制至企业版本的根目录中

操作后，新版本的目录结构应该是这样的：
```
www 站点根目录  
├─ ...                  ...
├─public                静态资源文件夹
│  ├─css                层叠式样式表文件夹
│  ├─fonts              样式所需的字体文件文件夹
│  ├─img                系统所需要的图片文件夹
│  └─js                 javascript 文件夹
├─ ...                  ...
├─storage               储存文件夹
│  ├─app                应用储存文件夹
│  │  ├─certs           支付功能证书文件夹
│  │  ├─public          程序上传文件的文件夹
│  │  ├─thumbnails      图片缩略图文件夹
│  │  └─uploads         本地策略上传文件的文件夹
│  ├─debugbar           Debug 缓存
│  ├─framework          核心框架缓存文件夹
│  └─logs               日志记录文件夹    
├─ ...                  ...
├─installed.lock        检测程序是否安装的文件
├─ ...                  ...
```

::: warning 注意
如果你是直接覆盖旧版本，请删除 public 目录中的所有符号连接以及 thumbnails 文件夹
:::

## 修改配置
在企业版本根目录，将 `.env.example` 复制一份并重命名为 `.env`，然后编辑这个文件，下列内容都是必填项：
  - `APP_URL`=站点域名(需要 http(s): //，例如 https://pic.iqy.ink)
  - `APP_LICENSE_KEY`=购买后得到的许可证密钥
  - `DB_CONNECTION`=(数据库驱动名称 mysql、sqlite、pgsql、sqlsrv)
  - `DB_HOST`=数据库连接地址(默认为 127.0.0.1)
  - `DB_PORT`=数据库连接端口(默认为 3306)
  - `DB_DATABASE`=数据库名称
  - `DB_USERNAME`=数据库连接账号
  - `DB_PASSWORD`=数据库连接密码
  - `REDIS_HOST`=Redis 连接地址(默认为 127.0.0.1)
  - `REDIS_PASSWORD`=Redis 连接密码(默认为 null，表示没有密码)
  - `REDIS_PORT`=Redis 连接端口(默认为 6379)

::: tip 提示
- 上述 `.env` 配置文件中的数据库配置表示的是开源版本正在使用的数据库，不需要重新创建
- DB_ 开头的配置，可以直接从将正在运行的旧版本的 `.env` 文件中复制过来替换
:::

编辑完成后保存，即可将旧版本整站点文件夹以及文件删除，然后使用新版本替换。
> 注意替换后，站点中的文件夹和文件权限和所有者可能会变，需要设置为 0755/www

## 执行升级
确保上述配置填写无误后，在企业版本的根目录下依次执行下面的命令进行升级。
1. 生成 key
```shell
php artisan key:generate
```

2. 迁移数据库结构
```shell
php artisan migrate --seed
```

3. 填充基础数据
```shell
php artisan db:seed --class=UpgradeFromFreeSeeder
```

4. 重建符号连接
```shell
php artisan lsky:symlinks 
```
::: warning 注意
如果您使用了本地储存，需要登录兰空图床后台，重新保存策略，以此生成本地符号连接，没有符号连接将会无法访问本地所上传的图片。
:::

5. 清除缓存
```shell
php artisan optimize:clear
```

6. 最后一步(重要)

此时还差最后一步，配置命令行，此步骤与安装教程中一致。参考安装教程中的最后一步，[命令行配置](/docs/enterprise/v1/quick-start/installation.html#最后一步-命令行配置-重要)。

此时站点正常情况下已经可以访问了，注意需要清除浏览器缓存，否则样式可能会变得奇怪。

::: tip 提示
数据无价，请在升级前做好备份。
:::
