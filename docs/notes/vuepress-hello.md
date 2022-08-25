---
lang: zh-CN
title: VuePress+GitHub action进行博客搭建部署+自动集成
description: 页面的描述
---
# 10分钟搭建部署并自动集成一款Vuepress Blog

![VuePress BLog](/images/vuepress.png)

::: tip 提示
详细内容见[VuePress官方文档](https://v2.vuepress.vuejs.org/zh/)
:::

- step1:创建并进入一个新目录
```sh
mkdir vuepress-hello
cd vuepress-hello
```
- step2:初始化项目
```sh
git init
yarn init
```
- step3:安装vuepress
```sh
yarn add -D vuepress@next
```
- step4:在 package.json 中添加scripts
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
- step5:根目录添加.gitignore文件
```gitignore
# VuePress files
docs/.vuepress/.temp/
docs/.vuepress/.cache/
docs/.vuepress/dist/

# Dist files
dist/
lib/

# Test temp files
**/__fixtures__/.temp/

# Test coverage files
coverage/

# Node modules
node_modules/

# MacOS Desktop Services Store
.DS_Store

# Log files
*.log

# Typescript build info
*.tsbuildinfo
```
- step6:创建一篇文档
```sh
mkdir docs
echo '# Hello VuePress' > docs/README.md
```
- step7:启动本地服务器
```sh
yarn docs:dev
```
- step8:配置目录
```js
docs/.vuepress/public/images 存放项目使用图片
docs/.vuepress/config.js     项目配置文件
```
```js
// config.js 配置示例
const { defaultTheme } = require('@vuepress/theme-default')

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
            text: 'postcss-px-to-viewport使用',
            link: '/notes/postcss-px-to-viewport.md'
          }
        ]
      },
      {
        text: '其他',
        children: [
          
        ]
      },
    ]
  }),
}
```
- step9:建立github同名仓库
```js
userName/userName.github.io
```
- step10:推送代码
```sh
git add.
git commit -m 'xxxx'
git branch -M main
git add remote orgin git@github.com:[userName]/vuepress-hello.git
git push -u origin main
```
- step11:创建.yml文件
```yml
# action 的名称
name: Deploy GitHub Pages

# 触发条件：在 push 到 main 分支后
on:
  push:
    branches:
      - main
  # 手动触发部署
  workflow_dispatch:

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    - steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      # 生成静态文件
      - name: Build
        run: npm install && npm run docs:build

      # 部署到 GitHub Pages
      - name: Deploy
        # 使用别人写好的一个 action
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          # 这里的 ACCESS_TOKEN 名字需要和下文中的相对应
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          # 打包后的文件部署到哪个分支上
          BRANCH: gh-pages
          # 打包后的文件在哪里
          FOLDER: docs/.vuepress/dist
```
- step12:设置access tokens
```js
1.点击github头像>Settings>Developer settings>Personal access tokens>Generate new tokens.
权限列表勾选repo&生成一个ACCESS_TOKEN并复制下来
2.项目仓库>Settings>Secrets>Actions - 添加ACCESS_TOKEN
```
- step13:选择github pages分支
![github-page](/images/github-page.png)
- step14:触发自动部署
```js
更新并提交Markdown/手动run workflow
```

### 部署完成后生成的gh-pages分支及目录
![vuepress-ghpage](/images/vuepress-ghpage.png)