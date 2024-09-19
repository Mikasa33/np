<script setup lang="ts">
import type { AdvFormInstance, AdvFormProps, AdvFormSlots } from './types'
import { ref } from 'vue'
import { NpDrawer } from '../drawer'
import { NpForm } from '../form'
import { NpModal } from '../modal'
import { pickProps } from '../utils'
import { advFormProps } from './props'

defineOptions({
  name: 'NpAdvForm',
})

const props = defineProps(advFormProps)
const emits = defineEmits<{
  confirm: [value: Record<string, any>]
}>()
defineSlots<AdvFormSlots>()

const show = defineModel<boolean>('show')
const value = defineModel<Record<string, any>>('value', { default: () => ({}) })

const pickedAdvFormProps = pickProps<AdvFormProps>(props, advFormProps)

const formRef = ref()

function handleConfirm() {
  formRef.value.validate((errors: any, { warnings }: any) => {
    if (errors) {
      console.error(errors)
      return
    }
    else if (warnings) {
      console.warn(warnings)
    }
    emits('confirm', value.value)
  })
}

defineExpose<AdvFormInstance>({
  ...formRef.value,
})
</script>

<template>
  <Component
    :is="preset === 'modal' ? NpModal : NpDrawer"
    v-bind="popupProps"
    v-model:show="show"
    :title="title ?? popupProps.title"
    :width="width ?? popupProps.width"
    @confirm="handleConfirm"
  >
    <NpForm
      ref="formRef"
      v-bind="pickedAdvFormProps"
      v-model:value="value"
    />
  </Component>
</template>
