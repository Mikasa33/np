import { defineComponent } from 'vue'
import { NCard } from 'naive-ui'
import ConfigProvider from './ConfigProvider.vue'

export function Block(Component: any) {
  return defineComponent({
    render() {
      return (
        <ConfigProvider>
          <NCard themeOverrides={{ borderRadius: '8px' }}>
            <Component />
          </NCard>
        </ConfigProvider>
      )
    },
  })
}
