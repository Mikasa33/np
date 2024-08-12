import { createComponent } from '@vitepress/utils/component'
import BasicDemo from './Basic.vue'
import DefaultValueDemo from './DefaultValue.vue'
import GridDemo from './Grid.vue'
import ComponentDemo from './Component.vue'
import SlotItemDemo from './SlotItem.vue'
import CollapseDemo from './Collapse.vue'

export const Basic = createComponent(BasicDemo)
export const DefaultValue = createComponent(DefaultValueDemo)
export const Grid = createComponent(GridDemo)
export const Collapse = createComponent(CollapseDemo)
export const Component = createComponent(ComponentDemo)
export const SlotItem = createComponent(SlotItemDemo)
