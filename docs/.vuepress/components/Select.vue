<script setup lang="ts">
import { ref, watchEffect } from 'vue'
interface Option {
  label?: string // 选项值
  value?: string|number // 选项名
  disabled?: boolean // 是否禁用选项
  [propName: string]: any // 添加一个字符串索引签名，用于包含带有任意数量的其他属性
}
interface Props {
  options?: Option[] // 选项数据
  label?: string // 字典项的文本字段名
  value?: string // 字典项的值字段名
  placeholder?: string // 默认文本
  disabled?: boolean // 是否禁用
  allowClear?: boolean // 是否支持清除
  width?: number // 宽度
  height?: number // 高度
  maxDisplay?: number // 下拉面板最多能展示的下拉项数，超过后滚动显示
  modelValue?: number|string|null // （v-model）当前选中的option条目
}
const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  label: 'label',
  value: 'value',
  placeholder: '请选择',
  disabled: false,
  allowClear: false,
  width: 120,
  height: 32,
  maxDisplay: 6,
  modelValue: null
})
const selectedName = ref()
const hoverValue = ref() // 鼠标悬浮项的value值
const showOptions = ref(false) // options面板
const activeBlur = ref(true) // 是否激活blur事件
const showClose = ref(false) // 清除按钮显隐
const select = ref()
watchEffect(() =>{ // 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖
  initSelector()
})
function initSelector () {
  if (props.modelValue) {
    const target = props.options.find(option => option[props.value] === props.modelValue)
    if (target) {
      selectedName.value = target[props.label]
      hoverValue.value = target[props.value]
    } else {
      selectedName.value = props.modelValue
      hoverValue.value = null
    }
  } else {
    selectedName.value = null
    hoverValue.value = null
  }
}
function onBlur () {
  if (showOptions.value) {
    showOptions.value = false
  }
}
function onInputEnter () {
  // console.log('input enter')
  if (props.allowClear && selectedName.value) {
    showClose.value = true
  }
}
function onInputLeave () {
  // console.log('input leave')
  if (props.allowClear && showClose.value) {
    showClose.value = false
  }
}
function onHover (value: string|number) {
  hoverValue.value = value
}
function onEnter () {
  activeBlur.value = false
}
function onLeave () {
  hoverValue.value = null
  activeBlur.value = true
  select.value.focus()
}
function openSelect () {
  showOptions.value = !showOptions.value
  if (!hoverValue.value && selectedName.value) {
    const target = props.options.find(option => option[props.label] === selectedName.value)
    hoverValue.value = target ? target[props.value] : null
  }
}
const emits = defineEmits(['update:modelValue', 'change'])
function onClear () {
  showClose.value = false
  selectedName.value = null
  hoverValue.value = null
  emits('update:modelValue')
  emits('change')
}
function onChange (value: string|number, label: string, index: number) { // 选中下拉项后的回调
  if (props.modelValue !== value) {
    selectedName.value = label
    hoverValue.value = value
    emits('update:modelValue', value)
    emits('change', value, label, index)
  }
  showOptions.value = false
}
</script>
<template>
  <div class="m-select" :style="`height: ${height}px;`">
    <div
      :class="['m-select-wrap', {'hover': !disabled, 'focus': showOptions, 'disabled': disabled}]"
      :style="`width: ${width}px; height: ${height}px;`"
      tabindex="0"
      ref="select"
      @mouseenter="onInputEnter"
      @mouseleave="onInputLeave"
      @blur="activeBlur && !disabled ? onBlur() : () => false"
      @click="disabled ? () => false : openSelect()">
      <div
        :class="['u-select-input', {'placeholder': !selectedName}]"
        :style="`line-height: ${height - 2}px;`"
        :title="selectedName"
      >{{ selectedName || placeholder }}</div>
      <svg :class="['triangle', {'rotate': showOptions, 'show': !showClose}]" viewBox="64 64 896 896" data-icon="down" aria-hidden="true" focusable="false"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
      <svg @click.stop="onClear" :class="['close', {'show': showClose}]" focusable="false" data-icon="close-circle" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>
    </div>
    <Transition name="fade">
      <div
        v-show="showOptions"
        class="m-options-panel"
        @mouseenter="onEnter"
        @mouseleave="onLeave"
        :style="`top: ${height + 4}px; line-height: ${height - 10}px; max-height: ${ maxDisplay * height + 9 }px; width: ${width}px;`">
        <p
          v-for="(option, index) in options" :key="index"
          :class="['u-option', {'option-selected': option[label]===selectedName, 'option-hover': !option.disabled&&option[value]===hoverValue, 'option-disabled': option.disabled }]"
          :title="option[label]"
          @mouseenter="onHover(option[value])"
          @click="option.disabled ? () => false : onChange(option[value], option[label], index)">
          {{ option[label] }}
        </p>
      </div>
    </Transition>
  </div>
</template>
<style lang="scss" scoped>
.m-select {
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0,0,0,.65);
}
.fade-enter-active, .fade-leave-active {
  transform: scaleY(1);
  transform-origin: 0% 0%;
  opacity: 1;
  transition: all .3s;
}
.fade-enter-from {
  transform: scaleY(0.8);
  transform-origin: 0% 0%;
  opacity: 0;
}
.fade-leave-to {
  transform: scaleY(1);
  opacity: 0;
}
.m-select-wrap {
  position: relative;
  z-index: 8;
  display: inline-block;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #FFF;
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  .u-select-input {
    display: block;
    text-align: left;
    margin-left: 11px;
    margin-right: 27px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .placeholder {
    color: #bfbfbf;
  }
  .triangle {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 11px;
    width: 12px;
    height: 12px;
    fill: rgba(0,0,0,.25);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
  }
  .rotate {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }
  .close {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 11px;
    width: 12px;
    height: 12px;
    fill: rgba(140, 140, 140, 0.6);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      fill: rgba(100, 100, 100,.8);
    }
  }
  .show {
    opacity: 1;
    pointer-events: auto;
  }
}
.hover { // 悬浮时样式
  &:hover {
    border-color: #1677ff;
  }
}
.focus { // 激活时样式
  border-color: #1677ff;
  box-shadow: 0 0 0 2px fade(#1677ff, 20%);
}
.disabled { // 下拉禁用样式
  color: rgba(0,0,0,.25);
  background: #f5f5f5;
  user-select: none;
  cursor: not-allowed;
}
.m-options-panel {
  position: absolute;
  z-index: 9;
  overflow: auto;
  background: #FFF;
  padding: 4px 0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,15%);
  .u-option { // 下拉项默认样式
    text-align: left;
    position: relative;
    display: block;
    padding: 5px 12px;
    font-weight: 400;
    line-height: inherit;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    transition: background .3s ease;
  }
  .option-selected { // 被选中的下拉项样式
    font-weight: 600;
    background: #fafafa;
  }
  .option-hover { // 悬浮时的下拉项样式
    background: rgba(22,119,255,.12);
  }
  .option-disabled { // 禁用某个下拉选项时的样式
    color: rgba(0,0,0,.25);
    user-select: none;
    cursor: not-allowed;
  }
}
</style>
