import type { Component, PropType } from 'vue'
import type { DrawerProps } from '../drawer'
import type { FormProps } from '../form'
import type { SearchKeywordProps } from '../search-keyword'
import { tableProps } from '../table'
import { makeArrayProp, makeObjectProp, truthProp } from '../utils'
import type { ModalProps } from '../modal'
import type { PopoverProps } from '../popover'
import type { AdvTableFilterPresetType } from './types'

export const advTableProps = Object.assign({}, tableProps, {
  columnActions: makeArrayProp<string | Component>(['edit', 'delete']),
  filterable: Boolean,
  filterFormProps: makeObjectProp<FormProps>(),
  filterPopupProps: makeObjectProp<DrawerProps | ModalProps | PopoverProps>(),
  filterPreset: {
    type: String as PropType<AdvTableFilterPresetType>,
    default: 'drawer',
  },
  fullscreenable: truthProp,
  refreshable: truthProp,
  searchable: Boolean,
  searchProps: makeObjectProp<SearchKeywordProps>(),
})
