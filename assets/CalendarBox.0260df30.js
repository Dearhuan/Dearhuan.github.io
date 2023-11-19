import{_ as Y,f as R,g as v,m as k,o as i,c as d,t as r,i as C,a as o,F as f,j as g,z as y}from"./app.4732333c.js";const N={class:"container"},P={key:0,class:"title"},O={class:"year flex-box"},E={class:"months"},j={class:"top flex-box"},z={class:"text"},A={class:"sub-text"},L={class:"bottom flex-box"},V={class:"text"},S={class:"sub-text"},q={class:"sub-total flex-box"},G={class:"sub-item blue"},H={class:"sub-item green"},J={class:"sub-item orange"},K={class:"tooltips flex-box"},Q=R({__name:"CalendarBox",props:{title:{default:""},money:{default:9999},startDate:{default:"2000-05-20"},endDate:{default:"2099-05-20"}},setup(h){const s=h,_=v([]),x=v(0),$=v(0),w=v(0),I=["01","02","03","04","05","06"],M=["07","08","09","10","11","12"],F=v([{color:"blue",name:"total",text:"\u603B\u8BA1"},{color:"gray",name:"other",text:"\u5176\u4ED6"},{color:"green",name:"paid",text:"\u5DF2\u8FD8"},{color:"orange",name:"unpaid",text:"\u5F85\u8FD8"}]),U=(u,l)=>{const e=new Date,c=new Date(s.startDate).getFullYear(),n=new Date(s.startDate).getMonth()+1,t=new Date(s.startDate).getDate();return u.map(m=>{const a=Number(m);let b=!1,p=!1;return(new Date(`${l}-${a}-${e.getDate()}`)<new Date(s.startDate)||new Date(`${l}-${a}-${e.getDate()}`)>new Date(s.endDate))&&(b=!0),new Date(`${l}-${a}-${e.getDate()}`)>new Date(s.startDate)&&new Date(`${l}-${a}-${e.getDate()}`)<new Date(s.endDate)&&(p=!0),new Date(`${l}-${a}-${e.getDate()}`).getMonth()>new Date(`${c}-${n-1}-${t}`).getMonth()&&new Date(`${l}-${a}-${e.getDate()}`)<e&&(p=!0,b=!0),{month:m,isUnRelated:b,isUnFinished:p}})},B=()=>{const u=new Date(s.startDate).getFullYear(),e=new Date(s.endDate).getFullYear()-u+1,c=[];for(let n=0;n<e;n++){const t=u+n,D=U(I,t),m=U(M,t),a={year:t,topOption:D,bottomOption:m,paidItem:0,unPaidItem:0};c.push(a)}return c};return k(()=>{_.value=B();let u=0;_.value.forEach(t=>{let D=0,m=0;t.topOption.forEach(a=>{a.isUnFinished&&a.isUnRelated&&(u++,D++),a.isUnFinished&&!a.isUnRelated&&m++}),t.bottomOption.forEach(a=>{a.isUnFinished&&a.isUnRelated&&(u++,D++),a.isUnFinished&&!a.isUnRelated&&m++}),t.paidItem=D,t.unPaidItem=m}),console.log(_.value,"---"),$.value=u*Number(s.money);const l=new Date(s.startDate),e=new Date(s.endDate),n=(e.getFullYear()-l.getFullYear())*12+e.getMonth()-l.getMonth();x.value=n*Number(s.money),w.value=x.value-$.value,F.value=F.value.map(t=>{const D=t.name==="total"?x.value:t.name==="other"?null:t.name==="paid"?$.value:t.name==="unpaid"?w.value:null;return{color:t.color,name:t.name,text:`${t.text}${D?`(${D})`:""}`}})}),(u,l)=>(i(),d("div",N,[h.title?(i(),d("div",P,r(h.title),1)):C("",!0),o("div",null,[(i(!0),d(f,null,g(_.value,(e,c)=>(i(),d("div",{class:"year-box flex-box",key:c},[o("div",O,r(e.year),1),o("div",E,[o("div",j,[(i(!0),d(f,null,g(e.topOption,(n,t)=>(i(),d("div",{class:y(["month",n.isUnRelated&&!n.isUnFinished?"gray":!n.isUnRelated&&n.isUnFinished?"orange":"green"]),key:t},[o("div",z,r(n.month),1),o("div",A,r(h.money),1)],2))),128))]),o("div",L,[(i(!0),d(f,null,g(e.bottomOption,(n,t)=>(i(),d("div",{class:y(["month",n.isUnRelated&&!n.isUnFinished?"gray":!n.isUnRelated&&n.isUnFinished?"orange":"green"]),key:t},[o("div",V,r(n.month),1),o("div",S,r(h.money),1)],2))),128))])]),o("div",q,[o("div",G,r(`\u603B\u8BA1${e.paidItem+e.unPaidItem}\u671F:${(e.paidItem+e.unPaidItem)*Number(h.money)}`),1),o("div",H,r(`\u5DF2\u8FD8${e.paidItem}\u671F:${(e.paidItem*Number(h.money)).toFixed(2)}`),1),o("div",J,r(`\u5F85\u8FD8${e.unPaidItem}\u671F:${e.unPaidItem*Number(h.money)}`),1)])]))),128))]),o("div",K,[(i(!0),d(f,null,g(F.value,(e,c)=>(i(),d("div",{class:"tooltip",key:c},[o("div",{class:y(["color-block",e.color])},r(e.text),3)]))),128))])]))}});var W=Y(Q,[["__scopeId","data-v-16797cbe"],["__file","CalendarBox.vue"]]);export{W as default};
