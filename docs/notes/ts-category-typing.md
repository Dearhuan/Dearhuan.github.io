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
    title: 'TypeScript类型体操',
    children: [
      {
        "title": "模式匹配",
        "link": "/notes/ts-pattern-matching.html"
      },
      {
        "title": "重新构造做变换",
        "link": "/notes/ts-reconstruct.html"
      },
      {
        "title": "递归复用做循环",
        "link": "/notes/ts-recursive-reuse.html"
      }
    ]
  }
]
</script>