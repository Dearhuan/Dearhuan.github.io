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

