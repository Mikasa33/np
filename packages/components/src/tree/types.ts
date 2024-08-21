import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { TreeOption } from 'naive-ui'
import type { treeProps } from './props'

export type TreeProps = ExtractPublicPropTypes<typeof treeProps>

export interface TreeSlots {
  empty?: () => VNodeChild
  [key: `label-${string}`]: (props: { option: TreeOption, checked: boolean, selected: boolean }) => VNodeChild
}
