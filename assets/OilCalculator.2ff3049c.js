import{_ as L,f as O,g as m,o as h,c as b,a as e,z as q,V as E,W as k,F as g,j as V,a9 as I,t as o,b as T,e as l,r as M,p as j,k as z}from"./app.985706fc.js";const c=F=>(j("data-v-bdbd0774"),F=F(),z(),F),U={class:"youjia-comp"},W={class:"comp content_box"},P=c(()=>e("div",{class:"content_title"}," \u6CB9\u4EF7\u8BA1\u7B97\u5668 ",-1)),G={class:"tab_title"},H={class:"tab_con"},J={class:"tab_new new-tab-item"},K={class:"item flex-between first-flex-between",style:{"margin-bottom":"0.14rem"}},Q=c(()=>e("span",null,"\u7C7B\u578B",-1)),R={class:"flex-center"},X={name:"",class:"qiyou",id:"qiyou_volume"},Y=["value","data-up"],Z=c(()=>e("div",{class:"onepx"},null,-1)),ee={class:"item flex-between new-item"},ue=c(()=>e("span",null,"\u52A0\u6CB9\u5BB9\u91CF\uFF08L\uFF09",-1)),se=c(()=>e("div",{class:"onepx"},null,-1)),te={class:"query_result query_result1",style:{display:"block"}},oe=c(()=>e("p",null,"\u67E5\u8BE2\u7ED3\u679C",-1)),le=l("\u7C7B\u578B\uFF1A"),ae={class:"sp oi"},ne=l("\u52A0\u6CB9\u5BB9\u91CF\uFF08L\uFF09\uFF1A"),ie={class:"sp vl"},ce=l("\u5355\u4EF7\uFF08\u5143/L\uFF09: "),re={class:"sp"},_e=l("\u6DA8\u8DCC\uFF08\u5143/L\uFF09: "),de={class:"sp"},pe=l("\u82B1\u8D39\u91D1\u989D\uFF08\u5143\uFF09\uFF1A "),ve={class:"sp pr"},Fe=l("\u8F83\u4E0A\u6B21\u6CB9\u4EF7\u53D8\u52A8\u540E"),me={id:"duo_you"},Ce=l("\u82B1\u4E86"),Be={class:"sp up"},he=l("\u5143"),be=c(()=>e("p",{class:"query-tip"},"*\u67E5\u8BE2\u7ED3\u679C\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5B9E\u9645\u4EE5\u5404\u52A0\u6CB9\u7AD9\u4E3A\u51C6",-1)),ye={class:"tab_new new-tab-item"},fe={class:"item flex-between first-flex-between",style:{"margin-bottom":"0.14rem"}},Ee=c(()=>e("span",null,"\u7C7B\u578B",-1)),xe={class:"flex-center"},Ae={name:"",class:"qiyou",id:"qiyou_fee"},De=["value","data-up"],ge=c(()=>e("div",{class:"onepx"},null,-1)),Ne={class:"item flex-between new-item"},we=c(()=>e("span",null,"\u82B1\u8D39\u91D1\u989D\uFF08\u5143\uFF09",-1)),Se=c(()=>e("div",{class:"onepx"},null,-1)),$e={class:"query_result query_result2",style:{display:"block"}},qe=c(()=>e("p",null,"\u67E5\u8BE2\u7ED3\u679C",-1)),ke=l("\u7C7B\u578B\uFF1A"),Ve={class:"sp oi"},Ie=l("\u52A0\u6CB9\u5BB9\u91CF\uFF08L\uFF09\uFF1A"),Le={class:"sp pr"},Oe=l("\u5355\u4EF7\uFF08\u5143/L\uFF09: "),Te={class:"sp"},Me=l("\u6DA8\u8DCC\uFF08\u5143/L\uFF09: "),je={class:"sp"},ze=l("\u82B1\u8D39\u91D1\u989D\uFF08\u5143\uFF09\uFF1A"),Ue={class:"sp vl"},We=l("\u8F83\u4E0A\u6B21\u6CB9\u4EF7\u53D8\u52A8\u540E"),Pe={id:"duo_yuan"},Ge=l("\u52A0\u4E86"),He={class:"sp up"},Je=l("L"),Ke=c(()=>e("p",{class:"query-tip"},"*\u67E5\u8BE2\u7ED3\u679C\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5B9E\u9645\u4EE5\u5404\u52A0\u6CB9\u7AD9\u4E3A\u51C6",-1)),Qe=O({__name:"OilCalculator",props:{oils:{default:()=>[{price:"8.10",rate:"+0.18",name:"92\u53F7\u6C7D\u6CB9"},{price:"8.77",rate:"+0.21",name:"95\u53F7\u6C7D\u6CB9"}]}},setup(F){const N=m(),w=a=>{N.value.warn(a)},C=m("volume"),d=m(""),_=m(""),s=m({type:"92\u53F7\u6C7D\u6CB9",volume:"",price:"",rate:"",fee:"",compareStr:"\u591A",compareFee:""}),t=m({type:"92\u53F7\u6C7D\u6CB9",volume:"",price:"",rate:"",fee:"",compareStr:"\u5C11",compareVolume:""}),S=a=>{C.value=a},y=a=>a.indexOf("+")>-1?[a.slice(0,1),a.slice(1)]:a.indexOf("-")>-1?[a.slice(0,1),a.slice(1)]:a,$=a=>{var n,f;if(a===1){if(((n=d.value)==null?void 0:n.length)===0){w("\u8BF7\u8F93\u5165\u52A0\u6CB9\u5BB9\u91CF\uFF01");return}const u=document.getElementById("qiyou_volume"),r=u.selectedIndex,i=Number(u.options[r].value)*1,p=u.options[r].getAttribute("data-up"),x=u.options[r].text;if(s.value.type=x,s.value.price=`${i}`,s.value.rate=p,s.value.volume=`${d.value}`,s.value.fee=`${(i*Number(d.value)).toFixed(2)}`,Array.isArray(y(p))){const[A,B]=y(p);if(A==="+"){const v=Number((i-Number(B)).toFixed(2));s.value.compareFee=`${((i-v)*Number(d.value)).toFixed(2)}`,s.value.compareStr="\u591A"}else{const v=Number((i+Number(B)).toFixed(2));s.value.compareFee=`${((v-i)*Number(d.value)).toFixed(2)}`,s.value.compareStr="\u5C11"}}else s.value.compareStr="\u591A",s.value.compareFee="0"}else if(a===2){if(((f=_.value)==null?void 0:f.length)===0){w("\u8BF7\u8F93\u5165\u82B1\u8D39\u91D1\u989D\uFF01");return}const u=document.getElementById("qiyou_fee"),r=u.selectedIndex,i=Number(u.options[r].value)*1,p=u.options[r].getAttribute("data-up"),x=u.options[r].text;if(t.value.type=x,t.value.price=`${i}`,t.value.rate=`${p}`,t.value.fee=`${_.value}`,t.value.volume=`${(Number(_.value)/i).toFixed(2)}`,Array.isArray(y(p))){const[A,B]=y(p);if(A==="+"){const v=Number((i-Number(B)).toFixed(2)),D=(Number(_.value)/v-Number(_.value)/i).toFixed(2);t.value.compareVolume=`${D}`,t.value.compareStr="\u5C11"}else{const v=Number((i+Number(B)).toFixed(2)),D=(Number(_.value)/i-Number(_.value)/v).toFixed(2);t.value.compareVolume=`${D}`,t.value.compareStr="\u591A"}}else t.value.compareStr="\u5C11",t.value.compareVolume="0"}};return(a,n)=>{const f=M("Message");return h(),b(g,null,[e("div",U,[e("div",W,[P,e("div",G,[e("span",{class:q({tab_active:C.value==="volume"}),onClick:n[0]||(n[0]=u=>S("volume")),style:{"border-radius":"0.2rem 0.2rem 0.2rem 0px"}},"\u6309\u6CB9\u91CF\u67E5\u8D39\u7528",2),e("span",{class:q({tab_active:C.value==="fee"}),onClick:n[1]||(n[1]=u=>S("fee")),style:{"border-radius":"0px 0.2rem"}},"\u6309\u8D39\u7528\u67E5\u6CB9\u91CF",2)]),e("div",H,[E(e("div",J,[e("div",K,[Q,e("div",R,[e("select",X,[(h(!0),b(g,null,V(F.oils,(u,r)=>(h(),b("option",{key:r,value:u.price,"data-up":u.rate},o(u.name),9,Y))),128))])])]),Z,e("div",ee,[ue,E(e("input",{class:"new-input",type:"text","onUpdate:modelValue":n[2]||(n[2]=u=>d.value=u),placeholder:"\u8BF7\u8F93\u5165\u52A0\u6CB9\u5BB9\u91CF"},null,512),[[I,d.value]])]),se,e("div",{id:"1",class:"query_btn",onClick:n[3]||(n[3]=u=>$(1))},"\u67E5\u8BE2"),e("ul",te,[oe,e("li",null,[le,e("span",ae,o(s.value.type),1)]),e("li",null,[ne,e("span",ie,o(s.value.volume),1)]),e("li",null,[ce,e("span",re,o(s.value.price),1)]),e("li",null,[_e,e("span",de,o(s.value.rate),1)]),e("li",null,[pe,e("span",ve,o(s.value.fee),1)]),e("li",null,[Fe,e("span",me,o(s.value.compareStr),1),Ce,e("span",Be,o(s.value.compareFee),1),he])]),be],512),[[k,C.value==="volume"]]),E(e("div",ye,[e("div",fe,[Ee,e("div",xe,[e("select",Ae,[(h(!0),b(g,null,V(F.oils,(u,r)=>(h(),b("option",{key:r,value:u.price,"data-up":u.rate},o(u.name),9,De))),128))])])]),ge,e("div",Ne,[we,E(e("input",{class:"new-input",type:"text","onUpdate:modelValue":n[4]||(n[4]=u=>_.value=u),placeholder:"\u8BF7\u8F93\u5165\u82B1\u8D39\u91D1\u989D"},null,512),[[I,_.value]])]),Se,e("div",{id:"2",class:"query_btn",onClick:n[5]||(n[5]=u=>$(2))},"\u67E5\u8BE2"),e("ul",$e,[qe,e("li",null,[ke,e("span",Ve,o(t.value.type),1)]),e("li",null,[Ie,e("span",Le,o(t.value.volume),1)]),e("li",null,[Oe,e("span",Te,o(t.value.price),1)]),e("li",null,[Me,e("span",je,o(t.value.rate),1)]),e("li",null,[ze,e("span",Ue,o(t.value.fee),1)]),e("li",null,[We,e("span",Pe,o(t.value.compareStr),1),Ge,e("span",He,o(t.value.compareVolume),1),Je])]),Ke],512),[[k,C.value==="fee"]])])])]),T(f,{ref_key:"message",ref:N,duration:3e3,top:30},null,512)],64)}}});var Xe=L(Qe,[["__scopeId","data-v-bdbd0774"],["__file","OilCalculator.vue"]]);export{Xe as default};
