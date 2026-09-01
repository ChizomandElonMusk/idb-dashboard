export { default as AdminNavBar } from '../../components/AdminNavBar.vue'
export { default as AnimatedValue } from '../../components/AnimatedValue.vue'
export { default as CertificationBadge } from '../../components/CertificationBadge.vue'
export { default as ChartPie } from '../../components/ChartPie.vue'
export { default as CustomSelect } from '../../components/CustomSelect.vue'
export { default as Forgot } from '../../components/Forgot.vue'
export { default as Login } from '../../components/Login.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as MeterCommunication } from '../../components/MeterCommunication.vue'
export { default as NavBar } from '../../components/NavBar.vue'
export { default as PreLoader } from '../../components/PreLoader.vue'
export { default as SignUp } from '../../components/SignUp.vue'
export { default as ThemeToggle } from '../../components/ThemeToggle.vue'
export { default as SideNav } from '../../components/SideNav/SideNav.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
