import{_ as c,f as p,o as t,c as n,F as i,j as s,t as r,i as o}from"./app.8a354dde.js";const d={key:0,class:"title"},y={key:1},k={key:2},h={key:3},f=["textContent"],g={key:5},x=["href","textContent"],T=p({__name:"TimeLineThree",props:{timeLineList:{type:Array,required:!0}},setup(_){return(v,L)=>(t(),n("main",null,[(t(!0),n(i,null,s(_.timeLineList,(e,a)=>(t(),n("div",{class:"timeline-three",key:a},[e.title?(t(),n("p",d,r(e.title),1)):o("",!0),Array.isArray(e.content)?(t(),n("div",y,[(t(!0),n(i,null,s(e.content,(l,u)=>(t(),n("p",{key:u},r(l),1))),128))])):typeof e.content=="string"?(t(),n("div",k,r(e.content),1)):o("",!0),e.origin&&!e.time?(t(),n("p",h,r(e.origin),1)):e.origin&&e.time?(t(),n("p",{key:4,textContent:r(`${e.origin} - ${e.time}`)},null,8,f)):!e.origin&&e.time?(t(),n("p",g,r(e.time),1)):o("",!0),e.link?(t(),n("a",{key:6,href:e.link,target:"_blank",rel:"noopener noreferrer",textContent:r(e.linkText?e.linkText:"\u9605\u8BFB\u539F\u6587")},null,8,x)):o("",!0)]))),128))]))}});var B=c(T,[["__scopeId","data-v-a0937712"],["__file","TimeLineThree.vue"]]);export{B as default};
