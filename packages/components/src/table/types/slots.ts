import type { VNodeChild } from 'vue'

export interface NpTableSlots {
  /**
   * 头部内容
   */
  header?: () => VNodeChild
}
