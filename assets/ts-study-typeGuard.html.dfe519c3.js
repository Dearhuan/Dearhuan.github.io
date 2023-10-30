import{_ as n,o as s,c as a,d as t}from"./app.d7746639.js";const p={},e=t(`<h1 id="typescript-\u7C7B\u578B\u5B88\u536B" tabindex="-1"><a class="header-anchor" href="#typescript-\u7C7B\u578B\u5B88\u536B" aria-hidden="true">#</a> TypeScript-\u7C7B\u578B\u5B88\u536B</h1><p><strong>\u7C7B\u578B\u4FDD\u62A4\u662F\u53EF\u6267\u884C\u8FD0\u884C\u65F6\u68C0\u67E5\u7684\u4E00\u79CD\u8868\u8FBE\u5F0F\uFF0C\u7528\u4E8E\u786E\u4FDD\u8BE5\u7C7B\u578B\u5728\u4E00\u5B9A\u7684\u8303\u56F4\u5185\u3002</strong>\u6362\u53E5\u8BDD\u8BF4\uFF0C\u7C7B\u578B\u4FDD\u62A4\u53EF\u4EE5\u4FDD\u8BC1\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5C3D\u7BA1\u5B83\u7684\u503C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u6570\u503C\u3002\u7C7B\u578B\u4FDD\u62A4\u4E0E\u7279\u6027\u68C0\u6D4B\u5E76\u4E0D\u662F\u5B8C\u5168\u4E0D\u540C\uFF0C\u5176\u4E3B\u8981\u601D\u60F3\u662F\u5C1D\u8BD5\u68C0\u6D4B\u5C5E\u6027\u3001\u65B9\u6CD5\u6216\u539F\u578B\uFF0C\u4EE5\u786E\u5B9A\u5982\u4F55\u5904\u7406\u503C\u3002\u76EE\u524D\u4E3B\u8981\u6709\u56DB\u79CD\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u7C7B\u578B\u4FDD\u62A4\uFF1A</p><ul><li>in \u5173\u952E\u5B57</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Admin</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  privileges<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  startDate<span class="token operator">:</span> Date<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">UnknownEmployee</span> <span class="token operator">=</span> Employee <span class="token operator">|</span> Admin

<span class="token keyword">function</span> <span class="token function">printEmployeeInfomation</span><span class="token punctuation">(</span>emp<span class="token operator">:</span> UnknownEmployee<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>emp<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&#39;privileges&#39;</span> <span class="token keyword">in</span> emp<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">privileges:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>emp<span class="token punctuation">.</span>privileges<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&#39;startDate&#39;</span> <span class="token keyword">in</span> emp<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">startDate:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>emp<span class="token punctuation">.</span>startDate<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>typeof \u5173\u952E\u5B57</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">padLeft</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> padding<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> padding <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Array</span><span class="token punctuation">(</span>padding <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> padding <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> padding <span class="token operator">+</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Expected string or number, got &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>padding<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typeof \u7C7B\u578B\u4FDD\u62A4\u53EA\u652F\u6301\u4E24\u79CD\u5F62\u5F0F\uFF1Atypeof v === &quot;typename&quot; \u548C typeof v !== typename\uFF0C&quot;typename&quot; \u5FC5\u987B\u662F &quot;number&quot;\uFF0C &quot;string&quot;\uFF0C &quot;boolean&quot; \u6216 &quot;symbol&quot;\u3002 \u4F46\u662F TypeScript \u5E76\u4E0D\u4F1A\u963B\u6B62\u4F60\u4E0E\u5176\u5B83\u5B57\u7B26\u4E32\u6BD4\u8F83\uFF0C\u8BED\u8A00\u4E0D\u4F1A\u628A\u90A3\u4E9B\u8868\u8FBE\u5F0F\u8BC6\u522B\u4E3A\u7C7B\u578B\u4FDD\u62A4\u3002</p><ul><li>instanceof \u5173\u952E\u5B57</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Padder</span> <span class="token punctuation">{</span>
  <span class="token function">getPaddingString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SpaceRepeatingPadder</span> <span class="token keyword">implements</span> <span class="token class-name">Padder</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> numSpaces<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">getPaddingString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>numSpaces <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">StringPadder</span> <span class="token keyword">implements</span> <span class="token class-name">Padder</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">getPaddingString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> padder<span class="token operator">:</span> Padder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpaceRepeatingPadder</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>padder <span class="token keyword">instanceof</span> <span class="token class-name">SpaceRepeatingPadder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// padder\u7684\u7C7B\u578B\u6536\u7A84\u4E3A &#39;SpaceRepeatingPadder&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u81EA\u5B9A\u4E49\u7C7B\u578B\u4FDD\u62A4\u7684\u7C7B\u578B\u8C13\u8BCD</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isNumber</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> x <span class="token keyword">is</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> x <span class="token keyword">is</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","ts-study-typeGuard.html.vue"]]);export{r as default};
