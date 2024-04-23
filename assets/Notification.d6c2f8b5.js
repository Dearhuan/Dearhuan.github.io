import{_ as N,f as S,g as v,y as R,x as V,o as n,c as l,b as I,h as A,ac as D,z as g,A as d,F,j as T,V as E,W as H,i as p,a as o,t as y,p as j,k as G}from"./app.79e2e70f.js";import{r as z,c as L}from"./index.c3856a1a.js";const a=t=>(j("data-v-cfbf27da"),t=t(),G(),t),W=["onMouseenter","onMouseleave"],q=a(()=>o("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},null,-1)),J=a(()=>o("path",{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"},null,-1)),K=[q,J],O=a(()=>o("path",{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"},null,-1)),P=a(()=>o("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},null,-1)),Q=[O,P],U=a(()=>o("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},null,-1)),X=a(()=>o("path",{d:"M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"},null,-1)),Y=[U,X],Z=a(()=>o("path",{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"},null,-1)),ee=a(()=>o("path",{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},null,-1)),te=[Z,ee],se=["onClick"],oe=a(()=>o("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"},null,-1)),ce=[oe];var h=(t=>(t.info="#1677FF",t.success="#52c41a",t.error="#ff4d4f",t.warn="#faad14",t))(h||{});const ae=S({__name:"Notification",props:{title:{default:"\u6E29\u99A8\u63D0\u793A"},duration:{default:4500},top:{default:24},bottom:{default:24},placement:{default:"topRight"}},emits:["close"],setup(t,{expose:k,emit:x}){const f=t,w=v(),m=v([]),i=v([]),c=v([]),$=R(()=>m.value.length===c.value.length);V($,(e,b)=>{!b&&e&&(w.value=z(()=>{m.value.splice(0),c.value.splice(0)},300))});const B=e=>{L(i.value[e]),i.value[e]=null},C=e=>{f.duration&&(i.value[e]=z(()=>{_(e)},f.duration))},u=()=>{L(w.value),i.value.push(null);const e=c.value.length-1;f.duration&&(i.value[e]=z(()=>{_(e)},f.duration))};k({open:e=>{c.value.push({notification:e,mode:"open"}),u()},info:e=>{c.value.push({notification:e,mode:"info"}),u()},success:e=>{c.value.push({notification:e,mode:"success"}),u()},error:e=>{c.value.push({notification:e,mode:"error"}),u()},warn:e=>{c.value.push({notification:e,mode:"warn"}),u()}});const _=e=>{m.value.push(e),x("close")};return(e,b)=>(n(),l("div",{class:g(["m-notification-wrap",t.placement]),style:d(`top: ${["topRight","topLeft"].includes(t.placement)?t.top:"auto"}px; bottom: ${["bottomRight","bottomLeft"].includes(t.placement)?t.bottom:""}px;`)},[I(D,{name:["topRight","bottomRight"].includes(t.placement)?"right":"left"},{default:A(()=>[(n(!0),l(F,null,T(c.value,(s,r)=>E((n(),l("div",{class:"m-notification",onMouseenter:M=>B(r),onMouseleave:M=>C(r),key:r},[s.mode==="info"?(n(),l("svg",{key:0,class:"u-status-svg",style:d(`fill: ${h[s.mode]}`),viewBox:"64 64 896 896","data-icon":"info-circle","aria-hidden":"true",focusable:"false"},K,4)):p("",!0),s.mode==="success"?(n(),l("svg",{key:1,class:"u-status-svg",style:d(`fill: ${h[s.mode]}`),viewBox:"64 64 896 896","data-icon":"check-circle","aria-hidden":"true",focusable:"false"},Q,4)):p("",!0),s.mode==="warn"?(n(),l("svg",{key:2,class:"u-status-svg",style:d(`fill: ${h[s.mode]}`),viewBox:"64 64 896 896","data-icon":"exclamation-circle","aria-hidden":"true",focusable:"false"},Y,4)):p("",!0),s.mode==="error"?(n(),l("svg",{key:3,class:"u-status-svg",style:d(`fill: ${h[s.mode]}`),viewBox:"64 64 896 896","data-icon":"close-circle","aria-hidden":"true",focusable:"false"},te,4)):p("",!0),o("div",{class:g(["u-title",{mb4:s.mode!=="open",ml36:s.mode!=="open"}])},y(t.title||"--"),3),o("p",{class:g(["u-description",{ml36:s.mode!=="open"}])},y(s.notification||"--"),3),(n(),l("svg",{class:"u-close",onClick:M=>_(r),viewBox:"64 64 896 896","data-icon":"close","aria-hidden":"true",focusable:"false"},ce,8,se))],40,W)),[[H,!m.value.includes(r)]])),128))]),_:1},8,["name"])],6))}});var fe=N(ae,[["__scopeId","data-v-cfbf27da"],["__file","Notification.vue"]]);export{fe as default};
