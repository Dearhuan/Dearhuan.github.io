---
lang: zh-CN
title: Sentry
description: 页面的描述
---
# 使用 Sentry 对应用进行监控，少 bug 少加班

# 为什么我们需要应用监控

大家是否有过这样的体验：

> 产品新功能上线几周后，客户提工单反馈问题。研发同学经排查确认是 bug，且会产生脏数据。最终，修复 bug + 上线花了大半天，而编写修复脚本 + 修复数据耗费了一周。

![发现bug的时机.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d841fefe08d422cad6e4c41affcd1d7~tplv-k3u1fbpfcp-watermark.awebp?)

**如果发现 bug 的时机越早，那么修复成本就越低**。

通过对应用中的错误或异常进行监控和自动反馈，有助于我们尽早发现隐蔽的问题，提升产品质量和研发效率。

### 日志系统不等同应用监控系统

可能有同学会说：程序的错误和异常在我们的日志系统里面都有呀，为什么还需要专门的应用监控系统？

确实，日志中事无巨细地记录了大量的运行过程和异常信息。不过，这些信息可能也存在重复、无效、缺乏联系的弊端。而且，日志主要是在研发同学排查问题时使用，很少被用于主动监控和告警，日常存在着大量的错误信息一直未被关注和处理。

# Sentry：一款受欢迎的应用监控产品

[Sentry](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fgetsentry%2Fsentry) 是一款开源的应用监控产品，使用 Python、JavaScript、HTML、CSS 打造。在 [GitHub](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2F) 上有 29k Stars，是应用监控领域 Stars 数排行最高的开源项目，其官网宣称有 1 百万名开发者和 7 万个组织在使用 Sentry。除了提供开源产品外，其幕后的公司也提供付费的 SaaS 服务：[sentry.io](https://link.juejin.cn/?target=https%3A%2F%2Fsentry.io%2F)。2021 年该公司宣布获得了 6000 万美元的 D 轮融资，该轮融资使 Sentry 的总资金达到 1.27 亿美元，融资后估值为 10 亿美元。确实是一款值得关注的产品。

### Sentry 有以下重要特点：

- 产品体验好，功能完善

  ![sentry-demo.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f53c9f29b88546b98f5ee2976a7ae182~tplv-k3u1fbpfcp-watermark.awebp?)

- 接入工作量少

  官方和开源社区提供了各种主流开发语言和框架的 SDK，便于开发者接入，大多几十行代码内即可完成。

  ![SDKs.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4dc57f94fcc242b4bd65b78986eb2d96~tplv-k3u1fbpfcp-watermark.awebp?)

- Sentry 专注于 Error、Exception、Crash

  可以查看到具体的错误信息和调用栈，能快速定位问题代码。

  ![js-error.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab388f7612984921bf35c3c84e96b8bb~tplv-k3u1fbpfcp-watermark.awebp?)

- 提供丰富的上下文信息

  SDK 会自动上报基础信息，也支持上报自定义的信息，便于排查问题。

  ![context.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5cf958931e3e458798101650d55480a5~tplv-k3u1fbpfcp-watermark.awebp?)

- 自动合并重复问题

  重复的报错被自动合并且累计次数，避免开发者在大量重复冗余的信息寻找 bug 的蛛丝马迹。

  ![issues.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7733b0c909944b14a8cb4a5e4298c9fe~tplv-k3u1fbpfcp-watermark.awebp?)

- 主动邮件告警

  不用再等“客户告警”后才开始排查问题。

# 自部署 Sentry 的缺点

- 部署依赖繁多

  利用官方的提供的 [Github 仓库](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fgetsentry%2Fonpremise)，基于 Docker 和 Docker Compose 确实可以一键部署、开箱即用。不过，当看到 30 个容器列在面前时，还是会觉得踌躇。

  ![containers.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da544f826dc14bbcbe85ee3456c0d68f~tplv-k3u1fbpfcp-watermark.awebp?)

- 需自行保障高可用

  如上，Sentry 使用了众多组件，比如：ZooKeeper、Nginx、Redis、Memcached、Kafka、PostgreSql、ClickHouse 等，要自行运维这些组件并保障高可用，并不是容易的事情。

# 避免 Sentry 引发雪崩

引入新的技术或者工具，或多或少都会增加系统的复杂度和运行风险。

我们之前出过一次严重问题：某个日均三千万接口请求量的服务发生故障，大量的错误信息涌向 Sentry 服务器，导致 Sentry 响应严重延迟，其 Redis 队列内存容量接近占满，而 Nginx 也全都响应 504 Gateway Timeout。恰好该故障的服务由于请求 Sentry 服务端未设置超时时间，导致 HTTP 请求同步阻塞，反倒拖垮了服务本身。

为了规避此类问题，有以下做法：

- 保障 Sentry 服务端高可用

  这点最重要，但实际我们并未做好。目前我们自部署的 Sentry 是一个单点，并没有集群或冗余。如果要实现高可用，那么付出的金钱成本会较高，甚至可能超过了使用 Sentry SaaS 付费服务的成本。由于 Sentry 官方并未提供中国区的服务，HTTP 请求到国外的速度并不理想，使用官方 SaaS 服务也不见得是太好的选择。

- 设置 `timeout`

  使用 Sentry SDK 时，一定要设置向 Sentry 服务器发送请求的超时时间，建议 3 秒以下。

- 设置 `sample_rate`

  使用 Sentry SDK 时，可以设置**采样率**，`0.00` 表示拒绝发送任何事件，`1.00` 表示发送全部事件。建议前期设置较小的值，然后视应用的 PV 大小进行调整。使用采样率可能会带来这样的负面影响：零星的错误可能未上报，导致一直未被发现。

- 及时熔断

  假如当 Sentry 服务器不堪重负时，应该避免应用继续请求 Sentry 了。比如：可以手动将采样率设置为 `0.00`。

- 使用异步方式（async）发送请求

  如果 SDK 支持异步发送请求，那就使用，避免同步阻塞。

- 隔离生产环境的 Sentry

  运维同事隔离部署了两套 Sentry，一套是体验环境，供开发环境/测试环境/预发布环境的应用接入使用；另外一套是正式环境，供生产环境/私有化环境的应用接入使用。如果要试验 Sentry 的功能或调整 Sentry 的配置，那我们会先在体验环境的 Sentry 中进行，确认没有问题后，才会调整生产环境的 Sentry，借此保障生产环境 Sentry 的稳定性。

- 通过队列来缓冲请求至 Sentry 的并发压力

  假设应用的请求量和并发量都巨大，当出现严重故障时每个请求处理都发生错误，那么即使在 SDK 中设置了较低的采样率（比如：`0.01`），可能请求到 Sentry 的并发量依旧超过其有限承载。为了避免这个问题，我们在流量最大的服务中做了如下尝试：我们增加了一个队列，将服务的错误事件先入列，启动了少量的消费进程去消费该队列缓缓上报错误至 Sentry 服务端。并且应用程序中做了处理，即使该队列容量占满也不会影响正常业务（只是丢弃错误事件）。实践证明，这种中转缓冲的方式非常有效，不过也增加了接入 Sentry 工作量，大家可自行取舍。

# Sentry 使用小技巧

- 上报 Environment

  ![filter-env.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0db86bbbb077449b9bf15b1f6c086e84~tplv-k3u1fbpfcp-watermark.awebp?)

  在不同环境通过 SDK 配置不同的标识，比如：Development、Test、Release、Production、Privatisation，这样方便的识别和过滤问题。

- 自定义 Tags

  SDK 会自动帮忙上报一些基础的 Tag，同时我们也能添加一些自定义的 Tag（比如：租户、项目等业务信息），利于排查问题。

  ![tags.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9731c6ff0ae4498487a92085648dcc3b~tplv-k3u1fbpfcp-watermark.awebp?)

  Tag 可用于过滤：

  ![filter-tag.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49a17352c536475ea40ca4b6da87d428~tplv-k3u1fbpfcp-watermark.awebp?)

  Tag 可用于统计：

  ![tag-stats.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5e07aba753b4262b5edf4d24f6673cd~tplv-k3u1fbpfcp-watermark.awebp?)

- 自动标记已解决

  有些 bug 已修复并上线，但是研发同学一般都不记得在 Sentry 手动标记已解决；还存在第三方服务异常等不需要处理的问题，也不太会去手动标记。使用“Auto Resolve”功能，当多久内未再出现该问题后，系统会自动帮忙标记为已解决，很方便。

  ![auto-resolve.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/adb8d46979be42b4be1b883e4e9bcaf1~tplv-k3u1fbpfcp-watermark.awebp?)

- 合并问题

  绝大多数重复问题，Sentry 都能自动识别并合并。不过偶尔还是存在例外，比如：错误信息中存在一些随机的内容，那么 Sentry 可能会以为是不同类型的错误，进而未合并，导致重复的问题一直邮件告警，很是烦人。通过设置“Fingerprint Rules”，强制指定同类错误的“指纹”，这样就能让这些错误进行合并了。

  ![fingerprint-rules.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32f262376491461595e1dfdf5a399950~tplv-k3u1fbpfcp-watermark.awebp?)

- 识别并处理真正的问题，避免“狼来了”

  别动不动就抛异常或者记 error。举个例子：“您上传的文件格式不正确，请按要求上传正确格式的文件。”，其实这是一个正常的业务提示，如果将它作为错误上报到 Sentry，那并没有什么意义，最终也不会进行处理。如果这样的“噪音”越积越多，那么会降低研发同学对真正问题的敏感度。邮件天天收到一堆假的“狼来了”，当“狼”真来了时，我们可能未采取行动，导致引发事故。当你听到假的“狼来了”时，正确的做法是让它闭嘴，而不是捂住自己的耳朵。比如：修改代码，不要抛异常，或者将 error 改为 warning。总之，别让它上报至 Sentry，别让它干扰我们识别真正的问题。

Sentry 还提供了“性能分析”、“面包屑”、“识别可疑提交”等众多有用的功能，值得大家去探索和使用。

# 我们部门半年来使用 Sentry 的情况

- 已接入 9 个应用或服务
- 累计识别出数十个隐蔽问题（去重后）
- 已有 3 个服务达成零问题
- 2 次识别到了第三方服务商的异常，并及时反馈给对方处理
- 2 次及时发现了发布故障并紧急处理

# 总结

对应用进行监控可以主动发现隐蔽的问题，提升产品质量。Sentry 是一款受欢迎的应用监控开源产品，拥有丰富且有用的特性，我们选择使用它的同时，也采取了很多措施，避免因为引入它导致产生负面影响。我们在使用过程中积累了一点心得，最后也获得了不错的使用效果，分享给大家，祝大家 bug 少少，效率高高。