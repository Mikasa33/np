<script setup lang="ts">
import type { NpFormProps } from '@rezero/np'
import { NpForm } from '@rezero/np'
import { ref } from 'vue'

const formModel = ref({})
const formOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  v => ({
    label: v,
    value: v,
  }),
)
const formProps = ref<NpFormProps>({
  labelWidth: 100,
  items: [
    {
      path: 'input',
      label: '输入框',
      component: 'NInput',
    },
    {
      path: 'select',
      label: '下拉框',
      component: 'NSelect',
      componentProps: {
        options: formOptions,
      },
    },
    {
      path: 'textarea',
      label: '多行文本框',
      component: 'NInput',
      componentProps: {
        type: 'textarea',
      },
      span: 24,
    },
  ],
})
</script>

<template>
  <NpForm
    v-bind="formProps"
    v-model:model="formModel"
    :gi-span="12"
  />
</template>
