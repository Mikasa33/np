import { withInstall } from '../utils'
import _Popover from './Popover.vue'

export const NpPopover = withInstall(_Popover)
export default _Popover
export { popoverProps } from './props'
export type { PopoverProps, PopoverSlots } from './types'
