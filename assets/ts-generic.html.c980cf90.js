import{_ as n,o as s,c as a,d as e}from"./app.5a729189.js";const p={},t=e(`<h1 id="typescript-\u5DE5\u5177\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#typescript-\u5DE5\u5177\u6CDB\u578B" aria-hidden="true">#</a> TypeScript-\u5DE5\u5177\u6CDB\u578B</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Make all properties in T optional
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Make all properties in T required
 */</span>
<span class="token comment">// -\u8868\u793A\u903B\u8F91\u53D6\u53CD\uFF0C-?\u8868\u793A \u975E\u53EF\u9009</span>
<span class="token keyword">type</span> <span class="token class-name">Required<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Make all properties in T readonly
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * From T, pick a set of properties whose keys are in the union K
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Construct a type with a set of properties K of type T
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Exclude from T those types that are assignable to U
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Exclude<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">U</span></span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Extract from T those types that are assignable to U
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Extract<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">U</span></span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Construct a type with the properties of T except for those in type K.
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Omit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Exclude<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Exclude null and undefined from T
 */</span>
<span class="token keyword">type</span> <span class="token class-name">NonNullable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">null</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Obtain the return type of a function type
 */</span>
<span class="token keyword">type</span> <span class="token class-name">ReturnType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="partial" tabindex="-1"><a class="header-anchor" href="#partial" aria-hidden="true">#</a> Partial</h3><p>\u8BE5\u5DE5\u5177\u7C7B\u578B\u80FD\u591F\u6784\u9020\u4E00\u4E2A\u65B0\u7C7B\u578B\uFF0C\u5E76\u5C06\u5B9E\u9645\u7C7B\u578B\u53C2\u6570T\u4E2D\u7684\u6240\u6709\u5C5E\u6027\u53D8\u6210\u53EF\u9009\u5C5E\u6027</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  role<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  role<span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528\u5185\u7F6E\u5DE5\u5177\u7C7B\u578BPartial\u5C06\u63A5\u53E3\u4E2D\u7684\u5C5E\u6027\u5168\u90E8\u53D8\u6210\u53EF\u9009</span>
<span class="token keyword">type</span> <span class="token class-name">OptionalPartial</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span>

<span class="token keyword">const</span> optionalUser<span class="token operator">:</span> OptionalPartial <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7B49\u4EF7\u4E8E</span>
<span class="token keyword">type</span> <span class="token class-name">OptionalPartial</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    role<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="required" tabindex="-1"><a class="header-anchor" href="#required" aria-hidden="true">#</a> Required</h3><p>\u8BE5\u5DE5\u5177\u7C7B\u578B\u80FD\u591F\u6784\u9020\u4E00\u4E2A\u65B0\u7C7B\u578B\uFF0C\u5E76\u5C06\u5B9E\u9645\u7C7B\u578B\u53C2\u6570T\u4E2D\u7684\u6240\u6709\u5C5E\u6027\u53D8\u4E3A\u5FC5\u9009(\u4E0Epartial\u7684\u4F5C\u7528\u76F8\u53CD)</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u4F7F\u7528\u5185\u7F6E\u5DE5\u5177\u7C7B\u578BRequired\u5C06\u63A5\u53E3\u4E2D\u7684\u5C5E\u6027\u5168\u90E8\u53D8\u6210\u5FC5\u9009</span>
<span class="token keyword">type</span> <span class="token class-name">UserRequired</span> <span class="token operator">=</span> Required<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span>
<span class="token comment">// \u7B49\u4EF7\u4E8E</span>
<span class="token keyword">type</span> <span class="token class-name">UserRequired</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    role<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> userRequired<span class="token operator">:</span> UserRequired <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  role<span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="record" tabindex="-1"><a class="header-anchor" href="#record" aria-hidden="true">#</a> Record</h3><p>Record&lt;Keys,Type&gt;\u6784\u9020\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\uFF0CKeys \u8868\u793A\u5BF9\u8C61\u7684\u5C5E\u6027\u952E \u3001Type \u8868\u793A\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\uFF0C\u7528\u4E8E\u5C06\u4E00\u79CD\u7C7B\u578B\u5C5E\u6027\u6620\u5C04\u5230\u53E6\u4E00\u79CD\u7C7B\u578B</p><ul><li>\u7B80\u5355\u7684\u9650\u5B9A\u952E\u548C\u503C\u7684\u7C7B\u578B</li><li>\u57FA\u4E8E\u5176\u4ED6\u7C7B\u578B\u751F\u6210\u65B0\u7684\u7C7B\u578B</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FruitTypes</span> <span class="token operator">=</span> <span class="token string">&#39;apple&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;orange&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;banana&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">FruitWeight</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span>FruitTypes<span class="token punctuation">,</span><span class="token builtin">number</span><span class="token operator">&gt;&gt;</span>
<span class="token comment">// \u7B49\u4EF7\u4E8E</span>
<span class="token keyword">type</span> <span class="token class-name">FruitWeight</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    apple<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    orange<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    banana<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> fruits<span class="token operator">:</span> FruitWeight <span class="token operator">=</span> <span class="token punctuation">{</span>
  apple<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  orange<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  banana<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pick" tabindex="-1"><a class="header-anchor" href="#pick" aria-hidden="true">#</a> Pick</h3><ul><li>\u9009\u62E9\u60F3\u8981\u7684\u5C5E\u6027</li></ul><p>\u8BE5\u5DE5\u5177\u7C7B\u578B\u80FD\u591F\u4ECE\u5DF2\u6709\u5BF9\u8C61\u7C7B\u578B\u4E2D\u9009\u53D6\u7ED9\u5B9A\u7684\u5C5E\u6027\u53CA\u5176\u7C7B\u578B\uFF0C\u7136\u540E\u6784\u5EFA\u51FA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u7C7B\u578B\uFF0CPick&lt;T, K&gt;\u5DE5\u5177\u7C7B\u578B\u4E2D\u7684\u7C7B\u578B\u53C2\u6570T\u8868\u793A\u6E90\u5BF9\u8C61\u7C7B\u578B\uFF0C\u7C7B\u578B\u53C2\u6570K\u63D0\u4F9B\u4E86\u5F85\u9009\u53D6\u7684\u5C5E\u6027\u540D\u7C7B\u578B\uFF0C\u5B83\u5FC5\u987B\u4E3A\u5BF9\u8C61\u7C7B\u578BT\u4E2D\u5B58\u5728\u7684\u5C5E\u6027\u3002\u76F8\u6BD4\u8D77\u9047\u5230\u7EC6\u7C92\u5EA6\u7684\u7C7B\u578B\u91CD\u590D\u53BB\u65B0\u5EFAinterface\uFF0C\u4F7F\u7528Pick\u7EF4\u62A4\u7B80\u5355\uFF0C\u800C\u4E14\u4E0D\u9700\u8981\u7BA1\u7406\u8BF8\u591A\u7684Interface\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AppleWeight</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>FruitWeight<span class="token punctuation">,</span><span class="token string">&#39;apple&#39;</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> apple<span class="token operator">:</span> AppleWeight <span class="token operator">=</span> <span class="token punctuation">{</span>
  apple<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">UserInfo</span>  <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  father<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  mother<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> userBodyInfo<span class="token operator">:</span> Pick<span class="token operator">&lt;</span>UserInfo<span class="token punctuation">,</span> <span class="token string">&#39;height&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;weight&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  height<span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span>
  weight<span class="token operator">:</span> <span class="token number">120</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> userParentsInfo<span class="token operator">:</span> Pick<span class="token operator">&lt;</span>UserInfo<span class="token punctuation">,</span> <span class="token string">&#39;father&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;mother&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  father<span class="token operator">:</span> <span class="token string">&#39;father&#39;</span><span class="token punctuation">,</span>
  mother<span class="token operator">:</span> <span class="token string">&#39;mother&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="omit" tabindex="-1"><a class="header-anchor" href="#omit" aria-hidden="true">#</a> Omit</h3><ul><li>\u8DDFPick\u76F8\u53CD\uFF0C\u628A\u9009\u51FA\u7684\u6392\u9664\u6389(\u5728T\u4E2D\u5220\u9664\u5BF9\u5E94\u7684K)</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Omit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Exclude<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">UnPickTypes</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>UserInfo<span class="token punctuation">,</span> <span class="token string">&#39;height&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;weight&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// \u7B49\u4EF7\u4E8E</span>
<span class="token keyword">type</span> <span class="token class-name">UnPickTypes</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    father<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    mother<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> unPickProps<span class="token operator">:</span> UnPickTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  father<span class="token operator">:</span> <span class="token string">&#39;father&#39;</span><span class="token punctuation">,</span>
  mother<span class="token operator">:</span> <span class="token string">&#39;mother&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Exclude&lt;keyof T, K&gt; \u6392\u9664\u6389\u5C5E\u4E8EK\u7684\u5B50\u96C6</li><li>Pick&lt;T, Exclude&lt;keyof T, K&gt;&gt; \u9009\u51FA\u88AB\u6392\u9664\u6389\u7684\u5269\u4E0B\u7684props</li></ul><h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> Exclude</h3><p>\u4ECE\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u4E2D\u6392\u9664\u5C5E\u4E8E\u53E6\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u7684\u5B50\u96C6</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UnionType1</span> <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;id&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">UnionType2</span> <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">Prop</span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span>UnionType1<span class="token punctuation">,</span> UnionType2<span class="token operator">&gt;</span>
<span class="token comment">// \u7B49\u4EF7\u4E8E</span>
<span class="token keyword">type</span> <span class="token class-name">Prop</span> <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extract" tabindex="-1"><a class="header-anchor" href="#extract" aria-hidden="true">#</a> Extract</h3><p>\u8DDFExclude\u76F8\u53CD\uFF0C\u4ECE\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u4E2D\u53D6\u51FA\u5C5E\u4E8E\u53E6\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u7684\u5B50\u96C6</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Prop2</span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span>UnionType1<span class="token punctuation">,</span> UnionType2<span class="token operator">&gt;</span>
<span class="token comment">// \u7B49\u4EF7\u4E8E</span>
<span class="token keyword">type</span> <span class="token class-name">Prop2</span> <span class="token operator">=</span> <span class="token string">&quot;name&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nonnullable" tabindex="-1"><a class="header-anchor" href="#nonnullable" aria-hidden="true">#</a> NonNullable</h3><p>\u6392\u9664null/undefined\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// string</span>
<span class="token keyword">type</span> <span class="token class-name">UserName</span> <span class="token operator">=</span> NonNullable<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="returntype" tabindex="-1"><a class="header-anchor" href="#returntype" aria-hidden="true">#</a> ReturnType</h3><p>\u8BE5\u5DE5\u5177\u7C7B\u578B\u80FD\u591F\u83B7\u53D6\u51FD\u6570\u7C7B\u578BT\u7684\u8FD4\u56DE\u503C\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ReturnType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token comment">// string</span>
<span class="token keyword">type</span> <span class="token class-name">ResType</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token operator">&gt;</span>

<span class="token comment">// { a: string, b: number }</span>
<span class="token keyword">type</span> <span class="token class-name">ResType2</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u4E00\u4E2A\u65B0\u5B57\u773Cinfer\uFF0C\u4F5C\u7528\u662F\u547D\u540D\u53D8\u91CF\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u7406\u89E3\u6210\u628A\u8FD4\u56DE\u7ED3\u679C\u7C7B\u578B\u901A\u8FC7infer\u547D\u540D\u6210R</p>`,33),o=[t];function l(c,i){return s(),a("div",null,o)}var k=n(p,[["render",l],["__file","ts-generic.html.vue"]]);export{k as default};
