import{_ as c,f as l,o as t,q as _,h as d,ac as u,c as a,j as p,a as n,e as m,t as s,i as r,z as h,F as y}from"./app.4732333c.js";const f={key:0},L=["href"],k={class:"custom-container-title"},C={key:2,class:"custom-container details"},v={key:0},x=l({__name:"TimeLineCard",props:{timeLineList:{type:Array,required:!0}},setup(i){return(T,B)=>(t(),_(u,{name:"list"},{default:d(()=>[(t(!0),a(y,null,p(i.timeLineList,(e,o)=>(t(),a("div",{key:o},[e.time?(t(),a("h3",f,[n("a",{href:`#_${e.time}`,class:"header-anchor","aria-hidden":"true"},"#",8,L),m(" "+s(e.time),1)])):r("",!0),e.type!="details"?(t(),a("div",{key:1,class:h(`${e.type?`custom-container ${e.type}`:"custom-container tip"}`)},[n("p",k,s(e.title),1),n("p",null,s(e.content),1)],2)):(t(),a("details",C,[e.title?(t(),a("summary",v,s(e.title),1)):r("",!0),n("p",null,s(e.content),1)]))]))),128))]),_:1}))}});var N=c(x,[["__file","TimeLineCard.vue"]]);export{N as default};
