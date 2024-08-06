import type { Component } from 'vue'
import { defineComponent, h } from 'vue'
import Demo from '../components/ComponentDemo.vue'

export function createComponent(component: Component) {
  return defineComponent({
    render() {
      return h(Demo, () => h(component))
    },
  })
}
