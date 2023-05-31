---
title: 常见问题
description: 常见的问题以及解决方法
---

### 安装时出现错误，SQLSTATE[42000]: Syntax error or access violation: 1064 You have an error...
不支持的数据库版本，请参阅 [支持的数据库](/docs/v2/#支持的数据库) 章节

### 为什么配置完了以后，访问站点显示 404？
请检查伪静态、站点运行目录是否设置正确，如果确认正确请尝试重启。

### 图片管理为什么不能批量删除？
部分第三方储存没有提供批量删除文件的接口，且同时删除大量物理文件对磁盘要求较高，会导致响应速度过慢。

### 图片可以分发到多个储存吗？
不能，传统以 fpm 方式运行的 php 程序，没有异步、线程的特性，难以实现。

### 为什么不支持 svg 格式的图片？
严格来说，svg 不是图片，是通过 xml 标记语言实现的矢量图形，也就是说 svg 不支持加水印、生成缩略图、获取宽高能一系列操作，这破坏了系统中很多业务流程。

### 能不能上传图片以外格式的文件，例如 mp4？
不可以，程序定位就是管理图片，未做任何图片以外格式的文件支持。

### 为什么不支持客户端直传
其一，由于第三方储存的多样性，有些第三方储存通过客户端直传后程序拿不到需要的数据，其二，太麻烦了。

### 我多次上传了相同的照片，图片管理中也出现了图片，这是 bug 还是 feature?
是 feature，在同一个储存策略下，上传相同的图片，程序不会重复的写入文件，但会创建文件记录，多条记录指向同一个物理文件。

### 我的图片中，「复制图片」出错，显示 复制失败, ClipboardItem is not defined
这与浏览器限制有关，站点必须以 https 的方式访问。了解更多 [https://w3c.github.io/clipboard-apis/#dom-navigator-clipboard](https://w3c.github.io/clipboard-apis/#dom-navigator-clipboard)

### 原图保护功能是什么？
原图保护功能指的是开启后，上传后图片返回的 url 中不是图片的真实路径，而是一串随机字符串。开启后将会消耗更多的内存。

### 开启原图保护功能后访问图片 404
这种情况是因为运行环境接管图片资源导致的，请更改 nginx 或 apache 的配置，例如 nginx：
```
# ...

location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
{
    expires      30d;
    error_log /dev/null;
    access_log /dev/null;
}

# ...
```

将这段代码注释掉即可。

### 更新后出现样式异常、按钮不起作用？
如果你使用了 cdn，请检查是否未刷新 cdn 的缓存。

### 上传出现失败，请稍后重试？
上传失败有很多原因，比如配置错误、文件较大返回 423 Request Entity Too Large、生成缩略图时图片较大导致超时被强行断开连接等等，出现错误通常情况下可以在`storage/logs`文件夹下找到错误日志，如果没有则表示错误并不是发生在程序中，而是外在原因。

### 使用反向代理并且域名使用了 https 的情况下，程序请求静态资源、生成的链接却是 http ？
这种情况通常是因为你的程序正在从 80 端口进行转发流量，详细解释和解决方法：[https://laravel.com/docs/9.x/requests#configuring-trusted-proxies](https://laravel.com/docs/9.x/requests#configuring-trusted-proxies)
请尝试增加反向代理配置：  
```
proxy_set_header X-Forwarded-Proto $scheme;
```

### 能不能支持 xxxx 、xxxx 储存？
市面上各种厂家的产品层出不穷，兰空图床只会对主流的、具备相应接口的产品作适配，兰空图床的储存是由 [flysystem](https://flysystem.thephpleague.com/) 实现，欢迎你提交 PR！

### 缩略图文件夹可以改名字吗？
可以，编辑 `.env` 文件，增加一项配置：  
`THUMBNAIL_PATH=your folder`  
但是请注意，此操作影响所以图片的缩略图地址，包括已上传的图片。

### 缩略图文件夹、文件被我删掉了怎么办？
你可以通过执行命令 `php artisan lsky:thumbnails` 来重新生成所有图片的缩略图，但是注意，这个操作等待时间可能会比较漫长，取决于图片数量。

### 如何增加统计代码？
在 `public/js` 目录下新建 `custom.js` 文件，程序会自动加载该 js 文件

### 如何修改 Redis 库？
你可以通过在 `.env` 文件中增加配置 `REDIS_DB=0` 和 `REDIS_CACHE_DB=1` 来指定库。