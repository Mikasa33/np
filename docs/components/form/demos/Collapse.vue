<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { FormProps } from '@mikasa33/np'
import { NpForm } from '@mikasa33/np'

const formValue = ref({
  collapsed: true,
  suffix: true,
})
const formProps: FormProps = {
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
}
const formProps2: FormProps = reactive({
  giSpan: 12,
  gridProps: computed(() => {
    return {
      collapsed: formValue.value.collapsed,
      xGap: 12,
    }
  }),
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
  labelPlacement: 'left',
  labelWidth: 100,
})
</script>

<template>
  <NpForm
    v-model:value="formValue"
    v-bind="formProps"
  />
  <NpForm v-bind="formProps2">
    <template
      v-if="formValue.suffix"
      #gi-suffix="{ overflow }"
    >
      {{ overflow ? '存在溢出' : '不存在溢出' }}
    </template>
  </NpForm>
</template>
