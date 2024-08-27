import { withInstall } from '../utils'
import _Form from './Form.vue'

export const NpForm = withInstall(_Form)
export default _Form
export { formProps, formItemProps } from './props'
export type { FormProps, FormItemProps, FormItemComponentType, FormSlots, FormInstance } from './types'
