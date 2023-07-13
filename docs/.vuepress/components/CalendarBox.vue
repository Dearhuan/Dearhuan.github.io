<template>
  <div class="container">
    <div class="title" v-if="title">{{ title }}</div>
    <div>
      <div class="year-box flex" v-for="(item, i) in list" :key="i">
        <div class="year flex">{{ item.year }}</div>
        <div class="months">
          <div class="top flex">
            <div class="month"
              :class="(m.isUnRelated && !m.isUnFinished) ? 'gray' : (!m.isUnRelated && m.isUnFinished) ? 'orange' : 'green'"
              v-for="(m, j) in item.topOption" :key="j">
              <div class="text">{{ m.month }}</div>
              <div class="sub-text">{{ money }}</div>
            </div>
          </div>
          <div class="bottom flex">
            <div class="month"
              :class="(m.isUnRelated && !m.isUnFinished) ? 'gray' : (!m.isUnRelated && m.isUnFinished) ? 'orange' : 'green'"
              v-for="(m, j) in item.bottomOption" :key="j">
              <div class="text">{{ m.month }}</div>
              <div class="sub-text">{{ money }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tooltips flex">
      <div class="tooltip" v-for="(item, i) in tooltips" :key="i">
        <div class="color-block" :class="item.color">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  year: string | number
  topOption: Array<MonthItem>
  bottomOption: Array<MonthItem>
}

interface MonthItem {
  isUnRelated: boolean
  isUnFinished: boolean
  month: string
}

interface Props {
  title?: string
  money?: string | number
  startDate: string
  endDate: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  money: 9999,
  startDate: '2023-04-24',
  endDate: '2026-04-24'
})

const list = ref<Option[]>([])

const topMonths = ['01', '02', '03', '04', '05', '06']
const bottomMonths = ['07', '09', '09', '10', '11', '12']

const tooltips = [
  {
    color: 'gray',
    text: '其他'
  },
  {
    color: 'green',
    text: '已还'
  },
  {
    color: 'orange',
    text: '待还'
  }
]

const getList = () => {
  const currentDate = new Date()
  const startYear = new Date(props.startDate).getFullYear()
  const endYear = new Date(props.endDate).getFullYear()
  const startMonth = new Date(props.startDate).getMonth() + 1
  const endMonth = new Date(props.endDate).getMonth() + 1
  const startDay = new Date(props.startDate).getDate()
  const endDay = new Date(props.endDate).getDate()
  const count = (endYear - startYear) + 1
  console.log(startYear, endYear, count)
  const arr: Option[] = []
  for (let i = 0; i < count; i++) {
    const year = startYear + i
    console.log({ year })
    const topOption = topMonths.map(item => {
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
        (new Date(`${year}-${itemMonth + 1}-${currentDate.getDate()}`) < currentDate)) {
        isUnFinished = true
        isUnRelated = true
      }
      return {
        month: item,
        isUnRelated: isUnRelated,
        isUnFinished: isUnFinished
      }
    })
    const bottomOption = bottomMonths.map(item => {
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
        (new Date(`${year}-${itemMonth + 1}-${currentDate.getDate()}`) < currentDate)) {
        isUnFinished = true
        isUnRelated = true
      }
      return {
        month: item,
        isUnRelated: isUnRelated,
        isUnFinished: isUnFinished
      }
    })
    const obj = {
      year: year,
      topOption: topOption,
      bottomOption: bottomOption
    }
    arr.push(obj)
  }
  console.log({ arr })
  return arr
}
list.value = getList()
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
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
    border-bottom: 1px solid #fff;
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