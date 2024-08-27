import { cardProps } from 'naive-ui'
import { truthProp } from '../utils'

export const innerPopupCardProps = {
  autoFocus: Boolean,
  bordered: Boolean,
  closable: truthProp,
  fullscreenable: truthProp,
}

export const popupCardProps = Object.assign({}, cardProps, innerPopupCardProps)
