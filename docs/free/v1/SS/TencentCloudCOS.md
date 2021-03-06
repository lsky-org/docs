---
title: 腾讯云COS
---

腾讯云对象储存COS申请地址：[https://cloud.tencent.com/product/cos](https://cloud.tencent.com/product/cos)

申请了腾讯云对象储存COS以后，进入对象储存控制台，然后点击储存桶列表，如下图：

![COS-01](https://box.kancloud.cn/d3610ed7180e487057e448c4ddfe37d7_381x289.png)

然后点击创建储存桶

![COS-02](https://box.kancloud.cn/b9a302455a816618428787d545626564_730x434.png)

注意访问权限需要选择公有读私有写

创建成功后我们先暂放，鼠标悬浮右上角的昵称，点击访问管理。

![COS-03](https://box.kancloud.cn/8db43e2f8a448a6f3c0550c1d9c5b1a3_220x324.png)

然后会在左侧导航栏看到“云API密钥” -> “API密钥管理”，点击进去。

![COS-04](https://box.kancloud.cn/581ef65f148b3eb7e48bc6b464c28fa5_313x451.png)

进去后会有一个高风险提示，请选择继续使用，然后你会看到你的API密钥(如果没有请新建)，点击显示获取SecretKey，如下图：

![COS-05](https://box.kancloud.cn/7667f123449022daf0611ef0da6ab267_964x302.png)

获取到后请复制保存下来。

然后我们在回到储存桶列表，点击进入你刚刚创建的储存桶，再点击“域名管理”，如下图：

> 这张图片是后补的，因为原作者并没有在此处附图
> ![COS-06](https://img.cdn.chs.pub/2022/03/04/9f2b250866493.png)

这时候我们在打开Lsky Pro后台管理->储存策略->腾讯云COS

填写配置如图：

![COS-07](https://box.kancloud.cn/61c05e35917e5427d5000cb3117766ea_873x503.png)

如果你绑定了自定义域名，这里的CDN加速域名请填写你绑定的域名，如果不加访问协议，默认使用的是http，你也可以在域名前加上协议，例如：https://域名。(https前提条件是你的域名正确的配置了SSL证书)

填写完毕后点击保存即可。