---
prev: /notes/github-action.md
next: /notes/vuepress-hello.md
---
# GitHub Actions完成Github自动提交

自动保持 GitHub 提交状态常绿。

## 原理

使用 GitHub Actions 的定时任务功能，每隔一段时间自动执行 `git commit`

有关 Github Action 的原理，可查看官方文档 [Github Action 简介](https://docs.github.com/cn/actions/learn-github-actions/introduction-to-github-actions)

## 使用

- 点右上角 **Use this template** 按钮复制 [这个仓库](https://github.com/justjavac/auto-green) ，**:warning: 千万不要 Fork，因为 fork 项目的动态并不会让你变绿 :warning:**
- 修改 [ci.yml 文件的第 7、8 行](https://github.com/justjavac/auto-green/blob/master/.github/workflows/ci.yml#L7-L8) 去掉前面的 `#` 号
- 修改 [ci.yml 文件的第 19、20 行](https://github.com/justjavac/auto-green/blob/master/.github/workflows/ci.yml#L19-L20) 为自己的 GitHub 账号和昵称
- (可选) 你可以通过修改 [ci.yml 文件的第 8 行](https://github.com/justjavac/auto-green/blob/master/.github/workflows/ci.yml#L8)来调整频率

计划任务语法有 5 个字段，中间用空格分隔，每个字段代表一个时间单位。

```plain
┌───────────── 分钟 (0 - 59)
│ ┌───────────── 小时 (0 - 23)
│ │ ┌───────────── 日 (1 - 31)
│ │ │ ┌───────────── 月 (1 - 12 或 JAN-DEC)
│ │ │ │ ┌───────────── 星期 (0 - 6 或 SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

每个时间字段的含义：

|符号   | 描述        | 举例                                        |
| ----- | -----------| -------------------------------------------|
| `*`   | 任意值      | `* * * * *` 每天每小时每分钟                  |
| `,`   | 值分隔符    | `1,3,4,7 * * * *` 每小时的 1 3 4 7 分钟       |
| `-`   | 范围       | `1-6 * * * *` 每小时的 1-6 分钟               |
| `/`   | 每         | `*/15 * * * *` 每隔 15 分钟                  |

**注**：由于 GitHub Actions 的限制，如果设置为 `* * * * *` 实际的执行频率为每 5 分执行一次。

## License

[auto-green](https://github.com/justjavac/auto-green) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.


```yml
name: ci

on:
  push:
    branches:
      - master
  schedule:
    - cron: "0 0 * * *"

jobs:
  autogreen:
    runs-on: ubuntu-latest
    steps:
      - name: Clone repository
        uses: actions/checkout@v2

      - name: Auto green
        run: |
          git config --local user.email "你的邮箱"
          git config --local user.name "你的github名"
          git remote set-url origin https://${{ github.actor }}:${{ secrets.GITHUB_TOKEN }}@github.com/${{ github.repository }}
          git pull --rebase
          git commit --allow-empty -m "hello"
          git push
```