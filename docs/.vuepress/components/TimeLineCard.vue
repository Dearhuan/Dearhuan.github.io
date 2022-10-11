<template>
  <transition-group name="list">
    <div v-for="(item, i) in timeLineList" :key="i">
      <h3 v-if="item.time">
        <a :href="`#_${item.time}`" class="header-anchor" aria-hidden="true">#</a>
        {{ item.time }}
      </h3>
      <div v-if="item.type != 'details'"
        :class="`${item.type ? `custom-container ${item.type}` : 'custom-container tip'}`">
        <p class="custom-container-title">{{ item.title }}</p>
        <p>{{ item.content }}</p>
      </div>
      <details v-else class="custom-container details">
        <summary v-if="item.title">{{ item.title }}</summary>
        <p>{{ item.content }}</p>
      </details>
    </div>
  </transition-group>
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

<style lang="scss">
.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active {
  transition: all 0.8s ease-in;
}
.list-leave-active {
  transition: all 0.3s ease-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>