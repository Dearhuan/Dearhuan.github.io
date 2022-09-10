'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const ncov_china_1 = require('./configs/ncov_china')
const { GuangDongProvinceCode, GuangZhouCityCode } = ncov_china_1.BaseApiInfo
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
  // 省份信息
  const res_province = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getProvinceInfoByCode']['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: ncov_china_1.URL_Object['getProvinceInfoByCode']['func'],
      service: ncov_china_1.URL_Object['getProvinceInfoByCode']['service']
    }
  )
  // 城市信息
  const res_cityList = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getCityInfoByProvCode']['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: ncov_china_1.URL_Object['getCityInfoByProvCode']['func'],
      service: ncov_china_1.URL_Object['getCityInfoByProvCode']['service']
    }
  )
  // 省份趋势信息
  const res_trendInfo = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getProvinceInfoHisByCode']['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: ncov_china_1.URL_Object['getProvinceInfoHisByCode']['func'],
      service: ncov_china_1.URL_Object['getProvinceInfoHisByCode']['service']
    }
  )
  // 城市趋势信息
  const res_cityTrendInfo = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getCityInfoHisByCode']['url'],
    {
      req: { cityCode: GuangZhouCityCode },
      func: ncov_china_1.URL_Object['getCityInfoHisByCode']['func'],
      service: ncov_china_1.URL_Object['getCityInfoHisByCode']['service']
    }
  )
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
  // 趋势图表信息
  const res_chartInfo = await (0, ncov_china_1.getApiData)(
    ncov_china_1.URL_Object['getChartInfo']['url'],
    {
      req: {},
      func: ncov_china_1.URL_Object['getChartInfo']['func'],
      service: ncov_china_1.URL_Object['getChartInfo']['service']
    }
  )
  const resData = {
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
