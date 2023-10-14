import{_ as F,i as M,f as k,j as S,o as d,c as p,a as s,J as V,e as B,t as C,V as b,a9 as w,a6 as c,z as g,aa as L,p as z,l as K}from"./app.69cf4113.js";const y=l=>(z("data-v-2f5d4dbe"),l=l(),K(),l),U={class:"m-input-number",tabindex:"1"},E={class:"u-input-prefix"},T={class:"m-input-wrap"},j=["onKeyup"],A={class:"m-handler-wrap"},D=y(()=>s("svg",{focusable:"false",class:"u-icon","data-icon":"up","aria-hidden":"true",viewBox:"64 64 896 896"},[s("path",{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"})],-1)),J=[D],$=y(()=>s("svg",{focusable:"false",class:"u-icon","data-icon":"down","aria-hidden":"true",viewBox:"64 64 896 896"},[s("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"})],-1)),q=[$],G=M({__name:"InputNumber",props:{min:{default:-1/0},max:{default:1/0},step:{default:1},prefix:{default:""},keyboard:{type:Boolean,default:!0},value:{default:null}},emits:["update:value","change"],setup(l,{emit:v}){const t=l,e=k();S(()=>{e.value=t.value});function u(n){v("change",n),v("update:value",n)}function f(n){const a=n.target.value;Number.isNaN(parseFloat(a))?e.value=t.value:(e.value=parseFloat(a),console.log(e.value),e.value>t.max&&(e.value=t.max),e.value<t.min&&(e.value=t.min),e.value!==t.value&&u(e.value))}function m(n){const a=n.target.value;a===""&&u(null),!Number.isNaN(parseFloat(a))&&parseFloat(a)>=t.min&&parseFloat(a)<=t.max&&parseFloat(a)!==t.value&&(e.value=parseFloat(a),u(parseFloat(a)||0))}function h(n,a){const o=String(n).split(".")[1],i=String(a).split(".")[1];let r=Math.max((o==null?void 0:o.length)||0,(i==null?void 0:i.length)||0),N=n.toFixed(r),I=a.toFixed(r);return(+N.replace(".","")+ +I.replace(".",""))/Math.pow(10,r)}function x(){if(e.value!==t.max){const n=h(e.value||0,+t.step);u(Math.min(t.max,n)),e.value=Math.min(t.max,n)}}function _(){if(e.value!==t.min){const n=h(e.value||0,-t.step);u(Math.max(t.min,n)),e.value=Math.max(t.min,n)}}return(n,a)=>(d(),p("div",U,[s("span",E,[V(n.$slots,"prefix",{},()=>[B(C(l.prefix),1)],!0)]),s("div",T,[l.keyboard?b((d(),p("input",{key:0,autocomplete:"off",class:"u-input-number",onChange:f,onInput:m,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),onKeydown:a[1]||(a[1]=c(L(()=>{},["prevent"]),["up"])),onKeyup:[c(x,["up"]),c(_,["down"])]},null,40,j)),[[w,e.value]]):b((d(),p("input",{key:1,autocomplete:"off",class:"u-input-number",onChange:f,onInput:m,"onUpdate:modelValue":a[2]||(a[2]=o=>e.value=o)},null,544)),[[w,e.value]])]),s("div",A,[s("span",{class:g(["u-up-arrow",{disabled:(e.value||0)>=l.max}]),onClick:x},J,2),s("span",{class:g(["u-down-arrow",{disabled:(e.value||0)<=l.min}]),onClick:_},q,2)])]))}});var P=F(G,[["__scopeId","data-v-2f5d4dbe"],["__file","InputNumber.vue"]]);export{P as default};
