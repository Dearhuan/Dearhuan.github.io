import{_ as s,o as a,c as n,d as t}from"./app.a1febbfb.js";const e={},i=t(`<h1 id="git-stash\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#git-stash\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> Git Stash\u57FA\u672C\u4F7F\u7528</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>git stash\u8FD9\u4E2A\u547D\u4EE4\u53EF\u4EE5\u5C06\u5F53\u524D\u7684\u5DE5\u4F5C\u72B6\u6001\u4FDD\u5B58\u5230git\u6808\uFF0C\u5728\u9700\u8981\u7684\u65F6\u5019\u518D\u6062\u590D</p><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><p>\u5F53\u5728\u4E00\u4E2A\u5206\u652F\u7684\u5F00\u53D1\u5DE5\u4F5C\u672A\u5B8C\u6210\uFF0C\u5374\u53C8\u8981\u5207\u6362\u5230\u53E6\u5916\u4E00\u4E2A\u5206\u652F\u8FDB\u884C\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5148\u5C06\u81EA\u5DF1\u5199\u597D\u7684\u4EE3\u7801\uFF0C\u50A8\u5B58\u5230 git \u6808\uFF0C\u8FDB\u884C\u53E6\u5916\u4E00\u4E2A\u5206\u652F\u7684\u4EE3\u7801\u5F00\u53D1\u3002\u8FD9\u65F6\u5019 git stash \u547D\u4EE4\u5C31\u6D3E\u4E0A\u7528\u573A\u4E86\uFF01</p><h2 id="\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u5E38\u7528\u65B9\u6CD5</h2><h3 id="_1-git-stash" tabindex="-1"><a class="header-anchor" href="#_1-git-stash" aria-hidden="true">#</a> 1.git stash</h3><p>\u4FDD\u5B58\u5F53\u524D\u7684\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A\u7684\u72B6\u6001\uFF0C\u628A\u5F53\u524D\u7684\u4FEE\u6539\u7684\u4FDD\u5B58\u5230git\u6808\uFF0C\u7B49\u4EE5\u540E\u9700\u8981\u7684\u65F6\u5019\u518D\u6062\u590D\uFF0Cgit stash \u8FD9\u4E2A\u547D\u4EE4\u53EF\u4EE5\u591A\u6B21\u4F7F\u7528\uFF0C\u6BCF\u6B21\u4F7F\u7528\u90FD\u4F1A\u65B0\u52A0\u4E00\u4E2Astash@{num}\uFF0Cnum\u662F\u7F16\u53F7</p><h3 id="_2-git-stash-save-xx" tabindex="-1"><a class="header-anchor" href="#_2-git-stash-save-xx" aria-hidden="true">#</a> 2.git stash save &#39;xx&#39;</h3><p>\u4F5C\u2F64\u7B49\u540C\u4E8Egit stash\uFF0C\u533A\u522B\u662F\u53EF\u4EE5\u52A0\u2F00\u4E9B\u6CE8\u91CA\uFF0C\u6267\u2F8F\u5B58\u50A8\u65F6\uFF0C\u6DFB\u52A0\u6CE8\u91CA\uFF0C\u2F45\u4FBF\u67E5\u627E</p><h3 id="_3-git-stash-list" tabindex="-1"><a class="header-anchor" href="#_3-git-stash-list" aria-hidden="true">#</a> 3.git stash list</h3><p>\u67E5\u770B\u5F53\u524Dstash\u7684\u6240\u6709\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> stash list
stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: On gh-pages: <span class="token string">&#39;say hello...&#39;</span>
stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: On gh-pages: <span class="token string">&#39;print string&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-git-stash-pop" tabindex="-1"><a class="header-anchor" href="#_4-git-stash-pop" aria-hidden="true">#</a> 4.git stash pop</h3><p>\u9ED8\u8BA4\u6062\u590Dgit\u6808\u4E2D\u6700\u65B0\u7684\u4E00\u4E2Astash@{num}\uFF0C\u5EFA\u8BAE\u5728git\u6808\u4E2D\u53EA\u6709\u4E00\u6761\u7684\u65F6\u5019\u4F7F\u7528\uFF0C\u4EE5\u514D\u6DF7\u4E71</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BE5\u547D\u4EE4\u5C06\u5806\u6808\u4E2D\u6700\u65B0\u4FDD\u5B58\u7684\u5185\u5BB9\u5220\u9664</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash pop stash@<span class="token punctuation">{</span>num<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-git-stash-apply" tabindex="-1"><a class="header-anchor" href="#_5-git-stash-apply" aria-hidden="true">#</a> 5.git stash apply</h3><p>\u5C06\u5806\u6808\u4E2D\u7684\u5185\u5BB9\u6062\u590D\u5230\u5F53\u524D\u5206\u652F\u4E0B\u3002\u8FD9\u4E2A\u547D\u4EE4\u4E0D\u540C\u4E8E git stash pop\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BE5\u547D\u4EE4\u4E0D\u4F1A\u5C06\u5185\u5BB9\u4ECE\u5BF9\u5806\u6808\u4E2D\u5220\u9664\uFF0C\u4E5F\u5C31\u662F\u8BE5\u547D\u4EE4\u80FD\u591F\u5C06\u5806\u6808\u7684\u5185\u5BB9\u591A\u6B21\u8FD0\u7528\u5230\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u9002\u5408\u7528\u4E0E\u591A\u4E2A\u5206\u652F\u7684\u573A\u666F</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span>num<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-git-stash-drop" tabindex="-1"><a class="header-anchor" href="#_6-git-stash-drop" aria-hidden="true">#</a> 6.git stash drop</h3><p>\u4ECE\u5806\u6808\u4E2D\u79FB\u9664\u6307\u5B9A\u7684stash\u3002\u5982\u679C\u4E0D\u6307\u5B9Astash_id\uFF0C\u5219\u9ED8\u8BA4\u5220\u9664\u6700\u65B0\u7684\u5B58\u50A8\u8FDB\u5EA6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash drop stash@<span class="token punctuation">{</span>num<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-git-stash-clear" tabindex="-1"><a class="header-anchor" href="#_7-git-stash-clear" aria-hidden="true">#</a> 7.git stash clear</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u79FB\u9664\u5168\u90E8\u7684stash\u8BB0\u5F55\uFF0C\u614E\u7528\uFF01</p></div><h3 id="_8-git-stash-show" tabindex="-1"><a class="header-anchor" href="#_8-git-stash-show" aria-hidden="true">#</a> 8.git stash show</h3><p>\u67E5\u770B\u5806\u6808\u4E2D\u6700\u65B0\u4FDD\u5B58\u7684stash\u548C\u5F53\u524D\u76EE\u5F55\u7684\u5DEE\u5F02\u3002</p><p>\u67E5\u770B\u6307\u5B9A\u7684stash\u548C\u5F53\u524D\u76EE\u5F55\u5DEE\u5F02</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash show stash@<span class="token punctuation">{</span>num<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u6307\u5B9A\u7684stash\u7684\u5DEE\u5F02\u8BE6\u7EC6\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash show stash@<span class="token punctuation">{</span>num<span class="token punctuation">}</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-git-stash-branch" tabindex="-1"><a class="header-anchor" href="#_9-git-stash-branch" aria-hidden="true">#</a> 9.git stash branch</h3><p>\u4ECE\u6700\u65B0\u7684stash\u521B\u5EFA\u5206\u652F\u3002</p><p>\u5E94\u7528\u573A\u666F\uFF1A\u5F53\u50A8\u85CF\u4E86\u90E8\u5206\u5DE5\u4F5C\uFF0C\u6682\u65F6\u4E0D\u53BB\u7406\u4F1A\uFF0C\u7EE7\u7EED\u5728\u5F53\u524D\u5206\u652F\u8FDB\u884C\u5F00\u53D1\uFF0C\u540E\u7EED\u60F3\u5C06stash\u4E2D\u7684\u5185\u5BB9\u6062\u590D\u5230\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u65F6\uFF0C\u5982\u679C\u662F\u9488\u5BF9\u540C\u4E00\u4E2A\u6587\u4EF6\u7684\u4FEE\u6539\uFF08\u5373\u4FBF\u4E0D\u662F\u540C\u884C\u6570\u636E\uFF09\uFF0C\u90A3\u4E48\u53EF\u80FD\u4F1A\u53D1\u751F\u51B2\u7A81\uFF0C\u6062\u590D\u5931\u8D25\uFF0C\u8FD9\u91CC\u901A\u8FC7\u521B\u5EFA\u65B0\u7684\u5206\u652F\u6765\u89E3\u51B3\u3002\u53EF\u4EE5\u7528\u4E8E\u89E3\u51B3stash\u4E2D\u7684\u5185\u5BB9\u548C\u5F53\u524D\u76EE\u5F55\u7684\u5185\u5BB9\u53D1\u751F\u51B2\u7A81\u7684\u60C5\u666F\u3002</p><p>\u53D1\u751F\u51B2\u7A81\u65F6\uFF0C\u9700\u624B\u52A8\u89E3\u51B3\u51B2\u7A81\u3002</p>`,36),h=[i];function d(c,r){return a(),n("div",null,h)}var l=s(e,[["render",d],["__file","git-stash.html.vue"]]);export{l as default};
