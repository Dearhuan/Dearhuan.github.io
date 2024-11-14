import{u as _}from"./index.58a782cf.js";import"./html2canvas.esm.0eae2bf4.js";import"./jspdf.es.min.a623ab67.js";import{_ as M,g as p,m as W,a7 as $,o as D,c as B}from"./app.c9f7e288.js";const C={id:"waterfall",class:"waterfall"},L={__name:"Waterfall",props:{gap:{type:Number,required:!0,default:10}},setup(v){const w=v,g=p(0),i=p(!1),x=p(w.gap),d=(t,e)=>parseInt(Math.random()*(e-t+1)+t),y=t=>{var e=d(0,255),n=d(0,255),a=d(0,255);return t?`rgba(${e},${n},${a},${Math.random().toFixed(2)*1})`:`rgba(${e},${n},${a})`},E=(t=5,e=1)=>(Math.floor(Math.random()*(t-e+1))+e)*100,H=t=>{let e=0,n=t[e];for(let a=1;a<t.length;a++)t[a]<n&&(n=t[a],e=a);return e},I=t=>{let e=t[0];for(let n=1;n<t.length;n++)t[n]>e&&(e=t[n]);return e},h=(t=5)=>{const e=document.getElementById("waterfall");return new Promise((n,a)=>{setTimeout(()=>{const o=document.createDocumentFragment();for(let s=0;s<t;s++){const l=document.createElement("div"),r=document.createElement("div");l.className="waterfall-item animate__animated animate__slideInUp",r.className="num",r.textContent=g.value+1,g.value++,l.appendChild(r),l.style.height=E(4,1)+"px",l.style.background=y(),l.style.transitionDelay=`${s/5}s`,o.appendChild(l)}e.appendChild(o),n()},10)})},c=()=>{const t=document.getElementById("waterfall"),e=t.children||[],n=x.value;let a=[],o=0;if(e.length===0)return;const s=t.offsetWidth,l=e[0].offsetWidth,r=parseInt(s/(l+n));for(;o<e.length;){let m,u;if(o<r)m=0,u=(l+n)*o,a.push(e[o].offsetHeight);else{const f=H(a);m=a[f]+n,u=e[f].offsetLeft,a[f]+=e[o].offsetHeight+n}t.style.height=I(a)+"px",e[o].style.top=m+"px",e[o].style.left=u+"px",o++}},b=async()=>{const t=document.documentElement.scrollTop,e=document.documentElement.clientHeight,n=document.body.scrollHeight;t+e>=n-200&&!i.value&&(i.value=!0,await h(),i.value=!1)};return W(async()=>{const t=document.getElementById("waterfall");await h(20),c(),window.addEventListener("resize",_(c,200,!0)),t.addEventListener("DOMSubtreeModified",()=>{c()}),window.onscroll=_(b,200,!0)}),$(()=>{window.removeEventListener("resize",c)}),(t,e)=>(D(),B("div",C))}};var z=M(L,[["__file","Waterfall.vue"]]);export{z as default};