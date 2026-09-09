exports.ids = [19,12,14];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/energy_flow_diagram.vue?vue&type=template&id=366deb61&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dashboard-wrapper"
  }, [_c('SideNav'), _vm._ssrNode(" <main class=\"main-content\" data-v-366deb61><div class=\"avail-header\" data-v-366deb61><h5 class=\"avail-title\" data-v-366deb61>Energy Flow Diagram</h5> <div class=\"flow-path-tabs\" data-v-366deb61>" + _vm._ssrList(_vm.pathOptions, function (opt) {
    return "<button type=\"button\"" + _vm._ssrClass(null, ['flow-tab', {
      active: _vm.selectedPath === opt.key
    }]) + " data-v-366deb61>" + _vm._ssrEscape("\n                    " + _vm._s(opt.label) + "\n                ") + "</button>";
  }) + "</div></div> <div class=\"card-panel flow-panel\" data-v-366deb61><div class=\"flow-path-row\" data-v-366deb61><p class=\"flow-path-desc\" data-v-366deb61>" + _vm._ssrEscape(_vm._s(_vm.activePath.description)) + "</p> " + (_vm.revealedCount > 1 ? "<button type=\"button\" class=\"flow-reset-btn\" data-v-366deb61><i class=\"material-icons tiny\" data-v-366deb61>replay</i> Reset\n                </button>" : "<!---->") + "</div> <div class=\"flow-scroll\" data-v-366deb61><div class=\"flow-canvas\" data-v-366deb61>" + _vm._ssrList(_vm.visibleCards, function (card, i) {
    return "<div" + _vm._ssrClass(null, ['flow-card', {
      'is-frontier': _vm.isFrontier(i)
    }]) + " data-v-366deb61>" + (_vm.isFrontier(i) ? "<span class=\"flow-card-hint\" data-v-366deb61>Click to continue</span>" : i === _vm.visibleCards.length - 1 ? "<span class=\"flow-card-hint complete\" data-v-366deb61>Flow complete</span>" : "<!---->") + " <p class=\"flow-card-title\" data-v-366deb61>" + _vm._ssrEscape(_vm._s(card.title)) + "</p> <div class=\"flow-filters\" data-v-366deb61>" + _vm._ssrList(card.filters, function (f, fi) {
      return "<div class=\"flow-filter\" data-v-366deb61><span data-v-366deb61>" + _vm._ssrEscape(_vm._s(f)) + "</span> <i class=\"material-icons tiny\" data-v-366deb61>arrow_drop_down</i></div>";
    }) + "</div> <p class=\"flow-total-label\" data-v-366deb61>Total Energy</p> <p class=\"flow-total-value\" data-v-366deb61>" + _vm._ssrEscape(_vm._s(card.total)) + "</p> " + (!card.single ? "<div class=\"flow-bar\" data-v-366deb61><div class=\"flow-bar-fill\"" + _vm._ssrStyle(null, {
      width: card.leftPct + '%'
    }, null) + " data-v-366deb61></div> <div class=\"flow-bar-loss\"" + _vm._ssrStyle(null, {
      width: card.rightPct + '%'
    }, null) + " data-v-366deb61></div></div> <div class=\"flow-stats-row\" data-v-366deb61><div class=\"flow-stat\" data-v-366deb61><span class=\"flow-stat-pct\" data-v-366deb61>" + _vm._ssrEscape(_vm._s(card.leftPct) + "% " + _vm._s(card.leftLabel)) + "</span> <span class=\"flow-stat-val\" data-v-366deb61>" + _vm._ssrEscape(_vm._s(card.leftVal)) + "</span></div> <div class=\"flow-stat right\" data-v-366deb61><span class=\"flow-stat-pct loss\" data-v-366deb61>" + _vm._ssrEscape(_vm._s(card.rightPct) + "% " + _vm._s(card.rightLabel)) + "</span> <span class=\"flow-stat-val\" data-v-366deb61>" + _vm._ssrEscape(_vm._s(card.rightVal)) + "</span></div></div>" : "<div class=\"flow-bar single\" data-v-366deb61><div class=\"flow-bar-fill\"" + _vm._ssrStyle(null, {
      width: card.fillPct + '%'
    }, null) + " data-v-366deb61></div></div>") + " <div class=\"flow-divider\" data-v-366deb61></div> " + (card.bottomRows ? _vm._ssrList(card.bottomRows, function (b, bi) {
      return "<div class=\"flow-bottom-row\" data-v-366deb61><span data-v-366deb61>" + _vm._ssrEscape(_vm._s(b.label)) + "</span> <b data-v-366deb61>" + _vm._ssrEscape(_vm._s(b.val)) + "</b></div>";
    }) : "<div class=\"flow-bottom-row\" data-v-366deb61><span data-v-366deb61>" + _vm._ssrEscape(_vm._s(card.bottomLabel)) + "</span> <b data-v-366deb61>" + _vm._ssrEscape(_vm._s(card.bottomVal)) + "</b></div>") + "</div> " + (i < _vm.visibleCards.length - 1 ? "<div class=\"flow-arrow\" data-v-366deb61><i class=\"material-icons\" data-v-366deb61>arrow_forward</i></div>" : "<!---->");
  }) + "</div></div></div></main>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/energy_flow_diagram.vue?vue&type=template&id=366deb61&scoped=true

// EXTERNAL MODULE: ./components/SideNav/SideNav.vue + 4 modules
var SideNav = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/energy_flow_diagram.vue?vue&type=script&lang=js

// The diagram renders one of two real network chains end-to-end, picked via the Path A / Path B
// tabs. Each node only declares its loss % and a starting total lives on the path (TS incoming
// energy); `computeChain` derives every other node's total from the previous node's outgoing
// energy, so the numbers on screen always satisfy outgoing + loss = total and
// nodeN.total === nodeN-1.outgoing — that invariant is what makes the view testable rather than
// a set of disconnected mock numbers.

/* harmony default export */ var energy_flow_diagramvue_type_script_lang_js = ({
  components: {
    SideNav: SideNav["default"]
  },
  data() {
    return {
      selectedPath: 'A',
      revealedCount: 1,
      pathOptions: [{
        key: 'A',
        label: 'Path A'
      }, {
        key: 'B',
        label: 'Path B'
      }],
      pathDefs: {
        A: {
          description: 'TS → Transformer → 33kV Feeder → ISS → Transformer 2 → 11kV Incomer → 11kV Outgoing Feeder → DT → Customer',
          startTotal: 465899,
          nodes: [{
            id: 'a-ts',
            title: 'TS Incoming Energy',
            filters: ['Alausa TS'],
            lossPct: 0,
            bottomLabel: 'Total Feeder',
            bottomVal: 15
          }, {
            id: 'a-transformer',
            title: 'Transformer',
            filters: ['T1'],
            lossPct: 3,
            bottomLabel: 'Total Feeder',
            bottomVal: 85
          }, {
            id: 'a-feeder33',
            title: '33kV Feeder',
            filters: ['All'],
            lossPct: 8,
            bottomLabel: 'Total Feeder',
            bottomVal: 108
          }, {
            id: 'a-iss',
            title: 'ISS',
            filters: ['All'],
            lossPct: 6,
            bottomLabel: 'Total ISS',
            bottomVal: 356
          }, {
            id: 'a-transformer2',
            title: 'Transformer 2',
            filters: ['T2'],
            lossPct: 4,
            bottomLabel: 'Total Transformer',
            bottomVal: 16712
          }, {
            id: 'a-incomer11',
            title: '11kV Incomer',
            filters: ['All'],
            lossPct: 5,
            bottomLabel: 'Total Incomer',
            bottomVal: 345
          }, {
            id: 'a-outfeeder11',
            title: '11kV Outgoing Feeder',
            filters: ['All'],
            lossPct: 4,
            bottomLabel: 'Total Feeder',
            bottomVal: 85
          }, {
            id: 'a-dt',
            title: 'DT',
            filters: ['All DTs', 'Public & Private'],
            lossPct: 15,
            bottomRows: [{
              label: 'Total Public DTs',
              val: 9
            }, {
              label: 'Total Private DTs',
              val: 6
            }]
          }, {
            id: 'a-customer',
            title: 'Customer',
            filters: ['All'],
            customer: true,
            fillPct: 92,
            bottomLabel: 'Total Customers',
            bottomVal: '200,000'
          }]
        },
        B: {
          description: 'TS → Transformer → 33kV Feeder → DT → Customer',
          startTotal: 92450,
          nodes: [{
            id: 'b-ts',
            title: 'TS Incoming Energy',
            filters: ['Ikeja TS'],
            lossPct: 0,
            bottomLabel: 'Total Feeder',
            bottomVal: 4
          }, {
            id: 'b-transformer',
            title: 'Transformer',
            filters: ['T1'],
            lossPct: 3,
            bottomLabel: 'Total Feeder',
            bottomVal: 20
          }, {
            id: 'b-feeder33',
            title: '33kV Feeder',
            filters: ['All'],
            lossPct: 8,
            bottomLabel: 'Total Feeder',
            bottomVal: 26
          }, {
            id: 'b-dt',
            title: 'DT',
            filters: ['All DTs'],
            lossPct: 15,
            bottomRows: [{
              label: 'Total Public DTs',
              val: 3
            }, {
              label: 'Total Private DTs',
              val: 2
            }]
          }, {
            id: 'b-customer',
            title: 'Customer',
            filters: ['All'],
            customer: true,
            fillPct: 90,
            bottomLabel: 'Total Customers',
            bottomVal: '48,500'
          }]
        }
      }
    };
  },
  computed: {
    activePath() {
      return this.pathDefs[this.selectedPath];
    },
    flowCards() {
      return this.computeChain(this.activePath);
    },
    visibleCards() {
      return this.flowCards.slice(0, this.revealedCount);
    }
  },
  watch: {
    selectedPath() {
      this.revealedCount = 1;
    }
  },
  methods: {
    isFrontier(i) {
      return i === this.visibleCards.length - 1 && this.revealedCount < this.flowCards.length;
    },
    selectCard(i) {
      if (this.isFrontier(i)) {
        this.revealedCount++;
      }
    },
    resetFlow() {
      this.revealedCount = 1;
    },
    computeChain(pathDef) {
      let runningTotal = pathDef.startTotal;
      return pathDef.nodes.map(n => {
        if (n.customer) {
          return {
            id: n.id,
            title: n.title,
            filters: n.filters,
            total: this.fmt(runningTotal) + ' MWH',
            single: true,
            fillPct: n.fillPct,
            bottomLabel: n.bottomLabel,
            bottomVal: n.bottomVal
          };
        }
        const total = runningTotal;
        const outgoingPct = 100 - n.lossPct;
        const outgoingVal = total * outgoingPct / 100;
        const lossVal = total - outgoingVal;
        runningTotal = outgoingVal;
        return {
          id: n.id,
          title: n.title,
          filters: n.filters,
          total: this.fmt(total) + ' MWH',
          leftLabel: 'Outgoing',
          rightLabel: 'Loss',
          leftPct: outgoingPct,
          rightPct: n.lossPct,
          leftVal: this.fmt(outgoingVal) + ' MWH',
          rightVal: this.fmt(lossVal) + ' MWH',
          bottomLabel: n.bottomLabel,
          bottomVal: n.bottomVal,
          bottomRows: n.bottomRows
        };
      });
    },
    fmt(n) {
      return Number(n).toLocaleString('en-US', {
        maximumFractionDigits: 2
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/energy_flow_diagram.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_energy_flow_diagramvue_type_script_lang_js = (energy_flow_diagramvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/energy_flow_diagram.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_energy_flow_diagramvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "366deb61",
  "1fc1aef5"
  
)

/* harmony default export */ var energy_flow_diagram = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SideNav: __webpack_require__(47).default})


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

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2fde15f9", content, true, context)
};

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_366deb61_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_366deb61_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_366deb61_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_366deb61_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_366deb61_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dashboard-wrapper[data-v-366deb61]{background-color:var(--bg-page);min-height:100vh}.main-content[data-v-366deb61]{padding-left:280px;padding-right:20px;padding-top:20px}.avail-header[data-v-366deb61]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.avail-title[data-v-366deb61]{color:var(--text-primary);font-weight:600;margin:0}.flow-path-tabs[data-v-366deb61]{display:flex;gap:8px}.flow-tab[data-v-366deb61]{background:var(--bg-card);border:1px solid var(--border-color);border-radius:8px;color:var(--text-secondary);cursor:pointer;font-size:13px;font-weight:600;padding:7px 16px}.flow-tab.active[data-v-366deb61]{background:#26e;border-color:#26e;color:#fff}.flow-panel[data-v-366deb61]{background:var(--bg-card);border-radius:14px;padding:24px}.flow-path-row[data-v-366deb61]{align-items:center;display:flex;gap:12px;justify-content:space-between;margin-bottom:18px}.flow-path-desc[data-v-366deb61]{color:var(--text-secondary);font-size:13px;margin:0}.flow-reset-btn[data-v-366deb61]{align-items:center;background:none;border:1px solid var(--border-color);border-radius:8px;color:var(--text-secondary);cursor:pointer;display:flex;flex-shrink:0;font-size:12px;font-weight:600;gap:4px;padding:5px 12px}.flow-reset-btn[data-v-366deb61]:hover{color:var(--text-primary)}.flow-scroll[data-v-366deb61]{overflow-x:auto;padding-bottom:8px}.flow-canvas[data-v-366deb61]{min-width:-moz-max-content;min-width:max-content}.flow-arrow[data-v-366deb61],.flow-canvas[data-v-366deb61]{align-items:center;display:flex}.flow-arrow[data-v-366deb61]{color:var(--border-strong);flex-shrink:0;justify-content:center;width:36px}.flow-card[data-v-366deb61]{align-self:flex-start;animation:flow-card-in-366deb61 .25s ease;background:var(--bg-card);border:1px solid var(--border-color);border-radius:12px;box-shadow:0 2px 8px var(--shadow-color);flex-shrink:0;padding:14px 16px;position:relative;width:230px}.flow-card.is-frontier[data-v-366deb61]{border-color:#26e;box-shadow:0 0 0 3px rgba(34,102,238,.15),0 2px 8px var(--shadow-color);cursor:pointer}.flow-card.is-frontier[data-v-366deb61]:hover{box-shadow:0 0 0 4px rgba(34,102,238,.22),0 2px 8px var(--shadow-color)}.flow-card-hint[data-v-366deb61]{background:#26e;border-radius:10px;color:#fff;font-size:10px;font-weight:700;left:50%;padding:3px 10px;position:absolute;top:-11px;transform:translateX(-50%);white-space:nowrap}.flow-card-hint.complete[data-v-366deb61]{background:#2fa360}@keyframes flow-card-in-366deb61{0%{opacity:0;transform:translateX(-12px)}to{opacity:1;transform:translateX(0)}}.flow-card-title[data-v-366deb61]{color:var(--text-primary);font-size:13px;font-weight:600;margin:0 0 10px;text-align:center}.flow-filters[data-v-366deb61]{display:flex;flex-direction:column;gap:6px;margin-bottom:10px}.flow-filter[data-v-366deb61]{align-items:center;border:1px solid var(--border-color);border-radius:6px;color:var(--text-secondary);display:flex;font-size:12px;justify-content:space-between;padding:4px 8px}.flow-filter .material-icons[data-v-366deb61]{color:var(--text-muted);font-size:16px!important}.flow-total-label[data-v-366deb61]{color:var(--text-muted);font-size:11px;margin:0}.flow-total-value[data-v-366deb61]{color:#2fa360;font-size:15px;font-weight:700;margin:2px 0 8px}.flow-bar[data-v-366deb61]{background:var(--border-color);border-radius:4px;display:flex;height:6px;margin-bottom:8px;overflow:hidden}.flow-bar-fill[data-v-366deb61]{background:#3ec97a;height:100%}.flow-bar-loss[data-v-366deb61]{background:#e05353;height:100%}.flow-stats-row[data-v-366deb61]{display:flex;font-size:11px;gap:8px;justify-content:space-between;margin-bottom:8px}.flow-stat[data-v-366deb61]{display:flex;flex-direction:column;gap:2px}.flow-stat.right[data-v-366deb61]{align-items:flex-end;text-align:right}.flow-stat-pct[data-v-366deb61]{color:var(--text-secondary);font-weight:600}.flow-stat-pct.loss[data-v-366deb61]{color:#c0392b}.flow-stat-val[data-v-366deb61]{color:var(--text-muted)}.flow-divider[data-v-366deb61]{background:var(--divider);height:1px;margin:6px 0}.flow-bottom-row[data-v-366deb61]{color:var(--text-secondary);display:flex;font-size:12px;justify-content:space-between;padding-top:4px}.flow-bottom-row b[data-v-366deb61]{color:var(--text-primary)}@media only screen and (max-width:992px){.main-content[data-v-366deb61]{padding-left:20px}.avail-header[data-v-366deb61]{align-items:flex-start;flex-direction:column;gap:12px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=energy_flow_diagram.js.map