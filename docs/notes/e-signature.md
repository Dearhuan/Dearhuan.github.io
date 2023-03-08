---
prev: /notes/i18n-vue3.md
next: /notes/eslint-prettier-husky.md
---
# Canvas电子签名

```vue
<template>
  <div>
    <canvas ref="canvas"></canvas>
    <div>
      <button @click="cancel">取消</button>
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
// 配置内容
const config = {
  width: 500, // 宽度
  height: 300, // 高度
  lineWidth: 5, // 线宽
  strokeStyle: '#000', // 线条颜色
  lineCap: 'round', // 设置线条两端圆角
  lineJoin: 'round', // 线条交汇处圆角
}

// 保存上次绘制的 坐标及偏移量
const client = reactive({
  offsetX: 0, // 偏移量
  offsetY: 0,
  endX: 0, // 坐标
  endY: 0
})

const canvas = ref(null)
const ctx = ref(null)

// 判断是否为移动端
const mobileStatus = ref((/Mobile|Android|iPhone/i.test(navigator.userAgent)))

// 取消-清空画布
const cancel = () => {
  // 清空当前画布上的所有绘制内容
  ctx.value.clearRect(0, 0, config.width, config.height)
}
// 保存-将画布内容保存为图片
const save = () => {
  // 将canvas上的内容转成blob流
  canvas.value.toBlob(blob => {
    // 获取当前时间并转成字符串，用来当做文件名
    const date = Date.now().toString()
    // 创建一个 a 标签
    const a = document.createElement('a')
    // 设置 a 标签的下载文件名
    a.download = `${date}.png`
    // 设置 a 标签的跳转路径为 文件流地址
    a.href = URL.createObjectURL(blob)
    // 手动触发 a 标签的点击事件
    a.click()
    // 移除 a 标签
    a.remove()
  })
}

// 初始化
const init = event => {
  // 获取偏移量及坐标
  const { offsetX, offsetY, pageX, pageY } = mobileStatus.value ? event.changedTouches[0] : event

  // 修改上次的偏移量及坐标
  client.offsetX = offsetX
  client.offsetY = offsetY
  client.endX = pageX
  client.endY = pageY

  // 清除以上一次 beginPath 之后的所有路径，进行绘制
  ctx.value.beginPath()
  // 根据配置文件设置相应配置
  ctx.value.lineWidth = config.lineWidth
  ctx.value.strokeStyle = config.strokeStyle
  ctx.value.lineCap = config.lineCap
  ctx.value.lineJoin = config.lineJoin
  // 设置画线起始点位
  ctx.value.moveTo(client.endX, client.endY)
  // 监听 鼠标移动或手势移动
  window.addEventListener(mobileStatus.value ? "touchmove" : "mousemove", draw)
}
// 绘制
const draw = event => {
  // 获取当前坐标点位
  const { pageX, pageY } = mobileStatus.value ? event.changedTouches[0] : event
  // 修改最后一次绘制的坐标点
  client.endX = pageX
  client.endY = pageY

  // 根据坐标点位移动添加线条
  ctx.value.lineTo(pageX, pageY)

  // 绘制
  ctx.value.stroke()
}
// 结束绘制
const cloaseDraw = () => {
  // 结束绘制
  ctx.value.closePath()
  // 移除鼠标移动或手势移动监听器
  window.removeEventListener("mousemove", draw)
}

onMounted(() => {
  // 设置宽高
  canvas.value.width = config.width
  canvas.value.height = config.height
  // 设置一个边框
  canvas.value.style.border = '1px solid #000'
  // 创建上下文
  ctx.value = canvas.value.getContext('2d')

  // 设置填充背景色
  ctx.value.fillStyle = 'transparent'
  // 绘制填充矩形
  ctx.value.fillRect(
    0, // x 轴起始绘制位置
    0, // y 轴起始绘制位置
    config.width, // 宽度
    config.height // 高度
  );
  // 创建鼠标/手势按下监听器
  window.addEventListener(mobileStatus.value ? "touchstart" : "mousedown", init)
  // 创建鼠标/手势 弹起/离开 监听器
  window.addEventListener(mobileStatus.value ? "touchend" : "mouseup", cloaseDraw)
})
</script>
```

```html
<body>
  <canvas></canvas>
  <div>
    <button onclick="cancel()">取消</button>
    <button onclick="save()">保存</button>
  </div>
</body>
<script>
  // 配置内容
  const config = {
    width: 400, // 宽度
    height: 200, // 高度
    lineWidth: 5, // 线宽
    strokeStyle: '#000', // 线条颜色
    lineCap: 'round', // 设置线条两端圆角
    lineJoin: 'round', // 线条交汇处圆角
  }

  // 获取canvas 实例
  const canvas = document.querySelector('canvas')
  // 设置宽高
  canvas.width = config.width
  canvas.height = config.height
  // 设置一个边框
  canvas.style.border = '1px solid #000'
  // 创建上下文
  const ctx = canvas.getContext('2d')

  // 设置填充背景色
  ctx.fillStyle = 'transparent'
  // 绘制填充矩形
  ctx.fillRect(
    0, // x 轴起始绘制位置
    0, // y 轴起始绘制位置
    config.width, // 宽度
    config.height // 高度
  );

  // 保存上次绘制的 坐标及偏移量
  const client = {
    offsetX: 0, // 偏移量
    offsetY: 0,
    endX: 0, // 坐标
    endY: 0
  }

  // 判断是否为移动端
  const mobileStatus = (/Mobile|Android|iPhone/i.test(navigator.userAgent))

  // 初始化
  const init = event => {
    // 获取偏移量及坐标
    const { offsetX, offsetY, pageX, pageY } = mobileStatus ? event.changedTouches[0] : event

    // 修改上次的偏移量及坐标
    client.offsetX = offsetX
    client.offsetY = offsetY
    client.endX = pageX
    client.endY = pageY

    // 清除以上一次 beginPath 之后的所有路径，进行绘制
    ctx.beginPath()
    // 根据配置文件设置相应配置
    ctx.lineWidth = config.lineWidth
    ctx.strokeStyle = config.strokeStyle
    ctx.lineCap = config.lineCap
    ctx.lineJoin = config.lineJoin
    // 设置画线起始点位
    ctx.moveTo(client.endX, client.endY)
    // 监听 鼠标移动或手势移动
    window.addEventListener(mobileStatus ? "touchmove" : "mousemove", draw)
  }
  // 绘制
  const draw = event => {
    console.log(event)
    // 获取当前坐标点位
    const { pageX, pageY } = mobileStatus ? event.changedTouches[0] : event
    console.log(pageX, pageY)
    // 修改最后一次绘制的坐标点
    client.endX = pageX
    client.endY = pageY

    // 根据坐标点位移动添加线条
    ctx.lineTo(pageX, pageY)

    // 绘制
    ctx.stroke()
  }
  // 结束绘制
  const cloaseDraw = () => {
    // 结束绘制
    ctx.closePath()
    // 移除鼠标移动或手势移动监听器
    window.removeEventListener("mousemove", draw)
  }
  // 创建鼠标/手势按下监听器
  window.addEventListener(mobileStatus ? "touchstart" : "mousedown", init)
  // 创建鼠标/手势 弹起/离开 监听器
  window.addEventListener(mobileStatus ? "touchend" : "mouseup", cloaseDraw)

  // 取消-清空画布
  const cancel = () => {
    // 清空当前画布上的所有绘制内容
    ctx.clearRect(0, 0, config.width, config.height)
  }
  // 保存-将画布内容保存为图片
  const save = () => {
    // 将canvas上的内容转成blob流
    canvas.toBlob(blob => {
      // 获取当前时间并转成字符串，用来当做文件名
      const date = Date.now().toString()
      // 创建一个 a 标签
      const a = document.createElement('a')
      // 设置 a 标签的下载文件名
      a.download = `${date}.png`
      // 设置 a 标签的跳转路径为 文件流地址
      a.href = URL.createObjectURL(blob)
      // 手动触发 a 标签的点击事件
      a.click()
      // 移除 a 标签
      a.remove()
    })
  }
</script>
```


