# 汽油价格趋势数据

|日期|92号汽油|涨跌幅度|95号汽油|涨跌幅度|
|:--:|---:|---:|---:|---:|
|2022-12-05|7.99|-0.35|8.65|-0.39|
|2022-12-19|7.60|-0.39|8.24|-0.41|
|2023-01-03|7.80|+0.20|8.45|+0.21|
|2023-01-17|7.64|-0.16|8.28|-0.17|
|2023-02-03|7.81|+0.17|8.46|+0.18|
|2023-02-17|7.81|0|8.46|0|
|2023-03-03|7.81|0|8.46|0|
|2023-03-17|7.73|-0.08|8.37|-0.09|
|2023-03-31|7.46|-0.27|8.08|-0.29|
|2023-04-17|7.90|+0.44|8.56|+0.48|
|2023-04-28|7.77|-0.13|8.42|-0.14|
|2023-05-16|7.47|-0.30|8.09|-0.33|
|2023-05-30|7.55|+0.08|8.18|+0.09|
|2023-06-13|7.50|-0.05|8.00|+0.20|
|2023-06-28|7.56|+0.06|8.13|-0.05|
|2023-07-12|7.68|+0.12|8.32|+0.13|
|2023-07-26|7.90|+0.20|8.56|+0.43|
|2023-08-09|8.01|+0.20|8.07|+0.21|
|2023-08-15|8.1|+0.09|8.77|+0.70|


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
        data: ["2022-12-05","2022-12-19","2023-01-03","2023-01-17","2023-02-03","2023-02-17","2023-03-03","2023-03-17","2023-03-31","2023-04-17","2023-04-28","2023-05-16","2023-05-30","2023-06-13","2023-06-28","2023-07-12","2023-07-26","2023-08-09","2023-08-15",]
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
          data: ["7.99","7.60","7.80","7.64","7.81","7.81","7.81","7.73","7.46","7.90","7.77","7.47","7.55","7.50","7.56","7.68","7.90","8.01","8.1",]
        },
        {
          name: '95号汽油',
          type: 'line',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: ["8.65","8.24","8.45","8.28","8.46","8.46","8.46","8.37","8.08","8.56","8.42","8.09","8.18","8.00","8.13","8.32","8.56","8.07","8.77",]
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
        data: [广东山东广西山西贵州陕西海南四川河北西藏河南新疆黑龙江吉林云南湖北浙江湖南北京上海江苏天津重庆江西辽宁安徽内蒙古福建宁夏甘肃青海]
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
          data: [8.108.048.138.028.217.969.198.178.078.958.097.858.048.048.228.098.058.028.088.048.058.078.148.038.058.038.018.047.978.088.03]
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
          data: [8.778.638.798.668.678.419.768.738.539.478.638.418.618.678.838.668.568.538.608.558.568.538.608.638.588.598.558.588.438.628.61]
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
          data: [9.919.359.939.369.5711.0411.069.499.3610.559.299.399.769.459.519.709.379.339.589.5510.069.819.6810.139.359.619.389.589.6009.38]
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
          data: [7.757.667.807.827.857.647.837.797.758.287.737.527.547.667.827.747.737.827.807.737.717.757.817.807.657.797.627.747.637.657.67]
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
</script>