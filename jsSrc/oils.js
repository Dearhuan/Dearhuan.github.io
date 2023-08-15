"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
const OIL_URL = 'http://apis.juhe.cn/gnyj/query';
const OIL_KEY = 'b8757c3851968e979f533f27fc7969c7';
const Filter_City = '广东';
const base = 'oils';
const rootPath = path_1.default.resolve(__dirname, '../');
const mdPath = rootPath + `/docs/${base}`;
const jsonFilePath = `${mdPath}/oilPrice.json`;
const getOilInfo = () => {
    const requestUrl = `${OIL_URL}?key=${OIL_KEY}`;
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(requestUrl)
            .then((res) => {
            res.data.error_code === 0 ? resolve(res.data.result) : reject('error');
        })
            .catch((err) => {
            console.log(err);
        });
    });
};
const dateFormater = (formater, time) => {
    const date = time ? new Date(time) : new Date(), Y = date.getFullYear() + '', M = date.getMonth() + 1, D = date.getDate(), H = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
    return formater
        .replace(/YYYY|yyyy/g, Y)
        .replace(/YY|yy/g, Y.substr(2, 2))
        .replace(/MM/g, (M < 10 ? '0' : '') + M)
        .replace(/DD/g, (D < 10 ? '0' : '') + D)
        .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
        .replace(/mm/g, (m < 10 ? '0' : '') + m)
        .replace(/ss/g, (s < 10 ? '0' : '') + s);
};
const getNowSeconds = () => {
    //本地时间 + 本地时间与格林威治时间的时间差 + GMT+8与格林威治的时间差
    return new Date(new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000);
};
const readDataList = (path) => {
    const list = JSON.parse(fs_1.default.readFileSync(path, 'utf-8'));
    return list;
};
const writeDataList = (path, data) => {
    console.log('正在写入JSON...');
    fs_1.default.writeFileSync(path, JSON.stringify(data));
};
const runTask = async () => {
    // 获取油价信息
    const result = await getOilInfo();
    // 获取广东省油价信息
    const result_GD = result.filter((item) => {
        return item.city === Filter_City;
    })[0];
    const data = readDataList(jsonFilePath);
    console.log(data);
    console.log(result_GD);
    const last_price_92 = Number(data[data.length - 1]['92_price']);
    const last_price_95 = Number(data[data.length - 1]['95_price']);
    const oil_92_price = Number(result_GD['92h']);
    const oil_95_price = Number(result_GD['95h']);
    const oil_92_change = last_price_92 > oil_92_price
        ? `-${(last_price_92 - oil_92_price).toFixed(2)}`
        : `+${(oil_92_price - last_price_92).toFixed(2)}`;
    const oil_95_change = last_price_95 > oil_95_price
        ? `-${(last_price_95 - oil_95_price).toFixed(2)}`
        : `+${(oil_95_price - last_price_95).toFixed(2)}`;
    console.log(last_price_92, oil_92_price, oil_92_change);
    if (last_price_92 != oil_92_price) {
        data.push({
            date: dateFormater('YYYY-MM-DD', getNowSeconds()),
            '92_price': `${oil_92_price}`,
            '92_change': oil_92_change,
            '95_price': `${oil_95_price}`,
            '95_change': oil_95_change
        });
        writeDataList(jsonFilePath, data);
        writeMarkdown(data, result);
    }
};
const writeMarkdown = (gd_list, city_list) => {
    console.log('正在写入Markdown...');
    const writePath = `${mdPath}/oils.md`;
    city_list.unshift(...city_list.splice(city_list.findIndex((item) => {
        return item.city === Filter_City;
    })));
    const markdown = `# 汽油价格趋势数据

|日期|92号汽油|涨跌幅度|95号汽油|涨跌幅度|
|:--:|---:|---:|---:|---:|
${gd_list
        .map((item) => {
        return `|${item.date}|${item['92_price']}|${item['92_change']}|${item['95_price']}|${item['95_change']}|\n`;
    })
        .join('')}

<div id="oil_box" style="width:100%;height:500px;margin-bottom:10px;"></div>

<div id="oil_city_box" style="width:100%;height:800px;margin-bottom:10px;"></div>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {

    }
  },
  mounted () {
    this['oil_box'] = echarts.init(document.getElementById('oil_box'))
    this['oil_city_box'] = echarts.init(document.getElementById('oil_city_box'))

    const option = {
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
        data: [{name: '92号汽油',icon: 'rect'}, {name: '95号汽油',icon: 'rect'}]
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
        return `"${item.date}",`;
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
        return `"${item['92_price']}",`;
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
        return `"${item['95_price']}",`;
    })
        .join('')}]
        }
      ]
    }

    const option_city = {
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
        return `"${item.city}",`;
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
        return `"${item['92h']}",`;
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
        return `"${item['95h']}",`;
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
        return `"${item['98h']}",`;
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
        return `"${item['0h']}",`;
    })
        .join('')}]
        }
      ]
    }
    this['oil_box'].setOption(option)
    this['oil_city_box'].setOption(option_city)

    window.onresize = () => {
      this['oil_box'].resize()
      this['oil_city_box'].resize()
    }
  }
}
</script>`;
    fs_1.default.writeFileSync(writePath, markdown);
};
runTask();
