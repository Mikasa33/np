import { createComponent } from '@vitepress/utils/component'
import BasicDemo from './Basic.vue'
import CheckedRowDemo from './CheckedRow.vue'
import PaginationDemo from './Pagination.vue'
import DisabledPaginationDemo from './DisabledPagination.vue'
import ComponentDemo from './Component.vue'
import SlotColumnDemo from './SlotColumn.vue'
import SlotHeaderDemo from './SlotHeader.vue'

export const Basic = createComponent(BasicDemo)
export const CheckedRow = createComponent(CheckedRowDemo)
export const Pagination = createComponent(PaginationDemo)
export const DisabledPagination = createComponent(DisabledPaginationDemo)
export const Component = createComponent(ComponentDemo)
export const SlotColumn = createComponent(SlotColumnDemo)
export const SlotHeader = createComponent(SlotHeaderDemo)
