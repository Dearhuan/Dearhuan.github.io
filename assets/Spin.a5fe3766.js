import{_ as r,f as u,o as i,c as a,V as o,W as n,a as t,i as c,t as _,J as p,z as l,A as m,p as v,k as h}from"./app.521d5241.js";const e=s=>(v("data-v-468adac9"),s=s(),h(),s),f={class:"m-spin"},y={class:"m-spin-box"},S={key:0,class:"m-spin-dot"},k=e(()=>t("span",{class:"u-dot-item"},null,-1)),g=e(()=>t("span",{class:"u-dot-item"},null,-1)),x=e(()=>t("span",{class:"u-dot-item"},null,-1)),w=e(()=>t("span",{class:"u-dot-item"},null,-1)),z=[k,g,x,w],B={key:1,class:"u-spin-circle"},I={key:2,class:"m-dynamic-circle"},C=e(()=>t("svg",{class:"circular",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})],-1)),V=[C],$=u({__name:"Spin",props:{spinning:{type:Boolean,default:!0},size:{default:"default"},tip:{default:""},indicator:{default:"dot"},color:{default:"#1677ff"}},setup(s){return(d,D)=>(i(),a("div",{class:l(`m-spin-wrap ${s.size}`),style:m(`--color: ${s.color};`)},[o(t("div",f,[t("div",y,[s.indicator==="dot"?(i(),a("div",S,z)):c("",!0),s.indicator==="static-circle"?(i(),a("div",B)):c("",!0),s.indicator==="dynamic-circle"?(i(),a("div",I,V)):c("",!0),o(t("p",{class:"u-tip"},_(s.tip),513),[[n,s.tip]])])],512),[[n,s.spinning]]),t("div",{class:l(["m-spin-content",{"m-spin-mask":s.spinning}])},[p(d.$slots,"default",{},void 0,!0)],2)],6))}});var b=r($,[["__scopeId","data-v-468adac9"],["__file","Spin.vue"]]);export{b as default};
