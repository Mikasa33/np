import { dataTableProps } from 'naive-ui'
import type { PropType } from 'vue'
import { omit } from 'lodash-es'
import { makeFunctionProp, makeStringProp } from '../utils'
import type { TableColumnProps } from './types'

export const tableProps = Object.assign({}, omit(dataTableProps, 'columns', 'flex-height', 'pagination', 'remote'), {
  columns: Array as PropType<TableColumnProps[]>,
  dataField: makeStringProp('data'),
  immediate: Boolean,
  pagination: {
    // 类型搞不定，先这样吧
    type: [Boolean, Object] as PropType<boolean | any>,
    default: true,
  },
  totalField: makeStringProp('total'),
  onRequest: Function as PropType<(params: Record<string, any>) => Promise<any>>,
  onUpdateData: makeFunctionProp<(options: Array<Record<string, any>>) => void>(),
  onUpdateLoading: makeFunctionProp<(loading: boolean) => void>(),
})
