---
id: quote_broker_ids
title: 获取券商席位 ID
slug: broker-ids
sidebar_position: 7
---

获取券商席位 ID (可每天同步一次)

:::info
协议指令：`16`
:::

## Response

### Response Properties

| 名称                       | 类型     | 描述                  |
| -------------------------- | -------- | --------------------- |
| participant_broker_numbers | object[] | 券商席位              |
| ∟broker_ids                | int32[]  | 券商对应的多个席位 id |
| ∟participant_name_cn       | string   | 券商名称 (简)         |
| ∟participant_name_en       | string   | 券商名称 (英)         |
| ∟participant_name_hk       | string   | 券商名称 (繁)         |

### Protobuf

```protobuf
message ParticipantBrokerIdsResponse {
  repeated ParticipantInfo participant_broker_numbers = 1;
}

message ParticipantInfo {
  repeated int32 broker_ids = 1;
  string participant_name_cn = 2;
  string participant_name_en = 3;
  string participant_name_hk = 4;
}
```

## 接口限制

:::caution

- 每秒平均请求次数 10。
- 瞬时并发次数 5。

:::

## 错误码

| 协议错误码 | 业务错误码 | 描述           | 排查建议               |
| ---------- | ---------- | -------------- | ---------------------- |
| 3          | 301600     | 无效的请求     | 请求参数有误或解包失败 |
| 3          | 301606     | 限流           | 降低请求频次           |
| 7          | 301602     | 服务端内部错误 |                        |
