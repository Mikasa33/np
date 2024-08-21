import { withInstall } from '../utils'
import _Modal from './Modal.vue'

export const NpModal = withInstall(_Modal)
export default _Modal
export { modalProps } from './props'
export type { ModalProps, ModalSlots } from './types'
