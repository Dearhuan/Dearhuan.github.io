## Vuepress中使用Vue3封装Echarts图表
<!-- <template> -->
  <myChart :option="option"
           :dark="dark" />
<!-- </template> -->

<script setup>
import { ref } from 'vue'

const dark = ref(false)
const option = ref(null)

dark.value = true

option.value = {
  title: {
    text: 'Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}
</script>

::: warning 存在问题
图例legend没有展示
:::

```vue
// components/MyChart.vue
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
```