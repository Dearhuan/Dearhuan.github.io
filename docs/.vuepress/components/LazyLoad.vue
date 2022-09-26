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