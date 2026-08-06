exports.ids = [7];
exports.modules = {

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6ad18743", content, true, context)
};

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MeterCommunication.vue?vue&type=template&id=faa1c46c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "meter-container"
  }, [_vm._ssrNode("<div class=\"meter-box\" data-v-faa1c46c><div class=\"meter\" data-v-faa1c46c><div class=\"outer-circle\"" + _vm._ssrStyle(null, _vm.gradientStyle, null) + " data-v-faa1c46c><div class=\"inner-circle\" data-v-faa1c46c><div class=\"needle\"" + _vm._ssrStyle(null, {
    transform: _vm.currentRotation
  }, null) + " data-v-faa1c46c></div></div></div></div> <div class=\"label center-align\" data-v-faa1c46c><span" + _vm._ssrStyle(null, {
    color: _vm.statusColor
  }, null) + " data-v-faa1c46c>" + _vm._ssrEscape(_vm._s(_vm.percentage) + "%") + "</span></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MeterCommunication.vue?vue&type=template&id=faa1c46c&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MeterCommunication.vue?vue&type=script&lang=js
/* harmony default export */ var MeterCommunicationvue_type_script_lang_js = ({
  props: {
    percentage: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      // Start at the far left (Level 0 position)
      currentRotation: 'translate(-50%, -50%) rotate(-100deg)'
    };
  },
  computed: {
    // Dynamic color for the text and gradient logic
    statusColor() {
      const p = parseFloat(this.percentage);
      if (p < 40) return '#ea3e3e'; // Red
      if (p < 75) return '#fdd835'; // Yellow/Gold
      return '#2e7d32'; // Green
    },
    gradientStyle() {
      const p = parseFloat(this.percentage) || 0;
      const color = this.statusColor;
      // Fills the arc with the status color up to the percentage point
      return {
        backgroundImage: `conic-gradient(from 270deg at 50% 100%, ${color} 0deg, ${color} ${p / 100 * 180}deg, #eee 0deg)`
      };
    }
  },
  watch: {
    // Watch for prop changes to re-trigger animation
    percentage(newVal) {
      this.animateNeedle(newVal);
    }
  },
  mounted() {
    // Small timeout ensures the DOM is ready to transition from the default -100deg
    setTimeout(() => {
      this.animateNeedle(this.percentage);
    }, 100);
  },
  methods: {
    animateNeedle(val) {
      const p = parseFloat(val) || 0;
      // Map 0-100 to -100deg to +80deg
      const deg = p / 100 * 180 - 100;
      this.currentRotation = `translate(-50%, -50%) rotate(${deg}deg)`;
    }
  }
});
// CONCATENATED MODULE: ./components/MeterCommunication.vue?vue&type=script&lang=js
 /* harmony default export */ var components_MeterCommunicationvue_type_script_lang_js = (MeterCommunicationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MeterCommunication.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MeterCommunicationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "faa1c46c",
  "5337b4a6"
  
)

/* harmony default export */ var MeterCommunication = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeterCommunication_vue_vue_type_style_index_0_id_faa1c46c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeterCommunication_vue_vue_type_style_index_0_id_faa1c46c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeterCommunication_vue_vue_type_style_index_0_id_faa1c46c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeterCommunication_vue_vue_type_style_index_0_id_faa1c46c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeterCommunication_vue_vue_type_style_index_0_id_faa1c46c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".meter-container[data-v-faa1c46c]{display:flex;justify-content:center;padding:12px 50px 10px;width:100%}.meter-box[data-v-faa1c46c]{margin:0 8px;width:200px}.meter[data-v-faa1c46c]{height:100px;overflow:hidden;position:relative;width:200px}.outer-circle[data-v-faa1c46c]{background-color:var(--meter-track);height:200px;left:0;top:0;transition:background-image .5s ease;width:200px}.inner-circle[data-v-faa1c46c],.outer-circle[data-v-faa1c46c]{border-radius:50%;position:absolute}.inner-circle[data-v-faa1c46c]{background:var(--bg-card);height:160px;left:20px;top:20px;width:160px;z-index:2}.needle[data-v-faa1c46c]{border-radius:50%;height:16px;left:100px;top:80px;transform-origin:center center;transition:transform 1.5s ease;width:16px;z-index:5}.needle[data-v-faa1c46c],.needle[data-v-faa1c46c]:before{background-color:var(--meter-needle);position:absolute}.needle[data-v-faa1c46c]:before{bottom:8px;clip-path:polygon(50% 0,0 100%,100% 100%);content:\"\";height:70px;left:50%;transform:translateX(-50%);width:4px}.label[data-v-faa1c46c]{margin-top:10px}.label span[data-v-faa1c46c]{font-size:28px;font-weight:700}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=meter-communication.js.map