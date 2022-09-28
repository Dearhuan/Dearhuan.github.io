---
prev: /notes/waterfall-in-js.md
next: /notes/postcss-px-to-viewport.md
---

# 前端主题切换

### CSS变量+类名切换

::: tip
提前将样式文件载入，切换时将指定的根元素类名更换。默认在根作用域下定义好CSS变量，只需要在不同的主题下更改CSS变量对应的取值即可。
使用了color-scheme: dark;将系统的滚动条设置为了黑色模式，使样式更加统一。
:::

```css
html.dark {
  color-scheme: dark;
}
```

```css
/* 定义根作用域下的变量 */
:root {
  --theme-color: #333;
  --theme-background: #eee;
}
/* 更改dark类名下变量的取值 */
.dark{
  --theme-color: #eee;
  --theme-background: #333;
}
/* 更改pink类名下变量的取值 */
.pink{
  --theme-color: #fff;
  --theme-background: pink;
}

.box {
  transition: all .2s;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  /* 使用变量 */
  color: var(--theme-color);
  background: var(--theme-background);
}
```

### 效果示例
#

<div id="box" :class="theme">
  <div class="box">{{ theme }}</div>
  <button @click="changeTheme('default')">default</button>
  <button @click="changeTheme('dark')">dark</button>
  <button @click="changeTheme('pink')">pink</button>
</div>

<script setup lang="ts">
  import { ref } from 'vue'

  let theme = ref<string>('default')

  const changeTheme = (val:string) => {
    theme.value = val
    document.getElementById('box').className = val
  }
</script>

<style scoped>
.default {
  --theme-color: #333;
  --theme-background: #eee;
}
/* 更改dark类名下变量的取值 */
.dark{
  --theme-color: #eee;
  --theme-background: #333;
}
/* 更改pink类名下变量的取值 */
.pink{
  --theme-color: #fff;
  --theme-background: pink;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  transition: all .2s;
  width: 100%;
  height: 200px;
  border: 1px solid #000;
  border-radius: 20px;
  /* 使用变量 */
  color: var(--theme-color);
  background: var(--theme-background);
}

button {
  width: 80px;
  height: 40px;
  margin: 10px;
}
</style>

```vue
<div id="box" :class="theme">
  <div class="box">{{ theme }}</div>
  <button @click="changeTheme('default')">default</button>
  <button @click="changeTheme('dark')">dark</button>
  <button @click="changeTheme('pink')">pink</button>
</div>

<script setup>
  import { ref } from 'vue'

  let theme = ref('default')

  const changeTheme = (val) => {
    theme.value = val
    document.getElementById('box').className = val
  }
</script>

<style scoped>
.default {
  --theme-color: #333;
  --theme-background: #eee;
}
/* 更改dark类名下变量的取值 */
.dark{
  --theme-color: #eee;
  --theme-background: #333;
}
/* 更改pink类名下变量的取值 */
.pink{
  --theme-color: #fff;
  --theme-background: pink;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  transition: all .2s;
  width: 100%;
  height: 200px;
  border: 1px solid #000;
  border-radius: 20px;
  /* 使用变量 */
  color: var(--theme-color);
  background: var(--theme-background);
}

button {
  width: 80px;
  height: 40px;
  margin: 10px;
}
</style>
```

::: tip 优点
不用重新加载样式文件，在样式切换时不会有卡顿
:::

::: warning 缺点
首屏加载时会牺牲一些时间加载样式资源
如果主题样式表内定义不当，也会有优先级问题
各个主题样式是写死的，后续针对某一主题样式表修改或者新增主题也很麻烦
:::
