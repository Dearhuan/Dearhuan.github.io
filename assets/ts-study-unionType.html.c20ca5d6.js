import{_ as n,o as s,c as a,d as e}from"./app.8dcdd56e.js";const p={},t=e(`<h1 id="typescript-\u8054\u5408\u7C7B\u578B\u548C\u7C7B\u578B\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#typescript-\u8054\u5408\u7C7B\u578B\u548C\u7C7B\u578B\u522B\u540D" aria-hidden="true">#</a> TypeScript-\u8054\u5408\u7C7B\u578B\u548C\u7C7B\u578B\u522B\u540D</h1><ul><li>\u8054\u5408\u7C7B\u578B</li></ul><p>\u8054\u5408\u7C7B\u578B\u901A\u5E38\u4E0Enull\u6216undefined\u4E00\u8D77\u4F7F\u7528\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC name \u7684\u7C7B\u578B\u662F string | undefined \u610F\u5473\u7740\u53EF\u4EE5\u5C06 string \u6216 undefined \u7684\u503C\u4F20\u9012\u7ED9sayHello \u51FD\u6570\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token string">&quot;semlinker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u8FD9\u4E2A\u793A\u4F8B\uFF0C\u4F60\u53EF\u4EE5\u51ED\u76F4\u89C9\u77E5\u9053\u7C7B\u578B A \u548C\u7C7B\u578B B \u8054\u5408\u540E\u7684\u7C7B\u578B\u662F\u540C\u65F6\u63A5\u53D7 A \u548C B \u503C\u7684\u7C7B\u578B\u3002\u6B64\u5916\uFF0C\u5BF9\u4E8E\u8054\u5408\u7C7B\u578B\u6765\u8BF4\uFF0C\u4F60\u53EF\u80FD\u4F1A\u9047\u5230\u4EE5\u4E0B\u7684\u7528\u6CD5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">EventNames</span> <span class="token operator">=</span> <span class="token string">&#39;click&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;scroll&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u793A\u4F8B\u4E2D\u7684 1\u30012 \u6216 &#39;click&#39; \u88AB\u79F0\u4E3A\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u7528\u6765\u7EA6\u675F\u53D6\u503C\u53EA\u80FD\u662F\u67D0\u51E0\u4E2A\u503C\u4E2D\u7684\u4E00\u4E2A\u3002</p><ul><li>\u53EF\u8FA8\u8BC6\u8054\u5408</li></ul><p>TypeScript \u53EF\u8FA8\u8BC6\u8054\u5408\uFF08Discriminated Unions\uFF09\u7C7B\u578B\uFF0C\u4E5F\u79F0\u4E3A\u4EE3\u6570\u6570\u636E\u7C7B\u578B\u6216\u6807\u7B7E\u8054\u5408\u7C7B\u578B\u3002<strong>\u5B83\u5305\u542B 3 \u4E2A\u8981\u70B9\uFF1A\u53EF\u8FA8\u8BC6\u3001\u8054\u5408\u7C7B\u578B\u548C\u7C7B\u578B\u5B88\u536B\u3002</strong></p><p>\u8FD9\u79CD\u7C7B\u578B\u7684\u672C\u8D28\u662F\u7ED3\u5408\u8054\u5408\u7C7B\u578B\u548C\u5B57\u9762\u91CF\u7C7B\u578B\u7684\u4E00\u79CD\u7C7B\u578B\u4FDD\u62A4\u65B9\u6CD5\u3002<strong>\u5982\u679C\u4E00\u4E2A\u7C7B\u578B\u662F\u591A\u4E2A\u7C7B\u578B\u7684\u8054\u5408\u7C7B\u578B\uFF0C\u4E14\u591A\u4E2A\u7C7B\u578B\u542B\u6709\u4E00\u4E2A\u516C\u5171\u5C5E\u6027\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u516C\u5171\u5C5E\u6027\uFF0C\u6765\u521B\u5EFA\u4E0D\u540C\u7684\u7C7B\u578B\u4FDD\u62A4\u533A\u5757\u3002</strong></p><p>1.\u53EF\u8FA8\u8BC6</p><p>\u53EF\u8FA8\u8BC6\u8981\u6C42\u8054\u5408\u7C7B\u578B\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u542B\u6709\u4E00\u4E2A\u5355\u4F8B\u7C7B\u578B\u5C5E\u6027\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> CarTransmission <span class="token punctuation">{</span>
  Automatic <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span>
  Manual <span class="token operator">=</span> <span class="token number">300</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Motorcycle</span> <span class="token punctuation">{</span>
  vType<span class="token operator">:</span> <span class="token string">&#39;motorcycle&#39;</span><span class="token punctuation">;</span> <span class="token comment">// discriminant</span>
  make<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// year</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  vType<span class="token operator">:</span> <span class="token string">&#39;car&#39;</span><span class="token punctuation">;</span> <span class="token comment">// discriminant</span>
  transmission<span class="token operator">:</span> CarTransmission
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Truck</span> <span class="token punctuation">{</span>
  vType<span class="token operator">:</span> <span class="token string">&#39;truck&#39;</span><span class="token punctuation">,</span> <span class="token comment">// discriminant</span>
  capacity<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// in tons</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u5206\u522B\u5B9A\u4E49\u4E86 Motorcycle\u3001 Car \u548C Truck \u4E09\u4E2A\u63A5\u53E3\uFF0C\u5728\u8FD9\u4E9B\u63A5\u53E3\u4E2D\u90FD\u5305\u542B\u4E00\u4E2A vType \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u88AB\u79F0\u4E3A\u53EF\u8FA8\u8BC6\u7684\u5C5E\u6027\uFF0C\u800C\u5176\u5B83\u7684\u5C5E\u6027\u53EA\u8DDF\u7279\u6027\u7684\u63A5\u53E3\u76F8\u5173\u3002</p><p>2.\u8054\u5408\u7C7B\u578B</p><p>\u57FA\u4E8E\u524D\u9762\u5B9A\u4E49\u4E86\u4E09\u4E2A\u63A5\u53E3\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A Vehicle \u8054\u5408\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Vehicle</span> <span class="token operator">=</span> Motorcycle <span class="token operator">|</span> Car <span class="token operator">|</span> Truck<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u73B0\u5728\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F00\u59CB\u4F7F\u7528 Vehicle \u8054\u5408\u7C7B\u578B\uFF0C\u5BF9\u4E8E Vehicle \u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u5B83\u53EF\u4EE5\u8868\u793A\u4E0D\u540C\u7C7B\u578B\u7684\u8F66\u8F86\u3002</p><p>3.\u7C7B\u578B\u5B88\u536B</p><p>\u4E0B\u9762\u6211\u4EEC\u6765\u5B9A\u4E49\u4E00\u4E2A evaluatePrice \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7528\u4E8E\u6839\u636E\u8F66\u8F86\u7684\u7C7B\u578B\u3001\u5BB9\u91CF\u548C\u8BC4\u4F30\u56E0\u5B50\u6765\u8BA1\u7B97\u4EF7\u683C\uFF0C\u5177\u4F53\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token constant">EVALUATION_FACTOR</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">;</span> 

<span class="token keyword">function</span> <span class="token function">evaluatePrice</span><span class="token punctuation">(</span>vehicle<span class="token operator">:</span> Vehicle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> vehicle<span class="token punctuation">.</span>capacity <span class="token operator">*</span> <span class="token constant">EVALUATION_FACTOR</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myTruck<span class="token operator">:</span> Truck <span class="token operator">=</span> <span class="token punctuation">{</span> vType<span class="token operator">:</span> <span class="token string">&quot;truck&quot;</span><span class="token punctuation">,</span> capacity<span class="token operator">:</span> <span class="token number">9.5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">evaluatePrice</span><span class="token punctuation">(</span>myTruck<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u4EE5\u4E0A\u4EE3\u7801\uFF0CTypeScript \u7F16\u8BD1\u5668\u5C06\u4F1A\u63D0\u793A\u4EE5\u4E0B\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Property <span class="token string">&#39;capacity&#39;</span> does not exist on <span class="token builtin class-name">type</span> <span class="token string">&#39;Vehicle&#39;</span><span class="token builtin class-name">.</span>
Property <span class="token string">&#39;capacity&#39;</span> does not exist on <span class="token builtin class-name">type</span> <span class="token string">&#39;Motorcycle&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u539F\u56E0\u662F\u5728 Motorcycle \u63A5\u53E3\u4E2D\uFF0C\u5E76\u4E0D\u5B58\u5728 capacity \u5C5E\u6027\uFF0C\u800C\u5BF9\u4E8E Car \u63A5\u53E3\u6765\u8BF4\uFF0C\u5B83\u4E5F\u4E0D\u5B58\u5728 capacity \u5C5E\u6027\u3002\u90A3\u4E48\uFF0C\u73B0\u5728\u6211\u4EEC\u5E94\u8BE5\u5982\u4F55\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898\u5462\uFF1F\u8FD9\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u5B88\u536B\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u91CD\u6784\u4E00\u4E0B\u524D\u9762\u5B9A\u4E49\u7684 evaluatePrice \u65B9\u6CD5\uFF0C\u91CD\u6784\u540E\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">evaluatePrice</span><span class="token punctuation">(</span>vehicle<span class="token operator">:</span> Vehicle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span><span class="token punctuation">(</span>vehicle<span class="token punctuation">.</span>vType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;car&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> vehicle<span class="token punctuation">.</span>transmission <span class="token operator">*</span> <span class="token constant">EVALUATION_FACTOR</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;truck&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> vehicle<span class="token punctuation">.</span>capacity <span class="token operator">*</span> <span class="token constant">EVALUATION_FACTOR</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;motorcycle&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> vehicle<span class="token punctuation">.</span>make <span class="token operator">*</span> <span class="token constant">EVALUATION_FACTOR</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4EE5\u4E0A\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 switch \u548C case \u8FD0\u7B97\u7B26\u6765\u5B9E\u73B0\u7C7B\u578B\u5B88\u536B\uFF0C\u4ECE\u800C\u786E\u4FDD\u5728 evaluatePrice \u65B9\u6CD5\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B89\u5168\u5730\u8BBF\u95EE vehicle \u5BF9\u8C61\u4E2D\u7684\u6240\u5305\u542B\u7684\u5C5E\u6027\uFF0C\u6765\u6B63\u786E\u7684\u8BA1\u7B97\u8BE5\u8F66\u8F86\u7C7B\u578B\u6240\u5BF9\u5E94\u7684\u4EF7\u683C\u3002</p><ul><li>\u7C7B\u578B\u522B\u540D</li></ul><p>\u7C7B\u578B\u522B\u540D\u7528\u6765\u7ED9\u4E00\u4E2A\u7C7B\u578B\u8D77\u4E2A\u65B0\u540D\u5B57\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Message</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token function-variable function">greet</span> <span class="token operator">=</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> Message<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),c=[t];function o(i,l){return s(),a("div",null,c)}var u=n(p,[["render",o],["__file","ts-study-unionType.html.vue"]]);export{u as default};
