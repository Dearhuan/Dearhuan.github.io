---
prev: /tools/css-bem.md
next: /tools/china-city-lxly.md
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
      },
      {
        "title": "豆果食谱",
        "link": "https://www.douguo.com/"
      }
    ]
  },
  {
    title: '面试',
    children: [
      {
        "title": "Webpack&Git",
        "link": "https://juejin.cn/post/7196630860811075642"
      }
    ]
  },
  {
    title: '我的站点',
    children: [
      {
        "title": "国内疫情数据大屏",
        "link": "https://dearhuan.github.io/chartNcov/"
      },
      {
        "title": "记账本",
        "link": "https://dearhuan.gitee.io/vip"
      },
      {
        "title": "烹饪记录",
        "link": "https://dearhuan.github.io/photoshow"
      }
    ]
  },
  {
    title: 'Github',
    children: [
      {
        "title": "中文独立博客列表",
        "link": "https://github.com/timqian/chinese-independent-blogs"
      },
      {
        "title": "clean-code-javascript",
        "link": "https://github.com/ryanmcdermott/clean-code-javascript"
      },
      {
        "title": "Github趋势查询",
        "link": "https://github.com/trending"
      },
    ]
  }
]
</script>