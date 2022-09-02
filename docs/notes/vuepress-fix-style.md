# VuePress2.x 修改默认样式

- 新建css文件夹，docs/.vuepress/public/css/default.css

- 配置 docs/.vuepress/config.js

```js{6}
 head: [
    [
      'link', { rel: 'icon', href: '/images/logo.jpg' }
    ],
    [
      'link', { rel: 'stylesheet', href: '/css/default.css' }
    ]
  ],
```
- 自定义样式规则
```css
/* default.css */
:root {
  --content-width: 880px;
}
```