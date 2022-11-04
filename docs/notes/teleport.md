---
prev: /notes/vuepress-markdown.md
next: /notes/echarts-vue3.md
---

# Teleport in Vue3

<Badge type="tip" text="<Teleport>" vertical="middle" /> 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。(将其插槽内容渲染到 DOM 中的另一个位置。)

- Props

```ts:no-line-numbers
interface TeleportProps {
  /**
   * 必填项。指定目标容器。
   * 可以是选择器或实际元素。
   */
  to: string | HTMLElement
  /**
   * 当值为 `true` 时，内容将保留在其原始位置
   * 而不是移动到目标容器中。
   * 可以动态更改。
   */
  disabled?: boolean
}
```

- 示例

指定目标容器：
```vue
<teleport to="#some-id" />
<teleport to=".some-class" />
<teleport to="[data-teleport]" />
```
有条件地禁用：
```vue
<teleport to="#popup" :disabled="displayVideoInline">
  <video src="./my-movie.mp4">
</teleport>
```

### 基本用法

有时我们可能会遇到这样的场景：一个组件模板的一部分在逻辑上从属于该组件，但从整个应用视图的角度来看，它在 DOM 中应该被渲染在整个 Vue 应用外部的其他地方。

这类场景最常见的例子就是全屏的模态框。理想情况下，我们希望触发模态框的按钮和模态框本身是在同一个组件中，因为它们都与组件的开关状态有关。但这意味着该模态框将与按钮一起渲染在应用 DOM 结构里很深的地方。这会导致该模态框的 CSS 布局代码很难写。

```vue
<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <my-button type="primary" @click="open = true">Open Modal</my-button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <my-button @click="open = false">Close</my-button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background: var(--c-bg);
  padding: 20px;
  color: var(--c-text);
}
</style>
```

<Badge type="tip" text="<Teleport>" vertical="middle" /> 接收一个 <Badge type="tip" text="to" vertical="middle" /> prop 来指定传送的目标。<Badge type="tip" text="to" vertical="middle" /> 的值可以是一个 CSS 选择器字符串，也可以是一个 DOM 元素对象。这段代码的作用就是告诉 Vue“把以下模板片段传送到 body 标签下”。

你可以点击下面这个按钮，然后通过浏览器的开发者工具，在 <Badge type="tip" text="<body>" vertical="middle" /> 标签下找到模态框元素：

<My-button type="primary" @click="open = true">Open Modal</My-button>

<Teleport to="body">
  <div v-if="open" ref="modal" class="modal">
    <p>Hello from the modal!</p>
    <My-button @click="open = false">Close</My-button>
  </div>
</Teleport>

<Modal :show="showModal" @close="showModal = false">
  <template #header>
    <h3>Test Header</h3>
  </template>
  <template #body>
    <h3>test body content</h3>
    <p>hello,this is body content area.</p>
  </template>
</Modal>

<script setup>
import { ref, onMounted } from 'vue'
import { onClickOutside } from '@vueuse/core'

const open = ref(false)

const showModal = ref(false)

const modal = ref(null)

onMounted(()=> {
  onClickOutside(modal, ()=> {
    open.value = false
  })
})
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background: var(--c-bg);
  padding: 20px;
  color: var(--c-text);
}
</style>

我们也可以将 <Badge type="tip" text="<Teleport>" vertical="middle" /> 和 <Badge type="tip" text="<Transition>" vertical="middle" /> 结合使用来创建一个带动画的模态框。你可以看看这个示例。

<my-button type="danger" @click="showModal = true">show Modal</my-button>


```vue
<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <my-button type="danger" @click="showModal = true">show Modal</my-button>

  <modal :show="showModal" @close="showModal = false">
    <template #header>
      <h3>Test Header</h3>
    </template>
    <template #body>
      <h3>test body content</h3>
      <p>hello,this is body content area.</p>
    </template>
  </modal>
</template>
```

```vue
// Modal.vue
<script setup>
const props = defineProps({
  show: Boolean
})

const emit = defineEmits({
  close: (evt) => evt
})

const handleClick = (evt) => {
  emit('close', evt)
}
</script>

<template>
  <teleport to="body">
    <transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">default header</slot>
            </div>

            <div class="modal-body">
              <slot name="body">default body</slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                default footer
                <my-button type="primary" class="modal-default-button" @click="handleClick">OK</my-button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: var(--c-bg);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * 对于 transition="modal" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
```