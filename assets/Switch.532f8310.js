import{_ as i,i as u,f as h,x as r,o as f,c as v,a as s,z as d,t as k,J as _}from"./app.62e94827.js";const p={class:"m-switch-wrap"},w=u({__name:"Switch",props:{checkedInfo:{default:""},uncheckedInfo:{default:""},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1}},emits:["update:checked","change"],setup(c,{emit:t}){const n=c,e=h(n.checked);r(()=>n.checked,a=>{e.value=a});const o=()=>{t("update:checked",!e.value),t("change",!e.value)};return(a,l)=>(f(),v("div",p,[s("div",{onClick:l[0]||(l[0]=m=>c.disabled?()=>!1:o()),class:d(["m-switch",{"switch-checked":e.value,disabled:c.disabled}])},[s("div",{class:d(["u-switch-inner",e.value?"inner-checked":"inner-unchecke"])},k(e.value?c.checkedInfo:c.uncheckedInfo),3),s("div",{class:d(["u-node",{"node-checked":e.value}])},[_(a.$slots,"node",{checked:e.value},void 0,!0)],2)],2)]))}});var y=i(w,[["__scopeId","data-v-fd21145c"],["__file","Switch.vue"]]);export{y as default};
