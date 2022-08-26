const { defaultTheme } = require('@vuepress/theme-default')

const routes = require('./public/json/others.json')

console.log(routes)

module.exports = {
  port: 9001,
  base: '/',
  title: 'Hello',
  head: [['link', { rel: 'icon', href: '/images/logo.jpg' }]],
  theme: defaultTheme({
    logo: '/images/logo.jpg',
    navbar: [
      {
        text: '首页',
        link: '/'
      }
    ],
    sidebar: [
      {
        text: '工具',
        children: [
          {
            text: 'Js工具代码示例',
            link: '/tools/jsTool.md'
          },
          {
            text: 'Vscode代码片段',
            link: '/tools/snippets.md'
          },
          {
            text: '前端监控-Sentry',
            link: '/tools/sentry.md'
          },
        ]
      },
      {
        text: '记录',
        children: [
          {
            text: '企业微信+邮箱通知基金机器人',
            link: '/notes/wxFundBot.md'
          },
          {
            text: 'Okx数据推送机器人',
            link: '/notes/OkxHelper.md'
          },
          {
            text: '天气数据推送机器人',
            link: '/notes/weatherBot.md'
          },
          {
            text: 'Github自动commit',
            link: '/notes/github-auto-commit.md'
          },
          {
            text: '10分钟搭建一款VuePress博客',
            link: '/notes/vuepress-hello.md'
          },
          {
            text: '在Markdown中进行echarts可视化',
            link: '/notes/echarts-in-markdown.md'
          },
          {
            text: 'GitHub Action初探',
            link: '/notes/github-action.md'
          },
          {
            text: '骨架屏',
            link: '/notes/skeleton.md'
          },
          {
            text: '前端主题切换',
            link: '/notes/theme.toggle.md'
          },
          {
            text: 'TypeScript使用示例',
            link: '/notes/ts-demo.md'
          },
          {
            text: 'TypeScript基础类型',
            link: '/notes/ts-study-base.md'
          },
          {
            text: 'TypeScript断言',
            link: '/notes/ts-study-declare.md'
          },
          {
            text: 'TypeScript类型守卫',
            link: '/notes/ts-study-typeGuard.md'
          },
          {
            text: 'TypeScript联合类型和类型别名',
            link: '/notes/ts-study-unionType.md'
          },
          {
            text: 'TypeScript交叉类型',
            link: '/notes/ts-study-crossType.md'
          },
          {
            text: 'TypeScript函数',
            link: '/notes/ts-study-function.md'
          },
          {
            text: 'TypeScript数组和对象',
            link: '/notes/ts-study-array&object.md'
          },
          {
            text: 'TypeScript接口',
            link: '/notes/ts-study-interface.md'
          },
          {
            text: 'TypeScript类',
            link: '/notes/ts-study-class.md'
          },
          {
            text: 'TypeScript泛型',
            link: '/notes/ts-study-generic.md'
          },
          {
            text: 'TypeScript装饰器',
            link: '/notes/ts-study-decorators.md'
          },
          {
            text: 'TypeScript4.0新特性',
            link: '/notes/ts-study-4.md'
          },
          {
            text: 'TypeScript编译上下文',
            link: '/notes/ts-study-options.md'
          },
          {
            text: 'TypeScript开发辅助工具',
            link: '/notes/ts-study-tools.md'
          },
          {
            text: 'TypeScript工具泛型',
            link: '/notes/ts-generic.md'
          },
          {
            text: 'Ts封装Axios',
            link: '/notes/ts-axios.md'
          },
          {
            text: 'postcss-px-to-viewport使用',
            link: '/notes/postcss-px-to-viewport.md'
          },
          {
            text: '磨砂玻璃渐变背景-CSS-doodle',
            link: '/notes/css-doodle.md'
          },
        ]
      },
      {
        text: '其他',
        children: routes
      },
    ]
  }),
}