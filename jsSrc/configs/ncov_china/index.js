'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.getFormatTimeStr =
  exports.renderNewsCard =
  exports.renderMarkdownTable =
  exports.dealWithNumber =
  exports.joinWithPlus =
  exports.getApiData =
  exports.writeMdWithContent =
  exports.writeFileList =
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
const writeFileList = (path, data) => {
  try {
    fs_1.default.writeFileSync(path, JSON.stringify(data))
    console.log('写入路由到JSON文件---')
  } catch (error) {
    console.log(error)
  }
}
exports.writeFileList = writeFileList
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
    console.log('读取文件目录生成路由---')
    ;(0, exports.writeFileList)(exports.jsonFilePath, filesList)
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
