import{_ as s,o as n,c as a,d as p}from"./app.d08f476f.js";var e="/images/demo1.png";const t={},o=p('<h1 id="\u79FB\u52A8\u7AEF\u4F7F\u7528postcss-px-to-viewport" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u7AEF\u4F7F\u7528postcss-px-to-viewport" aria-hidden="true">#</a> \u79FB\u52A8\u7AEF\u4F7F\u7528postcss-px-to-viewport</h1><p><img src="'+e+`" alt="VuePress Logo"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> create vite@latest
<span class="token function">npm</span> i postcss-px-to-viewport <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> postcsspxtoviewport <span class="token keyword">from</span><span class="token string">&#39;postcss-px-to-viewport&#39;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    postcss<span class="token operator">:</span> <span class="token punctuation">{</span>
      plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">postcsspxtoviewport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          unitToConvert<span class="token operator">:</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9700\u8981\u8F6C\u6362\u7684\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A&quot;px&quot;</span>
          viewportWidth<span class="token operator">:</span> <span class="token number">375</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u8BA1\u7A3F\u7684\u89C6\u53E3\u5BBD\u5EA6</span>
          unitPrecision<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// \u5355\u4F4D\u8F6C\u6362\u540E\u4FDD\u7559\u7684\u7CBE\u5EA6</span>
          propList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u80FD\u8F6C\u5316\u4E3Avw\u7684\u5C5E\u6027\u5217\u8868</span>
          viewportUnit<span class="token operator">:</span> <span class="token string">&#39;vw&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5E0C\u671B\u4F7F\u7528\u7684\u89C6\u53E3\u5355\u4F4D</span>
          fontViewportUnit<span class="token operator">:</span> <span class="token string">&#39;vw&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53\u4F7F\u7528\u7684\u89C6\u53E3\u5355\u4F4D</span>
          selectorBlackList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ignore-&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u9700\u8981\u5FFD\u7565\u7684CSS\u9009\u62E9\u5668\uFF0C\u4E0D\u4F1A\u8F6C\u4E3A\u89C6\u53E3\u5355\u4F4D\uFF0C\u4F7F\u7528\u539F\u6709\u7684px\u7B49\u5355\u4F4D\u3002</span>
          minPixelValue<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u6700\u5C0F\u7684\u8F6C\u6362\u6570\u503C\uFF0C\u5982\u679C\u4E3A1\u7684\u8BDD\uFF0C\u53EA\u6709\u5927\u4E8E1\u7684\u503C\u4F1A\u88AB\u8F6C\u6362</span>
          mediaQuery<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5A92\u4F53\u67E5\u8BE2\u91CC\u7684\u5355\u4F4D\u662F\u5426\u9700\u8981\u8F6C\u6362\u5355\u4F4D</span>
          replace<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//  \u662F\u5426\u76F4\u63A5\u66F4\u6362\u5C5E\u6027\u503C\uFF0C\u800C\u4E0D\u6DFB\u52A0\u5907\u7528\u5C5E\u6027</span>
          exclude<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">// \u5FFD\u7565\u67D0\u4E9B\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u6216\u7279\u5B9A\u6587\u4EF6\uFF0C\u4F8B\u5982 &#39;node_modules&#39; \u4E0B\u7684\u6587\u4EF6</span>
          include<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">// \u5982\u679C\u8BBE\u7F6E\u4E86include\uFF0C\u90A3\u5C06\u53EA\u6709\u5339\u914D\u5230\u7684\u6587\u4EF6\u624D\u4F1A\u88AB\u8F6C\u6362</span>
          landscape<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u6DFB\u52A0\u6839\u636E landscapeWidth \u751F\u6210\u7684\u5A92\u4F53\u67E5\u8BE2\u6761\u4EF6 @media (orientation: landscape)</span>
          landscapeUnit<span class="token operator">:</span> <span class="token string">&#39;vw&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6A2A\u5C4F\u65F6\u4F7F\u7528\u7684\u5355\u4F4D</span>
          landscapeWidth<span class="token operator">:</span> <span class="token number">375</span> <span class="token comment">// \u6A2A\u5C4F\u65F6\u4F7F\u7528\u7684\u89C6\u53E3\u5BBD\u5EA6</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token comment">// This starter template is using Vue 3 &lt;script setup&gt; SFCs</span>
<span class="token comment">// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup</span>
<span class="token comment">// import HelloWorld from &#39;./components/HelloWorld.vue&#39;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;g-container&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token constant">VW</span>\u81EA\u9002\u5E94<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>\u817E\u8BAF\u89C6\u9891<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>\u7535\u89C6\u8BED\u97F3\u52A9\u624B<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u8FDE\u63A5\u540E\u53EF\u7528\u624B\u673A\u8BED\u97F3\u64CD\u63A7\u7535\u89C6\u673A\uFF0C\u5305\u62EC\u641C\u89C6\u9891\u3001\u641C\u660E\u661F\u3001\u5207\u9891\u9053\u3001\u67E5\u5929\u6C14\u3002<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;g-bg-example&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;g-btn-open&quot;</span><span class="token operator">&gt;</span>\u4E0B\u8F7D\u817E\u8BAF\u89C6\u9891\uFF0C\u4F7F\u7528\u8BED\u97F3\u52A9\u624B<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>


<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
<span class="token punctuation">.</span>g<span class="token operator">-</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  padding<span class="token operator">-</span>top<span class="token operator">:</span> 56px<span class="token punctuation">;</span>
  box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


h2 <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 32px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  line<span class="token operator">-</span>height<span class="token operator">:</span> 40px<span class="token punctuation">;</span>
  text<span class="token operator">-</span>indent<span class="token operator">:</span> 48px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


p <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 8px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>left<span class="token operator">:</span> 48px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  line<span class="token operator">-</span>height<span class="token operator">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token punctuation">.</span>g<span class="token operator">-</span>bg<span class="token operator">-</span>example <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 209px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 32px auto<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token comment">//vmat.gtimg.com/kt/ktweb/pay/imgs/voiceGuide/example-mobile.png) no-repeat 50%;</span>
  background<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token punctuation">.</span>g<span class="token operator">-</span>btn<span class="token operator">-</span>open <span class="token punctuation">{</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 275px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 48px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 34px auto<span class="token punctuation">;</span>
  line<span class="token operator">-</span>height<span class="token operator">:</span> 48px<span class="token punctuation">;</span>
  box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
  text<span class="token operator">-</span>indent<span class="token operator">:</span> 39px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 100px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #eb6b07<span class="token punctuation">;</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> opacity <span class="token punctuation">.</span>5s<span class="token punctuation">;</span>


  <span class="token operator">&amp;</span><span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 18px<span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> 34px<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token comment">//vmat.gtimg.com/kt/ktweb/pay/imgs/voiceGuide/logo.png) no-repeat 50%;</span>
    background<span class="token operator">-</span>size<span class="token operator">:</span> 20px 18px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[o];function r(c,i){return n(),a("div",null,l)}var k=s(t,[["render",r],["__file","postcss-px-to-viewport.html.vue"]]);export{k as default};
