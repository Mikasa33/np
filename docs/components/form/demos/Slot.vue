<script setup lang="ts">
import type { NpFormProps } from '@rezero/np'
import { NpForm } from '@rezero/np'
import { NInputNumber } from 'naive-ui'
import { ref } from 'vue'

const formModel = ref({})
const formProps = ref<NpFormProps>({
  labelWidth: 100,
  items: [
    {
      path: 'input',
      label: '输入框',
      component: 'NInput',
    },
    {
      path: 'slot',
      label: '插槽',
    },
  ],
})
</script>

<template>
  <NpForm
    v-bind="formProps"
    v-model:model="formModel"
  >
    <template #item-slot="{ path, model }">
      <NInputNumber v-model:value="model[path]" />
    </template>
  </NpForm>
  <pre>{{ formModel }}</pre>
</template>
