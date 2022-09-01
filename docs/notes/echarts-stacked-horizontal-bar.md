# 在Markdown中使用可交互的echarts可视化图表

## 效果示例

<div id="main" style="width:100%;height:1000px;"></div>

<script>
import * as echarts from 'echarts';

export default {
  mounted() {
    this.chart = echarts.init(document.getElementById('main'),'dark')

    var option = {
      tooltip: {trigger: 'axis',axisPointer: {type: 'shadow'}},
      legend: {},
      grid: {left: '3%',right: '4%',bottom: '3%',containLabel: true},
      xAxis: {type: 'value'},
      yAxis: {type: 'category',data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
      series: [
        {name: 'Direct',type: 'bar',stack: 'total',label: {show: true},emphasis:{focus: 'series'},data: [320, 302, 301, 334, 390, 330, 320]},
        {
          name: 'Mail Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Affiliate Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: 'Search Engine',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    this.chart.setOption(option)
  }
}
</script>