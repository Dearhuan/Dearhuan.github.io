import{_ as V,f as W,g as l,y,m as E,o as i,c as s,F as T,j as A,A as h,u as F,b as I,h as L,ac as N,t as R,V as G,W as P,a as X}from"./app.da40d39a.js";import{b as M,r as H,c as J,e as K}from"./index.c3856a1a.js";const O=["title","href","target","onClick"],Q=["title","href","target","onClick"],U=W({__name:"TextScroll",props:{sliderText:{default:()=>[]},width:{default:"100%"},height:{default:60},backgroundColor:{default:"#FFF"},amount:{default:4},gap:{default:20},vertical:{type:Boolean,default:!1},interval:{default:3e3}},emits:["click"],setup(t,{emit:q}){const a=t,r=l(0),m=l(0),g=l(),u=l(60),c=l([...a.sliderText]),$=l(),k=l(0),z=y(()=>u.value===60?1:60/u.value);function B(){const o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var d=null;function e(n){d?(u.value=Math.floor(1e3/(n-d)),console.log("fps",u.value),k.value=D(),f()):(m.value>10&&(d=n),m.value=o(e))}m.value=o(e)}const D=()=>parseFloat(($.value.offsetWidth/a.amount).toFixed(2)),x=()=>{r.value>=k.value?(c.value.push(c.value.shift()),r.value=0):r.value+=z.value,g.value=M(x)},w=y(()=>typeof a.width=="number"?a.width+"px":a.width),p=y(()=>a.sliderText.length);E(()=>{a.vertical?f():B()});const f=()=>{a.vertical?p.value>1&&S():c.value.length>a.amount&&(g.value=M(x))},_=()=>{a.vertical?p.value>1&&J(C):K(g.value)};function b(o){q("click",o)}const v=l(0);var C=null;function S(){C=H(()=>{v.value===p.value-1?v.value=0:v.value++,S()},a.interval)}return(o,d)=>t.vertical?(i(),s("div",{key:1,class:"m-slider-vertical",onMouseenter:_,onMouseleave:f,style:h(`height: ${t.height}px; width: ${F(w)}; background: ${t.backgroundColor};`)},[I(N,{name:"slide"},{default:L(()=>[(i(!0),s(T,null,A(t.sliderText,(e,n)=>G((i(),s("div",{class:"m-slider",style:h(`width: calc(${F(w)} - ${2*t.gap}px); height: ${t.height}px;`),key:n},[X("a",{class:"u-slider",title:e.title,href:e.link?e.link:"javascript:;",target:e.link?"_blank":"_self",onClick:j=>b(e.title)},R(e.title),9,Q)],4)),[[P,v.value===n]])),128))]),_:1})],36)):(i(),s("div",{key:0,class:"m-slider-horizon",onMouseenter:_,onMouseleave:f,ref_key:"horizonRef",ref:$,style:h(`height: ${t.height}px; width: ${F(w)}; background: ${t.backgroundColor};`)},[(i(!0),s(T,null,A(c.value,(e,n)=>(i(),s("a",{style:h(`will-change: transform; transform: translateX(${-r.value}px); width: ${k.value-t.gap}px; margin-left: ${t.gap}px;`),class:"u-slide-title",key:n,title:e.title,href:e.link?e.link:"javascript:;",target:e.link?"_blank":"_self",onClick:j=>b(e.title)},R(e.title||"--"),13,O))),128))],36))}});var ee=V(U,[["__scopeId","data-v-34d14902"],["__file","TextScroll.vue"]]);export{ee as default};
