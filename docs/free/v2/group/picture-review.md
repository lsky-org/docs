---
title: 图片审核
description: 图片审核
---

# 图片审核

## 腾讯云内容安全
申请地址：[https://cloud.tencent.com/product/ims](https://cloud.tencent.com/product/ims)

#### Endpoint
固定为 ims.tencentcloudapi.com 即可。

#### 地域
- 华北地区(北京)	ap-beijing
- 华南地区(广州)	ap-guangzhou
- 亚太南部(孟买)	ap-mumbai
- 华东地区(上海)	ap-shanghai
- 亚太东南(新加坡)	ap-singapore
- 美国东部(弗吉尼亚)	na-ashburn
- 美国西部(硅谷)	na-siliconvalley

::: warning
如果使用子用户，请授予该账户 QcloudIMSFullAccess、QcloudIMSReadOnlyAccess 权限
:::

## 阿里云内容安全
申请地址：[https://www.aliyun.com/product/lvwang](https://www.aliyun.com/product/lvwang)

#### 业务场景
业务场景对应内容安全控制台中的 -> 设置 -> 机器审核 -> 业务场景

#### 地域
地域目前阿里云支持：
- cn-shanghai：华东2（上海）
- cn-beijing：华北2（北京）
- cn-shenzhen：华南1（深圳）
- ap-southeast-1：新加坡

::: warning
如果你使用的「子用户 AccessKey」，即 RAM 账户，请授予该账户 AliyunYundunGreenWebFullAccess 权限。  
:::

## NsfwJS

::: tip
此图片审核驱动需要自建，该项目地址：[https://github.com/infinitered/nsfwjs](https://github.com/infinitered/nsfwjs)
:::

#### 接口地址
你自建的审核接口地址  
你需要使用 node 环境启动一个服务器，并适配 nsfwjs。然后上传接口必须返回以下结构：
```
{
    "porn": 0,
    "sexy": 0,
    "hentai": 0,
    "neutral": 0,
    "drawing": 0
}
```

> 请注意，以上所有属性值，都应该是使用 0-1 之间的数值来表示百分比。

#### 属性名称
接口的文件属性名称，例如 `image`

