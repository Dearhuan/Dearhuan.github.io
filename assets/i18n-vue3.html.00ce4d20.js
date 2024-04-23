import{_ as n,o as s,c as a,d as t}from"./app.79e2e70f.js";const p={},e=t(`<h1 id="vue3\u5F15\u5165i18n\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#vue3\u5F15\u5165i18n\u56FD\u9645\u5316" aria-hidden="true">#</a> vue3\u5F15\u5165i18n\u56FD\u9645\u5316</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vue-i18n@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u672C\u914D\u7F6E</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// src/locales/index.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>
<span class="token keyword">import</span> zh <span class="token keyword">from</span> <span class="token string">&#39;./zh&#39;</span>
<span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">&#39;./en&#39;</span>

<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">createI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  locale<span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
  legacy<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  messages<span class="token operator">:</span> <span class="token punctuation">{</span>
    zh<span class="token punctuation">,</span>
    en
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> i18n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u591A\u8BED\u8A00\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u591A\u8BED\u8A00\u914D\u7F6E" aria-hidden="true">#</a> \u591A\u8BED\u8A00\u914D\u7F6E</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// src/locales/en.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  home<span class="token operator">:</span> <span class="token punctuation">{</span>
    Fund<span class="token operator">:</span> <span class="token string">&#39;Fund&#39;</span><span class="token punctuation">,</span>
    Weather<span class="token operator">:</span> <span class="token string">&#39;Weather&#39;</span><span class="token punctuation">,</span>
    Bill<span class="token operator">:</span> <span class="token string">&#39;Bill&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  weather<span class="token operator">:</span> <span class="token punctuation">{</span>
    today<span class="token operator">:</span> <span class="token string">&#39;Today&#39;</span><span class="token punctuation">,</span>
    updated<span class="token operator">:</span> <span class="token string">&#39;Updated&#39;</span><span class="token punctuation">,</span>
    city<span class="token operator">:</span> <span class="token string">&#39;City&#39;</span><span class="token punctuation">,</span>
    temp<span class="token operator">:</span> <span class="token string">&#39;Temp&#39;</span><span class="token punctuation">,</span>
    humidity<span class="token operator">:</span> <span class="token string">&#39;Humidity&#39;</span><span class="token punctuation">,</span>
    wind<span class="token operator">:</span> <span class="token string">&#39;Wind&#39;</span><span class="token punctuation">,</span>
    tips<span class="token operator">:</span> <span class="token string">&#39;Tips&#39;</span><span class="token punctuation">,</span>
    forecast<span class="token operator">:</span> <span class="token string">&#39;Forecast&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// src/locales/zh.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  home<span class="token operator">:</span> <span class="token punctuation">{</span>
    Fund<span class="token operator">:</span> <span class="token string">&#39;\u57FA\u91D1&#39;</span><span class="token punctuation">,</span>
    Weather<span class="token operator">:</span> <span class="token string">&#39;\u5929\u6C14&#39;</span><span class="token punctuation">,</span>
    Bill<span class="token operator">:</span> <span class="token string">&#39;\u8BB0\u8D26\u672C&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  weather<span class="token operator">:</span> <span class="token punctuation">{</span>
    today<span class="token operator">:</span> <span class="token string">&#39;\u4ECA\u5929&#39;</span><span class="token punctuation">,</span>
    updated<span class="token operator">:</span> <span class="token string">&#39;\u66F4\u65B0&#39;</span><span class="token punctuation">,</span>
    city<span class="token operator">:</span> <span class="token string">&#39;\u57CE\u5E02&#39;</span><span class="token punctuation">,</span>
    temp<span class="token operator">:</span> <span class="token string">&#39;\u5929\u6C14&#39;</span><span class="token punctuation">,</span>
    humidity<span class="token operator">:</span> <span class="token string">&#39;\u6E7F\u5EA6&#39;</span><span class="token punctuation">,</span>
    wind<span class="token operator">:</span> <span class="token string">&#39;\u98CE\u5411&#39;</span><span class="token punctuation">,</span>
    tips<span class="token operator">:</span> <span class="token string">&#39;\u63D0\u793A&#39;</span><span class="token punctuation">,</span>
    forecast<span class="token operator">:</span> <span class="token string">&#39;\u9884\u62A5&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u4EF6\u6302\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u6302\u8F7D" aria-hidden="true">#</a> \u63D2\u4EF6\u6302\u8F7D</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">&#39;./locales&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9875\u9762\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u4F7F\u7528" aria-hidden="true">#</a> \u9875\u9762\u4F7F\u7528</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ $t(&#39;weather.tips&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BED\u8A00\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u8BED\u8A00\u5207\u6362" aria-hidden="true">#</a> \u8BED\u8A00\u5207\u6362</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">&gt;</span></span>{{ $t(&#39;home.Fund&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">&gt;</span></span>{{ $t(&#39;home.Weather&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token punctuation">&gt;</span></span>{{ $t(&#39;home.Bill&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn en<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change(&#39;en&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>en<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn zh<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change(&#39;zh&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>zh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> locale <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  locale<span class="token punctuation">.</span>value <span class="token operator">=</span> type
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","i18n-vue3.html.vue"]]);export{r as default};
