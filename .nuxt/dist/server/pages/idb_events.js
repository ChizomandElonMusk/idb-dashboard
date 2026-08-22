exports.ids = [17,2,10,12];
exports.modules = {

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ThemeToggle.vue?vue&type=template&id=2e254ded
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', {
    scopedSlots: _vm._u([{
      key: "placeholder",
      fn: function () {
        return [_c('button', {
          staticClass: "theme-toggle-btn",
          attrs: {
            "type": "button",
            "disabled": ""
          }
        }, [_c('i', {
          staticClass: "material-icons"
        }, [_vm._v("dark_mode")]), _vm._v(" "), _c('span', [_vm._v("Dark mode")])])];
      },
      proxy: true
    }])
  }, [_c('button', {
    staticClass: "theme-toggle-btn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.$theme.toggle();
      }
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v(_vm._s(_vm.$theme.isDark ? 'light_mode' : 'dark_mode'))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$theme.isDark ? 'Light mode' : 'Dark mode'))])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ThemeToggle.vue?vue&type=template&id=2e254ded

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ThemeToggle.vue?vue&type=script&lang=js
/* harmony default export */ var ThemeTogglevue_type_script_lang_js = ({
  name: 'ThemeToggle'
});
// CONCATENATED MODULE: ./components/ThemeToggle.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ThemeTogglevue_type_script_lang_js = (ThemeTogglevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ThemeToggle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ThemeTogglevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "37bdce66"
  
)

/* harmony default export */ var ThemeToggle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("75e2181a", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2f542b3b", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideNav/SideNav.vue?vue&type=template&id=2c494de8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<ul id=\"slide-out\" class=\"sidenav sidenav-fixed z-depth-0\" data-v-2c494de8>", "</ul>", [_vm._ssrNode("<li class=\"logo-container center-align\" data-v-2c494de8><img" + _vm._ssrAttr("src", __webpack_require__(43)) + " alt=\"Logo\" class=\"responsive-img\" style=\"width: 60px; margin-top: 20px;\" data-v-2c494de8></li> "), _vm._ssrNode("<li class=\"theme-toggle-container\" data-v-2c494de8>", "</li>", [_c('ThemeToggle')], 1), _vm._ssrNode(" "), _vm._l(_vm.menuItems, function (item) {
    return _vm._ssrNode("<li" + _vm._ssrClass(null, {
      active: _vm.isActive(item)
    }) + " data-v-2c494de8>", "</li>", [_c('nuxt-link', {
      class: {
        'red-text text-darken-2': _vm.isActive(item)
      },
      attrs: {
        "to": item.url
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v(_vm._s(item.icon))]), _vm._v(" "), _c('b', {
      staticStyle: {
        "font-weight": "500",
        "font-size": "10px"
      }
    }, [_vm._v("\n                    " + _vm._s(item.title) + "\n                ")])])], 1);
  }), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-2c494de8>", "</li>", [_c('nuxt-link', {
    staticClass: "red-text",
    attrs: {
      "to": "/"
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("lock")]), _vm._v(" "), _c('b', {
    staticStyle: {
      "font-weight": "500",
      "font-size": "10px"
    }
  }, [_vm._v("\n                    Logout\n                ")])])], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SideNav/SideNav.vue?vue&type=template&id=2c494de8&scoped=true

// EXTERNAL MODULE: ./components/ThemeToggle.vue + 4 modules
var ThemeToggle = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideNav/SideNav.vue?vue&type=script&lang=js

/* harmony default export */ var SideNavvue_type_script_lang_js = ({
  name: 'SideNav',
  components: {
    ThemeToggle: ThemeToggle["default"]
  },
  data() {
    return {
      menuItems: [
      // { title: 'End-To-End Energy Dashboard', icon: 'dashboard' },
      // { title: 'Energy Flow Diagram', icon: 'dashboard' },
      {
        title: 'Control Center Dashboard',
        icon: 'dashboard',
        url: '/control_center_dashboard'
      }, {
        title: 'Availability Summary',
        icon: 'dashboard',
        url: '/availability_summary'
      }, {
        title: 'DT Availability',
        icon: 'dashboard',
        url: '/dt_availability'
      }, {
        title: 'MYTO Dashboard',
        icon: 'dashboard',
        url: '/myto_dashboard'
      }, {
        title: 'IDB Dashboard',
        icon: 'dashboard',
        url: '/idb_dashboard'
      }, {
        title: 'IDB Events',
        icon: 'dashboard',
        url: '/idb_events'
      }]
    };
  },
  methods: {
    isActive(item) {
      return this.$route.path === item.url;
    }
  }
});
// CONCATENATED MODULE: ./components/SideNav/SideNav.vue?vue&type=script&lang=js
 /* harmony default export */ var SideNav_SideNavvue_type_script_lang_js = (SideNavvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SideNav/SideNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SideNav_SideNavvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2c494de8",
  "0f3f648e"
  
)

/* harmony default export */ var SideNav = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ThemeToggle: __webpack_require__(39).default})


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.d2f3c61.png";

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return lastNMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return monthLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lastNDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dayLabel; });
/* unused harmony export getHealth */
/* unused harmony export getOracleStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getControlCenter; });
/* unused harmony export getEnergyFlow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAvailabilitySummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDtAvailability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFeederAvailability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getMonthlyEnergy; });
/* unused harmony export getMonthlyEnergyQuality */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIdbDashboard; });
/* unused harmony export getVendingCollection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMytoDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getIdbEvents; });
// Client for the streaming-dashboard-api Control Center backend.
// See static/control_center_api_doc.md for endpoint/field documentation.

const BASE_URL = "http://192.168.80.108:8090/api/v1";
function buildQuery(params = {}) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      search.append(key, value);
    }
  });
  const qs = search.toString();
  return qs ? `?${qs}` : '';
}
const REQUEST_TIMEOUT_MS = 15000;
async function get(path, params) {
  const url = `${BASE_URL}${path}${buildQuery(params)}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  console.log(`[controlCenterApi] GET ${url}`);
  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    if (!response.ok) {
      throw new Error(`Control Center API error: ${response.status} ${response.statusText} (${path})`);
    }
    const data = await response.json();
    console.log(`[controlCenterApi] response for ${path}`, data);
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      const timeoutErr = new Error(`Request to ${path} timed out after ${REQUEST_TIMEOUT_MS / 1000}s — is ${BASE_URL} reachable? (VPN connected?)`);
      console.error(`[controlCenterApi] ${timeoutErr.message}`);
      throw timeoutErr;
    }
    console.error(`[controlCenterApi] request failed for ${path}`, err);
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}

// Reads the first defined value found at any of the given dot-paths.
// The API doc doesn't always show a full example JSON shape for every
// section, so callers probe a few plausible field names and fall back
// gracefully instead of crashing or silently showing a fabricated number.
function pick(obj, paths, fallback = undefined) {
  for (const path of paths) {
    const value = path.split('.').reduce((acc, key) => acc == null ? undefined : acc[key], obj);
    if (value !== undefined && value !== null) return value;
  }
  return fallback;
}
function formatNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n.toLocaleString() : '—';
}

// Builds N ascending 'YYYY-MM-01' month strings ending at baseMonth (or today).
function lastNMonths(baseMonthStr, n) {
  const base = baseMonthStr ? new Date(baseMonthStr) : new Date();
  const months = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(base.getFullYear(), base.getMonth() - i, 1);
    months.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-01`);
  }
  return months;
}
function monthLabel(monthStr) {
  const d = new Date(monthStr);
  return Number.isNaN(d.getTime()) ? monthStr : d.toLocaleString('en-US', {
    month: 'short'
  });
}

// Builds N ascending 'YYYY-MM-DD' date strings ending at baseDate (or today).
function lastNDays(baseDateStr, n) {
  const base = baseDateStr ? new Date(baseDateStr) : new Date();
  const days = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() - i);
    days.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`);
  }
  return days;
}
function dayLabel(dateStr) {
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? dateStr : d.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}
function getHealth() {
  return get('/health');
}
function getOracleStatus() {
  return get('/oracle/status');
}
function getOverview() {
  return get('/dashboard/overview');
}
function getControlCenter({
  month,
  date,
  limit
} = {}) {
  return get('/dashboard/control-center', {
    month,
    date,
    limit
  });
}
function getEnergyFlow({
  month,
  limit
} = {}) {
  return get('/dashboard/energy-flow', {
    month,
    limit
  });
}
function getAvailabilitySummary() {
  return get('/dashboard/availability-summary');
}
function getDtAvailability({
  date,
  limit
} = {}) {
  return get('/dashboard/dt-availability', {
    date,
    limit
  });
}
function getFeederAvailability({
  date,
  limit
} = {}) {
  return get('/dashboard/feeder-availability', {
    date,
    limit
  });
}
function getMonthlyEnergy({
  month,
  limit
} = {}) {
  return get('/dashboard/monthly-energy', {
    month,
    limit
  });
}
function getMonthlyEnergyQuality({
  month,
  limit
} = {}) {
  return get('/dashboard/monthly-energy-quality', {
    month,
    limit
  });
}
function getIdbDashboard({
  month,
  quality_limit
} = {}) {
  return get('/dashboard/idb', {
    month,
    quality_limit
  });
}
function getVendingCollection({
  limit
} = {}) {
  return get('/dashboard/vending-collection', {
    limit
  });
}
function getMytoDashboard({
  month,
  date,
  limit
} = {}) {
  return get('/dashboard/myto', {
    month,
    date,
    limit
  });
}
function getIdbEvents({
  month,
  date,
  limit
} = {}) {
  return get('/dashboard/idb-events', {
    month,
    date,
    limit
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)["URLSearchParams"]))

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_2c494de8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_2c494de8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_2c494de8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_2c494de8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_2c494de8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dashboard-wrapper[data-v-2c494de8]{min-height:100vh}.dashboard-wrapper[data-v-2c494de8],.sidenav[data-v-2c494de8]{background-color:var(--bg-sidenav)}.sidenav[data-v-2c494de8]{border-right:1px solid var(--border-color);width:260px}.theme-toggle-container[data-v-2c494de8]{padding:0 16px}.main-content[data-v-2c494de8]{padding-left:280px;padding-right:20px;padding-top:20px}.stats-card[data-v-2c494de8]{border-radius:12px;position:relative}.icon-circle[data-v-2c494de8]{align-items:center;border-radius:50%;display:flex;height:50px;justify-content:center;margin-right:15px;width:50px}.stats-text .value[data-v-2c494de8]{font-size:24px;font-weight:700}.stats-text p[data-v-2c494de8]{font-size:12px;margin:0}.badge[data-v-2c494de8]{border-radius:4px!important;position:absolute;right:15px;top:15px}.mini-chart-card[data-v-2c494de8]{border-radius:12px;margin-bottom:10px}.tiny-text[data-v-2c494de8]{font-size:11px;margin-bottom:5px}.border-right[data-v-2c494de8]{border-right:1px solid var(--border-color)}.tabs[data-v-2c494de8]{background:transparent;border-bottom:1px solid var(--border-strong);margin-bottom:20px}.tabs .tab a[data-v-2c494de8]{color:var(--text-muted);text-transform:none}.tabs .tab a.active[data-v-2c494de8]{border-bottom:2px solid #e91e63}@media only screen and (max-width:992px){.main-content[data-v-2c494de8]{padding-left:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CertificationBadge_vue_vue_type_style_index_0_id_03e771c5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CertificationBadge_vue_vue_type_style_index_0_id_03e771c5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CertificationBadge_vue_vue_type_style_index_0_id_03e771c5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CertificationBadge_vue_vue_type_style_index_0_id_03e771c5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CertificationBadge_vue_vue_type_style_index_0_id_03e771c5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cert-badge[data-v-03e771c5]{align-items:center;background:var(--bg-card-alt);border:1px solid var(--border-strong);border-radius:999px;color:var(--text-secondary);display:inline-flex;font-size:11px;font-weight:600;gap:4px;line-height:1.6;padding:2px 10px;white-space:nowrap}.cert-badge__icon[data-v-03e771c5]{font-size:13px;line-height:1}.cert-badge--ready[data-v-03e771c5]{background:rgba(27,138,90,.12);border-color:rgba(27,138,90,.3);color:#1b8a5a}.cert-badge--warning[data-v-03e771c5]{background:rgba(184,121,10,.12);border-color:rgba(184,121,10,.3);color:#b8790a}.cert-badge--pending[data-v-03e771c5]{background:var(--bg-card-alt);border-color:var(--border-strong);color:var(--text-muted)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CertificationBadge.vue?vue&type=template&id=03e771c5&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "cert-badge",
    class: `cert-badge--${_vm.tone}`
  }, [_vm._ssrNode("<i class=\"material-icons cert-badge__icon\" data-v-03e771c5>" + _vm._ssrEscape(_vm._s(_vm.icon)) + "</i>" + _vm._ssrEscape("\n  " + _vm._s(_vm.label) + "\n"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CertificationBadge.vue?vue&type=template&id=03e771c5&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CertificationBadge.vue?vue&type=script&lang=js
const STATUS_MAP = {
  ready: {
    label: 'Ready',
    tone: 'ready',
    icon: 'check_circle'
  },
  requires_validation: {
    label: 'Requires business validation',
    tone: 'warning',
    icon: 'warning'
  },
  pending: {
    label: 'Pending source',
    tone: 'pending',
    icon: 'schedule'
  },
  partial: {
    label: 'Partial',
    tone: 'warning',
    icon: 'info'
  }
};
/* harmony default export */ var CertificationBadgevue_type_script_lang_js = ({
  name: 'CertificationBadge',
  props: {
    status: {
      type: String,
      required: true,
      validator: value => Object.keys(STATUS_MAP).includes(value)
    },
    text: {
      type: String,
      default: null
    }
  },
  computed: {
    label() {
      return this.text || STATUS_MAP[this.status].label;
    },
    tone() {
      return STATUS_MAP[this.status].tone;
    },
    icon() {
      return STATUS_MAP[this.status].icon;
    }
  }
});
// CONCATENATED MODULE: ./components/CertificationBadge.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CertificationBadgevue_type_script_lang_js = (CertificationBadgevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CertificationBadge.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CertificationBadgevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "03e771c5",
  "9506702e"
  
)

/* harmony default export */ var CertificationBadge = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7ea25418", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_events_vue_vue_type_style_index_0_id_2a0068f9_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_events_vue_vue_type_style_index_0_id_2a0068f9_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_events_vue_vue_type_style_index_0_id_2a0068f9_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_events_vue_vue_type_style_index_0_id_2a0068f9_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_events_vue_vue_type_style_index_0_id_2a0068f9_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dashboard-wrapper[data-v-2a0068f9]{background-color:var(--bg-page);min-height:100vh}.main-content[data-v-2a0068f9]{padding-left:280px;padding-right:20px;padding-top:20px}.avail-title[data-v-2a0068f9]{color:var(--text-primary);font-weight:600;margin:0}.tabs[data-v-2a0068f9]{background:transparent;border-bottom:1px solid var(--border-strong);margin-bottom:20px}.tabs .tab a[data-v-2a0068f9]{align-items:center;color:var(--text-muted);display:flex;font-size:14px;gap:6px;text-transform:none}.tabs .tab a .tab-icon[data-v-2a0068f9]{font-size:16px!important}.tabs .tab a.active.dashboard-tab[data-v-2a0068f9]{border-bottom:2px solid #c0392b;color:#c0392b}.tabs .tab a.active.event-tab[data-v-2a0068f9]{border-bottom:2px solid #e8941a;color:#e8941a}.tabs .tab a.active.vending-tab[data-v-2a0068f9]{border-bottom:2px solid #c0392b;color:#c0392b}.tabs .indicator[data-v-2a0068f9]{display:none}.pending-banner[data-v-2a0068f9]{align-items:center;border-radius:12px;display:flex;flex-direction:column;gap:8px;padding:40px 20px;text-align:center}.pending-note[data-v-2a0068f9]{color:var(--text-secondary);font-size:15px;font-weight:600;margin:4px 0 0}.pending-note-small[data-v-2a0068f9]{color:var(--text-muted);font-size:12px;margin:0;max-width:480px}@media only screen and (max-width:992px){.main-content[data-v-2a0068f9]{padding-left:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/idb_events.vue?vue&type=template&id=2a0068f9&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dashboard-wrapper"
  }, [_c('SideNav'), _vm._ssrNode(" "), _vm._ssrNode("<main class=\"main-content\" data-v-2a0068f9>", "</main>", [_vm._ssrNode("<div class=\"row\" style=\"margin-bottom: 0;\" data-v-2a0068f9><div class=\"col s12\" data-v-2a0068f9><h5 class=\"avail-title\" data-v-2a0068f9>IDB Events</h5> <ul class=\"tabs\" data-v-2a0068f9><li class=\"tab\" data-v-2a0068f9><a href=\"#events-dashboard\" class=\"active tab-link dashboard-tab\" data-v-2a0068f9><i class=\"material-icons tiny tab-icon\" data-v-2a0068f9>speed</i> Dashboard\n                        </a></li> <li class=\"tab\" data-v-2a0068f9><a href=\"#event-table\" class=\"tab-link event-tab\" data-v-2a0068f9><i class=\"material-icons tiny tab-icon\" data-v-2a0068f9>apps</i> Event Table\n                        </a></li> <li class=\"tab\" data-v-2a0068f9><a href=\"#vending-table\" class=\"tab-link vending-tab\" data-v-2a0068f9><i class=\"material-icons tiny tab-icon\" data-v-2a0068f9>apps</i> Vending Vs Consumption Table\n                        </a></li></ul></div></div> "), _vm._ssrNode("<div id=\"events-dashboard\" data-v-2a0068f9>", "</div>", [_vm._ssrNode("<div class=\"card-panel pending-banner\" data-v-2a0068f9>", "</div>", [_c('CertificationBadge', {
    attrs: {
      "status": "partial"
    }
  }), _vm._ssrNode(" <p class=\"pending-note\" data-v-2a0068f9>Events data pending source onboarding</p> <p class=\"pending-note-small\" data-v-2a0068f9>Real event/vending data requires meter logs, event logs, downtime, and trip-off records that are not yet connected.</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"event-table\" data-v-2a0068f9>", "</div>", [_vm._ssrNode("<div class=\"card-panel pending-banner\" data-v-2a0068f9>", "</div>", [_c('CertificationBadge', {
    attrs: {
      "status": "partial"
    }
  }), _vm._ssrNode(" <p class=\"pending-note\" data-v-2a0068f9>Events data pending source onboarding</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"vending-table\" data-v-2a0068f9>", "</div>", [_vm._ssrNode("<div class=\"card-panel pending-banner\" data-v-2a0068f9>", "</div>", [_c('CertificationBadge', {
    attrs: {
      "status": "pending"
    }
  }), _vm._ssrNode(" <p class=\"pending-note\" data-v-2a0068f9>Vending vs consumption data pending source onboarding</p>")], 2)])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/idb_events.vue?vue&type=template&id=2a0068f9&scoped=true

// EXTERNAL MODULE: ./components/SideNav/SideNav.vue + 4 modules
var SideNav = __webpack_require__(42);

// EXTERNAL MODULE: ./js_modules/controlCenterApi.js
var controlCenterApi = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/idb_events.vue?vue&type=script&lang=js

// Live API wiring — see static/control_center_api_doc.md §17 (IDB Events). The endpoint is
// only a placeholder/partial source today, so this page just probes it and keeps the pending
// banners above rather than rendering fabricated charts/tables.

/* harmony default export */ var idb_eventsvue_type_script_lang_js = ({
  components: {
    SideNav: SideNav["default"]
  },
  data() {
    return {
      eventsResponse: null
    };
  },
  methods: {
    async getData() {
      try {
        this.eventsResponse = await controlCenterApi["h" /* getIdbEvents */]();
      } catch (err) {
        console.error('idb events load failed', err);
      }
    }
  },
  async mounted() {
    const el = document.querySelector('.tabs');
    if (el) M.Tabs.init(el, {});
    await this.getData();
  }
});
// CONCATENATED MODULE: ./pages/idb_events.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_idb_eventsvue_type_script_lang_js = (idb_eventsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/idb_events.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_idb_eventsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a0068f9",
  "4d48e185"
  
)

/* harmony default export */ var idb_events = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SideNav: __webpack_require__(42).default,CertificationBadge: __webpack_require__(54).default})


/***/ })

};;
//# sourceMappingURL=idb_events.js.map