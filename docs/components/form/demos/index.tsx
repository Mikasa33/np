import { createComponent } from '@vitepress/utils/component'
import BasicDemo from './Basic.vue'
import DefaultValueDemo from './DefaultValue.vue'
import GridDemo from './Grid.vue'
import SlotDemo from './Slot.vue'
import ComponentDemo from './Component.vue'

export const Basic = createComponent(BasicDemo)

export const DefaultValue = createComponent(DefaultValueDemo)

export const Grid = createComponent(GridDemo)

export const Slot = createComponent(SlotDemo)

export const Component = createComponent(ComponentDemo)
