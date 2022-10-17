'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const ncov_china_1 = require('./configs/ncov_china')
const { GuangDongProvinceCode, GuangZhouCityCode } = ncov_china_1.BaseApiInfo
;(async () => {
  // 全国新增本土确诊
  const params_provinceMapInfo = ncov_china_1.URL_Object['getProvinceMapInfo']
  const res_provinceMapInfo = await (0, ncov_china_1.getApiData)(
    params_provinceMapInfo['url'],
    {
      req: {},
      func: params_provinceMapInfo['func'],
      service: params_provinceMapInfo['service']
    }
  )
  // 全国信息
  const params_chinaRealTimeInfo =
    ncov_china_1.URL_Object['getChinaRealTimeInfo']
  const res = await (0, ncov_china_1.getApiData)(
    params_chinaRealTimeInfo['url'],
    {
      req: {},
      func: params_chinaRealTimeInfo['func'],
      service: params_chinaRealTimeInfo['service']
    }
  )
  // 省份信息
  const params_provinceInfoByCode =
    ncov_china_1.URL_Object['getProvinceInfoByCode']
  const res_province = await (0, ncov_china_1.getApiData)(
    params_provinceInfoByCode['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: params_provinceInfoByCode['func'],
      service: params_provinceInfoByCode['service']
    }
  )
  // 城市信息
  const params_cityInfoByProvCode =
    ncov_china_1.URL_Object['getCityInfoByProvCode']
  const res_cityList = await (0, ncov_china_1.getApiData)(
    params_cityInfoByProvCode['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: params_cityInfoByProvCode['func'],
      service: params_cityInfoByProvCode['service']
    }
  )
  // 省份趋势信息
  const params_provinceInfoHisByCode =
    ncov_china_1.URL_Object['getProvinceInfoHisByCode']
  const res_trendInfo = await (0, ncov_china_1.getApiData)(
    params_provinceInfoHisByCode['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: params_provinceInfoHisByCode['func'],
      service: params_provinceInfoHisByCode['service']
    }
  )
  // 城市趋势信息
  const params_cityInfoHisByCode =
    ncov_china_1.URL_Object['getCityInfoHisByCode']
  const res_cityTrendInfo = await (0, ncov_china_1.getApiData)(
    params_cityInfoHisByCode['url'],
    {
      req: { cityCode: GuangZhouCityCode },
      func: params_cityInfoHisByCode['func'],
      service: params_cityInfoHisByCode['service']
    }
  )
  // 城市新闻消息
  const params_topicContent = ncov_china_1.URL_Object['getTopicContent']
  const res_news = await (0, ncov_china_1.getApiData)(
    params_topicContent['url'],
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
      func: params_topicContent['func'],
      service: params_topicContent['service']
    }
  )
  // 趋势图表信息
  const params_trendChartInfo = ncov_china_1.URL_Object['getChartInfo']
  const res_chartInfo = await (0, ncov_china_1.getApiData)(
    params_trendChartInfo['url'],
    {
      req: {},
      func: params_trendChartInfo['func'],
      service: params_trendChartInfo['service']
    }
  )
  const resData = {
    provinceMapInfo: res_provinceMapInfo.args.rsp,
    chinaRealTimeInfo: res.args.rsp,
    provinceInfos: res_province.args.rsp,
    cityRes: res_cityList.args.rsp,
    trendInfoRes: res_trendInfo.args.rsp,
    cityTrendRes: res_cityTrendInfo.args.rsp,
    contentsRes: res_news.args.rsp,
    trendChartInfoRes: res_chartInfo.args.rsp
  }
  ;(0, ncov_china_1.renderResData)(resData)
})()
