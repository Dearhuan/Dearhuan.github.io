import{_ as t,g as p,o as e,c as o,b as c,a as s,e as l,d as i,r as u}from"./app.4946d4b3.js";const r=s("h1",{id:"vuepress\u65F6\u95F4\u7EBF\u7EC4\u4EF6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress\u65F6\u95F4\u7EBF\u7EC4\u4EF6","aria-hidden":"true"},"#"),l(" VuePress\u65F6\u95F4\u7EBF\u7EC4\u4EF6")],-1),k=i(`<h2 id="\u7EC4\u4EF6\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9A\u4E49" aria-hidden="true">#</a> \u7EC4\u4EF6\u5B9A\u4E49</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, i) in timeLineList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`#_\${item.time}\`<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header-anchor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>#<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
      {{ item.time }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.type != &#39;details&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`\${item.type ? \`custom-container \${item.type}\` : &#39;custom-container tip&#39;}\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-container-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ item.content }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span> <span class="token attr-name">v-else</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-container details<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ item.content }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

type ItemType <span class="token operator">=</span> <span class="token string">&#39;tip&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;danger&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;details&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TimeLineItem</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">time</span><span class="token operator">:</span> string
  <span class="token literal-property property">title</span><span class="token operator">:</span> string
  <span class="token literal-property property">content</span><span class="token operator">:</span> string
  type<span class="token operator">?</span><span class="token operator">:</span> ItemType
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">timeLineList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>TimeLineItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d={__name:"timeLineCard.html",setup(m){const n=p([]);return n.value=[{time:"09-28 11:41",title:"27\u65E5\u5E7F\u5DDE\u65B0\u589E1\u4F8B\u672C\u571F\u65E0\u75C7\u72B6\u611F\u67D3\u8005",content:"\u6587/\u7F8A\u57CE\u665A\u62A5\u5168\u5A92\u4F53\u8BB0\u8005 \u6797\u6E05\u6E05\u901A\u8BAF\u5458 \u7A57\u536B\u5065\u5BA3\u8BB0\u8005\u4ECE\u5E7F\u5DDE\u5E02\u536B\u5065\u59D4\u83B7\u6089\uFF0C2022\u5E749\u670827\u65E50\u65F6\u81F324\u65F6\uFF0C\u5E7F\u5DDE\u5728\u7EB3\u5165\u96C6\u4E2D\u9694\u79BB\u7BA1\u63A7\u7684\u5BC6\u63A5\u4EBA\u5458\u6392\u67E5\u4E2D\u53D1\u73B01\u4F8B\u672C\u571F\u65E0\u75C7\u72B6\u611F\u67D3\u8005\u3002\u65B0\u589E\u5883\u5916\u8F93\u5165\u786E\u8BCA\u75C5\u4F8B5\u4F8B\uFF0C\u5883\u5916\u8F93...",type:"tip"},{time:"09-28 11:41",title:"27\u65E5\u5E7F\u5DDE\u65B0\u589E1\u4F8B\u672C\u571F\u65E0\u75C7\u72B6\u611F\u67D3\u8005",content:"\u6587/\u7F8A\u57CE\u665A\u62A5\u5168\u5A92\u4F53\u8BB0\u8005 \u6797\u6E05\u6E05\u901A\u8BAF\u5458 \u7A57\u536B\u5065\u5BA3\u8BB0\u8005\u4ECE\u5E7F\u5DDE\u5E02\u536B\u5065\u59D4\u83B7\u6089\uFF0C2022\u5E749\u670827\u65E50\u65F6\u81F324\u65F6\uFF0C\u5E7F\u5DDE\u5728\u7EB3\u5165\u96C6\u4E2D\u9694\u79BB\u7BA1\u63A7\u7684\u5BC6\u63A5\u4EBA\u5458\u6392\u67E5\u4E2D\u53D1\u73B01\u4F8B\u672C\u571F\u65E0\u75C7\u72B6\u611F\u67D3\u8005\u3002\u65B0\u589E\u5883\u5916\u8F93\u5165\u786E\u8BCA\u75C5\u4F8B5\u4F8B\uFF0C\u5883\u5916\u8F93...",type:"warning"},{time:"09-28 11:41",title:"27\u65E5\u5E7F\u5DDE\u65B0\u589E1\u4F8B\u672C\u571F\u65E0\u75C7\u72B6\u611F\u67D3\u8005",content:"\u6587/\u7F8A\u57CE\u665A\u62A5\u5168\u5A92\u4F53\u8BB0\u8005 \u6797\u6E05\u6E05\u901A\u8BAF\u5458 \u7A57\u536B\u5065\u5BA3\u8BB0\u8005\u4ECE\u5E7F\u5DDE\u5E02\u536B\u5065\u59D4\u83B7\u6089\uFF0C2022\u5E749\u670827\u65E50\u65F6\u81F324\u65F6\uFF0C\u5E7F\u5DDE\u5728\u7EB3\u5165\u96C6\u4E2D\u9694\u79BB\u7BA1\u63A7\u7684\u5BC6\u63A5\u4EBA\u5458\u6392\u67E5\u4E2D\u53D1\u73B01\u4F8B\u672C\u571F\u65E0\u75C7\u72B6\u611F\u67D3\u8005\u3002\u65B0\u589E\u5883\u5916\u8F93\u5165\u786E\u8BCA\u75C5\u4F8B5\u4F8B\uFF0C\u5883\u5916\u8F93...",type:"danger"},{time:"09-28 11:41",title:"27\u65E5\u5E7F\u5DDE\u65B0\u589E1\u4F8B\u672C\u571F\u65E0\u75C7\u72B6\u611F\u67D3\u8005",content:"\u6587/\u7F8A\u57CE\u665A\u62A5\u5168\u5A92\u4F53\u8BB0\u8005 \u6797\u6E05\u6E05\u901A\u8BAF\u5458 \u7A57\u536B\u5065\u5BA3\u8BB0\u8005\u4ECE\u5E7F\u5DDE\u5E02\u536B\u5065\u59D4\u83B7\u6089\uFF0C2022\u5E749\u670827\u65E50\u65F6\u81F324\u65F6\uFF0C\u5E7F\u5DDE\u5728\u7EB3\u5165\u96C6\u4E2D\u9694\u79BB\u7BA1\u63A7\u7684\u5BC6\u63A5\u4EBA\u5458\u6392\u67E5\u4E2D\u53D1\u73B01\u4F8B\u672C\u571F\u65E0\u75C7\u72B6\u611F\u67D3\u8005\u3002\u65B0\u589E\u5883\u5916\u8F93\u5165\u786E\u8BCA\u75C5\u4F8B5\u4F8B\uFF0C\u5883\u5916\u8F93...",type:"details"}],(v,g)=>{const a=u("timeLineCard");return e(),o("div",null,[r,c(a,{timeLineList:n.value},null,8,["timeLineList"]),k])}}};var q=t(d,[["__file","timeLineCard.html.vue"]]);export{q as default};
