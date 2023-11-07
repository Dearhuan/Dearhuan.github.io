import fs from 'fs'
import path from 'path'
import axios from 'axios'

const APPID = 'wx8aa79622b548aba2'

const APPSECRET = '475bccc49e499619a83cce8a0e236562'

const USER_ID = 'oN_Np67LMDL4EE4yCSWVQB2SwoFs'

const TEMPLATE_ID = 'VH3fSCDJhC_WLQTeyLmUXmiO6zMBMfR5ijhRU2cDohQ'

let ACCESS_TOKEN: string

// 第一步，获取ACCESS_TOKEN
const GET_ACCESS_TOKEN_URL = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`

const getAccessToken = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .request({
        method: 'GET',
        url: GET_ACCESS_TOKEN_URL
      })
      .then((res) => {
        console.log(res.data)
        res.data.access_token
          ? resolve(res.data.access_token)
          : reject(res.data.errmsg)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

const sendTemplateMsg = async (data: any) => {
  const url = `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${ACCESS_TOKEN}`
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        touser: USER_ID,
        template_id: TEMPLATE_ID,
        url: 'http://weixin.qq.com/download',
        data: data
      })
      .then((res) => {
        console.log(res.data, '===')
        res.data.errcode == 0 ? resolve('ok') : reject('failed')
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

interface OilItem {
  date: string
  '92_price': string
  '92_change': string
  '95_price': string
  '95_change': string
}

interface OilResItem {
  city: string
  '92h': string
  '95h': string
  '98h': string
  '0h': string
}

const OIL_URL = 'http://apis.juhe.cn/gnyj/query'

const OIL_KEY = 'b8757c3851968e979f533f27fc7969c7'

const Filter_City = '广东'

const base = 'oils'

const rootPath = path.resolve(__dirname, '../')

const mdPath = rootPath + `/docs/${base}`

const jsonFilePath = `${mdPath}/oilPrice.json`

const getOilInfo = (): Promise<OilResItem[]> => {
  const requestUrl = `${OIL_URL}?key=${OIL_KEY}`
  return new Promise((resolve, reject) => {
    axios
      .get(requestUrl)
      .then((res) => {
        res.data.error_code === 0 ? resolve(res.data.result) : reject('error')
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

const dateFormater = (formater: string, time: Date) => {
  const date = time ? new Date(time) : new Date(),
    Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds()
  return formater
    .replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substr(2, 2))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s)
}

const getNowSeconds = () => {
  //本地时间 + 本地时间与格林威治时间的时间差 + GMT+8与格林威治的时间差
  return new Date(
    new Date().getTime() +
      new Date().getTimezoneOffset() * 60 * 1000 +
      8 * 60 * 60 * 1000
  )
}

const readDataList = (path: string) => {
  const list = JSON.parse(fs.readFileSync(path, 'utf-8'))
  return list
}

const writeDataList = (path: string, data: unknown) => {
  console.log('正在写入JSON...')
  fs.writeFileSync(path, JSON.stringify(data))
}

const runTask = async () => {
  // 获取微信 ACCESS_TOKEN
  ACCESS_TOKEN = await getAccessToken()
  // 获取油价信息
  const result = await getOilInfo()
  // 获取广东省油价信息
  const result_GD = result.filter((item) => {
    return item.city === Filter_City
  })[0]

  const data = readDataList(jsonFilePath)
  console.log(data)
  console.log(result_GD)
  const last_price_92 = Number(data[data.length - 1]['92_price'])
  const last_price_95 = Number(data[data.length - 1]['95_price'])
  const oil_92_price = Number(result_GD['92h'])
  const oil_95_price = Number(result_GD['95h'])
  const oil_92_change =
    last_price_92 > oil_92_price
      ? `-${(last_price_92 - oil_92_price).toFixed(2)}`
      : `+${(oil_92_price - last_price_92).toFixed(2)}`
  const oil_95_change =
    last_price_95 > oil_95_price
      ? `-${(last_price_95 - oil_95_price).toFixed(2)}`
      : `+${(oil_95_price - last_price_95).toFixed(2)}`
  console.log(last_price_92, oil_92_price, oil_92_change)
  if (last_price_92 != oil_92_price) {
    data.push({
      date: dateFormater('YYYY-MM-DD', getNowSeconds()),
      '92_price': `${oil_92_price}`,
      '92_change': oil_92_change,
      '95_price': `${oil_95_price}`,
      '95_change': oil_95_change
    })
    sendTemplateMsg({
      keyword1: {
        value: oil_92_price,
        color: '#65c8fe'
      },
      keyword2: {
        value: oil_92_change,
        color: '#113c71'
      },
      keyword3: {
        value: oil_95_price,
        color: '#9698e2'
      },
      keyword4: {
        value: oil_95_change,
        color: '#BB4E75'
      }
    })
    writeDataList(jsonFilePath, data)
    writeMarkdown(data, result)
  }
}

const writeMarkdown = (gd_list: OilItem[], city_list: OilResItem[]) => {
  console.log('正在写入Markdown...')
  const writePath = `${mdPath}/oils.md`
  city_list.unshift(
    ...city_list.splice(
      city_list.findIndex((item) => {
        return item.city === Filter_City
      })
    )
  )

  const markdown = `# 汽油价格趋势数据

## 广州汽油价格变动表

|日期|92号汽油|涨跌幅度|95号汽油|涨跌幅度|
|:--:|---:|---:|---:|---:|
${gd_list
  .map((item) => {
    return `|${item.date}|${item['92_price']}|${item['92_change']}|${item['95_price']}|${item['95_change']}|\n`
  })
  .join('')}

<div>
  <MyChart :option="firstOption" :style="firstStyle" />
  <MyChart :option="secondOption" />
  <OilCalculator :oils="oils"/>
</div>

<script setup lang="ts">
import { ref } from 'vue'

const firstStyle = {
  'height': '400px'
}
const firstOption = {
  title: {
    text: '广州汽油价格变动趋势'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    top: 20,
    data: [{ name: '92号汽油', icon: 'rect' }, { name: '95号汽油', icon: 'rect' }]
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [${gd_list
      .map((item) => {
        return `"${item.date}",`
      })
      .join('')}]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '92号汽油',
      type: 'line',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [${gd_list
        .map((item) => {
          return `"${item['92_price']}",`
        })
        .join('')}]
    },
    {
      name: '95号汽油',
      type: 'line',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [${gd_list
        .map((item) => {
          return `"${item['95_price']}",`
        })
        .join('')}]
    }
  ]
}

const secondOption = {
  title: {
    text: '城市油价总览'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    top: 30
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: [${city_list
      .map((item) => {
        return `"${item.city}",`
      })
      .join('')}]
  },
  series: [
    {
      name: '92汽油',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [${city_list
        .map((item) => {
          return `"${item['92h']}",`
        })
        .join('')}]
    },
    {
      name: '95汽油',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [${city_list
        .map((item) => {
          return `"${item['95h']}",`
        })
        .join('')}]
    },
    {
      name: '98汽油',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [${city_list
        .map((item) => {
          return `"${item['98h']}",`
        })
        .join('')}]
    },
    {
      name: '0号柴油',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [${city_list
        .map((item) => {
          return `"${item['0h']}",`
        })
        .join('')}]
    }
  ]
}

const oils = [
  {
    price: '${gd_list[gd_list.length - 1]['92_price']}',
    rate: '${gd_list[gd_list.length - 1]['92_change']}',
    name: '92号汽油'
  },
  {
    price: '${gd_list[gd_list.length - 1]['95_price']}',
    rate: '${gd_list[gd_list.length - 1]['95_change']}',
    name: '95号汽油'
  },
]
</script>`

  fs.writeFileSync(writePath, markdown)
}

runTask()
