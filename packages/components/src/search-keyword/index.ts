import { withInstall } from '../utils'
import _SearchKeyword from './SearchKeyword.vue'

export const NpSearchKeyword = withInstall(_SearchKeyword)
export default _SearchKeyword
export { searchKeywordProps } from './props'
export type { SearchKeywordProps, SearchKeywordSlots } from './types'
