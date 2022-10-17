import {
  BaseApiInfo,
  URL_Object,
  getApiData,
  renderResData
} from './configs/ncov_china'
import type {
  ProvinceMapRes,
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
  // 全国新增本土确诊
  const params_provinceMapInfo = URL_Object['getProvinceMapInfo']
  const res_provinceMapInfo = await getApiData<ProvinceMapRes>(
    params_provinceMapInfo['url'],
    {
      req: {},
      func: params_provinceMapInfo['func'],
      service: params_provinceMapInfo['service']
    }
  )

  // 全国信息
  const params_chinaRealTimeInfo = URL_Object['getChinaRealTimeInfo']
  const res = await getApiData<ChinaRealTimeInfo>(
    params_chinaRealTimeInfo['url'],
    {
      req: {},
      func: params_chinaRealTimeInfo['func'],
      service: params_chinaRealTimeInfo['service']
    }
  )

  // 省份信息
  const params_provinceInfoByCode = URL_Object['getProvinceInfoByCode']
  const res_province = await getApiData<ProvinceInfo>(
    params_provinceInfoByCode['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: params_provinceInfoByCode['func'],
      service: params_provinceInfoByCode['service']
    }
  )

  // 城市信息
  const params_cityInfoByProvCode = URL_Object['getCityInfoByProvCode']
  const res_cityList = await getApiData<CityRes>(
    params_cityInfoByProvCode['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: params_cityInfoByProvCode['func'],
      service: params_cityInfoByProvCode['service']
    }
  )

  // 省份趋势信息
  const params_provinceInfoHisByCode = URL_Object['getProvinceInfoHisByCode']
  const res_trendInfo = await getApiData<TrendInfoRes>(
    params_provinceInfoHisByCode['url'],
    {
      req: { provinceCode: GuangDongProvinceCode },
      func: params_provinceInfoHisByCode['func'],
      service: params_provinceInfoHisByCode['service']
    }
  )

  // 城市趋势信息
  const params_cityInfoHisByCode = URL_Object['getCityInfoHisByCode']
  const res_cityTrendInfo = await getApiData<CityTrendRes>(
    params_cityInfoHisByCode['url'],
    {
      req: { cityCode: GuangZhouCityCode },
      func: params_cityInfoHisByCode['func'],
      service: params_cityInfoHisByCode['service']
    }
  )

  // 城市新闻消息
  const params_topicContent = URL_Object['getTopicContent']
  const res_news = await getApiData<ContentsRes>(params_topicContent['url'], {
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
  })

  // 趋势图表信息
  const params_trendChartInfo = URL_Object['getChartInfo']
  const res_chartInfo = await getApiData<TrendChartInfoRes>(
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

  renderResData(resData)
})()
