import{_ as n,o as s,c as a,d as p}from"./app.985706fc.js";const t={},e=p(`<h1 id="\u4F7F\u7528commitizen\u89C4\u8303git\u63D0\u4EA4-commit\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528commitizen\u89C4\u8303git\u63D0\u4EA4-commit\u4FE1\u606F" aria-hidden="true">#</a> \u4F7F\u7528commitizen\u89C4\u8303git\u63D0\u4EA4\uFF08commit\u4FE1\u606F\uFF09</h1><h2 id="\u5B89\u88C5-commitizen-\u4EA4\u4E92\u5F0F\u63D0\u4EA4-\u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u6848-commit\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-commitizen-\u4EA4\u4E92\u5F0F\u63D0\u4EA4-\u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u6848-commit\u89C4\u8303" aria-hidden="true">#</a> \u5B89\u88C5 commitizen (\u4EA4\u4E92\u5F0F\u63D0\u4EA4 + \u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u6848 + Commit\u89C4\u8303)</h2><ul><li>\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> commitizen cz-conventional-changelog @commitlint/config-conventional @commitlint/cli commitlint-config-cz cz-customizable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u914D\u7F6E package.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commit:comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F15\u5BFC\u8BBE\u7F6E\u89C4\u8303\u5316\u7684\u63D0\u4EA4\u4FE1\u606F&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commit&quot;</span><span class="token operator">:</span><span class="token string">&quot;git-cz&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/cz-customizable&quot;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u65B0\u589E\u914D\u7F6E commitlint.config.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cz&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;type-enum&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>
        <span class="token string">&#39;feature&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u65B0\u529F\u80FD\uFF08feature\uFF09</span>
        <span class="token string">&#39;bug&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6B64\u9879\u7279\u522B\u9488\u5BF9bug\u53F7\uFF0C\u7528\u4E8E\u5411\u6D4B\u8BD5\u53CD\u9988bug\u5217\u8868\u7684bug\u4FEE\u6539\u60C5\u51B5</span>
        <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4FEE\u8865bug</span>
        <span class="token string">&#39;ui&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u66F4\u65B0 ui</span>
        <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u6863\uFF08documentation\uFF09</span>
        <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u683C\u5F0F\uFF08\u4E0D\u5F71\u54CD\u4EE3\u7801\u8FD0\u884C\u7684\u53D8\u52A8\uFF09</span>
        <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6027\u80FD\u4F18\u5316</span>
        <span class="token string">&#39;release&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u53D1\u5E03</span>
        <span class="token string">&#39;deploy&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u90E8\u7F72</span>
        <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u91CD\u6784\uFF08\u5373\u4E0D\u662F\u65B0\u589E\u529F\u80FD\uFF0C\u4E5F\u4E0D\u662F\u4FEE\u6539bug\u7684\u4EE3\u7801\u53D8\u52A8\uFF09</span>
        <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u589E\u52A0\u6D4B\u8BD5</span>
        <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6784\u5EFA\u8FC7\u7A0B\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8</span>
        <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span> <span class="token comment">// feat(pencil): add \u2018graphiteWidth\u2019 option (\u64A4\u9500\u4E4B\u524D\u7684commit)</span>
        <span class="token string">&#39;merge&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5408\u5E76\u5206\u652F\uFF0C \u4F8B\u5982\uFF1A merge\uFF08\u524D\u7AEF\u9875\u9762\uFF09\uFF1A feature-xxxx\u4FEE\u6539\u7EBF\u7A0B\u5730\u5740</span>
        <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5305</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &lt;type&gt; \u683C\u5F0F \u5C0F\u5199</span>
    <span class="token string-property property">&#39;type-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lower-case&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &lt;type&gt; \u4E0D\u80FD\u4E3A\u7A7A</span>
    <span class="token string-property property">&#39;type-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &lt;scope&gt; \u8303\u56F4\u4E0D\u80FD\u4E3A\u7A7A</span>
    <span class="token string-property property">&#39;scope-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &lt;scope&gt; \u8303\u56F4\u683C\u5F0F</span>
    <span class="token string-property property">&#39;scope-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &lt;subject&gt; \u4E3B\u8981 message \u4E0D\u80FD\u4E3A\u7A7A</span>
    <span class="token string-property property">&#39;subject-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &lt;subject&gt; \u4EE5\u4EC0\u4E48\u4E3A\u7ED3\u675F\u6807\u5FD7\uFF0C\u7981\u7528</span>
    <span class="token string-property property">&#39;subject-full-stop&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &lt;subject&gt; \u683C\u5F0F\uFF0C\u7981\u7528</span>
    <span class="token string-property property">&#39;subject-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &lt;body&gt; \u4EE5\u7A7A\u884C\u5F00\u5934</span>
    <span class="token string-property property">&#39;body-leading-blank&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;header-max-length&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u81EA\u5B9A\u4E49\u63D0\u793A\u5219\u6DFB\u52A0 .cz-config.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;feature&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;feature:  \u589E\u52A0\u65B0\u529F\u80FD&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;bug&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bug:      \u6D4B\u8BD5\u53CD\u9988bug\u5217\u8868\u4E2D\u7684bug\u53F7&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;fix:      \u4FEE\u590Dbug&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;ui&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ui:       \u66F4\u65B0UI&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;docs:     \u6587\u6863\u53D8\u66F4&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;style:    \u4EE3\u7801\u683C\u5F0F(\u4E0D\u5F71\u54CD\u4EE3\u7801\u8FD0\u884C\u7684\u53D8\u52A8)&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;perf:     \u6027\u80FD\u4F18\u5316&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;refactor: \u91CD\u6784(\u65E2\u4E0D\u662F\u589E\u52A0feature\uFF0C\u4E5F\u4E0D\u662F\u4FEE\u590Dbug)&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;release&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;release:  \u53D1\u5E03&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;deploy&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;deploy:   \u90E8\u7F72&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test:     \u589E\u52A0\u6D4B\u8BD5&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;chore:    \u6784\u5EFA\u8FC7\u7A0B\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8(\u66F4\u6539\u914D\u7F6E\u6587\u4EF6)&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;revert:   \u56DE\u9000&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;build:    \u6253\u5305&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// override the messages, defaults are as follows</span>
  <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u9009\u62E9\u63D0\u4EA4\u7C7B\u578B:&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u60A8\u4FEE\u6539\u7684\u8303\u56F4(\u53EF\u9009):&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u7B80\u8981\u63CF\u8FF0\u63D0\u4EA4 message (\u5FC5\u586B):&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u8BE6\u7EC6\u63CF\u8FF0(\u53EF\u9009\uFF0C\u5F85\u4F18\u5316\u53BB\u9664\uFF0C\u8DF3\u8FC7\u5373\u53EF):&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u8981\u5173\u95ED\u7684issue(\u5F85\u4F18\u5316\u53BB\u9664\uFF0C\u8DF3\u8FC7\u5373\u53EF):&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">&#39;\u786E\u8BA4\u4F7F\u7528\u4EE5\u4E0A\u4FE1\u606F\u63D0\u4EA4\uFF1F(y/n/e/h)&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">allowCustomScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skipQuestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;footer&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subjectLimit</span><span class="token operator">:</span> <span class="token number">72</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>npm run commit</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> test-commitizen@1.0.0 commit
<span class="token operator">&gt;</span> git-cz

cz-cli@4.2.5, cz-customizable@7.0.0

All lines except first will be wrapped after <span class="token number">100</span> characters.
? \u8BF7\u9009\u62E9\u63D0\u4EA4\u7C7B\u578B: feature:  \u589E\u52A0\u65B0\u529F\u80FD
? \u8BF7\u7B80\u8981\u63CF\u8FF0\u63D0\u4EA4 message <span class="token punctuation">(</span>\u5FC5\u586B<span class="token punctuation">)</span>: \u6DFB\u52A0\u4EE3\u7801\u63D0\u4EA4\u89C4\u8303\u5316\u63D0\u793Acommitizen

<span class="token comment">###--------------------------------------------------------###</span>
feature<span class="token punctuation">(</span>custom<span class="token punctuation">)</span>: \u6DFB\u52A0\u4EE3\u7801\u63D0\u4EA4\u89C4\u8303\u5316\u63D0\u793Acommitizen
<span class="token comment">###--------------------------------------------------------###</span>

? \u786E\u8BA4\u4F7F\u7528\u4EE5\u4E0A\u4FE1\u606F\u63D0\u4EA4\uFF1F<span class="token punctuation">(</span>y/n/e/h<span class="token punctuation">)</span> Yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(l,i){return s(),a("div",null,o)}var u=n(t,[["render",c],["__file","git-commitizen.html.vue"]]);export{u as default};
