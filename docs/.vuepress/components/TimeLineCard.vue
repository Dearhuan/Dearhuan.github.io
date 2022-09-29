<template>
  <div v-for="(item, i) in timeLineList" :key="i">
    <h3 v-if="item.time">
      <a :href="`#_${item.time}`" class="header-anchor" aria-hidden="true">#</a>
      {{ item.time }}
    </h3>
    <div v-if="item.type != 'details'" :class="`${item.type ? `custom-container ${item.type}` : 'custom-container tip'}`">
      <p class="custom-container-title">{{ item.title }}</p>
      <p>{{ item.content }}</p>
    </div>
    <details v-else class="custom-container details">
      <summary v-if="item.title">{{ item.title }}</summary>
      <p>{{ item.content }}</p> 
    </details>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

type ItemType = 'tip' | 'warning' | 'danger' | 'details'

interface TimeLineItem {
  time: string
  title: string
  content: string
  type?: ItemType
}

const props = defineProps({
  timeLineList: {
    type: Array as PropType<TimeLineItem[]>,
    required: true
  }
})

</script>