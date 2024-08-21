import { cardProps, modalProps as nModalProps } from 'naive-ui'
import { makeFunctionProp, makeNumberProp, truthProp } from '../utils'

export const modalProps = Object.assign({}, cardProps, nModalProps, {
  autoFocus: Boolean,
  bordered: Boolean,
  closable: truthProp,
  fullscreen: Boolean,
  fullscreenable: truthProp,
  width: makeNumberProp(500),
  onUpdateFullscreen: makeFunctionProp<(fullscreen: boolean) => void>(),
})
