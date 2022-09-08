'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const fs_1 = __importDefault(require('fs'))
const ncov_china_1 = require('./configs/ncov_china')
const enums_1 = require('./configs/ncov_china/enums')
const { GuangDongProvinceCode, GuangZhouCityCode } = ncov_china_1.BaseApiInfo
/**
 * @func writeMdWithContent
 * @param {string} timeStr
 * @param {string} content
 * @desc 写入md文件并更新路由
 */
const writeMdWithContent = (timeStr, content) => {
  const writePath = `${ncov_china_1.rootPath}/docs/chinaNcovs/${timeStr}.md`
  fs_1.default.writeFileSync(writePath, content, 'utf-8')
  console.log(`${timeStr}.md created.`)
  setTimeout(() => {
    const filesList = (0, ncov_china_1.readFileList)(ncov_china_1.mdPath)
    console.log(ncov_china_1.mdPath)
    console.log(filesList)
    console.log('读取文件目录生成路由---')
    const writeFileList = (path, data) => {
      try {
        fs_1.default.writeFileSync(path, JSON.stringify(data))
        console.log('写入路由到JSON文件---')
      } catch (error) {
        console.log(error)
      }
    }
    writeFileList(ncov_china_1.jsonFilePath, filesList)
  }, 500)
}
;(async () => {
  // 全国信息
  const res = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getChinaRealTimeInfo']['url'],
    {
      req: {},
      func: ncov_china_1.URL_Object['getChinaRealTimeInfo']['func'],
      service: ncov_china_1.URL_Object['getChinaRealTimeInfo']['service']
    }
  )
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
  // 省份信息
  const res_province = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getProvinceInfoByCode']['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: ncov_china_1.URL_Object['getProvinceInfoByCode']['func'],
      service: ncov_china_1.URL_Object['getProvinceInfoByCode']['service']
    }
  )
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
  // 城市信息
  const res_cityList = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getCityInfoByProvCode']['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: ncov_china_1.URL_Object['getCityInfoByProvCode']['func'],
      service: ncov_china_1.URL_Object['getCityInfoByProvCode']['service']
    }
  )
  const { cityInfo } = res_cityList.args.rsp
  // 省份趋势信息
  const res_trendInfo = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getProvinceInfoHisByCode']['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: ncov_china_1.URL_Object['getProvinceInfoHisByCode']['func'],
      service: ncov_china_1.URL_Object['getProvinceInfoHisByCode']['service']
    }
  )
  const { modifyHistory, totalHistory } = res_trendInfo.args.rsp
  // 城市趋势信息
  const res_cityTrendInfo = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getCityInfoHisByCode']['url'],
    {
      req: { cityCode: GuangZhouCityCode },
      func: ncov_china_1.URL_Object['getCityInfoHisByCode']['func'],
      service: ncov_china_1.URL_Object['getCityInfoHisByCode']['service']
    }
  )
  const { modifyHistory: cityModifyHistory } = res_cityTrendInfo.args.rsp
  // 城市新闻消息
  const res_news = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getTopicContent']['url'],
    {
      req: {
        areaCode: GuangDongProvinceCode,
        hotnewsReq: {
          limit: 10,
          locationCode: GuangDongProvinceCode,
          offset: 0,
          reqType: 1,
          tab: 'shishitongbao'
        },
        queryList: [{}]
      },
      func: ncov_china_1.URL_Object['getTopicContent']['func'],
      service: ncov_china_1.URL_Object['getTopicContent']['service']
    }
  )
  const { hotnewsRsp } = res_news.args.rsp
  const { contents } = hotnewsRsp
  // 趋势图表信息
  const res_chartInfo = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getChartInfo']['url'],
    {
      req: {},
      func: ncov_china_1.URL_Object['getChartInfo']['func'],
      service: ncov_china_1.URL_Object['getChartInfo']['service']
    }
  )
  const { trendChartInfo } = res_chartInfo.args.rsp
  const chinaAddHistoryData = trendChartInfo.filter((x) => {
    return x.chartName === enums_1.ChartName.CH_ADD_HISTORY
  })
  const chinaNowHistoryData = trendChartInfo.filter((x) => {
    return x.chartName === enums_1.ChartName.CH_NOW_HISTORY
  })
  const chinaTotalHistoryData = trendChartInfo.filter((x) => {
    return x.chartName === enums_1.ChartName.CH_TOTAL_HISTORY
  })
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
<div id="${
    enums_1.ChartName.CH_ADD_HISTORY
  }" style="width:100%;height:500px;margin-bottom:10px;"></div>
<div id="${
    enums_1.ChartName.CH_NOW_HISTORY
  }" style="width:100%;height:500px;margin-bottom:10px;"></div>
<div id="${
    enums_1.ChartName.CH_TOTAL_HISTORY
  }" style="width:100%;height:500px;margin-bottom:10px;"></div>

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
    this.chartChAdd = echarts.init(document.getElementById("${
      enums_1.ChartName.CH_ADD_HISTORY
    }"), "dark")
    this.chartChNow = echarts.init(document.getElementById("${
      enums_1.ChartName.CH_NOW_HISTORY
    }"), "dark")
    this.chartChTotal = echarts.init(document.getElementById("${
      enums_1.ChartName.CH_TOTAL_HISTORY
    }"), "dark")

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

    const option_fourth  = {
      series: [
        {
          type: 'treemap',
          data: [
            {
              name: '本土新增确诊昨日+${localConfirmAdd}',
              value: ${(0, ncov_china_1.dealWithNumber)(localConfirmAdd)},
            },
            {
              name: '新增无症状昨日+${noinfect}',
              value: ${(0, ncov_china_1.dealWithNumber)(noinfect)},
            },
            {
              name: '新增境外输入昨日+${importDesc}',
              value: ${(0, ncov_china_1.dealWithNumber)(importDesc)},
            },
            {
              name: '新增治愈昨日+${heal}',
              value: ${(0, ncov_china_1.dealWithNumber)(heal)},
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
        data: [${chinaAddHistoryData[0].chartLineData
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
          data: [${chinaAddHistoryData[0].chartLineData
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
          data: [${chinaAddHistoryData[0].chartLineData
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
          data: [${chinaAddHistoryData[0].chartLineData
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
        data: [${chinaNowHistoryData[0].chartLineData
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
          data: [${chinaNowHistoryData[0].chartLineData
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
          data: [${chinaNowHistoryData[0].chartLineData
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
          data: [${chinaNowHistoryData[0].chartLineData
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
        data: [${chinaTotalHistoryData[0].chartLineData
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
          data: [${chinaTotalHistoryData[0].chartLineData
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
          data: [${chinaTotalHistoryData[0].chartLineData
            .map((x) => {
              return `${x.y2},`
            })
            .join('')}]
        }
      ]
    };

    this.chart.setOption(option);
    this.chartSecond.setOption(option_second);
    this.chartThird.setOption(option_third);
    this.chartFourth.setOption(option_fourth);
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
${cityInfo
  .map((item) => {
    return `|${item.city}|${(0, ncov_china_1.joinWithPlus)(item.localAdd)}|${(0,
    ncov_china_1.joinWithPlus)(item.asymptomAdd)}|${(0,
    ncov_china_1.joinWithPlus)(item.localAddTotal)}|${(0,
    ncov_china_1.joinWithPlus)(item.riskLevelNum)}|\n`
  })
  .join('')}

${contents.length > 0 ? `## ${area}疫情热点动态` : ''}

${contents
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
  .join('')}
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
