---
prev: /tools/china-city-lxly.md
next: 
---

# 高德地图驾车路线规划【Vue3】

## 示例

![driving](/images/amap-driving.png)

## 片段

```vue
<template>
  <div id="drive"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { AMapKey, SecurityJsCode } from '@/configs';
import AMapLoader from '@amap/amap-jsapi-loader'

let map: { destroy: () => void } | null = null

window['_AMapSecurityConfig'] = {
  securityJsCode: SecurityJsCode
}

onMounted(() => {
  AMapLoader.load({
    key: AMapKey,
    version: '2.0',
    plugins: ['AMap.DragRoute']
  }).then((AMap) => {
    map = new AMap.Map('drive', {
      resizeEnable: true
    })
    let path = [
      [116.303843, 39.983412],
      [116.321354, 39.896436],
      [116.407012, 39.992093]
    ]
    const drive = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE)
    drive.search()
  })
})

onUnmounted(() => {
  map?.destroy()
})
</script>

<style lang="scss" scoped>
#drive {
  width: 100%;
  height: 100%;
}
</style>
```