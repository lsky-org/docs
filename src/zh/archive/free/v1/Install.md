---
title: 安装
---

> 因 Lsky Pro 需要使用 rewrite 重写 url，所以不支持虚拟主机安装。

Lsky Pro 安装全程可视化页面，只需要下载程序解压到 web 站点目录，访问首页会自动跳转到安装页面，根据提示操作即可，具体步骤：

1. 下载兰空，上传至 web 运行环境，解压。
2. 设置运行目录为 public。
3. 配置 Rewrite 规则：
    - Nginx：
        ```nginx
        location / {
            if (!-e $request_filename) {
                rewrite ^(.*)$ /index.php?s=$1 last; break;
            }
        }
        ```
    - Apache:
    Apache直接使用 `.htaccess` 即可。

4. 访问首页，未安装自动跳转至安装页面，根据页面提示安装即可。
5. 安装完成以后请设置runtime目录 `0755` 权限，如果你使用本地存储，`public` 目录也需要设置为 `0755` 权限。

::: warning 注意
1.6.0 版本开始, 不再支持修改网站运行目录
:::