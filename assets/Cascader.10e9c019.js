import{_ as V,i as D,f as c,j as y,o as z,c as S,b as g,A as s,r as $}from"./app.9987a349.js";const B=D({__name:"Cascader",props:{options:{default:()=>[]},selectedValue:{default:()=>[]},label:{default:"label"},value:{default:"value"},children:{default:"children"},changeOnSelect:{type:Boolean,default:!1},zIndex:{default:1},gap:{default:8},width:{default:120},height:{default:32},disabled:{type:[Boolean,Array],default:!1},allowClear:{type:Boolean,default:!1},placeholder:{default:"\u8BF7\u9009\u62E9"},maxDisplay:{default:6}},emits:["update:selectedValue","change"],setup(e,{emit:h}){const i=e,a=c([]),n=c([]),r=c([]),v=c([]),o=c([]);y(()=>{r.value=[...i.options]}),y(()=>{a.value=[...i.selectedValue]}),y(()=>{m(a.value),w(a.value)});function b(l,d){const u=l.length;for(let t=0;t<u;t++)if(l[t][i.value]===a.value[d])return l[t][i.children]||[];return[]}function m(l){v.value=b(r.value,0),o.value=[],l.length>1&&(o.value=b(v.value,1))}function f(l,d){const u=l.length;for(let t=0;t<u;t++)if(l[t][i.value]===a.value[d])return l[t][i.label];return a.value[d]}function w(l){n.value[0]=f(r.value,0),l.length>1&&(n.value[1]=f(v.value,1)),l.length>2&&(n.value[2]=f(o.value,2))}function x(l,d){i.changeOnSelect?(h("update:selectedValue",[l]),h("change",[l],[d])):(a.value=[l],n.value=[d])}function C(l,d){i.changeOnSelect?(h("update:selectedValue",[a.value[0],l]),h("change",[a.value[0],l],[n.value[0],d])):(a.value=[a.value[0],l],n.value=[n.value[0],d])}function A(l,d){h("update:selectedValue",[...a.value.slice(0,2),l]),h("change",[...a.value.slice(0,2),l],[...n.value.slice(0,2),d])}return(l,d)=>{const u=$("Select");return z(),S("div",{class:"m-cascader-wrap",style:s(`height: ${e.height}px;`)},[g(u,{style:s(`margin-right: ${e.gap}px; z-index: ${e.zIndex};`),options:r.value,modelValue:a.value[0],"onUpdate:modelValue":d[0]||(d[0]=t=>a.value[0]=t),label:e.label,value:e.value,disabled:Array.isArray(e.disabled)?e.disabled[0]:e.disabled,allowClear:e.allowClear,width:Array.isArray(e.width)?e.width[0]:e.width,height:e.height,maxDisplay:e.maxDisplay,placeholder:Array.isArray(e.placeholder)?e.placeholder[0]:e.placeholder,onChange:x},null,8,["style","options","modelValue","label","value","disabled","allowClear","width","height","maxDisplay","placeholder"]),g(u,{style:s(`margin-right: ${e.gap}px; z-index: ${e.zIndex};`),options:v.value,modelValue:a.value[1],"onUpdate:modelValue":d[1]||(d[1]=t=>a.value[1]=t),label:e.label,value:e.value,disabled:Array.isArray(e.disabled)?e.disabled[1]:e.disabled,allowClear:e.allowClear,width:Array.isArray(e.width)?e.width[1]:e.width,height:e.height,maxDisplay:e.maxDisplay,placeholder:Array.isArray(e.placeholder)?e.placeholder[1]:e.placeholder,onChange:C},null,8,["style","options","modelValue","label","value","disabled","allowClear","width","height","maxDisplay","placeholder"]),g(u,{style:s(`margin-right: ${e.gap}px; z-index: ${e.zIndex};`),options:o.value,modelValue:a.value[2],"onUpdate:modelValue":d[2]||(d[2]=t=>a.value[2]=t),label:e.label,value:e.value,disabled:Array.isArray(e.disabled)?e.disabled[2]:e.disabled,allowClear:e.allowClear,width:Array.isArray(e.width)?e.width[2]:e.width,height:e.height,maxDisplay:e.maxDisplay,placeholder:Array.isArray(e.placeholder)?e.placeholder[2]:e.placeholder,onChange:A},null,8,["style","options","modelValue","label","value","disabled","allowClear","width","height","maxDisplay","placeholder"])],4)}}});var I=V(B,[["__scopeId","data-v-42dc46fc"],["__file","Cascader.vue"]]);export{I as default};
