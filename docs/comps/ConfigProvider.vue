<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { NConfigProvider, NDialogProvider, NLoadingBarProvider, NMessageProvider, NModalProvider, NNotificationProvider, darkTheme, dateZhCN, zhCN } from 'naive-ui'

const { isDark } = useData()
const theme = computed(() => isDark.value ? darkTheme : null)
</script>

<template>
  <NConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme
  >
    <NDialogProvider>
      <NLoadingBarProvider>
        <NMessageProvider>
          <NModalProvider>
            <NNotificationProvider>
              <slot />
            </NNotificationProvider>
          </NModalProvider>
        </NMessageProvider>
      </NLoadingBarProvider>
    </NDialogProvider>
  </NConfigProvider>
</template>
