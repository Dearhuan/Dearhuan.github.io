import{i as s}from"./index.fed564b8.js";import{_ as l,f as n,ac as d,q as i,o as u,c,u as _,A as p}from"./app.c8250117.js";const f=["id"],y={__name:"MyChart",props:{option:{type:Object,required:!0,default:()=>({})},style:{type:Object,default:()=>({width:"100%",height:"800px"})},dark:{type:Boolean,required:!1,default:!1}},setup(a){const r=a;let e=n(null);d(()=>{e.value=`echarts-uid-${parseInt(Math.random()*1e3)}`});const o=n(r.dark);let t=null;return i(()=>{t=s(document.getElementById(e.value),o.value?"dark":""),t.setOption(r.option,{notMerge:!0}),window.addEventListener("resize",()=>{t.resize({animation:{duration:300}})})}),(h,m)=>(u(),c("div",{class:"my-chart",id:_(e),style:p(a.style)},null,12,f))}};var k=l(y,[["__scopeId","data-v-87ed52c4"],["__file","MyChart.vue"]]);export{k as default};
