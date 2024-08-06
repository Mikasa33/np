import type { FormItemGiProps, GridProps, ResponsiveDescription } from 'naive-ui'
import type { Component } from 'vue'

/**
 * 表单 props
 */
export interface NpFormProps {
  /**
   * 默认值
   */
  defaultValues?: Recrod<string, any>
  /**
   * 栅格占据的列数，为 0 的时候会隐藏
   */
  giSpan?: number | string
  /**
   * 栅格 props
   */
  grid?: GridProps
  /**
   * 表单项
   */
  items?: ProFormItemProps[]
  /**
   * 标签的宽度，在 label-placement 是 'left' 的时候可能会有用，'auto' 意味着 label width 会被自动调整
   */
  labelWidth?: number | string | 'auto'
  /**
   * 标签的文本对齐方式
   */
  labelAlign?: 'left' | 'right'
  /**
   * 标签显示的位置
   */
  labelPlacement?: 'left' | 'top'
  /**
   * 获取表项中收集到的值的对象
   */
  model?: any
}

/**
 * 表单项 props
 */
export interface NpFormItemProps {
  /**
   * 表单项组件
   */
  component?: NAutoComplete | NCascader | NColorPicker | NDynamicInput | NInput | NInputNumber | NSelect | NSlider | NSwitch | NTimePicker | NTreeSelect | Component
  /**
   * 默认值
   */
  defaultValue?: any
  /**
   * 栅格左侧的间隔格数
   */
  offset?: number | string
  /**
   * 将值收集到外层表单 model 对象的路径
   */
  path?: string
  /**
   * 表单项组件 props
   */
  props?: any
  /**
   * 栅格占据的列数，为 0 的时候会隐藏
   */
  span?: number | string
  /**
   * 栅格后缀
   */
  suffix?: boolean
}
