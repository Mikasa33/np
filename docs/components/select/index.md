# 选择器 Select

选点啥！

## 演示

### 基础

支持异步请求的基础用法。

<SelectBasic />

::: details 查看代码
<<< ./demos/Basic.vue
:::

### 懒加载

选择器还可以延迟加载选项。

<SelectLazy />

::: details 查看代码
<<< ./demos/Lazy.vue
:::

## API

### Select Props

支持 [NSelect](https://www.naiveui.com/zh-CN/light/components/select#Select-Props) 所有属性。

| 名称       | 说明                   | 类型                                                                                    | 默认值      |
| ---------- | ---------------------- | --------------------------------------------------------------------------------------- | ----------- |
| immediate  | 是否立即请求数据       | `boolean`                                                                               | `false`     |
| lazy       | 是否延迟请求数据       | `boolean`                                                                               | `false`     |
| on-request | 异步请求数据的回调函数 | `(params: Record<string, any>) => Promise<Array<NSelectOption \| NSelectGroupOption>>>` | `undefined` |
