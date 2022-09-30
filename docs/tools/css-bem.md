---
prev: /tools/sentry.md
next: /tools/some-website.md
---

# ElementPlus风格BEM规范

## 什么是BEM

BEM是一种针对css的前端命名规范，是块(Block)，元素（Element），修饰符（Modifier）的简写。

Block可以理解为模块，比如：article，dialog，sidebar，form，tab

Element可以理解为块里的元素，比如form里面的input，submit

modifier可以理解为对block或者element的修饰，比如修饰form__submit--disable，form--theme-dark

## BEM命名规范

```css
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```

::: tip
使用__连接block和element，使用--连接block和modifier
:::

## useNamespace定义

```ts
import { unref, computed } from 'vue'

// 组件的命名前缀
const defaultNamespace = 'el'
// 描述组件状态的变量
const statePrefix = 'is-'

// 返回符合BEM规范的命名
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

// 定义命名空间，返回BEM方法
export const useNamespace = (block: string) => {
  const namespace = computed(() => defaultNamespace)
  const b = (blockSuffix = '') =>
    _bem(unref(namespace), block, blockSuffix, '', '')
  const e = (element?: string) =>
    element ? _bem(unref(namespace), block, '', element, '') : ''
  const m = (modifier?: string) =>
    modifier ? _bem(unref(namespace), block, '', '', modifier) : ''
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(unref(namespace), block, blockSuffix, element, '')
      : ''
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? _bem(unref(namespace), block, '', element, modifier)
      : ''
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(unref(namespace), block, blockSuffix, '', modifier)
      : ''
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(unref(namespace), block, blockSuffix, element, modifier)
      : ''
  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true
    return name && state ? `${statePrefix}${name}` : ''
  }
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
  }
}

export type useNamespaceReturn = ReturnType<typeof useNamespace>
```

## useNamespace使用

```ts
import { useNamespace } from './hooks/useNamespace'

const ns = useNamespace('dialog')

ns.b() // el-dialog
ns.b('overlay') // el-dialog-overlay
ns.e('header') // el-dialog__header
ns.m('theme-dark') // el-dialog--theme-dark
ns.be('header','close') // el-dialog-header__close
ns.em('footer','small') // el-dialog__footer--small
ns.bm('footer','small') // el-dialog-footer--small
ns.bem('footer','btn','primary') // el-dialog-footer__btn--primary
ns.is('closeable') // is-closeable
```

### 改造前

```vue
<template>
    <div class="dialog-overlay" v-if="visible">
        <section class="dialog">
            <header class="dialog__header">
                <div class="dialog__title">{{ title }}</div>
                <span class="dialog-header__close" @click="visible=false">X</span>
            </header>
            <div class="dialog__body">
                {{ message ?? 'BEM是一种针对css的前端命名规范，是块(Block)，元素（Element），修饰符（Modifier）的简写。' }}
            </div>
            <footer class="dialog__footer">
                <button class="dialog__btn">{{ cancelBtnTxt }}</button>
                <button class="dialog__btn dialog__btn--primary">{{ comfirmBtnTxt }}</button>
            </footer>
        </section>
    </div>
</template>
```

### 改造后

```vue
<template>
  <div :class="ns.b('overlay')" v-if="visible">
      <section :class="ns.b()">
          <header :class="ns.e('header')">
              <div :class="ns.e('title')">{{ title }}</div>
              <span :class="ns.be('header','close')" @click="visible=false">X</span>
            </header>
          <div :class="ns.e('body')">
                {{ message ?? 'BEM是一种针对css的前端命名规范，是块(Block)，元素（Element），修饰符（Modifier）的简写。' }}
          </div>
          <footer :class="ns.e('footer')">
              <button :class="ns.e('btn')">{{ cancelBtnTxt }}</button>
              <button :class="[ns.e('btn'), ns.em('btn','primary')]">{{ comfirmBtnTxt }}</button>
          </footer>
      </section>
  </div>
</template>

<script setup>
import { useNamespace } from './hooks/useNamespace'

const ns = useNamespace('dialog')
</script>
```