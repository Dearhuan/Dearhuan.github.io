import fs from 'fs'
import path from 'path'

export const rootPath = path.resolve(__dirname, '../../../')

export const mdPath = rootPath + '/docs/others'

export const base = 'others'

export const othersNcovCategory = 'othersNcovCategory'

export const jsonFilePath = rootPath + '/docs/.vuepress/public/json/others.json'

export const SINA_URL =
  'https://gwpre.sina.cn/ncp/foreign?_=1584421324452&callback=sinajp_15844213244528328543098388435'

export const Exclude_Countrys = ['中国']

/**
 * @func readFileList
 * @param {string} path
 * @returns {object}
 * @desc 读取指定目录下的md文件
 */
export const readFileList = (path: string) => {
  const filesList = []
  const files = fs.readdirSync(path)
  for (const name of files) {
    name.endsWith('.md') &&
      name.startsWith('20') &&
      filesList.push({
        text: name.split('.md')[0],
        link: `/${name}`
      })
  }
  return filesList
}

export const writeOthersNcovCategory = (
  fileList: {
    text: string
    link: string
  }[]
) => {
  const writePath = `${mdPath}/${othersNcovCategory}.md`
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
      )}"},\n`
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
  max-height: 750px;
  overflow: scroll;
}
.el-button + .el-button {
  margin-left: 0;
}
</style>
`
  fs.writeFileSync(writePath, html)
  console.log('写入othersNcovCategory...')
}
