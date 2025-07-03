import{_ as n,o as s,c as a,d as t}from"./app.67c6600d.js";const p={},e=t(`<h1 id="vue3\u6309\u9700\u5F15\u5165echarts" tabindex="-1"><a class="header-anchor" href="#vue3\u6309\u9700\u5F15\u5165echarts" aria-hidden="true">#</a> Vue3\u6309\u9700\u5F15\u5165Echarts</h1><h2 id="_1\u3001\u65B0\u5EFAecharts-ts" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u65B0\u5EFAecharts-ts" aria-hidden="true">#</a> 1\u3001\u65B0\u5EFAecharts.ts</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// utils/echarts.ts</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BarChart<span class="token punctuation">,</span> LineChart<span class="token punctuation">,</span> PieChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/charts&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  TitleComponent<span class="token punctuation">,</span>
  TooltipComponent<span class="token punctuation">,</span>
  GridComponent<span class="token punctuation">,</span>
  DatasetComponent<span class="token punctuation">,</span>
  DataZoomComponent
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/components&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> CanvasRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/renderers&#39;</span>

echarts<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  TitleComponent<span class="token punctuation">,</span>
  TooltipComponent<span class="token punctuation">,</span>
  GridComponent<span class="token punctuation">,</span>
  DatasetComponent<span class="token punctuation">,</span>
  DataZoomComponent<span class="token punctuation">,</span>
  PieChart<span class="token punctuation">,</span>
  BarChart<span class="token punctuation">,</span>
  LineChart<span class="token punctuation">,</span>
  CanvasRenderer<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> echarts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2\u3001main-ts\u4E2D\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#_2\u3001main-ts\u4E2D\u6CE8\u518C" aria-hidden="true">#</a> 2\u3001main.ts\u4E2D\u6CE8\u518C</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;./utils/echarts&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Dialog<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;$echarts&#39;</span><span class="token punctuation">,</span> echarts<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3\u3001\u9875\u9762\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u9875\u9762\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> 3\u3001\u9875\u9762\u4E2D\u4F7F\u7528</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>compositionChart<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 280px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> Ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">echarts</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;$echarts&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// echarts\u56FE\u8868</span>
<span class="token keyword">const</span> <span class="token literal-property property">compositionChart</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span>HTMLElement <span class="token operator">|</span> any<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token literal-property property">compositionCharts</span><span class="token operator">:</span> any

<span class="token keyword">const</span> compositionOption <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  compositionCharts <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>compositionChart<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

  compositionOption <span class="token operator">&amp;&amp;</span> compositionCharts<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>compositionOption<span class="token punctuation">)</span>

  window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    compositionCharts<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","echarts-custom-import.html.vue"]]);export{r as default};
