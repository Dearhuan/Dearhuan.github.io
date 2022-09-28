---
prev: 
  text: '虚拟列表'
  link: /notes/virtual-scroll-list.html
next: /notes/lazyload-in-vue.md
---

# VuePress时间线组件

<timeLineCard :timeLineList="list" />

<pagination />

<script setup>
import { ref } from 'vue'

const list = ref([])

list.value = [
  {
    time: '09-28 11:41',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'tip'
  },
  {
    time: '09-28 11:41',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'warning'
  },
  {
    time: '09-28 11:41',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'danger'
  },
  {
    time: '09-28 11:41',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'details'
  },
]
</script>

## 组件定义

```vue
<template>
  <div v-for="(item, i) in timeLineList" :key="i">
    <h3>
      <a :href="`#_${item.time}`" class="header-anchor" aria-hidden="true">#</a>
      {{ item.time }}
    </h3>
    <div v-if="item.type != 'details'" :class="`${item.type ? `custom-container ${item.type}` : 'custom-container tip'}`">
      <p class="custom-container-title">{{ item.title }}</p>
      <p>{{ item.content }}</p>
    </div>
    <details v-else class="custom-container details">
      <summary v-if="item.title">{{ item.title }}</summary>
      <p>{{ item.content }}</p>
    </details>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

type ItemType = 'tip' | 'warning' | 'danger' | 'details'

interface TimeLineItem {
  time: string
  title: string
  content: string
  type?: ItemType
}

const props = defineProps({
  timeLineList: {
    type: Array as PropType<TimeLineItem[]>,
    required: true
  }
})

</script>
```