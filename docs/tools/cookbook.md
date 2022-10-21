---
prev: 
next: /tools/ts-file-tool.md
---

# 食谱

<timeLineThree :timeLineList="list" />

<script setup>
import { ref } from 'vue'

const list = ref([])

list.value = [
  {
    content: [
      '材料：玉米、排骨、胡萝卜、马蹄（可选）、生姜、盐',
      '步骤：',
      '1.排骨洗净后冷水下锅，放入姜片，焯水后捞出。',
      '2.胡萝卜、玉米、马蹄切块。',
      '3.食材入锅加适量水和姜片，煲汤，出锅加适量盐。'
      ],
    title: '玉米排骨汤',
    linkText: '图文',
    link: 'https://www.douguo.com/cookbook/1255090.html?f=bdald',
  },
  {
    title: '辣椒炒肉',
    content: [
      '材料：螺丝椒、瘦肉、生抽、老抽、蒜瓣、盐（可选）',
      '步骤：',
      '1.瘦肉切片或丝，大蒜拍瓣。',
      '2.辣椒片刀，热锅无油煸炒备用。',
      '3.下肉，适时加生抽、老抽、蒜瓣。',
      '4.下辣椒翻炒出锅。'
    ],
    link: 'https://www.douguo.com/cookbook/2457894.html',
    linkText: '图文'
  },
  {
    title: '番茄鸡蛋',
    content: [
      '材料：番茄、鸡蛋、葱、生抽、盐、白糖',
      '步骤：',
      '1.番茄滑刀，热水烫，去皮，切块。',
      '2.鸡蛋加盐打散后加点水。',
      '3.加油热锅下蛋液，备用。',
      '4.热肉下番茄炒至变软出汁，加入白糖、盐、生抽翻炒，小火焖煮。',
      '5.加入葱花出锅。'
    ],
    link: 'https://www.douguo.com/cookbook/2458690.html?f=bdald',
    linkText: '图文'
  },
]
</script>