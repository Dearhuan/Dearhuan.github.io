import fs from 'fs'
import axios from 'axios'

import {
  rootPath,
  mdPath,
  base,
  jsonFilePath,
  SINA_URL,
  Exclude_Countrys,
  readFileList,
  othersNcovCategory,
  writeOthersNcovCategory
} from './configs/ncov'

import type { WorldlistItem, NcovRes } from './configs/ncov/types'

/**
 * @func getNcovText
 * @param {string} url
 * @returns {object}
 * @desc 获取疫情数据
 */
const getNcovText = async (url: string): Promise<NcovRes> => {
  const res = await axios.get(url)
  // console.log(res.data)
  const r1 = res.data.replace('try{sinajp_15844213244528328543098388435(', '')
  const r2 = r1.replace(');}catch(e){};', '')
  const r3 = JSON.parse(r2)
  const { times, total, worldlist } = r3.result
  return {
    times,
    total,
    worldlist
  }
}

/**
 * @func writeMdWithContent
 * @param {string} timeStr
 * @param {string} content
 * @desc 写入md文件并更新路由
 */
const writeMdWithContent = (timeStr: string, content: string) => {
  const writePath = `${rootPath}/docs/others/${timeStr}.md`
  fs.writeFileSync(writePath, content, 'utf-8')
  console.log(`${timeStr}.md created.`)

  setTimeout(() => {
    const filesList = readFileList(mdPath)

    console.log(mdPath)

    console.log(filesList)

    console.log('读取文件目录生成路由---')

    const writeFileList = (path: string) => {
      try {
        const obj = [
          {
            text: '历史记录',
            link: `/${base}/${othersNcovCategory}.md`
          }
        ]
        fs.writeFileSync(path, JSON.stringify(obj))
        console.log('写入路由到JSON文件---')
      } catch (error) {
        console.log(error)
      }
    }

    writeFileList(jsonFilePath)
    writeOthersNcovCategory(filesList)
  }, 500)
}

const createContent = async () => {
  const res = await getNcovText(SINA_URL)
  const { times, total, worldlist } = res
  // console.log(res)
  const certain = total['certain'] // 累计确诊
  const die = total['die'] // 死亡
  const recure = total['recure'] // 治愈
  const certain_inc = total['certain_inc'] // 确诊增加
  const die_inc = total['die_inc'] // 死亡增加
  const recure_inc = total['recure_inc'] // 治愈增加
  const worldlistArr = worldlist
    .sort((a: WorldlistItem, b: WorldlistItem) => {
      return b.conNum - a.conNum
    })
    .filter((item: WorldlistItem) => {
      return !Exclude_Countrys.includes(item.name)
    })
    .reverse()
  console.log(worldlistArr.length)
  // console.log(times)
  const year = new Date().getFullYear()
  const month = times.slice(2, 4)
  const day = times.slice(5, 7)
  const hour = times.slice(8, 10)
  const minute = times.slice(11, 13)
  const timeStr = `${year}${month}${day}-${hour}${minute}` // '20220904-0720'
  const title = `${year}年${month}月${day}日 ${hour}:${minute}`

  const countrys: string[] = []
  const conadds: number[] = []
  const conNums: number[] = []
  const deathadds: number[] = []
  const cureNums: number[] = []
  const deathNums: number[] = []

  const countrys_second: string[] = []
  const conadds_second: number[] = []
  const conNums_second: number[] = []
  const deathadds_second: number[] = []
  const cureNums_second: number[] = []
  const deathNums_second: number[] = []

  const countrys_third: string[] = []
  const conadds_third: number[] = []
  const conNums_third: number[] = []
  const deathadds_third: number[] = []
  const cureNums_third: number[] = []
  const deathNums_third: number[] = []

  const countrys_last: string[] = []
  const conadds_last: number[] = []
  const conNums_last: number[] = []
  const deathadds_last: number[] = []
  const cureNums_last: number[] = []
  const deathNums_last: number[] = []

  // console.log(worldlistArr.slice(189))
  worldlistArr.slice(189).forEach((item: WorldlistItem) => {
    countrys.push(item['name'])
    conadds.push(item['conadd'])
    conNums.push(item['conNum'])
    deathadds.push(item['deathadd'])
    cureNums.push(item['cureNum'])
    deathNums.push(item['deathNum'])
  })
  worldlistArr.slice(179, 189).forEach((item: WorldlistItem) => {
    countrys_second.push(item['name'])
    conadds_second.push(item['conadd'])
    conNums_second.push(item['conNum'])
    deathadds_second.push(item['deathadd'])
    cureNums_second.push(item['cureNum'])
    deathNums_second.push(item['deathNum'])
  })
  worldlistArr.slice(169, 179).forEach((item: WorldlistItem) => {
    countrys_third.push(item['name'])
    conadds_third.push(item['conadd'])
    conNums_third.push(item['conNum'])
    deathadds_third.push(item['deathadd'])
    cureNums_third.push(item['cureNum'])
    deathNums_third.push(item['deathNum'])
  })
  worldlistArr.slice(0, 169).forEach((item: WorldlistItem) => {
    countrys_last.push(item['name'])
    conadds_last.push(item['conadd'])
    conNums_last.push(item['conNum'])
    deathadds_last.push(item['deathadd'])
    cureNums_last.push(item['cureNum'])
    deathNums_last.push(item['deathNum'])
  })

  const content = `
# ${title}
感染国家总数：${worldlist.length}
\`\`\`
累计确诊： ${certain} 较昨日：${certain_inc}
累计死亡：   ${die} 较昨日：${die_inc}
累计治愈： ${recure} 较昨日：${recure_inc}
\`\`\`
<div id="main" style="width:100%;height:800px;margin-bottom:10px;"></div>
<div id="second" style="width:100%;height:1000px;margin-bottom:10px;"></div>
<div id="third" style="width:100%;height:1000px;margin-bottom:10px;"></div>
<div id="last" style="width:100%;height:3000px;"></div>

<script>
import * as echarts from "echarts";
export default {
  mounted () {
    this.chart = echarts.init(document.getElementById("main"), "dark")
    this.secondChart = echarts.init(document.getElementById("second"), "dark")
    this.thirdChart = echarts.init(document.getElementById("third"), "dark")
    this.lastChart = echarts.init(document.getElementById("last"), "dark")
    var option = {
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: {},
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: { type: "value" },
      yAxis: {
        type: "category", data: [${countrys
          .map((x) => {
            return `"${x}",`
          })
          .join('')}]
      },
      series: [
        { name: "新增确诊", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${conadds
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计确诊", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${conNums
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "新增死亡", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${deathadds
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计死亡", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${deathNums
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计治愈", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${cureNums
          .map((x) => {
            return `${x},`
          })
          .join('')}] },]
    }
    this.chart.setOption(option);
    var secondOption = {
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: {},
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: { type: "value" },
      yAxis: {
        type: "category", data: [${countrys_second
          .map((x) => {
            return `"${x}",`
          })
          .join('')}]
      },
      series: [
        { name: "新增确诊", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${conadds_second
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计确诊", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${conNums_second
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "新增死亡", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${deathadds_second
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计死亡", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${deathNums_second
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计治愈", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${cureNums_second
          .map((x) => {
            return `${x},`
          })
          .join('')}] },]
    }
    this.secondChart.setOption(secondOption);
    var thirdOption = {
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: {},
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: { type: "value" },
      yAxis: {
        type: "category", data: [${countrys_third
          .map((x) => {
            return `"${x}",`
          })
          .join('')}]
      },
      series: [
        { name: "新增确诊", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${conadds_third
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计确诊", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${conNums_third
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "新增死亡", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${deathadds_third
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计死亡", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${deathNums_third
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计治愈", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${cureNums_third
          .map((x) => {
            return `${x},`
          })
          .join('')}] },]
    }
    this.thirdChart.setOption(thirdOption);
    var lastOption = {
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: {},
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: { type: "value" },
      yAxis: {
        type: "category", data: [${countrys_last
          .map((x) => {
            return `"${x.replace(/\s*/g, '')}",`
          })
          .join('')}]
      },
      series: [
        { name: "新增确诊", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${conadds_last
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计确诊", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${conNums_last
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "新增死亡", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${deathadds_last
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计死亡", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${deathNums_last
          .map((x) => {
            return `${x},`
          })
          .join('')}] }, 
        { name: "累计治愈", type: "bar", stack: "total", label: { show: true }, emphasis: { focus: "series" }, data: [${cureNums_last
          .map((x) => {
            return `${x},`
          })
          .join('')}] },]
    }
    this.lastChart.setOption(lastOption);

    window.onresize = () => {
      this.chart.resize()
      this.secondChart.resize()
      this.thirdChart.resize()
      this.lastChart.resize()
    }
  }
};
</script>

|国家|新增确诊|累计确诊|新增死亡|累计死亡|累计治愈|
|:--:|---:|---:|---:|---:|---:|
${worldlistArr
  .reverse()
  .map((item: WorldlistItem) => {
    return `|${item.name}|${item.conadd}|${item.conNum}|${item.deathadd}|${item.deathNum}|${item.cureNum}|\n`
  })
  .join('')}
`
  writeMdWithContent(timeStr, content)
}

createContent()
