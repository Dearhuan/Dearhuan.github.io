---
prev: 
  text: '磨砂玻璃渐变背景-CSS-doodle'
  link: /notes/css-doodle.html
next:
  text: 'TypeScript笔记'
  link: /notes/ts-category-notes.html
---
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
    title: 'React笔记',
    children: [
      {
        "title": "React使用pdfjs示例",
        "link": "./react-pdfjs.html"
      },
    ]
  }
]
</script>