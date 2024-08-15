import type { MaybeRefOrGetter, Ref } from 'vue'
import { computed, onMounted, toValue } from 'vue'
import type { NpFormItemProps, NpFormProps } from '../types/props'

/**
 * 表单数据
 * @param props 表单属性
 * @param value 表单数据
 * @param items 表单项
 */
export function useValue(props: NpFormProps, value: Ref<any>, items: MaybeRefOrGetter<NpFormItemProps[]>) {
  // 默认数据
  const defaultValues = computed<any>(() => {
    const defaultValues = props.defaultValues ?? {}
    const values: Record<string, any> = {}
    for (const item of toValue(items)) {
      // item.defaultValue > props.defaultValues
      values[item.path!] = item.defaultValue ?? defaultValues[item.path!] ?? null
    }
    return values
  })
  /**
   * 初始化表单数据
   */
  function init() {
    for (const item of toValue(items)) {
      if (!value.value[item.path!]) {
        value.value[item.path!] = defaultValues.value[item.path!] ?? null
      }
    }
  }
  /**
   * 重置表单值
   */
  function reset() {
    for (const item of toValue(items)) {
      value.value[item.path!] = defaultValues.value[item.path!] ?? null
    }
  }
  onMounted(() => {
    // 初始化表单数据
    init()
  })
  return {
    defaultValues,
    value,
    reset,
  }
}
