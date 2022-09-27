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
    name.indexOf('.md') > -1 &&
      name.indexOf('.20') > -1 &&
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
  const html = `<div v-for="(item, i) in linkList" :key="i">
  <h3>{{ item.title }}</h3>
  <div>
    <card :defaultValue="item.children"/>
  </div>
</div>

<script setup>
import { ref } from 'vue'

const linkList = ref([])

linkList.value = [${`{
  "title": "海外疫情数据",
  "children": [${fileList
    .map((x) => {
      return `{"title": "${x.text}","link": ".${x.link.replace(
        'md',
        'html'
      )}"},`
    })
    .join('')}]
}`}]
</script>`
  fs.writeFileSync(writePath, html)
  console.log('写入othersNcovCategory...')
}
