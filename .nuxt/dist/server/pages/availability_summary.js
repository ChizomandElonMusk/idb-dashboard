exports.ids = [27,20,21,22,25,26];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/Donut.vue?vue&type=template&id=19e9b66d&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "donut",
    style: {
      width: _vm.size + 'px',
      height: _vm.size + 'px'
    }
  }, [_vm._ssrNode("<svg viewBox=\"0 0 140 140\"" + _vm._ssrAttr("width", _vm.size) + _vm._ssrAttr("height", _vm.size) + " class=\"donut-svg\" data-v-19e9b66d><circle cx=\"70\" cy=\"70\"" + _vm._ssrAttr("r", _vm.r) + " fill=\"none\" stroke=\"var(--surface-3)\"" + _vm._ssrAttr("stroke-width", _vm.stroke) + " data-v-19e9b66d></circle> " + _vm._ssrList(_vm.arcs, function (a, i) {
    return "<circle cx=\"70\" cy=\"70\"" + _vm._ssrAttr("r", _vm.r) + " fill=\"none\"" + _vm._ssrAttr("stroke", a.color) + _vm._ssrAttr("stroke-width", _vm.stroke) + _vm._ssrAttr("stroke-dasharray", a.dash) + _vm._ssrAttr("stroke-dashoffset", a.offset) + " class=\"ie-arc\" data-v-19e9b66d>" + (a.title ? "<title data-v-19e9b66d>" + _vm._ssrEscape(_vm._s(a.title)) + "</title>" : "<!---->") + "</circle>";
  }) + "</svg> "), _vm.$slots.default ? _vm._ssrNode("<div class=\"donut-center\" data-v-19e9b66d>", "</div>", [_vm._t("default")], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/Donut.vue?vue&type=template&id=19e9b66d&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/Donut.vue?vue&type=script&lang=js
// Ring chart from the design. segments: [{ value, color, title? }]
/* harmony default export */ var Donutvue_type_script_lang_js = ({
  name: 'Donut',
  props: {
    segments: {
      type: Array,
      default: () => []
    },
    size: {
      type: Number,
      default: 132
    },
    r: {
      type: Number,
      default: 54
    },
    stroke: {
      type: Number,
      default: 18
    }
  },
  computed: {
    arcs() {
      const total = this.segments.reduce((s, x) => s + (Number(x.value) || 0), 0);
      if (!total) return [];
      const C = 2 * Math.PI * this.r;
      let acc = 0;
      return this.segments.map(s => {
        const len = (Number(s.value) || 0) / total * C;
        const arc = {
          color: s.color,
          title: s.title,
          dash: `${len.toFixed(2)} ${(C - len).toFixed(2)}`,
          offset: (-acc).toFixed(2)
        };
        acc += len;
        return arc;
      });
    }
  }
});
// CONCATENATED MODULE: ./components/ui/Donut.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_Donutvue_type_script_lang_js = (Donutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/Donut.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_Donutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "19e9b66d",
  "3dbe10f2"
  
)

/* harmony default export */ var Donut = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDate_vue_vue_type_style_index_0_id_23eb094b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDate_vue_vue_type_style_index_0_id_23eb094b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDate_vue_vue_type_style_index_0_id_23eb094b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDate_vue_vue_type_style_index_0_id_23eb094b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDate_vue_vue_type_style_index_0_id_23eb094b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fd[data-v-23eb094b]{align-items:center;background:var(--surface-2);border:1px solid var(--border-strong);border-radius:9px;color:var(--text);cursor:pointer;display:flex;gap:8px;height:38px;padding:0 11px;position:relative}.fd[data-v-23eb094b]:focus-within{border-color:var(--primary)}.fd-ico[data-v-23eb094b]{color:var(--text-3)}.fd-text[data-v-23eb094b]{align-items:flex-start;display:flex;flex-direction:column;line-height:1.05}.fd-label[data-v-23eb094b]{color:var(--text-3);font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.fd-value[data-v-23eb094b]{font-family:var(--mono);font-size:12px;font-weight:700;white-space:nowrap}.fd-input[data-v-23eb094b]{border:0;bottom:0;height:100%;left:0;margin:0;opacity:0;padding:0;pointer-events:none;position:absolute;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/FilterDate.vue?vue&type=template&id=23eb094b&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', {
    staticClass: "fd",
    on: {
      "click": _vm.open
    }
  }, [_c('Icon', {
    staticClass: "fd-ico",
    attrs: {
      "name": "calendar",
      "size": 15
    }
  }), _vm._ssrNode(" <span class=\"fd-text\" data-v-23eb094b><span class=\"fd-label\" data-v-23eb094b>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</span> <span class=\"fd-value\" data-v-23eb094b>" + _vm._ssrEscape(_vm._s(_vm.display)) + "</span></span> "), _c('Icon', {
    staticClass: "fd-ico",
    attrs: {
      "name": "chevDown",
      "size": 14
    }
  }), _vm._ssrNode(" <input" + _vm._ssrAttr("type", _vm.type) + _vm._ssrAttr("max", _vm.max) + _vm._ssrAttr("min", _vm.min) + " tabindex=\"-1\"" + _vm._ssrAttr("value", _vm.value) + " class=\"fd-input\" data-v-23eb094b>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/FilterDate.vue?vue&type=template&id=23eb094b&scoped=true

// EXTERNAL MODULE: ./components/ui/Icon.vue + 2 modules
var Icon = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/FilterDate.vue?vue&type=script&lang=js

const MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Design-styled date/month filter pill. Uses the browser's native picker underneath so
// keyboard + mobile pickers keep working; emits `change` with YYYY-MM or YYYY-MM-DD.
/* harmony default export */ var FilterDatevue_type_script_lang_js = ({
  name: 'FilterDate',
  components: {
    Icon: Icon["default"]
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'date'
    },
    // 'date' | 'month'
    label: {
      type: String,
      default: 'Date'
    },
    max: {
      type: String,
      default: undefined
    },
    min: {
      type: String,
      default: undefined
    }
  },
  computed: {
    display() {
      if (!this.value) return 'Latest';
      const [y, m, d] = this.value.split('-').map(Number);
      if (!y || !m) return this.value;
      return this.type === 'month' ? `${MN[m - 1]} ${y}` : `${String(d).padStart(2, '0')} ${MN[m - 1]} ${y}`;
    }
  },
  methods: {
    open() {
      const el = this.$refs.input;
      try {
        if (typeof el.showPicker === 'function') el.showPicker();else el.focus();
      } catch (e) {
        el.focus();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ui/FilterDate.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_FilterDatevue_type_script_lang_js = (FilterDatevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/FilterDate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(102)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_FilterDatevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23eb094b",
  "f86f979e"
  
)

/* harmony default export */ var FilterDate = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1acb524b", content, true, context)
};

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_availability_summary_vue_vue_type_style_index_0_id_30df15f6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_availability_summary_vue_vue_type_style_index_0_id_30df15f6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_availability_summary_vue_vue_type_style_index_0_id_30df15f6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_availability_summary_vue_vue_type_style_index_0_id_30df15f6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_availability_summary_vue_vue_type_style_index_0_id_30df15f6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".donut-row[data-v-30df15f6]{align-items:center;display:flex;gap:16px}.donut-total[data-v-30df15f6]{font-size:24px;font-weight:700;letter-spacing:-1px}.donut-unit[data-v-30df15f6]{color:var(--text-3);font-size:10.5px;font-weight:700}.donut-legend[data-v-30df15f6]{display:flex;flex:1;flex-direction:column;gap:11px;min-width:0}.dl-head[data-v-30df15f6]{align-items:center;display:flex;font-size:12px;font-weight:700;gap:8px;margin-bottom:3px}.dl-val[data-v-30df15f6]{font-size:19px;font-weight:700;letter-spacing:-.5px}.dl-val span[data-v-30df15f6]{color:var(--text-3);font-size:11.5px}.split-bar[data-v-30df15f6]{background:var(--surface-3);border-radius:8px;height:26px}.split-bar[data-v-30df15f6],.split-bar>div[data-v-30df15f6]{display:flex;overflow:hidden}.split-bar>div[data-v-30df15f6]{align-items:center;padding-left:9px}.split-bar span[data-v-30df15f6]{color:#fff;font-size:11px;font-weight:700;white-space:nowrap}.hbar[data-v-30df15f6]{align-items:center;display:flex;gap:12px}.hbar-name[data-v-30df15f6]{flex:none;font-size:12px;font-weight:700;text-align:right;width:86px}.hbar-track[data-v-30df15f6]{background:var(--surface-3);border-radius:6px;flex:1;height:22px;overflow:hidden}.hbar-track>div[data-v-30df15f6]{border-radius:6px;height:100%}.hbar-val[data-v-30df15f6]{flex:none;font-size:12.5px;font-weight:700;width:44px}.targets[data-v-30df15f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(132px,1fr));grid-gap:10px;gap:10px}.target[data-v-30df15f6]{background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:13px 15px}.target-val[data-v-30df15f6]{font-size:24px;font-weight:700;letter-spacing:-.8px;margin-top:5px}.target-val span[data-v-30df15f6]{color:var(--text-3);font-size:13px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/availability_summary.vue?vue&type=template&id=30df15f6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('PageHeader', {
    attrs: {
      "page": "availability",
      "loading": _vm.loading
    }
  }, [_c('FilterDate', {
    attrs: {
      "type": "date",
      "label": "Date",
      "value": _vm.selectedDate,
      "max": _vm.maxDate
    },
    on: {
      "change": _vm.onDateChange
    }
  }), _vm._v(" "), _c('FilterSelect', {
    attrs: {
      "label": "Feeder band",
      "icon": "feeder",
      "options": _vm.bandOptions
    },
    on: {
      "change": _vm.loadSummary
    },
    model: {
      value: _vm.selectedFeederBand,
      callback: function ($$v) {
        _vm.selectedFeederBand = $$v;
      },
      expression: "selectedFeederBand"
    }
  }), _vm._v(" "), _c('FilterSelect', {
    attrs: {
      "label": "Business unit",
      "icon": "building",
      "options": _vm.businessUnits
    },
    on: {
      "change": _vm.loadSummary
    },
    model: {
      value: _vm.selectedBusinessUnit,
      callback: function ($$v) {
        _vm.selectedBusinessUnit = $$v;
      },
      expression: "selectedBusinessUnit"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-page\" data-v-30df15f6>", "</div>", [_vm.error ? _vm._ssrNode("<div class=\"ie-error\" data-v-30df15f6>", "</div>", [_c('Icon', {
    attrs: {
      "name": "alert",
      "size": 16
    }
  }), _vm._ssrNode(_vm._ssrEscape("Couldn't load live data: " + _vm._s(_vm.error) + "\n            ") + "<button class=\"ie-btn\" data-v-30df15f6>Retry</button>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.loading && !_vm.loaded ? _c('SkeletonPage') : _c('div', {
    staticClass: "ie-fadein"
  }, [_c('div', {
    staticClass: "ie-grid",
    staticStyle: {
      "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))"
    }
  }, [_c('div', {
    staticClass: "ie-card"
  }, [_c('div', {
    staticClass: "ie-card-title",
    staticStyle: {
      "font-size": "14.5px"
    }
  }, [_vm._v("Feeder availability")]), _vm._v(" "), _c('div', {
    staticClass: "ie-card-sub",
    staticStyle: {
      "margin-bottom": "8px"
    }
  }, [_vm._v("Against band target hours")]), _vm._v(" "), _c('div', {
    staticClass: "donut-row"
  }, [_c('Donut', {
    attrs: {
      "segments": _vm.feederSegments,
      "size": 132,
      "r": 55,
      "stroke": 18
    }
  }, [_c('span', {
    staticClass: "mono donut-total"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.feeders.total)))]), _vm._v(" "), _c('span', {
    staticClass: "donut-unit"
  }, [_vm._v("FEEDERS")])]), _vm._v(" "), _c('div', {
    staticClass: "donut-legend"
  }, _vm._l(_vm.feederLegend, function (l) {
    return _c('div', {
      key: l.label
    }, [_c('div', {
      staticClass: "dl-head"
    }, [_c('span', {
      staticClass: "ie-swatch",
      style: {
        background: l.color
      }
    }), _vm._v(_vm._s(l.label))]), _vm._v(" "), _c('div', {
      staticClass: "mono dl-val"
    }, [_vm._v(_vm._s(l.value) + " "), _c('span', [_vm._v(_vm._s(l.pct))])])]);
  }), 0)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "ie-card"
  }, [_c('div', {
    staticClass: "ie-card-title",
    staticStyle: {
      "font-size": "14.5px"
    }
  }, [_vm._v("Transformers in scope")]), _vm._v(" "), _c('div', {
    staticClass: "ie-card-sub",
    staticStyle: {
      "margin-bottom": "8px"
    }
  }, [_vm._v("Public vs private ownership")]), _vm._v(" "), _c('div', {
    staticClass: "donut-row"
  }, [_c('Donut', {
    attrs: {
      "segments": _vm.dtSegments,
      "size": 132,
      "r": 55,
      "stroke": 18
    }
  }, [_c('span', {
    staticClass: "mono donut-total"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.dts.total)))]), _vm._v(" "), _c('span', {
    staticClass: "donut-unit"
  }, [_vm._v("DTs")])]), _vm._v(" "), _c('div', {
    staticClass: "donut-legend"
  }, _vm._l(_vm.dtLegend, function (l) {
    return _c('div', {
      key: l.label
    }, [_c('div', {
      staticClass: "dl-head"
    }, [_c('span', {
      staticClass: "ie-swatch",
      style: {
        background: l.color
      }
    }), _vm._v(_vm._s(l.label))]), _vm._v(" "), _c('div', {
      staticClass: "mono dl-val"
    }, [_vm._v(_vm._s(l.value) + " "), _c('span', [_vm._v(_vm._s(l.pct))])])]);
  }), 0)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "ie-card",
    staticStyle: {
      "border-color": "color-mix(in srgb,var(--danger) 26%,transparent)"
    }
  }, [_c('div', {
    staticClass: "ie-diag ie-layer",
    staticStyle: {
      "color": "var(--danger)",
      "opacity": ".05"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ie-card-title",
    staticStyle: {
      "font-size": "14.5px"
    }
  }, [_vm._v("DT availability status")]), _vm._v(" "), _c('div', {
    staticClass: "ie-card-sub",
    staticStyle: {
      "margin-bottom": "16px"
    }
  }, [_vm._v("Met vs not met, by ownership")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "gap": "16px"
    }
  }, [_vm._l(_vm.dtStatus, function (d) {
    return _c('div', {
      key: d.label
    }, [_c('div', {
      staticStyle: {
        "display": "flex",
        "align-items": "baseline",
        "justify-content": "space-between",
        "margin-bottom": "6px"
      }
    }, [_c('span', {
      staticStyle: {
        "font-size": "12.5px",
        "font-weight": "700"
      }
    }, [_vm._v(_vm._s(d.label))]), _vm._v(" "), _c('span', {
      staticStyle: {
        "font-size": "11.5px",
        "font-weight": "700"
      },
      style: {
        color: d.metPct >= 50 ? 'var(--success)' : 'var(--danger)'
      }
    }, [_vm._v(_vm._s(d.metPct.toFixed(1)) + "% met")])]), _vm._v(" "), _c('div', {
      staticClass: "split-bar"
    }, [_c('div', {
      staticClass: "ie-grow",
      style: {
        width: d.metW,
        background: 'var(--success)'
      },
      attrs: {
        "title": d.met + ' met'
      }
    }, [_c('span', {
      staticClass: "mono"
    }, [_vm._v(_vm._s(_vm.fmt(d.met)))])]), _vm._v(" "), _c('div', {
      staticClass: "ie-grow",
      style: {
        width: d.notW,
        background: 'var(--danger)'
      },
      attrs: {
        "title": d.not + ' not met'
      }
    }, [_c('span', {
      staticClass: "mono"
    }, [_vm._v(_vm._s(_vm.fmt(d.not)))])])])]);
  }), _vm._v(" "), _c('div', {
    staticClass: "ie-legend"
  }, [_c('span', [_c('span', {
    staticClass: "ie-swatch",
    staticStyle: {
      "background": "var(--success)"
    }
  }), _vm._v("Met")]), _vm._v(" "), _c('span', [_c('span', {
    staticClass: "ie-swatch",
    staticStyle: {
      "background": "var(--danger)"
    }
  }), _vm._v("Not met")])])], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "ie-grid",
    staticStyle: {
      "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))"
    }
  }, _vm._l(_vm.buCharts, function (chart) {
    return _c('div', {
      key: chart.title,
      staticClass: "ie-card"
    }, [_c('div', {
      staticClass: "ie-card-title",
      staticStyle: {
        "font-size": "14.5px",
        "margin-bottom": "16px"
      }
    }, [_vm._v(_vm._s(chart.title))]), _vm._v(" "), _c('div', {
      staticStyle: {
        "display": "flex",
        "flex-direction": "column",
        "gap": "12px"
      }
    }, [_vm._l(chart.rows, function (b) {
      return _c('div', {
        key: b.business_unit,
        staticClass: "hbar"
      }, [_c('span', {
        staticClass: "hbar-name"
      }, [_vm._v(_vm._s(b.business_unit))]), _vm._v(" "), _c('div', {
        staticClass: "hbar-track"
      }, [_c('div', {
        staticClass: "ie-grow",
        style: {
          width: b.pct,
          background: chart.color
        }
      })]), _vm._v(" "), _c('span', {
        staticClass: "mono hbar-val"
      }, [_vm._v(_vm._s(_vm.fmt(b.count)))])]);
    }), _vm._v(" "), !chart.rows.length ? _c('div', {
      staticClass: "ie-empty",
      staticStyle: {
        "padding": "20px"
      }
    }, [_vm._v("No business units in this selection.")]) : _vm._e()], 2)]);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "ie-card",
    staticStyle: {
      "padding": "18px 20px"
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "gap": "10px",
      "margin-bottom": "14px"
    }
  }, [_c('Icon', {
    staticStyle: {
      "color": "var(--primary)"
    },
    attrs: {
      "name": "clock",
      "size": 16
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "13.5px",
      "font-weight": "800",
      "letter-spacing": "-.2px"
    }
  }, [_vm._v("NERC target hours by band")])], 1), _vm._v(" "), _c('div', {
    staticClass: "targets"
  }, _vm._l(_vm.targets, function (t) {
    return _c('div', {
      key: t.band,
      staticClass: "target"
    }, [_c('div', {
      staticStyle: {
        "font-size": "11.5px",
        "font-weight": "800"
      },
      style: {
        color: _vm.bandColorVar(t.band)
      }
    }, [_vm._v("Band " + _vm._s(t.band))]), _vm._v(" "), _c('div', {
      staticClass: "mono target-val"
    }, [_vm._v(_vm._s(t.hours)), _c('span', [_vm._v("h")])]), _vm._v(" "), _c('div', {
      staticStyle: {
        "font-size": "11px",
        "color": "var(--text-3)",
        "font-weight": "600"
      }
    }, [_vm._v("minimum daily supply")])]);
  }), 0)])])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/availability_summary.vue?vue&type=template&id=30df15f6&scoped=true

// EXTERNAL MODULE: ./components/ui/Icon.vue + 2 modules
var Icon = __webpack_require__(13);

// EXTERNAL MODULE: ./components/ui/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(87);

// EXTERNAL MODULE: ./components/ui/FilterSelect.vue + 4 modules
var FilterSelect = __webpack_require__(92);

// EXTERNAL MODULE: ./components/ui/FilterDate.vue + 4 modules
var FilterDate = __webpack_require__(106);

// EXTERNAL MODULE: ./components/ui/SkeletonPage.vue + 4 modules
var SkeletonPage = __webpack_require__(95);

// EXTERNAL MODULE: ./components/ui/Donut.vue + 4 modules
var Donut = __webpack_require__(101);

// EXTERNAL MODULE: ./js_modules/controlCenterApi.js
var controlCenterApi = __webpack_require__(85);

// EXTERNAL MODULE: ./js_modules/pages.js
var pages = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/availability_summary.vue?vue&type=script&lang=js








// Wired to GET /api/v1/availability/summary (see static/api_live_responses3.md #4).
// date/feeder_band/business_unit are all live filters.

function share(part, total) {
  const p = Number(part) || 0;
  const t = Number(total) || 0;
  return t > 0 ? p / t * 100 : 0;
}
/* harmony default export */ var availability_summaryvue_type_script_lang_js = ({
  layout: 'dashboard',
  components: {
    Icon: Icon["default"],
    PageHeader: PageHeader["default"],
    FilterSelect: FilterSelect["default"],
    FilterDate: FilterDate["default"],
    SkeletonPage: SkeletonPage["default"],
    Donut: Donut["default"]
  },
  data() {
    return {
      loading: true,
      loaded: false,
      error: null,
      // Left unset so the request omits `date` and the server resolves its own "latest
      // complete day" — day-level readings lag, and this endpoint doesn't echo the
      // resolved date back, so there's nothing to backfill the picker with.
      selectedDate: '',
      maxDate: Object(controlCenterApi["r" /* todayStr */])(),
      selectedFeederBand: 'All',
      selectedBusinessUnit: 'All',
      businessUnits: controlCenterApi["a" /* BUSINESS_UNITS */],
      bandOptions: controlCenterApi["b" /* FEEDER_BANDS */].map(b => ({
        value: b,
        label: b === 'All' ? 'All bands' : 'Band ' + b
      })),
      feeders: {},
      dts: {},
      status: {},
      feedersByBu: [],
      dtsByBu: [],
      // Target hours are per band (API doc #4): A 20, B 16, C 12, D 8, E 4.
      targets: [{
        band: 'A',
        hours: 20
      }, {
        band: 'B',
        hours: 16
      }, {
        band: 'C',
        hours: 12
      }, {
        band: 'D',
        hours: 8
      }, {
        band: 'E',
        hours: 4
      }]
    };
  },
  computed: {
    feederSegments() {
      return [{
        value: this.feeders.met || 0,
        color: 'var(--success)',
        title: 'Met'
      }, {
        value: this.feeders.not_met || 0,
        color: 'var(--danger)',
        title: 'Not met'
      }];
    },
    feederLegend() {
      const f = this.feeders;
      return [{
        label: 'Met target',
        value: Object(controlCenterApi["e" /* formatNumber */])(f.met),
        pct: share(f.met, f.total).toFixed(1) + '%',
        color: 'var(--success)'
      }, {
        label: 'Below target',
        value: Object(controlCenterApi["e" /* formatNumber */])(f.not_met),
        pct: share(f.not_met, f.total).toFixed(1) + '%',
        color: 'var(--danger)'
      }];
    },
    dtSegments() {
      return [{
        value: this.dts.public_dts || 0,
        color: 'var(--soe)',
        title: 'Public'
      }, {
        value: this.dts.private_dts || 0,
        color: 'var(--primary)',
        title: 'Private'
      }];
    },
    dtLegend() {
      const d = this.dts;
      return [{
        label: 'Public',
        value: Object(controlCenterApi["e" /* formatNumber */])(d.public_dts),
        pct: share(d.public_dts, d.total).toFixed(1) + '%',
        color: 'var(--soe)'
      }, {
        label: 'Private',
        value: Object(controlCenterApi["e" /* formatNumber */])(d.private_dts),
        pct: share(d.private_dts, d.total).toFixed(1) + '%',
        color: 'var(--primary)'
      }];
    },
    dtStatus() {
      const s = this.status;
      return [{
        label: 'Public DTs',
        met: s.public_dts_met || 0,
        not: s.public_dts_not_met || 0
      }, {
        label: 'Private DTs',
        met: s.private_dts_met || 0,
        not: s.private_dts_not_met || 0
      }].map(d => {
        const metPct = share(d.met, d.met + d.not);
        return {
          ...d,
          metPct,
          metW: metPct.toFixed(2) + '%',
          notW: (d.met + d.not ? 100 - metPct : 0).toFixed(2) + '%'
        };
      });
    },
    buCharts() {
      const rows = list => {
        const max = Math.max(1, ...list.map(b => Number(b.count) || 0));
        return list.map(b => ({
          ...b,
          pct: ((Number(b.count) || 0) / max * 100).toFixed(1) + '%'
        }));
      };
      return [{
        title: 'Feeders by business unit',
        rows: rows(this.feedersByBu),
        color: 'var(--primary)'
      }, {
        title: 'Transformers by business unit',
        rows: rows(this.dtsByBu),
        color: 'var(--soe)'
      }];
    }
  },
  async mounted() {
    await this.loadSummary();
  },
  methods: {
    fmt: controlCenterApi["e" /* formatNumber */],
    bandColorVar: pages["c" /* bandColorVar */],
    onDateChange(value) {
      this.selectedDate = value;
      this.loadSummary();
    },
    async loadSummary() {
      this.loading = true;
      this.error = null;
      try {
        const data = await Object(controlCenterApi["f" /* getAvailabilitySummary */])({
          date: this.selectedDate,
          feeder_band: this.selectedFeederBand,
          business_unit: this.selectedBusinessUnit
        });
        this.feeders = data.feeders_availability || {};
        this.dts = data.dts || {};
        this.status = data.dt_availability_status || {};
        this.feedersByBu = data.feeders_by_business_unit || [];
        this.dtsByBu = data.dts_by_business_unit || [];
        this.loaded = true;
      } catch (err) {
        this.error = err.message || 'Failed to load Availability Summary';
      } finally {
        this.loading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/availability_summary.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_availability_summaryvue_type_script_lang_js = (availability_summaryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/availability_summary.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(147)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_availability_summaryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "30df15f6",
  "382ffdd4"
  
)

/* harmony default export */ var availability_summary = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("bc765b12", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("704eab78", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4d7f107a", content, true, context)
};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3404a146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3404a146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3404a146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3404a146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3404a146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ph[data-v-3404a146]{background:var(--surface);border-bottom:1px solid var(--border);position:relative;z-index:20}.ph-prog[data-v-3404a146]{background:color-mix(in srgb,var(--primary) 18%,transparent);height:2px;left:0;overflow:hidden;position:absolute;right:0;top:-1px;z-index:2}.ph-prog .ie-prog[data-v-3404a146]{background:var(--primary);border-radius:2px;height:100%;width:38%}.ph-pattern[data-v-3404a146]{bottom:0;left:0;opacity:.5;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0}.ph-pattern>div[data-v-3404a146]{height:100%;opacity:.09;width:100%}.ph-photo[data-v-3404a146]{bottom:0;left:0;overflow:hidden;pointer-events:none}.ph-photo[data-v-3404a146],.ph-photo img[data-v-3404a146]{position:absolute;right:0;top:0}.ph-photo img[data-v-3404a146]{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center 58%;object-position:center 58%;width:64%}.ph-photo-fade[data-v-3404a146]{background:linear-gradient(90deg,var(--surface) 36%,color-mix(in srgb,var(--surface) 62%,transparent) 58%,color-mix(in srgb,var(--surface) 8%,transparent) 100%);bottom:0;left:0;position:absolute;right:0;top:0}.ph-inner[data-v-3404a146]{align-items:flex-start;display:flex;flex-direction:column;gap:16px;margin:0 auto;max-width:1460px;padding:22px 28px;position:relative}.ph-kicker[data-v-3404a146]{font-size:10.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase}.ph-title[data-v-3404a146]{font-size:26px;font-weight:800;letter-spacing:-.9px;line-height:1.2;margin:5px 0 0}.ph-sub[data-v-3404a146]{color:var(--text-2);font-size:13px;margin-top:3px}.ph-filters[data-v-3404a146]{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;gap:9px}@media (max-width:720px){.ph-inner[data-v-3404a146]{padding:18px 16px}.ph-photo img[data-v-3404a146]{opacity:.35;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("a5af6388", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* unused harmony export openDatePicker */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return formatNumber; });
/* unused harmony export lastNMonths */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return monthLabel; });
/* unused harmony export lastNDays */
/* unused harmony export dayLabel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return todayStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return currentMonthStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return aggregateDailyTrend; });
/* unused harmony export formatPct */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BUSINESS_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FEEDER_BANDS; });
/* unused harmony export bandColor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getEndToEndOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getEnergyFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getControlCenterSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getAvailabilitySummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getDtAvailabilityDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getDtAvailabilityTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getMytoSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getIdbDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getIdbFeederDtLoss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getIdbCustomerDtLoss; });
/* unused harmony export buildTrendCallout */
// Client for the streaming-dashboard-api Control Center backend.
// See static/api_live_responses3.md for endpoint/field documentation and live response samples.
// Endpoints are added here incrementally as each screen gets wired up.

// Native calendar/month inputs draw their own picker-open icon, which we hide (see
// ::-webkit-calendar-picker-indicator rules) in favor of our own Material icon sitting next to
// them. But that icon is a separate DOM element from the (now invisible) native one, so
// clicking it does nothing on its own — this opens the picker programmatically instead. Bind
// it with @click on the wrapping pill/box (its currentTarget), not the icon itself, so a click
// anywhere in the filter box works, not just a pixel-precise hit on the icon.
function openDatePicker(e) {
  const input = e.currentTarget.querySelector('input[type="date"], input[type="month"]');
  if (!input) return;
  try {
    if (typeof input.showPicker === 'function') {
      input.showPicker();
    } else {
      input.focus();
    }
  } catch (err) {
    // showPicker() can throw (e.g. not called from a direct user gesture in some browsers) —
    // focusing the input is a harmless fallback that still lets the user type/tab into it.
    input.focus();
  }
}
const BASE_URL = "http://10.50.32.108:8090/api/v1";
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

// The doc's per-endpoint timings are explicitly "warm second-call" numbers (i.e. cache
// hits). A first-time query against an uncached filter combination (e.g. a specific
// business_unit) can take a good deal longer, so give those room before giving up.
const REQUEST_TIMEOUT_MS = 40000;
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
  // Number(null) is 0, not NaN — without this check a genuinely-absent value (e.g.
  // control-center/summary's always-null customercomplaints fields) would render as "0"
  // instead of the "—" that actually reflects "no data".
  if (value === null || value === undefined) return '—';
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

// 'YYYY-MM-DD' for today — used to cap date pickers so they can't select a future day.
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// 'YYYY-MM' for the current month — used to cap <input type="month"> pickers.
function currentMonthStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

// Aggregates a daily {date, ...values} trend into Day/Week/Month buckets client-side — for
// screens whose API has no period/granularity param (or one we can't confirm actually changes
// anything server-side) but does return full daily data for the current month. valueKeys lists
// which numeric fields to sum per bucket (e.g. ['vended', 'collected']). Month collapses the
// whole series to one point since these trends never span more than a single month.
function aggregateDailyTrend(trend, mode, valueKeys) {
  if (!trend || !trend.length) return [];
  const sumKeys = rows => {
    const out = {};
    valueKeys.forEach(k => {
      out[k] = rows.reduce((sum, r) => sum + (r[k] || 0), 0);
    });
    return out;
  };
  if (mode === 'Day') {
    return trend.map(t => ({
      label: dayLabel(t.date),
      ...sumKeys([t])
    }));
  }
  if (mode === 'Week') {
    const buckets = [];
    for (let i = 0; i < trend.length; i += 7) {
      const slice = trend.slice(i, i + 7);
      const label = slice.length > 1 ? `${dayLabel(slice[0].date)}–${dayLabel(slice[slice.length - 1].date)}` : dayLabel(slice[0].date);
      buckets.push({
        label,
        ...sumKeys(slice)
      });
    }
    return buckets;
  }
  return [{
    label: monthLabel(trend[0].date),
    ...sumKeys(trend)
  }];
}

// Formats a percentage value for display; null/undefined render as "—" rather than "null%".
function formatPct(value) {
  if (value === null || value === undefined) return '—';
  return `${value}%`;
}

// The business units that appear across the API's business_unit-keyed responses
// (availability/summary is the canonical source — see its feeders_by_business_unit /
// dts_by_business_unit sample). Shared across screens since it's the same dimension.
const BUSINESS_UNITS = ['All', 'Oshodi', 'Shomolu', 'Akowonjo', 'Ikeja', 'Ikorodu', 'Abule Egba', 'Md Kam'];

// Feeder/energy bands used across the API's band-keyed responses (energy_allocation_by_band,
// feeders_by_band, myto/summary's band_compliance, etc).
const FEEDER_BANDS = ['All', 'A', 'B', 'C', 'D', 'E'];
const BAND_ORDER = ['A', 'B', 'C', 'D', 'E'];
const BAND_COLORS = ['#128A5B', '#E58E0A', '#48598B', '#B7791F', '#DB362C'];

// Consistent color per band across every chart that breaks data down by band, keyed by
// band letter rather than array position so it stays correct even if an endpoint ever
// returns bands in a different order (or a subset).
function bandColor(band) {
  const i = BAND_ORDER.indexOf(band);
  return i >= 0 ? BAND_COLORS[i] : '#999';
}

// 1. End-to-End Overview — top KPI cards + Grid Network map on the
// End-to-End Energy Dashboard screen.
function getEndToEndOverview({
  date,
  business_unit,
  marker_limit
} = {}) {
  return get('/end-to-end/overview', {
    date,
    business_unit,
    marker_limit
  });
}

// 2. Energy Flow — the TS -> Customer cascade on the Energy Flow Diagram screen. Only these
// five params are real filters; there's no way to filter specifically by ISS / Transformer 2 /
// 11kV Incomer / 11kV Outgoing Feeder even though the UI lets a user browse the relationship
// tree that deep — see energy_flow_diagram.vue for how that's handled.
function getEnergyFlow({
  ts,
  transformer,
  feeder_33kva,
  dt,
  dt_type
} = {}) {
  return get('/energy-flow', {
    ts,
    transformer,
    feeder_33kva,
    dt,
    dt_type
  });
}

// 3. Control Center Summary — Control Center Dashboard screen. No params, always the
// latest snapshot.
function getControlCenterSummary() {
  return get('/control-center/summary');
}

// 4. Availability Summary — Availability Summary screen.
function getAvailabilitySummary({
  date,
  feeder_band,
  business_unit
} = {}) {
  return get('/availability/summary', {
    date,
    feeder_band,
    business_unit
  });
}

// 5. DT Availability — Dashboard screen (single-DT target/actual metrics + trend).
// Every doc example passes a specific dt_name and there's no documented "All" behavior for
// this endpoint (unlike #6 below), so treat it as effectively required.
function getDtAvailabilityDashboard({
  dt_name,
  period
} = {}) {
  return get('/dt-availability/dashboard', {
    dt_name,
    period
  });
}

// 6. DT Availability — Table (paginated). dt_name defaults to 'All'.
function getDtAvailabilityTable({
  dt_name,
  date,
  page,
  page_size
} = {}) {
  return get('/dt-availability/table', {
    dt_name,
    date,
    page,
    page_size
  });
}

// 7. MYTO Summary — Feeders MYTO Energy Dashboard screen.
function getMytoSummary({
  feeder_band,
  period
} = {}) {
  return get('/myto/summary', {
    feeder_band,
    period
  });
}

// 8. IDB Dashboard — IDB Dashboard screen's Dashboard tab.
function getIdbDashboard({
  feeder,
  date
} = {}) {
  return get('/idb/dashboard', {
    feeder,
    date
  });
}

// 9. IDB Feeder to DT Loss (paginated) — "Feeder to DT loss Table" tab.
function getIdbFeederDtLoss({
  feeder,
  date,
  page,
  page_size
} = {}) {
  return get('/idb/feeder-dt-loss', {
    feeder,
    date,
    page,
    page_size
  });
}

// 10. IDB Customer to DT Loss (paginated) — "Customer to DT loss Table" tab.
function getIdbCustomerDtLoss({
  feeder,
  date,
  page,
  page_size
} = {}) {
  return get('/idb/customer-dt-loss', {
    feeder,
    date,
    page,
    page_size
  });
}

// Highlights the peak point in a trend series, matching the Figma mocks' static callout
// bubbles. leftPct is index-based (evenly spaced x-axis) rather than pixel-measured against
// actual Chart.js geometry, so it's a close approximation, not exact.
function buildTrendCallout(trend, valueKey, titleFn, valueLabel) {
  if (!trend || !trend.length) return null;
  let peakIdx = 0;
  trend.forEach((t, i) => {
    if ((t[valueKey] || 0) > (trend[peakIdx][valueKey] || 0)) peakIdx = i;
  });
  const leftPct = trend.length > 1 ? peakIdx / (trend.length - 1) * 100 : 50;
  return {
    title: titleFn(trend[peakIdx]),
    value: valueLabel(trend[peakIdx][valueKey]),
    leftPct: Math.min(90, Math.max(5, leftPct))
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48)["URLSearchParams"]))

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/PageHeader.vue?vue&type=template&id=3404a146&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ph"
  }, [_vm._ssrNode((_vm.loading ? "<div class=\"ph-prog\" data-v-3404a146><div class=\"ie-prog\" data-v-3404a146></div></div>" : "<!---->") + " <div class=\"ph-pattern\" data-v-3404a146><div" + _vm._ssrClass(null, _vm.meta.pattern) + _vm._ssrStyle(null, {
    color: _vm.meta.color
  }, null) + " data-v-3404a146></div></div> " + (_vm.meta.photo ? "<div class=\"ph-photo ie-fadein\" data-v-3404a146><img src=\"/grid-hero.jpg\" alt data-v-3404a146> <div class=\"ph-photo-fade\" data-v-3404a146></div></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"ph-inner\" data-v-3404a146>", "</div>", [_vm._ssrNode("<div data-v-3404a146><div class=\"ph-kicker\"" + _vm._ssrStyle(null, {
    color: _vm.meta.color
  }, null) + " data-v-3404a146>" + _vm._ssrEscape(_vm._s(_vm.meta.kicker)) + "</div> <h1 class=\"ph-title\" data-v-3404a146>" + _vm._ssrEscape(_vm._s(_vm.meta.title)) + "</h1> <div class=\"ph-sub\" data-v-3404a146>" + _vm._ssrEscape(_vm._s(_vm.meta.sub)) + "</div></div> "), _vm.$slots.default ? _vm._ssrNode("<div class=\"ph-filters\" data-v-3404a146>", "</div>", [_vm._t("default")], 2) : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/PageHeader.vue?vue&type=template&id=3404a146&scoped=true

// EXTERNAL MODULE: ./js_modules/pages.js
var pages = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/PageHeader.vue?vue&type=script&lang=js

/* harmony default export */ var PageHeadervue_type_script_lang_js = ({
  name: 'PageHeader',
  props: {
    page: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    meta() {
      return pages["b" /* PAGE_META */][this.page] || {};
    }
  }
});
// CONCATENATED MODULE: ./components/ui/PageHeader.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_PageHeadervue_type_script_lang_js = (PageHeadervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/PageHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_PageHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3404a146",
  "1902ffe7"
  
)

/* harmony default export */ var PageHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSelect_vue_vue_type_style_index_0_id_d78a8f62_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSelect_vue_vue_type_style_index_0_id_d78a8f62_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSelect_vue_vue_type_style_index_0_id_d78a8f62_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSelect_vue_vue_type_style_index_0_id_d78a8f62_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSelect_vue_vue_type_style_index_0_id_d78a8f62_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fs[data-v-d78a8f62]{position:relative}.fs.block[data-v-d78a8f62]{width:100%}.fs-btn[data-v-d78a8f62]{align-items:center;background:var(--surface-2);border:1px solid var(--border-strong);border-radius:9px;color:var(--text);cursor:pointer;display:flex;gap:8px;height:38px;max-width:340px;padding:0 11px;text-align:left}.fs.block .fs-btn[data-v-d78a8f62]{max-width:none;width:100%}.fs-btn.compact[data-v-d78a8f62]{background:var(--surface);border-color:var(--border);border-radius:8px;height:auto;padding:6px 9px 6px 10px}.fs-btn.open[data-v-d78a8f62]{border-color:var(--primary)}.fs-btn[data-v-d78a8f62]:disabled{cursor:default;opacity:.5}.fs-chev[data-v-d78a8f62],.fs-ico[data-v-d78a8f62]{color:var(--text-3);flex:none}.fs-chev[data-v-d78a8f62]{margin-left:auto;transition:transform .2s}.fs-text[data-v-d78a8f62]{align-items:flex-start;display:flex;flex-direction:column;line-height:1.05;min-width:0}.fs-label[data-v-d78a8f62]{color:var(--text-3);font-size:9px;letter-spacing:.06em;text-transform:uppercase}.fs-label[data-v-d78a8f62],.fs-value[data-v-d78a8f62]{font-weight:700;white-space:nowrap}.fs-value[data-v-d78a8f62]{font-size:12.5px;max-width:240px;overflow:hidden;text-overflow:ellipsis}.fs-value--compact[data-v-d78a8f62]{flex:1;max-width:none;min-width:0}.fs-pop[data-v-d78a8f62]{background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow-xl);left:0;max-width:min(400px,calc(100vw - 40px));padding:6px;position:absolute;top:calc(100% + 8px);z-index:45}.fs.block .fs-pop[data-v-d78a8f62]{width:100%}.fs-search[data-v-d78a8f62]{align-items:center;background:var(--surface-2);border:1px solid var(--border-strong);border-radius:8px;color:var(--text-3);display:flex;gap:8px;margin-bottom:5px;padding:7px 10px}.fs-search input[data-v-d78a8f62]{background:transparent;border:none;color:var(--text);flex:1;font-size:12.5px;min-width:0;outline:none}.fs-list[data-v-d78a8f62]{display:flex;flex-direction:column;gap:1px;max-height:300px;overflow-x:hidden;overflow-y:auto}.fs-opt[data-v-d78a8f62]{align-items:center;border-radius:8px;color:var(--text);cursor:pointer;display:flex;font-size:12.5px;font-weight:600;gap:10px;padding:8px 10px}.fs-opt[data-v-d78a8f62]:hover{background:var(--surface-2)}.fs-opt.on[data-v-d78a8f62]{background:var(--primary-soft);font-weight:800}.fs-opt-text[data-v-d78a8f62]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fs-check[data-v-d78a8f62]{color:var(--primary-press)}.fs-empty[data-v-d78a8f62]{color:var(--text-3);font-size:12px;padding:12px 10px;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0ecb21cd", content, true, context)
};

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/FilterSelect.vue?vue&type=template&id=d78a8f62&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "root",
    staticClass: "fs",
    class: {
      block: _vm.block
    }
  }, [_vm._ssrNode("<button type=\"button\"" + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrClass("fs-btn", {
    open: _vm.open,
    compact: _vm.compact
  }) + " data-v-d78a8f62>", "</button>", [_vm.icon ? _c('Icon', {
    staticClass: "fs-ico",
    attrs: {
      "name": _vm.icon,
      "size": 15
    }
  }) : _vm._e(), _vm._ssrNode(" " + (!_vm.compact ? "<span class=\"fs-text\" data-v-d78a8f62><span class=\"fs-label\" data-v-d78a8f62>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</span> <span" + _vm._ssrAttr("title", _vm.currentLabel) + " class=\"fs-value\" data-v-d78a8f62>" + _vm._ssrEscape(_vm._s(_vm.currentLabel)) + "</span></span>" : "<span" + _vm._ssrAttr("title", _vm.currentLabel) + " class=\"fs-value fs-value--compact\" data-v-d78a8f62>" + _vm._ssrEscape(_vm._s(_vm.currentLabel)) + "</span>") + " "), _c('Icon', {
    staticClass: "fs-chev",
    style: {
      transform: _vm.open ? 'rotate(180deg)' : 'none'
    },
    attrs: {
      "name": "chevDown",
      "size": 14
    }
  })], 2), _vm._ssrNode(" "), _vm.open ? _vm._ssrNode("<div class=\"fs-pop ie-fadeup\"" + _vm._ssrStyle(null, {
    minWidth: _vm.popWidth
  }, null) + " data-v-d78a8f62>", "</div>", [_vm.isSearchable ? _vm._ssrNode("<div class=\"fs-search\" data-v-d78a8f62>", "</div>", [_c('Icon', {
    attrs: {
      "name": "search",
      "size": 15
    }
  }), _vm._ssrNode(" <input placeholder=\"Search…\"" + _vm._ssrAttr("value", _vm.query) + " data-v-d78a8f62>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"fs-list ie-scroll\" data-v-d78a8f62>", "</div>", [_vm._l(_vm.shown, function (o) {
    return _vm._ssrNode("<div" + _vm._ssrClass("fs-opt", {
      on: o.value === _vm.value
    }) + " data-v-d78a8f62>", "</div>", [_vm._ssrNode("<span" + _vm._ssrAttr("title", o.label) + " class=\"fs-opt-text\" data-v-d78a8f62>" + _vm._ssrEscape(_vm._s(o.label)) + "</span> "), o.value === _vm.value ? _c('Icon', {
      staticClass: "fs-check",
      attrs: {
        "name": "check",
        "size": 15
      }
    }) : _vm._e()], 2);
  }), _vm._ssrNode(" " + (!_vm.shown.length ? "<div class=\"fs-empty\" data-v-d78a8f62>No match</div>" : "<!---->") + " " + (_vm.clipped ? "<div class=\"fs-empty\" data-v-d78a8f62>" + _vm._ssrEscape("Showing first " + _vm._s(_vm.maxShown) + " · type to narrow") + "</div>" : "<!---->"))], 2)], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/FilterSelect.vue?vue&type=template&id=d78a8f62&scoped=true

// EXTERNAL MODULE: ./components/ui/Icon.vue + 2 modules
var Icon = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/FilterSelect.vue?vue&type=script&lang=js


// Header filter dropdown from the design: icon + small caps label + current value,
// opening a searchable list. `options` may be strings or { value, label } objects.
/* harmony default export */ var FilterSelectvue_type_script_lang_js = ({
  name: 'FilterSelect',
  components: {
    Icon: Icon["default"]
  },
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    searchable: {
      type: Boolean,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    popWidth: {
      type: String,
      default: '240px'
    }
  },
  data() {
    return {
      open: false,
      query: '',
      maxShown: 300
    };
  },
  computed: {
    normalized() {
      return this.options.map(o => o !== null && typeof o === 'object' ? o : {
        value: o,
        label: String(o)
      });
    },
    isSearchable() {
      return this.searchable === null ? this.normalized.length > 8 : this.searchable;
    },
    filtered() {
      const q = this.query.trim().toLowerCase();
      return q ? this.normalized.filter(o => o.label.toLowerCase().includes(q)) : this.normalized;
    },
    shown() {
      return this.filtered.slice(0, this.maxShown);
    },
    clipped() {
      return this.filtered.length > this.maxShown;
    },
    currentLabel() {
      const hit = this.normalized.find(o => o.value === this.value);
      return hit ? hit.label : this.value == null || this.value === '' ? '—' : String(this.value);
    }
  },
  mounted() {
    document.addEventListener('mousedown', this.onDoc);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.onDoc);
  },
  methods: {
    toggle() {
      this.open = !this.open;
      this.query = '';
      if (this.open && this.isSearchable) this.$nextTick(() => this.$refs.q && this.$refs.q.focus());
    },
    pick(o) {
      this.open = false;
      if (o.value !== this.value) {
        this.$emit('input', o.value);
        this.$emit('change', o.value);
      }
    },
    pickFirst() {
      if (this.shown.length) this.pick(this.shown[0]);
    },
    onDoc(e) {
      if (this.open && this.$refs.root && !this.$refs.root.contains(e.target)) this.open = false;
    }
  }
});
// CONCATENATED MODULE: ./components/ui/FilterSelect.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_FilterSelectvue_type_script_lang_js = (FilterSelectvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/FilterSelect.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_FilterSelectvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d78a8f62",
  "6f1693bf"
  
)

/* harmony default export */ var FilterSelect = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonPage_vue_vue_type_style_index_0_id_9e7985aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonPage_vue_vue_type_style_index_0_id_9e7985aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonPage_vue_vue_type_style_index_0_id_9e7985aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonPage_vue_vue_type_style_index_0_id_9e7985aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonPage_vue_vue_type_style_index_0_id_9e7985aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sk-grid[data-v-9e7985aa]{display:grid;grid-gap:14px;gap:14px;margin-bottom:14px}.sk-grid--kpi[data-v-9e7985aa]{grid-template-columns:repeat(auto-fit,minmax(230px,1fr))}.sk-grid--charts[data-v-9e7985aa]{grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}.sk-bars[data-v-9e7985aa]{align-items:flex-end;display:flex;gap:10px;height:190px;margin-top:20px}.sk-bars>div[data-v-9e7985aa]{flex:1}.sk-donut-row[data-v-9e7985aa]{align-items:center;display:flex;gap:18px;margin-top:22px}.sk-donut[data-v-9e7985aa]{border-radius:50%;flex:none;height:128px;-webkit-mask:radial-gradient(circle,transparent 42px,#000 43px);mask:radial-gradient(circle,transparent 42px,#000 43px);width:128px}.sk-lines[data-v-9e7985aa]{display:flex;flex:1;flex-direction:column;gap:12px}.sk-rule[data-v-9e7985aa]{background:color-mix(in srgb,var(--primary) 35%,transparent);height:2px;margin:18px 0 2px}.sk-row[data-v-9e7985aa]{display:grid;grid-template-columns:2fr 1.4fr 1fr 1fr;grid-gap:16px;border-bottom:1.5px dotted var(--border-strong);gap:16px;padding:14px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/SkeletonPage.vue?vue&type=template&id=9e7985aa&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ie-fadein",
    attrs: {
      "aria-busy": "true",
      "aria-label": "Loading"
    }
  }, [_vm._ssrNode("<div class=\"sk-grid sk-grid--kpi\" data-v-9e7985aa>" + _vm._ssrList(4, function (i) {
    return "<div class=\"ie-card\" data-v-9e7985aa><div class=\"ie-skel\" style=\"width:30px;height:30px;border-radius:8px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:46%;height:10px;margin-top:16px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:68%;height:28px;margin-top:10px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:100%;height:7px;margin-top:18px;border-radius:999px\" data-v-9e7985aa></div></div>";
  }) + "</div> <div class=\"sk-grid sk-grid--charts\" data-v-9e7985aa><div class=\"ie-card\" data-v-9e7985aa><div class=\"ie-skel\" style=\"width:34%;height:13px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:22%;height:9px;margin-top:8px\" data-v-9e7985aa></div> <div class=\"sk-bars\" data-v-9e7985aa>" + _vm._ssrList([42, 68, 54, 86, 61, 74, 48], function (h, i) {
    return "<div class=\"ie-skel\"" + _vm._ssrStyle(null, {
      height: h + '%'
    }, null) + " data-v-9e7985aa></div>";
  }) + "</div></div> <div class=\"ie-card\" data-v-9e7985aa><div class=\"ie-skel\" style=\"width:48%;height:13px\" data-v-9e7985aa></div> <div class=\"sk-donut-row\" data-v-9e7985aa><div class=\"ie-skel sk-donut\" data-v-9e7985aa></div> <div class=\"sk-lines\" data-v-9e7985aa><div class=\"ie-skel\" style=\"width:80%;height:10px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:64%;height:10px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:72%;height:10px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:52%;height:10px\" data-v-9e7985aa></div></div></div></div></div> <div class=\"ie-card\" data-v-9e7985aa><div class=\"ie-skel\" style=\"width:22%;height:13px\" data-v-9e7985aa></div> <div class=\"sk-rule\" data-v-9e7985aa></div> " + _vm._ssrList(5, function (i) {
    return "<div class=\"sk-row\" data-v-9e7985aa><div class=\"ie-skel\" style=\"height:10px;width:82%\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"height:10px;width:70%\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"height:10px;width:60%\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"height:10px;width:50%;justify-self:end\" data-v-9e7985aa></div></div>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/SkeletonPage.vue?vue&type=template&id=9e7985aa&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/SkeletonPage.vue?vue&type=script&lang=js
/* harmony default export */ var SkeletonPagevue_type_script_lang_js = ({
  name: 'SkeletonPage'
});
// CONCATENATED MODULE: ./components/ui/SkeletonPage.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_SkeletonPagevue_type_script_lang_js = (SkeletonPagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/SkeletonPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_SkeletonPagevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9e7985aa",
  "37e664b2"
  
)

/* harmony default export */ var SkeletonPage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Donut_vue_vue_type_style_index_0_id_19e9b66d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Donut_vue_vue_type_style_index_0_id_19e9b66d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Donut_vue_vue_type_style_index_0_id_19e9b66d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Donut_vue_vue_type_style_index_0_id_19e9b66d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Donut_vue_vue_type_style_index_0_id_19e9b66d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".donut[data-v-19e9b66d]{flex:none;position:relative}.donut-svg[data-v-19e9b66d]{display:block;transform:rotate(-90deg)}.donut-center[data-v-19e9b66d]{align-items:center;bottom:0;display:flex;flex-direction:column;justify-content:center;left:0;position:absolute;right:0;text-align:center;top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=availability_summary.js.map