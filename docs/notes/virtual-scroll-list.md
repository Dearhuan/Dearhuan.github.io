---
prev: /notes/dom2svg.md
next: /notes/lazyload-in-vue.md
---

<script setup>
import { ref, computed, onMounted } from 'vue'

const oriData = Array.from({ length: 500 }, (v, k) => k)
const itemHeight = 20
const emptyHeight = itemHeight * oriData.length
const containerHeight = window.innerHeight - 80 * 2
const itemCount = Math.ceil(containerHeight / itemHeight)

const container = ref(null)
const start = ref(0)
const translateY = ref(0)
const listData = computed(() => {
  return oriData.slice(start.value, start.value + itemCount + 1)
})

onMounted(() => {
  container.value.addEventListener('scroll', e => {
    const { scrollTop } = e.target
    start.value = Math.floor(scrollTop / itemHeight)
    translateY.value = scrollTop + 'px'
  })
})
</script>

<!-- <template> -->
  <div class="container"
       ref="container"
       :style="{ height: containerHeight + 'px' }">
    <div class="empty"
         :style="{ height: emptyHeight + 'px' }"></div>
    <ul class="list"
        :style="{ transform: `translateY(${translateY})` }">
      <li v-for="item in listData"
          :key="item"
          class="item"
          :style="{ height: itemHeight + 'px' }">{{ item }}</li>
    </ul>
  </div>
<!-- </template> -->

<style lang="scss" scoped>
.container {
  overflow: auto;
  display: flex;
  .list {
    width: 100%;
    li {
      list-style: none;
      text-align: center;
    }
  }
}
</style>

```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

const oriData = Array.from({ length: 500 }, (v, k) => k)
const itemHeight = 20
const emptyHeight = itemHeight * oriData.length
const containerHeight = window.innerHeight - 80 * 2
const itemCount = Math.ceil(containerHeight / itemHeight)

const container = ref(null)
const start = ref(0)
const translateY = ref(0)
const listData = computed(() => {
  return oriData.slice(start.value, start.value + itemCount + 1)
})

onMounted(() => {
  container.value.addEventListener('scroll', e => {
    const { scrollTop } = e.target
    start.value = Math.floor(scrollTop / itemHeight)
    translateY.value = scrollTop + 'px'
  })
})
</script>

<template>
  <div class="container"
       ref="container"
       :style="{ height: containerHeight + 'px' }">
    <div class="empty"
         :style="{ height: emptyHeight + 'px' }"></div>
    <ul class="list"
        :style="{ transform: `translateY(${translateY})` }">
      <li v-for="item in listData"
          :key="item"
          class="item"
          :style="{ height: itemHeight + 'px' }">{{ item }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  overflow: auto;
  display: flex;
  .list {
    width: 100%;
    li {
      list-style: none;
      text-align: center;
    }
  }
}
</style>
```