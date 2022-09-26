<template>
  <div :id="uid" :style="style"></div>
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

const chart = ref(null)

onMounted(() => {
  chart.value = echarts.init(document.getElementById(uid.value), dark.value ? 'dark' : '')

  chart.value.setOption(props.option, {
    notMerge: true
  })

  window.addEventListener('resize', () => {
    chart.value.resize({
      animation: {
        duration: 300
      }
    })
  })
})
</script>