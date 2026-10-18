exports.ids = [5];
exports.modules = {

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2c9acd06", content, true, context)
};

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_fcb0ae74_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_fcb0ae74_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_fcb0ae74_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_fcb0ae74_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DTDetailsModal_vue_vue_type_style_index_0_id_fcb0ae74_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ie-backdrop[data-v-fcb0ae74]{z-index:2000}.dm-head[data-v-fcb0ae74]{border-bottom:1px solid var(--border);overflow:hidden;padding:18px 20px;position:relative}.dm-head-row[data-v-fcb0ae74]{align-items:flex-start;display:flex;gap:13px;position:relative}.dm-head-ico[data-v-fcb0ae74]{align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow-xs);display:flex;flex:none;height:44px;justify-content:center;width:44px}.dm-head-ico img[data-v-fcb0ae74]{height:26px;width:26px}.dm-kicker[data-v-fcb0ae74]{font-size:10.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase}.dm-title[data-v-fcb0ae74]{font-size:16px;font-weight:800;letter-spacing:-.3px;line-height:1.25;margin-top:3px;word-break:break-word}.dm-feeder[data-v-fcb0ae74]{color:var(--text-2);font-size:11.5px;margin-top:3px}.dm-grid[data-v-fcb0ae74]{display:grid;grid-template-columns:1fr 1fr;padding:16px 20px;grid-gap:10px;gap:10px}.dm-wide[data-v-fcb0ae74]{grid-column:1/-1}.dm-dot[data-v-fcb0ae74]{border-radius:50%;height:8px;width:8px}.dm-actions[data-v-fcb0ae74]{display:flex;gap:9px;padding:0 20px 18px}.dm-btn[data-v-fcb0ae74]{background:var(--surface);border-radius:10px;flex:1;font-size:13px;padding:11px}.dt-modal-fade-enter-active[data-v-fcb0ae74],.dt-modal-fade-leave-active[data-v-fcb0ae74]{transition:opacity .15s ease}.dt-modal-fade-enter[data-v-fcb0ae74],.dt-modal-fade-leave-to[data-v-fcb0ae74]{opacity:0}@media (max-width:600px){.dm-grid[data-v-fcb0ae74]{grid-template-columns:1fr}.dm-actions[data-v-fcb0ae74]{flex-direction:column}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DTDetailsModal.vue?vue&type=template&id=fcb0ae74&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "dt-modal-fade"
    }
  }, [_vm.marker ? _c('div', {
    staticClass: "ie-backdrop",
    on: {
      "click": function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.$emit('close');
      }
    }
  }, [_c('div', {
    staticClass: "ie-modal ie-fadeup",
    attrs: {
      "role": "dialog",
      "aria-modal": "true"
    }
  }, [_c('div', {
    staticClass: "dm-head",
    style: {
      background: _vm.meta.soft
    }
  }, [_c('div', {
    staticClass: "pt-circuit ie-layer",
    style: {
      color: _vm.meta.color,
      opacity: .12
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "dm-head-row"
  }, [_c('span', {
    staticClass: "dm-head-ico"
  }, [_c('img', {
    attrs: {
      "src": '/' + _vm.status + '.svg',
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "flex": "1",
      "min-width": "0"
    }
  }, [_c('div', {
    staticClass: "dm-kicker",
    style: {
      color: _vm.meta.color
    }
  }, [_vm._v("Distribution transformer")]), _vm._v(" "), _c('div', {
    staticClass: "dm-title"
  }, [_vm._v(_vm._s(_vm.marker.label))]), _vm._v(" "), _c('div', {
    staticClass: "dm-feeder mono"
  }, [_vm._v(_vm._s(_vm.marker.feederName || '—'))])]), _vm._v(" "), _c('button', {
    staticClass: "ie-icon-btn",
    attrs: {
      "aria-label": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_c('Icon', {
    attrs: {
      "name": "x",
      "size": 15
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "dm-grid"
  }, [_c('div', {
    staticClass: "ie-stat-box"
  }, [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Status")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "gap": "7px",
      "margin-top": "5px"
    }
  }, [_c('span', {
    staticClass: "dm-dot",
    style: {
      background: _vm.meta.color
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ie-stat-value",
    staticStyle: {
      "margin": "0"
    },
    style: {
      color: _vm.meta.color
    }
  }, [_vm._v(_vm._s(_vm.meta.label))])])]), _vm._v(" "), _c('div', {
    staticClass: "ie-stat-box"
  }, [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Type")]), _vm._v(" "), _c('div', {
    staticClass: "ie-stat-value"
  }, [_vm._v(_vm._s(_vm.details.type))])]), _vm._v(" "), _c('div', {
    staticClass: "ie-stat-box dm-wide"
  }, [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Address")]), _vm._v(" "), _c('div', {
    staticClass: "ie-stat-value",
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "gap": "6px",
      "font-size": "13.5px",
      "font-weight": "700"
    }
  }, [_c('Icon', {
    staticStyle: {
      "color": "var(--primary)"
    },
    attrs: {
      "name": "pin",
      "size": 14
    }
  }), _vm._v(_vm._s(_vm.details.address) + "\n                    ")], 1)]), _vm._v(" "), _c('div', {
    staticClass: "ie-stat-box"
  }, [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Total energy")]), _vm._v(" "), _c('div', {
    staticClass: "mono ie-stat-value",
    staticStyle: {
      "font-size": "15px",
      "color": "var(--primary-press)"
    }
  }, [_vm._v(_vm._s(_vm.details.totalEnergy) + " "), _c('span', {
    staticStyle: {
      "font-size": "11px",
      "color": "var(--text-3)"
    }
  }, [_vm._v("kWh")])])]), _vm._v(" "), _c('div', {
    staticClass: "ie-stat-box"
  }, [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Voltage")]), _vm._v(" "), _c('div', {
    staticClass: "mono ie-stat-value",
    staticStyle: {
      "font-size": "15px"
    }
  }, [_vm._v(_vm._s(_vm.details.voltage))])]), _vm._v(" "), _c('div', {
    staticClass: "ie-stat-box dm-wide"
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "baseline",
      "justify-content": "space-between"
    }
  }, [_c('span', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Loss")]), _vm._v(" "), _c('span', {
    staticClass: "mono",
    staticStyle: {
      "font-size": "14px",
      "font-weight": "700"
    },
    style: {
      color: _vm.lossColor
    }
  }, [_vm._v(_vm._s(_vm.details.loss) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-track",
    staticStyle: {
      "margin-top": "8px"
    }
  }, [_c('div', {
    staticClass: "ie-fill",
    style: {
      width: _vm.details.loss + '%',
      background: _vm.lossColor
    }
  })])]), _vm._v(" "), _vm.showFullDetails ? [_c('div', {
    staticClass: "ie-stat-box"
  }, [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Feeder band")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "gap": "8px",
      "margin-top": "5px"
    }
  }, [_c('span', {
    staticClass: "ie-band",
    style: {
      background: _vm.bandSoft,
      color: _vm.bandColor
    }
  }, [_vm._v(_vm._s(_vm.band))]), _vm._v(" "), _vm.bandTarget ? _c('span', {
    staticStyle: {
      "font-size": "12px",
      "color": "var(--text-3)",
      "font-weight": "600"
    }
  }, [_vm._v(_vm._s(_vm.bandTarget) + "h target")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "ie-stat-box"
  }, [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Availability")]), _vm._v(" "), _c('div', {
    staticClass: "mono ie-stat-value",
    staticStyle: {
      "font-size": "15px",
      "color": "var(--success)"
    }
  }, [_vm._v(_vm._s(_vm.details.availabilityHrs)), _c('span', {
    staticStyle: {
      "font-size": "11px",
      "color": "var(--text-3)"
    }
  }, [_vm._v(" hrs")])])]), _vm._v(" "), _c('div', {
    staticClass: "ie-stat-box dm-wide",
    staticStyle: {
      "display": "flex",
      "justify-content": "space-between",
      "gap": "12px",
      "flex-wrap": "wrap"
    }
  }, [_c('div', [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Last updated")]), _c('div', {
    staticStyle: {
      "font-size": "13px",
      "font-weight": "700",
      "margin-top": "5px"
    }
  }, [_vm._v(_vm._s(_vm.details.lastUpdated))])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_c('div', {
    staticClass: "ie-stat-label"
  }, [_vm._v("Coordinates")]), _c('div', {
    staticClass: "mono",
    staticStyle: {
      "font-size": "12.5px",
      "font-weight": "700",
      "margin-top": "5px"
    }
  }, [_vm._v(_vm._s(_vm.details.coordinates))])])])] : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "dm-actions"
  }, [!_vm.showFullDetails ? _c('button', {
    staticClass: "ie-btn dm-btn",
    on: {
      "click": function ($event) {
        _vm.showFullDetails = true;
      }
    }
  }, [_vm._v("View full details")]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "ie-btn dm-btn",
    on: {
      "click": _vm.openDt
    }
  }, [_vm._v("Open in DT Availability"), _c('Icon', {
    attrs: {
      "name": "arrowR",
      "size": 14
    }
  })], 1)])])]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DTDetailsModal.vue?vue&type=template&id=fcb0ae74&scoped=true

// EXTERNAL MODULE: ./components/ui/Icon.vue + 2 modules
var Icon = __webpack_require__(13);

// EXTERNAL MODULE: ./js_modules/pages.js
var pages = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DTDetailsModal.vue?vue&type=script&lang=js


const BAND_TARGET = {
  A: 20,
  B: 16,
  C: 12,
  D: 8,
  E: 4
};
const STATUS = {
  online: {
    label: 'Online',
    color: 'var(--success)',
    soft: 'var(--success-soft)'
  },
  offline: {
    label: 'Offline',
    color: 'var(--danger)',
    soft: 'var(--danger-soft)'
  },
  inactive: {
    label: 'Inactive',
    color: 'var(--warning)',
    soft: 'var(--warning-soft)'
  }
};

// Detail fields (type, address, energy readings, etc.) are not yet exposed by the backend
// for individual grid network assets, so they're derived deterministically from the
// marker's own data here. Swap `details` for real API data once that endpoint ships.
/* harmony default export */ var DTDetailsModalvue_type_script_lang_js = ({
  name: 'DTDetailsModal',
  components: {
    Icon: Icon["default"]
  },
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
    status() {
      var _this$marker;
      return STATUS[(_this$marker = this.marker) === null || _this$marker === void 0 ? void 0 : _this$marker.status] ? this.marker.status : 'online';
    },
    meta() {
      return STATUS[this.status];
    },
    band() {
      var _this$marker2;
      return ((_this$marker2 = this.marker) === null || _this$marker2 === void 0 ? void 0 : _this$marker2.band) || this.details.feederBand;
    },
    bandColor() {
      return Object(pages["c" /* bandColorVar */])(this.band);
    },
    bandSoft() {
      return Object(pages["d" /* bandSoftVar */])(this.band);
    },
    bandTarget() {
      return BAND_TARGET[this.band] || null;
    },
    lossColor() {
      const l = this.details.loss || 0;
      return l >= 50 ? 'var(--danger)' : l >= 25 ? 'var(--warning)' : 'var(--success)';
    },
    details() {
      if (!this.marker) return {};
      const seed = this.seedFromString(this.marker.label || '');
      const isFeeder = /feeder/i.test(this.marker.label || '');
      return {
        type: seed % 2 === 0 ? 'Public' : 'Private',
        address: this.marker.address || 'Adeniyi Jones ISS',
        totalEnergy: (200 + seed % 400 + seed % 100 / 100).toFixed(2),
        voltage: isFeeder ? seed % 2 === 0 ? '33kV' : '11kV' : '33kV',
        loss: 30 + seed % 60,
        feederBand: String.fromCharCode(65 + seed % 4),
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
  mounted() {
    window.addEventListener('keydown', this.onKey);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKey);
  },
  methods: {
    onKey(e) {
      if (e.key === 'Escape' && this.marker) this.$emit('close');
    },
    openDt() {
      const name = this.marker && this.marker.label;
      this.$emit('close');
      this.$router.push({
        path: '/dt_availability',
        query: name ? {
          dt: name
        } : {}
      });
    },
    seedFromString(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = hash * 31 + str.charCodeAt(i) >>> 0;
      }
      return hash;
    },
    formatDate(date) {
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
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
  
  var style0 = __webpack_require__(123)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DTDetailsModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fcb0ae74",
  "58f67c0a"
  
)

/* harmony default export */ var DTDetailsModal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=d-t-details-modal.js.map