import{_ as h,m as c,f as m,o as u,c as r,a as p,l as i,h as f,F as k,g as y,u as v,t as C}from"./app.37456e58.js";const P={class:"pagination"},b={key:0},N=["onClick"],x={key:1},j={__name:"Pagination",props:{total:{type:Number,default:10},pagesize:{type:Number,default:10},page:{type:Number,default:1}},setup(_,{emit:d}){const n=_,s=c(()=>Math.ceil(n.total/n.pagesize)),a=m(n.page||1),g=c(()=>{const t=[];if(s.value<=5)for(let e=1;e<=s.value;e++)t.push(e);else if(a.value<=2)for(let e=1;e<=5;e++)t.push(e);else if(a.value>=s.value-1)for(let e=s.value-4;e<=s.value;e++)t.push(e);else for(let e=a.value-2;e<=a.value+2;e++)t.push(e);return t}),o=t=>{if(t===!1){if(a.value===1)return;a.value>1&&(a.value-=1)}else if(t===!0){if(a.value===s.value)return;a.value<s.value&&(a.value+=1)}else a.value=t;d("change-page",a.value)};return(t,e)=>(u(),r("div",P,[p("a",{onClick:e[0]||(e[0]=l=>o(!1)),href:"javascript:;",class:i({disabled:a.value===1})},"\u4E0A\u4E00\u9875",2),a.value>3?(u(),r("span",b,"...")):f("",!0),(u(!0),r(k,null,y(v(g),l=>(u(),r("a",{onClick:z=>o(l),href:"javascript:;",class:i({active:a.value===l}),key:l},C(l),11,N))),128)),a.value<v(s)-2?(u(),r("span",x,"...")):f("",!0),p("a",{onClick:e[1]||(e[1]=l=>o(!0)),href:"javascript:;",class:i({disabled:a.value===v(s)})},"\u4E0B\u4E00\u9875",2)]))}};var $=h(j,[["__scopeId","data-v-0653371e"],["__file","Pagination.vue"]]);export{$ as default};
