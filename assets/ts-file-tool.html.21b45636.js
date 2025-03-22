import{_ as n,o as s,c as a,d as p}from"./app.786b6f8f.js";const t={},o=p(`<h1 id="\u6587\u4EF6\u4E0B\u8F7D\u4EE3\u7801\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0B\u8F7D\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a> \u6587\u4EF6\u4E0B\u8F7D\u4EE3\u7801\u7247\u6BB5</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TargetContext</span> <span class="token operator">=</span> <span class="token string">&#39;_self&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;_blank&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">Nullable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span>

<span class="token keyword">const</span> dataURLtoBlob <span class="token operator">=</span> <span class="token punctuation">(</span>base64Buf<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Blob <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> base64Buf<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> typeItem <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> mime <span class="token operator">=</span> typeItem<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">:(.*?);</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> bstr <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> bstr<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> u8arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u8arr<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> bstr<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>u8arr<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> mime <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> urlToBase64 <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> mineType<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;CANVAS&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Nullable<span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">&gt;</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span>crossOrigin <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvas <span class="token operator">||</span> <span class="token operator">!</span>ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> img<span class="token punctuation">.</span>width
      canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> img<span class="token punctuation">.</span>height
      ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> dataURL <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span>mineType <span class="token operator">||</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">)</span>
      canvas <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>dataURL<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> url
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">openWindow</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  opt<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    target<span class="token operator">?</span><span class="token operator">:</span> TargetContext <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    noopener<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    noreferrer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    target <span class="token operator">=</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">,</span>
    noopener <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    noreferrer <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> opt <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> feature<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  noopener <span class="token operator">&amp;&amp;</span> feature<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;noopener=yes&#39;</span><span class="token punctuation">)</span>
  noreferrer <span class="token operator">&amp;&amp;</span> feature<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;noreferrer=yes&#39;</span><span class="token punctuation">)</span>

  window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> target<span class="token punctuation">,</span> feature<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* <span class="token keyword">@func</span> downloadByData
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>BlobPart<span class="token punctuation">}</span> data
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> filename
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> mine
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>BlobPart<span class="token punctuation">}</span> bom
* <span class="token keyword">@returns</span> <span class="token punctuation">{</span>void<span class="token punctuation">}</span>
* <span class="token keyword">@desc</span> Download according to the background interface file stream
*/</span>
<span class="token keyword">const</span> downloadByData <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> BlobPart<span class="token punctuation">,</span> filename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> mine<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> bom<span class="token operator">?</span><span class="token operator">:</span> BlobPart<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> blobData <span class="token operator">=</span> <span class="token keyword">typeof</span> bom <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">?</span> <span class="token punctuation">[</span>bom<span class="token punctuation">,</span> data<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span>
  <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>blobData<span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> mine <span class="token operator">||</span> <span class="token string">&#39;application/octet-stream&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> blobURL <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
  <span class="token keyword">const</span> tempLink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
  tempLink<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
  tempLink<span class="token punctuation">.</span>href <span class="token operator">=</span> blobURL
  tempLink<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;download&#39;</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> tempLink<span class="token punctuation">.</span>download <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tempLink<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>tempLink<span class="token punctuation">)</span>
  tempLink<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>tempLink<span class="token punctuation">)</span>
  window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>blobURL<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* <span class="token keyword">@func</span> downloadByBase64
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> buf
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> filename
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> mime
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>BlobPart<span class="token punctuation">}</span> bom
* <span class="token keyword">@returns</span> <span class="token punctuation">{</span>void<span class="token punctuation">}</span>
* <span class="token keyword">@desc</span> Download pictures based on base64
*/</span>
<span class="token keyword">const</span> downloadByBase64 <span class="token operator">=</span> <span class="token punctuation">(</span>buf<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> filename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> mime<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> bom<span class="token operator">?</span><span class="token operator">:</span> BlobPart<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> base64Buf <span class="token operator">=</span> <span class="token function">dataURLtoBlob</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
  <span class="token function">downloadByData</span><span class="token punctuation">(</span>base64Buf<span class="token punctuation">,</span> filename<span class="token punctuation">,</span> mime<span class="token punctuation">,</span> bom<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* <span class="token keyword">@func</span> downloadByOnlineUrl
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> buf
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> filename
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> mime
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>BlobPart<span class="token punctuation">}</span> bom
* <span class="token keyword">@returns</span> <span class="token punctuation">{</span>Promise<span class="token punctuation">}</span>
* <span class="token keyword">@desc</span> Download online pictures
*/</span>
<span class="token keyword">const</span> downloadByOnlineUrl <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> filename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> mime<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> bom<span class="token operator">?</span><span class="token operator">:</span> BlobPart<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> base64 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">urlToBase64</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
  <span class="token function">downloadByBase64</span><span class="token punctuation">(</span>base64<span class="token punctuation">,</span> filename<span class="token punctuation">,</span> mime<span class="token punctuation">,</span> bom<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* <span class="token keyword">@func</span> downloadByUrl
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> url
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>TargetContext | string<span class="token punctuation">}</span> target
* <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> fileName
* <span class="token keyword">@returns</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>
* <span class="token keyword">@desc</span> Download file according to file address
*/</span>
<span class="token keyword">const</span> downloadByUrl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token punctuation">,</span>
  target<span class="token punctuation">,</span>
  fileName<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  target<span class="token operator">:</span> TargetContext <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  fileName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userAgent <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent
  <span class="token keyword">const</span> isChrome <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;chrome&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">const</span> isSafari <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;safari&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(iP)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Your browser does not support download!&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isChrome <span class="token operator">||</span> isSafari<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
    link<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
    link<span class="token punctuation">.</span>href <span class="token operator">=</span> url
    link<span class="token punctuation">.</span>target <span class="token operator">=</span> target

    <span class="token keyword">if</span> <span class="token punctuation">(</span>link<span class="token punctuation">.</span>download <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      link<span class="token punctuation">.</span>download <span class="token operator">=</span> fileName <span class="token operator">||</span> url<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>createEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> e <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createEvent</span><span class="token punctuation">(</span><span class="token string">&#39;MouseEvents&#39;</span><span class="token punctuation">)</span>
      e<span class="token punctuation">.</span><span class="token function">initEvent</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
      link<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    url <span class="token operator">+=</span> <span class="token string">&#39;?download&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token function">openWindow</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> target <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,i){return s(),a("div",null,e)}var r=n(t,[["render",c],["__file","ts-file-tool.html.vue"]]);export{r as default};
