---
title: 安装
description: 安装 Lsky Pro 2.x
---

# 安装兰空图床

::: warning 请注意
兰空图床不支持共享型虚拟主机(不支持安装拓展、修改 php.ini 等操作)安装
:::

## 下载正式版本

兰空图床的每个版本都是通过 github 发布，下载正式版本请访问 [https://github.com/lsky-org/lsky-pro/releases](https://github.com/lsky-org/lsky-pro/releases)

如果你**不是**开发者，**请不要**下载名称为 `Source Code` 的压缩包，此为核心源代码，需要自己安装拓展。

## 运行环境配置

1. 需要关闭 `open_basedir`，否则会有意想不到的错误。简单来说，open_basedir 是用来限制 PHP 读取目录。
2. 安装 nginx 或 apache，PHP 8.0.2+，然后为 php 安装上必须的拓展。详见：[安装要求](/docs/free/v2/#安装要求) 章节

## 准备安装

1. 将安装包上传至站点目录然后解压，将站点的运行目录指向程序的 `public` 文件夹  
> nginx 需要设置伪静态，内容如下
```
location / {
  try_files $uri $uri/ /index.php?$query_string;
}
```

2. 将程序所在目录的所有文件夹、子文件夹、文件的权限，用户组和所有者改为 `www`，权限改为 `0755`  

> 通常情况下，Web 站点目录的所有者和用户组为 `www:www`  

若未正确设置权限，在后续的使用过程中可能会因为权限导致文件无法读取、无法写入、创建文件夹等一系列问题。

## 开始安装

配置好域名以后，访问站点 **首页** ，程序会自动跳转至安装页面，环境检测通过以后即可通过引导进行安装。
