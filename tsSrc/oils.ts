import fs from 'fs'
import path from 'path'
import axios from 'axios'

interface OilItem {
  date: string
  price: string
  change: string
}

interface OilResItem {
  city: string
  '92h': string
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
  const result = await getOilInfo()
  const result_GD = result.filter((item) => {
    return item.city === Filter_City
  })[0]

  const data = readDataList(jsonFilePath)
  console.log(data)
  console.log(result_GD)
  const lastDataPrice = Number(data[data.length - 1]['price'])
  const oil_92h = Number(result_GD['92h'])
  const change =
    lastDataPrice > oil_92h
      ? `-${(lastDataPrice - oil_92h).toFixed(2)}`
      : `+${(oil_92h - lastDataPrice).toFixed(2)}`
  console.log(lastDataPrice, oil_92h, change)
  if (lastDataPrice != oil_92h) {
    data.push({
      date: dateFormater('YYYY-MM-DD', getNowSeconds()),
      price: oil_92h,
      change: change
    })
    writeDataList(jsonFilePath, data)
    writeMarkdown(data)
  }
}

const writeMarkdown = (list: OilItem[]) => {
  console.log('正在写入Markdown...')
  const writePath = `${mdPath}/oils.md`
  const markdown = `# 广州汽油价格趋势

|日期|价格|涨跌|
|:--:|---:|---:|
${list
  .map((item) => {
    return `|${item.date}|${item.price}|${item.change}|\n`
  })
  .join('')}

<div id="92h" style="width:100%;height:500px;margin-bottom:10px;"></div>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {

    }
  },
  mounted () {
    this['92h'] = echarts.init(document.getElementById('92h'))

    const option = {
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
        data: [{name: '广州',icon: 'rect'}]
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
        data: [${list
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
          name: '油价',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [${list
            .map((item) => {
              return `"${item.price}",`
            })
            .join('')}]
        }
      ]
    }
    this['92h'].setOption(option)

    window.onresize = () => {
      this['92h'].resize()
    }
  }
}
</script>`

  fs.writeFileSync(writePath, markdown)
}

runTask()
