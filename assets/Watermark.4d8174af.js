import"./html2canvas.esm.0eae2bf4.js";import"./jspdf.es.min.59200ead.js";import{y as d,_ as f,g as u,w as m,m as p,a7 as v,o as _,c as g,J as y}from"./app.da40d39a.js";function b(r){return d(()=>{const a=document.createElement("canvas"),i=window.devicePixelRatio||1,n=r.fontSize*i+"px serif",e=a.getContext("2d");e.font=n;const{width:o}=e==null?void 0:e.measureText(r.text),t=Math.max(100,o)+r.gap*i;return a.width=t,a.height=t,e==null||e.translate(a.width/2,a.height/2),e==null||e.rotate(Math.PI/180*-45),e.fillStyle="rgba(0, 0, 0, 0.3)",e.font=n,e.textAlign="center",e.textBaseline="middle",e.fillText(r.text,0,0),{base64:a.toDataURL(),size:t,styleSize:t/i}})}const h={__name:"Watermark",props:{text:{type:String,required:!0,default:"watermark"},fontSize:{type:Number,default:40},gap:{type:Number,default:20}},setup(r){const i=b(r),l=u(null),n=u(0);let e;m(()=>{if(n.value,!l.value)return;e&&e.remove();const{base64:t,styleSize:s}=i.value;e=document.createElement("div"),e.style.backgroundImage=`url(${t})`,e.style.backgroundSize=`${s}px ${s}px`,e.style.backgroundRepeat="repeat",e.style.zIndex=9999,e.style.position="absolute",e.style.inset=0,l.value.appendChild(e)});let o;return p(()=>{o=new MutationObserver(t=>{for(const s of t){for(const c of s.removedNodes)if(c===e){n.value++;return}if(s.target===e){n.value++;return}}}),o.observe(l.value,{childList:!0,attributes:!0,subtree:!0})}),v(()=>{o&&o.disconnect(),e=null}),(t,s)=>(_(),g("div",{class:"watermark-container",ref_key:"parentRef",ref:l},[y(t.$slots,"default",{},void 0,!0)],512))}};var w=f(h,[["__scopeId","data-v-425d790a"],["__file","Watermark.vue"]]);export{w as default};
