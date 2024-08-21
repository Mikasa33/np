import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { modalProps } from './props'

export type ModalProps = ExtractPublicPropTypes<typeof modalProps>

export interface ModalSlots {
  'default'?: () => VNodeChild
  'header-extra'?: () => VNodeChild
}
