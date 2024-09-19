import { withInstall } from '../utils'
import _AdvTable from './AdvTable.vue'

export const NpAdvTable = withInstall(_AdvTable)
export default _AdvTable
export { advTableProps } from './props'
export type { AdvTableFilterPresetType, AdvTableInstance, AdvTableProps, AdvTableSlots } from './types'
