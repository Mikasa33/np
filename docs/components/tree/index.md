# 树 Tree

用来获取异步请求的树形结构数据，并展示在树中。

如果只是想渲染一个树，建议直接使用 [NTree](https://www.naiveui.com/zh-CN/light/components/tree)。

> [!WARNING]
> 目前 NaiveUI 的组件属性没有完全支持，工作量有点大，持续完善中...

## 演示

### 基础

基础树。

<TreeBasic />

::: details 查看代码
<<< @/../packages/components/src/tree/demos/Basic.vue
:::

### 节点内容插槽

使用节点内容插槽，自定义节点列。优先级 `slot` > `renderLabel` > `label`。

<TreeSlotLabel />

::: details 查看代码
<<< @/../packages/components/src/tree/demos/SlotLabel.vue
:::

## API

### Tree Props

支持 [NTree](https://www.naiveui.com/zh-CN/light/components/tree#Tree-Props) 所有属性。

| 名称                                 | 说明                                                        | 类型                                                                                                          | 默认值      |
| ------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------- |
| block-line                           | 节点整行撑开                                                | `boolean`                                                                                                     | `false`     |
| block-node                           | 节点名称整行撑开                                            | `boolean`                                                                                                     | `false`     |
| checkable                            | 是否显示选择框                                              | `boolean`                                                                                                     | `false`     |
| children-field                       | 替代 `NTreeOption` 中的 `children` 字段名                   | `string`                                                                                                      | `children`  |
| checked-keys                         | 选中的多选项                                                | `Array<number \| string>`                                                                                     | `[]`        |
| checked-on-click                     | 是否允许点击节点进行勾选，仅在 `checkable` 为 `true` 时生效 | `boolean \| ((node: NTreeOption) => boolean)`                                                                 | `false`     |
| disabled-field                       | 替代 `NTreeOption` 中的 `disabled` 字段名                   | `string`                                                                                                      | `disabled`  |
| expand-on-click                      | 是否在点击节点后展开或收缩节点                              | `boolean`                                                                                                     | `false`     |
| expanded-keys                        | 展开项                                                      | `Array<number \| string>`                                                                                     | `[]`        |
| immediate                            | 是否立即请求数据                                            | `boolean`                                                                                                     | `false`     |
| keyboard                             | 是否支持键盘操作                                            | `boolean`                                                                                                     | `true`      |
| key-field                            | 替代 `NTreeOption` 中的 `key` 字段名                        | `string`                                                                                                      | `key`       |
| label-field                          | 替代 `NTreeOption` 中的 `label` 字段名                      | `string`                                                                                                      | `label`     |
| loading                              | 是否显示 `loading` 状态                                     | `boolean`                                                                                                     | `false`     |
| node-props                           | 节点的 HTML 属性                                            | `(info: { option: NTreeOption }) => HTMLAttributes`                                                           | `undefined` |
| override-default-node-click-behavior | 覆盖默认的节点点击行为                                      | `(info: { option: NTreeOption }) => 'toggleExpand' \| 'toggleSelect' \| 'toggleCheck' \| 'default' \| 'none'` | `undefined` |
| render-label                         | 节点内容的渲染函数                                          | `(info: { option: NTreeOption, checked: boolean, selected: boolean }) => VNodeChild`                          | `undefined` |
| selectable                           | 节点是否可以被选中                                          | `boolean`                                                                                                     | `true`      |
| show-line                            | 是否显示连接线                                              | `boolean`                                                                                                     | `false`     |
| on-request                           | 异步请求数据的回调函数                                      | `(params: Record<string, any>) => Promise<NTreeOption[]>`                                                     | `undefined` |
| on-update:checked-keys               | 节点勾选项发生变化时的回调函数                              | `(keys: Array<number \| string>) => void`                                                                     | `undefined` |
| on-request                           | 异步请求数据的回调函数                                      | `(params: Record<string, any>) => Promise<any>`                                                               | `undefined` |
| on-update:expanded-keys              | 节点展开项发生变化时的回调函数                              | `(keys: Array<number \| string>) => void`                                                                     | `undefined` |
| on-request                           | 异步请求数据的回调函数                                      | `(params: Record<string, any>) => Promise<any>`                                                               | `undefined` |
| on-update:loading                    | `loading` 状态改变时触发的回调函数                          | `(loading: boolean) => void`                                                                                  | `undefined` |
| on-update:selected-keys              | 节点选中项发生变化时的回调函数                              | `(keys: Array<number \| string>) => void`                                                                     | `undefined` |

### Table Slots

支持 [NTree](https://www.naiveui.com/zh-CN/light/components/tree#Tree-Slots) 所有插槽。

| 名称           | 说明     | 参数                                                            |
| -------------- | -------- | --------------------------------------------------------------- |
| label-$\{key\} | 节点内容 | `({ option: TreeOption, checked: boolean, selected: boolean })` |
