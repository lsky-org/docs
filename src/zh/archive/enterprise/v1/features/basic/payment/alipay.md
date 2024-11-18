---
title: 支付宝
description: 支付宝网站支付功能
---

::: warning 注意
兰空图床仅支持官方支付方式，支付宝需要提供资质申请「电脑网站支付」能力，不支持当面付。
:::

## 创建支付应用
前往开发者中心，点击 [https://open.alipay.com/develop/pm/create](https://open.alipay.com/develop/pm/create) 创建网页移动应用。

![创建应用](/archive/payment/alipay/1.png)

## 绑定支付宝支付产品
创建好应用后进入应用，点击「产品绑定」，选择「支付」-> 「电脑网站支付」

![绑定支付](/archive/payment/alipay/2.png)

## 开通电脑网站支付
绑定完成后，如果显示「产品开通状态」显示为「未开通」则需要根据支付宝的指引去开通，否则支付功能无法使用。

![开通支付](/archive/payment/alipay/3.png)

## 设置加签方式

![设置加签方式](/archive/payment/alipay/4.png)
![选择加签方式](/archive/payment/alipay/5.png)

加签方式选择第二项「证书」

## 下载证书生成软件

![下载证书生成工具](/archive/payment/alipay/6.png)

## 生成证书并上传

![生成证书并上传](/archive/payment/alipay/7.png)

## 下载证书

上传成功后，将证书全部下载。

![下载证书](/archive/payment/alipay/8.png)

## 设置回调地址

打开兰空图床后台，进入「系统设置」->「支付配置」，选择支付宝，复制支付异步回调地址。

![复制异步回调地址](/archive/payment/alipay/9.png)

然后将其填入支付宝的授权回调地址中。

![填写授权回调地址](/archive/payment/alipay/10.png)

## 上传证书

将刚刚下载的三份证书文件上传至兰空图床程序中的 `storage/app/certs` 目录下，然后打开刚刚由证书生成软件生成的证书目录，复制 `应用私钥RSA2048-敏感数据，请妥善保管.txt` 文件内容，将其填写到兰空图床后台配置中。

![上传证书](/archive/payment/alipay/11.png)

至此支付宝电脑网站支付则配置完成了。