import type { VNodeChild } from 'vue'

export interface NpSearchFormSlots {
  /**
   * 操作栏内容
   */
  action?: ({ reset, search }: { reset: () => void, search: () => void }) => VNodeChild
}
