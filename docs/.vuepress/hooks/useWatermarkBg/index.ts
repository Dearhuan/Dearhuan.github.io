import { computed } from 'vue'

export function useWatermarkBg (props) {
  return computed(() => {
    // 创建一个canvas
    const canvas = document.createElement('canvas')
    const devicePixelRatio = window.devicePixelRatio || 1
    // 字体
    const fontSize = props.fontSize * devicePixelRatio
    const font = fontSize + 'px serif'
    const ctx = canvas.getContext('2d')
    // 获取文字宽度
    ctx.font = font
    const { width } = ctx?.measureText(props.text)
    const canvasSize = Math.max(100, width) + props.gap * devicePixelRatio
    canvas.width = canvasSize
    canvas.height = canvasSize
    ctx?.translate(canvas.width / 2, canvas.height / 2)
    ctx?.rotate((Math.PI / 180) * -45)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
    ctx.font = font
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(props.text, 0, 0)
    return {
      base64: canvas.toDataURL(),
      size: canvasSize,
      styleSize: canvasSize / devicePixelRatio
    }
  })
}