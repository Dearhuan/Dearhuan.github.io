<div v-for="(item, i) in linkList" :key="i">
    <h3>{{ item.title }}</h3>
    <div>
      <card :defaultValue="item.children"/>
    </div>
  </div>

  <script setup>
  import { ref } from 'vue'

  const linkList = ref([])

  linkList.value = [{text: 20220904-091108,link: ./chinaNcovs/20220904-091108.html},{text: 20220905-000059,link: ./chinaNcovs/20220905-000059.html},{text: 20220905-091352,link: ./chinaNcovs/20220905-091352.html},{text: 20220906-090829,link: ./chinaNcovs/20220906-090829.html},{text: 20220907-090633,link: ./chinaNcovs/20220907-090633.html},{text: 20220908-091906,link: ./chinaNcovs/20220908-091906.html},{text: 20220909-090908,link: ./chinaNcovs/20220909-090908.html},{text: 20220910-091052,link: ./chinaNcovs/20220910-091052.html},{text: 20220911-091102,link: ./chinaNcovs/20220911-091102.html},{text: 20220912-092342,link: ./chinaNcovs/20220912-092342.html},{text: 20220913-091603,link: ./chinaNcovs/20220913-091603.html},{text: 20220914-090904,link: ./chinaNcovs/20220914-090904.html},{text: 20220915-090854,link: ./chinaNcovs/20220915-090854.html},{text: 20220916-091035,link: ./chinaNcovs/20220916-091035.html},{text: 20220917-091032,link: ./chinaNcovs/20220917-091032.html},{text: 20220918-090835,link: ./chinaNcovs/20220918-090835.html},{text: 20220919-093110,link: ./chinaNcovs/20220919-093110.html},{text: 20220920-091533,link: ./chinaNcovs/20220920-091533.html},{text: 20220921-091520,link: ./chinaNcovs/20220921-091520.html},{text: 20220922-091139,link: ./chinaNcovs/20220922-091139.html},{text: 20220923-091036,link: ./chinaNcovs/20220923-091036.html},{text: 20220924-091126,link: ./chinaNcovs/20220924-091126.html},{text: 20220925-093007,link: ./chinaNcovs/20220925-093007.html},{text: 20220926-091329,link: ./chinaNcovs/20220926-091329.html},{text: 20220927-091524,link: ./chinaNcovs/20220927-091524.html},]
  </script>