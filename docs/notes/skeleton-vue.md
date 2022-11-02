---
prev: /notes/skeleton.md
next: /notes/dom2svg.md
---
# 自定义骨架屏

::: tip 
通过使用骨架屏给页面提供默认占位和过渡效果，提升用户体验
:::

## 效果示例
<div id="box">
  <div class="flex" v-for="(item,i) in [1,2,3,4,5]" :key="i">
    <Skeleton type="image" :animated="animated" containerStyle="width:200px;" itemStyle="width:200px;height:150px;" />
    <div style="flex: 1;margin-left:10px;position:relative;">
      <Skeleton type="h1" :animated="animated" containerStyle="height:30px;" itemStyle="height: 100%;" />
      <Skeleton type="text" :animated="animated" containerStyle="width:80%;height:20px;margin-top: 10px;" itemStyle="height: 100%;" />
      <div style="position:absolute;bottom:0;">
        <Skeleton v-for="(item, j) in [1,2,3,4]" :key="j" type="text" :animated="animated"  containerStyle="display:inline-block;width:auto;margin-right:10px;"   itemStyle="width:60px;height:30px;" />
      </div>
      <div style="position:absolute;bottom:0;right:10px;">
        <Skeleton type="circle" :animated="animated"  itemStyle="width:50px;height:50px;" />
      </div>
    </div>
  </div>
</div>

<script setup lang="ts">
import { ref } from 'vue'

const animated = ref<boolean>(true)

</script>

<style>
#box {
  padding: 10px;
  background: #e3e3e3;
}
.flex {
  display: flex;
  margin-bottom: 10px;
  background: #fff;
  padding: 10px;
}
.flex:last-child {
  margin-bottom: 0;
}
</style>

## 组件定义

```vue
<template>
  <div v-if="animated" :class="[ns.b(), ns.is('animated', true)]" :style="containerStyle">
    <div :class="[ns.e('item'), ns.e(type)]" :style="itemStyle">
      <svg v-if="type === 'image'" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor"
          d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32  32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248  0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32  32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z">
        </path>
      </svg>
    </div>
  </div>
  <div v-else :class="[ns.e('item'), ns.e(type)]" :style="itemStyle">
      <svg v-if="type === 'image'" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor"
          d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32  32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248  0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32  32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z">
        </path>
      </svg>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { useNamespace } from '../hooks'

type SkeletonType = 'text' | 'image' | 'h1' | 'h3' | 'button' | 'circle'

const props = defineProps({
  type: {
    type: String as PropType<SkeletonType>
  },
  itemStyle: {
    type: String
  },
  animated: {
    type: Boolean
  },
  containerStyle: {
    type: String
  }
})

const ns = useNamespace('skeleton')

</script>

<style lang="scss">
@import '../styles/el-skeleton.scss'
</style>
```