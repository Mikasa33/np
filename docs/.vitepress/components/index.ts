import type { App, Component } from 'vue'
import { createComponent } from '../utils/component'

const rawModules = import.meta.glob('@np/**/demos/*.vue', { eager: true, import: 'default', query: '?raw' })
const modules = import.meta.glob('@np/**/demos/*.vue', { eager: true, import: 'default' })

const raws: Record<string, string> = {}
const components: Record<string, Component> = {}

for (const key in modules) {
  const name = key.replace(/.*\/([^/]+)\/demos\/(.*)\.vue/, '$1$2')
    .replace(/^\w/, match => match.toUpperCase())
  raws[name] = rawModules[key] as string
  components[name] = createComponent(modules[key] as Component)
}

function registerComponents(app: App) {
  for (const key in components) {
    app.component(key, components[key])
  }
}

export {
  raws,
  components,
  registerComponents,
}
