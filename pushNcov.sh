#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# yarn docs:build

# 进入生成的文件夹
# cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

python ncov.py

node app.js

# git init
git add -A
git commit -m 'update ncov data'

git push
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:Dearhuan/Dearhuan.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -