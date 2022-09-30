---
prev: /notes/table.md
next: 
  text: '瀑布流'
  link: /notes/waterfall.html
---
# 图片懒加载-IntersectionObserver
<!-- <template> -->
  <lazyLoad :list="list"/>
  <lazyLoad :list="arr"/>
<!-- </template> -->

<script setup>
import { ref } from 'vue'

const list = ref([
  {
    src: '/images/jaychou.jpg',
    id: 0,
  },
  {
    src: '/images/hero.png',
    id: 1,
  },
  {
    src: '/images/css-doodle.png',
    id: 2,
  },
  {
    src: '/images/demo1.png',
    id: 3,
  },
  {
    src: '/images/okxbot.png',
    id: 7,
  }
])

const arr = ref([
  {
    src: '/images/jaychou.jpg',
    id: 4,
  },
  {
    src: '/images/weather.png',
    id: 5,
  },
])
</script>

## 组件封装
```vue
// components/LazyLoad.vue
<template>
  <div class="container">
    <div class="sunshine" v-for="(item) in list" :key="item.id">
      <img :data-src="item.src" :ref="setItemRef" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

const props = defineProps({
  list: Array
})

const list = ref(props.list)

const imgsRef = ref([])

const observeImgs = () => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(item => {
      console.log(item.isIntersecting)
      if(item.isIntersecting){
        item.target.src = item.target.dataset.src
        delete item.target.dataset.src
        io.unobserve(item.target)
      }
    })
  })
  imgsRef.value.forEach(item => {
    io.observe(item)
  })
}

const setItemRef = el => {
  if(el){
    imgsRef.value.push(el)
  }
}

onMounted(() => {
  nextTick(() => {
    observeImgs()
  })
})

</script>

<style lang="scss" scoped>
.container {
  .sunshine {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 600px;
      object-fit: contain;
    }
  }
}
</style>
```

## 组件使用

```vue {2-3}
<template>
  <lazyLoad :list="list"/>
  <lazyLoad :list="arr"/>
</template>

<script setup>
import { ref } from 'vue'

const list = ref([
  {
    src: '/images/jaychou.jpg',
    id: 0,
  },
  {
    src: '/images/hero.png',
    id: 1,
  },
  {
    src: '/images/css-doodle.png',
    id: 2,
  },
  {
    src: '/images/demo1.png',
    id: 3,
  },
  {
    src: '/images/okxbot.png',
    id: 7,
  }
])

const arr = ref([
  {
    src: '/images/jaychou.jpg',
    id: 4,
  },
  {
    src: '/images/weather.png',
    id: 5,
  },
])
</script>
```