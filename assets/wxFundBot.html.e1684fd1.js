import{_ as n,o as s,c as a,d as t}from"./app.2e056dfe.js";var p="/images/wxFundbot.png";const e={},o=t('<h1 id="\u5982\u4F55\u642D\u5EFA\u4E00\u6B3E\u4F01\u4E1A\u5FAE\u4FE1-\u90AE\u7BB1\u901A\u77E5\u57FA\u91D1\u673A\u5668\u4EBA" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u642D\u5EFA\u4E00\u6B3E\u4F01\u4E1A\u5FAE\u4FE1-\u90AE\u7BB1\u901A\u77E5\u57FA\u91D1\u673A\u5668\u4EBA" aria-hidden="true">#</a> \u5982\u4F55\u642D\u5EFA\u4E00\u6B3E\u4F01\u4E1A\u5FAE\u4FE1+\u90AE\u7BB1\u901A\u77E5\u57FA\u91D1\u673A\u5668\u4EBA</h1><p><img src="'+p+`" alt="wxFundbot"></p><div class="custom-container tip"><p class="custom-container-title">\u524D\u63D0\u6761\u4EF6</p><p>\u4F01\u4E1A\u5FAE\u4FE1\u901A\u77E5\u9700\u8981\u6CE8\u518C\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528\uFF0C\u83B7\u53D6\u4F01\u4E1AID\u3001\u5E94\u7528ID\u3001\u5E94\u7528\u79D8\u94A5\u7B49</p></div><ul><li>\u6A21\u5757\u5BFC\u5165</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;axios&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dotenv <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;dotenv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> nodemailer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;nodemailer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dayjs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;dayjs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> utc <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;dayjs/plugin/utc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> timezone <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;dayjs/plugin/timezone&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E38\u91CF\u5B9A\u4E49</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token string">&quot;xxx@xxx.com&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pass <span class="token operator">=</span> <span class="token string">&quot;xxxxxxxxxxx&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u90AE\u7BB1\u6388\u6743\u7801</span>
<span class="token keyword">const</span> fundURL <span class="token operator">=</span> <span class="token string">&quot;http://fundgz.1234567.com.cn/js/&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fundDetailURL <span class="token operator">=</span> <span class="token string">&quot;https://m.1234567.com.cn/index.html?page=jjxq&amp;code=&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> qyweixinUrl <span class="token operator">=</span> <span class="token string">&quot;https://qyapi.weixin.qq.com&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> copyRight <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p style=&quot;margin: 0;padding: 0; text-align:center; color: #ee55aa;font-size:15px; line-height: 80px;&quot;&gt;copyright\xA9 Dearhuan 2020-2022 All Right Reserved&lt;/p&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fundObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;005918&quot;</span><span class="token operator">:</span> <span class="token number">11268.82</span><span class="token punctuation">,</span>
  <span class="token number">161726</span><span class="token operator">:</span> <span class="token number">4922.62</span><span class="token punctuation">,</span>
  <span class="token number">161725</span><span class="token operator">:</span> <span class="token number">7172.82</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;003096&quot;</span><span class="token operator">:</span> <span class="token number">575.96</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;001513&quot;</span><span class="token operator">:</span> <span class="token number">244.95</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;005827&quot;</span><span class="token operator">:</span> <span class="token number">1423.95</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;003984&quot;</span><span class="token operator">:</span> <span class="token number">1295.13</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;001875&quot;</span><span class="token operator">:</span> <span class="token number">1457.99</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> upFundNum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> totalFundMoney <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> transporter <span class="token operator">=</span> nodemailer<span class="token punctuation">.</span><span class="token function">createTransport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;smtp.qq.com&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">587</span><span class="token punctuation">,</span>
  <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> user<span class="token punctuation">,</span>
    <span class="token literal-property property">pass</span><span class="token operator">:</span> pass<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

dayjs<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>utc<span class="token punctuation">)</span><span class="token punctuation">;</span>
dayjs<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>timezone<span class="token punctuation">)</span><span class="token punctuation">;</span>
dayjs<span class="token punctuation">.</span>tz<span class="token punctuation">.</span><span class="token function">setDefault</span><span class="token punctuation">(</span><span class="token string">&quot;Asia/Shanghai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">WX_COMPANY_ID</span><span class="token punctuation">,</span> <span class="token constant">WX_APP_ID</span><span class="token punctuation">,</span> <span class="token constant">WX_APP_SECRET</span> <span class="token punctuation">}</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u90AE\u4EF6\u53D1\u9001</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">sendMail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">transporter<span class="token punctuation">,</span> to<span class="token punctuation">,</span> htmlData<span class="token punctuation">,</span> subject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> mailOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>to<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">subject</span><span class="token operator">:</span> subject<span class="token punctuation">,</span>
      <span class="token literal-property property">html</span><span class="token operator">:</span> htmlData<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    transporter<span class="token punctuation">.</span><span class="token function">sendMail</span><span class="token punctuation">(</span>mailOptions<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> info <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u90AE\u4EF6\u53D1\u9001\u5F02\u5E38&quot;</span> <span class="token operator">+</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u90AE\u4EF6\u53D1\u9001\u6210\u529F&quot;</span><span class="token punctuation">,</span> info<span class="token punctuation">.</span>messageId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u9759\u7B49\u4E0B\u4E00\u6B21\u53D1\u9001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6839\u636E\u4F01\u4E1AID\u3001\u5E94\u7528secret \u83B7\u53D6token</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getToken</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id<span class="token punctuation">,</span> secret <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>qyweixinUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/cgi-bin/gettoken?corpid=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;corpsecret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>secret<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>access_token<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53D1\u9001\u6D88\u606F\u901A\u77E5\u5230\u4F01\u4E1A\u5FAE\u4FE1</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">postMsg</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">accessToken<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>qyweixinUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/cgi-bin/message/send?access_token=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>accessToken<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">touser</span><span class="token operator">:</span> config<span class="token punctuation">.</span>touser <span class="token operator">||</span> <span class="token string">&quot;@all&quot;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>config<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F01\u4E1A\u5FAE\u4FE1\u6D88\u606F\u901A\u77E5</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">wxNotify</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6token</span>
    <span class="token keyword">const</span> accessToken <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token constant">WX_COMPANY_ID</span><span class="token punctuation">,</span>
      <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token constant">WX_APP_SECRET</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u53D1\u9001\u6D88\u606F</span>
    <span class="token keyword">const</span> defaultConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msgType</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">agentid</span><span class="token operator">:</span> <span class="token constant">WX_APP_ID</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>config<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>defaultConfig<span class="token punctuation">,</span> <span class="token operator">...</span>config <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">postMsg</span><span class="token punctuation">(</span>accessToken<span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;wx:\u4FE1\u606F\u53D1\u9001\u6210\u529F\uFF01&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;wx:\u4FE1\u606F\u53D1\u9001\u5931\u8D25\uFF01&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u83B7\u53D6\u57FA\u91D1\u6570\u636E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getFundInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fundCode</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    axios
      <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fundURL<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fundCode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span>data <span class="token operator">?</span> <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8BBE\u7F6E\u5B9A\u65F6\u81EA\u52A8\u6267\u884C</li></ul><blockquote><p>\u65B0\u5EFA\u4E00\u4E2Agithub workflow&amp;\u521B\u5EFA.yml\u6587\u4EF6</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> wxFundBot
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token comment">#\u65F6\u95F4\u683C\u5F0F minute hour day month week \u8BBE\u7F6E\u7684\u65F6\u95F4\u662FUTC \u4E0D\u662F\u5317\u4EAC\u65F6\u95F4</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&quot;10 9 * * *&quot;</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">start</span><span class="token punctuation">:</span>
    <span class="token comment"># \u8FD0\u884C\u73AF\u5883\u4E3A\u6700\u65B0\u7248\u7684Ubuntu</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2  

      <span class="token comment">#\u5B89\u88C5node.js</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2  
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;14&#39;</span>

      <span class="token comment"># \u5B89\u88C5\u4F9D\u8D56\u5E76\u4E14\u6267\u884C\u811A\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> npm install
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Start task
        <span class="token key atrule">run</span><span class="token punctuation">:</span> node index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),c=[o];function l(i,u){return s(),a("div",null,c)}var k=n(e,[["render",l],["__file","wxFundBot.html.vue"]]);export{k as default};
