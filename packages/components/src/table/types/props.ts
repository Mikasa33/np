import type { DataTableColumn } from 'naive-ui'

export interface NpTableProps {
  /**
   * 需要展示的列
   */
  columns?: DataTableColumn[]
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
   * 异步请求数据的回调
   * @param params 请求参数
   */
  onRequest?: (params?: any) => Promise<any>
}
