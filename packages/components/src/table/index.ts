import { withInstall } from '../utils'
import _Table from './Table.vue'

export const NpTable = withInstall(_Table)
export default _Table
export { tableProps } from './props'
export type { TableColumnComponentType, TableColumnProps, TableInstance, TableProps, TableSlots } from './types'
