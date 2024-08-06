<script setup lang="ts">
import type { NpFormProps } from '@rezero/np'
import { NpForm } from '@rezero/np'
import { NDatePicker } from 'naive-ui'
import { defineComponent, h, markRaw, ref } from 'vue'

const CustomComponent = defineComponent({
  setup(props: any) {
    return () => h(NDatePicker, props)
  },
})

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
      path: 'custom',
      label: '自定义组件',
      component: markRaw(CustomComponent),
    },
  ],
})
</script>

<template>
  <NpForm
    v-bind="formProps"
    v-model:model="formModel"
  />
  <pre>{{ formModel }}</pre>
</template>
