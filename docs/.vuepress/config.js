const path = require('path')

const { defaultTheme } = require('@vuepress/theme-default')

const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

const toolsRoutes = require('./public/json/routes-tools.json')
const notesRoutes = require('./public/json/routes-notes.json')
const overseasRoutes = require('./public/json/others.json')
const chinaRoutes = require('./public/json/chinaRoutes.json')

console.log(overseasRoutes)
console.log(chinaRoutes)

module.exports = {
  port: 9001,
  base: '/',
  title: 'Hello',
  head: [
    ['link', { rel: 'icon', href: '/images/jaychou.jpg' }],
    ['link', { rel: 'stylesheet', href: '/css/default.css' }]
  ],
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ],
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
        children: toolsRoutes
      },
      {
        text: '记录',
        children: notesRoutes
      },
      {
        text: '海外疫情数据',
        children: overseasRoutes
      },
      {
        text: '国内疫情数据',
        children: chinaRoutes
      }
    ]
  })
}
