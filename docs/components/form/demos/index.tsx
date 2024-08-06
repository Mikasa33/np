import { defineComponent } from 'vue'
import ComponentDemo from '@vitepress/components/ComponentDemo.vue'
import BasicVue from './basic.vue'

export const Basic = defineComponent({
  render() {
    return (
      <ComponentDemo>
        <BasicVue />
      </ComponentDemo>
    )
  },
})
