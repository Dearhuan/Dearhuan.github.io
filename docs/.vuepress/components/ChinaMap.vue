<template>
  <div ref="chinaMap" class="chinaMap">
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import chinaJSON from '../public/json/china.json'
import { ref, onMounted } from 'vue'

const props = defineProps({
  // 数据源
  dataList: {
    type: Array
  },
  // 标题
  title: {
    type: String
  },
  // 数据范围图例
  pieces: {
    type: Array,
    default: () => {
      return [
        {
          gt:-1,
          lt: 1,
          label: '0人',
          color: '#85daef'
        },
        {
          gt: 1,
          lt: 10,
          label: '1-10人',
          color: '#9feaa5'
        },
        {
          gt:10,
          lt: 20,
          label: '10-20人',
          color: '#74e2ca'
        },
        {
          gt:20,
          label: '20人及以上',
          color: '#5475f5'
        }
      ]
    }
  }
})

const chinaMap = ref()

let chart = null

const initChart = () => {
  chart = echarts.init(chinaMap.value)
  echarts.registerMap('china', chinaJSON)

  const option = {
    // backgroundColor: '#FFFFFF',
    title: {
      text: props.title,
      subtext: '',
      y: '5%',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        return `${params.name}: ${props.dataList.find((x) => {
          return x.name === params.name
        })?.value ?? 0} <br/>
        ${props.dataList.filter((d) => {
          return d.name === params.name
        })[0]?.addList.map((p,i) => {
          return `${i === 0 ? ',' : ''}${p.name}: ${p.num} <br/>`
        })}
        `
      }
    },

    //左侧小导航图标
    visualMap: {
      show: true,
      x: 'left',
      y: 'bottom',
      pieces: props.pieces,
    },

    //配置属性
    series: [{
      type: 'map',
      mapType: 'china',
      roam: true,
      label: {
        normal: {
          show: true  //省份名称
        },
        emphasis: {
          label: {
            show: true
          }
        }
      },
      data: props.dataList  //数据
    }]
  };

  chart.setOption(option)

  window.addEventListener('resize', () => {
    chart.resize({
      animation: {
        duration: 300
      }
    })
  })
}

onMounted(() => {
  initChart()
})

</script>

<style lang="scss" scoped>
.chinaMap {
  height: 600px;
}
</style>