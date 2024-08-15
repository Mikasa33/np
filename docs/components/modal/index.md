# 模态框 Modal

它会弹出来，然后给你看点东西。

## 演示

### 基础

格式化并展示标签。

<ViewTag />

::: details 查看代码
<<< @/../packages/components/src/view/demos/Tag.vue
:::

## API

### ViewTag Props

支持 [NTag](https://www.naiveui.com/zh-CN/light/components/tag#Tag-Props) 所有属性。

| 名称    | 说明                       | 类型            | 默认值  |
| ------- | -------------------------- | --------------- | ------- |
| options | 选项，不配置则显示 `value` | `NSelectOption` | `[]`    |
| value   | 标签值                     | `boolean`       | `false` |
