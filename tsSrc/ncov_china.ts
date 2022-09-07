// @ts-ignore
const fs = require('fs')
// @ts-ignore
const path = require('path')
// @ts-ignore
const axios = require("axios");

const GuangDongProvinceCode = '440000'
const GuangZhouCityCode = '440100'
const BASE_URL = 'https://wechat.wecity.qq.com/api/'
const SERVICE = 'THPneumoniaDataService'
const OUTER_SERVICE = 'THPneumoniaOuterService'
const USERID = '830075f3162e41c89a790c70041cd031'

const GetChinaRealTimeInfoURL = `${BASE_URL}${SERVICE}/getChinaRealTimeInfo`
const GetProvinceInfoByCode = `${BASE_URL}${SERVICE}/getProvinceInfoByCode`
const GetCityInfoByProvCode = `${BASE_URL}${SERVICE}/getCityInfoByProvCode`
const GetProvinceInfoHisByCode = `${BASE_URL}${SERVICE}/getProvinceInfoHisByCode`
const GetCityInfoHisByCode = `${BASE_URL}${SERVICE}/getCityInfoHisByCode`
const GetTopicContent = `${BASE_URL}${OUTER_SERVICE}/getTopicContent`

interface ApiRequestParams {
  req: {
    provinceCode?: string,
    areaCode?: string,
    cityCode?: string,
    hotnewsReq?: {
      limit: number,
      locationCode: string,
      offset: number,
      reqType: number,
      tab: string
    },
    queryList?: object[]
  },
  service: string,
  func: string
}

type Result<T> = {
  code: number;
  msg: string;
  args: {
    rsp: T
  }
}

interface ChinaRealTimeInfo {
  chinaTotal: {
    localNowConfirm: number,
    noinfectDesc: number,
    nowImport: number,
    confirm: number,
  },
  chinaDayModify: {
    localConfirmAdd: number,
    noinfect: number,
    importDesc: string,
    heal: number,
  },
  recentTime: string,
  dataFrom: string,
}

interface ProvinceInfo {
  provinceInfo: {
    area: string
    localAddPctDesc: string
    localAdd: number
    asymptomAdd: number
    importAdd: number
    lastImportAddTotal: number
    updateTime: string
    riskLevelNum: number
  }
} 

interface CityRes {
  cityInfo: CityInfo[]
}

interface CityInfo {
  city: string,
  localAdd: number | string,
  asymptomAdd: number | string,
  localAddTotal: number | string,
  riskLevelNum: number | string
}

interface TrendInfoRes {
  modifyHistory: ModifyHistoryItem[],
  totalHistory: TotalHistoryItem[]
}

interface ModifyHistoryItem {
  asymptomAdd: number,
  importAdd: number,
  localAdd: number,
  day: string,
  date: string,
  confirm?: number
  dead?: number,
  heal?: number
}

interface TotalHistoryItem {
  confirm: number,
  dead: number,
  heal: number,
  date: string,
  day: string
}

interface CityTrendRes {
  modifyHistory: CityModifyHistoryItem[]
}

interface CityModifyHistoryItem {
  confirm: number,
  noinfect: string,
  day: string
}

interface ContentsRes {
  hotnewsRsp: {
    contents: ContentsInfo[]
  }
}

interface ContentsInfo {
  publicTime: string,
  title: string,
  desc: string,
  from: string,
  jumpLink: {
    url: string
  }
}

const URL_Object = {
  getChinaRealTimeInfo: {
    func: 'getChinaRealTimeInfo',
    service: SERVICE,
    url: GetChinaRealTimeInfoURL
  },
  getProvinceInfoByCode: {
    func: 'getProvinceInfoByCode',
    service: SERVICE,
    url: GetProvinceInfoByCode
  },
  getCityInfoByProvCode: {
    func: 'getCityInfoByProvCode',
    service: SERVICE,
    url: GetCityInfoByProvCode
  },
  getProvinceInfoHisByCode: {
    func: 'getProvinceInfoHisByCode',
    service: SERVICE,
    url: GetProvinceInfoHisByCode
  },
  getCityInfoHisByCode: {
    func: 'getCityInfoHisByCode',
    service: SERVICE,
    url: GetCityInfoHisByCode
  },
  getTopicContent: {
    func: 'getTopicContent',
    service: OUTER_SERVICE,
    url: GetTopicContent
  },
}
// @ts-ignore
const mdPath = __dirname + '/docs/chinaNcovs'
// @ts-ignore
const base = "chinaNcovs"
// @ts-ignore
const jsonFilePath = __dirname + '/docs/.vuepress/public/json/chinaRoutes.json'

/**
* @func readFileList
* @param {string} path
* @returns {object}
* @desc 读取指定目录下的md文件
*/
// @ts-ignore
const readFileList = (path: string) => {
  let filesList = []
  const files = fs.readdirSync(path);
  for (let name of files) {
    name.indexOf('.md') > -1 && filesList.push(
      {
        text: name,
        link: `/${base}/${name}`
      }
    )
  }
  return filesList;
}

/**
* @func getApiData
* @param {string} url
* @param {ApiRequestParams} params
* @returns {Promise<Result<T>>}
* @desc 接口统一处理
*/
const getApiData = async <T = any>(url: string, params: ApiRequestParams): Promise<Result<T>>=> {
  const { req, service, func } = params
  let res = await axios.post(
    url,
    {
      args: {
        req
      },
      service,
      func,
      context: {
        userId: USERID
      }
    })
  return res.data
}

const joinWithPlus = (number: number | string) => {
  return number > 0 ? '+' + number : number
}

const dealWithNumber = (number: number | string) => {
  return number > 0 ? number : 1
}

/**
* @func writeMdWithContent
* @param {string} timeStr
* @param {string} content
* @desc 写入md文件并更新路由
*/
// @ts-ignore
const writeMdWithContent = (timeStr: string, content: string) => {
  const rootPath = path.resolve(__dirname,'../../')
  const writePath = `${rootPath}/docs/chinaNcovs/${timeStr}.md`
  fs.writeFileSync(writePath, content, 'utf-8')
  console.log(`${timeStr}.md created.`)

  setTimeout(() => {
    let filesList = readFileList(mdPath)

    console.log(mdPath)

    console.log(filesList)

    console.log('读取文件目录生成路由---')

    const writeFileList = (path: string, data: {
      text: string,
      link: string
    }[]) => {
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

(async () => {
  let res = await getApiData<ChinaRealTimeInfo>(URL_Object['getChinaRealTimeInfo']['url'], {
    req: {},
    func: URL_Object['getChinaRealTimeInfo']['func'],
    service: URL_Object['getChinaRealTimeInfo']['service']
  })

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

  let res_province = await getApiData<ProvinceInfo>(URL_Object['getProvinceInfoByCode']['url'], {
    req: { provinceCode: GuangDongProvinceCode },
    func: URL_Object['getProvinceInfoByCode']['func'],
    service: URL_Object['getProvinceInfoByCode']['service']
  })
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

  let res_cityList = await getApiData<CityRes>(URL_Object['getCityInfoByProvCode']['url'], {
    req: { provinceCode: GuangDongProvinceCode },
    func: URL_Object['getCityInfoByProvCode']['func'],
    service: URL_Object['getCityInfoByProvCode']['service']
  })
  const { cityInfo } = res_cityList.args.rsp

  let res_trendInfo = await getApiData<TrendInfoRes>(URL_Object['getProvinceInfoHisByCode']['url'], {
    req: { provinceCode: GuangDongProvinceCode },
    func: URL_Object['getProvinceInfoHisByCode']['func'],
    service: URL_Object['getProvinceInfoHisByCode']['service']
  })

  const { modifyHistory, totalHistory } = res_trendInfo.args.rsp

  let res_cityTrendInfo = await getApiData<CityTrendRes>(URL_Object['getCityInfoHisByCode']['url'], {
    req: { cityCode: GuangZhouCityCode },
    func: URL_Object['getCityInfoHisByCode']['func'],
    service: URL_Object['getCityInfoHisByCode']['service']
  })

  const { modifyHistory: cityModifyHistory } = res_cityTrendInfo.args.rsp

  let res_news = await getApiData<ContentsRes>(URL_Object['getTopicContent']['url'], {
    req: {
      areaCode: GuangDongProvinceCode,
      hotnewsReq: {
        limit: 10,
        locationCode: GuangDongProvinceCode,
        offset: 0,
        reqType: 1,
        tab: 'shishitongbao'
      },
      queryList: [
        {}
      ]
    },
    func: URL_Object['getTopicContent']['func'],
    service: URL_Object['getTopicContent']['service']
  })
  const { hotnewsRsp } = res_news.args.rsp
  const { contents } = hotnewsRsp

  const content = `
# 全国疫情整体情况
### 截至${recentTime} ${dataFrom}

|地区|本土新增确诊|新增无症状|新增境外输入|新增治愈|
|:--:|---:|---:|---:|---:|
|全国|昨日+${localConfirmAdd}|昨日+${noinfect}|昨日+${importDesc}|昨日+${heal}|

|地区|本土现有确诊|现有无症状|现有境外输入|累计确诊|
|:--:|---:|---:|---:|---:|
|全国|${localNowConfirm}|${noinfectDesc}|${nowImport}|${confirm}|

<div id="fourth" style="width:100%;height:500px;margin-bottom:10px;"></div>

## ${area}省疫情实时动态
### 截至${updateTime} ${dataFrom}

::: tip ${localAddPctDesc}
:::

|地区|本土新增确诊|本土新增无症状|新增境外输入|本土近7日确诊|
|:--:|---:|---:|---:|---:|
|全国|昨日+${localAdd}|昨日+${asymptomAdd}|昨日+${importAdd}|昨日+${lastImportAddTotal}|

<div id="main" style="width:100%;height:500px;margin-bottom:10px;"></div>
<div id="second" style="width:100%;height:500px;margin-bottom:10px;"></div>
<div id="third" style="width:100%;height:500px;margin-bottom:10px;"></div>

<script>
import * as echarts from 'echarts'
export default {
  mounted () {
    this.chart = echarts.init(document.getElementById("main"), "dark")
    this.chartSecond = echarts.init(document.getElementById("second"), "dark")
    this.chartThird = echarts.init(document.getElementById("third"), "dark")
    this.chartFourth = echarts.init(document.getElementById("fourth"), "dark")

    const option = {
      title: {
        text: '${area}疫情新增趋势（人）'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['本土新增确诊', '本土新增无症状', '新增境外输入']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [${modifyHistory.map(x=>{
          return `"${x.day}",`
        }).join('')}]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '本土新增确诊',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${modifyHistory.map(x=>{return `${x.localAdd},`}).join('')}]
        },
        {
          name: '本土新增无症状',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${modifyHistory.map(x=>{return `${x.asymptomAdd},`}).join('')}]
        },
        {
          name: '新增境外输入',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${modifyHistory.map(x=>{return `${x.importAdd},`}).join('')}]
        }
      ]
    };

    const option_second = {
      title: {
        text: '${area}疫情概览（人）'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['累计确诊', '累计治愈']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [${totalHistory.map(x=>{
          return `"${x.day}",`
        }).join('')}]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '累计确诊',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${totalHistory.map(x=>{return `${x.confirm},`}).join('')}]
        },
        {
          name: '累计治愈',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${totalHistory.map(x=>{return `${x.heal},`}).join('')}]
        }
      ]
    };

    const option_third = {
      title: {
        text: '广州疫情新增趋势（人）'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['本土新增确诊', '本土新增无症状']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [${cityModifyHistory.map(x=>{
          return `"${x.day.slice(4)}",`
        }).join('')}]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '本土新增确诊',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${cityModifyHistory.map(x=>{return `${x.confirm},`}).join('')}]
        },
        {
          name: '本土新增无症状',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${cityModifyHistory.map(x=>{return `${x.noinfect},`}).join('')}]
        }
      ]
    };

    const option_fourth  = {
      series: [
        {
          type: 'treemap',
          data: [
            {
              name: '本土新增确诊昨日+${localConfirmAdd}',
              value: ${dealWithNumber(localConfirmAdd)},
            },
            {
              name: '新增无症状昨日+${noinfect}',
              value: ${dealWithNumber(noinfect)},
            },
            {
              name: '新增境外输入昨日+${importDesc}',
              value: ${dealWithNumber(importDesc)},
            },
            {
              name: '新增治愈昨日+${heal}',
              value: ${dealWithNumber(heal)},
            },
          ]
        }
      ]
    };

    this.chart.setOption(option);
    this.chartSecond.setOption(option_second);
    this.chartThird.setOption(option_third);
    this.chartFourth.setOption(option_fourth);
  }
}
</script>

## ${area}省各地区疫情情况

::: danger ${riskLevelNum}个中高风险地区
:::

|地区|本土新增确诊|本土新增无症状|本土近7日确诊|中高风险地区|
|:--:|---:|---:|---:|---:|
${cityInfo.map((item: CityInfo) => {
    return `|${item.city}|${joinWithPlus(item.localAdd)}|${joinWithPlus(item.asymptomAdd)}|${joinWithPlus(item.localAddTotal)}|${joinWithPlus(item.riskLevelNum)}|\n`
  }).join('')}

${contents.length > 0 ? `## ${area}疫情热点动态` : ''}

${contents.map((item: ContentsInfo) => {
    return `
### ${item.publicTime.slice(5)}
::: tip ${item.title}
${item.desc.slice(0,100)}...\n
${item.from}\n
[阅读全文](${item.jumpLink.url})
:::
  `
  }).join('')}
  `

  const year = recentTime.slice(0, 4)
  const month = recentTime.slice(5, 7)
  const day = recentTime.slice(8, 10)
  const hour = recentTime.slice(11, 13)
  const minute = recentTime.slice(14, 16)
  const misc = recentTime.slice(17, 19)

  const timeStr = `${year}${month}${day}-${hour}${minute}${misc}`

  writeMdWithContent(timeStr, content)
})()