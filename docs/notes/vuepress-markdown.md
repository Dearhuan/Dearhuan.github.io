---
prev: /notes/vuepress-fix-style.md
next: /notes/echarts-stacked-horizontal-bar.md
---

# VuePress中的markdown语法与内置组件

## 自定义容器

- 使用：
  ```md
  ::: <type> [title]
  [content]
  :::
  ```
  type必填，title&content可选。

  支持的type:
    - tip
    - warning
    - danger
    - details

- 示例1（默认标题）：

**输入**

```md
::: tip
this is a tip
:::

::: warning
this is a warning
:::

::: danger
this is a danger
:::

:::details
this is a details
:::
```

**输出**

::: tip
this is a tip
:::

::: warning
this is a warning
:::

::: danger
this is a danger
:::

:::details
this is a details
:::

- 示例2（自定义标题）

::: tip 提示
this is a tip
:::

::: details 点击查看内容
VuePress
:::

- 示例3（Code Group别名）：

**输入**

````md
:::: code-group
::: code-group-item TypeScript
```ts
const t:String = 't'
```
:::
::: code-group-item JavaScript
```js
const t = 't'
```
:::
::::
````

**输出**

:::: code-group
::: code-group-item TypeScript
```ts
const t:String = 't'
```
:::
::: code-group-item JavaScript
```js
const t = 't'
```
:::
::::

## 内置组件

### Badge <Badge type="tip" text="badge" vertical="top"/>

- Props:
  - type
    - 类型：'tip' | 'warning' | 'danger'
    - 默认：'tip'
  - text
    - 类型：'string'
    - 默认：''
  - vertical
    - 类型：'top' | 'middle' | 'bottom' | undefined
    - 默认：undefined

**输入**

```md
- VuePress - <Badge type="tip" text="v8" vertical="top"/>
- VuePress - <Badge type="warning" text="v8" vertical="middle"/>
- VuePress - <Badge type="danger" text="v8" vertical="bottom"/>
```

**输出**

- VuePress - <Badge type="tip" text="v8" vertical="top"/>
- VuePress - <Badge type="warning" text="v8" vertical="middle"/>
- VuePress - <Badge type="danger" text="v8" vertical="bottom"/>

### CodeGroup

- 详情： 

CodeGroupItem 组件的Wrapper。

### CodeGroupItem

- Props:
  - title
    - 类型：string
    - 必填：true
  - active
    - 类型：boolean
    - 默认：false

- 详情：

该组件必须放在CodeGroup组件内部。

可以通过 active Prop设置初始激活的元素。

**输入**

````md
<CodeGroup>
  <CodeGroupItem title="TypeScript">
// 此处需要空行
  ```ts
  const t:string = 't'
  ```
  </CodeGroupItem>

  <CodeGroupItem title="JavaScript" active>
// 此处需要空行
  ```js
  const t = 't'
  ```
  </CodeGroupItem>

</CodeGroup>
````

**输出**
<CodeGroup>
  <CodeGroupItem title="TypeScript">

  ```ts
  const t:string = 't'
  ```
  </CodeGroupItem>

  <CodeGroupItem title="JavaScript" active>

  ```js
  const t = 't'
  ```
  </CodeGroupItem>

</CodeGroup>

::: warning 注意
你必须在 \<CodeGroupItem\> 的开始标签和代码块之间添加一个空行，否则代码块无法被 Markdown 正确解析。

所有内容首先都必须是合法的 Markdown ，然后才是一个 Vue SFC 。
:::