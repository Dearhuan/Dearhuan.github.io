<template>
  <div>
    <my-button type="primary" @click="showModalBtn = true">导出PDF</my-button>
    <Modal :show="showModalBtn" @close="showModalBtn = false">
      <template #header>
        <h3>导出PDF</h3>
      </template>
      <template #body>
        <div style="display: flex; flex-wrap: wrap;">
          导出标题：<input type="text" v-model="pdfTitle" />
          容器元素：<input type="text" v-model="container" />
        </div>
      </template>
      <template #footer>
        <div style="display: flex; justify-content: flex-end;">
          <my-button type="primary" @click="handleExport">确认</my-button>
          <my-button type="error" @click="handleCancel">关闭</my-button>
        </div>
      </template>
    </Modal>
    <Message ref="message" :duration="3000" :top="30" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { htmlPdf } from '../hooks'

const message = ref()

const showMessage = (content) => {
  message.value.warn(content)
}

const { getPdf } = htmlPdf()

const showModalBtn = ref(false)
const pdfTitle = ref('标题')
const container = ref('#app')

const handleCancel = () => {
  showModalBtn.value = false
}

const handleExport = () => {
  if (!document.querySelector(container.value)) {
    showMessage('请输入正确的DOM元素！')
    return
  }
  getPdf(pdfTitle.value, document.querySelector(container.value))
  showModalBtn.value = false
};

//获取随机数
function getRandNum(min, max) {
return parseInt(Math.random() * (max - min + 1) + min);
};
</script>