---
prev: /tools/weatherbook.md
next: /tools/fundbook.md
---
# 城市天气时间轴

![weather](/images/cityWeather.gif)

::: tip 项目地址
[访问](https://dearhuan.github.io/swiper-fund/#/weather/amap)

[仓库](https://github.com/Dearhuan/swiper-fund)
:::


## 地图组件
```vue
<template>
  <div id="cityMap"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { AMapKey, cityLocation } from '@/configs'
import AMapLoader from '@amap/amap-jsapi-loader'

const cityMap = ref(null)

const props = defineProps({
  city: {
    type: String,
    default: ''
  }
})

const initMap = (city: string) => {
  const center = cityLocation.filter(item => {
    return item.name === city
  })[0].lnglat;
  AMapLoader.load({
    key: AMapKey,
    version: '2.0',
    plugins: [],
  }).then((AMap) => {
    cityMap.value = new AMap.Map('cityMap', {
      viewMode: "3D",
      zoom: 9,
      center: center
    })
  })
};

onMounted(() => {
  initMap(props.city)
});
</script>

<style lang="scss" scoped>
#cityMap {
  width: 100%;
  height: 220px;
}
</style>
```

### APIS

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
city | 城市 | string |  | true

### 使用
```vue
<CityMap city="上海"/>
```

## 返回按钮

```vue
<template>
  <div class="back-btn fade-top" @click="handleClick()">
    <svg t="1692929712045" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
      p-id="2459" width="28" height="28">
      <path
        d="M894.976 574.464q0 78.848-29.696 148.48t-81.408 123.392-121.856 88.064-151.04 41.472q-5.12 1.024-9.216 1.536t-9.216 0.512l-177.152 0q-17.408 0-34.304-6.144t-30.208-16.896-22.016-25.088-8.704-29.696 8.192-29.696 21.504-24.576 29.696-16.384 33.792-6.144l158.72 1.024q54.272 0 102.4-19.968t83.968-53.76 56.32-79.36 20.48-97.792q0-49.152-18.432-92.16t-50.688-76.8-75.264-54.784-93.184-26.112q-2.048 0-2.56 0.512t-2.56 0.512l-162.816 0 0 80.896q0 17.408-13.824 25.6t-44.544-10.24q-8.192-5.12-26.112-17.92t-41.984-30.208-50.688-36.864l-51.2-38.912q-15.36-12.288-26.624-22.016t-11.264-24.064q0-12.288 12.8-25.6t29.184-26.624q18.432-15.36 44.032-35.84t50.688-39.936 45.056-35.328 28.16-22.016q24.576-17.408 39.936-7.168t16.384 30.72l0 81.92 162.816 0q5.12 0 10.752 1.024t10.752 2.048q79.872 8.192 149.504 41.984t121.344 87.552 80.896 123.392 29.184 147.456z"
        p-id="2460" fill="#14a7ec"></path>
    </svg>
  </div>
</template>

<script setup>
const emit = defineEmits(['myClick'])

const handleClick = (info) => {
  emit('myClick', info)
}
</script>

<style lang="scss" scoped>
.back-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 8px 10px;
  box-shadow: 0px 0px 5px 4px #ddd;
  background: #fff;
  opacity: 0.8;
}
</style>
```

### 使用
```vue
<BackToBtn @myClick="handleBack(-1)" />
```