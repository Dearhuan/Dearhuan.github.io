import{i as s}from"./index.fed564b8.js";import{_ as d,g as n,ad as l,m as i,o as u,c,u as _,A as p}from"./app.9d1b5eb6.js";const y=["id"],f={__name:"MyChart",props:{option:{type:Object,required:!0,default:()=>({})},style:{type:Object,default:()=>({width:"100%",height:"800px"})},dark:{type:Boolean,required:!1,default:!1}},setup(a){const r=a;let e=n(null);l(()=>{e.value=`echarts-uid-${parseInt(Math.random()*1e3)}`});const o=n(r.dark);let t=null;return i(()=>{t=s(document.getElementById(e.value),o.value?"dark":""),t.setOption(r.option,{notMerge:!0}),window.addEventListener("resize",()=>{t.resize({animation:{duration:300}})})}),(m,h)=>(u(),c("div",{class:"my-chart",id:_(e),style:p(a.style)},null,12,y))}};var k=d(f,[["__scopeId","data-v-87ed52c4"],["__file","MyChart.vue"]]);export{k as default};
