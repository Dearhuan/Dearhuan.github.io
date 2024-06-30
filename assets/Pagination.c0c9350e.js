import{_ as A,f as F,g as d,y as x,x as I,m as j,a7 as H,o as p,c as m,a as s,t as k,u as i,i as S,z as v,V as _,W as y,F as T,j as D,a9 as E,e as B,p as J,k as O}from"./app.da40d39a.js";const f=u=>(J("data-v-e88a3c54"),u=u(),O(),u),Q={class:"m-pagination-wrap"},U={key:0,class:"mr8"},W=f(()=>s("svg",{class:"u-arrow",viewBox:"64 64 896 896","data-icon":"left","aria-hidden":"true",focusable:"false"},[s("path",{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"})],-1)),q=[W],G=f(()=>s("span",{class:"u-ellipsis"},"\u2022\u2022\u2022",-1)),K=f(()=>s("svg",{class:"u-icon",viewBox:"64 64 896 896","data-icon":"double-left","aria-hidden":"true",focusable:"false"},[s("path",{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"})],-1)),R=[G,K],X=["onClick"],Y=f(()=>s("span",{class:"u-ellipsis"},"\u2022\u2022\u2022",-1)),Z=f(()=>s("svg",{class:"u-icon",viewBox:"64 64 896 896","data-icon":"double-right","aria-hidden":"true",focusable:"false"},[s("path",{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"})],-1)),ee=[Y,Z],ae=f(()=>s("svg",{class:"u-arrow",viewBox:"64 64 896 896","data-icon":"right","aria-hidden":"true",focusable:"false"},[s("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"})],-1)),te=[ae],se={key:1,class:"u-jump-page"},ne=B("\u8DF3\u81F3"),le=B("\u9875"),oe=F({__name:"Pagination",props:{current:{default:1},pageSize:{default:10},total:{default:0},pageListNum:{default:5},hideOnSinglePage:{type:Boolean,default:!1},showQuickJumper:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},placement:{default:"center"}},emits:["change"],setup(u,{emit:C}){const r=u,n=d(r.current),g=d(""),L=d(!1),b=d(!1),M=d(!1),z=d(!1),t=x(()=>Math.ceil(r.total/r.pageSize)),h=x(()=>P(n.value).filter(e=>e!==1&&e!==t.value));I(n,e=>{C("change",{page:e,pageSize:r.pageSize})}),j(()=>{document.onkeydown=e=>{e&&e.key==="Enter"&&V()}}),H(()=>{document.onkeydown=null});function P(e){var a=[],l=Math.floor(r.pageListNum/2),o={start:e-l,end:e+l};o.start<1&&(o.start=1,o.end=o.end+(1-o.start)),o.end>t.value&&(o.start=o.start-(o.end-t.value),o.end=t.value),o.start>1?L.value=!0:L.value=!1,o.end<t.value?b.value=!0:b.value=!1;for(let w=o.start;w<=o.end;w++)a.push(w);return a}function $(){n.value=n.value-r.pageListNum>0?n.value-r.pageListNum:1}function N(){n.value=n.value+r.pageListNum<t.value?n.value+t.value:t.value}function V(){var e=Number(g.value);Number.isInteger(e)&&(e<1&&(e=1),e>t.value&&(e=t.value),c(e)),g.value=""}function c(e){if(e===0||e===t.value+1)return!1;n.value!==e&&(n.value=e)}return(e,a)=>(p(),m("div",{class:v([`m-pagination ${u.placement}`,{hidden:u.hideOnSinglePage&&u.total<=u.pageSize}])},[s("div",Q,[u.showTotal?(p(),m("span",U,"\u5171 "+k(i(t))+" \u9875 / "+k(u.total)+" \u6761",1)):S("",!0),s("span",{class:v(["u-item",{disabled:n.value===1}]),onClick:a[0]||(a[0]=l=>c(n.value-1))},q,2),s("span",{class:v(["u-item",{active:n.value===1}]),onClick:a[1]||(a[1]=l=>c(1))},"1",2),_(s("span",{class:"m-arrow",ref:"forward",onClick:$,onMouseenter:a[2]||(a[2]=l=>M.value=!0),onMouseleave:a[3]||(a[3]=l=>M.value=!1)},R,544),[[y,L.value&&i(h)[0]-1>1]]),(p(!0),m(T,null,D(i(h),(l,o)=>(p(),m("span",{class:v(["u-item",{active:n.value===l}]),key:o,onClick:w=>c(l)},k(l),11,X))),128)),_(s("span",{class:"m-arrow",ref:"backward",onClick:N,onMouseenter:a[4]||(a[4]=l=>z.value=!0),onMouseleave:a[5]||(a[5]=l=>z.value=!1)},ee,544),[[y,b.value&&i(h)[i(h).length-1]+1<i(t)]]),_(s("span",{class:v(["u-item",{active:n.value===i(t)}]),onClick:a[6]||(a[6]=l=>c(i(t)))},k(i(t)),3),[[y,i(t)!==1]]),s("span",{class:v(["u-item",{disabled:n.value===i(t)}]),onClick:a[7]||(a[7]=l=>c(n.value+1))},te,2),u.showQuickJumper?(p(),m("span",se,[ne,_(s("input",{type:"text","onUpdate:modelValue":a[8]||(a[8]=l=>g.value=l)},null,512),[[E,g.value]]),le])):S("",!0)])],2))}});var ie=A(oe,[["__scopeId","data-v-e88a3c54"],["__file","Pagination.vue"]]);export{ie as default};
