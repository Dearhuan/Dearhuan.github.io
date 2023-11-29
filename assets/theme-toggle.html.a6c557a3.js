import{_ as i,f as b,g as f,o as r,c as k,a as c,t as m,u as l,b as p,h as e,z as g,d as v,r as F,e as u}from"./app.a0b212c7.js";const h=v(`<h1 id="\u524D\u7AEF\u4E3B\u9898\u5207\u6362" tabindex="-1" data-v-256d1fb4><a class="header-anchor" href="#\u524D\u7AEF\u4E3B\u9898\u5207\u6362" aria-hidden="true" data-v-256d1fb4>#</a> \u524D\u7AEF\u4E3B\u9898\u5207\u6362</h1><h3 id="css\u53D8\u91CF-\u7C7B\u540D\u5207\u6362" tabindex="-1" data-v-256d1fb4><a class="header-anchor" href="#css\u53D8\u91CF-\u7C7B\u540D\u5207\u6362" aria-hidden="true" data-v-256d1fb4>#</a> CSS\u53D8\u91CF+\u7C7B\u540D\u5207\u6362</h3><div class="custom-container tip" data-v-256d1fb4><p class="custom-container-title" data-v-256d1fb4>TIP</p><p data-v-256d1fb4>\u63D0\u524D\u5C06\u6837\u5F0F\u6587\u4EF6\u8F7D\u5165\uFF0C\u5207\u6362\u65F6\u5C06\u6307\u5B9A\u7684\u6839\u5143\u7D20\u7C7B\u540D\u66F4\u6362\u3002\u9ED8\u8BA4\u5728\u6839\u4F5C\u7528\u57DF\u4E0B\u5B9A\u4E49\u597DCSS\u53D8\u91CF\uFF0C\u53EA\u9700\u8981\u5728\u4E0D\u540C\u7684\u4E3B\u9898\u4E0B\u66F4\u6539CSS\u53D8\u91CF\u5BF9\u5E94\u7684\u53D6\u503C\u5373\u53EF\u3002 \u4F7F\u7528\u4E86color-scheme: dark;\u5C06\u7CFB\u7EDF\u7684\u6EDA\u52A8\u6761\u8BBE\u7F6E\u4E3A\u4E86\u9ED1\u8272\u6A21\u5F0F\uFF0C\u4F7F\u6837\u5F0F\u66F4\u52A0\u7EDF\u4E00\u3002</p></div><div class="language-css ext-css line-numbers-mode" data-v-256d1fb4><pre class="language-css" data-v-256d1fb4><code data-v-256d1fb4><span class="token selector" data-v-256d1fb4>html.dark</span> <span class="token punctuation" data-v-256d1fb4>{</span>
  <span class="token property" data-v-256d1fb4>color-scheme</span><span class="token punctuation" data-v-256d1fb4>:</span> dark<span class="token punctuation" data-v-256d1fb4>;</span>
<span class="token punctuation" data-v-256d1fb4>}</span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-256d1fb4><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div></div></div><div class="language-css ext-css line-numbers-mode" data-v-256d1fb4><pre class="language-css" data-v-256d1fb4><code data-v-256d1fb4><span class="token comment" data-v-256d1fb4>/* \u5B9A\u4E49\u6839\u4F5C\u7528\u57DF\u4E0B\u7684\u53D8\u91CF */</span>
<span class="token selector" data-v-256d1fb4>:root</span> <span class="token punctuation" data-v-256d1fb4>{</span>
  <span class="token property" data-v-256d1fb4>--theme-color</span><span class="token punctuation" data-v-256d1fb4>:</span> #333<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>--theme-background</span><span class="token punctuation" data-v-256d1fb4>:</span> #eee<span class="token punctuation" data-v-256d1fb4>;</span>
<span class="token punctuation" data-v-256d1fb4>}</span>
<span class="token comment" data-v-256d1fb4>/* \u66F4\u6539dark\u7C7B\u540D\u4E0B\u53D8\u91CF\u7684\u53D6\u503C */</span>
<span class="token selector" data-v-256d1fb4>.dark</span><span class="token punctuation" data-v-256d1fb4>{</span>
  <span class="token property" data-v-256d1fb4>--theme-color</span><span class="token punctuation" data-v-256d1fb4>:</span> #eee<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>--theme-background</span><span class="token punctuation" data-v-256d1fb4>:</span> #333<span class="token punctuation" data-v-256d1fb4>;</span>
<span class="token punctuation" data-v-256d1fb4>}</span>
<span class="token comment" data-v-256d1fb4>/* \u66F4\u6539pink\u7C7B\u540D\u4E0B\u53D8\u91CF\u7684\u53D6\u503C */</span>
<span class="token selector" data-v-256d1fb4>.pink</span><span class="token punctuation" data-v-256d1fb4>{</span>
  <span class="token property" data-v-256d1fb4>--theme-color</span><span class="token punctuation" data-v-256d1fb4>:</span> #fff<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>--theme-background</span><span class="token punctuation" data-v-256d1fb4>:</span> pink<span class="token punctuation" data-v-256d1fb4>;</span>
<span class="token punctuation" data-v-256d1fb4>}</span>

<span class="token selector" data-v-256d1fb4>.box</span> <span class="token punctuation" data-v-256d1fb4>{</span>
  <span class="token property" data-v-256d1fb4>transition</span><span class="token punctuation" data-v-256d1fb4>:</span> all .2s<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>width</span><span class="token punctuation" data-v-256d1fb4>:</span> 100px<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>height</span><span class="token punctuation" data-v-256d1fb4>:</span> 100px<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>border</span><span class="token punctuation" data-v-256d1fb4>:</span> 1px solid #000<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token comment" data-v-256d1fb4>/* \u4F7F\u7528\u53D8\u91CF */</span>
  <span class="token property" data-v-256d1fb4>color</span><span class="token punctuation" data-v-256d1fb4>:</span> <span class="token function" data-v-256d1fb4>var</span><span class="token punctuation" data-v-256d1fb4>(</span>--theme-color<span class="token punctuation" data-v-256d1fb4>)</span><span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>background</span><span class="token punctuation" data-v-256d1fb4>:</span> <span class="token function" data-v-256d1fb4>var</span><span class="token punctuation" data-v-256d1fb4>(</span>--theme-background<span class="token punctuation" data-v-256d1fb4>)</span><span class="token punctuation" data-v-256d1fb4>;</span>
<span class="token punctuation" data-v-256d1fb4>}</span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-256d1fb4><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div></div></div><h3 id="\u6548\u679C\u793A\u4F8B" tabindex="-1" data-v-256d1fb4><a class="header-anchor" href="#\u6548\u679C\u793A\u4F8B" aria-hidden="true" data-v-256d1fb4>#</a> \u6548\u679C\u793A\u4F8B</h3><h1 id="" tabindex="-1" data-v-256d1fb4><a class="header-anchor" href="#" aria-hidden="true" data-v-256d1fb4>#</a></h1>`,7),E={class:"box"},y=u("default"),C=u("dark"),D=u("pink"),B=v(`<div class="language-vue ext-vue line-numbers-mode" data-v-256d1fb4><pre class="language-vue" data-v-256d1fb4><code data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;</span>div</span> <span class="token attr-name" data-v-256d1fb4>id</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>box<span class="token punctuation" data-v-256d1fb4>&quot;</span></span> <span class="token attr-name" data-v-256d1fb4>:class</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>theme<span class="token punctuation" data-v-256d1fb4>&quot;</span></span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>
  <span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;</span>div</span> <span class="token attr-name" data-v-256d1fb4>class</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>box<span class="token punctuation" data-v-256d1fb4>&quot;</span></span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>{{ theme }}<span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;/</span>div</span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>
  <span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;</span>my-button</span> <span class="token attr-name" data-v-256d1fb4>size</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>large<span class="token punctuation" data-v-256d1fb4>&quot;</span></span> <span class="token attr-name" data-v-256d1fb4>@click</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>changeTheme(&#39;default&#39;)<span class="token punctuation" data-v-256d1fb4>&quot;</span></span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>default<span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;/</span>my-button</span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>
  <span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;</span>my-button</span> <span class="token attr-name" data-v-256d1fb4>size</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>large<span class="token punctuation" data-v-256d1fb4>&quot;</span></span> <span class="token attr-name" data-v-256d1fb4>type</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>info<span class="token punctuation" data-v-256d1fb4>&quot;</span></span> <span class="token attr-name" data-v-256d1fb4>@click</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>changeTheme(&#39;dark&#39;)<span class="token punctuation" data-v-256d1fb4>&quot;</span></span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>dark<span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;/</span>my-button</span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>
  <span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;</span>my-button</span> <span class="token attr-name" data-v-256d1fb4>size</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>large<span class="token punctuation" data-v-256d1fb4>&quot;</span></span> <span class="token attr-name" data-v-256d1fb4>color</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>pink<span class="token punctuation" data-v-256d1fb4>&quot;</span></span> <span class="token attr-name" data-v-256d1fb4>@click</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>changeTheme(&#39;pink&#39;)<span class="token punctuation" data-v-256d1fb4>&quot;</span></span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>pink<span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;/</span>my-button</span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>
<span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;/</span>div</span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>

<span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;</span>script</span> <span class="token attr-name" data-v-256d1fb4>setup</span> <span class="token attr-name" data-v-256d1fb4>lang</span><span class="token attr-value" data-v-256d1fb4><span class="token punctuation attr-equals" data-v-256d1fb4>=</span><span class="token punctuation" data-v-256d1fb4>&quot;</span>ts<span class="token punctuation" data-v-256d1fb4>&quot;</span></span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span><span class="token script" data-v-256d1fb4><span class="token language-javascript" data-v-256d1fb4>
  <span class="token keyword" data-v-256d1fb4>import</span> <span class="token punctuation" data-v-256d1fb4>{</span> ref <span class="token punctuation" data-v-256d1fb4>}</span> <span class="token keyword" data-v-256d1fb4>from</span> <span class="token string" data-v-256d1fb4>&#39;vue&#39;</span>

  <span class="token keyword" data-v-256d1fb4>let</span> theme <span class="token operator" data-v-256d1fb4>=</span> ref<span class="token operator" data-v-256d1fb4>&lt;</span>string<span class="token operator" data-v-256d1fb4>&gt;</span><span class="token punctuation" data-v-256d1fb4>(</span><span class="token string" data-v-256d1fb4>&#39;default&#39;</span><span class="token punctuation" data-v-256d1fb4>)</span>

  <span class="token keyword" data-v-256d1fb4>const</span> <span class="token function-variable function" data-v-256d1fb4>changeTheme</span> <span class="token operator" data-v-256d1fb4>=</span> <span class="token punctuation" data-v-256d1fb4>(</span><span class="token parameter" data-v-256d1fb4><span class="token literal-property property" data-v-256d1fb4>val</span><span class="token operator" data-v-256d1fb4>:</span>string</span><span class="token punctuation" data-v-256d1fb4>)</span> <span class="token operator" data-v-256d1fb4>=&gt;</span> <span class="token punctuation" data-v-256d1fb4>{</span>
    theme<span class="token punctuation" data-v-256d1fb4>.</span>value <span class="token operator" data-v-256d1fb4>=</span> val
    document<span class="token punctuation" data-v-256d1fb4>.</span><span class="token function" data-v-256d1fb4>getElementById</span><span class="token punctuation" data-v-256d1fb4>(</span><span class="token string" data-v-256d1fb4>&#39;box&#39;</span><span class="token punctuation" data-v-256d1fb4>)</span><span class="token punctuation" data-v-256d1fb4>.</span>className <span class="token operator" data-v-256d1fb4>=</span> val
  <span class="token punctuation" data-v-256d1fb4>}</span>
</span></span><span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;/</span>script</span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>

<span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;</span>style</span> <span class="token attr-name" data-v-256d1fb4>scoped</span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span><span class="token style" data-v-256d1fb4><span class="token language-css" data-v-256d1fb4>
<span class="token selector" data-v-256d1fb4>.default</span> <span class="token punctuation" data-v-256d1fb4>{</span>
  <span class="token property" data-v-256d1fb4>--theme-color</span><span class="token punctuation" data-v-256d1fb4>:</span> #333<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>--theme-background</span><span class="token punctuation" data-v-256d1fb4>:</span> #eee<span class="token punctuation" data-v-256d1fb4>;</span>
<span class="token punctuation" data-v-256d1fb4>}</span>
<span class="token comment" data-v-256d1fb4>/* \u66F4\u6539dark\u7C7B\u540D\u4E0B\u53D8\u91CF\u7684\u53D6\u503C */</span>
<span class="token selector" data-v-256d1fb4>.dark</span><span class="token punctuation" data-v-256d1fb4>{</span>
  <span class="token property" data-v-256d1fb4>--theme-color</span><span class="token punctuation" data-v-256d1fb4>:</span> #eee<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>--theme-background</span><span class="token punctuation" data-v-256d1fb4>:</span> #333<span class="token punctuation" data-v-256d1fb4>;</span>
<span class="token punctuation" data-v-256d1fb4>}</span>
<span class="token comment" data-v-256d1fb4>/* \u66F4\u6539pink\u7C7B\u540D\u4E0B\u53D8\u91CF\u7684\u53D6\u503C */</span>
<span class="token selector" data-v-256d1fb4>.pink</span><span class="token punctuation" data-v-256d1fb4>{</span>
  <span class="token property" data-v-256d1fb4>--theme-color</span><span class="token punctuation" data-v-256d1fb4>:</span> #fff<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>--theme-background</span><span class="token punctuation" data-v-256d1fb4>:</span> pink<span class="token punctuation" data-v-256d1fb4>;</span>
<span class="token punctuation" data-v-256d1fb4>}</span>

<span class="token selector" data-v-256d1fb4>.box</span> <span class="token punctuation" data-v-256d1fb4>{</span>
  <span class="token property" data-v-256d1fb4>display</span><span class="token punctuation" data-v-256d1fb4>:</span> flex<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>justify-content</span><span class="token punctuation" data-v-256d1fb4>:</span> center<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>align-items</span><span class="token punctuation" data-v-256d1fb4>:</span> center<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>font-size</span><span class="token punctuation" data-v-256d1fb4>:</span> 26px<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>transition</span><span class="token punctuation" data-v-256d1fb4>:</span> all .2s<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>width</span><span class="token punctuation" data-v-256d1fb4>:</span> 100%<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>height</span><span class="token punctuation" data-v-256d1fb4>:</span> 200px<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>border</span><span class="token punctuation" data-v-256d1fb4>:</span> 1px solid #000<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>border-radius</span><span class="token punctuation" data-v-256d1fb4>:</span> 20px<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>margin-bottom</span><span class="token punctuation" data-v-256d1fb4>:</span> 10px<span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token comment" data-v-256d1fb4>/* \u4F7F\u7528\u53D8\u91CF */</span>
  <span class="token property" data-v-256d1fb4>color</span><span class="token punctuation" data-v-256d1fb4>:</span> <span class="token function" data-v-256d1fb4>var</span><span class="token punctuation" data-v-256d1fb4>(</span>--theme-color<span class="token punctuation" data-v-256d1fb4>)</span><span class="token punctuation" data-v-256d1fb4>;</span>
  <span class="token property" data-v-256d1fb4>background</span><span class="token punctuation" data-v-256d1fb4>:</span> <span class="token function" data-v-256d1fb4>var</span><span class="token punctuation" data-v-256d1fb4>(</span>--theme-background<span class="token punctuation" data-v-256d1fb4>)</span><span class="token punctuation" data-v-256d1fb4>;</span>
<span class="token punctuation" data-v-256d1fb4>}</span>
</span></span><span class="token tag" data-v-256d1fb4><span class="token tag" data-v-256d1fb4><span class="token punctuation" data-v-256d1fb4>&lt;/</span>style</span><span class="token punctuation" data-v-256d1fb4>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-256d1fb4><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div><div class="line-number" data-v-256d1fb4></div></div></div><div class="custom-container tip" data-v-256d1fb4><p class="custom-container-title" data-v-256d1fb4>\u4F18\u70B9</p><p data-v-256d1fb4>\u4E0D\u7528\u91CD\u65B0\u52A0\u8F7D\u6837\u5F0F\u6587\u4EF6\uFF0C\u5728\u6837\u5F0F\u5207\u6362\u65F6\u4E0D\u4F1A\u6709\u5361\u987F</p></div><div class="custom-container warning" data-v-256d1fb4><p class="custom-container-title" data-v-256d1fb4>\u7F3A\u70B9</p><p data-v-256d1fb4>\u9996\u5C4F\u52A0\u8F7D\u65F6\u4F1A\u727A\u7272\u4E00\u4E9B\u65F6\u95F4\u52A0\u8F7D\u6837\u5F0F\u8D44\u6E90 \u5982\u679C\u4E3B\u9898\u6837\u5F0F\u8868\u5185\u5B9A\u4E49\u4E0D\u5F53\uFF0C\u4E5F\u4F1A\u6709\u4F18\u5148\u7EA7\u95EE\u9898 \u5404\u4E2A\u4E3B\u9898\u6837\u5F0F\u662F\u5199\u6B7B\u7684\uFF0C\u540E\u7EED\u9488\u5BF9\u67D0\u4E00\u4E3B\u9898\u6837\u5F0F\u8868\u4FEE\u6539\u6216\u8005\u65B0\u589E\u4E3B\u9898\u4E5F\u5F88\u9EBB\u70E6</p></div>`,3),_=b({__name:"theme-toggle.html",setup(q){let n=f("default");const s=t=>{n.value=t,document.getElementById("box").className=t};return(t,a)=>{const d=F("my-button");return r(),k("div",null,[h,c("div",{id:"box",class:g(l(n))},[c("div",E,m(l(n)),1),p(d,{size:"large",onClick:a[0]||(a[0]=o=>s("default"))},{default:e(()=>[y]),_:1}),p(d,{size:"large",type:"info",onClick:a[1]||(a[1]=o=>s("dark"))},{default:e(()=>[C]),_:1}),p(d,{size:"large",color:"pink",onClick:a[2]||(a[2]=o=>s("pink"))},{default:e(()=>[D]),_:1})],2),B])}}});var A=i(_,[["__scopeId","data-v-256d1fb4"],["__file","theme-toggle.html.vue"]]);export{A as default};
