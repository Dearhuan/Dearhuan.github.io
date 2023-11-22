import{_ as M,f as P,g as m,o as a,c as i,a as e,b as p,h as y,F as C,j as $,e as F,r as E,t as n,z as L}from"./app.dfc8b140.js";const S={class:"oil-calculator"},b={class:"calculator"},D={class:"calculator-item input-item"},O=F(" \u6CB9\u8017:"),U={class:"calculator-item input-item"},I=F(" \u6CB9\u4EF7:"),w={class:"calculator-item input-item"},R=F(" \u5BB9\u79EF:"),z={class:"calculator-item calculator-btns"},q=F("\u8BA1\u7B97"),G=F("\u91CD\u7F6E"),H={class:"oil-examples"},J={class:"title"},K={class:"desc"},Q=P({__name:"OilPriceCalculator",props:{consumption:{default:5},price:{default:7},volume:{default:48.5}},setup(c){const k={NUMS:["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],LETTERS:["A","B","C","D","E","F"]},l=m(),r=m(),v=m(),x=m([{title:"\u5E02\u533A\u672A\u5F00\u7A7A\u8C03",list:[{consumption:4.5},{consumption:5.3}]},{title:"\u5E02\u533A\u5F00\u7A7A\u8C03",list:[{consumption:5.9},{consumption:6.8}]}]);x.value=x.value.map(s=>({title:s.title,list:[...s.list].concat([{consumption:s.list.reduce((u,o)=>u+o.consumption,0)/2}])}));const T=m(),B=s=>{T.value.warn(s)},A=m([]),h=()=>{if(!l.value){B("\u8BF7\u8F93\u5165\u6CB9\u8017\uFF01");return}if(!r.value){B("\u8BF7\u8F93\u5165\u6CB9\u4EF7\uFF01");return}if(!v.value){B("\u8BF7\u8F93\u5165\u5BB9\u79EF\uFF01");return}const s=`${l.value}L/100km`,u=`${l.value}*${r.value}/100=${(l.value*r.value/100).toFixed(2)}r/km`,o=`${v.value}/${l.value}*100=${(v.value/l.value*100).toFixed(2)}km`;A.value.push({oilConsumptionTxt:s,oilPriceTxt:u,oilVolumeTxt:o})},N=()=>{l.value=null,r.value=null,v.value=null};return(s,u)=>{const o=E("InputNumber"),g=E("MyButton"),V=E("Message");return a(),i(C,null,[e("div",S,[e("div",b,[e("div",D,[O,p(o,{value:l.value,"onUpdate:value":u[0]||(u[0]=t=>l.value=t),min:1,max:20},null,8,["value"])]),e("div",U,[I,p(o,{value:r.value,"onUpdate:value":u[1]||(u[1]=t=>r.value=t),min:5,max:20},null,8,["value"])]),e("div",w,[R,p(o,{value:v.value,"onUpdate:value":u[2]||(u[2]=t=>v.value=t),min:20,max:100,step:1},null,8,["value"])]),e("div",z,[p(g,{type:"primary",onClick:u[3]||(u[3]=t=>h())},{default:y(()=>[q]),_:1}),p(g,{onClick:u[4]||(u[4]=t=>N())},{default:y(()=>[G]),_:1})]),(a(!0),i(C,null,$(A.value,(t,d)=>(a(),i("div",{class:"calculator-item calculator-desc",key:d},[e("span",null,n(t.oilConsumptionTxt),1),e("span",null,n(t.oilPriceTxt),1),e("span",null,n(t.oilVolumeTxt),1)]))),128))]),e("div",H,[(a(!0),i(C,null,$(x.value,(t,d)=>(a(),i("div",{class:L(["examples",d%2==0?"orange":"blue"]),key:d},[e("div",J,[e("span",null,n(`\u573A\u666F${k.NUMS[d]}(${t.title})`),1),e("span",null,n(`${c.price*c.volume}r`),1)]),(a(!0),i(C,null,$(t.list,(_,f)=>(a(),i("div",{class:"example",key:f},[e("div",K,[e("span",null,n(f===t.list.length-1?"AV":k.LETTERS[f]),1),e("span",null,n(_.consumption)+"L/100km",1),e("span",null,n(`${_.consumption}*${c.price}/100=${(_.consumption*c.price/100).toFixed(2)}r/km`),1),e("span",null,n(`${c.volume}/${_.consumption}*100=${(c.volume/_.consumption*100).toFixed(0)}km`),1)])]))),128))],2))),128))])]),p(V,{ref_key:"message",ref:T,duration:3e3,top:30},null,512)],64)}}});var X=M(Q,[["__scopeId","data-v-7837a603"],["__file","OilPriceCalculator.vue"]]);export{X as default};
