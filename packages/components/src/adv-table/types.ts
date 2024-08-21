import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { advTableProps } from './props'

export type AdvTableProps = ExtractPublicPropTypes<typeof advTableProps>

export interface AdvTableSlots {
  action?: () => VNodeChild
  search?: () => VNodeChild
}
