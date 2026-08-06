import Vue from 'vue'
import components from './lib'
const options = JSON.parse(`{"namespace":"customSelect"}`)
for (const name in components) {
  Vue.component(name, {
    extends: components[name],
    props: {
      _customSelectOptions: {
        type: Object,
        default: () => ({ ...options })
      }
    }
  })
}
