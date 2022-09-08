'use strict'
//获取指定目录下的所有文件名称
// @ts-ignore
const fs = require('fs/promises')
console.log('__dirname : ' + __dirname)
const DOCS = '\\docs'
const DIR = __dirname.replace('\\', '\\\\') + DOCS
// @ts-ignore
const base = 'others'
//将指定目录下的文件生成obj
async function getObj(dir) {
  //获取指定目录下的所有文件
  const list = await fs.readdir(dir)
  //生成对应的obj
  const array1 = [] //存放原始的配置对象
  for (const name of list) {
    name.indexOf('.md') > -1 &&
      array1.push({
        text: name,
        link: `/${base}/${name}`
      })
  }
  return array1
}
// 写入文件
const storeData = (data, path) => {
  try {
    fs.writeFile(path, JSON.stringify(data))
  } catch (error) {
    console.error(error)
  }
}
async function my(path, arrays) {
  // console.log('外',path)
  //获取指定目录下的所有文件(对象形式)
  const array1 = await getObj(path)
  // console.log(array1)
  arrays.push(...array1)
}
;(async () => {
  const path = DIR + '\\' + base
  const arrays = []
  await my(path, arrays)
  console.log(arrays)
  const jsonPath = `${__dirname.replace(
    '\\',
    '\\\\'
  )}\\docs\\.vuepress\\public\\json\\others.json`
  storeData(arrays, jsonPath)
})()
