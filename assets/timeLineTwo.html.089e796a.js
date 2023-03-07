import{_ as t,f as p,o as e,c as o,b as i,a as s,e as c,d as l,r as u}from"./app.b4f16c47.js";const r=s("h1",{id:"\u5782\u76F4\u65F6\u95F4\u7EBF-ii",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5782\u76F4\u65F6\u95F4\u7EBF-ii","aria-hidden":"true"},"#"),c(" \u5782\u76F4\u65F6\u95F4\u7EBF-II")],-1),k=l(`<h3 id="\u7EC4\u4EF6\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9A\u4E49" aria-hidden="true">#</a> \u7EC4\u4EF6\u5B9A\u4E49</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>timeline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>timeline-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,i) in timeLineList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>timeline-icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ backgroundColor: item.color ? item.color : &#39;&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;timeline-content&#39;, i % 2 !== 0 ? &#39;right&#39; : &#39;&#39;]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Array.isArray(item.content) == true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(text, i) in item.content<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ text }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;timeline-content&#39;, i % 2 !== 0 ? &#39;right&#39; : &#39;&#39;]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>typeof item.content == &#39;string&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ item.content }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TimeLineItem</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string <span class="token comment">// \u6807\u9898</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> string <span class="token comment">// \u56FE\u6807</span>
  color<span class="token operator">?</span><span class="token operator">:</span> string <span class="token comment">// \u989C\u8272</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> string <span class="token operator">|</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> <span class="token comment">// \u5185\u5BB9</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">timeLineList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>TimeLineItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
// Variables
$<span class="token property">red</span><span class="token punctuation">:</span> #ee4d4d<span class="token punctuation">;</span>
$<span class="token property">blue</span><span class="token punctuation">:</span> #2b2e48<span class="token punctuation">;</span>
$<span class="token property">primary-color</span><span class="token punctuation">:</span> $red<span class="token punctuation">;</span>
$<span class="token property">secondary-color</span><span class="token punctuation">:</span> $blue<span class="token punctuation">;</span>

// Timeline
$<span class="token property">timeline-color</span><span class="token punctuation">:</span> $secondary-color<span class="token punctuation">;</span>


<span class="token selector">// Mixins and Placeholders
%clearfix</span> <span class="token punctuation">{</span>

  <span class="token selector">&amp;:after,
  &amp;:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">prefix</span><span class="token punctuation">(</span>$prop<span class="token punctuation">,</span> $val<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>

  <span class="token atrule"><span class="token rule">@each</span> $prefix in <span class="token string">&#39;-webkit-&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;-moz-&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;-ms-&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;&#39;</span></span> <span class="token punctuation">{</span>
    <span class="token selector">#</span><span class="token punctuation">{</span>$prefix<span class="token punctuation">}</span><span class="token selector">#</span><span class="token punctuation">{</span>$prop<span class="token punctuation">}</span><span class="token punctuation">:</span> $val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">*,
*:before,
*:after</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">-moz-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 1100px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">// Timeline
#timeline</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 30px auto<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@include</span> <span class="token function">prefix</span><span class="token punctuation">(</span>transition<span class="token punctuation">,</span> all .4s ease<span class="token punctuation">)</span><span class="token punctuation">;</span></span>

  <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> $timeline-color<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.timeline-item</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token atrule"><span class="token rule">@extend</span> %clearfix<span class="token punctuation">;</span></span>

    <span class="token selector">.timeline-icon</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> $timeline-color<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> -19px<span class="token punctuation">;</span>
      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">prefix</span><span class="token punctuation">(</span>border-radius<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>

      <span class="token selector">svg</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.timeline-content</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 45%<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">prefix</span><span class="token punctuation">(</span>box-shadow<span class="token punctuation">,</span> 0 3px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">prefix</span><span class="token punctuation">(</span>border-radius<span class="token punctuation">,</span> 5px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">prefix</span><span class="token punctuation">(</span>transition<span class="token punctuation">,</span> all .3s ease<span class="token punctuation">)</span><span class="token punctuation">;</span></span>

      <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> $timeline-color<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> -20px -20px 0 -20px<span class="token punctuation">;</span>
        <span class="token property">font-weight</span><span class="token punctuation">:</span> 300<span class="token punctuation">;</span>
        <span class="token atrule"><span class="token rule">@include</span> <span class="token function">prefix</span><span class="token punctuation">(</span>border-radius<span class="token punctuation">,</span> 3px 3px 0 0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
      <span class="token punctuation">}</span>

      <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 45%<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">border-top</span><span class="token punctuation">:</span> 7px solid transparent<span class="token punctuation">;</span>
        <span class="token property">border-bottom</span><span class="token punctuation">:</span> 7px solid transparent<span class="token punctuation">;</span>
        <span class="token property">border-left</span><span class="token punctuation">:</span> 7px solid $timeline-color<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">&amp;.right</span> <span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>

        <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>
          <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
          <span class="token property">right</span><span class="token punctuation">:</span> 45%<span class="token punctuation">;</span>
          <span class="token property">left</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
          <span class="token property">border-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
          <span class="token property">border-right</span><span class="token punctuation">:</span> 7px solid $timeline-color<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">#timeline</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>

    <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.timeline-item</span> <span class="token punctuation">{</span>
      <span class="token selector">.timeline-content</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>

        <span class="token selector">&amp;:before,
        &amp;.right:before</span> <span class="token punctuation">{</span>
          <span class="token property">left</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
          <span class="token property">margin-left</span><span class="token punctuation">:</span> -6px<span class="token punctuation">;</span>
          <span class="token property">border-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
          <span class="token property">border-right</span><span class="token punctuation">:</span> 7px solid $timeline-color<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.timeline-icon</span> <span class="token punctuation">{</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d={__name:"timeLineTwo.html",setup(v){const n=p([]);return n.value=[{title:"2021",icon:"/images/hero.png",content:"Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut."},{title:"2022",icon:"/images/jaychou.jpg",content:"Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut."},{title:"2023",color:"#39a3ef",content:"Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut."},{title:"2024",content:"Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut."},{title:"2025",content:["Delectus facere officia consequuntur molestias deserunt illo. Placeat laudantium beatae natus excepturi abnihil voluptates.","VAdipisci totam omnis cum et suscipit excepturi et excepturi. Inventore sequi sit ut aliquid. Modi autdolores dignissimos."]}],(m,b)=>{const a=u("timeLineTwo");return e(),o("div",null,[r,i(a,{timeLineList:n.value},null,8,["timeLineList"]),k])}}};var y=t(d,[["__file","timeLineTwo.html.vue"]]);export{y as default};
