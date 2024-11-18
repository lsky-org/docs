---
title: 常用辅助命令
description: 企业版常用辅助命令
---

### 为所有图片生成缩略图
```shell
php artisan lsky:thumbnails
```

### 重建程序所需要的符号连接
```shell
php artisan lsky:symlinks
```

### 校正系统统计数据
```shell
php artisan db:seed --class=CorrectStatSeeder
```
