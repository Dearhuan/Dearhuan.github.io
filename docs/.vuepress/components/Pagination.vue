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
