import type { PaginationProps } from 'naive-ui'
import { dataTableProps } from 'naive-ui'
import type { PropType } from 'vue'
import { omit } from 'lodash-es'
import { makeFunctionProp, makeStringProp } from '../utils/props'
import type { TableColumnProps } from './types'

export const tableProps = Object.assign({}, omit(dataTableProps, 'columns', 'pagination', 'remote'), {
  columns: Array as PropType<TableColumnProps[]>,
  dataField: makeStringProp('data'),
  immediate: Boolean,
  pagination: {
    type: [Boolean, Object] as PropType<boolean | PaginationProps>,
    default: true,
  },
  totalField: makeStringProp('total'),
  onRequest: Function as PropType<(params: Record<string, any>) => Promise<any>>,
  onUpdateLoading: makeFunctionProp<(loading: boolean) => void>(),
})
