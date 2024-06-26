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
               @click="handleClick(item.link)">{{ item.title }}</my-button>
  </div>
</div>

<script setup>
import { ref } from 'vue'

const title = ref('海外疫情数据记录')

const linkList = ref([])

linkList.value = [{"title": "20220819-1506","link": "./20220819-1506.html"},
{"title": "20220822-0742","link": "./20220822-0742.html"},
{"title": "20220825-1046","link": "./20220825-1046.html"},
{"title": "20220826-0714","link": "./20220826-0714.html"},
{"title": "20220827-0751","link": "./20220827-0751.html"},
{"title": "20220828-0718","link": "./20220828-0718.html"},
{"title": "20220829-1909","link": "./20220829-1909.html"},
{"title": "20220830-1950","link": "./20220830-1950.html"},
{"title": "20220901-0712","link": "./20220901-0712.html"},
{"title": "20220902-1004","link": "./20220902-1004.html"},
{"title": "20220903-0718","link": "./20220903-0718.html"},
{"title": "20220904-0720","link": "./20220904-0720.html"},
{"title": "20220905-0708","link": "./20220905-0708.html"},
{"title": "20220906-0711","link": "./20220906-0711.html"},
{"title": "20220907-0747","link": "./20220907-0747.html"},
{"title": "20220908-0722","link": "./20220908-0722.html"},
{"title": "20220909-0000","link": "./20220909-0000.html"},
{"title": "20220910-0715","link": "./20220910-0715.html"},
{"title": "20220911-0733","link": "./20220911-0733.html"},
{"title": "20220912-1020","link": "./20220912-1020.html"},
{"title": "20220913-1001","link": "./20220913-1001.html"},
{"title": "20220914-0939","link": "./20220914-0939.html"},
{"title": "20220915-0719","link": "./20220915-0719.html"},
{"title": "20220916-0722","link": "./20220916-0722.html"},
{"title": "20220917-0720","link": "./20220917-0720.html"},
{"title": "20220918-0721","link": "./20220918-0721.html"},
{"title": "20220919-0912","link": "./20220919-0912.html"},
{"title": "20220920-0721","link": "./20220920-0721.html"},
{"title": "20220921-0722","link": "./20220921-0722.html"},
{"title": "20220922-0723","link": "./20220922-0723.html"},
{"title": "20220923-0723","link": "./20220923-0723.html"},
{"title": "20220924-1027","link": "./20220924-1027.html"},
{"title": "20220925-1022","link": "./20220925-1022.html"},
{"title": "20220926-0754","link": "./20220926-0754.html"},
{"title": "20220927-0723","link": "./20220927-0723.html"},
{"title": "20220927-1454","link": "./20220927-1454.html"},
{"title": "20220928-1037","link": "./20220928-1037.html"},
{"title": "20220929-0722","link": "./20220929-0722.html"},
{"title": "20220930-1037","link": "./20220930-1037.html"},
{"title": "20220930-1457","link": "./20220930-1457.html"},
{"title": "20221001-0959","link": "./20221001-0959.html"},
{"title": "20221002-0958","link": "./20221002-0958.html"},
{"title": "20221003-0721","link": "./20221003-0721.html"},
{"title": "20221004-0723","link": "./20221004-0723.html"},
{"title": "20221005-0719","link": "./20221005-0719.html"},
{"title": "20221006-0712","link": "./20221006-0712.html"},
{"title": "20221007-0716","link": "./20221007-0716.html"},
{"title": "20221008-0941","link": "./20221008-0941.html"},
{"title": "20221009-1031","link": "./20221009-1031.html"},
{"title": "20221010-0726","link": "./20221010-0726.html"},
{"title": "20221011-1014","link": "./20221011-1014.html"},
{"title": "20221012-0728","link": "./20221012-0728.html"},
{"title": "20221013-0737","link": "./20221013-0737.html"},
{"title": "20221014-0943","link": "./20221014-0943.html"},
{"title": "20221015-0944","link": "./20221015-0944.html"},
{"title": "20221016-1026","link": "./20221016-1026.html"},
{"title": "20221017-0726","link": "./20221017-0726.html"},
{"title": "20221018-0725","link": "./20221018-0725.html"},
{"title": "20221019-0941","link": "./20221019-0941.html"},
{"title": "20221020-0714","link": "./20221020-0714.html"},
{"title": "20221021-0957","link": "./20221021-0957.html"},
{"title": "20221022-0948","link": "./20221022-0948.html"},
{"title": "20221023-1017","link": "./20221023-1017.html"},
{"title": "20221024-0723","link": "./20221024-0723.html"},
{"title": "20221025-1049","link": "./20221025-1049.html"},
{"title": "20221026-0957","link": "./20221026-0957.html"},
{"title": "20221027-1019","link": "./20221027-1019.html"},
{"title": "20221028-0941","link": "./20221028-0941.html"},
{"title": "20221029-0725","link": "./20221029-0725.html"},
{"title": "20221030-0723","link": "./20221030-0723.html"},
{"title": "20221031-1034","link": "./20221031-1034.html"},
{"title": "20221101-0856","link": "./20221101-0856.html"},
{"title": "20221102-1005","link": "./20221102-1005.html"},
{"title": "20221103-1003","link": "./20221103-1003.html"},
{"title": "20221104-0740","link": "./20221104-0740.html"},
{"title": "20221105-0725","link": "./20221105-0725.html"},
{"title": "20221106-0951","link": "./20221106-0951.html"},
{"title": "20221107-1011","link": "./20221107-1011.html"},
{"title": "20221108-0941","link": "./20221108-0941.html"},
{"title": "20221109-1002","link": "./20221109-1002.html"},
{"title": "20221110-0725","link": "./20221110-0725.html"},
{"title": "20221111-0927","link": "./20221111-0927.html"},
{"title": "20221112-0722","link": "./20221112-0722.html"},
{"title": "20221113-1001","link": "./20221113-1001.html"},
{"title": "20221114-0800","link": "./20221114-0800.html"},
{"title": "20221115-0953","link": "./20221115-0953.html"},
{"title": "20221116-0936","link": "./20221116-0936.html"},
{"title": "20221117-0735","link": "./20221117-0735.html"},
{"title": "20221118-0721","link": "./20221118-0721.html"},
{"title": "20221119-0712","link": "./20221119-0712.html"},
{"title": "20221120-0717","link": "./20221120-0717.html"},
{"title": "20221121-0658","link": "./20221121-0658.html"},
{"title": "20221122-0856","link": "./20221122-0856.html"},
{"title": "20221123-0938","link": "./20221123-0938.html"},
{"title": "20221124-0936","link": "./20221124-0936.html"},
{"title": "20221125-0953","link": "./20221125-0953.html"},
{"title": "20221126-0919","link": "./20221126-0919.html"},
{"title": "20221127-0732","link": "./20221127-0732.html"},
{"title": "20221128-0902","link": "./20221128-0902.html"},
{"title": "20221129-0923","link": "./20221129-0923.html"},
{"title": "20221130-0927","link": "./20221130-0927.html"},
{"title": "20221201-0721","link": "./20221201-0721.html"},
{"title": "20221202-0941","link": "./20221202-0941.html"},
{"title": "20221203-0749","link": "./20221203-0749.html"},
{"title": "20221204-0729","link": "./20221204-0729.html"},
{"title": "20221205-0835","link": "./20221205-0835.html"},
{"title": "20221206-0714","link": "./20221206-0714.html"},
{"title": "20221207-0930","link": "./20221207-0930.html"},
{"title": "20221208-0737","link": "./20221208-0737.html"},
{"title": "20221209-0834","link": "./20221209-0834.html"},
{"title": "20221210-0919","link": "./20221210-0919.html"},
{"title": "20221211-0000","link": "./20221211-0000.html"},
{"title": "20221212-0717","link": "./20221212-0717.html"},
{"title": "20221213-0714","link": "./20221213-0714.html"},
{"title": "20221214-0753","link": "./20221214-0753.html"},
{"title": "20221215-0721","link": "./20221215-0721.html"},
{"title": "20221216-0842","link": "./20221216-0842.html"},
{"title": "20221217-0903","link": "./20221217-0903.html"},
{"title": "20221218-0748","link": "./20221218-0748.html"},
{"title": "20221219-0858","link": "./20221219-0858.html"},
{"title": "20221220-0742","link": "./20221220-0742.html"},
{"title": "20221221-0833","link": "./20221221-0833.html"},
{"title": "20221222-0000","link": "./20221222-0000.html"},
]

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
$count: 123;
@function randomNum ($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}

@function randomColor () {
  @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.btn-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  button {
    color: #fff;
    flex-shrink: 0;
    border-radius: 30px;
  }
  @for $i from 1 to $count {
    button:nth-child(#{$i}) {
      width: #{randomNum(140, 120)}px;
      background: randomColor();
    }
  }
}
.btn-box:hover {
  button {
    opacity: 0;
  }
  @for $i from 1 to $count {
    button:nth-child(#{$i}) {
      animation: falldown .1s cubic-bezier(.43,.02,.64,1.5) #{50 * ($count - $i) + (random(50) - random(30))}ms forwards;
    }
  }
}
@keyframes falldown {
  0% {
      transform: translateY(-180px) scaleX(.1) scaleY(.3);
      opacity: 1;
  }
  20% {
      transform: translateY(-200px) scaleX(.6) scaleY(.3);
  }
  75% {
      transform: translateY(0) scaleX(.6) scaleY(.3);
  }
  100% {
      transform: translateY(0)  scaleX(1) scaleY(1);
      opacity: 1;
  }
}
.el-button + .el-button {
  margin-left: 0;
}
</style>
