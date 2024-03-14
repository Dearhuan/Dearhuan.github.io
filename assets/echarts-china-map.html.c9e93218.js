import{_ as e,g as s,o,c as l,b as c,a,e as i,d as u,r}from"./app.2480290c.js";const k=a("h1",{id:"echarts-\u4E2D\u56FD\u5730\u56FE",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#echarts-\u4E2D\u56FD\u5730\u56FE","aria-hidden":"true"},"#"),i(" Echarts-\u4E2D\u56FD\u5730\u56FE")],-1),d=u(`<h3 id="\u7EC4\u4EF6\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9A\u4E49" aria-hidden="true">#</a> \u7EC4\u4EF6\u5B9A\u4E49</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chinaMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chinaMap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span>
<span class="token keyword">import</span> chinaJSON <span class="token keyword">from</span> <span class="token string">&#39;../public/json/china.json&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u6570\u636E\u6E90</span>
  <span class="token literal-property property">dataList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6807\u9898</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6570\u636E\u8303\u56F4\u56FE\u4F8B</span>
  <span class="token literal-property property">pieces</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">gt</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lt</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;0\u4EBA&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#85daef&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">gt</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lt</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;1-10\u4EBA&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#9feaa5&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">gt</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lt</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;10-20\u4EBA&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#74e2ca&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">gt</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;20\u4EBA\u53CA\u4EE5\u4E0A&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#5475f5&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> chinaMap <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> chart <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">const</span> <span class="token function-variable function">initChart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chinaMap<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  echarts<span class="token punctuation">.</span><span class="token function">registerMap</span><span class="token punctuation">(</span><span class="token string">&#39;china&#39;</span><span class="token punctuation">,</span> chinaJSON<span class="token punctuation">)</span>

  <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#FFFFFF&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> props<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
      <span class="token literal-property property">subtext</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;item&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>dataList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> x<span class="token punctuation">.</span>name <span class="token operator">===</span> params<span class="token punctuation">.</span>name
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">?.</span>value <span class="token operator">??</span> <span class="token number">0</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> &lt;br/&gt;
        </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>dataList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> d<span class="token punctuation">.</span>name <span class="token operator">===</span> params<span class="token punctuation">.</span>name
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>addList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span>i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;,&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>p<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>p<span class="token punctuation">.</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> &lt;br/&gt;</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        </span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//\u5DE6\u4FA7\u5C0F\u5BFC\u822A\u56FE\u6807</span>
    <span class="token literal-property property">visualMap</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pieces</span><span class="token operator">:</span> props<span class="token punctuation">.</span>pieces<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//\u914D\u7F6E\u5C5E\u6027</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;map&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mapType</span><span class="token operator">:</span> <span class="token string">&#39;china&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">roam</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">//\u7701\u4EFD\u540D\u79F0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> props<span class="token punctuation">.</span>dataList  <span class="token comment">//\u6570\u636E</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>

  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    chart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">300</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">initChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.chinaMap</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m={__name:"echarts-china-map.html",setup(v){const p=s("\u65B0\u589E\u672C\u571F\u786E\u8BCA"),n=s([]);return n.value=[{name:"\u53F0\u6E7E",value:0,addList:[]},{name:"\u9999\u6E2F",value:0,addList:[]},{name:"\u6E56\u5317",value:5,addList:[{name:"\u8944\u9633",num:5}]},{name:"\u4E0A\u6D77",value:1,addList:[{name:"\u677E\u6C5F",num:1}]},{name:"\u5409\u6797",value:0,addList:[]},{name:"\u5E7F\u4E1C",value:36,addList:[{name:"\u5E7F\u5DDE",num:16},{name:"\u6DF1\u5733",num:10},{name:"\u4F5B\u5C71",num:6},{name:"\u4E2D\u5C71",num:2},{name:"\u6E05\u8FDC",num:1}]},{name:"\u6D77\u5357",value:0,addList:[]},{name:"\u56DB\u5DDD",value:8,addList:[{name:"\u5B9C\u5BBE",num:4},{name:"\u5916\u7701\u8FD4\u5DDD\u4EBA\u5458",num:1},{name:"\u51C9\u5C71",num:1},{name:"\u96C5\u5B89",num:1},{name:"\u4E50\u5C71",num:1}]},{name:"\u798F\u5EFA",value:0,addList:[]},{name:"\u5317\u4EAC",value:14,addList:[{name:"\u671D\u9633",num:4},{name:"\u4E1C\u57CE",num:2},{name:"\u6D77\u6DC0",num:2},{name:"\u4E30\u53F0",num:1},{name:"\u897F\u57CE",num:1}]},{name:"\u5185\u8499\u53E4",value:17,addList:[{name:"\u547C\u548C\u6D69\u7279",num:9},{name:"\u5305\u5934",num:5},{name:"\u4E4C\u6D77",num:2},{name:"\u547C\u4F26\u8D1D\u5C14",num:1}]},{name:"\u9655\u897F",value:9,addList:[{name:"\u897F\u5B89",num:3},{name:"\u6E2D\u5357",num:3},{name:"\u6C49\u4E2D",num:2},{name:"\u5EF6\u5B89",num:1}]},{name:"\u6D59\u6C5F",value:8,addList:[{name:"\u5B81\u6CE2",num:7},{name:"\u53F0\u5DDE",num:1}]},{name:"\u9ED1\u9F99\u6C5F",value:4,addList:[{name:"\u54C8\u5C14\u6EE8",num:4}]},{name:"\u6CB3\u5357",value:6,addList:[{name:"\u90D1\u5DDE",num:6}]},{name:"\u5C71\u4E1C",value:1,addList:[{name:"\u4E34\u6C82",num:1}]},{name:"\u4E91\u5357",value:6,addList:[{name:"\u5FB7\u5B8F\u5DDE",num:3},{name:"\u662D\u901A\u5E02",num:2},{name:"\u7EA2\u6CB3",num:1}]},{name:"\u6C5F\u82CF",value:11,addList:[{name:"\u5357\u4EAC",num:9},{name:"\u65E0\u9521",num:2}]},{name:"\u5929\u6D25",value:0,addList:[]},{name:"\u5E7F\u897F",value:2,addList:[{name:"\u5357\u5B81",num:2}]},{name:"\u6CB3\u5317",value:0,addList:[]},{name:"\u8FBD\u5B81",value:3,addList:[{name:"\u76D8\u9526",num:2},{name:"\u629A\u987A",num:1}]},{name:"\u65B0\u7586",value:8,addList:[{name:"\u4E4C\u9C81\u6728\u9F50",num:6},{name:"\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE",num:2}]},{name:"\u6E56\u5357",value:16,addList:[{name:"\u672A\u516C\u5E03\u6765\u6E90",num:16}]},{name:"\u5B89\u5FBD",value:0,addList:[]},{name:"\u6C5F\u897F",value:0,addList:[]},{name:"\u897F\u85CF",value:2,addList:[{name:"\u62C9\u8428",num:2}]},{name:"\u7518\u8083",value:0,addList:[]},{name:"\u91CD\u5E86",value:2,addList:[{name:"\u6E1D\u5317\u533A",num:1},{name:"\u5DF4\u5357\u533A",num:1}]},{name:"\u8D35\u5DDE",value:0,addList:[]},{name:"\u5C71\u897F",value:46,addList:[{name:"\u5927\u540C",num:32},{name:"\u5415\u6881",num:7},{name:"\u664B\u4E2D",num:3},{name:"\u5FFB\u5DDE",num:3},{name:"\u4E34\u6C7E",num:1}]},{name:"\u6FB3\u95E8",value:0,addList:[]},{name:"\u9752\u6D77",value:0,addList:[]},{name:"\u5B81\u590F",value:3,addList:[{name:"\u94F6\u5DDD",num:3}]},{name:"\u5357\u6D77\u8BF8\u5C9B",value:0,addList:[]}],(b,y)=>{const t=r("ChinaMap");return o(),l("div",null,[k,c(t,{dataList:n.value,title:p.value},null,8,["dataList","title"]),d])}}};var h=e(m,[["__file","echarts-china-map.html.vue"]]);export{h as default};
