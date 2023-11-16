import{_ as s,o as n,c as a,d as e}from"./app.dff44b39.js";const t={},p=e(`<h1 id="typescript-\u5957\u8DEF\u4E00\u4E4B\u6A21\u5F0F\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#typescript-\u5957\u8DEF\u4E00\u4E4B\u6A21\u5F0F\u5339\u914D" aria-hidden="true">#</a> TypeScript \u5957\u8DEF\u4E00\u4E4B\u6A21\u5F0F\u5339\u914D</h1><h2 id="\u6A21\u5F0F\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F\u5339\u914D" aria-hidden="true">#</a> \u6A21\u5F0F\u5339\u914D</h2><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u5B57\u7B26\u4E32\u53EF\u4EE5\u548C\u6B63\u5219\u505A\u6A21\u5F0F\u5339\u914D\uFF0C\u627E\u5230\u5339\u914D\u7684\u90E8\u5206\uFF0C\u63D0\u53D6\u5B50\u7EC4\uFF0C\u4E4B\u540E\u53EF\u4EE5\u7528 1,1,2 \u7B49\u5F15\u7528\u5339\u914D\u7684\u5B50\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a(b)c</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">&#39;$1,$1,$1&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;b,b,b&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Typescript \u7684\u7C7B\u578B\u4E5F\u540C\u6837\u53EF\u4EE5\u505A\u6A21\u5F0F\u5339\u914D\u3002</p><p>\u6BD4\u5982\u8FD9\u6837\u4E00\u4E2A Promise \u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">p</span> <span class="token operator">=</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token string">&#39;hello&#39;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u60F3\u63D0\u53D6 value \u7684\u7C7B\u578B\uFF0C\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Promise:</span>
<span class="token keyword">type</span> <span class="token class-name">GetValueType<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">P</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">infer</span> Value<span class="token operator">&gt;</span></span> <span class="token operator">?</span> Value <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">GetValueResult</span> <span class="token operator">=</span> GetValueType<span class="token operator">&lt;</span><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token string">&#39;hello&#39;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// // type GetValueResult = &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7 extends \u5BF9\u4F20\u5165\u7684\u7C7B\u578B\u53C2\u6570 P \u505A\u6A21\u5F0F\u5339\u914D\uFF0C\u5176\u4E2D\u503C\u7684\u7C7B\u578B\u662F\u9700\u8981\u63D0\u53D6\u7684\uFF0C\u901A\u8FC7 infer \u58F0\u660E\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF Value \u6765\u4FDD\u5B58\uFF0C\u5982\u679C\u5339\u914D\uFF0C\u5C31\u8FD4\u56DE\u5339\u914D\u5230\u7684 Value\uFF0C\u5426\u5219\u5C31\u8FD4\u56DE never \u4EE3\u8868\u6CA1\u5339\u914D\u5230\u3002</p><p>\u8FD9\u5C31\u662F Typescript \u7C7B\u578B\u7684\u6A21\u5F0F\u5339\u914D\uFF1A</p><p><strong>Typescript \u7C7B\u578B\u7684\u6A21\u5F0F\u5339\u914D\u662F\u901A\u8FC7 extends \u5BF9\u7C7B\u578B\u53C2\u6570\u505A\u5339\u914D\uFF0C\u7ED3\u679C\u4FDD\u5B58\u5230\u901A\u8FC7 infer \u58F0\u660E\u7684\u5C40\u90E8\u7C7B\u578B\u53D8\u91CF\u91CC\uFF0C\u5982\u679C\u5339\u914D\u5C31\u80FD\u4ECE\u8BE5\u5C40\u90E8\u53D8\u91CF\u91CC\u62FF\u5230\u63D0\u53D6\u51FA\u7684\u7C7B\u578B\u3002</strong></p><h2 id="\u6570\u7EC4\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u7EC4\u7C7B\u578B</h2><h3 id="first" tabindex="-1"><a class="header-anchor" href="#first" aria-hidden="true">#</a> First</h3><p>\u6570\u7EC4\u7C7B\u578B\u60F3\u63D0\u53D6\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u7C7B\u578B\u600E\u4E48\u505A\u5462\uFF1F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">arr</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7528\u5B83\u6765\u5339\u914D\u4E00\u4E2A\u6A21\u5F0F\u7C7B\u578B\uFF0C\u63D0\u53D6\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u7C7B\u578B\u5230\u901A\u8FC7 infer \u58F0\u660E\u7684\u5C40\u90E8\u53D8\u91CF\u91CC\u8FD4\u56DE\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// GetFirst</span>
<span class="token keyword">type</span> <span class="token class-name">GetFirstArrVal<span class="token operator">&lt;</span>Arr <span class="token keyword">extends</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> 
  Arr <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token keyword">infer</span> First<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">?</span> First <span class="token operator">:</span> <span class="token builtin">never</span>

<span class="token keyword">type</span> <span class="token class-name">GetFirstArrValRes</span> <span class="token operator">=</span> GetFirstArrVal<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
<span class="token comment">// type GetFirstArrValRes = 1</span>

<span class="token keyword">type</span> <span class="token class-name">GetFirstArrValRes2</span> <span class="token operator">=</span> GetFirstArrVal<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
<span class="token comment">// type GetFirstArrValRes2 = never</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B\u578B\u53C2\u6570 Arr \u901A\u8FC7 extends \u7EA6\u675F\u4E3A\u53EA\u80FD\u662F\u6570\u7EC4\u7C7B\u578B\uFF0C\u6570\u7EC4\u5143\u7D20\u662F unkown \u4E5F\u5C31\u662F\u53EF\u4EE5\u662F\u4EFB\u4F55\u503C\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>any \u548C unknown \u7684\u533A\u522B\uFF1A</strong> any \u548C unknown \u90FD\u4EE3\u8868\u4EFB\u610F\u7C7B\u578B\uFF0C\u4F46\u662F unknown \u53EA\u80FD\u63A5\u6536\u4EFB\u610F\u7C7B\u578B\u7684\u503C\uFF0C\u800C any \u9664\u4E86\u53EF\u4EE5\u63A5\u6536\u4EFB\u610F\u7C7B\u578B\u7684\u503C\uFF0C\u4E5F\u53EF\u4EE5\u8D4B\u503C\u7ED9\u4EFB\u610F\u7C7B\u578B\uFF08\u9664\u4E86 never\uFF09\u3002\u7C7B\u578B\u4F53\u64CD\u4E2D\u7ECF\u5E38\u7528 unknown \u63A5\u53D7\u548C\u5339\u914D\u4EFB\u4F55\u7C7B\u578B\uFF0C\u800C\u5F88\u5C11\u628A\u4EFB\u4F55\u7C7B\u578B\u8D4B\u503C\u7ED9\u67D0\u4E2A\u7C7B\u578B\u53D8\u91CF\u3002</p></div><p>\u5BF9 Arr \u505A\u6A21\u5F0F\u5339\u914D\uFF0C\u628A\u6211\u4EEC\u8981\u63D0\u53D6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u7C7B\u578B\u653E\u5230\u901A\u8FC7 infer \u58F0\u660E\u7684 First \u5C40\u90E8\u53D8\u91CF\u91CC\uFF0C\u540E\u9762\u7684\u5143\u7D20\u53EF\u4EE5\u662F\u4EFB\u4F55\u7C7B\u578B\uFF0C\u7528 unknown \u63A5\u6536\uFF0C\u7136\u540E\u628A\u5C40\u90E8\u53D8\u91CF First \u8FD4\u56DE\u3002</p><h3 id="last" tabindex="-1"><a class="header-anchor" href="#last" aria-hidden="true">#</a> Last</h3><p>\u53EF\u4EE5\u63D0\u53D6\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u63D0\u53D6\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u4FEE\u6539\u4E0B\u6A21\u5F0F\u7C7B\u578B\u5C31\u884C\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">GetLastArrVal<span class="token operator">&lt;</span>Arr <span class="token keyword">extends</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> 
  Arr <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">infer</span> Last<span class="token punctuation">]</span> <span class="token operator">?</span> Last <span class="token operator">:</span> <span class="token builtin">never</span>

<span class="token keyword">type</span> <span class="token class-name">GetLastArrValRes</span> <span class="token operator">=</span> GetLastArrVal<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
<span class="token comment">// type GetLastArrValRes = 3</span>

<span class="token keyword">type</span> <span class="token class-name">GetLastArrValRes2</span> <span class="token operator">=</span> GetLastArrVal<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
<span class="token comment">// type GetLastArrValRes2 = never</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="poparr" tabindex="-1"><a class="header-anchor" href="#poparr" aria-hidden="true">#</a> PopArr</h3><p>\u6211\u4EEC\u5206\u522B\u53D6\u4E86\u9996\u5C3E\u5143\u7D20\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u53D6\u5269\u4F59\u7684\u6570\u7EC4\uFF0C\u6BD4\u5982\u53D6\u53BB\u6389\u4E86\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">PopArr<span class="token operator">&lt;</span>Arr <span class="token keyword">extends</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> 
  Arr <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token operator">:</span> Arr <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">infer</span> Rest<span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token punctuation">]</span> <span class="token operator">?</span> Rest <span class="token operator">:</span> <span class="token builtin">never</span>

<span class="token keyword">type</span> <span class="token class-name">PopArrRes</span> <span class="token operator">=</span> PopArr<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
<span class="token comment">// type PopArrRes = [1, 2]</span>

<span class="token keyword">type</span> <span class="token class-name">PopArrRes2</span> <span class="token operator">=</span> PopArr<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
<span class="token comment">// type PopArrRes2 = []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F\u7A7A\u6570\u7EC4\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5426\u5219\u5339\u914D\u5269\u4F59\u7684\u5143\u7D20\uFF0C\u653E\u5230 infer \u58F0\u660E\u7684\u5C40\u90E8\u53D8\u91CF Rest \u91CC\uFF0C\u8FD4\u56DE Rest\u3002</p><h3 id="shiftarr" tabindex="-1"><a class="header-anchor" href="#shiftarr" aria-hidden="true">#</a> ShiftArr</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ShiftArr<span class="token operator">&lt;</span>Arr <span class="token keyword">extends</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> 
  Arr <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token operator">:</span> Arr <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token builtin">unknown</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token keyword">infer</span> Rest<span class="token punctuation">]</span> <span class="token operator">?</span> Rest <span class="token operator">:</span> <span class="token builtin">never</span>

<span class="token keyword">type</span> <span class="token class-name">ShiftArrRes</span> <span class="token operator">=</span> ShiftArr<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
<span class="token comment">// type ShiftArrRes = [2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B57\u7B26\u4E32\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7C7B\u578B" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u7C7B\u578B</h2><p>\u5B57\u7B26\u4E32\u7C7B\u578B\u4E5F\u540C\u6837\u53EF\u4EE5\u505A\u6A21\u5F0F\u5339\u914D\uFF0C\u5339\u914D\u4E00\u4E2A\u6A21\u5F0F\u5B57\u7B26\u4E32\uFF0C\u628A\u9700\u8981\u63D0\u53D6\u7684\u90E8\u5206\u653E\u5230 infer \u58F0\u660E\u7684\u5C40\u90E8\u53D8\u91CF\u91CC\u3002</p><h3 id="starswith" tabindex="-1"><a class="header-anchor" href="#starswith" aria-hidden="true">#</a> StarsWith</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">StartWith<span class="token operator">&lt;</span>Str <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span> Prefix <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> 
  Str <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Prefix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span>

<span class="token keyword">type</span> <span class="token class-name">StartWithRes</span> <span class="token operator">=</span> StartWith<span class="token operator">&lt;</span><span class="token string">&#39;hello123&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hello&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type StartWithRes = true</span>

<span class="token keyword">type</span> <span class="token class-name">StartWithRes2</span> <span class="token operator">=</span> StartWith<span class="token operator">&lt;</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type StartWithRes2 = false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u58F0\u660E\u5B57\u7B26\u4E32 Str\u3001\u5339\u914D\u7684\u524D\u7F00 Prefix \u4E24\u4E2A\u7C7B\u578B\u53C2\u6570\uFF0C\u5B83\u4EEC\u90FD\u662F string\u3002</p><p>\u7528 Str \u53BB\u5339\u914D\u4E00\u4E2A\u6A21\u5F0F\u7C7B\u578B\uFF0C\u6A21\u5F0F\u7C7B\u578B\u7684\u524D\u7F00\u662F Prefix\uFF0C\u540E\u9762\u662F\u4EFB\u610F\u7684 string\uFF0C\u5982\u679C\u5339\u914D\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002</p><h3 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> Replace</h3><p>\u5B57\u7B26\u4E32\u53EF\u4EE5\u5339\u914D\u4E00\u4E2A\u6A21\u5F0F\u7C7B\u578B\uFF0C\u63D0\u53D6\u60F3\u8981\u7684\u90E8\u5206\uFF0C\u81EA\u7136\u4E5F\u53EF\u4EE5\u7528\u8FD9\u4E9B\u518D\u6784\u6210\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B\u3002</p><p>\u6BD4\u5982\u5B9E\u73B0\u5B57\u7B26\u4E32\u66FF\u6362\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ReplaceStr<span class="token operator">&lt;</span>
  Str <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  From <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  To <span class="token keyword">extends</span> <span class="token builtin">string</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> Str <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Prefix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>From<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Suffix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Prefix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>To<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Suffix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> Str

<span class="token keyword">type</span> <span class="token class-name">ReplaceStrRes</span> <span class="token operator">=</span> ReplaceStr<span class="token operator">&lt;</span><span class="token string">&#39;he is xxx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;james&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type ReplaceStrRes = &quot;he is james&quot;</span>

<span class="token keyword">type</span> <span class="token class-name">ReplaceStrRes2</span> <span class="token operator">=</span> ReplaceStr<span class="token operator">&lt;</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;123&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type ReplaceStrRes2 = &quot;abc&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u58F0\u660E\u8981\u66FF\u6362\u7684\u5B57\u7B26\u4E32 Str\u3001\u5F85\u66FF\u6362\u7684\u5B57\u7B26\u4E32 From\u3001\u66FF\u6362\u6210\u7684\u5B57\u7B26\u4E32 3 \u4E2A\u7C7B\u578B\u53C2\u6570\uFF0C\u901A\u8FC7 extends \u7EA6\u675F\u4E3A\u90FD\u662F string \u7C7B\u578B\u3002</p><p>\u7528 Str \u53BB\u5339\u914D\u6A21\u5F0F\u4E32\uFF0C\u6A21\u5F0F\u4E32\u7531 From \u548C\u4E4B\u524D\u4E4B\u540E\u7684\u5B57\u7B26\u4E32\u6784\u6210\uFF0C\u628A\u4E4B\u524D\u4E4B\u540E\u7684\u5B57\u7B26\u4E32\u653E\u5230\u901A\u8FC7 infer \u58F0\u660E\u7684\u5C40\u90E8\u53D8\u91CF Prefix\u3001Suffix \u91CC\u3002</p><p>\u7528 Prefix\u3001Suffix \u52A0\u4E0A\u66FF\u6362\u5230\u7684\u5B57\u7B26\u4E32 To \u6784\u9020\u6210\u65B0\u7684\u5B57\u7B26\u4E32\u7C7B\u578B\u8FD4\u56DE\u3002</p><h3 id="trim" tabindex="-1"><a class="header-anchor" href="#trim" aria-hidden="true">#</a> Trim</h3><p>\u80FD\u591F\u5339\u914D\u548C\u66FF\u6362\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E5F\u5C31\u80FD\u5B9E\u73B0\u53BB\u6389\u7A7A\u767D\u5B57\u7B26\u7684 Trim\uFF1A</p><p>\u4E0D\u8FC7\u56E0\u4E3A\u6211\u4EEC\u4E0D\u77E5\u9053\u6709\u591A\u5C11\u4E2A\u7A7A\u767D\u5B57\u7B26\uFF0C\u6240\u4EE5\u53EA\u80FD\u4E00\u4E2A\u4E2A\u5339\u914D\u548C\u53BB\u6389\uFF0C\u9700\u8981\u9012\u5F52\u3002</p><p>\u5148\u5B9E\u73B0 TrimRight:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TrimStrRight<span class="token operator">&lt;</span>Str <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> 
  Str <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Rest<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token string">&#39; &#39;</span> <span class="token operator">|</span> <span class="token string">&#39;\\n&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;\\t&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token operator">?</span> TrimStrRight<span class="token operator">&lt;</span>Rest<span class="token operator">&gt;</span> <span class="token operator">:</span> Str

<span class="token keyword">type</span> <span class="token class-name">TrimStrRightRes</span> <span class="token operator">=</span> TrimStrRight<span class="token operator">&lt;</span><span class="token string">&#39;hello  \\n  \\t&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type TrimStrRightRes = &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B\u578B\u53C2\u6570 Str \u662F\u8981 Trim \u7684\u5B57\u7B26\u4E32\u3002</p><p>\u5982\u679C Str \u5339\u914D\u5B57\u7B26\u4E32 + \u7A7A\u767D\u5B57\u7B26 (\u7A7A\u683C\u3001\u6362\u884C\u3001\u5236\u8868\u7B26)\uFF0C\u90A3\u5C31\u628A\u5B57\u7B26\u4E32\u653E\u5230 infer \u58F0\u660E\u7684\u5C40\u90E8\u53D8\u91CF Rest \u91CC\u3002</p><p>\u628A Rest \u4F5C\u4E3A\u7C7B\u578B\u53C2\u6570\u9012\u5F52 TrimRight\uFF0C\u76F4\u5230\u4E0D\u5339\u914D\uFF0C\u8FD9\u65F6\u7684\u7C7B\u578B\u53C2\u6570 Str \u5C31\u662F\u5904\u7406\u7ED3\u679C\u3002</p><p>\u540C\u7406\u53EF\u5F97 TrimLeft\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TrimStrLeft<span class="token operator">&lt;</span>Str <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> 
  Str <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token string">&#39; &#39;</span> <span class="token operator">|</span> <span class="token string">&#39;\\n&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;\\t&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Rest<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token operator">?</span> TrimStrLeft<span class="token operator">&lt;</span>Rest<span class="token operator">&gt;</span> <span class="token operator">:</span> Str

<span class="token keyword">type</span> <span class="token class-name">TrimStrLeftRes</span> <span class="token operator">=</span> TrimStrLeft<span class="token operator">&lt;</span><span class="token string">&#39; \\n \\t hello&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type TrimStrLeftRes = &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TrimRight \u548C TrimLeft \u7ED3\u5408\u5C31\u662F Trim\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TrimStr<span class="token operator">&lt;</span>Str <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> TrimStrRight<span class="token operator">&lt;</span>TrimStrLeft<span class="token operator">&lt;</span>Str<span class="token operator">&gt;&gt;</span>

<span class="token keyword">type</span> <span class="token class-name">TrimStrRes</span> <span class="token operator">=</span> TrimStr<span class="token operator">&lt;</span><span class="token string">&#39; \\n\\thello\\n \\t&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type TrimStrRes = &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><p>\u51FD\u6570\u540C\u6837\u4E5F\u53EF\u4EE5\u505A\u7C7B\u578B\u5339\u914D\uFF0C\u6BD4\u5982\u63D0\u53D6\u53C2\u6570\u3001\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u3002</p><h3 id="getparamstype" tabindex="-1"><a class="header-anchor" href="#getparamstype" aria-hidden="true">#</a> GetParamsType</h3><p>\u51FD\u6570\u7C7B\u578B\u53EF\u4EE5\u901A\u8FC7\u6A21\u5F0F\u5339\u914D\u6765\u63D0\u53D6\u53C2\u6570\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">GetParamsType<span class="token operator">&lt;</span>Func <span class="token keyword">extends</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> 
  Func <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token keyword">infer</span> Args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">unknown</span> <span class="token operator">?</span> Args <span class="token operator">:</span> <span class="token builtin">never</span>

<span class="token keyword">type</span> <span class="token class-name">GetParamsTypeRes</span> <span class="token operator">=</span> GetParamsType<span class="token operator">&lt;</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token operator">&gt;</span>
<span class="token comment">// type GetParamsTypeRes = [name: string, age: number]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B\u578B\u53C2\u6570 Func \u662F\u8981\u5339\u914D\u7684\u51FD\u6570\u7C7B\u578B\uFF0C\u901A\u8FC7 extends \u7EA6\u675F\u4E3A Function\u3002</p><p>Func \u548C\u6A21\u5F0F\u7C7B\u578B\u505A\u5339\u914D\uFF0C\u53C2\u6570\u7C7B\u578B\u653E\u5230\u7528 infer \u58F0\u660E\u7684\u5C40\u90E8\u53D8\u91CF Args \u91CC\uFF0C\u8FD4\u56DE\u503C\u53EF\u4EE5\u662F\u4EFB\u4F55\u7C7B\u578B\uFF0C\u7528 unknown\u3002</p><p>\u8FD4\u56DE\u63D0\u53D6\u5230\u7684\u53C2\u6570\u7C7B\u578B Args\u3002</p><h3 id="getreturntype" tabindex="-1"><a class="header-anchor" href="#getreturntype" aria-hidden="true">#</a> GetReturnType</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">GetReturnType<span class="token operator">&lt;</span>Func <span class="token keyword">extends</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> 
  Func <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> ReturnType
    <span class="token operator">?</span> ReturnType <span class="token operator">:</span> <span class="token builtin">never</span>

<span class="token keyword">type</span> <span class="token class-name">GetReturnTypeRes</span> <span class="token operator">=</span> GetReturnType<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token string">&#39;hello&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type GetReturnTypeRes = &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Func \u548C\u6A21\u5F0F\u7C7B\u578B\u505A\u5339\u914D\uFF0C\u63D0\u53D6\u8FD4\u56DE\u503C\u5230\u901A\u8FC7 infer \u58F0\u660E\u7684\u5C40\u90E8\u53D8\u91CF ReturnType \u91CC\u8FD4\u56DE\u3002</p><p>\u53C2\u6570\u7C7B\u578B\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F any[]\uFF08\u6CE8\u610F\uFF0C\u8FD9\u91CC\u4E0D\u80FD\u7528 unknown\uFF0C\u8FD9\u91CC\u7684\u89E3\u91CA\u6D89\u53CA\u5230\u53C2\u6570\u7684\u9006\u53D8\u6027\u8D28\uFF0C\u5177\u4F53\u539F\u56E0\u9006\u53D8\u90A3\u4E00\u8282\u4F1A\u89E3\u91CA\uFF09\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u5C31\u50CF\u5B57\u7B26\u4E32\u53EF\u4EE5\u5339\u914D\u4E00\u4E2A\u6A21\u5F0F\u4E32\u63D0\u53D6\u5B50\u7EC4\u4E00\u6837\uFF0CTypeScript \u7C7B\u578B\u4E5F\u53EF\u4EE5\u5339\u914D\u4E00\u4E2A\u6A21\u5F0F\u7C7B\u578B\u63D0\u53D6\u67D0\u4E2A\u90E8\u5206\u7684\u7C7B\u578B\u3002</p><p><strong>TypeScript \u7C7B\u578B\u7684\u6A21\u5F0F\u5339\u914D\u662F\u901A\u8FC7\u7C7B\u578B extends \u4E00\u4E2A\u6A21\u5F0F\u7C7B\u578B\uFF0C\u628A\u9700\u8981\u63D0\u53D6\u7684\u90E8\u5206\u653E\u5230\u901A\u8FC7 infer \u58F0\u660E\u7684\u5C40\u90E8\u53D8\u91CF\u91CC\uFF0C\u540E\u9762\u53EF\u4EE5\u4ECE\u8FD9\u4E2A\u5C40\u90E8\u53D8\u91CF\u62FF\u5230\u7C7B\u578B\u505A\u5404\u79CD\u540E\u7EED\u5904\u7406\u3002</strong></p>`,70),o=[p];function r(l,c){return n(),a("div",null,o)}var u=s(t,[["render",r],["__file","ts-pattern-matching.html.vue"]]);export{u as default};
