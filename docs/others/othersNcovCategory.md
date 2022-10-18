---
prev: /notes/ts-recursive-reuse.html
next: 
  text: '国内疫情数据'
  link: /chinaNcovs/zhNcovCategroy.html
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

const title = ref('海外疫情数据记录')

const linkList = ref([])

linkList.value = [{"title": "20220819-1506","link": "./20220819-1506.html"},{"title": "20220822-0742","link": "./20220822-0742.html"},{"title": "20220825-1046","link": "./20220825-1046.html"},{"title": "20220826-0714","link": "./20220826-0714.html"},{"title": "20220827-0751","link": "./20220827-0751.html"},{"title": "20220828-0718","link": "./20220828-0718.html"},{"title": "20220829-1909","link": "./20220829-1909.html"},{"title": "20220830-1950","link": "./20220830-1950.html"},{"title": "20220901-0712","link": "./20220901-0712.html"},{"title": "20220902-1004","link": "./20220902-1004.html"},{"title": "20220903-0718","link": "./20220903-0718.html"},{"title": "20220904-0720","link": "./20220904-0720.html"},{"title": "20220905-0708","link": "./20220905-0708.html"},{"title": "20220906-0711","link": "./20220906-0711.html"},{"title": "20220907-0747","link": "./20220907-0747.html"},{"title": "20220908-0722","link": "./20220908-0722.html"},{"title": "20220909-0000","link": "./20220909-0000.html"},{"title": "20220910-0715","link": "./20220910-0715.html"},{"title": "20220911-0733","link": "./20220911-0733.html"},{"title": "20220912-1020","link": "./20220912-1020.html"},{"title": "20220913-1001","link": "./20220913-1001.html"},{"title": "20220914-0939","link": "./20220914-0939.html"},{"title": "20220915-0719","link": "./20220915-0719.html"},{"title": "20220916-0722","link": "./20220916-0722.html"},{"title": "20220917-0720","link": "./20220917-0720.html"},{"title": "20220918-0721","link": "./20220918-0721.html"},{"title": "20220919-0912","link": "./20220919-0912.html"},{"title": "20220920-0721","link": "./20220920-0721.html"},{"title": "20220921-0722","link": "./20220921-0722.html"},{"title": "20220922-0723","link": "./20220922-0723.html"},{"title": "20220923-0723","link": "./20220923-0723.html"},{"title": "20220924-1027","link": "./20220924-1027.html"},{"title": "20220925-1022","link": "./20220925-1022.html"},{"title": "20220926-0754","link": "./20220926-0754.html"},{"title": "20220927-0723","link": "./20220927-0723.html"},{"title": "20220927-1454","link": "./20220927-1454.html"},{"title": "20220928-1037","link": "./20220928-1037.html"},{"title": "20220929-0722","link": "./20220929-0722.html"},{"title": "20220930-1037","link": "./20220930-1037.html"},{"title": "20220930-1457","link": "./20220930-1457.html"},{"title": "20221001-0959","link": "./20221001-0959.html"},{"title": "20221002-0958","link": "./20221002-0958.html"},{"title": "20221003-0721","link": "./20221003-0721.html"},{"title": "20221004-0723","link": "./20221004-0723.html"},{"title": "20221005-0719","link": "./20221005-0719.html"},{"title": "20221006-0712","link": "./20221006-0712.html"},{"title": "20221007-0716","link": "./20221007-0716.html"},{"title": "20221008-0941","link": "./20221008-0941.html"},{"title": "20221009-1031","link": "./20221009-1031.html"},{"title": "20221010-0726","link": "./20221010-0726.html"},{"title": "20221011-1014","link": "./20221011-1014.html"},{"title": "20221012-0728","link": "./20221012-0728.html"},{"title": "20221013-0737","link": "./20221013-0737.html"},{"title": "20221014-0943","link": "./20221014-0943.html"},{"title": "20221015-0944","link": "./20221015-0944.html"},{"title": "20221016-1026","link": "./20221016-1026.html"},{"title": "20221017-0726","link": "./20221017-0726.html"},{"title": "20221018-0725","link": "./20221018-0725.html"},]

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
