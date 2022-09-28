---
prev: /notes/autoUpdateNcovBlog.md
next: /notes/github-auto-commit.md
---
# GitHub Action初探

::: tip 
使用GItHub Action可以方便的利用github远程服务器进行任务的自动化执行

比如：自动签到打卡、自动消息推送、自动打包部署...
:::

- 设置定时自动执行文件
> 新建一个github workflow&创建xxx.yml文件
```yml
# action name
name: AutoRunTask
on:
  workflow_dispatch:
  schedule:
    #时间格式 minute hour day month week 设置的时间是UTC 不是北京时间
    - cron: "10 9 * * *"

jobs:
  start:
    # 运行环境为最新版的Ubuntu
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2  

      #安装node.js
      - name: Setup Node.js
        uses: actions/setup-node@v2  
        with:
          node-version: '14'

      # 安装依赖并且执行脚本
      - name: npm install
        run: npm install
      
      - name: Start task
        run: node index.js
```

- 构建&部署
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