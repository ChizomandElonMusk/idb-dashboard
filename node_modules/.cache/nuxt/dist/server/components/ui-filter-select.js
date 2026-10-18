exports.ids = [22];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=ui-filter-select.js.map