# 搜索关键词 Search Keyword

输入关键词搜索，支持防抖。

> [!WARNING]
> 目前 NaiveUI 的组件属性没有完全支持，工作量有点大，持续完善中...

## 演示

### 基础

基础搜索。

<SearchKeywordBasic />

::: details 查看代码
<<< @/../packages/components/src/search/demos/KeywordBasic.vue
:::

### 选择搜索字段

支持选择不同的字段进行搜索。

<SearchKeywordField />

::: details 查看代码
<<< @/../packages/components/src/search/demos/KeywordField.vue
:::

## API

### SearchKeyword Props

支持 [NInput](https://www.naiveui.com/zh-CN/light/components/input#Input-Props) 所有属性。

| 名称            | 说明                   | 类型                                                               | 默认值                                  |
| --------------- | ---------------------- | ------------------------------------------------------------------ | --------------------------------------- |
| clearable       | 是否可清空             | `boolean`                                                          | `true`                                  |
| debounce        | 防抖时间，单位毫秒     | `number`                                                           | `500`                                   |
| field           | 搜索字段的值           | `string \| number \| null`                                         | `undefined \| fieldOptions?.[0]?.value` |
| field-options   | 配置搜索字段选项内容   | `Array<NSelectOption \| NSelectGroupOption>`                       | `[]`                                    |
| input-class     | 自定义输入框的类名     | `string`                                                           | `undefined`                             |
| placeholder     | 文本输入的占位符       | `string`                                                           | `请输入关键词`                          |
| value           | 文本输入的值           | `string \| null`                                                   | `undefined`                             |
| select-class    | 自定义选择器的类名     | `string`                                                           | `undefined`                             |
| on-search       | 输入框值改变时触发     | `(value: string \| null, field: string \| number \| null) => void` | `undefined`                             |
| on-update-field | 字段选择框值改变时触发 | `(value: string) => void`                                          | `undefined`                             |
| on-update-value | 输入框值改变时触发     | `(value: string \| number)`                                        | `undefined`                             |

### SearchKeyword Slots

| 名称         | 说明           | 参数 |
| ------------ | -------------- | ---- |
| input-prefix | 输入框头部内容 | `()` |
