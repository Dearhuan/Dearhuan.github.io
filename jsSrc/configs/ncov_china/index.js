import fs from 'fs'
import path from 'path'
import axios from 'axios'
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
export const readFileList = (path) => {
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
export const writeFileList = (path, data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
    console.log('写入路由到JSON文件---')
  } catch (error) {
    console.log(error)
  }
}
/**
 * @func writeMdWithContent
 * @param {string} timeStr
 * @param {string} content
 * @desc 写入md文件并更新路由
 */
export const writeMdWithContent = (timeStr, content) => {
  const writePath = `${mdPath}/${timeStr}.md`
  fs.writeFileSync(writePath, content, 'utf-8')
  console.log(`${timeStr}.md created.`)
  setTimeout(() => {
    const filesList = readFileList(mdPath)
    console.log(mdPath)
    console.log(filesList)
    console.log('读取文件目录生成路由---')
    writeFileList(jsonFilePath, filesList)
  }, 500)
}
/**
 * @func getApiData
 * @param {string} url
 * @param {ApiRequestParams} params
 * @returns {Promise<Result<T>>}
 * @desc 接口统一处理
 */
export const getApiData = async (url, params) => {
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
export const joinWithPlus = (number) => {
  return number > 0 ? '+' + number : number
}
export const dealWithNumber = (number) => {
  return number > 0 ? number : 1
}
export const renderMarkdownTable = (cityInfo) => {
  return cityInfo
    .map((item) => {
      return `|${item.city}|${joinWithPlus(item.localAdd)}|${joinWithPlus(
        item.asymptomAdd
      )}|${joinWithPlus(item.localAddTotal)}|${joinWithPlus(
        item.riskLevelNum
      )}|\n`
    })
    .join('')
}
export const renderNewsCard = (news, area) => {
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
export const getFormatTimeStr = (timeStr) => {
  const year = timeStr.slice(0, 4)
  const month = timeStr.slice(5, 7)
  const day = timeStr.slice(8, 10)
  const hour = timeStr.slice(11, 13)
  const minute = timeStr.slice(14, 16)
  const misc = timeStr.slice(17, 19)
  return `${year}${month}${day}-${hour}${minute}${misc}`
}
