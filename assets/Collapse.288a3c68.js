import{r as A}from"./index.c3856a1a.js";import{_ as b,f as K,w as $,g as h,o as i,c as u,F as B,j as F,z as m,a as c,i as T,A as g,J as C,e as y,t as f,b as V,h as D,r as I,p as N,k as E}from"./app.9c7d6cc0.js";const H=t=>(N("data-v-271c9ba4"),t=t(),E(),t),J={class:"m-collapse"},L=["onClick"],j={key:0,focusable:"false",class:"u-arrow","data-icon":"right","aria-hidden":"true",viewBox:"64 64 896 896"},M=H(()=>c("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"},null,-1)),q=[M],G={class:"u-lang"},O=K({__name:"Collapse",props:{collapseData:{default:()=>[]},activeKey:{default:null},copyable:{type:Boolean,default:!1},lang:{default:""},fontSize:{default:14},headerFontSize:{default:0},textFontSize:{default:0},showArrow:{type:Boolean,default:!0}},emits:["update:activeKey","change"],setup(t,{emit:_}){const s=t;$(()=>{z(s.collapseData.length)},{flush:"post"});const p=h(),k=h([]),z=e=>{for(let o=0;o<e;o++)k.value.push(p.value[o].offsetHeight)},r=e=>{_("update:activeKey",e),_("change",e)},w=e=>{if(d(e))if(Array.isArray(s.activeKey)){const o=s.activeKey.filter(v=>v!==e);r(o)}else r(null);else Array.isArray(s.activeKey)?r([...s.activeKey,e]):r(e)},d=e=>Array.isArray(s.activeKey)?s.activeKey.includes(e):s.activeKey===e,n=h("Copy"),S=e=>{navigator.clipboard.writeText(p.value[e].innerText||"").then(()=>{n.value="Copied",A(()=>{n.value="Copy"},3e3)},o=>{n.value=o})};return(e,o)=>{const v=I("my-button");return i(),u("div",J,[(i(!0),u(B,null,F(t.collapseData,(a,l)=>(i(),u("div",{class:m(["m-collapse-item",{"u-collapse-item-active":d(a.key||l)}]),key:l},[c("div",{class:"u-collapse-header",onClick:x=>w(a.key||l)},[t.showArrow?(i(),u("svg",j,q)):T("",!0),c("div",{class:m(["u-header",{ml24:t.showArrow}]),style:g(`font-size: ${t.headerFontSize||t.fontSize}px;`)},[C(e.$slots,"header",{header:a.header,key:a.key||l},()=>[y(f(a.header||"--"),1)],!0)],6)],8,L),c("div",{class:m(["u-collapse-content",{"u-collapse-copyable":t.copyable}]),style:g(`height: ${d(a.key||l)?k.value[l]:0}px;`)},[c("div",G,[C(e.$slots,"lang",{lang:t.lang,key:a.key||l},()=>[y(f(t.lang),1)],!0)]),V(v,{size:"small",class:"u-copy",type:"primary",onClick:x=>S(l)},{default:D(()=>[y(f(n.value),1)]),_:2},1032,["onClick"]),c("div",{ref_for:!0,ref_key:"text",ref:p,class:"u-text",style:g(`font-size: ${t.textFontSize||t.fontSize}px;`)},[C(e.$slots,"text",{text:a.text,key:a.key||l},()=>[y(f(a.text),1)],!0)],4)],6)],2))),128))])}}});var R=b(O,[["__scopeId","data-v-271c9ba4"],["__file","Collapse.vue"]]);export{R as default};
