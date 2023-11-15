import{_ as n,o as s,c as a,d as p}from"./app.78a70bf5.js";const t={},o=p(`<h1 id="\u5E38\u7528\u7C7B\u578B\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7C7B\u578B\u68C0\u67E5" aria-hidden="true">#</a> \u5E38\u7528\u7C7B\u578B\u68C0\u67E5</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> toString <span class="token operator">=</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString

<span class="token keyword">const</span> <span class="token function-variable function">is</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[object </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isDef <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token constant">T</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> val <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isUnDef <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token constant">T</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">isDef</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isObject <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> val <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">is</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;Object&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isDate <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> Date <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">is</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;Date&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isNull <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token keyword">null</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> val <span class="token operator">===</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isNullAndUnDef <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">isUnDef</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNull</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isNullOrUnDef <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">isUnDef</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isNull</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isNumber <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">is</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;Number&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isString <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">is</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isBoolean <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">is</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;Boolean&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isRegExp <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> RegExp <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">is</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;RegExp&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isFunction <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token builtin">Function</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isArray <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> val <span class="token operator">&amp;&amp;</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isWindow <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> Window <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">is</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;Window&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isElement <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> Element <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">isObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token operator">!</span>val<span class="token punctuation">.</span>tagName
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isMap <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> Map<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">is</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;Map&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isPromise <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">is</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;Promise&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>then<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>catch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isEmpty <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token constant">T</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isString</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token keyword">instanceof</span> <span class="token class-name">Map</span> <span class="token operator">||</span> val <span class="token keyword">instanceof</span> <span class="token class-name">Set</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isUrl <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(((^https?:(?:\\/\\/)?)(?:[-;:&amp;=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+(?::\\d+)?|(?:www.|[-;:&amp;=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&amp;;%@.\\w_]*)#?(?:[\\w]*))?)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,i){return s(),a("div",null,e)}var r=n(t,[["render",c],["__file","ts-is.html.vue"]]);export{r as default};
