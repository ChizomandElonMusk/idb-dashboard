exports.ids = [13];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=theme-toggle.js.map