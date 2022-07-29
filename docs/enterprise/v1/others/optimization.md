---
title: 优化加载速度
description: 企业版优化站点加载速度
---

::: tip 提示
- 兰空图床企业版本是基于 [Laravel](https://laravel.com) 开发的，Laravel 是一个健壮的、重量级的 Web 开发框架，但是由于它是一个全栈型框架，性能上就成了为人诟病的一个缺点，但是我们可以通过一些优化技巧，优化其加载速度，让网站飞起来。
- 兰空图床企业版在开发初期，精心设计了数据表结构，开发过程中也针对各种 sql 语句优化。
:::

::: warning 注意
此教程只针对程序方面的优化，不包含服务器网络带宽方面。
:::

## 常规优化方案

### 优化配置加载
```shell
php artisan config:cache
```

### 优化路由加载
```shell
php artisan route:cache
```

### 优化视图加载
```shell
php artisan view:cache
```

## 进阶优化方案
- [安装 PHP Opcache 拓展](https://www.php.net/manual/zh/book.opcache.php)<Badge type="tip" text="推荐" vertical="top" />
- [使用 Laravel Octane](https://laravel.com/docs/9.x/octane)<Badge type="danger" text="实验性" vertical="top" />