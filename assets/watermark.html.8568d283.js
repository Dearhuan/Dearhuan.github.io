import{_ as t}from"./css-doodle.a82e1741.js";import{_ as p,o as e,c as o,a as n,b as c,h as l,e as s,d as i,r as u}from"./app.f05e1f26.js";const r={},k=n("h1",{id:"\u9632\u7BE1\u6539\u6C34\u5370",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9632\u7BE1\u6539\u6C34\u5370","aria-hidden":"true"},"#"),s(" \u9632\u7BE1\u6539\u6C34\u5370")],-1),d=n("h3",{id:"\u4F7F\u7528\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u4F7F\u7528\u793A\u4F8B")],-1),v=n("img",{src:t},null,-1),m=i(`<div class="custom-container tip"><p class="custom-container-title">\u601D\u8DEF</p><p>\u4F7F\u7528 canvas \u751F\u6210\u80CC\u666F\u56FE\uFF0C\u4F7F\u7528 document.createElement \u6DFB\u52A0\u6C34\u5370\u5143\u7D20\uFF0C\u4F7F\u7528 MutationObserver \u76D1\u63A7\u5143\u7D20\u53D8\u5316\uFF0C\u4F7F\u7528 watchEffect \u91CD\u65B0\u751F\u6210\u6C34\u5370</p></div><h3 id="\u6C34\u5370\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5370\u751F\u6210" aria-hidden="true">#</a> \u6C34\u5370\u751F\u6210</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// useWatermarkBg.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useWatermarkBg</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2Acanvas</span>
    <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> devicePixelRatio <span class="token operator">=</span> window<span class="token punctuation">.</span>devicePixelRatio <span class="token operator">||</span> <span class="token number">1</span>
    <span class="token comment">// \u5B57\u4F53</span>
    <span class="token keyword">const</span> fontSize <span class="token operator">=</span> props<span class="token punctuation">.</span>fontSize <span class="token operator">*</span> devicePixelRatio
    <span class="token keyword">const</span> font <span class="token operator">=</span> fontSize <span class="token operator">+</span> <span class="token string">&#39;px serif&#39;</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u83B7\u53D6\u6587\u5B57\u5BBD\u5EA6</span>
    ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> font
    <span class="token keyword">const</span> <span class="token punctuation">{</span> width <span class="token punctuation">}</span> <span class="token operator">=</span> ctx<span class="token operator">?.</span><span class="token function">measureText</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token keyword">const</span> canvasSize <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> width<span class="token punctuation">)</span> <span class="token operator">+</span> props<span class="token punctuation">.</span>gap <span class="token operator">*</span> devicePixelRatio
    canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> canvasSize
    canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> canvasSize
    ctx<span class="token operator">?.</span><span class="token function">translate</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    ctx<span class="token operator">?.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token operator">-</span><span class="token number">45</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;rgba(0, 0, 0, 0.3)&#39;</span>
    ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> font
    ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">&#39;center&#39;</span>
    ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">&#39;middle&#39;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      base64<span class="token operator">:</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      size<span class="token operator">:</span> canvasSize<span class="token punctuation">,</span>
      styleSize<span class="token operator">:</span> canvasSize <span class="token operator">/</span> devicePixelRatio
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u4EF6\u5C01\u88C5-vue" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5C01\u88C5-vue" aria-hidden="true">#</a> \u7EC4\u4EF6\u5C01\u88C5[vue]</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>watermark-container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parentRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> watchEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useWatermarkBg <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../hooks&#39;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;watermark&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">40</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">20</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bg <span class="token operator">=</span> <span class="token function">useWatermarkBg</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> parentRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> flag <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> div<span class="token punctuation">;</span>

<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  flag<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>parentRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>div<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    div<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> base64<span class="token punctuation">,</span> styleSize <span class="token punctuation">}</span> <span class="token operator">=</span> bg<span class="token punctuation">.</span>value
  div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundImage <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base64<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
  div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundSize <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>styleSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>styleSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
  div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundRepeat <span class="token operator">=</span> <span class="token string">&#39;repeat&#39;</span>
  div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>zIndex <span class="token operator">=</span> <span class="token number">9999</span>
  div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">&#39;absolute&#39;</span>
  div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>inset <span class="token operator">=</span> <span class="token number">0</span>
  parentRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> ob<span class="token punctuation">;</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">records</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> record <span class="token keyword">of</span> records<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> dom <span class="token keyword">of</span> record<span class="token punctuation">.</span>removedNodes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dom <span class="token operator">===</span> div<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          flag<span class="token punctuation">.</span>value<span class="token operator">++</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>record<span class="token punctuation">.</span>target <span class="token operator">===</span> div<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flag<span class="token punctuation">.</span>value<span class="token operator">++</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  ob<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>parentRef<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">subtree</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ob <span class="token operator">&amp;&amp;</span> ob<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  div <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.watermark-container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function b(g,y){const a=u("Watermark");return e(),o("div",null,[k,d,n("div",null,[c(a,{text:"\u7248\u6743\u6C34\u5370"},{default:l(()=>[v]),_:1})]),m])}var h=p(r,[["render",b],["__file","watermark.html.vue"]]);export{h as default};
