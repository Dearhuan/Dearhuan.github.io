import {
  BaseApiInfo,
  URL_Object,
  getApiData,
  renderResData
} from './configs/ncov_china'
import type {
  ChinaRealTimeInfo,
  ProvinceInfo,
  CityRes,
  TrendInfoRes,
  CityTrendRes,
  ContentsRes,
  TrendChartInfoRes
} from './configs/ncov_china/types'

const { GuangDongProvinceCode, GuangZhouCityCode } = BaseApiInfo

;(async () => {
  // 全国信息
  const res = await getApiData<ChinaRealTimeInfo>(
    URL_Object['getChinaRealTimeInfo']['url'],
    {
      req: {},
      func: URL_Object['getChinaRealTimeInfo']['func'],
      service: URL_Object['getChinaRealTimeInfo']['service']
    }
  )

  // 省份信息
  const res_province = await getApiData<ProvinceInfo>(
    URL_Object['getProvinceInfoByCode']['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: URL_Object['getProvinceInfoByCode']['func'],
      service: URL_Object['getProvinceInfoByCode']['service']
    }
  )

  // 城市信息
  const res_cityList = await getApiData<CityRes>(
    URL_Object['getCityInfoByProvCode']['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: URL_Object['getCityInfoByProvCode']['func'],
      service: URL_Object['getCityInfoByProvCode']['service']
    }
  )

  // 省份趋势信息
  const res_trendInfo = await getApiData<TrendInfoRes>(
    URL_Object['getProvinceInfoHisByCode']['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: URL_Object['getProvinceInfoHisByCode']['func'],
      service: URL_Object['getProvinceInfoHisByCode']['service']
    }
  )

  // 城市趋势信息
  const res_cityTrendInfo = await getApiData<CityTrendRes>(
    URL_Object['getCityInfoHisByCode']['url'],
    {
      req: { cityCode: GuangZhouCityCode },
      func: URL_Object['getCityInfoHisByCode']['func'],
      service: URL_Object['getCityInfoHisByCode']['service']
    }
  )

  // 城市新闻消息
  const res_news = await getApiData<ContentsRes>(
    URL_Object['getTopicContent']['url'],
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
      func: URL_Object['getTopicContent']['func'],
      service: URL_Object['getTopicContent']['service']
    }
  )

  // 趋势图表信息
  const res_chartInfo = await getApiData<TrendChartInfoRes>(
    URL_Object['getChartInfo']['url'],
    {
      req: {},
      func: URL_Object['getChartInfo']['func'],
      service: URL_Object['getChartInfo']['service']
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

  renderResData(resData)
})()
