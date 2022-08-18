const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  port: 9001,
  base: '/hello/',
  title: 'Hello',
  head: [['link', { rel: 'icon', href: '/images/logo.jpg' }]],
  theme: defaultTheme({
    logo: '/images/logo.jpg',
    // repo: 'https://github.com/Dearhuan',
    // URL
    // logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: '首页',
        link: '/'
      }
    ],
    sidebar: [
      {
        text: '工具',
        // link: '/tools/',
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
        // link: '/notes/',
        children: [
          {
            text: 'postcss-px-to-viewport使用',
            link: '/notes/postcss-px-to-viewport.md'
          }
        ]
      },
      {
        text: '其他',
        // link: '/notes/',
        children: [
          
        ]
      },
    ]
  }),
}