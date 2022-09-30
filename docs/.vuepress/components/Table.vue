<template>
  <div :class="['my-table', noSideBorder ? 'border-no-side' : 'border-all']">
    <div class="header">
      <div class="header-item align-c"
           v-for="(header, i) in tableHeaders"
           :key="i"
           :style="{width: `${header.width}px`}">{{ header.label }}</div>
    </div>
    <div class="content" :style="{maxHeight: `${contentH}px`}">
      <div class="content-line align-c"
           v-for="(item, j) in tableData"
           :key="j">
        <div class="line-item"
             v-for="(p, k) in tableHeaders"
             :key="k"
             :style="{width: `${p.width}px`}">{{ item[p.prop] }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue'

const props = defineProps({
  tableData: {
    type: Array as PropType<Record<string, unknown>[]>,
    default: () => []
  },
  tableHeaders: {
    type: Array as PropType<Record<string, unknown>[]>,
    default: () => []
  },
  contentH: Number,
  noSideBorder: Boolean
})
</script>

<style lang="scss" scoped>
.align-c {
  text-align: center;
}
.border-all {
  border: 1px solid #ccc;
}
.border-no-side {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.my-table {
  margin: 10px;
  width: max-content;
  .header {
    display: flex;
    font-weight: 600;
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
  }
  .content {
    overflow: scroll;
    .content-line {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
    }
  }
  .content::-webkit-scrollbar {
    width: 6px; 
    height: 1px;
  }
  .content::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #b1b1b192;
  }
  .content::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #ffffff;
  }
}
</style>