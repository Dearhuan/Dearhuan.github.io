import{_ as H,g as w,o as T,c as V,b as g,h as p,r as F,a as _,V as b,a9 as k,e as v}from"./app.2480290c.js";import I from"./html2canvas.esm.0eae2bf4.js";import{E as R}from"./jspdf.es.min.41285e32.js";const B=()=>({getPdf:(h,y)=>{I(y,{allowTaint:!0,useCORS:!0,dpi:window.devicePixelRatio*4,background:"#FFFFFF"}).then(d=>{var t=d.height,a=595.28,u=841.89,s=Math.floor(d.width/a*u),l=0,c=d.toDataURL("image/jpeg",1),e=new R("p","pt","a4"),f=1,i=document.createElement("canvas"),o;e.setDisplayMode("fullwidth","continuous","FullScreen");function r(n){if(console.log(t,s),t>0){f++;var P=0;if(t>s){var m=l+s;for(m=l+s;m>=l;m--){for(var C=!0,x=0;x<n.width;x++){var M=n.getContext("2d").getImageData(x,m,1,1).data;if(M[0]!=255||M[1]!=255||M[2]!=255){C=!1;break}}if(C){if(P++,P>=10)break}else P=0}o=Math.round(m-l)||Math.min(t,s),o<=0&&(o=s)}else o=t;i.width=n.width,i.height=o,console.log(f,"height:",o,"pos",l);var D=i.getContext("2d");D==null||D.drawImage(n,0,l,n.width,o,0,0,n.width,o),Math.round(a/n.width*o),l!=0&&e.addPage(),e.addImage(i.toDataURL("image/jpeg",1),"JPEG",10,10,a,a/i.width*o),t-=o,l+=o,t>0?setTimeout(r,500,n):e.save(h+".pdf")}}if(t<s)e.addImage(c,"JPEG",0,0,a,a/d.width*t),e.save(h+".pdf");else try{e.deletePage(0),setTimeout(r,500,d)}catch{}})}}),S=v("\u5BFC\u51FAPDF"),U=_("h3",null,"\u5BFC\u51FAPDF",-1),N={style:{display:"flex","flex-wrap":"wrap"}},q=v(" \u5BFC\u51FA\u6807\u9898\uFF1A"),G=v(" \u5BB9\u5668\u5143\u7D20\uFF1A"),J={style:{display:"flex","justify-content":"flex-end"}},L=v("\u786E\u8BA4"),O=v("\u5173\u95ED"),$={__name:"HtmlPdf",setup(E){const h=w(),y=c=>{h.value.warn(c)},{getPdf:d}=B(),t=w(!1),a=w("\u6807\u9898"),u=w("#app"),s=()=>{t.value=!1},l=()=>{if(!document.querySelector(u.value)){y("\u8BF7\u8F93\u5165\u6B63\u786E\u7684DOM\u5143\u7D20\uFF01");return}d(a.value,document.querySelector(u.value)),t.value=!1};return(c,e)=>{const f=F("my-button"),i=F("Modal"),o=F("Message");return T(),V("div",null,[g(f,{type:"primary",onClick:e[0]||(e[0]=r=>t.value=!0)},{default:p(()=>[S]),_:1}),g(i,{show:t.value,onClose:e[3]||(e[3]=r=>t.value=!1)},{header:p(()=>[U]),body:p(()=>[_("div",N,[q,b(_("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=r=>a.value=r)},null,512),[[k,a.value]]),G,b(_("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=r=>u.value=r)},null,512),[[k,u.value]])])]),footer:p(()=>[_("div",J,[g(f,{type:"primary",onClick:l},{default:p(()=>[L]),_:1}),g(f,{type:"error",onClick:s},{default:p(()=>[O]),_:1})])]),_:1},8,["show"]),g(o,{ref_key:"message",ref:h,duration:3e3,top:30},null,512)])}}};var K=H($,[["__file","HtmlPdf.vue"]]);export{K as default};
