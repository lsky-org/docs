---
title: 更新日志
---

> 手册上的更新日志从 1.5.2 版本开始记录。更多旧版本日志请参阅仓库的 releases

## 1.6.4 (2021-12-20)
### Added
- 一键复制全部链接 ([#167](https://github.com/lsky-org/lsky-pro/issues/167))
### Changed
- 将所有静态资源放置本地
- 接口增加刷新 token 属性
- 个人中心、后台显示用户注册时间 ([#263](https://github.com/lsky-org/lsky-pro/issues/263))
### FAQ:

- 为了保证可用性，此次更新主要是为了静态文件放置本地，不再使用第三方静态资源托管服务。
- 如没有特殊情况，这次更新为 1.x 版本最后一个小版本。最新版本动态请戳我

## V1.6.3
### Added
- 画廊(图片广场)功能
- 自动添加水印功能 ([#196](https://github.com/lsky-org/lsky-pro/issues/196), [#186](https://github.com/lsky-org/lsky-pro/issues/186), [#138](https://github.com/lsky-org/lsky-pro/issues/138), [#85](https://github.com/lsky-org/lsky-pro/issues/85), [#75](https://github.com/lsky-org/lsky-pro/issues/75))
- PHP8 支持 ([#192](https://github.com/lsky-org/lsky-pro/issues/192))
### Changed
- 原始文件名称命名规则支持于其他规则组合使用
- 上传接口返回 ID 字段 ([#180](https://github.com/lsky-org/lsky-pro/issues/180))
- 个人中心显示 Token ([#157](https://github.com/lsky-org/lsky-pro/issues/157))
### Fixed
- 修复 md5 相同但图片内容不同会跳过上传的 bug ([#156](https://github.com/lsky-org/lsky-pro/issues/156))
- 修复后台控制台统计不正确的 bug
- 修复文件路径命名规则为空时，上传后的链接不正确的 bug ([#159](https://github.com/lsky-org/lsky-pro/issues/159))
- 修复 ftp 功能端口设置无效问题
- 修复粘贴图片上传时，图片名称不会改变的 bug ([#194](https://github.com/lsky-org/lsky-pro/issues/194))
- 修复后台获取 IP 接口失效的 bug ([#179](https://github.com/lsky-org/lsky-pro/issues/179))

## 1.6.1
### Added
- 增加八位数随机字符串命名规则 [#121](https://github.com/lsky-org/lsky-pro/issues/121)
### Changed
- 更改后台图片管理每页显示数量为 20 条
- 改进用户注册验证条件
- 取消 coding 托管安装包仓库
- 更新部分拓展包
### Fixes
- 修复后台图片列表切换 select 后点击下一页数据被重置的 bug [#128](https://github.com/lsky-org/lsky-pro/issues/128)
- 修复用户图片列表中图片分页后无法搜索到指定图片的 bug [#99](https://github.com/lsky-org/lsky-pro/issues/99)
- 修复自定义链接参数后上传返回的链接中出现重复参数的 bug [#118](https://github.com/lsky-org/lsky-pro/issues/118)
- 修复数据库密码带有符号会导致500错误的bug [#112](https://github.com/lsky-org/lsky-pro/issues/112)

## 1.6.0
### Added
- 增加 OTA 在线升级功能
- 增加 dark(暗黑)模式
- 增加 FTP 被动模式开关
- 增加 IP 封禁功能(支持通配符)
- 增加图片自定义额外参数功能
- 增加单用户站点模式
### Changed
- 改进安装逻辑, 去除 mysqli 限制, 改为 PDO 连接方式
- 重构鉴权方式、接口认证方式
- 重构更新数据库结构的方法
- 安装条件增加需要 ZipArchive 支持
- 图片最大上传限制兼容 KB 单位 [#91](https://github.com/lsky-org/lsky-pro/issues/91)
- 删除本地静态资源, 使用第三方 CDN(jsdelivr)
- 改进控制台样式
- 恢复上传后出现的清除按钮
- 改进 token 生成方式
- 改进角色组、列表等多选操作方式
### Fixes
- 修复移动图片到根目录会提示不存在文件夹的 bug

## 1.6.0

⚠️ 本次更新包含一个安全质量修复，该问题可能会导致站点图片被恶意跨用户删除，建议所有人更新至此版本！
### Fixes
- 修复相同 md5 的文件，删除一条记录会将文件一并删除的 bug.
- 修复删除没有会员的角色组会失败的 bug.
### Changed
- 支持根据别名搜索图片

## V1.5.7
### Fixes
- 修复 V1.5.6 版本中接口上传会出现错误的 bug [#83](https://github.com/lsky-org/lsky-pro/issues/83)

## V1.5.6
### Added
- 新增用户名登录方式
- 增加文件别名功能(仅支持电脑端)
- 增加图片粘贴上传功能 [#69](https://github.com/lsky-org/lsky-pro/issues/69)
### Changed
- 更新框架和部分拓展包
- 上传已存在的文件直接返回图片地址，不重复创建文件 [#30](https://github.com/lsky-org/lsky-pro/issues/30)
- 删除文件不处理储存策略删除接口返回值
- 改进细节样式、修复若干 bug

## V1.5.5
- 更新框架和部分拓展包
- 修复统计数据不准确的 BUG [#57](https://github.com/lsky-org/lsky-pro/issues/57)
- 修复高并发下上传出现名称重复的 BUG (需要PHP7.1+) [#63](https://github.com/lsky-org/lsky-pro/issues/63)
- 增加公告功能 [#46](https://github.com/lsky-org/lsky-pro/issues/46), [#68](https://github.com/lsky-org/lsky-pro/issues/68)
- 增加远程储存, 暂时只支持ftp [#24](https://github.com/lsky-org/lsky-pro/issues/24)
- 增加获取图片列表和删除图片的接口 [#40](https://github.com/lsky-org/lsky-pro/issues/40), [#65](https://github.com/lsky-org/lsky-pro/issues/65)
- 优化接口 token 支持从请求参数中获取, 优先从 header 里取
- 修复若干 bug

FAQ：如果更新出现错误，请尝试手动访问 `http://域名/install/update.html` 进行更新，若还是无法更新请尝试手动导入根目录 `update.sql` 文件到数据库

### V1.5.4
- 更新thinkphp(v5.1.38)
- 允许接口跨域
- 优化接口状态码
- 修复程序默认的命名规则在高并发下会出现重复文件名的BUG
- 修复接口上传header增加token后请求失败的bug

## V1.5.3
- 优化前台提示登录注册的页面
- 增加图片搜索支持 IP 匹配
- 修复若干个 Bug
- 首页增加鼠标悬浮链接提示对应的图片
- 多图上传按顺序排列
- 后台增加控制台
- 后台图片管理增加筛选访客图片选项
- 优化安装环境检测
- 鉴黄接口请求增加超时时间为30秒
- 更新 thinkphp 框架
- 更新 mdui 、bootstrap、bootstrap-input 框架
- 更新备案管理系统 URL 地址

## V1.5.2
- 修复策略组设置无效的bug
- 修复接口上传时单个用户设置策略无效的bug
- 改进策略组编辑
- 修复更新后出现重复默认组的bug
- 默认组设置为禁止删除
- 增加原文件名命名规则 [#17](https://github.com/lsky-org/lsky-pro/issues/17)
- 接口上传成功后返回更多的数据(size,mime,sha1,md5)
- 阻止浏览器翻译(lang="zh-CN") [#16](https://github.com/lsky-org/lsky-pro/issues/16)
- 更换二维码接口
- 修复被冻结用户通过接口能上传的bug
- 其他细节改进