<script setup lang="ts">
import type { DataTableColumns, PaginationProps } from 'naive-ui'
import { NDataTable, NFlex } from 'naive-ui'
import { computed, h, onMounted, reactive, ref } from 'vue'
import { cloneDeep, isArray, isString } from 'lodash-es'
import { reactiveOmit } from '@vueuse/core'
import type { NpTableColumnProps, NpTableProps } from '../types/props'
import { components } from '../configs/components'
import type { NpTableSlots } from '../types/slots'
import { useSlotsFilter } from '../../_composables/useSlotsFilter'

const props = withDefaults(defineProps<NpTableProps>(), {
  columns: () => [],
  dataField: 'data',
  pagination: true,
  totalField: 'total',
})
const slots = defineSlots<NpTableSlots>()
const checkedRowKeys = defineModel<Array<number | string>>('checkedRowKeys', { default: () => ([]) })
const loading = defineModel<boolean>('loading', { default: false })
const tableProps = reactiveOmit(props, 'checkedRowKeys', 'columns', 'dataField', 'immediate', 'loading', 'pagination', 'rowKey', 'totalField', 'onRequest')
const data = ref<any[]>([])
const { slotKeys } = useSlotsFilter((key: string) => key.includes('column-'))

const columns = computed(() => {
  const columns = cloneDeep(props.columns)
  for (const column of columns) {
    const { key, component } = column
    if (!key) {
      continue
    }
    const slotKey: string = `column-${key}`
    // 插槽，优先级最高
    if (slotKeys.value.includes(slotKey)) {
      column.render = (row: any, index: number) => (slots as any)[slotKey]?.({ key, row, index })
      continue
    }
    // 自定义组件
    if (component) {
      column.render = (row: any) => renderComponent(column, row)
    }
  }
  return columns as DataTableColumns
})
/**
 * 渲染表格列组件
 * @param column 表格列 props
 * @param row 表格行数据
 */
function renderComponent(column: NpTableColumnProps, row: any) {
  const { key, component, componentProps } = column
  return h(
    isString(component) ? components[component] : component!,
    {
      ...componentProps,
      value: row[key!],
    },
  )
}
const paginationRef = ref({
  itemCount: 0,
  // 分页大小，默认 10
  pageSize: 10,
  page: 1,
})
const pagination = computed(() => {
  if (!props.pagination) {
    return false
  }
  const { itemCount, pageSize, page } = paginationRef.value
  return {
    itemCount,
    // 每页条数，默认 10, 20, 50, 100
    pageSizes: [10, 20, 50, 100],
    pageSize,
    // 是否显示快速跳转，默认 true
    showQuickJumper: true,
    // 是否显示每页条数的选择器，默认 true
    showSizePicker: true,
    ...(props.pagination as PaginationProps),
    page,
    onUpdatePage(page: number) {
      props.pagination.onUpdatePage?.(page)
      paginationRef.value.page = page
      refresh()
    },
    onUpdatePageSize(pageSize: number) {
      props.pagination.onUpdatePageSize?.(pageSize)
      paginationRef.value.pageSize = pageSize
      reload()
    },
  }
})
function rowKey(row: any) {
  if (props.rowKey) {
    return props.rowKey(row)
  }
  // 默认使用 id
  return row.id
}
const requestParams = computed(() => {
  const { pageSize, page } = paginationRef.value
  return {
    pageSize,
    page,
  }
})
/**
 * 请求数据
 * @param params 请求参数
 */
async function request(params?: Record<string, any>) {
  loading.value = true
  try {
    const res: any = await props.onRequest?.({ ...requestParams.value, ...params })
    if (isArray(res)) {
      data.value = res
    }
    else {
      data.value = res[props.dataField]
      paginationRef.value.itemCount = res[props.totalField]
    }
  }
  finally {
    loading.value = false
  }
}
/**
 * 刷新表格数据
 */
function refresh() {
  request()
}
/**
 * 重置页码，根据条件加载表格数据
 * @param params 请求参数
 */
function reload(params?: Record<string, any>) {
  paginationRef.value.page = 1
  request(params)
}
/**
 * 获取被选中的行的 key
 */
function getCheckedRowKeys(): Array<number | string> {
  return checkedRowKeys.value
}
/**
 * 获取是否显示 loading 状态
 */
function getLoading(): boolean {
  return loading.value
}
/**
 * 获取分页数据
 */
function getPagination(): boolean | PaginationProps {
  return pagination.value
}
onMounted(() => {
  // 立即请求数据
  if (props.immediate) {
    refresh()
  }
})
defineExpose({
  getCheckedRowKeys,
  getLoading,
  getPagination,
  refresh,
  reload,
})
</script>

<template>
  <div>
    <!-- 头部插槽 -->
    <NFlex
      v-if="slots.header"
      align="center"
      class="mb-12px"
    >
      <slot name="header" />
    </NFlex>
    <NDataTable
      v-bind="tableProps"
      v-model:checked-row-keys="checkedRowKeys"
      :data
      :columns
      :loading
      :pagination
      remote
      :row-key="rowKey"
    />
  </div>
</template>
