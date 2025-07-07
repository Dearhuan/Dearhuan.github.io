import{_ as e,o as p,c as t,a as s,b as l,e as n,d as i,r as o}from"./app.201b71e5.js";var c="/images/vuepress.png",r="/images/github-page.png",u="/images/vuepress-ghpage.png";const d={},v=s("h1",{id:"_10\u5206\u949F\u642D\u5EFA\u90E8\u7F72\u5E76\u81EA\u52A8\u96C6\u6210\u4E00\u6B3Evuepress-blog",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_10\u5206\u949F\u642D\u5EFA\u90E8\u7F72\u5E76\u81EA\u52A8\u96C6\u6210\u4E00\u6B3Evuepress-blog","aria-hidden":"true"},"#"),n(" 10\u5206\u949F\u642D\u5EFA\u90E8\u7F72\u5E76\u81EA\u52A8\u96C6\u6210\u4E00\u6B3EVuepress Blog")],-1),k=s("p",null,[s("img",{src:c,alt:"VuePress BLog"})],-1),m={class:"custom-container tip"},b=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),g=n("\u8BE6\u7EC6\u5185\u5BB9\u89C1"),y={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},h=n("VuePress\u5B98\u65B9\u6587\u6863"),_=i(`<ul><li>step1:\u521B\u5EFA\u5E76\u8FDB\u5165\u4E00\u4E2A\u65B0\u76EE\u5F55</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-hello
<span class="token builtin class-name">cd</span> vuepress-hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>step2:\u521D\u59CB\u5316\u9879\u76EE</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">yarn</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>step3:\u5B89\u88C5vuepress</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>step4:\u5728 package.json \u4E2D\u6DFB\u52A0scripts</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>step5:\u6839\u76EE\u5F55\u6DFB\u52A0.gitignore\u6587\u4EF6</li></ul><div class="language-gitignore ext-gitignore line-numbers-mode"><pre class="language-gitignore"><code><span class="token comment"># VuePress files</span>
<span class="token entry string">docs<span class="token punctuation">/</span>.vuepress<span class="token punctuation">/</span>.temp<span class="token punctuation">/</span></span>
<span class="token entry string">docs<span class="token punctuation">/</span>.vuepress<span class="token punctuation">/</span>.cache<span class="token punctuation">/</span></span>
<span class="token entry string">docs<span class="token punctuation">/</span>.vuepress<span class="token punctuation">/</span>dist<span class="token punctuation">/</span></span>

<span class="token comment"># Dist files</span>
<span class="token entry string">dist<span class="token punctuation">/</span></span>
<span class="token entry string">lib<span class="token punctuation">/</span></span>

<span class="token comment"># Test temp files</span>
<span class="token entry string"><span class="token operator">**</span><span class="token punctuation">/</span>__fixtures__<span class="token punctuation">/</span>.temp<span class="token punctuation">/</span></span>

<span class="token comment"># Test coverage files</span>
<span class="token entry string">coverage<span class="token punctuation">/</span></span>

<span class="token comment"># Node modules</span>
<span class="token entry string">node_modules<span class="token punctuation">/</span></span>

<span class="token comment"># MacOS Desktop Services Store</span>
<span class="token entry string">.DS_Store</span>

<span class="token comment"># Log files</span>
<span class="token entry string"><span class="token operator">*</span>.log</span>

<span class="token comment"># Typescript build info</span>
<span class="token entry string"><span class="token operator">*</span>.tsbuildinfo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>step6:\u521B\u5EFA\u4E00\u7BC7\u6587\u6863</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>step7:\u542F\u52A8\u672C\u5730\u670D\u52A1\u5668</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>step8:\u914D\u7F6E\u76EE\u5F55</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>docs<span class="token operator">/</span><span class="token punctuation">.</span>vuepress<span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>images \u5B58\u653E\u9879\u76EE\u4F7F\u7528\u56FE\u7247
docs<span class="token operator">/</span><span class="token punctuation">.</span>vuepress<span class="token operator">/</span>config<span class="token punctuation">.</span>js     \u9879\u76EE\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// config.js \u914D\u7F6E\u793A\u4F8B</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/theme-default&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9001</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.jpg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u5DE5\u5177&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Js\u5DE5\u5177\u4EE3\u7801\u793A\u4F8B&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/tools/jsTool.md&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vscode\u4EE3\u7801\u7247\u6BB5&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/tools/snippets.md&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u524D\u7AEF\u76D1\u63A7-Sentry&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/tools/sentry.md&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u8BB0\u5F55&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;postcss-px-to-viewport\u4F7F\u7528&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/notes/postcss-px-to-viewport.md&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u5176\u4ED6&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>step9:\u5EFA\u7ACBgithub\u540C\u540D\u4ED3\u5E93</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>userName<span class="token operator">/</span>userName<span class="token punctuation">.</span>github<span class="token punctuation">.</span>io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>step10:\u63A8\u9001\u4EE3\u7801</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> add.
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;xxxx&#39;</span>
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
<span class="token function">git</span> <span class="token function">add</span> remote orgin git@github.com:<span class="token punctuation">[</span>userName<span class="token punctuation">]</span>/vuepress-hello.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>step11:\u521B\u5EFA.yml\u6587\u4EF6</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># action \u7684\u540D\u79F0</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy GitHub Pages

<span class="token comment"># \u89E6\u53D1\u6761\u4EF6\uFF1A\u5728 push \u5230 main \u5206\u652F\u540E</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
  <span class="token comment"># \u624B\u52A8\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token comment"># \u4EFB\u52A1</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token comment"># \u670D\u52A1\u5668\u73AF\u5883\uFF1A\u6700\u65B0\u7248 Ubuntu</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token punctuation">-</span> <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># \u62C9\u53D6\u4EE3\u7801</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

      <span class="token comment"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token important">&amp;&amp;</span> npm run docs<span class="token punctuation">:</span>build

      <span class="token comment"># \u90E8\u7F72\u5230 GitHub Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token comment"># \u4F7F\u7528\u522B\u4EBA\u5199\u597D\u7684\u4E00\u4E2A action</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@releases/v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u8FD9\u91CC\u7684 ACCESS_TOKEN \u540D\u5B57\u9700\u8981\u548C\u4E0B\u6587\u4E2D\u7684\u76F8\u5BF9\u5E94</span>
          <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># \u6253\u5305\u540E\u7684\u6587\u4EF6\u90E8\u7F72\u5230\u54EA\u4E2A\u5206\u652F\u4E0A</span>
          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># \u6253\u5305\u540E\u7684\u6587\u4EF6\u5728\u54EA\u91CC</span>
          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> docs/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>step12:\u8BBE\u7F6Eaccess tokens</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span>\u70B9\u51FBgithub\u5934\u50CF<span class="token operator">&gt;</span>Settings<span class="token operator">&gt;</span>Developer settings<span class="token operator">&gt;</span>Personal access tokens<span class="token operator">&gt;</span>Generate <span class="token keyword">new</span> <span class="token class-name">tokens<span class="token punctuation">.</span></span>
\u6743\u9650\u5217\u8868\u52FE\u9009repo<span class="token operator">&amp;</span>\u751F\u6210\u4E00\u4E2A<span class="token constant">ACCESS_TOKEN</span>\u5E76\u590D\u5236\u4E0B\u6765
<span class="token number">2.</span>\u9879\u76EE\u4ED3\u5E93<span class="token operator">&gt;</span>Settings<span class="token operator">&gt;</span>Secrets<span class="token operator">&gt;</span>Actions <span class="token operator">-</span> \u6DFB\u52A0<span class="token constant">ACCESS_TOKEN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>step13:\u9009\u62E9github pages\u5206\u652F <img src="`+r+`" alt="github-page"></li><li>step14:\u89E6\u53D1\u81EA\u52A8\u90E8\u7F72</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u66F4\u65B0\u5E76\u63D0\u4EA4Markdown<span class="token operator">/</span>\u624B\u52A8run workflow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u90E8\u7F72\u5B8C\u6210\u540E\u751F\u6210\u7684gh-pages\u5206\u652F\u53CA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5B8C\u6210\u540E\u751F\u6210\u7684gh-pages\u5206\u652F\u53CA\u76EE\u5F55" aria-hidden="true">#</a> \u90E8\u7F72\u5B8C\u6210\u540E\u751F\u6210\u7684gh-pages\u5206\u652F\u53CA\u76EE\u5F55</h3><p><img src="`+u+'" alt="vuepress-ghpage"></p>',29);function f(x,j){const a=o("ExternalLinkIcon");return p(),t("div",null,[v,k,s("div",m,[b,s("p",null,[g,s("a",y,[h,l(a)])])]),_])}var E=e(d,[["render",f],["__file","vuepress-hello.html.vue"]]);export{E as default};
