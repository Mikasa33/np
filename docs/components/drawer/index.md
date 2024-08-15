# 抽屉 Drawer

我感觉和 Modal 功能差不太多，位置有点差别。

## 演示

### 基础

基础抽屉用法。

<DrawerBasic />

::: details 查看代码
<<< @/../packages/components/src/drawer/demos/Basic.vue
:::

## API

### Drawer Props

支持 [NDrawer](https://www.naiveui.com/zh-CN/light/components/drawer#Drawer-Props) 所有属性。

| 名称    | 说明                       | 类型            | 默认值  |
| ------- | -------------------------- | --------------- | ------- |
| options | 选项，不配置则显示 `value` | `NSelectOption` | `[]`    |
| value   | 标签值                     | `boolean`       | `false` |
