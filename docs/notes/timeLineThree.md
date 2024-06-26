---
prev: /notes/timeLineTwo.md
next: /notes/carlendar.md
---

# 渐变时间线-III

<timeLineThree :timeLineList="list" />

<script setup>
import { ref } from 'vue'

const list = ref([])

list.value = [
  {
    content: ['Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.','Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.'],
    time: '10-11 08:57',
    title: '深圳10月10日新增14例确诊病例和19例无症状感染者',
    origin: '信息来源：界面新闻',
    link: 'https://h5.baike.qq.com/mobile/landing.html?docid=20221011A016LQ00&amp;isNews=1&amp;adtag=wxjk.yqssc.yqdt',
  },
  {
    content: 'Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.',
    origin: '信息来源：界面新闻',
    link: 'https://h5.baike.qq.com/mobile/landing.html?docid=20221011A016LQ00&amp;isNews=1&amp;adtag=wxjk.yqssc.yqdt',
    linkText: 'News'
  },
  {
    content: ['Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.','Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.'],
    time: '10-11 08:57',
    title: '深圳10月10日新增14例确诊病例和19例无症状感染者',
    link: 'https://h5.baike.qq.com/mobile/landing.html?docid=20221011A016LQ00&amp;isNews=1&amp;adtag=wxjk.yqssc.yqdt',
  },
  {
    content: 'Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.'
  },
  {
    content: 'Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.'
  }
]
</script>

### 组件定义

```vue
<template>
  <main>
    <div class="timeline-three" v-for="(item, index) in timeLineList" :key="index">
      <p v-if="item.title" class="title">{{ item.title }}</p>
      <div v-if="Array.isArray(item.content)">
        <p v-for="(text, i) in item.content" :key="i">{{ text }}</p>
      </div>
      <div v-else-if="typeof item.content == 'string'">{{ item.content }}</div>
      <p v-if="item.origin && !item.time">{{ item.origin }}</p>
      <p v-else-if="item.origin && item.time" v-text="`${item.origin} - ${item.time}`"></p>
      <p v-else-if="!item.origin && item.time">{{ item.time }}</p>
      <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer"
        v-text="item.linkText ? item.linkText : '阅读原文'">
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

interface TimeLineItem {
  content: string | Array<string> // 内容
  time?: string // 时间
  title?: string // 标题
  origin?: string // 来源
  link?: string // 链接
  linkText?: string // 链接文字
}

const props = defineProps({
  timeLineList: {
    type: Array as PropType<TimeLineItem[]>,
    required: true
  }
})

</script>

<style lang="scss" scoped>
//Colors
$black: #34435E;
$white: #ffffff;

main {
  min-width: 300px;
  margin: auto;
}

.timeline-three {
  font-size: 1em;
  line-height: 1.75em;
  border-top: 3px solid;
  border-image: linear-gradient(to right, #743ad5 0%, #d53a9d 100%);
  border-image-slice: 1;
  border-width: 3px;
  margin: 0;
  padding: 40px;
  counter-increment: section;
  position: relative;
  color: var(--c-text);

  //numbers
  &:before {
    content: counter(section);
    position: absolute;
    border-radius: 50%;
    padding: 10px;
    height: 1.25em;
    width: 1.25em;
    background-color: $black;
    text-align: center;
    line-height: 1.25em;
    color: $white;
    font-size: 1em;
  }

  .title {
    font-weight: 600;
    color: var(--c-tip-title);
    margin-bottom: -0.4rem;
  }
}

//even number borders
.timeline-three:nth-child(even) {
  border-right: 3px solid;
  padding-left: 0;

  &:before {
    left: 100%;
    margin-left: -20px;
  }
}

//odd number borders
.timeline-three:nth-child(odd) {
  border-left: 3px solid;
  padding-right: 0;

  &:before {
    right: 100%;
    margin-right: -20px;
  }
}

//handle first and last
.timeline-three:first-child {
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.timeline-three:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
```