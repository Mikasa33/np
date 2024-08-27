import type { PropType } from 'vue'
import { formProps } from '../form'
import { type ModalProps, modalProps } from '../modal'
import type { DrawerProps } from '../drawer'
import { makeNumericProp, makeObjectProp } from '../utils'
import { popupCardProps } from '../popup-card'
import type { AdvFormPopupPresetType } from './types'

export const advFormProps = Object.assign({}, formProps, {
  popupProps: makeObjectProp<DrawerProps | ModalProps>(),
  preset: {
    type: String as PropType<AdvFormPopupPresetType>,
    default: 'drawer',
  },
  title: popupCardProps.title,
  width: makeNumericProp(500),
})
