# 常见问题

## 为什么配置完了以后，访问站点显示 404？
请检查伪静态、站点运行目录是否设置正确，如果确认正确请尝试重启。

## 能不能上传图片以外格式的文件，例如 mp4？
不可以，程序定位就是管理图片，未做任何图片以外格式的文件支持。

## 为什么不支持客户端直传
其一，由于第三方储存的多样性，有些第三方储存通过客户端直传后程序拿不到需要的数据，其二，图片本身就不是非常大的文件。

## 我多次上传了相同的照片，图片管理中也出现了图片，这是 bug 还是 feature?
是 feature，在同一个储存策略下，上传相同的图片，程序不会重复的写入文件，但会创建文件记录，多条记录指向同一个物理文件。

## 我的图片中，「复制图片」出错，显示 复制失败
这与浏览器限制有关，跨域问题或站点必须以 https 的方式访问。了解更多 [https://w3c.github.io/clipboard-apis/#dom-navigator-clipboard](https://w3c.github.io/clipboard-apis/#dom-navigator-clipboard)

## 更新后出现样式异常、按钮不起作用？
如果你使用了 cdn，请检查是否未刷新 cdn 的缓存。

## 上传出现失败，请稍后重试？
上传失败有很多原因，比如配置错误、文件较大返回 423 Request Entity Too Large 等等，出现错误通常情况下可以在 `storage/logs` 文件夹下找到错误日志，如果没有则表示错误并不是发生在程序中，而是其他原因。

## 使用反向代理并且域名使用了 https 的情况下，程序请求静态资源、生成的链接却是 http ？
这种情况通常是因为你的程序正在从 80 端口进行转发流量，详细解释和解决方法：[https://laravel.com/docs/9.x/requests#configuring-trusted-proxies](https://laravel.com/docs/9.x/requests#configuring-trusted-proxies)
请尝试增加反向代理配置：

```nginx configuration
proxy_http_version 1.1;
proxy_set_header Host $http_host;
proxy_set_header Scheme $scheme;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection $connection_upgrade;
```

## 能不能支持 xxxx 、xxxx 储存？
市面上各种厂家的产品层出不穷，兰空图床只会对主流的、具备相应接口的产品作适配，兰空图床的储存是由 [flysystem](https://flysystem.thephpleague.com/) 实现，欢迎你提交 PR！