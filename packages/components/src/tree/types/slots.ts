import type { TreeOption } from 'naive-ui'
import type { VNodeChild } from 'vue'

/**
 * 树 slots
 */
export interface NpTreeSlots {
  /**
   * 树组件无数据时的 slot
   */
  empty?: () => VNodeChild
  /**
   * 节点内容
   */
  [key: `label-${string}`]: (props: { option: TreeOption, checked: boolean, selected: boolean }) => VNodeChild
}
