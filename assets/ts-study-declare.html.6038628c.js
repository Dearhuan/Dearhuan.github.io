import{_ as n,o as s,c as a,d as e}from"./app.298ed721.js";const p={},t=e(`<h1 id="typescript-\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#typescript-\u65AD\u8A00" aria-hidden="true">#</a> TypeScript-\u65AD\u8A00</h1><ul><li>\u7C7B\u578B\u65AD\u8A00</li></ul><p>\u6709\u65F6\u5019\u4F60\u4F1A\u9047\u5230\u8FD9\u6837\u7684\u60C5\u51B5\uFF0C\u4F60\u4F1A\u6BD4 TypeScript \u66F4\u4E86\u89E3\u67D0\u4E2A\u503C\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002\u901A\u5E38\u8FD9\u4F1A\u53D1\u751F\u5728\u4F60\u6E05\u695A\u5730\u77E5\u9053\u4E00\u4E2A\u5B9E\u4F53\u5177\u6709\u6BD4\u5B83\u73B0\u6709\u7C7B\u578B\u66F4\u786E\u5207\u7684\u7C7B\u578B\u3002</p><p>\u901A\u8FC7\u7C7B\u578B\u65AD\u8A00\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u544A\u8BC9\u7F16\u8BD1\u5668\uFF0C\u201C\u76F8\u4FE1\u6211\uFF0C\u6211\u77E5\u9053\u81EA\u5DF1\u5728\u5E72\u4EC0\u4E48\u201D\u3002\u7C7B\u578B\u65AD\u8A00\u597D\u6BD4\u5176\u4ED6\u8BED\u8A00\u91CC\u7684\u7C7B\u578B\u8F6C\u6362\uFF0C\u4F46\u662F\u4E0D\u8FDB\u884C\u7279\u6B8A\u7684\u6570\u636E\u68C0\u67E5\u548C\u89E3\u6784\u3002\u5B83\u6CA1\u6709\u8FD0\u884C\u65F6\u7684\u5F71\u54CD\uFF0C\u53EA\u662F\u5728\u7F16\u8BD1\u9636\u6BB5\u8D77\u4F5C\u7528\u3002</p><p>\u7C7B\u578B\u65AD\u8A00\u6709\u4E24\u79CD\u5F62\u5F0F\uFF1A</p><p>1.\u201C\u5C16\u62EC\u53F7\u201D\u8BED\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> someString<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;this is a string&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>someString<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.as \u8BED\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> someString<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;this is a string&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>someString <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u975E\u7A7A\u65AD\u8A00</li></ul><p>\u5728\u4E0A\u4E0B\u6587\u4E2D\u5F53\u7C7B\u578B\u68C0\u67E5\u5668\u65E0\u6CD5\u65AD\u5B9A\u7C7B\u578B\u65F6\uFF0C\u4E00\u4E2A\u65B0\u7684\u540E\u7F00\u8868\u8FBE\u5F0F\u64CD\u4F5C\u7B26 ! \u53EF\u4EE5\u7528\u4E8E\u65AD\u8A00\u64CD\u4F5C\u5BF9\u8C61\u662F\u975E null \u548C\u975E undefined \u7C7B\u578B\u3002\u5177\u4F53\u800C\u8A00\uFF0Cx! \u5C06\u4ECE x \u503C\u57DF\u4E2D\u6392\u9664 null \u548C undefined \u3002</p><p>\u90A3\u4E48\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26\u5230\u5E95\u6709\u4EC0\u4E48\u7528\u5462\uFF1F\u4E0B\u9762\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E0B\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26\u7684\u4E00\u4E9B\u4F7F\u7528\u573A\u666F\u3002</p><p>1.\u5FFD\u7565 undefined \u548C null \u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">myFunc</span><span class="token punctuation">(</span>maybeString<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Type &#39;string | null | undefined&#39; is not assignable to type &#39;string&#39;.</span>
  <span class="token comment">// Type &#39;undefined&#39; is not assignable to type &#39;string&#39;. </span>
  <span class="token keyword">const</span> onlyString<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> maybeString<span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token keyword">const</span> ignoreUndefinedAndNull<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> maybeString<span class="token operator">!</span><span class="token punctuation">;</span> <span class="token comment">// Ok</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u8C03\u7528\u51FD\u6570\u65F6\u5FFD\u7565 undefined \u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">NumGenerator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">myFunc</span><span class="token punctuation">(</span>numGenerator<span class="token operator">:</span> NumGenerator <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Object is possibly &#39;undefined&#39;.(2532)</span>
  <span class="token comment">// Cannot invoke an object which is possibly &#39;undefined&#39;.(2722)</span>
  <span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token function">numGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token keyword">const</span> num2 <span class="token operator">=</span> numGenerator<span class="token operator">!</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//OK</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u56E0\u4E3A ! \u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26\u4F1A\u4ECE\u7F16\u8BD1\u751F\u6210\u7684 JavaScript \u4EE3\u7801\u4E2D\u79FB\u9664\uFF0C\u6240\u4EE5\u5728\u5B9E\u9645\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u8981\u7279\u522B\u6CE8\u610F\u3002\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\uFF1A</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> a<span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A TS \u4EE3\u7801\u4F1A\u7F16\u8BD1\u751F\u6210\u4EE5\u4E0B ES5 \u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u867D\u7136\u5728 TS \u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u975E\u7A7A\u65AD\u8A00\uFF0C\u4F7F\u5F97 const b: number = a!; \u8BED\u53E5\u53EF\u4EE5\u901A\u8FC7 TypeScript \u7C7B\u578B\u68C0\u67E5\u5668\u7684\u68C0\u67E5\u3002\u4F46\u5728\u751F\u6210\u7684 ES5 \u4EE3\u7801\u4E2D\uFF0C! \u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26\u88AB\u79FB\u9664\u4E86\uFF0C\u6240\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u6267\u884C\u4EE5\u4E0A\u4EE3\u7801\uFF0C\u5728\u63A7\u5236\u53F0\u4F1A\u8F93\u51FA undefined\u3002</p><ul><li>\u786E\u5B9A\u8D4B\u503C\u65AD\u8A00</li></ul><p>\u5728 TypeScript 2.7 \u7248\u672C\u4E2D\u5F15\u5165\u4E86\u786E\u5B9A\u8D4B\u503C\u65AD\u8A00\uFF0C\u5373\u5141\u8BB8\u5728\u5B9E\u4F8B\u5C5E\u6027\u548C\u53D8\u91CF\u58F0\u660E\u540E\u9762\u653E\u7F6E\u4E00\u4E2A ! \u53F7\uFF0C\u4ECE\u800C\u544A\u8BC9 TypeScript \u8BE5\u5C5E\u6027\u4F1A\u88AB\u660E\u786E\u5730\u8D4B\u503C\u3002\u4E3A\u4E86\u66F4\u597D\u5730\u7406\u89E3\u5B83\u7684\u4F5C\u7528\uFF0C\u6211\u4EEC\u6765\u770B\u4E2A\u5177\u4F53\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Variable &#39;x&#39; is used before being assigned.(2454)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>

<span class="token keyword">function</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F88\u660E\u663E\u8BE5\u5F02\u5E38\u4FE1\u606F\u662F\u8BF4\u53D8\u91CF x \u5728\u8D4B\u503C\u524D\u88AB\u4F7F\u7528\u4E86\uFF0C\u8981\u89E3\u51B3\u8BE5\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u786E\u5B9A\u8D4B\u503C\u65AD\u8A00\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Ok</span>

<span class="token keyword">function</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7 let x!: number; \u786E\u5B9A\u8D4B\u503C\u65AD\u8A00\uFF0CTypeScript \u7F16\u8BD1\u5668\u5C31\u4F1A\u77E5\u9053\u8BE5\u5C5E\u6027\u4F1A\u88AB\u660E\u786E\u5730\u8D4B\u503C\u3002</p>`,27),o=[t];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","ts-study-declare.html.vue"]]);export{r as default};
