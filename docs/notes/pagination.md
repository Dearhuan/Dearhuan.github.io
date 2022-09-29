---
prev: /notes/myButton.md
next: /notes/lazyload-in-vue.md
---

# 分页器组件

<timeLineCard :timeLineList="timeLineList" />

<pagination @change-page="changePage"
              :pagesize="pageParams.pageSize"
              :total="pageParams.total"
              :page="1" />

<script setup>
import { ref, reactive } from 'vue'

const list = [
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'tip'
  },
   {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'danger'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'details'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'warning'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'danger'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'details'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'tip'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'warning'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'danger'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'details'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'warning'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'danger'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'details'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'warning'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'danger'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'details'
  },
  {
    time: '',
    title: '27日广州新增1例本土无症状感染者',
    content: '文/羊城晚报全媒体记者 林清清通讯员 穗卫健宣记者从广州市卫健委获悉，2022年9月27日0时至24时，广州在纳入集中隔离管控的密接人员排查中发现1例本土无症状感染者。新增境外输入确诊病例5例，境外输...',
    type: 'tip'
  },
]

const timeLineList = ref([])

const pageParams = reactive({
  pageSize: 5,
  page: 1,
  total: list.length
})

const changePage = (page) => {
  pageParams.page = page
  if (page === 1) {
    timeLineList.value = list.slice(0, pageParams.pageSize)
  } else {
    timeLineList.value = list.slice(pageParams.pageSize * (page - 1), pageParams.pageSize * page)
  }
}

changePage(1)

</script>

## 组件定义

```vue
<template>
  <div class="pagination">
    <a @click="changePage(false)"
       href="javascript:;"
       :class="{disabled: currentPage === 1}">上一页</a>
    <span v-if="currentPage > 3">...</span>
    <a @click="changePage(item)"
       href="javascript:;"
       :class="{active: currentPage === item}"
       v-for="item in list"
       :key="item">{{ item }}</a>
    <span v-if="currentPage < pages - 2">...</span>
    <a @click="changePage(true)"
       href="javascript:;"
       :class="{disabled: currentPage === pages}">下一页</a>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    default: 10
  },
  pagesize: {
    type: Number,
    default: 10
  },
  page: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits()

const pages = computed(() => {
  return Math.ceil(props.total / props.pagesize)
})

const currentPage = ref(props.page || 1)

const list = computed(() => {
  const result = []
  if (pages.value <= 5) {
    for (let i = 1; i <= pages.value; i++) {
      result.push(i)
    }
  } else {
    if (currentPage.value <= 2) {
      for (let i = 1; i <= 5; i++) {
        result.push(i)
      }
    } else if (currentPage.value >= pages.value - 1) {
      for (let i = pages.value - 4; i <= pages.value; i++) {
        result.push(i)
      }
    } else {
      for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
        result.push(i)
      }
    }
  }
  return result
})

const changePage = (type) => {
  if (type === false) {
    if (currentPage.value === 1) return
    if (currentPage.value > 1) {
      currentPage.value -= 1
    }
  } else if (type === true) {
    if (currentPage.value === pages.value) return
    if (currentPage.value < pages.value) {
      currentPage.value += 1
    }
  } else {
    currentPage.value = type
  }
  emit('change-page', currentPage.value)
}

</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  > a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
    &:hover {
      color: aquamarine;
    }
    &.active {
      background: aquamarine;
      color: #fff;
      border-color: aquamarine;
    }
    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;
      &:hover {
        color: #333;
      }
    }
  }
  > span {
    margin-right: 10px;
  }
}
</style>
```