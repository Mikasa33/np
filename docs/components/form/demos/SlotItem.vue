<script setup lang="ts">
import type { FormProps } from '@mikasa33/np'
import { NpForm } from '@mikasa33/np'
import { NButton, NInputNumber } from 'naive-ui'
import { ref } from 'vue'

const formValue = ref({})
const formProps: FormProps = {
  items: [
    {
      path: 'input',
      label: '输入框',
      component: 'NInput',
    },
    {
      path: 'slot',
      label: '插槽 1',
      // 优先级低于插槽
      component: 'NSelect',
    },
    {
      slot: 'slot2',
      label: '插槽 2',
    },
  ],
  labelWidth: 100,
}
</script>

<template>
  <NpForm
    v-bind="formProps"
    v-model:value="formValue"
  >
    <template #item-slot="{ path, value }">
      <NInputNumber v-model:value="value[path]" />
    </template>
    <template #item-slot2>
      <NButton type="primary">
        提交
      </NButton>
    </template>
  </NpForm>
  <pre>{{ formValue }}</pre>
</template>
