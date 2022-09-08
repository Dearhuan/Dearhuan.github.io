/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.dealWithNumber =
  exports.joinWithPlus =
  exports.getApiData =
  exports.readFileList =
  exports.URL_Object =
  exports.BaseUrl =
  exports.BaseApiInfo =
  exports.jsonFilePath =
  exports.base =
  exports.mdPath =
  exports.rootPath =
    void 0
const fs_1 = __importDefault(require('fs'))
const path_1 = __importDefault(require('path'))
const axios_1 = __importDefault(require('axios'))
exports.rootPath = path_1.default.resolve(__dirname, '../../../')
exports.mdPath = exports.rootPath + '/docs/chinaNcovs'
exports.base = 'chinaNcovs'
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
      filesList.push({
        text: name,
        link: `/${exports.base}/${name}`
      })
  }
  return filesList
}
exports.readFileList = readFileList
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
