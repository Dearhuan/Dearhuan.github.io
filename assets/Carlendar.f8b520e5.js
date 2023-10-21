import{M as Y,a as $,m as b,d as N}from"./index.c3856a1a.js";import{_ as L,f as w,m as V,y as A,x as B,o as u,c as d,a as s,t as p,u as k,F as D,g as y,z as M,p as E,l as P}from"./app.62e94827.js";const C=c=>(E("data-v-7fc7250c"),c=c(),P(),c),R={class:"diy-calendar-wrapper"},z={class:"calendar-header"},X=C(()=>s("svg",{width:"30",height:"30"},[s("path",{d:"M 19,9 L 11,15 18,21",stroke:"rgba(95,147,238,0.3)",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),q=[X],G={class:"center-title"},H=C(()=>s("svg",{width:"30",height:"30"},[s("path",{d:"M 11,9 L 18,15 11,21",stroke:"rgba(95,147,238,0.3)",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),J=[H],K={class:"diy-calendar-table"},Q={class:"table-header-row"},U=["data-date"],W={class:"td-content-box"},Z=["onClick"],tt={__name:"Carlendar",props:{modelValue:Date},emits:["update:modelValue"],setup(c,{emit:j}){const n=w(c.modelValue),x=new Date,t=V({target:{year:null,month:null,date:null,day:null,monthShortName:null,monthFullName:null,monthChineseFullName:null,firstDay:null,firstDayIndex:null,totalDays:null},previous:{totalDays:null}}),f=w([]);m();function m(){v(),F()}function v(){if(n.value||(n.value=x),t.target.year=n.value.getFullYear(),t.target.month=n.value.getMonth(),t.target.date=n.value.getDate(),t.target.day=n.value.getDay(),t.target.year<Y||t.target.year>$){console.error("\u65E0\u6548\u7684\u5E74\u4EFD\uFF0C\u8BF7\u68C0\u67E5\u4F20\u5165\u7684\u6570\u636E\u662F\u5426\u662F\u6B63\u5E38");return}let a;a=n.value.toString().split(" "),t.target.monthShortName=a[1],t.target.monthFullName=b.fullName[t.target.month],t.target.monthChineseFullName=b.chineseFullName[t.target.month];const e=new Date(t.target.year,t.target.month,1);t.target.firstDay=e.getDay(),t.target.firstDayIndex=N.findIndex(o=>o.dayNumber===t.target.firstDay);const r=new Date(t.target.year,t.target.month+1,0);t.target.totalDays=r.getDate();const l=new Date(t.target.year,t.target.month,0);t.previous.totalDays=l.getDate(),console.log("calendarProps:",t)}function F(){let a,e=1;const r=[],l=[];for(a=0;a<=6;a++)if(a<t.target.firstDayIndex){const o=t.previous.totalDays-t.target.firstDayIndex+(a+1);l.push({dateObj:new Date(t.target.year,t.target.month-1,o),dateNumber:o,dateType:"previous"})}else l.push({dateObj:new Date(t.target.year,t.target.month,e),dateNumber:e,dateType:"current"}),e++;r.push(l);for(let o=0;o<=4;o++){const i=[];for(let g=0;g<=6;g++){if(e<=t.target.totalDays)i.push({dateObj:new Date(t.target.year,t.target.month,e),dateNumber:e,dateType:"current"});else{const h=e-t.target.totalDays;i.push({dateObj:new Date(t.target.year,t.target.month+1,h),dateNumber:h,dateType:"next"})}e++}r.push(i)}f.value=r}function S(a){const e=a.dateObj,r=e.getFullYear(),l=e.getMonth(),o=e.getDate(),i=n.value.getFullYear(),g=n.value.getMonth(),h=n.value.getDate();return r===i&&l===g&&o===h}function I(a){return a.dateType==="current"}function O(a){const e=a.dateObj,r=n.value;e.getTime()!==r.getTime()&&(a.dateType==="current"?(n.value=a.dateObj,v()):(n.value=a.dateObj,m()))}function _(a){let e=t.target.month,r=t.target.year;n.value=t.target.date,e+=a,e>11?(r+=1,e=0):e<0&&(r-=1,e=11),n.value=new Date(r,e,n.value),m()}const T=A(()=>{const a=n.value.getMonth()+1;let e="";return a>10?e=a+"":e="0"+a,`${n.value.getFullYear()}.${e}`});return B(n,a=>{j("update:modelValue",a)}),(a,e)=>(u(),d("div",R,[s("div",z,[s("div",{class:"left-arrow",onClick:e[0]||(e[0]=r=>_(-1))},q),s("div",G,p(k(T)),1),s("div",{class:"right-arrow",onClick:e[1]||(e[1]=r=>_(1))},J)]),s("table",K,[s("thead",null,[s("tr",Q,[(u(!0),d(D,null,y(k(N),r=>(u(),d("th",{key:r.chineseShortName,class:"table-header"},p(r.shortName),1))),128))])]),s("tbody",null,[(u(!0),d(D,null,y(f.value,(r,l)=>(u(),d("tr",{class:"table-body-row",key:l},[(u(!0),d(D,null,y(r,o=>(u(),d("td",{class:"table-data","data-date":o.dateNumber,key:`${o.dateObj.getMonth()}-${o.dateNumber}`},[s("div",W,[s("div",{class:M(["content-border",{selected:S(o)}]),onClick:i=>O(o)},[s("div",{class:M(["date-number",{current:I(o)}])},p(o.dateNumber),3)],10,Z)])],8,U))),128))]))),128))])])]))}};var nt=L(tt,[["__scopeId","data-v-7fc7250c"],["__file","Carlendar.vue"]]);export{nt as default};
