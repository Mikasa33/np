import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { drawerProps } from './props'

export type DrawerProps = ExtractPublicPropTypes<typeof drawerProps>

export interface DrawerSlots {
  'default'?: () => VNodeChild
  'header-extra'?: () => VNodeChild
}
