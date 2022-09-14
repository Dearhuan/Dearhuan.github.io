import fs from 'fs'
import path from 'path'

export const rootPath = path.resolve(__dirname, '../../../')

export const mdPath = rootPath + '/docs/others'

export const base = 'others'

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
      filesList.push({
        text: name.split('.md')[0],
        link: `/${base}/${name}`
      })
  }
  return filesList
}
