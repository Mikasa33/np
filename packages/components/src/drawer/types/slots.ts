import type { VNodeChild } from 'vue'

export interface NpDrawerSlots {
  /**
   * 内容
   */
  'default'?: () => VNodeChild
  /**
   * 头部额外内容
   */
  'header-extra'?: () => VNodeChild
}
