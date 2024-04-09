import{_ as n,o as s,c as a,d as t}from"./app.b5623b1f.js";const p={},e=t(`<h1 id="typescript-\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#typescript-\u88C5\u9970\u5668" aria-hidden="true">#</a> TypeScript-\u88C5\u9970\u5668</h1><h3 id="_1-\u88C5\u9970\u5668\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-\u88C5\u9970\u5668\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1 \u88C5\u9970\u5668\u662F\u4EC0\u4E48</h3><ul><li>\u5B83\u662F\u4E00\u4E2A\u8868\u8FBE\u5F0F</li><li>\u8BE5\u8868\u8FBE\u5F0F\u88AB\u6267\u884C\u540E\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570</li><li>\u51FD\u6570\u7684\u5165\u53C2\u5206\u522B\u4E3A target\u3001name \u548C descriptor</li><li>\u6267\u884C\u8BE5\u51FD\u6570\u540E\uFF0C\u53EF\u80FD\u8FD4\u56DE descriptor \u5BF9\u8C61\uFF0C\u7528\u4E8E\u914D\u7F6E target \u5BF9\u8C61</li></ul><h3 id="_2-\u88C5\u9970\u5668\u7684\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-\u88C5\u9970\u5668\u7684\u5206\u7C7B" aria-hidden="true">#</a> 2 \u88C5\u9970\u5668\u7684\u5206\u7C7B</h3><ul><li>\u7C7B\u88C5\u9970\u5668\uFF08Class decorators\uFF09</li><li>\u5C5E\u6027\u88C5\u9970\u5668\uFF08Property decorators\uFF09</li><li>\u65B9\u6CD5\u88C5\u9970\u5668\uFF08Method decorators\uFF09</li><li>\u53C2\u6570\u88C5\u9970\u5668\uFF08Parameter decorators\uFF09 \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u82E5\u8981\u542F\u7528\u5B9E\u9A8C\u6027\u7684\u88C5\u9970\u5668\u7279\u6027\uFF0C\u4F60\u5FC5\u987B\u5728\u547D\u4EE4\u884C\u6216 tsconfig.json \u91CC\u542F\u7528 experimentalDecorators \u7F16\u8BD1\u5668\u9009\u9879\uFF1A</li></ul><p>\u547D\u4EE4\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc <span class="token parameter variable">--target</span> ES5 <span class="token parameter variable">--experimentalDecorators</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>tsconfig.json\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES5&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u7C7B\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#_3-\u7C7B\u88C5\u9970\u5668" aria-hidden="true">#</a> 3 \u7C7B\u88C5\u9970\u5668</h3><p>\u7C7B\u88C5\u9970\u5668\u58F0\u660E\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">ClassDecorator</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>TFunction <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Function</span></span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> TFunction
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> TFunction <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B\u88C5\u9970\u5668\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u7528\u6765\u88C5\u9970\u7C7B\u7684\u3002\u5B83\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF1A</p><ul><li>target: TFunction - \u88AB\u88C5\u9970\u7684\u7C7B</li></ul><p>\u770B\u5B8C\u7B2C\u4E00\u773C\u540E\uFF0C\u662F\u4E0D\u662F\u611F\u89C9\u90FD\u4E0D\u597D\u4E86\u3002\u6CA1\u4E8B\uFF0C\u6211\u4EEC\u9A6C\u4E0A\u6765\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Greeter</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">greet</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Semlinker!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Greeter</span></span>
<span class="token keyword">class</span> <span class="token class-name">Greeting</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5185\u90E8\u5B9E\u73B0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGreeting <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span>myGreeting <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// console output: &#39;Hello Semlinker!&#39;;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86 Greeter \u7C7B\u88C5\u9970\u5668\uFF0C\u540C\u65F6\u6211\u4EEC\u4F7F\u7528\u4E86 @Greeter \u8BED\u6CD5\u7CD6\uFF0C\u6765\u4F7F\u7528\u88C5\u9970\u5668\u3002</p><p>\u53CB\u60C5\u63D0\u793A\uFF1A\u8BFB\u8005\u53EF\u4EE5\u76F4\u63A5\u590D\u5236\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u5728 TypeScript Playground \u4E2D\u8FD0\u884C\u67E5\u770B\u7ED3\u679C\u3002</p><p>\u6709\u7684\u8BFB\u8005\u53EF\u80FD\u60F3\u95EE\uFF0C\u4F8B\u5B50\u4E2D\u603B\u662F\u8F93\u51FA Hello Semlinker! \uFF0C\u80FD\u81EA\u5B9A\u4E49\u8F93\u51FA\u7684\u95EE\u5019\u8BED\u4E48 \uFF1F\u8FD9\u4E2A\u95EE\u9898\u5F88\u597D\uFF0C\u7B54\u6848\u662F\u53EF\u4EE5\u7684\u3002</p><p>\u5177\u4F53\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Greeter</span><span class="token punctuation">(</span>greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">greet</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Greeter</span></span><span class="token punctuation">(</span><span class="token string">&quot;Hello TS!&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Greeting</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5185\u90E8\u5B9E\u73B0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGreeting <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span>myGreeting <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// console output: &#39;Hello TS!&#39;;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u5C5E\u6027\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#_4-\u5C5E\u6027\u88C5\u9970\u5668" aria-hidden="true">#</a> 4 \u5C5E\u6027\u88C5\u9970\u5668</h3><p>\u5C5E\u6027\u88C5\u9970\u5668\u58F0\u660E\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">PropertyDecorator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span>Object<span class="token punctuation">,</span> 
  propertyKey<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C5E\u6027\u88C5\u9970\u5668\u987E\u540D\u601D\u4E49\uFF0C\u7528\u6765\u88C5\u9970\u7C7B\u7684\u5C5E\u6027\u3002\u5B83\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A</p><ul><li>target: Object - \u88AB\u88C5\u9970\u7684\u7C7B</li><li>propertyKey: string | symbol - \u88AB\u88C5\u9970\u7C7B\u7684\u5C5E\u6027\u540D</li></ul><p>\u8D81\u70ED\u6253\u94C1\uFF0C\u9A6C\u4E0A\u6765\u4E2A\u4F8B\u5B50\u70ED\u70ED\u8EAB\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">logProperty</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">delete</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> backingField <span class="token operator">=</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> key<span class="token punctuation">;</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> backingField<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    writable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    enumerable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    configurable<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// property getter</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currVal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>backingField<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Get: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> =&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>currVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> currVal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// property setter</span>
  <span class="token keyword">const</span> <span class="token function-variable function">setter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> newVal<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Set: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> =&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>backingField<span class="token punctuation">]</span> <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// Create new property with getter and setter</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    get<span class="token operator">:</span> getter<span class="token punctuation">,</span>
    set<span class="token operator">:</span> setter<span class="token punctuation">,</span>
    enumerable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    configurable<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span> 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">logProperty</span></span>
  <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;semlinker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;kakuqo&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A logProperty \u51FD\u6570\uFF0C\u6765\u8DDF\u8E2A\u7528\u6237\u5BF9\u5C5E\u6027\u7684\u64CD\u4F5C\uFF0C\u5F53\u4EE3\u7801\u6210\u529F\u8FD0\u884C\u540E\uFF0C\u5728\u63A7\u5236\u53F0\u4F1A\u8F93\u51FA\u4EE5\u4E0B\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Set: name =&gt; semlinker
Set: name =&gt; kakuqo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u65B9\u6CD5\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#_5-\u65B9\u6CD5\u88C5\u9970\u5668" aria-hidden="true">#</a> 5 \u65B9\u6CD5\u88C5\u9970\u5668</h3><p>\u65B9\u6CD5\u88C5\u9970\u5668\u58F0\u660E\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">MethodDecorator</span> <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>target<span class="token operator">:</span>Object<span class="token punctuation">,</span> propertyKey<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> 	 	
  descriptor<span class="token operator">:</span> TypePropertyDescript<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> TypedPropertyDescriptor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u88C5\u9970\u5668\u987E\u540D\u601D\u4E49\uFF0C\u7528\u6765\u88C5\u9970\u7C7B\u7684\u65B9\u6CD5\u3002\u5B83\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF1A</p><ul><li>target: Object - \u88AB\u88C5\u9970\u7684\u7C7B</li><li>propertyKey: string | symbol - \u65B9\u6CD5\u540D</li><li>descriptor: TypePropertyDescript - \u5C5E\u6027\u63CF\u8FF0\u7B26</li></ul><p>\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u76F4\u63A5\u4E0A\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>target<span class="token operator">:</span> Object<span class="token punctuation">,</span> propertyKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> originalMethod <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;wrapped function: before invoking &quot;</span> <span class="token operator">+</span> propertyKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">originalMethod</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;wrapped function: after invoking &quot;</span> <span class="token operator">+</span> propertyKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Task</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">log</span></span>
  <span class="token function">runTask</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;runTask invoked, args: &quot;</span> <span class="token operator">+</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;finished&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> task <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> task<span class="token punctuation">.</span><span class="token function">runTask</span><span class="token punctuation">(</span><span class="token string">&quot;learn ts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;result: &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6210\u529F\u8FD0\u884C\u540E\uFF0C\u63A7\u5236\u53F0\u4F1A\u8F93\u51FA\u4EE5\u4E0B\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;wrapped function: before invoking runTask&quot; 
&quot;runTask invoked, args: learn ts&quot; 
&quot;wrapped function: after invoking runTask&quot; 
&quot;result: finished&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u6211\u4EEC\u6765\u4ECB\u7ECD\u4E00\u4E0B\u53C2\u6570\u88C5\u9970\u5668\u3002</p><h3 id="_6-\u53C2\u6570\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#_6-\u53C2\u6570\u88C5\u9970\u5668" aria-hidden="true">#</a> 6 \u53C2\u6570\u88C5\u9970\u5668</h3><p>\u53C2\u6570\u88C5\u9970\u5668\u58F0\u660E\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">ParameterDecorator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> Object<span class="token punctuation">,</span> propertyKey<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> 
  parameterIndex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u6570\u88C5\u9970\u5668\u987E\u540D\u601D\u4E49\uFF0C\u662F\u7528\u6765\u88C5\u9970\u51FD\u6570\u53C2\u6570\uFF0C\u5B83\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF1A</p><ul><li>target: Object - \u88AB\u88C5\u9970\u7684\u7C7B</li><li>propertyKey: string | symbol - \u65B9\u6CD5\u540D</li><li>parameterIndex: number - \u65B9\u6CD5\u4E2D\u53C2\u6570\u7684\u7D22\u5F15\u503C</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Log</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> parameterIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> functionLogged <span class="token operator">=</span> key <span class="token operator">||</span> target<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The parameter in position </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>parameterIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> at </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>functionLogged<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> has
	been decorated</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Log</span></span> phrase<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>greeting <span class="token operator">=</span> phrase<span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6210\u529F\u8FD0\u884C\u540E\uFF0C\u63A7\u5236\u53F0\u4F1A\u8F93\u51FA\u4EE5\u4E0B\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;The parameter in position 0 at Greeter has been decorated&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,48),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","ts-study-decorators.html.vue"]]);export{r as default};
