#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

python ncov.py

node app.js

# git init
git add -A
git commit -m 'update project'

git push

cd -