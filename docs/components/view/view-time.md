# 展示时间 View Time

一个格式化并展示时间的小组件。

## 演示

### 基础

格式化并展示时间。

<ViewTime />

::: details 查看代码
<<< @/../packages/components/src/view/demos/Time.vue
:::

## API

### ViewTime Props

| 名称   | 说明       | 类型                                      | 默认值                |
| ------ | ---------- | ----------------------------------------- | --------------------- |
| format | 格式化规则 | `string`                                  | `YYYY-MM-DD HH:mm:ss` |
| value  | 值         | `number \| string \| Date \| dayjs.Dayjs` | `new Date()`          |
