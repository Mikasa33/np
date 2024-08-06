# 表格 Table

数据表格用来显示一些格式化信息。

如果只是想渲染一个表格，建议直接使用 [NDataTable](https://www.naiveui.com/zh-CN/light/components/data-table) 或 [NTable](https://www.naiveui.com/zh-CN/light/components/table)。

## 演示

<script setup lang="ts">
import { Basic } from './demos'
</script>

### 基础

基础表格。

::: raw
<Basic />
:::

::: details 查看代码
<<< ./demos/Basic.vue
:::

## API

### Table Props

接受 [NDataTable](https://www.naiveui.com/zh-CN/light/components/data-table#DataTable-Props) 除 `remote` 外的所有属性

| 名称       | 说明                         | 类型                            | 默认值      |
| ---------- | ---------------------------- | ------------------------------- | ----------- |
| dataField  | 替代请求数据中的 data 字段名 | `string`                        | `data`      |
| immediate  | 是否立即请求数据             | `boolean`                       | `false`     |
| on-request | 异步请求数据的回调           | `(params: any) => Promise<any>` | `undefined` |
