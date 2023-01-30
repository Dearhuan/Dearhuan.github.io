---
prev: /notes/git-commitizen.md
next: /notes/project-standard.md
---
# Git Stash基本使用

## 介绍
git stash这个命令可以将当前的工作状态保存到git栈，在需要的时候再恢复

## 使用场景
当在一个分支的开发工作未完成，却又要切换到另外一个分支进行开发的时候，可以先将自己写好的代码，储存到 git 栈，进行另外一个分支的代码开发。这时候 git stash 命令就派上用场了！

## 常用方法
### 1.git stash
保存当前的工作区与暂存区的状态，把当前的修改的保存到git栈，等以后需要的时候再恢复，git stash 这个命令可以多次使用，每次使用都会新加一个stash@{num}，num是编号
### 2.git stash save 'xx'
作⽤等同于git stash，区别是可以加⼀些注释，执⾏存储时，添加注释，⽅便查找
### 3.git stash list
查看当前stash的所有内容
```bash
$ git stash list
stash@{0}: On gh-pages: 'say hello...'
stash@{1}: On gh-pages: 'print string'
```
### 4.git stash pop
默认恢复git栈中最新的一个stash@{num}，建议在git栈中只有一条的时候使用，以免混乱
::: warning 注意
该命令将堆栈中最新保存的内容删除
:::
```sh
git stash pop stash@{num}
```
### 5.git stash apply
将堆栈中的内容恢复到当前分支下。这个命令不同于 git stash pop。
::: warning 注意
该命令不会将内容从对堆栈中删除，也就是该命令能够将堆栈的内容多次运用到工作目录，适合用与多个分支的场景
:::
```sh
git stash apply stash@{num}
```
### 6.git stash drop
从堆栈中移除指定的stash。如果不指定stash_id，则默认删除最新的存储进度。
```sh
git stash drop stash@{num}
```
### 7.git stash clear
:::tip 提示
移除全部的stash记录，慎用！
:::
### 8.git stash show
查看堆栈中最新保存的stash和当前目录的差异。

查看指定的stash和当前目录差异
```sh
git stash show stash@{num}
```
查看指定的stash的差异详细内容
```sh
git stash show stash@{num} -p
```
### 9.git stash branch
从最新的stash创建分支。

应用场景：当储藏了部分工作，暂时不去理会，继续在当前分支进行开发，后续想将stash中的内容恢复到当前工作目录时，如果是针对同一个文件的修改（即便不是同行数据），那么可能会发生冲突，恢复失败，这里通过创建新的分支来解决。可以用于解决stash中的内容和当前目录的内容发生冲突的情景。

发生冲突时，需手动解决冲突。
