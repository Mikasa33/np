import type { Component } from 'vue'
import { defineComponent, h } from 'vue'
import { NCard } from 'naive-ui'
import ConfigProvider from './ConfigProvider.vue'

export function Block(component: Component) {
  return defineComponent({
    render() {
      return h(
        ConfigProvider,
        {},
        () => {
          return h(
            NCard,
            { themeOverrides: { borderRadius: '8px' } },
            () => h(component),
          )
        },
      )
    },
  })
}
