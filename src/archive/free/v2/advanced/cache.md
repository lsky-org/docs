---
title: 缓存
description: 配置缓存驱动
---

# 配置缓存

::: tip
兰空图床支持 redis 或 memcached 作为缓存驱动，通常情况下默认的文件储存已经足够用，但是如果你的图床开启了原图保护功能，强烈更换为下面的任意缓存驱动。  
更换驱动非常简单，只需要改变程序中的环境变量文件 `.env` 即可
:::

### 使用 Redis
> 缓存驱动名称
- CACHE_DRIVER=redis
> redis 连接地址(可选)
- REDIS_HOST=redis
> redis 连接密码(可选)
- REDIS_PASSWORD=null
> redis 连接端口(可选)
- REDIS_PORT=6379

### 使用 Memcached
> 缓存驱动名称
- CACHE_DRIVER=memcached
> memcached 连接地址(可选)
- MEMCACHED_HOST=127.0.0.1
> memcached 连接端口(可选)
- MEMCACHED_PORT=11211
> 连接用户名(可选)
- MEMCACHED_USERNAME=
> 连接密码(可选)
- MEMCACHED_PASSWORD=
