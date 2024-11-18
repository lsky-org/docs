---
title: 阿里云OSS
---

阿里云对象储存OSS开通地址：[https://www.aliyun.com/product/oss](https://www.aliyun.com/product/oss)
OSS对象储存控制台：[https://oss.console.aliyun.com/overview](https://oss.console.aliyun.com/overview)

## 第一步，创建储存空间(Bucket)

如图：

![OSS-01](https://box.kancloud.cn/69d078c54c854db4ce230d781a9cb08e_307x225.png)

填写你的Bucket名称，如下图

![OSS-02](https://box.kancloud.cn/3ce475ae7e175346df762e101afe2dfe_679x844.png)

Bucket地域可根据你的服务器地域来决定，注意读写权限要设置为公共读，填好后点击确定创建Bucket。

创建成功后自动跳转到控制台。

## 第二步，设置

使用OSS对象储存需要用到阿里云账号的accesskeys，我们首先获取accesskeys。

![OSS-03](https://box.kancloud.cn/fbe55fd1e6c7a91fc6f95b38af96df97_382x389.png)

点击进去后会有一个安全提示，请选择“继续使用AccessKey”

然后点击显示你的 `AccessKeySecret`

![OSS-04](https://box.kancloud.cn/3341db3bb7f75d74c2e1869f1cda08f2_1083x294.png)

现在已经获取到阿里云OSS储存策略需要的全部配置了

点击OSS控制台的概览

![OSS-05](https://box.kancloud.cn/9d2a4a47e3670d497e4e6801c323b158_1377x811.png)

可以看到对象储存的外网访问域名。

我们打开Lsky Pro管理后台，点击储存策略，选择阿里云OSS，填写如下图：

![OSS-06](https://box.kancloud.cn/0379e5866020150eb79d7cd325782e23_890x588.png)

此处填写的Bucket域名填写的是对象储存默认的CDN域名，如果你的对象储存OSS绑定了自定义CDN域名，请填写你所绑定的域名，如果不加访问协议，默认使用的是http，你也可以在域名前加上协议，例如：https://域名。(https前提条件是你的域名正确的配置了SSL证书)

填写好以后点击保存即可。