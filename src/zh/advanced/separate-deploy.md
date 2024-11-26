# 分离部署

兰空图床为了实现最小化安装，简化安装步骤，默认是使用混合部署的方式，即前后端分离架构，前端使用 laravel 的模板引擎渲染前端。具体解释请查阅[主题](./theme#主题是如何运作的)章节。

如果您希望将前后端分开独立部署，操作起来非常简单。

## 修改构建脚本

打开 `web/package.json` 文件，修改构建脚本：

```json
...

"scripts": {
    "dev": "vite",
    "build": "run-p type-check \"build-only {@}\" -- && run-s pre-build post-build", // [!code --]
    "build": "run-p type-check \"build-only {@}\"", // [!code ++]
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --build --force",
    "pre-build": "shx rm -rf ../public/themes/default",
    "post-build": "shx mv dist/index.html ../resources/views/themes/default/index.blade.php && shx mv dist/config.json ../resources/views/themes/default/config.json && shx cp -r dist/* ../public/ && shx rm -rf dist",
    "openapi-ts": "openapi-ts"
},

...
```

修改环境变量 `web/.env.production` 文件：

```ini
VITE_APP_TITLE=Lsky Pro+ # 站点标题
VITE_APP_API_URL=http://127.0.0.1:8000/api/v2 # 接口地址
```

## 构建前端代码

然后执行构建命令：

```shell
yarn build
```

## 部署
打包后的静态文件默认在 `web/dist` 目录，我们只需要在目标服务器创建一个站点，将此目录中的所有文件上传至站点中即可。

::: info
如果您希望原站点中的前端禁止访问，您可以注释掉目标文件 `routes/web.php` 的第 12 行。

```php:line-numbers=8 {1}
<?php

// ...

Route::any('/{any}', SendThemeController::class)->where('any', '.*'); // [!code --]
// Route::any('/{any}', SendThemeController::class)->where('any', '.*'); // [!code ++]
```

注释以后访问站点域名，将显示 404 状态。届时需要使用独立部署的前端站点域名您的图床网站首页。

:::