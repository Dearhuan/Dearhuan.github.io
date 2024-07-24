import{_ as q,f,g as y,o as F,c as _,b as e,h as c,d as l,r as b,p as C,k as D,a,e as t}from"./app.c7f8af8b.js";const d=o=>(C("data-v-459dd0b2"),o=o(),D(),o),E=d(()=>a("h1",{id:"\u5168\u5C40\u63D0\u793A-message",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u5168\u5C40\u63D0\u793A-message","aria-hidden":"true"},"#"),t(" \u5168\u5C40\u63D0\u793A Message")],-1)),w=d(()=>a("br",null,null,-1)),A=d(()=>a("p",null,[a("em",null,"\u5168\u5C40\u5C55\u793A\u64CD\u4F5C\u53CD\u9988\u4FE1\u606F")],-1)),B=d(()=>a("h2",{id:"\u4F55\u65F6\u4F7F\u7528",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true"},"#"),t(" \u4F55\u65F6\u4F7F\u7528")],-1)),x=d(()=>a("ul",null,[a("li",null,"\u53EF\u63D0\u4F9B\u6210\u529F\u3001\u8B66\u544A\u548C\u9519\u8BEF\u7B49\u53CD\u9988\u4FE1\u606F"),a("li",null,"\u9876\u90E8\u5C45\u4E2D\u663E\u793A\u5E76\u81EA\u52A8\u6D88\u5931\uFF0C\u662F\u4E00\u79CD\u4E0D\u6253\u65AD\u7528\u6237\u64CD\u4F5C\u7684\u8F7B\u91CF\u7EA7\u63D0\u793A\u65B9\u5F0F")],-1)),S=d(()=>a("h2",{id:"\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#"),t(" \u57FA\u672C\u4F7F\u7528")],-1)),I=t("Info"),T=l(`<details class="custom-container details" data-v-459dd0b2><summary data-v-459dd0b2>Show Code</summary><div class="language-vue ext-vue line-numbers-mode" data-v-459dd0b2><pre class="language-vue" data-v-459dd0b2><code data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>script</span> <span class="token attr-name" data-v-459dd0b2>setup</span> <span class="token attr-name" data-v-459dd0b2>lang</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>ts<span class="token punctuation" data-v-459dd0b2>&quot;</span></span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span><span class="token script" data-v-459dd0b2><span class="token language-javascript" data-v-459dd0b2>
<span class="token keyword" data-v-459dd0b2>import</span> <span class="token punctuation" data-v-459dd0b2>{</span> ref <span class="token punctuation" data-v-459dd0b2>}</span> <span class="token keyword" data-v-459dd0b2>from</span> <span class="token string" data-v-459dd0b2>&#39;vue&#39;</span>
<span class="token keyword" data-v-459dd0b2>const</span> message <span class="token operator" data-v-459dd0b2>=</span> <span class="token function" data-v-459dd0b2>ref</span><span class="token punctuation" data-v-459dd0b2>(</span><span class="token punctuation" data-v-459dd0b2>)</span>

<span class="token keyword" data-v-459dd0b2>function</span> <span class="token function" data-v-459dd0b2>onInfo</span> <span class="token punctuation" data-v-459dd0b2>(</span><span class="token parameter" data-v-459dd0b2><span class="token literal-property property" data-v-459dd0b2>content</span><span class="token operator" data-v-459dd0b2>:</span> any</span><span class="token punctuation" data-v-459dd0b2>)</span> <span class="token punctuation" data-v-459dd0b2>{</span>
  message<span class="token punctuation" data-v-459dd0b2>.</span>value<span class="token punctuation" data-v-459dd0b2>.</span><span class="token function" data-v-459dd0b2>info</span><span class="token punctuation" data-v-459dd0b2>(</span>content<span class="token punctuation" data-v-459dd0b2>)</span> <span class="token comment" data-v-459dd0b2>// info\u8C03\u7528</span>
<span class="token punctuation" data-v-459dd0b2>}</span>
<span class="token keyword" data-v-459dd0b2>function</span> <span class="token function" data-v-459dd0b2>onClose</span> <span class="token punctuation" data-v-459dd0b2>(</span><span class="token punctuation" data-v-459dd0b2>)</span> <span class="token punctuation" data-v-459dd0b2>{</span>
  console<span class="token punctuation" data-v-459dd0b2>.</span><span class="token function" data-v-459dd0b2>log</span><span class="token punctuation" data-v-459dd0b2>(</span><span class="token string" data-v-459dd0b2>&#39;close&#39;</span><span class="token punctuation" data-v-459dd0b2>)</span>
<span class="token punctuation" data-v-459dd0b2>}</span>
</span></span><span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>script</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>template</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
  <span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>my-button</span> <span class="token attr-name" data-v-459dd0b2>type</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>primary<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>@click</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>onInfo(&#39;This is a normal message&#39;)<span class="token punctuation" data-v-459dd0b2>&quot;</span></span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>Info<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>my-button</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
  <span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>Message</span> <span class="token attr-name" data-v-459dd0b2>ref</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>message<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>:duration</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>3000<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>:top</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>30<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>@close</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>onClose<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token punctuation" data-v-459dd0b2>/&gt;</span></span>
<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>template</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-459dd0b2><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div></div></div></details><h2 id="\u6210\u529F\u63D0\u793A" tabindex="-1" data-v-459dd0b2><a class="header-anchor" href="#\u6210\u529F\u63D0\u793A" aria-hidden="true" data-v-459dd0b2>#</a> \u6210\u529F\u63D0\u793A</h2>`,2),M=t("Success"),W=l(`<details class="custom-container details" data-v-459dd0b2><summary data-v-459dd0b2>Show Code</summary><div class="language-vue ext-vue line-numbers-mode" data-v-459dd0b2><pre class="language-vue" data-v-459dd0b2><code data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>script</span> <span class="token attr-name" data-v-459dd0b2>setup</span> <span class="token attr-name" data-v-459dd0b2>lang</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>ts<span class="token punctuation" data-v-459dd0b2>&quot;</span></span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span><span class="token script" data-v-459dd0b2><span class="token language-javascript" data-v-459dd0b2>
<span class="token keyword" data-v-459dd0b2>import</span> <span class="token punctuation" data-v-459dd0b2>{</span> ref <span class="token punctuation" data-v-459dd0b2>}</span> <span class="token keyword" data-v-459dd0b2>from</span> <span class="token string" data-v-459dd0b2>&#39;vue&#39;</span>
<span class="token keyword" data-v-459dd0b2>const</span> message <span class="token operator" data-v-459dd0b2>=</span> <span class="token function" data-v-459dd0b2>ref</span><span class="token punctuation" data-v-459dd0b2>(</span><span class="token punctuation" data-v-459dd0b2>)</span>

<span class="token keyword" data-v-459dd0b2>function</span> <span class="token function" data-v-459dd0b2>onSuccess</span> <span class="token punctuation" data-v-459dd0b2>(</span><span class="token parameter" data-v-459dd0b2><span class="token literal-property property" data-v-459dd0b2>content</span><span class="token operator" data-v-459dd0b2>:</span> any</span><span class="token punctuation" data-v-459dd0b2>)</span> <span class="token punctuation" data-v-459dd0b2>{</span>
  message<span class="token punctuation" data-v-459dd0b2>.</span>value<span class="token punctuation" data-v-459dd0b2>.</span><span class="token function" data-v-459dd0b2>success</span><span class="token punctuation" data-v-459dd0b2>(</span>content<span class="token punctuation" data-v-459dd0b2>)</span> <span class="token comment" data-v-459dd0b2>// success\u8C03\u7528</span>
<span class="token punctuation" data-v-459dd0b2>}</span>
<span class="token keyword" data-v-459dd0b2>function</span> <span class="token function" data-v-459dd0b2>onClose</span> <span class="token punctuation" data-v-459dd0b2>(</span><span class="token punctuation" data-v-459dd0b2>)</span> <span class="token punctuation" data-v-459dd0b2>{</span>
  console<span class="token punctuation" data-v-459dd0b2>.</span><span class="token function" data-v-459dd0b2>log</span><span class="token punctuation" data-v-459dd0b2>(</span><span class="token string" data-v-459dd0b2>&#39;close&#39;</span><span class="token punctuation" data-v-459dd0b2>)</span>
<span class="token punctuation" data-v-459dd0b2>}</span>
</span></span><span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>script</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>template</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
  <span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>my-button</span> <span class="token attr-name" data-v-459dd0b2>type</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>primary<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>@click</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>onSuccess(&#39;This is a success message&#39;)<span class="token punctuation" data-v-459dd0b2>&quot;</span></span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>Success<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>my-button</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
  <span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>Message</span> <span class="token attr-name" data-v-459dd0b2>ref</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>message<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>:duration</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>3000<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>:top</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>30<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>@close</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>onClose<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token punctuation" data-v-459dd0b2>/&gt;</span></span>
<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>template</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-459dd0b2><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div></div></div></details><h2 id="\u5931\u8D25\u63D0\u793A" tabindex="-1" data-v-459dd0b2><a class="header-anchor" href="#\u5931\u8D25\u63D0\u793A" aria-hidden="true" data-v-459dd0b2>#</a> \u5931\u8D25\u63D0\u793A</h2>`,2),j=t("Error"),N=l(`<details class="custom-container details" data-v-459dd0b2><summary data-v-459dd0b2>Show Code</summary><div class="language-vue ext-vue line-numbers-mode" data-v-459dd0b2><pre class="language-vue" data-v-459dd0b2><code data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>script</span> <span class="token attr-name" data-v-459dd0b2>setup</span> <span class="token attr-name" data-v-459dd0b2>lang</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>ts<span class="token punctuation" data-v-459dd0b2>&quot;</span></span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span><span class="token script" data-v-459dd0b2><span class="token language-javascript" data-v-459dd0b2>
<span class="token keyword" data-v-459dd0b2>import</span> <span class="token punctuation" data-v-459dd0b2>{</span> ref <span class="token punctuation" data-v-459dd0b2>}</span> <span class="token keyword" data-v-459dd0b2>from</span> <span class="token string" data-v-459dd0b2>&#39;vue&#39;</span>
<span class="token keyword" data-v-459dd0b2>const</span> message <span class="token operator" data-v-459dd0b2>=</span> <span class="token function" data-v-459dd0b2>ref</span><span class="token punctuation" data-v-459dd0b2>(</span><span class="token punctuation" data-v-459dd0b2>)</span>

<span class="token keyword" data-v-459dd0b2>function</span> <span class="token function" data-v-459dd0b2>onError</span> <span class="token punctuation" data-v-459dd0b2>(</span><span class="token parameter" data-v-459dd0b2><span class="token literal-property property" data-v-459dd0b2>content</span><span class="token operator" data-v-459dd0b2>:</span> any</span><span class="token punctuation" data-v-459dd0b2>)</span> <span class="token punctuation" data-v-459dd0b2>{</span>
  message<span class="token punctuation" data-v-459dd0b2>.</span>value<span class="token punctuation" data-v-459dd0b2>.</span><span class="token function" data-v-459dd0b2>error</span><span class="token punctuation" data-v-459dd0b2>(</span>content<span class="token punctuation" data-v-459dd0b2>)</span> <span class="token comment" data-v-459dd0b2>// error\u8C03\u7528</span>
<span class="token punctuation" data-v-459dd0b2>}</span>
<span class="token keyword" data-v-459dd0b2>function</span> <span class="token function" data-v-459dd0b2>onClose</span> <span class="token punctuation" data-v-459dd0b2>(</span><span class="token punctuation" data-v-459dd0b2>)</span> <span class="token punctuation" data-v-459dd0b2>{</span>
  console<span class="token punctuation" data-v-459dd0b2>.</span><span class="token function" data-v-459dd0b2>log</span><span class="token punctuation" data-v-459dd0b2>(</span><span class="token string" data-v-459dd0b2>&#39;close&#39;</span><span class="token punctuation" data-v-459dd0b2>)</span>
<span class="token punctuation" data-v-459dd0b2>}</span>
</span></span><span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>script</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>template</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
  <span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>my-button</span> <span class="token attr-name" data-v-459dd0b2>type</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>primary<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>@click</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>onError(&#39;This is a error message&#39;)<span class="token punctuation" data-v-459dd0b2>&quot;</span></span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>Error<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>my-button</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
  <span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>Message</span> <span class="token attr-name" data-v-459dd0b2>ref</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>message<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>:duration</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>3000<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>:top</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>30<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>@close</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>onClose<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token punctuation" data-v-459dd0b2>/&gt;</span></span>
<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>template</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-459dd0b2><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div></div></div></details><h2 id="\u8B66\u544A\u63D0\u793A" tabindex="-1" data-v-459dd0b2><a class="header-anchor" href="#\u8B66\u544A\u63D0\u793A" aria-hidden="true" data-v-459dd0b2>#</a> \u8B66\u544A\u63D0\u793A</h2>`,2),V=t("Warn"),$=l(`<details class="custom-container details" data-v-459dd0b2><summary data-v-459dd0b2>Show Code</summary><div class="language-vue ext-vue line-numbers-mode" data-v-459dd0b2><pre class="language-vue" data-v-459dd0b2><code data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>script</span> <span class="token attr-name" data-v-459dd0b2>setup</span> <span class="token attr-name" data-v-459dd0b2>lang</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>ts<span class="token punctuation" data-v-459dd0b2>&quot;</span></span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span><span class="token script" data-v-459dd0b2><span class="token language-javascript" data-v-459dd0b2>
<span class="token keyword" data-v-459dd0b2>import</span> <span class="token punctuation" data-v-459dd0b2>{</span> ref <span class="token punctuation" data-v-459dd0b2>}</span> <span class="token keyword" data-v-459dd0b2>from</span> <span class="token string" data-v-459dd0b2>&#39;vue&#39;</span>
<span class="token keyword" data-v-459dd0b2>const</span> message <span class="token operator" data-v-459dd0b2>=</span> <span class="token function" data-v-459dd0b2>ref</span><span class="token punctuation" data-v-459dd0b2>(</span><span class="token punctuation" data-v-459dd0b2>)</span>

<span class="token keyword" data-v-459dd0b2>function</span> <span class="token function" data-v-459dd0b2>onWarn</span> <span class="token punctuation" data-v-459dd0b2>(</span><span class="token parameter" data-v-459dd0b2><span class="token literal-property property" data-v-459dd0b2>content</span><span class="token operator" data-v-459dd0b2>:</span> any</span><span class="token punctuation" data-v-459dd0b2>)</span> <span class="token punctuation" data-v-459dd0b2>{</span>
  message<span class="token punctuation" data-v-459dd0b2>.</span>value<span class="token punctuation" data-v-459dd0b2>.</span><span class="token function" data-v-459dd0b2>warn</span><span class="token punctuation" data-v-459dd0b2>(</span>content<span class="token punctuation" data-v-459dd0b2>)</span> <span class="token comment" data-v-459dd0b2>// warn\u8C03\u7528</span>
<span class="token punctuation" data-v-459dd0b2>}</span>
<span class="token keyword" data-v-459dd0b2>function</span> <span class="token function" data-v-459dd0b2>onClose</span> <span class="token punctuation" data-v-459dd0b2>(</span><span class="token punctuation" data-v-459dd0b2>)</span> <span class="token punctuation" data-v-459dd0b2>{</span>
  console<span class="token punctuation" data-v-459dd0b2>.</span><span class="token function" data-v-459dd0b2>log</span><span class="token punctuation" data-v-459dd0b2>(</span><span class="token string" data-v-459dd0b2>&#39;close&#39;</span><span class="token punctuation" data-v-459dd0b2>)</span>
<span class="token punctuation" data-v-459dd0b2>}</span>
</span></span><span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>script</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>template</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
  <span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>my-button</span> <span class="token attr-name" data-v-459dd0b2>type</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>primary<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>@click</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>onWarn(&#39;This is a warn message&#39;)<span class="token punctuation" data-v-459dd0b2>&quot;</span></span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>Warn<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>my-button</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
  <span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;</span>Message</span> <span class="token attr-name" data-v-459dd0b2>ref</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>message<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>:duration</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>3000<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>:top</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>30<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token attr-name" data-v-459dd0b2>@close</span><span class="token attr-value" data-v-459dd0b2><span class="token punctuation attr-equals" data-v-459dd0b2>=</span><span class="token punctuation" data-v-459dd0b2>&quot;</span>onClose<span class="token punctuation" data-v-459dd0b2>&quot;</span></span> <span class="token punctuation" data-v-459dd0b2>/&gt;</span></span>
<span class="token tag" data-v-459dd0b2><span class="token tag" data-v-459dd0b2><span class="token punctuation" data-v-459dd0b2>&lt;/</span>template</span><span class="token punctuation" data-v-459dd0b2>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-459dd0b2><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div><div class="line-number" data-v-459dd0b2></div></div></div></details><h2 id="apis" tabindex="-1" data-v-459dd0b2><a class="header-anchor" href="#apis" aria-hidden="true" data-v-459dd0b2>#</a> APIs</h2><table data-v-459dd0b2><thead data-v-459dd0b2><tr data-v-459dd0b2><th data-v-459dd0b2>\u53C2\u6570</th><th data-v-459dd0b2>\u8BF4\u660E</th><th data-v-459dd0b2>\u7C7B\u578B</th><th data-v-459dd0b2>\u9ED8\u8BA4\u503C</th><th data-v-459dd0b2>\u5FC5\u4F20</th></tr></thead><tbody data-v-459dd0b2><tr data-v-459dd0b2><td data-v-459dd0b2>duration</td><td data-v-459dd0b2>\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4Dms</td><td data-v-459dd0b2>number</td><td data-v-459dd0b2>3000</td><td data-v-459dd0b2>false</td></tr><tr data-v-459dd0b2><td data-v-459dd0b2>top</td><td data-v-459dd0b2>\u6D88\u606F\u8DDD\u79BB\u9876\u90E8\u7684\u4F4D\u7F6E\uFF0C\u5355\u4F4Dpx</td><td data-v-459dd0b2>number</td><td data-v-459dd0b2>30</td><td data-v-459dd0b2>false</td></tr></tbody></table><h2 id="events" tabindex="-1" data-v-459dd0b2><a class="header-anchor" href="#events" aria-hidden="true" data-v-459dd0b2>#</a> Events</h2><table data-v-459dd0b2><thead data-v-459dd0b2><tr data-v-459dd0b2><th data-v-459dd0b2>\u4E8B\u4EF6\u540D\u79F0</th><th data-v-459dd0b2>\u8BF4\u660E</th><th data-v-459dd0b2>\u53C2\u6570</th></tr></thead><tbody data-v-459dd0b2><tr data-v-459dd0b2><td data-v-459dd0b2>change</td><td data-v-459dd0b2>\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td data-v-459dd0b2>() =&gt; void</td></tr></tbody></table>`,5),P=f({__name:"message.html",setup(o){const p=y();function i(n){p.value.info(n)}function k(n){p.value.success(n)}function r(n){p.value.error(n)}function m(n){p.value.warn(n)}function g(){console.log("close")}return(n,s)=>{const h=b("Message"),u=b("my-button");return F(),_("div",null,[E,w,A,B,x,e(h,{ref_key:"message",ref:p,duration:3e3,top:30,onClose:g},null,512),S,e(u,{class:"m-t-20",type:"primary",onClick:s[0]||(s[0]=v=>i("This is a normal message"))},{default:c(()=>[I]),_:1}),T,e(u,{class:"m-t-20",type:"primary",onClick:s[1]||(s[1]=v=>k("This is a success message"))},{default:c(()=>[M]),_:1}),W,e(u,{class:"m-t-20",type:"primary",onClick:s[2]||(s[2]=v=>r("This is a error message"))},{default:c(()=>[j]),_:1}),N,e(u,{class:"m-t-20",type:"primary",onClick:s[3]||(s[3]=v=>m("This is a warn message"))},{default:c(()=>[V]),_:1}),$])}}});var G=q(P,[["__scopeId","data-v-459dd0b2"],["__file","message.html.vue"]]);export{G as default};
