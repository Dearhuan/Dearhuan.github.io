import{_ as n,o as s,c as a,d as e}from"./app.5544aae2.js";const t={},l=e(`<h1 id="github-action\u521D\u63A2" tabindex="-1"><a class="header-anchor" href="#github-action\u521D\u63A2" aria-hidden="true">#</a> GitHub Action\u521D\u63A2</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4F7F\u7528GItHub Action\u53EF\u4EE5\u65B9\u4FBF\u7684\u5229\u7528github\u8FDC\u7A0B\u670D\u52A1\u5668\u8FDB\u884C\u4EFB\u52A1\u7684\u81EA\u52A8\u5316\u6267\u884C</p><p>\u6BD4\u5982\uFF1A\u81EA\u52A8\u7B7E\u5230\u6253\u5361\u3001\u81EA\u52A8\u6D88\u606F\u63A8\u9001\u3001\u81EA\u52A8\u6253\u5305\u90E8\u7F72...</p></div><ul><li>\u8BBE\u7F6E\u5B9A\u65F6\u81EA\u52A8\u6267\u884C\u6587\u4EF6</li></ul><blockquote><p>\u65B0\u5EFA\u4E00\u4E2Agithub workflow&amp;\u521B\u5EFAxxx.yml\u6587\u4EF6</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># action name</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> AutoRunTask
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token comment">#\u65F6\u95F4\u683C\u5F0F minute hour day month week \u8BBE\u7F6E\u7684\u65F6\u95F4\u662FUTC \u4E0D\u662F\u5317\u4EAC\u65F6\u95F4</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&quot;10 9 * * *&quot;</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">start</span><span class="token punctuation">:</span>
    <span class="token comment"># \u8FD0\u884C\u73AF\u5883\u4E3A\u6700\u65B0\u7248\u7684Ubuntu</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2  

      <span class="token comment">#\u5B89\u88C5node.js</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2  
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;14&#39;</span>

      <span class="token comment"># \u5B89\u88C5\u4F9D\u8D56\u5E76\u4E14\u6267\u884C\u811A\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> npm install
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Start task
        <span class="token key atrule">run</span><span class="token punctuation">:</span> node index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6784\u5EFA&amp;\u90E8\u7F72</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># action \u7684\u540D\u79F0</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[l];function i(c,u){return s(),a("div",null,p)}var d=n(t,[["render",i],["__file","github-action.html.vue"]]);export{d as default};
