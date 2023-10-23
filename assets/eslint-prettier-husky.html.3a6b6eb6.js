import{_ as n,o as s,c as a,d as e}from"./app.307df2ca.js";const t={},i=e(`<h1 id="eslint-prettier-stylelint-husky\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#eslint-prettier-stylelint-husky\u914D\u7F6E" aria-hidden="true">#</a> eslint+prettier+stylelint+husky\u914D\u7F6E</h1><h2 id="\u914D\u7F6Eeslint" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Eeslint" aria-hidden="true">#</a> \u914D\u7F6EEslint</h2><ul><li>\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> eslint <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>eslint\u521D\u59CB\u5316</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx eslint <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u521D\u59CB\u5316\u9009\u9879</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(1) How would you like to use ESLint?
\u9009\u62E9\uFF1ATo check syntax and find problems

(2) What type of modules does your project use?
\u9009\u62E9\uFF1Acommonjs

(3) Which framework does your project use?
\u9009\u62E9\uFF1AVue.js

(4) Does your project use TypeScript?
\u9009\u62E9\uFF1AYes

(5) Where does your code run?
\u9009\u62E9\uFF1ANode

(6) What format do you want your config file to be in?
\u9009\u62E9\uFF1AJavaScript

(7) Would you like to install them now?
\u9009\u62E9\uFF1AYes

(8) Which package manager do you want to use?
\u9009\u62E9\uFF1Ayarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>.eslintrc.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">commonjs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:@typescript-eslint/recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:prettier/recommended&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&#39;latest&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@typescript-eslint&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>package.json\u6587\u4EF6\u4E2D\u7684script\u4E2D\u6DFB\u52A0lint\u547D\u4EE4</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint . \u4E3A\u6307\u5B9Alint\u5F53\u524D\u9879\u76EE\u4E2D\u7684\u6587\u4EF6</span>
        <span class="token comment">// --ext \u4E3A\u6307\u5B9Alint\u54EA\u4E9B\u540E\u7F00\u7684\u6587\u4EF6</span>
        <span class="token comment">// --fix \u5F00\u542F\u81EA\u52A8\u4FEE\u590D</span>
        <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6Eprettier" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Eprettier" aria-hidden="true">#</a> \u914D\u7F6EPrettier</h2><ul><li>\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> prettier <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u65B0\u5EFA.prettierrc.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E00\u884C\u7684\u5B57\u7B26\u6570\uFF0C\u5982\u679C\u8D85\u8FC7\u4F1A\u8FDB\u884C\u6362\u884C\uFF0C\u9ED8\u8BA4\u4E3A80</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E00\u4E2Atab\u4EE3\u8868\u51E0\u4E2A\u7A7A\u683C\u6570\uFF0C\u9ED8\u8BA4\u4E3A80</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u4F7F\u7528tab\u8FDB\u884C\u7F29\u8FDB\uFF0C\u9ED8\u8BA4\u4E3Afalse\uFF0C\u8868\u793A\u7528\u7A7A\u683C\u8FDB\u884C\u7F29\u51CF</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5B57\u7B26\u4E32\u662F\u5426\u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u9ED8\u8BA4\u4E3Afalse\uFF0C\u4F7F\u7528\u53CC\u5F15\u53F7</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u884C\u4F4D\u662F\u5426\u4F7F\u7528\u5206\u53F7\uFF0C\u9ED8\u8BA4\u4E3Atrue</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u4F7F\u7528\u5C3E\u9017\u53F7\uFF0C\u6709\u4E09\u4E2A\u53EF\u9009\u503C&quot;&lt;none|es5|all&gt;&quot;</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5BF9\u8C61\u5927\u62EC\u53F7\u76F4\u63A5\u662F\u5426\u6709\u7A7A\u683C\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u6548\u679C\uFF1A{ foo: bar }</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>package.json\u4E2D\u7684script\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u547D\u4EE4</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write \\&quot;./**/*.{html,vue,ts,js,json,md}\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E3\u51B3eslint\u4E0Eprettier\u7684\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3eslint\u4E0Eprettier\u7684\u51B2\u7A81" aria-hidden="true">#</a> \u89E3\u51B3eslint\u4E0Eprettier\u7684\u51B2\u7A81</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> eslint-config-prettier eslint-plugin-prettier <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>.eslintrc.js\u4E2Dextends\u7684\u6700\u540E\u6DFB\u52A0\u4E00\u4E2A\u914D\u7F6E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:@typescript-eslint/recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:prettier/recommended&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6Ehusky" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Ehusky" aria-hidden="true">#</a> \u914D\u7F6Ehusky</h2><p>husky\u662F\u4E00\u4E2A\u7528\u6765\u7BA1\u7406git hook\u7684\u5DE5\u5177\uFF0Cgit hook\u5373\u5728\u6211\u4EEC\u4F7F\u7528git\u63D0\u4EA4\u4EE3\u7801\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u89E6\u53D1\u7684\u94A9\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> husky <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>package.json\u4E2D\u7684script\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u547D\u4EE4</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u547D\u4EE4\u4F1A\u5728yarn install\u4E4B\u540E\u8FD0\u884C\uFF0C\u8FD9\u6837\u5176\u4ED6\u514B\u9686\u8BE5\u9879\u76EE\u7684\u540C\u5B66\u5C31\u5728\u88C5\u5305\u7684\u65F6\u5019\u5C31\u4F1A\u81EA\u52A8\u6267\u884C\u8BE5\u547D\u4EE4\u6765\u5B89\u88C5husky\u3002\u8FD9\u91CC\u6211\u4EEC\u5C31\u4E0D\u91CD\u65B0\u6267\u884Cyarn install\u4E86\uFF0C\u76F4\u63A5\u6267\u884Cyarn prepare\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F60\u4F1A\u53D1\u73B0\u591A\u4E86\u4E00\u4E2A.husky\u76EE\u5F55\u3002 \u7136\u540E\u4F7F\u7528husky\u547D\u4EE4\u6DFB\u52A0pre-commit\u94A9\u5B50\uFF0C\u8FD0\u884C yarn husky add .husky/pre-commit &quot;yarn lint &amp;&amp; yarn format&quot; \u590D\u5236\u4EE3\u7801 \u6267\u884C\u5B8C\u4E0A\u9762\u7684\u547D\u4EE4\u540E\uFF0C\u4F1A\u5728.husky\u76EE\u5F55\u4E0B\u751F\u6210\u4E00\u4E2Apre-commit\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> -- <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>

<span class="token function">yarn</span> lint <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> <span class="token function">format</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u5F53\u6211\u4EEC\u6267\u884Cgit commit\u7684\u65F6\u5019\u5C31\u4F1A\u6267\u884Cyarn lint\u4E0Eyarn format\uFF0C\u5F53\u8FD9\u4E24\u6761\u547D\u4EE4\u51FA\u73B0\u62A5\u9519\uFF0C\u5C31\u4E0D\u4F1A\u63D0\u4EA4\u6210\u529F\u3002\u4EE5\u6B64\u6765\u4FDD\u8BC1\u63D0\u4EA4\u4EE3\u7801\u7684\u8D28\u91CF\u548C\u683C\u5F0F\u3002</p>`,31),l=[i];function p(r,o){return s(),a("div",null,l)}var u=n(t,[["render",p],["__file","eslint-prettier-husky.html.vue"]]);export{u as default};
