import { withInstall } from '../utils'
import _Form from './Form.vue'

export const NpForm = withInstall(_Form)
export default _Form
export { formItemProps, formProps } from './props'
export type { FormInstance, FormItemComponentType, FormItemProps, FormProps, FormSlots } from './types'
