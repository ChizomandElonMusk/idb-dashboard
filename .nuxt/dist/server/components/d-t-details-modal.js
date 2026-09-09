exports.ids = [5];
exports.modules = {

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("ad6d53cc", content, true, context)
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_38b7be36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_38b7be36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_38b7be36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_38b7be36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_38b7be36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dt-modal-overlay[data-v-38b7be36]{align-items:center;background:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:2000}.dt-modal-card[data-v-38b7be36]{background:var(--bg-card);border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:calc(100vh - 40px);max-width:560px;overflow-y:auto;padding:24px 28px 28px;width:100%}.dt-modal-header[data-v-38b7be36]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:20px}.dt-modal-title[data-v-38b7be36]{color:var(--text-primary);font-size:22px;font-weight:700;line-height:1.25;margin:0}.dt-modal-close[data-v-38b7be36]{background:none;border:none;color:var(--text-muted);cursor:pointer;flex-shrink:0;line-height:0;padding:4px}.dt-modal-close[data-v-38b7be36]:hover{color:var(--text-primary)}.dt-modal-grid[data-v-38b7be36]{display:grid;grid-template-columns:1fr 1fr;grid-gap:12px;gap:12px;margin-bottom:20px}.dt-modal-box[data-v-38b7be36]{background:var(--bg-card-alt);border-radius:10px;display:flex;flex-direction:column;gap:6px;padding:12px 16px}.dt-modal-box-wide[data-v-38b7be36]{background:rgba(66,133,244,.08);grid-column:1/-1}.dt-modal-label[data-v-38b7be36]{color:var(--text-muted);font-size:12px}.dt-modal-value[data-v-38b7be36]{color:var(--text-primary);font-size:16px;font-weight:700}.dt-modal-mono[data-v-38b7be36]{font-family:monospace}.dt-modal-status[data-v-38b7be36]{align-items:center;display:flex;gap:8px}.dt-modal-address[data-v-38b7be36]{align-items:center;display:flex;gap:4px}.dt-modal-address .material-icons[data-v-38b7be36]{color:var(--text-muted);font-size:16px}.dt-modal-accent[data-v-38b7be36]{color:#2fa360}.dt-modal-voltage[data-v-38b7be36]{color:#26d}.dt-modal-band[data-v-38b7be36]{color:#8a3fd1}.dt-modal-loss[data-v-38b7be36]{align-items:center;display:flex;gap:10px}.dt-modal-loss-track[data-v-38b7be36]{background:var(--divider);border-radius:3px;flex:1;height:6px;overflow:hidden}.dt-modal-loss-fill[data-v-38b7be36]{background:#c0392b;border-radius:3px;height:100%}.marker-dot[data-v-38b7be36]{border-radius:50%;display:inline-block;flex-shrink:0;height:10px;width:10px}.marker-dot.green[data-v-38b7be36]{background:#2fa360}.marker-dot.red[data-v-38b7be36]{background:#c0392b}.marker-dot.orange[data-v-38b7be36]{background:#e8a325}.dt-modal-full-btn[data-v-38b7be36]{background:#26e;border:none;border-radius:10px;color:#fff;cursor:pointer;font-size:15px;font-weight:600;padding:14px;width:100%}.dt-modal-full-btn[data-v-38b7be36]:hover{background:#1a52c4}.dt-modal-fade-enter-active[data-v-38b7be36],.dt-modal-fade-leave-active[data-v-38b7be36]{transition:opacity .15s ease}.dt-modal-fade-enter[data-v-38b7be36],.dt-modal-fade-leave-to[data-v-38b7be36]{opacity:0}@media only screen and (max-width:600px){.dt-modal-grid[data-v-38b7be36]{grid-template-columns:1fr}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DTDetailsModal.vue?vue&type=template&id=38b7be36&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "dt-modal-fade"
    }
  }, [_vm.marker ? _c('div', {
    staticClass: "dt-modal-overlay",
    on: {
      "click": function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.$emit('close');
      }
    }
  }, [_c('div', {
    staticClass: "dt-modal-card"
  }, [_c('div', {
    staticClass: "dt-modal-header"
  }, [_c('h4', {
    staticClass: "dt-modal-title"
  }, [_vm._v(_vm._s(_vm.marker.label)), _c('br'), _vm._v("Details")]), _vm._v(" "), _c('button', {
    staticClass: "dt-modal-close",
    attrs: {
      "aria-label": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("close")])])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-grid"
  }, [_c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Status")]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-status"
  }, [_c('i', {
    staticClass: "marker-dot",
    class: _vm.statusDotClass
  }), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value"
  }, [_vm._v(_vm._s(_vm.statusLabel))])])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Type")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value"
  }, [_vm._v(_vm._s(_vm.details.type))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Address")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-address"
  }, [_c('i', {
    staticClass: "material-icons tiny"
  }, [_vm._v("place")]), _vm._v(_vm._s(_vm.details.address) + "\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Total Energy")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-accent"
  }, [_vm._v(_vm._s(_vm.details.totalEnergy))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Voltage")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-voltage"
  }, [_vm._v(_vm._s(_vm.details.voltage))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Loss")]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-loss"
  }, [_c('div', {
    staticClass: "dt-modal-loss-track"
  }, [_c('div', {
    staticClass: "dt-modal-loss-fill",
    style: {
      width: _vm.details.loss + '%'
    }
  })]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value"
  }, [_vm._v(_vm._s(_vm.details.loss) + "%")])])]), _vm._v(" "), _vm.showFullDetails ? [_c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Feeder Band")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-band"
  }, [_vm._v(_vm._s(_vm.details.feederBand))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Availability (Hrs)")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-accent"
  }, [_vm._v(_vm._s(_vm.details.availabilityHrs))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box dt-modal-box-wide"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Last Updated")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value"
  }, [_vm._v(_vm._s(_vm.details.lastUpdated))])]), _vm._v(" "), _c('div', {
    staticClass: "dt-modal-box dt-modal-box-wide"
  }, [_c('span', {
    staticClass: "dt-modal-label"
  }, [_vm._v("Location Coordinates")]), _vm._v(" "), _c('b', {
    staticClass: "dt-modal-value dt-modal-mono"
  }, [_vm._v(_vm._s(_vm.details.coordinates))])])] : _vm._e()], 2), _vm._v(" "), !_vm.showFullDetails ? _c('button', {
    staticClass: "dt-modal-full-btn",
    on: {
      "click": function ($event) {
        _vm.showFullDetails = true;
      }
    }
  }, [_vm._v("\n                View Full Details\n            ")]) : _vm._e()])]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DTDetailsModal.vue?vue&type=template&id=38b7be36&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DTDetailsModal.vue?vue&type=script&lang=js
// Detail fields (type, address, energy readings, feeder band, etc.) are not yet exposed by the
// backend for individual grid network assets, so they're derived deterministically from the
// marker's own data here. Swap `details` for real API data once that endpoint ships.
/* harmony default export */ var DTDetailsModalvue_type_script_lang_js = ({
  name: 'DTDetailsModal',
  props: {
    marker: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showFullDetails: false
    };
  },
  computed: {
    statusLabel() {
      var _this$marker;
      const status = ((_this$marker = this.marker) === null || _this$marker === void 0 ? void 0 : _this$marker.status) || 'online';
      return status.charAt(0).toUpperCase() + status.slice(1);
    },
    statusDotClass() {
      var _this$marker2;
      const map = {
        online: 'green',
        offline: 'red',
        inactive: 'orange'
      };
      return map[(_this$marker2 = this.marker) === null || _this$marker2 === void 0 ? void 0 : _this$marker2.status] || 'green';
    },
    details() {
      if (!this.marker) return {};
      const seed = this.seedFromString(this.marker.label || '');
      const isFeeder = /feeder/i.test(this.marker.label || '');
      return {
        type: seed % 2 === 0 ? 'Public' : 'Private',
        address: this.marker.address || 'Adeniyi Jones ISS',
        totalEnergy: `${(200 + seed % 400 + seed % 100 / 100).toFixed(2)}KWH`,
        voltage: isFeeder ? seed % 2 === 0 ? '33kV' : '11kV' : '33kV',
        loss: 30 + seed % 60,
        feederBand: `Band ${String.fromCharCode(65 + seed % 4)}`,
        availabilityHrs: 12 + seed % 12,
        lastUpdated: this.formatDate(new Date(Date.now() - seed % 72 * 3600 * 1000)),
        coordinates: `${this.marker.lat.toFixed(4)}, ${this.marker.lng.toFixed(4)}`
      };
    }
  },
  watch: {
    marker() {
      this.showFullDetails = false;
    }
  },
  methods: {
    seedFromString(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = hash * 31 + str.charCodeAt(i) >>> 0;
      }
      return hash;
    },
    formatDate(date) {
      return date.toLocaleString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
    }
  }
});
// CONCATENATED MODULE: ./components/DTDetailsModal.vue?vue&type=script&lang=js
 /* harmony default export */ var components_DTDetailsModalvue_type_script_lang_js = (DTDetailsModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DTDetailsModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DTDetailsModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38b7be36",
  "58f67c0a"
  
)

/* harmony default export */ var DTDetailsModal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=d-t-details-modal.js.map