import{_ as w,r as R,o as n,c as i,b as L,f as S,D as P,y as h,E as pe,u as e,F as I,j as A,a as b,t as T,i as y,G as W,H as J,q as C,h as B,I as ve,J as $,e as j,K as Y,L as Be,M as Ne,N as He,O as Q,P as Z,z as E,Q as q,R as he,S as me,B as fe,C as H,U as be,g as z,x as ge,V as G,W as X,X as Ie,Y as Me,Z as ee,$ as ke,a0 as $e,d as De,m as te,A as Pe,a1 as K,a2 as ae,a3 as Ee,a4 as Re,n as Ae,a5 as Oe,a6 as Fe,a7 as ze,a8 as We}from"./app.14436e50.js";const Ue={},Ve={class:"theme-default-content"};function Ke(v,a){const t=R("Content");return n(),i("div",Ve,[L(t)])}var je=w(Ue,[["render",Ke],["__file","HomeContent.vue"]]);const qe={key:0,class:"features"},Ge=S({__name:"HomeFeatures",setup(v){const a=P(),t=h(()=>pe(a.value.features)?a.value.features:[]);return(u,o)=>e(t).length?(n(),i("div",qe,[(n(!0),i(I,null,A(e(t),_=>(n(),i("div",{key:_.title,class:"feature"},[b("h2",null,T(_.title),1),b("p",null,T(_.details),1)]))),128))])):y("",!0)}});var Xe=w(Ge,[["__file","HomeFeatures.vue"]]);const Ye=["innerHTML"],Je=["textContent"],Qe=S({__name:"HomeFooter",setup(v){const a=P(),t=h(()=>a.value.footer),u=h(()=>a.value.footerHtml);return(o,_)=>e(t)?(n(),i(I,{key:0},[e(u)?(n(),i("div",{key:0,class:"footer",innerHTML:e(t)},null,8,Ye)):(n(),i("div",{key:1,class:"footer",textContent:T(e(t))},null,8,Je))],64)):y("",!0)}});var Ze=w(Qe,[["__file","HomeFooter.vue"]]);const et=["href","rel","target","aria-label"],tt=S({inheritAttrs:!1}),at=S({...tt,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(v){const a=v,t=W(),u=He(),{item:o}=J(a),_=h(()=>Y(o.value.link)),f=h(()=>Be(o.value.link)||Ne(o.value.link)),c=h(()=>{if(!f.value){if(o.value.target)return o.value.target;if(_.value)return"_blank"}}),r=h(()=>c.value==="_blank"),s=h(()=>!_.value&&!f.value&&!r.value),l=h(()=>{if(!f.value){if(o.value.rel)return o.value.rel;if(r.value)return"noopener noreferrer"}}),p=h(()=>o.value.ariaLabel||o.value.text),d=h(()=>{const k=Object.keys(u.value.locales);return k.length?!k.some(m=>m===o.value.link):o.value.link!=="/"}),g=h(()=>d.value?t.path.startsWith(o.value.link):!1),x=h(()=>s.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(t.path):g.value:!1);return(k,m)=>{const N=R("RouterLink"),M=R("AutoLinkExternalIcon");return e(s)?(n(),C(N,ve({key:0,class:{"router-link-active":e(x)},to:e(o).link,"aria-label":e(p)},k.$attrs),{default:B(()=>[$(k.$slots,"before"),j(" "+T(e(o).text)+" ",1),$(k.$slots,"after")]),_:3},16,["class","to","aria-label"])):(n(),i("a",ve({key:1,class:"external-link",href:e(o).link,rel:e(l),target:e(c),"aria-label":e(p)},k.$attrs),[$(k.$slots,"before"),j(" "+T(e(o).text)+" ",1),e(r)?(n(),C(M,{key:0})):y("",!0),$(k.$slots,"after")],16,et))}}});var D=w(at,[["__file","AutoLink.vue"]]);const nt={class:"hero"},ot={key:0,id:"main-title"},rt={key:1,class:"description"},st={key:2,class:"actions"},lt=S({__name:"HomeHero",setup(v){const a=P(),t=Q(),u=Z(),o=h(()=>u.value&&a.value.heroImageDark!==void 0?a.value.heroImageDark:a.value.heroImage),_=h(()=>a.value.heroText===null?null:a.value.heroText||t.value.title||"Hello"),f=h(()=>a.value.heroAlt||_.value||"hero"),c=h(()=>a.value.tagline===null?null:a.value.tagline||t.value.description||"Welcome to your VuePress site"),r=h(()=>pe(a.value.actions)?a.value.actions.map(({text:l,link:p,type:d="primary"})=>({text:l,link:p,type:d})):[]),s=()=>{if(!o.value)return null;const l=q("img",{src:he(o.value),alt:f.value});return a.value.heroImageDark===void 0?l:q(me,()=>l)};return(l,p)=>(n(),i("header",nt,[L(s),e(_)?(n(),i("h1",ot,T(e(_)),1)):y("",!0),e(c)?(n(),i("p",rt,T(e(c)),1)):y("",!0),e(r).length?(n(),i("p",st,[(n(!0),i(I,null,A(e(r),d=>(n(),C(D,{key:d.text,class:E(["action-button",[d.type]]),item:d},null,8,["class","item"]))),128))])):y("",!0)]))}});var ut=w(lt,[["__file","HomeHero.vue"]]);const it={class:"home"},ct=S({__name:"Home",setup(v){return(a,t)=>(n(),i("main",it,[L(ut),L(Xe),L(je),L(Ze)]))}});var dt=w(ct,[["__file","Home.vue"]]);const vt=S({__name:"NavbarBrand",setup(v){const a=fe(),t=Q(),u=H(),o=Z(),_=h(()=>u.value.home||a.value),f=h(()=>t.value.title),c=h(()=>o.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),r=()=>{if(!c.value)return null;const s=q("img",{class:"logo",src:he(c.value),alt:f.value});return u.value.logoDark===void 0?s:q(me,()=>s)};return(s,l)=>{const p=R("RouterLink");return n(),C(p,{to:e(_)},{default:B(()=>[L(r),e(f)?(n(),i("span",{key:0,class:E(["site-name",{"can-hide":e(c)}])},T(e(f)),3)):y("",!0)]),_:1},8,["to"])}}});var _t=w(vt,[["__file","NavbarBrand.vue"]]);const pt=S({__name:"DropdownTransition",setup(v){const a=u=>{u.style.height=u.scrollHeight+"px"},t=u=>{u.style.height=""};return(u,o)=>(n(),C(be,{name:"dropdown",onEnter:a,onAfterEnter:t,onBeforeLeave:a},{default:B(()=>[$(u.$slots,"default")]),_:3}))}});var Le=w(pt,[["__file","DropdownTransition.vue"]]);const ht=["aria-label"],mt={class:"title"},ft=b("span",{class:"arrow down"},null,-1),bt=["aria-label"],gt={class:"title"},kt={class:"navbar-dropdown"},$t={class:"navbar-dropdown-subtitle"},Lt={key:1},yt={class:"navbar-dropdown-subitem-wrapper"},wt=S({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(v){const a=v,{item:t}=J(a),u=h(()=>t.value.ariaLabel||t.value.text),o=z(!1),_=W();ge(()=>_.path,()=>{o.value=!1});const f=r=>{r.detail===0?o.value=!o.value:o.value=!1},c=(r,s)=>s[s.length-1]===r;return(r,s)=>(n(),i("div",{class:E(["navbar-dropdown-wrapper",{open:o.value}])},[b("button",{class:"navbar-dropdown-title",type:"button","aria-label":e(u),onClick:f},[b("span",mt,T(e(t).text),1),ft],8,ht),b("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":e(u),onClick:s[0]||(s[0]=l=>o.value=!o.value)},[b("span",gt,T(e(t).text),1),b("span",{class:E(["arrow",o.value?"down":"right"])},null,2)],8,bt),L(Le,null,{default:B(()=>[G(b("ul",kt,[(n(!0),i(I,null,A(e(t).children,l=>(n(),i("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(n(),i(I,{key:0},[b("h4",$t,[l.link?(n(),C(D,{key:0,item:l,onFocusout:p=>c(l,e(t).children)&&l.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(n(),i("span",Lt,T(l.text),1))]),b("ul",yt,[(n(!0),i(I,null,A(l.children,p=>(n(),i("li",{key:p.link,class:"navbar-dropdown-subitem"},[L(D,{item:p,onFocusout:d=>c(p,l.children)&&c(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(n(),C(D,{key:1,item:l,onFocusout:p=>c(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[X,o.value]])]),_:1})],2))}});var St=w(wt,[["__file","NavbarDropdown.vue"]]);const _e=v=>decodeURI(v).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ct=(v,a)=>{if(a.hash===v)return!0;const t=_e(a.path),u=_e(v);return t===u},ye=(v,a)=>v.link&&Ct(v.link,a)?!0:v.children?v.children.some(t=>ye(t,a)):!1,we=v=>!Y(v)||/github\.com/.test(v)?"GitHub":/bitbucket\.org/.test(v)?"Bitbucket":/gitlab\.com/.test(v)?"GitLab":/gitee\.com/.test(v)?"Gitee":null,Tt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},xt=({docsRepo:v,editLinkPattern:a})=>{if(a)return a;const t=we(v);return t!==null?Tt[t]:null},Bt=({docsRepo:v,docsBranch:a,docsDir:t,filePathRelative:u,editLinkPattern:o})=>{if(!u)return null;const _=xt({docsRepo:v,editLinkPattern:o});return _?_.replace(/:repo/,Y(v)?v:`https://github.com/${v}`).replace(/:branch/,a).replace(/:path/,Ie(`${Me(t)}/${u}`)):null},Nt={key:0,class:"navbar-items"},Ht=S({__name:"NavbarItems",setup(v){const a=()=>{const s=ee(),l=fe(),p=Q(),d=H();return h(()=>{var M,O,F;const g=Object.keys(p.value.locales);if(g.length<2)return[];const x=s.currentRoute.value.path,k=s.currentRoute.value.fullPath,m=s.currentRoute.value.hash;return[{text:(M=d.value.selectLanguageText)!=null?M:"unknown language",ariaLabel:(F=(O=d.value.selectLanguageAriaLabel)!=null?O:d.value.selectLanguageText)!=null?F:"unknown language",children:g.map(U=>{var re,se,le,ue,ie,ce;const Ce=(se=(re=p.value.locales)==null?void 0:re[U])!=null?se:{},ne=(ue=(le=d.value.locales)==null?void 0:le[U])!=null?ue:{},oe=`${Ce.lang}`,Te=(ie=ne.selectLanguageName)!=null?ie:oe;let V;if(oe===p.value.lang)V=k;else{const de=x.replace(l.value,U);s.getRoutes().some(xe=>xe.path===de)?V=`${de}${m}`:V=(ce=ne.home)!=null?ce:U}return{text:Te,link:V}})}]})},t=()=>{const s=H(),l=h(()=>s.value.repo),p=h(()=>l.value?we(l.value):null),d=h(()=>l.value&&!Y(l.value)?`https://github.com/${l.value}`:l.value),g=h(()=>d.value?s.value.repoLabel?s.value.repoLabel:p.value===null?"Source":p.value:null);return h(()=>!d.value||!g.value?[]:[{text:g.value,link:d.value}])},u=s=>ke(s)?$e(s):s.children?{...s,children:s.children.map(u)}:s,_=(()=>{const s=H();return h(()=>(s.value.navbar||[]).map(u))})(),f=a(),c=t(),r=h(()=>[..._.value,...f.value,...c.value]);return(s,l)=>e(r).length?(n(),i("nav",Nt,[(n(!0),i(I,null,A(e(r),p=>(n(),i("div",{key:p.text,class:"navbar-item"},[p.children?(n(),C(St,{key:0,item:p},null,8,["item"])):(n(),C(D,{key:1,item:p},null,8,["item"]))]))),128))])):y("",!0)}});var Se=w(Ht,[["__file","NavbarItems.vue"]]);const It=["title"],Mt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Dt=De('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Pt=[Dt],Et={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Rt=b("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),At=[Rt],Ot=S({__name:"ToggleColorModeButton",setup(v){const a=H(),t=Z(),u=()=>{t.value=!t.value};return(o,_)=>(n(),i("button",{class:"toggle-color-mode-button",title:e(a).toggleColorMode,onClick:u},[G((n(),i("svg",Mt,Pt,512)),[[X,!e(t)]]),G((n(),i("svg",Et,At,512)),[[X,e(t)]])],8,It))}});var Ft=w(Ot,[["__file","ToggleColorModeButton.vue"]]);const zt=["title"],Wt=b("div",{class:"icon","aria-hidden":"true"},[b("span"),b("span"),b("span")],-1),Ut=[Wt],Vt=S({__name:"ToggleSidebarButton",emits:["toggle"],setup(v){const a=H();return(t,u)=>(n(),i("div",{class:"toggle-sidebar-button",title:e(a).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=o=>t.$emit("toggle"))},Ut,8,zt))}});var Kt=w(Vt,[["__file","ToggleSidebarButton.vue"]]);const jt=S({__name:"Navbar",emits:["toggle-sidebar"],setup(v){const a=H(),t=z(null),u=z(null),o=z(0),_=h(()=>o.value?{maxWidth:o.value+"px"}:{});te(()=>{const r=f(t.value,"paddingLeft")+f(t.value,"paddingRight"),s=()=>{var l;window.innerWidth<=719?o.value=0:o.value=t.value.offsetWidth-r-(((l=u.value)==null?void 0:l.offsetWidth)||0)};s(),window.addEventListener("resize",s,!1),window.addEventListener("orientationchange",s,!1)});function f(c,r){var p,d,g;const s=(g=(d=(p=c==null?void 0:c.ownerDocument)==null?void 0:p.defaultView)==null?void 0:d.getComputedStyle(c,null))==null?void 0:g[r],l=Number.parseInt(s,10);return Number.isNaN(l)?0:l}return(c,r)=>{const s=R("NavbarSearch");return n(),i("header",{ref_key:"navbar",ref:t,class:"navbar"},[L(Kt,{onToggle:r[0]||(r[0]=l=>c.$emit("toggle-sidebar"))}),b("span",{ref_key:"navbarBrand",ref:u},[L(_t)],512),b("div",{class:"navbar-items-wrapper",style:Pe(e(_))},[$(c.$slots,"before"),L(Se,{class:"can-hide"}),$(c.$slots,"after"),e(a).colorModeSwitch?(n(),C(Ft,{key:0})):y("",!0),L(s)],4)],512)}}});var qt=w(jt,[["__file","Navbar.vue"]]);const Gt={class:"page-meta"},Xt={key:0,class:"meta-item edit-link"},Yt={key:1,class:"meta-item last-updated"},Jt={class:"meta-item-label"},Qt={class:"meta-item-info"},Zt={key:2,class:"meta-item contributors"},ea={class:"meta-item-label"},ta={class:"meta-item-info"},aa=["title"],na=j(", "),oa=S({__name:"PageMeta",setup(v){const a=()=>{const r=H(),s=K(),l=P();return h(()=>{var M,O,F;if(!((O=(M=l.value.editLink)!=null?M:r.value.editLink)!=null?O:!0))return null;const{repo:d,docsRepo:g=d,docsBranch:x="main",docsDir:k="",editLinkText:m}=r.value;if(!g)return null;const N=Bt({docsRepo:g,docsBranch:x,docsDir:k,filePathRelative:s.value.filePathRelative,editLinkPattern:(F=l.value.editLinkPattern)!=null?F:r.value.editLinkPattern});return N?{text:m!=null?m:"Edit this page",link:N}:null})},t=()=>{const r=H(),s=K(),l=P();return h(()=>{var g,x,k,m;return!((x=(g=l.value.lastUpdated)!=null?g:r.value.lastUpdated)!=null?x:!0)||!((k=s.value.git)!=null&&k.updatedTime)?null:new Date((m=s.value.git)==null?void 0:m.updatedTime).toLocaleString()})},u=()=>{const r=H(),s=K(),l=P();return h(()=>{var d,g,x,k;return((g=(d=l.value.contributors)!=null?d:r.value.contributors)!=null?g:!0)&&(k=(x=s.value.git)==null?void 0:x.contributors)!=null?k:null})},o=H(),_=a(),f=t(),c=u();return(r,s)=>{const l=R("ClientOnly");return n(),i("footer",Gt,[e(_)?(n(),i("div",Xt,[L(D,{class:"meta-item-label",item:e(_)},null,8,["item"])])):y("",!0),e(f)?(n(),i("div",Yt,[b("span",Jt,T(e(o).lastUpdatedText)+": ",1),L(l,null,{default:B(()=>[b("span",Qt,T(e(f)),1)]),_:1})])):y("",!0),e(c)&&e(c).length?(n(),i("div",Zt,[b("span",ea,T(e(o).contributorsText)+": ",1),b("span",ta,[(n(!0),i(I,null,A(e(c),(p,d)=>(n(),i(I,{key:d},[b("span",{class:"contributor",title:`email: ${p.email}`},T(p.name),9,aa),d!==e(c).length-1?(n(),i(I,{key:0},[na],64)):y("",!0)],64))),128))])])):y("",!0)])}}});var ra=w(oa,[["__file","PageMeta.vue"]]);const sa={key:0,class:"page-nav"},la={class:"inner"},ua={key:0,class:"prev"},ia={key:1,class:"next"},ca=S({__name:"PageNav",setup(v){const a=r=>r===!1?null:ke(r)?$e(r):Ee(r)?r:!1,t=(r,s,l)=>{const p=r.findIndex(d=>d.link===s);if(p!==-1){const d=r[p+l];return d!=null&&d.link?d:null}for(const d of r)if(d.children){const g=t(d.children,s,l);if(g)return g}return null},u=P(),o=ae(),_=W(),f=h(()=>{const r=a(u.value.prev);return r!==!1?r:t(o.value,_.path,-1)}),c=h(()=>{const r=a(u.value.next);return r!==!1?r:t(o.value,_.path,1)});return(r,s)=>e(f)||e(c)?(n(),i("nav",sa,[b("p",la,[e(f)?(n(),i("span",ua,[L(D,{item:e(f)},null,8,["item"])])):y("",!0),e(c)?(n(),i("span",ia,[L(D,{item:e(c)},null,8,["item"])])):y("",!0)])])):y("",!0)}});var da=w(ca,[["__file","PageNav.vue"]]);const va={class:"page"},_a={class:"theme-default-content"},pa=S({__name:"Page",setup(v){return(a,t)=>{const u=R("Content");return n(),i("main",va,[$(a.$slots,"top"),b("div",_a,[$(a.$slots,"content-top"),L(u),$(a.$slots,"content-bottom")]),L(ra),L(da),$(a.$slots,"bottom")])}}});var ha=w(pa,[["__file","Page.vue"]]);const ma=["onKeydown"],fa={class:"sidebar-item-children"},ba=S({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(v){const a=v,{item:t,depth:u}=J(a),o=W(),_=ee(),f=h(()=>ye(t.value,o)),c=h(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:f.value,collapsible:t.value.collapsible})),[r,s]=Re(f.value),l=d=>{t.value.collapsible&&(d.preventDefault(),s())},p=_.afterEach(d=>{Ae(()=>{r.value=t.value.collapsible?f.value:!0})});return Oe(()=>{p()}),(d,g)=>{var k;const x=R("SidebarItem",!0);return n(),i("li",null,[e(t).link?(n(),C(D,{key:0,class:E(e(c)),item:e(t)},null,8,["class","item"])):(n(),i("p",{key:1,tabindex:"0",class:E(e(c)),onClick:l,onKeydown:Fe(l,["enter"])},[j(T(e(t).text)+" ",1),e(t).collapsible?(n(),i("span",{key:0,class:E(["arrow",e(r)?"down":"right"])},null,2)):y("",!0)],42,ma)),(k=e(t).children)!=null&&k.length?(n(),C(Le,{key:2},{default:B(()=>[G(b("ul",fa,[(n(!0),i(I,null,A(e(t).children,m=>(n(),C(x,{key:`${e(u)}${m.text}${m.link}`,item:m,depth:e(u)+1},null,8,["item","depth"]))),128))],512),[[X,e(r)]])]),_:1})):y("",!0)])}}});var ga=w(ba,[["__file","SidebarItem.vue"]]);const ka={key:0,class:"sidebar-items"},$a=S({__name:"SidebarItems",setup(v){const a=W(),t=ae();return te(()=>{ge(()=>a.hash,u=>{const o=document.querySelector(".sidebar");if(!o)return;const _=document.querySelector(`.sidebar a.sidebar-item[href="${a.path}${u}"]`);if(!_)return;const{top:f,height:c}=o.getBoundingClientRect(),{top:r,height:s}=_.getBoundingClientRect();r<f?_.scrollIntoView(!0):r+s>f+c&&_.scrollIntoView(!1)})}),(u,o)=>e(t).length?(n(),i("ul",ka,[(n(!0),i(I,null,A(e(t),_=>(n(),C(ga,{key:`${_.text}${_.link}`,item:_},null,8,["item"]))),128))])):y("",!0)}});var La=w($a,[["__file","SidebarItems.vue"]]);const ya={class:"sidebar"},wa=S({__name:"Sidebar",setup(v){return(a,t)=>(n(),i("aside",ya,[L(Se),$(a.$slots,"top"),L(La),$(a.$slots,"bottom")]))}});var Sa=w(wa,[["__file","Sidebar.vue"]]);const Ca=S({__name:"Layout",setup(v){const a=K(),t=P(),u=H(),o=h(()=>t.value.navbar!==!1&&u.value.navbar!==!1),_=ae(),f=z(!1),c=m=>{f.value=typeof m=="boolean"?m:!f.value},r={x:0,y:0},s=m=>{r.x=m.changedTouches[0].clientX,r.y=m.changedTouches[0].clientY},l=m=>{const N=m.changedTouches[0].clientX-r.x,M=m.changedTouches[0].clientY-r.y;Math.abs(N)>Math.abs(M)&&Math.abs(N)>40&&(N>0&&r.x<=80?c(!0):c(!1))},p=h(()=>[{"no-navbar":!o.value,"no-sidebar":!_.value.length,"sidebar-open":f.value},t.value.pageClass]);let d;te(()=>{d=ee().afterEach(()=>{c(!1)})}),ze(()=>{d()});const g=We(),x=g.resolve,k=g.pending;return(m,N)=>(n(),i("div",{class:E(["theme-container",e(p)]),onTouchstart:s,onTouchend:l},[$(m.$slots,"navbar",{},()=>[e(o)?(n(),C(qt,{key:0,onToggleSidebar:c},{before:B(()=>[$(m.$slots,"navbar-before")]),after:B(()=>[$(m.$slots,"navbar-after")]),_:3})):y("",!0)]),b("div",{class:"sidebar-mask",onClick:N[0]||(N[0]=M=>c(!1))}),$(m.$slots,"sidebar",{},()=>[L(Sa,null,{top:B(()=>[$(m.$slots,"sidebar-top")]),bottom:B(()=>[$(m.$slots,"sidebar-bottom")]),_:3})]),$(m.$slots,"page",{},()=>[e(t).home?(n(),C(dt,{key:0})):(n(),C(be,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(x),onBeforeLeave:e(k)},{default:B(()=>[(n(),C(ha,{key:e(a).path},{top:B(()=>[$(m.$slots,"page-top")]),"content-top":B(()=>[$(m.$slots,"page-content-top")]),"content-bottom":B(()=>[$(m.$slots,"page-content-bottom")]),bottom:B(()=>[$(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var xa=w(Ca,[["__file","Layout.vue"]]);export{xa as default};
