import{_ as n,o as s,c as a,d as e}from"./app.dbdf7bcb.js";const p={},t=e(`<h1 id="typescript-\u6570\u7EC4\u548C\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#typescript-\u6570\u7EC4\u548C\u5BF9\u8C61" aria-hidden="true">#</a> TypeScript-\u6570\u7EC4\u548C\u5BF9\u8C61</h1><ul><li>\u6570\u7EC4\u89E3\u6784</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token keyword">let</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token keyword">let</span> z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6570\u7EC4\u5C55\u5F00\u8FD0\u7B97\u7B26</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6570\u7EC4\u904D\u5386</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> colors<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// let colors: Array&lt;string&gt; = [&#39;red&#39;,&#39;green&#39;,&#39;blue&#39;];</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> colors<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BF9\u8C61\u89E3\u6784</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  sex<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> sex <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BF9\u8C61\u5C55\u5F00\u8FD0\u7B97\u7B26</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  sex<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
  address<span class="token operator">:</span> <span class="token string">&#39;China&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7EC4\u88C5\u5BF9\u8C61</span>
<span class="token keyword">let</span> personA <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>person<span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u9664\u4E86\u67D0\u4E9B\u9879\u5916\u7684\u5176\u4ED6\u9879</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[t];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","ts-study-array&object.html.vue"]]);export{r as default};
