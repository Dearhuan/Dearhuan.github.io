import{_ as p,f as l,g as o,o as c,c as i,b as e,a as r,d as n,r as d}from"./app.e8f85293.js";const k=n('<h1 id="\u6587\u5B57\u6EDA\u52A8-textscroll" tabindex="-1"><a class="header-anchor" href="#\u6587\u5B57\u6EDA\u52A8-textscroll" aria-hidden="true">#</a> \u6587\u5B57\u6EDA\u52A8 TextScroll</h1><h2 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a> \u4F55\u65F6\u4F7F\u7528</h2><ul><li>\u5F53\u9700\u8981\u516C\u544A\u6D88\u606F\u6EDA\u52A8\u5C55\u793A\u65F6</li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><p><em>\u6C34\u5E73\u6587\u5B57\u6EDA\u52A8</em></p><br>',6),F=n(`<details class="custom-container details"><summary>Show Code</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> sliderText <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7F8E\u56FD\u4F5C\u5BB6\u6770\u7F57\u59C6\xB7\u5927\u536B\xB7\u585E\u6797\u683C\u521B\u4F5C\u7684\u552F\u4E00\u4E00\u90E8\u957F\u7BC7\u5C0F\u8BF4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://www.baidu.com&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u6B21\u51FA\u7248\u4E8E1951\u5E74&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u585E\u6797\u683C\u5C06\u6545\u4E8B\u7684\u8D77\u6B62\u5C40\u9650\u4E8E16\u5C81\u7684\u4E2D\u5B66\u751F\u970D\u5C14\u987F\xB7\u8003\u5C14\u83F2\u5FB7\u4ECE\u79BB\u5F00\u5B66\u6821\u5230\u7EBD\u7EA6\u6E38\u8361\u7684\u4E09\u5929\u65F6\u95F4\u5185,\u585E\u6797\u683C\u5C06\u6545\u4E8B\u7684\u8D77\u6B62\u5C40\u9650\u4E8E16\u5C81\u7684\u4E2D\u5B66\u751F\u970D\u5C14\u987F\xB7\u8003\u5C14\u83F2\u5FB7\u4ECE\u79BB\u5F00\u5B66\u6821\u5230\u7EBD\u7EA6\u6E38\u8361\u7684\u4E09\u5929\u65F6\u95F4\u5185&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5E76\u501F\u9274\u4E86\u610F\u8BC6\u6D41\u5929\u9A6C\u884C\u7A7A\u7684\u5199\u4F5C\u65B9\u6CD5\uFF0C\u5145\u5206\u63A2\u7D22\u4E86\u4E00\u4E2A\u5341\u51E0\u5C81\u5C11\u5E74\u7684\u5185\u5FC3\u4E16\u754C&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6124\u6012\u4E0E\u7126\u8651\u662F\u6B64\u4E66\u7684\u4E24\u5927\u4E3B\u9898\uFF0C\u4E3B\u4EBA\u516C\u7684\u7ECF\u5386\u548C\u601D\u60F3\u5728\u9752\u5C11\u5E74\u4E2D\u5F15\u8D77\u5F3A\u70C8\u5171\u9E23&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">onClick</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u83B7\u53D6\u70B9\u51FB\u7684\u6807\u9898</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;value:&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextScroll</span> <span class="token attr-name">:slider-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sliderText<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClick<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="\u5782\u76F4\u6587\u5B57\u6EDA\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u6587\u5B57\u6EDA\u52A8" aria-hidden="true">#</a> \u5782\u76F4\u6587\u5B57\u6EDA\u52A8</h2>`,2),E=n(`<details class="custom-container details"><summary>Show Code</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> sliderText <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7F8E\u56FD\u4F5C\u5BB6\u6770\u7F57\u59C6\xB7\u5927\u536B\xB7\u585E\u6797\u683C\u521B\u4F5C\u7684\u552F\u4E00\u4E00\u90E8\u957F\u7BC7\u5C0F\u8BF4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://www.baidu.com&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u6B21\u51FA\u7248\u4E8E1951\u5E74&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u585E\u6797\u683C\u5C06\u6545\u4E8B\u7684\u8D77\u6B62\u5C40\u9650\u4E8E16\u5C81\u7684\u4E2D\u5B66\u751F\u970D\u5C14\u987F\xB7\u8003\u5C14\u83F2\u5FB7\u4ECE\u79BB\u5F00\u5B66\u6821\u5230\u7EBD\u7EA6\u6E38\u8361\u7684\u4E09\u5929\u65F6\u95F4\u5185,\u585E\u6797\u683C\u5C06\u6545\u4E8B\u7684\u8D77\u6B62\u5C40\u9650\u4E8E16\u5C81\u7684\u4E2D\u5B66\u751F\u970D\u5C14\u987F\xB7\u8003\u5C14\u83F2\u5FB7\u4ECE\u79BB\u5F00\u5B66\u6821\u5230\u7EBD\u7EA6\u6E38\u8361\u7684\u4E09\u5929\u65F6\u95F4\u5185&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5E76\u501F\u9274\u4E86\u610F\u8BC6\u6D41\u5929\u9A6C\u884C\u7A7A\u7684\u5199\u4F5C\u65B9\u6CD5\uFF0C\u5145\u5206\u63A2\u7D22\u4E86\u4E00\u4E2A\u5341\u51E0\u5C81\u5C11\u5E74\u7684\u5185\u5FC3\u4E16\u754C&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6124\u6012\u4E0E\u7126\u8651\u662F\u6B64\u4E66\u7684\u4E24\u5927\u4E3B\u9898\uFF0C\u4E3B\u4EBA\u516C\u7684\u7ECF\u5386\u548C\u601D\u60F3\u5728\u9752\u5C11\u5E74\u4E2D\u5F15\u8D77\u5F3A\u70C8\u5171\u9E23&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">onClick</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u83B7\u53D6\u70B9\u51FB\u7684\u6807\u9898</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;value:&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextScroll</span>
    <span class="token attr-name">:slider-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sliderText<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">background-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#e6f4ff<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">vertical</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClick<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="apis" tabindex="-1"><a class="header-anchor" href="#apis" aria-hidden="true">#</a> APIs</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u4F20</th></tr></thead><tbody><tr><td>sliderText</td><td>\u6EDA\u52A8\u6587\u5B57\u6570\u7EC4</td><td>Text[]</td><td>[]</td><td>true</td></tr><tr><td>width</td><td>\u6EDA\u52A8\u533A\u57DF\u5BBD\u5EA6\uFF0C\u5355\u4F4Dpx</td><td>number | string</td><td>&#39;100%&#39;</td><td>false</td></tr><tr><td>height</td><td>\u6EDA\u52A8\u533A\u57DF\u9AD8\u5EA6\uFF0C\u5355\u4F4Dpx</td><td>number</td><td>60</td><td>false</td></tr><tr><td>backgroundColor</td><td>\u6EDA\u52A8\u533A\u57DF\u80CC\u666F\u8272</td><td>string</td><td>&#39;#FFF&#39;</td><td>false</td></tr><tr><td>amount</td><td>\u6EDA\u52A8\u533A\u57DF\u5C55\u793A\u6761\u6570\uFF0C\u6C34\u5E73\u6EDA\u52A8\u65F6\u751F\u6548</td><td>number</td><td>4</td><td>false</td></tr><tr><td>gap</td><td>\u6C34\u5E73\u6EDA\u52A8\u6587\u5B57\u5404\u5217\u95F4\u8DDD\u6216\u5782\u76F4\u6EDA\u52A8\u6587\u5B57\u4E24\u8FB9\u7684\u8FB9\u8DDD\uFF0C\u5355\u4F4Dpx</td><td>number</td><td>20</td><td>false</td></tr><tr><td>vertical</td><td>\u662F\u5426\u5782\u76F4\u6EDA\u52A8</td><td>boolean</td><td>false</td><td>false</td></tr><tr><td>interval</td><td>\u6587\u5B57\u6EDA\u52A8\u65F6\u95F4\u95F4\u9694\uFF0C\u5782\u76F4\u6EDA\u52A8\u65F6\u751F\u6548\uFF0C\u5355\u4F4Dms</td><td>number</td><td>3000</td><td>false</td></tr></tbody></table><h2 id="text-type" tabindex="-1"><a class="header-anchor" href="#text-type" aria-hidden="true">#</a> Text Type</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u5FC5\u4F20</th></tr></thead><tbody><tr><td>title</td><td>\u6587\u5B57\u6807\u9898</td><td>string</td><td>true</td></tr><tr><td>link</td><td>\u8DF3\u8F6C\u94FE\u63A5</td><td>string</td><td>false</td></tr></tbody></table><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u6807\u9898\u65F6\u7684\u56DE\u8C03</td><td>(title: string) =&gt; void</td></tr></tbody></table>`,7),v=l({__name:"textscroll.html",setup(C){const u=o([{title:"\u7F8E\u56FD\u4F5C\u5BB6\u6770\u7F57\u59C6\xB7\u5927\u536B\xB7\u585E\u6797\u683C\u521B\u4F5C\u7684\u552F\u4E00\u4E00\u90E8\u957F\u7BC7\u5C0F\u8BF4",link:"https://www.baidu.com"},{title:"\u9996\u6B21\u51FA\u7248\u4E8E1951\u5E74"},{title:"\u585E\u6797\u683C\u5C06\u6545\u4E8B\u7684\u8D77\u6B62\u5C40\u9650\u4E8E16\u5C81\u7684\u4E2D\u5B66\u751F\u970D\u5C14\u987F\xB7\u8003\u5C14\u83F2\u5FB7\u4ECE\u79BB\u5F00\u5B66\u6821\u5230\u7EBD\u7EA6\u6E38\u8361\u7684\u4E09\u5929\u65F6\u95F4\u5185,\u585E\u6797\u683C\u5C06\u6545\u4E8B\u7684\u8D77\u6B62\u5C40\u9650\u4E8E16\u5C81\u7684\u4E2D\u5B66\u751F\u970D\u5C14\u987F\xB7\u8003\u5C14\u83F2\u5FB7\u4ECE\u79BB\u5F00\u5B66\u6821\u5230\u7EBD\u7EA6\u6E38\u8361\u7684\u4E09\u5929\u65F6\u95F4\u5185"},{title:"\u5E76\u501F\u9274\u4E86\u610F\u8BC6\u6D41\u5929\u9A6C\u884C\u7A7A\u7684\u5199\u4F5C\u65B9\u6CD5\uFF0C\u5145\u5206\u63A2\u7D22\u4E86\u4E00\u4E2A\u5341\u51E0\u5C81\u5C11\u5E74\u7684\u5185\u5FC3\u4E16\u754C"},{title:"\u6124\u6012\u4E0E\u7126\u8651\u662F\u6B64\u4E66\u7684\u4E24\u5927\u4E3B\u9898\uFF0C\u4E3B\u4EBA\u516C\u7684\u7ECF\u5386\u548C\u601D\u60F3\u5728\u9752\u5C11\u5E74\u4E2D\u5F15\u8D77\u5F3A\u70C8\u5171\u9E23"}]);function s(a){console.log("value:",a)}return(a,B)=>{const t=d("TextScroll");return c(),i("div",null,[k,e(t,{"slider-text":u.value,onClick:s},null,8,["slider-text"]),F,r("p",null,[e(t,{"slider-text":u.value,"background-color":"#e6f4ff",vertical:"",onClick:s},null,8,["slider-text"])]),E])}}});var b=p(v,[["__file","textscroll.html.vue"]]);export{b as default};
