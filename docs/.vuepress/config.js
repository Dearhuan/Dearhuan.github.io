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