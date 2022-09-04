const fs = require('fs')
const axios = require("axios");

const GuangDongProvinceCode = '440000'
const BASE_URL = 'https://wechat.wecity.qq.com/api/'
const SERVICE = 'THPneumoniaDataService'
const OUTER_SERVICE = 'THPneumoniaOuterService'
const USERID = '830075f3162e41c89a790c70041cd031'

const GetChinaRealTimeInfoURL = `${BASE_URL}${SERVICE}/getChinaRealTimeInfo`
const GetProvinceInfoByCode = `${BASE_URL}${SERVICE}/getProvinceInfoByCode`
const GetCityInfoByProvCode = `${BASE_URL}${SERVICE}/getCityInfoByProvCode`
const GetTopicContent = `${BASE_URL}${OUTER_SERVICE}/getTopicContent`

const mdPath = __dirname + '/docs/chinaNcovs'
const base = "chinaNcovs"
const jsonFilePath = __dirname + '/docs/.vuepress/public/json/chinaRoutes.json'

/**
* @func readFileList
* @param {string} path
* @returns {object}
* @desc 读取指定目录下的md文件
*/
const readFileList = (path) => {
  let filesList = []
  const files = fs.readdirSync(path);
  for (let name of files) {
    name.indexOf('.md') > -1 && filesList.push(
        {
          text:name,
          link: `/${base}/${name}`
        }
      )
  }
  return filesList;
}

const getApiData = async (url, params) => {
  const { provinceCode, func } = params
  let res = await axios.post(
    url, 
    {
      args: {
        req: provinceCode ? {
          provinceCode
        } : {}
      },
      service: SERVICE,
      func,
      context: {
        userId: USERID
      }
    })
  return res.data
}

/**
* @func getChinaRealTimeInfo
* @param {string} url
* @returns {object}
* @desc 获取中国疫情整体数据
*/
const getChinaRealTimeInfo = async (url) => {
  let res = await axios.post(
    url, 
    {
      args: {
        req: {}
      },
      service: 'THPneumoniaDataService',
      func: 'getChinaRealTimeInfo',
      context: {
        userId: '830075f3162e41c89a790c70041cd031'
      }
    })
  return res.data
}

/**
* @func getProvinceInfoByCode
* @param {string} provinceCode
* @returns {object}
* @desc 根据provinceCode获取指定省份疫情信息
*/
const getProvinceInfoByCode = async (url, provinceCode) => {
  let res = await axios.post(
    url, 
    {
      args: {
        req: {
          provinceCode
        }
      },
      service: 'THPneumoniaDataService',
      func: 'getProvinceInfoByCode',
      context: {
        userId: '830075f3162e41c89a790c70041cd031'
      }
    })
  return res.data
}

/**
* @func getCityInfoByProvCode
* @param {string} provinceCode
* @returns {object}
* @desc 根据provinceCode获取指定省份疫情信息列表
*/
const getCityInfoByProvCode = async (url, provinceCode) => {
  let res = await axios.post(
    url, 
    {
      args: {
        req: {
          provinceCode
        }
      },
      service: 'THPneumoniaDataService',
      func: 'getCityInfoByProvCode',
      context: {
        userId: '830075f3162e41c89a790c70041cd031'
      }
    })
  return res.data
}

/**
* @func getTopicContent
* @param {string} provinceCode
* @returns {object}
* @desc 根据provinceCode获取指定省份疫情热点动态
*/
const getTopicContent = async (url, provinceCode) => {
  let res = await axios.post(
    url, 
    {
      args: {
        req: {
          areaCode: provinceCode,
          hotnewsReq: {
            limit: 10,
            locationCode: provinceCode,
            offset: 0,
            reqType: 1,
            tab: 'shishitongbao'
          },
          queryList: [
            {}
          ]
        }
      },
      service: 'THPneumoniaOuterService',
      func: 'getTopicContent',
      context: {
        userId: '830075f3162e41c89a790c70041cd031'
      }
    })
  return res.data
}

const joinWithPlus = (number) => {
  return number > 0 ? '+' + number : number
}

/**
* @func writeMdWithContent
* @param {string} timeStr
* @param {string} content
* @desc 写入md文件并更新路由
*/
const writeMdWithContent = (timeStr, content) => {
  const path = `./docs/chinaNcovs/${timeStr}.md`
  fs.writeFileSync(path, content, 'utf-8')
  console.log(`${timeStr}.md created.`)

  setTimeout(() => {
    let filesList = readFileList(mdPath)
  
    console.log(mdPath)
    
    console.log(filesList)
    
    console.log('读取文件目录生成路由---')
    
    const writeFileList = (path, data) => {
      try {
        fs.writeFileSync(path, JSON.stringify(data))
        console.log('写入路由到JSON文件---')
      } catch (error) {
        console.log(error)
      }
    }
    
    writeFileList(jsonFilePath, filesList)
  }, 500);
}

(async()=>{
  let res = await getChinaRealTimeInfo(GetChinaRealTimeInfoURL)

  const { 
    chinaTotal, 
    chinaDayModify, 
    recentTime, // 更新时间
    dataFrom // 数据来源
  } = res.args.rsp
  const { 
    localConfirmAdd, // 本土新增确诊
    noinfect, // 新增无症状
    importDesc, // 新增境外输入
    heal // 新增治愈
  } = chinaDayModify
  const { 
    localNowConfirm, // 本土现有确诊 
    noinfectDesc, // 现有无症状
    nowImport, // 现有境外输入
    confirm // 累计确诊
  } = chinaTotal

  let res_province = await getProvinceInfoByCode(GetProvinceInfoByCode, GuangDongProvinceCode)
  const { provinceInfo } = res_province.args.rsp
  const {
    area, // 地区
    localAddPctDesc, // 描述
    localAdd, // 本土新增确诊
    asymptomAdd, // 本土新增无症状
    importAdd, // 新增境外输入
    lastImportAddTotal, // 本土近7日确诊
    updateTime,
    riskLevelNum
  } = provinceInfo

  let res_cityList = await getCityInfoByProvCode(GetCityInfoByProvCode, GuangDongProvinceCode)
  const { cityInfo } = res_cityList.args.rsp

  let res_news = await getTopicContent(GetTopicContent, GuangDongProvinceCode)
  const { hotnewsRsp } = res_news.args.rsp
  const { contents } = hotnewsRsp

  const content = `
# 全国疫情整体情况
### 截至${recentTime} ${dataFrom}

::: tip
本土新增确诊: 昨日+${localConfirmAdd} 新增无症状: 昨日+${noinfect} 新增境外输入: 昨日+${importDesc} 新增治愈: 昨日+${heal}\n
本土现有确诊: ${localNowConfirm} 现有无症状: ${noinfectDesc} 现有境外输入: ${nowImport} 累计确诊: ${confirm}
:::

## ${area}省疫情实时动态
### 截至${updateTime} ${dataFrom}

::: tip ${localAddPctDesc}
本土新增确诊: 昨日+${localAdd} 本土新增无症状: 昨日+${asymptomAdd} 新增境外输入: 昨日+${importAdd} 本土近7日确诊: +${lastImportAddTotal}
:::

## ${area}省各地区疫情情况

::: danger 中高风险地区数量
${riskLevelNum}个中高风险地区
:::

|地区|本土新增确诊|本土新增无症状|本土近7日确诊|中高风险地区|
|:--:|---:|---:|---:|---:|
${cityInfo.map(item=>{
  return `|${item.city}|${joinWithPlus(item.localAdd)}|${joinWithPlus(item.asymptomAdd)}|${joinWithPlus(item.localAddTotal)}|${joinWithPlus(item.riskLevelNum)}|\n`
}).join('')}

${contents.length > 0 ? `## ${area}疫情热点动态` : ''}

${contents.map(item=>{
  return `
### ${item.publicTime.slice(5)}
::: tip ${item.title}
${item.desc}\n
${item.from}\n
[阅读全文](${item.jumpLink.url})
:::
  `
}).join('')}
  `

  const year = recentTime.slice(0,4)
  const month = recentTime.slice(5,7)
  const day = recentTime.slice(8,10)
  const hour = recentTime.slice(11,13)
  const minute = recentTime.slice(14,16)
  const misc = recentTime.slice(17,19)

  const timeStr = `${year}${month}${day}-${hour}${minute}${misc}`

  writeMdWithContent(timeStr, content)
})()