import{i as t}from"./index.fed564b8.js";import{_ as e,o,c as l,a as n,e as a,d as c}from"./app.a65568de.js";const i={data(){return{uid:""}},beforeMount(){this.uid=`echarts-box-${new Date().getTime()}`},mounted(){this.chart=t(document.getElementById(this.uid),"dark");var s;s={title:{text:"Stacked Area Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search     Engine"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]},this.chart.setOption(s)}},r=n("h1",{id:"vuepress\u4F7F\u7528\u53EF\u4EA4\u4E92\u7684echarts\u53EF\u89C6\u5316\u56FE\u8868",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress\u4F7F\u7528\u53EF\u4EA4\u4E92\u7684echarts\u53EF\u89C6\u5316\u56FE\u8868","aria-hidden":"true"},"#"),a(" VuePress\u4F7F\u7528\u53EF\u4EA4\u4E92\u7684echarts\u53EF\u89C6\u5316\u56FE\u8868")],-1),u=n("h2",{id:"\u6548\u679C\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6548\u679C\u793A\u4F8B","aria-hidden":"true"},"#"),a(" \u6548\u679C\u793A\u4F8B")],-1),k=["id"],d=c(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> echarts <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7531\u4E8E\u4F7F\u7528Vue3\u8BED\u6CD5\u62A5\u9519\uFF0C\u8FD9\u91CC\u9009\u62E9\u4F7F\u7528Vue2\u8BED\u6CD5</p></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uid<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>800px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">uid</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>uid <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">echarts-box-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>uid<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> option<span class="token punctuation">;</span>

    option <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Stacked Area Chart&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;cross&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#6a7985&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Email&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Union Ads&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Video Ads&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Direct&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Search     Engine&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">toolbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">feature</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">saveAsImage</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;4%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Email&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">&#39;Total&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token string">&#39;series&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">132</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">134</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Union Ads&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">&#39;Total&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token string">&#39;series&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">182</span><span class="token punctuation">,</span> <span class="token number">191</span><span class="token punctuation">,</span> <span class="token number">234</span><span class="token punctuation">,</span> <span class="token number">290</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Video Ads&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">&#39;Total&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token string">&#39;series&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">232</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">,</span> <span class="token number">154</span><span class="token punctuation">,</span> <span class="token number">190</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">410</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Direct&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">&#39;Total&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token string">&#39;series&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">332</span><span class="token punctuation">,</span> <span class="token number">301</span><span class="token punctuation">,</span> <span class="token number">334</span><span class="token punctuation">,</span> <span class="token number">390</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Search Engine&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">&#39;Total&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token string">&#39;series&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">934</span><span class="token punctuation">,</span> <span class="token number">1290</span><span class="token punctuation">,</span> <span class="token number">1330</span><span class="token punctuation">,</span> <span class="token number">1320</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(s,m,b,y,p,g){return o(),l("div",null,[r,u,n("div",{id:p.uid,style:{width:"100%",height:"800px"}},null,8,k),d])}var x=e(i,[["render",v],["__file","echarts-in-markdown.html.vue"]]);export{x as default};
