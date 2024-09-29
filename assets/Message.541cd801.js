import{_ as V,f as b,g as v,y as C,x as S,o,c,b as T,h as N,ac as $,A as r,F as D,j as E,V as F,W as H,a as n,i as f,t as j}from"./app.7ab6fe84.js";import{r as w,c as g}from"./index.c3856a1a.js";const A=["onMouseenter","onMouseleave"],G=n("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"},null,-1),R=[G],W=n("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"},null,-1),q=[W],I=n("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"},null,-1),J=[I],K=n("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"},null,-1),O=[K],P={class:"content"};var i=(a=>(a.info="#1677ff",a.success="#52c41a",a.error="#ff4d4f",a.warn="#faad14",a))(i||{});const Q=b({__name:"Message",props:{duration:{default:3e3},top:{default:30}},emits:["close"],setup(a,{expose:M,emit:y}){const z=a,_=v(),l=v([]),h=v([]),t=v([]),x=C(()=>l.value.every(e=>!e));S(x,(e,p)=>{!p&&e&&(_.value=w(()=>{t.value.splice(0),l.value.splice(0)},300))});const k=e=>{g(h.value[e])},B=e=>{m(e)},u=()=>{g(_.value);const e=t.value.length-1;l.value[e]=!0,m(e)};M({info:e=>{t.value.push({content:e,mode:"info"}),u()},success:e=>{t.value.push({content:e,mode:"success"}),u()},error:e=>{t.value.push({content:e,mode:"error"}),u()},warn:e=>{t.value.push({content:e,mode:"warn"}),u()}});const m=e=>{h.value[e]=w(()=>{l.value[e]=!1,y("close")},z.duration)};return(e,p)=>(o(),c("div",{class:"m-message-wrap",style:r(`top: ${a.top}px;`)},[T($,{name:"slide-fade"},{default:N(()=>[(o(!0),c(D,null,E(t.value,(s,d)=>F((o(),c("div",{class:"m-message",key:d},[n("div",{class:"m-message-content",onMouseenter:L=>k(d),onMouseleave:L=>B(d)},[s.mode==="info"?(o(),c("svg",{key:0,class:"svg",style:r({fill:i[s.mode]}),viewBox:"64 64 896 896","data-icon":"info-circle","aria-hidden":"true",focusable:"false"},R,4)):f("",!0),s.mode==="success"?(o(),c("svg",{key:1,class:"svg",style:r({fill:i[s.mode]}),viewBox:"64 64 896 896","data-icon":"check-circle","aria-hidden":"true",focusable:"false"},q,4)):f("",!0),s.mode==="error"?(o(),c("svg",{key:2,class:"svg",style:r({fill:i[s.mode]}),viewBox:"64 64 896 896","data-icon":"close-circle","aria-hidden":"true",focusable:"false"},J,4)):f("",!0),s.mode==="warn"?(o(),c("svg",{key:3,class:"svg",style:r({fill:i[s.mode]}),viewBox:"64 64 896 896","data-icon":"exclamation-circle","aria-hidden":"true",focusable:"false"},O,4)):f("",!0),n("p",P,j(s.content),1)],40,A)])),[[H,l.value[d]]])),128))]),_:1})],4))}});var ae=V(Q,[["__file","Message.vue"]]);export{ae as default};
