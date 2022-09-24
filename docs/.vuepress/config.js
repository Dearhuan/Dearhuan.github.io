const path = require('path')

const { defaultTheme } = require('@vuepress/theme-default')

// const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

const routes = require('./public/json/others.json')
const chinaRoutes = require('./public/json/chinaRoutes.json')

console.log(routes)
console.log(chinaRoutes)

module.exports = {
  port: 9001,
  base: '/',
  title: 'Hello',
  head: [
    ['link', { rel: 'icon', href: '/images/jaychou.jpg' }],
    ['link', { rel: 'stylesheet', href: '/css/default.css' }]
  ],
  // plugins: [
  //   registerComponentsPlugin({
  //     componentsDir: path.resolve(__dirname, './components')
  //   })
  // ],
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
            text: '文件下载代码片段',
            link: '/tools/ts-file-tool.md'
          },
          {
            text: '常用类型检查',
            link: '/tools/ts-is.md'
          },
          {
            text: 'Vscode代码片段',
            link: '/tools/snippets.md'
          },
          {
            text: '前端监控-Sentry',
            link: '/tools/sentry.md'
          },
          {
            text: '网站记录',
            link: '/tools/some-website.md'
          }
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
            text: '自动更新疫情数据',
            link: '/notes/autoUpdateNcovBlog.md'
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
            text: 'Echarts-堆叠柱状图示例',
            link: '/notes/echarts-stacked-horizontal-bar.md'
          },
          {
            text: 'Eslint-Prettier-husky',
            link: '/notes/eslint-prettier-husky.md'
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
            text: 'html2canvas生成海报',
            link: '/notes/dom2svg.md'
          },
          {
            text: '虚拟列表',
            link: '/notes/virtual-scroll-list.md'
          },
          {
            text: '图片懒加载',
            link: '/notes/lazyload-in-vue.md'
          },
          {
            text: '瀑布流-演示',
            link: '/notes/waterfall.md'
          },
          {
            text: '瀑布流-绝对定位版',
            link: '/notes/waterfall-in-js.md'
          },
          {
            text: '前端主题切换',
            link: '/notes/theme.toggle.md'
          },
          {
            text: 'TypeScript笔记',
            link: '/notes/ts-study-base.md',
            children: [
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
              }
            ]
          },
          {
            text: 'TypeScript类型体操',
            link: '/notes/ts-pattern-matching.md',
            children: [
              {
                text: '模式匹配',
                link: '/notes/ts-pattern-matching.md'
              },
              {
                text: '重新构造做变换',
                link: '/notes/ts-reconstruct.md'
              },
              {
                text: '递归复用做循环',
                link: '/notes/ts-recursive-reuse.md'
              }
            ]
          },
          {
            text: 'postcss-px-to-viewport使用',
            link: '/notes/postcss-px-to-viewport.md'
          },
          {
            text: '磨砂玻璃渐变背景-CSS-doodle',
            link: '/notes/css-doodle.md'
          },
          {
            text: 'VuePress自定义样式',
            link: '/notes/vuepress-fix-style.md'
          }
        ]
      },
      {
        text: '海外疫情数据',
        children: routes
      },
      {
        text: '国内疫情数据',
        children: chinaRoutes
      }
    ]
  })
}
