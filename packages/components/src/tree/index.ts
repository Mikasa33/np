import { withInstall } from '../utils'
import _Tree from './Tree.vue'

export const NpTree = withInstall(_Tree)
export default _Tree
export { treeProps } from './props'
export type { TreeProps, TreeSlots } from './types'
