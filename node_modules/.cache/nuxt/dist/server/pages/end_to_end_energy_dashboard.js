exports.ids = [18,1,5,7,12,14];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/end_to_end_energy_dashboard.vue?vue&type=template&id=4bdc17b8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dashboard-wrapper"
  }, [_c('SideNav'), _vm._ssrNode(" "), _vm._ssrNode("<main class=\"main-content\" data-v-4bdc17b8>", "</main>", [_vm._ssrNode("<div class=\"avail-header\" data-v-4bdc17b8><h5 class=\"avail-title\" data-v-4bdc17b8>Overview</h5> <div class=\"avail-filters\" data-v-4bdc17b8><div class=\"filter-input\" data-v-4bdc17b8><span class=\"filter-label\" data-v-4bdc17b8>Date</span> <i class=\"material-icons filter-icon\" data-v-4bdc17b8>calendar_today</i></div> <div class=\"filter-input\" data-v-4bdc17b8><span class=\"filter-label\" data-v-4bdc17b8>Business Unit</span> <i class=\"material-icons filter-icon\" data-v-4bdc17b8>arrow_drop_down</i></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc17b8>", "</div>", _vm._l(_vm.kpis, function (kpi) {
    return _vm._ssrNode("<div class=\"col s12 m4\" data-v-4bdc17b8>", "</div>", [_vm._ssrNode("<div class=\"card-panel kpi-card\" data-v-4bdc17b8>", "</div>", [_vm._ssrNode("<div class=\"kpi-top\" data-v-4bdc17b8>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", kpi.icon) + _vm._ssrAttr("alt", kpi.label) + " class=\"kpi-icon-img\" data-v-4bdc17b8> "), _vm._ssrNode("<div class=\"kpi-info\" data-v-4bdc17b8>", "</div>", [_vm._ssrNode("<p class=\"kpi-value\" data-v-4bdc17b8>", "</p>", [_c('AnimatedValue', {
      attrs: {
        "value": kpi.value
      }
    })], 1), _vm._ssrNode(" <p class=\"kpi-label\" data-v-4bdc17b8>" + _vm._ssrEscape(_vm._s(kpi.label)) + "</p>")], 2)], 2), _vm._ssrNode(" <div class=\"kpi-divider\" data-v-4bdc17b8></div> <div class=\"kpi-footer\" data-v-4bdc17b8><span class=\"kpi-date\" data-v-4bdc17b8>" + _vm._ssrEscape(_vm._s(kpi.date)) + "</span> <span" + _vm._ssrClass("kpi-trend", kpi.up ? 'trend-up' : 'trend-down') + " data-v-4bdc17b8>" + _vm._ssrEscape("\n                            " + _vm._s(kpi.trend) + "\n                            ") + (kpi.customArrow ? "<img" + _vm._ssrAttr("src", kpi.up ? '/mdi_arrow-up-bold.png' : '/mdi_arrow-down-bold.png') + _vm._ssrAttr("alt", kpi.up ? 'up' : 'down') + " class=\"kpi-trend-icon\" data-v-4bdc17b8>" : "<i class=\"material-icons tiny\" data-v-4bdc17b8>" + _vm._ssrEscape(_vm._s(kpi.up ? 'arrow_upward' : 'arrow_downward')) + "</i>") + "</span></div>")], 2)]);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"card-panel grid-network-card\" data-v-4bdc17b8>", "</div>", [_vm._ssrNode("<div class=\"gn-header\" data-v-4bdc17b8><p class=\"gn-title\" data-v-4bdc17b8>Grid Network</p> <div class=\"gn-search\" data-v-4bdc17b8><i class=\"material-icons tiny\" data-v-4bdc17b8>search</i> <input type=\"text\" placeholder=\"Search by DT or Feeder\" data-v-4bdc17b8></div></div> <div class=\"gn-stat-strip\" data-v-4bdc17b8>" + _vm._ssrList(_vm.gnStats, function (s, i) {
    return "<div" + _vm._ssrClass("gn-stat", {
      'border-right': i !== _vm.gnStats.length - 1
    }) + " data-v-4bdc17b8><span class=\"gn-stat-label\" data-v-4bdc17b8>" + _vm._ssrEscape(_vm._s(s.label)) + "</span> <span class=\"gn-stat-value\" data-v-4bdc17b8>" + _vm._ssrEscape(_vm._s(s.value)) + "</span></div>";
  }) + "</div> "), _vm._ssrNode("<div class=\"gn-body\" data-v-4bdc17b8>", "</div>", [_vm._ssrNode("<div class=\"gn-side-panel\" data-v-4bdc17b8><div class=\"gn-count-box\" data-v-4bdc17b8>" + _vm._ssrList(_vm.gnCounts, function (c, i) {
    return "<div" + _vm._ssrClass("gn-count-row", {
      'gn-count-divider': i !== _vm.gnCounts.length - 1
    }) + " data-v-4bdc17b8><span data-v-4bdc17b8>" + _vm._ssrEscape(_vm._s(c.label)) + "</span> <b data-v-4bdc17b8>" + _vm._ssrEscape(_vm._s(c.value)) + "</b></div>";
  }) + "</div> " + _vm._ssrList(_vm.gnStatuses, function (st) {
    return "<div" + _vm._ssrClass("gn-status-box", st.cls) + " data-v-4bdc17b8><div class=\"gn-status-head\" data-v-4bdc17b8><span" + _vm._ssrClass("gn-status-dot", st.dotCls) + " data-v-4bdc17b8></span>" + _vm._ssrEscape("\n                            " + _vm._s(st.label) + "\n                        ") + "</div> <div class=\"gn-status-cols\" data-v-4bdc17b8><div class=\"gn-status-col\" data-v-4bdc17b8><span class=\"gn-status-sub\" data-v-4bdc17b8>DT</span> <b" + _vm._ssrClass(null, st.textCls) + " data-v-4bdc17b8>" + _vm._ssrEscape(_vm._s(st.dt)) + "</b></div> <div class=\"gn-status-col\" data-v-4bdc17b8><span class=\"gn-status-sub\" data-v-4bdc17b8>Feeder</span> <b" + _vm._ssrClass(null, st.textCls) + " data-v-4bdc17b8>" + _vm._ssrEscape(_vm._s(st.feeder)) + "</b></div></div></div>";
  }) + "</div> "), _vm._ssrNode("<div class=\"gn-map\" data-v-4bdc17b8>", "</div>", [_c('GridNetworkMap', {
    attrs: {
      "markers": _vm.mapMarkers,
      "center": _vm.mapCenter,
      "zoom": 14
    },
    on: {
      "marker-click": function ($event) {
        _vm.selectedMarker = $event;
      }
    }
  }), _vm._ssrNode(" <div class=\"gn-map-legend\" data-v-4bdc17b8><span data-v-4bdc17b8><i class=\"marker-dot green\" data-v-4bdc17b8></i> Online</span> <span data-v-4bdc17b8><i class=\"marker-dot red\" data-v-4bdc17b8></i> Offline</span> <span data-v-4bdc17b8><i class=\"marker-dot orange\" data-v-4bdc17b8></i> Inactive</span></div>")], 2)], 2)], 2)], 2), _vm._ssrNode(" "), _c('DTDetailsModal', {
    attrs: {
      "marker": _vm.selectedMarker
    },
    on: {
      "close": function ($event) {
        _vm.selectedMarker = null;
      }
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/end_to_end_energy_dashboard.vue?vue&type=template&id=4bdc17b8&scoped=true

// EXTERNAL MODULE: ./components/SideNav/SideNav.vue + 4 modules
var SideNav = __webpack_require__(47);

// EXTERNAL MODULE: ./components/AnimatedValue.vue + 4 modules
var AnimatedValue = __webpack_require__(50);

// EXTERNAL MODULE: ./components/GridNetworkMap.vue + 4 modules
var GridNetworkMap = __webpack_require__(70);

// EXTERNAL MODULE: ./components/DTDetailsModal.vue + 4 modules
var DTDetailsModal = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/end_to_end_energy_dashboard.vue?vue&type=script&lang=js




// UI-first rebuild to match the Figma "End-To-End Energy Dashboard" (Overview) screen exactly.
// Data below is static mock content taken from the Figma mockup — real API wiring will be
// reintroduced once the backend team ships the matching endpoint shape. The map uses Leaflet +
// OpenStreetMap tiles (no API key required) plotting mock feeder/DT coordinates around Ojodu,
// Lagos — the area referenced in the Figma mockup.

/* harmony default export */ var end_to_end_energy_dashboardvue_type_script_lang_js = ({
  components: {
    SideNav: SideNav["default"],
    AnimatedValue: AnimatedValue["default"],
    GridNetworkMap: GridNetworkMap["default"],
    DTDetailsModal: DTDetailsModal["default"]
  },
  data() {
    return {
      selectedMarker: null,
      kpis: [{
        label: 'Total Energy on Grid (MWh)',
        value: '4,917.66',
        date: 'Jan 2026',
        trend: '+13.6%',
        up: true,
        icon: '/Total Energy on Grid (MWh).svg'
      }, {
        label: 'Total energy on DTs(MWh)',
        value: '2,000',
        date: 'Jan 2026',
        trend: '+3.6%',
        up: true,
        icon: '/Total energy on DTs(MWh).svg',
        customArrow: true
      }, {
        label: 'Total Grid  to DT loss(MWh)',
        value: '1,123',
        date: 'Jan 2026',
        trend: '-13.6%',
        up: false,
        icon: '/Total Grid to DT loss(MWh).svg',
        customArrow: true
      }],
      gnStats: [{
        label: 'TS',
        value: '15'
      }, {
        label: 'Transformer Capacity',
        value: '85'
      }, {
        label: '33KVA Feeders',
        value: '108'
      }, {
        label: 'ISS',
        value: '356'
      }, {
        label: 'Total Transformer',
        value: '16,712'
      }],
      gnCounts: [{
        label: '11KVA Incomer',
        value: '345'
      }, {
        label: '11KVA Outgoing Feeders',
        value: '85'
      }, {
        label: 'DT',
        value: '15'
      }],
      gnStatuses: [{
        label: 'Online',
        cls: 'status-online',
        dotCls: 'green',
        textCls: 'text-green',
        dt: 100,
        feeder: 80
      }, {
        label: 'Offline',
        cls: 'status-offline',
        dotCls: 'red',
        textCls: 'text-red',
        dt: 70,
        feeder: 40
      }, {
        label: 'Inactive',
        cls: 'status-inactive',
        dotCls: 'gray',
        textCls: 'text-gray',
        dt: 10,
        feeder: 20
      }],
      // Mock feeder/DT coordinates scattered around Ojodu, Lagos (the area referenced in
      // the Figma mockup). Real coordinates will replace these once the backend ships them.
      mapCenter: [6.6386, 3.3730],
      mapMarkers: [{
        lat: 6.6440,
        lng: 3.3612,
        status: 'offline',
        label: 'Feeder 33kV-014'
      }, {
        lat: 6.6462,
        lng: 3.3701,
        status: 'inactive',
        label: 'DT-1042'
      }, {
        lat: 6.6321,
        lng: 3.3560,
        status: 'online',
        label: 'Feeder 11kV-027'
      }, {
        lat: 6.6495,
        lng: 3.3822,
        status: 'offline',
        label: 'DT-1108'
      }, {
        lat: 6.6218,
        lng: 3.3499,
        status: 'offline',
        label: 'Feeder 33kV-009'
      }, {
        lat: 6.6355,
        lng: 3.3650,
        status: 'online',
        label: 'DT-1056'
      }, {
        lat: 6.6408,
        lng: 3.3745,
        status: 'inactive',
        label: 'Feeder 11kV-033'
      }, {
        lat: 6.6516,
        lng: 3.3880,
        status: 'offline',
        label: 'DT-1123'
      }, {
        lat: 6.6198,
        lng: 3.3420,
        status: 'online',
        label: 'Feeder 33kV-011'
      }, {
        lat: 6.6289,
        lng: 3.3560,
        status: 'offline',
        label: 'DT-1071'
      }, {
        lat: 6.6372,
        lng: 3.3690,
        status: 'inactive',
        label: 'Feeder 11kV-041'
      }, {
        lat: 6.6444,
        lng: 3.3810,
        status: 'offline',
        label: 'DT-1089'
      }, {
        lat: 6.6140,
        lng: 3.3390,
        status: 'inactive',
        label: 'Feeder 33kV-006'
      }, {
        lat: 6.6252,
        lng: 3.3530,
        status: 'online',
        label: 'DT-1034'
      }, {
        lat: 6.6330,
        lng: 3.3620,
        status: 'offline',
        label: 'Feeder 11kV-018'
      }, {
        lat: 6.6470,
        lng: 3.3900,
        status: 'online',
        label: 'DT-1147'
      }, {
        lat: 6.6170,
        lng: 3.3450,
        status: 'offline',
        label: 'Feeder 33kV-004'
      }, {
        lat: 6.6395,
        lng: 3.3730,
        status: 'inactive',
        label: 'DT-1063'
      }, {
        lat: 6.6540,
        lng: 3.3960,
        status: 'offline',
        label: 'Feeder 11kV-052'
      }, {
        lat: 6.6300,
        lng: 3.3480,
        status: 'online',
        label: 'DT-1097'
      }, {
        lat: 6.6120,
        lng: 3.3350,
        status: 'offline',
        label: 'Feeder 33kV-002'
      }, {
        lat: 6.6420,
        lng: 3.3560,
        status: 'offline',
        label: 'DT-1112'
      }, {
        lat: 6.6270,
        lng: 3.3690,
        status: 'inactive',
        label: 'Feeder 11kV-029'
      }, {
        lat: 6.6480,
        lng: 3.3650,
        status: 'online',
        label: 'DT-1005'
      }, {
        lat: 6.6355,
        lng: 3.3440,
        status: 'offline',
        label: 'Feeder 33kV-013'
      }, {
        lat: 6.6210,
        lng: 3.3620,
        status: 'offline',
        label: 'DT-1131'
      }, {
        lat: 6.6500,
        lng: 3.3760,
        status: 'inactive',
        label: 'Feeder 11kV-047'
      }, {
        lat: 6.6155,
        lng: 3.3560,
        status: 'online',
        label: 'DT-1019'
      }, {
        lat: 6.6430,
        lng: 3.3920,
        status: 'offline',
        label: 'Feeder 33kV-016'
      }, {
        lat: 6.6310,
        lng: 3.3390,
        status: 'offline',
        label: 'DT-1152'
      }, {
        lat: 6.6240,
        lng: 3.3760,
        status: 'online',
        label: 'Feeder 11kV-038'
      }, {
        lat: 6.6460,
        lng: 3.3500,
        status: 'offline',
        label: 'DT-1027'
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/end_to_end_energy_dashboard.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_end_to_end_energy_dashboardvue_type_script_lang_js = (end_to_end_energy_dashboardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/end_to_end_energy_dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(90)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_end_to_end_energy_dashboardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4bdc17b8",
  "3913e43d"
  
)

/* harmony default export */ var end_to_end_energy_dashboard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SideNav: __webpack_require__(47).default,AnimatedValue: __webpack_require__(50).default,GridNetworkMap: __webpack_require__(70).default,DTDetailsModal: __webpack_require__(71).default})


/***/ }),

/***/ 45:
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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7fba223a", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideNav/SideNav.vue?vue&type=template&id=28ee225a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<ul id=\"slide-out\" class=\"sidenav sidenav-fixed z-depth-0\" data-v-28ee225a>", "</ul>", [_vm._ssrNode("<li class=\"logo-container center-align\" data-v-28ee225a><img" + _vm._ssrAttr("src", __webpack_require__(48)) + " alt=\"Logo\" class=\"responsive-img\" style=\"width: 60px; margin-top: 20px;\" data-v-28ee225a></li> "), _vm._ssrNode("<li class=\"theme-toggle-container\" data-v-28ee225a>", "</li>", [_c('ThemeToggle')], 1), _vm._ssrNode(" "), _vm._l(_vm.menuItems, function (item) {
    return _vm._ssrNode("<li" + _vm._ssrClass(null, {
      active: _vm.isActive(item)
    }) + " data-v-28ee225a>", "</li>", [_c('nuxt-link', {
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-28ee225a>", "</li>", [_c('nuxt-link', {
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

// CONCATENATED MODULE: ./components/SideNav/SideNav.vue?vue&type=template&id=28ee225a&scoped=true

// EXTERNAL MODULE: ./components/ThemeToggle.vue + 4 modules
var ThemeToggle = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideNav/SideNav.vue?vue&type=script&lang=js

/* harmony default export */ var SideNavvue_type_script_lang_js = ({
  name: 'SideNav',
  components: {
    ThemeToggle: ThemeToggle["default"]
  },
  data() {
    return {
      menuItems: [{
        title: 'End-To-End Energy Dashboard',
        icon: 'dashboard',
        url: '/end_to_end_energy_dashboard'
      },
      // { title: 'Energy Flow Diagram', icon: 'dashboard', url: '/energy_flow_diagram' },
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
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SideNav_SideNavvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "28ee225a",
  "0f3f648e"
  
)

/* harmony default export */ var SideNav = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ThemeToggle: __webpack_require__(45).default})


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.d2f3c61.png";

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("036588f4", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AnimatedValue.vue?vue&type=template&id=f5293d52&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    class: {
      counting: _vm.counting
    }
  }, [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.display)))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AnimatedValue.vue?vue&type=template&id=f5293d52&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AnimatedValue.vue?vue&type=script&lang=js
/* harmony default export */ var AnimatedValuevue_type_script_lang_js = ({
  name: 'AnimatedValue',
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      display: '',
      counting: false
    };
  },
  watch: {
    value(newVal, oldVal) {
      this.animate(oldVal === undefined ? '' : oldVal.toString(), newVal.toString());
    }
  },
  mounted() {
    this.display = this.value.toString();
  },
  methods: {
    animate(oldStr, newStr) {
      const parseParts = str => {
        const m = str.match(/([^0-9.,-]*)([-\d.,]+)(.*)/);
        if (m) return {
          prefix: m[1],
          num: m[2],
          suffix: m[3]
        };
        return {
          prefix: '',
          num: str,
          suffix: ''
        };
      };
      const formatNumber = n => {
        // determine decimal length from newStr
        const decMatch = newStr.match(/\.(\d+)/);
        const decimals = decMatch ? decMatch[1].length : 0;
        return n.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        });
      };
      const oldParts = parseParts(oldStr);
      const newParts = parseParts(newStr);
      const start = parseFloat(oldParts.num.replace(/,/g, '')) || 0;
      const end = parseFloat(newParts.num.replace(/,/g, '')) || 0;
      const duration = 1000;
      const frameRate = 60;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let frame = 0;
      this.counting = true;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const current = start + (end - start) * progress;
        this.display = oldParts.prefix + formatNumber(current) + newParts.suffix;
        if (frame >= totalFrames) {
          clearInterval(counter);
          this.display = newStr;
          setTimeout(() => {
            this.counting = false;
          }, 300);
        }
      }, 1000 / frameRate);
    }
  }
});
// CONCATENATED MODULE: ./components/AnimatedValue.vue?vue&type=script&lang=js
 /* harmony default export */ var components_AnimatedValuevue_type_script_lang_js = (AnimatedValuevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AnimatedValue.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AnimatedValuevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f5293d52",
  "3e049d5e"
  
)

/* harmony default export */ var AnimatedValue = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_28ee225a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_28ee225a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_28ee225a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_28ee225a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_28ee225a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dashboard-wrapper[data-v-28ee225a]{min-height:100vh}.dashboard-wrapper[data-v-28ee225a],.sidenav[data-v-28ee225a]{background-color:var(--bg-sidenav)}.sidenav[data-v-28ee225a]{border-right:1px solid var(--border-color);width:260px}.sidenav li>a[data-v-28ee225a]{align-items:center;display:flex;height:auto;line-height:1.3;min-height:48px;padding:10px 32px}.sidenav li>a>i.material-icons[data-v-28ee225a]{flex-shrink:0;height:auto;line-height:1.3}.theme-toggle-container[data-v-28ee225a]{padding:0 16px}.main-content[data-v-28ee225a]{padding-left:280px;padding-right:20px;padding-top:20px}.stats-card[data-v-28ee225a]{border-radius:12px;position:relative}.icon-circle[data-v-28ee225a]{align-items:center;border-radius:50%;display:flex;height:50px;justify-content:center;margin-right:15px;width:50px}.stats-text .value[data-v-28ee225a]{font-size:24px;font-weight:700}.stats-text p[data-v-28ee225a]{font-size:12px;margin:0}.badge[data-v-28ee225a]{border-radius:4px!important;position:absolute;right:15px;top:15px}.mini-chart-card[data-v-28ee225a]{border-radius:12px;margin-bottom:10px}.tiny-text[data-v-28ee225a]{font-size:11px;margin-bottom:5px}.border-right[data-v-28ee225a]{border-right:1px solid var(--border-color)}.tabs[data-v-28ee225a]{background:transparent;border-bottom:1px solid var(--border-strong);margin-bottom:20px}.tabs .tab a[data-v-28ee225a]{color:var(--text-muted);text-transform:none}.tabs .tab a.active[data-v-28ee225a]{border-bottom:2px solid #e91e63}@media only screen and (max-width:992px){.main-content[data-v-28ee225a]{padding-left:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedValue_vue_vue_type_style_index_0_id_f5293d52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedValue_vue_vue_type_style_index_0_id_f5293d52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedValue_vue_vue_type_style_index_0_id_f5293d52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedValue_vue_vue_type_style_index_0_id_f5293d52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedValue_vue_vue_type_style_index_0_id_f5293d52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".counting[data-v-f5293d52]{animation:pop-f5293d52 1s ease-out}@keyframes pop-f5293d52{0%{transform:scale(1)}50%{transform:scale(1.4)}to{transform:scale(1)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9903d3d2", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("ad6d53cc", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_67995a5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_67995a5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_67995a5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_67995a5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_67995a5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".grid-map-el[data-v-67995a5e],.grid-map-wrap[data-v-67995a5e]{height:100%;width:100%}.grid-map-el[data-v-67995a5e]{min-height:380px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_38b7be36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_38b7be36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_38b7be36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_38b7be36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_38b7be36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dt-modal-overlay[data-v-38b7be36]{align-items:center;background:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:2000}.dt-modal-card[data-v-38b7be36]{background:var(--bg-card);border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:calc(100vh - 40px);max-width:560px;overflow-y:auto;padding:24px 28px 28px;width:100%}.dt-modal-header[data-v-38b7be36]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:20px}.dt-modal-title[data-v-38b7be36]{color:var(--text-primary);font-size:22px;font-weight:700;line-height:1.25;margin:0}.dt-modal-close[data-v-38b7be36]{background:none;border:none;color:var(--text-muted);cursor:pointer;flex-shrink:0;line-height:0;padding:4px}.dt-modal-close[data-v-38b7be36]:hover{color:var(--text-primary)}.dt-modal-grid[data-v-38b7be36]{display:grid;grid-template-columns:1fr 1fr;grid-gap:12px;gap:12px;margin-bottom:20px}.dt-modal-box[data-v-38b7be36]{background:var(--bg-card-alt);border-radius:10px;display:flex;flex-direction:column;gap:6px;padding:12px 16px}.dt-modal-box-wide[data-v-38b7be36]{background:rgba(66,133,244,.08);grid-column:1/-1}.dt-modal-label[data-v-38b7be36]{color:var(--text-muted);font-size:12px}.dt-modal-value[data-v-38b7be36]{color:var(--text-primary);font-size:16px;font-weight:700}.dt-modal-mono[data-v-38b7be36]{font-family:monospace}.dt-modal-status[data-v-38b7be36]{align-items:center;display:flex;gap:8px}.dt-modal-address[data-v-38b7be36]{align-items:center;display:flex;gap:4px}.dt-modal-address .material-icons[data-v-38b7be36]{color:var(--text-muted);font-size:16px}.dt-modal-accent[data-v-38b7be36]{color:#2fa360}.dt-modal-voltage[data-v-38b7be36]{color:#26d}.dt-modal-band[data-v-38b7be36]{color:#8a3fd1}.dt-modal-loss[data-v-38b7be36]{align-items:center;display:flex;gap:10px}.dt-modal-loss-track[data-v-38b7be36]{background:var(--divider);border-radius:3px;flex:1;height:6px;overflow:hidden}.dt-modal-loss-fill[data-v-38b7be36]{background:#c0392b;border-radius:3px;height:100%}.marker-dot[data-v-38b7be36]{border-radius:50%;display:inline-block;flex-shrink:0;height:10px;width:10px}.marker-dot.green[data-v-38b7be36]{background:#2fa360}.marker-dot.red[data-v-38b7be36]{background:#c0392b}.marker-dot.orange[data-v-38b7be36]{background:#e8a325}.dt-modal-full-btn[data-v-38b7be36]{background:#26e;border:none;border-radius:10px;color:#fff;cursor:pointer;font-size:15px;font-weight:600;padding:14px;width:100%}.dt-modal-full-btn[data-v-38b7be36]:hover{background:#1a52c4}.dt-modal-fade-enter-active[data-v-38b7be36],.dt-modal-fade-leave-active[data-v-38b7be36]{transition:opacity .15s ease}.dt-modal-fade-enter[data-v-38b7be36],.dt-modal-fade-leave-to[data-v-38b7be36]{opacity:0}@media only screen and (max-width:600px){.dt-modal-grid[data-v-38b7be36]{grid-template-columns:1fr}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GridNetworkMap.vue?vue&type=template&id=67995a5e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "grid-map-wrap"
  }, [_vm._ssrNode("<div class=\"grid-map-el\" data-v-67995a5e></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GridNetworkMap.vue?vue&type=template&id=67995a5e&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GridNetworkMap.vue?vue&type=script&lang=js
// Leaflet + OpenStreetMap tiles — no API key required. Leaflet touches `window`/`document`
// at import time, so it must only ever be loaded on the client, hence the dynamic import
// inside mounted() rather than a top-level `import`.
/* harmony default export */ var GridNetworkMapvue_type_script_lang_js = ({
  name: 'GridNetworkMap',
  props: {
    markers: {
      type: Array,
      default: () => []
    },
    center: {
      type: Array,
      default: () => [6.6386, 3.3730]
    },
    zoom: {
      type: Number,
      default: 14
    }
  },
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.initMap();
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  },
  methods: {
    async initMap() {
      const L = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 44, 7));
      this.map = L.map(this.$refs.mapEl, {
        scrollWheelZoom: false
      }).setView(this.center, this.zoom);

      // Esri's free World Street Map tiles — no API key required, unlike Google/Carto.
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, HERE, Garmin, OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(this.map);
      const iconFor = status => L.icon({
        iconUrl: `/${status}.svg`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        popupAnchor: [0, -13]
      });
      const icons = {
        online: iconFor('online'),
        offline: iconFor('offline'),
        inactive: iconFor('inactive')
      };
      this.markers.forEach(m => {
        const marker = L.marker([m.lat, m.lng], {
          icon: icons[m.status] || icons.online
        });
        marker.on('click', () => this.$emit('marker-click', m));
        marker.addTo(this.map);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/GridNetworkMap.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GridNetworkMapvue_type_script_lang_js = (GridNetworkMapvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/GridNetworkMap.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GridNetworkMapvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "67995a5e",
  "0096b0d8"
  
)

/* harmony default export */ var GridNetworkMap = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DTDetailsModal.vue?vue&type=template&id=38b7be36&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "dt-modal-fade"
    }
  }, [_vm.marker ? _c('div', {
    staticClass: "dt-modal-overlay",
    on: {
      "click": function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.$emit('close');
      }
    }
  }, [_c('div', {
    staticClass: "dt-modal-card"
  }, [_c('div', {
    staticClass: "dt-modal-header"
  }, [_c('h4', {
    staticClass: "dt-modal-title"
  }, [_vm._v(_vm._s(_vm.marker.label)), _c('br'), _vm._v("Details")]), _vm._v(" "), _c('button', {
    staticClass: "dt-modal-close",
    attrs: {
      "aria-label": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("close")])])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-grid"
  }, [_c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Status")]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-status"
  }, [_c('i', {
    staticClass: "marker-dot",
    class: _vm.statusDotClass
  }), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value"
  }, [_vm._v(_vm._s(_vm.statusLabel))])])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Type")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value"
  }, [_vm._v(_vm._s(_vm.details.type))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Address")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-address"
  }, [_c('i', {
    staticClass: "material-icons tiny"
  }, [_vm._v("place")]), _vm._v(_vm._s(_vm.details.address) + "\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Total Energy")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-accent"
  }, [_vm._v(_vm._s(_vm.details.totalEnergy))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Voltage")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-voltage"
  }, [_vm._v(_vm._s(_vm.details.voltage))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Loss")]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-loss"
  }, [_c('div', {
    staticClass: "dt-modal-loss-track"
  }, [_c('div', {
    staticClass: "dt-modal-loss-fill",
    style: {
      width: _vm.details.loss + '%'
    }
  })]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value"
  }, [_vm._v(_vm._s(_vm.details.loss) + "%")])])]), _vm._v(" "), _vm.showFullDetails ? [_c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Feeder Band")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-band"
  }, [_vm._v(_vm._s(_vm.details.feederBand))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Availability (Hrs)")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-accent"
  }, [_vm._v(_vm._s(_vm.details.availabilityHrs))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box dt-modal-box-wide"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Last Updated")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value"
  }, [_vm._v(_vm._s(_vm.details.lastUpdated))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box dt-modal-box-wide"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Location Coordinates")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-mono"
  }, [_vm._v(_vm._s(_vm.details.coordinates))])])] : _vm._e()], 2), _vm._v(" "), !_vm.showFullDetails ? _c('button', {
    staticClass: "dt-modal-full-btn",
    on: {
      "click": function ($event) {
        _vm.showFullDetails = true;
      }
    }
  }, [_vm._v("\n                View Full Details\n            ")]) : _vm._e()])]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DTDetailsModal.vue?vue&type=template&id=38b7be36&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DTDetailsModal.vue?vue&type=script&lang=js
// Detail fields (type, address, energy readings, feeder band, etc.) are not yet exposed by the
// backend for individual grid network assets, so they're derived deterministically from the
// marker's own data here. Swap `details` for real API data once that endpoint ships.
/* harmony default export */ var DTDetailsModalvue_type_script_lang_js = ({
  name: 'DTDetailsModal',
  props: {
    marker: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showFullDetails: false
    };
  },
  computed: {
    statusLabel() {
      var _this$marker;
      const status = ((_this$marker = this.marker) === null || _this$marker === void 0 ? void 0 : _this$marker.status) || 'online';
      return status.charAt(0).toUpperCase() + status.slice(1);
    },
    statusDotClass() {
      var _this$marker2;
      const map = {
        online: 'green',
        offline: 'red',
        inactive: 'orange'
      };
      return map[(_this$marker2 = this.marker) === null || _this$marker2 === void 0 ? void 0 : _this$marker2.status] || 'green';
    },
    details() {
      if (!this.marker) return {};
      const seed = this.seedFromString(this.marker.label || '');
      const isFeeder = /feeder/i.test(this.marker.label || '');
      return {
        type: seed % 2 === 0 ? 'Public' : 'Private',
        address: this.marker.address || 'Adeniyi Jones ISS',
        totalEnergy: `${(200 + seed % 400 + seed % 100 / 100).toFixed(2)}KWH`,
        voltage: isFeeder ? seed % 2 === 0 ? '33kV' : '11kV' : '33kV',
        loss: 30 + seed % 60,
        feederBand: `Band ${String.fromCharCode(65 + seed % 4)}`,
        availabilityHrs: 12 + seed % 12,
        lastUpdated: this.formatDate(new Date(Date.now() - seed % 72 * 3600 * 1000)),
        coordinates: `${this.marker.lat.toFixed(4)}, ${this.marker.lng.toFixed(4)}`
      };
    }
  },
  watch: {
    marker() {
      this.showFullDetails = false;
    }
  },
  methods: {
    seedFromString(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = hash * 31 + str.charCodeAt(i) >>> 0;
      }
      return hash;
    },
    formatDate(date) {
      return date.toLocaleString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
    }
  }
});
// CONCATENATED MODULE: ./components/DTDetailsModal.vue?vue&type=script&lang=js
 /* harmony default export */ var components_DTDetailsModalvue_type_script_lang_js = (DTDetailsModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DTDetailsModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DTDetailsModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38b7be36",
  "58f67c0a"
  
)

/* harmony default export */ var DTDetailsModal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("147823b9", content, true, context)
};

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_end_to_end_energy_dashboard_vue_vue_type_style_index_0_id_4bdc17b8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_end_to_end_energy_dashboard_vue_vue_type_style_index_0_id_4bdc17b8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_end_to_end_energy_dashboard_vue_vue_type_style_index_0_id_4bdc17b8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_end_to_end_energy_dashboard_vue_vue_type_style_index_0_id_4bdc17b8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_end_to_end_energy_dashboard_vue_vue_type_style_index_0_id_4bdc17b8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dashboard-wrapper[data-v-4bdc17b8]{background-color:var(--bg-page);min-height:100vh}.main-content[data-v-4bdc17b8]{padding-left:280px;padding-right:20px;padding-top:20px}.avail-header[data-v-4bdc17b8]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.avail-title[data-v-4bdc17b8]{color:var(--text-primary);font-weight:600;margin:0}.avail-filters[data-v-4bdc17b8]{display:flex;gap:12px}.filter-input[data-v-4bdc17b8]{align-items:center;background:var(--bg-card);border:1px solid var(--border-color);border-radius:8px;cursor:pointer;display:flex;gap:8px;min-width:130px;padding:6px 14px}.filter-label[data-v-4bdc17b8]{color:var(--text-secondary);flex:1;font-size:13px}.filter-icon[data-v-4bdc17b8]{color:var(--text-muted);font-size:18px}.kpi-card[data-v-4bdc17b8]{background:var(--bg-card);border-radius:14px;margin-bottom:12px;padding:18px 16px 14px}.kpi-top[data-v-4bdc17b8]{align-items:flex-start;display:flex;gap:12px;margin-bottom:14px}.kpi-icon-img[data-v-4bdc17b8]{flex-shrink:0;height:46px;width:46px}.kpi-info[data-v-4bdc17b8]{flex:1}.kpi-value[data-v-4bdc17b8]{color:var(--text-primary);font-size:24px;font-weight:700;line-height:1.1;margin:0 0 2px}.kpi-label[data-v-4bdc17b8]{color:var(--text-muted);font-size:12px;margin:0}.kpi-divider[data-v-4bdc17b8]{background:var(--divider);height:1px;margin-bottom:10px}.kpi-footer[data-v-4bdc17b8]{align-items:center;display:flex;justify-content:space-between}.kpi-date[data-v-4bdc17b8]{color:var(--text-muted);font-size:12px}.kpi-trend[data-v-4bdc17b8]{align-items:center;border-radius:10px;display:flex;font-size:12px;font-weight:700;gap:2px;padding:2px 8px}.trend-up[data-v-4bdc17b8]{background:#e3f7ea;color:#2fa360}.trend-down[data-v-4bdc17b8]{background:#fdeaeb;color:#c0392b}.kpi-trend .material-icons[data-v-4bdc17b8]{font-size:13px!important}.kpi-trend-icon[data-v-4bdc17b8]{height:14px;width:14px}.grid-network-card[data-v-4bdc17b8]{background:var(--bg-card);border-radius:14px;margin-bottom:16px;padding:20px}.gn-header[data-v-4bdc17b8]{align-items:center;display:flex;justify-content:space-between;margin-bottom:14px}.gn-title[data-v-4bdc17b8]{color:var(--text-primary);font-size:16px;font-weight:600;margin:0}.gn-search[data-v-4bdc17b8]{align-items:center;background:var(--bg-card-alt);border:1px solid var(--border-color);border-radius:8px;color:var(--text-muted);display:flex;gap:6px;min-width:240px;padding:6px 12px}.gn-search input[data-v-4bdc17b8]{background:transparent;border:none;color:var(--text-primary);font-size:13px;height:auto;margin:0;outline:none;width:100%}.gn-stat-strip[data-v-4bdc17b8]{border:1px solid var(--border-color);border-radius:10px;display:flex;margin-bottom:16px;overflow:hidden}.gn-stat[data-v-4bdc17b8]{display:flex;flex:1;flex-direction:column;gap:4px;padding:10px 14px}.gn-stat-label[data-v-4bdc17b8]{color:var(--text-muted);font-size:12px}.gn-stat-value[data-v-4bdc17b8]{color:var(--text-primary);font-size:16px;font-weight:700}.gn-body[data-v-4bdc17b8]{align-items:stretch;display:flex;gap:16px}.gn-side-panel[data-v-4bdc17b8]{display:flex;flex-direction:column;flex-shrink:0;gap:10px;width:230px}.gn-count-box[data-v-4bdc17b8]{border:1px solid var(--border-color);border-radius:10px;padding:4px 14px}.gn-count-row[data-v-4bdc17b8]{align-items:center;color:var(--text-secondary);display:flex;font-size:12px;justify-content:space-between;padding:8px 0}.gn-count-row b[data-v-4bdc17b8]{color:var(--text-primary);font-size:15px}.gn-count-divider[data-v-4bdc17b8]{border-bottom:1px solid var(--divider)}.gn-status-box[data-v-4bdc17b8]{border-radius:10px;padding:10px 14px}.status-online[data-v-4bdc17b8]{background:#e9f8ef}.status-offline[data-v-4bdc17b8]{background:#fdecec}.status-inactive[data-v-4bdc17b8]{background:var(--bg-card-alt)}.gn-status-head[data-v-4bdc17b8]{align-items:center;color:var(--text-secondary);display:flex;font-size:13px;font-weight:600;gap:8px;margin-bottom:8px}.gn-status-cols[data-v-4bdc17b8]{display:flex;justify-content:space-between}.gn-status-col[data-v-4bdc17b8]{display:flex;flex-direction:column;gap:2px}.gn-status-sub[data-v-4bdc17b8]{color:var(--text-muted);font-size:11px}.gn-status-col b[data-v-4bdc17b8]{font-size:18px}.text-green[data-v-4bdc17b8]{color:#2fa360}.text-red[data-v-4bdc17b8]{color:#c0392b}.text-gray[data-v-4bdc17b8]{color:var(--text-secondary)}.marker-dot[data-v-4bdc17b8]{border-radius:50%;display:inline-block;height:10px;width:10px}.marker-dot.green[data-v-4bdc17b8]{background:#2fa360}.marker-dot.red[data-v-4bdc17b8]{background:#c0392b}.marker-dot.orange[data-v-4bdc17b8]{background:#e8a325}.gn-map[data-v-4bdc17b8]{border:1px solid var(--border-color);border-radius:10px;flex:1;min-height:380px;overflow:hidden;position:relative}.gn-map-legend[data-v-4bdc17b8]{background:hsla(0,0%,100%,.9);border-radius:8px;bottom:12px;color:#333;display:flex;font-size:12px;gap:14px;left:12px;padding:6px 12px;position:absolute;z-index:1000}.gn-map-legend span[data-v-4bdc17b8]{align-items:center;display:flex;gap:6px}.border-right[data-v-4bdc17b8]{border-right:1px solid var(--border-color)}@media only screen and (max-width:992px){.main-content[data-v-4bdc17b8]{padding-left:20px}.gn-body[data-v-4bdc17b8]{flex-direction:column}.gn-side-panel[data-v-4bdc17b8]{flex-direction:row;flex-wrap:wrap;width:100%}.gn-count-box[data-v-4bdc17b8],.gn-status-box[data-v-4bdc17b8]{flex:1;min-width:200px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=end_to_end_energy_dashboard.js.map