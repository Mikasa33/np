import { withInstall } from '../utils'
import _PopupCard from './PopupCard.vue'

export const NpPopupCard = withInstall(_PopupCard)
export default _PopupCard
export { innerPopupCardProps, popupCardProps } from './props'
export type { PopupCardProps, PopupCardSlots } from './types'
