# 分离部署 {#separate-deploy}

兰空图床为了实现最小化安装，简化安装步骤，默认是使用混合部署的方式，即前后端分离架构，前端使用 laravel 的模板引擎渲染前端。具体解释请查阅[主题](./theme#theme-works)章节。

如果您希望将前后端分开独立部署，操作起来非常简单。

## 修改构建脚本 {#change-build-script}

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
    "pre-build": "shx rm -rf ../app/Themes/Default/assets",
    "post-build": "shx mv dist/index.html ../app/Themes/Default/views/index.blade.php && shx mv dist/DefaultTheme.php ../app/Themes/Default/DefaultTheme.php && shx cp -r dist/assets ../app/Themes/Default/ && shx rm -rf dist",
    "openapi-ts": "openapi-ts"
},

...
```

修改环境变量 `web/.env.production` 文件：

```ini
VITE_APP_TITLE="Lsky Pro+" # 站点标题
VITE_APP_API_URL="http://127.0.0.1:8000/api/v2" # 接口地址
VITE_APP_ICON_URL="/assets/favicon.ico" # favicon 图标地址
VITE_APP_KEYWORDS="图床, 在线图床, 图片外链, 免费图床, 图片上传, 图片存储, 图片分享, 博客配图, 网站配图，兰空图床, Lsky Pro+" # 网站关键字
VITE_APP_DESCRIPTION="快速稳定的在线图床服务，支持图片上传、存储与外链分享，适合博客、论坛和网站使用，助你轻松管理和分发图片资源。" # 网站描述
VITE_APP_DEFAULT_LOCALE=zh-CN # 前端默认语言
```

## 构建前端代码 {#build}

然后执行构建命令：

```shell
yarn build
```

## 部署
打包后的静态文件默认在 `web/dist` 目录，我们只需要在目标服务器创建一个站点，将此目录中的所有文件上传至站点中即可。

::: info

如果您希望原站点中的前端禁止访问，您可以访问后台管理进入「系统设置」->「控制中心」关闭 “是否启用站点” 选项。

关于以后访问站点首页，将显示 404 状态（无论使用的是哪一种主题）。届时需要使用独立部署的前端站点域名您的图床网站首页。

:::