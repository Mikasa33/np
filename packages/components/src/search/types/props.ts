import type { SelectGroupOption, SelectOption } from 'naive-ui'
import type { FormProps } from '../../form'

/**
 * 搜索表单 props
 */
export interface NpSearchFormProps {
  /**
   * 是否可折叠表单项
   */
  collapsable?: boolean
  /**
   * 表单 props
   */
  formProps?: FormProps
  /**
   * 获取表项中收集到的值的对象
   */
  value: FormProps['value']
  /**
   * 表项中收集到的值的对象改变时触发的回调函数
   */
  onUpdateValue?: (value: any) => void
}

/**
 * 搜索关键词 props
 */
export interface NpSearchKeywordProps {
  /**
   * 是否可清空
   */
  clearable?: boolean
  /**
   * 防抖时间，单位毫秒
   */
  debounce?: number
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 搜索字段的值
   */
  field?: string | number | null
  /**
   * 自定义搜索字段选择器的类名
   */
  fieldClass?: string
  /**
   * 配置搜索字段选项内容
   */
  fieldOptions?: Array<SelectOption | SelectGroupOption>
  /**
   * 自定义输入框的类名
   */
  inputClass?: string
  /**
   * 是否展示加载图标，设为非 undefined 会占据空间
   */
  loading?: boolean
  /**
   * 文本输入的占位符
   */
  placeholder?: string
  /**
   * 是否只读
   */
  readonly?: boolean
  /**
   * 文本输入的值
   */
  value?: string | null
  /**
   * 输入框值改变时触发
   */
  onSearch?: (value: string | null, field: string | number | null) => void
  /**
   * 字段选择框值改变时触发
   */
  onUpdateField?: (value: string) => void
  /**
   * 输入框值改变时触发
   */
  onUpdateValue?: (value: string | number) => void
}
