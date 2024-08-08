<script setup lang="ts">
import type { NpFormProps } from '@rezero/np'
import { NpForm } from '@rezero/np'
import { NInputNumber } from 'naive-ui'
import { reactive, ref } from 'vue'

const formModel = ref({})
const formProps = reactive<NpFormProps>({
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
      // 优先级低于插槽
      component: 'NSelect',
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
