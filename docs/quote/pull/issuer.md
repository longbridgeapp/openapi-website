---
id: quote_issuer
title: 获取轮证发行商 ID
slug: issuer
sidebar_position: 13
---

获取轮证发行商 ID

:::info

协议指令：`22`

:::

## Response

### Parameters

| 名称        | 类型     | 描述          |
| ----------- | -------- | ------------- |
| issuer_info | object[] | 券商席位      |
| ∟id         | int32    | 机构 ID       |
| ∟name_cn    | string   | 机构名称 (简) |
| ∟name_en    | string   | 机构名称 (英) |
| ∟name_hk    | string   | 机构名称 (繁) |

### Protobuf

```protobuf
message IssuerInfoResponse {
  repeated IssuerInfo issuer_info = 1;
}

message IssuerInfo {
  int32 id = 1;
  string name_cn = 2;
  string name_en = 3;
  string name_hk = 4;
}
```

## 接口限制

:::caution

- 平均请求次数 10 次/s
- 瞬时并发次数 5 次/s。

:::

## 错误码

| 协议错误码 | 业务错误码 | 描述           | 排查建议               |
| ---------- | ---------- | -------------- | ---------------------- |
| 3          | 301600     | 无效的请求     | 请求参数有误或解包失败 |
| 3          | 301606     | 限流           | 降低请求频次           |
| 7          | 301602     | 服务端内部错误 |                        |
