import type { DrawerProps } from '../drawer'
import type { FormProps } from '../form'
import type { SearchKeywordProps } from '../search-keyword'
import { tableProps } from '../table'
import { makeObjectProp, truthProp } from '../utils'

export const advTableProps = Object.assign({}, tableProps, {
  filterFormProps: makeObjectProp<FormProps>(),
  filterProps: makeObjectProp<DrawerProps>(),
  searchable: truthProp,
  searchProps: makeObjectProp<SearchKeywordProps>(),
})
