import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { TableSlots } from '../table'
import type { advTableProps } from './props'

export type AdvTableProps = ExtractPublicPropTypes<typeof advTableProps>

export type AdvTableFilterPresetType = 'drawer' | 'modal' | 'popover'

export interface AdvTableSlots extends TableSlots {
  action?: () => VNodeChild
  search?: () => VNodeChild
}
