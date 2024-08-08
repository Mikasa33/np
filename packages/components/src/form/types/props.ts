import type { FormRules, GridProps } from 'naive-ui'
import type { Component } from 'vue'

/**
 * 表单 props
 */
export interface NpFormProps {
  /**
   * 默认值
   */
  defaultValues?: Record<string, any>
  /**
   * 栅格占据的列数，为 0 的时候会隐藏
   */
  giSpan?: number | string
  /**
   * 栅格 props
   */
  gridProps?: GridProps
  inline?: boolean
  /**
   * 表单项
   */
  items?: NpFormItemProps[]
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
  model?: Record<string, any>
  /**
   * 验证表项的规则
   */
  rules?: FormRules
  /**
   * 表项中收集到的值的对象改变时触发的回调函数
   */
  onUpdateModel?: (model: any) => void
}

/**
 * 表单项 props
 */
export interface NpFormItemProps {
  /**
   * 组件
   */
  component?: NpFormItemComponentType
  /**
   * 表单项组件 props
   */
  componentProps?: any
  /**
   * 默认值
   */
  defaultValue?: any
  /**
   * 标签信息
   */
  label?: string
  /**
   * 栅格左侧的间隔格数
   */
  offset?: number | string
  /**
   * 将值收集到外层表单 model 对象的路径
   */
  path?: string
  /**
   * 栅格占据的列数，为 0 的时候会隐藏
   */
  span?: number | string
  /**
   * 栅格后缀
   */
  suffix?: boolean
}

/**
 * 表单项组件类型
 */
export type NpFormItemComponentType =
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
