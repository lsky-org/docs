# 缓存 {#cache}

合理的增加缓存可以极大的提高程序访问速度，提高程序运行效率，兰空图床使用 [Laravel](https://laravel.com) 框架开发，它提供了一些很方便的缓存命令。

注意，所有缓存命令都必须在程序安装完成且是生产环境下运行。

## 缓存后台管理页面图标 {#cache-admin-icon}

后台管理使用了 [Filament](https://filamentphp.com)，而 Filament 使用了 [Blade Icons](https://blade-ui-kit.com/blade-icons) 包，它在缓存时有更好的性能。

```shell
php artisan icons:cache
```

## 缓存配置、事件、路由和视图 {#cache-all}

```shell
php artisan optimize
```

::: warning 注意
- 缓存后 `.env` 文件将不会被加载，所有对 `.env` 变量的 env 函数调用都将返回 null
- 升级兰图图床之前请务必使用命令 `php artisan optimize:clear` 清除缓存
  :::

## OPcache 拓展 <Badge type="tip" text="推荐使用" /> {#opcache}

PHP 的 [OPcache](https://www.php.net/manual/zh/book.opcache.php) 拓展可以将已编译的 PHP 代码存储在内存中，从而大幅提升性能。我们非常推荐您在生产环境中安装并启用 opcache 拓展。
