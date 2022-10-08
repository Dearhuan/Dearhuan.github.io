---
prev: /notes/timeLineCard.md
next: /notes/pagination.md
---
# Element风格Button 

## 基础用法

使用 type、plain、round 来定义按钮的样式。

<div class="mb-10 mt-10">
  <my-button>Default</my-button>
  <my-button type="primary">Primary</my-button>
  <my-button type="success">Success</my-button>
  <my-button type="info">Info</my-button>
  <my-button type="warning">Warning</my-button>
  <my-button type="danger">Danger</my-button>
</div>
<div class="mb-10">
  <my-button plain>Plain</my-button>
  <my-button type="primary" plain>Primary</my-button>
  <my-button type="success" plain>Success</my-button>
  <my-button type="info" plain>Info</my-button>
  <my-button type="warning" plain>Warning</my-button>
  <my-button type="danger" plain>Danger</my-button>
</div>
<div class="mb-10">
  <my-button round>Round</my-button>
  <my-button type="primary" round>Primary</my-button>
  <my-button type="success" round>Success</my-button>
  <my-button type="info" round>Info</my-button>
  <my-button type="warning" round>Warning</my-button>
  <my-button type="danger" round>Danger</my-button>
</div>

:::details 代码
```vue
<div class="mb-10 mt-10">
  <my-button>Default</my-button>
  <my-button type="primary">Primary</my-button>
  <my-button type="success">Success</my-button>
  <my-button type="info">Info</my-button>
  <my-button type="warning">Warning</my-button>
  <my-button type="danger">Danger</my-button>
</div>
<div class="mb-10">
  <my-button plain>Plain</my-button>
  <my-button type="primary" plain>Primary</my-button>
  <my-button type="success" plain>Success</my-button>
  <my-button type="info" plain>Info</my-button>
  <my-button type="warning" plain>Warning</my-button>
  <my-button type="danger" plain>Danger</my-button>
</div>
<div class="mb-10">
  <my-button round>Round</my-button>
  <my-button type="primary" round>Primary</my-button>
  <my-button type="success" round>Success</my-button>
  <my-button type="info" round>Info</my-button>
  <my-button type="warning" round>Warning</my-button>
  <my-button type="danger" round>Danger</my-button>
</div>
```
:::

## 禁用状态

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

<div class="mb-10 mt-10">
  <my-button disabled>Default</my-button>
  <my-button type="primary" disabled>Primary</my-button>
  <my-button type="success" disabled>Success</my-button>
  <my-button type="info" disabled>Info</my-button>
  <my-button type="warning" disabled>Warning</my-button>
  <my-button type="danger" disabled>Danger</my-button>
</div>
<div class="mb-10">
  <my-button plain disabled>Plain</my-button>
  <my-button type="primary" plain disabled>Primary</my-button>
  <my-button type="success" plain disabled>Success</my-button>
  <my-button type="info" plain disabled>Info</my-button>
  <my-button type="warning" plain disabled>Warning</my-button>
  <my-button type="danger" plain disabled>Danger</my-button>
</div>

:::details 代码
```vue
<div class="mb-10 mt-10">
  <my-button disabled>Default</my-button>
  <my-button type="primary" disabled>Primary</my-button>
  <my-button type="success" disabled>Success</my-button>
  <my-button type="info" disabled>Info</my-button>
  <my-button type="warning" disabled>Warning</my-button>
  <my-button type="danger" disabled>Danger</my-button>
</div>
<div class="mb-10">
  <my-button plain disabled>Plain</my-button>
  <my-button type="primary" plain disabled>Primary</my-button>
  <my-button type="success" plain disabled>Success</my-button>
  <my-button type="info" plain disabled>Info</my-button>
  <my-button type="warning" plain disabled>Warning</my-button>
  <my-button type="danger" plain disabled>Danger</my-button>
</div>
```
:::

## 按钮尺寸

使用 size 属性额外配置尺寸，可使用 large和small两种值。

<div class="mb-10 mt-10">
  <my-button>Default</my-button>
  <my-button size="large" type="primary">Primary</my-button>
  <my-button size="small" type="success">Success</my-button>
  <my-button size="large" type="info">Info</my-button>
  <my-button size="small" type="warning">Warning</my-button>
  <my-button size="large" type="danger">Danger</my-button>
</div>

:::details 代码
```vue
<div class="mb-10 mt-10">
  <my-button>Default</my-button>
  <my-button size="large" type="primary">Primary</my-button>
  <my-button size="small" type="success">Success</my-button>
  <my-button size="large" type="info">Info</my-button>
  <my-button size="small" type="warning">Warning</my-button>
  <my-button size="large" type="danger">Danger</my-button>
</div>
```
:::

## 自定义颜色

<div class="mb-10 mt-10">
  <my-button color="#626aef">Default</my-button>
  <my-button color="#626aef" plain>Plain</my-button>
  <my-button color="#626aef" disabled>Disabled</my-button>
  <my-button color="#626aef" disabled plain
    >Disabled Plain</my-button
    >
</div>

:::details 代码
```vue
<div class="mb-10 mt-10">
  <my-button color="#626aef">Default</my-button>
  <my-button color="#626aef" plain>Plain</my-button>
  <my-button color="#626aef" disabled>Disabled</my-button>
  <my-button color="#626aef" disabled plain
    >Disabled Plain</my-button
    >
</div>
```
:::

## Button属性

```vue
<script setup lang='ts'>
...
type ButtonSize = 'large' | 'default' | 'small' | ''

type BUttonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''

const props = defineProps({
  // 尺寸
  size: {
    type: String as PropType<ButtonSize>,
    default: ''
  },
  // 类型
  type: {
    type: String as PropType<BUttonType>,
    default: ''
  },
  // 是否为朴素按钮
  plain: {
    type: Boolean,
    default: false
  },
  // 是否为圆角按钮
  round: {
    type: Boolean,
    default: false
  },
  // 是否为圆形按钮
  circle: {
    type: Boolean,
    default: false
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 颜色
  color: String
})
...
</script>
```

<style lang="scss" scoped>
.mb-10 {
  margin-bottom: 10px;
}
.mt-10 {
  margin-top: 10px;
}
</style>

