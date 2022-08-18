---
lang: zh-CN
title: Vscode代码片段
description: Vscode代码片段
---
::: tip Usage
Vscode>文件>首选项>Config User Snippets
:::
::: warning Code snippets
```js
{
  // Place your 全局 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
  // Placeholders with the same ids are connected.
  // Example:
  "log": {
    "prefix": "log",
    "body": [
      "/**",
      " * @func log",
      " * @desc 📝 Logs a message to the console.",
      " * @example log.info('Hello world'); log.error('Oh no!');",
      " */",
      "const log = {",
      "    info: (...args) => console.log(`%c%s`, 'color: #9E9E9E', ...args),",
      "    error: (...args) => console.log(`%c%s`, 'color: #d81e06', ...args),",
      "    warn: (...args) => console.log(`%c%s`, 'color: #ffc107', ...args),",
      "    debug: (...args) => console.log(`%c%s`, 'color: #2196f3', ...args),",
      "    success: (...args) => console.log(`%c%s`, 'color: #4caf50', ...args),",
      "    color: (color) => (...args) => console.log(`%c%s`, `color: ${color}`, ...args),",
      "};"
    ],
    "description": "log by hello!"
  },
  "getRandNum": {
    "prefix": "getRandNum",
    "body": [
      "//获取随机数",
      "function getRandNum(min, max) {",
      "return parseInt(Math.random() * (max - min + 1) + min);",
      "};"
    ],
    "description": "getRandNum by hello!"
  },
  "randomNum": {
    "prefix": "randomNum",
    "body": [
      "//获取随机数",
      "const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;",
    ],
    "description": "randomNum by hello!"
  },
  "flattenArr": {
    "prefix": "flattenArr",
    "body": [
      "//数组扁平化",
      "const flatten = (arr) => {",
      "  let result = [];",
      "",
      "  for(let i = 0; i < arr.length; i++) {",
      "    if(Array.isArray(arr[i])) {",
      "      result = result.concat(flatten(arr[i]));",
      "    } else {",
      "      result.push(arr[i]);",
      "    }",
      "  }",
      "  return result;",
      "};",
    ],
    "description": "flattenArr by hello!"
  },
  "randomString": {
    "prefix": "randomString",
    "body": [
      "//生成随机字符串",
      "const randomString = (len) => {",
      "  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';",
      "  let strLen = chars.length;",
      "  let randomStr = '';",
      "  for (let i = 0; i < len; i++) {",
      "      randomStr += chars.charAt(Math.floor(Math.random() * strLen));",
      "  }",
      "  return randomStr;",
      "};",
    ],
    "description": "randomString by hello!"
  },
  "firstLetterUpper": {
    "prefix": "firstLetterUpper",
    "body": [
      "//字符串首字母大写",
      "const fistLetterUpper = (str) => {",
      "  return str.charAt(0).toUpperCase() + str.slice(1);",
      "};",
    ],
    "description": "firstLetterUpper by hello!"
  },
  "formatPhoneNum": {
    "prefix": "formatPhoneNum",
    "body": [
      "//手机号中间四位变成*",
      "const formatPhoneNum = (tel) => {",
      "  tel = String(tel); ",
      "  return tel.substr(0,3) + '****' + tel.substr(7);",
      "};",
    ],
    "description": "formatPhoneNum by hello!"
  },
  "getKebabCase": {
    "prefix": "getKebabCase",
    "body": [
      "//驼峰命名转换成短横线命名",
      "const getKebabCase = (str) => {",
      "  return str.replace(/[A-Z]/g, (item) => '-' + item.toLowerCase())",
      "};",
    ],
    "description": "getKebabCase by hello!"
  },
  "getCamelCase": {
    "prefix": "getCamelCase",
    "body": [
      "//短横线命名转换成驼峰命名",
      "const getCamelCase = (str) => {",
      "  return str.replace( /-([a-z])/g, (i, item) => item.toUpperCase())",
      "};",
    ],
    "description": "getCamelCase by hello!"
  },
  "intToChinese": {
    "prefix": "intToChinese",
    "body": [
      "//数字转化为中文数字",
      "const intToChinese = (value) => {",
      "  const str = String(value);",
      "  const len = str.length-1;",
      "  const idxs = ['','十','百','千','万','十','百','千','亿','十','百','千','万','十','百','千','亿'];",
      "  const num = ['零','一','二','三','四','五','六','七','八','九'];",
      "  return str.replace(/([1-9]|0+)/g, ( $, $1, idx, full) => {",
      "     let pos = 0;",
      "     if($1[0] !== '0'){",
      "       pos = len-idx;",
      "       if(idx == 0 && $1[0] == 1 && idxs[len-idx] == '十'){",
      "          return idxs[len-idx];",
      "       }",
      "        return num[$1[0]] + idxs[len-idx];",
      "     } else {",
      "        let left = len - idx;",
      "        let right = len - idx + $1.length;",
      "        if(Math.floor(right / 4) - Math.floor(left / 4) > 0){",
      "           pos = left - left % 4;",
      "        }",
      "        if( pos ){",
      "           return idxs[pos] + num[$1[0]];",
      "        } else if( idx + $1.length >= len ){",
      "           return '';",
      "        }else {",
      "           return num[$1[0]]",
      "        }",
      "     }",
      "    });",
      " };",
    ],
    "description": "intToChinese by hello!"
  },
  "digitUppercase": {
    "prefix": "digitUppercase",
    "body": [
      "//数字转化为大写金额",
      "const digitUppercase = (n) => {",
      "  const fraction = ['角', '分'];",
      "  const digit = [",
      "      '零', '壹', '贰', '叁', '肆',",
      "      '伍', '陆', '柒', '捌', '玖'",
      "  ];",
      "  const unit = [",
      "      ['元', '万', '亿'],",
      "      ['', '拾', '佰', '仟']",
      "  ];",
      "  n = Math.abs(n);",
      "  let s = '';",
      "  for (let i = 0; i < fraction.length; i++) {",
      "      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');",
      "  }",
      "  s = s || '整';",
      "  n = Math.floor(n);",
      "  for (let i = 0; i < unit[0].length && n > 0; i++) {",
      "      let p = '';",
      "      for (let j = 0; j < unit[1].length && n > 0; j++) {",
      "          p = digit[n % 10] + unit[1][j] + p;",
      "          n = Math.floor(n / 10);",
      "      }",
      "      s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;",
      "  }",
      "  return s.replace(/(零.)*零元/, '元')",
      "      .replace(/(零.)+/g, '零')",
      "      .replace(/^整$/, '零元整');",
      "};",
    ],
    "description": "digitUppercase by hello!"
  },
  "loalStorageSet": {
    "prefix": "loalStorageSet",
    "body": [
      "//存储loalStorage",
      "const loalStorageSet = (key, value) => {",
      "  if (!key) return;",
      "  if (typeof value !== 'string') {",
      "      value = JSON.stringify(value);",
      "  }",
      "  window.localStorage.setItem(key, value);",
      "};",
    ],
    "description": "loalStorageSet by hello!"
  },
  "loalStorageGet": {
    "prefix": "loalStorageGet",
    "body": [
      "//获取localStorage",
      "const loalStorageGet = (key) => {",
      "  if (!key) return;",
      "  return window.localStorage.getItem(key);",
      "};",
    ],
    "description": "loalStorageGet by hello!"
  },
  "loalStorageRemove": {
    "prefix": "loalStorageRemove",
    "body": [
      "//删除localStorage",
      "const loalStorageRemove = (key) => {",
      "  if (!key) return;",
      "  window.localStorage.removeItem(key);",
      "};",
    ],
    "description": "loalStorageRemove by hello!"
  },
  "sessionStorageSet": {
    "prefix": "sessionStorageSet",
    "body": [
      "//存储sessionStorage",
      "const sessionStorageSet = (key, value) => {",
      "  if (!key) return;",
      "  if (typeof value !== 'string') {",
      "      value = JSON.stringify(value);",
      "  }",
      "  window.sessionStorage.setItem(key, value)",
      "};",
    ],
    "description": "sessionStorageSet by hello!"
  },
  "sessionStorageGet": {
    "prefix": "sessionStorageGet",
    "body": [
      "//获取sessionStorage",
      "const sessionStorageGet = (key) => {",
      "  if (!key) return;",
      "  return window.sessionStorage.getItem(key)",
      "};",
    ],
    "description": "sessionStorageGet by hello!"
  },
  "sessionStorageRemove": {
    "prefix": "sessionStorageRemove",
    "body": [
      "//删除sessionStorage",
      "const sessionStorageRemove = (key) => {",
      "  if (!key) return;",
      "  window.sessionStorage.removeItem(key)",
      "};",
    ],
    "description": "sessionStorageRemove by hello!"
  },
  "setCookie": {
    "prefix": "setCookie",
    "body": [
      "//设置cookie",
      "const setCookie = (key, value, expire) => {",
      "  const d = new Date();",
      "  d.setDate(d.getDate() + expire);",
      "  document.cookie = `${key}=${value};expires=${d.toUTCString()}`",
      "};",
    ],
    "description": "setCookie by hello!"
  },
  "getCookie": {
    "prefix": "getCookie",
    "body": [
      "//获取cookie",
      "const getCookie = (key) => {",
      "  // Environmental Test",
      "  if (!isBrowser)",
      "      throw new Error(\"Non-browser environment, unavailable 'getCookie'\");",
      "  if (!document.cookie)",
      "      throw new Error('No Cookie Found');",
      "  if (key) {",
      "      const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`);",
      "      const arr = document.cookie.match(reg);",
      "      return arr ? arr[2] : undefined;",
      "  }",
      "  // Get Cookies && String => Array",
      "  return document.cookie.split(';');",
      "};",
    ],
    "description": "getCookie by hello!"
  },
  "delCookie": {
    "prefix": "delCookie",
    "body": [
      "//删除cookie",
      "const delCookie = (key) => {",
      "  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`",
      "};",
    ],
    "description": "delCookie by hello!"
  },
  "scrollToTop": {
    "prefix": "scrollToTop",
    "body": [
      "//滚动到页面顶部",
      "const scrollToTop = () => {",
      "  const height = document.documentElement.scrollTop || document.body.scrollTop;",
      "  if (height > 0) {",
      "    window.requestAnimationFrame(scrollToTop);",
      "    window.scrollTo(0, height - height / 8);",
      "  }",
      "};",
    ],
    "description": "scrollToTop by hello!"
  },
  "scrollToBottom": {
    "prefix": "scrollToBottom",
    "body": [
      "//滚动到页面底部",
      "const scrollToBottom = () => {",
      "  window.scrollTo(0, document.documentElement.clientHeight);",
      "};",
    ],
    "description": "scrollToBottom by hello!"
  },
  "smoothScroll": {
    "prefix": "smoothScroll",
    "body": [
      "//滚动到指定元素区域",
      "const smoothScroll = (element) => {",
      "  document.querySelector(element).scrollIntoView({",
      "      behavior: 'smooth'",
      "  });",
      "};",
    ],
    "description": "smoothScroll by hello!"
  },
  "getClientHeight": {
    "prefix": "getClientHeight",
    "body": [
      "//获取可视窗口高度",
      "const getClientHeight = () => {",
      "  let clientHeight = 0;",
      "  if (document.body.clientHeight && document.documentElement.clientHeight) {",
      "      clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;",
      "  }",
      "  else {",
      "      clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;",
      "  }",
      "  return clientHeight;",
      "};",
    ],
    "description": "getClientHeight by hello!"
  },
  "getPageViewWidth": {
    "prefix": "getPageViewWidth",
    "body": [
      "//获取可视窗口宽度",
      "const getPageViewWidth = () => {",
      "  return (document.compatMode == 'BackCompat' ? document.body : document.documentElement).clientWidth;",
      "};",
    ],
    "description": "getPageViewWidth by hello!"
  },
  "toFullScreen": {
    "prefix": "toFullScreen",
    "body": [
      "//打开浏览器全屏",
      "const toFullScreen = () => {",
      "  let element = document.body;",
      "  if (element.requestFullscreen) {",
      "    element.requestFullscreen()",
      "  } else if (element.mozRequestFullScreen) {",
      "    element.mozRequestFullScreen()",
      "  } else if (element.msRequestFullscreen) {",
      "    element.msRequestFullscreen()",
      "  } else if (element.webkitRequestFullscreen) {",
      "    element.webkitRequestFullScreen()",
      "  }",
      "};",
    ],
    "description": "toFullScreen by hello!"
  },
  "exitFullscreen": {
    "prefix": "exitFullscreen",
    "body": [
      "//退出浏览器全屏",
      "const exitFullscreen = () => {",
      "  if (document.exitFullscreen) {",
      "    document.exitFullscreen()",
      "  } else if (document.msExitFullscreen) {",
      "    document.msExitFullscreen()",
      "  } else if (document.mozCancelFullScreen) {",
      "    document.mozCancelFullScreen()",
      "  } else if (document.webkitExitFullscreen) {",
      "    document.webkitExitFullscreen()",
      "  }",
      "};",
    ],
    "description": "exitFullscreen by hello!"
  },
  "diffDays": {
    "prefix": "diffDays",
    "body": [
      "//比较两个日期相差的天数",
      "const diffDays = () => {",
      "  const time1 = date1.getTime();",
      "  const time2 = date2.getTime();",
      "  const diff = Math.abs(time1 >= time2 ? time1 - time2 : time2 - time1);",
      "  return Math.floor(diff / (1000 * 60 * 60 * 24))",
      "};",
    ],
    "description": "diffDays by hello!"
  },
  "formatPassTime": {
    "prefix": "formatPassTime",
    "body": [
      "//格式化${startTime}距现在的已过时间",
      "const formatPassTime = () => {",
      "  let currentTime = Date.parse(new Date().toString()), starT = startTime ? Date.parse(new Date(startTime).toString()) : currentTime, time = currentTime - starT, day = parseInt(String(time / (1000 * 60 * 60 * 24))), hour = parseInt(String(time / (1000 * 60 * 60))), min = parseInt(String(time / (1000 * 60))), sec = parseInt(String(time / 1000)), month = parseInt(String(day / 30)), year = parseInt(String(month / 12));",
      "  if (year)",
      "      return year + '年前';",
      "  if (month)",
      "      return month + '个月前';",
      "  if (day)",
      "      return day + '天前';",
      "  if (hour)",
      "      return hour + '小时前';",
      "  if (min)",
      "      return min + '分钟前';",
      "  if (sec)",
      "      return sec + '秒前';",
      "  else",
      "      return '刚刚';",
      "};",
    ],
    "description": "formatPassTime by hello!"
  },
  "formatRemainTime": {
    "prefix": "formatRemainTime",
    "body": [
      "//格式化现在距${endTime}的剩余时间",
      "const formatRemainTime = () => {",
      "  let startDate = new Date(); //开始时间",
      "  let endDate = new Date(endTime); //结束时间",
      "  let t = endDate.getTime() - startDate.getTime(); //时间差",
      "  let d = 0, h = 0, m = 0, s = 0;",
      "  if (t >= 0) {",
      "      d = Math.floor(t / 1000 / 3600 / 24);",
      "      h = Math.floor(t / 1000 / 60 / 60 % 24);",
      "      m = Math.floor(t / 1000 / 60 % 60);",
      "      s = Math.floor(t / 1000 % 60);",
      "  }",
      "  return d + '天 ' + h + '小时 ' + m + '分钟 ' + s + '秒';",
      "};",
    ],
    "description": "formatRemainTime by hello!"
  },
  "getDaysByMonth": {
    "prefix": "getDaysByMonth",
    "body": [
      "//当前时间",
      "const getDaysByMonth = () => {",
      "  time = new Date(time);",
      "  let year = time.getFullYear();",
      "  let month = time.getMonth() + 1;",
      "  return new Date(year, month, 0).getDate();",
      "};",
    ],
    "description": "getDaysByMonth by hello!"
  },
  "getNowTime": {
    "prefix": "getNowTime",
    "body": [
      "//当前时间",
      "const getNowTime = () => {",
      "  const now = new Date();",
      "  const year = now.getFullYear();",
      "  const month = now.getMonth();",
      "  const date = now.getDate() >= 10 ? now.getDate() : ('0' + now.getDate());",
      "  const hour = now.getHours() >= 10 ? now.getHours() : ('0' + now.getHours());",
      "  const miu = now.getMinutes() >= 10 ? now.getMinutes() : ('0' + now.getMinutes());",
      "  const sec = now.getSeconds() >= 10 ? now.getSeconds() : ('0' + now.getSeconds());",
      "  return +year + '年' + (month + 1) + '月' + date + '日 ' + hour + ':' + miu + ':' + sec;",
      "};",
    ],
    "description": "getNowTime by hello!"
  },
  "dateFormater": {
    "prefix": "dateFormater",
    "body": [
      "//格式化时间",
      "const dateFormater = (formater, time) => {",
      "  let date = time ? new Date(time) : new Date(),",
      "      Y = date.getFullYear() + '',",
      "      M = date.getMonth() + 1,",
      "      D = date.getDate(),",
      "      H = date.getHours(),",
      "      m = date.getMinutes(),",
      "      s = date.getSeconds();",
      "  return formater.replace(/YYYY|yyyy/g, Y)",
      "      .replace(/YY|yy/g, Y.substr(2, 2))",
      "      .replace(/MM/g,(M<10 ? '0' : '') + M)",
      "      .replace(/DD/g,(D<10 ? '0' : '') + D)",
      "      .replace(/HH|hh/g,(H<10 ? '0' : '') + H)",
      "      .replace(/mm/g,(m<10 ? '0' : '') + m)",
      "      .replace(/ss/g,(s<10 ? '0' : '') + s)",
      "};",
      "// dateFormater('YYYY-MM-DD HH:mm:ss')",
      "// dateFormater('YYYYMMDDHHmmss')",
    ],
    "description": "dateFormater by hello!"
  },
  "debounce_": {
    "prefix": "debounce",
    "body": [
      "//防抖函数带回调",
      "function debounce(fn, delay, immdiate = false, resultCallback) {",
      "  let timer = null",
      "  let isInvoke = false",
      "  function _debounce(...arg) {",
      "    if (timer) clearTimeout(timer)",
      "    if (immdiate && !isInvoke) {",
      "      const result = fn.apply(this, arg)",
      "      if (resultCallback && typeof resultCallback === 'function') resultCallback(result)",
      "      isInvoke = true",
      "    } else {",
      "      timer = setTimeout(() => {",
      "        const result = fn.apply(this, arg)",
      "        if (resultCallback && typeof resultCallback === 'function') resultCallback(result)",
      "        isInvoke = false",
      "        timer = null",
      "      }, delay)",
      "    }",
      "",
      "  }",
      "",
      "  _debounce.cancel = function () {",
      "    if (timer) clearTimeout(timer)",
      "    timer = null",
      "    isInvoke = false",
      "  }",
      "",
      "  return _debounce",
      "}",
    ],
    "description": "debounce by hello!"
  },
  "debounce": {
    "prefix": "debounce",
    "body": [
      "//防抖函数",
      "const debounce = (fn, wait) => {",
      "  let timer = null;",
      "",
      "  return function() {",
      "    let context = this,",
      "        args = arguments;",
      "",
      "    if (timer) {",
      "      clearTimeout(timer);",
      "      timer = null;",
      "    }",
      "",
      "    timer = setTimeout(() => {",
      "      fn.apply(context, args);",
      "    }, wait);",
      "  };",
      "};",
    ],
    "description": "debounce by hello!"
  },
  "throttle": {
    "prefix": "throttle",
    "body": [
      "//节流函数",
      "const throttle = (fn, delay) => {",
      "  let curTime = Date.now();",
      "",
      "  return function() {",
      "    let context = this,",
      "        args = arguments,",
      "        nowTime = Date.now();",
      "",
      "    if (nowTime - curTime >= delay) {",
      "      curTime = Date.now();",
      "      return fn.apply(context, args);",
      "    }",
      "  };",
      "}",
    ],
    "description": "throttle by hello!"
  },
  "getType": {
    "prefix": "getType",
    "body": [
      "//数据类型判断",
      "const getType = (value) => {",
      "  if (value === null) {",
      "    return value + '';",
      "  }",
      "  // 判断数据是引用类型的情况",
      "  if (typeof value === 'object') {",
      "    let valueClass = Object.prototype.toString.call(value),",
      "      type = valueClass.split(' ')[1].split('');",
      "    type.pop();",
      "    return type.join('').toLowerCase();",
      "  } else {",
      "    // 判断数据是基本数据类型的情况和函数的情况",
      "    return typeof value;",
      "  }",
      "};",
    ],
    "description": "getType by hello!"
  },
  "getTypeOf": {
    "prefix": "getTypeOf",
    "body": [
      "/**",
      " * @func getTypeOf",
      " * @param {unknown} param",
      " * @returns {string}",
      " * @desc 获取参数类型",
      " * @example getTypeOf(...)",
      " * String, Number, Boolean, Symbol, Null, Undefined, Object",
      " * Array, RegExp, Date, Error, Function, AsyncFunction, HTMLDocument",
      " */",
      "const getTypeOf = (param) => {",
      "    const type = Object.prototype.toString.call(param).slice(8, -1);",
      "    return type.toLowerCase();",
      "};",
    ],
    "description": "getTypeOf by hello!"
  },
  "deepClone": {
    "prefix": "deepClone",
    "body": [
      "//对象深拷贝",
      "const deepClone = (obj, hash = new WeakMap() => {",
      "  // 日期对象直接返回一个新的日期对象",
      "  if (obj instanceof Date){",
      "    return new Date(obj);",
      "  }", 
      "  //正则对象直接返回一个新的正则对象",     
      "  if (obj instanceof RegExp){",
      "    return new RegExp(obj);",     
      "  }",
      "  //如果循环引用,就用 weakMap 来解决",
      "  if (hash.has(obj)){",
      "    return hash.get(obj);",
      "  }",
      "  // 获取对象所有自身属性的描述",
      "  let allDesc = Object.getOwnPropertyDescriptors(obj);",
      "  // 遍历传入参数所有键的特性",
      "  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)",
      "",  
      "  hash.set(obj, cloneObj)",
      "  for (let key of Reflect.ownKeys(obj)) {", 
      "    if(typeof obj[key] === 'object' && obj[key] !== null){",
      "      cloneObj[key] = deepClone(obj[key], hash);",
      "    } else {",
      "      cloneObj[key] = obj[key];",
      "    }",
      "  }",
      "  return cloneObj",
      "};",
    ],
    "description": "deepClone by hello!"
  },
  "getQueryString": {
    "prefix": "getQueryString",
    "body": [
      "//基于`URLSearchParams`或`URL`获取queryString的值",
      "const urlSP = new URLSearchParams(location.search);",
      "const getQueryString = (key) => {",
      "    return urlSP.get(key)",
      "}",
      "",
      "const urlObj = new URL(location.href);",
      "const getQueryString = (key) => {",
      "    return urlObj.searchParams.get(key)",
      "}",
    ],
    "description": "getQueryString by hello!"
  },
  "formatMoney": {
    "prefix": "formatMoney",
    "body": [
      "//基于`toLocaleString`千分位",
      "const formatMoney = (num) => {",
      "  return (+num).toLocaleString('en-US');",
      "};",
    ],
    "description": "formatMoney by hello!"
  },
  "formatMoneyByReg": {
    "prefix": "formatMoney",
    "body": [
      "//基于正则千分位",
      "const formatMoney = (money) => {",
      "  return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'), ',');",
      "};",
    ],
    "description": "formatMoney by hello!"
  },
  "uniqueArrByFilter": {
    "prefix": "uniqueArrByFilter",
    "body": [
      "//基于`filter&Map`进行数组去重",
      "const uniqueArr = (arr, uniId) =>{",
      "  const res = new Map();",
      "  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));",
      "};",
    ],
    "description": "uniqueArrByFilter by hello!"
  },
  "uniqueArrByReduce": {
    "prefix": "uniqueArrByReduce",
    "body": [
      "//基于`reduce`进行数组去重",
      "const uniqueArrByReduce = (arr, uniId) =>{",
      "  let hash = {}",
      "  return arr.reduce((accum,item) => {",
      "    hash[item[uniId]] ? '' : hash[item[uniId]] = true && accum.push(item)",
      "    return accum",
      "  },[])",
      "};",
    ],
    "description": "uniqueArrByReduce by hello!"
  },
  "uniqueArrByFor": {
    "prefix": "uniqueArrByFor",
    "body": [
      "//基于`for`进行数组去重",
      "const uniqueArrByFor = (arr, uniId) => {",
      "  let obj = {}",
      "  let tempArr = []",
      "  for(var i = 0; i<arr.length; i++){",
      "    if(!obj[arr[i][uniId]]){",
      "      tempArr.push(arr[i])",
      "      obj[arr[i][uniId]] = true",
      "    }",
      "  }",
      "  return tempArr",
      "}",
    ],
    "description": "uniqueArrByFor by hello!"
  },
  "sleep": {
    "prefix": "sleep",
    "body": [
      "//实现类似python中time.sleep()的方法",
      "const sleep = (ms) => {",
      "  return new Promise((resolve) => setTimeout(resolve, ms));",
      "};",
      "",
      "const doSth = async () => {",
      "  await sleep(2000);",
      "  console.log('waited 2 second');",
      "};",
      "",
      "// 运行试试",
      "doSth()", 
      "",
      "//Promise {<pending>}",
      "// waited 2 second",
      "",
      "// 或者直接",
      "await sleep(3000)",
    ],
    "description": "sleep by hello!"
  },
  "getRgbColor": {
    "prefix": "getRgbColor",
    "body": [
      "// 获取随机rgba颜色",
      "const getRgbColor = (flag) => {",
      "  var r = getRandNum(0, 255);",
      "  var g = getRandNum(0, 255);",
      "  var b = getRandNum(0, 255);",
      "  return flag ? `rgba(${r},${g},${b},${Math.random().toFixed(2)*1})` : `rgba(${r},${g},${b})`;",
      "}"
    ],
    "description": "getRgbColor by hello!"
  },
  "getRandomColor": {
    "prefix": "getRandomColor",
    "body": [
      "// 获取随机16进制颜色",
     "const getRandomColor = () => {",
     "  let r = Math.floor(Math.random()*256);",
     "  let g = Math.floor(Math.random()*256);",
     "  let b = Math.floor(Math.random()*256);",
     "  let color = '#'+r.toString(16)+g.toString(16)+b.toString(16);",
     "  return color;",
     "}"
    ],
    "description": "getRandomColor by hello!"
  },
  "getEleStyle": {
    "prefix": "getEleStyle",
    "body": [
      "/* 获取标签的样式（兼容写法） ",
      "传入参数ele标签名，name样式名*/",
      "function getEleStyle(ele,name){",
      "if(ele.currentStyle){",
      "return ele.currentStyle[name];",
      "}else if(window.getComputedStyle){",
      "return window.getComputedStyle(ele)[name];",
      "}else{",
      "return ele.style[name];",
      "}",
      "}"
    ],
    "description": "getEleStyle by hello!"
  },
  "sortUp": {
    "prefix": "sortUp",
    "body": [
      "//数组排序（升序）",
      "function sortUp(arr) {",
      "arr.sort(function (a, b) {return a - b;});",
      "return arr;",
      "}",
    ],
    "description": "sortUp by hello!"
  },
  "sortDown": {
    
    "prefix": "sortDown",
    "body": [
      "//数组排序（降序）",
      "function sortDown(arr) {",
      "arr.sort(function (a, b) {return b - a;});",
      "return arr;",
      "}",
    ],
    "description": "sortDown by hello!"
  },
  "unique": {
    "prefix": "unique",
    "body": [
      "//数组去重ES6（Set版）",
      "function unique(arr) {",
      "return Array.from(new Set(arr));",
      "}"
    ],
    "description": "uniqueArr by hello!"
  },
  "arrMax": {
    "prefix": "arrMax",
    "body": [
      "//数组最大值",
      "function arrMax(arr) {",
      "return Math.max.apply(null, arr);",
      "}"
    ],
    "description": "arrayMax by hello!"
  },
  "arrMin": {
    "prefix": "arrMin",
    "body": [
      "//数组最小值",
      "function arrMin(arr) {",
      "return Math.min.apply(null, arr);",
      "}"
    ],
    "description": "arrayMin by hello!"
  },
  "@": {
    "prefix": "@",
    "body": [
      "/**",
      "* @func funcName",
      "* @param {string} stringParam",
      "* @returns {number}",
      "* @desc description...",
      "*/"
    ],
    "description": "函数定义描述示例"
  },
  "@2": {
    "prefix": "@2",
    "body": [
      "/**",
      "* @func funcName",
      "* @returns {number}",
      "* @desc description...",
      "*/"
    ],
    "description": "函数定义描述示例"
  },
  "jqsrc": {
    "prefix": "jqsrc",
    "body": [
      "<script src=\"https://code.jquery.com/jquery-3.4.1.js\"></script>"
    ],
    "description": "jQuery CDN"
  },
  "cdnjq": {
    "prefix": "cdnjq",
    "body": [
      "<script src=\"https://cdn.bootcss.com/jquery/3.4.1/jquery.js\"></script>"
    ],
    "description": "jQuery CDN"
  },
  "cdnvue": {
    "prefix": "cdnvue",
    "body": [
      "<script src=\"https://cdn.jsdelivr.net/npm/vue@2.6.0\"></script>"
    ],
    "description": "Vue CDN"
  },
  "jqpage": {
    "prefix": "jqpage",
    "body": [
      "$(() => {})"
    ],
    "description": "jquery 监听页面"
  },
  "rn": {
    
    "prefix": "rn",
    "body": [
			"import React, { Component } from 'react';",
      "import {View, Text, StyleSheet} from 'react-native';",
      "export default class Add extends Component {",
        "constructor(props) {",
          "super(props);",
          "this.state = {};",
      "}",

      "render() {",
        "return (",
          "<View style={styles.container}>",
            "<Text>Add</Text>",
          "</View>",
          ");",
        "}",
      "}",

      "const styles = StyleSheet.create({",
        "container: {",
          "flex: 1",
        "},",
      "})",
    ],
    "description": "ReactNative Template by hehuan!"
  },
}
```
:::