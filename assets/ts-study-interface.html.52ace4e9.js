import{_ as n,o as s,c as a,d as e}from"./app.c1c5659b.js";const p={},t=e(`<h1 id="typescript-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#typescript-\u63A5\u53E3" aria-hidden="true">#</a> TypeScript-\u63A5\u53E3</h1><p>\u5728\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u4E2D\uFF0C\u63A5\u53E3\u662F\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u5B83\u662F\u5BF9\u884C\u4E3A\u7684\u62BD\u8C61\uFF0C\u800C\u5177\u4F53\u5982\u4F55\u884C\u52A8\u9700\u8981\u7531\u7C7B\u53BB\u5B9E\u73B0\u3002</p><p>TypeScript \u4E2D\u7684\u63A5\u53E3\u662F\u4E00\u4E2A\u975E\u5E38\u7075\u6D3B\u7684\u6982\u5FF5\uFF0C\u9664\u4E86\u53EF\u7528\u4E8E\u5BF9\u7C7B\u7684\u4E00\u90E8\u5206\u884C\u4E3A\u8FDB\u884C\u62BD\u8C61\u4EE5\u5916\uFF0C\u4E5F\u5E38\u7528\u4E8E\u5BF9\u300C\u5BF9\u8C61\u7684\u5F62\u72B6\uFF08Shape\uFF09\u300D\u8FDB\u884C\u63CF\u8FF0\u3002</p><ul><li>\u5BF9\u8C61\u7684\u5F62\u72B6</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> james<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;james&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53EF\u9009 &amp; \u53EA\u8BFB\u5C5E\u6027</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u8BFB\u5C5E\u6027\u7528\u4E8E\u9650\u5236\u53EA\u80FD\u5728\u5BF9\u8C61\u521A\u521A\u521B\u5EFA\u7684\u65F6\u5019\u4FEE\u6539\u5176\u503C\u3002\u6B64\u5916 TypeScript \u8FD8\u63D0\u4F9B\u4E86 ReadonlyArray&lt;T&gt; \u7C7B\u578B\uFF0C\u5B83\u4E0E Array&lt;T&gt; \u76F8\u4F3C\uFF0C\u53EA\u662F\u628A\u6240\u6709\u53EF\u53D8\u65B9\u6CD5\u53BB\u6389\u4E86\uFF0C\u56E0\u6B64\u53EF\u4EE5\u786E\u4FDD\u6570\u7EC4\u521B\u5EFA\u540E\u518D\u4E5F\u4E0D\u80FD\u88AB\u4FEE\u6539\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> a<span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// error</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// error</span>
arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// error</span>
a <span class="token operator">=</span> arr<span class="token punctuation">;</span> <span class="token comment">// error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4EFB\u610F\u5C5E\u6027</li></ul><p>\u6709\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u4E00\u4E2A\u63A5\u53E3\u4E2D\u9664\u4E86\u5305\u542B\u5FC5\u9009\u548C\u53EF\u9009\u5C5E\u6027\u4E4B\u5916\uFF0C\u8FD8\u5141\u8BB8\u6709\u5176\u4ED6\u7684\u4EFB\u610F\u5C5E\u6027\uFF0C\u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<strong>\u7D22\u5F15\u7B7E\u540D</strong>\u7684\u5F62\u5F0F\u6765\u6EE1\u8DB3\u4E0A\u8FF0\u8981\u6C42\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;james&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;james&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p3 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;james&#39;</span><span class="token punctuation">,</span> sex<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u63A5\u53E3\u4E0E\u7C7B\u578B\u522B\u540D\u7684\u533A\u522B</li></ul><p>1.Objects/Functions</p><p>\u63A5\u53E3\u548C\u7C7B\u578B\u522B\u540D\u90FD\u53EF\u4EE5\u7528\u6765\u63CF\u8FF0\u5BF9\u8C61\u7684\u5F62\u72B6\u6216\u51FD\u6570\u7B7E\u540D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SetPoint</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">SetPoint</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.Other Types</p><p>\u4E0E\u63A5\u53E3\u7C7B\u578B\u4E0D\u4E00\u6837\uFF0C\u7C7B\u578B\u522B\u540D\u53EF\u4EE5\u7528\u4E8E\u4E00\u4E9B\u5176\u4ED6\u7C7B\u578B\uFF0C\u6BD4\u5982\u539F\u59CB\u7C7B\u578B\u3001\u8054\u5408\u7C7B\u578B\u548C\u5143\u7EC4\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// primitive</span>
<span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token comment">// object</span>
<span class="token keyword">type</span> <span class="token class-name">PointX</span> <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">PointY</span> <span class="token operator">=</span> <span class="token punctuation">{</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// union</span>
<span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> PointX <span class="token operator">|</span> PointY

<span class="token comment">// tuple</span>
<span class="token keyword">type</span> <span class="token class-name">Data</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.Extend</p><p>\u63A5\u53E3\u548C\u7C7B\u578B\u522B\u540D\u90FD\u80FD\u591F\u88AB\u6269\u5C55\uFF0C\u4F46\u8BED\u6CD5\u6709\u6240\u4E0D\u540C\u3002\u6B64\u5916\uFF0C\u63A5\u53E3\u548C\u7C7B\u578B\u522B\u540D\u4E0D\u662F\u4E92\u65A5\u7684\u3002\u63A5\u53E3\u53EF\u4EE5\u6269\u5C55\u7C7B\u578B\u522B\u540D\uFF0C\u800C\u53CD\u8FC7\u6765\u662F\u4E0D\u884C\u7684\u3002</p><p>Interface extends interface</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PartialPointX</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token keyword">extends</span> <span class="token class-name">PartialPointX</span> <span class="token punctuation">{</span> 
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Type alias extends type alias</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">PartialPointX</span> <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> PartialPointX <span class="token operator">&amp;</span> <span class="token punctuation">{</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Interface extends type alias</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">PartialPointX</span> <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token keyword">extends</span> <span class="token class-name">PartialPointX</span> <span class="token punctuation">{</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Type alias extends interface</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PartialPointX</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> PartialPointX <span class="token operator">&amp;</span> <span class="token punctuation">{</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.Implements</p><p>\u7C7B\u53EF\u4EE5\u4EE5\u76F8\u540C\u7684\u65B9\u5F0F\u5B9E\u73B0\u63A5\u53E3\u6216\u7C7B\u578B\u522B\u540D\uFF0C\u4F46\u7C7B\u4E0D\u80FD\u5B9E\u73B0\u4F7F\u7528\u7C7B\u578B\u522B\u540D\u5B9A\u4E49\u7684\u8054\u5408\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SomePoint</span> <span class="token keyword">implements</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Point2</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">SomePoint2</span> <span class="token keyword">implements</span> <span class="token class-name">Point2</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PartialPoint</span> <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// A class can only implement an object type or </span>
<span class="token comment">// intersection of object types with statically known members.</span>
<span class="token keyword">class</span> <span class="token class-name">SomePartialPoint</span> <span class="token keyword">implements</span> <span class="token class-name">PartialPoint</span> <span class="token punctuation">{</span> <span class="token comment">// Error</span>
  x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.Declaration merging</p><p>\u4E0E\u7C7B\u578B\u522B\u540D\u4E0D\u540C\uFF0C\u63A5\u53E3\u53EF\u4EE5\u5B9A\u4E49\u591A\u6B21\uFF0C\u4F1A\u88AB\u81EA\u52A8\u5408\u5E76\u4E3A\u5355\u4E2A\u63A5\u53E3\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),o=[t];function l(c,i){return s(),a("div",null,o)}var u=n(p,[["render",l],["__file","ts-study-interface.html.vue"]]);export{u as default};
