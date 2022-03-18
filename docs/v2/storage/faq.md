---
title: 储存的特殊说明
description: 各个储存的特殊说明
---

# 储存的特殊说明

## 本地储存
为了实现本地储存可以更改储存位置，所以本地储存必须有一个域名后缀，例如 http://domain.com/**uploads**/123.png 中的 uploads。后缀对应的是 public 目录下的符号连接。

## 阿里云 OSS
如果使用 RAM 账户，请授予该账户以下权限：
- AliyunOSSFullAccess
- AliyunOSSReadOnlyAccess

## 腾讯云 COS
- 如果使用子账户，请授予该账户以下权限
  - QcloudCOSDataFullControl
  - QcloudCOSDataReadOnly
  - QcloudCOSDataWriteOnly
  - QcloudCOSFullAccess
  - QcloudCOSListOnly
  - QcloudCOSMetaAccMgmt
  - QcloudCOSReadOnlyAccess
  - QcloudAccessForCSGRole
  - QcloudAccessForDsgcRole
  - QcloudAccessForTCRRole
  - QcloudAccessForTCSRole

- 腾讯云的储存桶名称由 名称+appid 组合，在兰空图床后台的储存策略表单中请分开填写。