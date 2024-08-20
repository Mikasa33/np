<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import { viewTimeProps } from './props'
import type { ViewTimeSlots } from './types'

const props = defineProps(viewTimeProps)
defineSlots<ViewTimeSlots>()

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
