<template>
  <div id="waterfall" class="waterfall">
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDebounce } from '../hooks'

const index = ref(0)
const loading = ref(false)

const props = defineProps({
  gap: {
    type: Number,
    required: true,
    default: 10
  }
})

const gap = ref(props.gap)

const getRandNum = (min, max) => {
  return parseInt(Math.random() * (max - min + 1) + min);
};

const getRgbColor = (flag) => {
  var r = getRandNum(0, 255);
  var g = getRandNum(0, 255);
  var b = getRandNum(0, 255);
  return flag ? `rgba(${r},${g},${b},${Math.random().toFixed(2) * 1})` : `rgba(${r},${g},${b})`;
}

const getRandomHeight = (max = 5, min = 1) => {
  return ((Math.floor(Math.random() * (max - min + 1))) + min) * 100
}

const getMinIndex = (heightArr) => {
  let minIndex = 0
  let minHeight = heightArr[minIndex]
  for (let i = 1; i < heightArr.length; i++){
    if(heightArr[i] < minHeight){
      minHeight = heightArr[i]
      minIndex = i
    }
  }
  return minIndex
}

const getMaxHeight = (heightArr) => {
  let maxHeight = heightArr[0]
  for (let i = 1; i < heightArr.length; i++){
    if(heightArr[i] > maxHeight){
      maxHeight = heightArr[i]
    }
  }
  return maxHeight
}

const getData = (num = 5) => {
  const waterfall = document.getElementById('waterfall')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fragment = document.createDocumentFragment()
      for (let i = 0; i < num; i++) {
        const div = document.createElement('div')
        const numDiv = document.createElement('div')
        div.className = 'waterfall-item animate__animated animate__slideInUp'
        numDiv.className = 'num'
        numDiv.textContent = index.value + 1;
        index.value++
        div.appendChild(numDiv)
        div.style.height = getRandomHeight(4, 1) + 'px'
        div.style.background = getRgbColor()
        div.style.transitionDelay = `${i/5}s`
        fragment.appendChild(div)
      }
      waterfall.appendChild(fragment)
      resolve()
    }, 10);
  })
}

const layout = () => {
  const waterfall = document.getElementById('waterfall')
  const items = waterfall.children || []
  const gapVal = gap.value
  let heightArr = []
  let renderIndex = 0
  if(items.length === 0) return
  const pageWidth = waterfall.offsetWidth
  const itemWidth = items[0].offsetWidth
  const columns = parseInt(pageWidth / (itemWidth + gapVal))
  while(renderIndex < items.length){
    let top, left
    if(renderIndex < columns){
      top = 0
      left = (itemWidth + gapVal) * renderIndex
      heightArr.push(items[renderIndex].offsetHeight)
    } else {
      const minIndex = getMinIndex(heightArr)
      top = heightArr[minIndex] + gapVal
      left = items[minIndex].offsetLeft
      heightArr[minIndex] += (items[renderIndex].offsetHeight + gapVal)
    }
    waterfall.style.height = getMaxHeight(heightArr) + 'px'
    items[renderIndex].style.top = top + 'px'
    items[renderIndex].style.left = left + 'px'
    renderIndex++
  }

}

const funcScroll =  async () => {
  const scrollTop = document.documentElement.scrollTop
  const clientHeight = document.documentElement.clientHeight
  const scrollHeight = document.body.scrollHeight
  if((scrollTop + clientHeight >= scrollHeight - 200) && !loading.value) {
    loading.value = true
    await getData()
    loading.value = false
  }
}

onMounted(async () => {
  const waterfall = document.getElementById('waterfall')
  await getData(20)
  layout()

  window.addEventListener('resize', useDebounce(layout, 200, true))

  waterfall.addEventListener('DOMSubtreeModified', () => {
    layout()
  })

  window.onscroll = useDebounce(funcScroll, 200, true)
})

onUnmounted(() => {
  window.removeEventListener('resize', layout)
})
</script>

<style lang="scss">
.waterfall {
  position: relative;
}

.waterfall-item {
  position: absolute;
  width: 210px;
  height: 100px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 480px) {
  .waterfall-item {
    width: 44%;
  }
}

.num {
  font-size: 18px;
  color: #fff;
  text-align: center;
}
.animate__animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}
</style>