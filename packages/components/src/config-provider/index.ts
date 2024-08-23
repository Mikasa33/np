import { withInstall } from '../utils'
import _ConfigProvider from './ConfigProvider.vue'

export const NpConfigProvider = withInstall(_ConfigProvider)
export default _ConfigProvider
export { configProviderProps } from './props'
export type { ConfigProviderProps } from './types'
export * from './global'
