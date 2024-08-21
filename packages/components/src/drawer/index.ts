import { withInstall } from '../utils'
import _Drawer from './Drawer.vue'

export const NpDrawer = withInstall(_Drawer)
export default _Drawer
export { drawerProps } from './props'
export type { DrawerProps, DrawerSlots } from './types'
