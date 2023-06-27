<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
interface Option {
  label?: string
  value?: string | number
  disabled?: boolean
  children?: Option[]
  [propName: string]: any
}
interface Props {
  options?: Option[]
  selectedValue?: (number | string)[]
  label?: string
  value?: string
  children?: string
  changeOnSelect?: boolean
  zIndex?: number
  gap?: number
  width?: number | number[]
  height?: number
  disabled?: boolean | boolean[]
  allowClear?: boolean
  placeholder?: string | string[]
  maxDisplay?: number
}
const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  selectedValue: () => [],
  label: 'label',
  value: 'value',
  children: 'children',
  changeOnSelect: false,
  zIndex: 1,
  gap: 8,
  width: 120,
  height: 32,
  disabled: false,
  allowClear: false,
  placeholder: '请选择',
  maxDisplay: 6
})
const values = ref<(string | number)[]>([])
const labels = ref<string[]>([])
const firstOptions = ref<Option[]>([])
const secondOptions = ref<Option[]>([])
const thirdOptions = ref<Option[]>([])
watchEffect(() => {
  firstOptions.value = [...props.options]
})
watchEffect(() => {
  values.value = [...props.selectedValue]
})
watchEffect(() => {
  initCascader(values.value)
  initLabels(values.value)
})
function findChildren (options: Option[], index: number): Option[] {
  const len = options.length
  for (let i = 0; i < len; i++) {
    if (options[i][props.value] === values.value[index]) {
      return options[i][props.children] || []
    }
  }
  return []
}
function initCascader (values: (string | number)[]) {
  secondOptions.value = findChildren(firstOptions.value, 0)
  thirdOptions.value = []
  if (values.length > 1) {
    thirdOptions.value = findChildren(secondOptions.value, 1)
  }
}
function findLabel (options: Option[], index: number): any {
  const len = options.length
  for (let i = 0; i < len; i++) {
    if (options[i][props.value] === values.value[index]) {
      return options[i][props.label]
    }
  }
  return values.value[index]
}
function initLabels (values: (string | number)[]) {
  labels.value[0] = findLabel(firstOptions.value, 0)
  if (values.length > 1) {
    labels.value[1] = findLabel(secondOptions.value, 1)
  }
  if (values.length > 2) {
    labels.value[2] = findLabel(thirdOptions.value, 2)
  }
}
const emits = defineEmits(['update:selectedValue', 'change'])
function onFirstChange (value: string | number, label: string) {
  if (props.changeOnSelect) {
    emits('update:selectedValue', [value])
    emits('change', [value], [label])
  } else {
    values.value = [value]
    labels.value = [label]
  }
}
function onSecondChange (value: string | number, label: string) {
  if (props.changeOnSelect) {
    emits('update:selectedValue', [values.value[0] ,value])
    emits('change', [values.value[0], value], [labels.value[0], label])
  } else {
    values.value = [values.value[0],value]
    labels.value = [labels.value[0],label]
  } 
}
function onThirdChange (value: string | number, label: string) {
  emits('update:selectedValue', [...values.value.slice(0, 2) ,value])
  emits('change', [...values.value.slice(0, 2), value], [...labels.value.slice(0, 2), label])
}
</script>
<template>
  <div class="m-cascader-wrap" :style="`height: ${height}px;`">
    <Select 
      :style="`margin-right: ${gap}px; z-index: ${zIndex};`"
      :options="firstOptions"
      v-model="values[0]"
      :label="label"
      :value="value"
      :disabled="Array.isArray(disabled) ? disabled[0] : disabled"
      :allowClear="allowClear"
      :width="Array.isArray(width) ? width[0] : width"
      :height="height"
      :maxDisplay="maxDisplay"
      :placeholder="Array.isArray(placeholder) ? placeholder[0] : placeholder"
      @change="onFirstChange"
    />
    <Select 
      :style="`margin-right: ${gap}px; z-index: ${zIndex};`"
      :options="secondOptions"
      v-model="values[1]"
      :label="label"
      :value="value"
      :disabled="Array.isArray(disabled) ? disabled[1] : disabled"
      :allowClear="allowClear"
      :width="Array.isArray(width) ? width[1] : width"
      :height="height"
      :maxDisplay="maxDisplay"
      :placeholder="Array.isArray(placeholder) ? placeholder[1] : placeholder"
      @change="onSecondChange"
    />
    <Select 
      :style="`margin-right: ${gap}px; z-index: ${zIndex};`"
      :options="thirdOptions"
      v-model="values[2]"
      :label="label"
      :value="value"
      :disabled="Array.isArray(disabled) ? disabled[2] : disabled"
      :allowClear="allowClear"
      :width="Array.isArray(width) ? width[2] : width"
      :height="height"
      :maxDisplay="maxDisplay"
      :placeholder="Array.isArray(placeholder) ? placeholder[2] : placeholder"
      @change="onThirdChange"
    />
  </div>
</template>
<style lang="scss" scoped>
.m-cascader-wrap {
  display: inline-block;
}
</style>