---
prev: /tools/oilbook.md
next: /tools/oilPriceCalculator.md
---

# 分期日历本

<CalendarBox title="房贷分期" money="5099.84" start-date="2023-04-24" end-date="2053-03-24"/>

<CalendarBox title="汽车分期" money="2488.89" start-date="2023-04-24" end-date="2026-04-24"/>

<CalendarBox title="招商银行分期" money="3752" start-date="2023-02-18" end-date="2024-02-18"/>

## 何时使用

- 需要对定额分期业务进行直观地可视化查看时可使用此组件，例如房贷分期、汽车分期、信用卡账单分期等等
- 目前只支持等额本息(每月等额还款)、暂未适配等额本金(每月递减还款)
- 入参起始日期、分期金额、标题即可

## APIS

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
title | 标题 | string |  | false
money | 金额 | number | 9999 | false
startDate | 起始日期 | string | '2000-05-20' | true
endDate | 截止日期 | string | '2099-05-20' | true