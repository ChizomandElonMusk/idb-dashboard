export const AdminNavBar = () => import('../../components/AdminNavBar.vue' /* webpackChunkName: "components/admin-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const AnimatedValue = () => import('../../components/AnimatedValue.vue' /* webpackChunkName: "components/animated-value" */).then(c => wrapFunctional(c.default || c))
export const CertificationBadge = () => import('../../components/CertificationBadge.vue' /* webpackChunkName: "components/certification-badge" */).then(c => wrapFunctional(c.default || c))
export const ChartPie = () => import('../../components/ChartPie.vue' /* webpackChunkName: "components/chart-pie" */).then(c => wrapFunctional(c.default || c))
export const CustomSelect = () => import('../../components/CustomSelect.vue' /* webpackChunkName: "components/custom-select" */).then(c => wrapFunctional(c.default || c))
export const DTDetailsModal = () => import('../../components/DTDetailsModal.vue' /* webpackChunkName: "components/d-t-details-modal" */).then(c => wrapFunctional(c.default || c))
export const Forgot = () => import('../../components/Forgot.vue' /* webpackChunkName: "components/forgot" */).then(c => wrapFunctional(c.default || c))
export const GridNetworkMap = () => import('../../components/GridNetworkMap.vue' /* webpackChunkName: "components/grid-network-map" */).then(c => wrapFunctional(c.default || c))
export const Login = () => import('../../components/Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const MeterCommunication = () => import('../../components/MeterCommunication.vue' /* webpackChunkName: "components/meter-communication" */).then(c => wrapFunctional(c.default || c))
export const NavBar = () => import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const PreLoader = () => import('../../components/PreLoader.vue' /* webpackChunkName: "components/pre-loader" */).then(c => wrapFunctional(c.default || c))
export const SignUp = () => import('../../components/SignUp.vue' /* webpackChunkName: "components/sign-up" */).then(c => wrapFunctional(c.default || c))
export const ThemeToggle = () => import('../../components/ThemeToggle.vue' /* webpackChunkName: "components/theme-toggle" */).then(c => wrapFunctional(c.default || c))
export const SideNav = () => import('../../components/SideNav/SideNav.vue' /* webpackChunkName: "components/side-nav" */).then(c => wrapFunctional(c.default || c))

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
