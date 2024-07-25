import{_ as n,o as s,c as a,d as t}from"./app.d7f6f4fb.js";const p={},e=t(`<h1 id="typescript-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#typescript-\u51FD\u6570" aria-hidden="true">#</a> TypeScript-\u51FD\u6570</h1><ul><li>TypeScript \u51FD\u6570\u4E0E JavaScript \u51FD\u6570\u7684\u533A\u522B</li></ul><table><thead><tr><th style="text-align:center;">TypeScript</th><th style="text-align:right;">JavaScript</th></tr></thead><tbody><tr><td style="text-align:center;">\u542B\u6709\u7C7B\u578B</td><td style="text-align:right;">\u65E0\u7C7B\u578B</td></tr><tr><td style="text-align:center;">\u7BAD\u5934\u51FD\u6570</td><td style="text-align:right;">\u7BAD\u5934\u51FD\u6570\uFF08ES2015\uFF09</td></tr><tr><td style="text-align:center;">\u51FD\u6570\u7C7B\u578B</td><td style="text-align:right;">\u65E0\u51FD\u6570\u7C7B\u578B</td></tr><tr><td style="text-align:center;">\u5FC5\u586B\u548C\u53EF\u9009\u53C2\u6570</td><td style="text-align:right;">\u6240\u6709\u53C2\u6570\u90FD\u662F\u53EF\u9009\u7684</td></tr><tr><td style="text-align:center;">\u9ED8\u8BA4\u53C2\u6570</td><td style="text-align:right;">\u9ED8\u8BA4\u53C2\u6570</td></tr><tr><td style="text-align:center;">\u5269\u4F59\u53C2\u6570</td><td style="text-align:right;">\u5269\u4F59\u53C2\u6570</td></tr><tr><td style="text-align:center;">\u51FD\u6570\u91CD\u8F7D</td><td style="text-align:right;">\u65E0\u51FD\u6570\u91CD\u8F7D</td></tr></tbody></table><ul><li>\u7BAD\u5934\u51FD\u6570</li></ul><p>1.\u5E38\u89C1\u8BED\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>title <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u4F7F\u7528\u793A\u4F8B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u672A\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  self<span class="token punctuation">.</span>publishDate <span class="token operator">=</span> <span class="token number">2016</span><span class="token punctuation">;</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>publishDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528\u7BAD\u5934\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>publishDate <span class="token operator">=</span> <span class="token number">2016</span><span class="token punctuation">;</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>publishDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u53C2\u6570\u7C7B\u578B\u548C\u8FD4\u56DE\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> createUserId <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name <span class="token operator">+</span> id
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u51FD\u6570\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">IdGenerator</span><span class="token operator">:</span> <span class="token punctuation">(</span>chars<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>

<span class="token keyword">const</span> createUserId <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name <span class="token operator">+</span> id
<span class="token punctuation">}</span>

IdGenerator <span class="token operator">=</span> createUserId<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.\u53EF\u9009\u53C2\u6570\u548C\u9ED8\u8BA4\u53C2\u6570</p><p>\u5728\u58F0\u660E\u51FD\u6570\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ? \u53F7\u6765\u5B9A\u4E49\u53EF\u9009\u53C2\u6570\uFF0C\u6BD4\u5982 age?: number \u8FD9\u79CD\u5F62\u5F0F\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5728\u5B9E\u9645\u4F7F\u7528\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u53EF\u9009\u53C2\u6570\u8981\u653E\u5728\u666E\u901A\u53C2\u6570\u7684\u540E\u9762\uFF0C\u4E0D\u7136\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u9519\u8BEF\u3002</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u53EF\u9009\u53C2\u6570</span>
<span class="token keyword">const</span> createUserId <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name <span class="token operator">+</span> id
<span class="token punctuation">}</span>

<span class="token comment">// \u9ED8\u8BA4\u53C2\u6570</span>
<span class="token keyword">const</span> createUserId <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name <span class="token operator">+</span> id
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.\u5269\u4F59\u53C2\u6570</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token operator">...</span>items<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.\u51FD\u6570\u91CD\u8F7D</p><p>\u51FD\u6570\u91CD\u8F7D\u6216\u65B9\u6CD5\u91CD\u8F7D\u662F\u4F7F\u7528\u76F8\u540C\u540D\u79F0\u548C\u4E0D\u540C\u53C2\u6570\u6570\u91CF\u6216\u7C7B\u578B\u521B\u5EFA\u591A\u4E2A\u65B9\u6CD5\u7684\u4E00\u79CD\u80FD\u529B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> Combinable<span class="token punctuation">,</span> b<span class="token operator">:</span> Combinable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// type Combinable = string | number</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> b <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4EE5\u4E0A\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u4E3A add \u51FD\u6570\u63D0\u4F9B\u4E86\u591A\u4E2A\u51FD\u6570\u7C7B\u578B\u5B9A\u4E49\uFF0C\u4ECE\u800C\u5B9E\u73B0\u51FD\u6570\u7684\u91CD\u8F7D\u3002\u5728 TypeScript \u4E2D\u9664\u4E86\u53EF\u4EE5\u91CD\u8F7D\u666E\u901A\u51FD\u6570\u4E4B\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u91CD\u8F7D\u7C7B\u4E2D\u7684\u6210\u5458\u65B9\u6CD5\u3002</p><p>\u65B9\u6CD5\u91CD\u8F7D\u662F\u6307\u5728\u540C\u4E00\u4E2A\u7C7B\u4E2D\u65B9\u6CD5\u540C\u540D\uFF0C\u53C2\u6570\u4E0D\u540C\uFF08\u53C2\u6570\u7C7B\u578B\u4E0D\u540C\u3001\u53C2\u6570\u4E2A\u6570\u4E0D\u540C\u6216\u53C2\u6570\u4E2A\u6570\u76F8\u540C\u65F6\u53C2\u6570\u7684\u5148\u540E\u987A\u5E8F\u4E0D\u540C\uFF09\uFF0C\u8C03\u7528\u65F6\u6839\u636E\u5B9E\u53C2\u7684\u5F62\u5F0F\uFF0C\u9009\u62E9\u4E0E\u5B83\u5339\u914D\u7684\u65B9\u6CD5\u6267\u884C\u64CD\u4F5C\u7684\u4E00\u79CD\u6280\u672F\u3002\u6240\u4EE5\u7C7B\u4E2D\u6210\u5458\u65B9\u6CD5\u6EE1\u8DB3\u91CD\u8F7D\u7684\u6761\u4EF6\u662F\uFF1A\u5728\u540C\u4E00\u4E2A\u7C7B\u4E2D\uFF0C\u65B9\u6CD5\u540D\u76F8\u540C\u4E14\u53C2\u6570\u5217\u8868\u4E0D\u540C\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u4E3E\u4E00\u4E2A\u6210\u5458\u65B9\u6CD5\u91CD\u8F7D\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
  <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> Combinable<span class="token punctuation">,</span> b<span class="token operator">:</span> Combinable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> b <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> calculator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> calculator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;Semlinker&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; Kakuqo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5F53 TypeScript \u7F16\u8BD1\u5668\u5904\u7406\u51FD\u6570\u91CD\u8F7D\u65F6\uFF0C\u5B83\u4F1A\u67E5\u627E\u91CD\u8F7D\u5217\u8868\uFF0C\u5C1D\u8BD5\u4F7F\u7528\u7B2C\u4E00\u4E2A\u91CD\u8F7D\u5B9A\u4E49\u3002 \u5982\u679C\u5339\u914D\u7684\u8BDD\u5C31\u4F7F\u7528\u8FD9\u4E2A\u3002 \u56E0\u6B64\uFF0C\u5728\u5B9A\u4E49\u91CD\u8F7D\u7684\u65F6\u5019\uFF0C\u4E00\u5B9A\u8981\u628A\u6700\u7CBE\u786E\u7684\u5B9A\u4E49\u653E\u5728\u6700\u524D\u9762\u3002\u53E6\u5916\u5728 Calculator \u7C7B\u4E2D\uFF0Cadd(a: Combinable, b: Combinable){ } \u5E76\u4E0D\u662F\u91CD\u8F7D\u5217\u8868\u7684\u4E00\u90E8\u5206\uFF0C\u56E0\u6B64\u5BF9\u4E8E add \u6210\u5458\u65B9\u6CD5\u6765\u8BF4\uFF0C\u6211\u4EEC\u53EA\u5B9A\u4E49\u4E86\u56DB\u4E2A\u91CD\u8F7D\u65B9\u6CD5\u3002</p></div>`,25),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","ts-study-function.html.vue"]]);export{r as default};
