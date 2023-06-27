<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { rafTimeout } from '../public/config'
interface Collapse {
  key?: string | number
  header?: string
  text?: string
}
interface Props {
  collapseData: Collapse[]
  activeKey?: number[] | number | string[] | string | null
  copyable?: boolean
  lang?: string
  fontSize?: number
  headerFontSize?: number
  textFontSize?: number
  showArrow?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  collapseData: () => [],
  activeKey: null,
  copyable: false,
  lang: '',
  fontSize: 14,
  headerFontSize: 0,
  textFontSize: 0,
  showArrow: true
})
watchEffect(() => {
  getCollapseHeight(props.collapseData.length)
}, {
  flush: 'post'
})
const text = ref()
const collapseHeight = ref<any[]>([])
const getCollapseHeight = (len: number) => {
  for (let i = 0; i < len; i++) {
    collapseHeight.value.push(text.value[i].offsetHeight)
  }
}
const emits = defineEmits(['update:activeKey', 'change'])
const dealEmit = (value: any) => {
  emits('update:activeKey', value)
  emits('change', value)
}
const onClick = (key: number | string) => {
  if (activeJudge(key)) {
    if (Array.isArray(props.activeKey)) {
      const res = (props.activeKey as any[]).filter(actKey => actKey !== key)
      dealEmit(res)
    } else {
      dealEmit(null)
    }
  } else {
    if (Array.isArray(props.activeKey)) {
      dealEmit([...props.activeKey, key])
    } else {
      dealEmit(key)
    }
  }
}
const activeJudge = (key: number | string): boolean => {
  if (Array.isArray(props.activeKey)) {
    return (props.activeKey as any[]).includes(key)
  } else {
    return props.activeKey === key
  }
}
const copyTxt = ref('Copy')
const onCopy = (index: number) => {
  navigator.clipboard.writeText(text.value[index].innerText || '')
  .then(() => {
    copyTxt.value = 'Copied'
    rafTimeout(() => {
      copyTxt.value = 'Copy'
    }, 3000)
  }, (err) => {
    copyTxt.value = err
  })
}
</script>

<template>
  <div class="m-collapse">
    <div
      class="m-collapse-item"
      :class="{'u-collapse-item-active': activeJudge(data.key || index)}"
      v-for="(data, index) in collapseData" :key="index">
      <div class="u-collapse-header" @click="onClick(data.key || index)">
        <svg focusable="false" v-if="showArrow" class="u-arrow" data-icon="right" aria-hidden="true" viewBox="64 64 896 896"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
        <div class="u-header" :class="{ml24: showArrow}" :style="`font-size: ${headerFontSize || fontSize }px;`">
          <slot name="header" :header="data.header" :key="data.key || index">{{ data.header || '--' }}</slot>
        </div>
      </div>
      <div class="u-collapse-content" :class="{'u-collapse-copyable': copyable}" :style="`height: ${activeJudge(data.key || index) ? collapseHeight[index]:0}px;`">
        <div class="u-lang">
          <slot name="lang" :lang="lang" :key="data.key || index">{{ lang }}</slot>
        </div>
        <my-button size="small" class="u-copy" type="primary" @click="onCopy(index)">{{ copyTxt }}</my-button>
        <div ref="text" class="u-text" :style="`font-size: ${textFontSize || fontSize}px;`">
          <slot name="text" :text="data.text" :key="data.key || index">{{ data.text }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.m-collapse {
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid #d9d9d9;
  border-bottom: 0;
  border-radius: 8px;
  .m-collapse-item {
    border-bottom: 1px solid #d9d9d9;
    &:last-child {
      border-radius: 0 0 8px 8px;
      .u-collapse-content {
        border-radius: 0 0 8px 8px;
      }
    }
    .u-collapse-header {
      position: relative;
      padding: 12px 16px;
      cursor: pointer;
      transition: all 0.3s;
      .u-arrow {
        position: absolute;
        width: 12px;
        height: 12px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        fill: rgba(0,0,0,.88);
        transition: transform 0.3s;
      }
      .u-header {
        display: inline-block;
        color: rgba(0, 0, 0, 0.88);
        line-height: 1.5714285714285714;
      }
      .ml24 {
        margin-left: 24px;
      }
    }
    .u-collapse-content {
      position: relative;
      height: 0;
      overflow: hidden;
      background-color: #fff;
      transition: height .3s;
      .u-lang {
        position: absolute;
        right: 10px;
        top: 6px;
        font-size: 14px;
        color: rgba(0, 0, 0, .38);
        opacity: 1;
        transition: opacity .3s;
      }
      .u-copy {
        position: absolute;
        right: 8px;
        top: 8px;
        opacity: 0;
        pointer-events: none;
        transition: opacity .3s;
      }
      .u-text {
        padding: 16px;
        color: rgba(0, 0, 0, 0.88);
        white-space: pre-wrap;
      }
    }
    .u-collapse-copyable {
      &:hover {
        .u-lang {
          opacity: 0;
          pointer-events: none;
        }
        .u-copy {
          opacity: 1;
          pointer-events: auto;
        }
      }
    }
  }
  .u-collapse-item-active {
    .u-arrow {
      transform: rotate(90deg);
    }
    .u-collapse-content {
      border-top: 1px solid #d9d9d9;
    }
  }
}
</style>