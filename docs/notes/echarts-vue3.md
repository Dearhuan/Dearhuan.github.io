---
prev: /notes/teleport.md
next: /notes/echarts-china-map.md
---
# Vuepress中使用Vue3封装Echarts图表

<myChart :option="option"
         :dark="dark" />

<myChart :option="option_bar" />

<script setup>
import { ref } from 'vue'

const dark = ref(false)
const option = ref(null)
const option_bar = ref(null)

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

option_bar.value = {
      tooltip: {trigger: 'axis',axisPointer: {type: 'shadow'}},
      legend: {},
      grid: {left: '3%',right: '4%',bottom: '3%',containLabel: true},
      xAxis: {type: 'value'},
      yAxis: {type: 'category',data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
      series: [
        {name: 'Direct',type: 'bar',stack: 'total',label: {show: true},emphasis:{focus: 'series'},data: [320, 302, 301, 334, 390, 330, 320]},
        {
          name: 'Mail Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Affiliate Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: 'Search Engine',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    }
</script>

::: tip
vue3中echarts实例使用普通变量进行定义，使用ref定义会出现resize事件失效和tooltip图例失效的问题。
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
```