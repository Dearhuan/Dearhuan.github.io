import{u as N,s as S,v as L,g as C,x as _,y as x}from"./app.4732333c.js";var E;const p=typeof window!="undefined",k=e=>typeof e=="string",O=()=>{};p&&((E=window==null?void 0:window.navigator)==null?void 0:E.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function I(e){return typeof e=="function"?e():N(e)}function B(e){return e}function R(e){return S()?(L(e),!0):!1}function f(e){var n;const t=I(e);return(n=t==null?void 0:t.$el)!=null?n:t}const w=p?window:void 0;p&&window.document;p&&window.navigator;p&&window.location;function m(...e){let n,t,s,r;if(k(e[0])?([t,s,r]=e,n=w):[n,t,s,r]=e,!n)return O;let i=O;const u=_(()=>f(n),c=>{i(),c&&(c.addEventListener(t,s,r),i=()=>{c.removeEventListener(t,s,r),i=O})},{immediate:!0,flush:"post"}),l=()=>{u(),i()};return R(l),l}function V(e,n,t={}){const{window:s=w,ignore:r,capture:i=!0,detectIframe:u=!1}=t;if(!s)return;const l=C(!0);let c;const v=o=>{s.clearTimeout(c);const a=f(e);!a||a===o.target||o.composedPath().includes(a)||!l.value||n(o)},Q=o=>r&&r.some(a=>{const d=f(a);return d&&(o.target===d||o.composedPath().includes(d))}),T=[m(s,"click",v,{passive:!0,capture:i}),m(s,"pointerdown",o=>{const a=f(e);l.value=!!a&&!o.composedPath().includes(a)&&!Q(o)},{passive:!0}),m(s,"pointerup",o=>{if(o.button===0){const a=o.composedPath();o.composedPath=()=>a,c=s.setTimeout(()=>v(o),50)}},{passive:!0}),u&&m(s,"blur",o=>{var a;const d=f(e);((a=document.activeElement)==null?void 0:a.tagName)==="IFRAME"&&!(d!=null&&d.contains(document.activeElement))&&n(o)})].filter(Boolean);return()=>T.forEach(o=>o())}const g=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y="__vueuse_ssr_handlers__";g[y]=g[y]||{};g[y];function D(e,n,{window:t=w,initialValue:s=""}={}){const r=C(s),i=x(()=>{var u;return f(n)||((u=t==null?void 0:t.document)==null?void 0:u.documentElement)});return _([i,()=>I(e)],([u,l])=>{var c;if(u&&t){const v=(c=t.getComputedStyle(u).getPropertyValue(l))==null?void 0:c.trim();r.value=v||s}},{immediate:!0}),_(r,u=>{var l;(l=i.value)!=null&&l.style&&i.value.style.setProperty(I(e),u)}),r}var P;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(P||(P={}));var W=Object.defineProperty,h=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?W(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,U=(e,n)=>{for(var t in n||(n={}))A.call(n,t)&&b(e,t,n[t]);if(h)for(var t of h(n))F.call(n,t)&&b(e,t,n[t]);return e};const j={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};U({linear:B},j);export{V as o,D as u};
