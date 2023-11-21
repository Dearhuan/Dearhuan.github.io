import{_ as n,o as s,c as a,d as t}from"./app.2e056dfe.js";var p="/images/pdfjs1.png",e="/images/pdfjs2.png";const o={},c=t('<h1 id="\u5982\u4F55\u5728react\u4E2D\u5F15\u7528pdf-js\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5728react\u4E2D\u5F15\u7528pdf-js\u5E93" aria-hidden="true">#</a> \u5982\u4F55\u5728React\u4E2D\u5F15\u7528pdf.js\u5E93</h1><h2 id="\u6548\u679C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u56FE" aria-hidden="true">#</a> \u6548\u679C\u56FE</h2><p><img src="'+p+'" alt="pdfjs"><img src="'+e+`" alt="pdfjs"></p><h2 id="\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5305" aria-hidden="true">#</a> \u5B89\u88C5\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pdfjs-dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u9884\u89C8\u7EC4\u4EF6\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u9884\u89C8\u7EC4\u4EF6\u5C01\u88C5" aria-hidden="true">#</a> \u9884\u89C8\u7EC4\u4EF6\u5C01\u88C5</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useCallback<span class="token punctuation">,</span> useImperativeHandle<span class="token punctuation">,</span> forwardRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> pdfjsLib <span class="token keyword">from</span> <span class="token string">&quot;pdfjs-dist/build/pdf&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> pdfjsWorker <span class="token keyword">from</span> <span class="token string">&quot;pdfjs-dist/build/pdf.worker.entry&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528forwardRef\u5305\u88F9\u51FD\u6570\u7EC4\u4EF6</span>
<span class="token keyword">const</span> PdfViewer <span class="token operator">=</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token punctuation">{</span>url<span class="token punctuation">}</span><span class="token punctuation">,</span> ref</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> canvasRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  pdfjsLib<span class="token punctuation">.</span>GlobalWorkerOptions<span class="token punctuation">.</span>workerSrc <span class="token operator">=</span> pdfjsWorker

  <span class="token keyword">const</span> <span class="token punctuation">[</span>pdfRef<span class="token punctuation">,</span> setPdfRef<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>currentPage<span class="token punctuation">,</span> setCurrentPage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> renderPage <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pageNum<span class="token punctuation">,</span> pdf <span class="token operator">=</span> pdfRef</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    pdf <span class="token operator">&amp;&amp;</span> pdf<span class="token punctuation">.</span><span class="token function">getPage</span><span class="token punctuation">(</span>pageNum<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> viewport <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getViewport</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> canvas <span class="token operator">=</span> canvasRef<span class="token punctuation">.</span>current
      canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> viewport<span class="token punctuation">.</span>height
      canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> viewport<span class="token punctuation">.</span>width
      <span class="token keyword">const</span> renderContext <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">canvasContext</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">viewport</span><span class="token operator">:</span> viewport
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      page<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>pdfRef<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">renderPage</span><span class="token punctuation">(</span>currentPage<span class="token punctuation">,</span> pdfRef<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>pdfRef<span class="token punctuation">,</span> currentPage<span class="token punctuation">,</span> renderPage<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> loadingTask <span class="token operator">=</span> pdfjsLib<span class="token punctuation">.</span><span class="token function">getDocument</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    loadingTask<span class="token punctuation">.</span>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">loadedPdf</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setPdfRef</span><span class="token punctuation">(</span>loadedPdf<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u4F7F\u7528useImperativeHandle hook\u66B4\u9732\u7236\u7EC4\u4EF6\u9700\u8981\u8C03\u7528\u7684\u65B9\u6CD5</span>
  <span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    nextPage<span class="token punctuation">,</span>
    prevPage
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">nextPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> pdfRef <span class="token operator">&amp;&amp;</span> currentPage <span class="token operator">&lt;</span> pdfRef<span class="token punctuation">.</span>numPages <span class="token operator">&amp;&amp;</span> <span class="token function">setCurrentPage</span><span class="token punctuation">(</span>currentPage <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">prevPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> currentPage <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token function">setCurrentPage</span><span class="token punctuation">(</span>currentPage <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>canvasRef<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> PdfViewer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PdfViewer <span class="token keyword">from</span> <span class="token string">&#39;@/components/PdfViewer/index&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>pdfUrl<span class="token punctuation">,</span> setPdfUrl<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>isModalOpen<span class="token punctuation">,</span> setIsModalOpen<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">showModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setIsModalOpen</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> refPdf <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleCancel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setIsModalOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  refPdf<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">nextPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handlePrev</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  refPdf<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">prevPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showModal<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u9884\u89C8PDF</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Modal</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>PDF\u9884\u89C8<span class="token punctuation">&quot;</span></span> <span class="token attr-name">footer</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">950</span><span class="token punctuation">}</span></span> <span class="token attr-name">open</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isModalOpen<span class="token punctuation">}</span></span> <span class="token attr-name">maskClosable</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleCancel<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PdfViewer</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>refPdf<span class="token punctuation">}</span></span> <span class="token attr-name">url</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>pdfUrl<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PdfViewer</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">&#39;flex&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handlePrev<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u4E0A\u4E00\u9875</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleNext<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u4E0B\u4E00\u9875</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Modal</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[c];function u(i,k){return s(),a("div",null,l)}var d=n(o,[["render",u],["__file","react-pdfjs.html.vue"]]);export{d as default};
