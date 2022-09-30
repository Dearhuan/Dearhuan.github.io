---
prev: /notes/pagination.md
next: /notes/lazyload-in-vue.md
---

# 表格

<Table :tableHeaders="headers" :tableData="list" :contentH="contentH" :noSideBorder="noSideBorder" />

<script setup>
import { ref } from 'vue'

const contentH = ref(500)

const noSideBorder = ref(true)

const headers = ref([])

const list = ref([])

headers.value = [
  {
    prop: 'name',
    label: '姓名',
    width: 100
  },
  {
    prop: 'age',
    label: '年龄',
    width: 100
  },
  {
    prop: 'sex',
    label: '性别',
    width: 100
  },
  {
    prop: 'birth',
    label: '出生日期',
    width: 150
  },
]

list.value = [
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  },
  {
    name: 'xxx',
    age: 18,
    sex: 'xxx',
    birth: '999'
  }
]
</script>