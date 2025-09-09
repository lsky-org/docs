# 常用命令 {#command}

此页面列出一些常用的辅助命令，您也可以通过终端进入程序根目录运行 `php artisan` 来查看所有命令。

## 重置用户密码（包括管理员） {#reset-user-password}

```bash
php artisan app:reset-user-password
```

## 为所有系统中所有图片生成缩略图 {#gen-thumbnails}

```bash
php artisan app:thumbnail
```

::: warning 注意
图片所属的储存未开启缩略图功能的图片会被跳过。
:::

## 缓存后台管理图标资源，优化后台访问速度 {#cache-admin-icon}

```bash
php artisan filament:optimize
```

## 查看系统所有执行失败的队列消息 {#query-queue-failed}

```bash
php artisan queue:failed
```

## 清除系统所有执行失败的队列消息 {#clean-queue}

```bash
php artisan queue:flush
```

::: warning 警告
系统内可能存在物理图片删除失败的队列，造成原因有很多，包括但不限于储存服务器验证失败、储存策略被意外删等意外情况。删除图片的流程是删除记录(软删除)->推送删除物理图片队列->删除物理图片。
若物理图片删除失败，**不会**回滚恢复图片记录，这意味着若队列被清除，则未被成功删除的物理图片，需要人工手动去对应储存中删除。
:::

## 重试所有执行失败的队列消息 {#retry-queue}

```bash
php artisan queue:retry 队列ID
```

## 生成系统内置储存的符号链接 {#gen-symlink}

```bash
php artisan storage:link
```

## 取消系统内置储存的符号链接 {#remove-symlink}

```bash
php artisan storage:unlink
```

## 重新生成程序所需要的符号链接 {#gen-app-symlink}

此命令会重新建立系统中所有符合条件的储存、主题所需要的符号链接。

```bash
php artisan symlinks:rebuild
```
