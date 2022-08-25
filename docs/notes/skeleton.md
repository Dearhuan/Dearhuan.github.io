# 自定义骨架屏

::: tip 
通过使用骨架屏给页面提供默认占位和过渡效果，提升用户体验
:::

## 效果示例
<div id="box">
  <div class="flex" v-for="(item,i) in list" :key="i">
    <div v-html="leftImg"></div>
    <div style="flex: 1;margin-left:10px;position:relative;">
      <div v-html="header"></div>
      <div v-html="text"></div>
      <div v-html="tag" style="position:absolute;bottom:0;"></div>
      <div v-html="circle" style="position:absolute;bottom:0;right:10px;"></div>
    </div>
  </div>
</div>

<script setup lang="ts">
  import { ref, reactive } from 'vue'

  interface SkeletonOption {
    type?: string,
    style?: string,
    animated?: boolean | string | number,
    containerStyle?: string
  }

  const list = reactive<number[]>([1,2,3,4,5])
  
  const getSkeletonItem = (options: SkeletonOption) => {
    const tagTypes = [
      'image','p','text','h1','h3','button','circle'
    ]

    const svgImg = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                     <path 
                       fill="currentColor" 
                       d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32  32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248  0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32  32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z">
                     </path>
                   </svg>`

    let { type = 'text', style = '', animated = false, containerStyle = '' } = options
    if(!tagTypes.includes(type)){
      type = 'text'
    }

    let skeletonItem = ''

    switch (type) {
      case 'text'://文本
        skeletonItem = `<div class="el-skeleton__item el-skeleton__text" ${style ? `style="${style} "` : ''}></div>`
        break;
      case 'image'://图片
        skeletonItem = `<div class="el-skeleton__item el-skeleton__image" ${style ? `style="${style}  "` : ''}>${svgImg}</div>`
        break;
      case 'h1'://大标题
        skeletonItem = `<div class="el-skeleton__item el-skeleton__h1" ${style ? `style="${style}"`   : ''}></div>`
        break;
      case 'h3'://副标题
        skeletonItem = `<div class="el-skeleton__item el-skeleton__h3" ${style ? `style="${style}"`   : ''}></div>`
        break;
      case 'button'://按钮
        skeletonItem = `<div class="el-skeleton__item el-skeleton__button" ${style ? `style="${style} "` : ''}></div>`
        break;
      case 'circle'://圆形
        skeletonItem = `<div class="el-skeleton__item el-skeleton__circle" ${style ? `style="${style} "` : ''}></div>`
        break;

      default:
        break;
    }

    if(animated){
      return `<div class="el-skeleton is-animated" ${containerStyle ? `style="${containerStyle}"` :   ''}>${skeletonItem}</div>`
    }else{
      return skeletonItem
    }
  }

  const header = ref<string>('')
  header.value = getSkeletonItem({
         type: 'h1',
         containerStyle: 'height:30px;',
         style: 'height: 100%;',
         animated: 1
       })

  const text = ref<string>('')
  text.value = getSkeletonItem({
         type: 'text',
         containerStyle: 'width:80%;height:20px;margin-top: 10px;',
         style: 'height: 100%;',
         animated: 1
       })
  
  const leftImg = ref<string>('')
  leftImg.value = getSkeletonItem({
       type: 'image',
       animated: 1,
       style: 'width:200px;height:150px;',
       containerStyle: 'width:200px;'
     })
  
  const tag = ref<string>('')
  tag.value = [1,2].map(item=>{
    return `${getSkeletonItem({
           type: 'text',
           animated: 1,
           containerStyle: 'display:inline-block;width:auto;margin-right:10px;',
           style: 'width:60px;height:30px;'
         })}`
  }).join('')

  const circle = ref<string>('')
  circle.value = getSkeletonItem({
       type: 'circle',
       animated: 1,
       style: 'width:50px;height:50px;',
     })
</script>

<style>
:root {
  --el-text-color-placeholder: #a8abb2;
  --el-text-color-disabled: #c0c4cc;
  --el-border-color: #dcdfe6;
  --el-border-color-light: #e4e7ed;
  --el-border-color-lighter: #ebeef5;
  --el-border-color-extra-light: #f2f6fc;
  --el-border-color-dark: #d4d7de;
  --el-border-color-darker: #cdd0d6;
  --el-fill-color: #f0f2f5;
  --el-fill-color-light: #f5f7fa;
  --el-fill-color-lighter: #fafafa;
  --el-fill-color-extra-light: #fafcff;
  --el-fill-color-dark: #ebedf0;
  --el-fill-color-darker: #e6e8eb;
  --el-fill-color-blank: #ffffff;
  --el-box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.04),
    0px 8px 20px rgba(0, 0, 0, 0.08);
  --el-box-shadow-light: 0px 0px 12px rgba(0, 0, 0, 0.12);
  --el-box-shadow-lighter: 0px 0px 6px rgba(0, 0, 0, 0.12);
  --el-box-shadow-dark: 0px 16px 48px 16px rgba(0, 0, 0, 0.08),
    0px 12px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16);
  --el-disabled-bg-color: var(--el-fill-color-light);
  --el-disabled-text-color: var(--el-text-color-placeholder);
  --el-disabled-border-color: var(--el-border-color-light);
  --el-overlay-color: rgba(0, 0, 0, 0.8);
  --el-overlay-color-light: rgba(0, 0, 0, 0.7);
  --el-overlay-color-lighter: rgba(0, 0, 0, 0.5);
  --el-mask-color: rgba(255, 255, 255, 0.9);
  --el-mask-color-extra-light: rgba(255, 255, 255, 0.3);
  --el-border-width: 1px;
  --el-border-style: solid;
  --el-border-color-hover: var(--el-text-color-disabled);
  --el-border: var(--el-border-width) var(--el-border-style)
    var(--el-border-color);
  --el-svg-monochrome-grey: var(--el-border-color);
}
.el-skeleton {
  --el-skeleton-circle-size: var(--el-avatar-size);
}
.el-skeleton__item {
  background: var(--el-skeleton-color);
  display: inline-block;
  height: 16px;
  border-radius: var(--el-border-radius-base);
  width: 100%;
}
.el-skeleton__circle {
  border-radius: 50%;
  width: var(--el-skeleton-circle-size);
  height: var(--el-skeleton-circle-size);
  line-height: var(--el-skeleton-circle-size);
}
.el-skeleton__button {
  height: 40px;
  width: 64px;
  border-radius: 4px;
}
.el-skeleton__p {
  width: 100%;
}
.el-skeleton__p.is-last {
  width: 61%;
}
.el-skeleton__p.is-first {
  width: 33%;
}
.el-skeleton__text {
  width: 100%;
  height: var(--el-font-size-small);
}
.el-skeleton__caption {
  height: var(--el-font-size-extra-small);
}
.el-skeleton__h1 {
  height: var(--el-font-size-extra-large);
}
.el-skeleton__h3 {
  height: var(--el-font-size-large);
}
.el-skeleton__h5 {
  height: var(--el-font-size-medium);
}
.el-skeleton__image {
  width: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
}
.el-skeleton__image svg {
  color: var(--el-svg-monochrome-grey);
  fill: currentColor;
  width: 22%;
  height: 22%;
}
.el-skeleton {
  --el-skeleton-color: var(--el-fill-color);
  --el-skeleton-to-color: var(--el-fill-color-darker);
}
@keyframes el-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  to {
    background-position: 0 50%;
  }
}
.el-skeleton {
  width: 100%;
}
.el-skeleton__first-line,
.el-skeleton__paragraph {
  height: 16px;
  margin-top: 16px;
  background: var(--el-skeleton-color);
}
.el-skeleton.is-animated .el-skeleton__item {
  background: linear-gradient(
    90deg,
    var(--el-skeleton-color) 25%,
    var(--el-skeleton-to-color) 37%,
    var(--el-skeleton-color) 63%
  );
  background-size: 400% 100%;
  animation: el-skeleton-loading 1.4s ease infinite;
}

#box {
  padding: 10px;
  background: #e3e3e3;
}
.flex {
  display: flex;
  margin-bottom: 10px;
  background: #fff;
  padding: 10px;
}
.flex:last-child {
  margin-bottom: 0;
}
</style>
![skeleton](/images/skeleton-demo01.png)
![skeleton](/images/skeleton-demo02.png)

- 参考Element Plus风格样式
```css
:root {
  --el-text-color-placeholder: #a8abb2;
  --el-text-color-disabled: #c0c4cc;
  --el-border-color: #dcdfe6;
  --el-border-color-light: #e4e7ed;
  --el-border-color-lighter: #ebeef5;
  --el-border-color-extra-light: #f2f6fc;
  --el-border-color-dark: #d4d7de;
  --el-border-color-darker: #cdd0d6;
  --el-fill-color: #f0f2f5;
  --el-fill-color-light: #f5f7fa;
  --el-fill-color-lighter: #fafafa;
  --el-fill-color-extra-light: #fafcff;
  --el-fill-color-dark: #ebedf0;
  --el-fill-color-darker: #e6e8eb;
  --el-fill-color-blank: #ffffff;
  --el-box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.04),
    0px 8px 20px rgba(0, 0, 0, 0.08);
  --el-box-shadow-light: 0px 0px 12px rgba(0, 0, 0, 0.12);
  --el-box-shadow-lighter: 0px 0px 6px rgba(0, 0, 0, 0.12);
  --el-box-shadow-dark: 0px 16px 48px 16px rgba(0, 0, 0, 0.08),
    0px 12px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16);
  --el-disabled-bg-color: var(--el-fill-color-light);
  --el-disabled-text-color: var(--el-text-color-placeholder);
  --el-disabled-border-color: var(--el-border-color-light);
  --el-overlay-color: rgba(0, 0, 0, 0.8);
  --el-overlay-color-light: rgba(0, 0, 0, 0.7);
  --el-overlay-color-lighter: rgba(0, 0, 0, 0.5);
  --el-mask-color: rgba(255, 255, 255, 0.9);
  --el-mask-color-extra-light: rgba(255, 255, 255, 0.3);
  --el-border-width: 1px;
  --el-border-style: solid;
  --el-border-color-hover: var(--el-text-color-disabled);
  --el-border: var(--el-border-width) var(--el-border-style)
    var(--el-border-color);
  --el-svg-monochrome-grey: var(--el-border-color);
}

.el-skeleton {
  --el-skeleton-circle-size: var(--el-avatar-size);
}
.el-skeleton__item {
  background: var(--el-skeleton-color);
  display: inline-block;
  height: 16px;
  border-radius: var(--el-border-radius-base);
  width: 100%;
}
.el-skeleton__circle {
  border-radius: 50%;
  width: var(--el-skeleton-circle-size);
  height: var(--el-skeleton-circle-size);
  line-height: var(--el-skeleton-circle-size);
}
.el-skeleton__button {
  height: 40px;
  width: 64px;
  border-radius: 4px;
}
.el-skeleton__p {
  width: 100%;
}
.el-skeleton__p.is-last {
  width: 61%;
}
.el-skeleton__p.is-first {
  width: 33%;
}
.el-skeleton__text {
  width: 100%;
  height: var(--el-font-size-small);
}
.el-skeleton__caption {
  height: var(--el-font-size-extra-small);
}
.el-skeleton__h1 {
  height: var(--el-font-size-extra-large);
}
.el-skeleton__h3 {
  height: var(--el-font-size-large);
}
.el-skeleton__h5 {
  height: var(--el-font-size-medium);
}
.el-skeleton__image {
  width: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
}
.el-skeleton__image svg {
  color: var(--el-svg-monochrome-grey);
  fill: currentColor;
  width: 22%;
  height: 22%;
}
.el-skeleton {
  --el-skeleton-color: var(--el-fill-color);
  --el-skeleton-to-color: var(--el-fill-color-darker);
}
@keyframes el-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  to {
    background-position: 0 50%;
  }
}
.el-skeleton {
  width: 100%;
}
.el-skeleton__first-line,
.el-skeleton__paragraph {
  height: 16px;
  margin-top: 16px;
  background: var(--el-skeleton-color);
}
.el-skeleton.is-animated .el-skeleton__item {
  background: linear-gradient(
    90deg,
    var(--el-skeleton-color) 25%,
    var(--el-skeleton-to-color) 37%,
    var(--el-skeleton-color) 63%
  );
  background-size: 400% 100%;
  animation: el-skeleton-loading 1.4s ease infinite;
}
```

- 模块定义
```js
/**
* @func getSkeletonItem
* @param {string} type
* @param {string} style
* @param {Boolean} animated
* @param {string} containerStyle
* @returns {string}
* @desc 获取骨架片段
*/
const getSkeletonItem = (options) => {
  const tagTypes = [
    'image','p','text','h1','h3','button','circle'
  ]

  const svgImg = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                   <path 
                     fill="currentColor" 
                     d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z">
                   </path>
                 </svg>`

  let { type = 'text', style = '', animated = false, containerStyle = '' } = options
  if(!tagTypes.includes(type)){
    type = 'text'
  }

  let skeletonItem = ''

  switch (type) {
    case 'text'://文本
      skeletonItem = `<div class="el-skeleton__item el-skeleton__text" ${style ? `style="${style}"` : ''}></div>`
      break;
    case 'image'://图片
      skeletonItem = `<div class="el-skeleton__item el-skeleton__image" ${style ? `style="${style}"` : ''}>${svgImg}</div>`
      break;
    case 'h1'://大标题
      skeletonItem = `<div class="el-skeleton__item el-skeleton__h1" ${style ? `style="${style}"` : ''}></div>`
      break;
    case 'h3'://副标题
      skeletonItem = `<div class="el-skeleton__item el-skeleton__h3" ${style ? `style="${style}"` : ''}></div>`
      break;
    case 'button'://按钮
      skeletonItem = `<div class="el-skeleton__item el-skeleton__button" ${style ? `style="${style}"` : ''}></div>`
      break;
    case 'circle'://圆形
      skeletonItem = `<div class="el-skeleton__item el-skeleton__circle" ${style ? `style="${style}"` : ''}></div>`
      break;
  
    default:
      break;
  }

  if(animated){
    return `<div class="el-skeleton is-animated" ${containerStyle ? `style="${containerStyle}"` : ''}>${skeletonItem}</div>`
  }else{
    return skeletonItem
  }
}

export default getSkeletonItem
```

- 结合html使用
```js
`<div class="product flex">
   <div class="product-img">
     ${getSkeletonItem({
       type: 'image',
       animated: 1,
       style: 'width:200px;height:150px;',
       containerStyle: 'width:200px;'
     })}
   </div>
   <div class="product-info flex flex1">
     <div class="info-lt flex1">
       <div class="info-name ellipsis">${getSkeletonItem({
         type: 'h1',
         animated: 1
       })}</div>
       <div class="info-desc ellipsis">${getSkeletonItem({
         type: 'text',
         animated: 1
       })}</div>
       <div class="info-tags">
         ${getSkeletonItem({
           type: 'text',
           animated: 1,
           containerStyle: 'display:inline-block;width:auto;',
           style: 'width:60px;height:30px;'
         })}
         ${getSkeletonItem({
           type: 'text',
           animated: 1,
           containerStyle: 'display:inline-block;width:auto;',
           style: 'width:60px;height:30px;'
         })}
       </div>
     </div>
     <div class="info-rt is-animated">
       ${getSkeletonItem({
         type: 'h3',
         animated: 1,
         style: 'margin-bottom:10px;'
       })}
       ${getSkeletonItem({
         type: 'text',
         animated: 1,
         style: 'margin-bottom:30px;width:100px;'
       })}
       ${getSkeletonItem({
         type: 'button',
         animated: 1,
         style: 'width:100px;border-radius:20px;'
       })}
     </div>
   </div>
 </div>`
```