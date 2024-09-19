import { withInstall } from '../utils'
import _AdvTree from './AdvTree.vue'

export const NpAdvTree = withInstall(_AdvTree)
export default _AdvTree
export { advTreeProps } from './props'
export type { AdvTreeProps, AdvTreeSlots } from './types'
