<template>
  <div class="container">
    <div class="title" v-if="title">{{ title }}</div>
    <div>
      <div class="year-box flex-box" v-for="(item, i) in list" :key="i">
        <div class="year flex-box">{{ item.year }}</div>
        <div class="months">
          <div class="top flex-box">
            <div class="month"
              :class="(m.isUnRelated && !m.isUnFinished) ? 'gray' : (!m.isUnRelated && m.isUnFinished) ? 'orange' : 'green'"
              v-for="(m, j) in item.topOption" :key="j">
              <div class="text">{{ m.month }}</div>
              <div class="sub-text">{{ money }}</div>
            </div>
          </div>
          <div class="bottom flex-box">
            <div class="month"
              :class="(m.isUnRelated && !m.isUnFinished) ? 'gray' : (!m.isUnRelated && m.isUnFinished) ? 'orange' : 'green'"
              v-for="(m, j) in item.bottomOption" :key="j">
              <div class="text">{{ m.month }}</div>
              <div class="sub-text">{{ money }}</div>
            </div>
          </div>
        </div>
        <div class="sub-total flex-box">
          <div class="sub-item blue">{{ `总计${item.paidItem + item.unPaidItem}期:${(item.paidItem + item.unPaidItem) * Number(money)}` }}</div>
          <div class="sub-item green">{{ `已还${item.paidItem}期:${((item.paidItem) * Number(money)).toFixed(2)}` }}</div>
          <div class="sub-item orange">{{ `待还${item.unPaidItem}期:${(item.unPaidItem) * Number(money)}` }}</div>
        </div>
      </div>
    </div>
    <div class="tooltips flex-box">
      <div class="tooltip" v-for="(item, i) in tooltips" :key="i">
        <div class="color-block" :class="item.color">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Option {
  year: string | number
  topOption: Array<MonthItem>
  bottomOption: Array<MonthItem>
  paidItem: number
  unPaidItem: number
}

interface MonthItem {
  isUnRelated: boolean
  isUnFinished: boolean
  month: string
}

interface Props {
  title?: string // 标题
  money?: string | number // 金额
  startDate: string // 起始日期
  endDate: string // 截止日期
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  money: 9999,
  startDate: '2000-05-20',
  endDate: '2099-05-20'
})

const list = ref<Option[]>([])
// 总览金额
const totalMoney = ref<number>(0) // 总金额
const paidMoney = ref<number>(0) // 已还金额
const unPaidMoney = ref<number>(0) // 待还金额

const topMonths = ['01', '02', '03', '04', '05', '06']
const bottomMonths = ['07', '08', '09', '10', '11', '12']

// 日历底部总览信息
const tooltips = ref([
  {
    color: 'blue',
    name: 'total',
    text: '总计'
  },
  {
    color: 'gray',
    name: 'other',
    text: '其他'
  },
  {
    color: 'green',
    name: 'paid',
    text: '已还'
  },
  {
    color: 'orange',
    name: 'unpaid',
    text: '待还'
  }
])

const getMonthOption = (months: string[], year: number) => {
  const currentDate = new Date()
  const startYear = new Date(props.startDate).getFullYear()
  const startMonth = new Date(props.startDate).getMonth() + 1
  const startDay = new Date(props.startDate).getDate()
  const option = months.map(item => {
    const itemMonth = Number(item)
    let isUnRelated = false
    let isUnFinished = false
    if ((new Date(`${year}-${itemMonth}-${currentDate.getDate()}`) < new Date(props.startDate)) ||
      (new Date(`${year}-${itemMonth}-${currentDate.getDate()}`) > new Date(props.endDate))) {
      isUnRelated = true
    }
    if ((new Date(`${year}-${itemMonth}-${currentDate.getDate()}`) > new Date(props.startDate)) &&
      (new Date(`${year}-${itemMonth}-${currentDate.getDate()}`) < new Date(props.endDate))) {
      isUnFinished = true
    }
    if ((new Date(`${year}-${itemMonth}-${currentDate.getDate()}`).getMonth() > new Date(`${startYear}-${startMonth - 1}-${startDay}`).getMonth()) &&
      (new Date(`${year}-${itemMonth}-${currentDate.getDate()}`) < currentDate)) {
      isUnFinished = true
      isUnRelated = true
    }
    return {
      month: item,
      isUnRelated: isUnRelated,
      isUnFinished: isUnFinished
    } 
  })
  return option
}

const getList = () => {
  const startYear = new Date(props.startDate).getFullYear()
  const endYear = new Date(props.endDate).getFullYear()
  const count = (endYear - startYear) + 1
  const arr: Option[] = []
  for (let i = 0; i < count; i++) {
    const year = startYear + i
    const topOption = getMonthOption(topMonths, year)
    const bottomOption = getMonthOption(bottomMonths, year)
    const obj = {
      year: year,
      topOption: topOption,
      bottomOption: bottomOption,
      paidItem: 0,
      unPaidItem: 0
    }
    arr.push(obj)
  }
  return arr
}

onMounted(() => {
  list.value = getList()
  let paidCount = 0
  list.value.forEach(item => {
    let paidItem = 0
    let unPaidItem = 0
    item.topOption.forEach(top => {
      if (top.isUnFinished && top.isUnRelated) {
        paidCount++
        paidItem++
      }
      if (top.isUnFinished && !top.isUnRelated) {
        unPaidItem++
      }
    })
    item.bottomOption.forEach(bot => {
      if (bot.isUnFinished && bot.isUnRelated) {
        paidCount++
        paidItem++
      }
      if (bot.isUnFinished && !bot.isUnRelated) {
        unPaidItem++
      } 
    })
    item.paidItem = paidItem
    item.unPaidItem = unPaidItem
  })
  console.log(list.value, '---')
  paidMoney.value = paidCount * Number(props.money)
  
  const startDate = new Date(props.startDate)
  const endDate = new Date(props.endDate)
  const diffYear = endDate.getFullYear() - startDate.getFullYear() 
  const diffMonth = diffYear * 12 + endDate.getMonth() - startDate.getMonth()
  totalMoney.value = diffMonth * Number(props.money)
  unPaidMoney.value = totalMoney.value - paidMoney.value

  tooltips.value = tooltips.value.map(tip => {
    const text = tip.name === 'total' ? 
                  totalMoney.value : 
                  tip.name === 'other' ?
                  null : 
                  tip.name === 'paid' ?
                  paidMoney.value : 
                  tip.name === 'unpaid' ?
                  unPaidMoney.value : null
    return {
      color: tip.color,
      name: tip.name,
      text: `${tip.text}${text ? `(${text})` : ''}`
    }
  })
})
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
}

.blue {
  cursor: pointer;
  background-color: rgb(13 126 228 / 69%);
}

.gray {
  cursor: not-allowed;
  background-color: #b4b4b4;
}

.orange {
  cursor: pointer;
  background-color: orange;
  box-sizing: content-box;
}
.orange:hover, .green:hover, .year:hover {
  opacity: 0.8;
  transform: scale(1.01);
}

.green {
  cursor: pointer;
  background-color: rgb(78 237 78);
  box-sizing: content-box;
}

.container {
  color: #fff;
  width: fit-content;
  .title {
    background-color: rgb(13 126 228 / 69%);
    text-align: center;
    padding: 10px 0;
  }

  .year {
    cursor: pointer;
    align-items: center;
    padding: 0 20px;
    background-color: rgb(13 126 228 / 69%);
    border-bottom: 1px solid #fff;
  }

  .months {
    flex: 1;

    .month {
      padding: 10px;
      display: flex;
      border-bottom: 1px solid #fff;
      flex-direction: column;
      .text {
        padding: 8px 0;
      }
      .sub-text {
        font-size: 12px;
        padding-left: 20px;
      }
    }
    .gray {
      .sub-text {
        text-decoration: line-through;
      }
    }

    .month:not(:last-child) {
      border-right: 1px solid #fff;
    }
  }

  .sub-total {
    flex: 1;
    flex-direction: column;
    font-size: 12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    .sub-item {
      flex: 1;
      max-width: 160px;
    }
  }

  .sub-total:last-child {
    border-bottom: none;
  }

  .year-box:last-child {
    .year {
      border-bottom: none;
    }

    .months {
      .bottom {
        .month {
          border-bottom: none;
        }
      }
    }
  }

  .tooltips {

    .tooltip {
      flex: 1;
      .color-block {
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        padding: 0 0 0 5px;
      }
    }
  }
}

@media screen and (min-width: 200px) and (max-width: 700px) {
  .container {
    .months {

      .month {
        padding: 3px 6px;
      }
    }

    .year {
      padding: 0 10px;
    }
  }

}</style>