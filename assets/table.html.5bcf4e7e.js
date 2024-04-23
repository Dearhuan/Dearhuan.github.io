import{_ as b,f as g,g as n,o as y,c as h,b as l,h as c,d as a,r as f,e as i,t as r}from"./app.79e2e70f.js";const F=a('<h1 id="\u8868\u683C-table" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C-table" aria-hidden="true">#</a> \u8868\u683C Table</h1><br><p><em>\u5C55\u793A\u884C\u5217\u6570\u636E</em></p><h2 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a> \u4F55\u65F6\u4F7F\u7528</h2><ul><li>\u5F53\u6709\u5927\u91CF\u7ED3\u6784\u5316\u7684\u6570\u636E\u9700\u8981\u5C55\u73B0\u65F6</li><li>\u5F53\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u641C\u7D22\u3001\u5206\u9875\u3001\u81EA\u5B9A\u4E49\u64CD\u4F5C\u7B49\u590D\u6742\u884C\u4E3A\u65F6</li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2>',6),C=a(`<details class="custom-container details"><summary>Show Code</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> queryParams <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u540D\u5B57&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5E74\u9F84&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;age&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u804C\u4E1A&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;job&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&#39;job&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6027\u522B&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;sex&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5730\u5740&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;address&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> tableData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Stephen&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token string">&#39;player&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;CaliforniaCaliforniaCaliforniaCaliforniaCaliforniaCalifornia&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Leo&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
          <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token string">&#39;actor&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;LA&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Mr.Dear&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
          <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token string">&#39;boy&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;Beijing&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;superman&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
          <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token string">&#39;boy&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;US&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">getData</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// \u6A21\u62DF\u8C03\u7528\u63A5\u53E3\u83B7\u53D6\u5217\u8868\u6570\u636E</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">onChange</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">pagination</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">page</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">pageSize</span><span class="token operator">:</span> number<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;pagination:&#39;</span><span class="token punctuation">,</span> pagination<span class="token punctuation">)</span>
  queryParams<span class="token punctuation">.</span>value<span class="token punctuation">.</span>page <span class="token operator">=</span> pagination<span class="token punctuation">.</span>page
  queryParams<span class="token punctuation">.</span>value<span class="token punctuation">.</span>pageSize <span class="token operator">=</span> pagination<span class="token punctuation">.</span>pageSize
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>
    <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u914D\u7F6E\u6307\u5B9A\u5217\u6570\u636E --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>record<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      hello {{ record.name }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#job</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ job, index }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      hi {{ job }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="\u52A0\u8F7D\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u4E2D" aria-hidden="true">#</a> \u52A0\u8F7D\u4E2D</h2>`,2),x=a(`<details class="custom-container details"><summary>Show Code</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u540D\u5B57&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5E74\u9F84&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;age&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u804C\u4E1A&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;job&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&#39;job&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6027\u522B&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;sex&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5730\u5740&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;address&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="\u6682\u65E0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u6682\u65E0\u6570\u636E" aria-hidden="true">#</a> \u6682\u65E0\u6570\u636E</h2>`,2),E=a(`<details class="custom-container details"><summary>Show Code</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u540D\u5B57&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5E74\u9F84&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;age&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u804C\u4E1A&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;job&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&#39;job&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6027\u522B&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;sex&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5730\u5740&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&#39;address&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="apis" tabindex="-1"><a class="header-anchor" href="#apis" aria-hidden="true">#</a> APIs</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u4F20</th></tr></thead><tbody><tr><td>columns</td><td>\u8868\u683C\u5217\u7684\u914D\u7F6E\u9879</td><td>Column[]</td><td>[]</td><td>false</td></tr><tr><td>dataSource</td><td>\u8868\u683C\u6570\u636E\u6570\u7EC4</td><td>any[]</td><td>[]</td><td>false</td></tr><tr><td>pagination</td><td>\u5206\u9875\u914D\u7F6E</td><td>Pagination</td><td>{ page: 1, pageSize: 10 }</td><td>false</td></tr><tr><td>showPagination</td><td>\u662F\u5426\u663E\u793A\u5206\u9875</td><td>boolean</td><td>true</td><td>false</td></tr><tr><td>hideOnSinglePage</td><td>\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF\u5206\u9875</td><td>boolean</td><td>false</td><td></td></tr><tr><td>total</td><td>\u6570\u636E\u603B\u6570</td><td>number</td><td>0</td><td>false</td></tr><tr><td>loading</td><td>\u662F\u5426\u52A0\u8F7D\u4E2D</td><td>boolean</td><td>false</td><td>false</td></tr></tbody></table><h2 id="column-type" tabindex="-1"><a class="header-anchor" href="#column-type" aria-hidden="true">#</a> Column Type</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u5FC5\u4F20</th></tr></thead><tbody><tr><td>title</td><td>\u5217\u5934\u663E\u793A\u6587\u5B57</td><td>string</td><td>false</td></tr><tr><td>width</td><td>\u5217\u5BBD\u5EA6</td><td>number | string</td><td>true</td></tr><tr><td>dataIndex</td><td>\u5217\u6570\u636E\u5B57\u7B26\u7D22\u5F15</td><td>string</td><td>true</td></tr><tr><td>slot</td><td>\u5217\u63D2\u69FD\u540D\u79F0\u7D22\u5F15</td><td>string</td><td>false</td></tr></tbody></table><h2 id="pagination-type" tabindex="-1"><a class="header-anchor" href="#pagination-type" aria-hidden="true">#</a> Pagination Type</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u5FC5\u4F20</th></tr></thead><tbody><tr><td>page</td><td>\u5F53\u524D\u9875\u7801</td><td>number</td><td>true</td></tr><tr><td>pageSize</td><td>\u6BCF\u9875\u6761\u6570</td><td>number</td><td>true</td></tr></tbody></table><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5206\u9875\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>(pager: {page: number, pageSize: number}) =&gt; void</td></tr></tbody></table>`,9),q=g({__name:"table.html",setup(D){const t=n(!1),d=n(80),u=n({pageSize:5,page:1}),p=n([{title:"\u540D\u5B57",width:60,dataIndex:"name",slot:"name"},{title:"\u5E74\u9F84",width:30,dataIndex:"age"},{title:"\u804C\u4E1A",width:50,dataIndex:"job",slot:"job"},{title:"\u6027\u522B",width:30,dataIndex:"sex"},{title:"\u5730\u5740",width:100,dataIndex:"address"}]),k=n([{name:"Stephen",age:30,job:"player",sex:"\u7537",address:"CaliforniaCaliforniaCaliforniaCaliforniaCaliforniaCalifornia"},{name:"Leo",age:36,job:"actor",sex:"\u7537",address:"LA"},{name:"Mr.Dear",age:23,job:"boy",sex:"\u7537",address:"Beijing"},{name:"superman",age:32,job:"boy",sex:"\u7537",address:"US"}]);function v(){t.value=!0,setTimeout(()=>{t.value=!1},500)}function m(s){console.log("pagination:",s),u.value.page=s.page,u.value.pageSize=s.pageSize,v()}return(s,w)=>{const e=f("Table");return y(),h("div",null,[F,l(e,{columns:p.value,"data-source":k.value,total:d.value,loading:t.value,onChange:m},{name:c(o=>[i(" hello "+r(o.name),1)]),job:c(({job:o,index:B})=>[i(" hi "+r(o),1)]),_:1},8,["columns","data-source","total","loading"]),C,l(e,{columns:p.value,loading:!0},null,8,["columns"]),x,l(e,{columns:p.value,total:0},null,8,["columns"]),E])}}});var j=b(q,[["__file","table.html.vue"]]);export{j as default};
