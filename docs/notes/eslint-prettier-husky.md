---
prev: /notes/i18n-vue3.md
next: /notes/git-commitizen.md
---
# eslint+prettier+stylelint+husky配置

## 配置Eslint

- 安装
```sh
yarn add eslint -D
```

- eslint初始化
```sh
npx eslint --init
```

- 初始化选项
```
(1) How would you like to use ESLint?
选择：To check syntax and find problems

(2) What type of modules does your project use?
选择：commonjs

(3) Which framework does your project use?
选择：Vue.js

(4) Does your project use TypeScript?
选择：Yes

(5) Where does your code run?
选择：Node

(6) What format do you want your config file to be in?
选择：JavaScript

(7) Would you like to install them now?
选择：Yes

(8) Which package manager do you want to use?
选择：yarn
```

- .eslintrc.js
```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {}
}
```

- package.json文件中的script中添加lint命令
```json
{
    "scripts": {
        // eslint . 为指定lint当前项目中的文件
        // --ext 为指定lint哪些后缀的文件
        // --fix 开启自动修复
        "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
    }
}
```

## 配置Prettier

- 安装
```sh
yarn add prettier -D
```

- 新建.prettierrc.js
```js
module.exports = {
  // 一行的字符数，如果超过会进行换行，默认为80
  printWidth: 80,
  // 一个tab代表几个空格数，默认为80
  tabWidth: 2,
  // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  useTabs: false,
  // 字符串是否使用单引号，默认为false，使用双引号
  singleQuote: true,
  // 行位是否使用分号，默认为true
  semi: false,
  // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  trailingComma: 'none',
  // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true
}
```

- package.json中的script中添加以下命令
```json
{
    "scripts": {
        "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    }
}
```

## 解决eslint与prettier的冲突

```sh
yarn add eslint-config-prettier eslint-plugin-prettier -D
```

- .eslintrc.js中extends的最后添加一个配置
```js{5}
extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
```

## 配置husky

husky是一个用来管理git hook的工具，git hook即在我们使用git提交代码的过程中会触发的钩子。

```sh
yarn add husky -D
```

- package.json中的script中添加以下命令
```json
{
    "scripts": {
        "prepare": "husky install"
    },
}
```

该命令会在yarn install之后运行，这样其他克隆该项目的同学就在装包的时候就会自动执行该命令来安装husky。这里我们就不重新执行yarn install了，直接执行yarn prepare，这个时候你会发现多了一个.husky目录。
然后使用husky命令添加pre-commit钩子，运行
yarn husky add .husky/pre-commit "yarn lint && yarn format"
复制代码
执行完上面的命令后，会在.husky目录下生成一个pre-commit文件
```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint && yarn format
```

现在当我们执行git commit的时候就会执行yarn lint与yarn format，当这两条命令出现报错，就不会提交成功。以此来保证提交代码的质量和格式。

