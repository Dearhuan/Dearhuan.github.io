//获取指定目录下的所有文件名称
const fs = require("fs/promises")
const { resolve } = require('path')

console.log('__dirname : ' + __dirname)

const DOCS = '\\docs'
const DIR = __dirname.replace('\\','\\\\') + DOCS
const base = "others"

//将指定目录下的文件生成obj
async function getObj(dir){
    //获取指定目录下的所有文件
    let list = await fs.readdir(dir)
    //生成对应的obj
    let array1 = []//存放原始的配置对象
    for (let name of list) {
      name.indexOf('.md' > -1) && array1.push(
          {
            text:name,
            link: `/${base}/${name}`
          }
        )
    }
    return array1
}

// 写入文件
const storeData = (data,path) => {
  try {
    fs.writeFile(path, JSON.stringify(data))
  } catch (error) { 
    console.error(error)
  }
}

async function my(path,arrays){
    // console.log('外',path)
    //获取指定目录下的所有文件(对象形式)
    let array1 = await getObj(path)
    // console.log(array1)
    arrays.push(...array1)
}


(async ()=>{
    let path = DIR+"\\"+base
    let arrays = []
    await my(path,arrays)
    console.log(arrays)

    const jsonPath = `${__dirname.replace('\\','\\\\')}\\docs\\.vuepress\\public\\json\\others.json`
    storeData(arrays,jsonPath)
})()