import{_ as i,g as n,m as u,n as f,o as t,c as r,F as p,j as v,a as g}from"./app.dac17c13.js";const L={class:"container"},y=["data-src"],h={__name:"LazyLoad",props:{list:Array},setup(c){const _=n(c.list),o=n([]),d=()=>{const s=new IntersectionObserver(a=>{a.forEach(e=>{console.log(e.isIntersecting),e.isIntersecting&&(e.target.src=e.target.dataset.src,delete e.target.dataset.src,s.unobserve(e.target))})});o.value.forEach(a=>{s.observe(a)})},l=s=>{s&&o.value.push(s)};return u(()=>{f(()=>{d()})}),(s,a)=>(t(),r("div",L,[(t(!0),r(p,null,v(_.value,e=>(t(),r("div",{class:"sunshine",key:e.id},[g("img",{"data-src":e.src,ref_for:!0,ref:l,alt:""},null,8,y)]))),128))]))}};var x=i(h,[["__scopeId","data-v-77e3ac17"],["__file","LazyLoad.vue"]]);export{x as default};
