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
    title: 'TypeScript笔记',
    children: [
      {
        "title": "TypeScript使用示例",
        "link": "./ts-demo.html"
      },
      {
        "title": "TypeScript基础类型",
        "link": "./ts-study-base.html"
      },
      {
        "title": "TypeScript断言",
        "link": "./ts-study-declare.html"
      },
      {
        "title": "TypeScript类型守卫",
        "link": "./ts-study-typeGuard.html"
      },
      {
        "title": "TypeScript联合类型和类型别名",
        "link": "./ts-study-unionType.html"
      },
      {
        "title": "TypeScript交叉类型",
        "link": "./ts-study-crossType.html"
      },
      {
        "title": "TypeScript函数",
        "link": "./ts-study-function.html"
      },
      {
        "title": "TypeScript数组和对象",
        "link": "./ts-study-array&object.html"
      },
      {
        "title": "TypeScript接口",
        "link": "./ts-study-interface.html"
      },
      {
        "title": "TypeScript类",
        "link": "./ts-study-class.html"
      },
      {
        "title": "TypeScript泛型",
        "link": "./ts-study-generic.html"
      },
      {
        "title": "TypeScript装饰器",
        "link": "./ts-study-decorators.html"
      },
      {
        "title": "TypeScript4.0新特性",
        "link": "./ts-study-4.html"
      },
      {
        "title": "TypeScript编译上下文",
        "link": "./ts-study-options.html"
      },
      {
        "title": "TypeScript开发辅助工具",
        "link": "./ts-study-tools.html"
      },
      {
        "title": "TypeScript工具泛型",
        "link": "./ts-generic.html"
      },
      {
        "title": "Ts封装Axios",
        "link": "./ts-axios.html"
      }
    ]
  }
]
</script>