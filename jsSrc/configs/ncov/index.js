'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.writeOthersNcovCategory =
  exports.readFileList =
  exports.Exclude_Countrys =
  exports.SINA_URL =
  exports.jsonFilePath =
  exports.othersNcovCategory =
  exports.base =
  exports.mdPath =
  exports.rootPath =
    void 0
const fs_1 = __importDefault(require('fs'))
const path_1 = __importDefault(require('path'))
exports.rootPath = path_1.default.resolve(__dirname, '../../../')
exports.mdPath = exports.rootPath + '/docs/others'
exports.base = 'others'
exports.othersNcovCategory = 'othersNcovCategory'
exports.jsonFilePath =
  exports.rootPath + '/docs/.vuepress/public/json/others.json'
exports.SINA_URL =
  'https://gwpre.sina.cn/ncp/foreign?_=1584421324452&callback=sinajp_15844213244528328543098388435'
exports.Exclude_Countrys = ['中国']
/**
 * @func readFileList
 * @param {string} path
 * @returns {object}
 * @desc 读取指定目录下的md文件
 */
const readFileList = (path) => {
  const filesList = []
  const files = fs_1.default.readdirSync(path)
  for (const name of files) {
    name.indexOf('.md') > -1 &&
      name.indexOf('20') > -1 &&
      filesList.push({
        text: name.split('.md')[0],
        link: `/${name}`
      })
  }
  return filesList
}
exports.readFileList = readFileList
const writeOthersNcovCategory = (fileList) => {
  const writePath = `${exports.mdPath}/${exports.othersNcovCategory}.md`
  const html = `---
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

linkList.value = [${fileList
    .map((x) => {
      return `{"title": "${x.text}","link": ".${x.link.replace(
        'md',
        'html'
      )}"},`
    })
    .join('')}]

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
`
  fs_1.default.writeFileSync(writePath, html)
  console.log('写入othersNcovCategory...')
}
exports.writeOthersNcovCategory = writeOthersNcovCategory
