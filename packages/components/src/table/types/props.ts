import type { Component, VNodeChild } from 'vue'

/**
 * 表格 props
 */
export interface NpTableProps {
  /**
   * 被选中的行的 key
   */
  checkedRowKeys?: Array<number | string>
  /**
   * 需要展示的列
   */
  columns?: NpTableColumnProps[]
  /**
   * 替代请求数据中的 data 字段名
   */
  dataField?: string
  /**
   * 是否立即请求数据
   */
  immediate?: boolean
  /**
   * 是否显示 loading 状态
   */
  loading?: boolean
  /**
   * 分页 props
   */
  pagination?: boolean | any
  /**
   * 通过行数据创建行的 key（如果你不想给每一行加上 key）
   */
  rowKey?: (row: any) => number | string
  /**
   * 替代请求数据中的 total 字段名
   */
  totalField?: string
  /**
   * checked-row-keys 值改变时触发的回调函数
   */
  onUpdateCheckedRowKeys?: (keys: Array<number | string>) => void
  /**
   * 异步请求数据的回调函数
   * @param params 请求参数
   */
  onRequest?: (params?: Record<string, any>) => Promise<any>
  /**
   * loading 状态改变时触发的回调函数
   */
  onUpdateLoading?: (loading: boolean) => void
}

/**
 * 表格列 props
 */
export interface NpTableColumnProps {
  /**
   * 列内的文本排列
   */
  align?: 'left' | 'center' | 'right'
  /**
   * 组件
   */
  component?: NpTableColumnComponentType
  /**
   * 列组件 props
   */
  componentProps?: any
  /**
   * 这一列的 key，不可重复
   */
  key?: number | string
  /**
   * 是否开启多选，仅在 type 为 'selection' 的时候生效
   */
  multiple?: boolean
  /**
   * 渲染函数，渲染这一列的每一行的单元格
   */
  render?: (row: any, index: number) => VNodeChild
  /**
   * 列的标题信息、，可以是渲染函数
   */
  title?: string | (() => VNodeChild)
  /**
   * 列的类型
   */
  type?: 'selection' | 'expand'
  /**
   * 列的宽度（（在列固定时是必需的，并且需要为 number 类型）
   */
  width?: number | string
}

/**
 * 表格列组件类型
 */
export type NpTableColumnComponentType =
  | 'NpViewTime'
  | Component
