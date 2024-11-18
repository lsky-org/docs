---
title: Imagick 拓展
description: PHP Imagick 拓展安装教程
---

::: tip
兰空图床使用 [Imagick 拓展](https://www.php.net/manual/zh/book.imagick.php) 对图片进行处理，它并非 PHP 预装，而是需要自己手动安装的。  

imagick 分为两个部分，第一个是 [ImageImagick](http://www.imagemagick.org)，然后才是 [PHP Imagick](https://www.php.net/manual/zh/book.imagick.php)，PHP Imagick 支持哪些图片取决于 ImageImagick 库，如果您安装完程序后，发现个别拓展名(例如webp)无法上传，很有可能是因为 imagick 安装时未支持 webp，需要重新编译安装。
:::

## 编译安装 ImageImagick

### 下载并解压 ImageImagick
```shell
wget https://github.com/ImageMagick/ImageMagick/archive/refs/heads/main.zip -O ImageMagick.zip
unzip ImageMagick.zip
cd ImageMagick-main/
```

::: warning 注意
- ImageImagick 支持的图片类型受系统影响，例如如果希望支持 webp，需要 `libwebp` 库的支持，且需要达到指定版本要求
- 使用 `identify -list format` 命令查看所有支持的图片格式
- 使用 `identify -list format | grep webp` 命令查看指定的图片格式是否支持
:::

### 编译
```shell
./configure
```

### 安装
```shell
make && make install
```

## 编译安装 PHP Imagick
::: warning 注意
请先使用 `php -v` 命令输出并确认当前使用的 cli php 版本，避免将拓展安装到了其他的 php 版本上。
:::

### 下载并解压 PHP Imagick
```shell
wget https://github.com/Imagick/imagick/archive/refs/heads/master.zip -O php-imagick.zip
unzip php-imagick.zip && cd imagick-master/
```

### 编译并安装
```shell
phpize && ./configure
make && make install
```

安装完成后，执行命令 `php --ri imagick`，会出现下图中的信息，即为安装完成。

![php-imagick](/php-imagick.png)
