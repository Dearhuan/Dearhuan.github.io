---
prev: /tools/css-bem.md
next: 
---

# Some WebSite

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
    title: '网站记录',
    children: [
      {
        "title": "VuePress",
        "link": "https://v2.vuepress.vuejs.org/zh/"
      },
      {
        "title": "中文独立博客列表",
        "link": "https://github.com/timqian/chinese-independent-blogs"
      },
      {
        "title": "clean-code-javascript",
        "link": "https://github.com/ryanmcdermott/clean-code-javascript"
      },
      {
        "title": "疫情数据(腾讯)",
        "link": "https://feiyan.wecity.qq.com/wuhan/dist/index.html#/?tab=shishitongbao&randId=0.13653898872564252"
      },
      {
        "title": "通信行程卡模拟(Cloudflare)",
        "link": "https://tripcard.pages.dev"
      },
      {
        "title": "通信行程卡模拟(Netlify)",
        "link": "https://kind-snyder-68dad8.netlify.app"
      },
      {
        "title": "时间线示例Demo",
        "link": "https://juejin.cn/post/7073250328023400478"
      }
    ]
  }
]
</script>