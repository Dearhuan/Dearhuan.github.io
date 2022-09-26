<template>
  <div class="g-card-link">
    <div class="g-card-item"
         v-for="(item, k) in value"
         :key="k">
      <a :href="item.link"
         rel="external nofollow"
         target="_blank"
         :title="item.title">{{ item.title }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType } from 'vue'

interface CardItem {
  title: string
  link: string
}

const props = defineProps({
  defaultValue: {
    type: Array as PropType<CardItem[]>,
    require: true
  }
})

const value = ref(props.defaultValue)
</script>

<style lang="scss" scoped>
button {
  background: #4e6ef2;
}
.g-card-link {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;
  line-height: 38px;
  .g-card-item {
    background: blue;
    width: 113px;
    max-width: 138px;
    height: 38px;
    cursor: pointer;
    overflow: hidden;
  }
  .g-card-item:nth-of-type(2n) {
    background: rgba(44, 104, 255, 0.1);
  }
  .g-card-item:nth-of-type(2n + 1) {
    background: rgba(56, 203, 137, 0.1);
  }
}
</style>