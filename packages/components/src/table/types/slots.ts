import type { VNodeChild } from 'vue'

/**
 * 表格 slots
 */
export interface NpTableSlots {
  /**
   * 头部内容
   */
  header?: () => VNodeChild
  /**
   * 表格列内容
   */
  [key: `column-${string}`]: (props: { key: string, row: any, index: number }) => VNodeChild
}
