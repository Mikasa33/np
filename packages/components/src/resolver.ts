import type { ComponentResolver } from 'unplugin-vue-components/types'

function NpResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(N[A-Z]|n-[a-z])/))
        return { name, from: 'naive-ui' }
      else if (name.match(/^Np.+/))
        return { name, from: '@mikasa33/np' }
    },
  }
}

export default NpResolver
