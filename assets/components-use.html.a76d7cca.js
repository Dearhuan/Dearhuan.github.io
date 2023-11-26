import{_ as l,g as c,o as s,c as a,F as i,j as u,a as n,e as r,d as k,t as d,b as v,r as m}from"./app.521d5241.js";const b=n("h1",{id:"vuepress\u81EA\u5B9A\u4E49\u7EC4\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true"},"#"),r(" VuePress\u81EA\u5B9A\u4E49\u7EC4\u4EF6")],-1),g=k(`<h2 id="\u8E29\u5751\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u8E29\u5751\u8BB0\u5F55" aria-hidden="true">#</a> \u8E29\u5751\u8BB0\u5F55</h2><p>\u7531\u4E8E\u4E00\u5F00\u59CBvuepress\u7248\u672C\u5B89\u88C5\u76842.0.0-beta.49\uFF0C\u7136\u800C@vuepress/plugin-register-components\u4F7F\u7528yarn add @vuepress/plugin-register-components@next\u5B89\u88C5\u4E86\u5F53\u65F6\u6700\u65B0\u76842.0.0-beta.51\uFF0C\u53EF\u80FD\u662F\u4E24\u8005\u7248\u672C\u4E0D\u7B26\u7684\u539F\u56E0\u5BFC\u81F4\u8FD0\u884C\u548C\u6253\u5305\u90FD\u62A5\u9519\uFF0C\u5347\u7EA7nodejs\u7248\u672C\u4E5F\u672A\u89E3\u51B3\uFF0C\u4E8E\u662F\u9009\u62E9\u964D\u4F4E\u4F9D\u8D56\u7248\u672C\u548Cvuepress\u4FDD\u6301\u4E00\u81F4\uFF0C\u7ED3\u679C\u6210\u529F\u8FD0\u884C\u542F\u52A8\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> remove @vuepress/plugin-register-components
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vuepress/plugin-register-components@2.0.0-beta.49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> registerComponentsPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/plugin-register-components&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">componentsDir</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./components&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9A\u4E49" aria-hidden="true">#</a> \u7EC4\u4EF6\u5B9A\u4E49</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// components/Card.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>g-card-link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>g-card-item<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, k) in value<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>k<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.link<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>external nofollow<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">CardItem</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string
  <span class="token literal-property property">link</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>CardItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">require</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>defaultValue<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">button</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #4e6ef2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.g-card-link</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 38px<span class="token punctuation">;</span>
  <span class="token selector">.g-card-item</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 113px<span class="token punctuation">;</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 138px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 38px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.g-card-item:nth-of-type(2n)</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>44<span class="token punctuation">,</span> 104<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.g-card-item:nth-of-type(2n + 1)</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>56<span class="token punctuation">,</span> 203<span class="token punctuation">,</span> 137<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4F7F\u7528" aria-hidden="true">#</a> \u7EC4\u4EF6\u4F7F\u7528</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, i) in linkList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>card</span> <span class="token attr-name">:defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.children<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> linkList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

linkList<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;React UI \u7EC4\u4EF6\u5E93&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Ant Design&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://ant.design/docs/react/introduce-cn&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Bootstrap&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://react-bootstrap.github.io/getting-started/introduction&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Material UI&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://mui.com/material-ui/getting-started/overview/&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Vue UI \u7EC4\u4EF6\u5E93&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Element&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://element.eleme.io/#/zh-CN/component/installation&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Element Plus&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://element-plus.org/zh-CN/component/button.html&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Vant&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://youzan.github.io/vant/#/zh-CN&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;View Design&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://www.iviewui.com/view-ui-plus/guide/introduce&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u52A8\u753B\u5E93&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Animate.css&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://animate.style/&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),y={__name:"components-use.html",setup(h){const t=c([]);return t.value=[{title:"React UI \u7EC4\u4EF6\u5E93",children:[{title:"Ant Design",link:"https://ant.design/docs/react/introduce-cn"},{title:"Bootstrap",link:"https://react-bootstrap.github.io/getting-started/introduction"},{title:"Material UI",link:"https://mui.com/material-ui/getting-started/overview/"}]},{title:"Vue UI \u7EC4\u4EF6\u5E93",children:[{title:"Element",link:"https://element.eleme.io/#/zh-CN/component/installation"},{title:"Element Plus",link:"https://element-plus.org/zh-CN/component/button.html"},{title:"Vant",link:"https://youzan.github.io/vant/#/zh-CN"},{title:"View Design",link:"https://www.iviewui.com/view-ui-plus/guide/introduce"}]},{title:"\u52A8\u753B\u5E93",children:[{title:"Animate.css",link:"https://animate.style/"}]}],(f,q)=>{const e=m("card");return s(),a("div",null,[b,(s(!0),a(i,null,u(t.value,(p,o)=>(s(),a("div",{key:o},[n("h3",null,d(p.title),1),n("div",null,[v(e,{defaultValue:p.children},null,8,["defaultValue"])])]))),128)),g])}}};var x=l(y,[["__file","components-use.html.vue"]]);export{x as default};
