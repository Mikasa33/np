import { withInstall } from '../utils'
import _Select from './Select.vue'

export const NpSelect = withInstall(_Select)
export default _Select
export { selectProps } from './props'
export type { SelectProps } from './types'
