import{_ as n,o as s,c as a,d as t}from"./app.b777e9cd.js";const e={},p=t(`<h1 id="vue3\u5C01\u88C5useecharts" tabindex="-1"><a class="header-anchor" href="#vue3\u5C01\u88C5useecharts" aria-hidden="true">#</a> vue3\u5C01\u88C5useEcharts</h1><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>containerChart<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 90vw<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> Ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEcharts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/echarts/useEcharts&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> RenderType<span class="token punctuation">,</span> ThemeType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/echarts/echarts-type&#39;</span>

<span class="token keyword">const</span> containerChart <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLDivElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> setOption <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEcharts</span><span class="token punctuation">(</span>
  containerChart <span class="token keyword">as</span> Ref<span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
  RenderType<span class="token punctuation">[</span><span class="token string">&#39;SVGRenderer&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
  ThemeType<span class="token punctuation">[</span><span class="token string">&#39;Light&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// key: value</span>
  <span class="token punctuation">}</span>
  <span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u672C\u7C7B\u578B\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a> \u57FA\u672C\u7C7B\u578B\u5B9A\u4E49</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// echarts/echarts-type.ts</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> RenderType <span class="token punctuation">{</span>
  SVGRenderer <span class="token operator">=</span> <span class="token string">&#39;SVGRenderer&#39;</span><span class="token punctuation">,</span>
  CanvasRenderer <span class="token operator">=</span> <span class="token string">&#39;CanvasRenderer&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> ThemeType <span class="token punctuation">{</span>
  Light <span class="token operator">=</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span>
  Default <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8D44\u6E90\u914D\u7F6E\u5F15\u5165-\u6309\u9700" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6E90\u914D\u7F6E\u5F15\u5165-\u6309\u9700" aria-hidden="true">#</a> \u8D44\u6E90\u914D\u7F6E\u5F15\u5165\uFF08\u6309\u9700\uFF09</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// echarts/library.ts</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts/core&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
        BarChart<span class="token punctuation">,</span>
        LineChart<span class="token punctuation">,</span>
        PieChart<span class="token punctuation">,</span>
        MapChart<span class="token punctuation">,</span>
        PictorialBarChart<span class="token punctuation">,</span>
        RadarChart<span class="token punctuation">,</span>
        ScatterChart
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/charts&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
        TitleComponent<span class="token punctuation">,</span>
        TooltipComponent<span class="token punctuation">,</span>
        GridComponent<span class="token punctuation">,</span>
        PolarComponent<span class="token punctuation">,</span>
        AriaComponent<span class="token punctuation">,</span>
        ParallelComponent<span class="token punctuation">,</span>
        LegendComponent<span class="token punctuation">,</span>
        RadarComponent<span class="token punctuation">,</span>
        ToolboxComponent<span class="token punctuation">,</span>
        DataZoomComponent<span class="token punctuation">,</span>
        VisualMapComponent<span class="token punctuation">,</span>
        TimelineComponent<span class="token punctuation">,</span>
        CalendarComponent<span class="token punctuation">,</span>
        GraphicComponent
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/components&#39;</span><span class="token punctuation">;</span>

echarts<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        LegendComponent<span class="token punctuation">,</span>
        TitleComponent<span class="token punctuation">,</span>
        TooltipComponent<span class="token punctuation">,</span>
        GridComponent<span class="token punctuation">,</span>
        PolarComponent<span class="token punctuation">,</span>
        AriaComponent<span class="token punctuation">,</span>
        ParallelComponent<span class="token punctuation">,</span>
        BarChart<span class="token punctuation">,</span>
        LineChart<span class="token punctuation">,</span>
        PieChart<span class="token punctuation">,</span>
        MapChart<span class="token punctuation">,</span>
        RadarChart<span class="token punctuation">,</span>
        PictorialBarChart<span class="token punctuation">,</span>
        RadarComponent<span class="token punctuation">,</span>
        ToolboxComponent<span class="token punctuation">,</span>
        DataZoomComponent<span class="token punctuation">,</span>
        VisualMapComponent<span class="token punctuation">,</span>
        TimelineComponent<span class="token punctuation">,</span>
        CalendarComponent<span class="token punctuation">,</span>
        GraphicComponent<span class="token punctuation">,</span>
        ScatterChart
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> echarts<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="useecharts\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#useecharts\u5B9A\u4E49" aria-hidden="true">#</a> useEcharts\u5B9A\u4E49</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// echarts/useEcharts.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> Ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;./library&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SVGRenderer<span class="token punctuation">,</span> CanvasRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/renderers&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> RenderType<span class="token punctuation">,</span> ThemeType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./echarts-type&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useEcharts</span><span class="token punctuation">(</span>
  elparams<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span> <span class="token operator">|</span> HTMLDivElement<span class="token punctuation">,</span> 
  render<span class="token operator">:</span> RenderType <span class="token operator">=</span> RenderType<span class="token punctuation">.</span>SVGRenderer<span class="token punctuation">,</span>
  theme<span class="token operator">:</span> ThemeType <span class="token operator">=</span> ThemeType<span class="token punctuation">.</span>Default
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    echarts<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>render <span class="token operator">===</span> RenderType<span class="token punctuation">.</span>SVGRenderer <span class="token operator">?</span> SVGRenderer <span class="token operator">:</span> CanvasRenderer<span class="token punctuation">)</span>

    <span class="token keyword">let</span> echartsInstance<span class="token operator">:</span> echarts<span class="token punctuation">.</span>ECharts <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">function</span> <span class="token function">initCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>elparams<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">)</span> <span class="token keyword">return</span>
      echartsInstance <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> theme<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>echartsInstance<span class="token punctuation">)</span> <span class="token function">initCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>echartsInstance<span class="token punctuation">)</span> <span class="token keyword">return</span>
      echartsInstance<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
      <span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>echartsInstance<span class="token punctuation">)</span> <span class="token function">initCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> echartsInstance
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">onResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      echartsInstance<span class="token operator">?.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>echartsInstance<span class="token punctuation">)</span> <span class="token function">initCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      echartsInstance<span class="token operator">?.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>echartsInstance<span class="token punctuation">)</span> <span class="token function">initCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      echartsInstance<span class="token operator">?.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> onResize<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> onResize<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      setOption<span class="token punctuation">,</span>
      getInstance
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","useEcharts-vue3.html.vue"]]);export{r as default};
