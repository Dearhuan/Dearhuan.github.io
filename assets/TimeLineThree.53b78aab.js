import{_ as c,i as p,o as t,c as n,F as i,g as s,t as r,k as o}from"./app.c8250117.js";const d={key:0,class:"title"},k={key:1},y={key:2},h={key:3},g=["textContent"],f={key:5},x=["href","textContent"],T=p({__name:"TimeLineThree",props:{timeLineList:{type:Array,required:!0}},setup(_){return(v,L)=>(t(),n("main",null,[(t(!0),n(i,null,s(_.timeLineList,(e,a)=>(t(),n("div",{class:"timeline-three",key:a},[e.title?(t(),n("p",d,r(e.title),1)):o("",!0),Array.isArray(e.content)?(t(),n("div",k,[(t(!0),n(i,null,s(e.content,(l,u)=>(t(),n("p",{key:u},r(l),1))),128))])):typeof e.content=="string"?(t(),n("div",y,r(e.content),1)):o("",!0),e.origin&&!e.time?(t(),n("p",h,r(e.origin),1)):e.origin&&e.time?(t(),n("p",{key:4,textContent:r(`${e.origin} - ${e.time}`)},null,8,g)):!e.origin&&e.time?(t(),n("p",f,r(e.time),1)):o("",!0),e.link?(t(),n("a",{key:6,href:e.link,target:"_blank",rel:"noopener noreferrer",textContent:r(e.linkText?e.linkText:"\u9605\u8BFB\u539F\u6587")},null,8,x)):o("",!0)]))),128))]))}});var B=c(T,[["__scopeId","data-v-a0937712"],["__file","TimeLineThree.vue"]]);export{B as default};
