---
prev: /notes/echarts-vue3.md
next: /notes/eslint-prettier-husky.md
---

# Echarts-中国地图

<ChinaMap :dataList="dataList" :title="title"/>

<script setup>
import { ref } from 'vue'

const title = ref('新增本土确诊')
const dataList = ref([])
dataList.value = [{name: '台湾', value: 0, addList: []},{name: '香港', value: 0, addList: []},{name: '湖北', value: 5, addList: [{name: '襄阳', num: 5},]},{name: '上海', value: 1, addList: [{name: '松江', num: 1},]},{name: '吉林', value: 0, addList: []},{name: '广东', value: 36, addList: [{name: '广州', num: 16},{name: '深圳', num: 10},{name: '佛山', num: 6},{name: '中山', num: 2},{name: '清远', num: 1},]},{name: '海南', value: 0, addList: []},{name: '四川', value: 8, addList: [{name: '宜宾', num: 4},{name: '外省返川人员', num: 1},{name: '凉山', num: 1},{name: '雅安', num: 1},{name: '乐山', num: 1},]},{name: '福建', value: 0, addList: []},{name: '北京', value: 14, addList: [{name: '朝阳', num: 4},{name: '东城', num: 2},{name: '海淀', num: 2},{name: '丰台', num: 1},{name: '西城', num: 1},]},{name: '内蒙古', value: 17, addList: [{name: '呼和浩特', num: 9},{name: '包头', num: 5},{name: '乌海', num: 2},{name: '呼伦贝尔', num: 1},]},{name: '陕西', value: 9, addList: [{name: '西安', num: 3},{name: '渭南', num: 3},{name: '汉中', num: 2},{name: '延安', num: 1},]},{name: '浙江', value: 8, addList: [{name: '宁波', num: 7},{name: '台州', num: 1},]},{name: '黑龙江', value: 4, addList: [{name: '哈尔滨', num: 4},]},{name: '河南', value: 6, addList: [{name: '郑州', num: 6},]},{name: '山东', value: 1, addList: [{name: '临沂', num: 1},]},{name: '云南', value: 6, addList: [{name: '德宏州', num: 3},{name: '昭通市', num: 2},{name: '红河', num: 1},]},{name: '江苏', value: 11, addList: [{name: '南京', num: 9},{name: '无锡', num: 2},]},{name: '天津', value: 0, addList: []},{name: '广西', value: 2, addList: [{name: '南宁', num: 2},]},{name: '河北', value: 0, addList: []},{name: '辽宁', value: 3, addList: [{name: '盘锦', num: 2},{name: '抚顺', num: 1},]},{name: '新疆', value: 8, addList: [{name: '乌鲁木齐', num: 6},{name: '伊犁哈萨克自治州', num: 2},]},{name: '湖南', value: 16, addList: [{name: '未公布来源', num: 16},]},{name: '安徽', value: 0, addList: []},{name: '江西', value: 0, addList: []},{name: '西藏', value: 2, addList: [{name: '拉萨', num: 2},]},{name: '甘肃', value: 0, addList: []},{name: '重庆', value: 2, addList: [{name: '渝北区', num: 1},{name: '巴南区', num: 1},]},{name: '贵州', value: 0, addList: []},{name: '山西', value: 46, addList: [{name: '大同', num: 32},{name: '吕梁', num: 7},{name: '晋中', num: 3},{name: '忻州', num: 3},{name: '临汾', num: 1},]},{name: '澳门', value: 0, addList: []},{name: '青海', value: 0, addList: []},{name: '宁夏', value: 3, addList: [{name: '银川', num: 3},]},{name: '南海诸岛', value: 0, addList: []}]
</script>

### 组件定义
```vue
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
```