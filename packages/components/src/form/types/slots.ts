import type { VNodeChild } from 'vue'
import type { NpFormItemProps } from './props'

/**
 * 表单 slots
 */
export interface NpFormSlots {
  /**
   * 表单项内容
   */
  [key: `item-${string}`]: (props: { props: NpFormItemProps, path: string, value: Record<string, any> }) => VNodeChild
  /**
   * 栅格后缀内容
   */
  'gi-suffix'?: ({ overflow }: { overflow: boolean }) => VNodeChild
}
