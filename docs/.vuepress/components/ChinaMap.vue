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
  seriesTitle: {
    type: String
  },
  // 数据范围图例
  pieces: {
    type: Array
  }
})

const chinaMap = ref()

const randomNum = () => Math.round(Math.random() * 20);

const list = [
  { name: '北京', value: 10 }, { name: '天津', value: randomNum() },
  { name: '上海', value: randomNum() }, { name: '重庆', value: randomNum() },
  { name: '河北', value: randomNum() }, { name: '河南', value: randomNum() },
  { name: '云南', value: randomNum() }, { name: '辽宁', value: randomNum() },
  { name: '黑龙江', value: randomNum() }, { name: '湖南', value: randomNum() },
  { name: '安徽', value: randomNum() }, { name: '山东', value: randomNum() },
  { name: '新疆', value: 0 }, { name: '江苏', value: randomNum() },
  { name: '浙江', value: randomNum() }, { name: '江西', value: randomNum() },
  { name: '湖北', value: randomNum() }, { name: '广西', value: randomNum() },
  { name: '甘肃', value: randomNum() }, { name: '山西', value: randomNum() },
  { name: '内蒙古', value: randomNum() }, { name: '陕西', value: randomNum() },
  { name: '吉林', value: randomNum() }, { name: '福建', value: randomNum() },
  { name: '贵州', value: randomNum() }, { name: '广东', value: randomNum() },
  { name: '青海', value: randomNum() }, { name: '西藏', value: randomNum() },
  { name: '四川', value: randomNum() }, { name: '宁夏', value: randomNum() },
  { name: '海南', value: randomNum() }, { name: '台湾', value: randomNum() },
  { name: '香港', value: randomNum() }, { name: '澳门', value: randomNum() }
];

const initChart = () => {
  const chart = echarts.init(chinaMap.value)
  echarts.registerMap('china', chinaJSON)

  const option = {
    backgroundColor: '#FFFFFF',
    title: {
      text: props.title,
      subtext: '',
      y: '5%',
      x: 'center'
    },
    tooltip: {
      trigger: 'item'
    },

    //左侧小导航图标
    visualMap: {
      show: true,
      x: 'left',
      y: 'bottom',
      pieces: [
        {
          gt:-1,
          lt: 10,
          label: '正常',
          color: '#85daef'
        },
        {
          gt:10,
          lt: 20,
          label: '一般',
          color: '#74e2ca'
        },
        {
          gt:20,
          label: '严重',
          color: '#5475f5'
        }
      ],
    },

    //配置属性
    series: [{
      name: '数据',
      type: 'map',
      mapType: 'china',
      roam: true,
      label: {
        normal: {
          show: true  //省份名称
        },
        emphasis: {
          show: false
        }
      },
      data: props.dataList  //数据
    }]
  };

  chart.setOption(option)
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