# 常见问题 {#faqs}

程序为了避免在生产环境出现敏感信息，当出现错误时，仅会记录日志信息，页面以一种简短的 “500 错误”、“服务器错误” 提示呈现给用户。

大部分错误都可以在日志中找到原因，日志文件所在位置：`storage/logs`，docker 环境中日志所在位置：`/app/storage/logs`。

日志是按照日期进行轮换的，默认最多保存 14 天的日志信息。

如果您想要在运行过程中发生错误时，显示更多、更详细的错误信息，您可以通过编辑程序根目录中的 `.env` 文件，将 `APP_DEBUG`、`DEBUGBAR_ENABLED` 的值改为 `true`，这样的话程序将以 debug 模式运行，可以观察到详细的错误和运行情况。

::: danger 警告
- 请不要在生产环境打开 `debug`，否则站点显示出来的一些敏感信息可能使不怀好意的人利用，破坏系统的稳定性。
- 打开 `debug` 后，因为绕过了缓存、收集系统信息等流程，这导致程序的运行效率通常会更缓慢，所以在调试结束后，请不要忘记关闭 `debug`。
:::

这里记录并解释一些常见的问题。

## 为什么配置完了以后，访问站点显示 404？ {#website-404-after-configuration}
请检查伪静态、站点运行目录是否设置正确，如果确认正确请尝试重启。

## 能不能上传图片以外格式的文件，例如 mp4？ {#upload-non-image-formats-mp4}
不可以，程序定位就是管理图片，未做任何图片以外格式的文件支持。

## 为什么不支持客户端直传 {#no-direct-client-transmission-support}
其一，由于第三方储存的多样性，有些第三方储存通过客户端直传后程序拿不到需要的数据，其二，图片本身就不是非常大的文件。

## 我多次上传了相同的图片，图片管理中也出现了图片，这是 bug 还是 feature? {#duplicate-image-upload-bug-or-feature}
是 feature，在同一个储存策略下，上传相同的图片，程序不会重复的写入文件，但会创建文件记录，多条记录指向同一个物理文件。

## 我的图片中，「复制图片」出错，显示 复制失败 {#copy-image-failed}
这与浏览器限制有关，跨域问题或站点必须以 https 的方式访问。了解更多 [https://w3c.github.io/clipboard-apis/#dom-navigator-clipboard](https://w3c.github.io/clipboard-apis/#dom-navigator-clipboard)

## 更新后出现样式异常、按钮不起作用？ {#style-issues-buttons-not-working-after-update}
如果你使用了 cdn，请检查是否未刷新 cdn 的缓存。

## 上传出现失败，请稍后重试？ {#upload-failed-try-again}
上传失败有很多原因，比如配置错误、文件较大返回 423 Request Entity Too Large 等等，出现错误通常情况下可以在 `storage/logs` 文件夹下找到错误日志，如果没有则表示错误并不是发生在程序中，而是其他原因。

## 使用反向代理并且域名使用了 https 的情况下，程序请求静态资源、生成的链接却是 http ？ {#https-reverse-proxy-static-links-http}
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

## 能不能支持 xxxx 、xxxx 储存？ {#support-custom-storage}
市面上各种厂家的产品层出不穷，兰空图床只会对主流的、具备相应接口的产品作适配，兰空图床的储存是由 [flysystem](https://flysystem.thephpleague.com/) 实现，欢迎你提交 PR！

## 激活邮件中的激活链接，访问显示 403 INVALID SIGNATURE？ {#activation-link-403-invalid-signature}
请检查 nginx 伪静态是否配置正确。

## 分离部署后，第三方授权登录失败？ {#third-party-login-failed-after-deployment}
大概率是回调地址错误导致失败，创建第三方登录驱动时，系统会自动识别回调地址并显示，请检查该地址是否为当前系统前端部署所绑定的域名，若不是，则需要自行修改回调地址然后保存生效。