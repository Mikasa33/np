import { drawerProps as nDrawerProps } from 'naive-ui'
import { makeNumericProp } from '../utils'
import { innerPopupCardProps, popupCardProps } from '../popup-card'

export const drawerProps = Object.assign({}, popupCardProps, nDrawerProps, innerPopupCardProps, {
  width: makeNumericProp(300),
})
