exports.ids = [2];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=certification-badge.js.map