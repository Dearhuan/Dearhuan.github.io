import{c as $,r as b}from"./index.c3856a1a.js";import{_ as B,f as T,g as o,m as w,o as z,c as C,a,A as n,J as g,e as p,t as h,z as R}from"./app.dfc8b140.js";const S={class:"m-arrow"},M=T({__name:"Tooltip",props:{maxWidth:{default:120},content:{default:"\u6682\u65E0\u5185\u5BB9"},title:{default:"\u6682\u65E0\u5185\u5BB9"},fontSize:{default:14},color:{default:"#fff"},backgroundColor:{default:"rgba(0,0,0,.85)"}},setup(e){const l=o(!1),c=o(),u=o(0),i=o(0),r=o(),s=o();w(()=>{f()});const f=()=>{const t=r.value.getBoundingClientRect(),m=t.top,_=t.left,x=t.width,k=s.value.offsetWidth,y=s.value.offsetHeight;u.value=m-y,i.value=_-(k-x)/2},d=()=>{f(),$(c.value),l.value=!0},v=()=>{c.value=b(()=>{l.value=!1},100)};return(t,m)=>(z(),C("div",{class:"m-tooltip",onMouseenter:d,onMouseleave:v},[a("div",{ref_key:"titleRef",ref:s,class:R(["m-title",{"show-tip":l.value}]),onMouseenter:d,onMouseleave:v,style:n(`max-width: ${e.maxWidth}px; top: ${u.value}px; left: ${i.value}px;`)},[a("div",{class:"u-title",style:n(`font-size: ${e.fontSize}px; color: ${e.color}; background-color: ${e.backgroundColor};`)},[g(t.$slots,"title",{},()=>[p(h(e.title),1)],!0)],4),a("div",S,[a("span",{class:"u-arrow",style:n(`background-color: ${e.backgroundColor};`)},null,4)])],38),a("div",{ref_key:"contentRef",ref:r,class:"u-content"},[g(t.$slots,"default",{},()=>[p(h(e.content),1)],!0)],512)],32))}});var H=B(M,[["__scopeId","data-v-1c8bcc12"],["__file","Tooltip.vue"]]);export{H as default};
