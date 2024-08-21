import { cardProps, drawerProps as nDrawerProps } from 'naive-ui'
import { makeFunctionProp, makeNumericProp, truthProp } from '../utils'

export const drawerProps = Object.assign({}, cardProps, nDrawerProps, {
  autoFocus: Boolean,
  bordered: Boolean,
  closable: truthProp,
  fullscreen: Boolean,
  fullscreenable: truthProp,
  width: makeNumericProp(500),
  onUpdateFullscreen: makeFunctionProp<(fullscreen: boolean) => void>(),
})
