---
lang: zh-CN
title: 工具方法
description: 页面的描述
---
## 带图带事件的**桌面通知**

网页也可以以桌面弹框的形式进行通知，先看个效果图：
 有头像，有标题，有文本，**点击消息通知还能让窗体聚焦**，真帅。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cac0c6b24ecc4438b9b4d6db4f05fd23~tplv-k3u1fbpfcp-watermark.image)

**代码**

```js
function doNotify(title, options = {}, events = {}) {
    const notification = new Notification(title, options);
    for (let event in events) {
        notification[event] = events[event];
    }
}

function notify(title, options = {}, events = {}) {
    if (!("Notification" in window)) {
        return console.error("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {
        doNotify(title, options, events);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {           
            if (permission === "granted") {
                doNotify(title, options, events);
            }
        });
    }
}
```

**示例**
 tag还可以用去重消息。

```js
     notify("中奖提示", {
            icon: "https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/f1a9f122e925aeef5e4534ff7f706729~300x300.image",
            body: "恭喜你，掘金签到一等奖",
            tag: "prize"
        }, {
            onclick(ev) {
                console.log(ev);
                ev.target.close();
                window.focus();
            }
        })
```

## 原生30行代码实现视频截图

基本原理就是把视频画到Canvas里面，然后调用`toDataURL`或者`toBlob`，再利用a标签模拟点击，download属性指定名字。

看一下效果：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52f0f434712042fe86f89a3cd69f4977~tplv-k3u1fbpfcp-watermark.image) 

**代码**

```js
     function captureVideo(videoEl) {
            let canvasEl;
            let dataUrl;
            try {
                const cps = window.getComputedStyle(videoEl);
                const width = +cps.getPropertyValue("width").replace("px", "");
                const height = +cps.getPropertyValue("height").replace("px", "");

                canvasEl = document.createElement("canvas");
                canvasEl.style.cssText = `position:fixed;left:-9999px`;
                canvasEl.height = height;
                canvasEl.width = width;

                document.body.appendChild(canvasEl);
                
                const ctx = canvasEl.getContext("2d");
                ctx.drawImage(videoEl, 0, 0, width, height);
                // const image = canvas.toDataURL("image/png");
                dataUrl = canvasEl.toDataURL();

                document.body.removeChild(canvasEl);
                canvasEl = null;
                return dataUrl;
            } finally {
                if (canvasEl) {
                    document.body.removeChild(canvasEl);
                }
                if (dataUrl) {
                    return dataUrl;
                }
            }
        }
```

**示例**
 注意添加`crossorigin="anonymous"`，不然转为图片会失败。

```js
  <video id="videoEL" controls autoplay crossorigin="anonymous"
        src="https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4" width="500"></video>

function download(url) {
    const aEl = document.createElement("a");
    aEl.href = url;
    aEl.download = "视频.png";
    aEl.click();
}


function doCaptureVideo() {
    const url = captureVideo(videoEL);
    download(url);
}

doCaptureVideo()
```

## 基于`URLSearchParams`或`URL`获取queryString的值

常用的方式是使用正则或者`split`方法，其实不然，`URLSearchParams`和`URL`都能很好的实现功能。

**代码**

```js
const urlSP = new URLSearchParams(location.search);
const getQueryString = (key) => {
    return urlSP.get(key)
}

const urlObj = new URL(location.href);
const getQueryString = (key) => {
    return urlObj.searchParams.get(key)
}
```

**示例**

```js
测试地址： /index.html?pid=10

const log = console.log;
getQueryString

log("pid", getQueryString("pid"));  // pid 10
log("cid", getQueryString("cid"));  // cid null

复制代码
```

**参考引用**
 MDN文献：[URLSearchParams-MDN](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FURLSearchParams)
 CanIUse兼容性: [URLSearchParams: 95.63%](https://link.juejin.cn/?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3DURLSearchParams)
 Polyfill: [url-search-params-polyfill](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjerrybendy%2Furl-search-params-polyfill)

## 基于`atob`和`btoa`的base64编码和解码

浏览器内置了base64编码和解码的能力，第三方库，不需要的。

**代码**

```js
function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}
```

**示例**

```js
utf8_to_b64('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
复制代码
```

**参考引用**
 MDN文献：[atob](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWindowOrWorkerGlobalScope%2Fatob), [btoa](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWindowOrWorkerGlobalScope%2Fbtoa)
 CanIUse兼容性: [btoa 99.68%](https://link.juejin.cn/?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3Dbtoa)
 Polyfill: [MDN Polyfill](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FWindowOrWorkerGlobalScope%2Fbtoa%23polyfill)
 [Base64](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FBase64)

## **非正则替换**的html代码encode和decode

常规的方式是使用正则替换，这里是另外一种思路。

**代码**

```js
function htmlencode(s){
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(s));
    var result = div.innerHTML;
    div = null;
    return result;
}
function htmldecode(s){
    var div = document.createElement('div');
    div.innerHTML = s;
    var result = div.innerText || div.textContent;
    div = null;
    return result;
}
复制代码
```

**示例**

```
htmlencode("<div>3>5 & 666</div>"); // &lt;div&gt;3&gt;5 &amp; 666&lt;/div&gt;
htmldecode("&lt;div&gt;3&gt;5 &amp; 666&lt;/div&gt;") // <div>3>5 & 666</div>
```

## 基于`URL`或者`Crypto.getRandomValues`生成UUID

基于[URL.createObjectURL](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FURL%2FcreateObjectURL)或者[Crypto.getRandomValues](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FCrypto%2FgetRandomValues)

URL.createObjectURL 产生的地址为 `blob:https://developer.mozilla.org/cb48b940-c625-400a-a393-176c3635020b`, 其后部分就是一个UUID

**代码**
 方式一：

```js
function genUUID() {
    const url = URL.createObjectURL(new Blob([]));
    // const uuid = url.split("/").pop();
    const uuid = url.substring(url.lastIndexOf('/')+ 1);
    URL.revokeObjectURL(url);
    return uuid;
}

genUUID() // cd205467-0120-47b0-9444-894736d873c7
```

方式二：

```js
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
}

uuidv4() // 38aa1602-ba78-4368-9235-d8703cdb6037
```

## 基于`Array.from`的序列生成器

造有序数据，无序数据，等等。

**代码**

```js
const range = (start, stop, step) => Array.from(
    { length: (stop - start) / step + 1}, 
    (_, i) => start + (i * step)
);
复制代码
```

**示例**

```js
range(0, 4, 1); // [0, 1, 2, 3, 4]
range(0, 9, 3); // [0, 3, 6, 9]
range(0, 8, 2.5) // [0, 2.5, 5, 7.5]
```

## 基于`sendBeacon`的安全的数据上报

[sendBeacon](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FNavigator%2FsendBeacon) 异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能。

```js
function report(url, data) {
    if (typeof navigator.sendBeacon !== "function") {
        return console.error("sendBeacon不被支持");
    }
    navigator.sendBeacon(url, data);
}
```

**示例**

```js
window.addEventListener('unload', logData, false);
function logData() {
   report("/log", "被卸载了");
}
```

## 基于`toLocaleString`千分位

正则？ 遍历？ 不需要的。内置函数就解决。
 当然，如果是超大的数，可能是会有问题的。

**代码**

```js
const formatMoney = (num) => {
    return (+num).toLocaleString("en-US");
}
```

**示例**

```js
console.log(formatMoney(123456789));  // 123,456,789
console.log(formatMoney(6781)) // 6,781
console.log(formatMoney(5)) // 5

超大的数
formatMoney(19999999933333333333333) // 19,999,999,933,333,333,000,000
```

## 实现类似python中time.sleep()的方法

**代码**

```js
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const doSth = async () => {
  await sleep(2000);
  console.log("waited 2 second");
};

// 运行试试
doSth() 

//Promise {<pending>}
// waited 2 second

// 或者直接
await sleep(3000)
```

## Promise顺序执行

让Promise顺序的执行，并支持初始化参数和结果作为参数传递。

**代码**

```js
function runPromises(promiseCreators, initData) {
    return promiseCreators
        .reduce((promise, next) => promise
                .then((data) => next(data))
            , Promise.resolve(initData));
}
```

**示例**

```js
var promise1 = function (data = 0) {
    return new Promise(resolve => {
        resolve(data + 1000);
    });
}
var promise2 = function (data) {
    return new Promise(resolve => {
        resolve(data -500);
    });
}

runPromises([promise1, promise2], 1).then(res=>console.log(res));
```

## 滑滚动页面到顶部

**代码**

PC端滚动的根元素是`document.documentElement`,
 移动端滚动的的根元素是`document.body`,
 有一个更好的属性`document.scrollingElement`能自己识别文档的滚动元素， 其在PC端等于`document.documentElement`, 其在移动端等于`document.body`

```js
// smooth 选项在Safari上支持不好
function scrollToTop(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}

function scrollToTop() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollTop - scrollTop / 8);
    }
};
```

## 禁止选择和复制

**代码**

```js
['contextmenu', 'selectstart', 'copy'].forEach(function(ev){
    document.addEventListener(ev, function(ev){
        ev.preventDefault();
        ev.returnValue = false;
    })
});
```

当然也有CSS方案

```css
body {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}
```

## 星火矿池socketDemo

```html
<div>
<h1>GasPrice WebSocket Demo</h1>

  <h3>Current GasPrice(wei)</h3>
  
  <section>
    <div><span>Rapid:</span><b id="rapid"></b></div>
    <div><span>Fast:</span><b id="fast"></b></div>
    <div><span>Standard:</span><b id="standard"></b></div>
    <div><span>Slow:</span><b id="slow"></b></div>
  </section>
</div>
```

```css
section div {
  height: 40px;
}
section span {
  display: inline-block;
  width: 100px;
}
```

```js
let wsObj;
let wsUrl = 'wss://www.gasnow.org/ws';
let rapidObj = document.getElementById('rapid');
let fastObj = document.getElementById('fast');
let standardObj = document.getElementById('standard');
let slowObj = document.getElementById('slow');

let updatePageGasPriceData = (data) => {
  console.log(data.gasPrices);
  if (data && data.gasPrices) {
    rapidObj.innerHTML = data.gasPrices.rapid;
    fastObj.innerHTML = data.gasPrices.fast;
    standardObj.innerHTML = data.gasPrices.standard;
    slowObj.innerHTML = data.gasPrices.slow;
  }
};

wsObj = new WebSocket(wsUrl);
wsObj.onopen = (evt) => {
  console.log("Connection open ...");
};

wsObj.onmessage = (evt) => {
  const dataStr = evt.data;
  const data = JSON.parse(dataStr);
  
  if (data.type) {
    updatePageGasPriceData(data.data)
  }
};

wsObj.onclose = (evt) => {
  console.log("Connection closed.");
};
```

## 滚动条美化

```css
#recordList::-webkit-scrollbar{
  width: 4px;
  background: #fff;
}
#recordList::-webkit-scrollbar-track{
  border-radius:10px
}
#recordList::-webkit-scrollbar-thumb{
  border-radius:10px;
  background:#d0d0d0;
}
```

## 前端监控Sentry

```js
// 头部引入
<script src="https://browser.sentry-cdn.com/6.14.0/bundle.tracing.min.js" integrity="sha384-DLyuBrdVYYV0YoNbDOD4lYEidlqrKhfyEGMZ1KDL2F3X19Qe0Ng05wH1Qd4e7x7/" crossorigin="anonymous"></script>

// 初始化
<script>      Sentry.init({dsn:"https://4dfabc1feef6407eb3e3deb580d28116@o1064541.ingest.sentry.io/6055434"});
</script>

https://sentry.io/organizations/hello-eu/projects/ocm/?project=6055434
```

## HTML特殊字符转义

```js
const htmlEncodeByRegExp = (str) => { 
  let s = "";
  if(str.length == 0) return "";
  s = str.replace(/&/g,"&amp;");
  s = s.replace(/</g,"&lt;");
  s = s.replace(/>/g,"&gt;");
  s = s.replace(/ /g,"&nbsp;");
  s = s.replace(/\'/g,"'");
  s = s.replace(/\"/g,'"');
  return s; 
}

const htmlDecodeByRegExp = (str) => { 
  let s = "";
  if(str.length == 0) return "";
  s = str.replace(/&amp;/g,"&");
  s = s.replace(/&lt;/g,"<");
  s = s.replace(/&gt;/g,">");
  s = s.replace(/&nbsp;/g," ");
  s = s.replace(/'/g,"\'");
  s = s.replace(/"/g,"\"");
  return s; 
}
```

## 前端埋点--Talking Data

```js
// 头部引入
// appid:新建项目的APPID
// vn:名称（自定义）
// vc:版本号（自定义）
<script src="http://sdk.talkingdata.com/app/h5/v1?appid=466C1D0DA816445CBEC6068521414228&vn=ocm&vc=1.0.1"></script>

// 使用
var TDAPP; // 全局对象
var TDAPP_LABEL = 'PT_Detail_'; // 分类名称（自定义）
TDAPP && TDAPP.onEvent(TDAPP_LABEL+'AddModule',null,null,1)

//数值事件。数值事件是一个特殊的事件，服务端会对数值事件的数值进行sum/avg操作，使用时需要明确传入参数为数值类型，调用方法如下：
TDAPP.onEvent(EventId,Label,MapKv,value)//value必须为数值类型
```

| 参数            | 类型   | 描述                                                         |
| :-------------- | :----- | :----------------------------------------------------------- |
| EventId（必须） | String | 自定义事件ID 64个字符以内的中文、英文、数字、下划线，不要加空格或其他的转义字符 |
| Label（可选）   | String | 一个事件的子分类 64个字符以内的中文、英文、数字、下划线，不要加空格或其他的转义字符 |
| MapKv（可选）   | Json   | 事件的参数信息，描绘发生事件时的属性和场景。 Object键值对中的value如果是Number类型，服务器会做sum/avg之类的处理；如果是其他类型，按string对待，做次数统计 |
| value（可选）   | number | 仅限传入数值类型，表明当前事件为数值事件类型，服务端会对此值进行sum/avg等操作 |

## 前端URL查询参数加密解密

```js
// 1.url参数编码（跳转前页面）
const queryStr = `name=hello&pid=123&age=18&address=beijing`
const encodeStr = window.btoa(window.encodeURIComponent(queryStr))
location.href = `/page/person?${encodeStr}`

// 2.url参数解码（跳转后页面）
const urlParamsStr = window.location.search.toString().split('?')[1]
const urlParams = parseURLToObj(window.decodeURIComponent(window.atob(urlParamsStr)))

const parseURLToObj = str => {
  let obj = {}
  let list = new URLSearchParams(str)
  list.forEach((val,key) => {
    obj[key] = val
  })
  return obj
}

// 3.参数使用
const { name, pid, age, address } = urlParams
```

## 前端生成随机Icon

```js
const randomRgbaColor = () => {
  //随机生成RGBA颜色
  var r = Math.floor(Math.random() * 256); //随机生成256以内r值
  var g = Math.floor(Math.random() * 256); //随机生成256以内g值
  var b = Math.floor(Math.random() * 256); //随机生成256以内b值
  var alpha = Math.random(); //随机生成1以内a值
  return `rgb(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式颜色
};

// icon
const generateIcon = (size, text) => {
  let cvs = document.createElement("canvas");
  cvs.setAttribute("width", size[0]);
  cvs.setAttribute("height", size[1]);
  let ctx = cvs.getContext("2d");
  ctx.fillStyle = randomRgbaColor();
  ctx.fillRect(0, 0, size[0], size[1]);
  ctx.fillStyle = "rgb(255,255,255)";
  ctx.font = size[0] * 0.6 + "px Arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(text, size[0] / 2, size[1] / 2);

  return cvs.toDataURL("image/jpeg", 1);
};
```


