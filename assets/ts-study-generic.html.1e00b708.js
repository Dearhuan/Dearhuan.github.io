import{_ as n,o as s,c as a,d as p}from"./app.fb459008.js";const t={},e=p(`<h1 id="typescript-\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#typescript-\u6CDB\u578B" aria-hidden="true">#</a> TypeScript-\u6CDB\u578B</h1><p>\u8F6F\u4EF6\u5DE5\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u4E0D\u4EC5\u8981\u521B\u5EFA\u4E00\u81F4\u7684\u5B9A\u4E49\u826F\u597D\u7684 API\uFF0C\u540C\u65F6\u4E5F\u8981\u8003\u8651\u53EF\u91CD\u7528\u6027\u3002 \u7EC4\u4EF6\u4E0D\u4EC5\u80FD\u591F\u652F\u6301\u5F53\u524D\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u540C\u65F6\u4E5F\u80FD\u652F\u6301\u672A\u6765\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8FD9\u5728\u521B\u5EFA\u5927\u578B\u7CFB\u7EDF\u65F6\u4E3A\u4F60\u63D0\u4F9B\u4E86\u5341\u5206\u7075\u6D3B\u7684\u529F\u80FD\u3002</p><p>\u5728\u50CF C# \u548C Java \u8FD9\u6837\u7684\u8BED\u8A00\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6CDB\u578B\u6765\u521B\u5EFA\u53EF\u91CD\u7528\u7684\u7EC4\u4EF6\uFF0C\u4E00\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u652F\u6301\u591A\u79CD\u7C7B\u578B\u7684\u6570\u636E\u3002 \u8FD9\u6837\u7528\u6237\u5C31\u53EF\u4EE5\u4EE5\u81EA\u5DF1\u7684\u6570\u636E\u7C7B\u578B\u6765\u4F7F\u7528\u7EC4\u4EF6\u3002</p><p>\u8BBE\u8BA1\u6CDB\u578B\u7684\u5173\u952E\u76EE\u7684\u662F\u5728\u6210\u5458\u4E4B\u95F4\u63D0\u4F9B\u6709\u610F\u4E49\u7684\u7EA6\u675F\uFF0C\u8FD9\u4E9B\u6210\u5458\u53EF\u4EE5\u662F\uFF1A\u7C7B\u7684\u5B9E\u4F8B\u6210\u5458\u3001\u7C7B\u7684\u65B9\u6CD5\u3001\u51FD\u6570\u53C2\u6570\u548C\u51FD\u6570\u8FD4\u56DE\u503C\u3002</p><p>\u6CDB\u578B\uFF08Generics\uFF09\u662F\u5141\u8BB8\u540C\u4E00\u4E2A\u51FD\u6570\u63A5\u53D7\u4E0D\u540C\u7C7B\u578B\u53C2\u6570\u7684\u4E00\u79CD\u6A21\u677F\u3002\u76F8\u6BD4\u4E8E\u4F7F\u7528 any \u7C7B\u578B\uFF0C\u4F7F\u7528\u6CDB\u578B\u6765\u521B\u5EFA\u53EF\u590D\u7528\u7684\u7EC4\u4EF6\u8981\u66F4\u597D\uFF0C\u56E0\u4E3A\u6CDB\u578B\u4F1A\u4FDD\u7559\u53C2\u6570\u7C7B\u578B\u3002</p><ul><li>\u6CDB\u578B\u8BED\u6CD5</li></ul><p>\u5BF9\u4E8E\u521A\u63A5\u89E6 TypeScript \u6CDB\u578B\u7684\u8BFB\u8005\u6765\u8BF4\uFF0C\u9996\u6B21\u770B\u5230 &lt;T&gt; \u8BED\u6CD5\u4F1A\u611F\u5230\u964C\u751F\u3002\u5176\u5B9E\u5B83\u6CA1\u6709\u4EC0\u4E48\u7279\u522B\uFF0C\u5C31\u50CF\u4F20\u9012\u53C2\u6570\u4E00\u6837\uFF0C\u6211\u4EEC\u4F20\u9012\u4E86\u6211\u4EEC\u60F3\u8981\u7528\u4E8E\u7279\u5B9A\u51FD\u6570\u8C03\u7528\u7684\u7C7B\u578B\u3002</p><p>\u53C2\u8003\u4E0A\u9762\u7684\u56FE\u7247\uFF0C\u5F53\u6211\u4EEC\u8C03\u7528 identity&lt;Number&gt;(1) \uFF0CNumber \u7C7B\u578B\u5C31\u50CF\u53C2\u6570 1 \u4E00\u6837\uFF0C\u5B83\u5C06\u5728\u51FA\u73B0 T \u7684\u4EFB\u4F55\u4F4D\u7F6E\u586B\u5145\u8BE5\u7C7B\u578B\u3002\u56FE\u4E2D &lt;T&gt; \u5185\u90E8\u7684 T \u88AB\u79F0\u4E3A\u7C7B\u578B\u53D8\u91CF\uFF0C\u5B83\u662F\u6211\u4EEC\u5E0C\u671B\u4F20\u9012\u7ED9 identity \u51FD\u6570\u7684\u7C7B\u578B\u5360\u4F4D\u7B26\uFF0C\u540C\u65F6\u5B83\u88AB\u5206\u914D\u7ED9 value \u53C2\u6570\u7528\u6765\u4EE3\u66FF\u5B83\u7684\u7C7B\u578B\uFF1A\u6B64\u65F6 T \u5145\u5F53\u7684\u662F\u7C7B\u578B\uFF0C\u800C\u4E0D\u662F\u7279\u5B9A\u7684 Number \u7C7B\u578B\u3002</p><p>\u5176\u4E2D T \u4EE3\u8868 Type\uFF0C\u5728\u5B9A\u4E49\u6CDB\u578B\u65F6\u901A\u5E38\u7528\u4F5C\u7B2C\u4E00\u4E2A\u7C7B\u578B\u53D8\u91CF\u540D\u79F0\u3002\u4F46\u5B9E\u9645\u4E0A T \u53EF\u4EE5\u7528\u4EFB\u4F55\u6709\u6548\u540D\u79F0\u4EE3\u66FF\u3002\u9664\u4E86 T \u4E4B\u5916\uFF0C\u4EE5\u4E0B\u662F\u5E38\u89C1\u6CDB\u578B\u53D8\u91CF\u4EE3\u8868\u7684\u610F\u601D\uFF1A</p><p>K\uFF08Key\uFF09\uFF1A\u8868\u793A\u5BF9\u8C61\u4E2D\u7684\u952E\u7C7B\u578B\uFF1B V\uFF08Value\uFF09\uFF1A\u8868\u793A\u5BF9\u8C61\u4E2D\u7684\u503C\u7C7B\u578B\uFF1B E\uFF08Element\uFF09\uFF1A\u8868\u793A\u5143\u7D20\u7C7B\u578B\u3002 \u5176\u5B9E\u5E76\u4E0D\u662F\u53EA\u80FD\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u578B\u53D8\u91CF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F15\u5165\u5E0C\u671B\u5B9A\u4E49\u7684\u4EFB\u4F55\u6570\u91CF\u7684\u7C7B\u578B\u53D8\u91CF\u3002\u6BD4\u5982\u6211\u4EEC\u5F15\u5165\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B\u53D8\u91CF U\uFF0C\u7528\u4E8E\u6269\u5C55\u6211\u4EEC\u5B9A\u4E49\u7684 identity \u51FD\u6570\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span>Number<span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">68</span><span class="token punctuation">,</span> <span class="token string">&quot;Semlinker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u4E86\u4E3A\u7C7B\u578B\u53D8\u91CF\u663E\u5F0F\u8BBE\u5B9A\u503C\u4E4B\u5916\uFF0C\u4E00\u79CD\u66F4\u5E38\u89C1\u7684\u505A\u6CD5\u662F\u4F7F\u7F16\u8BD1\u5668\u81EA\u52A8\u9009\u62E9\u8FD9\u4E9B\u7C7B\u578B\uFF0C\u4ECE\u800C\u4F7F\u4EE3\u7801\u66F4\u7B80\u6D01\u3002\u6211\u4EEC\u53EF\u4EE5\u5B8C\u5168\u7701\u7565\u5C16\u62EC\u53F7\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">identity</span><span class="token punctuation">(</span><span class="token number">68</span><span class="token punctuation">,</span> <span class="token string">&quot;Semlinker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u7F16\u8BD1\u5668\u8DB3\u591F\u806A\u660E\uFF0C\u80FD\u591F\u77E5\u9053\u6211\u4EEC\u7684\u53C2\u6570\u7C7B\u578B\uFF0C\u5E76\u5C06\u5B83\u4EEC\u8D4B\u503C\u7ED9 T \u548C U\uFF0C\u800C\u4E0D\u9700\u8981\u5F00\u53D1\u4EBA\u5458\u663E\u5F0F\u6307\u5B9A\u5B83\u4EEC\u3002</p><ul><li>\u6CDB\u578B\u63A5\u53E3</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GenericIdentityFn<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6CDB\u578B\u7C7B</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  zeroValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGenericNumber <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myGenericNumber<span class="token punctuation">.</span>zeroValue <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
myGenericNumber<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6CDB\u578B\u5DE5\u5177\u7C7B\u578B</li></ul><p>\u4E3A\u4E86\u65B9\u4FBF\u5F00\u53D1\u8005 TypeScript \u5185\u7F6E\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u5DE5\u5177\u7C7B\u578B\uFF0C\u6BD4\u5982 Partial\u3001Required\u3001Readonly\u3001Record \u548C ReturnType \u7B49\u3002\u51FA\u4E8E\u7BC7\u5E45\u8003\u8651\uFF0C\u8FD9\u91CC\u6211\u4EEC\u53EA\u7B80\u5355\u4ECB\u7ECD Partial \u5DE5\u5177\u7C7B\u578B\u3002\u4E0D\u8FC7\u5728\u5177\u4F53\u4ECB\u7ECD\u4E4B\u524D\uFF0C\u6211\u4EEC\u5F97\u5148\u4ECB\u7ECD\u4E00\u4E9B\u76F8\u5173\u7684\u57FA\u7840\u77E5\u8BC6\uFF0C\u65B9\u4FBF\u8BFB\u8005\u81EA\u884C\u5B66\u4E60\u5176\u5B83\u7684\u5DE5\u5177\u7C7B\u578B\u3002</p><p>1.typeof</p><p>\u5728 TypeScript \u4E2D\uFF0Ctypeof \u64CD\u4F5C\u7B26\u53EF\u4EE5\u7528\u6765\u83B7\u53D6\u4E00\u4E2A\u53D8\u91CF\u58F0\u660E\u6216\u5BF9\u8C61\u7684\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> sem<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;semlinker&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">33</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Sem</span><span class="token operator">=</span> <span class="token keyword">typeof</span> sem<span class="token punctuation">;</span> <span class="token comment">// -&gt; Person</span>

<span class="token keyword">function</span> <span class="token function">toArray</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Func</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> toArray<span class="token punctuation">;</span> <span class="token comment">// -&gt; (x: number) =&gt; number[]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.keyof</p><p>keyof \u64CD\u4F5C\u7B26\u662F\u5728 TypeScript 2.1 \u7248\u672C\u5F15\u5165\u7684\uFF0C\u8BE5\u64CD\u4F5C\u7B26\u53EF\u4EE5\u7528\u4E8E\u83B7\u53D6\u67D0\u79CD\u7C7B\u578B\u7684\u6240\u6709\u952E\uFF0C\u5176\u8FD4\u56DE\u7C7B\u578B\u662F\u8054\u5408\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">K1</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Person<span class="token punctuation">;</span> <span class="token comment">// &quot;name&quot; | &quot;age&quot;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">K2</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Person<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;length&quot; | &quot;toString&quot; | &quot;pop&quot; | &quot;push&quot; | &quot;concat&quot; | &quot;join&quot; </span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">K3</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> Person <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// string | number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 TypeScript \u4E2D\u652F\u6301\u4E24\u79CD\u7D22\u5F15\u7B7E\u540D\uFF0C\u6570\u5B57\u7D22\u5F15\u548C\u5B57\u7B26\u4E32\u7D22\u5F15\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">StringArray</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B57\u7B26\u4E32\u7D22\u5F15 -&gt; keyof StringArray =&gt; string | number</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">StringArray1</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6570\u5B57\u7D22\u5F15 -&gt; keyof StringArray1 =&gt; number</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u540C\u65F6\u652F\u6301\u4E24\u79CD\u7D22\u5F15\u7C7B\u578B\uFF0C\u5C31\u5F97\u8981\u6C42\u6570\u5B57\u7D22\u5F15\u7684\u8FD4\u56DE\u503C\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u7D22\u5F15\u8FD4\u56DE\u503C\u7684\u5B50\u7C7B\u3002\u5176\u4E2D\u7684\u539F\u56E0\u5C31\u662F\u5F53\u4F7F\u7528\u6570\u503C\u7D22\u5F15\u65F6\uFF0CJavaScript \u5728\u6267\u884C\u7D22\u5F15\u64CD\u4F5C\u65F6\uFF0C\u4F1A\u5148\u628A\u6570\u503C\u7D22\u5F15\u5148\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u7D22\u5F15\u3002\u6240\u4EE5 keyof { [x: string]: Person } \u7684\u7ED3\u679C\u4F1A\u8FD4\u56DE string | number\u3002</p><p>3.in</p><p>in \u7528\u6765\u904D\u5386\u679A\u4E3E\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Keys</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;b&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;c&quot;</span>

<span class="token keyword">type</span> <span class="token class-name">Obj</span> <span class="token operator">=</span>  <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>p <span class="token keyword">in</span> Keys<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span> <span class="token comment">// -&gt; { a: any, b: any, c: any }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.infer</p><p>\u5728\u6761\u4EF6\u7C7B\u578B\u8BED\u53E5\u4E2D\uFF0C\u53EF\u4EE5\u7528 infer \u58F0\u660E\u4E00\u4E2A\u7C7B\u578B\u53D8\u91CF\u5E76\u4E14\u5BF9\u5B83\u8FDB\u884C\u4F7F\u7528\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ReturnType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span>
  <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u4E2D infer R \u5C31\u662F\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u6765\u627F\u8F7D\u4F20\u5165\u51FD\u6570\u7B7E\u540D\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u7B80\u5355\u8BF4\u5C31\u662F\u7528\u5B83\u53D6\u5230\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u65B9\u4FBF\u4E4B\u540E\u4F7F\u7528\u3002</p><p>5.extends</p><p>\u6709\u65F6\u5019\u6211\u4EEC\u5B9A\u4E49\u7684\u6CDB\u578B\u4E0D\u60F3\u8FC7\u4E8E\u7075\u6D3B\u6216\u8005\u8BF4\u60F3\u7EE7\u627F\u67D0\u4E9B\u7C7B\u7B49\uFF0C\u53EF\u4EE5\u901A\u8FC7 extends \u5173\u952E\u5B57\u6DFB\u52A0\u6CDB\u578B\u7EA6\u675F\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Lengthwise</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">loggingIdentity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Lengthwise<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u8FD9\u4E2A\u6CDB\u578B\u51FD\u6570\u88AB\u5B9A\u4E49\u4E86\u7EA6\u675F\uFF0C\u56E0\u6B64\u5B83\u4E0D\u518D\u662F\u9002\u7528\u4E8E\u4EFB\u610F\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">loggingIdentity</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Error, number doesn&#39;t have a .length property</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u6211\u4EEC\u9700\u8981\u4F20\u5165\u7B26\u5408\u7EA6\u675F\u7C7B\u578B\u7684\u503C\uFF0C\u5FC5\u987B\u5305\u542B\u5FC5\u987B\u7684\u5C5E\u6027\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">loggingIdentity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>length<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.Partial</p><p>Partial&lt;T&gt; \u7684\u4F5C\u7528\u5C31\u662F\u5C06\u67D0\u4E2A\u7C7B\u578B\u91CC\u7684\u5C5E\u6027\u5168\u90E8\u53D8\u4E3A\u53EF\u9009\u9879 ?\u3002</p><p>\u5B9A\u4E49\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Make all properties in T optional
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4EE5\u4E0A\u4EE3\u7801\u4E2D\uFF0C\u9996\u5148\u901A\u8FC7 keyof T \u62FF\u5230 T \u7684\u6240\u6709\u5C5E\u6027\u540D\uFF0C\u7136\u540E\u4F7F\u7528 in \u8FDB\u884C\u904D\u5386\uFF0C\u5C06\u503C\u8D4B\u7ED9 P\uFF0C\u6700\u540E\u901A\u8FC7 T[P] \u53D6\u5F97\u76F8\u5E94\u7684\u5C5E\u6027\u503C\u3002\u4E2D\u95F4\u7684 ? \u53F7\uFF0C\u7528\u4E8E\u5C06\u6240\u6709\u5C5E\u6027\u53D8\u4E3A\u53EF\u9009\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">updateTodo</span><span class="token punctuation">(</span>todo<span class="token operator">:</span> Todo<span class="token punctuation">,</span> fieldsToUpdate<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Todo<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token operator">...</span>fieldsToUpdate <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> todo1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&quot;Learn TS&quot;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&quot;Learn TypeScript&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> todo2 <span class="token operator">=</span> <span class="token function">updateTodo</span><span class="token punctuation">(</span>todo1<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  description<span class="token operator">:</span> <span class="token string">&quot;Learn TypeScript Enum&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684 updateTodo \u65B9\u6CD5\u4E2D\uFF0C\u6211\u4EEC\u5229\u7528 Partial&lt;T&gt; \u5DE5\u5177\u7C7B\u578B\uFF0C\u5B9A\u4E49 fieldsToUpdate \u7684\u7C7B\u578B\u4E3A Partial&lt;Todo&gt;\uFF0C\u5373\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">{</span>
   title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
   description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","ts-study-generic.html.vue"]]);export{r as default};
