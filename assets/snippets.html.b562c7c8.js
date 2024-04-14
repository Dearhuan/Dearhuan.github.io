import{_ as n,o as s,c as a,d as t}from"./app.0d156cc5.js";const o={},p=t(`<h1 id="vscode-snippets" tabindex="-1"><a class="header-anchor" href="#vscode-snippets" aria-hidden="true">#</a> VSCode Snippets</h1><div class="custom-container tip"><p class="custom-container-title">Usage</p><p>Vscode&gt;\u6587\u4EF6&gt;\u9996\u9009\u9879&gt;Config User Snippets</p></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// Place your \u5168\u5C40 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and </span>
  <span class="token comment">// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope </span>
  <span class="token comment">// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is </span>
  <span class="token comment">// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: </span>
  <span class="token comment">// $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders. </span>
  <span class="token comment">// Placeholders with the same ids are connected.</span>
  <span class="token comment">// Example:</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;log&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;/**&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * @func log&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * @desc \u{1F4DD} Logs a message to the console.&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * @example log.info(&#39;Hello world&#39;); log.error(&#39;Oh no!&#39;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; */&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const log = {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    info: (...args) =&gt; console.log(\`%c%s\`, &#39;color: #9E9E9E&#39;, ...args),&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    error: (...args) =&gt; console.log(\`%c%s\`, &#39;color: #d81e06&#39;, ...args),&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    warn: (...args) =&gt; console.log(\`%c%s\`, &#39;color: #ffc107&#39;, ...args),&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    debug: (...args) =&gt; console.log(\`%c%s\`, &#39;color: #2196f3&#39;, ...args),&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    success: (...args) =&gt; console.log(\`%c%s\`, &#39;color: #4caf50&#39;, ...args),&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    color: (color) =&gt; (...args) =&gt; console.log(\`%c%s\`, \`color: \${color}\`, ...args),&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;log by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getRandNum&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getRandNum&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u83B7\u53D6\u968F\u673A\u6570&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;function getRandNum(min, max) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;return parseInt(Math.random() * (max - min + 1) + min);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getRandNum by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;randomNum&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;randomNum&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u83B7\u53D6\u968F\u673A\u6570&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const randomNum = (min, max) =&gt; Math.floor(Math.random() * (max - min + 1)) + min;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;randomNum by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;flattenArr&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flattenArr&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6570\u7EC4\u6241\u5E73\u5316&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const flatten = (arr) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let result = [];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  for(let i = 0; i &lt; arr.length; i++) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    if(Array.isArray(arr[i])) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      result = result.concat(flatten(arr[i]));&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    } else {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      result.push(arr[i]);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return result;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flattenArr by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;randomString&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;randomString&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u751F\u6210\u968F\u673A\u5B57\u7B26\u4E32&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const randomString = (len) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let chars = &#39;ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let strLen = chars.length;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let randomStr = &#39;&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  for (let i = 0; i &lt; len; i++) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      randomStr += chars.charAt(Math.floor(Math.random() * strLen));&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return randomStr;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;randomString by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;firstLetterUpper&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;firstLetterUpper&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u5B57\u7B26\u4E32\u9996\u5B57\u6BCD\u5927\u5199&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const fistLetterUpper = (str) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return str.charAt(0).toUpperCase() + str.slice(1);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;firstLetterUpper by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;formatPhoneNum&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;formatPhoneNum&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u624B\u673A\u53F7\u4E2D\u95F4\u56DB\u4F4D\u53D8\u6210*&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const formatPhoneNum = (tel) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  tel = String(tel); &quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return tel.substr(0,3) + &#39;****&#39; + tel.substr(7);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;formatPhoneNum by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getKebabCase&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getKebabCase&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u9A7C\u5CF0\u547D\u540D\u8F6C\u6362\u6210\u77ED\u6A2A\u7EBF\u547D\u540D&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getKebabCase = (str) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return str.replace(/[A-Z]/g, (item) =&gt; &#39;-&#39; + item.toLowerCase())&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getKebabCase by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getCamelCase&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getCamelCase&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u77ED\u6A2A\u7EBF\u547D\u540D\u8F6C\u6362\u6210\u9A7C\u5CF0\u547D\u540D&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getCamelCase = (str) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return str.replace( /-([a-z])/g, (i, item) =&gt; item.toUpperCase())&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getCamelCase by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;intToChinese&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;intToChinese&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6570\u5B57\u8F6C\u5316\u4E3A\u4E2D\u6587\u6570\u5B57&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const intToChinese = (value) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const str = String(value);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const len = str.length-1;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const idxs = [&#39;&#39;,&#39;\u5341&#39;,&#39;\u767E&#39;,&#39;\u5343&#39;,&#39;\u4E07&#39;,&#39;\u5341&#39;,&#39;\u767E&#39;,&#39;\u5343&#39;,&#39;\u4EBF&#39;,&#39;\u5341&#39;,&#39;\u767E&#39;,&#39;\u5343&#39;,&#39;\u4E07&#39;,&#39;\u5341&#39;,&#39;\u767E&#39;,&#39;\u5343&#39;,&#39;\u4EBF&#39;];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const num = [&#39;\u96F6&#39;,&#39;\u4E00&#39;,&#39;\u4E8C&#39;,&#39;\u4E09&#39;,&#39;\u56DB&#39;,&#39;\u4E94&#39;,&#39;\u516D&#39;,&#39;\u4E03&#39;,&#39;\u516B&#39;,&#39;\u4E5D&#39;];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return str.replace(/([1-9]|0+)/g, ( $, $1, idx, full) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;     let pos = 0;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;     if($1[0] !== &#39;0&#39;){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;       pos = len-idx;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;       if(idx == 0 &amp;&amp; $1[0] == 1 &amp;&amp; idxs[len-idx] == &#39;\u5341&#39;){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;          return idxs[len-idx];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;       }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        return num[$1[0]] + idxs[len-idx];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;     } else {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        let left = len - idx;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        let right = len - idx + $1.length;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        if(Math.floor(right / 4) - Math.floor(left / 4) &gt; 0){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;           pos = left - left % 4;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        if( pos ){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;           return idxs[pos] + num[$1[0]];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        } else if( idx + $1.length &gt;= len ){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;           return &#39;&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        }else {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;           return num[$1[0]]&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;     }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    });&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; };&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;intToChinese by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;digitUppercase&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;digitUppercase&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6570\u5B57\u8F6C\u5316\u4E3A\u5927\u5199\u91D1\u989D&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const digitUppercase = (n) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const fraction = [&#39;\u89D2&#39;, &#39;\u5206&#39;];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const digit = [&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      &#39;\u96F6&#39;, &#39;\u58F9&#39;, &#39;\u8D30&#39;, &#39;\u53C1&#39;, &#39;\u8086&#39;,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      &#39;\u4F0D&#39;, &#39;\u9646&#39;, &#39;\u67D2&#39;, &#39;\u634C&#39;, &#39;\u7396&#39;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  ];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const unit = [&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      [&#39;\u5143&#39;, &#39;\u4E07&#39;, &#39;\u4EBF&#39;],&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      [&#39;&#39;, &#39;\u62FE&#39;, &#39;\u4F70&#39;, &#39;\u4EDF&#39;]&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  ];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  n = Math.abs(n);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let s = &#39;&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  for (let i = 0; i &lt; fraction.length; i++) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/\u96F6./, &#39;&#39;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  s = s || &#39;\u6574&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  n = Math.floor(n);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  for (let i = 0; i &lt; unit[0].length &amp;&amp; n &gt; 0; i++) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      let p = &#39;&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      for (let j = 0; j &lt; unit[1].length &amp;&amp; n &gt; 0; j++) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;          p = digit[n % 10] + unit[1][j] + p;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;          n = Math.floor(n / 10);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      s = p.replace(/(\u96F6.)*\u96F6$/, &#39;&#39;).replace(/^$/, &#39;\u96F6&#39;) + unit[0][i] + s;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return s.replace(/(\u96F6.)*\u96F6\u5143/, &#39;\u5143&#39;)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      .replace(/(\u96F6.)+/g, &#39;\u96F6&#39;)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      .replace(/^\u6574$/, &#39;\u96F6\u5143\u6574&#39;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;digitUppercase by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;loalStorageSet&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;loalStorageSet&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u5B58\u50A8loalStorage&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const loalStorageSet = (key, value) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (!key) return;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (typeof value !== &#39;string&#39;) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      value = JSON.stringify(value);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  window.localStorage.setItem(key, value);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;loalStorageSet by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;loalStorageGet&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;loalStorageGet&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u83B7\u53D6localStorage&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const loalStorageGet = (key) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (!key) return;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return window.localStorage.getItem(key);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;loalStorageGet by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;loalStorageRemove&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;loalStorageRemove&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u5220\u9664localStorage&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const loalStorageRemove = (key) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (!key) return;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  window.localStorage.removeItem(key);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;loalStorageRemove by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sessionStorageSet&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sessionStorageSet&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u5B58\u50A8sessionStorage&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const sessionStorageSet = (key, value) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (!key) return;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (typeof value !== &#39;string&#39;) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      value = JSON.stringify(value);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  window.sessionStorage.setItem(key, value)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sessionStorageSet by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sessionStorageGet&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sessionStorageGet&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u83B7\u53D6sessionStorage&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const sessionStorageGet = (key) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (!key) return;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return window.sessionStorage.getItem(key)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sessionStorageGet by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sessionStorageRemove&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sessionStorageRemove&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u5220\u9664sessionStorage&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const sessionStorageRemove = (key) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (!key) return;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  window.sessionStorage.removeItem(key)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sessionStorageRemove by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;setCookie&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;setCookie&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u8BBE\u7F6Ecookie&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const setCookie = (key, value, expire) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const d = new Date();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  d.setDate(d.getDate() + expire);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  document.cookie = \`\${key}=\${value};expires=\${d.toUTCString()}\`&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;setCookie by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getCookie&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getCookie&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u83B7\u53D6cookie&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getCookie = (key) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  // Environmental Test&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (!isBrowser)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      throw new Error(\\&quot;Non-browser environment, unavailable &#39;getCookie&#39;\\&quot;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (!document.cookie)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      throw new Error(&#39;No Cookie Found&#39;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (key) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      const reg = new RegExp(\`(^| )\${key}=([^;]*)(;|$)\`);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      const arr = document.cookie.match(reg);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      return arr ? arr[2] : undefined;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  // Get Cookies &amp;&amp; String =&gt; Array&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return document.cookie.split(&#39;;&#39;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getCookie by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;delCookie&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;delCookie&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u5220\u9664cookie&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const delCookie = (key) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  document.cookie = \`\${encodeURIComponent(key)}=;expires=\${new Date()}\`&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;delCookie by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scrollToTop&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scrollToTop&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6EDA\u52A8\u5230\u9875\u9762\u9876\u90E8&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const scrollToTop = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const height = document.documentElement.scrollTop || document.body.scrollTop;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (height &gt; 0) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    window.requestAnimationFrame(scrollToTop);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    window.scrollTo(0, height - height / 8);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scrollToTop by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scrollToBottom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scrollToBottom&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6EDA\u52A8\u5230\u9875\u9762\u5E95\u90E8&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const scrollToBottom = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  window.scrollTo(0, document.documentElement.clientHeight);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scrollToBottom by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;smoothScroll&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;smoothScroll&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6EDA\u52A8\u5230\u6307\u5B9A\u5143\u7D20\u533A\u57DF&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const smoothScroll = (element) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  document.querySelector(element).scrollIntoView({&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      behavior: &#39;smooth&#39;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  });&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;smoothScroll by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getClientHeight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getClientHeight&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u83B7\u53D6\u53EF\u89C6\u7A97\u53E3\u9AD8\u5EA6&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getClientHeight = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let clientHeight = 0;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (document.body.clientHeight &amp;&amp; document.documentElement.clientHeight) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      clientHeight = (document.body.clientHeight &lt; document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  else {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      clientHeight = (document.body.clientHeight &gt; document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return clientHeight;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getClientHeight by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getPageViewWidth&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getPageViewWidth&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u83B7\u53D6\u53EF\u89C6\u7A97\u53E3\u5BBD\u5EA6&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getPageViewWidth = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return (document.compatMode == &#39;BackCompat&#39; ? document.body : document.documentElement).clientWidth;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getPageViewWidth by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;toFullScreen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;toFullScreen&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6253\u5F00\u6D4F\u89C8\u5668\u5168\u5C4F&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const toFullScreen = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let element = document.body;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (element.requestFullscreen) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    element.requestFullscreen()&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  } else if (element.mozRequestFullScreen) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    element.mozRequestFullScreen()&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  } else if (element.msRequestFullscreen) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    element.msRequestFullscreen()&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  } else if (element.webkitRequestFullscreen) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    element.webkitRequestFullScreen()&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;toFullScreen by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exitFullscreen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;exitFullscreen&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u9000\u51FA\u6D4F\u89C8\u5668\u5168\u5C4F&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const exitFullscreen = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (document.exitFullscreen) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    document.exitFullscreen()&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  } else if (document.msExitFullscreen) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    document.msExitFullscreen()&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  } else if (document.mozCancelFullScreen) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    document.mozCancelFullScreen()&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  } else if (document.webkitExitFullscreen) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    document.webkitExitFullscreen()&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;exitFullscreen by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;diffDays&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;diffDays&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6BD4\u8F83\u4E24\u4E2A\u65E5\u671F\u76F8\u5DEE\u7684\u5929\u6570&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const diffDays = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const time1 = date1.getTime();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const time2 = date2.getTime();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const diff = Math.abs(time1 &gt;= time2 ? time1 - time2 : time2 - time1);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return Math.floor(diff / (1000 * 60 * 60 * 24))&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;diffDays by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;formatPassTime&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;formatPassTime&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u683C\u5F0F\u5316\${startTime}\u8DDD\u73B0\u5728\u7684\u5DF2\u8FC7\u65F6\u95F4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const formatPassTime = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let currentTime = Date.parse(new Date().toString()), starT = startTime ? Date.parse(new Date(startTime).toString()) : currentTime, time = currentTime - starT, day = parseInt(String(time / (1000 * 60 * 60 * 24))), hour = parseInt(String(time / (1000 * 60 * 60))), min = parseInt(String(time / (1000 * 60))), sec = parseInt(String(time / 1000)), month = parseInt(String(day / 30)), year = parseInt(String(month / 12));&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (year)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      return year + &#39;\u5E74\u524D&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (month)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      return month + &#39;\u4E2A\u6708\u524D&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (day)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      return day + &#39;\u5929\u524D&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (hour)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      return hour + &#39;\u5C0F\u65F6\u524D&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (min)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      return min + &#39;\u5206\u949F\u524D&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (sec)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      return sec + &#39;\u79D2\u524D&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  else&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      return &#39;\u521A\u521A&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;formatPassTime by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;formatRemainTime&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;formatRemainTime&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u683C\u5F0F\u5316\u73B0\u5728\u8DDD\${endTime}\u7684\u5269\u4F59\u65F6\u95F4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const formatRemainTime = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let startDate = new Date(); //\u5F00\u59CB\u65F6\u95F4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let endDate = new Date(endTime); //\u7ED3\u675F\u65F6\u95F4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let t = endDate.getTime() - startDate.getTime(); //\u65F6\u95F4\u5DEE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let d = 0, h = 0, m = 0, s = 0;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (t &gt;= 0) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      d = Math.floor(t / 1000 / 3600 / 24);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      h = Math.floor(t / 1000 / 60 / 60 % 24);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      m = Math.floor(t / 1000 / 60 % 60);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      s = Math.floor(t / 1000 % 60);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return d + &#39;\u5929 &#39; + h + &#39;\u5C0F\u65F6 &#39; + m + &#39;\u5206\u949F &#39; + s + &#39;\u79D2&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;formatRemainTime by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getDaysByMonth&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getDaysByMonth&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u5F53\u524D\u65F6\u95F4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getDaysByMonth = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  time = new Date(time);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let year = time.getFullYear();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let month = time.getMonth() + 1;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return new Date(year, month, 0).getDate();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getDaysByMonth by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getNowTime&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getNowTime&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u5F53\u524D\u65F6\u95F4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getNowTime = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const now = new Date();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const year = now.getFullYear();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const month = now.getMonth();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const date = now.getDate() &gt;= 10 ? now.getDate() : (&#39;0&#39; + now.getDate());&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const hour = now.getHours() &gt;= 10 ? now.getHours() : (&#39;0&#39; + now.getHours());&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const miu = now.getMinutes() &gt;= 10 ? now.getMinutes() : (&#39;0&#39; + now.getMinutes());&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const sec = now.getSeconds() &gt;= 10 ? now.getSeconds() : (&#39;0&#39; + now.getSeconds());&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return +year + &#39;\u5E74&#39; + (month + 1) + &#39;\u6708&#39; + date + &#39;\u65E5 &#39; + hour + &#39;:&#39; + miu + &#39;:&#39; + sec;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getNowTime by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dateFormater&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dateFormater&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u683C\u5F0F\u5316\u65F6\u95F4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const dateFormater = (formater, time) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let date = time ? new Date(time) : new Date(),&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      Y = date.getFullYear() + &#39;&#39;,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      M = date.getMonth() + 1,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      D = date.getDate(),&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      H = date.getHours(),&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      m = date.getMinutes(),&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      s = date.getSeconds();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return formater.replace(/YYYY|yyyy/g, Y)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      .replace(/YY|yy/g, Y.substr(2, 2))&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      .replace(/MM/g,(M&lt;10 ? &#39;0&#39; : &#39;&#39;) + M)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      .replace(/DD/g,(D&lt;10 ? &#39;0&#39; : &#39;&#39;) + D)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      .replace(/HH|hh/g,(H&lt;10 ? &#39;0&#39; : &#39;&#39;) + H)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      .replace(/mm/g,(m&lt;10 ? &#39;0&#39; : &#39;&#39;) + m)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      .replace(/ss/g,(s&lt;10 ? &#39;0&#39; : &#39;&#39;) + s)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;// dateFormater(&#39;YYYY-MM-DD HH:mm:ss&#39;)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;// dateFormater(&#39;YYYYMMDDHHmmss&#39;)&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dateFormater by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;debounce_&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debounce&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u9632\u6296\u51FD\u6570\u5E26\u56DE\u8C03&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;function debounce(fn, delay, immdiate = false, resultCallback) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let timer = null&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let isInvoke = false&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  function _debounce(...arg) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    if (timer) clearTimeout(timer)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    if (immdiate &amp;&amp; !isInvoke) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      const result = fn.apply(this, arg)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      if (resultCallback &amp;&amp; typeof resultCallback === &#39;function&#39;) resultCallback(result)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      isInvoke = true&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    } else {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      timer = setTimeout(() =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        const result = fn.apply(this, arg)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        if (resultCallback &amp;&amp; typeof resultCallback === &#39;function&#39;) resultCallback(result)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        isInvoke = false&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        timer = null&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      }, delay)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  _debounce.cancel = function () {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    if (timer) clearTimeout(timer)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    timer = null&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    isInvoke = false&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return _debounce&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debounce by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;debounce&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debounce&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u9632\u6296\u51FD\u6570&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const debounce = (fn, wait) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let timer = null;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return function() {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    let context = this,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        args = arguments;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    if (timer) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      clearTimeout(timer);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      timer = null;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    timer = setTimeout(() =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      fn.apply(context, args);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    }, wait);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  };&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debounce by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;throttle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;throttle&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u8282\u6D41\u51FD\u6570&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const throttle = (fn, delay) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let curTime = Date.now();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return function() {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    let context = this,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        args = arguments,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;        nowTime = Date.now();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    if (nowTime - curTime &gt;= delay) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      curTime = Date.now();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      return fn.apply(context, args);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  };&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;throttle by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getType&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getType&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6570\u636E\u7C7B\u578B\u5224\u65AD&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getType = (value) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (value === null) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    return value + &#39;&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  // \u5224\u65AD\u6570\u636E\u662F\u5F15\u7528\u7C7B\u578B\u7684\u60C5\u51B5&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (typeof value === &#39;object&#39;) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    let valueClass = Object.prototype.toString.call(value),&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      type = valueClass.split(&#39; &#39;)[1].split(&#39;&#39;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    type.pop();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    return type.join(&#39;&#39;).toLowerCase();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  } else {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    // \u5224\u65AD\u6570\u636E\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u60C5\u51B5\u548C\u51FD\u6570\u7684\u60C5\u51B5&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    return typeof value;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getType by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getTypeOf&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getTypeOf&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;/**&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * @func getTypeOf&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * @param {unknown} param&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * @returns {string}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * @desc \u83B7\u53D6\u53C2\u6570\u7C7B\u578B&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * @example getTypeOf(...)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * String, Number, Boolean, Symbol, Null, Undefined, Object&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; * Array, RegExp, Date, Error, Function, AsyncFunction, HTMLDocument&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot; */&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getTypeOf = (param) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    const type = Object.prototype.toString.call(param).slice(8, -1);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    return type.toLowerCase();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getTypeOf by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;deepClone&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deepClone&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u5BF9\u8C61\u6DF1\u62F7\u8D1D&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const deepClone = (obj, hash = new WeakMap() =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  // \u65E5\u671F\u5BF9\u8C61\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u65E5\u671F\u5BF9\u8C61&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (obj instanceof Date){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    return new Date(obj);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span> 
      <span class="token string">&quot;  //\u6B63\u5219\u5BF9\u8C61\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6B63\u5219\u5BF9\u8C61&quot;</span><span class="token punctuation">,</span>     
      <span class="token string">&quot;  if (obj instanceof RegExp){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    return new RegExp(obj);&quot;</span><span class="token punctuation">,</span>     
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  //\u5982\u679C\u5FAA\u73AF\u5F15\u7528,\u5C31\u7528 weakMap \u6765\u89E3\u51B3&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  if (hash.has(obj)){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    return hash.get(obj);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  // \u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u63CF\u8FF0&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let allDesc = Object.getOwnPropertyDescriptors(obj);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  // \u904D\u5386\u4F20\u5165\u53C2\u6570\u6240\u6709\u952E\u7684\u7279\u6027&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>  
      <span class="token string">&quot;  hash.set(obj, cloneObj)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  for (let key of Reflect.ownKeys(obj)) {&quot;</span><span class="token punctuation">,</span> 
      <span class="token string">&quot;    if(typeof obj[key] === &#39;object&#39; &amp;&amp; obj[key] !== null){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      cloneObj[key] = deepClone(obj[key], hash);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    } else {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      cloneObj[key] = obj[key];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return cloneObj&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deepClone by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getQueryString&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getQueryString&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u57FA\u4E8E\`URLSearchParams\`\u6216\`URL\`\u83B7\u53D6queryString\u7684\u503C&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const urlSP = new URLSearchParams(location.search);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getQueryString = (key) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    return urlSP.get(key)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const urlObj = new URL(location.href);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getQueryString = (key) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    return urlObj.searchParams.get(key)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getQueryString by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;formatMoney&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;formatMoney&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u57FA\u4E8E\`toLocaleString\`\u5343\u5206\u4F4D&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const formatMoney = (num) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return (+num).toLocaleString(&#39;en-US&#39;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;formatMoney by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;formatMoneyByReg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;formatMoney&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u57FA\u4E8E\u6B63\u5219\u5343\u5206\u4F4D&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const formatMoney = (money) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return money.replace(new RegExp(\`(?!^)(?=(\\\\d{3})+\${money.includes(&#39;.&#39;) ? &#39;\\\\.&#39; : &#39;$&#39;})\`, &#39;g&#39;), &#39;,&#39;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;formatMoney by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;uniqueArrByFilter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniqueArrByFilter&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u57FA\u4E8E\`filter&amp;Map\`\u8FDB\u884C\u6570\u7EC4\u53BB\u91CD&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const uniqueArr = (arr, uniId) =&gt;{&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  const res = new Map();&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return arr.filter((item) =&gt; !res.has(item[uniId]) &amp;&amp; res.set(item[uniId], 1));&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniqueArrByFilter by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;uniqueArrByReduce&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniqueArrByReduce&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u57FA\u4E8E\`reduce\`\u8FDB\u884C\u6570\u7EC4\u53BB\u91CD&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const uniqueArrByReduce = (arr, uniId) =&gt;{&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let hash = {}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return arr.reduce((accum,item) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    hash[item[uniId]] ? &#39;&#39; : hash[item[uniId]] = true &amp;&amp; accum.push(item)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    return accum&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  },[])&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniqueArrByReduce by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;uniqueArrByFor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniqueArrByFor&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u57FA\u4E8E\`for\`\u8FDB\u884C\u6570\u7EC4\u53BB\u91CD&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const uniqueArrByFor = (arr, uniId) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let obj = {}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  let tempArr = []&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  for(var i = 0; i&lt;arr.length; i++){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    if(!obj[arr[i][uniId]]){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      tempArr.push(arr[i])&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      obj[arr[i][uniId]] = true&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return tempArr&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniqueArrByFor by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sleep&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sleep&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u5B9E\u73B0\u7C7B\u4F3Cpython\u4E2Dtime.sleep()\u7684\u65B9\u6CD5&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const sleep = (ms) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return new Promise((resolve) =&gt; setTimeout(resolve, ms));&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const doSth = async () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  await sleep(2000);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  console.log(&#39;waited 2 second&#39;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;// \u8FD0\u884C\u8BD5\u8BD5&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;doSth()&quot;</span><span class="token punctuation">,</span> 
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;//Promise {&lt;pending&gt;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;// waited 2 second&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;// \u6216\u8005\u76F4\u63A5&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;await sleep(3000)&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sleep by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getRgbColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getRgbColor&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;// \u83B7\u53D6\u968F\u673Argba\u989C\u8272&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const getRgbColor = (flag) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  var r = getRandNum(0, 255);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  var g = getRandNum(0, 255);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  var b = getRandNum(0, 255);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return flag ? \`rgba(\${r},\${g},\${b},\${Math.random().toFixed(2)*1})\` : \`rgba(\${r},\${g},\${b})\`;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getRgbColor by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getRandomColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getRandomColor&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;// \u83B7\u53D6\u968F\u673A16\u8FDB\u5236\u989C\u8272&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;const getRandomColor = () =&gt; {&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;  let r = Math.floor(Math.random()*256);&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;  let g = Math.floor(Math.random()*256);&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;  let b = Math.floor(Math.random()*256);&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;  let color = &#39;#&#39;+r.toString(16)+g.toString(16)+b.toString(16);&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;  return color;&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getRandomColor by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;getEleStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getEleStyle&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;/* \u83B7\u53D6\u6807\u7B7E\u7684\u6837\u5F0F\uFF08\u517C\u5BB9\u5199\u6CD5\uFF09 &quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\u4F20\u5165\u53C2\u6570ele\u6807\u7B7E\u540D\uFF0Cname\u6837\u5F0F\u540D*/&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;function getEleStyle(ele,name){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;if(ele.currentStyle){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;return ele.currentStyle[name];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}else if(window.getComputedStyle){&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;return window.getComputedStyle(ele)[name];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}else{&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;return ele.style[name];&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;getEleStyle by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sortUp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sortUp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6570\u7EC4\u6392\u5E8F\uFF08\u5347\u5E8F\uFF09&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;function sortUp(arr) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;arr.sort(function (a, b) {return a - b;});&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;return arr;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sortUp by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sortDown&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sortDown&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6570\u7EC4\u6392\u5E8F\uFF08\u964D\u5E8F\uFF09&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;function sortDown(arr) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;arr.sort(function (a, b) {return b - a;});&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;return arr;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sortDown by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;unique&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;unique&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6570\u7EC4\u53BB\u91CDES6\uFF08Set\u7248\uFF09&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;function unique(arr) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;return Array.from(new Set(arr));&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uniqueArr by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;arrMax&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arrMax&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6570\u7EC4\u6700\u5927\u503C&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;function arrMax(arr) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;return Math.max.apply(null, arr);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arrayMax by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;arrMin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arrMin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;//\u6570\u7EC4\u6700\u5C0F\u503C&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;function arrMin(arr) {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;return Math.min.apply(null, arr);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arrayMin by hello!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;/**&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;* @func funcName&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;* @param {string} stringParam&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;* @returns {number}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;* @desc description...&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;*/&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u51FD\u6570\u5B9A\u4E49\u63CF\u8FF0\u793A\u4F8B&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;@2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;/**&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;* @func funcName&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;* @returns {number}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;* @desc description...&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;*/&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u51FD\u6570\u5B9A\u4E49\u63CF\u8FF0\u793A\u4F8B&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;jqsrc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jqsrc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;script src=\\&quot;https://code.jquery.com/jquery-3.4.1.js\\&quot;&gt;&lt;/script&gt;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jQuery CDN&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cdnjq&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cdnjq&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;script src=\\&quot;https://cdn.bootcss.com/jquery/3.4.1/jquery.js\\&quot;&gt;&lt;/script&gt;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jQuery CDN&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cdnvue&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cdnvue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;script src=\\&quot;https://cdn.jsdelivr.net/npm/vue@2.6.0\\&quot;&gt;&lt;/script&gt;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vue CDN&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;jqpage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jqpage&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;$(() =&gt; {})&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jquery \u76D1\u542C\u9875\u9762&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rn&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token string">&quot;import React, { Component } from &#39;react&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;import {View, Text, StyleSheet} from &#39;react-native&#39;;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default class Add extends Component {&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;constructor(props) {&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;super(props);&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;this.state = {};&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>

      <span class="token string">&quot;render() {&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;return (&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;&lt;View style={styles.container}&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;Text&gt;Add&lt;/Text&gt;&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;&lt;/View&gt;&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;);&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>

      <span class="token string">&quot;const styles = StyleSheet.create({&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;container: {&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;flex: 1&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;})&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ReactNative Template by hehuan!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[p];function i(u,l){return s(),a("div",null,e)}var r=n(o,[["render",i],["__file","snippets.html.vue"]]);export{r as default};
