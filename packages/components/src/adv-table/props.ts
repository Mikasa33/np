import type { ButtonProps, TooltipProps } from 'naive-ui'
import type { Component, PropType } from 'vue'
import type { DrawerProps } from '../drawer'
import type { FormProps } from '../form'
import type { SearchKeywordProps } from '../search-keyword'
import { tableProps } from '../table'
import { makeArrayProp, makeNumericProp, makeObjectProp } from '../utils'
import type { AdvTableFilterPresetType } from './types'

export const advTableProps = Object.assign({}, tableProps, {
  columnActions: makeArrayProp<string | Component>(['edit', 'delete']),
  filterable: Boolean,
  filterBtnProps: makeObjectProp<ButtonProps>(),
  filterFormProps: makeObjectProp<FormProps>(),
  filterPopupProps: makeObjectProp<DrawerProps>(),
  filterPreset: {
    type: String as PropType<AdvTableFilterPresetType>,
    default: 'drawer',
  },
  filterTooltipProps: makeObjectProp<TooltipProps>(),
  filterTooltipText: makeNumericProp('筛选'),
  searchable: Boolean,
  searchProps: makeObjectProp<SearchKeywordProps>(),
})
