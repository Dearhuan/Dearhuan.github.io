<div v-for="(item, i) in linkList" :key="i">
  <h3>{{ item.title }}</h3>
  <div>
    <card :defaultValue="item.children"/>
  </div>
</div>

<script setup>
import { ref } from 'vue'

const linkList = ref([])

linkList.value = [{
  "title": "海外疫情数据",
  "children": []
}]
</script>