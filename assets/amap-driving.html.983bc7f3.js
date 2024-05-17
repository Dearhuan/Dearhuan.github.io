import{_ as n,o as s,c as a,d as t}from"./app.985706fc.js";var p="/images/amap-driving.png";const e={},o=t('<h1 id="\u9AD8\u5FB7\u5730\u56FE\u9A7E\u8F66\u8DEF\u7EBF\u89C4\u5212\u3010vue3\u3011" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u5FB7\u5730\u56FE\u9A7E\u8F66\u8DEF\u7EBF\u89C4\u5212\u3010vue3\u3011" aria-hidden="true">#</a> \u9AD8\u5FB7\u5730\u56FE\u9A7E\u8F66\u8DEF\u7EBF\u89C4\u5212\u3010Vue3\u3011</h1><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p><img src="'+p+`" alt="driving"></p><h2 id="\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7247\u6BB5" aria-hidden="true">#</a> \u7247\u6BB5</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drive<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AMapKey<span class="token punctuation">,</span> SecurityJsCode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/configs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AMapLoader <span class="token keyword">from</span> <span class="token string">&#39;@amap/amap-jsapi-loader&#39;</span>

<span class="token keyword">let</span> <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

window<span class="token punctuation">[</span><span class="token string">&#39;_AMapSecurityConfig&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">securityJsCode</span><span class="token operator">:</span> SecurityJsCode
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  AMapLoader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> AMapKey<span class="token punctuation">,</span>
    <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">&#39;2.0&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;AMap.DragRoute&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">AMap</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&#39;drive&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">resizeEnable</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token number">116.303843</span><span class="token punctuation">,</span> <span class="token number">39.983412</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token number">116.321354</span><span class="token punctuation">,</span> <span class="token number">39.896436</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token number">116.407012</span><span class="token punctuation">,</span> <span class="token number">39.992093</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">const</span> drive <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>DragRoute</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> path<span class="token punctuation">,</span> AMap<span class="token punctuation">.</span>DrivingPolicy<span class="token punctuation">.</span><span class="token constant">LEAST_FEE</span><span class="token punctuation">)</span>
    drive<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  map<span class="token operator">?.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">#drive</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[o];function l(i,u){return s(),a("div",null,c)}var k=n(e,[["render",l],["__file","amap-driving.html.vue"]]);export{k as default};
