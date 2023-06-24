import{_ as n,o as s,c as a,d as t}from"./app.5f722a28.js";const p={},e=t(`<h1 id="\u81EA\u52A8\u66F4\u65B0\u75AB\u60C5\u6570\u636E\u5C0F\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u66F4\u65B0\u75AB\u60C5\u6570\u636E\u5C0F\u8BB0" aria-hidden="true">#</a> \u81EA\u52A8\u66F4\u65B0\u75AB\u60C5\u6570\u636E\u5C0F\u8BB0</h1><div class="custom-container tip"><p class="custom-container-title">\u76EE\u7684/\u52A8\u673A</p><p>\u8003\u8651\u5230\u70E6\u4EBA\u7684\u75AB\u60C5\u53CD\u53CD\u590D\u590D\u5730\u7206\u53D1\uFF0C\u6211\u53C8\u61D2\u5F97\u4E13\u95E8\u6253\u5F00\u8F6F\u4EF6\u53BB\u67E5\u770B\u75AB\u60C5\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u4E8E\u662F\u4E4E\u5C31\u60F3\u7740\u80FD\u5426\u6BCF\u5929\u81EA\u52A8\u83B7\u53D6\u75AB\u60C5\u6570\u636E\u8FDB\u884C\u53EF\u89C6\u5316\u5C55\u793A\uFF0C\u4EE5\u65E5\u671F+\u65F6\u95F4\u4E3A\u7EF4\u5EA6\u5199\u5165\u4E2A\u4EBA\u535A\u5BA2\u91CC\u9762\uFF0C\u8BB0\u5F55\u4E00\u4EFD\u75AB\u60C5\u6570\u636E\u5386\u53F2\uFF1B\u6700\u521D\u7684\u7248\u672C\u4F7F\u7528\u7684Python\u8FDB\u884C\u5B9E\u73B0\uFF0C\u8003\u8651\u5230\u7C7B\u578B\u4E0D\u4E25\u8C28\u8F6C\u800C\u4F7F\u7528TypeScript+NodeJs\u6765\u5B9E\u73B0\u8FD9\u4E2A\u81EA\u52A8\u66F4\u65B0\u75AB\u60C5\u6570\u636E\u5C0F\u5DE5\u5177\uFF0C\u4ECE\u6B64\u89E3\u653E\u53CC\u624B\u770B\u6570\u636E\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">\u6574\u4F53\u601D\u8DEF</p><p>1.\u4F7F\u7528Nodejs+TypeScript\u5B8C\u6210\u6570\u636E\u83B7\u53D6\u548C\u6587\u4EF6\u8BFB\u5199\u64CD\u4F5C</p><p>2.\u4F7F\u7528Github Action\u5B8C\u6210\u9879\u76EE\u7684\u81EA\u52A8\u96C6\u6210(\u5B9A\u65F6\u4EFB\u52A1\u3001\u62C9\u53D6\u3001\u63A8\u9001\u3001\u90E8\u7F72)</p></div><div class="custom-container tip"><p class="custom-container-title">\u5177\u4F53\u6B65\u9AA4</p><p>1.\u4F7F\u7528axios\u5B8C\u6210\u7F51\u7EDC\u8BF7\u6C42\u548C\u6570\u636E\u7EC4\u88C5</p><p>2.\u89E3\u6784\u6570\u636E&amp;\u62FC\u63A5md\u6587\u4EF6\u5185\u5BB9</p><p>3.\u5411\u6307\u5B9A\u8DEF\u5F84\u5199\u5165md\u6587\u4EF6</p><p>4.\u8BFB\u53D6\u6307\u5B9A\u8DEF\u5F84md\u6587\u4EF6\u83B7\u53D6\u6587\u4EF6\u5217\u8868</p><p>5.\u5C06\u6587\u4EF6\u5217\u8868\u5199\u5165JSON\u6587\u4EF6</p><p>6.\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5F15\u5165\u8DEF\u7531\u914D\u7F6E</p><p>7.\u914D\u7F6EGitHub Action\u4EFB\u52A1\u5B8C\u6210\u81EA\u52A8\u96C6\u6210</p></div><h3 id="\u6570\u636E\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u83B7\u53D6" aria-hidden="true">#</a> \u6570\u636E\u83B7\u53D6</h3><ul><li>\u7EDF\u4E00\u63A5\u53E3\u5904\u7406</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@func</span> getApiData
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> url
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ApiRequestParams<span class="token punctuation">}</span> params
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>Promise&lt;Result&lt;T&gt;&gt;<span class="token punctuation">}</span>
 * <span class="token keyword">@desc</span> \u63A5\u53E3\u7EDF\u4E00\u5904\u7406
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> getApiData <span class="token operator">=</span> <span class="token generic-function"><span class="token function">async</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> ApiRequestParams
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Result<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> req<span class="token punctuation">,</span> service<span class="token punctuation">,</span> func <span class="token punctuation">}</span> <span class="token operator">=</span> params
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    args<span class="token operator">:</span> <span class="token punctuation">{</span>
      req
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    service<span class="token punctuation">,</span>
    func<span class="token punctuation">,</span>
    context<span class="token operator">:</span> <span class="token punctuation">{</span>
      userId<span class="token operator">:</span> BaseApiInfo<span class="token punctuation">.</span><span class="token constant">USERID</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span>data
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u63A5\u53E3\u8BF7\u6C42&amp;\u6570\u636E\u7EC4\u88C5</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u5168\u56FD\u4FE1\u606F</span>
<span class="token keyword">const</span> params_chinaRealTimeInfo <span class="token operator">=</span> URL_Object<span class="token punctuation">[</span><span class="token string">&#39;getChinaRealTimeInfo&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">getApiData</span><span class="token generic class-name"><span class="token operator">&lt;</span>ChinaRealTimeInfo<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  params_chinaRealTimeInfo<span class="token punctuation">[</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    req<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    func<span class="token operator">:</span> params_chinaRealTimeInfo<span class="token punctuation">[</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    service<span class="token operator">:</span> params_chinaRealTimeInfo<span class="token punctuation">[</span><span class="token string">&#39;service&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u7701\u4EFD\u4FE1\u606F</span>
<span class="token keyword">const</span> params_provinceInfoByCode <span class="token operator">=</span> URL_Object<span class="token punctuation">[</span><span class="token string">&#39;getProvinceInfoByCode&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> res_province <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">getApiData</span><span class="token generic class-name"><span class="token operator">&lt;</span>ProvinceInfo<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  params_provinceInfoByCode<span class="token punctuation">[</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    req<span class="token operator">:</span> <span class="token punctuation">{</span> provinceCode<span class="token operator">:</span> GuangDongProvinceCode <span class="token punctuation">}</span><span class="token punctuation">,</span>
    func<span class="token operator">:</span> params_provinceInfoByCode<span class="token punctuation">[</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    service<span class="token operator">:</span> params_provinceInfoByCode<span class="token punctuation">[</span><span class="token string">&#39;service&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u57CE\u5E02\u4FE1\u606F</span>
<span class="token keyword">const</span> params_cityInfoByProvCode <span class="token operator">=</span> URL_Object<span class="token punctuation">[</span><span class="token string">&#39;getCityInfoByProvCode&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> res_cityList <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">getApiData</span><span class="token generic class-name"><span class="token operator">&lt;</span>CityRes<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  params_cityInfoByProvCode<span class="token punctuation">[</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    req<span class="token operator">:</span> <span class="token punctuation">{</span> provinceCode<span class="token operator">:</span> GuangDongProvinceCode <span class="token punctuation">}</span><span class="token punctuation">,</span>
    func<span class="token operator">:</span> params_cityInfoByProvCode<span class="token punctuation">[</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    service<span class="token operator">:</span> params_cityInfoByProvCode<span class="token punctuation">[</span><span class="token string">&#39;service&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u7701\u4EFD\u8D8B\u52BF\u4FE1\u606F</span>
<span class="token keyword">const</span> params_provinceInfoHisByCode <span class="token operator">=</span> URL_Object<span class="token punctuation">[</span><span class="token string">&#39;getProvinceInfoHisByCode&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> res_trendInfo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">getApiData</span><span class="token generic class-name"><span class="token operator">&lt;</span>TrendInfoRes<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  params_provinceInfoHisByCode<span class="token punctuation">[</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    req<span class="token operator">:</span> <span class="token punctuation">{</span> provinceCode<span class="token operator">:</span> GuangDongProvinceCode <span class="token punctuation">}</span><span class="token punctuation">,</span>
    func<span class="token operator">:</span> params_provinceInfoHisByCode<span class="token punctuation">[</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    service<span class="token operator">:</span> params_provinceInfoHisByCode<span class="token punctuation">[</span><span class="token string">&#39;service&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u57CE\u5E02\u8D8B\u52BF\u4FE1\u606F</span>
<span class="token keyword">const</span> params_cityInfoHisByCode <span class="token operator">=</span> URL_Object<span class="token punctuation">[</span><span class="token string">&#39;getCityInfoHisByCode&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> res_cityTrendInfo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">getApiData</span><span class="token generic class-name"><span class="token operator">&lt;</span>CityTrendRes<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  params_cityInfoHisByCode<span class="token punctuation">[</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    req<span class="token operator">:</span> <span class="token punctuation">{</span> cityCode<span class="token operator">:</span> GuangZhouCityCode <span class="token punctuation">}</span><span class="token punctuation">,</span>
    func<span class="token operator">:</span> params_cityInfoHisByCode<span class="token punctuation">[</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    service<span class="token operator">:</span> params_cityInfoHisByCode<span class="token punctuation">[</span><span class="token string">&#39;service&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u57CE\u5E02\u65B0\u95FB\u6D88\u606F</span>
<span class="token keyword">const</span> params_topicContent <span class="token operator">=</span> URL_Object<span class="token punctuation">[</span><span class="token string">&#39;getTopicContent&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> res_news <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">getApiData</span><span class="token generic class-name"><span class="token operator">&lt;</span>ContentsRes<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>params_topicContent<span class="token punctuation">[</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  req<span class="token operator">:</span> <span class="token punctuation">{</span>
    areaCode<span class="token operator">:</span> GuangDongProvinceCode<span class="token punctuation">,</span>
    hotnewsReq<span class="token operator">:</span> <span class="token punctuation">{</span>
      limit<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      locationCode<span class="token operator">:</span> GuangDongProvinceCode<span class="token punctuation">,</span>
      offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      reqType<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      tab<span class="token operator">:</span> <span class="token string">&#39;shishitongbao&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    queryList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  func<span class="token operator">:</span> params_topicContent<span class="token punctuation">[</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  service<span class="token operator">:</span> params_topicContent<span class="token punctuation">[</span><span class="token string">&#39;service&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u8D8B\u52BF\u56FE\u8868\u4FE1\u606F</span>
<span class="token keyword">const</span> params_trendChartInfo <span class="token operator">=</span> URL_Object<span class="token punctuation">[</span><span class="token string">&#39;getChartInfo&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> res_chartInfo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">getApiData</span><span class="token generic class-name"><span class="token operator">&lt;</span>TrendChartInfoRes<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  params_trendChartInfo<span class="token punctuation">[</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    req<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    func<span class="token operator">:</span> params_trendChartInfo<span class="token punctuation">[</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    service<span class="token operator">:</span> params_trendChartInfo<span class="token punctuation">[</span><span class="token string">&#39;service&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u6570\u636E\u7EC4\u88C5</span>
<span class="token keyword">const</span> resData <span class="token operator">=</span> <span class="token punctuation">{</span>
  chinaRealTimeInfo<span class="token operator">:</span> res<span class="token punctuation">.</span>args<span class="token punctuation">.</span>rsp<span class="token punctuation">,</span>
  provinceInfos<span class="token operator">:</span> res_province<span class="token punctuation">.</span>args<span class="token punctuation">.</span>rsp<span class="token punctuation">,</span>
  cityRes<span class="token operator">:</span> res_cityList<span class="token punctuation">.</span>args<span class="token punctuation">.</span>rsp<span class="token punctuation">,</span>
  trendInfoRes<span class="token operator">:</span> res_trendInfo<span class="token punctuation">.</span>args<span class="token punctuation">.</span>rsp<span class="token punctuation">,</span>
  cityTrendRes<span class="token operator">:</span> res_cityTrendInfo<span class="token punctuation">.</span>args<span class="token punctuation">.</span>rsp<span class="token punctuation">,</span>
  contentsRes<span class="token operator">:</span> res_news<span class="token punctuation">.</span>args<span class="token punctuation">.</span>rsp<span class="token punctuation">,</span>
  trendChartInfoRes<span class="token operator">:</span> res_chartInfo<span class="token punctuation">.</span>args<span class="token punctuation">.</span>rsp
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6587\u4EF6\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5904\u7406" aria-hidden="true">#</a> \u6587\u4EF6\u5904\u7406</h3><ul><li>\u6587\u4EF6\u8BFB\u53D6</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@func</span> readFileList
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> path
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>object<span class="token punctuation">}</span>
 * <span class="token keyword">@desc</span> \u8BFB\u53D6\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684md\u6587\u4EF6
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">readFileList</span> <span class="token operator">=</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> filesList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> files <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> name <span class="token keyword">of</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.md&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span>
      filesList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        text<span class="token operator">:</span> name<span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> filesList
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6587\u4EF6\u5199\u5165</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">writeFileList</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token builtin">string</span>
    link<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5199\u5165\u8DEF\u7531\u5230JSON\u6587\u4EF6---&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6587\u4EF6\u5199\u5165&amp;\u8BFB\u53D6&amp;\u8DEF\u7531\u751F\u6210</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@func</span> writeMdWithContent
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> timeStr
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> content
 * <span class="token keyword">@desc</span> \u5199\u5165md\u6587\u4EF6\u5E76\u66F4\u65B0\u8DEF\u7531
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">writeMdWithContent</span> <span class="token operator">=</span> <span class="token punctuation">(</span>timeStr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> writePath <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mdPath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>timeStr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.md</span><span class="token template-punctuation string">\`</span></span>
  fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>writePath<span class="token punctuation">,</span> content<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>timeStr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.md created.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> filesList <span class="token operator">=</span> <span class="token function">readFileList</span><span class="token punctuation">(</span>mdPath<span class="token punctuation">)</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mdPath<span class="token punctuation">)</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filesList<span class="token punctuation">)</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BFB\u53D6\u6587\u4EF6\u76EE\u5F55\u751F\u6210\u8DEF\u7531---&#39;</span><span class="token punctuation">)</span>

    <span class="token function">writeFileList</span><span class="token punctuation">(</span>jsonFilePath<span class="token punctuation">,</span> filesList<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8DEF\u7531\u5F15\u7528</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// config.js</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./public/json/others.json&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> chinaRoutes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./public/json/chinaRoutes.json&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// ...</span>
<span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6D77\u5916\u75AB\u60C5\u6570\u636E&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> routes
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u56FD\u5185\u75AB\u60C5\u6570\u636E&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> chinaRoutes
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u52A8\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u96C6\u6210" aria-hidden="true">#</a> \u81EA\u52A8\u96C6\u6210</h3><ul><li>\u4F7F\u7528Github Action\u7684\u80FD\u529B\u5B8C\u6210\u81EA\u52A8\u96C6\u6210\u64CD\u4F5C</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> ncov_china task
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token comment">#\u65F6\u95F4\u683C\u5F0F minute hour day month week \u8BBE\u7F6E\u7684\u65F6\u95F4\u662FUTC \u4E0D\u662F\u5317\u4EAC\u65F6\u95F4</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&quot;20 0 * * *&quot;</span>

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
        <span class="token key atrule">run</span><span class="token punctuation">:</span> node jsSrc/ncov_china.js

      <span class="token comment"># \u63D0\u4EA4\u5E76\u63A8\u9001\u4FEE\u6539</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Commit files
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          git config --local user.email &quot;actions@github.com&quot;
          git config --local user.name &quot;GitHub Action&quot;
          git add .
          git commit -m &quot;update ncov_china_info md file&quot;</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Push changes
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> ad<span class="token punctuation">-</span>m/github<span class="token punctuation">-</span>push<span class="token punctuation">-</span>action@master
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          
      <span class="token comment"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token important">&amp;&amp;</span> npm run docs<span class="token punctuation">:</span>build

      <span class="token comment"># \u90E8\u7F72\u5230 GitHub Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token comment"># \u4F7F\u7528\u522B\u4EBA\u5199\u597D\u7684\u4E00\u4E2A action</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@releases/v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u8FD9\u91CC\u7684 ACCESS_TOKEN \u540D\u5B57\u9700\u8981\u548C\u4E0B\u6587\u4E2D\u7684\u76F8\u5BF9\u5E94</span>
          <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># \u6253\u5305\u540E\u7684\u6587\u4EF6\u90E8\u7F72\u5230\u54EA\u4E2A\u5206\u652F\u4E0A</span>
          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># \u6253\u5305\u540E\u7684\u6587\u4EF6\u5728\u54EA\u91CC</span>
          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> docs/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","autoUpdateNcovBlog.html.vue"]]);export{r as default};
