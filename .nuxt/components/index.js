export const AdminNavBar = () => import('../../components/AdminNavBar.vue' /* webpackChunkName: "components/admin-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const AnimatedValue = () => import('../../components/AnimatedValue.vue' /* webpackChunkName: "components/animated-value" */).then(c => wrapFunctional(c.default || c))
export const CertificationBadge = () => import('../../components/CertificationBadge.vue' /* webpackChunkName: "components/certification-badge" */).then(c => wrapFunctional(c.default || c))
export const ChartPie = () => import('../../components/ChartPie.vue' /* webpackChunkName: "components/chart-pie" */).then(c => wrapFunctional(c.default || c))
export const CustomSelect = () => import('../../components/CustomSelect.vue' /* webpackChunkName: "components/custom-select" */).then(c => wrapFunctional(c.default || c))
export const DTDetailsModal = () => import('../../components/DTDetailsModal.vue' /* webpackChunkName: "components/d-t-details-modal" */).then(c => wrapFunctional(c.default || c))
export const FlowDiagramCanvas = () => import('../../components/FlowDiagramCanvas.vue' /* webpackChunkName: "components/flow-diagram-canvas" */).then(c => wrapFunctional(c.default || c))
export const FlowLane = () => import('../../components/FlowLane.vue' /* webpackChunkName: "components/flow-lane" */).then(c => wrapFunctional(c.default || c))
export const Forgot = () => import('../../components/Forgot.vue' /* webpackChunkName: "components/forgot" */).then(c => wrapFunctional(c.default || c))
export const GridNetworkMap = () => import('../../components/GridNetworkMap.vue' /* webpackChunkName: "components/grid-network-map" */).then(c => wrapFunctional(c.default || c))
export const LoadingOverlay = () => import('../../components/LoadingOverlay.vue' /* webpackChunkName: "components/loading-overlay" */).then(c => wrapFunctional(c.default || c))
export const Login = () => import('../../components/Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const MeterCommunication = () => import('../../components/MeterCommunication.vue' /* webpackChunkName: "components/meter-communication" */).then(c => wrapFunctional(c.default || c))
export const NavBar = () => import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const PreLoader = () => import('../../components/PreLoader.vue' /* webpackChunkName: "components/pre-loader" */).then(c => wrapFunctional(c.default || c))
export const SignUp = () => import('../../components/SignUp.vue' /* webpackChunkName: "components/sign-up" */).then(c => wrapFunctional(c.default || c))
export const ThemeToggle = () => import('../../components/ThemeToggle.vue' /* webpackChunkName: "components/theme-toggle" */).then(c => wrapFunctional(c.default || c))
export const SideNav = () => import('../../components/SideNav/SideNav.vue' /* webpackChunkName: "components/side-nav" */).then(c => wrapFunctional(c.default || c))
export const UiBarChart = () => import('../../components/ui/BarChart.vue' /* webpackChunkName: "components/ui-bar-chart" */).then(c => wrapFunctional(c.default || c))
export const UiDataTable = () => import('../../components/ui/DataTable.vue' /* webpackChunkName: "components/ui-data-table" */).then(c => wrapFunctional(c.default || c))
export const UiDonut = () => import('../../components/ui/Donut.vue' /* webpackChunkName: "components/ui-donut" */).then(c => wrapFunctional(c.default || c))
export const UiFilterDate = () => import('../../components/ui/FilterDate.vue' /* webpackChunkName: "components/ui-filter-date" */).then(c => wrapFunctional(c.default || c))
export const UiFilterSelect = () => import('../../components/ui/FilterSelect.vue' /* webpackChunkName: "components/ui-filter-select" */).then(c => wrapFunctional(c.default || c))
export const UiGauge = () => import('../../components/ui/Gauge.vue' /* webpackChunkName: "components/ui-gauge" */).then(c => wrapFunctional(c.default || c))
export const UiIcon = () => import('../../components/ui/Icon.vue' /* webpackChunkName: "components/ui-icon" */).then(c => wrapFunctional(c.default || c))
export const UiLineChart = () => import('../../components/ui/LineChart.vue' /* webpackChunkName: "components/ui-line-chart" */).then(c => wrapFunctional(c.default || c))
export const UiPageHeader = () => import('../../components/ui/PageHeader.vue' /* webpackChunkName: "components/ui-page-header" */).then(c => wrapFunctional(c.default || c))
export const UiSkeletonPage = () => import('../../components/ui/SkeletonPage.vue' /* webpackChunkName: "components/ui-skeleton-page" */).then(c => wrapFunctional(c.default || c))

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
