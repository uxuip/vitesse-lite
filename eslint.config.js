import { vueConfig } from '@uxuip/eslint-config'

export default vueConfig(
  {
    unocss: true,
    formatters: true,
  },
  {
    rules: {
      'unocss/order-attributify': 'off',
    },
  },
)
