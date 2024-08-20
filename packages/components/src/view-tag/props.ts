import type { SelectOption } from 'naive-ui'
import { tagProps } from 'naive-ui'
import type { PropType } from 'vue'
import { makeArrayProp } from '../utils/props'

export const viewTagProps = Object.assign({}, tagProps, {
  options: makeArrayProp<SelectOption>(),
  value: [String, Number, Array, Object],
})
