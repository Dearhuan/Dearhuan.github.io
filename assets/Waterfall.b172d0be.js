import{u as _}from"./index.58a782cf.js";import{_ as M,f as p,q as W,a7 as $,o as D,c as B}from"./app.38faa2e6.js";const C={id:"waterfall",class:"waterfall"},L={__name:"Waterfall",props:{gap:{type:Number,required:!0,default:10}},setup(v){const w=v,g=p(0),i=p(!1),x=p(w.gap),d=(t,e)=>parseInt(Math.random()*(e-t+1)+t),y=t=>{var e=d(0,255),n=d(0,255),a=d(0,255);return t?`rgba(${e},${n},${a},${Math.random().toFixed(2)*1})`:`rgba(${e},${n},${a})`},E=(t=5,e=1)=>(Math.floor(Math.random()*(t-e+1))+e)*100,H=t=>{let e=0,n=t[e];for(let a=1;a<t.length;a++)t[a]<n&&(n=t[a],e=a);return e},I=t=>{let e=t[0];for(let n=1;n<t.length;n++)t[n]>e&&(e=t[n]);return e},h=(t=5)=>{const e=document.getElementById("waterfall");return new Promise((n,a)=>{setTimeout(()=>{const l=document.createDocumentFragment();for(let s=0;s<t;s++){const o=document.createElement("div"),r=document.createElement("div");o.className="waterfall-item animate__animated animate__slideInUp",r.className="num",r.textContent=g.value+1,g.value++,o.appendChild(r),o.style.height=E(4,1)+"px",o.style.background=y(),o.style.transitionDelay=`${s/5}s`,l.appendChild(o)}e.appendChild(l),n()},10)})},c=()=>{const t=document.getElementById("waterfall"),e=t.children||[],n=x.value;let a=[],l=0;if(e.length===0)return;const s=t.offsetWidth,o=e[0].offsetWidth,r=parseInt(s/(o+n));for(;l<e.length;){let u,m;if(l<r)u=0,m=(o+n)*l,a.push(e[l].offsetHeight);else{const f=H(a);u=a[f]+n,m=e[f].offsetLeft,a[f]+=e[l].offsetHeight+n}t.style.height=I(a)+"px",e[l].style.top=u+"px",e[l].style.left=m+"px",l++}},b=async()=>{const t=document.documentElement.scrollTop,e=document.documentElement.clientHeight,n=document.body.scrollHeight;t+e>=n-200&&!i.value&&(i.value=!0,await h(),i.value=!1)};return W(async()=>{const t=document.getElementById("waterfall");await h(20),c(),window.addEventListener("resize",_(c,200,!0)),t.addEventListener("DOMSubtreeModified",()=>{c()}),window.onscroll=_(b,200,!0)}),$(()=>{window.removeEventListener("resize",c)}),(t,e)=>(D(),B("div",C))}};var R=M(L,[["__file","Waterfall.vue"]]);export{R as default};
