<script setup lang="tsx">
import { NDatePicker, NTimePicker } from 'naive-ui'
import { defineComponent, h, markRaw, reactive, ref } from 'vue'
import type { NpFormProps } from '..'
import { NpForm } from '..'

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
      path: 'custom1',
      label: '自定义组件',
      component: markRaw(defineComponent({
        setup(props: any) {
          // 此处不太方便使用 template 写法，所以使用 jsx 演示
          return () => <NDatePicker {...props} />
        },
      })),
      componentProps: {
        type: 'datetime',
      },
    },
    {
      path: 'custom2',
      label: '渲然函数组件',
      component: (props: any) => h(NTimePicker, props),
      componentProps: {
        isHourDisabled: (hour: number) => hour % 2 === 0,
      },
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
