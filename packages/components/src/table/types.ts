import type { Component, ExtractPublicPropTypes, HTMLAttributes, VNodeChild } from 'vue'
import type { ColumnKey, DataTableSelectionOptions, Ellipsis, Expandable, Filter, FilterOption, FilterOptionValue, InternalRowData, RenderExpand, RenderFilter, RenderFilterIcon, RenderFilterMenu, RenderSorter, RenderSorterIcon, SortOrder, Sorter, TableBaseColumn, TableColumnGroupTitle, TableColumnTitle, TableExpandColumnTitle } from 'naive-ui/es/data-table/src/interface'
import type { tableProps } from './props'

export type TableProps = ExtractPublicPropTypes<typeof tableProps>

export interface TableColumnProps<T = InternalRowData> {
  align?: 'left' | 'center' | 'right'
  cellProps?: (rowData: T, rowIndex: number) => HTMLAttributes
  children?: Array<TableBaseColumn<T>>
  className?: string
  colSpan?: (rowData: T, rowIndex: number) => number | never
  component?: TableColumnComponentType
  componentProps?: any
  disabled?: (row: T) => boolean
  ellipsis?: Ellipsis
  ellipsisComponent?: 'ellipsis' | 'performant-ellipsis'
  expandable?: Expandable<T>
  fixed?: 'left' | 'right'
  title?: TableColumnTitle | TableColumnGroupTitle | TableExpandColumnTitle
  titleColSpan?: number
  type?: never | 'expand' | 'selection'
  key: ColumnKey
  tree?: boolean
  sorter?: boolean | Sorter<T> | 'default' | never
  defaultSortOrder?: SortOrder
  sortOrder?: SortOrder
  resizable?: boolean
  minWidth?: string | number
  maxWidth?: string | number
  filter?: 'default' | boolean | Filter<T> | never
  filterOptions?: FilterOption[] | never
  filterOptionValues?: FilterOptionValue[] | null | never
  filterOptionValue?: FilterOptionValue | null | never
  filterMode?: 'or' | 'and'
  defaultFilterOptionValues?: FilterOptionValue[] | null
  defaultFilterOptionValue?: FilterOptionValue | null
  filterMultiple?: boolean
  multiple?: boolean
  options?: DataTableSelectionOptions<T>
  render?: (rowData: T, rowIndex: number) => VNodeChild
  renderExpand?: RenderExpand<T>
  renderFilter?: RenderFilter
  renderFilterIcon?: RenderFilterIcon
  renderSorter?: RenderSorter
  renderSorterIcon?: RenderSorterIcon
  renderFilterMenu?: RenderFilterMenu
  rowSpan?: (rowData: T, rowIndex: number) => number | never
  titleAlign?: 'left' | 'center' | 'right'
  width?: number | string
}

export type TableColumnComponentType =
  | 'NpViewTag'
  | 'NpViewTime'
  | Component

export interface TableSlots {
  header?: () => VNodeChild
  [key: `column-${string}`]: (props: { key: string, row: any, index: number }) => VNodeChild
}
