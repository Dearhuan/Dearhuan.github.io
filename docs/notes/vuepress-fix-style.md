---
prev: /notes/components-use.md
next: /notes/vuepress-markdown.md
---
# VuePress2.x 修改默认样式

- 新建styles文件夹，docs/.vuepress/styles/index.scss

- 自定义样式规则
```css
/* index.scss */
:root {
  --content-width: 880px;
  scroll-behavior: smooth;
}
.home .hero img {
  max-height: 360px;
}
.home .hero img, .navbar .logo {
  border-radius: 50%;
}
```