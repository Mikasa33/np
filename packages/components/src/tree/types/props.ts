import type { TreeOption } from 'naive-ui'
import type { TreeNodeProps } from 'naive-ui/es/tree/src/interface'

/**
 * 树 props
 */
export interface NpTreeProps {
  /**
   * 节点整行撑开
   */
  blockLine?: boolean
  /**
   * 节点名称整行撑开
   */
  blockNode?: boolean
  /**
   * 是否显示选择框
   */
  checkable?: boolean
  /**
   * 替代 TreeOption 中的 children 字段名
   */
  childrenField?: string
  /**
   * 选中的多选项
   */
  checkedKeys?: Array<number | string>
  /**
   * 是否允许点击节点进行勾选，仅在 checkable 为 true 时生效
   */
  checkOnClick?: boolean | ((node: TreeOption) => boolean)
  /**
   * 替代 TreeOption 中的 disabled 字段名
   */
  disabledField?: string
  /**
   * 是否在点击节点后展开或收缩节点
   */
  expandOnClick?: boolean
  /**
   * 展开项
   */
  expandedKeys?: Array<number | string>
  /**
   * 是否立即请求数据
   */
  immediate?: boolean
  /**
   * 是否支持键盘操作
   */
  keyboard?: boolean
  /**
   * 替代 TreeOption 中的 key 字段名
   */
  keyField?: string
  /**
   * 替代 TreeOption 中的 label 字段名
   */
  labelField?: string
  /**
   * 是否显示 loading 状态
   */
  loading?: boolean
  /**
   * 节点的 HTML 属性
   */
  nodeProps?: TreeNodeProps
  /**
   * 覆盖默认的节点点击行为
   * @param info 节点数据
   * @returns 'toggleExpand' | 'toggleSelect' | 'toggleCheck' | 'default' | 'none'
   */
  overrideDefaultNodeClickBehavior?: (info: { option: TreeOption }) => 'toggleExpand' | 'toggleSelect' | 'toggleCheck' | 'default' | 'none'
  /**
   * 节点是否可以被选中
   */
  selectable?: boolean
  /**
   * 选中的节点
   */
  selectedKeys?: Array<number | string>
  /**
   * 是否显示连接线
   */
  showLine?: boolean
  /**
   * 异步请求数据的回调函数
   * @param params 请求参数
   */
  onRequest?: (params?: Record<string, any>) => Promise<TreeOption[]>
  /**
   * 节点勾选项发生变化时的回调函数
   * @param keys 勾选的节点 key
   * @returns
   */
  onUpdateCheckedKeys?: (keys: Array<number | string>) => void
  /**
   * 节点展开项发生变化时的回调函数
   * @param keys 展开的节点 key
   * @returns
   */
  onUpdateExpandedKeys?: (keys: Array<number | string>) => void
  /**
   * loading 状态改变时触发的回调函数
   */
  onUpdateLoading?: (loading: boolean) => void
  /**
   * 节点选中项发生变化时的回调函数
   * @param keys 选中的节点 key
   * @returns
   */
  onUpdateSelectedKeys?: (keys: Array<number | string>) => void
}
