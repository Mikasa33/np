import type { VNodeChild } from 'vue'

/**
 * 抽屉 props
 */
export interface NpDrawerProps {
  /**
   * 是否允许关闭
   */
  closable?: boolean
  /**
   * 是否允许全屏
   */
  fullscreenable?: boolean
  /**
   * 是否展示抽屉
   */
  show?: boolean
  /**
   * 标题
   */
  title?: string | (() => VNodeChild)
  /**
   * 抽屉显示状态改变时执行的回调函数
   */
  onUpdateShow?: (show: boolean) => void
}
