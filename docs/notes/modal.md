---
prev: /notes/myButton.md
next: /notes/pagination.md
---

# 消息弹窗-Modal

<my-button type="primary" @click="showDefaultModal = true">默认弹窗</my-button>
<my-button type="success" @click="showModalTitle = true">自定义标题</my-button>
<my-button type="warning" @click="showModalBody = true">自定义内容</my-button>
<my-button type="danger" @click="showModalNoBtn = true">无按钮弹窗</my-button>
<my-button type="info" @click="showModalBtn = true">自定义按钮弹窗</my-button>
<my-button type="primary" @click="showModal = true">自定义弹窗</my-button>

<Modal :show="showDefaultModal" @close="showDefaultModal = false" />

<Modal :show="showModalTitle" @close="showModalTitle = false">
  <template #header>
    <h3>自定义标题</h3>
  </template>
</Modal>

<Modal :show="showModalBody" @close="showModalBody = false">
  <template #body>
    <h3>内容区域设置</h3>
    <p>内容区域设置</p>
  </template>
</Modal>

<Modal :show="showModalNoBtn" @close="showModalNoBtn = false">
  <template #footer>
    <template></template>
  </template>
</Modal>

<Modal :show="showModalBtn" @close="showModalBtn = false">
  <template #footer>
    <div style="display: flex; justify-content: flex-end;">
      <my-button type="primary" @click="handleConfirmA">确认</my-button>
      <my-button type="danger" @click="handleCancelA">取消</my-button>
    </div>
  </template>
</Modal>

<Modal :show="showModal" @close="showModal = false">
  <template #header>
    <h2>标题</h2>
  </template>
  <template #body>
    <h3>内容区域标题</h3>
    <p>内容区域设置</p>
  </template>
  <template #footer>
    <div style="display: flex; justify-content: flex-end;">
      <my-button type="primary" @click="handleConfirm">确认</my-button>
      <my-button type="danger" @click="handleCancel">取消</my-button>
    </div>
  </template>
</Modal>

<script setup>
import { ref } from 'vue'

const showDefaultModal = ref(false)
const showModalTitle = ref(false)
const showModalBody = ref(false)
const showModalNoBtn = ref(false)
const showModalBtn = ref(false)
const showModal = ref(false)

const handleConfirmA = () => {
  console.log('confirmed')
  showModalBtn.value = false
}

const handleCancelA = () => {
  console.log('canceled')
  showModalBtn.value = false
}

const handleConfirm = () => {
  console.log('confirmed')
  showModal.value = false
}

const handleCancel = () => {
  console.log('canceled')
  showModal.value = false
}

</script>

### 组件说明
消息弹窗对外show <Badge type="tip" text="props" vertical="top"/>和close方法，支持通过具名插槽对头部标题、内容区域、底部按钮进行自定义操作，并在弹窗显示时对body区域进行了禁止滚动操作。

### 组件使用
```vue
<my-button type="primary" @click="showDefaultModal = true">默认弹窗</my-button>
<my-button type="success" @click="showModalTitle = true">自定义标题</my-button>
<my-button type="warning" @click="showModalBody = true">自定义内容</my-button>
<my-button type="danger" @click="showModalNoBtn = true">无按钮弹窗</my-button>
<my-button type="info" @click="showModalBtn = true">自定义按钮弹窗</my-button>
<my-button type="primary" @click="showModal = true">自定义弹窗</my-button>

<Modal :show="showDefaultModal" @close="showDefaultModal = false" />

<Modal :show="showModalTitle" @close="showModalTitle = false">
  <template #header>
    <h3>自定义标题</h3>
  </template>
</Modal>

<Modal :show="showModalBody" @close="showModalBody = false">
  <template #body>
    <h3>内容区域设置</h3>
    <p>内容区域设置</p>
  </template>
</Modal>

<Modal :show="showModalNoBtn" @close="showModalNoBtn = false">
  <template #footer>
    <template></template>
  </template>
</Modal>

<Modal :show="showModalBtn" @close="showModalBtn = false">
  <template #footer>
    <div style="display: flex; justify-content: flex-end;">
      <my-button type="primary" @click="handleConfirmA">确认</my-button>
      <my-button type="danger" @click="handleCancelA">取消</my-button>
    </div>
  </template>
</Modal>

<Modal :show="showModal" @close="showModal = false">
  <template #header>
    <h2>标题</h2>
  </template>
  <template #body>
    <h3>内容区域标题</h3>
    <p>内容区域设置</p>
  </template>
  <template #footer>
    <div style="display: flex; justify-content: flex-end;">
      <my-button type="primary" @click="handleConfirm">确认</my-button>
      <my-button type="danger" @click="handleCancel">取消</my-button>
    </div>
  </template>
</Modal>

<script setup>
import { ref } from 'vue'

const showDefaultModal = ref(false)
const showModalTitle = ref(false)
const showModalBody = ref(false)
const showModalNoBtn = ref(false)
const showModalBtn = ref(false)
const showModal = ref(false)

const handleConfirmA = () => {
  console.log('confirmed')
  showModalBtn.value = false
}

const handleCancelA = () => {
  console.log('canceled')
  showModalBtn.value = false
}

const handleConfirm = () => {
  console.log('confirmed')
  showModal.value = false
}

const handleCancel = () => {
  console.log('canceled')
  showModal.value = false
}

</script>
```

### 组件定义
```vue
// Modal.vue
<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits({
  close: (evt) => evt
})

const handleClick = (evt) => {
  emit('close', evt)
}

const bodyOverflow = ref('')

watch(
  () => props.show,
  (newVal) => {
    if (!newVal) {
      resetScroll()
    } else {
      forbidScroll()
    }
  }
)

const forbidScroll = () => {
  bodyOverflow.value = document.body.style.overflow
  document.body.style.overflow = 'hidden'
}

const resetScroll = () => {
  document.body.style.overflow = bodyOverflow.value
}
</script>

<template>
  <teleport to="body">
    <transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper" @click.self="handleClick">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">消息提示</slot>
            </div>

            <div class="modal-body">
              <slot name="body">消息内容</slot>
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