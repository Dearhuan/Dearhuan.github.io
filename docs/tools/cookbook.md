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
      '3.热锅，倒油，下蛋液，备用。',
      '4.热锅，倒油，下番茄炒至变软出汁，加入白糖、盐、生抽翻炒，小火焖煮。',
      '5.加入鸡蛋翻炒后点缀葱花出锅。'
    ],
    link: 'https://www.douguo.com/cookbook/2458690.html?f=bdald',
    linkText: '图文'
  },
  {
    title: '香煎土豆饼',
    content: [
      '材料：面粉、土豆、胡萝卜、鸡蛋、牛奶（可选）、葱、盐、孜然粉、胡椒粉、耗油',
      '步骤：',
      '1.土豆、胡萝卜切丝，开水煮两分钟捞出。',
      '2.加鸡蛋、面粉、盐、蚝油、胡椒粉、孜然、香葱、凉水或牛奶搅拌均匀。',
      '3.热锅，倒油，中小火煎至两面金黄。'
    ],
    link: 'https://www.douguo.com/cookbook/2501602.html?f=www',
    linkText: '图文'
  },
  {
    title: '鸡蛋饼',
    content: [
      '材料：面粉、鸡蛋、葱、盐、胡椒粉',
      '步骤：',
      '1.鸡蛋、面粉、水、盐、胡椒粉、葱花一并打散。',
      '2.热锅，倒油，中小火煎至两面金黄。'
    ],
    link: 'https://www.douguo.com/cookbook/3066972.html',
    linkText: '图文'
  },
  {
    title: '西红柿厚蛋烧',
    content: [
      '材料：西红柿、鸡蛋、盐、白砂糖、面粉、葱',
      '步骤：',
      '1.西红柿洗净，去皮，切粒，放白砂糖腌制2分钟。',
      '2.鸡蛋打散，把西红柿粒、面粉、盐、香葱一起倒入鸡蛋液中，拌均。',
      '3.热锅，倒油，倒入西红柿鸡蛋液，中小火煎至两面金黄.'
    ],
    link: 'https://m.douguo.com/cookbook/1500131.html?f=www',
    linkText: '图文'
  },
  {
    title: '可乐鸡翅',
    content: [
      '材料：鸡翅、可乐、姜、老抽、盐、八角',
      '步骤：',
      '1.鸡翅焯水备用。',
      '2.热锅放油，小火煎至表面金黄。',
      '3.把姜片、八角放入锅中，煸炒出香味。',
      '4.可乐倒入，再加少许老抽、盐提味，大火烧开后转小火炖15分钟。',
      '5.转大火收汁。收汁的时候要不停的用铲子翻动，直至鸡翅表面裹上焦糖色，锅中有明油渗出即可。'
    ],
    link: 'https://www.douguo.com/cookbook/1181198.html',
    linkText: '图文'
  },
  {
    title: '辣椒炒蛋',
    content: [
      '材料：辣椒、鸡蛋、大蒜、盐、生抽',
      '步骤：',
      '1.热锅放油，鸡蛋炒熟备用。',
      '2.倒油，放大蒜，接着放辣椒、少许盐煸炒。',
      '3.把炒熟鸡蛋放入过来，少许盐，翻炒均匀即可。',
    ],
    link: 'https://www.douguo.com/cookbook/3208813.html',
    linkText: '图文'
  }
]
</script>