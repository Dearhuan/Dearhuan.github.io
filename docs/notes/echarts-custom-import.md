---
prev: /notes/echarts-china-map.md
next: /notes/i18n-vue3.md
---
# Vue3按需引入Echarts

## 1、新建echarts.ts
```ts
// utils/echarts.ts
import * as echarts from 'echarts/core'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  DataZoomComponent
} from 'echarts/components'

import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  DataZoomComponent,
  PieChart,
  BarChart,
  LineChart,
  CanvasRenderer,
])

export default echarts
```

## 2、main.ts中注册
```ts {4,12}
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import echarts from './utils/echarts'

const app = createApp(App)

app.use(router)
app.use(Dialog)
app.mount('#app')

app.provide('$echarts', echarts)
```

## 3、页面中使用
```vue
<template>
  <div ref="compositionChart" style="height: 280px;"></div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, inject } from 'vue';

const echarts: any = inject('$echarts')

// echarts图表
const compositionChart: Ref<HTMLElement | any> = ref(null)
let compositionCharts: any

const compositionOption = {}

onMounted(() => {
  compositionCharts = echarts.init(compositionChart.value)

  compositionOption && compositionCharts.setOption(compositionOption)

  window.onresize = () => {
    compositionCharts.resize()
  }
})
</script>
```
