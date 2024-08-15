# 搜索表单 Search Form

填写表单搜索。

> [!WARNING]
> 目前 NaiveUI 的组件属性没有完全支持，工作量有点大，持续完善中...

## 演示

### 基础

基础搜索。

<SearchFormBasic />

::: details 查看代码
<<< @/../packages/components/src/search/demos/FormBasic.vue
:::

### 折叠

展开、收起表单项。

<SearchFormCollapsed />

::: details 查看代码
<<< @/../packages/components/src/search/demos/FormCollapsed.vue
:::

### 操作栏插槽

自定义操作按钮。

<SearchFormSlotAction />

::: details 查看代码
<<< @/../packages/components/src/search/demos/FormSlotAction.vue
:::

## API

### SearchForm Props

| 名称            | 说明                                                        | 类型                      | 默认值      |
| --------------- | ----------------------------------------------------------- | ------------------------- | ----------- |
| collapsable     | 是否可折叠表单项                                            | `boolean`                 | `false`     |
| form-props      | 表单，属性参考 [NpForm Props](/components/form/#form-props) | `NpFormProps`             | `undefined` |
| value           | 获取表项中收集到的值的对象                                  | `object`                  | `undefined` |
| on-search       | 点击搜索按钮的回调函数                                      | `(value: object) => void` | `undefined` |
| on-update:value | 表项中收集到的值的对象改变时触发的回调函数                  | `(value: any) => void`    | `undefined` |

### SearchForm Slots

| 名称   | 说明       | 参数                                          |
| ------ | ---------- | --------------------------------------------- |
| action | 操作栏内容 | `({ reset: () => void, search: () => void })` |
