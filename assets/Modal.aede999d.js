import{_ as u,g as v,x as y,o as c,q as p,b as n,h as r,U as b,T as w,c as k,a as e,J as a,ab as C,i as B,e as t,r as M}from"./app.8a354dde.js";const x={key:0,class:"modal-mask"},N=["onClick"],T={class:"modal-container"},V={class:"modal-header"},S=t("\u6D88\u606F\u63D0\u793A"),$={class:"modal-body"},g=t("\u6D88\u606F\u5185\u5BB9"),O={class:"modal-footer"},q=t(" default footer "),E=t("OK"),J={__name:"Modal",props:{show:Boolean},emits:{close:s=>s},setup(s,{emit:_}){const i=s,l=o=>{_("close",o)},d=v("");y(()=>i.show,o=>{o?m():h()});const m=()=>{d.value=document.body.style.overflow,document.body.style.overflow="hidden"},h=()=>{document.body.style.overflow=d.value};return(o,K)=>{const f=M("my-button");return c(),p(w,{to:"body"},[n(b,{name:"modal"},{default:r(()=>[s.show?(c(),k("div",x,[e("div",{class:"modal-wrapper",onClick:C(l,["self"])},[e("div",T,[e("div",V,[a(o.$slots,"header",{},()=>[S])]),e("div",$,[a(o.$slots,"body",{},()=>[g])]),e("div",O,[a(o.$slots,"footer",{},()=>[q,n(f,{type:"primary",class:"modal-default-button",onClick:l},{default:r(()=>[E]),_:1})])])])],8,N)])):B("",!0)]),_:3})])}}};var j=u(J,[["__file","Modal.vue"]]);export{j as default};
