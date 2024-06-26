---
prev: /notes/modal.md
next: /notes/notification.md
---
# 全局提示 Message

<br/>

*全局展示操作反馈信息*

## 何时使用

- 可提供成功、警告和错误等反馈信息
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式

<script setup lang="ts">
import { ref } from 'vue'
const message = ref()

function onInfo (content: any) {
  message.value.info(content) // info调用
}
function onSuccess (content: any) {
  message.value.success(content) // success调用
}
function onError (content: any) {
  message.value.error(content) // error调用
}
function onWarn (content: any) {
  message.value.warn(content) // warn调用
}
function onClose () {
  console.log('close')
}
</script>

<Message ref="message" :duration="3000" :top="30" @close="onClose" />

## 基本使用

<my-button class="m-t-20" type="primary" @click="onInfo('This is a normal message')">Info</my-button>

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
const message = ref()

function onInfo (content: any) {
  message.value.info(content) // info调用
}
function onClose () {
  console.log('close')
}
</script>
<template>
  <my-button type="primary" @click="onInfo('This is a normal message')">Info</my-button>
  <Message ref="message" :duration="3000" :top="30" @close="onClose" />
</template>
```

:::

## 成功提示

<my-button class="m-t-20" type="primary" @click="onSuccess('This is a success message')">Success</my-button>

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
const message = ref()

function onSuccess (content: any) {
  message.value.success(content) // success调用
}
function onClose () {
  console.log('close')
}
</script>
<template>
  <my-button type="primary" @click="onSuccess('This is a success message')">Success</my-button>
  <Message ref="message" :duration="3000" :top="30" @close="onClose" />
</template>
```

:::

## 失败提示

<my-button class="m-t-20" type="primary" @click="onError('This is a error message')">Error</my-button>

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
const message = ref()

function onError (content: any) {
  message.value.error(content) // error调用
}
function onClose () {
  console.log('close')
}
</script>
<template>
  <my-button type="primary" @click="onError('This is a error message')">Error</my-button>
  <Message ref="message" :duration="3000" :top="30" @close="onClose" />
</template>
```

:::

## 警告提示

<my-button class="m-t-20" type="primary" @click="onWarn('This is a warn message')">Warn</my-button>

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
const message = ref()

function onWarn (content: any) {
  message.value.warn(content) // warn调用
}
function onClose () {
  console.log('close')
}
</script>
<template>
  <my-button type="primary" @click="onWarn('This is a warn message')">Warn</my-button>
  <Message ref="message" :duration="3000" :top="30" @close="onClose" />
</template>
```

:::

## APIs

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
duration | 自动关闭的延时，单位ms | number | 3000 | false
top | 消息距离顶部的位置，单位px | number | 30 | false
## Events

事件名称 | 说明 | 参数
-- | -- | --
change | 关闭时触发的回调函数 | () => void

<style lang="scss" scoped>
.m-t-20 {
  margin: 20px 0 0;
}
</style>
