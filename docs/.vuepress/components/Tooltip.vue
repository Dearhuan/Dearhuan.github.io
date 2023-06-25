<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { rafTimeout, cancelRaf } from '../public/config'
interface Props {
  maxWidth?: number
  content?: string
  title?: string
  fontSize?: number
  color?: string
  backgroundColor?: string
}
withDefaults(defineProps<Props>(), {
  maxWidth: 120,
  content: '暂无内容',
  title: '暂无内容',
  fontSize: 14,
  color: '#fff',
  backgroundColor: 'rgba(0,0,0,.85)'
})
const visible = ref<Boolean>(false)
const hideTimer = ref()
const top = ref(0)
const left = ref(0)
const contentRef = ref()
const titleRef = ref()
onMounted(() => {
  getPosition()
})
const getPosition = () => {
  const rect = contentRef.value.getBoundingClientRect()
  const targetTop = rect.top
  const targetLeft = rect.left
  const targetWidth = rect.width
  const titleWidth = titleRef.value.offsetWidth
  const titleHeight = titleRef.value.offsetHeight
  top.value = targetTop - titleHeight
  left.value = targetLeft - (titleWidth - targetWidth) / 2
}
const onShow = () => {
  getPosition()
  cancelRaf(hideTimer.value)
  visible.value = true
}
const onHide = () => {
  hideTimer.value = rafTimeout(() => {
    visible.value = false
  }, 100)
}
</script>

<template>
  <div class="m-tooltip" @mouseenter="onShow" @mouseleave="onHide">
    <div ref="titleRef" class="m-title" :class="{ 'show-tip': visible }" @mouseenter="onShow" @mouseleave="onHide"
      :style="`max-width: ${maxWidth}px; top: ${top}px; left: ${left}px;`">
      <div class="u-title" :style="`font-size: ${fontSize}px; color: ${color}; background-color: ${backgroundColor};`">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="m-arrow">
        <span class="u-arrow" :style="`background-color: ${backgroundColor};`"></span>
      </div>
    </div>
    <div ref="contentRef" class="u-content">
      <slot>{{ content }}</slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.m-tooltip {
  display: inline-block;

  .m-title {
    position: fixed;
    z-index: 999;
    padding-bottom: 16px;
    pointer-events: none;
    opacity: 0;
    transform-origin: 50% 75%;
    transform: scale(0.8); // 缩放变换
    -ms-transform: scale(0.8);
    /* IE 9 */
    -webkit-transform: scale(0.8);
    /* Safari and Chrome */
    transition: transform .25s, opacity .25s;

    .u-title {
      padding: 10px;
      margin: 0 auto;
      text-align: start;
      word-break: break-all;
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 24px 6px rgba(0, 0, 0, 0.05);
      border-radius: 6px;
      font-weight: 400;
      line-height: 1.5;
    }

    .m-arrow {
      position: absolute;
      z-index: 9;
      bottom: 16px;
      left: 50%;
      transform: translate(-50%, 100%);
      width: 18px;
      height: 10px;
      overflow: hidden;

      .u-arrow {
        position: absolute;
        left: 50%;
        top: 0px;
        transform: translate(-50%, -50%) rotate(45deg);
        margin: 0 auto;
        width: 12px;
        height: 12px;
        border-radius: 0 0 3px 0;
        z-index: 8;
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.05);
      }
    }
  }

  .show-tip {
    pointer-events: auto;
    opacity: 1;
    transform: scale(1); // 缩放变换
    -ms-transform: scale(1);
    /* IE 9 */
    -webkit-transform: scale(1);
    /* Safari and Chrome */
  }

  .u-content {
    cursor: pointer;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, .85);
  }
}</style>