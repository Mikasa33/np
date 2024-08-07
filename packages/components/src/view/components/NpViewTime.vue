<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import type { NpViewTimeProps } from '../types/props'

const props = withDefaults(defineProps<NpViewTimeProps>(), {
  format: 'YYYY-MM-DD HH:mm:ss',
})

const view = computed(() => {
  if (!props.value) {
    return null
  }
  return dayjs(props.value).format(props.format)
})
</script>

<template>
  <div>{{ view }}</div>
</template>
