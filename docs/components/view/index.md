# 展示 View

一些展示数据的小组件。

> [!WARNING]
> 目前 NaiveUI 的组件属性没有完全支持，工作量有点大，持续完善中...

## 演示

<script setup lang="ts">
import { Time } from './demos'
</script>

### 时间 ViewTime

格式化并展示时间。

<Time />

::: details 查看代码
<<< ./demos/Time.vue
:::

## API

### ViewTime Props

| 名称   | 说明       | 类型                                      | 默认值                |
| ------ | ---------- | ----------------------------------------- | --------------------- |
| format | 格式化规则 | `string`                                  | `YYYY-MM-DD HH:mm:ss` |
| value  | 值         | `number \| string \| Date \| dayjs.Dayjs` | `new Date()`          |
