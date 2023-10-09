import{_ as b,f as p,y,q as h,o as e,c as o,a as l,A as s,F as q,g as f,u as _,d as w,t as x}from"./app.38faa2e6.js";const H=w(`<div class="language-vue ext-vue line-numbers-mode" data-v-1124cc42><pre class="language-vue" data-v-1124cc42><code data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;</span>script</span> <span class="token attr-name" data-v-1124cc42>setup</span><span class="token punctuation" data-v-1124cc42>&gt;</span></span><span class="token script" data-v-1124cc42><span class="token language-javascript" data-v-1124cc42>
<span class="token keyword" data-v-1124cc42>import</span> <span class="token punctuation" data-v-1124cc42>{</span> ref<span class="token punctuation" data-v-1124cc42>,</span> computed<span class="token punctuation" data-v-1124cc42>,</span> onMounted <span class="token punctuation" data-v-1124cc42>}</span> <span class="token keyword" data-v-1124cc42>from</span> <span class="token string" data-v-1124cc42>&#39;vue&#39;</span>

<span class="token keyword" data-v-1124cc42>const</span> oriData <span class="token operator" data-v-1124cc42>=</span> Array<span class="token punctuation" data-v-1124cc42>.</span><span class="token function" data-v-1124cc42>from</span><span class="token punctuation" data-v-1124cc42>(</span><span class="token punctuation" data-v-1124cc42>{</span> <span class="token literal-property property" data-v-1124cc42>length</span><span class="token operator" data-v-1124cc42>:</span> <span class="token number" data-v-1124cc42>500</span> <span class="token punctuation" data-v-1124cc42>}</span><span class="token punctuation" data-v-1124cc42>,</span> <span class="token punctuation" data-v-1124cc42>(</span><span class="token parameter" data-v-1124cc42>v<span class="token punctuation" data-v-1124cc42>,</span> k</span><span class="token punctuation" data-v-1124cc42>)</span> <span class="token operator" data-v-1124cc42>=&gt;</span> k<span class="token punctuation" data-v-1124cc42>)</span>
<span class="token keyword" data-v-1124cc42>const</span> itemHeight <span class="token operator" data-v-1124cc42>=</span> <span class="token number" data-v-1124cc42>20</span>
<span class="token keyword" data-v-1124cc42>const</span> emptyHeight <span class="token operator" data-v-1124cc42>=</span> itemHeight <span class="token operator" data-v-1124cc42>*</span> oriData<span class="token punctuation" data-v-1124cc42>.</span>length
<span class="token keyword" data-v-1124cc42>const</span> containerHeight <span class="token operator" data-v-1124cc42>=</span> window<span class="token punctuation" data-v-1124cc42>.</span>innerHeight <span class="token operator" data-v-1124cc42>-</span> <span class="token number" data-v-1124cc42>80</span> <span class="token operator" data-v-1124cc42>*</span> <span class="token number" data-v-1124cc42>2</span>
<span class="token keyword" data-v-1124cc42>const</span> itemCount <span class="token operator" data-v-1124cc42>=</span> Math<span class="token punctuation" data-v-1124cc42>.</span><span class="token function" data-v-1124cc42>ceil</span><span class="token punctuation" data-v-1124cc42>(</span>containerHeight <span class="token operator" data-v-1124cc42>/</span> itemHeight<span class="token punctuation" data-v-1124cc42>)</span>

<span class="token keyword" data-v-1124cc42>const</span> container <span class="token operator" data-v-1124cc42>=</span> <span class="token function" data-v-1124cc42>ref</span><span class="token punctuation" data-v-1124cc42>(</span><span class="token keyword" data-v-1124cc42>null</span><span class="token punctuation" data-v-1124cc42>)</span>
<span class="token keyword" data-v-1124cc42>const</span> start <span class="token operator" data-v-1124cc42>=</span> <span class="token function" data-v-1124cc42>ref</span><span class="token punctuation" data-v-1124cc42>(</span><span class="token number" data-v-1124cc42>0</span><span class="token punctuation" data-v-1124cc42>)</span>
<span class="token keyword" data-v-1124cc42>const</span> translateY <span class="token operator" data-v-1124cc42>=</span> <span class="token function" data-v-1124cc42>ref</span><span class="token punctuation" data-v-1124cc42>(</span><span class="token number" data-v-1124cc42>0</span><span class="token punctuation" data-v-1124cc42>)</span>
<span class="token keyword" data-v-1124cc42>const</span> listData <span class="token operator" data-v-1124cc42>=</span> <span class="token function" data-v-1124cc42>computed</span><span class="token punctuation" data-v-1124cc42>(</span><span class="token punctuation" data-v-1124cc42>(</span><span class="token punctuation" data-v-1124cc42>)</span> <span class="token operator" data-v-1124cc42>=&gt;</span> <span class="token punctuation" data-v-1124cc42>{</span>
  <span class="token keyword" data-v-1124cc42>return</span> oriData<span class="token punctuation" data-v-1124cc42>.</span><span class="token function" data-v-1124cc42>slice</span><span class="token punctuation" data-v-1124cc42>(</span>start<span class="token punctuation" data-v-1124cc42>.</span>value<span class="token punctuation" data-v-1124cc42>,</span> start<span class="token punctuation" data-v-1124cc42>.</span>value <span class="token operator" data-v-1124cc42>+</span> itemCount <span class="token operator" data-v-1124cc42>+</span> <span class="token number" data-v-1124cc42>1</span><span class="token punctuation" data-v-1124cc42>)</span>
<span class="token punctuation" data-v-1124cc42>}</span><span class="token punctuation" data-v-1124cc42>)</span>

<span class="token function" data-v-1124cc42>onMounted</span><span class="token punctuation" data-v-1124cc42>(</span><span class="token punctuation" data-v-1124cc42>(</span><span class="token punctuation" data-v-1124cc42>)</span> <span class="token operator" data-v-1124cc42>=&gt;</span> <span class="token punctuation" data-v-1124cc42>{</span>
  container<span class="token punctuation" data-v-1124cc42>.</span>value<span class="token punctuation" data-v-1124cc42>.</span><span class="token function" data-v-1124cc42>addEventListener</span><span class="token punctuation" data-v-1124cc42>(</span><span class="token string" data-v-1124cc42>&#39;scroll&#39;</span><span class="token punctuation" data-v-1124cc42>,</span> <span class="token parameter" data-v-1124cc42>e</span> <span class="token operator" data-v-1124cc42>=&gt;</span> <span class="token punctuation" data-v-1124cc42>{</span>
    <span class="token keyword" data-v-1124cc42>const</span> <span class="token punctuation" data-v-1124cc42>{</span> scrollTop <span class="token punctuation" data-v-1124cc42>}</span> <span class="token operator" data-v-1124cc42>=</span> e<span class="token punctuation" data-v-1124cc42>.</span>target
    start<span class="token punctuation" data-v-1124cc42>.</span>value <span class="token operator" data-v-1124cc42>=</span> Math<span class="token punctuation" data-v-1124cc42>.</span><span class="token function" data-v-1124cc42>floor</span><span class="token punctuation" data-v-1124cc42>(</span>scrollTop <span class="token operator" data-v-1124cc42>/</span> itemHeight<span class="token punctuation" data-v-1124cc42>)</span>
    translateY<span class="token punctuation" data-v-1124cc42>.</span>value <span class="token operator" data-v-1124cc42>=</span> scrollTop <span class="token operator" data-v-1124cc42>+</span> <span class="token string" data-v-1124cc42>&#39;px&#39;</span>
  <span class="token punctuation" data-v-1124cc42>}</span><span class="token punctuation" data-v-1124cc42>)</span>
<span class="token punctuation" data-v-1124cc42>}</span><span class="token punctuation" data-v-1124cc42>)</span>
</span></span><span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;/</span>script</span><span class="token punctuation" data-v-1124cc42>&gt;</span></span>

<span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;</span>template</span><span class="token punctuation" data-v-1124cc42>&gt;</span></span>
  <span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;</span>div</span> <span class="token attr-name" data-v-1124cc42>class</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>container<span class="token punctuation" data-v-1124cc42>&quot;</span></span>
       <span class="token attr-name" data-v-1124cc42>ref</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>container<span class="token punctuation" data-v-1124cc42>&quot;</span></span>
       <span class="token attr-name" data-v-1124cc42>:style</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>{ height: containerHeight + &#39;px&#39; }<span class="token punctuation" data-v-1124cc42>&quot;</span></span><span class="token punctuation" data-v-1124cc42>&gt;</span></span>
    <span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;</span>div</span> <span class="token attr-name" data-v-1124cc42>class</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>empty<span class="token punctuation" data-v-1124cc42>&quot;</span></span>
         <span class="token attr-name" data-v-1124cc42>:style</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>{ height: emptyHeight + &#39;px&#39; }<span class="token punctuation" data-v-1124cc42>&quot;</span></span><span class="token punctuation" data-v-1124cc42>&gt;</span></span><span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;/</span>div</span><span class="token punctuation" data-v-1124cc42>&gt;</span></span>
    <span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;</span>ul</span> <span class="token attr-name" data-v-1124cc42>class</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>list<span class="token punctuation" data-v-1124cc42>&quot;</span></span>
        <span class="token attr-name" data-v-1124cc42>:style</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>{ transform: \`translateY(\${translateY})\` }<span class="token punctuation" data-v-1124cc42>&quot;</span></span><span class="token punctuation" data-v-1124cc42>&gt;</span></span>
      <span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;</span>li</span> <span class="token attr-name" data-v-1124cc42>v-for</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>item in listData<span class="token punctuation" data-v-1124cc42>&quot;</span></span>
          <span class="token attr-name" data-v-1124cc42>:key</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>item<span class="token punctuation" data-v-1124cc42>&quot;</span></span>
          <span class="token attr-name" data-v-1124cc42>class</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>item<span class="token punctuation" data-v-1124cc42>&quot;</span></span>
          <span class="token attr-name" data-v-1124cc42>:style</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>{ height: itemHeight + &#39;px&#39; }<span class="token punctuation" data-v-1124cc42>&quot;</span></span><span class="token punctuation" data-v-1124cc42>&gt;</span></span>{{ item }}<span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;/</span>li</span><span class="token punctuation" data-v-1124cc42>&gt;</span></span>
    <span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;/</span>ul</span><span class="token punctuation" data-v-1124cc42>&gt;</span></span>
  <span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;/</span>div</span><span class="token punctuation" data-v-1124cc42>&gt;</span></span>
<span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;/</span>template</span><span class="token punctuation" data-v-1124cc42>&gt;</span></span>

<span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;</span>style</span> <span class="token attr-name" data-v-1124cc42>lang</span><span class="token attr-value" data-v-1124cc42><span class="token punctuation attr-equals" data-v-1124cc42>=</span><span class="token punctuation" data-v-1124cc42>&quot;</span>scss<span class="token punctuation" data-v-1124cc42>&quot;</span></span> <span class="token attr-name" data-v-1124cc42>scoped</span><span class="token punctuation" data-v-1124cc42>&gt;</span></span><span class="token style" data-v-1124cc42><span class="token language-css" data-v-1124cc42>
<span class="token selector" data-v-1124cc42>.container</span> <span class="token punctuation" data-v-1124cc42>{</span>
  <span class="token property" data-v-1124cc42>overflow</span><span class="token punctuation" data-v-1124cc42>:</span> auto<span class="token punctuation" data-v-1124cc42>;</span>
  <span class="token property" data-v-1124cc42>display</span><span class="token punctuation" data-v-1124cc42>:</span> flex<span class="token punctuation" data-v-1124cc42>;</span>
  <span class="token selector" data-v-1124cc42>.list</span> <span class="token punctuation" data-v-1124cc42>{</span>
    <span class="token property" data-v-1124cc42>width</span><span class="token punctuation" data-v-1124cc42>:</span> 100%<span class="token punctuation" data-v-1124cc42>;</span>
    <span class="token selector" data-v-1124cc42>li</span> <span class="token punctuation" data-v-1124cc42>{</span>
      <span class="token property" data-v-1124cc42>list-style</span><span class="token punctuation" data-v-1124cc42>:</span> none<span class="token punctuation" data-v-1124cc42>;</span>
      <span class="token property" data-v-1124cc42>text-align</span><span class="token punctuation" data-v-1124cc42>:</span> center<span class="token punctuation" data-v-1124cc42>;</span>
    <span class="token punctuation" data-v-1124cc42>}</span>
  <span class="token punctuation" data-v-1124cc42>}</span>
<span class="token punctuation" data-v-1124cc42>}</span>
</span></span><span class="token tag" data-v-1124cc42><span class="token tag" data-v-1124cc42><span class="token punctuation" data-v-1124cc42>&lt;/</span>style</span><span class="token punctuation" data-v-1124cc42>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-1124cc42><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div><div class="line-number" data-v-1124cc42></div></div></div>`,1),D={__name:"virtual-scroll-list.html",setup(M){const d=Array.from({length:500},(c,a)=>a),n=20,k=n*d.length,v=window.innerHeight-80*2,m=Math.ceil(v/n),u=p(null),t=p(0),i=p(0),g=y(()=>d.slice(t.value,t.value+m+1));return h(()=>{u.value.addEventListener("scroll",c=>{const{scrollTop:a}=c.target;t.value=Math.floor(a/n),i.value=a+"px"})}),(c,a)=>(e(),o("div",null,[l("div",{class:"container",ref_key:"container",ref:u,style:s({height:v+"px"})},[l("div",{class:"empty",style:s({height:k+"px"})},null,4),l("ul",{class:"list",style:s({transform:`translateY(${i.value})`})},[(e(!0),o(q,null,f(_(g),r=>(e(),o("li",{key:r,class:"item",style:s({height:n+"px"})},x(r),5))),128))],4)],4),H]))}};var L=b(D,[["__scopeId","data-v-1124cc42"],["__file","virtual-scroll-list.html.vue"]]);export{L as default};
