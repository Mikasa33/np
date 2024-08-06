# 表单 Form

收集、验证信息。

## 演示

<script setup lang="ts">
import { Basic, DefaultValue, Grid, Slot, Component } from './demos'
</script>

### 基础

基础表单。

<Basic />

::: details 查看代码
<<< ./demos/Basic.vue
:::

### 默认值

设置表单默认值，优先级 `item.defaultValue` > `form.defaultValues`。

<DefaultValue />

::: details 查看代码
<<< ./demos/DefaultValue.vue
:::

### 栅格布局

设置表单布局，优先级 `item.span` > `form.giSpan`。

<Grid />

::: details 查看代码
<<< ./demos/DefaultValue.vue
:::

### 插槽

使用插槽，自定义表单项。

<Slot />

::: details 查看代码
<<< ./demos/Slot.vue
:::

### 自定义组件

使用组件，自定义表单项。

<Component />

::: details 查看代码
<<< ./demos/Component.vue
:::

## API

### Form Props

接受 [NForm](https://www.naiveui.com/zh-CN/light/components/form#Form-Props) 所有属性

| 名称           | 说明                                               | 类型               | 默认值      |
| -------------- | -------------------------------------------------- | ------------------ | ----------- |
| default-values | 默认值                                             | `object`           | `{}`        |
| gi-span        | 栅格占据的列数，为 0 的时候会隐藏                  | `number \| string` | `24`        |
| grid-props     | 栅格 props                                         | `GridProps`        | `undefined` |
| items          | 表单项，属性参考 [FormItem Props](#formitem-props) | `NpFormItemProps`  | `[]`        |

### FormItem Props

接受 [NFormItem && NFormItemGi](https://www.naiveui.com/zh-CN/light/components/form#FormItem-Props) 所有属性

| 名称            | 说明                                                                       | 类型                      | 默认值      |
| --------------- | -------------------------------------------------------------------------- | ------------------------- | ----------- |
| component       | 组件或组件名称，类型参考 [FormItemComponent Type](#formitemcomponent-type) | `NpFormItemComponentType` | `undefined` |
| default-value   | 默认值                                                                     | `any`                     | `null`      |
| component-props | 组件 props                                                                 | `any`                     | `undefined` |

### FormItemComponent Type

```ts
import type { Component } from 'vue'

type NpFormItemComponentType =
  | 'NAutoComplete'
  | 'NCascader'
  | 'NColorPicker'
  | 'NDatePicker'
  | 'NDynamicInput'
  | 'NInput'
  | 'NInputNumber'
  | 'NSelect'
  | 'NSlider'
  | 'NSwitch'
  | 'NTimePicker'
  | 'NTreeSelect'
  | Component
```

### Form Methods

| 名称              | 说明                   | 类型                                                                  |
| ----------------- | ---------------------- | --------------------------------------------------------------------- |
| validate          | 验证表单               | `(validateCallback?: any, shouldRuleBeApplied?: any) => Promise<any>` |
| restoreValidation | 还原到未校验的状态     | `() => void`                                                          |
| reset             | 重置表单数据和校验状态 | `() => void`                                                          |

### Form Slots

| 名称          | 说明       | 参数                                                                 |
| ------------- | ---------- | -------------------------------------------------------------------- |
| item-\{path\} | 表单项内容 | `(props: NpFormItemProps, path: string, model: Record<string, any>)` |
