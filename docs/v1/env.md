> 1.6.0 版本以后, 程序根目录新增了一个环节变量文件: .env, 该文件里保存了系统的一些配置, 像下面这样:

```
[app]
debug = false
trace = false

[database]
hostname = 127.0.0.1
database = lsky
username = root
password = root
hostport = 3306
charset = utf8mb4
prefix = lsky_

[system]
single_user_mode = false
intercept_salacity = false
url_query = ''
```

## 配置说明:

### app.debug

是否开启 debug 模式, 生产环境请务必关闭

### app.trace

是否开启性能分析 Console 插件, 生产环境请务必关闭

### database.hostname

数据库连接地址

### database.username

数据库名称

### database.password

数据库密码

### database.hostport

数据库连接端口

### database.charset

数据库编码

### database.prefix

数据库表前缀

### system.single_user_mode

是否开启单用户站点模式, 开启后未登录情况下除了接口只能首页可以访问, 页面展示的是全屏背景图加一个登录按钮, 该背景图可以通过替换public/static/app/images/bg.jpg文件进行修改

### system.intercept_salacity

开启鉴黄后, 上传时检测到违规的图片是否直接拦截

### system.url_query

图片链接额外参数(例: ?test=123)

### system.watermark

是否开启自动水印功能