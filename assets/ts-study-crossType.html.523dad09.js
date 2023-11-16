import{_ as n,o as s,c as a,d as e}from"./app.dff44b39.js";const t={},p=e(`<h1 id="typescript-\u4EA4\u53C9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#typescript-\u4EA4\u53C9\u7C7B\u578B" aria-hidden="true">#</a> TypeScript-\u4EA4\u53C9\u7C7B\u578B</h1><p>\u5728 TypeScript \u4E2D\u4EA4\u53C9\u7C7B\u578B\u662F\u5C06\u591A\u4E2A\u7C7B\u578B\u5408\u5E76\u4E3A\u4E00\u4E2A\u7C7B\u578B\u3002\u901A\u8FC7 &amp; \u8FD0\u7B97\u7B26\u53EF\u4EE5\u5C06\u73B0\u6709\u7684\u591A\u79CD\u7C7B\u578B\u53E0\u52A0\u5230\u4E00\u8D77\u6210\u4E3A\u4E00\u79CD\u7C7B\u578B\uFF0C\u5B83\u5305\u542B\u4E86\u6240\u9700\u7684\u6240\u6709\u7C7B\u578B\u7684\u7279\u6027\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">PartialPointX</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> PartialPointX <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> point<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u4EE3\u7801\u4E2D\u6211\u4EEC\u5148\u5B9A\u4E49\u4E86 PartialPointX \u7C7B\u578B\uFF0C\u63A5\u7740\u4F7F\u7528 &amp; \u8FD0\u7B97\u7B26\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Point \u7C7B\u578B\uFF0C\u8868\u793A\u4E00\u4E2A\u542B\u6709 x \u548C y \u5750\u6807\u7684\u70B9\uFF0C\u7136\u540E\u5B9A\u4E49\u4E86\u4E00\u4E2A Point \u7C7B\u578B\u7684\u53D8\u91CF\u5E76\u521D\u59CB\u5316\u3002</p><ul><li>\u540C\u540D\u57FA\u7840\u7C7B\u578B\u5C5E\u6027\u7684\u5408\u5E76</li></ul><p>\u90A3\u4E48\u73B0\u5728\u95EE\u9898\u6765\u4E86\uFF0C\u5047\u8BBE\u5728\u5408\u5E76\u591A\u4E2A\u7C7B\u578B\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u521A\u597D\u51FA\u73B0\u67D0\u4E9B\u7C7B\u578B\u5B58\u5728\u76F8\u540C\u7684\u6210\u5458\uFF0C\u4F46\u5BF9\u5E94\u7684\u7C7B\u578B\u53C8\u4E0D\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">X</span></span> <span class="token punctuation">{</span>
  c<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  d<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">Y</span></span> <span class="token punctuation">{</span>
  c<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  e<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">XY</span></span> <span class="token operator">=</span> <span class="token constant">X</span> <span class="token operator">&amp;</span> <span class="token constant">Y</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">YX</span></span> <span class="token operator">=</span> <span class="token constant">Y</span> <span class="token operator">&amp;</span> <span class="token constant">X</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> p<span class="token operator">:</span> <span class="token constant">XY</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> q<span class="token operator">:</span> <span class="token constant">YX</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u63A5\u53E3 X \u548C\u63A5\u53E3 Y \u90FD\u542B\u6709\u4E00\u4E2A\u76F8\u540C\u7684\u6210\u5458 c\uFF0C\u4F46\u5B83\u4EEC\u7684\u7C7B\u578B\u4E0D\u4E00\u81F4\u3002\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6B64\u65F6 XY \u7C7B\u578B\u6216 YX \u7C7B\u578B\u4E2D\u6210\u5458 c \u7684\u7C7B\u578B\u662F\u4E0D\u662F\u53EF\u4EE5\u662F string \u6216 number \u7C7B\u578B\u5462\uFF1F\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>p <span class="token operator">=</span> <span class="token punctuation">{</span> c<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> d<span class="token operator">:</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> e<span class="token operator">:</span> <span class="token string">&quot;e&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token comment">// Type &#39;number&#39; is not assignable to type &#39;never&#39;.</span>
q <span class="token operator">=</span> <span class="token punctuation">{</span> c<span class="token operator">:</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> d<span class="token operator">:</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> e<span class="token operator">:</span> <span class="token string">&quot;e&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token comment">// Type &#39;string&#39; is not assignable to type &#39;never&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4EC0\u4E48\u63A5\u53E3 X \u548C\u63A5\u53E3 Y \u6DF7\u5165\u540E\uFF0C\u6210\u5458 c \u7684\u7C7B\u578B\u4F1A\u53D8\u6210 never \u5462\uFF1F\u8FD9\u662F\u56E0\u4E3A\u6DF7\u5165\u540E\u6210\u5458 c \u7684\u7C7B\u578B\u4E3A string &amp; number\uFF0C\u5373\u6210\u5458 c \u7684\u7C7B\u578B\u65E2\u53EF\u4EE5\u662F string \u7C7B\u578B\u53C8\u53EF\u4EE5\u662F number \u7C7B\u578B\u3002\u5F88\u660E\u663E\u8FD9\u79CD\u7C7B\u578B\u662F\u4E0D\u5B58\u5728\u7684\uFF0C\u6240\u4EE5\u6DF7\u5165\u540E\u6210\u5458 c \u7684\u7C7B\u578B\u4E3A never\u3002</p><ul><li>\u540C\u540D\u975E\u57FA\u7840\u7C7B\u578B\u5C5E\u6027\u7684\u5408\u5E76</li></ul><p>\u5728\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u521A\u597D\u63A5\u53E3 X \u548C\u63A5\u53E3 Y \u4E2D\u5185\u90E8\u6210\u5458 c \u7684\u7C7B\u578B\u90FD\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u90A3\u4E48\u5982\u679C\u662F\u975E\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u8BDD\uFF0C\u53C8\u4F1A\u662F\u4EC0\u4E48\u60C5\u5F62\u3002\u6211\u4EEC\u6765\u770B\u4E2A\u5177\u4F53\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">D</span></span> <span class="token punctuation">{</span> d<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">E</span></span> <span class="token punctuation">{</span> e<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">F</span></span> <span class="token punctuation">{</span> f<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token constant">D</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token constant">E</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token constant">F</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">ABC</span></span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token operator">&amp;</span> <span class="token constant">B</span> <span class="token operator">&amp;</span> <span class="token constant">C</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> abc<span class="token operator">:</span> <span class="token constant">ABC</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token punctuation">{</span>
    d<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    e<span class="token operator">:</span> <span class="token string">&#39;semlinker&#39;</span><span class="token punctuation">,</span>
    f<span class="token operator">:</span> <span class="token number">666</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;abc:&#39;</span><span class="token punctuation">,</span> abc<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6210\u529F\u8FD0\u884C\u540E\uFF0C\u63A7\u5236\u53F0\u4F1A\u8F93\u51FA\u4EE5\u4E0B\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>abc:{
    &quot;x&quot;: {
        &quot;d&quot;: true,
        &quot;e&quot;: &quot;semlinker&quot;,
        &quot;f&quot;: 666
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E0A\u56FE\u53EF\u77E5\uFF0C\u5728\u6DF7\u5165\u591A\u4E2A\u7C7B\u578B\u65F6\uFF0C\u82E5\u5B58\u5728\u76F8\u540C\u7684\u6210\u5458\uFF0C\u4E14\u6210\u5458\u7C7B\u578B\u4E3A\u975E\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u90A3\u4E48\u662F\u53EF\u4EE5\u6210\u529F\u5408\u5E76\u3002</p>`,16),o=[p];function c(l,i){return s(),a("div",null,o)}var u=n(t,[["render",c],["__file","ts-study-crossType.html.vue"]]);export{u as default};
