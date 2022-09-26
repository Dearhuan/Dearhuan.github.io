## VuePress自定义组件
<!-- <template> -->
  <div v-for="(item, i) in linkList" :key="i">
    <h3>{{ item.title }}</h3>
    <div>
      <card :defaultValue="item.children"/>
    </div>
  </div>
<!-- </template> -->

<script setup>
import { ref } from 'vue'

const linkList = ref([])

linkList.value = [
  {
    title: 'React UI 组件库',
    children: [
      {
        title: 'Ant Design',
        link: 'https://ant.design/docs/react/introduce-cn'
      }, {
        title: 'Bootstrap',
        link: 'https://react-bootstrap.github.io/getting-started/introduction'
      }, {
        title: 'Material UI',
        link: 'https://mui.com/material-ui/getting-started/overview/'
      }
    ]
  }, {
    title: 'Vue UI 组件库',
    children: [
      {
        title: 'Element',
        link: 'https://element.eleme.io/#/zh-CN/component/installation'
      }, {
        title: 'Element Plus',
        link: 'https://element-plus.org/zh-CN/component/button.html'
      }, {
        title: 'Vant',
        link: 'https://youzan.github.io/vant/#/zh-CN'
      }, {
        title: 'View Design',
        link: 'https://www.iviewui.com/view-ui-plus/guide/introduce'
      }
    ]
  },
  {
    title: '动画库',
    children: [
      {
        title: 'Animate.css',
        link: 'https://animate.style/'
      }
    ]
  }
]
</script>

## 踩坑记录

由于一开始vuepress版本安装的2.0.0-beta.49，然而@vuepress/plugin-register-components使用yarn add @vuepress/plugin-register-components@next安装了当时最新的2.0.0-beta.51，可能是两者版本不符的原因导致运行和打包都报错，升级nodejs版本也未解决，于是选择降低依赖版本和vuepress保持一致，结果成功运行启动。

```bash
yarn remove @vuepress/plugin-register-components
yarn add -D @vuepress/plugin-register-components@2.0.0-beta.49
```

## 配置
```js
// .vuepress/config.js
...
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

module.exports = {
  ...
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ],
  ...
}
```

## 组件定义
```vue
// components/Card.vue
<template>
  <div class="g-card-link">
    <div class="g-card-item"
         v-for="(item, k) in value"
         :key="k">
      <a :href="item.link"
         rel="external nofollow"
         target="_blank"
         :title="item.title">{{ item.title }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

interface CardItem {
  title: string
  link: string
}

const props = defineProps({
  defaultValue: {
    type: Array as PropType<CardItem[]>,
    require: true
  }
})

const value = ref(props.defaultValue)
</script>

<style lang="scss" scoped>
button {
  background: #4e6ef2;
}
.g-card-link {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;
  line-height: 38px;
  .g-card-item {
    background: blue;
    width: 113px;
    max-width: 138px;
    height: 38px;
    cursor: pointer;
    overflow: hidden;
  }
  .g-card-item:nth-of-type(2n) {
    background: rgba(44, 104, 255, 0.1);
  }
  .g-card-item:nth-of-type(2n + 1) {
    background: rgba(56, 203, 137, 0.1);
  }
}
</style>
```

## 组件使用
```vue {5}
<template>
  <div v-for="(item, i) in linkList" :key="i">
    <h3>{{ item.title }}</h3>
    <div>
      <card :defaultValue="item.children"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const linkList = ref([])

linkList.value = [
  {
    title: 'React UI 组件库',
    children: [
      {
        title: 'Ant Design',
        link: 'https://ant.design/docs/react/introduce-cn'
      }, {
        title: 'Bootstrap',
        link: 'https://react-bootstrap.github.io/getting-started/introduction'
      }, {
        title: 'Material UI',
        link: 'https://mui.com/material-ui/getting-started/overview/'
      }
    ]
  }, {
    title: 'Vue UI 组件库',
    children: [
      {
        title: 'Element',
        link: 'https://element.eleme.io/#/zh-CN/component/installation'
      }, {
        title: 'Element Plus',
        link: 'https://element-plus.org/zh-CN/component/button.html'
      }, {
        title: 'Vant',
        link: 'https://youzan.github.io/vant/#/zh-CN'
      }, {
        title: 'View Design',
        link: 'https://www.iviewui.com/view-ui-plus/guide/introduce'
      }
    ]
  },
  {
    title: '动画库',
    children: [
      {
        title: 'Animate.css',
        link: 'https://animate.style/'
      }
    ]
  }
]
</script>
```