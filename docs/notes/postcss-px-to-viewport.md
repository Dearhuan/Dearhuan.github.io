::: tip  移动端使用postcss-px-to-viewport
```sh
npm create vite@latest
```

```sh
npm i postcss-px-to-viewport -D
```
:::

::: warning 代码片段
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcsspxtoviewport from'postcss-px-to-viewport'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: 'px', // 需要转换的单位，默认为"px"
          viewportWidth: 375, // 设计稿的视口宽度
          unitPrecision: 5, // 单位转换后保留的精度
          propList: ['*'], // 能转化为vw的属性列表
          viewportUnit: 'vw', // 希望使用的视口单位
          fontViewportUnit: 'vw', // 字体使用的视口单位
          selectorBlackList: ['ignore-'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
          minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
          mediaQuery: false, // 媒体查询里的单位是否需要转换单位
          replace: true, //  是否直接更换属性值，而不添加备用属性
          exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
          landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: 'vw', // 横屏时使用的单位
          landscapeWidth: 375 // 横屏时使用的视口宽度
        })
      ]
    }
  }
})
```

```js
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  <div class="g-container">
    <h2>VW自适应</h2>
    <h2>腾讯视频</h2>
    <h2>电视语音助手</h2>
    <p>连接后可用手机语音操控电视机，包括搜视频、搜明星、切频道、查天气。</p>
    <div class="g-bg-example"></div>
    <div class="g-btn-open">下载腾讯视频，使用语音助手</div>
  </div>
</template>


<style scoped lang="scss">
.g-container {
  position: relative;
  overflow: hidden;
  padding-top: 56px;
  box-sizing: border-box;
}


h2 {
  font-size: 32px;
  color: #fff;
  line-height: 40px;
  text-indent: 48px;
}


p {
  width: 300px;
  margin-top: 8px;
  margin-left: 48px;
  font-size: 14px;
  color: hsla(0, 0%, 100%, .5);
  line-height: 24px;
}


.g-bg-example {
  width: 300px;
  height: 209px;
  margin: 32px auto;
  background: url(//vmat.gtimg.com/kt/ktweb/pay/imgs/voiceGuide/example-mobile.png) no-repeat 50%;
  background-size: 100% 100%;
}


.g-btn-open {
  opacity: 1;
  position: relative;
  width: 275px;
  height: 48px;
  margin: 34px auto;
  line-height: 48px;
  box-sizing: border-box;
  text-align: center;
  text-indent: 39px;
  border-radius: 100px;
  color: #fff;
  font-size: 14px;
  background: #eb6b07;
  transition: opacity .5s;


  &::before {
    position: absolute;
    content: "";
    width: 20px;
    height: 18px;
    left: 34px;
    top: 50%;
    transform: translateY(-50%);
    background: url(//vmat.gtimg.com/kt/ktweb/pay/imgs/voiceGuide/logo.png) no-repeat 50%;
    background-size: 20px 18px;
  }
}
</style>
```
:::

::: danger 示例
![VuePress Logo](/images/demo1.png)
:::