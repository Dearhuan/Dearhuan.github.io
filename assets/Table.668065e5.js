import{_ as k,i as w,o as a,c as n,a as s,F as c,g as d,V as m,W as g,b as h,h as v,k as P,r,A as x,t as u,J as B,e as z,I as T}from"./app.62e94827.js";const I={class:"m-table-wrap"},V={class:"m-table"},C={class:"m-tr"},N={class:"m-body"},O={class:"m-tr-loading"},E={class:"m-tr-empty"},D=["colspan"],F=["title"],J={key:1},$=w({__name:"Table",props:{columns:{default:()=>[]},dataSource:{default:()=>[]},pagination:{default:()=>({page:1,pageSize:10})},showPagination:{type:Boolean,default:!0},hideOnSinglePage:{type:Boolean,default:!1},total:{default:0},loading:{type:Boolean,default:!1}},emits:["change"],setup(e,{emit:p}){function y(i){p("change",i)}return(i,A)=>{const _=r("Spin"),f=r("Empty"),S=r("Pagination");return a(),n("div",I,[s("table",V,[s("thead",null,[s("tr",C,[(a(!0),n(c,null,d(e.columns,(t,o)=>(a(),n("th",{class:"m-th",style:x(`width: ${typeof t.width=="number"?t.width+"px":t.width};`),key:o},u(t.title),5))),128))])]),s("tbody",N,[m(s("tr",O,[h(_,{class:"m-loading",size:"small",colspan:e.columns.length},null,8,["colspan"])],512),[[g,e.loading]]),m(s("tr",E,[s("td",{class:"m-td-empty",colspan:e.columns.length},[h(f,{class:"empty",image:"2"})],8,D)],512),[[g,!e.total]]),(a(!0),n(c,null,d(e.dataSource,(t,o)=>(a(),n("tr",{class:"m-tr",key:o},[(a(!0),n(c,null,d(e.columns,(l,b)=>(a(),n("td",{class:"m-td",key:b,title:t[l.dataIndex]},[l.slot?B(i.$slots,l.slot,T({key:0},t,{index:o}),()=>[z(u(t[l.dataIndex]||"--"),1)],!0):(a(),n("span",J,u(t[l.dataIndex]||"--"),1))],8,F))),128))]))),128))])]),e.showPagination&&e.total?(a(),v(S,{key:0,class:"mt20",onChange:y,current:e.pagination.page,pageSize:e.pagination.pageSize,total:e.total,hideOnSinglePage:e.hideOnSinglePage,showQuickJumper:!0,showTotal:!0,placement:"right"},null,8,["current","pageSize","total","hideOnSinglePage"])):P("",!0)])}}});var Q=k($,[["__scopeId","data-v-229465f0"],["__file","Table.vue"]]);export{Q as default};
