import{_ as p,f as m,o as t,c as n,a as r,F as i,j as a,A as y,i as l,z as c,t as o}from"./app.dbc6e4ad.js";const v={class:"container"},L={id:"timeline"},f=["src"],g=m({__name:"TimeLineTwo",props:{timeLineList:{type:Array,required:!0}},setup(_){return(h,k)=>(t(),n("div",v,[r("div",L,[(t(!0),n(i,null,a(_.timeLineList,(e,s)=>(t(),n("div",{class:"timeline-item",key:s},[r("div",{class:"timeline-icon",style:y({backgroundColor:e.color?e.color:""})},[e.icon?(t(),n("img",{key:0,src:e.icon},null,8,f)):l("",!0)],4),Array.isArray(e.content)==!0?(t(),n("div",{key:0,class:c(["timeline-content",s%2!==0?"right":""])},[r("h2",null,o(e.title),1),(t(!0),n(i,null,a(e.content,(u,d)=>(t(),n("p",{key:d},o(u),1))),128))],2)):typeof e.content=="string"?(t(),n("div",{key:1,class:c(["timeline-content",s%2!==0?"right":""])},[r("h2",null,o(e.title),1),r("p",null,o(e.content),1)],2)):l("",!0)]))),128))])]))}});var w=p(g,[["__scopeId","data-v-00427812"],["__file","TimeLineTwo.vue"]]);export{w as default};
