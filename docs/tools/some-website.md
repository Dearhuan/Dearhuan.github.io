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
        "title": "记记账呗",
        "link": "https://dearhuan.gitee.io/vip"
      },
      {
        "title": "图片压缩【PNG】",
        "link": "https://dearhuan.gitee.io/png-compress"
      },
      {
        "title": "基金涨了吗",
        "link": "https://dearhuan.github.io/swiper-fund/#/fund"
      },
      {
        "title": "天气怎么样",
        "link": "https://dearhuan.github.io/swiper-fund/#/weather"
      },
      {
        "title": "天气时间轴",
        "link": "https://dearhuan.github.io/swiper-fund/#//weather/amap"
      },
      {
        "title": "油价跌了吗",
        "link": "https://dearhuan.github.io/swiper-fund/#/oil"
      },
      {
        "title": "油价算一算",
        "link": "https://dearhuan.github.io/swiper-fund/#/oilTool"
      },
      {
        "title": "今天吃什么",
        "link": "https://dearhuan.github.io/swiper-fund/#/menu"
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
      {
        "title": "一款简洁实用优雅的个人博客系统",
        "link": "https://github.com/Mereithhh/vanblog"
      },
      {
        "title": "天天基金网 NodeJS 版 API",
        "link": "https://kouchao.github.io/TiantianFundApi/"
      },
    ]
  },
  {
    title: '他人博客',
    children: [
      {
        "title": "Herrylo`s Blog",
        "link": "https://herrylo.github.io/"
      },
      {
        "title": "Mereith's Blog",
        "link": "https://www.mereith.com"
      },
      {
        "title": "前端｜面试进阶之道",
        "link": "https://www.whyknown.com/"
      },
      {
        "title": "小柴の BLOG",
        "link": "https://blog.sepbf.com"
      },
      {
        "title": "handy 的小窝",
        "link": "https://www.handyzyg.cn"
      },
      {
        "title": "GT 的官方博客",
        "link": "https://gt-it.net"
      },
      {
        "title": "無糧不聚兵‘s Blog",
        "link": "https://www.wongcw.cn"
      },
      {
        "title": "oldmoon",
        "link": "https://oldmoon.top"
      },
      {
        "title": "手艺橙",
        "link": "https://blog.shouyicheng.com/"
      },
      {
        "title": "叶继伟 の blog",
        "link": "https://yejiwei.com"
      },
      {
        "title": "seek.wiki",
        "link": "https://seek.wiki"
      },
      {
        "title": "Kevin2li's Blog",
        "link": "https://blog.kevin2li.top/"
      },
      {
        "title": "joker's blog",
        "link": "https://jingjianqian.top"
      },
      {
        "title": "SnailBlog",
        "link": "https://blog.mldd521.com"
      },
      {
        "title": "Ray's Blog",
        "link": "https://blog.zai7lou.ml"
      },
      {
        "title": "阿明的小博客",
        "link": "https://696988.xyz/"
      },
      {
        "title": "老咸鱼的池塘",
        "link": "https://nixieka.top"
      },
      {
        "title": "谷粒 corn.li",
        "link": "https://corn.li"
      },
      {
        "title": "BARM Blog",
        "link": "https://blog.ccz.life"
      },
      {
        "title": "凌览社",
        "link": "http://www.linglan01.cn"
      },
      {
        "title": "Peter's blog",
        "link": "https://niuery.com"
      },
      {
        "title": "不可视之线",
        "link": "https://fukashinosen.club"
      },
      {
        "title": "我本无罪的博客",
        "link": "https://blog.rnaan.com/"
      },
      {
        "title": "还是夸张一点",
        "link": "https://blog.ynsites.com/"
      },
      {
        "title": "XiaFan's Vision",
        "link": "https://blog.motofans.club/"
      },
      {
        "title": "青菜的杂货铺",
        "link": "https://211222.xyz"
      },
      {
        "title": "笑一个吧",
        "link": "http://vanblog.ztunan.top"
      },
      {
        "title": "花菜的博客",
        "link": "https://blog.huacai.one"
      },
      {
        "title": "MrBun's Blog",
        "link": "https://blog.mrbun.cn"
      },
      {
        "title": "智芯物联的空间",
        "link": "https://www.tingshuo.online"
      },
      {
        "title": "敲代码的小盆友",
        "link": "https://code-child.cn"
      },
      {
        "title": "Tim's Life",
        "link": "https://zouchanglin.cn"
      },
      {
        "title": "吾・子风",
        "link": "https://5z5f.com/tag"
      },
      {
        "title": "LinKinHan'Blog",
        "link": "https://www.linkinhan.top"
      },
      {
        "title": "郭郭的博客",
        "link": "https://blog.warmplace.cn"
      },
      {
        "title": "小橘子",
        "link": "https://www.xiaojuziya.com"
      }
    ]
  }
]
</script>