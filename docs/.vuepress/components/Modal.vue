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