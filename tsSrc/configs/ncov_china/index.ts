import fs from 'fs'
import path from 'path'
import axios from 'axios'
import { ApiRequestParams, Result } from './types'

export const rootPath = path.resolve(__dirname, '../../../')

export const mdPath = rootPath + '/docs/chinaNcovs'

export const base = 'chinaNcovs'

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
  GetChartInfoURL: `${BaseApiInfo.BASE_URL}${BaseApiInfo.OUTER_DATA_SERVICE}/getChartInfo`
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
  }
}

/**
 * @func readFileList
 * @param {string} path
 * @returns {object}
 * @desc 读取指定目录下的md文件
 */
export const readFileList = (path: string) => {
  const filesList = []
  const files = fs.readdirSync(path)
  for (const name of files) {
    name.indexOf('.md') > -1 &&
      filesList.push({
        text: name,
        link: `/${base}/${name}`
      })
  }
  return filesList
}

/**
 * @func getApiData
 * @param {string} url
 * @param {ApiRequestParams} params
 * @returns {Promise<Result<T>>}
 * @desc 接口统一处理
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
