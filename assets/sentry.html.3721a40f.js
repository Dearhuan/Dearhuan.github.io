import{_ as a,o as i,c,a as e,b as r,d as n,e as t,r as s}from"./app.690cc4cd.js";const o={},l=n('<h1 id="sentry" tabindex="-1"><a class="header-anchor" href="#sentry" aria-hidden="true">#</a> Sentry</h1><h1 id="\u4E3A\u4EC0\u4E48\u6211\u4EEC\u9700\u8981\u5E94\u7528\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6211\u4EEC\u9700\u8981\u5E94\u7528\u76D1\u63A7" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u6211\u4EEC\u9700\u8981\u5E94\u7528\u76D1\u63A7</h1><p>\u5927\u5BB6\u662F\u5426\u6709\u8FC7\u8FD9\u6837\u7684\u4F53\u9A8C\uFF1A</p><blockquote><p>\u4EA7\u54C1\u65B0\u529F\u80FD\u4E0A\u7EBF\u51E0\u5468\u540E\uFF0C\u5BA2\u6237\u63D0\u5DE5\u5355\u53CD\u9988\u95EE\u9898\u3002\u7814\u53D1\u540C\u5B66\u7ECF\u6392\u67E5\u786E\u8BA4\u662F bug\uFF0C\u4E14\u4F1A\u4EA7\u751F\u810F\u6570\u636E\u3002\u6700\u7EC8\uFF0C\u4FEE\u590D bug + \u4E0A\u7EBF\u82B1\u4E86\u5927\u534A\u5929\uFF0C\u800C\u7F16\u5199\u4FEE\u590D\u811A\u672C + \u4FEE\u590D\u6570\u636E\u8017\u8D39\u4E86\u4E00\u5468\u3002</p></blockquote><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d841fefe08d422cad6e4c41affcd1d7~tplv-k3u1fbpfcp-watermark.awebp?" alt="\u53D1\u73B0bug\u7684\u65F6\u673A.jpg"></p><p><strong>\u5982\u679C\u53D1\u73B0 bug \u7684\u65F6\u673A\u8D8A\u65E9\uFF0C\u90A3\u4E48\u4FEE\u590D\u6210\u672C\u5C31\u8D8A\u4F4E</strong>\u3002</p><p>\u901A\u8FC7\u5BF9\u5E94\u7528\u4E2D\u7684\u9519\u8BEF\u6216\u5F02\u5E38\u8FDB\u884C\u76D1\u63A7\u548C\u81EA\u52A8\u53CD\u9988\uFF0C\u6709\u52A9\u4E8E\u6211\u4EEC\u5C3D\u65E9\u53D1\u73B0\u9690\u853D\u7684\u95EE\u9898\uFF0C\u63D0\u5347\u4EA7\u54C1\u8D28\u91CF\u548C\u7814\u53D1\u6548\u7387\u3002</p><h3 id="\u65E5\u5FD7\u7CFB\u7EDF\u4E0D\u7B49\u540C\u5E94\u7528\u76D1\u63A7\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u7CFB\u7EDF\u4E0D\u7B49\u540C\u5E94\u7528\u76D1\u63A7\u7CFB\u7EDF" aria-hidden="true">#</a> \u65E5\u5FD7\u7CFB\u7EDF\u4E0D\u7B49\u540C\u5E94\u7528\u76D1\u63A7\u7CFB\u7EDF</h3><p>\u53EF\u80FD\u6709\u540C\u5B66\u4F1A\u8BF4\uFF1A\u7A0B\u5E8F\u7684\u9519\u8BEF\u548C\u5F02\u5E38\u5728\u6211\u4EEC\u7684\u65E5\u5FD7\u7CFB\u7EDF\u91CC\u9762\u90FD\u6709\u5440\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u9700\u8981\u4E13\u95E8\u7684\u5E94\u7528\u76D1\u63A7\u7CFB\u7EDF\uFF1F</p><p>\u786E\u5B9E\uFF0C\u65E5\u5FD7\u4E2D\u4E8B\u65E0\u5DE8\u7EC6\u5730\u8BB0\u5F55\u4E86\u5927\u91CF\u7684\u8FD0\u884C\u8FC7\u7A0B\u548C\u5F02\u5E38\u4FE1\u606F\u3002\u4E0D\u8FC7\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u53EF\u80FD\u4E5F\u5B58\u5728\u91CD\u590D\u3001\u65E0\u6548\u3001\u7F3A\u4E4F\u8054\u7CFB\u7684\u5F0A\u7AEF\u3002\u800C\u4E14\uFF0C\u65E5\u5FD7\u4E3B\u8981\u662F\u5728\u7814\u53D1\u540C\u5B66\u6392\u67E5\u95EE\u9898\u65F6\u4F7F\u7528\uFF0C\u5F88\u5C11\u88AB\u7528\u4E8E\u4E3B\u52A8\u76D1\u63A7\u548C\u544A\u8B66\uFF0C\u65E5\u5E38\u5B58\u5728\u7740\u5927\u91CF\u7684\u9519\u8BEF\u4FE1\u606F\u4E00\u76F4\u672A\u88AB\u5173\u6CE8\u548C\u5904\u7406\u3002</p><h1 id="sentry-\u4E00\u6B3E\u53D7\u6B22\u8FCE\u7684\u5E94\u7528\u76D1\u63A7\u4EA7\u54C1" tabindex="-1"><a class="header-anchor" href="#sentry-\u4E00\u6B3E\u53D7\u6B22\u8FCE\u7684\u5E94\u7528\u76D1\u63A7\u4EA7\u54C1" aria-hidden="true">#</a> Sentry\uFF1A\u4E00\u6B3E\u53D7\u6B22\u8FCE\u7684\u5E94\u7528\u76D1\u63A7\u4EA7\u54C1</h1>',11),b={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fgetsentry%2Fsentry",target:"_blank",rel:"noopener noreferrer"},d=t("Sentry"),f=t(" \u662F\u4E00\u6B3E\u5F00\u6E90\u7684\u5E94\u7528\u76D1\u63A7\u4EA7\u54C1\uFF0C\u4F7F\u7528 Python\u3001JavaScript\u3001HTML\u3001CSS \u6253\u9020\u3002\u5728 "),h={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2F",target:"_blank",rel:"noopener noreferrer"},u=t("GitHub"),g=t(" \u4E0A\u6709 29k Stars\uFF0C\u662F\u5E94\u7528\u76D1\u63A7\u9886\u57DF Stars \u6570\u6392\u884C\u6700\u9AD8\u7684\u5F00\u6E90\u9879\u76EE\uFF0C\u5176\u5B98\u7F51\u5BA3\u79F0\u6709 1 \u767E\u4E07\u540D\u5F00\u53D1\u8005\u548C 7 \u4E07\u4E2A\u7EC4\u7EC7\u5728\u4F7F\u7528 Sentry\u3002\u9664\u4E86\u63D0\u4F9B\u5F00\u6E90\u4EA7\u54C1\u5916\uFF0C\u5176\u5E55\u540E\u7684\u516C\u53F8\u4E5F\u63D0\u4F9B\u4ED8\u8D39\u7684 SaaS \u670D\u52A1\uFF1A"),y={href:"https://link.juejin.cn/?target=https%3A%2F%2Fsentry.io%2F",target:"_blank",rel:"noopener noreferrer"},m=t("sentry.io"),S=t("\u30022021 \u5E74\u8BE5\u516C\u53F8\u5BA3\u5E03\u83B7\u5F97\u4E86 6000 \u4E07\u7F8E\u5143\u7684 D \u8F6E\u878D\u8D44\uFF0C\u8BE5\u8F6E\u878D\u8D44\u4F7F Sentry \u7684\u603B\u8D44\u91D1\u8FBE\u5230 1.27 \u4EBF\u7F8E\u5143\uFF0C\u878D\u8D44\u540E\u4F30\u503C\u4E3A 10 \u4EBF\u7F8E\u5143\u3002\u786E\u5B9E\u662F\u4E00\u6B3E\u503C\u5F97\u5173\u6CE8\u7684\u4EA7\u54C1\u3002"),k=n('<h3 id="sentry-\u6709\u4EE5\u4E0B\u91CD\u8981\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#sentry-\u6709\u4EE5\u4E0B\u91CD\u8981\u7279\u70B9" aria-hidden="true">#</a> Sentry \u6709\u4EE5\u4E0B\u91CD\u8981\u7279\u70B9\uFF1A</h3><ul><li><p>\u4EA7\u54C1\u4F53\u9A8C\u597D\uFF0C\u529F\u80FD\u5B8C\u5584</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f53c9f29b88546b98f5ee2976a7ae182~tplv-k3u1fbpfcp-watermark.awebp?" alt="sentry-demo.jpg"></p></li><li><p>\u63A5\u5165\u5DE5\u4F5C\u91CF\u5C11</p><p>\u5B98\u65B9\u548C\u5F00\u6E90\u793E\u533A\u63D0\u4F9B\u4E86\u5404\u79CD\u4E3B\u6D41\u5F00\u53D1\u8BED\u8A00\u548C\u6846\u67B6\u7684 SDK\uFF0C\u4FBF\u4E8E\u5F00\u53D1\u8005\u63A5\u5165\uFF0C\u5927\u591A\u51E0\u5341\u884C\u4EE3\u7801\u5185\u5373\u53EF\u5B8C\u6210\u3002</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4dc57f94fcc242b4bd65b78986eb2d96~tplv-k3u1fbpfcp-watermark.awebp?" alt="SDKs.jpg"></p></li><li><p>Sentry \u4E13\u6CE8\u4E8E Error\u3001Exception\u3001Crash</p><p>\u53EF\u4EE5\u67E5\u770B\u5230\u5177\u4F53\u7684\u9519\u8BEF\u4FE1\u606F\u548C\u8C03\u7528\u6808\uFF0C\u80FD\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u4EE3\u7801\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab388f7612984921bf35c3c84e96b8bb~tplv-k3u1fbpfcp-watermark.awebp?" alt="js-error.jpg"></p></li><li><p>\u63D0\u4F9B\u4E30\u5BCC\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F</p><p>SDK \u4F1A\u81EA\u52A8\u4E0A\u62A5\u57FA\u7840\u4FE1\u606F\uFF0C\u4E5F\u652F\u6301\u4E0A\u62A5\u81EA\u5B9A\u4E49\u7684\u4FE1\u606F\uFF0C\u4FBF\u4E8E\u6392\u67E5\u95EE\u9898\u3002</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5cf958931e3e458798101650d55480a5~tplv-k3u1fbpfcp-watermark.awebp?" alt="context.jpg"></p></li><li><p>\u81EA\u52A8\u5408\u5E76\u91CD\u590D\u95EE\u9898</p><p>\u91CD\u590D\u7684\u62A5\u9519\u88AB\u81EA\u52A8\u5408\u5E76\u4E14\u7D2F\u8BA1\u6B21\u6570\uFF0C\u907F\u514D\u5F00\u53D1\u8005\u5728\u5927\u91CF\u91CD\u590D\u5197\u4F59\u7684\u4FE1\u606F\u5BFB\u627E bug \u7684\u86DB\u4E1D\u9A6C\u8FF9\u3002</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7733b0c909944b14a8cb4a5e4298c9fe~tplv-k3u1fbpfcp-watermark.awebp?" alt="issues.jpg"></p></li><li><p>\u4E3B\u52A8\u90AE\u4EF6\u544A\u8B66</p><p>\u4E0D\u7528\u518D\u7B49\u201C\u5BA2\u6237\u544A\u8B66\u201D\u540E\u624D\u5F00\u59CB\u6392\u67E5\u95EE\u9898\u3002</p></li></ul><h1 id="\u81EA\u90E8\u7F72-sentry-\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u81EA\u90E8\u7F72-sentry-\u7684\u7F3A\u70B9" aria-hidden="true">#</a> \u81EA\u90E8\u7F72 Sentry \u7684\u7F3A\u70B9</h1>',3),_=e("p",null,"\u90E8\u7F72\u4F9D\u8D56\u7E41\u591A",-1),j=t("\u5229\u7528\u5B98\u65B9\u7684\u63D0\u4F9B\u7684 "),w={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fgetsentry%2Fonpremise",target:"_blank",rel:"noopener noreferrer"},v=t("Github \u4ED3\u5E93"),x=t("\uFF0C\u57FA\u4E8E Docker \u548C Docker Compose \u786E\u5B9E\u53EF\u4EE5\u4E00\u952E\u90E8\u7F72\u3001\u5F00\u7BB1\u5373\u7528\u3002\u4E0D\u8FC7\uFF0C\u5F53\u770B\u5230 30 \u4E2A\u5BB9\u5668\u5217\u5728\u9762\u524D\u65F6\uFF0C\u8FD8\u662F\u4F1A\u89C9\u5F97\u8E0C\u8E87\u3002"),F=e("p",null,[e("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da544f826dc14bbcbe85ee3456c0d68f~tplv-k3u1fbpfcp-watermark.awebp?",alt:"containers.jpg"})],-1),D=e("li",null,[e("p",null,"\u9700\u81EA\u884C\u4FDD\u969C\u9AD8\u53EF\u7528"),e("p",null,"\u5982\u4E0A\uFF0CSentry \u4F7F\u7528\u4E86\u4F17\u591A\u7EC4\u4EF6\uFF0C\u6BD4\u5982\uFF1AZooKeeper\u3001Nginx\u3001Redis\u3001Memcached\u3001Kafka\u3001PostgreSql\u3001ClickHouse \u7B49\uFF0C\u8981\u81EA\u884C\u8FD0\u7EF4\u8FD9\u4E9B\u7EC4\u4EF6\u5E76\u4FDD\u969C\u9AD8\u53EF\u7528\uFF0C\u5E76\u4E0D\u662F\u5BB9\u6613\u7684\u4E8B\u60C5\u3002")],-1),T=n('<h1 id="\u907F\u514D-sentry-\u5F15\u53D1\u96EA\u5D29" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D-sentry-\u5F15\u53D1\u96EA\u5D29" aria-hidden="true">#</a> \u907F\u514D Sentry \u5F15\u53D1\u96EA\u5D29</h1><p>\u5F15\u5165\u65B0\u7684\u6280\u672F\u6216\u8005\u5DE5\u5177\uFF0C\u6216\u591A\u6216\u5C11\u90FD\u4F1A\u589E\u52A0\u7CFB\u7EDF\u7684\u590D\u6742\u5EA6\u548C\u8FD0\u884C\u98CE\u9669\u3002</p><p>\u6211\u4EEC\u4E4B\u524D\u51FA\u8FC7\u4E00\u6B21\u4E25\u91CD\u95EE\u9898\uFF1A\u67D0\u4E2A\u65E5\u5747\u4E09\u5343\u4E07\u63A5\u53E3\u8BF7\u6C42\u91CF\u7684\u670D\u52A1\u53D1\u751F\u6545\u969C\uFF0C\u5927\u91CF\u7684\u9519\u8BEF\u4FE1\u606F\u6D8C\u5411 Sentry \u670D\u52A1\u5668\uFF0C\u5BFC\u81F4 Sentry \u54CD\u5E94\u4E25\u91CD\u5EF6\u8FDF\uFF0C\u5176 Redis \u961F\u5217\u5185\u5B58\u5BB9\u91CF\u63A5\u8FD1\u5360\u6EE1\uFF0C\u800C Nginx \u4E5F\u5168\u90FD\u54CD\u5E94 504 Gateway Timeout\u3002\u6070\u597D\u8BE5\u6545\u969C\u7684\u670D\u52A1\u7531\u4E8E\u8BF7\u6C42 Sentry \u670D\u52A1\u7AEF\u672A\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\uFF0C\u5BFC\u81F4 HTTP \u8BF7\u6C42\u540C\u6B65\u963B\u585E\uFF0C\u53CD\u5012\u62D6\u57AE\u4E86\u670D\u52A1\u672C\u8EAB\u3002</p><p>\u4E3A\u4E86\u89C4\u907F\u6B64\u7C7B\u95EE\u9898\uFF0C\u6709\u4EE5\u4E0B\u505A\u6CD5\uFF1A</p><ul><li><p>\u4FDD\u969C Sentry \u670D\u52A1\u7AEF\u9AD8\u53EF\u7528</p><p>\u8FD9\u70B9\u6700\u91CD\u8981\uFF0C\u4F46\u5B9E\u9645\u6211\u4EEC\u5E76\u672A\u505A\u597D\u3002\u76EE\u524D\u6211\u4EEC\u81EA\u90E8\u7F72\u7684 Sentry \u662F\u4E00\u4E2A\u5355\u70B9\uFF0C\u5E76\u6CA1\u6709\u96C6\u7FA4\u6216\u5197\u4F59\u3002\u5982\u679C\u8981\u5B9E\u73B0\u9AD8\u53EF\u7528\uFF0C\u90A3\u4E48\u4ED8\u51FA\u7684\u91D1\u94B1\u6210\u672C\u4F1A\u8F83\u9AD8\uFF0C\u751A\u81F3\u53EF\u80FD\u8D85\u8FC7\u4E86\u4F7F\u7528 Sentry SaaS \u4ED8\u8D39\u670D\u52A1\u7684\u6210\u672C\u3002\u7531\u4E8E Sentry \u5B98\u65B9\u5E76\u672A\u63D0\u4F9B\u4E2D\u56FD\u533A\u7684\u670D\u52A1\uFF0CHTTP \u8BF7\u6C42\u5230\u56FD\u5916\u7684\u901F\u5EA6\u5E76\u4E0D\u7406\u60F3\uFF0C\u4F7F\u7528\u5B98\u65B9 SaaS \u670D\u52A1\u4E5F\u4E0D\u89C1\u5F97\u662F\u592A\u597D\u7684\u9009\u62E9\u3002</p></li><li><p>\u8BBE\u7F6E <code>timeout</code></p><p>\u4F7F\u7528 Sentry SDK \u65F6\uFF0C\u4E00\u5B9A\u8981\u8BBE\u7F6E\u5411 Sentry \u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5EFA\u8BAE 3 \u79D2\u4EE5\u4E0B\u3002</p></li><li><p>\u8BBE\u7F6E <code>sample_rate</code></p><p>\u4F7F\u7528 Sentry SDK \u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<strong>\u91C7\u6837\u7387</strong>\uFF0C<code>0.00</code> \u8868\u793A\u62D2\u7EDD\u53D1\u9001\u4EFB\u4F55\u4E8B\u4EF6\uFF0C<code>1.00</code> \u8868\u793A\u53D1\u9001\u5168\u90E8\u4E8B\u4EF6\u3002\u5EFA\u8BAE\u524D\u671F\u8BBE\u7F6E\u8F83\u5C0F\u7684\u503C\uFF0C\u7136\u540E\u89C6\u5E94\u7528\u7684 PV \u5927\u5C0F\u8FDB\u884C\u8C03\u6574\u3002\u4F7F\u7528\u91C7\u6837\u7387\u53EF\u80FD\u4F1A\u5E26\u6765\u8FD9\u6837\u7684\u8D1F\u9762\u5F71\u54CD\uFF1A\u96F6\u661F\u7684\u9519\u8BEF\u53EF\u80FD\u672A\u4E0A\u62A5\uFF0C\u5BFC\u81F4\u4E00\u76F4\u672A\u88AB\u53D1\u73B0\u3002</p></li><li><p>\u53CA\u65F6\u7194\u65AD</p><p>\u5047\u5982\u5F53 Sentry \u670D\u52A1\u5668\u4E0D\u582A\u91CD\u8D1F\u65F6\uFF0C\u5E94\u8BE5\u907F\u514D\u5E94\u7528\u7EE7\u7EED\u8BF7\u6C42 Sentry \u4E86\u3002\u6BD4\u5982\uFF1A\u53EF\u4EE5\u624B\u52A8\u5C06\u91C7\u6837\u7387\u8BBE\u7F6E\u4E3A <code>0.00</code>\u3002</p></li><li><p>\u4F7F\u7528\u5F02\u6B65\u65B9\u5F0F\uFF08async\uFF09\u53D1\u9001\u8BF7\u6C42</p><p>\u5982\u679C SDK \u652F\u6301\u5F02\u6B65\u53D1\u9001\u8BF7\u6C42\uFF0C\u90A3\u5C31\u4F7F\u7528\uFF0C\u907F\u514D\u540C\u6B65\u963B\u585E\u3002</p></li><li><p>\u9694\u79BB\u751F\u4EA7\u73AF\u5883\u7684 Sentry</p><p>\u8FD0\u7EF4\u540C\u4E8B\u9694\u79BB\u90E8\u7F72\u4E86\u4E24\u5957 Sentry\uFF0C\u4E00\u5957\u662F\u4F53\u9A8C\u73AF\u5883\uFF0C\u4F9B\u5F00\u53D1\u73AF\u5883/\u6D4B\u8BD5\u73AF\u5883/\u9884\u53D1\u5E03\u73AF\u5883\u7684\u5E94\u7528\u63A5\u5165\u4F7F\u7528\uFF1B\u53E6\u5916\u4E00\u5957\u662F\u6B63\u5F0F\u73AF\u5883\uFF0C\u4F9B\u751F\u4EA7\u73AF\u5883/\u79C1\u6709\u5316\u73AF\u5883\u7684\u5E94\u7528\u63A5\u5165\u4F7F\u7528\u3002\u5982\u679C\u8981\u8BD5\u9A8C Sentry \u7684\u529F\u80FD\u6216\u8C03\u6574 Sentry \u7684\u914D\u7F6E\uFF0C\u90A3\u6211\u4EEC\u4F1A\u5148\u5728\u4F53\u9A8C\u73AF\u5883\u7684 Sentry \u4E2D\u8FDB\u884C\uFF0C\u786E\u8BA4\u6CA1\u6709\u95EE\u9898\u540E\uFF0C\u624D\u4F1A\u8C03\u6574\u751F\u4EA7\u73AF\u5883\u7684 Sentry\uFF0C\u501F\u6B64\u4FDD\u969C\u751F\u4EA7\u73AF\u5883 Sentry \u7684\u7A33\u5B9A\u6027\u3002</p></li><li><p>\u901A\u8FC7\u961F\u5217\u6765\u7F13\u51B2\u8BF7\u6C42\u81F3 Sentry \u7684\u5E76\u53D1\u538B\u529B</p><p>\u5047\u8BBE\u5E94\u7528\u7684\u8BF7\u6C42\u91CF\u548C\u5E76\u53D1\u91CF\u90FD\u5DE8\u5927\uFF0C\u5F53\u51FA\u73B0\u4E25\u91CD\u6545\u969C\u65F6\u6BCF\u4E2A\u8BF7\u6C42\u5904\u7406\u90FD\u53D1\u751F\u9519\u8BEF\uFF0C\u90A3\u4E48\u5373\u4F7F\u5728 SDK \u4E2D\u8BBE\u7F6E\u4E86\u8F83\u4F4E\u7684\u91C7\u6837\u7387\uFF08\u6BD4\u5982\uFF1A<code>0.01</code>\uFF09\uFF0C\u53EF\u80FD\u8BF7\u6C42\u5230 Sentry \u7684\u5E76\u53D1\u91CF\u4F9D\u65E7\u8D85\u8FC7\u5176\u6709\u9650\u627F\u8F7D\u3002\u4E3A\u4E86\u907F\u514D\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5728\u6D41\u91CF\u6700\u5927\u7684\u670D\u52A1\u4E2D\u505A\u4E86\u5982\u4E0B\u5C1D\u8BD5\uFF1A\u6211\u4EEC\u589E\u52A0\u4E86\u4E00\u4E2A\u961F\u5217\uFF0C\u5C06\u670D\u52A1\u7684\u9519\u8BEF\u4E8B\u4EF6\u5148\u5165\u5217\uFF0C\u542F\u52A8\u4E86\u5C11\u91CF\u7684\u6D88\u8D39\u8FDB\u7A0B\u53BB\u6D88\u8D39\u8BE5\u961F\u5217\u7F13\u7F13\u4E0A\u62A5\u9519\u8BEF\u81F3 Sentry \u670D\u52A1\u7AEF\u3002\u5E76\u4E14\u5E94\u7528\u7A0B\u5E8F\u4E2D\u505A\u4E86\u5904\u7406\uFF0C\u5373\u4F7F\u8BE5\u961F\u5217\u5BB9\u91CF\u5360\u6EE1\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u6B63\u5E38\u4E1A\u52A1\uFF08\u53EA\u662F\u4E22\u5F03\u9519\u8BEF\u4E8B\u4EF6\uFF09\u3002\u5B9E\u8DF5\u8BC1\u660E\uFF0C\u8FD9\u79CD\u4E2D\u8F6C\u7F13\u51B2\u7684\u65B9\u5F0F\u975E\u5E38\u6709\u6548\uFF0C\u4E0D\u8FC7\u4E5F\u589E\u52A0\u4E86\u63A5\u5165 Sentry \u5DE5\u4F5C\u91CF\uFF0C\u5927\u5BB6\u53EF\u81EA\u884C\u53D6\u820D\u3002</p></li></ul><h1 id="sentry-\u4F7F\u7528\u5C0F\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#sentry-\u4F7F\u7528\u5C0F\u6280\u5DE7" aria-hidden="true">#</a> Sentry \u4F7F\u7528\u5C0F\u6280\u5DE7</h1><ul><li><p>\u4E0A\u62A5 Environment</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0db86bbbb077449b9bf15b1f6c086e84~tplv-k3u1fbpfcp-watermark.awebp?" alt="filter-env.jpg"></p><p>\u5728\u4E0D\u540C\u73AF\u5883\u901A\u8FC7 SDK \u914D\u7F6E\u4E0D\u540C\u7684\u6807\u8BC6\uFF0C\u6BD4\u5982\uFF1ADevelopment\u3001Test\u3001Release\u3001Production\u3001Privatisation\uFF0C\u8FD9\u6837\u65B9\u4FBF\u7684\u8BC6\u522B\u548C\u8FC7\u6EE4\u95EE\u9898\u3002</p></li><li><p>\u81EA\u5B9A\u4E49 Tags</p><p>SDK \u4F1A\u81EA\u52A8\u5E2E\u5FD9\u4E0A\u62A5\u4E00\u4E9B\u57FA\u7840\u7684 Tag\uFF0C\u540C\u65F6\u6211\u4EEC\u4E5F\u80FD\u6DFB\u52A0\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684 Tag\uFF08\u6BD4\u5982\uFF1A\u79DF\u6237\u3001\u9879\u76EE\u7B49\u4E1A\u52A1\u4FE1\u606F\uFF09\uFF0C\u5229\u4E8E\u6392\u67E5\u95EE\u9898\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9731c6ff0ae4498487a92085648dcc3b~tplv-k3u1fbpfcp-watermark.awebp?" alt="tags.jpg"></p><p>Tag \u53EF\u7528\u4E8E\u8FC7\u6EE4\uFF1A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49a17352c536475ea40ca4b6da87d428~tplv-k3u1fbpfcp-watermark.awebp?" alt="filter-tag.jpg"></p><p>Tag \u53EF\u7528\u4E8E\u7EDF\u8BA1\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5e07aba753b4262b5edf4d24f6673cd~tplv-k3u1fbpfcp-watermark.awebp?" alt="tag-stats.jpg"></p></li><li><p>\u81EA\u52A8\u6807\u8BB0\u5DF2\u89E3\u51B3</p><p>\u6709\u4E9B bug \u5DF2\u4FEE\u590D\u5E76\u4E0A\u7EBF\uFF0C\u4F46\u662F\u7814\u53D1\u540C\u5B66\u4E00\u822C\u90FD\u4E0D\u8BB0\u5F97\u5728 Sentry \u624B\u52A8\u6807\u8BB0\u5DF2\u89E3\u51B3\uFF1B\u8FD8\u5B58\u5728\u7B2C\u4E09\u65B9\u670D\u52A1\u5F02\u5E38\u7B49\u4E0D\u9700\u8981\u5904\u7406\u7684\u95EE\u9898\uFF0C\u4E5F\u4E0D\u592A\u4F1A\u53BB\u624B\u52A8\u6807\u8BB0\u3002\u4F7F\u7528\u201CAuto Resolve\u201D\u529F\u80FD\uFF0C\u5F53\u591A\u4E45\u5185\u672A\u518D\u51FA\u73B0\u8BE5\u95EE\u9898\u540E\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5E2E\u5FD9\u6807\u8BB0\u4E3A\u5DF2\u89E3\u51B3\uFF0C\u5F88\u65B9\u4FBF\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/adb8d46979be42b4be1b883e4e9bcaf1~tplv-k3u1fbpfcp-watermark.awebp?" alt="auto-resolve.jpg"></p></li><li><p>\u5408\u5E76\u95EE\u9898</p><p>\u7EDD\u5927\u591A\u6570\u91CD\u590D\u95EE\u9898\uFF0CSentry \u90FD\u80FD\u81EA\u52A8\u8BC6\u522B\u5E76\u5408\u5E76\u3002\u4E0D\u8FC7\u5076\u5C14\u8FD8\u662F\u5B58\u5728\u4F8B\u5916\uFF0C\u6BD4\u5982\uFF1A\u9519\u8BEF\u4FE1\u606F\u4E2D\u5B58\u5728\u4E00\u4E9B\u968F\u673A\u7684\u5185\u5BB9\uFF0C\u90A3\u4E48 Sentry \u53EF\u80FD\u4F1A\u4EE5\u4E3A\u662F\u4E0D\u540C\u7C7B\u578B\u7684\u9519\u8BEF\uFF0C\u8FDB\u800C\u672A\u5408\u5E76\uFF0C\u5BFC\u81F4\u91CD\u590D\u7684\u95EE\u9898\u4E00\u76F4\u90AE\u4EF6\u544A\u8B66\uFF0C\u5F88\u662F\u70E6\u4EBA\u3002\u901A\u8FC7\u8BBE\u7F6E\u201CFingerprint Rules\u201D\uFF0C\u5F3A\u5236\u6307\u5B9A\u540C\u7C7B\u9519\u8BEF\u7684\u201C\u6307\u7EB9\u201D\uFF0C\u8FD9\u6837\u5C31\u80FD\u8BA9\u8FD9\u4E9B\u9519\u8BEF\u8FDB\u884C\u5408\u5E76\u4E86\u3002</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32f262376491461595e1dfdf5a399950~tplv-k3u1fbpfcp-watermark.awebp?" alt="fingerprint-rules.png"></p></li><li><p>\u8BC6\u522B\u5E76\u5904\u7406\u771F\u6B63\u7684\u95EE\u9898\uFF0C\u907F\u514D\u201C\u72FC\u6765\u4E86\u201D</p><p>\u522B\u52A8\u4E0D\u52A8\u5C31\u629B\u5F02\u5E38\u6216\u8005\u8BB0 error\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A\u201C\u60A8\u4E0A\u4F20\u7684\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u6309\u8981\u6C42\u4E0A\u4F20\u6B63\u786E\u683C\u5F0F\u7684\u6587\u4EF6\u3002\u201D\uFF0C\u5176\u5B9E\u8FD9\u662F\u4E00\u4E2A\u6B63\u5E38\u7684\u4E1A\u52A1\u63D0\u793A\uFF0C\u5982\u679C\u5C06\u5B83\u4F5C\u4E3A\u9519\u8BEF\u4E0A\u62A5\u5230 Sentry\uFF0C\u90A3\u5E76\u6CA1\u6709\u4EC0\u4E48\u610F\u4E49\uFF0C\u6700\u7EC8\u4E5F\u4E0D\u4F1A\u8FDB\u884C\u5904\u7406\u3002\u5982\u679C\u8FD9\u6837\u7684\u201C\u566A\u97F3\u201D\u8D8A\u79EF\u8D8A\u591A\uFF0C\u90A3\u4E48\u4F1A\u964D\u4F4E\u7814\u53D1\u540C\u5B66\u5BF9\u771F\u6B63\u95EE\u9898\u7684\u654F\u611F\u5EA6\u3002\u90AE\u4EF6\u5929\u5929\u6536\u5230\u4E00\u5806\u5047\u7684\u201C\u72FC\u6765\u4E86\u201D\uFF0C\u5F53\u201C\u72FC\u201D\u771F\u6765\u4E86\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u672A\u91C7\u53D6\u884C\u52A8\uFF0C\u5BFC\u81F4\u5F15\u53D1\u4E8B\u6545\u3002\u5F53\u4F60\u542C\u5230\u5047\u7684\u201C\u72FC\u6765\u4E86\u201D\u65F6\uFF0C\u6B63\u786E\u7684\u505A\u6CD5\u662F\u8BA9\u5B83\u95ED\u5634\uFF0C\u800C\u4E0D\u662F\u6342\u4F4F\u81EA\u5DF1\u7684\u8033\u6735\u3002\u6BD4\u5982\uFF1A\u4FEE\u6539\u4EE3\u7801\uFF0C\u4E0D\u8981\u629B\u5F02\u5E38\uFF0C\u6216\u8005\u5C06 error \u6539\u4E3A warning\u3002\u603B\u4E4B\uFF0C\u522B\u8BA9\u5B83\u4E0A\u62A5\u81F3 Sentry\uFF0C\u522B\u8BA9\u5B83\u5E72\u6270\u6211\u4EEC\u8BC6\u522B\u771F\u6B63\u7684\u95EE\u9898\u3002</p></li></ul><p>Sentry \u8FD8\u63D0\u4F9B\u4E86\u201C\u6027\u80FD\u5206\u6790\u201D\u3001\u201C\u9762\u5305\u5C51\u201D\u3001\u201C\u8BC6\u522B\u53EF\u7591\u63D0\u4EA4\u201D\u7B49\u4F17\u591A\u6709\u7528\u7684\u529F\u80FD\uFF0C\u503C\u5F97\u5927\u5BB6\u53BB\u63A2\u7D22\u548C\u4F7F\u7528\u3002</p>',8);function K(P,E){const p=s("ExternalLinkIcon");return i(),c("div",null,[l,e("p",null,[e("a",b,[d,r(p)]),f,e("a",h,[u,r(p)]),g,e("a",y,[m,r(p)]),S]),k,e("ul",null,[e("li",null,[_,e("p",null,[j,e("a",w,[v,r(p)]),x]),F]),D]),T])}var A=a(o,[["render",K],["__file","sentry.html.vue"]]);export{A as default};
