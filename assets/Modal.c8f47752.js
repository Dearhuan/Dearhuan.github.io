import{_ as u,f as v,x as y,o as c,h as p,b as n,w as r,U as b,T as w,c as k,a as e,J as a,ab as C,k as B,e as t,r as M}from"./app.444848ef.js";const x={key:0,class:"modal-mask"},N=["onClick"],T={class:"modal-container"},V={class:"modal-header"},S=t("\u6D88\u606F\u63D0\u793A"),$={class:"modal-body"},O=t("\u6D88\u606F\u5185\u5BB9"),g={class:"modal-footer"},E=t(" default footer "),J=t("OK"),K={__name:"Modal",props:{show:Boolean},emits:{close:s=>s},setup(s,{emit:_}){const i=s,l=o=>{_("close",o)},d=v("");y(()=>i.show,o=>{o?m():f()});const m=()=>{d.value=document.body.style.overflow,document.body.style.overflow="hidden"},f=()=>{document.body.style.overflow=d.value};return(o,U)=>{const h=M("my-button");return c(),p(w,{to:"body"},[n(b,{name:"modal"},{default:r(()=>[s.show?(c(),k("div",x,[e("div",{class:"modal-wrapper",onClick:C(l,["self"])},[e("div",T,[e("div",V,[a(o.$slots,"header",{},()=>[S])]),e("div",$,[a(o.$slots,"body",{},()=>[O])]),e("div",g,[a(o.$slots,"footer",{},()=>[E,n(h,{type:"primary",class:"modal-default-button",onClick:l},{default:r(()=>[J]),_:1})])])])],8,N)])):B("",!0)]),_:3})])}}};var q=u(K,[["__file","Modal.vue"]]);export{q as default};
