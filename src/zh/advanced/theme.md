# 主题 {#theme}

兰空图床 2.x 是一个全新的前后端分离架构，后端使用 [Laravel](https://laravel.com)，前端使用 [Vue3](https://cn.vuejs.org)、[Pinia](https://pinia.vuejs.org/zh)、[Native UI](https://www.naiveui.com)。

相较于以前的版本，现在的版本使用了 Native UI 作为前端框架，使得样式一致、更统一。除了后台管理，我们可以自定义前端的样式，甚至可以直接替换整个前端。

若想要修改前端样式，您需要熟悉以下前端技术：

- [NodeJS](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://cn.vitejs.dev)
- [Vue3](https://cn.vuejs.org)
- [Pinia](https://pinia.vuejs.org)
- [Vue Router](https://router.vuejs.org)
- [Tailwind CSS](https://tailwindcss.com)

若想要开发新的主题，您需要熟悉以下技能和框架
- [Laravel](https://laravel.com)
- [Laravel Blade](https://laravel.com/docs/12.x/blade)
- [Filamentphp](https://filamentphp.com)

## 主题是如何运作的？ {#theme-works}

系统存在两个不同的主题存放位置：

- `app/Themes/` 系统内置主题
- `themes/` 第三方主题

我们添加新开发的主题，需要将主题存放到程序根目录中的 `themes/` 文件夹。

主题系统可以使用标准的 PHP 8.2+ 的语法，使用 Laravel 框架进行开发。一个完整的插件的基本目录结构如下：

```
my-test/              # 主题文件夹名称，需要与主题 id 保持一致
 ├─ assets/           # 静态资产目录
 ├─ controllers/      # PHP 控制器目录
 ├─ views/            # 视图层，需要以 *.blade.php 结尾
 ├─ README.md         # 主题说明文档
 └─ MyTestTheme.php   # 主题入口类
```

系统会通过扫描主题文件夹，并实例化主题入口类获取主题基本配置与表单配置，`MyTestTheme.php` 示例：

TODO

## 创建新的主题 {#create-theme}

TODO

## 修改默认主题

要修改主题，您需要在您的设备上安装 [Nodejs](https://nodejs.org)。

使用终端进入根目录中的 `web` 文件夹，运行调试命令启动开发服务器：

::: code-group

```shell [Yarn]
yarn dev
```

```shell [Npm]
npm run dev
```

:::

然后就可以愉快的修改样式了。

您还可以修改环境变量文件 `web/.env` 中的 `VITE_APP_API_URL` 参数值来调整接口地址。

默认主题内置了打包脚本，在您执行 `build` 命令后脚本会自动处理需要移动、重命名的文件，不需要额外操作。

只需在您修改了前端工程文件后，执行构建命令：

::: code-group

```shell [Yarn]
yarn build
```

```shell [Npm]
npm run build
```

:::

## 自定义主题

同样的，无论您是使用 React 或 Vue，只需理解 [主题是如何运作的](#theme-works)，按步骤将打包后的静态文件、文件夹复制到指定位置即可。