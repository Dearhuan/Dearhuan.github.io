import{u as y}from"./index.58a782cf.js";import"./html2canvas.esm.0eae2bf4.js";import"./jspdf.es.min.746d1235.js";import{_ as v,f,g,m as h,o as t,c as s,a as i,F as u,j as _,A as L,z as x,t as a,i as b}from"./app.dff44b39.js";const k={class:"entries"},z={key:0,class:"body"},T={key:1,class:"body"},A=f({__name:"TimeLineOne",props:{timeLineList:{type:Array,required:!0}},setup(d){const l=g(""),c=()=>{const n=document.querySelectorAll(".entry"),o=n.length,e=n[o-1].offsetTop,r=n[o-1].clientHeight;l.value=`${e+r}px`};return h(()=>{c(),window.addEventListener("resize",y(c,500,!0))}),(n,o)=>(t(),s("div",{class:"entries-box",style:L({minHeight:l.value})},[i("div",k,[(t(!0),s(u,null,_(d.timeLineList,(e,r)=>(t(),s("div",{class:"entry",key:r},[i("div",{class:x(["title",e.size?e.size:""])},a(e.title),3),Array.isArray(e.content)==!0?(t(),s("div",z,[(t(!0),s(u,null,_(e.content,(p,m)=>(t(),s("p",{key:m},a(p),1))),128))])):typeof e.content=="string"?(t(),s("div",T,[i("p",null,a(e.content),1)])):b("",!0)]))),128))])],4))}});var N=v(A,[["__scopeId","data-v-4b71e37b"],["__file","TimeLineOne.vue"]]);export{N as default};
