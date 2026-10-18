exports.ids = [19];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=ui-data-table.js.map