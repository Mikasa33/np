import { cardProps } from 'naive-ui'
import { makeFunctionProp, truthProp } from '../utils'

export const innerPopupCardProps = {
  autoFocus: Boolean,
  bordered: Boolean,
  closable: truthProp,
  fullscreen: Boolean,
  fullscreenable: truthProp,
  onUpdateFullscreen: makeFunctionProp<(fullscreen: boolean) => void>(),
}

export const popupCardProps = Object.assign({}, cardProps, innerPopupCardProps)
