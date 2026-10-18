exports.ids = [23];
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

/***/ })

};;
//# sourceMappingURL=ui-gauge.js.map