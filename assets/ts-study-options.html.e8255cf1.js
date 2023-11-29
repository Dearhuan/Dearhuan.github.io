import{_ as s,o as n,c as a,d as o}from"./app.a0b212c7.js";const t={},p=o(`<h1 id="typescript-\u7F16\u8BD1\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#typescript-\u7F16\u8BD1\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> TypeScript-\u7F16\u8BD1\u4E0A\u4E0B\u6587</h1><h3 id="_1-tsconfig-json-\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-tsconfig-json-\u7684\u4F5C\u7528" aria-hidden="true">#</a> 1 tsconfig.json \u7684\u4F5C\u7528</h3><ul><li>\u7528\u4E8E\u6807\u8BC6 TypeScript \u9879\u76EE\u7684\u6839\u8DEF\u5F84\uFF1B</li><li>\u7528\u4E8E\u914D\u7F6E TypeScript \u7F16\u8BD1\u5668\uFF1B</li><li>\u7528\u4E8E\u6307\u5B9A\u7F16\u8BD1\u7684\u6587\u4EF6\u3002</li></ul><h3 id="_2-tsconfig-json-\u91CD\u8981\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-tsconfig-json-\u91CD\u8981\u5B57\u6BB5" aria-hidden="true">#</a> 2 tsconfig.json \u91CD\u8981\u5B57\u6BB5</h3><ul><li>files - \u8BBE\u7F6E\u8981\u7F16\u8BD1\u7684\u6587\u4EF6\u7684\u540D\u79F0\uFF1B</li><li>include - \u8BBE\u7F6E\u9700\u8981\u8FDB\u884C\u7F16\u8BD1\u7684\u6587\u4EF6\uFF0C\u652F\u6301\u8DEF\u5F84\u6A21\u5F0F\u5339\u914D\uFF1B</li><li>exclude - \u8BBE\u7F6E\u65E0\u9700\u8FDB\u884C\u7F16\u8BD1\u7684\u6587\u4EF6\uFF0C\u652F\u6301\u8DEF\u5F84\u6A21\u5F0F\u5339\u914D\uFF1B</li><li>compilerOptions - \u8BBE\u7F6E\u4E0E\u7F16\u8BD1\u6D41\u7A0B\u76F8\u5173\u7684\u9009\u9879\u3002</li></ul><h3 id="_3-compileroptions-\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#_3-compileroptions-\u9009\u9879" aria-hidden="true">#</a> 3 compilerOptions \u9009\u9879</h3><p>compilerOptions \u652F\u6301\u5F88\u591A\u9009\u9879\uFF0C\u5E38\u89C1\u7684\u6709 baseUrl\u3001 target\u3001baseUrl\u3001 moduleResolution \u548C lib \u7B49\u3002</p><p>compilerOptions \u6BCF\u4E2A\u9009\u9879\u7684\u8BE6\u7EC6\u8BF4\u660E\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u57FA\u672C\u9009\u9879 */</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u6307\u5B9A ECMAScript \u76EE\u6807\u7248\u672C: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES6&#39;/&#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, or &#39;ESNEXT&#39;</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>                  <span class="token comment">// \u6307\u5B9A\u4F7F\u7528\u6A21\u5757: &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39; or &#39;es2015&#39;</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                             <span class="token comment">// \u6307\u5B9A\u8981\u5305\u542B\u5728\u7F16\u8BD1\u4E2D\u7684\u5E93\u6587\u4EF6</span>
    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// \u5141\u8BB8\u7F16\u8BD1 javascript \u6587\u4EF6</span>
    <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// \u62A5\u544A javascript \u6587\u4EF6\u4E2D\u7684\u9519\u8BEF</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>                     <span class="token comment">// \u6307\u5B9A jsx \u4EE3\u7801\u7684\u751F\u6210: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;</span>
    <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   <span class="token comment">// \u751F\u6210\u76F8\u5E94\u7684 &#39;.d.ts&#39; \u6587\u4EF6</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                     <span class="token comment">// \u751F\u6210\u76F8\u5E94\u7684 &#39;.map&#39; \u6587\u4EF6</span>
    <span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u5C06\u8F93\u51FA\u6587\u4EF6\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                        <span class="token comment">// \u6307\u5B9A\u8F93\u51FA\u76EE\u5F55</span>
    <span class="token property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u7528\u6765\u63A7\u5236\u8F93\u51FA\u76EE\u5F55\u7ED3\u6784 --outDir.</span>
    <span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// \u5220\u9664\u7F16\u8BD1\u540E\u7684\u6240\u6709\u7684\u6CE8\u91CA</span>
    <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// \u4E0D\u751F\u6210\u8F93\u51FA\u6587\u4EF6</span>
    <span class="token property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// \u4ECE tslib \u5BFC\u5165\u8F85\u52A9\u5DE5\u5177\u51FD\u6570</span>
    <span class="token property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// \u5C06\u6BCF\u4E2A\u6587\u4EF6\u505A\u4E3A\u5355\u72EC\u7684\u6A21\u5757 \uFF08\u4E0E &#39;ts.transpileModule&#39; \u7C7B\u4F3C\uFF09.</span>

    <span class="token comment">/* \u4E25\u683C\u7684\u7C7B\u578B\u68C0\u67E5\u9009\u9879 */</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// \u542F\u7528\u6240\u6709\u4E25\u683C\u7C7B\u578B\u68C0\u67E5\u9009\u9879</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// \u5728\u8868\u8FBE\u5F0F\u548C\u58F0\u660E\u4E0A\u6709\u9690\u542B\u7684 any\u7C7B\u578B\u65F6\u62A5\u9519</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>              <span class="token comment">// \u542F\u7528\u4E25\u683C\u7684 null \u68C0\u67E5</span>
    <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// \u5F53 this \u8868\u8FBE\u5F0F\u503C\u4E3A any \u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u751F\u6210\u4E00\u4E2A\u9519\u8BEF</span>
    <span class="token property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">// \u4EE5\u4E25\u683C\u6A21\u5F0F\u68C0\u67E5\u6BCF\u4E2A\u6A21\u5757\uFF0C\u5E76\u5728\u6BCF\u4E2A\u6587\u4EF6\u91CC\u52A0\u5165 &#39;use strict&#39;</span>

    <span class="token comment">/* \u989D\u5916\u7684\u68C0\u67E5 */</span>
    <span class="token property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// \u6709\u672A\u4F7F\u7528\u7684\u53D8\u91CF\u65F6\uFF0C\u629B\u51FA\u9519\u8BEF</span>
    <span class="token property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>            <span class="token comment">// \u6709\u672A\u4F7F\u7528\u7684\u53C2\u6570\u65F6\uFF0C\u629B\u51FA\u9519\u8BEF</span>
    <span class="token property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>             <span class="token comment">// \u5E76\u4E0D\u662F\u6240\u6709\u51FD\u6570\u91CC\u7684\u4EE3\u7801\u90FD\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u629B\u51FA\u9519\u8BEF</span>
    <span class="token property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>    <span class="token comment">// \u62A5\u544A switch \u8BED\u53E5\u7684 fallthrough \u9519\u8BEF\u3002\uFF08\u5373\uFF0C\u4E0D\u5141\u8BB8 switch \u7684 case \u8BED\u53E5\u8D2F\u7A7F\uFF09</span>

    <span class="token comment">/* \u6A21\u5757\u89E3\u6790\u9009\u9879 */</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>            <span class="token comment">// \u9009\u62E9\u6A21\u5757\u89E3\u6790\u7B56\u7565\uFF1A &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6)</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u7528\u4E8E\u89E3\u6790\u975E\u76F8\u5BF9\u6A21\u5757\u540D\u79F0\u7684\u57FA\u76EE\u5F55</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>                           <span class="token comment">// \u6A21\u5757\u540D\u5230\u57FA\u4E8E baseUrl \u7684\u8DEF\u5F84\u6620\u5C04\u7684\u5217\u8868</span>
    <span class="token property">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                        <span class="token comment">// \u6839\u6587\u4EF6\u5939\u5217\u8868\uFF0C\u5176\u7EC4\u5408\u5185\u5BB9\u8868\u793A\u9879\u76EE\u8FD0\u884C\u65F6\u7684\u7ED3\u6784\u5185\u5BB9</span>
    <span class="token property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                       <span class="token comment">// \u5305\u542B\u7C7B\u578B\u58F0\u660E\u7684\u6587\u4EF6\u5217\u8868</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                           <span class="token comment">// \u9700\u8981\u5305\u542B\u7684\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u540D\u5217\u8868</span>
    <span class="token property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u5141\u8BB8\u4ECE\u6CA1\u6709\u8BBE\u7F6E\u9ED8\u8BA4\u5BFC\u51FA\u7684\u6A21\u5757\u4E2D\u9ED8\u8BA4\u5BFC\u5165\u3002</span>

    <span class="token comment">/* Source Map Options */</span>
    <span class="token property">&quot;sourceRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                    <span class="token comment">// \u6307\u5B9A\u8C03\u8BD5\u5668\u5E94\u8BE5\u627E\u5230 TypeScript \u6587\u4EF6\u800C\u4E0D\u662F\u6E90\u6587\u4EF6\u7684\u4F4D\u7F6E</span>
    <span class="token property">&quot;mapRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u6307\u5B9A\u8C03\u8BD5\u5668\u5E94\u8BE5\u627E\u5230\u6620\u5C04\u6587\u4EF6\u800C\u4E0D\u662F\u751F\u6210\u6587\u4EF6\u7684\u4F4D\u7F6E</span>
    <span class="token property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// \u751F\u6210\u5355\u4E2A soucemaps \u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u5C06 sourcemaps \u751F\u6210\u4E0D\u540C\u7684\u6587\u4EF6</span>
    <span class="token property">&quot;inlineSources&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// \u5C06\u4EE3\u7801\u4E0E sourcemaps \u751F\u6210\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u8981\u6C42\u540C\u65F6\u8BBE\u7F6E\u4E86 --inlineSourceMap \u6216 --sourceMap \u5C5E\u6027</span>

    <span class="token comment">/* \u5176\u4ED6\u9009\u9879 */</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// \u542F\u7528\u88C5\u9970\u5668</span>
    <span class="token property">&quot;emitDecoratorMetadata&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>          <span class="token comment">// \u4E3A\u88C5\u9970\u5668\u63D0\u4F9B\u5143\u6570\u636E\u7684\u652F\u6301</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),e=[p];function c(l,r){return n(),a("div",null,e)}var u=s(t,[["render",c],["__file","ts-study-options.html.vue"]]);export{u as default};
