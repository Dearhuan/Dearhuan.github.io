'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.renderResData =
  exports.getFormatTimeStr =
  exports.renderNewsCard =
  exports.renderMarkdownTable =
  exports.dealWithNumber =
  exports.joinWithPlus =
  exports.getApiData =
  exports.writeMdWithContent =
  exports.writeZhNcovCategroy =
  exports.writeFileList =
  exports.readFileList =
  exports.ChartList =
  exports.URL_Object =
  exports.BaseUrl =
  exports.BaseApiInfo =
  exports.jsonFilePath =
  exports.zhNcovCategroy =
  exports.base =
  exports.mdPath =
  exports.rootPath =
    void 0
const fs_1 = __importDefault(require('fs'))
const path_1 = __importDefault(require('path'))
const axios_1 = __importDefault(require('axios'))
const enums_1 = require('./enums')
exports.rootPath = path_1.default.resolve(__dirname, '../../../')
exports.mdPath = exports.rootPath + '/docs/chinaNcovs'
exports.base = 'chinaNcovs'
exports.zhNcovCategroy = 'zhNcovCategroy'
exports.jsonFilePath =
  exports.rootPath + '/docs/.vuepress/public/json/chinaRoutes.json'
exports.BaseApiInfo = {
  GuangDongProvinceCode: '440000',
  GuangZhouCityCode: '440100',
  BASE_URL: 'https://wechat.wecity.qq.com/api/',
  SERVICE: 'THPneumoniaDataService',
  OUTER_SERVICE: 'THPneumoniaOuterService',
  OUTER_DATA_SERVICE: 'THPneumoniaOuterDataService',
  USERID: '830075f3162e41c89a790c70041cd031'
}
exports.BaseUrl = {
  GetChinaRealTimeInfoURL: `${exports.BaseApiInfo.BASE_URL}${exports.BaseApiInfo.SERVICE}/getChinaRealTimeInfo`,
  GetProvinceInfoByCodeURL: `${exports.BaseApiInfo.BASE_URL}${exports.BaseApiInfo.SERVICE}/getProvinceInfoByCode`,
  GetCityInfoByProvCodeURL: `${exports.BaseApiInfo.BASE_URL}${exports.BaseApiInfo.SERVICE}/getCityInfoByProvCode`,
  GetProvinceInfoHisByCodeURL: `${exports.BaseApiInfo.BASE_URL}${exports.BaseApiInfo.SERVICE}/getProvinceInfoHisByCode`,
  GetCityInfoHisByCodeURL: `${exports.BaseApiInfo.BASE_URL}${exports.BaseApiInfo.SERVICE}/getCityInfoHisByCode`,
  GetTopicContentURL: `${exports.BaseApiInfo.BASE_URL}${exports.BaseApiInfo.OUTER_SERVICE}/getTopicContent`,
  GetChartInfoURL: `${exports.BaseApiInfo.BASE_URL}${exports.BaseApiInfo.OUTER_DATA_SERVICE}/getChartInfo`
}
exports.URL_Object = {
  getChinaRealTimeInfo: {
    func: 'getChinaRealTimeInfo',
    service: exports.BaseApiInfo.SERVICE,
    url: exports.BaseUrl.GetChinaRealTimeInfoURL
  },
  getProvinceInfoByCode: {
    func: 'getProvinceInfoByCode',
    service: exports.BaseApiInfo.SERVICE,
    url: exports.BaseUrl.GetProvinceInfoByCodeURL
  },
  getCityInfoByProvCode: {
    func: 'getCityInfoByProvCode',
    service: exports.BaseApiInfo.SERVICE,
    url: exports.BaseUrl.GetCityInfoByProvCodeURL
  },
  getProvinceInfoHisByCode: {
    func: 'getProvinceInfoHisByCode',
    service: exports.BaseApiInfo.SERVICE,
    url: exports.BaseUrl.GetProvinceInfoHisByCodeURL
  },
  getCityInfoHisByCode: {
    func: 'getCityInfoHisByCode',
    service: exports.BaseApiInfo.SERVICE,
    url: exports.BaseUrl.GetCityInfoHisByCodeURL
  },
  getTopicContent: {
    func: 'getTopicContent',
    service: exports.BaseApiInfo.OUTER_SERVICE,
    url: exports.BaseUrl.GetTopicContentURL
  },
  getChartInfo: {
    func: 'getChartInfo',
    service: exports.BaseApiInfo.OUTER_DATA_SERVICE,
    url: exports.BaseUrl.GetChartInfoURL
  }
}
exports.ChartList = [
  {
    propName: 'chartChDay',
    id: enums_1.ChartName.CH_DAY_MODIFY,
    isCountry: true
  },
  {
    propName: 'chartChAdd',
    id: enums_1.ChartName.CH_ADD_HISTORY,
    isCountry: true
  },
  {
    propName: 'chartChNow',
    id: enums_1.ChartName.CH_NOW_HISTORY,
    isCountry: true
  },
  {
    propName: 'chartChTotal',
    id: enums_1.ChartName.CH_TOTAL_HISTORY,
    isCountry: true
  },
  {
    propName: 'chartGdMod',
    id: enums_1.ChartName.GD_MODIFY,
    isCountry: false
  },
  {
    propName: 'chartGdTotal',
    id: enums_1.ChartName.GD_TOTAL_HISTORY,
    isCountry: false
  },
  {
    propName: 'chartGzMod',
    id: enums_1.ChartName.GZ_MODIFY_HISTORY,
    isCountry: false
  }
]
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
        link: `/${exports.base}/${name}`
      })
  }
  return filesList
}
exports.readFileList = readFileList
const writeFileList = (path, data) => {
  try {
    const obj = [
      {
        text: '目录',
        link: `./${exports.base}/${exports.zhNcovCategroy}.md`
        // children: data.map((x) => {
        //   return {
        //     text: x.text,
        //     link: x.link
        //   }
        // })
      }
    ]
    fs_1.default.writeFileSync(path, JSON.stringify(obj))
    console.log('写入路由到JSON文件...')
  } catch (error) {
    console.log(error)
  }
}
exports.writeFileList = writeFileList
const writeZhNcovCategroy = (fileList) => {
  const writePath = `${exports.mdPath}/${exports.zhNcovCategroy}.md`
  const html = `<div v-for="(item, i) in linkList" :key="i">
    <h3>{{ item.title }}</h3>
    <div>
      <card :defaultValue="item.children"/>
    </div>
  </div>

  <script setup>
  import { ref } from 'vue'

  const linkList = ref([])

  linkList.value = [${fileList
    .map((x) => {
      return `{text: ${x.text},link: .${x.link.replace('md', 'html')}},`
    })
    .join('')}]
  </script>`
  fs_1.default.writeFileSync(writePath, html)
  console.log('写入ZhNcovCategroy...')
}
exports.writeZhNcovCategroy = writeZhNcovCategroy
/**
 * @func writeMdWithContent
 * @param {string} timeStr
 * @param {string} content
 * @desc 写入md文件并更新路由
 */
const writeMdWithContent = (timeStr, content) => {
  const writePath = `${exports.mdPath}/${timeStr}.md`
  fs_1.default.writeFileSync(writePath, content, 'utf-8')
  console.log(`${timeStr}.md created.`)
  setTimeout(() => {
    const filesList = (0, exports.readFileList)(exports.mdPath)
    console.log(exports.mdPath)
    console.log(filesList)
    console.log('读取文件目录生成路由...')
    ;(0, exports.writeFileList)(exports.jsonFilePath, filesList)
    ;(0, exports.writeZhNcovCategroy)(filesList)
  }, 500)
}
exports.writeMdWithContent = writeMdWithContent
/**
 * @func getApiData
 * @param {string} url
 * @param {ApiRequestParams} params
 * @returns {Promise<Result<T>>}
 * @desc 接口统一处理
 */
const getApiData = async (url, params) => {
  const { req, service, func } = params
  const res = await axios_1.default.post(url, {
    args: {
      req
    },
    service,
    func,
    context: {
      userId: exports.BaseApiInfo.USERID
    }
  })
  return res.data
}
exports.getApiData = getApiData
const joinWithPlus = (number) => {
  return number > 0 ? '+' + number : number
}
exports.joinWithPlus = joinWithPlus
const dealWithNumber = (number) => {
  return number > 0 ? number : 1
}
exports.dealWithNumber = dealWithNumber
const renderMarkdownTable = (cityInfo) => {
  return cityInfo
    .map((item) => {
      return `|${item.city}|${(0, exports.joinWithPlus)(item.localAdd)}|${(0,
      exports.joinWithPlus)(item.asymptomAdd)}|${(0, exports.joinWithPlus)(
        item.localAddTotal
      )}|${(0, exports.joinWithPlus)(item.riskLevelNum)}|\n`
    })
    .join('')
}
exports.renderMarkdownTable = renderMarkdownTable
const renderNewsCard = (news, area) => {
  return `${news.length > 0 ? `## ${area}疫情热点动态` : ''}

  ${news
    .map((item) => {
      return `
### ${item.publicTime.slice(5)}
::: tip ${item.title}
${item.desc.slice(0, 100)}...\n
${item.from}\n
[阅读全文](${item.jumpLink.url})
:::
`
    })
    .join('')}`
}
exports.renderNewsCard = renderNewsCard
const getFormatTimeStr = (timeStr) => {
  const year = timeStr.slice(0, 4)
  const month = timeStr.slice(5, 7)
  const day = timeStr.slice(8, 10)
  const hour = timeStr.slice(11, 13)
  const minute = timeStr.slice(14, 16)
  const misc = timeStr.slice(17, 19)
  return `${year}${month}${day}-${hour}${minute}${misc}`
}
exports.getFormatTimeStr = getFormatTimeStr
const renderResData = (params) => {
  const {
    chinaRealTimeInfo,
    provinceInfos,
    cityRes,
    trendInfoRes,
    cityTrendRes,
    contentsRes,
    trendChartInfoRes
  } = params
  const {
    chinaTotal,
    chinaDayModify,
    recentTime, // 更新时间
    dataFrom // 数据来源
  } = chinaRealTimeInfo
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
  const { provinceInfo } = provinceInfos
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
  const { cityInfo } = cityRes
  const { modifyHistory, totalHistory } = trendInfoRes
  const { modifyHistory: cityModifyHistory } = cityTrendRes
  const { hotnewsRsp } = contentsRes
  const { contents } = hotnewsRsp
  const { trendChartInfo } = trendChartInfoRes
  const chinaAddHistoryData = trendChartInfo.filter((x) => {
    return x.chartName === enums_1.ChartName.CH_ADD_HISTORY
  })[0].chartLineData
  const chinaNowHistoryData = trendChartInfo.filter((x) => {
    return x.chartName === enums_1.ChartName.CH_NOW_HISTORY
  })[0].chartLineData
  const chinaTotalHistoryData = trendChartInfo.filter((x) => {
    return x.chartName === enums_1.ChartName.CH_TOTAL_HISTORY
  })[0].chartLineData
  const content = `
# 全国疫情整体情况
### 截至${recentTime} ${dataFrom}

|地区|本土新增确诊|新增无症状|新增境外输入|新增治愈|
|:--:|---:|---:|---:|---:|
|全国|昨日+${localConfirmAdd}|昨日+${noinfect}|昨日+${importDesc}|昨日+${heal}|

|地区|本土现有确诊|现有无症状|现有境外输入|累计确诊|
|:--:|---:|---:|---:|---:|
|全国|${localNowConfirm}|${noinfectDesc}|${nowImport}|${confirm}|

${exports.ChartList.filter((item) => {
  return item.isCountry
})
  .map((x) => {
    return `<div id="${x.id}" style="width:100%;height:500px;margin-bottom:10px;"></div>\n`
  })
  .join('')}

## ${area}省疫情实时动态
### 截至${updateTime} ${dataFrom}

::: tip ${localAddPctDesc}
:::

|地区|本土新增确诊|本土新增无症状|新增境外输入|本土近7日确诊|
|:--:|---:|---:|---:|---:|
|${area}|昨日+${localAdd}|昨日+${asymptomAdd}|昨日+${importAdd}|昨日+${lastImportAddTotal}|

${exports.ChartList.filter((item) => {
  return !item.isCountry
})
  .map((x) => {
    return `<div id="${x.id}" style="width:100%;height:500px;margin-bottom:10px;"></div>\n`
  })
  .join('')}

<script>
import * as echarts from 'echarts'
export default {
  mounted () {
    ${exports.ChartList.map((item) => {
      return `this.${item.propName} = echarts.init(document.getElementById("${item.id}"), "dark")\n`
    })}

    const option_gd_mod = {
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
        data: [${modifyHistory
          .map((x) => {
            return `"${x.day}",`
          })
          .join('')}]
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
          data: [${modifyHistory
            .map((x) => {
              return `${x.localAdd},`
            })
            .join('')}]
        },
        {
          name: '本土新增无症状',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${modifyHistory
            .map((x) => {
              return `${x.asymptomAdd},`
            })
            .join('')}]
        },
        {
          name: '新增境外输入',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${modifyHistory
            .map((x) => {
              return `${x.importAdd},`
            })
            .join('')}]
        }
      ]
    };

    const option_gd_total = {
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
        data: [${totalHistory
          .map((x) => {
            return `"${x.day}",`
          })
          .join('')}]
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
          data: [${totalHistory
            .map((x) => {
              return `${x.confirm},`
            })
            .join('')}]
        },
        {
          name: '累计治愈',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${totalHistory
            .map((x) => {
              return `${x.heal},`
            })
            .join('')}]
        }
      ]
    };

    const option_gz_mod = {
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
        data: [${cityModifyHistory
          .map((x) => {
            return `"${x.day.slice(4)}",`
          })
          .join('')}]
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
          data: [${cityModifyHistory
            .map((x) => {
              return `${x.confirm},`
            })
            .join('')}]
        },
        {
          name: '本土新增无症状',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${cityModifyHistory
            .map((x) => {
              return `${x.noinfect},`
            })
            .join('')}]
        }
      ]
    };

    const option_ch_day  = {
      series: [
        {
          type: 'treemap',
          data: [
            {
              name: '本土新增确诊昨日+${localConfirmAdd}',
              value: ${(0, exports.dealWithNumber)(localConfirmAdd)},
            },
            {
              name: '新增无症状昨日+${noinfect}',
              value: ${(0, exports.dealWithNumber)(noinfect)},
            },
            {
              name: '新增境外输入昨日+${importDesc}',
              value: ${(0, exports.dealWithNumber)(importDesc)},
            },
            {
              name: '新增治愈昨日+${heal}',
              value: ${(0, exports.dealWithNumber)(heal)},
            },
          ]
        }
      ]
    };

    const option_ch_add = {
      title: {
        text: '新增疫情整体走势'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['本土确诊', '无症状感染', '新增境外输入']
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
        data: [${chinaAddHistoryData
          .map((x) => {
            return `"${x.x}",`
          })
          .join('')}]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '本土确诊',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${chinaAddHistoryData
            .map((x) => {
              return `${x.y1},`
            })
            .join('')}]
        },
        {
          name: '无症状感染',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${chinaAddHistoryData
            .map((x) => {
              return `${x.y3},`
            })
            .join('')}]
        },
        {
          name: '新增境外输入',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${chinaAddHistoryData
            .map((x) => {
              return `${x.y2},`
            })
            .join('')}]
        }
      ]
    };

    const option_ch_now = {
      title: {
        text: '现有疫情整体走势'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['本土确诊', '无症状感染', '新增境外输入']
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
        data: [${chinaNowHistoryData
          .map((x) => {
            return `"${x.x}",`
          })
          .join('')}]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '本土确诊',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${chinaNowHistoryData
            .map((x) => {
              return `${x.y1},`
            })
            .join('')}]
        },
        {
          name: '无症状感染',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${chinaNowHistoryData
            .map((x) => {
              return `${x.y3},`
            })
            .join('')}]
        },
        {
          name: '新增境外输入',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${chinaNowHistoryData
            .map((x) => {
              return `${x.y2},`
            })
            .join('')}]
        }
      ]
    };

    const option_ch_total = {
      title: {
        text: '累计疫情整体走势'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['确诊(含港澳台)', '死亡(含港澳台)']
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
        data: [${chinaTotalHistoryData
          .map((x) => {
            return `"${x.x}",`
          })
          .join('')}]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '确诊(含港澳台)',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${chinaTotalHistoryData
            .map((x) => {
              return `${x.y0},`
            })
            .join('')}]
        },
        {
          name: '死亡(含港澳台)',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [${chinaTotalHistoryData
            .map((x) => {
              return `${x.y2},`
            })
            .join('')}]
        }
      ]
    };

    this.chartGdMod.setOption(option_gd_mod);
    this.chartGdTotal.setOption(option_gd_total);
    this.chartGzMod.setOption(option_gz_mod);
    this.chartChDay.setOption(option_ch_day);
    this.chartChAdd.setOption(option_ch_add);
    this.chartChNow.setOption(option_ch_now);
    this.chartChTotal.setOption(option_ch_total);
  }
}
</script>

## ${area}省各地区疫情情况

::: danger ${riskLevelNum}个中高风险地区
:::

|地区|本土新增确诊|本土新增无症状|本土近7日确诊|中高风险地区|
|:--:|---:|---:|---:|---:|
${(0, exports.renderMarkdownTable)(cityInfo)}

${(0, exports.renderNewsCard)(contents, area)}
`
  const timeStr = (0, exports.getFormatTimeStr)(recentTime)
  ;(0, exports.writeMdWithContent)(timeStr, content)
}
exports.renderResData = renderResData
