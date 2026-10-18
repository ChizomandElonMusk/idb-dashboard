exports.ids = [32,1,19,20,21,22,23,25,26];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("026783fe", content, true, context)
};

/***/ }),

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

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("641beeb0", content, true, context)
};

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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_id_5ed475bd_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_id_5ed475bd_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_id_5ed475bd_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_id_5ed475bd_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_id_5ed475bd_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".gauge[data-v-5ed475bd]{position:relative}.gauge-svg[data-v-5ed475bd]{display:block;height:auto;width:100%}.gauge-center[data-v-5ed475bd]{align-items:center;bottom:2px;display:flex;flex-direction:column;left:0;position:absolute;right:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/Gauge.vue?vue&type=template&id=5ed475bd&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gauge",
    style: {
      width: _vm.width + 'px'
    }
  }, [_vm._ssrNode("<svg viewBox=\"0 0 200 116\"" + _vm._ssrAttr("width", _vm.width) + _vm._ssrAttr("height", Math.round(_vm.width * 0.58)) + " class=\"gauge-svg\" data-v-5ed475bd><path" + _vm._ssrAttr("d", _vm.ARC) + " fill=\"none\" stroke=\"var(--surface-3)\" stroke-width=\"17\" stroke-linecap=\"round\" data-v-5ed475bd></path> " + (_vm.pctClamped > 0 ? "<path" + _vm._ssrAttr("d", _vm.ARC) + " fill=\"none\"" + _vm._ssrAttr("stroke", _vm.color) + " stroke-width=\"17\" stroke-linecap=\"round\"" + _vm._ssrAttr("stroke-dasharray", _vm.dash) + " class=\"ie-arc\" data-v-5ed475bd></path>" : "<!---->") + "</svg> "), _vm._ssrNode("<div class=\"gauge-center\" data-v-5ed475bd>", "</div>", [_vm._t("default")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/Gauge.vue?vue&type=template&id=5ed475bd&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/Gauge.vue?vue&type=script&lang=js
const ARC = 'M 18 104 A 82 82 0 0 1 182 104';
const LEN = Math.PI * 82;

// Semi-circle gauge from the design. pct is 0–100.
/* harmony default export */ var Gaugevue_type_script_lang_js = ({
  name: 'Gauge',
  props: {
    pct: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'var(--primary)'
    },
    width: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      ARC
    };
  },
  computed: {
    pctClamped() {
      const p = Number(this.pct);
      return Number.isFinite(p) ? Math.max(0, Math.min(100, p)) : 0;
    },
    dash() {
      const len = LEN * this.pctClamped / 100;
      return `${len.toFixed(2)} ${LEN.toFixed(2)}`;
    }
  }
});
// CONCATENATED MODULE: ./components/ui/Gauge.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_Gaugevue_type_script_lang_js = (Gaugevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/Gauge.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(107)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_Gaugevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5ed475bd",
  "493235de"
  
)

/* harmony default export */ var Gauge = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_style_index_0_id_ed1ddc34_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_style_index_0_id_ed1ddc34_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_style_index_0_id_ed1ddc34_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_style_index_0_id_ed1ddc34_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_style_index_0_id_ed1ddc34_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dt-tools[data-v-ed1ddc34]{align-items:center;display:flex;flex-wrap:wrap;gap:10px}.ie-table-scroll[data-v-ed1ddc34]{overflow-x:auto;transition:opacity .2s}.ie-table-scroll.busy[data-v-ed1ddc34]{opacity:.6}.dt-groups[data-v-ed1ddc34],.dt-head[data-v-ed1ddc34],.dt-row[data-v-ed1ddc34]{display:grid}.dt-groups[data-v-ed1ddc34]{border-bottom:1px solid var(--border)}.dt-group[data-v-ed1ddc34],.dt-groups[data-v-ed1ddc34]{background:var(--surface-2)}.dt-group[data-v-ed1ddc34]{font-size:10px;font-weight:700;letter-spacing:.08em;padding:8px 14px;text-align:center;text-transform:uppercase}.dt-group.edge[data-v-ed1ddc34]{border-left:1px solid var(--border)}.dt-head[data-v-ed1ddc34]{border-bottom:2px solid var(--primary)}.dt-th[data-v-ed1ddc34]{background:var(--surface);color:var(--text-2);font-size:10.5px;font-weight:700;letter-spacing:.05em;overflow:hidden;padding:10px 14px;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.dt-row[data-v-ed1ddc34]{align-items:center;border-bottom:1.5px dotted var(--border-strong)}.dt-row.click[data-v-ed1ddc34]{cursor:pointer}.dt-row[data-v-ed1ddc34]:hover,.dt-row:hover .dt-td.sticky[data-v-ed1ddc34]{background:var(--surface-2)}.dt-td[data-v-ed1ddc34]{background:transparent;font-size:12.5px;min-width:0;padding:13px 14px}.dt-td.mono[data-v-ed1ddc34]{font-family:var(--mono)}.sticky[data-v-ed1ddc34]{background:var(--surface);box-shadow:1px 0 0 var(--border);left:0;position:sticky;z-index:2}.dt-group.sticky[data-v-ed1ddc34]{background:var(--surface-2)}.dt-bar[data-v-ed1ddc34]{align-items:center;display:flex;gap:9px;justify-content:flex-end}.dt-bar span[data-v-ed1ddc34]{min-width:52px;text-align:right}.dt-loading[data-v-ed1ddc34]{padding:4px 14px}.dt-skel-row[data-v-ed1ddc34]{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;grid-gap:16px;border-bottom:1.5px dotted var(--border-strong);gap:16px;padding:14px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/DataTable.vue?vue&type=template&id=ed1ddc34&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ie-card ie-card--flush dt"
  }, [_vm._ssrNode("<div class=\"ie-card-head\" data-v-ed1ddc34>", "</div>", [_vm._ssrNode("<div data-v-ed1ddc34><div class=\"ie-card-title\" data-v-ed1ddc34>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</div> " + (_vm.sub ? "<div class=\"ie-card-sub\" data-v-ed1ddc34>" + _vm._ssrEscape(_vm._s(_vm.sub)) + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"dt-tools\" data-v-ed1ddc34>", "</div>", [_vm.note ? _vm._ssrNode("<div class=\"ie-note\" data-v-ed1ddc34>", "</div>", [_c('Icon', {
    staticStyle: {
      "color": "var(--warning)"
    },
    attrs: {
      "name": "info",
      "size": 14
    }
  }), _vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.note)))], 2) : _vm._e(), _vm._ssrNode(" "), _vm.searchable ? _vm._ssrNode("<div class=\"ie-search\" data-v-ed1ddc34>", "</div>", [_c('Icon', {
    attrs: {
      "name": "search",
      "size": 16
    }
  }), _vm._ssrNode(" <input" + _vm._ssrAttr("placeholder", _vm.searchPlaceholder) + _vm._ssrAttr("value", _vm.query) + " data-v-ed1ddc34>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._t("tools")], 2)], 2), _vm._ssrNode(" "), _vm._t("above"), _vm._ssrNode(" "), _vm.error ? _vm._ssrNode("<div class=\"ie-error\" style=\"margin:14px 20px 0\" data-v-ed1ddc34>", "</div>", [_c('Icon', {
    attrs: {
      "name": "alert",
      "size": 16
    }
  }), _vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.error)))], 2) : _vm._e(), _vm._ssrNode(" <div" + _vm._ssrClass("ie-table-scroll ie-scroll", {
    busy: _vm.loading
  }) + " data-v-ed1ddc34><div" + _vm._ssrStyle(null, {
    minWidth: _vm.minWidth
  }, null) + " data-v-ed1ddc34>" + (_vm.groups.length ? "<div class=\"dt-groups\"" + _vm._ssrStyle(null, _vm.gridStyle, null) + " data-v-ed1ddc34>" + _vm._ssrList(_vm.groups, function (g, i) {
    return "<div" + _vm._ssrClass("dt-group", {
      sticky: i === 0 && _vm.stickyFirst,
      edge: i > 0
    }) + _vm._ssrStyle(null, {
      gridColumn: 'span ' + g.span,
      color: g.color || 'var(--text-3)'
    }, null) + " data-v-ed1ddc34>" + _vm._ssrEscape(_vm._s(g.label)) + "</div>";
  }) + "</div>" : "<!---->") + " <div class=\"dt-head\"" + _vm._ssrStyle(null, _vm.gridStyle, null) + " data-v-ed1ddc34>" + _vm._ssrList(_vm.columns, function (c, i) {
    return "<div" + _vm._ssrClass("dt-th", {
      sticky: i === 0 && _vm.stickyFirst
    }) + _vm._ssrStyle(null, {
      textAlign: c.align || 'left'
    }, null) + " data-v-ed1ddc34>" + _vm._ssrEscape(_vm._s(c.label)) + "</div>";
  }) + "</div> " + _vm._ssrList(_vm.shownRows, function (r, ri) {
    return "<div" + _vm._ssrClass("dt-row", {
      click: _vm.clickable
    }) + _vm._ssrStyle(null, _vm.gridStyle, null) + " data-v-ed1ddc34>" + _vm._ssrList(_vm.columns, function (c, i) {
      return "<div" + _vm._ssrClass("dt-td", {
        sticky: i === 0 && _vm.stickyFirst,
        mono: c.mono
      }) + _vm._ssrStyle(null, {
        textAlign: c.align || 'left',
        fontWeight: c.weight || (i === 0 ? 700 : 500),
        color: _vm.cellColor(c, r)
      }, null) + " data-v-ed1ddc34>" + (c.type === 'band' ? "<span class=\"ie-band\"" + _vm._ssrStyle(null, {
        background: _vm.bandSoftVar(r[c.key]),
        color: _vm.bandColorVar(r[c.key])
      }, null) + " data-v-ed1ddc34>" + _vm._ssrEscape(_vm._s(r[c.key] || '—')) + "</span>" : c.type === 'pill' ? "<span class=\"ie-pill\"" + _vm._ssrStyle(null, _vm.pillStyle(c, r), null) + " data-v-ed1ddc34><span class=\"ie-pill-dot\" data-v-ed1ddc34></span>" + _vm._ssrEscape(_vm._s(_vm.display(c, r))) + "</span>" : c.type === 'bar' ? "<div class=\"dt-bar\" data-v-ed1ddc34><div class=\"ie-track\" style=\"width:54px;height:6px\" data-v-ed1ddc34><div" + _vm._ssrStyle({
        "height": "100%",
        "border-radius": "999px"
      }, {
        width: _vm.barWidth(c, r),
        background: _vm.cellColor(c, r) || 'var(--primary)'
      }, null) + " data-v-ed1ddc34></div></div> <span data-v-ed1ddc34>" + _vm._ssrEscape(_vm._s(_vm.display(c, r))) + "</span></div>" : "<div" + _vm._ssrAttr("title", String(_vm.display(c, r))) + " class=\"ie-ellip\" data-v-ed1ddc34>" + _vm._ssrEscape(_vm._s(_vm.display(c, r))) + "</div>") + "</div>";
    }) + "</div>";
  }) + " " + (!_vm.loading && !_vm.shownRows.length ? "<div class=\"ie-empty\" data-v-ed1ddc34>" + _vm._ssrEscape(_vm._s(_vm.query ? 'No rows on this page match “' + _vm.query + '”.' : _vm.emptyText)) + "</div>" : "<!---->") + " " + (_vm.loading && !_vm.rows.length ? "<div class=\"dt-loading\" data-v-ed1ddc34>" + _vm._ssrList(6, function (i) {
    return "<div class=\"dt-skel-row\" data-v-ed1ddc34>" + _vm._ssrList(4, function (j) {
      return "<div class=\"ie-skel\" style=\"height:10px\" data-v-ed1ddc34></div>";
    }) + "</div>";
  }) + "</div>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"ie-table-foot\" data-v-ed1ddc34>", "</div>", [_vm._ssrNode("<span data-v-ed1ddc34>" + _vm._ssrEscape(_vm._s(_vm.footer)) + "</span> "), _vm.paged ? _vm._ssrNode("<div style=\"display:flex;gap:7px\" data-v-ed1ddc34>", "</div>", [_vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.page <= 1 || _vm.loading) + " class=\"ie-btn\" data-v-ed1ddc34>", "</button>", [_c('Icon', {
    attrs: {
      "name": "arrowL",
      "size": 14
    }
  }), _vm._ssrNode("Previous")], 2), _vm._ssrNode(" "), _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.pages > 0 && _vm.page >= _vm.pages || _vm.loading) + " class=\"ie-btn\" data-v-ed1ddc34>", "</button>", [_vm._ssrNode("Next"), _c('Icon', {
    attrs: {
      "name": "arrowR",
      "size": 14
    }
  })], 2)], 2) : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/DataTable.vue?vue&type=template&id=ed1ddc34&scoped=true

// EXTERNAL MODULE: ./components/ui/Icon.vue + 2 modules
var Icon = __webpack_require__(13);

// EXTERNAL MODULE: ./js_modules/pages.js
var pages = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/DataTable.vue?vue&type=script&lang=js



// The design's shared data table: optional group header row, primary-rule header,
// dotted row dividers, sticky first column, and cell types (text | band | pill | bar).
// columns: [{ key, label, width?, align?, mono?, weight?, type?, format?(v,row), color?(v,row), soft?(v,row), pct?(v,row) }]
/* harmony default export */ var DataTablevue_type_script_lang_js = ({
  name: 'DataTable',
  components: {
    Icon: Icon["default"]
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    sub: {
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    columns: {
      type: Array,
      required: true
    },
    groups: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: '900px'
    },
    stickyFirst: {
      type: Boolean,
      default: true
    },
    searchable: {
      type: Boolean,
      default: false
    },
    searchKeys: {
      type: Array,
      default: () => []
    },
    searchPlaceholder: {
      type: String,
      default: 'Filter this page…'
    },
    clickable: {
      type: Boolean,
      default: false
    },
    footer: {
      type: String,
      default: ''
    },
    paged: {
      type: Boolean,
      default: true
    },
    page: {
      type: Number,
      default: 1
    },
    pages: {
      type: Number,
      default: 0
    },
    emptyText: {
      type: String,
      default: 'No rows for this filter combination.'
    }
  },
  data() {
    return {
      query: ''
    };
  },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: this.columns.map(c => c.width || 'minmax(0, 1fr)').join(' ')
      };
    },
    shownRows() {
      const q = this.query.trim().toLowerCase();
      if (!q) return this.rows;
      const keys = this.searchKeys.length ? this.searchKeys : [this.columns[0].key];
      return this.rows.filter(r => keys.some(k => {
        var _r$k;
        return String((_r$k = r[k]) !== null && _r$k !== void 0 ? _r$k : '').toLowerCase().includes(q);
      }));
    }
  },
  methods: {
    bandColorVar: pages["c" /* bandColorVar */],
    bandSoftVar: pages["d" /* bandSoftVar */],
    display(c, r) {
      const v = r[c.key];
      if (c.format) return c.format(v, r);
      return v === null || v === undefined || v === '' ? '—' : v;
    },
    cellColor(c, r) {
      return c.color ? c.color(r[c.key], r) : '';
    },
    pillStyle(c, r) {
      return {
        color: this.cellColor(c, r) || 'var(--text-2)',
        background: c.soft ? c.soft(r[c.key], r) : 'var(--surface-3)'
      };
    },
    barWidth(c, r) {
      const p = c.pct ? c.pct(r[c.key], r) : Number(r[c.key]);
      return Number.isFinite(p) ? Math.max(0, Math.min(100, p)) + '%' : '0%';
    }
  }
});
// CONCATENATED MODULE: ./components/ui/DataTable.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_DataTablevue_type_script_lang_js = (DataTablevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/DataTable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_DataTablevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ed1ddc34",
  "359ea1ae"
  
)

/* harmony default export */ var DataTable = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7a1d19fd", content, true, context)
};

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_dashboard_vue_vue_type_style_index_0_id_5818b5a1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_dashboard_vue_vue_type_style_index_0_id_5818b5a1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_dashboard_vue_vue_type_style_index_0_id_5818b5a1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_dashboard_vue_vue_type_style_index_0_id_5818b5a1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_dashboard_vue_vue_type_style_index_0_id_5818b5a1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".review-link[data-v-5818b5a1]{align-items:center;color:var(--accent);display:inline-flex;font-size:12px;font-weight:700;gap:5px;margin-top:8px;position:relative}.review-link[data-v-5818b5a1]:hover{color:var(--accent);-webkit-text-decoration:underline;text-decoration:underline}.split-mini[data-v-5818b5a1]{border-radius:999px;height:7px;margin-top:12px}.split-big[data-v-5818b5a1],.split-mini[data-v-5818b5a1]{background:var(--surface-3);display:flex;overflow:hidden}.split-big[data-v-5818b5a1]{border-radius:8px;height:26px}.eff-row[data-v-5818b5a1]{display:grid;grid-template-columns:196px minmax(0,1fr) 80px;grid-gap:14px;align-items:center;gap:14px;margin-bottom:15px}.derived[data-v-5818b5a1]{border:1px solid var(--border);border-radius:4px;color:var(--text-3);font-size:9.5px;font-weight:700;letter-spacing:.05em;margin-left:6px;padding:0 4px;text-transform:uppercase}.leg-head[data-v-5818b5a1]{align-items:center;color:var(--text-2);display:flex;font-size:11.5px;font-weight:700;gap:6px}.leg-val[data-v-5818b5a1]{font-size:15px;font-weight:600;margin-top:2px}.leg-val span[data-v-5818b5a1]{color:var(--text-3);font-size:11px}@media (max-width:520px){.eff-row[data-v-5818b5a1]{grid-template-columns:1fr 64px}.eff-row>.ie-track[data-v-5818b5a1]{grid-column:1/-1;grid-row:2}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/idb_dashboard.vue?vue&type=template&id=5818b5a1&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('PageHeader', {
    attrs: {
      "page": "idb",
      "loading": _vm.loading || _vm.feederLossLoading || _vm.customerLossLoading
    }
  }, [_c('FilterSelect', {
    attrs: {
      "label": "Feeder",
      "icon": "feeder",
      "options": [{
        value: 'All',
        label: 'All IDB feeders'
      }, ..._vm.knownFeeders],
      "searchable": true,
      "pop-width": "340px"
    },
    on: {
      "change": _vm.onFilterChange
    },
    model: {
      value: _vm.selectedFeeder,
      callback: function ($$v) {
        _vm.selectedFeeder = $$v;
      },
      expression: "selectedFeeder"
    }
  }), _vm._v(" "), _c('FilterDate', {
    attrs: {
      "type": "month",
      "label": "Month",
      "value": _vm.selectedDate,
      "max": _vm.maxMonth
    },
    on: {
      "change": _vm.onDateChange
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-page\" data-v-5818b5a1>", "</div>", [_vm._ssrNode("<div role=\"tablist\" class=\"ie-tabs\" data-v-5818b5a1>", "</div>", _vm._l(_vm.tabs, function (t) {
    return _vm._ssrNode("<button role=\"tab\"" + _vm._ssrAttr("aria-selected", _vm.tab === t.key) + _vm._ssrClass(null, {
      on: _vm.tab === t.key
    }) + " data-v-5818b5a1>", "</button>", [_c('Icon', {
      attrs: {
        "name": t.icon,
        "size": 15
      }
    }), _vm._ssrNode(_vm._ssrEscape(_vm._s(t.label) + "\n            "))], 2);
  }), 0), _vm._ssrNode(" "), _vm.tab === 'dash' ? [_vm.error ? _vm._ssrNode("<div class=\"ie-error\" data-v-5818b5a1>", "</div>", [_c('Icon', {
    attrs: {
      "name": "alert",
      "size": 16
    }
  }), _vm._ssrNode(_vm._ssrEscape("Couldn't load IDB dashboard: " + _vm._s(_vm.error) + "\n                ") + "<button class=\"ie-btn\" data-v-5818b5a1>Retry</button>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.loading && !_vm.loaded ? _c('SkeletonPage') : _c('div', {
    staticClass: "ie-fadein"
  }, [_c('div', {
    staticClass: "ie-grid",
    staticStyle: {
      "grid-template-columns": "repeat(auto-fit, minmax(230px, 1fr))"
    }
  }, [_c('div', {
    staticClass: "ie-hero",
    staticStyle: {
      "padding": "20px 22px"
    }
  }, [_c('div', {
    staticClass: "ie-hero-kicker"
  }, [_vm._v("Total energy")]), _vm._v(" "), _c('div', {
    staticClass: "ie-hero-value",
    staticStyle: {
      "font-size": "36px",
      "margin-top": "12px"
    }
  }, [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.kpis.total_energy_mwh)
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-hero-unit"
  }, [_vm._v("MWh · " + _vm._s(_vm.dash.period || '—'))])]), _vm._v(" "), _c('div', {
    staticClass: "ie-card",
    staticStyle: {
      "padding": "20px 22px"
    }
  }, [_c('div', {
    staticClass: "ie-kpi-head"
  }, [_c('span', {
    staticClass: "ie-ico tone-soe"
  }, [_c('Icon', {
    attrs: {
      "name": "feeder",
      "size": 16
    }
  })], 1), _c('span', {
    staticClass: "ie-kpi-label"
  }, [_vm._v("Feeders monitored")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-value",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.kpis.total_feeders)
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-unit",
    staticStyle: {
      "font-size": "11.5px",
      "margin-top": "4px"
    }
  }, [_vm._v("IDB feeders")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-card ie-card--accent",
    staticStyle: {
      "padding": "20px 22px"
    }
  }, [_c('div', {
    staticClass: "ie-diag ie-layer",
    staticStyle: {
      "color": "var(--accent)",
      "opacity": ".06"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-head"
  }, [_c('span', {
    staticClass: "ie-ico tone-accent"
  }, [_c('Icon', {
    attrs: {
      "name": "alert",
      "size": 16
    }
  })], 1), _c('span', {
    staticClass: "ie-kpi-label"
  }, [_vm._v("Flagged IDB meters")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-value",
    staticStyle: {
      "font-weight": "600",
      "color": "var(--accent)"
    }
  }, [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.kpis.total_flagged_idb_meters)
    }
  })], 1), _vm._v(" "), _c('nuxt-link', {
    staticClass: "review-link",
    attrs: {
      "to": "/idb_events"
    }
  }, [_vm._v("Review in IDB Events"), _c('Icon', {
    attrs: {
      "name": "arrowR",
      "size": 14
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-card",
    staticStyle: {
      "padding": "20px 22px"
    }
  }, [_c('div', {
    staticClass: "ie-kpi-head"
  }, [_c('span', {
    staticClass: "ie-ico tone-primary"
  }, [_c('Icon', {
    attrs: {
      "name": "dt",
      "size": 16
    }
  })], 1), _c('span', {
    staticClass: "ie-kpi-label"
  }, [_vm._v("Total DTs")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-value",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.dtSummary.total_dts)
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "split-mini"
  }, [_c('div', {
    staticClass: "ie-grow",
    style: {
      width: _vm.share(_vm.dtSummary.public_dts, _vm.dtSummary.total_dts),
      background: 'var(--soe)'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ie-grow",
    style: {
      width: _vm.share(_vm.dtSummary.private_dts, _vm.dtSummary.total_dts),
      background: 'var(--primary)'
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ie-legend",
    staticStyle: {
      "margin-top": "8px",
      "gap": "12px"
    }
  }, [_c('span', [_c('span', {
    staticClass: "ie-swatch",
    staticStyle: {
      "width": "7px",
      "height": "7px",
      "border-radius": "2px",
      "background": "var(--soe)"
    }
  }), _vm._v(_vm._s(_vm.fmt(_vm.dtSummary.public_dts)) + " public")]), _vm._v(" "), _c('span', [_c('span', {
    staticClass: "ie-swatch",
    staticStyle: {
      "width": "7px",
      "height": "7px",
      "border-radius": "2px",
      "background": "var(--primary)"
    }
  }), _vm._v(_vm._s(_vm.fmt(_vm.dtSummary.private_dts)) + " private")])])])]), _vm._v(" "), _c('div', {
    staticClass: "ie-grid",
    staticStyle: {
      "grid-template-columns": "repeat(auto-fit, minmax(340px, 1fr))"
    }
  }, [_c('div', {
    staticClass: "ie-card",
    staticStyle: {
      "padding": "20px 22px"
    }
  }, [_c('div', {
    staticClass: "ie-card-title"
  }, [_vm._v("Loss along the chain")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "18px"
    }
  }), _vm._v(" "), _vm._l(_vm.losses, function (l) {
    return _c('div', {
      key: l.label,
      staticStyle: {
        "margin-bottom": "18px"
      }
    }, [_c('div', {
      staticStyle: {
        "display": "flex",
        "align-items": "baseline",
        "justify-content": "space-between",
        "gap": "12px",
        "margin-bottom": "7px"
      }
    }, [_c('span', {
      staticStyle: {
        "font-size": "13px",
        "font-weight": "700"
      }
    }, [_vm._v(_vm._s(l.label))]), _vm._v(" "), _c('span', {
      staticStyle: {
        "display": "flex",
        "align-items": "baseline",
        "gap": "10px"
      }
    }, [_c('span', {
      staticClass: "mono",
      staticStyle: {
        "font-size": "12.5px",
        "font-weight": "600",
        "color": "var(--text-2)"
      }
    }, [_vm._v(_vm._s(_vm.fmt(l.mwh)) + " MWh")]), _vm._v(" "), _c('span', {
      staticClass: "mono",
      staticStyle: {
        "font-size": "18px",
        "font-weight": "600",
        "color": "var(--danger)"
      }
    }, [_vm._v(_vm._s(_vm.pctText(l.pct)))])])]), _vm._v(" "), _c('div', {
      staticClass: "ie-track",
      staticStyle: {
        "height": "10px"
      }
    }, [_c('div', {
      staticClass: "ie-fill",
      style: {
        width: _vm.clampW(l.pct),
        background: 'var(--danger)'
      }
    })])]);
  }), _vm._v(" "), _c('div', {
    staticClass: "ie-card-note",
    staticStyle: {
      "margin-top": "0"
    }
  }, [_c('Icon', {
    attrs: {
      "name": "info",
      "size": 14
    }
  }), _vm._v("Only about a third of IDB DTs carry a reading, so loss reflects metering coverage as much as real loss.")], 1)], 2), _vm._v(" "), _c('div', {
    staticClass: "ie-card",
    staticStyle: {
      "padding": "20px 22px"
    }
  }, [_c('div', {
    staticClass: "ie-card-title"
  }, [_vm._v("Commercial efficiency")]), _vm._v(" "), _c('div', {
    staticClass: "ie-card-sub",
    staticStyle: {
      "margin-bottom": "18px"
    }
  }, [_vm._v("ATC&C = 1 − (billing × collection)")]), _vm._v(" "), _vm._l(_vm.efficiency, function (e) {
    return _c('div', {
      key: e.label,
      staticClass: "eff-row"
    }, [_c('div', {
      staticStyle: {
        "font-size": "12.5px",
        "font-weight": "700"
      }
    }, [_vm._v(_vm._s(e.label)), e.derived ? _c('span', {
      staticClass: "derived"
    }, [_vm._v("derived")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "ie-track",
      staticStyle: {
        "height": "10px"
      }
    }, [_c('div', {
      staticClass: "ie-fill",
      style: {
        width: _vm.clampW(e.value),
        background: e.color
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "mono",
      staticStyle: {
        "text-align": "right",
        "font-size": "15px",
        "font-weight": "600"
      },
      style: {
        color: e.color
      }
    }, [_vm._v(_vm._s(_vm.pctText(e.value)))])]);
  }), _vm._v(" "), _c('div', {
    staticClass: "ie-card-note",
    staticStyle: {
      "margin-top": "4px"
    }
  }, [_c('Icon', {
    attrs: {
      "name": "info",
      "size": 14
    }
  }), _vm._v("Billing efficiency can exceed 100% where DT metering is incomplete.")], 1)], 2)]), _vm._v(" "), _c('div', {
    staticClass: "ie-grid",
    staticStyle: {
      "grid-template-columns": "repeat(auto-fit, minmax(240px, 1fr))"
    }
  }, [_c('div', {
    staticClass: "ie-card"
  }, [_c('div', {
    staticClass: "ie-card-title",
    staticStyle: {
      "font-size": "14px",
      "margin-bottom": "12px"
    }
  }, [_vm._v("Customers")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "gap": "14px"
    }
  }, [_c('Donut', {
    attrs: {
      "segments": _vm.customerSegments,
      "size": 104,
      "r": 54,
      "stroke": 18
    }
  }, [_c('span', {
    staticClass: "mono",
    staticStyle: {
      "font-size": "16px",
      "font-weight": "600"
    }
  }, [_vm._v(_vm._s(_vm.fmt(_vm.customers.total)))])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "gap": "10px"
    }
  }, _vm._l(_vm.customerLegend, function (c) {
    return _c('div', {
      key: c.label
    }, [_c('div', {
      staticClass: "leg-head"
    }, [_c('span', {
      staticClass: "ie-swatch",
      staticStyle: {
        "width": "8px",
        "height": "8px",
        "border-radius": "2px"
      },
      style: {
        background: c.color
      }
    }), _vm._v(_vm._s(c.label))]), _vm._v(" "), _c('div', {
      staticClass: "mono leg-val"
    }, [_vm._v(_vm._s(c.value) + " "), _c('span', [_vm._v(_vm._s(c.pct))])])]);
  }), 0)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "ie-card"
  }, [_c('div', {
    staticClass: "ie-card-title",
    staticStyle: {
      "font-size": "14px",
      "margin-bottom": "14px"
    }
  }, [_vm._v("Revenue")]), _vm._v(" "), _vm._l(_vm.revenueRows, function (r) {
    return _c('div', {
      key: r.label,
      staticStyle: {
        "margin-bottom": "12px"
      }
    }, [_c('div', {
      staticClass: "ie-bar-row"
    }, [_c('span', {
      staticStyle: {
        "font-size": "12px",
        "color": "var(--text-2)"
      }
    }, [_vm._v(_vm._s(r.label))]), _c('span', {
      staticClass: "mono",
      staticStyle: {
        "font-size": "15px",
        "font-weight": "600"
      }
    }, [_vm._v(_vm._s(r.value))])]), _vm._v(" "), _c('div', {
      staticClass: "ie-track",
      staticStyle: {
        "height": "8px"
      }
    }, [_c('div', {
      staticClass: "ie-fill",
      style: {
        width: r.w,
        background: r.color
      }
    })])]);
  }), _vm._v(" "), _vm.collRatio ? _c('div', {
    staticStyle: {
      "font-size": "11px",
      "color": "var(--text-3)",
      "font-weight": "600",
      "line-height": "1.4"
    }
  }, [_vm._v("Collected is " + _vm._s(_vm.collRatio) + " of billed — payments include arrears.")]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "ie-card"
  }, [_c('div', {
    staticClass: "ie-card-title",
    staticStyle: {
      "font-size": "14px",
      "margin-bottom": "14px"
    }
  }, [_vm._v("Energy by customer type")]), _vm._v(" "), _c('div', {
    staticClass: "split-big"
  }, [_c('div', {
    staticClass: "ie-grow",
    style: {
      width: _vm.clampW(_vm.energy.nmd_energy_pct),
      background: 'var(--ca)'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ie-grow",
    style: {
      width: _vm.clampW(_vm.energy.md_energy_pct),
      background: 'var(--soe)'
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "justify-content": "space-between",
      "gap": "10px",
      "margin-top": "12px"
    }
  }, [_c('div', [_c('div', {
    staticClass: "leg-head"
  }, [_c('span', {
    staticClass: "ie-swatch",
    staticStyle: {
      "width": "8px",
      "height": "8px",
      "border-radius": "2px",
      "background": "var(--ca)"
    }
  }), _vm._v("NMD")]), _vm._v(" "), _c('div', {
    staticClass: "mono leg-val"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.nmdMwh)) + " "), _c('span', [_vm._v("MWh")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "11px",
      "color": "var(--text-3)",
      "font-weight": "600"
    }
  }, [_vm._v(_vm._s(_vm.pctText(_vm.energy.nmd_energy_pct)))])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_c('div', {
    staticClass: "leg-head",
    staticStyle: {
      "justify-content": "flex-end"
    }
  }, [_c('span', {
    staticClass: "ie-swatch",
    staticStyle: {
      "width": "8px",
      "height": "8px",
      "border-radius": "2px",
      "background": "var(--soe)"
    }
  }), _vm._v("MD")]), _vm._v(" "), _c('div', {
    staticClass: "mono leg-val"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.energy.md_energy_mwh)) + " "), _c('span', [_vm._v("MWh")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "11px",
      "color": "var(--text-3)",
      "font-weight": "600"
    }
  }, [_vm._v(_vm._s(_vm.pctText(_vm.energy.md_energy_pct)))])])])]), _vm._v(" "), _c('div', {
    staticClass: "ie-card",
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "align-items": "center"
    }
  }, [_c('div', {
    staticClass: "ie-card-title",
    staticStyle: {
      "font-size": "14px",
      "align-self": "flex-start"
    }
  }, [_vm._v("Meter communication")]), _vm._v(" "), _c('Gauge', {
    staticStyle: {
      "margin-top": "10px"
    },
    attrs: {
      "pct": _vm.commPct,
      "color": _vm.commColor,
      "width": 176
    }
  }, [_c('span', {
    staticClass: "mono",
    staticStyle: {
      "font-size": "24px",
      "font-weight": "600"
    },
    style: {
      color: _vm.commColor
    }
  }, [_vm._v(_vm._s(_vm.commPct.toFixed(1)) + "%")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "11px",
      "color": "var(--text-3)",
      "font-weight": "600",
      "margin-top": "8px"
    }
  }, [_vm._v("of meters communicating")])], 1)])])] : _vm.tab === 'feeder' ? _c('DataTable', {
    staticClass: "ie-fadein",
    attrs: {
      "title": "Feeder → DT loss",
      "sub": _vm.feederLossTotal ? _vm.fmt(_vm.feederLossTotal) + ' feeder-months' + (_vm.dash.period ? ' · ' + _vm.dash.period : '') : '',
      "note": "About a third of IDB DTs carry a reading — loss % reflects metering coverage.",
      "columns": _vm.feederLossColumns,
      "groups": _vm.feederLossGroups,
      "rows": _vm.feederLossRows,
      "loading": _vm.feederLossLoading,
      "error": _vm.feederLossError ? 'Couldn\'t load Feeder to DT loss table: ' + _vm.feederLossError : '',
      "min-width": "1480px",
      "searchable": "",
      "search-placeholder": "Filter by feeder…",
      "footer": _vm.pageLabel(_vm.feederLossPage, _vm.feederLossTotalPages, _vm.feederLossTotal),
      "page": _vm.feederLossPage,
      "pages": _vm.feederLossTotalPages
    },
    on: {
      "page": _vm.goToFeederLossPage
    }
  }) : _c('DataTable', {
    staticClass: "ie-fadein",
    attrs: {
      "title": "Customer → DT loss",
      "sub": _vm.customerLossTotal ? _vm.fmt(_vm.customerLossTotal) + ' feeders' + (_vm.dash.period ? ' · ' + _vm.dash.period : '') : '',
      "note": "Postpaid MD consumption reads 0 until that month's schedule posts.",
      "columns": _vm.customerLossColumns,
      "groups": _vm.customerLossGroups,
      "rows": _vm.customerLossRows,
      "loading": _vm.customerLossLoading,
      "error": _vm.customerLossError ? 'Couldn\'t load Customer to DT loss table: ' + _vm.customerLossError : '',
      "min-width": "2000px",
      "searchable": "",
      "search-placeholder": "Filter by feeder…",
      "footer": _vm.pageLabel(_vm.customerLossPage, _vm.customerLossTotalPages, _vm.customerLossTotal),
      "page": _vm.customerLossPage,
      "pages": _vm.customerLossTotalPages
    },
    on: {
      "page": _vm.goToCustomerLossPage
    }
  })], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/idb_dashboard.vue?vue&type=template&id=5818b5a1&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(49);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(50);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(51);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(52);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(53);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(54);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(55);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(56);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(57);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(58);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(59);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(60);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(61);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(62);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(63);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(64);

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

// EXTERNAL MODULE: ./components/ui/Gauge.vue + 4 modules
var Gauge = __webpack_require__(109);

// EXTERNAL MODULE: ./components/ui/DataTable.vue + 4 modules
var DataTable = __webpack_require__(118);

// EXTERNAL MODULE: ./components/AnimatedValue.vue + 4 modules
var AnimatedValue = __webpack_require__(90);

// EXTERNAL MODULE: ./js_modules/controlCenterApi.js
var controlCenterApi = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/idb_dashboard.vue?vue&type=script&lang=js


























// Wired to three endpoints sharing one filter row (see static/api_live_responses3.md #8–#10):
//   - Dashboard tab: GET /idb/dashboard?feeder=...&date=YYYY-MM
//   - Feeder → DT loss tab: GET /idb/feeder-dt-loss?feeder=...&date=YYYY-MM&page=...&page_size=...
//   - Customer → DT loss tab: GET /idb/customer-dt-loss?feeder=...&date=YYYY-MM&page=...&page_size=...
// Changing feeder/date refetches all three together since the filters aren't per-tab.

const IDB_PAGE_SIZE = 50;
function num(v) {
  const n = Number(v);
  return v === null || v === undefined || !Number.isFinite(n) ? null : n;
}
function pct(v) {
  const n = num(v);
  return n === null ? '—' : n.toFixed(2) + '%';
}
function lossTone(v) {
  const n = num(v);
  if (n === null) return 'var(--text-3)';
  return n >= 40 ? 'var(--danger)' : n >= 15 ? 'var(--warning)' : 'var(--success)';
}
/* harmony default export */ var idb_dashboardvue_type_script_lang_js = ({
  layout: 'dashboard',
  components: {
    Icon: Icon["default"],
    PageHeader: PageHeader["default"],
    FilterSelect: FilterSelect["default"],
    FilterDate: FilterDate["default"],
    SkeletonPage: SkeletonPage["default"],
    Donut: Donut["default"],
    Gauge: Gauge["default"],
    DataTable: DataTable["default"],
    AnimatedValue: AnimatedValue["default"]
  },
  data() {
    return {
      tab: 'dash',
      tabs: [{
        key: 'dash',
        label: 'Dashboard',
        icon: 'gauge'
      }, {
        key: 'feeder',
        label: 'Feeder → DT loss',
        icon: 'table'
      }, {
        key: 'customer',
        label: 'Customer → DT loss',
        icon: 'table'
      }],
      selectedFeeder: 'All',
      selectedDate: '',
      maxMonth: Object(controlCenterApi["d" /* currentMonthStr */])(),
      knownFeeders: [],
      loading: true,
      loaded: false,
      error: null,
      dash: {},
      feederLossLoading: false,
      feederLossError: null,
      feederLossPage: 1,
      feederLossTotal: 0,
      feederLossTotalPages: 0,
      feederLossRows: [],
      customerLossLoading: false,
      customerLossError: null,
      customerLossPage: 1,
      customerLossTotal: 0,
      customerLossTotalPages: 0,
      customerLossRows: [],
      feederLossGroups: [{
        label: 'Feeder',
        span: 3
      }, {
        label: 'Public DTs',
        span: 2,
        color: 'var(--soe)'
      }, {
        label: 'Private DTs',
        span: 2,
        color: 'var(--primary-press)'
      }, {
        label: 'Energy · kWh',
        span: 2
      }, {
        label: 'Loss',
        span: 2,
        color: 'var(--danger)'
      }],
      feederLossColumns: [{
        key: 'feeder',
        label: 'Feeder',
        width: 'minmax(240px, 2.4fr)'
      }, {
        key: 'date',
        label: 'Month',
        width: '90px',
        mono: true
      }, {
        key: 'band',
        label: 'Band',
        width: '64px',
        type: 'band'
      }, {
        key: 'total_public_dts',
        label: 'Count',
        width: '80px',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'public_dts_energy_kwh',
        label: 'Energy',
        width: 'minmax(132px, 1fr)',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'total_private_dts',
        label: 'Count',
        width: '80px',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'private_dts_energy_kwh',
        label: 'Energy',
        width: 'minmax(132px, 1fr)',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'total_dt_energy_kwh',
        label: 'At DTs',
        width: 'minmax(132px, 1fr)',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'feeder_energy_kwh',
        label: 'At feeder',
        width: 'minmax(132px, 1fr)',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'feeder_to_dt_loss_kwh',
        label: 'kWh',
        width: 'minmax(132px, 1fr)',
        align: 'right',
        mono: true,
        weight: 700,
        format: controlCenterApi["e" /* formatNumber */],
        color: () => 'var(--danger)'
      }, {
        key: 'feeder_loss_pct',
        label: 'Loss %',
        width: '150px',
        align: 'right',
        mono: true,
        weight: 700,
        type: 'bar',
        format: pct,
        color: lossTone
      }],
      customerLossGroups: [{
        label: 'Feeder',
        span: 1
      }, {
        label: 'Customers',
        span: 4,
        color: 'var(--ca)'
      }, {
        label: 'Communication',
        span: 2,
        color: 'var(--info)'
      }, {
        label: 'Consumption · MWh',
        span: 5,
        color: 'var(--primary-press)'
      }, {
        label: 'Efficiency',
        span: 3,
        color: 'var(--soe)'
      }, {
        label: 'Customer → DT loss',
        span: 2,
        color: 'var(--danger)'
      }],
      customerLossColumns: [{
        key: 'feeder',
        label: 'Feeder',
        width: 'minmax(240px, 2.4fr)'
      }, {
        key: 'all_customers',
        label: 'All',
        width: '84px',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'postpaid_md',
        label: 'Postpaid MD',
        width: '96px',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'prepaid_md',
        label: 'Prepaid MD',
        width: '92px',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'idb_prepay',
        label: 'IDB prepay',
        width: '92px',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'comms_pct',
        label: 'Comms',
        width: '80px',
        align: 'right',
        mono: true,
        format: pct
      }, {
        key: 'total_meters_communicating',
        label: 'Meters',
        width: '76px',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'dt_consumption_mwh',
        label: 'DT',
        width: 'minmax(132px, 1fr)',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'idb_prepay_consumption_mwh',
        label: 'IDB prepay',
        width: 'minmax(132px, 1fr)',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'md_prepay_consumption_mwh',
        label: 'MD prepay',
        width: 'minmax(132px, 1fr)',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'postpaid_md_consumption_mwh',
        label: 'Postpaid',
        width: 'minmax(132px, 1fr)',
        align: 'right',
        mono: true,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'idb_md_consumption_mwh',
        label: 'IDB + MD',
        width: 'minmax(132px, 1fr)',
        align: 'right',
        mono: true,
        weight: 700,
        format: controlCenterApi["e" /* formatNumber */]
      }, {
        key: 'collection_efficiency_pct',
        label: 'CE',
        width: '84px',
        align: 'right',
        mono: true,
        format: pct
      }, {
        key: 'billing_efficiency_pct',
        label: 'BE',
        width: '84px',
        align: 'right',
        mono: true,
        format: pct,
        color: v => num(v) > 100 ? 'var(--warning)' : ''
      }, {
        key: 'atc_and_c_pct',
        label: 'ATC&C',
        width: '84px',
        align: 'right',
        mono: true,
        weight: 700,
        format: pct,
        color: v => num(v) < 0 ? 'var(--warning)' : lossTone(v)
      }, {
        key: 'customer_to_dt_loss_mwh',
        label: 'MWh',
        width: 'minmax(132px, 1fr)',
        align: 'right',
        mono: true,
        weight: 700,
        format: controlCenterApi["e" /* formatNumber */],
        color: () => 'var(--danger)'
      }, {
        key: 'customer_to_dt_loss_pct',
        label: 'Loss %',
        width: '150px',
        align: 'right',
        mono: true,
        weight: 700,
        type: 'bar',
        format: pct,
        color: lossTone
      }]
    };
  },
  computed: {
    kpis() {
      return this.dash.kpis || {};
    },
    dtSummary() {
      return this.dash.dt_summary || {};
    },
    customers() {
      return this.dash.customers || {};
    },
    energy() {
      return this.dash.energy_breakdown || {};
    },
    // The API reports NMD energy in kWh and MD in MWh (doc #8) — normalise to MWh.
    nmdMwh() {
      const k = num(this.energy.nmd_energy_kwh);
      return k === null ? null : Math.round(k / 10) / 100;
    },
    losses() {
      const l = this.dash.loss_metrics || {};
      return [{
        label: 'Feeder → DT',
        mwh: l.feeder_to_dt_loss_mwh,
        pct: num(l.feeder_to_dt_loss_pct)
      }, {
        label: 'DT → customer',
        mwh: l.customer_to_dt_loss_mwh,
        pct: num(l.customer_to_dt_loss_pct)
      }];
    },
    efficiency() {
      const e = this.dash.efficiency || {};
      const be = num(e.billing_efficiency_pct);
      const atc = num(e.atc_and_c_pct);
      // Collection efficiency isn't returned at dashboard level; it follows from the
      // ATC&C identity shown in the card subtitle.
      const ce = be && atc !== null ? (1 - atc / 100) / (be / 100) * 100 : null;
      return [{
        label: 'Billing efficiency',
        value: be,
        color: 'var(--soe)'
      }, {
        label: 'Collection efficiency',
        value: ce,
        color: 'var(--success)',
        derived: true
      }, {
        label: 'ATC&C loss',
        value: atc,
        color: 'var(--danger)'
      }];
    },
    customerSegments() {
      return [{
        value: this.customers.nmd_count || 0,
        color: 'var(--ca)',
        title: 'NMD'
      }, {
        value: this.customers.md_count || 0,
        color: 'var(--soe)',
        title: 'MD'
      }];
    },
    customerLegend() {
      const c = this.customers;
      return [{
        label: 'NMD',
        value: Object(controlCenterApi["e" /* formatNumber */])(c.nmd_count),
        pct: pct(c.nmd_pct),
        color: 'var(--ca)'
      }, {
        label: 'MD',
        value: Object(controlCenterApi["e" /* formatNumber */])(c.md_count),
        pct: pct(c.md_pct),
        color: 'var(--soe)'
      }];
    },
    revenueRows() {
      const r = this.dash.revenue || {};
      const billed = num(r.billed) || 0;
      const coll = num(r.collected) || 0;
      const max = Math.max(billed, coll, 1);
      return [{
        label: 'Billed',
        value: this.naira(r.billed),
        w: (billed / max * 100).toFixed(1) + '%',
        color: 'var(--primary)'
      }, {
        label: 'Collected',
        value: this.naira(r.collected),
        w: (coll / max * 100).toFixed(1) + '%',
        color: 'var(--success)'
      }];
    },
    collRatio() {
      const r = this.dash.revenue || {};
      const b = num(r.billed);
      const c = num(r.collected);
      return b && c !== null ? (c / b * 100).toFixed(1) + '%' : '';
    },
    commPct() {
      return num((this.dash.meter_communication || {}).communicating_pct) || 0;
    },
    commColor() {
      return this.commPct >= 80 ? 'var(--success)' : this.commPct >= 50 ? 'var(--warning)' : 'var(--danger)';
    }
  },
  async mounted() {
    await this.loadAll();
  },
  methods: {
    fmt: controlCenterApi["e" /* formatNumber */],
    pctText(v) {
      return v === null || v === undefined || !Number.isFinite(Number(v)) ? '—' : Number(v).toFixed(2) + '%';
    },
    clampW(v) {
      const n = Number(v);
      return Number.isFinite(n) ? Math.max(0, Math.min(100, n)) + '%' : '0%';
    },
    share(part, total) {
      const p = Number(part) || 0;
      const t = Number(total) || 0;
      return t > 0 ? (p / t * 100).toFixed(1) + '%' : '0%';
    },
    naira(v) {
      const n = num(v);
      if (n === null) return '—';
      if (n >= 1e9) return '₦' + (n / 1e9).toFixed(2) + 'bn';
      if (n >= 1e6) return '₦' + (n / 1e6).toFixed(1) + 'm';
      if (n >= 1e3) return '₦' + (n / 1e3).toFixed(0) + 'k';
      return '₦' + Object(controlCenterApi["e" /* formatNumber */])(n);
    },
    pageLabel(page, pages, total) {
      return total ? `Page ${page} of ${Object(controlCenterApi["e" /* formatNumber */])(pages)} · ${Object(controlCenterApi["e" /* formatNumber */])(total)} rows` : '';
    },
    mergeKnownFeeders(names) {
      const seen = new Set(this.knownFeeders);
      names.forEach(n => {
        if (n) seen.add(n);
      });
      this.knownFeeders = [...seen].sort();
    },
    onFilterChange() {
      this.feederLossPage = 1;
      this.customerLossPage = 1;
      this.loadAll();
    },
    onDateChange(value) {
      this.selectedDate = value;
      this.onFilterChange();
    },
    async loadAll() {
      await Promise.all([this.loadDashboard(), this.loadFeederLossTable(), this.loadCustomerLossTable()]);
    },
    async loadDashboard() {
      this.loading = true;
      this.error = null;
      try {
        const data = await Object(controlCenterApi["m" /* getIdbDashboard */])({
          feeder: this.selectedFeeder,
          date: this.selectedDate
        });
        this.dash = data || {};
        this.loaded = true;
        if (data.feeder_filter && data.feeder_filter !== 'All') this.mergeKnownFeeders([data.feeder_filter]);
      } catch (err) {
        this.error = err.message || 'Failed to load IDB dashboard';
      } finally {
        this.loading = false;
      }
    },
    goToFeederLossPage(next) {
      if (next < 1) return;
      if (this.feederLossTotalPages && next > this.feederLossTotalPages) return;
      this.feederLossPage = next;
      this.loadFeederLossTable();
    },
    async loadFeederLossTable() {
      this.feederLossLoading = true;
      this.feederLossError = null;
      try {
        const data = await Object(controlCenterApi["n" /* getIdbFeederDtLoss */])({
          feeder: this.selectedFeeder,
          date: this.selectedDate,
          page: this.feederLossPage,
          page_size: IDB_PAGE_SIZE
        });
        this.feederLossTotal = data.total || 0;
        this.feederLossTotalPages = data.total_pages || 0;
        this.feederLossRows = data.data || [];
        this.mergeKnownFeeders(this.feederLossRows.map(r => r.feeder));
      } catch (err) {
        this.feederLossError = err.message || 'Failed to load Feeder to DT loss table';
      } finally {
        this.feederLossLoading = false;
      }
    },
    goToCustomerLossPage(next) {
      if (next < 1) return;
      if (this.customerLossTotalPages && next > this.customerLossTotalPages) return;
      this.customerLossPage = next;
      this.loadCustomerLossTable();
    },
    async loadCustomerLossTable() {
      this.customerLossLoading = true;
      this.customerLossError = null;
      try {
        const data = await Object(controlCenterApi["l" /* getIdbCustomerDtLoss */])({
          feeder: this.selectedFeeder,
          date: this.selectedDate,
          page: this.customerLossPage,
          page_size: IDB_PAGE_SIZE
        });
        this.customerLossTotal = data.total || 0;
        this.customerLossTotalPages = data.total_pages || 0;
        this.customerLossRows = data.data || [];
        this.mergeKnownFeeders(this.customerLossRows.map(r => r.feeder));
      } catch (err) {
        this.customerLossError = err.message || 'Failed to load Customer to DT loss table';
      } finally {
        this.customerLossLoading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/idb_dashboard.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_idb_dashboardvue_type_script_lang_js = (idb_dashboardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/idb_dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(158)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_idb_dashboardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5818b5a1",
  "049ea058"
  
)

/* harmony default export */ var idb_dashboard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AnimatedValue: __webpack_require__(90).default})


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

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("036588f4", content, true, context)
};

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

/***/ 90:
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
  
  var style0 = __webpack_require__(98)
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


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedValue_vue_vue_type_style_index_0_id_f5293d52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedValue_vue_vue_type_style_index_0_id_f5293d52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedValue_vue_vue_type_style_index_0_id_f5293d52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedValue_vue_vue_type_style_index_0_id_f5293d52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimatedValue_vue_vue_type_style_index_0_id_f5293d52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".counting[data-v-f5293d52]{animation:pop-f5293d52 1s ease-out}@keyframes pop-f5293d52{0%{transform:scale(1)}50%{transform:scale(1.4)}to{transform:scale(1)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=idb_dashboard.js.map