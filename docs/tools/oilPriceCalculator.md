---
prev: /tools/loan-canlendar.md
next: /tools/chatGPT.md
---

# 油价计算器

## 案例一

<OilPriceCalculator :consumption="4.5" :price="7" :volume="48.5"/>

### APIS

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
consumption | 油耗 | number | 5 | true
price | 油价 | number | 7 | true
volume | 容积 | string | 48.5 | true

## 案例二

<OilCalculator :oils="oils"/>

<script setup>
const oils = [
  {
    price: '8.10',
    rate: '+0.18',
    name: '92号汽油'
  },
  {
    price: '8.77',
    rate: '+0.21',
    name: '95号汽油'
  }
]
</script>

### APIS

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
oils | 油价信息集合 | Array |  | true
price | 油价 | string |  | true
rate | 涨跌幅 | string |  | true
name | 名称 | string |  | true

### 油电对比

- | 埃安S | 雅阁混动
-- | -- | -- |
电量/油箱 | 55kwh | 48L
续航 | 510km(续航达成率70%=357km) | 800-960km
日间电价/油价 | 1.4r/kwh 1.4X55=77r | 8.14(-0.7=7.44) 7.44X48=357r
夜间电价/油价 | 0.8r/kwh 0.8X55=44r | -
AC油耗 | - | 6L/100km (800km)
非AC油耗 | - | 5L/100km (960km)
每公里成本 | (55X1.4)/(510X0.7)=0.22r/km(日间) | 6X(8.14-0.7)/100=0.45r/km(AC)
每公里成本 | (55X0.8)/(510X0.7)=0.12r/km(夜间) | 5X(8.14-0.7)/100=0.37r/km(!AC)
单价 | 1.9r/km | 1.9r/km
100km | 0.22X100=22r(日间) 1.9X100-22=168r | 0.45X100=45r(AC) 1.9X100-45=145r
100km | 0.12X100=12r(夜间) 1.9X100-12=178r | 0.37X100=37r(!AC) 1.9X100-37=153r
100km平均收益 | 173r | 149r
350km | 0.12X350=77r(日间) 1.9X350-77=588r | 0.45X350=158r(AC) 1.9X350-158=507r
350km | 0.12X350=42r(夜间) 1.9X350-42=623r | 0.37X350=130r(!AC) 1.9X350-130=535r
350km平均收益 | 606r | 521r

