import{_ as E,f as D,g as c,w as F,o as d,c as v,a as h,z as f,A as g,t as x,ab as N,b as j,h as A,U as H,V as O,W as T,F as U,j as W,p as q,k as G}from"./app.9f1d7cfb.js";const C=e=>(q("data-v-743a89c6"),e=e(),G(),e),J=["title"],K=C(()=>h("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"},null,-1)),P=[K],Q=["onClick"],R=C(()=>h("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"},null,-1)),X=[R],Y=["title","onMouseenter","onClick"],Z=D({__name:"Select",props:{options:{default:()=>[]},label:{default:"label"},value:{default:"value"},placeholder:{default:"\u8BF7\u9009\u62E9"},disabled:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},width:{default:120},height:{default:32},maxDisplay:{default:6},modelValue:{default:null}},emits:["update:modelValue","change"],setup(e,{emit:r}){const t=e,u=c(),s=c(),o=c(!1),m=c(!0),i=c(!1),w=c();F(()=>{y()});function y(){if(t.modelValue){const l=t.options.find(n=>n[t.value]===t.modelValue);l?(u.value=l[t.label],s.value=l[t.value]):(u.value=t.modelValue,s.value=null)}else u.value=null,s.value=null}function S(){o.value&&(o.value=!1)}function V(){t.allowClear&&u.value&&(i.value=!0)}function $(){t.allowClear&&i.value&&(i.value=!1)}function B(l){s.value=l}function k(){m.value=!1}function M(){s.value=null,m.value=!0,w.value.focus()}function L(){if(o.value=!o.value,!s.value&&u.value){const l=t.options.find(n=>n[t.label]===u.value);s.value=l?l[t.value]:null}}function p(){i.value=!1,u.value=null,s.value=null,r("update:modelValue"),r("change")}function z(l,n,a){t.modelValue!==l&&(u.value=n,s.value=l,r("update:modelValue",l),r("change",l,n,a)),o.value=!1}return(l,n)=>(d(),v("div",{class:"m-select",style:g(`height: ${e.height}px;`)},[h("div",{class:f(["m-select-wrap",{hover:!e.disabled,focus:o.value,disabled:e.disabled}]),style:g(`width: ${e.width}px; height: ${e.height}px;`),tabindex:"0",ref_key:"select",ref:w,onMouseenter:V,onMouseleave:$,onBlur:n[0]||(n[0]=a=>m.value&&!e.disabled?S():()=>!1),onClick:n[1]||(n[1]=a=>e.disabled?()=>!1:L())},[h("div",{class:f(["u-select-input",{placeholder:!u.value}]),style:g(`line-height: ${e.height-2}px;`),title:u.value},x(u.value||e.placeholder),15,J),(d(),v("svg",{class:f(["triangle",{rotate:o.value,show:!i.value}]),viewBox:"64 64 896 896","data-icon":"down","aria-hidden":"true",focusable:"false"},P,2)),(d(),v("svg",{onClick:N(p,["stop"]),class:f(["close",{show:i.value}]),focusable:"false","data-icon":"close-circle","aria-hidden":"true",viewBox:"64 64 896 896"},X,10,Q))],38),j(H,{name:"fade"},{default:A(()=>[O(h("div",{class:"m-options-panel",onMouseenter:k,onMouseleave:M,style:g(`top: ${e.height+4}px; line-height: ${e.height-10}px; max-height: ${e.maxDisplay*e.height+9}px; width: ${e.width}px;`)},[(d(!0),v(U,null,W(e.options,(a,b)=>(d(),v("p",{key:b,class:f(["u-option",{"option-selected":a[e.label]===u.value,"option-hover":!a.disabled&&a[e.value]===s.value,"option-disabled":a.disabled}]),title:a[e.label],onMouseenter:I=>B(a[e.value]),onClick:I=>a.disabled?()=>!1:z(a[e.value],a[e.label],b)},x(a[e.label]),43,Y))),128))],36),[[T,o.value]])]),_:1})],4))}});var ee=E(Z,[["__scopeId","data-v-743a89c6"],["__file","Select.vue"]]);export{ee as default};
