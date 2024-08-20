<script lang="ts" setup>
import type { SelectProps } from '@mikasa33/np'
import { NpSelect } from '@mikasa33/np'
import type { SelectOption } from 'naive-ui'

const selectProps: SelectProps = {
  immediate: true,
  onRequest: (): Promise<SelectOption[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            label: 'Drive My Car',
            value: 'song1',
          },
          {
            label: 'Norwegian Wood',
            value: 'song2',
          },
          {
            label: 'You Won\'t See',
            value: 'song3',
            disabled: true,
          },
        ])
      }, 1000)
    })
  },
}
</script>

<template>
  <NpSelect v-bind="selectProps" />
</template>
