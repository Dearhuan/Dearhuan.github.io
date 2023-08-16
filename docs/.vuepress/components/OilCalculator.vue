<template>
  <div class="youjia-comp">
    <div class="comp content_box">
      <div class="content_title">
        油价计算器
      </div>
      <div class="tab_title">
        <span :class="{ tab_active: activeTab === 'volume' }" @click="handleTabToggle('volume')"
          style="border-radius: 0.2rem 0.2rem 0.2rem 0px;">按油量查费用</span>
        <span :class="{ tab_active: activeTab === 'fee' }" @click="handleTabToggle('fee')"
          style="border-radius: 0px 0.2rem;">按费用查油量</span>
      </div>
      <div class="tab_con ">
        <div class="tab_new new-tab-item" v-show="activeTab === 'volume'">
          <div class="item flex-between first-flex-between" style="margin-bottom:0.14rem;">
            <span>类型</span>
            <div class="flex-center">
              <select name="" class="qiyou" id="qiyou_volume">
                <option v-for="(oil, index) in oils" :key="index" :value="oil.price" :data-up="oil.rate">{{ oil.name }}</option>
              </select>
            </div>
          </div>
          <div class="onepx"></div>
          <div class="item flex-between new-item">
            <span>加油容量（L）</span>
            <input class="new-input" type="text" v-model="oilVolume" placeholder="请输入加油容量">
          </div>
          <div class="onepx"></div>
          <div id="1" class="query_btn" @click="handleCalculate(1)">查询</div>
          <ul class="query_result query_result1" style="display: block;">
            <p>查询结果</p>
            <li>类型：<span class="sp oi">{{ result1.type }}</span></li>
            <li>加油容量（L）：<span class="sp vl">{{ result1.volume }}</span></li>
            <li>单价（元/L）: <span class="sp">{{ result1.price }}</span></li>
            <li>涨跌（元/L）: <span class="sp">{{ result1.rate }}</span></li>
            <li>花费金额（元）： <span class="sp pr">{{ result1.fee }}</span></li>
            <li>较上次油价变动后<span id="duo_you">{{ result1.compareStr }}</span>花了<span class="sp up">{{ result1.compareFee
            }}</span>元</li>
          </ul>
          <p class="query-tip">*查询结果仅供参考，实际以各加油站为准</p>
        </div>
        <div class="tab_new new-tab-item" v-show="activeTab === 'fee'">
          <div class="item flex-between first-flex-between" style="margin-bottom:0.14rem;">
            <span>类型</span>
            <div class="flex-center">
              <select name="" class="qiyou" id="qiyou_fee">
                <option v-for="(oil, index) in oils" :key="index" :value="oil.price" :data-up="oil.rate">{{ oil.name }}</option>
              </select>
            </div>
          </div>
          <div class="onepx"></div>
          <div class="item flex-between new-item">
            <span>花费金额（元）</span>
            <input class="new-input" type="text" v-model="oilFee" placeholder="请输入花费金额">
          </div>
          <div class="onepx"></div>
          <div id="2" class="query_btn" @click="handleCalculate(2)">查询</div>
          <ul class="query_result query_result2" style="display: block;">
            <p>查询结果</p>
            <li>类型：<span class="sp oi">{{ result2.type }}</span></li>
            <li>加油容量（L）：<span class="sp pr">{{ result2.volume }}</span></li>
            <li>单价（元/L）: <span class="sp">{{ result2.price }}</span></li>
            <li>涨跌（元/L）: <span class="sp">{{ result2.rate }}</span></li>
            <li>花费金额（元）：<span class="sp vl">{{ result2.fee }}</span></li>
            <li>较上次油价变动后<span id="duo_yuan">{{ result2.compareStr }}</span>加了<span class="sp up">{{
              result2.compareVolume }}</span>L</li>
          </ul>
          <p class="query-tip">*查询结果仅供参考，实际以各加油站为准</p>
        </div>
      </div>
    </div>
  </div>
  <Message ref="message" :duration="3000" :top="30" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  oils: OilPriceInfo[]
}

interface OilPriceInfo {
  price: string
  rate: string
  name: string
}

withDefaults(defineProps<Props>(), {
  oils: () => [
    {
      price: '8.10',
      rate: '+0.18',
      name: '92号汽油'
    },
    {
      price: '8.77',
      rate: '+0.21',
      name: '95号汽油'
    }
  ]
})

const message = ref()

const showWarnMsg = (content: string) => {
  message.value.warn(content)
} 

const activeTab = ref<string>('volume') // 选中tab
const oilVolume = ref<string>('')
const oilFee = ref<string>('')

const result1 = ref(
  {
    type: '92号汽油', // 类型
    volume: '', // 加油容量
    price: '', // 单价
    rate: '', // 涨跌幅
    fee: '', // 花费金额
    compareStr: '多', // 比较
    compareFee: '' // 差价
  }
)

const result2 = ref(
  {
    type: '92号汽油', // 类型
    volume: '', // 加油容量
    price: '', // 单价
    rate: '', // 涨跌幅
    fee: '', // 花费金额
    compareStr: '少', // 比较
    compareVolume: '' // 差量
  }
)

// tab切换
const handleTabToggle = (tabName: string) => {
  activeTab.value = tabName
}

const getPriceChangeInfo = (text: string) => {
  if (text.indexOf('+') > -1) {
    return [text.slice(0, 1), text.slice(1)]
  } else if (text.indexOf('-') > -1) {
    return [text.slice(0, 1), text.slice(1)]
  } else {
    return text
  }
}
// 计算
const handleCalculate = (id: number) => {
  if (id === 1) {
    // 按油量查费用
    if (oilVolume.value?.length === 0) {
      showWarnMsg('请输入加油容量！')
      return
    }
    const select = document.getElementById('qiyou_volume') as HTMLSelectElement
    const s_index = select.selectedIndex
    const price = Number(select.options[s_index].value) * 1
    const up = select.options[s_index].getAttribute('data-up') as string
    const text = select.options[s_index].text

    result1.value.type = text
    result1.value.price = `${price}`
    result1.value.rate = up
    result1.value.volume = `${oilVolume.value}`
    result1.value.fee = `${(price * Number(oilVolume.value)).toFixed(2)}`

    if (Array.isArray(getPriceChangeInfo(up))) {
      const [symbol, range] = getPriceChangeInfo(up)      
      if (symbol === '+') {
        const old_price = Number((price - Number(range)).toFixed(2))
        result1.value.compareFee = `${((price - old_price) * Number(oilVolume.value)).toFixed(2)}`
        result1.value.compareStr = '多'
      } else {
        const old_price = Number((price + Number(range)).toFixed(2))
        result1.value.compareFee = `${((old_price - price) * Number(oilVolume.value)).toFixed(2)}`
        result1.value.compareStr = '少'
      }
    } else {
      result1.value.compareStr = '多'
      result1.value.compareFee = '0'
    }

  } else if (id === 2) {
    // 按费用查油量
    if (oilFee.value?.length === 0) {
      showWarnMsg('请输入花费金额！')
      return
    }
    const select = document.getElementById('qiyou_fee') as HTMLSelectElement
    const s_index = select.selectedIndex
    const price = Number(select.options[s_index].value) * 1
    const up = select.options[s_index].getAttribute('data-up') as string
    const text = select.options[s_index].text

    result2.value.type = text
    result2.value.price = `${price}`
    result2.value.rate = `${up}`
    result2.value.fee = `${oilFee.value}`
    result2.value.volume = `${(Number(oilFee.value) / price).toFixed(2)}`

    if (Array.isArray(getPriceChangeInfo(up))) {
      const [symbol, range] = getPriceChangeInfo(up)
      if (symbol === '+') {
        const old_price = Number((price - Number(range)).toFixed(2))
        const old_volume = ((Number(oilFee.value) / old_price) - (Number(oilFee.value) / price)).toFixed(2)
        result2.value.compareVolume = `${old_volume}`
        result2.value.compareStr = '少'
      } else {
        const old_price = Number((price + Number(range)).toFixed(2))
        const old_volume = ((Number(oilFee.value) / price) - (Number(oilFee.value) / old_price)).toFixed(2)
        result2.value.compareVolume = `${old_volume}`
        result2.value.compareStr = '多'
      }
      
    } else {
      result2.value.compareStr = '少'
      result2.value.compareVolume = '0'
    }
  }
}
</script>

<style lang="scss" scoped>
html.dark {
  .qiyou, .new-input{
    color: #000;
    background: #fff;
  }
  
}
.youjia-comp {
  background-color: #fff;
}

.comp {
  border-radius: 12px;
  border: 1px solid #f2f2f2;
}

.comp .content_title {
  font-size: 18px;
  font-weight: 700;
  color: #333;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.comp .tab_title {
  font-size: 18px;

  color: #222;
  background-color: #f5f5f5;
  display: flex;
}

.comp .tab_title>span {
  display: block;
  padding: 16px 46px 14px;
  text-align: center;
  width: 50%;
}

.comp .tab_title .tab_active {
  color: #3372fd;
  background-color: #fff;
}

.comp .tab_item {
  padding: 0 22px 16px;
  font-size: 16px;
}

.comp .flex-between {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.comp .flex-between select {
  border: none;
}

.comp .flex-between input {
  border: none;
  text-align: right;
}

.query_btn {
  cursor: pointer;
  margin-top: 16px;
  height: 46px;
  line-height: 46px;
  border-radius: 30px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: #3372fd;
}

.query_result {
  display: none;
  position: relative;
  margin-top: 0.56rem;
  padding: 0.17rem 0.24rem 0.3rem;
  border-radius: 0.1rem;
  background-color: #f4f4f4;
}

.query-tip {
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  text-align: center;
  color: #999;

}

.new-tab-item .onepx {
  height: 1px;
  width: 100%;
  background-color: rgba(242, 242, 242, 1);
}

.new-input::placeholder {
  opacity: 1;
  color: rgba(51, 114, 253, 1);
  font-size: 16px;
  font-weight: 400;
  font-family: "Microsoft YaHei";
  text-align: right;
}
.new-input:focus {
  outline: none;
}

.new-tab-item {
  padding: 0 !important;
}

.new-tab-item .flex-between {
  margin-left: 22px;
  margin-right: 16px;
  margin-top: 15px !important;
  margin-bottom: 18px !important;
}

.new-tab-item>ul {
  margin-left: 22px;
  margin-right: 16px;

}

.new-tab-item .query_btn {
  margin-left: 22px;
  margin-right: 16px;
}

.query_result {
  padding: 10px;
}

.query_result li {
  list-style: none;
  margin-top: 8px !important;
}

.query_result p {
  font-size: 18px;
}
</style>