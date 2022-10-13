<template>
  <div class="entries-box" :style="{ minHeight: minHeight }">
    <div class="entries">
      <div class="entry" v-for="(item, index) in timeLineList" :key="index">
        <div :class="['title', item.size ? item.size : '']">{{ item.title }}</div>
        <div class="body" v-if="Array.isArray(item.content) == true">
          <p v-for="(text, i) in item.content" :key="i">{{ text }}</p>
        </div>
        <div class="body" v-else-if="typeof item.content == 'string'">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, PropType } from 'vue'
import { useDebounce } from '../hooks'

interface TimeLineItem {
  title: string // 标题
  size: 'big' | 'middle' | '' // 尺寸
  content: string | Array<string> // 内容
}

const props = defineProps({
  timeLineList: {
    type: Array as PropType<TimeLineItem[]>,
    required: true
  }
})

const minHeight = ref('')

const computeBoxHeight = () => {
  const eles = document.querySelectorAll('.entry')
  const eleNums = eles.length
  const lastOffsetTop = eles[eleNums - 1].offsetTop
  const lastClientHeight = eles[eleNums - 1].clientHeight
  minHeight.value = `${lastOffsetTop + lastClientHeight}px`
}

onMounted(() => {
  computeBoxHeight()

  window.addEventListener('resize', useDebounce(computeBoxHeight, 500, true))
})

</script>

<style lang="scss" scoped>
.entries-box {
  background-color: var(--c-bg);
  margin: 0;
  position: relative;
  font-family: 'Droid Sans', sans-serif;

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
    width: 4px;
    background-color: var(--c-text);
  }

  .entries {
    width: calc(100% - 80px);
    max-width: 800px;
    margin: auto;
    position: relative;
    left: -5px;

    .entry {
      width: calc(50% - 80px);
      float: left;
      padding: 20px;
      clear: both;
      text-align: right;

      &:not(:first-child) {
        margin-top: -60px;
      }

      .title {
        font-size: 32px;
        margin-bottom: 12px;
        position: relative;
        color: var(--c-text);

        &:before {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border: 4px solid var(--c-text);
          background-color: var(--c-bg);
          border-radius: 100%;
          top: 50%;
          transform: translateY(-50%);
          right: -73px;
          z-index: 10;
        }

        &.big:before {
          width: 24px;
          height: 24px;
          transform: translate(8px, -50%);
        }
        &.middle:before {
          width: 16px;
          height: 16px;
          transform: translate(4px, -50%);
        }
      }

      .body {
        color: #aaa;

        p {
          line-height: 1.4em;
        }
      }

      &:nth-child(2n) {
        text-align: left;
        float: right;

        .title {
          &:before {
            left: -63px;
          }

          &.big:before {
            transform: translate(-8px, -50%);
          }
        }
      }
    }
  }
}
</style>