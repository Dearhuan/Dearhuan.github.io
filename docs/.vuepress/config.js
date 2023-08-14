const path = require('path')

const { defaultTheme } = require('@vuepress/theme-default')

const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

const toolsRoutes = require('./public/json/routes-tools.json')
const notesRoutes = require('./public/json/routes-notes.json')
const overseasRoutes = require('./public/json/others.json')
const chinaRoutes = require('./public/json/chinaRoutes.json')
const oilsRoutes = require('./public/json/oils.json')

console.log(overseasRoutes)
console.log(chinaRoutes)

module.exports = {
  port: 9001,
  base: '/',
  title: 'Hello',
  head: [
    ['link', { rel: 'icon', href: '/images/jaychou.jpg' }],
  ],
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ],
  theme: defaultTheme({
    logo: '/images/logo.jpg',
    repo: 'Dearhuan/Dearhuan.github.io',
    docsDir: 'docs',
    navbar: [
      {
        text: '首页',
        link: '/'
      }
    ],
    sidebar: [
      {
        text: '工具',
        collapsible: true,
        children: toolsRoutes
      },
      {
        text: '记录',
        collapsible: true,
        children: notesRoutes
      },
      {
        text: '海外疫情数据',
        children: overseasRoutes
      },
      {
        text: '国内疫情数据',
        children: chinaRoutes
      },
      {
        text: '油价趋势',
        children: oilsRoutes
      }
    ],
    slidebarDepth: 2,
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    editLinkText: '在 GitHub 上编辑此页',
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  })
}
