import fs from 'fs'
import path from 'path'
import axios from 'axios'
import { ChartName } from './enums'
import type {
  ApiRequestParams,
  CityInfo,
  ContentsInfo,
  Result,
  ResUnion
} from './types'

export const rootPath = path.resolve(__dirname, '../../../')

export const mdPath = rootPath + '/docs/chinaNcovs'

export const base = 'chinaNcovs'

export const zhNcovCategroy = 'zhNcovCategroy'

export const jsonFilePath =
  rootPath + '/docs/.vuepress/public/json/chinaRoutes.json'

export const BaseApiInfo = {
  GuangDongProvinceCode: '440000',
  GuangZhouCityCode: '440100',
  BASE_URL: 'https://wechat.wecity.qq.com/api/',
  SERVICE: 'THPneumoniaDataService',
  OUTER_SERVICE: 'THPneumoniaOuterService',
  OUTER_DATA_SERVICE: 'THPneumoniaOuterDataService',
  USERID: '830075f3162e41c89a790c70041cd031'
}

export const BaseUrl = {
  GetChinaRealTimeInfoURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getChinaRealTimeInfo`,
  GetProvinceInfoByCodeURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getProvinceInfoByCode`,
  GetCityInfoByProvCodeURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getCityInfoByProvCode`,
  GetProvinceInfoHisByCodeURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getProvinceInfoHisByCode`,
  GetCityInfoHisByCodeURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getCityInfoHisByCode`,
  GetTopicContentURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.OUTER_SERVICE}/getTopicContent`,
  GetChartInfoURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.OUTER_DATA_SERVICE}/getChartInfo`,
  GetProvinceMapInfoURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.SERVICE}/getProvinceMapInfo`
}

export const URL_Object = {
  getChinaRealTimeInfo: {
    func: 'getChinaRealTimeInfo',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetChinaRealTimeInfoURL
  },
  getProvinceInfoByCode: {
    func: 'getProvinceInfoByCode',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetProvinceInfoByCodeURL
  },
  getCityInfoByProvCode: {
    func: 'getCityInfoByProvCode',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetCityInfoByProvCodeURL
  },
  getProvinceInfoHisByCode: {
    func: 'getProvinceInfoHisByCode',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetProvinceInfoHisByCodeURL
  },
  getCityInfoHisByCode: {
    func: 'getCityInfoHisByCode',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetCityInfoHisByCodeURL
  },
  getTopicContent: {
    func: 'getTopicContent',
    service: BaseApiInfo.OUTER_SERVICE,
    url: BaseUrl.GetTopicContentURL
  },
  getChartInfo: {
    func: 'getChartInfo',
    service: BaseApiInfo.OUTER_DATA_SERVICE,
    url: BaseUrl.GetChartInfoURL
  },
  getProvinceMapInfo: {
    func: 'getProvinceMapInfo',
    service: BaseApiInfo.SERVICE,
    url: BaseUrl.GetProvinceMapInfoURL
  }
}

export const ChartList = [
  {
    propName: 'chartChDay',
    id: ChartName.CH_DAY_MODIFY,
    isCountry: true
  },
  {
    propName: 'chartChAdd',
    id: ChartName.CH_ADD_HISTORY,
    isCountry: true
  },
  {
    propName: 'chartChNow',
    id: ChartName.CH_NOW_HISTORY,
    isCountry: true
  },
  {
    propName: 'chartChTotal',
    id: ChartName.CH_TOTAL_HISTORY,
    isCountry: true
  },
  {
    propName: 'chartGdMod',
    id: ChartName.GD_MODIFY,
    isCountry: false
  },
  {
    propName: 'chartGdTotal',
    id: ChartName.GD_TOTAL_HISTORY,
    isCountry: false
  },
  {
    propName: 'chartGzMod',
    id: ChartName.GZ_MODIFY_HISTORY,
    isCountry: false
  }
]

/**
 * @func readFileList
 * @param {string} path
 * @returns {object}
 * @desc ????????????????????????md??????
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

export const writeFileList = (path: string) => {
  try {
    const obj = [
      {
        text: '????????????',
        link: `/${base}/${zhNcovCategroy}.md`
      }
    ]
    fs.writeFileSync(path, JSON.stringify(obj))
    console.log('???????????????JSON??????...')
  } catch (error) {
    console.log(error)
  }
}

export const writeZhNcovCategroy = (
  fileList: {
    text: string
    link: string
  }[]
) => {
  const writePath = `${mdPath}/${zhNcovCategroy}.md`
  const html = `---
prev: 
  text: '??????????????????'
  link: /others/othersNcovCategory.html
next: 
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

const title = ref('????????????????????????')

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
  console.log('??????ZhNcovCategroy...')
}

/**
 * @func writeMdWithContent
 * @param {string} timeStr
 * @param {string} content
 * @desc ??????md?????????????????????
 */
export const writeMdWithContent = (timeStr: string, content: string) => {
  const writePath = `${mdPath}/${timeStr}.md`
  fs.writeFileSync(writePath, content, 'utf-8')
  console.log(`${timeStr}.md created.`)

  setTimeout(() => {
    const filesList = readFileList(mdPath)

    console.log(mdPath)

    console.log(filesList)

    console.log('??????????????????????????????...')

    writeFileList(jsonFilePath)
    writeZhNcovCategroy(filesList)
  }, 500)
}

/**
 * @func getApiData
 * @param {string} url
 * @param {ApiRequestParams} params
 * @returns {Promise<Result<T>>}
 * @desc ??????????????????
 */
export const getApiData = async <T>(
  url: string,
  params: ApiRequestParams
): Promise<Result<T>> => {
  const { req, service, func } = params
  const res = await axios.post(url, {
    args: {
      req
    },
    service,
    func,
    context: {
      userId: BaseApiInfo.USERID
    }
  })
  return res.data
}

export const joinWithPlus = (number: number | string) => {
  return number > 0 ? '+' + number : number
}

export const dealWithNumber = (number: number | string) => {
  return number > 0 ? number : 1
}

export const renderMarkdownTable = (cityInfo: CityInfo[]): string => {
  return cityInfo
    .map((item: CityInfo) => {
      return `|${item.city}|${joinWithPlus(item.localAdd)}|${joinWithPlus(
        item.asymptomAdd
      )}|${joinWithPlus(item.localAddTotal)}|${joinWithPlus(
        item.riskLevelNum
      )}|\n`
    })
    .join('')
}

export const renderNewsCard = (news: ContentsInfo[], area: string): string => {
  return `${news.length > 0 ? `## ${area}??????????????????` : ''}

  ${news
    .map((item: ContentsInfo) => {
      return `
### ${item.publicTime.slice(5)}
::: tip ${item.title}
${item.desc.slice(0, 100)}...\n
${item.from}\n
[????????????](${item.jumpLink.url})
:::
`
    })
    .join('')}`
}

export const getFormatTimeStr = (timeStr: string): string => {
  const year = timeStr.slice(0, 4)
  const month = timeStr.slice(5, 7)
  const day = timeStr.slice(8, 10)
  const hour = timeStr.slice(11, 13)
  const minute = timeStr.slice(14, 16)
  const misc = timeStr.slice(17, 19)

  return `${year}${month}${day}-${hour}${minute}${misc}`
}

export const renderResData = (params: ResUnion) => {
  const {
    provinceMapInfo,
    chinaRealTimeInfo,
    provinceInfos,
    cityRes,
    trendInfoRes,
    cityTrendRes,
    contentsRes,
    contentsGzRes,
    trendChartInfoRes
  } = params

  const { provinceMapData } = provinceMapInfo

  const {
    chinaTotal,
    chinaDayModify,
    recentTime, // ????????????
    dataFrom // ????????????
  } = chinaRealTimeInfo
  const {
    localConfirmAdd, // ??????????????????
    noinfect, // ???????????????
    importDesc, // ??????????????????
    heal // ????????????
  } = chinaDayModify
  const {
    localNowConfirm, // ??????????????????
    noinfectDesc, // ???????????????
    nowImport, // ??????????????????
    confirm // ????????????
  } = chinaTotal

  const { provinceInfo } = provinceInfos
  const {
    area, // ??????
    localAddPctDesc, // ??????
    localAdd, // ??????????????????
    asymptomAdd, // ?????????????????????
    importAdd, // ??????????????????
    lastImportAddTotal, // ?????????7?????????
    updateTime,
    riskLevelNum
  } = provinceInfo

  const { cityInfo } = cityRes

  const { modifyHistory, totalHistory } = trendInfoRes

  const { modifyHistory: cityModifyHistory } = cityTrendRes

  const { hotnewsRsp } = contentsRes
  const { contents } = hotnewsRsp

  const { hotnewsRsp: gzHotnewsRsp } = contentsGzRes
  const { contents: gzContents } = gzHotnewsRsp

  const { trendChartInfo } = trendChartInfoRes
  const chinaAddHistoryData = trendChartInfo.filter((x) => {
    return x.chartName === ChartName.CH_ADD_HISTORY
  })[0].chartLineData
  const chinaNowHistoryData = trendChartInfo.filter((x) => {
    return x.chartName === ChartName.CH_NOW_HISTORY
  })[0].chartLineData
  const chinaTotalHistoryData = trendChartInfo.filter((x) => {
    return x.chartName === ChartName.CH_TOTAL_HISTORY
  })[0].chartLineData

  const content = `
# ????????????????????????
### ??????${recentTime} ${dataFrom}

|??????|??????????????????|???????????????|??????????????????|????????????|
|:--:|---:|---:|---:|---:|
|??????|??????+${localConfirmAdd}|??????+${noinfect}|??????+${importDesc}|??????+${heal}|

|??????|??????????????????|???????????????|??????????????????|????????????|
|:--:|---:|---:|---:|---:|
|??????|${localNowConfirm}|${noinfectDesc}|${nowImport}|${confirm}|

<ChinaMap :dataList="dataList" :title="title"/>

${ChartList.filter((item) => {
  return item.isCountry
})
  .map((x) => {
    return `<div id="${x.id}" style="width:100%;height:500px;margin-bottom:10px;"></div>\n`
  })
  .join('')}

## ${area}?????????????????????
### ??????${updateTime} ${dataFrom}

::: tip ${localAddPctDesc}
:::

|??????|??????????????????|?????????????????????|??????????????????|?????????7?????????|
|:--:|---:|---:|---:|---:|
|${area}|??????+${localAdd}|??????+${asymptomAdd}|??????+${importAdd}|??????+${lastImportAddTotal}|

${ChartList.filter((item) => {
  return !item.isCountry
})
  .map((x) => {
    return `<div id="${x.id}" style="width:100%;height:500px;margin-bottom:10px;"></div>\n`
  })
  .join('')}

<script>
import * as echarts from 'echarts'
export default {
  data(){
    return {
      title: '??????????????????',
      dataList: [${provinceMapData
        .map((x) => {
          return `{name: '${x.name.replace('???', '')}', value: ${
            x.localAdd
          }, addList: [${x.localAddCityData
            .map((a) => {
              return `{name: '${a.name}', num: ${a.num}},\n`
            })
            .join('')}]},`
        })
        .join('')}{name: '????????????', value: 0, addList: []}]
    }
  },
  mounted () {
    const themeObj = {"color":["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],"backgroundColor":"rgba(0,0,0,0)","textStyle":{},"title":{"textStyle":{"color":"#008acd"},"subtextStyle":{"color":"#aaaaaa"}},"line":{"itemStyle":{"borderWidth":1},"lineStyle":{"width":2},"symbolSize":3,"symbol":"emptyCircle","smooth":true},"radar":{"itemStyle":{"borderWidth":1},"lineStyle":{"width":2},"symbolSize":3,"symbol":"emptyCircle","smooth":true},"bar":{"itemStyle":{"barBorderWidth":0,"barBorderColor":"#ccc"}},"pie":{"itemStyle":{"borderWidth":0,"borderColor":"#ccc"}},"scatter":{"itemStyle":{"borderWidth":0,"borderColor":"#ccc"}},"boxplot":{"itemStyle":{"borderWidth":0,"borderColor":"#ccc"}},"parallel":{"itemStyle":{"borderWidth":0,"borderColor":"#ccc"}},"sankey":{"itemStyle":{"borderWidth":0,"borderColor":"#ccc"}},"funnel":{"itemStyle":{"borderWidth":0,"borderColor":"#ccc"}},"gauge":{"itemStyle":{"borderWidth":0,"borderColor":"#ccc"}},"candlestick":{"itemStyle":{"color":"#d87a80","color0":"#2ec7c9","borderColor":"#d87a80","borderColor0":"#2ec7c9","borderWidth":1}},"graph":{"itemStyle":{"borderWidth":0,"borderColor":"#ccc"},"lineStyle":{"width":1,"color":"#aaaaaa"},"symbolSize":3,"symbol":"emptyCircle","smooth":true,"color":["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],"label":{"color":"#eeeeee"}},"map":{"itemStyle":{"areaColor":"#dddddd","borderColor":"#eeeeee","borderWidth":0.5},"label":{"color":"#d87a80"},"emphasis":{"itemStyle":{"areaColor":"rgba(254,153,78,1)","borderColor":"#444","borderWidth":1},"label":{"color":"rgb(100,0,0)"}}},"geo":{"itemStyle":{"areaColor":"#dddddd","borderColor":"#eeeeee","borderWidth":0.5},"label":{"color":"#d87a80"},"emphasis":{"itemStyle":{"areaColor":"rgba(254,153,78,1)","borderColor":"#444","borderWidth":1},"label":{"color":"rgb(100,0,0)"}}},"categoryAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#008acd"}},"axisTick":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"color":"#333"},"splitLine":{"show":false,"lineStyle":{"color":["#eee"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},"valueAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#008acd"}},"axisTick":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"color":"#333"},"splitLine":{"show":true,"lineStyle":{"color":["#eee"]}},"splitArea":{"show":true,"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},"logAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#008acd"}},"axisTick":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"color":"#333"},"splitLine":{"show":true,"lineStyle":{"color":["#eee"]}},"splitArea":{"show":true,"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},"timeAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#008acd"}},"axisTick":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"color":"#333"},"splitLine":{"show":true,"lineStyle":{"color":["#eee"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},"toolbox":{"iconStyle":{"borderColor":"#2ec7c9"},"emphasis":{"iconStyle":{"borderColor":"#18a4a6"}}},"legend":{"textStyle":{"color":"#333333"}},"tooltip":{"axisPointer":{"lineStyle":{"color":"#008acd","width":"1"},"crossStyle":{"color":"#008acd","width":"1"}}},"timeline":{"lineStyle":{"color":"#008acd","width":1},"itemStyle":{"color":"#008acd","borderWidth":1},"controlStyle":{"color":"#008acd","borderColor":"#008acd","borderWidth":0.5},"checkpointStyle":{"color":"#2ec7c9","borderColor":"#2ec7c9"},"label":{"color":"#008acd"},"emphasis":{"itemStyle":{"color":"#a9334c"},"controlStyle":{"color":"#008acd","borderColor":"#008acd","borderWidth":0.5},"label":{"color":"#008acd"}}},"visualMap":{"color":["#5ab1ef","#e0ffff"]},"dataZoom":{"backgroundColor":"rgba(47,69,84,0)","dataBackgroundColor":"#efefff","fillerColor":"rgba(182,162,222,0.2)","handleColor":"#008acd","handleSize":"100%","textStyle":{"color":"#333333"}},"markPoint":{"label":{"color":"#eeeeee"},"emphasis":{"label":{"color":"#eeeeee"}}}}

    echarts.registerTheme('dark', (themeObj))

    ${ChartList.map((item) => {
      return `this.${item.propName} = echarts.init(document.getElementById("${item.id}"), "dark")\n`
    })}

    const option_gd_mod = {
      title: {
        text: '${area}???????????????????????????'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        top: 20,
        data: [{name: '??????????????????',icon: 'rect'}, {name: '?????????????????????',icon: 'rect'},{name: '??????????????????',icon: 'rect'}]
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
          name: '??????????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [${modifyHistory
            .map((x) => {
              return `${x.localAdd},`
            })
            .join('')}]
        },
        {
          name: '?????????????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [${modifyHistory
            .map((x) => {
              return `${x.asymptomAdd},`
            })
            .join('')}]
        },
        {
          name: '??????????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
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
        text: '${area}?????????????????????'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        top: 20,
        data: [{name: '????????????',icon: 'rect'},{name: '????????????',icon: 'rect'}]
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
          name: '????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [${totalHistory
            .map((x) => {
              return `${x.confirm},`
            })
            .join('')}]
        },
        {
          name: '????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
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
        text: '?????????????????????????????????'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        top: 20,
        data: [{name: '??????????????????',icon: 'rect'},{name: '?????????????????????',icon: 'rect'}]
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
          name: '??????????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [${cityModifyHistory
            .map((x) => {
              return `${x.confirm},`
            })
            .join('')}]
        },
        {
          name: '?????????????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
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
              name: '????????????????????????+${localConfirmAdd}',
              value: ${dealWithNumber(localConfirmAdd)},
            },
            {
              name: '?????????????????????+${noinfect}',
              value: ${dealWithNumber(noinfect)},
            },
            {
              name: '????????????????????????+${importDesc}',
              value: ${dealWithNumber(importDesc)},
            },
            {
              name: '??????????????????+${heal}',
              value: ${dealWithNumber(heal)},
            },
          ]
        }
      ]
    };

    const option_ch_add = {
      title: {
        text: '????????????????????????'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        top: 20,
        data: [{name: '????????????',icon: 'rect'}, {name: '???????????????',icon: 'rect'},{name: '??????????????????',icon: 'rect'}]
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
          name: '????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [${chinaAddHistoryData
            .map((x) => {
              return `${x.y1},`
            })
            .join('')}]
        },
        {
          name: '???????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [${chinaAddHistoryData
            .map((x) => {
              return `${x.y3},`
            })
            .join('')}]
        },
        {
          name: '??????????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
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
        text: '????????????????????????'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        top: 20,
        data: [{name: '????????????',icon: 'rect'}, {name: '???????????????',icon: 'rect'},{name: '??????????????????',icon: 'rect'}]
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
          name: '????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [${chinaNowHistoryData
            .map((x) => {
              return `${x.y1},`
            })
            .join('')}]
        },
        {
          name: '???????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [${chinaNowHistoryData
            .map((x) => {
              return `${x.y3},`
            })
            .join('')}]
        },
        {
          name: '??????????????????',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
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
        text: '????????????????????????'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        top: 20,
        data: [{name: '??????(????????????)', con: 'rect'}, {name: '??????(????????????)',icon: 'rect'}]
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
          name: '??????(????????????)',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [${chinaTotalHistoryData
            .map((x) => {
              return `${x.y0},`
            })
            .join('')}]
        },
        {
          name: '??????(????????????)',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
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

    window.onresize = () => {
      this.chartGdMod.resize()
      this.chartGdTotal.resize()
      this.chartGzMod.resize()
      this.chartChDay.resize()
      this.chartChAdd.resize()
      this.chartChNow.resize()
      this.chartChTotal.resize()
    }
  }
}
</script>

## ${area}????????????????????????

::: danger ${riskLevelNum}?????????????????????
:::

|??????|??????????????????|?????????????????????|?????????7?????????|??????????????????|
|:--:|---:|---:|---:|---:|
${renderMarkdownTable(cityInfo)}

${renderNewsCard(contents, area)}

${renderNewsCard(gzContents, '??????')}
`
  const timeStr = getFormatTimeStr(recentTime)

  writeMdWithContent(timeStr, content)
}
