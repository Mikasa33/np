import type { GridProps } from 'naive-ui'
import { formItemGiProps, gridProps, formProps as nFormProps } from 'naive-ui'
import type { PropType } from 'vue'
import { omit } from 'lodash-es'
import { makeArrayProp, makeFunctionProp, makeNumericProp, makeObjectProp, numericProp } from '../utils'
import type { FormItemComponentType, FormItemProps } from './types'

export const formProps = Object.assign({}, gridProps, omit(nFormProps, 'model'), {
  defaultValues: makeObjectProp<Record<string, any>>(),
  giSpan: makeNumericProp(24),
  giSuffixSpan: numericProp,
  items: makeArrayProp<FormItemProps>(),
  value: makeObjectProp<Record<string, any>>(),
  onUpdateValue: makeFunctionProp<(value: any) => void>(),
})

export const formItemProps = Object.assign({}, formItemGiProps, {
  component: [String, Function] as PropType<FormItemComponentType>,
  componentProps: makeObjectProp(),
  defaultValue: Object as PropType<any>,
  slot: String,
})
