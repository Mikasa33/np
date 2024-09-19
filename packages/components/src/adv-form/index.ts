import { withInstall } from '../utils'
import _AdvForm from './AdvForm.vue'

export const NpAdvForm = withInstall(_AdvForm)
export default _AdvForm
export { advFormProps } from './props'
export type { AdvFormPopupPresetType, AdvFormProps, AdvFormSlots } from './types'
