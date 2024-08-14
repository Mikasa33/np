# 展示标签 View Tag

一个格式化并展示标签的小组件。

## 演示

### 基础

格式化并展示标签。

<ViewTag />

::: details 查看代码
<<< @/../packages/components/src/view/demos/Tag.vue
:::

## API

### ViewTag Props

| 名称                   | 说明                                | 类型                                                                    | 默认值      |
| ---------------------- | ----------------------------------- | ----------------------------------------------------------------------- | ----------- |
| bordered               | 是否有边框                          | `boolean`                                                               | `true`      |
| checkable              | 是否可以选择，使用后 type 将不生效  | `boolean`                                                               | `false`     |
| checked                | 是否被选中，配合 checkable 一起使用 | `boolean`                                                               | `false`     |
| closable               | 是否可关闭                          | `boolean`                                                               | `false`     |
| color                  | 标签颜色，设置该项后 type 无效      | `{ color?: string, borderColor?: string, textColor?: string }`          | `undefined` |
| disabled               | 是否禁用                            | `boolean`                                                               | `false`     |
| options                | 选项，不配置则显示 `value`          | `NSelectOption`                                                         | `[]`        |
| round                  | 是否圆角                            | `boolean`                                                               | `false`     |
| size                   | 尺寸                                | `'small'  \|  'medium' \| 'large'`                                      | `'medium'`  |
| strong                 | 文字是否加粗                        | `boolean`                                                               | `false`     |
| trigger-click-on-close | 关闭时是否触发点击事件              | `boolean`                                                               | `false`     |
| type                   | 类型                                | `'default' \| 'primary' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'default'` |
| value                  | 标签值                              | `boolean`                                                               | `false`     |
| on-close               | 点击关闭时的回调                    | `(e: MouseEvent) => void`                                               | `undefined` |
| on-update:checked      | 选择状态更改时的回调                | `(value: boolean) => void`                                              | `undefined` |
