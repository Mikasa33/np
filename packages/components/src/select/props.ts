import type { SelectGroupOption, SelectOption } from 'naive-ui'
import { selectProps as nSelectProps } from 'naive-ui'
import { makeFunctionProp } from '../utils'

export const selectProps = Object.assign({}, nSelectProps, {
  immediate: Boolean,
  lazy: Boolean,
  onRequest: makeFunctionProp<(params?: Record<string, any>) => Promise<Array<SelectOption | SelectGroupOption>>>(),
  onUpdateLoading: makeFunctionProp<(loading: boolean) => void>(),
  onUpdateOptions: makeFunctionProp<(options: Array<SelectOption | SelectGroupOption>) => void>(),
})
