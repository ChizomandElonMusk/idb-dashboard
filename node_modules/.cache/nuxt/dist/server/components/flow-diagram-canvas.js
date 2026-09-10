exports.ids = [6];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowDiagramCanvas_vue_vue_type_style_index_0_id_2b11caca_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowDiagramCanvas_vue_vue_type_style_index_0_id_2b11caca_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowDiagramCanvas_vue_vue_type_style_index_0_id_2b11caca_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowDiagramCanvas_vue_vue_type_style_index_0_id_2b11caca_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowDiagramCanvas_vue_vue_type_style_index_0_id_2b11caca_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flow-canvas-wrap[data-v-2b11caca]{position:relative}.flow-canvas-content[data-v-2b11caca]{position:relative;z-index:1}.flow-canvas-svg[data-v-2b11caca]{left:0;overflow:visible;pointer-events:none;position:absolute;top:0;z-index:0}.flow-connector-path[data-v-2b11caca]{fill:none;stroke:var(--border-strong);stroke-width:1.5}.flow-connector-arrowhead[data-v-2b11caca]{fill:var(--border-strong)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlowDiagramCanvas.vue?vue&type=template&id=2b11caca&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "wrap",
    staticClass: "flow-canvas-wrap"
  }, [_vm._ssrNode("<div class=\"flow-canvas-content\" data-v-2b11caca>", "</div>", [_vm._t("default")], 2), _vm._ssrNode(" <svg" + _vm._ssrAttr("width", _vm.size.w) + _vm._ssrAttr("height", _vm.size.h) + " class=\"flow-canvas-svg\" data-v-2b11caca><defs data-v-2b11caca><marker id=\"flow-arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"5.5\" refY=\"3\" orient=\"auto\" data-v-2b11caca><path d=\"M0,0 L6,3 L0,6 Z\" class=\"flow-connector-arrowhead\" data-v-2b11caca></path></marker></defs> " + _vm._ssrList(_vm.segments, function (seg) {
    return "<path" + _vm._ssrAttr("d", seg.d) + " marker-end=\"url(#flow-arrowhead)\" class=\"flow-connector-path\" data-v-2b11caca></path>";
  }) + "</svg>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FlowDiagramCanvas.vue?vue&type=template&id=2b11caca&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlowDiagramCanvas.vue?vue&type=script&lang=js
// Draws the curved connector lines between FlowLane cards (replacing plain
// arrow icons), matching the look of static/PHOTO-2026-09-09-20-46-09.jpg -
// a smooth bezier from one card's edge to the next, not a boxy straight
// arrow. FlowLane instances register/unregister their own connections here
// via the injected `flowConnectorApi`; this component owns the single SVG
// overlay and recomputes every path whenever the diagram's size changes
// (new cards appearing/disappearing, window resize).

/* harmony default export */ var FlowDiagramCanvasvue_type_script_lang_js = ({
  name: 'FlowDiagramCanvas',
  // register()/unregister() are called directly by FlowLane instances,
  // which receive this component as a plain prop (see connectorApi in
  // FlowLane.vue) rather than via provide/inject - inject through default
  // slot content is ambiguous in Vue 2, so this sidesteps it entirely.
  data() {
    return {
      connectors: {},
      segments: [],
      size: {
        w: 0,
        h: 0
      }
    };
  },
  mounted() {
    this._ro = new ResizeObserver(() => this.scheduleRecompute());
    this._ro.observe(this.$refs.wrap);
    window.addEventListener('resize', this.scheduleRecompute);
    this.scheduleRecompute();
  },
  beforeDestroy() {
    if (this._ro) this._ro.disconnect();
    window.removeEventListener('resize', this.scheduleRecompute);
    if (this._raf) cancelAnimationFrame(this._raf);
  },
  methods: {
    // orientation: 'right' (edge-to-edge, mostly horizontal curve) or
    // 'down' (edge-to-edge, mostly vertical curve)
    register(id, fromEl, toEl, orientation) {
      this.connectors[id] = {
        fromEl,
        toEl,
        orientation
      };
      this.scheduleRecompute();
    },
    unregister(id) {
      if (this.connectors[id]) {
        delete this.connectors[id];
        this.scheduleRecompute();
      }
    },
    scheduleRecompute() {
      if (this._raf) cancelAnimationFrame(this._raf);
      this._raf = requestAnimationFrame(() => this.recompute());
    },
    recompute() {
      const wrap = this.$refs.wrap;
      if (!wrap) return;
      const wrapRect = wrap.getBoundingClientRect();
      const segs = [];
      Object.keys(this.connectors).forEach(id => {
        const {
          fromEl,
          toEl,
          orientation
        } = this.connectors[id];
        if (!fromEl || !toEl || !fromEl.isConnected || !toEl.isConnected) return;
        const fr = fromEl.getBoundingClientRect();
        const tr = toEl.getBoundingClientRect();
        let x1, y1, x2, y2, d;
        if (orientation === 'down') {
          x1 = fr.left + fr.width / 2 - wrapRect.left;
          y1 = fr.bottom - wrapRect.top;
          x2 = tr.left + tr.width / 2 - wrapRect.left;
          y2 = tr.top - wrapRect.top;
          const dy = Math.max(20, (y2 - y1) * 0.5);
          d = `M ${x1} ${y1} C ${x1} ${y1 + dy}, ${x2} ${y2 - dy}, ${x2} ${y2}`;
        } else {
          x1 = fr.right - wrapRect.left;
          y1 = fr.top + fr.height / 2 - wrapRect.top;
          x2 = tr.left - wrapRect.left;
          y2 = tr.top + tr.height / 2 - wrapRect.top;
          const dx = Math.max(24, (x2 - x1) * 0.5);
          d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
        }
        segs.push({
          id,
          d
        });
      });
      this.segments = segs;
      // Measure the content column, not the wrap's scrollWidth/Height -
      // the SVG is an absolutely-positioned sibling that would
      // otherwise inflate the wrap's scroll size, which we'd then read
      // back in as this size on the next pass (never shrinking back
      // down once the diagram had grown, e.g. after Reset).
      const content = this.$refs.content;
      this.size = content ? {
        w: content.offsetWidth,
        h: content.offsetHeight
      } : {
        w: 0,
        h: 0
      };
    }
  }
});
// CONCATENATED MODULE: ./components/FlowDiagramCanvas.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FlowDiagramCanvasvue_type_script_lang_js = (FlowDiagramCanvasvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FlowDiagramCanvas.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(108)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FlowDiagramCanvasvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2b11caca",
  "1983ddcd"
  
)

/* harmony default export */ var FlowDiagramCanvas = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7f7aabec", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=flow-diagram-canvas.js.map