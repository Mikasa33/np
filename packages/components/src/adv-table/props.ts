import type { SearchKeywordProps } from '../search-keyword'
import { tableProps } from '../table'
import { makeObjectProp, truthProp } from '../utils'

export const advTableProps = Object.assign({}, tableProps, {
  searchable: truthProp,
  searchProps: makeObjectProp<SearchKeywordProps>(),
})
