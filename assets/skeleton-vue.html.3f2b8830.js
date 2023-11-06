import{_ as r,i as k,f as d,o as p,c as e,a as s,F as o,g as l,d as u,b as t,r as v}from"./app.32d0fc14.js";const m=u('<h1 id="\u81EA\u5B9A\u4E49\u9AA8\u67B6\u5C4F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u9AA8\u67B6\u5C4F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u9AA8\u67B6\u5C4F</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u901A\u8FC7\u4F7F\u7528\u9AA8\u67B6\u5C4F\u7ED9\u9875\u9762\u63D0\u4F9B\u9ED8\u8BA4\u5360\u4F4D\u548C\u8FC7\u6E21\u6548\u679C\uFF0C\u63D0\u5347\u7528\u6237\u4F53\u9A8C</p></div><h2 id="\u6548\u679C\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u793A\u4F8B" aria-hidden="true">#</a> \u6548\u679C\u793A\u4F8B</h2>',3),g={id:"box"},y={style:{flex:"1","margin-left":"10px",position:"relative"}},h={style:{position:"absolute",bottom:"0"}},b={style:{position:"absolute",bottom:"0",right:"10px"}},q=u(`<h2 id="\u7EC4\u4EF6\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9A\u4E49" aria-hidden="true">#</a> \u7EC4\u4EF6\u5B9A\u4E49</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>animated<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[ns.b(), ns.is(&#39;animated&#39;, true)]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>containerStyle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[ns.e(&#39;item&#39;), ns.e(type)]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>itemStyle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type === &#39;image&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 1024 1024<span class="token punctuation">&quot;</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32  32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248  0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32  32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[ns.e(&#39;item&#39;), ns.e(type)]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>itemStyle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type === &#39;image&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 1024 1024<span class="token punctuation">&quot;</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32  32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248  0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32  32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useNamespace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../hooks&#39;</span>

type SkeletonType <span class="token operator">=</span> <span class="token string">&#39;text&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;image&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;h1&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;h3&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;button&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;circle&#39;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>SkeletonType<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">animated</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">containerStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> ns <span class="token operator">=</span> <span class="token function">useNamespace</span><span class="token punctuation">(</span><span class="token string">&#39;skeleton&#39;</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
@import <span class="token string">&#39;../styles/el-skeleton.scss&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_=k({__name:"skeleton-vue.html",setup(x){const n=d(!0);return(A,f)=>{const a=v("Skeleton");return p(),e("div",null,[m,s("div",g,[(p(),e(o,null,l([1,2,3,4,5],(w,c)=>s("div",{class:"flex",key:c},[t(a,{type:"image",animated:n.value,containerStyle:"width:200px;",itemStyle:"width:200px;height:150px;"},null,8,["animated"]),s("div",y,[t(a,{type:"h1",animated:n.value,containerStyle:"height:30px;",itemStyle:"height: 100%;"},null,8,["animated"]),t(a,{type:"text",animated:n.value,containerStyle:"width:80%;height:20px;margin-top: 10px;",itemStyle:"height: 100%;"},null,8,["animated"]),s("div",h,[(p(),e(o,null,l([1,2,3,4],(S,i)=>t(a,{key:i,type:"text",animated:n.value,containerStyle:"display:inline-block;width:auto;margin-right:10px;",itemStyle:"width:60px;height:30px;"},null,8,["animated"])),64))]),s("div",b,[t(a,{type:"circle",animated:n.value,itemStyle:"width:50px;height:50px;"},null,8,["animated"])])])])),64))]),q])}}});var F=r(_,[["__file","skeleton-vue.html.vue"]]);export{F as default};
