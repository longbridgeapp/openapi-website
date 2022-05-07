---
id: push_quote
title: Push Real-time Quote
slug: quote
sidebar_position: 1
---

Real-time quote push of the subscribed security. In the pushed data structure, only the fields that have changed will be filled with data.

:::info

[Business Command](../../socket/protocol/push): `101`

:::

## Data Format

### Properties

| Name          | Type   | Description                                                                          |
| ------------- | ------ | ------------------------------------------------------------------------------------ |
| symbol        | string | Security code, for example: `AAPL.US`                                                |
| sequence      | int64  | Sequence number                                                                      |
| last_done     | string | Latest price                                                                         |
| open          | string | Open                                                                                 |
| high          | string | High                                                                                 |
| low           | string | Low                                                                                  |
| timestamp     | int64  | Time of latest price                                                                 |
| volume        | int64  | Volume                                                                               |
| turnover      | string | Turnover                                                                             |
| trade_status  | int32  | Security trading status, see [TradeStatus](../objects#tradestatus---security-status) |
| trade_session | int32  | Trade session, see [TradeSession](../objects#tradesession---trading-session)         |

### Protobuf

```protobuf
message PushQuote {
  string symbol = 1;
  int64 sequence = 2;
  string last_done = 3;
  string open = 4;
  string high = 5;
  string low = 6;
  int64 timestamp = 7;
  int64 volume = 8;
  string turnover = 9;
  TradeStatus trade_status = 10;
  TradeSession trade_session = 11;
}
```

### JSON Example

```json
{
  "symbol": "AAPL.US",
  "sequence": 160808750000000,
  "last_done": "156.570",
  "open": "155.910",
  "high": "159.790",
  "low": "155.380",
  "timestamp": 1651089600,
  "volume": 88063191,
  "turnover": "13865092584.000",
  "trade_status": 0,
  "trade_session": 0
}
```
