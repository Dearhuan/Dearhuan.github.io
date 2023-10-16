---
prev: /notes/skeleton-vue.md
next: 
  text: 'html导出pdf'
  link: /notes/html2pdf.html
---
# html2canvas生成海报
<!-- <template> -->
  <div id="content-box">
    <div class="content">
      <div class="content-top">
        <img class="poster"
             :src="imgList[curIndex].url"
             alt="">
      </div>
      <div class="content-bottom">
        <p>{{ imgList[curIndex].desc }}</p>
        <img src="/images/wechat.jpg"
             alt="">
      </div>
    </div>
    <div>
      <button @click="getPrevContent">上一个</button>
      <button @click="dom2img">生成海报</button>
      <button @click="savePoster"
              v-if="isShowPoster">下载海报</button>
      <button @click="getNextContent">下一个</button>
    </div>
    <img :src="poster"
         id="poster"
         v-if="isShowPoster"
         alt="">
  </div>
<!-- </template> -->

<script setup>
import { ref, nextTick } from 'vue'
import html2canvas from 'html2canvas'

let poster = ref('')

let isShowPoster = ref(false)

const curIndex = ref(0)

const imgList = ref([
  {
    url: '/images/jaychou.jpg',
    desc: '雨淋湿了天空，灰的很讲究。 -周杰伦'
  },
  {
    url: '/images/css-doodle.png',
    desc: '君不见黄河之水天上来，奔流到海不复回。 -李白'
  },
  {
    url: '/images/hero.png',
    desc: '人生得意须尽欢，莫使金准空对月。 -李白'
  },
  {
    url: '/images/skeleton-demo01.png',
    desc: '将进酒，杯莫停。 -李白'
  }
])


const dom2img = () => {
  const node = document.getElementsByClassName('content')[0]
  html2canvas(node, {
    scrollX: 0,
    scrollY: 0,
    width: node.offsetWidth,
    height: node.offsetHeight
  }).then(canvas => {
    let dataUrl = canvas.toDataURL('image/png')
    if (dataUrl) {
      isShowPoster.value = true
      poster.value = dataUrl
    }
  })
}

const getPrevContent = () => {
  if (curIndex.value === 0) {
    curIndex.value = imgList.value.length - 1
  } else {
    curIndex.value--
  }
  nextTick(() => {
    dom2img()
  })
}

const getNextContent = () => {
  if (curIndex.value === imgList.value.length - 1) {
    curIndex.value = 0
  } else {
    curIndex.value++
  }
  nextTick(() => {
    dom2img()
  })
}

const savePoster = () => {
  const base64 = document.querySelector('#poster').src
  let arr = base64.split(',')
  let bytes = atob(arr[1])
  let ab = new ArrayBuffer(bytes.length)
  let ia = new Uint8Array(ab)
  for(let i = 0; i < bytes.length; i++){
    ia[i] = bytes.charCodeAt(i)
  }
  let blob = new Blob([ab], { type: 'application/octet-stream' })
  let url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = new Date().valueOf() + '.png'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#content-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .content {
    display: flex;
    width: 400px;
    flex-direction: column;
    border: 1px solid #ddd;
    .content-top {
      width: 100%;
      height: 540px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      .poster {
        width: inherit;
        object-fit: contain;
      }
    }
    .content-bottom {
      display: flex;
      align-items: center;
      background: #fff;
      img {
        object-fit: contain;
        width: 80px;
        margin: 0 10px 10px 20px;
      }
      p {
        font-size: 18px;
        font-weight: bold;
        line-height: 3rem;
        flex: 1;
        padding-left: 10px;
      }
    }
  }
  button {
    margin: 8px;
    padding: 10px;
    border-radius: 5px;
    border: none;
  }
}
</style>

```vue
<template>
  <div id="content-box">
    <div class="content">
      <div class="content-top">
        <img class="poster"
             :src="imgList[curIndex].url"
             alt="">
      </div>
      <div class="content-bottom">
        <p>{{ imgList[curIndex].desc }}</p>
        <img src="/images/wechat.jpg"
             alt="">
      </div>
    </div>
    <div>
      <button @click="getPrevContent">上一个</button>
      <button @click="dom2img">生成海报</button>
      <button @click="savePoster"
              v-if="isShowPoster">下载海报</button>
      <button @click="getNextContent">下一个</button>
    </div>
    <img :src="poster"
         id="poster"
         v-if="isShowPoster"
         alt="">
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import html2canvas from 'html2canvas'

let poster = ref('')

let isShowPoster = ref(false)

const curIndex = ref(0)

const imgList = ref([
  {
    url: '/images/jaychou.jpg',
    desc: '雨淋湿了天空，灰的很讲究。 -周杰伦'
  },
  {
    url: '/images/css-doodle.png',
    desc: '君不见黄河之水天上来，奔流到海不复回。 -李白'
  },
  {
    url: '/images/hero.png',
    desc: '人生得意须尽欢，莫使金准空对月。 -李白'
  },
  {
    url: '/images/skeleton-demo01.png',
    desc: '将进酒，杯莫停。 -李白'
  }
])


const dom2img = () => {
  const node = document.getElementsByClassName('content')[0]
  html2canvas(node, {
    scrollX: 0,
    scrollY: 0,
    width: node.offsetWidth,
    height: node.offsetHeight
  }).then(canvas => {
    let dataUrl = canvas.toDataURL('image/png')
    if (dataUrl) {
      isShowPoster.value = true
      poster.value = dataUrl
    }
  })
}

const getPrevContent = () => {
  if (curIndex.value === 0) {
    curIndex.value = imgList.value.length - 1
  } else {
    curIndex.value--
  }
  nextTick(() => {
    dom2img()
  })
}

const getNextContent = () => {
  if (curIndex.value === imgList.value.length - 1) {
    curIndex.value = 0
  } else {
    curIndex.value++
  }
  nextTick(() => {
    dom2img()
  })
}

const savePoster = () => {
  const base64 = document.querySelector('#poster').src
  let arr = base64.split(',')
  let bytes = atob(arr[1])
  let ab = new ArrayBuffer(bytes.length)
  let ia = new Uint8Array(ab)
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i)
  }
  let blob = new Blob([ab], { type: 'application/octet-stream' })
  let url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = new Date().valueOf() + '.png'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#content-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .content {
    display: flex;
    width: 400px;
    flex-direction: column;
    border: 1px solid #ddd;
    .content-top {
      width: 100%;
      height: 540px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      .poster {
        width: inherit;
        object-fit: contain;
      }
    }
    .content-bottom {
      display: flex;
      align-items: center;
      background: #fff;
      img {
        object-fit: contain;
        width: 80px;
        margin: 0 10px 10px 20px;
      }
      p {
        font-size: 18px;
        font-weight: bold;
        line-height: 3rem;
        flex: 1;
        padding-left: 10px;
      }
    }
  }
  button {
    margin: 8px;
    padding: 10px;
    border-radius: 5px;
    border: none;
  }
}
</style>
```