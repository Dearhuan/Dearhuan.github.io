<script lang="ts" setup>
import { ref } from 'vue'

interface Oil {
  consumption: number // 油耗 5(即5L/100km)
  price: number       // 油价 7(即7r/L)
  volume: number      // 容积 46(即46L) 
}

interface Oils {
  title: string
  list: Pick<Oil, 'consumption'>[]
}

interface CalculateRes {
  oilConsumptionTxt: string
  oilPriceTxt: string
  oilVolumeTxt: string
}

const CONSTANT = {
  NUMS: [
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
  ],
  LETTERS: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ]
}

const props = withDefaults(defineProps<Oil>(), {
  consumption: 5,
  price: 7,
  volume: 48.5
})

const oilConsumption = ref()
const oilPrice = ref()
const oilVolume = ref()

const oils = ref<Oils[]>([
  {
    title: '市区未开空调',
    list: [
      {
        consumption: 4.5
      },
      {
        consumption: 5.3
      },
    ]
  },
  {
    title: '市区开空调',
    list: [
      {
        consumption: 5.9
      },
      {
        consumption: 6.8
      },
    ]
  },
])

oils.value = oils.value.map(oil => {
  return {
    title: oil.title,
    list: [...oil.list].concat([
      {
        consumption: oil.list.reduce((acc, cur) => acc + cur.consumption, 0) / 2
      }
    ])
  }
})

const message = ref()

const showMessage = (content) => {
  message.value.warn(content)
}

const calculateResList = ref<CalculateRes[]>([])

const calculate = () => {
  if (!oilConsumption.value) {
    showMessage('请输入油耗！')
    return
  } 
  if (!oilPrice.value) {
    showMessage('请输入油价！')
    return
  } 
  if (!oilVolume.value) {
    showMessage('请输入容积！')
    return
  } 
  // 4.5L/100km 4.5*6.8/100=0.31r/km 46/4.5*100=1022km
  const oilConsumptionTxt = `${oilConsumption.value}L/100km`
  const oilPriceTxt = `${oilConsumption.value}*${oilPrice.value}/100=${(oilConsumption.value * oilPrice.value / 100).toFixed(2)}r/km`
  const oilVolumeTxt = `${oilVolume.value}/${oilConsumption.value}*100=${(oilVolume.value / oilConsumption.value * 100).toFixed(2)}km`
  calculateResList.value.push({
    oilConsumptionTxt: oilConsumptionTxt,
    oilPriceTxt: oilPriceTxt,
    oilVolumeTxt: oilVolumeTxt,
  })
}

const resetInputVal = () => {
  oilConsumption.value = null
  oilPrice.value = null
  oilVolume.value = null
}

</script>

<template>
  <div class="oil-calculator">
    <div class="calculator">
      <div class="calculator-item input-item">
        油耗:<InputNumber v-model:value="oilConsumption" :min="1" :max="20"/>
      </div>
      <div class="calculator-item input-item">
        油价:<InputNumber v-model:value="oilPrice" :min="5" :max="20"/>
      </div>
      <div class="calculator-item input-item">
        容积:<InputNumber v-model:value="oilVolume" :min="20" :max="100" :step="1"/>
      </div>
      <div class="calculator-item calculator-btns">
        <MyButton type="primary" @click="calculate()">计算</MyButton>
        <MyButton @click="resetInputVal()">重置</MyButton>
      </div>
      <div class="calculator-item calculator-desc" v-for="(desc, i) in calculateResList" :key="i">
        <span>{{ desc.oilConsumptionTxt }}</span>
        <span>{{ desc.oilPriceTxt }}</span>
        <span>{{ desc.oilVolumeTxt }}</span>
      </div>
    </div>
    <div class="oil-examples">
      <div :class="['examples', (i % 2) == 0 ? 'orange' : 'blue']" v-for="(oil, i) in oils" :key="i">
        <div class="title">
          <span>{{ `场景${CONSTANT.NUMS[i]}(${oil.title})` }}</span>
          <span>{{ `${price * volume}r` }}</span>
        </div>
        <div class="example" v-for="(item, j) in oil.list" :key="j">
          <div class="desc">
            <span>{{ j === oil.list.length - 1 ? 'AV' : CONSTANT.LETTERS[j] }}</span>
            <span>{{ item.consumption }}L/100km</span>
            <span>{{ `${item.consumption}*${price}/100=${(item.consumption*price/100).toFixed(2)}r/km` }}</span>
            <span>{{ `${volume}/${item.consumption}*100=${(volume/item.consumption*100).toFixed(0)}km` }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Message ref="message" :duration="3000" :top="30" />
</template>

<style lang="scss" scoped>
.blue {
  background-color: skyblue;
  border: 2px solid skyblue;
}
.orange {
  background-color: orange;
  border: 2px solid orange;
}
.oil-calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  .calculator {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .calculator-item {
      padding: 0 0 10px;
    }
    .calculator-desc {
      padding: 10px;
      color: #fff;
      background: #24e85a;
      border-radius: 10px;
      box-shadow: 0px 0px 5px 4px #ddd;
      span {
        padding: 0 4px;
      }
    }
  }

  .oil-examples {
    display: flex;
    flex-direction: column;
    .examples {
      max-width: 500px;
      margin-bottom: 20px;
      border-radius: 10px;
      padding: 10px;
      color: #fff;
      box-shadow: 0px 0px 5px 4px #ddd;
      .title {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
      }
      .example {
        .desc {
          display: flex;
          justify-content: space-between;
          span {
            padding: 5px 0;
          }
        }
      }
    }
  }
}
</style>