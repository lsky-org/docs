# 主题

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

## 主题是如何运作的？

在我们的程序根目录，存在一个 `web` 文件夹，此文件夹是完整的前端工程文件，在执行构建后会触发打包脚本。

脚本的主要目的是（您也可以不使用脚本，全程手动按以下步骤操作）：

1. 将入口文件 `index.html` 移动至根目录 `resources/views/themes/default` 文件夹中，并重命名为 `index.blade.php`。
2. 将打包后的所有静态文件，移动至根目录 `public/themes/default` 文件夹。（注意，前端工程请求静态资源的路径需要修改，例如 vite 中可以配置 `build.assetsDir` 来修改静态资源目录）
3. 然后在根目录 `resources/views/themes/default` 创建主题配置文件 `config.json`，文件内容类似：
    ```json
    {
      "name": "默认主题",
      "version": "2.0",
      "author": "Wisp X",
      "url": "https://github.com/0xxb"
    }
    ```
完成上述操作后，主题会以模板引擎渲染的方式实现混合部署，首次加载通过 laravel 的 [Blade 模板](https://laravel.com/docs/11.x/blade) 渲染页面，然后后续请求都由前端工程以 [SPA 单页应用](https://developer.mozilla.org/zh-CN/docs/Glossary/SPA) 的方式显示页面交互。

其中 `default` 文件夹表示的是默认主题的唯一标识，如果您想开发自己的主题，您也需要为您的主题设置一个唯一标识。

要切换主题，可以前往后台管理->系统设置->网站设置中切换。

## 修改默认主题

要修改主题，您需要在您的电脑上安装 [Nodejs](https://nodejs.org)。

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

构建后不要忘记将以下目录重新上传到您的服务器站点中：

- `public/themes`
- `resources/views/themes`

## 自定义主题

同样的，无论您是使用 React 或 Vue，只需理解 [主题是如何运作的](#主题是如何运作的)，按步骤将打包后的静态文件、文件夹复制到指定位置即可。