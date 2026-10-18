exports.ids = [24];
exports.modules = {

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("333b5d86", content, true, context)
};

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_976b0394_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_976b0394_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_976b0394_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_976b0394_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_976b0394_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".lc[data-v-976b0394]{position:relative;width:100%}.lc-svg[data-v-976b0394]{display:block;overflow:visible;width:100%}.lc-overlay[data-v-976b0394]{bottom:0;left:0;pointer-events:none;position:absolute;right:0;top:0}.lc-dot[data-v-976b0394]{background:var(--surface);border:2.5px solid;border-radius:50%;position:absolute;transform:translate(-50%,-50%);transition:width .12s,height .12s}.lc-xlabel[data-v-976b0394]{bottom:0;font-size:11px;transform:translateX(-50%);white-space:nowrap}.lc-xlabel[data-v-976b0394],.lc-ylabel[data-v-976b0394]{color:var(--text-3);font-weight:600;position:absolute}.lc-ylabel[data-v-976b0394]{font-family:var(--mono);font-size:10px;left:0;text-align:right;transform:translateY(-50%);width:38px}.lc-tip-sw[data-v-976b0394]{border-radius:2px;display:inline-block;height:8px;margin-right:6px;width:8px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/LineChart.vue?vue&type=template&id=976b0394&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "lc",
    on: {
      "mouseleave": function ($event) {
        _vm.hover = null;
      }
    }
  }, [_vm._ssrNode("<svg" + _vm._ssrAttr("viewBox", `0 0 ${_vm.W} ${_vm.H}`) + " preserveAspectRatio=\"none\" class=\"lc-svg\"" + _vm._ssrStyle(null, {
    height: _vm.height + 'px'
  }, null) + " data-v-976b0394>", "</svg>", [_vm._ssrNode("<defs data-v-976b0394>", "</defs>", _vm._l(_vm.series, function (s, i) {
    return _c('linearGradient', {
      key: 'g' + i,
      attrs: {
        "id": _vm.gid + i,
        "x1": "0",
        "y1": "0",
        "x2": "0",
        "y2": "1"
      }
    }, [_c('stop', {
      attrs: {
        "offset": "0%",
        "stop-color": s.color,
        "stop-opacity": ".30"
      }
    }), _vm._v(" "), _c('stop', {
      attrs: {
        "offset": "100%",
        "stop-color": s.color,
        "stop-opacity": "0"
      }
    })], 1);
  }), 1), _vm._ssrNode(" " + _vm._ssrList(_vm.grid, function (g) {
    return "<line" + _vm._ssrAttr("x1", _vm.padL) + _vm._ssrAttr("y1", g.y) + _vm._ssrAttr("x2", _vm.W) + _vm._ssrAttr("y2", g.y) + " stroke=\"var(--border)\" stroke-width=\"1\" vector-effect=\"non-scaling-stroke\" data-v-976b0394></line>";
  }) + " " + _vm._ssrList(_vm.paths, function (p, i) {
    return (_vm.series[i].area ? "<path" + _vm._ssrAttr("d", p.area) + _vm._ssrAttr("fill", `url(#${_vm.gid}${i})`) + " data-v-976b0394></path>" : "<!---->") + " <path" + _vm._ssrAttr("d", p.line) + " fill=\"none\"" + _vm._ssrAttr("stroke", _vm.series[i].color) + " stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" vector-effect=\"non-scaling-stroke\" data-v-976b0394></path>";
  }) + " " + (_vm.hover !== null ? "<line" + _vm._ssrAttr("x1", _vm.xAt(_vm.hover)) + " y1=\"0\"" + _vm._ssrAttr("x2", _vm.xAt(_vm.hover)) + _vm._ssrAttr("y2", _vm.H - _vm.padB) + " stroke=\"var(--border-strong)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" vector-effect=\"non-scaling-stroke\" data-v-976b0394></line>" : "<!---->") + " " + _vm._ssrList(_vm.labels, function (l, i) {
    return "<rect" + _vm._ssrAttr("x", _vm.xAt(i) - _vm.step / 2) + " y=\"0\"" + _vm._ssrAttr("width", _vm.step) + _vm._ssrAttr("height", _vm.H - _vm.padB) + " fill=\"transparent\" style=\"cursor: crosshair\" data-v-976b0394></rect>";
  }))], 2), _vm._ssrNode(" <div class=\"lc-overlay\" data-v-976b0394>" + _vm._ssrList(_vm.series, function (s, si) {
    return _vm._ssrList(s.values, function (v, i) {
      return "<span class=\"lc-dot\"" + _vm._ssrStyle(null, {
        left: _vm.pctX(i),
        top: _vm.pctY(v),
        borderColor: s.color,
        width: _vm.hover === i ? '11px' : '9px',
        height: _vm.hover === i ? '11px' : '9px'
      }, {
        display: _vm.dots || _vm.hover === i ? '' : 'none'
      }) + " data-v-976b0394></span>";
    });
  }) + " " + _vm._ssrList(_vm.grid, function (g) {
    return "<span class=\"lc-ylabel\"" + _vm._ssrStyle(null, {
      top: g.y / _vm.H * 100 + '%'
    }, {
      display: _vm.yAxis ? '' : 'none'
    }) + " data-v-976b0394>" + _vm._ssrEscape(_vm._s(g.label)) + "</span>";
  }) + " " + _vm._ssrList(_vm.labels, function (l, i) {
    return "<span class=\"lc-xlabel\"" + _vm._ssrStyle(null, {
      left: _vm.pctX(i)
    }, {
      display: _vm.showXLabel(i) ? '' : 'none'
    }) + " data-v-976b0394>" + _vm._ssrEscape(_vm._s(l)) + "</span>";
  }) + " " + (_vm.hover !== null ? "<div class=\"ie-tip\"" + _vm._ssrStyle(null, {
    left: _vm.pctX(_vm.hover),
    top: _vm.pctY(_vm.maxAt(_vm.hover))
  }, null) + " data-v-976b0394><div class=\"ie-tip-l1\" data-v-976b0394>" + _vm._ssrEscape(_vm._s(_vm.tipTitle ? _vm.tipTitle(_vm.hover) : _vm.labels[_vm.hover])) + "</div> " + _vm._ssrList(_vm.series, function (s) {
    return "<div class=\"ie-tip-l2\" data-v-976b0394>" + (_vm.series.length > 1 ? "<span class=\"lc-tip-sw\"" + _vm._ssrStyle(null, {
      background: s.color
    }, null) + " data-v-976b0394></span>" : "<!---->") + _vm._ssrEscape(_vm._s(_vm.fmt(s.values[_vm.hover]))) + (_vm.unit ? "<span data-v-976b0394>" + _vm._ssrEscape(" " + _vm._s(_vm.unit)) + "</span>" : "<!---->") + "</div>";
  }) + "</div>" : "<!---->") + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/LineChart.vue?vue&type=template&id=976b0394&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/LineChart.vue?vue&type=script&lang=js
let uid = 0;

// Responsive SVG line/area chart with hover guide + tooltip, styled per the design.
// series: [{ name, values: Number[], color, area? }]
/* harmony default export */ var LineChartvue_type_script_lang_js = ({
  name: 'LineChart',
  props: {
    labels: {
      type: Array,
      default: () => []
    },
    series: {
      type: Array,
      default: () => []
    },
    height: {
      type: Number,
      default: 200
    },
    format: {
      type: Function,
      default: v => v == null ? '—' : Number(v).toLocaleString()
    },
    unit: {
      type: String,
      default: ''
    },
    tipTitle: {
      type: Function,
      default: null
    },
    dots: {
      type: Boolean,
      default: true
    },
    yAxis: {
      type: Boolean,
      default: false
    },
    yFormat: {
      type: Function,
      default: null
    },
    maxXLabels: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      hover: null,
      gid: 'lcg' + uid++,
      W: 620,
      H: 200,
      padB: 26,
      padT: 12
    };
  },
  computed: {
    padL() {
      return this.yAxis ? 44 : 0;
    },
    n() {
      return this.labels.length;
    },
    step() {
      return this.n > 1 ? (this.W - this.padL - 24) / (this.n - 1) : this.W - this.padL;
    },
    max() {
      const all = this.series.flatMap(s => s.values).map(Number).filter(Number.isFinite);
      const m = all.length ? Math.max(...all) : 0;
      return m > 0 ? m * 1.08 : 1;
    },
    grid() {
      const f = this.yFormat || (v => compact(v));
      return [0, 1, 2, 3].map(k => {
        const v = this.max * (1 - k / 3);
        return {
          y: this.yAt(v),
          label: f(v)
        };
      });
    },
    paths() {
      const base = this.H - this.padB;
      return this.series.map(s => {
        const pts = s.values.map((v, i) => [this.xAt(i), this.yAt(v)]);
        const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
        const area = pts.length ? `${line} L${pts[pts.length - 1][0].toFixed(1)},${base} L${pts[0][0].toFixed(1)},${base} Z` : '';
        return {
          line,
          area
        };
      });
    }
  },
  methods: {
    xAt(i) {
      return this.n > 1 ? this.padL + 12 + i * this.step : this.padL + (this.W - this.padL) / 2;
    },
    yAt(v) {
      const n = Number(v);
      const val = Number.isFinite(n) ? n : 0;
      return this.padT + (1 - val / this.max) * (this.H - this.padB - this.padT);
    },
    pctX(i) {
      return this.xAt(i) / this.W * 100 + '%';
    },
    pctY(v) {
      return this.yAt(v) / this.H * 100 + '%';
    },
    maxAt(i) {
      return Math.max(...this.series.map(s => Number(s.values[i]) || 0));
    },
    fmt(v) {
      return this.format(v);
    },
    showXLabel(i) {
      const every = Math.max(1, Math.ceil(this.n / this.maxXLabels));
      return i % every === 0 || i === this.n - 1;
    }
  }
});
function compact(v) {
  const a = Math.abs(v);
  if (a >= 1e9) return (v / 1e9).toFixed(1) + 'bn';
  if (a >= 1e6) return (v / 1e6).toFixed(1) + 'm';
  if (a >= 1e3) return (v / 1e3).toFixed(0) + 'k';
  return Math.round(v).toString();
}
// CONCATENATED MODULE: ./components/ui/LineChart.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_LineChartvue_type_script_lang_js = (LineChartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/LineChart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_LineChartvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "976b0394",
  "813293a2"
  
)

/* harmony default export */ var LineChart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ui-line-chart.js.map