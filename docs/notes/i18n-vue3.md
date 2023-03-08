---
prev: /notes/echarts-custom-import.md
next: /notes/e-signature.md
---
# vue3引入i18n国际化

## 安装
```bash
yarn add vue-i18n@next
```

## 基本配置
```ts
// src/locales/index.ts
import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  messages: {
    zh,
    en
  }
})

export default i18n
```

## 多语言配置
```ts
// src/locales/en.ts
export default {
  home: {
    Fund: 'Fund',
    Weather: 'Weather',
    Bill: 'Bill'
  },
  weather: {
    today: 'Today',
    updated: 'Updated',
    city: 'City',
    temp: 'Temp',
    humidity: 'Humidity',
    wind: 'Wind',
    tips: 'Tips',
    forecast: 'Forecast',
  }
}
// src/locales/zh.ts
export default {
  home: {
    Fund: '基金',
    Weather: '天气',
    Bill: '记账本'
  },
  weather: {
    today: '今天',
    updated: '更新',
    city: '城市',
    temp: '天气',
    humidity: '湿度',
    wind: '风向',
    tips: '提示',
    forecast: '预报',
  }
}
```

## 插件挂载
```ts {5,9}
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales'

const app = createApp(App)

app.use(router).use(i18n).mount('#app')
```

## 页面使用
```vue {2}
<template>
  <div>{{ $t('weather.tips') }}</div>
</template>
```

## 语言切换
```vue
<template>
  <div >
    <div >
      <div >{{ $t('home.Fund') }}</div>
      <div >{{ $t('home.Weather') }}</div>
      <a >{{ $t('home.Bill') }}</a>
    </div>
    <div>
      <div class="btn en" @click="change('en')">en</div>
      <div class="btn zh" @click="change('zh')">zh</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const change = (type: string) => {
  locale.value = type
}
</script>
```

