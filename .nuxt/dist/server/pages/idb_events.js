exports.ids = [33,1,19,20,22,25];
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

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3de8653a", content, true, context)
};

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_events_vue_vue_type_style_index_0_id_74c9f665_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_events_vue_vue_type_style_index_0_id_74c9f665_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_events_vue_vue_type_style_index_0_id_74c9f665_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_events_vue_vue_type_style_index_0_id_74c9f665_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_idb_events_vue_vue_type_style_index_0_id_74c9f665_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sample-note[data-v-74c9f665]{margin-bottom:14px}.kpi-foot[data-v-74c9f665]{color:var(--text-3);font-size:11px;font-weight:600;margin-top:6px}.ev-bar[data-v-74c9f665]{display:grid;grid-template-columns:190px minmax(0,1fr) 70px;grid-gap:14px;align-items:center;border-radius:8px;cursor:pointer;gap:14px;margin:0 -8px;padding:6px 8px}.ev-bar[data-v-74c9f665]:hover{background:var(--surface-2)}.ev-track[data-v-74c9f665]{background:var(--surface-3);border-radius:5px;height:14px;overflow:hidden}.ev-track>div[data-v-74c9f665]{border-radius:5px;height:100%}.leg-head[data-v-74c9f665]{align-items:center;color:var(--text-2);display:flex;font-size:12px;font-weight:700;gap:7px}.leg-val[data-v-74c9f665]{font-size:17px;font-weight:600;margin-top:2px}.leg-val span[data-v-74c9f665]{color:var(--text-3);font-size:11.5px}.title-chip[data-v-74c9f665]{align-items:center;background:var(--primary-soft);border:none;border-radius:999px;color:var(--primary-press);cursor:pointer;display:flex;font-size:12px;font-weight:700;gap:6px;padding:6px 8px 6px 12px}.drawer-back[data-v-74c9f665]{backdrop-filter:blur(2px);background:rgba(20,17,12,.45);bottom:0;display:flex;justify-content:flex-end;left:0;position:fixed;right:0;top:0;z-index:60}.drawer[data-v-74c9f665]{background:var(--surface);border-left:1px solid var(--border);box-shadow:var(--shadow-xl);display:flex;flex-direction:column;height:100%;max-width:440px;overflow-y:auto;width:100%}.drawer-head[data-v-74c9f665]{border-bottom:1px solid var(--border);flex:none;overflow:hidden;padding:20px 22px;position:relative}.drawer-kicker[data-v-74c9f665]{font-size:10.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase}.drawer-title[data-v-74c9f665]{font-size:18px;font-weight:800;letter-spacing:-.4px;margin-top:4px}.step-mark[data-v-74c9f665]{align-items:center;border:2px solid;border-radius:50%;display:flex;font-size:11px;font-weight:800;height:28px;justify-content:center;width:28px}.step-line[data-v-74c9f665]{flex:1;margin:3px 0;min-height:22px;width:2px}.drawer-enter-active[data-v-74c9f665],.drawer-leave-active[data-v-74c9f665]{transition:opacity .2s ease}.drawer-enter-active .drawer[data-v-74c9f665],.drawer-leave-active .drawer[data-v-74c9f665]{transition:transform .25s cubic-bezier(.2,.8,.2,1)}.drawer-enter[data-v-74c9f665],.drawer-leave-to[data-v-74c9f665]{opacity:0}.drawer-enter .drawer[data-v-74c9f665],.drawer-leave-to .drawer[data-v-74c9f665]{transform:translateX(40px)}@media (max-width:520px){.ev-bar[data-v-74c9f665]{grid-template-columns:120px minmax(0,1fr) 56px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/idb_events.vue?vue&type=template&id=74c9f665&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('PageHeader', {
    attrs: {
      "page": "idbe"
    }
  }, [_c('FilterSelect', {
    attrs: {
      "label": "Meter number",
      "icon": "gauge",
      "options": _vm.meterOptions,
      "searchable": true
    },
    model: {
      value: _vm.evMeter,
      callback: function ($$v) {
        _vm.evMeter = $$v;
      },
      expression: "evMeter"
    }
  }), _vm._v(" "), _c('FilterSelect', {
    attrs: {
      "label": "Event title",
      "icon": "alert",
      "options": _vm.titleOptions
    },
    model: {
      value: _vm.evTitle,
      callback: function ($$v) {
        _vm.evTitle = $$v;
      },
      expression: "evTitle"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-page\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<div role=\"tablist\" class=\"ie-tabs\" data-v-74c9f665>", "</div>", _vm._l(_vm.tabs, function (t) {
    return _vm._ssrNode("<button role=\"tab\"" + _vm._ssrAttr("aria-selected", _vm.tab === t.key) + _vm._ssrClass(null, {
      on: _vm.tab === t.key
    }) + " data-v-74c9f665>", "</button>", [_c('Icon', {
      attrs: {
        "name": t.icon,
        "size": 15
      }
    }), _vm._ssrNode(_vm._ssrEscape(_vm._s(t.label) + "\n            "))], 2);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-note sample-note\" data-v-74c9f665>", "</div>", [_c('Icon', {
    staticStyle: {
      "color": "var(--warning)"
    },
    attrs: {
      "name": "info",
      "size": 14
    }
  }), _vm._ssrNode("Sample data — the IDB events feed isn't connected yet, so these figures are placeholders.")], 2), _vm._ssrNode(" "), _vm.tab === 'dash' ? _vm._ssrNode("<div class=\"ie-fadein\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<div class=\"ie-grid\" style=\"grid-template-columns: repeat(auto-fit, minmax(230px, 1fr))\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<div class=\"ie-hero ie-hero--red\" style=\"padding:20px 22px\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<div class=\"ie-hero-kicker\" style=\"opacity:.9\" data-v-74c9f665>Total events</div> "), _vm._ssrNode("<div class=\"ie-hero-value\" style=\"font-size:36px;margin-top:12px\" data-v-74c9f665>", "</div>", [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.totalEvents)
    }
  })], 1), _vm._ssrNode(" <div class=\"ie-hero-unit\" style=\"font-weight:600\" data-v-74c9f665>raised by IDB meters</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-card\" style=\"padding:20px 22px\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<div class=\"ie-kpi-head\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<span class=\"ie-ico tone-soe\" data-v-74c9f665>", "</span>", [_c('Icon', {
    attrs: {
      "name": "gauge",
      "size": 16
    }
  })], 1), _vm._ssrNode("<span class=\"ie-kpi-label\" data-v-74c9f665>Unique meters</span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-kpi-value\" style=\"font-weight:600\" data-v-74c9f665>", "</div>", [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.UNIQUE_METERS)
    }
  })], 1), _vm._ssrNode(" <div class=\"ie-kpi-unit\" style=\"font-size:11.5px;margin-top:4px\" data-v-74c9f665>" + _vm._ssrEscape("≈ " + _vm._s(Math.round(_vm.totalEvents / _vm.UNIQUE_METERS)) + " events per meter") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-card\" style=\"padding:20px 22px\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<div class=\"ie-kpi-head\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<span class=\"ie-ico tone-success\" data-v-74c9f665>", "</span>", [_c('Icon', {
    attrs: {
      "name": "check",
      "size": 16
    }
  })], 1), _vm._ssrNode("<span class=\"ie-kpi-label\" data-v-74c9f665>Events treated</span>")], 2), _vm._ssrNode(" <div class=\"ie-kpi-value\" style=\"font-weight:600\" data-v-74c9f665>" + _vm._ssrEscape(_vm._s(_vm.treatedPct)) + "</div> <div class=\"ie-track\" style=\"margin-top:12px\" data-v-74c9f665><div class=\"ie-fill\"" + _vm._ssrStyle(null, {
    width: _vm.treatedPct,
    background: 'var(--success)'
  }, null) + " data-v-74c9f665></div></div> <div class=\"kpi-foot\" data-v-74c9f665>" + _vm._ssrEscape(_vm._s(_vm.fmt(_vm.STATUS.treated)) + " treated · " + _vm._s(_vm.fmt(_vm.STATUS.open)) + " open") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-card\" style=\"padding:20px 22px\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<div class=\"ie-kpi-head\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<span class=\"ie-ico tone-primary\" data-v-74c9f665>", "</span>", [_c('Icon', {
    attrs: {
      "name": "trendUp",
      "size": 16
    }
  })], 1), _vm._ssrNode("<span class=\"ie-kpi-label\" data-v-74c9f665>Vending covers consumption</span>")], 2), _vm._ssrNode(" <div class=\"ie-kpi-value\" style=\"font-weight:600\" data-v-74c9f665>" + _vm._ssrEscape(_vm._s(_vm.metPct)) + "</div> <div class=\"ie-track\" style=\"margin-top:12px\" data-v-74c9f665><div class=\"ie-fill\"" + _vm._ssrStyle(null, {
    width: _vm.metPct,
    background: 'var(--primary)'
  }, null) + " data-v-74c9f665></div></div> <div class=\"kpi-foot\" data-v-74c9f665>" + _vm._ssrEscape(_vm._s(_vm.fmt(_vm.VENDING.met)) + " met · " + _vm._s(_vm.fmt(_vm.VENDING.notMet)) + " not met") + "</div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-grid\" style=\"grid-template-columns: repeat(auto-fit, minmax(360px, 1fr))\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<div class=\"ie-card\" style=\"padding:20px 22px\" data-v-74c9f665><div style=\"display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:14px\" data-v-74c9f665><div data-v-74c9f665><div class=\"ie-card-title\" data-v-74c9f665>What the meters are reporting</div> <div class=\"ie-card-sub\" data-v-74c9f665>Meters raising each event · click to see them in the event log</div></div> <div class=\"ie-legend\" data-v-74c9f665>" + _vm._ssrList(_vm.groupList, function (g) {
    return "<span data-v-74c9f665><span class=\"ie-swatch\"" + _vm._ssrStyle(null, {
      background: g.color
    }, null) + " data-v-74c9f665></span>" + _vm._ssrEscape(_vm._s(g.label)) + "</span>";
  }) + "</div></div> " + _vm._ssrList(_vm.eventBars, function (e) {
    return "<div class=\"ev-bar\" data-v-74c9f665><span class=\"ie-ellip\" style=\"font-size:12.5px;font-weight:700\" data-v-74c9f665>" + _vm._ssrEscape(_vm._s(e.label)) + "</span> <div class=\"ev-track\" data-v-74c9f665><div class=\"ie-grow\"" + _vm._ssrStyle(null, {
      width: e.w,
      minWidth: e.n ? '3px' : '0',
      background: _vm.GROUPS[e.g].color
    }, null) + " data-v-74c9f665></div></div> <span class=\"mono\" style=\"text-align:right;font-size:12.5px;font-weight:600\" data-v-74c9f665>" + _vm._ssrEscape(_vm._s(_vm.fmt(e.n))) + "</span></div>";
  }) + "</div> "), _vm._ssrNode("<div style=\"display:flex;flex-direction:column;gap:14px\" data-v-74c9f665>", "</div>", _vm._l(_vm.donuts, function (d) {
    return _vm._ssrNode("<div class=\"ie-card\" style=\"padding:20px 22px\" data-v-74c9f665>", "</div>", [_vm._ssrNode("<div class=\"ie-card-title\" style=\"font-size:14.5px\" data-v-74c9f665>" + _vm._ssrEscape(_vm._s(d.title)) + "</div> <div class=\"ie-card-sub\" style=\"margin-bottom:12px\" data-v-74c9f665>" + _vm._ssrEscape(_vm._s(d.sub)) + "</div> "), _vm._ssrNode("<div style=\"display:flex;align-items:center;gap:18px\" data-v-74c9f665>", "</div>", [_c('Donut', {
      attrs: {
        "segments": d.legend,
        "size": 112,
        "r": 54,
        "stroke": 18
      }
    }, [_c('span', {
      staticClass: "mono",
      staticStyle: {
        "font-size": "17px",
        "font-weight": "600"
      }
    }, [_vm._v(_vm._s(d.center))])]), _vm._ssrNode(" <div style=\"flex:1;display:flex;flex-direction:column;gap:11px\" data-v-74c9f665>" + _vm._ssrList(d.legend, function (l) {
      return "<div data-v-74c9f665><div class=\"leg-head\" data-v-74c9f665><span class=\"ie-swatch\"" + _vm._ssrStyle(null, {
        background: l.color
      }, null) + " data-v-74c9f665></span>" + _vm._ssrEscape(_vm._s(l.label)) + "</div> <div class=\"mono leg-val\" data-v-74c9f665>" + _vm._ssrEscape(_vm._s(_vm.fmt(l.value)) + " ") + "<span data-v-74c9f665>" + _vm._ssrEscape(_vm._s(l.pct)) + "</span></div></div>";
    }) + "</div>")], 2)], 2);
  }), 0)], 2)], 2) : _vm.tab === 'events' ? _c('DataTable', {
    staticClass: "ie-fadein",
    attrs: {
      "title": "Event log",
      "sub": "Most recent first · click an event to see its resolution progress",
      "columns": _vm.eventColumns,
      "rows": _vm.eventPageRows,
      "min-width": "1000px",
      "sticky-first": false,
      "searchable": "",
      "search-keys": ['msno', 'label'],
      "search-placeholder": "Meter number or event…",
      "clickable": "",
      "footer": _vm.pageLabel(_vm.evPage, _vm.evPages, _vm.eventRows.length),
      "page": _vm.evPage,
      "pages": _vm.evPages
    },
    on: {
      "page": function ($event) {
        _vm.evPage = $event;
      },
      "row-click": function ($event) {
        _vm.evSel = $event;
      }
    },
    scopedSlots: _vm._u([_vm.evTitle !== 'All' ? {
      key: "tools",
      fn: function () {
        return [_c('button', {
          staticClass: "title-chip",
          on: {
            "click": function ($event) {
              _vm.evTitle = 'All';
            }
          }
        }, [_vm._v(_vm._s(_vm.EV_BY_KEY[_vm.evTitle].label)), _c('Icon', {
          attrs: {
            "name": "x",
            "size": 14
          }
        })], 1)];
      },
      proxy: true
    } : null], null, true)
  }) : _c('DataTable', {
    staticClass: "ie-fadein",
    attrs: {
      "title": "Vending vs consumption",
      "sub": "Energy each meter topped up against energy it used · kWh",
      "columns": _vm.vendColumns,
      "rows": _vm.vendPageRows,
      "min-width": "820px",
      "searchable": "",
      "search-keys": ['meter'],
      "search-placeholder": "Meter number…",
      "footer": _vm.pageLabel(_vm.vdPage, _vm.vdPages, _vm.vendRows.length),
      "page": _vm.vdPage,
      "pages": _vm.vdPages
    },
    on: {
      "page": function ($event) {
        _vm.vdPage = $event;
      }
    }
  })], 2), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "drawer"
    }
  }, [_vm.ev ? _c('div', {
    staticClass: "drawer-back",
    on: {
      "click": function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        _vm.evSel = null;
      }
    }
  }, [_c('div', {
    staticClass: "drawer ie-scroll",
    attrs: {
      "role": "dialog",
      "aria-modal": "true"
    }
  }, [_c('div', {
    staticClass: "drawer-head",
    style: {
      background: _vm.ev.soft
    }
  }, [_c('div', {
    staticClass: "ie-diag ie-layer",
    style: {
      color: _vm.ev.color,
      opacity: .08
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "position": "relative",
      "display": "flex",
      "align-items": "flex-start",
      "justify-content": "space-between",
      "gap": "12px"
    }
  }, [_c('div', [_c('div', {
    staticClass: "drawer-kicker",
    style: {
      color: _vm.ev.color
    }
  }, [_vm._v(_vm._s(_vm.ev.group))]), _vm._v(" "), _c('div', {
    staticClass: "drawer-title"
  }, [_vm._v(_vm._s(_vm.ev.title))]), _vm._v(" "), _c('div', {
    staticClass: "mono",
    staticStyle: {
      "font-size": "12px",
      "color": "var(--text-2)",
      "margin-top": "4px"
    }
  }, [_vm._v("Meter " + _vm._s(_vm.ev.msno))])]), _vm._v(" "), _c('button', {
    staticClass: "ie-icon-btn",
    attrs: {
      "aria-label": "Close"
    },
    on: {
      "click": function ($event) {
        _vm.evSel = null;
      }
    }
  }, [_c('Icon', {
    attrs: {
      "name": "x",
      "size": 15
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "20px 22px",
      "display": "flex",
      "flex-direction": "column",
      "gap": "18px"
    }
  }, [_c('div', {
    staticStyle: {
      "font-size": "13.5px",
      "line-height": "1.55"
    }
  }, [_vm._v(_vm._s(_vm.ev.desc))]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "ie-stat-label",
    staticStyle: {
      "margin-bottom": "14px",
      "font-size": "10.5px"
    }
  }, [_vm._v("Resolution progress")]), _vm._v(" "), _vm._l(_vm.ev.steps, function (st, i) {
    return _c('div', {
      key: st.title,
      staticStyle: {
        "display": "flex",
        "gap": "13px"
      }
    }, [_c('div', {
      staticStyle: {
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "flex": "none"
      }
    }, [_c('span', {
      staticClass: "step-mark",
      style: {
        background: st.bg,
        borderColor: st.bd,
        color: st.fg
      }
    }, [_vm._v(_vm._s(st.mark))]), _vm._v(" "), i < _vm.ev.steps.length - 1 ? _c('span', {
      staticClass: "step-line",
      style: {
        background: st.line
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticStyle: {
        "padding": "3px 0 16px"
      }
    }, [_c('div', {
      staticStyle: {
        "font-size": "13px",
        "font-weight": "700"
      },
      style: {
        color: st.titleColor
      }
    }, [_vm._v(_vm._s(st.title))]), _vm._v(" "), _c('div', {
      staticStyle: {
        "font-size": "11.5px",
        "color": "var(--text-3)",
        "margin-top": "2px"
      }
    }, [_vm._v(_vm._s(st.sub))])])]);
  })], 2), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "grid",
      "grid-template-columns": "1fr 1fr",
      "gap": "10px"
    }
  }, [_c('div', {
    staticClass: "ie-stat-box"
  }, [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Raised")]), _c('div', {
    staticClass: "ie-stat-value",
    staticStyle: {
      "font-size": "13px",
      "font-weight": "700"
    }
  }, [_vm._v(_vm._s(_vm.ev.time))])]), _vm._v(" "), _c('div', {
    staticClass: "ie-stat-box"
  }, [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Status")]), _c('div', {
    staticClass: "ie-stat-value",
    staticStyle: {
      "font-size": "13px"
    },
    style: {
      color: _vm.ev.statusColor
    }
  }, [_vm._v(_vm._s(_vm.ev.status))])]), _vm._v(" "), _c('div', {
    staticClass: "ie-stat-box",
    staticStyle: {
      "grid-column": "1 / -1"
    }
  }, [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Feeder")]), _c('div', {
    staticClass: "mono ie-stat-value",
    staticStyle: {
      "font-size": "12.5px",
      "font-weight": "700"
    }
  }, [_vm._v(_vm._s(_vm.ev.feeder))])])])])])]) : _vm._e()])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/idb_events.vue?vue&type=template&id=74c9f665&scoped=true

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

// EXTERNAL MODULE: ./components/ui/Donut.vue + 4 modules
var Donut = __webpack_require__(101);

// EXTERNAL MODULE: ./components/ui/DataTable.vue + 4 modules
var DataTable = __webpack_require__(118);

// EXTERNAL MODULE: ./components/AnimatedValue.vue + 4 modules
var AnimatedValue = __webpack_require__(90);

// EXTERNAL MODULE: ./js_modules/controlCenterApi.js
var controlCenterApi = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/idb_events.vue?vue&type=script&lang=js























// IDB Events. There is no events endpoint yet (see static/api_live_responses3.md — none of the
// ten endpoints cover meter event logs), so everything here is static sample content: the
// headline counts carried over from the Figma mock, and a deterministic generated event log
// so the table and drawer can be exercised. Swap in real data once the backend ships it.

const IDB_FEEDERS = ['11-IgbobiINJ-T1-Apata-COMERCIO', '33-IkoroduTCN-FAKALE Source-COMERCIO'];
const GROUPS = {
  tamper: {
    key: 'tamper',
    label: 'Tamper',
    color: 'var(--danger)',
    soft: 'var(--danger-soft)'
  },
  physical: {
    key: 'physical',
    label: 'Enclosure',
    color: 'var(--warning)',
    soft: 'var(--warning-soft)'
  },
  comms: {
    key: 'comms',
    label: 'Comms',
    color: 'var(--soe)',
    soft: 'var(--soe-soft)'
  },
  commercial: {
    key: 'commercial',
    label: 'Commercial',
    color: 'var(--ca)',
    soft: 'var(--ca-soft)'
  }
};
const EV = [{
  k: 'Current_bypass_end',
  label: 'Current bypass ended',
  g: 'tamper',
  n: 68818,
  d: 'Current bypass on the meter terminals has ended; consumption during the bypass window was not registered.'
}, {
  k: 'Current_reverse_L2',
  label: 'Current reversal · L2',
  g: 'tamper',
  n: 12869,
  d: 'Reverse current detected on phase L2, a common sign of an inverted CT or deliberate tampering.'
}, {
  k: 'Current_reverse_L3',
  label: 'Current reversal · L3',
  g: 'tamper',
  n: 12696,
  d: 'Reverse current detected on phase L3, a common sign of an inverted CT or deliberate tampering.'
}, {
  k: 'Meter_box_closed',
  label: 'Meter box closed',
  g: 'physical',
  n: 4720,
  d: 'The meter enclosure was closed after being opened.'
}, {
  k: 'open_box',
  label: 'Meter box opened',
  g: 'physical',
  n: 4670,
  d: 'The meter enclosure was opened. Confirm whether an authorised visit was scheduled.'
}, {
  k: 'Association_authentication',
  label: 'Authentication failure',
  g: 'comms',
  n: 3657,
  d: 'The meter rejected an association request from the head-end system.'
}, {
  k: 'Current_reverse_L3_end',
  label: 'L3 reversal ended',
  g: 'tamper',
  n: 1815,
  d: 'Reverse current on phase L3 has cleared.'
}, {
  k: 'negative_balance',
  label: 'Negative balance',
  g: 'commercial',
  n: 933,
  d: 'The prepaid account has gone into negative balance while supply continued.'
}, {
  k: 'Terminal_cover_closed',
  label: 'Terminal cover closed',
  g: 'physical',
  n: 663,
  d: 'The terminal cover was refitted.'
}, {
  k: 'Terminal_cover_removed',
  label: 'Terminal cover removed',
  g: 'physical',
  n: 659,
  d: 'The terminal cover was removed, exposing the meter connections.'
}, {
  k: 'modem_cover_closed',
  label: 'Modem cover closed',
  g: 'physical',
  n: 245,
  d: 'The communications modem cover was refitted.'
}, {
  k: 'modem_cover_removed',
  label: 'Modem cover removed',
  g: 'physical',
  n: 0,
  d: 'The communications modem cover was removed.'
}];
const EV_BY_KEY = Object.fromEntries(EV.map(e => [e.k, e]));
const UNIQUE_METERS = 4553;
const STATUS = {
  treated: 88000,
  open: 24400
};
const VENDING = {
  met: 46800,
  notMet: 6400
};
const PAGE_SIZE = 15;
function lcg(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}
function buildEventRows() {
  const rnd = lcg(19);
  const tot = EV.reduce((a, e) => a + e.n, 0);
  const out = [];
  for (let i = 0; i < 64; i++) {
    let r = rnd() * tot;
    let e = EV[0];
    for (const x of EV) {
      if ((r -= x.n) <= 0) {
        e = x;
        break;
      }
    }
    const day = 1 + Math.floor(rnd() * 40);
    const month = day > 31 ? 9 : 8;
    const dd = day > 31 ? day - 31 : day;
    const hh = Math.floor(rnd() * 24);
    const mm = Math.floor(rnd() * 60);
    out.push({
      id: i,
      k: e.k,
      label: e.label,
      msno: '9211205' + String(2900 + Math.floor(rnd() * 900)).padStart(4, '0'),
      sort: month * 100000 + dd * 1440 + hh * 60 + mm,
      time: String(dd).padStart(2, '0') + (month === 8 ? ' Aug' : ' Sep') + ' 2026, ' + String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0'),
      treated: rnd() < 0.78,
      feeder: IDB_FEEDERS[rnd() < 0.72 ? 0 : 1]
    });
  }
  return out.sort((a, b) => b.sort - a.sort);
}
function buildVendRows(evRows) {
  const rnd = lcg(41);
  return Array.from(new Set(evRows.map(r => r.msno))).map(m => {
    const c = 60 + rnd() * 420;
    const met = rnd() < 0.88;
    const v = met ? c * (1 + rnd() * 0.6) : c * (0.35 + rnd() * 0.55);
    return {
      meter: m,
      consumed: c,
      vended: v,
      coverage: v / c * 100
    };
  });
}
const EVENT_ROWS = buildEventRows();
const VEND_ROWS = buildVendRows(EVENT_ROWS);
/* harmony default export */ var idb_eventsvue_type_script_lang_js = ({
  layout: 'dashboard',
  components: {
    Icon: Icon["default"],
    PageHeader: PageHeader["default"],
    FilterSelect: FilterSelect["default"],
    Donut: Donut["default"],
    DataTable: DataTable["default"],
    AnimatedValue: AnimatedValue["default"]
  },
  data() {
    return {
      GROUPS,
      EV_BY_KEY,
      UNIQUE_METERS,
      STATUS,
      VENDING,
      tab: 'dash',
      tabs: [{
        key: 'dash',
        label: 'Dashboard',
        icon: 'gauge'
      }, {
        key: 'events',
        label: 'Event log',
        icon: 'table'
      }, {
        key: 'vending',
        label: 'Vending vs consumption',
        icon: 'table'
      }],
      evMeter: 'All',
      evTitle: 'All',
      evPage: 1,
      vdPage: 1,
      evSel: null,
      eventColumns: [{
        key: 'time',
        label: 'Raised',
        width: 'minmax(150px, 1fr)',
        color: () => 'var(--text-2)',
        weight: 600
      }, {
        key: 'msno',
        label: 'Meter',
        width: 'minmax(124px, .85fr)',
        mono: true,
        weight: 600
      }, {
        key: 'label',
        label: 'Event',
        width: 'minmax(200px, 1.2fr)',
        type: 'pill',
        color: (v, r) => GROUPS[EV_BY_KEY[r.k].g].color,
        soft: (v, r) => GROUPS[EV_BY_KEY[r.k].g].soft
      }, {
        key: 'k',
        label: 'Description',
        width: 'minmax(300px, 2.2fr)',
        weight: 500,
        color: () => 'var(--text-2)',
        format: (v, r) => r.msno + ' — ' + EV_BY_KEY[v].d.charAt(0).toLowerCase() + EV_BY_KEY[v].d.slice(1)
      }, {
        key: 'treated',
        label: 'Status',
        width: '130px',
        type: 'pill',
        format: v => v ? 'Treated' : 'Not treated',
        color: v => v ? 'var(--success)' : 'var(--danger)',
        soft: v => v ? 'var(--success-soft)' : 'var(--danger-soft)'
      }],
      vendColumns: [{
        key: 'meter',
        label: 'Meter',
        width: 'minmax(170px, 1fr)',
        mono: true
      }, {
        key: 'consumed',
        label: 'Consumed',
        width: 'minmax(150px, 1fr)',
        align: 'right',
        mono: true,
        format: v => v.toFixed(2)
      }, {
        key: 'vended',
        label: 'Vended',
        width: 'minmax(150px, 1fr)',
        align: 'right',
        mono: true,
        format: v => v.toFixed(2)
      }, {
        key: 'coverage',
        label: 'Coverage',
        width: 'minmax(190px, 1.1fr)',
        align: 'right',
        mono: true,
        weight: 700,
        type: 'bar',
        format: v => v.toFixed(0) + '%',
        color: v => v >= 100 ? 'var(--success)' : 'var(--danger)'
      }, {
        key: 'coverage',
        label: 'Target',
        width: '130px',
        align: 'right',
        type: 'pill',
        format: v => v >= 100 ? 'Met' : 'Not met',
        color: v => v >= 100 ? 'var(--success)' : 'var(--danger)',
        soft: v => v >= 100 ? 'var(--success-soft)' : 'var(--danger-soft)'
      }]
    };
  },
  computed: {
    totalEvents() {
      return EV.reduce((a, e) => a + e.n, 0);
    },
    treatedPct() {
      return (STATUS.treated / (STATUS.treated + STATUS.open) * 100).toFixed(1) + '%';
    },
    metPct() {
      return (VENDING.met / (VENDING.met + VENDING.notMet) * 100).toFixed(1) + '%';
    },
    groupList() {
      return Object.values(GROUPS);
    },
    eventBars() {
      const max = Math.max(...EV.map(e => e.n));
      return EV.map(e => ({
        ...e,
        w: (e.n / max * 100).toFixed(2) + '%'
      }));
    },
    donuts() {
      const mk = (title, sub, a, b, la, lb, ca, cb) => {
        const t = a + b;
        return {
          title,
          sub,
          center: (t / 1000).toFixed(1) + 'k',
          legend: [{
            label: la,
            value: a,
            pct: '(' + (a / t * 100).toFixed(1) + '%)',
            color: ca
          }, {
            label: lb,
            value: b,
            pct: '(' + (b / t * 100).toFixed(1) + '%)',
            color: cb
          }]
        };
      };
      return [mk('Event status', 'Whether each event has been followed up', STATUS.treated, STATUS.open, 'Treated', 'Not treated', 'var(--success)', 'var(--danger)'), mk('Vending vs consumption', 'Meters whose top-ups cover what they use', VENDING.met, VENDING.notMet, 'Met', 'Not met', 'var(--primary)', 'var(--danger)')];
    },
    meterOptions() {
      return [{
        value: 'All',
        label: 'All meters'
      }, ...Array.from(new Set(EVENT_ROWS.map(r => r.msno))).sort()];
    },
    titleOptions() {
      return [{
        value: 'All',
        label: 'All events'
      }, ...EV.map(e => ({
        value: e.k,
        label: e.label
      }))];
    },
    eventRows() {
      return EVENT_ROWS.filter(r => (this.evMeter === 'All' || r.msno === this.evMeter) && (this.evTitle === 'All' || r.k === this.evTitle));
    },
    evPages() {
      return Math.max(1, Math.ceil(this.eventRows.length / PAGE_SIZE));
    },
    eventPageRows() {
      return this.eventRows.slice((this.evPage - 1) * PAGE_SIZE, this.evPage * PAGE_SIZE);
    },
    vendRows() {
      return VEND_ROWS.filter(r => this.evMeter === 'All' || r.meter === this.evMeter);
    },
    vdPages() {
      return Math.max(1, Math.ceil(this.vendRows.length / PAGE_SIZE));
    },
    vendPageRows() {
      return this.vendRows.slice((this.vdPage - 1) * PAGE_SIZE, this.vdPage * PAGE_SIZE);
    },
    ev() {
      const r = this.evSel;
      if (!r) return null;
      const e = EV_BY_KEY[r.k];
      const g = GROUPS[e.g];
      const done = r.treated;
      const steps = [{
        title: 'Detected',
        sub: r.time + ' · head-end system'
      }, {
        title: 'Assigned',
        sub: 'Revenue Protection · ' + (r.feeder.includes('Ikorodu') ? 'Ikorodu BU' : 'Shomolu BU')
      }, {
        title: 'Investigated',
        sub: done ? 'Field visit completed' : 'Field visit in progress'
      }, {
        title: 'Treated',
        sub: done ? 'Closed out' : 'Awaiting sign-off'
      }];
      const cur = done ? 4 : 2;
      return {
        title: e.label,
        group: g.label + ' event',
        color: g.color,
        soft: g.soft,
        msno: r.msno,
        desc: e.d,
        time: r.time,
        feeder: r.feeder,
        status: done ? 'Treated' : 'Not treated',
        statusColor: done ? 'var(--success)' : 'var(--danger)',
        steps: steps.map((st, i) => {
          const isDone = i < cur;
          const isCur = i === cur;
          return {
            ...st,
            mark: isDone ? '✓' : String(i + 1),
            bg: isDone ? 'var(--success)' : isCur ? 'var(--primary-soft)' : 'var(--surface-2)',
            bd: isDone ? 'var(--success)' : isCur ? 'var(--primary)' : 'var(--border-strong)',
            fg: isDone ? '#fff' : isCur ? 'var(--primary-press)' : 'var(--text-3)',
            line: isDone ? 'var(--success)' : 'var(--border-strong)',
            titleColor: isDone || isCur ? 'var(--text)' : 'var(--text-3)'
          };
        })
      };
    }
  },
  watch: {
    evMeter() {
      this.evPage = 1;
      this.vdPage = 1;
    },
    evTitle() {
      this.evPage = 1;
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKey);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKey);
  },
  methods: {
    fmt: controlCenterApi["e" /* formatNumber */],
    pageLabel(page, pages, total) {
      return total ? `Page ${page} of ${pages} · ${Object(controlCenterApi["e" /* formatNumber */])(total)} rows` : '';
    },
    openTitle(k) {
      this.evTitle = k;
      this.tab = 'events';
    },
    onKey(e) {
      if (e.key === 'Escape') this.evSel = null;
    }
  }
});
// CONCATENATED MODULE: ./pages/idb_events.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_idb_eventsvue_type_script_lang_js = (idb_eventsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/idb_events.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(160)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_idb_eventsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "74c9f665",
  "4d48e185"
  
)

/* harmony default export */ var idb_events = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=idb_events.js.map