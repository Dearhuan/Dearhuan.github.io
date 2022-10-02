---
prev: 
  text: '海外疫情数据'
  link: /others/othersNcovCategory.html
next: 
---

<div>
  <h3>{{ title }}</h3>
  <div class="btn-box">
    <my-button v-for="(item, i) in linkList"
               :key="i"
               :type="i % 2 == 0 ? 'primary' : 'danger'"
               @click="handleClick(item.link)">{{ item.title }}</my-button>
  </div>
</div>

<script setup>
import { ref } from 'vue'

const title = ref('国内疫情数据记录')

const linkList = ref([])

linkList.value = [{"title": "20220904-091108","link": "./20220904-091108.html"},{"title": "20220905-000059","link": "./20220905-000059.html"},{"title": "20220905-091352","link": "./20220905-091352.html"},{"title": "20220906-090829","link": "./20220906-090829.html"},{"title": "20220907-090633","link": "./20220907-090633.html"},{"title": "20220908-091906","link": "./20220908-091906.html"},{"title": "20220909-090908","link": "./20220909-090908.html"},{"title": "20220910-091052","link": "./20220910-091052.html"},{"title": "20220911-091102","link": "./20220911-091102.html"},{"title": "20220912-092342","link": "./20220912-092342.html"},{"title": "20220913-091603","link": "./20220913-091603.html"},{"title": "20220914-090904","link": "./20220914-090904.html"},{"title": "20220915-090854","link": "./20220915-090854.html"},{"title": "20220916-091035","link": "./20220916-091035.html"},{"title": "20220917-091032","link": "./20220917-091032.html"},{"title": "20220918-090835","link": "./20220918-090835.html"},{"title": "20220919-093110","link": "./20220919-093110.html"},{"title": "20220920-091533","link": "./20220920-091533.html"},{"title": "20220921-091520","link": "./20220921-091520.html"},{"title": "20220922-091139","link": "./20220922-091139.html"},{"title": "20220923-091036","link": "./20220923-091036.html"},{"title": "20220924-091126","link": "./20220924-091126.html"},{"title": "20220925-093007","link": "./20220925-093007.html"},{"title": "20220926-091329","link": "./20220926-091329.html"},{"title": "20220927-091524","link": "./20220927-091524.html"},{"title": "20220928-091115","link": "./20220928-091115.html"},{"title": "20220929-091004","link": "./20220929-091004.html"},{"title": "20220930-090942","link": "./20220930-090942.html"},{"title": "20221001-091755","link": "./20221001-091755.html"},{"title": "20221002-091605","link": "./20221002-091605.html"},]

const handleClick = (link) => {
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = link
  a.rel = 'external nofollow'
  a.target = '_blank'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

<style lang="scss" scoped>
.btn-box {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.el-button + .el-button {
  margin-left: 0;
}
</style>
