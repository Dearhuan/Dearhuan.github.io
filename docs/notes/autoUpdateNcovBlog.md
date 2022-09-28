---
prev: /notes/weatherBot.md
next: /notes/github-action.md
---
# 自动更新疫情数据小记

::: tip 目的/动机
考虑到烦人的疫情反反复复地爆发，我又懒得专门打开软件去查看疫情相关的信息，于是乎就想着能否每天自动获取疫情数据进行可视化展示，以日期+时间为维度写入个人博客里面，记录一份疫情数据历史；最初的版本使用的Python进行实现，考虑到类型不严谨转而使用TypeScript+NodeJs来实现这个自动更新疫情数据小工具，从此解放双手看数据。
:::

::: tip 整体思路
1.使用Nodejs+TypeScript完成数据获取和文件读写操作

2.使用Github Action完成项目的自动集成(定时任务、拉取、推送、部署)
:::

::: tip 具体步骤
1.使用axios完成网络请求和数据组装

2.解构数据&拼接md文件内容

3.向指定路径写入md文件

4.读取指定路径md文件获取文件列表

5.将文件列表写入JSON文件

6.在配置文件中引入路由配置

7.配置GitHub Action任务完成自动集成
:::


### 数据获取

- 统一接口处理

```ts
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
```

- 接口请求&数据组装

```ts
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
// 数据组装
const resData = {
  chinaRealTimeInfo: res.args.rsp,
  provinceInfos: res_province.args.rsp,
  cityRes: res_cityList.args.rsp,
  trendInfoRes: res_trendInfo.args.rsp,
  cityTrendRes: res_cityTrendInfo.args.rsp,
  contentsRes: res_news.args.rsp,
  trendChartInfoRes: res_chartInfo.args.rsp
}
```

### 文件处理

- 文件读取

```ts
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
```

- 文件写入

```ts
export const writeFileList = (
  path: string,
  data: {
    text: string
    link: string
  }[]
) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
    console.log('写入路由到JSON文件---')
  } catch (error) {
    console.log(error)
  }
}
```

- 文件写入&读取&路由生成

```ts
/**
 * @func writeMdWithContent
 * @param {string} timeStr
 * @param {string} content
 * @desc 写入md文件并更新路由
 */
export const writeMdWithContent = (timeStr: string, content: string) => {
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
```

- 路由引用

```js
// config.js
const routes = require('./public/json/others.json')
const chinaRoutes = require('./public/json/chinaRoutes.json')

// ...
sidebar: [
  // ...
  {
    text: '海外疫情数据',
    children: routes
  },
  {
    text: '国内疫情数据',
    children: chinaRoutes
  }
]
```

### 自动集成

- 使用Github Action的能力完成自动集成操作

```yml
name: ncov_china task
on:
  workflow_dispatch:
  schedule:
    #时间格式 minute hour day month week 设置的时间是UTC 不是北京时间
    - cron: "20 0 * * *"

jobs:
  start:
    # 运行环境为最新版的Ubuntu
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2  

      #安装node.js
      - name: Setup Node.js
        uses: actions/setup-node@v2  
        with:
          node-version: '14'

      # 安装依赖并且执行脚本
      - name: npm install
        run: npm install
      
      - name: Start task
        run: node jsSrc/ncov_china.js

      # 提交并推送修改
      - name: Commit files
        run: |
          git config --local user.email "actions@github.com"
          git config --local user.name "GitHub Action"
          git add .
          git commit -m "update ncov_china_info md file"
      - name: Push changes
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.ACCESS_TOKEN }}
          
      # 生成静态文件
      - name: Build
        run: npm install && npm run docs:build

      # 部署到 GitHub Pages
      - name: Deploy
        # 使用别人写好的一个 action
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          # 这里的 ACCESS_TOKEN 名字需要和下文中的相对应
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          # 打包后的文件部署到哪个分支上
          BRANCH: gh-pages
          # 打包后的文件在哪里
          FOLDER: docs/.vuepress/dist
```