---
title: 简介
description: 储存策略的简介
---

# 储存策略简介

::: tip 提示
兰空图床中的储存策略是整个系统的核心部分之一，目前支持`本地`、`AWS S3`、`阿里云 OSS`、`腾讯云 COS`、`七牛云`、`又拍云`、`SFTP`、`FTP`、`WebDav`、`Minio`。
一个储存策略可以归属于多个角色组，同时某个角色组也可以设置多个储存策略。
:::

## 如何设置归属角色组？
在创建、编辑储存策略时，第一栏的角色组输入框会展示全部已存在的角色组，鼠标单击可直接选择，mac 按住 `command` 加鼠标左键可以多选、取消选择，windows 上为 `ctrl` 或 `alt` 键。

## 如何自定义一个储存？
::: warning
- 首先你需要有一定的 PHP 的编程基础，并对 Laravel 有一定的了解。   
- 兰空图床的储存是由 [flysystem](https://flysystem.thephpleague.com/) 实现，flysystem 提供了一个接口来与不同类型的文件系统进行交互(增删改查等)，你只需要按照 flysystem 提供的接口实现你的储存即可。此教程不会详细的指导你如何实现该接口。这里有一份兰空图床实现的又拍云适配器 [https://github.com/0xxb/flysystem-upyun](https://github.com/0xxb/flysystem-upyun) 供你参考。
:::

储存驱动适配好以后，接下来要做的就是集成到兰空图床当中。

1. 你需要使用 `composer` 安装你的驱动器。现在我们假设你的驱动器名称为 `flysystem-custom`。

`composer install xxx/flysystem-custom`

2. 增加一个枚举类

在 `app/Enums/Strategy` 文件夹中新增一个文件 `CustomOption`，内容如下

```php
<?php

namespace App\Enums\Strategy;

final class CustomOption
{
    /** @var string 访问地址 */
    const Url = 'url';

    /** @var string 用户名 */
    const Username = 'username';

    /** @var string 密码 */
    const Password = 'password';

    /** @var string 储存名称 */
    const Bucket = 'bucket';
}
```

> 该枚举由你的储存需要的配置而定，其中 `url` 不管是什么储存都是必须的

3. 增加一个枚举常量

打开 `app/Enums/StrategyKey.php` 文件追加一行
```php
// ...
/** @var int Custom */
const Custom = 11;
// ...
```

> 此常量值可以自定义，但不要和其他常量值重复。

4. 更改图片服务类中的 `getAdapter` 方法

打开 `app/Services/ImageService.php` 文件定位到 `getAdapter` 方法，你可以看到所有储存策略都是通过这个方法进行实例化的。
我们来增加一个 adapter，在 match 表达式中追加内容：
```php

// ...

use App\Enums\Strategy\CustomOption;

// ....

StrategyKey::Custom => new CustomAdapter(
    username: $configs->get(CustomOption::Username),
    password: $configs->get(CustomOption::Password),
    bucket: $configs->get(CustomOption::Bucket),
),

// ...
```

5. 给模型中的驱动常量加上自定义储存

打开 `app/Models/Strategy.php` 文件，在 DRIVERS 常量中追加一行

```php
// ...
const DRIVERS = [
    // ...
    StrategyKey::Custom => '自定义储存',
];
// ...
```

6. 修改表单验证器

打开 `app/Http/Requests/Admin/StrategyRequest.php` 文件， 在 `rules` 方法里追加验证内容

```php

// ...

return array_merge($array, match((int)$this->input('key')) {
    // ...
    StrategyKey::Custom => [
        'configs.username' => 'required',
        'configs.password' => 'required',
        'configs.bucket' => 'required',
    ],
});

// ...

```

> 验证规则请参考 Laravel 官方文档

7. 增加 web 设置表单页面

打开 `resources/views/admin/strategy/add.blade.php` 和 `resources/views/admin/strategy/edit.blade.php`  
参考其他的储存策略表单，例如 minio：  
添加页面：[add.blade.php](https://github.com/lsky-org/lsky-pro/blob/d428d535f571550ae1bf222672c4611ad93a0238/resources/views/admin/strategy/add.blade.php#L272-L297)  
编辑页面：[edit.blade.php](https://github.com/lsky-org/lsky-pro/blob/d428d535f571550ae1bf222672c4611ad93a0238/resources/views/admin/strategy/edit.blade.php#L293-L320)

至此，一个新的储存就适配完成了，这时候就可以在储存策略添加表单中，选择你的自定义储存策略进行配置、测试上传、管理等。
