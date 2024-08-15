<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { NpFormProps } from '..'
import { NpForm } from '..'

const formValue = ref({
  collapsed: true,
  suffix: true,
})
const formProps1 = reactive<NpFormProps>({
  labelWidth: 100,
  giSpan: 12,
  gridProps: {
    collapsed: computed(() => formValue.value.collapsed) as any,
  },
  items: [
    {
      path: 'input1',
      label: '输入框 1',
      component: 'NInput',
    },
    {
      path: 'input2',
      label: '输入框 2',
      component: 'NInput',
    },
    {
      path: 'input3',
      label: '输入框 3',
      component: 'NInput',
    },
  ],
})
const formProps2 = reactive<NpFormProps>({
  labelWidth: 100,
  giSpan: 12,
  items: [
    {
      path: 'collapsed',
      label: '折叠栅格',
      component: 'NSwitch',
    },
    {
      path: 'suffix',
      label: '打开后缀节点',
      component: 'NSwitch',
    },
  ],
})
</script>

<template>
  <NpForm
    v-bind="formProps2"
    v-model:value="formValue"
  />
  <NpForm v-bind="formProps1">
    <template v-if="formValue.suffix" #gi-suffix="{ overflow }">
      <div class="h-34px flex-y-center justify-end">
        {{ overflow ? '存在溢出' : '不存在溢出' }}
      </div>
    </template>
  </NpForm>
</template>
