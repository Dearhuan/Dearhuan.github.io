import{_ as n,o as s,c as a,d as t}from"./app.786b6f8f.js";const p={},e=t(`<h1 id="typescript-\u7C7B" tabindex="-1"><a class="header-anchor" href="#typescript-\u7C7B" aria-hidden="true">#</a> TypeScript-\u7C7B</h1><ul><li>1 \u7C7B\u7684\u5C5E\u6027\u4E0E\u65B9\u6CD5</li></ul><p>\u5728\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u4E2D\uFF0C\u7C7B\u662F\u4E00\u79CD\u9762\u5411\u5BF9\u8C61\u8BA1\u7B97\u673A\u7F16\u7A0B\u8BED\u8A00\u7684\u6784\u9020\uFF0C\u662F\u521B\u5EFA\u5BF9\u8C61\u7684\u84DD\u56FE\uFF0C\u63CF\u8FF0\u4E86\u6240\u521B\u5EFA\u7684\u5BF9\u8C61\u5171\u540C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><p>\u5728 TypeScript \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 Class \u5173\u952E\u5B57\u6765\u5B9A\u4E49\u4E00\u4E2A\u7C7B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9759\u6001\u5C5E\u6027</span>
  <span class="token keyword">static</span> cname<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Greeter&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6210\u5458\u5C5E\u6027</span>
  greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token comment">// \u6784\u9020\u51FD\u6570 - \u6267\u884C\u521D\u59CB\u5316\u64CD\u4F5C</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>greeting <span class="token operator">=</span> message<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u9759\u6001\u65B9\u6CD5</span>
  <span class="token keyword">static</span> <span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Class name is Greeter&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6210\u5458\u65B9\u6CD5</span>
  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>greeting<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> greeter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeter</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u6210\u5458\u5C5E\u6027\u4E0E\u9759\u6001\u5C5E\u6027\uFF0C\u6210\u5458\u65B9\u6CD5\u4E0E\u9759\u6001\u65B9\u6CD5\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1F\u8FD9\u91CC\u65E0\u9700\u8FC7\u591A\u89E3\u91CA\uFF0C\u6211\u4EEC\u76F4\u63A5\u770B\u4E00\u4E0B\u7F16\u8BD1\u751F\u6210\u7684 ES5 \u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> Greeter <span class="token operator">=</span> <span class="token doc-comment comment">/** <span class="token keyword">@class</span> */</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6784\u9020\u51FD\u6570 - \u6267\u884C\u521D\u59CB\u5316\u64CD\u4F5C</span>
    <span class="token keyword">function</span> <span class="token function">Greeter</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>greeting <span class="token operator">=</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u9759\u6001\u65B9\u6CD5</span>
    Greeter<span class="token punctuation">.</span><span class="token function-variable function">getClassName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;Class name is Greeter&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6210\u5458\u65B9\u6CD5</span>
    <span class="token class-name">Greeter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">greet</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>greeting<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u9759\u6001\u5C5E\u6027</span>
    Greeter<span class="token punctuation">.</span>cname <span class="token operator">=</span> <span class="token string">&quot;Greeter&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Greeter<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> greeter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeter</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2 ECMAScript \u79C1\u6709\u5B57\u6BB5</li></ul><p>\u5728 TypeScript 3.8 \u7248\u672C\u5C31\u5F00\u59CB\u652F\u6301ECMAScript \u79C1\u6709\u5B57\u6BB5\uFF0C\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  #name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>#name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> semlinker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Semlinker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

semlinker<span class="token punctuation">.</span>#name<span class="token punctuation">;</span>
<span class="token comment">//     ~~~~~</span>
<span class="token comment">// Property &#39;#name&#39; is not accessible outside class &#39;Person&#39;</span>
<span class="token comment">// because it has a private identifier.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0E\u5E38\u89C4\u5C5E\u6027\uFF08\u751A\u81F3\u4F7F\u7528 private \u4FEE\u9970\u7B26\u58F0\u660E\u7684\u5C5E\u6027\uFF09\u4E0D\u540C\uFF0C\u79C1\u6709\u5B57\u6BB5\u8981\u7262\u8BB0\u4EE5\u4E0B\u89C4\u5219\uFF1A</p><p>\u79C1\u6709\u5B57\u6BB5\u4EE5 # \u5B57\u7B26\u5F00\u5934\uFF0C\u6709\u65F6\u6211\u4EEC\u79F0\u4E4B\u4E3A\u79C1\u6709\u540D\u79F0\uFF1B \u6BCF\u4E2A\u79C1\u6709\u5B57\u6BB5\u540D\u79F0\u90FD\u552F\u4E00\u5730\u9650\u5B9A\u4E8E\u5176\u5305\u542B\u7684\u7C7B\uFF1B \u4E0D\u80FD\u5728\u79C1\u6709\u5B57\u6BB5\u4E0A\u4F7F\u7528 TypeScript \u53EF\u8BBF\u95EE\u6027\u4FEE\u9970\u7B26\uFF08\u5982 public \u6216 private\uFF09\uFF1B \u79C1\u6709\u5B57\u6BB5\u4E0D\u80FD\u5728\u5305\u542B\u7684\u7C7B\u4E4B\u5916\u8BBF\u95EE\uFF0C\u751A\u81F3\u4E0D\u80FD\u88AB\u68C0\u6D4B\u5230\u3002</p><ul><li>3 \u8BBF\u95EE\u5668</li></ul><p>\u5728 TypeScript \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 getter \u548C setter \u65B9\u6CD5\u6765\u5B9E\u73B0\u6570\u636E\u7684\u5C01\u88C5\u548C\u6709\u6548\u6027\u6821\u9A8C\uFF0C\u9632\u6B62\u51FA\u73B0\u5F02\u5E38\u6570\u636E\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> passcode <span class="token operator">=</span> <span class="token string">&quot;Hello TypeScript&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> _fullName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token keyword">get</span> <span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_fullName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">fullName</span><span class="token punctuation">(</span>newName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>passcode <span class="token operator">&amp;&amp;</span> passcode <span class="token operator">==</span> <span class="token string">&quot;Hello TypeScript&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_fullName <span class="token operator">=</span> newName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Error: Unauthorized update of employee!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> employee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
employee<span class="token punctuation">.</span>fullName <span class="token operator">=</span> <span class="token string">&quot;Semlinker&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>employee<span class="token punctuation">.</span>fullName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>employee<span class="token punctuation">.</span>fullName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4 \u7C7B\u7684\u7EE7\u627F</li></ul><p>\u7EE7\u627F\uFF08Inheritance\uFF09\u662F\u4E00\u79CD\u8054\u7ED3\u7C7B\u4E0E\u7C7B\u7684\u5C42\u6B21\u6A21\u578B\u3002\u6307\u7684\u662F\u4E00\u4E2A\u7C7B\uFF08\u79F0\u4E3A\u5B50\u7C7B\u3001\u5B50\u63A5\u53E3\uFF09\u7EE7\u627F\u53E6\u5916\u7684\u4E00\u4E2A\u7C7B\uFF08\u79F0\u4E3A\u7236\u7C7B\u3001\u7236\u63A5\u53E3\uFF09\u7684\u529F\u80FD\uFF0C\u5E76\u53EF\u4EE5\u589E\u52A0\u5B83\u81EA\u5DF1\u7684\u65B0\u529F\u80FD\u7684\u80FD\u529B\uFF0C\u7EE7\u627F\u662F\u7C7B\u4E0E\u7C7B\u6216\u8005\u63A5\u53E3\u4E0E\u63A5\u53E3\u4E4B\u95F4\u6700\u5E38\u89C1\u7684\u5173\u7CFB\u3002</p><p>\u7EE7\u627F\u662F\u4E00\u79CD is-a \u5173\u7CFB\uFF1A</p><p>\u5728 TypeScript \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 extends \u5173\u952E\u5B57\u6765\u5B9E\u73B0\u7EE7\u627F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>theName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> theName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">move</span><span class="token punctuation">(</span>distanceInMeters<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> moved </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>distanceInMeters<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">m.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Snake</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">move</span><span class="token punctuation">(</span>distanceInMeters <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Slithering...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span>distanceInMeters<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> sam <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Snake</span><span class="token punctuation">(</span><span class="token string">&quot;Sammy the Python&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sam<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>5 \u62BD\u8C61\u7C7B</li></ul><p>\u4F7F\u7528 abstract \u5173\u952E\u5B57\u58F0\u660E\u7684\u7C7B\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u62BD\u8C61\u7C7B\u3002\u62BD\u8C61\u7C7B\u4E0D\u80FD\u88AB\u5B9E\u4F8B\u5316\uFF0C\u56E0\u4E3A\u5B83\u91CC\u9762\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u62BD\u8C61\u65B9\u6CD5\u3002\u6240\u8C13\u7684\u62BD\u8C61\u65B9\u6CD5\uFF0C\u662F\u6307\u4E0D\u5305\u542B\u5177\u4F53\u5B9E\u73B0\u7684\u65B9\u6CD5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">abstract</span> <span class="token function">say</span><span class="token punctuation">(</span>words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Cannot create an instance of an abstract class.(2511)</span>
<span class="token keyword">const</span> lolo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u62BD\u8C61\u7C7B\u4E0D\u80FD\u88AB\u76F4\u63A5\u5B9E\u4F8B\u5316\uFF0C\u6211\u4EEC\u53EA\u80FD\u5B9E\u4F8B\u5316\u5B9E\u73B0\u4E86\u6240\u6709\u62BD\u8C61\u65B9\u6CD5\u7684\u5B50\u7C7B\u3002\u5177\u4F53\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// \u62BD\u8C61\u65B9\u6CD5</span>
  <span class="token keyword">abstract</span> <span class="token function">say</span><span class="token punctuation">(</span>words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Developer</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">say</span><span class="token punctuation">(</span>words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> says </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>words<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> lolo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Developer</span><span class="token punctuation">(</span><span class="token string">&quot;lolo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
lolo<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;I love ts!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// lolo says I love ts!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>6 \u7C7B\u65B9\u6CD5\u91CD\u8F7D</li></ul><p>\u5728\u524D\u9762\u7684\u7AE0\u8282\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4ECB\u7ECD\u4E86\u51FD\u6570\u91CD\u8F7D\u3002\u5BF9\u4E8E\u7C7B\u7684\u65B9\u6CD5\u6765\u8BF4\uFF0C\u5B83\u4E5F\u652F\u6301\u91CD\u8F7D\u3002\u6BD4\u5982\uFF0C\u5728\u4EE5\u4E0B\u793A\u4F8B\u4E2D\u6211\u4EEC\u91CD\u8F7D\u4E86 ProductService \u7C7B\u7684 getProducts \u6210\u5458\u65B9\u6CD5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ProductService</span> <span class="token punctuation">{</span>
    <span class="token function">getProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">getProducts</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">getProducts</span><span class="token punctuation">(</span>id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> id <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u83B7\u53D6id\u4E3A </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \u7684\u4EA7\u54C1\u4FE1\u606F</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u83B7\u53D6\u6240\u6709\u7684\u4EA7\u54C1\u4FE1\u606F</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> productService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProductService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
productService<span class="token punctuation">.</span><span class="token function">getProducts</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6id\u4E3A 666 \u7684\u4EA7\u54C1\u4FE1\u606F</span>
productService<span class="token punctuation">.</span><span class="token function">getProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u6240\u6709\u7684\u4EA7\u54C1\u4FE1\u606F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","ts-study-class.html.vue"]]);export{r as default};
