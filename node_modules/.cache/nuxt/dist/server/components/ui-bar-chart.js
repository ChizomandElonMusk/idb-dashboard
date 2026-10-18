exports.ids = [18];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("727faeda", content, true, context)
};

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_style_index_0_id_754c4636_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_style_index_0_id_754c4636_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_style_index_0_id_754c4636_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_style_index_0_id_754c4636_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_style_index_0_id_754c4636_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bc[data-v-754c4636]{position:relative;width:100%}.bc-plot[data-v-754c4636]{bottom:0}.bc-area[data-v-754c4636],.bc-plot[data-v-754c4636]{position:absolute;right:0;top:0}.bc-area[data-v-754c4636]{bottom:22px;left:0;pointer-events:none}.bc-area--tip[data-v-754c4636]{z-index:5}.bc-grid[data-v-754c4636]{border-top:1px solid var(--border);height:0;left:0;position:absolute;right:0}.bc-ylabel[data-v-754c4636]{color:var(--text-3);font-family:var(--mono);font-size:10px;font-weight:600;position:absolute;right:calc(100% + 8px);top:-7px;white-space:nowrap}.bc-target[data-v-754c4636]{border-top:2px dashed var(--warning);height:0;left:0;position:absolute;right:0;z-index:2}.bc-target-label[data-v-754c4636]{background:color-mix(in srgb,var(--surface) 80%,transparent);border-radius:3px;bottom:3px;color:var(--warning);font-size:10.5px;font-weight:700;padding:0 3px;position:absolute;right:0}.bc-bars[data-v-754c4636]{align-items:stretch;bottom:0;display:flex;left:0;position:absolute;right:0;top:0}.bc-col[data-v-754c4636]{cursor:crosshair;display:flex;flex:1;flex-direction:column;min-width:0}.bc-bar-wrap[data-v-754c4636]{align-items:flex-end;display:flex;flex:1;justify-content:center;position:relative}.bc-bar[data-v-754c4636]{animation:bc-rise-754c4636 .7s cubic-bezier(.2,.8,.2,1) both;border-radius:5px 5px 2px 2px;transform-origin:bottom;transition:opacity .15s;width:100%}.bc-bar.dim[data-v-754c4636]{opacity:.55}.bc-bar.hatch[data-v-754c4636]{background-color:var(--text-3);background-image:repeating-linear-gradient(45deg,color-mix(in srgb,var(--surface) 55%,transparent) 0,color-mix(in srgb,var(--surface) 55%,transparent) 3px,transparent 3px,transparent 7px)!important}@supports (background:repeating-linear-gradient(red 0%,red 0% 1%,red 2%)) and (color:color-mix(in lch,red,blue)){.bc-bar.hatch[data-v-754c4636]{background-image:repeating-linear-gradient(45deg,color-mix(in srgb,var(--surface) 55%,transparent) 0 3px,transparent 3px 7px)!important}}.bc-vl[data-v-754c4636]{font-family:var(--mono);font-weight:700;left:0;pointer-events:none;position:absolute;right:0}.bc-vl[data-v-754c4636],.bc-xl[data-v-754c4636]{font-size:11px;text-align:center;white-space:nowrap}.bc-xl[data-v-754c4636]{color:var(--text-3);font-weight:600;height:22px;line-height:22px;overflow:hidden;text-overflow:ellipsis}.bc-xl.hide[data-v-754c4636]{visibility:hidden}@keyframes bc-rise-754c4636{0%{transform:scaleY(0)}to{transform:scaleY(1)}}@media (prefers-reduced-motion:reduce){.bc-bar[data-v-754c4636]{animation:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/BarChart.vue?vue&type=template&id=754c4636&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bc",
    style: {
      height: _vm.height + 'px'
    },
    on: {
      "mouseleave": function ($event) {
        _vm.hover = null;
      }
    }
  }, [_vm._ssrNode("<div class=\"bc-plot\"" + _vm._ssrStyle(null, {
    left: _vm.yAxis ? '46px' : '0'
  }, null) + " data-v-754c4636><div class=\"bc-area\" data-v-754c4636>" + _vm._ssrList(_vm.grid, function (g) {
    return "<div class=\"bc-grid\"" + _vm._ssrStyle(null, {
      bottom: g.pct + '%'
    }, null) + " data-v-754c4636>" + (_vm.yAxis ? "<span class=\"bc-ylabel\" data-v-754c4636>" + _vm._ssrEscape(_vm._s(g.label)) + "</span>" : "<!---->") + "</div>";
  }) + "</div> <div class=\"bc-bars\"" + _vm._ssrStyle(null, {
    gap: _vm.gap
  }, null) + " data-v-754c4636>" + _vm._ssrList(_vm.bars, function (b, i) {
    return "<div class=\"bc-col\" data-v-754c4636><div class=\"bc-bar-wrap\" data-v-754c4636>" + (_vm.valueLabels ? "<span class=\"bc-vl\"" + _vm._ssrStyle(null, {
      bottom: 'calc(' + _vm.pctOf(b.value) + '% + 4px)',
      color: b.labelColor || 'var(--text)'
    }, null) + " data-v-754c4636>" + _vm._ssrEscape(_vm._s(b.short || _vm.fmt(b.value))) + "</span>" : "<!---->") + " <div" + _vm._ssrClass("bc-bar", {
      hatch: b.hatch,
      dim: _vm.hover !== null && _vm.hover !== i
    }) + _vm._ssrStyle(null, {
      height: _vm.pctOf(b.value) + '%',
      background: b.color || 'var(--primary)',
      maxWidth: _vm.maxBar
    }, null) + " data-v-754c4636></div></div> <span" + _vm._ssrClass("bc-xl", {
      hide: !_vm.showXLabel(i)
    }) + " data-v-754c4636>" + _vm._ssrEscape(_vm._s(b.label)) + "</span></div>";
  }) + "</div> <div class=\"bc-area bc-area--tip\" data-v-754c4636>" + (_vm.target != null ? "<div class=\"bc-target\"" + _vm._ssrStyle(null, {
    bottom: _vm.pctOf(_vm.target) + '%'
  }, null) + " data-v-754c4636><span class=\"bc-target-label\" data-v-754c4636>" + _vm._ssrEscape(_vm._s(_vm.targetLabel)) + "</span></div>" : "<!---->") + " " + (_vm.hover !== null && _vm.bars[_vm.hover] ? "<div class=\"ie-tip\"" + _vm._ssrStyle(null, {
    left: (_vm.hover + 0.5) / _vm.bars.length * 100 + '%',
    top: 100 - _vm.pctOf(_vm.bars[_vm.hover].value) + '%'
  }, null) + " data-v-754c4636><div class=\"ie-tip-l1\" data-v-754c4636>" + _vm._ssrEscape(_vm._s(_vm.bars[_vm.hover].tip || _vm.bars[_vm.hover].label)) + "</div> <div class=\"ie-tip-l2\" data-v-754c4636>" + _vm._ssrEscape(_vm._s(_vm.fmt(_vm.bars[_vm.hover].value))) + (_vm.unit ? "<span data-v-754c4636>" + _vm._ssrEscape(" " + _vm._s(_vm.unit)) + "</span>" : "<!---->") + "</div> " + (_vm.bars[_vm.hover].tip2 ? "<div class=\"ie-tip-l2\" data-v-754c4636>" + _vm._ssrEscape(_vm._s(_vm.bars[_vm.hover].tip2)) + "</div>" : "<!---->") + "</div>" : "<!---->") + "</div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/BarChart.vue?vue&type=template&id=754c4636&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/BarChart.vue?vue&type=script&lang=js
// Vertical bar chart from the design (rounded bars, value labels, optional target line,
// hatched "partial" bars). bars: [{ label, value, color?, hatch?, tip?, tip2?, short? }]
/* harmony default export */ var BarChartvue_type_script_lang_js = ({
  name: 'BarChart',
  props: {
    bars: {
      type: Array,
      default: () => []
    },
    height: {
      type: Number,
      default: 220
    },
    format: {
      type: Function,
      default: v => v == null ? '—' : Number(v).toLocaleString()
    },
    unit: {
      type: String,
      default: ''
    },
    target: {
      type: Number,
      default: null
    },
    targetLabel: {
      type: String,
      default: ''
    },
    valueLabels: {
      type: Boolean,
      default: true
    },
    yAxis: {
      type: Boolean,
      default: true
    },
    yFormat: {
      type: Function,
      default: null
    },
    gap: {
      type: String,
      default: '10px'
    },
    maxBar: {
      type: String,
      default: '64px'
    },
    maxXLabels: {
      type: Number,
      default: 16
    }
  },
  data() {
    return {
      hover: null
    };
  },
  computed: {
    max() {
      const vals = this.bars.map(b => Number(b.value)).filter(Number.isFinite);
      if (this.target != null) vals.push(this.target);
      const m = vals.length ? Math.max(...vals) : 0;
      return m > 0 ? m * 1.15 : 1;
    },
    grid() {
      const f = this.yFormat || compact;
      return [0, 1, 2, 3].map(k => ({
        pct: k / 3 * 100,
        label: f(this.max * k / 3)
      }));
    }
  },
  methods: {
    pctOf(v) {
      const n = Number(v);
      return Number.isFinite(n) ? Math.max(0, Math.min(100, n / this.max * 100)) : 0;
    },
    fmt(v) {
      return this.format(v);
    },
    showXLabel(i) {
      const every = Math.max(1, Math.ceil(this.bars.length / this.maxXLabels));
      return i % every === 0 || i === this.bars.length - 1;
    }
  }
});
function compact(v) {
  const a = Math.abs(v);
  if (a >= 1e9) return (v / 1e9).toFixed(1) + 'bn';
  if (a >= 1e6) return (v / 1e6).toFixed(1) + 'm';
  if (a >= 1e3) return (v / 1e3).toFixed(a >= 1e4 ? 0 : 1) + 'k';
  return (Math.round(v * 10) / 10).toString();
}
// CONCATENATED MODULE: ./components/ui/BarChart.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_BarChartvue_type_script_lang_js = (BarChartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/BarChart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(111)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_BarChartvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "754c4636",
  "70c1e294"
  
)

/* harmony default export */ var BarChart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ui-bar-chart.js.map