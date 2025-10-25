import{_ as L,f as C,o as D,c as z,a as r,b as l,h as u,u as v,d as S,r as q,p as T,k as A,e as o}from"./app.c95a8308.js";const $=k=>(T("data-v-671e16da"),k=k(),A(),k),B=$(()=>r("h1",{id:"\u6D88\u606F\u63D0\u793Ahooks-usemessage",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#\u6D88\u606F\u63D0\u793Ahooks-usemessage","aria-hidden":"true"},"#"),o(" \u6D88\u606F\u63D0\u793Ahooks-useMessage")],-1)),H=$(()=>r("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),o(" \u57FA\u7840\u7528\u6CD5")],-1)),F={class:"mb-10 mt-10"},W=o("Default"),V=o("Success"),P=o("Info"),j=o("Warning"),G=o("Danger"),J=S(`<h2 id="\u65B9\u6CD5\u5B9A\u4E49" tabindex="-1" data-v-671e16da><a class="header-anchor" href="#\u65B9\u6CD5\u5B9A\u4E49" aria-hidden="true" data-v-671e16da>#</a> \u65B9\u6CD5\u5B9A\u4E49</h2><div class="language-typescript ext-ts line-numbers-mode" data-v-671e16da><pre class="language-typescript" data-v-671e16da><code data-v-671e16da><span class="token keyword" data-v-671e16da>interface</span> <span class="token class-name" data-v-671e16da>Params</span> <span class="token punctuation" data-v-671e16da>{</span>
  zIndex<span class="token operator" data-v-671e16da>?</span><span class="token operator" data-v-671e16da>:</span> <span class="token builtin" data-v-671e16da>number</span>
  duration<span class="token operator" data-v-671e16da>?</span><span class="token operator" data-v-671e16da>:</span> <span class="token builtin" data-v-671e16da>number</span>
<span class="token punctuation" data-v-671e16da>}</span> 

<span class="token keyword" data-v-671e16da>type</span> <span class="token class-name" data-v-671e16da>MessageType</span> <span class="token operator" data-v-671e16da>=</span> <span class="token string" data-v-671e16da>&#39;info&#39;</span> <span class="token operator" data-v-671e16da>|</span> <span class="token string" data-v-671e16da>&#39;success&#39;</span> <span class="token operator" data-v-671e16da>|</span> <span class="token string" data-v-671e16da>&#39;warning&#39;</span> <span class="token operator" data-v-671e16da>|</span> <span class="token string" data-v-671e16da>&#39;error&#39;</span>

<span class="token keyword" data-v-671e16da>export</span> <span class="token keyword" data-v-671e16da>const</span> <span class="token function-variable function" data-v-671e16da>useMessage</span> <span class="token operator" data-v-671e16da>=</span> <span class="token punctuation" data-v-671e16da>(</span>params<span class="token operator" data-v-671e16da>:</span> Params <span class="token operator" data-v-671e16da>=</span> <span class="token punctuation" data-v-671e16da>{</span><span class="token punctuation" data-v-671e16da>}</span><span class="token punctuation" data-v-671e16da>)</span> <span class="token operator" data-v-671e16da>=&gt;</span> <span class="token punctuation" data-v-671e16da>{</span>
  <span class="token keyword" data-v-671e16da>const</span> doc <span class="token operator" data-v-671e16da>=</span> document
  <span class="token keyword" data-v-671e16da>const</span> cssModule <span class="token operator" data-v-671e16da>=</span> <span class="token template-string" data-v-671e16da><span class="token template-punctuation string" data-v-671e16da>\`</span><span class="token string" data-v-671e16da>__</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>Math<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>random</span><span class="token punctuation" data-v-671e16da>(</span><span class="token punctuation" data-v-671e16da>)</span><span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>toString</span><span class="token punctuation" data-v-671e16da>(</span><span class="token number" data-v-671e16da>36</span><span class="token punctuation" data-v-671e16da>)</span><span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>slice</span><span class="token punctuation" data-v-671e16da>(</span><span class="token number" data-v-671e16da>2</span><span class="token punctuation" data-v-671e16da>,</span> <span class="token number" data-v-671e16da>7</span><span class="token punctuation" data-v-671e16da>)</span><span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token template-punctuation string" data-v-671e16da>\`</span></span>
  <span class="token keyword" data-v-671e16da>const</span> className <span class="token operator" data-v-671e16da>=</span> <span class="token punctuation" data-v-671e16da>{</span>
    box<span class="token operator" data-v-671e16da>:</span> <span class="token template-string" data-v-671e16da><span class="token template-punctuation string" data-v-671e16da>\`</span><span class="token string" data-v-671e16da>msg-box</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>cssModule<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token template-punctuation string" data-v-671e16da>\`</span></span><span class="token punctuation" data-v-671e16da>,</span>
    hide<span class="token operator" data-v-671e16da>:</span> <span class="token template-string" data-v-671e16da><span class="token template-punctuation string" data-v-671e16da>\`</span><span class="token string" data-v-671e16da>hide</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>cssModule<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token template-punctuation string" data-v-671e16da>\`</span></span><span class="token punctuation" data-v-671e16da>,</span>
    text<span class="token operator" data-v-671e16da>:</span> <span class="token template-string" data-v-671e16da><span class="token template-punctuation string" data-v-671e16da>\`</span><span class="token string" data-v-671e16da>msg-text</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>cssModule<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token template-punctuation string" data-v-671e16da>\`</span></span><span class="token punctuation" data-v-671e16da>,</span>
    icon<span class="token operator" data-v-671e16da>:</span> <span class="token template-string" data-v-671e16da><span class="token template-punctuation string" data-v-671e16da>\`</span><span class="token string" data-v-671e16da>msg-icon</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>cssModule<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token template-punctuation string" data-v-671e16da>\`</span></span>
  <span class="token punctuation" data-v-671e16da>}</span>
  <span class="token keyword" data-v-671e16da>const</span> style <span class="token operator" data-v-671e16da>=</span> doc<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>createElement</span><span class="token punctuation" data-v-671e16da>(</span><span class="token string" data-v-671e16da>&#39;style&#39;</span><span class="token punctuation" data-v-671e16da>)</span>
  style<span class="token punctuation" data-v-671e16da>.</span>textContent <span class="token operator" data-v-671e16da>=</span> <span class="token template-string" data-v-671e16da><span class="token template-punctuation string" data-v-671e16da>\`</span><span class="token string" data-v-671e16da>
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>, .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>, .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>text<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da> {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da> {
    position: fixed;
    top: 0;
    left: 50%;
    display: flex;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);
    white-space: nowrap;
    animation: </span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>-move .4s;
    transition: .4s all;
    transform: translate3d(-50%, 0%, 0);
    opacity: 1;
    overflow: hidden;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::after {
    content: &quot;&quot;;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
  }
  @keyframes </span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>-move {
    0% {
      opacity: 0;
      transform: translate3d(-50%, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(-50%, 0%, 0);
    }
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>hide<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da> {
    opacity: 0;
    /* transform: translate3d(-50%, -100%, 0); */
    transform: translate3d(-50%, -100%, 0) scale(0);
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da> {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 6px;
    position: relative;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>text<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da> {
    font-size: 14px;
    line-height: 18px;
    color: #555;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::after,
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::before {
    position: absolute;
    content: &quot;&quot;;
    background-color: #fff;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.info .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>, .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.info::after {
    background-color: #1890ff;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.success .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>, .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.success::after {
    background-color: #52c41a;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.warning .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>, .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.warning::after {
    background-color: #faad14;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.error .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>, .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.error::after {
    background-color: #ff4d4f;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.info .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::after,
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.warning .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::after {
    top: 15%;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.info .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::before,
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.warning .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::before {
    top: calc(15% + 4px);
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 40%;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.error .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::after, 
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.error .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::before {
    top: 20%;
    left: 50%;
    width: 2px;
    height: 60%;
    margin-left: -1px;
    border-radius: 1px;
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.error .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::after {
    transform: rotate(-45deg);
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.error .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::before {
    transform: rotate(45deg);
  }
  .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>.success .</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>::after {
    box-sizing: content-box;
    background-color: transparent;
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 50%;
    left: 35%;
    top: 13%;
    transform: rotate(45deg);
    width: 20%;
    transform-origin: center;
  }
  </span><span class="token template-punctuation string" data-v-671e16da>\`</span></span><span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>replace</span><span class="token punctuation" data-v-671e16da>(</span><span class="token regex" data-v-671e16da><span class="token regex-delimiter" data-v-671e16da>/</span><span class="token regex-source language-regex" data-v-671e16da>(\\n|\\t|\\s)*</span><span class="token regex-delimiter" data-v-671e16da>/</span><span class="token regex-flags" data-v-671e16da>ig</span></span><span class="token punctuation" data-v-671e16da>,</span> <span class="token string" data-v-671e16da>&quot;$1&quot;</span><span class="token punctuation" data-v-671e16da>)</span><span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>replace</span><span class="token punctuation" data-v-671e16da>(</span><span class="token regex" data-v-671e16da><span class="token regex-delimiter" data-v-671e16da>/</span><span class="token regex-source language-regex" data-v-671e16da>\\n|\\t|\\s(\\{|\\}|\\,|\\:|\\;)</span><span class="token regex-delimiter" data-v-671e16da>/</span><span class="token regex-flags" data-v-671e16da>ig</span></span><span class="token punctuation" data-v-671e16da>,</span> <span class="token string" data-v-671e16da>&quot;$1&quot;</span><span class="token punctuation" data-v-671e16da>)</span><span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>replace</span><span class="token punctuation" data-v-671e16da>(</span><span class="token regex" data-v-671e16da><span class="token regex-delimiter" data-v-671e16da>/</span><span class="token regex-source language-regex" data-v-671e16da>(\\{|\\}|\\,|\\:|\\;)\\s</span><span class="token regex-delimiter" data-v-671e16da>/</span><span class="token regex-flags" data-v-671e16da>ig</span></span><span class="token punctuation" data-v-671e16da>,</span> <span class="token string" data-v-671e16da>&quot;$1&quot;</span><span class="token punctuation" data-v-671e16da>)</span>

  doc<span class="token punctuation" data-v-671e16da>.</span>head<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>appendChild</span><span class="token punctuation" data-v-671e16da>(</span>style<span class="token punctuation" data-v-671e16da>)</span>

  <span class="token keyword" data-v-671e16da>let</span> zIndex <span class="token operator" data-v-671e16da>=</span> params<span class="token punctuation" data-v-671e16da>.</span>zIndex <span class="token operator" data-v-671e16da>||</span> <span class="token number" data-v-671e16da>1000</span>

  <span class="token keyword" data-v-671e16da>const</span> messageList<span class="token operator" data-v-671e16da>:</span> <span class="token builtin" data-v-671e16da>Array</span><span class="token operator" data-v-671e16da>&lt;</span>HTMLElement<span class="token operator" data-v-671e16da>&gt;</span> <span class="token operator" data-v-671e16da>=</span> <span class="token punctuation" data-v-671e16da>[</span><span class="token punctuation" data-v-671e16da>]</span>

  <span class="token keyword" data-v-671e16da>const</span> <span class="token function-variable function" data-v-671e16da>getItemTop</span> <span class="token operator" data-v-671e16da>=</span> <span class="token punctuation" data-v-671e16da>(</span>el<span class="token operator" data-v-671e16da>:</span> HTMLElement<span class="token punctuation" data-v-671e16da>)</span> <span class="token operator" data-v-671e16da>=&gt;</span> <span class="token punctuation" data-v-671e16da>{</span>
    <span class="token keyword" data-v-671e16da>let</span> top <span class="token operator" data-v-671e16da>=</span> <span class="token number" data-v-671e16da>10</span>
    <span class="token keyword" data-v-671e16da>for</span> <span class="token punctuation" data-v-671e16da>(</span><span class="token keyword" data-v-671e16da>let</span> i <span class="token operator" data-v-671e16da>=</span> <span class="token number" data-v-671e16da>0</span><span class="token punctuation" data-v-671e16da>;</span> i <span class="token operator" data-v-671e16da>&lt;</span> messageList<span class="token punctuation" data-v-671e16da>.</span>length<span class="token punctuation" data-v-671e16da>;</span> i<span class="token operator" data-v-671e16da>++</span><span class="token punctuation" data-v-671e16da>)</span> <span class="token punctuation" data-v-671e16da>{</span>
      <span class="token keyword" data-v-671e16da>const</span> item <span class="token operator" data-v-671e16da>=</span> messageList<span class="token punctuation" data-v-671e16da>[</span>i<span class="token punctuation" data-v-671e16da>]</span>
      <span class="token keyword" data-v-671e16da>if</span> <span class="token punctuation" data-v-671e16da>(</span>el <span class="token operator" data-v-671e16da>&amp;&amp;</span> el <span class="token operator" data-v-671e16da>===</span> item<span class="token punctuation" data-v-671e16da>)</span> <span class="token punctuation" data-v-671e16da>{</span>
        <span class="token keyword" data-v-671e16da>break</span><span class="token punctuation" data-v-671e16da>;</span>
      <span class="token punctuation" data-v-671e16da>}</span>
      top <span class="token operator" data-v-671e16da>+=</span> item<span class="token punctuation" data-v-671e16da>.</span>clientHeight <span class="token operator" data-v-671e16da>+</span> <span class="token number" data-v-671e16da>20</span>
    <span class="token punctuation" data-v-671e16da>}</span>
    <span class="token keyword" data-v-671e16da>return</span> top
  <span class="token punctuation" data-v-671e16da>}</span>

  <span class="token keyword" data-v-671e16da>const</span> <span class="token function-variable function" data-v-671e16da>removeItem</span> <span class="token operator" data-v-671e16da>=</span> <span class="token punctuation" data-v-671e16da>(</span>el<span class="token operator" data-v-671e16da>:</span> HTMLElement<span class="token punctuation" data-v-671e16da>)</span> <span class="token operator" data-v-671e16da>=&gt;</span> <span class="token punctuation" data-v-671e16da>{</span>
    <span class="token keyword" data-v-671e16da>for</span> <span class="token punctuation" data-v-671e16da>(</span><span class="token keyword" data-v-671e16da>let</span> i <span class="token operator" data-v-671e16da>=</span> <span class="token number" data-v-671e16da>0</span><span class="token punctuation" data-v-671e16da>;</span> i <span class="token operator" data-v-671e16da>&lt;</span> messageList<span class="token punctuation" data-v-671e16da>.</span>length<span class="token punctuation" data-v-671e16da>;</span> i<span class="token operator" data-v-671e16da>++</span><span class="token punctuation" data-v-671e16da>)</span> <span class="token punctuation" data-v-671e16da>{</span>
      <span class="token keyword" data-v-671e16da>const</span> item <span class="token operator" data-v-671e16da>=</span> messageList<span class="token punctuation" data-v-671e16da>[</span>i<span class="token punctuation" data-v-671e16da>]</span>
      <span class="token keyword" data-v-671e16da>if</span> <span class="token punctuation" data-v-671e16da>(</span>item <span class="token operator" data-v-671e16da>===</span> el<span class="token punctuation" data-v-671e16da>)</span> <span class="token punctuation" data-v-671e16da>{</span>
        messageList<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>splice</span><span class="token punctuation" data-v-671e16da>(</span>i<span class="token punctuation" data-v-671e16da>,</span> <span class="token number" data-v-671e16da>1</span><span class="token punctuation" data-v-671e16da>)</span>
        <span class="token keyword" data-v-671e16da>break</span><span class="token punctuation" data-v-671e16da>;</span>
      <span class="token punctuation" data-v-671e16da>}</span>
    <span class="token punctuation" data-v-671e16da>}</span>
    el<span class="token punctuation" data-v-671e16da>.</span>classList<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>add</span><span class="token punctuation" data-v-671e16da>(</span>className<span class="token punctuation" data-v-671e16da>.</span>hide<span class="token punctuation" data-v-671e16da>)</span>
    messageList<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>forEach</span><span class="token punctuation" data-v-671e16da>(</span>item <span class="token operator" data-v-671e16da>=&gt;</span> <span class="token punctuation" data-v-671e16da>{</span>
      item<span class="token punctuation" data-v-671e16da>.</span>style<span class="token punctuation" data-v-671e16da>.</span>top <span class="token operator" data-v-671e16da>=</span> <span class="token template-string" data-v-671e16da><span class="token template-punctuation string" data-v-671e16da>\`</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span><span class="token function" data-v-671e16da>getItemTop</span><span class="token punctuation" data-v-671e16da>(</span>item<span class="token punctuation" data-v-671e16da>)</span><span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>px</span><span class="token template-punctuation string" data-v-671e16da>\`</span></span>
    <span class="token punctuation" data-v-671e16da>}</span><span class="token punctuation" data-v-671e16da>)</span>
  <span class="token punctuation" data-v-671e16da>}</span>

  <span class="token keyword" data-v-671e16da>const</span> showMessage <span class="token operator" data-v-671e16da>=</span> <span class="token punctuation" data-v-671e16da>(</span>content<span class="token operator" data-v-671e16da>:</span> <span class="token builtin" data-v-671e16da>string</span><span class="token punctuation" data-v-671e16da>,</span> type<span class="token operator" data-v-671e16da>:</span> MessageType <span class="token operator" data-v-671e16da>=</span> <span class="token string" data-v-671e16da>&#39;info&#39;</span><span class="token punctuation" data-v-671e16da>,</span> duration<span class="token operator" data-v-671e16da>?</span><span class="token operator" data-v-671e16da>:</span> <span class="token builtin" data-v-671e16da>number</span><span class="token punctuation" data-v-671e16da>)</span> <span class="token operator" data-v-671e16da>=&gt;</span> <span class="token punctuation" data-v-671e16da>{</span>
    <span class="token keyword" data-v-671e16da>const</span> el <span class="token operator" data-v-671e16da>=</span> doc<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>createElement</span><span class="token punctuation" data-v-671e16da>(</span><span class="token string" data-v-671e16da>&#39;div&#39;</span><span class="token punctuation" data-v-671e16da>)</span>
    el<span class="token punctuation" data-v-671e16da>.</span>className <span class="token operator" data-v-671e16da>=</span> <span class="token template-string" data-v-671e16da><span class="token template-punctuation string" data-v-671e16da>\`</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>box<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da> </span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span><span class="token keyword" data-v-671e16da>type</span><span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token template-punctuation string" data-v-671e16da>\`</span></span>
    el<span class="token punctuation" data-v-671e16da>.</span>style<span class="token punctuation" data-v-671e16da>.</span>top <span class="token operator" data-v-671e16da>=</span> <span class="token template-string" data-v-671e16da><span class="token template-punctuation string" data-v-671e16da>\`</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span><span class="token function" data-v-671e16da>getItemTop</span><span class="token punctuation" data-v-671e16da>(</span>el<span class="token punctuation" data-v-671e16da>)</span><span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>px</span><span class="token template-punctuation string" data-v-671e16da>\`</span></span>
    el<span class="token punctuation" data-v-671e16da>.</span>style<span class="token punctuation" data-v-671e16da>.</span>zIndex <span class="token operator" data-v-671e16da>=</span> zIndex<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>toString</span><span class="token punctuation" data-v-671e16da>(</span><span class="token punctuation" data-v-671e16da>)</span>
    el<span class="token punctuation" data-v-671e16da>.</span>innerHTML <span class="token operator" data-v-671e16da>=</span> <span class="token template-string" data-v-671e16da><span class="token template-punctuation string" data-v-671e16da>\`</span><span class="token string" data-v-671e16da>
    &lt;span class=&quot;</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>icon<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>className<span class="token punctuation" data-v-671e16da>.</span>text<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>&quot;&gt;</span><span class="token interpolation" data-v-671e16da><span class="token interpolation-punctuation punctuation" data-v-671e16da>\${</span>content<span class="token interpolation-punctuation punctuation" data-v-671e16da>}</span></span><span class="token string" data-v-671e16da>&lt;/span&gt;
    </span><span class="token template-punctuation string" data-v-671e16da>\`</span></span>
    zIndex<span class="token operator" data-v-671e16da>++</span><span class="token punctuation" data-v-671e16da>;</span>
    messageList<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>push</span><span class="token punctuation" data-v-671e16da>(</span>el<span class="token punctuation" data-v-671e16da>)</span>
    doc<span class="token punctuation" data-v-671e16da>.</span>body<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>appendChild</span><span class="token punctuation" data-v-671e16da>(</span>el<span class="token punctuation" data-v-671e16da>)</span>

    <span class="token keyword" data-v-671e16da>const</span> <span class="token function-variable function" data-v-671e16da>aninationEnd</span> <span class="token operator" data-v-671e16da>=</span> <span class="token punctuation" data-v-671e16da>(</span><span class="token punctuation" data-v-671e16da>)</span> <span class="token operator" data-v-671e16da>=&gt;</span> <span class="token punctuation" data-v-671e16da>{</span>
      el<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>removeEventListener</span><span class="token punctuation" data-v-671e16da>(</span><span class="token string" data-v-671e16da>&#39;animationend&#39;</span><span class="token punctuation" data-v-671e16da>,</span> aninationEnd<span class="token punctuation" data-v-671e16da>)</span>
      <span class="token function" data-v-671e16da>setTimeout</span><span class="token punctuation" data-v-671e16da>(</span>removeItem<span class="token punctuation" data-v-671e16da>,</span> duration <span class="token operator" data-v-671e16da>||</span> params<span class="token punctuation" data-v-671e16da>.</span>duration <span class="token operator" data-v-671e16da>||</span> <span class="token number" data-v-671e16da>3000</span><span class="token punctuation" data-v-671e16da>,</span> el<span class="token punctuation" data-v-671e16da>)</span>
    <span class="token punctuation" data-v-671e16da>}</span>
    el<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>addEventListener</span><span class="token punctuation" data-v-671e16da>(</span><span class="token string" data-v-671e16da>&#39;animationend&#39;</span><span class="token punctuation" data-v-671e16da>,</span> aninationEnd<span class="token punctuation" data-v-671e16da>)</span>

    <span class="token keyword" data-v-671e16da>const</span> <span class="token function-variable function" data-v-671e16da>transitionEnd</span> <span class="token operator" data-v-671e16da>=</span> <span class="token punctuation" data-v-671e16da>(</span><span class="token punctuation" data-v-671e16da>)</span> <span class="token operator" data-v-671e16da>=&gt;</span> <span class="token punctuation" data-v-671e16da>{</span>
      <span class="token keyword" data-v-671e16da>if</span> <span class="token punctuation" data-v-671e16da>(</span><span class="token function" data-v-671e16da>getComputedStyle</span><span class="token punctuation" data-v-671e16da>(</span>el<span class="token punctuation" data-v-671e16da>)</span><span class="token punctuation" data-v-671e16da>.</span>opacity <span class="token operator" data-v-671e16da>!==</span> <span class="token string" data-v-671e16da>&#39;0&#39;</span><span class="token punctuation" data-v-671e16da>)</span> <span class="token keyword" data-v-671e16da>return</span>
      el<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>removeEventListener</span><span class="token punctuation" data-v-671e16da>(</span><span class="token string" data-v-671e16da>&#39;transitionend&#39;</span><span class="token punctuation" data-v-671e16da>,</span> transitionEnd<span class="token punctuation" data-v-671e16da>)</span>
      el<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>remove</span><span class="token punctuation" data-v-671e16da>(</span><span class="token punctuation" data-v-671e16da>)</span>
    <span class="token punctuation" data-v-671e16da>}</span>
    el<span class="token punctuation" data-v-671e16da>.</span><span class="token function" data-v-671e16da>addEventListener</span><span class="token punctuation" data-v-671e16da>(</span><span class="token string" data-v-671e16da>&#39;transitionend&#39;</span><span class="token punctuation" data-v-671e16da>,</span> transitionEnd<span class="token punctuation" data-v-671e16da>)</span>
  <span class="token punctuation" data-v-671e16da>}</span>

  <span class="token keyword" data-v-671e16da>return</span> <span class="token punctuation" data-v-671e16da>{</span>
    showMessage<span class="token punctuation" data-v-671e16da>,</span>
    <span class="token function-variable function" data-v-671e16da>showInfoMsg</span><span class="token operator" data-v-671e16da>:</span> <span class="token punctuation" data-v-671e16da>(</span>msg<span class="token operator" data-v-671e16da>:</span> <span class="token builtin" data-v-671e16da>string</span><span class="token punctuation" data-v-671e16da>)</span> <span class="token operator" data-v-671e16da>=&gt;</span> <span class="token punctuation" data-v-671e16da>{</span>
      <span class="token function" data-v-671e16da>showMessage</span><span class="token punctuation" data-v-671e16da>(</span>msg<span class="token punctuation" data-v-671e16da>,</span> <span class="token string" data-v-671e16da>&#39;info&#39;</span><span class="token punctuation" data-v-671e16da>)</span>
    <span class="token punctuation" data-v-671e16da>}</span><span class="token punctuation" data-v-671e16da>,</span>
    <span class="token function-variable function" data-v-671e16da>showSuccessMsg</span><span class="token operator" data-v-671e16da>:</span> <span class="token punctuation" data-v-671e16da>(</span>msg<span class="token operator" data-v-671e16da>:</span> <span class="token builtin" data-v-671e16da>string</span><span class="token punctuation" data-v-671e16da>)</span> <span class="token operator" data-v-671e16da>=&gt;</span> <span class="token punctuation" data-v-671e16da>{</span>
      <span class="token function" data-v-671e16da>showMessage</span><span class="token punctuation" data-v-671e16da>(</span>msg<span class="token punctuation" data-v-671e16da>,</span> <span class="token string" data-v-671e16da>&#39;success&#39;</span><span class="token punctuation" data-v-671e16da>)</span>
    <span class="token punctuation" data-v-671e16da>}</span><span class="token punctuation" data-v-671e16da>,</span>
    <span class="token function-variable function" data-v-671e16da>showWarningMsg</span><span class="token operator" data-v-671e16da>:</span> <span class="token punctuation" data-v-671e16da>(</span>msg<span class="token operator" data-v-671e16da>:</span> <span class="token builtin" data-v-671e16da>string</span><span class="token punctuation" data-v-671e16da>)</span> <span class="token operator" data-v-671e16da>=&gt;</span> <span class="token punctuation" data-v-671e16da>{</span>
      <span class="token function" data-v-671e16da>showMessage</span><span class="token punctuation" data-v-671e16da>(</span>msg<span class="token punctuation" data-v-671e16da>,</span> <span class="token string" data-v-671e16da>&#39;warning&#39;</span><span class="token punctuation" data-v-671e16da>)</span>
    <span class="token punctuation" data-v-671e16da>}</span><span class="token punctuation" data-v-671e16da>,</span>
    <span class="token function-variable function" data-v-671e16da>showErrorMsg</span><span class="token operator" data-v-671e16da>:</span> <span class="token punctuation" data-v-671e16da>(</span>msg<span class="token operator" data-v-671e16da>:</span> <span class="token builtin" data-v-671e16da>string</span><span class="token punctuation" data-v-671e16da>)</span> <span class="token operator" data-v-671e16da>=&gt;</span> <span class="token punctuation" data-v-671e16da>{</span>
      <span class="token function" data-v-671e16da>showMessage</span><span class="token punctuation" data-v-671e16da>(</span>msg<span class="token punctuation" data-v-671e16da>,</span> <span class="token string" data-v-671e16da>&#39;error&#39;</span><span class="token punctuation" data-v-671e16da>)</span>
    <span class="token punctuation" data-v-671e16da>}</span>
  <span class="token punctuation" data-v-671e16da>}</span>
<span class="token punctuation" data-v-671e16da>}</span>
</code></pre><div class="line-numbers" aria-hidden="true" data-v-671e16da><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div><div class="line-number" data-v-671e16da></div></div></div>`,2),K=C({__name:"useMessage.html",setup(k){const w=(m={})=>{const t=document,d=`__${Math.random().toString(36).slice(2,7)}`,a={box:`msg-box${d}`,hide:`hide${d}`,text:`msg-text${d}`,icon:`msg-icon${d}`},b=t.createElement("style");b.textContent=`
  .${a.box}, .${a.icon}, .${a.text} {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .${a.box} {
    position: fixed;
    top: 0;
    left: 50%;
    display: flex;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);
    white-space: nowrap;
    animation: ${a.box}-move .4s;
    transition: .4s all;
    transform: translate3d(-50%, 0%, 0);
    opacity: 1;
    overflow: hidden;
  }
  .${a.box}::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
  }
  @keyframes ${a.box}-move {
    0% {
      opacity: 0;
      transform: translate3d(-50%, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(-50%, 0%, 0);
    }
  }
  .${a.box}.${a.hide} {
    opacity: 0;
    /* transform: translate3d(-50%, -100%, 0); */
    transform: translate3d(-50%, -100%, 0) scale(0);
  }
  .${a.icon} {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 6px;
    position: relative;
  }
  .${a.text} {
    font-size: 14px;
    line-height: 18px;
    color: #555;
  }
  .${a.icon}::after,
  .${a.icon}::before {
    position: absolute;
    content: "";
    background-color: #fff;
  }
  .${a.box}.info .${a.icon}, .${a.box}.info::after {
    background-color: #1890ff;
  }
  .${a.box}.success .${a.icon}, .${a.box}.success::after {
    background-color: #52c41a;
  }
  .${a.box}.warning .${a.icon}, .${a.box}.warning::after {
    background-color: #faad14;
  }
  .${a.box}.error .${a.icon}, .${a.box}.error::after {
    background-color: #ff4d4f;
  }
  .${a.box}.info .${a.icon}::after,
  .${a.box}.warning .${a.icon}::after {
    top: 15%;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
  }
  .${a.box}.info .${a.icon}::before,
  .${a.box}.warning .${a.icon}::before {
    top: calc(15% + 4px);
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 40%;
  }
  .${a.box}.error .${a.icon}::after, 
  .${a.box}.error .${a.icon}::before {
    top: 20%;
    left: 50%;
    width: 2px;
    height: 60%;
    margin-left: -1px;
    border-radius: 1px;
  }
  .${a.box}.error .${a.icon}::after {
    transform: rotate(-45deg);
  }
  .${a.box}.error .${a.icon}::before {
    transform: rotate(45deg);
  }
  .${a.box}.success .${a.icon}::after {
    box-sizing: content-box;
    background-color: transparent;
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 50%;
    left: 35%;
    top: 13%;
    transform: rotate(45deg);
    width: 20%;
    transform-origin: center;
  }
  `.replace(/(\n|\t|\s)*/ig,"$1").replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,"$1").replace(/(\{|\}|\,|\:|\;)\s/ig,"$1"),t.head.appendChild(b);let g=m.zIndex||1e3;const p=[],f=e=>{let n=10;for(let i=0;i<p.length;i++){const s=p[i];if(e&&e===s)break;n+=s.clientHeight+20}return n},I=e=>{for(let n=0;n<p.length;n++)if(p[n]===e){p.splice(n,1);break}e.classList.add(a.hide),p.forEach(n=>{n.style.top=`${f(n)}px`})},c=(e,n="info",i)=>{const s=t.createElement("div");s.className=`${a.box} ${n}`,s.style.top=`${f(s)}px`,s.style.zIndex=g.toString(),s.innerHTML=`
    <span class="${a.icon}"></span>
    <span class="${a.text}">${e}</span>
    `,g++,p.push(s),t.body.appendChild(s);const x=()=>{s.removeEventListener("animationend",x),setTimeout(I,i||m.duration||3e3,s)};s.addEventListener("animationend",x);const h=()=>{getComputedStyle(s).opacity==="0"&&(s.removeEventListener("transitionend",h),s.remove())};s.addEventListener("transitionend",h)};return{showMessage:c,showInfoMsg:(e,n)=>{c(e,"info",n)},showSuccessMsg:(e,n)=>{c(e,"success",n)},showWarningMsg:(e,n)=>{c(e,"warning",n)},showErrorMsg:(e,n)=>{c(e,"error",n)}}},{showMessage:y,showSuccessMsg:N,showInfoMsg:_,showWarningMsg:M,showErrorMsg:E}=w();return(m,t)=>{const d=q("my-button");return D(),z("div",null,[B,H,r("div",F,[l(d,{onClick:t[0]||(t[0]=a=>v(y)("Default"))},{default:u(()=>[W]),_:1}),l(d,{onClick:t[1]||(t[1]=a=>v(N)("Success",500)),type:"success"},{default:u(()=>[V]),_:1}),l(d,{onClick:t[2]||(t[2]=a=>v(_)("Info")),type:"info"},{default:u(()=>[P]),_:1}),l(d,{onClick:t[3]||(t[3]=a=>v(M)("Warning")),type:"warning"},{default:u(()=>[j]),_:1}),l(d,{onClick:t[4]||(t[4]=a=>v(E)("Danger")),type:"danger"},{default:u(()=>[G]),_:1})]),J])}}});var Q=L(K,[["__scopeId","data-v-671e16da"],["__file","useMessage.html.vue"]]);export{Q as default};
