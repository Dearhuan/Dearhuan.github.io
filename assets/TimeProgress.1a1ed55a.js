import{_ as S,g as s,m as T,o,c as n,a as e,t as r,p as D,k as I}from"./app.bf1c1b50.js";const t=c=>(D("data-v-2404e726"),c=c(),I(),c),M={class:"time-container"},P={class:"circle-box"},w={class:"circle",style:{"--clr":"#ff2972"}},B=t(()=>e("circle",{cx:"70",cy:"70",r:"70"},null,-1)),E=t(()=>e("div",{class:"tip"},"HOURS",-1)),N={class:"circle",style:{"--clr":"#fee800"}},$=t(()=>e("circle",{cx:"70",cy:"70",r:"70"},null,-1)),H=t(()=>e("div",{class:"tip"},"MINUTES",-1)),O={class:"circle",style:{"--clr":"#04fc43"}},U=t(()=>e("circle",{cx:"70",cy:"70",r:"70"},null,-1)),b=t(()=>e("div",{class:"tip"},"SECONDS",-1)),A={class:"ap"},C={__name:"TimeProgress",setup(c){const m=s(null),y=s(null),x=s(null),g=s(null),i=s(null),_=s(null),u=s(null),d=s("00"),v=s("00"),p=s("00"),f=s("PM"),k=()=>{setInterval(()=>{const l=`${new Date().getHours()%12}`.padStart(2,0),a=`${new Date().getMinutes()}`.padStart(2,0),h=`${new Date().getSeconds()}`.padStart(2,0);d.value=l,v.value=a,p.value=h,f.value=l>-12?"PM":"AM",i.value.style.strokeDashoffset=440-440*l/12,_.value.style.strokeDashoffset=440-440*a/60,u.value.style.strokeDashoffset=440-440*h/60},1e3)};return T(()=>{k()}),(l,a)=>(o(),n("div",M,[e("div",P,[e("div",w,[(o(),n("svg",null,[B,e("circle",{cx:"70",cy:"70",r:"70",ref_key:"hh",ref:i},null,512)])),e("div",{ref_key:"hours",ref:m},[e("span",null,r(d.value),1),E],512)]),e("div",N,[(o(),n("svg",null,[$,e("circle",{cx:"70",cy:"70",r:"70",id:"mm",ref_key:"mm",ref:_},null,512)])),e("div",{ref_key:"minutes",ref:y},[e("span",null,r(v.value),1),H],512)]),e("div",O,[(o(),n("svg",null,[U,e("circle",{cx:"70",cy:"70",r:"70",id:"ss",ref_key:"ss",ref:u},null,512)])),e("div",{ref_key:"seconds",ref:x},[e("span",null,r(p.value),1),b],512)]),e("div",A,[e("div",{ref_key:"ampm",ref:g},r(f.value),513)])])]))}};var V=S(C,[["__scopeId","data-v-2404e726"],["__file","TimeProgress.vue"]]);export{V as default};
