exports.ids = [28,1,20,24,25,26];
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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("191ace45", content, true, context)
};

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

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_center_dashboard_vue_vue_type_style_index_0_id_23bf1eb6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_center_dashboard_vue_vue_type_style_index_0_id_23bf1eb6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_center_dashboard_vue_vue_type_style_index_0_id_23bf1eb6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_center_dashboard_vue_vue_type_style_index_0_id_23bf1eb6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_control_center_dashboard_vue_vue_type_style_index_0_id_23bf1eb6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".kpi[data-v-23bf1eb6]{border-radius:16px;padding:18px 20px}.no-feed[data-v-23bf1eb6]{align-items:center;display:flex;flex:1;flex-direction:column;gap:7px;justify-content:center;padding:14px 0 6px}.no-feed-title[data-v-23bf1eb6]{color:var(--text-2);font-size:12.5px;font-weight:700}.no-feed-sub[data-v-23bf1eb6]{color:var(--text-3);font-size:11px;line-height:1.4;text-align:center}.chart-head[data-v-23bf1eb6]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:6px}.vend-stats[data-v-23bf1eb6]{display:flex;flex-wrap:wrap;gap:18px;margin-bottom:14px}.vend-label[data-v-23bf1eb6]{color:var(--text-3);font-size:10.5px;font-weight:700;letter-spacing:.04em}.vend-val[data-v-23bf1eb6]{font-size:17px;font-weight:700}.vend-sep[data-v-23bf1eb6]{border-left:1px solid var(--border);padding-left:18px}@media (min-width:1100px){.wide[data-v-23bf1eb6]{grid-column:span 2}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/control_center_dashboard.vue?vue&type=template&id=23bf1eb6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('PageHeader', {
    attrs: {
      "page": "control",
      "loading": _vm.loading
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-page\" data-v-23bf1eb6>", "</div>", [_vm.error ? _vm._ssrNode("<div class=\"ie-error\" data-v-23bf1eb6>", "</div>", [_c('Icon', {
    attrs: {
      "name": "alert",
      "size": 16
    }
  }), _vm._ssrNode(_vm._ssrEscape("Couldn't load live data: " + _vm._s(_vm.error) + "\n            ") + "<button class=\"ie-btn\" data-v-23bf1eb6>Retry</button>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.loading && !_vm.loaded ? _c('SkeletonPage') : _c('div', {
    staticClass: "ie-fadein"
  }, [_c('div', {
    staticClass: "ie-grid",
    staticStyle: {
      "grid-template-columns": "repeat(auto-fit, minmax(228px, 1fr))"
    }
  }, [_c('div', {
    staticClass: "ie-card kpi"
  }, [_c('div', {
    staticClass: "ie-kpi-head"
  }, [_c('span', {
    staticClass: "ie-ico tone-success"
  }, [_c('Icon', {
    attrs: {
      "name": "feeder",
      "size": 16
    }
  })], 1), _c('span', {
    staticClass: "ie-kpi-label"
  }, [_vm._v("Online feeders")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-value"
  }, [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.feeder.online_feeders)
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-split"
  }, [_c('div', [_c('div', {
    staticClass: "ie-kpi-split-label"
  }, [_vm._v("11 kV")]), _c('div', {
    staticClass: "ie-kpi-split-value"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.feeder.online_feeders_11kv)))])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "ie-kpi-split-label"
  }, [_vm._v("33 kV")]), _c('div', {
    staticClass: "ie-kpi-split-value"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.feeder.online_feeders_33kv)))])])])]), _vm._v(" "), _c('div', {
    staticClass: "ie-card kpi"
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
  }, [_vm._v("Online DTs")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-value"
  }, [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.feeder.online_dts)
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-split"
  }, [_c('div', [_c('div', {
    staticClass: "ie-kpi-split-label"
  }, [_vm._v("Public")]), _c('div', {
    staticClass: "ie-kpi-split-value"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.feeder.online_dts_public)))])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "ie-kpi-split-label"
  }, [_vm._v("Private")]), _c('div', {
    staticClass: "ie-kpi-split-value"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.feeder.online_dts_private)))])])])]), _vm._v(" "), _c('div', {
    staticClass: "ie-card kpi",
    staticStyle: {
      "display": "flex",
      "flex-direction": "column"
    }
  }, [_c('div', {
    staticClass: "ie-kpi-head"
  }, [_c('span', {
    staticClass: "ie-ico tone-soe"
  }, [_c('Icon', {
    attrs: {
      "name": "chat",
      "size": 16
    }
  })], 1), _c('span', {
    staticClass: "ie-kpi-label"
  }, [_vm._v("Customer complaints")])]), _vm._v(" "), _vm.hasComplaints ? [_c('div', {
    staticClass: "ie-kpi-value"
  }, [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.complaints.total)
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-split"
  }, [_c('div', [_c('div', {
    staticClass: "ie-kpi-split-label"
  }, [_vm._v("Open")]), _c('div', {
    staticClass: "ie-kpi-split-value"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.complaints.open)))])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "ie-kpi-split-label"
  }, [_vm._v("Closed")]), _c('div', {
    staticClass: "ie-kpi-split-value"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.complaints.closed)))])])])] : _c('div', {
    staticClass: "no-feed"
  }, [_c('Icon', {
    staticStyle: {
      "color": "var(--text-3)"
    },
    attrs: {
      "name": "noData",
      "size": 22
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "no-feed-title"
  }, [_vm._v("Feed not connected")]), _vm._v(" "), _c('div', {
    staticClass: "no-feed-sub"
  }, [_vm._v("Complaints service returns no data"), _c('br'), _vm._v("in this environment")])], 1)], 2), _vm._v(" "), _c('div', {
    staticClass: "ie-card kpi"
  }, [_c('div', {
    staticClass: "ie-kpi-head",
    staticStyle: {
      "margin-bottom": "16px"
    }
  }, [_c('span', {
    staticClass: "ie-ico tone-ca"
  }, [_c('Icon', {
    attrs: {
      "name": "users",
      "size": 16
    }
  })], 1), _c('span', {
    staticClass: "ie-kpi-label"
  }, [_vm._v("Metered customers")])]), _vm._v(" "), _vm._l(_vm.meters, function (m) {
    return _c('div', {
      key: m.label,
      staticStyle: {
        "margin-bottom": "13px"
      }
    }, [_c('div', {
      staticClass: "ie-bar-row"
    }, [_c('span', {
      staticStyle: {
        "font-size": "12px",
        "white-space": "nowrap"
      }
    }, [_vm._v(_vm._s(m.label))]), _c('span', {
      staticClass: "mono",
      staticStyle: {
        "font-size": "12px",
        "color": "var(--text-2)"
      }
    }, [_vm._v(_vm._s(m.value))])]), _vm._v(" "), _c('div', {
      staticClass: "ie-track"
    }, [_c('div', {
      staticClass: "ie-fill",
      style: {
        width: m.pct,
        background: m.color
      }
    })])]);
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "10.5px",
      "color": "var(--text-3)",
      "font-weight": "600"
    }
  }, [_vm._v("Actual against target")])], 2)]), _vm._v(" "), _c('div', {
    staticClass: "ie-grid",
    staticStyle: {
      "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))"
    }
  }, [_c('div', {
    staticClass: "ie-card wide"
  }, [_c('div', {
    staticClass: "chart-head"
  }, [_c('div', [_c('div', {
    staticClass: "ie-card-title"
  }, [_vm._v("Energy delivered")]), _c('div', {
    staticClass: "ie-card-sub"
  }, [_vm._v("Monthly, MWh")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_c('div', {
    staticClass: "mono",
    staticStyle: {
      "font-size": "24px",
      "font-weight": "700",
      "letter-spacing": "-1px"
    }
  }, [_vm._v(_vm._s(_vm.energySel.value))]), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "11px",
      "color": "var(--text-3)",
      "font-weight": "600"
    }
  }, [_vm._v("MWh · " + _vm._s(_vm.energySel.label))])])]), _vm._v(" "), _c('LineChart', {
    attrs: {
      "labels": _vm.energyLabels,
      "series": [{
        name: 'Energy',
        values: _vm.energyValues,
        color: 'var(--primary)',
        area: true
      }],
      "height": 200,
      "unit": "MWh",
      "format": _vm.fmt
    },
    on: {
      "pick": function ($event) {
        _vm.energyPick = $event;
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ie-card-note"
  }, [_c('Icon', {
    attrs: {
      "name": "info",
      "size": 14
    }
  }), _vm._v("Hover or click a month to see its figure")], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-card"
  }, [_c('div', {
    staticClass: "ie-card-title"
  }, [_vm._v("Energy allocation by band")]), _vm._v(" "), _c('div', {
    staticClass: "ie-card-sub",
    staticStyle: {
      "margin-bottom": "12px"
    }
  }, [_vm._v("Share of delivered energy")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "gap": "18px"
    }
  }, [_c('Donut', {
    attrs: {
      "segments": _vm.allocation.map(a => ({
        value: a.pct,
        color: _vm.bandColorVar(a.band),
        title: 'Band ' + a.band + ' · ' + a.pct + '%'
      })),
      "size": 140,
      "r": 54,
      "stroke": 20
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "flex": "1",
      "display": "flex",
      "flex-direction": "column",
      "gap": "8px",
      "min-width": "0"
    }
  }, _vm._l(_vm.allocation, function (a) {
    return _c('div', {
      key: a.band,
      staticStyle: {
        "display": "flex",
        "align-items": "center",
        "gap": "9px"
      }
    }, [_c('span', {
      staticClass: "ie-swatch",
      style: {
        background: _vm.bandColorVar(a.band)
      }
    }), _vm._v(" "), _c('span', {
      staticStyle: {
        "flex": "1",
        "font-size": "12.5px",
        "font-weight": "700"
      }
    }, [_vm._v("Band " + _vm._s(a.band))]), _vm._v(" "), _c('span', {
      staticClass: "mono",
      staticStyle: {
        "font-size": "12.5px",
        "font-weight": "700",
        "color": "var(--text-2)"
      }
    }, [_vm._v(_vm._s(a.pct) + "%")])]);
  }), 0)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "ie-grid",
    staticStyle: {
      "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))"
    }
  }, [_c('div', {
    staticClass: "ie-card wide"
  }, [_c('div', {
    staticClass: "chart-head",
    staticStyle: {
      "flex-wrap": "wrap",
      "gap": "12px",
      "margin-bottom": "14px"
    }
  }, [_c('div', [_c('div', {
    staticClass: "ie-card-title"
  }, [_vm._v("Vending & collection")]), _c('div', {
    staticClass: "ie-card-sub"
  }, [_vm._v(_vm._s(_vm.vendingTab === 'Day' ? 'Daily' : _vm.vendingTab === 'Week' ? 'Weekly' : 'Monthly') + ", ₦")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-seg"
  }, _vm._l(['Day', 'Week', 'Month'], function (t) {
    return _c('button', {
      key: t,
      class: {
        on: _vm.vendingTab === t
      },
      on: {
        "click": function ($event) {
          _vm.vendingTab = t;
        }
      }
    }, [_vm._v(_vm._s(t))]);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "vend-stats"
  }, [_c('div', [_c('div', {
    staticClass: "vend-label"
  }, [_vm._v("VENDED MTD")]), _c('div', {
    staticClass: "mono vend-val",
    staticStyle: {
      "color": "var(--primary-press)"
    }
  }, [_vm._v(_vm._s(_vm.naira(_vm.vending.amount_vended_mtd)))])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "vend-label"
  }, [_vm._v("COLLECTED MTD")]), _c('div', {
    staticClass: "mono vend-val",
    staticStyle: {
      "color": "var(--soe)"
    }
  }, [_vm._v(_vm._s(_vm.naira(_vm.vending.amount_collected_mtd)))])]), _vm._v(" "), _c('div', {
    staticClass: "vend-sep"
  }, [_c('div', {
    staticClass: "vend-label"
  }, [_vm._v("CUSTOMERS VENDED TODAY")]), _c('div', {
    staticClass: "mono vend-val"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.vending.customer_vended_today)))])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "vend-label"
  }, [_vm._v("COLLECTED TODAY")]), _c('div', {
    staticClass: "mono vend-val",
    staticStyle: {
      "color": "var(--success)"
    }
  }, [_vm._v(_vm._s(_vm.naira(_vm.vending.total_collection_today)))])])]), _vm._v(" "), _c('LineChart', {
    attrs: {
      "labels": _vm.vendingPoints.map(p => p.label),
      "series": [{
        name: 'Vended',
        values: _vm.vendingPoints.map(p => p.vended),
        color: 'var(--primary)'
      }, {
        name: 'Collected',
        values: _vm.vendingPoints.map(p => p.collected),
        color: 'var(--soe)'
      }],
      "height": 180,
      "dots": _vm.vendingPoints.length <= 6,
      "format": v => '₦' + _vm.fmt(v),
      "max-x-labels": 8
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ie-legend",
    staticStyle: {
      "margin-top": "8px"
    }
  }, [_c('span', [_c('span', {
    staticClass: "ie-swatch",
    staticStyle: {
      "width": "14px",
      "height": "3px",
      "border-radius": "2px",
      "background": "var(--primary)"
    }
  }), _vm._v("Vended")]), _vm._v(" "), _c('span', [_c('span', {
    staticClass: "ie-swatch",
    staticStyle: {
      "width": "14px",
      "height": "3px",
      "border-radius": "2px",
      "background": "var(--soe)"
    }
  }), _vm._v("Collected")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin-left": "auto",
      "color": "var(--text-3)",
      "font-weight": "600"
    }
  }, [_vm._v("Vended today " + _vm._s(_vm.naira(_vm.vending.amount_vended_today)))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-card"
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "baseline",
      "justify-content": "space-between"
    }
  }, [_c('div', {
    staticClass: "ie-card-title"
  }, [_vm._v("Feeders by band")]), _vm._v(" "), _c('span', {
    staticClass: "mono",
    staticStyle: {
      "font-size": "13px",
      "font-weight": "700",
      "color": "var(--text-2)"
    }
  }, [_vm._v(_vm._s(_vm.fmt(_vm.feedersByBand.total)))])]), _vm._v(" "), _c('div', {
    staticClass: "ie-card-sub",
    staticStyle: {
      "margin-bottom": "16px"
    }
  }, [_vm._v("Distribution across service bands")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "flex-direction": "column",
      "gap": "13px"
    }
  }, _vm._l(_vm.feederBands, function (f) {
    return _c('div', {
      key: f.band
    }, [_c('div', {
      staticClass: "ie-bar-row",
      staticStyle: {
        "font-size": "12.5px"
      }
    }, [_c('span', [_vm._v("Band " + _vm._s(f.band) + " "), f.hours ? _c('span', {
      staticStyle: {
        "font-size": "11px",
        "color": "var(--text-3)",
        "font-weight": "600"
      }
    }, [_vm._v("· " + _vm._s(f.hours) + "h target")]) : _vm._e()]), _vm._v(" "), _c('span', {
      staticClass: "mono"
    }, [_vm._v(_vm._s(_vm.fmt(f.count)))])]), _vm._v(" "), _c('div', {
      staticClass: "ie-track",
      staticStyle: {
        "height": "8px"
      }
    }, [_c('div', {
      staticClass: "ie-fill",
      style: {
        width: f.pct,
        background: _vm.bandColorVar(f.band)
      }
    })])]);
  }), 0)])])])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/control_center_dashboard.vue?vue&type=template&id=23bf1eb6&scoped=true

// EXTERNAL MODULE: ./components/ui/Icon.vue + 2 modules
var Icon = __webpack_require__(13);

// EXTERNAL MODULE: ./components/ui/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(87);

// EXTERNAL MODULE: ./components/ui/SkeletonPage.vue + 4 modules
var SkeletonPage = __webpack_require__(95);

// EXTERNAL MODULE: ./components/ui/Donut.vue + 4 modules
var Donut = __webpack_require__(101);

// EXTERNAL MODULE: ./components/ui/LineChart.vue + 4 modules
var LineChart = __webpack_require__(146);

// EXTERNAL MODULE: ./components/AnimatedValue.vue + 4 modules
var AnimatedValue = __webpack_require__(90);

// EXTERNAL MODULE: ./js_modules/controlCenterApi.js
var controlCenterApi = __webpack_require__(85);

// EXTERNAL MODULE: ./js_modules/pages.js
var pages = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/control_center_dashboard.vue?vue&type=script&lang=js








// Wired to GET /api/v1/control-center/summary (see static/api_live_responses3.md #3). That
// endpoint takes no query params and always returns the latest snapshot, so there's nothing
// to filter on this screen.

const BAND_HOURS = {
  A: 20,
  B: 16,
  C: 12,
  D: 8,
  E: 4
};

// customers.metered_*_target can't be assumed non-zero; a zero/blank target would
// otherwise divide-by-zero into a NaN width on the progress bar.
function pctString(actual, target) {
  const a = Number(actual);
  const t = Number(target);
  if (!Number.isFinite(a) || !Number.isFinite(t) || t <= 0) return '0%';
  return `${Math.min(100, a / t * 100).toFixed(2)}%`;
}
/* harmony default export */ var control_center_dashboardvue_type_script_lang_js = ({
  layout: 'dashboard',
  components: {
    Icon: Icon["default"],
    PageHeader: PageHeader["default"],
    SkeletonPage: SkeletonPage["default"],
    Donut: Donut["default"],
    LineChart: LineChart["default"],
    AnimatedValue: AnimatedValue["default"]
  },
  data() {
    return {
      loading: true,
      loaded: false,
      error: null,
      feeder: {},
      complaints: {},
      customers: {},
      energy: {},
      allocation: [],
      vending: {},
      feedersByBand: {},
      energyPick: null,
      // vending_collection.trend is real daily data, so Day/Week/Month are client-side
      // aggregations of it — this endpoint has no period param.
      vendingTab: 'Day'
    };
  },
  computed: {
    hasComplaints() {
      const c = this.complaints;
      return c.total != null || c.open != null || c.closed != null;
    },
    meters() {
      const c = this.customers;
      return [{
        label: 'Metered NMD',
        value: `${Object(controlCenterApi["e" /* formatNumber */])(c.metered_nmd_actual)} / ${Object(controlCenterApi["e" /* formatNumber */])(c.metered_nmd_target)}`,
        pct: pctString(c.metered_nmd_actual, c.metered_nmd_target),
        color: 'var(--ca)'
      }, {
        label: 'Metered MD',
        value: `${Object(controlCenterApi["e" /* formatNumber */])(c.metered_md_actual)} / ${Object(controlCenterApi["e" /* formatNumber */])(c.metered_md_target)}`,
        pct: pctString(c.metered_md_actual, c.metered_md_target),
        color: 'var(--soe)'
      }];
    },
    energyTrend() {
      return this.energy.trend || [];
    },
    energyLabels() {
      return this.energyTrend.map(t => Object(controlCenterApi["p" /* monthLabel */])(t.date));
    },
    energyValues() {
      return this.energyTrend.map(t => t.mwh);
    },
    energySel() {
      const i = this.energyPick;
      if (i !== null && this.energyTrend[i]) {
        return {
          value: Object(controlCenterApi["e" /* formatNumber */])(this.energyTrend[i].mwh),
          label: this.energyLabels[i]
        };
      }
      return {
        value: Object(controlCenterApi["e" /* formatNumber */])(this.energy.total_mwh),
        label: 'total'
      };
    },
    vendingPoints() {
      return Object(controlCenterApi["c" /* aggregateDailyTrend */])(this.vending.trend || [], this.vendingTab, ['vended', 'collected']);
    },
    feederBands() {
      const breakdown = this.feedersByBand.breakdown || [];
      const max = Math.max(1, ...breakdown.map(b => Number(b.count) || 0));
      return breakdown.map(b => ({
        ...b,
        hours: BAND_HOURS[b.band],
        pct: ((Number(b.count) || 0) / max * 100).toFixed(1) + '%'
      }));
    }
  },
  async mounted() {
    await this.loadSummary();
  },
  methods: {
    fmt: controlCenterApi["e" /* formatNumber */],
    bandColorVar: pages["c" /* bandColorVar */],
    naira(v) {
      const n = Number(v);
      if (v === null || v === undefined || !Number.isFinite(n)) return '—';
      if (n >= 1e9) return '₦' + (n / 1e9).toFixed(2) + 'bn';
      if (n >= 1e6) return '₦' + (n / 1e6).toFixed(1) + 'm';
      if (n >= 1e3) return '₦' + (n / 1e3).toFixed(0) + 'k';
      return '₦' + Object(controlCenterApi["e" /* formatNumber */])(n);
    },
    async loadSummary() {
      this.loading = true;
      this.error = null;
      try {
        const data = await Object(controlCenterApi["g" /* getControlCenterSummary */])();
        this.feeder = data.feederDTinfo || {};
        // total/open/closed have no source system and are always null per the API doc.
        this.complaints = data.customercomplaints || {};
        this.customers = data.customers || {};
        this.energy = data.energy || {};
        this.allocation = data.energy_allocation_by_band || [];
        this.vending = data.vending_collection || {};
        this.feedersByBand = data.feeders_by_band || {};
        this.loaded = true;
      } catch (err) {
        this.error = err.message || 'Failed to load Control Center summary';
      } finally {
        this.loading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/control_center_dashboard.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_control_center_dashboardvue_type_script_lang_js = (control_center_dashboardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/control_center_dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(149)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_control_center_dashboardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23bf1eb6",
  "6c7aa320"
  
)

/* harmony default export */ var control_center_dashboard = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=control_center_dashboard.js.map