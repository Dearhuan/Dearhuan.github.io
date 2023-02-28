---
prev: /notes/echarts-vue3.md
next: /notes/echarts-china-map.md
---
# vue3封装useEcharts

## 使用
```vue
<div ref="containerChart" style="width: 90vw;height: 400px;"></div>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'
import { useEcharts } from '@/utils/echarts/useEcharts'
import { RenderType, ThemeType } from '@/utils/echarts/echarts-type'

const containerChart = ref<HTMLDivElement | null>(null)
const { setOption } = useEcharts(
  containerChart as Ref<HTMLDivElement>, 
  RenderType['SVGRenderer'] , 
  ThemeType['Light'])

onMounted(() => {
  const option = {
    // key: value
  }
  setOption(option)
})
</script>
```

## 基本类型定义
```ts
// echarts/echarts-type.ts
export enum RenderType {
  SVGRenderer = 'SVGRenderer',
  CanvasRenderer = 'SVGRenderer'
}

export enum ThemeType {
  Light = 'light',
  Default = 'default',
}
```

## 资源配置引入（按需）
```ts
// echarts/library.ts
import * as echarts from 'echarts/core';

import {
        BarChart,
        LineChart,
        PieChart,
        MapChart,
        PictorialBarChart,
        RadarChart,
        ScatterChart
} from 'echarts/charts';

import {
        TitleComponent,
        TooltipComponent,
        GridComponent,
        PolarComponent,
        AriaComponent,
        ParallelComponent,
        LegendComponent,
        RadarComponent,
        ToolboxComponent,
        DataZoomComponent,
        VisualMapComponent,
        TimelineComponent,
        CalendarComponent,
        GraphicComponent
} from 'echarts/components';

echarts.use([
        LegendComponent,
        TitleComponent,
        TooltipComponent,
        GridComponent,
        PolarComponent,
        AriaComponent,
        ParallelComponent,
        BarChart,
        LineChart,
        PieChart,
        MapChart,
        RadarChart,
        PictorialBarChart,
        RadarComponent,
        ToolboxComponent,
        DataZoomComponent,
        VisualMapComponent,
        TimelineComponent,
        CalendarComponent,
        GraphicComponent,
        ScatterChart
]);

export default echarts;
```

## useEcharts定义
```ts
// echarts/useEcharts.ts
import { onMounted, onUnmounted, Ref, unref } from 'vue'
import echarts from './library'
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers'
import { RenderType, ThemeType } from './echarts-type'

export function useEcharts(
  elparams: Ref<HTMLElement> | HTMLDivElement, 
  render: RenderType = RenderType.SVGRenderer,
  theme: ThemeType = ThemeType.Default
  ) {
    echarts.use(render === RenderType.SVGRenderer ? SVGRenderer : CanvasRenderer)

    let echartsInstance: echarts.ECharts | null = null

    function initCharts() {
      const el = unref(elparams)
      if (!el) return
      echartsInstance = echarts.init(el, theme)
    }

    function setOption(option: any) {
      showLoading()
      if (!echartsInstance) initCharts()
      if (!echartsInstance) return
      echartsInstance.setOption(option)
      hideLoading()
    }

    function getInstance() {
      if (!echartsInstance) initCharts()
      return echartsInstance
    }

    function onResize() {
      echartsInstance?.resize()
    }

    function showLoading() {
      if (!echartsInstance) initCharts()
      echartsInstance?.showLoading()
    }

    function hideLoading() {
      if (!echartsInstance) initCharts()
      echartsInstance?.hideLoading()
    }

    onMounted(() => {
      window.addEventListener('resize', onResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
    })

    return {
      setOption,
      getInstance
    }
}
```