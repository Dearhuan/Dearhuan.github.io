<template>
  <div class="my-chart" :id="uid" :style="style"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  option: {
    type: Object,
    required: true,
    default: () => ({})
  },
  style: {
    type: Object,
    default: () => ({
      width: '100%',
      height: '800px'
    })
  },
  dark: {
    type: Boolean,
    required: false,
    default: false
  }
})

let uid = ref(null)

onBeforeMount(() => {
  uid.value = `echarts-uid-${parseInt(Math.random() * 1000)}`
})
const dark = ref(props.dark)

// vue3中echarts实例使用普通变量进行定义
let chart = null

onMounted(() => {
  chart = echarts.init(document.getElementById(uid.value), dark.value ? 'dark' : '')

  chart.setOption(props.option, {
    notMerge: true
  })

  window.addEventListener('resize', () => {
    chart.resize({
      animation: {
        duration: 300
      }
    })
  })
})
</script>

<style lang="scss" scoped>
.my-chart {
  margin: 10px 0;
}
</style>