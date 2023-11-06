import{_ as n,o as s,c as a,d as t}from"./app.32d0fc14.js";const p={},e=t(`<h1 id="typescript-4-0\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#typescript-4-0\u65B0\u7279\u6027" aria-hidden="true">#</a> TypeScript 4.0\u65B0\u7279\u6027</h1><p>TypeScript 4.0 \u5E26\u6765\u4E86\u5F88\u591A\u65B0\u7684\u7279\u6027\uFF0C\u8FD9\u91CC\u6211\u4EEC\u53EA\u7B80\u5355\u4ECB\u7ECD\u5176\u4E2D\u7684\u4E24\u4E2A\u65B0\u7279\u6027\u3002</p><h3 id="_1-\u6784\u9020\u51FD\u6570\u7684\u7C7B\u5C5E\u6027\u63A8\u65AD" tabindex="-1"><a class="header-anchor" href="#_1-\u6784\u9020\u51FD\u6570\u7684\u7C7B\u5C5E\u6027\u63A8\u65AD" aria-hidden="true">#</a> 1 \u6784\u9020\u51FD\u6570\u7684\u7C7B\u5C5E\u6027\u63A8\u65AD</h3><p>\u5F53 noImplicitAny \u914D\u7F6E\u5C5E\u6027\u88AB\u542F\u7528\u4E4B\u540E\uFF0CTypeScript 4.0 \u5C31\u53EF\u4EE5\u4F7F\u7528\u63A7\u5236\u6D41\u5206\u6790\u6765\u786E\u8BA4\u7C7B\u4E2D\u7684\u5C5E\u6027\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  fullName<span class="token punctuation">;</span> <span class="token comment">// (property) Person.fullName: string</span>
  firstName<span class="token punctuation">;</span> <span class="token comment">// (property) Person.firstName: string</span>
  lastName<span class="token punctuation">;</span> <span class="token comment">// (property) Person.lastName: string</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>fullName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> fullName<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> fullName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span>   fullName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u800C\u5BF9\u4E8E\u4EE5\u4E0A\u7684\u4EE3\u7801\uFF0C\u5982\u679C\u5728 TypeScript 4.0 \u4EE5\u524D\u7684\u7248\u672C\uFF0C\u6BD4\u5982\u5728 3.9.2 \u7248\u672C\u4E0B\uFF0C\u7F16\u8BD1\u5668\u4F1A\u63D0\u793A\u4EE5\u4E0B\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// Member &#39;fullName&#39; implicitly has an &#39;any&#39; type.(7008)</span>
  fullName<span class="token punctuation">;</span> <span class="token comment">// Error</span>
  firstName<span class="token punctuation">;</span> <span class="token comment">// Error</span>
  lastName<span class="token punctuation">;</span> <span class="token comment">// Error</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>fullName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> fullName<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> fullName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span>   fullName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u6784\u9020\u51FD\u6570\u63A8\u65AD\u7C7B\u5C5E\u6027\u7684\u7C7B\u578B\uFF0C\u8BE5\u7279\u6027\u7ED9\u6211\u4EEC\u5E26\u6765\u4E86\u4FBF\u5229\u3002\u4F46\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u6211\u4EEC\u6CA1\u6CD5\u4FDD\u8BC1\u5BF9\u6210\u5458\u5C5E\u6027\u90FD\u8FDB\u884C\u8D4B\u503C\uFF0C\u90A3\u4E48\u8BE5\u5C5E\u6027\u53EF\u80FD\u4F1A\u88AB\u8BA4\u4E3A\u662F undefined\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
   fullName<span class="token punctuation">;</span>  <span class="token comment">// (property) Person.fullName: string</span>
   firstName<span class="token punctuation">;</span> <span class="token comment">// (property) Person.firstName: string | undefined</span>
   lastName<span class="token punctuation">;</span> <span class="token comment">// (property) Person.lastName: string | undefined</span>

   <span class="token function">constructor</span><span class="token punctuation">(</span>fullName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> fullName<span class="token punctuation">;</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> fullName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span>   fullName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u6807\u8BB0\u7684\u5143\u7EC4\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_2-\u6807\u8BB0\u7684\u5143\u7EC4\u5143\u7D20" aria-hidden="true">#</a> 2 \u6807\u8BB0\u7684\u5143\u7EC4\u5143\u7D20</h3><p>\u5728\u4EE5\u4E0B\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u5143\u7EC4\u7C7B\u578B\u6765\u58F0\u660E\u5269\u4F59\u53C2\u6570\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">addPerson</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Person info: name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, age: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">addPerson</span><span class="token punctuation">(</span><span class="token string">&quot;lolo&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Person info: name: lolo, age: 5 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\uFF0C\u5BF9\u4E8E\u4E0A\u9762\u7684 addPerson \u51FD\u6570\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8FD9\u6837\u5B9E\u73B0\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">addPerson</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Person info: name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, age: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E24\u79CD\u65B9\u5F0F\u770B\u8D77\u6765\u6CA1\u6709\u591A\u5927\u7684\u533A\u522B\uFF0C\u4F46\u5BF9\u4E8E\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF0C\u6211\u4EEC\u6CA1\u6CD5\u8BBE\u7F6E\u7B2C\u4E00\u4E2A\u53C2\u6570\u548C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684\u540D\u79F0\u3002\u867D\u7136\u8FD9\u6837\u5BF9\u7C7B\u578B\u68C0\u67E5\u6CA1\u6709\u5F71\u54CD\uFF0C\u4F46\u5728\u5143\u7EC4\u4F4D\u7F6E\u4E0A\u7F3A\u5C11\u6807\u7B7E\uFF0C\u4F1A\u4F7F\u5F97\u5B83\u4EEC\u96BE\u4E8E\u4F7F\u7528\u3002\u4E3A\u4E86\u63D0\u9AD8\u5F00\u53D1\u8005\u4F7F\u7528\u5143\u7EC4\u7684\u4F53\u9A8C\uFF0CTypeScript 4.0 \u652F\u6301\u4E3A\u5143\u7EC4\u7C7B\u578B\u8BBE\u7F6E\u6807\u7B7E\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">addPerson</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Person info: name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, age: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4B\u540E\uFF0C\u5F53\u6211\u4EEC\u4F7F\u7528 addPerson \u65B9\u6CD5\u65F6\uFF0CTypeScript \u7684\u667A\u80FD\u63D0\u793A\u5C31\u4F1A\u53D8\u5F97\u66F4\u52A0\u53CB\u597D\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u672A\u4F7F\u7528\u6807\u7B7E\u7684\u667A\u80FD\u63D0\u793A</span>
<span class="token comment">// addPerson(args_0: string, args_1: number): void</span>
<span class="token keyword">function</span> <span class="token function">addPerson</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Person info: name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, age: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 

<span class="token comment">// \u5DF2\u4F7F\u7528\u6807\u7B7E\u7684\u667A\u80FD\u63D0\u793A</span>
<span class="token comment">// addPerson(name: string, age: number): void</span>
<span class="token keyword">function</span> <span class="token function">addPerson</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Person info: name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, age: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","ts-study-4.html.vue"]]);export{r as default};
