# 支付驱动

兰空图床当前仅支持官方[支付宝电脑网站支付](https://open.alipay.com/api/detail?code=I1080300001000041203&index=0)、[微信 Native 支付](https://pay.wechatpay.cn/wiki/doc/apiv3_partner/open/pay/chapter2_7_0.shtml)，[PayPal](https://paypal.com)，并且支付宝仅支持证书模式、微信仅支持 V3 版本。

::: warning 为什么不适配易支付等支付接口聚合平台？
- 易支付属于无支付资质、非官方认证的机构。
- 资金由易支付托管，可能会涉及到非法集资、资金截留等问题。
- 若管理不当，会有泄露风险(用户信息、交易记录等)。
:::

## 支付宝

### 创建支付应用
前往开发者中心，点击 [https://open.alipay.com/develop/pm/create](https://open.alipay.com/develop/pm/create) 创建网页移动应用。

![创建应用](/payment/alipay/1.png)

### 绑定支付宝支付产品
创建好应用后进入应用，点击「产品绑定」，选择「支付」-> 「电脑网站支付」

![绑定支付](/payment/alipay/2.png)

### 开通电脑网站支付
绑定完成后，如果显示「产品开通状态」显示为「未开通」则需要根据支付宝的指引去开通，否则支付功能无法使用。

![开通支付](/payment/alipay/3.png)

### 设置加签方式

![设置加签方式](/payment/alipay/4.png)
![选择加签方式](/payment/alipay/5.png)

加签方式选择第二项「证书」

### 下载证书生成软件

![下载证书生成工具](/payment/alipay/6.png)

### 生成证书并上传

![生成证书并上传](/payment/alipay/7.png)

### 下载证书

上传成功后，将证书全部下载。

![下载证书](/payment/alipay/8.png)

### 设置回调地址

回调地址固定为 站点域名 + `payment/callback`，假设站点域名为 `http://example.com`，即：`http://example.com/payment/callback` 将其填入支付宝的授权回调地址中。

![填写授权回调地址](/payment/alipay/10.png)

### 上传证书

然后打开刚刚由证书生成软件生成的证书目录，复制 `应用私钥RSA2048-敏感数据，请妥善保管.txt` 文件内容，将其填写到兰空图床后台配置中，并上传三份证书文件。

![上传证书](/payment/alipay/11.png)

上传完成后点击保存即可。

## 微信

todo

## PayPal

### 创建应用

进入开发者中心，点击 Create App 来创建一个应用，注意，文档图片中处于沙盒环境。

![创建应用](/payment/paypal/1.png)

Type 选择 Merchant

![创建应用](/payment/paypal/2.png)

点击 Create App 确认创建。

### 配置

![配置](/payment/paypal/3.png)

### Webhook

同样的，PayPal 我们也需要配置回调，即 Webhook。我们点击进应用详情，滚动到最底部，找到 Webhook 那一栏，创建一个 Webhook。

![Webhook](/payment/paypal/4.png)

创建成功后我们会在列表看到 Webhook ID。

将应用的 Client ID 和 Secret key 以及 WebHook ID 填入兰空图片后台支付配置中既可。

