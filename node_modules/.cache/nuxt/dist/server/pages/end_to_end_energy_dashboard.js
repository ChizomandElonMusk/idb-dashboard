exports.ids = [30,1,5,9,21,22,25,26];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDate_vue_vue_type_style_index_0_id_23eb094b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDate_vue_vue_type_style_index_0_id_23eb094b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDate_vue_vue_type_style_index_0_id_23eb094b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDate_vue_vue_type_style_index_0_id_23eb094b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterDate_vue_vue_type_style_index_0_id_23eb094b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fd[data-v-23eb094b]{align-items:center;background:var(--surface-2);border:1px solid var(--border-strong);border-radius:9px;color:var(--text);cursor:pointer;display:flex;gap:8px;height:38px;padding:0 11px;position:relative}.fd[data-v-23eb094b]:focus-within{border-color:var(--primary)}.fd-ico[data-v-23eb094b]{color:var(--text-3)}.fd-text[data-v-23eb094b]{align-items:flex-start;display:flex;flex-direction:column;line-height:1.05}.fd-label[data-v-23eb094b]{color:var(--text-3);font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.fd-value[data-v-23eb094b]{font-family:var(--mono);font-size:12px;font-weight:700;white-space:nowrap}.fd-input[data-v-23eb094b]{border:0;bottom:0;height:100%;left:0;margin:0;opacity:0;padding:0;pointer-events:none;position:absolute;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/FilterDate.vue?vue&type=template&id=23eb094b&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', {
    staticClass: "fd",
    on: {
      "click": _vm.open
    }
  }, [_c('Icon', {
    staticClass: "fd-ico",
    attrs: {
      "name": "calendar",
      "size": 15
    }
  }), _vm._ssrNode(" <span class=\"fd-text\" data-v-23eb094b><span class=\"fd-label\" data-v-23eb094b>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</span> <span class=\"fd-value\" data-v-23eb094b>" + _vm._ssrEscape(_vm._s(_vm.display)) + "</span></span> "), _c('Icon', {
    staticClass: "fd-ico",
    attrs: {
      "name": "chevDown",
      "size": 14
    }
  }), _vm._ssrNode(" <input" + _vm._ssrAttr("type", _vm.type) + _vm._ssrAttr("max", _vm.max) + _vm._ssrAttr("min", _vm.min) + " tabindex=\"-1\"" + _vm._ssrAttr("value", _vm.value) + " class=\"fd-input\" data-v-23eb094b>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/FilterDate.vue?vue&type=template&id=23eb094b&scoped=true

// EXTERNAL MODULE: ./components/ui/Icon.vue + 2 modules
var Icon = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/FilterDate.vue?vue&type=script&lang=js

const MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Design-styled date/month filter pill. Uses the browser's native picker underneath so
// keyboard + mobile pickers keep working; emits `change` with YYYY-MM or YYYY-MM-DD.
/* harmony default export */ var FilterDatevue_type_script_lang_js = ({
  name: 'FilterDate',
  components: {
    Icon: Icon["default"]
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'date'
    },
    // 'date' | 'month'
    label: {
      type: String,
      default: 'Date'
    },
    max: {
      type: String,
      default: undefined
    },
    min: {
      type: String,
      default: undefined
    }
  },
  computed: {
    display() {
      if (!this.value) return 'Latest';
      const [y, m, d] = this.value.split('-').map(Number);
      if (!y || !m) return this.value;
      return this.type === 'month' ? `${MN[m - 1]} ${y}` : `${String(d).padStart(2, '0')} ${MN[m - 1]} ${y}`;
    }
  },
  methods: {
    open() {
      const el = this.$refs.input;
      try {
        if (typeof el.showPicker === 'function') el.showPicker();else el.focus();
      } catch (e) {
        el.focus();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ui/FilterDate.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_FilterDatevue_type_script_lang_js = (FilterDatevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/FilterDate.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(102)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_FilterDatevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23eb094b",
  "f86f979e"
  
)

/* harmony default export */ var FilterDate = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("59e16844", content, true, context)
};

/***/ }),

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

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_43a436e4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_43a436e4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_43a436e4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_43a436e4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_43a436e4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".grid-map-el[data-v-43a436e4],.grid-map-wrap[data-v-43a436e4]{height:100%;width:100%}.grid-map-el[data-v-43a436e4]{min-height:380px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GridNetworkMap.vue?vue&type=template&id=43a436e4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "grid-map-wrap"
  }, [_vm._ssrNode("<div class=\"grid-map-el\" data-v-43a436e4></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GridNetworkMap.vue?vue&type=template&id=43a436e4&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GridNetworkMap.vue?vue&type=script&lang=js
// Leaflet + OpenStreetMap tiles — no API key required. Leaflet touches `window`/`document`
// at import time, so it must only ever be loaded on the client, hence the dynamic import
// inside mounted() rather than a top-level `import`.
/* harmony default export */ var GridNetworkMapvue_type_script_lang_js = ({
  name: 'GridNetworkMap',
  props: {
    markers: {
      type: Array,
      default: () => []
    },
    center: {
      type: Array,
      default: () => [6.6386, 3.3730]
    },
    zoom: {
      type: Number,
      default: 14
    }
  },
  data() {
    return {
      map: null,
      markerLayer: null,
      L: null
    };
  },
  mounted() {
    this.initMap();
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  },
  watch: {
    // Markers arrive after an async API call resolves, well after mount, so the map
    // must redraw them rather than only plotting whatever was passed in at mount time.
    markers() {
      this.renderMarkers();
    },
    center(next) {
      if (this.map) this.map.setView(next, this.zoom);
    }
  },
  methods: {
    async initMap() {
      const L = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 78, 7));
      this.L = L;
      this.map = L.map(this.$refs.mapEl, {
        scrollWheelZoom: false
      }).setView(this.center, this.zoom);

      // Esri's free World Street Map tiles — no API key required, unlike Google/Carto.
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, HERE, Garmin, OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(this.map);
      this.markerLayer = L.layerGroup().addTo(this.map);
      this.renderMarkers();
    },
    renderMarkers() {
      if (!this.L || !this.markerLayer) return;
      const iconFor = status => this.L.icon({
        iconUrl: `/${status}.svg`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        popupAnchor: [0, -13]
      });
      const icons = {
        online: iconFor('online'),
        offline: iconFor('offline'),
        inactive: iconFor('inactive')
      };
      this.markerLayer.clearLayers();
      this.markers.forEach(m => {
        const marker = this.L.marker([m.lat, m.lng], {
          icon: icons[m.status] || icons.online
        });
        marker.on('click', () => this.$emit('marker-click', m));
        marker.addTo(this.markerLayer);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/GridNetworkMap.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GridNetworkMapvue_type_script_lang_js = (GridNetworkMapvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/GridNetworkMap.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(121)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GridNetworkMapvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "43a436e4",
  "0096b0d8"
  
)

/* harmony default export */ var GridNetworkMap = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("55067b3d", content, true, context)
};

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_end_to_end_energy_dashboard_vue_vue_type_style_index_0_id_78eabec0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_end_to_end_energy_dashboard_vue_vue_type_style_index_0_id_78eabec0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_end_to_end_energy_dashboard_vue_vue_type_style_index_0_id_78eabec0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_end_to_end_energy_dashboard_vue_vue_type_style_index_0_id_78eabec0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_end_to_end_energy_dashboard_vue_vue_type_style_index_0_id_78eabec0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".watermark[data-v-78eabec0]{bottom:auto;color:var(--text);font-family:var(--mono);font-size:92px;font-weight:700;left:auto;opacity:.045;right:10px;top:-18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.net-card[data-v-78eabec0]{align-items:center;border-radius:16px;display:flex;gap:14px;padding:16px 18px}.net-value[data-v-78eabec0]{color:var(--chip-fg);font-size:30px;font-weight:700;letter-spacing:-1.2px;line-height:1}.net-label[data-v-78eabec0]{color:var(--text-2);font-size:12.5px;font-weight:700;margin-top:5px}.infra[data-v-78eabec0]{display:grid;grid-template-columns:repeat(auto-fit,minmax(186px,1fr));grid-gap:1px;background:var(--border);border:1px solid var(--border);border-radius:16px;gap:1px;margin-bottom:14px;overflow:hidden}.infra-cell[data-v-78eabec0]{align-items:center;background:var(--surface);display:flex;gap:12px;min-width:0;padding:15px 18px}.infra-value[data-v-78eabec0]{font-size:19px;font-weight:700;letter-spacing:-.6px}.infra-label[data-v-78eabec0]{color:var(--text-2);font-size:11px;font-weight:600}.gn-search-wrap[data-v-78eabec0]{min-width:290px;position:relative}.gn-results[data-v-78eabec0]{background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow-lg);left:0;max-height:300px;overflow-y:auto;padding:5px;position:absolute;right:0;top:calc(100% + 6px);z-index:1100}.gn-result[data-v-78eabec0]{align-items:center;border-radius:8px;cursor:pointer;display:flex;gap:10px;padding:8px 9px}.gn-result[data-v-78eabec0]:hover{background:var(--surface-2)}.gn-result-ico[data-v-78eabec0]{flex:none;height:20px;width:20px}.gn-none[data-v-78eabec0]{color:var(--text-3);font-size:12px;padding:14px 10px;text-align:center}.gn-body[data-v-78eabec0]{display:grid;grid-template-columns:280px minmax(0,1fr)}.gn-side[data-v-78eabec0]{border-right:1px solid var(--border);display:flex;flex-direction:column;gap:10px;padding:18px 20px}.gn-side-label[data-v-78eabec0]{color:var(--text-3);font-size:10.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase}.gn-stat[data-v-78eabec0]{cursor:pointer;transition:opacity .2s}.gn-stat-row[data-v-78eabec0]{align-items:center;display:flex;font-size:12px;font-weight:700;justify-content:space-between;margin-bottom:5px}.gn-dot[data-v-78eabec0]{border-radius:50%;display:inline-block;flex:none;height:8px;width:8px}.gn-feeders[data-v-78eabec0]{display:grid;grid-template-columns:1fr 1fr;grid-gap:8px;gap:8px}.gn-feeders>div[data-v-78eabec0]{background:var(--surface-2);border:1px solid var(--border);border-radius:10px;color:var(--text-2);display:flex;flex-direction:column;font-size:11px;font-weight:700;gap:3px;padding:9px 11px}.gn-feeders>div .gn-dot[data-v-78eabec0]{margin-bottom:2px}.gn-feeders b[data-v-78eabec0]{color:var(--text);font-size:17px;letter-spacing:-.5px}.gn-hint[data-v-78eabec0]{color:var(--text-3);font-size:11px;font-weight:600;margin-top:auto}.gn-map[data-v-78eabec0]{background:var(--surface-2);min-height:420px;overflow:hidden;position:relative}.gn-map[data-v-78eabec0] .grid-map-el{height:100%;min-height:420px}.gn-legend[data-v-78eabec0]{backdrop-filter:blur(6px);background:color-mix(in srgb,var(--surface) 88%,transparent);border:1px solid var(--border);border-radius:999px;bottom:14px;display:flex;gap:14px;left:16px;padding:7px 14px;position:absolute;z-index:500}.gn-legend span[data-v-78eabec0]{align-items:center;color:var(--text-2);display:flex;font-size:11px;font-weight:700;gap:6px}.gn-legend img[data-v-78eabec0]{height:15px;width:15px}.gn-sample[data-v-78eabec0]{background:color-mix(in srgb,var(--surface) 88%,transparent);border:1px solid var(--border);border-radius:7px;color:var(--text-3);font-size:10.5px;font-weight:700;padding:5px 10px;position:absolute;right:16px;top:14px;z-index:500}@media (max-width:900px){.gn-body[data-v-78eabec0]{grid-template-columns:1fr}.gn-side[data-v-78eabec0]{border-bottom:1px solid var(--border);border-right:none}.gn-search-wrap[data-v-78eabec0]{min-width:0;width:100%}.gn-sample[data-v-78eabec0]{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/end_to_end_energy_dashboard.vue?vue&type=template&id=78eabec0&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('PageHeader', {
    attrs: {
      "page": "overview",
      "loading": _vm.loading
    }
  }, [_c('FilterDate', {
    attrs: {
      "type": "month",
      "label": "Period",
      "value": _vm.selectedDate,
      "max": _vm.maxMonth
    },
    on: {
      "change": _vm.onDateChange
    }
  }), _vm._v(" "), _c('FilterSelect', {
    attrs: {
      "label": "Business unit",
      "icon": "building",
      "options": _vm.businessUnits
    },
    on: {
      "change": _vm.loadOverview
    },
    model: {
      value: _vm.selectedBusinessUnit,
      callback: function ($$v) {
        _vm.selectedBusinessUnit = $$v;
      },
      expression: "selectedBusinessUnit"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-page\" data-v-78eabec0>", "</div>", [_vm.error ? _vm._ssrNode("<div class=\"ie-error\" data-v-78eabec0>", "</div>", [_c('Icon', {
    attrs: {
      "name": "alert",
      "size": 16
    }
  }), _vm._ssrNode(_vm._ssrEscape("Couldn't load live data: " + _vm._s(_vm.error) + "\n            ") + "<button class=\"ie-btn\" data-v-78eabec0>Retry</button>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.loading && !_vm.loaded ? _c('SkeletonPage') : _c('div', {
    staticClass: "ie-fadein"
  }, [_c('div', {
    staticClass: "ie-grid",
    staticStyle: {
      "grid-template-columns": "repeat(auto-fit, minmax(252px, 1fr))"
    }
  }, [_c('div', {
    staticClass: "ie-hero"
  }, [_c('div', {
    staticClass: "ie-hero-kicker"
  }, [_c('Icon', {
    attrs: {
      "name": "bolt",
      "size": 18
    }
  }), _vm._v("Energy on grid")], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-hero-value",
    staticStyle: {
      "font-size": "clamp(28px, 2.6vw, 44px)"
    }
  }, [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.kpi.total_energy_on_grid_mwh)
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-hero-unit"
  }, [_vm._v("MWh · " + _vm._s(_vm.periodLabel))]), _vm._v(" "), _vm.trendText ? _c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center",
      "gap": "8px",
      "margin-top": "16px"
    }
  }, [_c('span', {
    staticClass: "ie-hero-trend"
  }, [_c('Icon', {
    attrs: {
      "name": _vm.trendUp ? 'trendUp' : 'trendDown',
      "size": 13
    }
  }), _vm._v(_vm._s(_vm.trendText))], 1), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "11.5px",
      "font-weight": "600",
      "opacity": ".75"
    }
  }, [_vm._v("vs previous period")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "ie-card",
    staticStyle: {
      "padding": "22px 24px"
    }
  }, [_c('div', {
    staticClass: "ie-layer watermark"
  }, [_vm._v("DT")]), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-head"
  }, [_c('span', {
    staticClass: "ie-ico tone-success"
  }, [_c('Icon', {
    attrs: {
      "name": "dt",
      "size": 16
    }
  })], 1), _c('span', {
    staticClass: "ie-kpi-label"
  }, [_vm._v("Energy delivered to DTs")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-value",
    staticStyle: {
      "font-size": "34px",
      "margin-top": "16px"
    }
  }, [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.kpi.total_energy_on_dts_mwh)
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-unit"
  }, [_vm._v("MWh")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "16px"
    }
  }, [_c('div', {
    staticClass: "ie-bar-row"
  }, [_c('span', {
    staticStyle: {
      "color": "var(--text-3)"
    }
  }, [_vm._v("Share of grid energy")]), _c('span', {
    staticStyle: {
      "color": "var(--success)"
    }
  }, [_vm._v(_vm._s(_vm.pct(_vm.dtsPct)))])]), _vm._v(" "), _c('div', {
    staticClass: "ie-track"
  }, [_c('div', {
    staticClass: "ie-fill",
    style: {
      width: _vm.barW(_vm.dtsPct),
      background: 'var(--success)'
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "ie-card ie-card--danger",
    staticStyle: {
      "padding": "22px 24px"
    }
  }, [_c('div', {
    staticClass: "ie-diag ie-layer",
    staticStyle: {
      "color": "var(--danger)",
      "opacity": ".06"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-head"
  }, [_c('span', {
    staticClass: "ie-ico tone-danger"
  }, [_c('Icon', {
    attrs: {
      "name": "loss",
      "size": 16
    }
  })], 1), _c('span', {
    staticClass: "ie-kpi-label"
  }, [_vm._v("Grid → DT loss")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-value",
    staticStyle: {
      "font-size": "34px",
      "margin-top": "16px",
      "color": "var(--danger)"
    }
  }, [_c('AnimatedValue', {
    attrs: {
      "value": _vm.fmt(_vm.kpi.total_grid_to_dt_loss_mwh)
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-unit"
  }, [_vm._v("MWh")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "16px"
    }
  }, [_c('div', {
    staticClass: "ie-bar-row"
  }, [_c('span', {
    staticStyle: {
      "color": "var(--text-3)"
    }
  }, [_vm._v("Loss rate")]), _c('span', {
    staticStyle: {
      "color": "var(--danger)"
    }
  }, [_vm._v(_vm._s(_vm.pct(_vm.lossPct)))])]), _vm._v(" "), _c('div', {
    staticClass: "ie-track"
  }, [_c('div', {
    staticClass: "ie-fill",
    style: {
      width: _vm.barW(_vm.lossPct),
      background: 'var(--danger)'
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "ie-card ie-card--success",
    staticStyle: {
      "padding": "22px 24px"
    }
  }, [_c('div', {
    staticClass: "pt-chev ie-layer",
    staticStyle: {
      "color": "var(--success)",
      "opacity": ".05"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-head"
  }, [_c('span', {
    staticClass: "ie-ico tone-success",
    staticStyle: {
      "font-size": "15px",
      "font-weight": "800"
    }
  }, [_vm._v("₦")]), _c('span', {
    staticClass: "ie-kpi-label"
  }, [_vm._v("Revenue expected")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-value",
    staticStyle: {
      "font-size": "34px",
      "margin-top": "16px",
      "color": "var(--success)"
    }
  }, [_vm._v(_vm._s(_vm.revenueShort))]), _vm._v(" "), _c('div', {
    staticClass: "ie-kpi-unit"
  }, [_vm._v("WAT – ₦" + _vm._s(_vm.WAT))]), _vm._v(" "), _c('div', {
    staticClass: "mono",
    staticStyle: {
      "margin-top": "16px",
      "font-size": "11px",
      "font-weight": "700",
      "color": "var(--text-3)"
    }
  }, [_vm._v(_vm._s(_vm.revenueFull))])])]), _vm._v(" "), _c('div', {
    staticClass: "ie-grid",
    staticStyle: {
      "grid-template-columns": "repeat(auto-fit, minmax(210px, 1fr))"
    }
  }, _vm._l(_vm.netCards, function (c) {
    return _c('div', {
      key: c.label,
      staticClass: "ie-card net-card",
      class: 'tone-' + c.tone
    }, [_c('span', {
      staticClass: "ie-ico ie-ico--lg"
    }, [_c('Icon', {
      attrs: {
        "name": c.icon,
        "size": 20
      }
    })], 1), _vm._v(" "), _c('div', {
      staticStyle: {
        "min-width": "0"
      }
    }, [_c('div', {
      staticClass: "mono net-value"
    }, [_vm._v(_vm._s(c.value))]), _vm._v(" "), _c('div', {
      staticClass: "net-label"
    }, [_vm._v(_vm._s(c.label))])])]);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "infra"
  }, _vm._l(_vm.infra, function (i) {
    return _c('div', {
      key: i.label,
      staticClass: "infra-cell",
      class: 'tone-' + i.tone
    }, [_c('span', {
      staticClass: "ie-ico ie-ico--md"
    }, [_c('Icon', {
      attrs: {
        "name": i.icon,
        "size": 17
      }
    })], 1), _vm._v(" "), _c('div', {
      staticStyle: {
        "min-width": "0"
      }
    }, [_c('div', {
      staticClass: "mono infra-value"
    }, [_vm._v(_vm._s(i.value))]), _vm._v(" "), _c('div', {
      staticClass: "infra-label ie-ellip"
    }, [_vm._v(_vm._s(i.label))])])]);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "ie-card ie-card--flush"
  }, [_c('div', {
    staticClass: "ie-card-head"
  }, [_c('div', [_c('div', {
    staticClass: "ie-card-title",
    staticStyle: {
      "font-size": "15.5px"
    }
  }, [_vm._v("Grid network")]), _vm._v(" "), _c('div', {
    staticClass: "ie-card-sub"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.grid.dt_count)) + " distribution transformers across the network")])]), _vm._v(" "), _c('div', {
    ref: "gnSearch",
    staticClass: "gn-search-wrap"
  }, [_c('div', {
    staticClass: "ie-search"
  }, [_c('Icon', {
    attrs: {
      "name": "search",
      "size": 16
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.gnQuery,
      expression: "gnQuery"
    }],
    attrs: {
      "placeholder": "Search by DT or feeder…"
    },
    domProps: {
      "value": _vm.gnQuery
    },
    on: {
      "focus": function ($event) {
        _vm.gnFocused = true;
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.gnQuery = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.gnQuery ? _c('span', {
    staticClass: "mono",
    staticStyle: {
      "font-size": "10.5px",
      "font-weight": "700"
    }
  }, [_vm._v(_vm._s(_vm.gnResults.length))]) : _vm._e()], 1), _vm._v(" "), _vm.gnFocused && _vm.gnQuery.trim() ? _c('div', {
    staticClass: "gn-results ie-fadeup ie-scroll"
  }, [_vm._l(_vm.gnResults.slice(0, 40), function (r) {
    return _c('div', {
      key: r.dtId || r.label,
      staticClass: "gn-result",
      on: {
        "click": function ($event) {
          return _vm.openMarker(r);
        }
      }
    }, [_c('img', {
      staticClass: "gn-result-ico",
      attrs: {
        "src": '/' + r.status + '.svg',
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticStyle: {
        "min-width": "0",
        "flex": "1"
      }
    }, [_c('div', {
      staticClass: "ie-ellip",
      staticStyle: {
        "font-size": "12.5px",
        "font-weight": "700"
      }
    }, [_vm._v(_vm._s(r.label))]), _vm._v(" "), _c('div', {
      staticClass: "ie-ellip",
      staticStyle: {
        "font-size": "11px",
        "color": "var(--text-3)"
      }
    }, [_vm._v(_vm._s(r.feederName))])]), _vm._v(" "), _c('span', {
      staticStyle: {
        "font-size": "10.5px",
        "font-weight": "700"
      },
      style: {
        color: _vm.statusMeta[r.status].color
      }
    }, [_vm._v(_vm._s(_vm.statusMeta[r.status].label))])]);
  }), _vm._v(" "), !_vm.gnResults.length ? _c('div', {
    staticClass: "gn-none"
  }, [_vm._v("No transformer or feeder matches “" + _vm._s(_vm.gnQuery) + "”")]) : _vm._e()], 2) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "gn-body"
  }, [_c('div', {
    staticClass: "gn-side"
  }, [_c('div', {
    staticClass: "gn-side-label"
  }, [_vm._v("Transformers")]), _vm._v(" "), _vm._l(_vm.dtStatus, function (g) {
    return _c('div', {
      key: g.key,
      staticClass: "gn-stat",
      style: {
        opacity: !_vm.gnFilter || _vm.gnFilter === g.key ? 1 : .38
      },
      on: {
        "click": function ($event) {
          _vm.gnFilter = _vm.gnFilter === g.key ? null : g.key;
        }
      }
    }, [_c('div', {
      staticClass: "gn-stat-row"
    }, [_c('span', {
      staticStyle: {
        "display": "flex",
        "align-items": "center",
        "gap": "7px"
      }
    }, [_c('span', {
      staticClass: "gn-dot",
      style: {
        background: g.color
      }
    }), _vm._v(_vm._s(g.label))]), _vm._v(" "), _c('span', {
      staticClass: "mono"
    }, [_vm._v(_vm._s(g.value))])]), _vm._v(" "), _c('div', {
      staticClass: "ie-track",
      staticStyle: {
        "height": "6px"
      }
    }, [_c('div', {
      staticClass: "ie-fill",
      style: {
        width: g.pct,
        background: g.color
      }
    })])]);
  }), _vm._v(" "), _c('div', {
    staticClass: "gn-side-label",
    staticStyle: {
      "margin-top": "6px"
    }
  }, [_vm._v("Feeders")]), _vm._v(" "), _c('div', {
    staticClass: "gn-feeders"
  }, [_c('div', [_c('span', {
    staticClass: "gn-dot",
    staticStyle: {
      "background": "var(--success)"
    }
  }), _vm._v("Online"), _c('b', {
    staticClass: "mono"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.grid.online_feeders)))])]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "gn-dot",
    staticStyle: {
      "background": "var(--danger)"
    }
  }), _vm._v("Offline"), _c('b', {
    staticClass: "mono"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.grid.offline_feeders)))])])]), _vm._v(" "), _c('div', {
    staticClass: "gn-hint"
  }, [_vm._v("Click a status to filter the map.")])], 2), _vm._v(" "), _c('div', {
    staticClass: "gn-map"
  }, [_c('GridNetworkMap', {
    attrs: {
      "markers": _vm.visibleMarkers,
      "center": _vm.mapCenter,
      "zoom": 11
    },
    on: {
      "marker-click": _vm.openMarker
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "gn-legend"
  }, _vm._l(_vm.dtStatus, function (g) {
    return _c('span', {
      key: g.key
    }, [_c('img', {
      attrs: {
        "src": '/' + g.key + '.svg',
        "alt": ""
      }
    }), _vm._v(_vm._s(g.label))]);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "gn-sample"
  }, [_vm._v("Sampled view · " + _vm._s(_vm.fmt(_vm.visibleMarkers.length)) + " of " + _vm._s(_vm.fmt(_vm.grid.dt_count)) + " · click a transformer for details")])], 1)])])])], 2), _vm._ssrNode(" "), _c('DTDetailsModal', {
    attrs: {
      "marker": _vm.selectedMarker
    },
    on: {
      "close": function ($event) {
        _vm.selectedMarker = null;
      }
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/end_to_end_energy_dashboard.vue?vue&type=template&id=78eabec0&scoped=true

// EXTERNAL MODULE: ./components/ui/Icon.vue + 2 modules
var Icon = __webpack_require__(13);

// EXTERNAL MODULE: ./components/ui/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(87);

// EXTERNAL MODULE: ./components/ui/FilterSelect.vue + 4 modules
var FilterSelect = __webpack_require__(92);

// EXTERNAL MODULE: ./components/ui/FilterDate.vue + 4 modules
var FilterDate = __webpack_require__(106);

// EXTERNAL MODULE: ./components/ui/SkeletonPage.vue + 4 modules
var SkeletonPage = __webpack_require__(95);

// EXTERNAL MODULE: ./components/AnimatedValue.vue + 4 modules
var AnimatedValue = __webpack_require__(90);

// EXTERNAL MODULE: ./components/GridNetworkMap.vue + 4 modules
var GridNetworkMap = __webpack_require__(126);

// EXTERNAL MODULE: ./components/DTDetailsModal.vue + 4 modules
var DTDetailsModal = __webpack_require__(127);

// EXTERNAL MODULE: ./js_modules/controlCenterApi.js
var controlCenterApi = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/end_to_end_energy_dashboard.vue?vue&type=script&lang=js









// Wired to GET /api/v1/end-to-end/overview (see static/api_live_responses3.md #1). The map
// uses Leaflet + Esri tiles (no API key), plotting the DT markers the API returns.

const DEFAULT_CENTER = [6.6386, 3.3730];
// Weighted average tariff (₦/kWh) the design uses for "Revenue expected".
const WAT = 118.54;
function naira(v) {
  if (!Number.isFinite(v)) return '—';
  if (v >= 1e9) return '₦' + (v / 1e9).toFixed(2) + 'bn';
  if (v >= 1e6) return '₦' + (v / 1e6).toFixed(1) + 'm';
  if (v >= 1e3) return '₦' + (v / 1e3).toFixed(0) + 'k';
  return '₦' + Math.round(v).toLocaleString();
}
/* harmony default export */ var end_to_end_energy_dashboardvue_type_script_lang_js = ({
  layout: 'dashboard',
  components: {
    Icon: Icon["default"],
    PageHeader: PageHeader["default"],
    FilterSelect: FilterSelect["default"],
    FilterDate: FilterDate["default"],
    SkeletonPage: SkeletonPage["default"],
    AnimatedValue: AnimatedValue["default"],
    GridNetworkMap: GridNetworkMap["default"],
    DTDetailsModal: DTDetailsModal["default"]
  },
  data() {
    return {
      WAT,
      loading: true,
      loaded: false,
      error: null,
      selectedMarker: null,
      selectedDate: '',
      dateTouched: false,
      maxMonth: Object(controlCenterApi["d" /* currentMonthStr */])(),
      selectedBusinessUnit: 'All',
      businessUnits: controlCenterApi["a" /* BUSINESS_UNITS */],
      kpi: {},
      infraRaw: {},
      grid: {},
      periodLabel: '',
      mapCenter: DEFAULT_CENTER,
      mapMarkers: [],
      gnQuery: '',
      gnFocused: false,
      gnFilter: null,
      statusMeta: {
        online: {
          label: 'Online',
          color: 'var(--success)'
        },
        offline: {
          label: 'Offline',
          color: 'var(--danger)'
        },
        inactive: {
          label: 'Inactive',
          color: 'var(--warning)'
        }
      }
    };
  },
  computed: {
    dtsPct() {
      return this.kpi.total_energy_on_grid_mwh ? this.kpi.total_energy_on_dts_mwh / this.kpi.total_energy_on_grid_mwh * 100 : null;
    },
    lossPct() {
      return this.kpi.total_energy_on_grid_mwh ? this.kpi.total_grid_to_dt_loss_mwh / this.kpi.total_energy_on_grid_mwh * 100 : null;
    },
    trendText() {
      const p = this.kpi.energy_vs_prev_period_pct;
      if (p === null || p === undefined) return null;
      return (p >= 0 ? '+' : '') + Number(p).toFixed(2) + '%';
    },
    trendUp() {
      var _this$kpi$energy_vs_p;
      return ((_this$kpi$energy_vs_p = this.kpi.energy_vs_prev_period_pct) !== null && _this$kpi$energy_vs_p !== void 0 ? _this$kpi$energy_vs_p : 0) >= 0;
    },
    revenue() {
      const g = Number(this.kpi.total_energy_on_grid_mwh);
      return Number.isFinite(g) ? g * 1000 * WAT : NaN;
    },
    revenueShort() {
      return naira(this.revenue);
    },
    revenueFull() {
      return Number.isFinite(this.revenue) ? '₦' + Math.round(this.revenue).toLocaleString() : '';
    },
    netCards() {
      const g = this.grid;
      return [{
        label: '11kV incomers',
        value: Object(controlCenterApi["e" /* formatNumber */])(g['11kva_incomer']),
        icon: 'plug',
        tone: 'soe'
      }, {
        label: '11kV outgoing feeders',
        value: Object(controlCenterApi["e" /* formatNumber */])(g['11kva_outgoing_feeders']),
        icon: 'feeder',
        tone: 'primary'
      }, {
        label: 'Online feeders',
        value: Object(controlCenterApi["e" /* formatNumber */])(g.online_feeders),
        icon: 'check',
        tone: 'success'
      }, {
        label: 'Offline feeders',
        value: Object(controlCenterApi["e" /* formatNumber */])(g.offline_feeders),
        icon: 'alert',
        tone: 'danger'
      }];
    },
    infra() {
      const i = this.infraRaw;
      return [{
        label: 'Transmission stations',
        value: Object(controlCenterApi["e" /* formatNumber */])(i.ts_count),
        icon: 'tower',
        tone: 'soe'
      }, {
        label: 'Transformer capacity',
        value: Object(controlCenterApi["e" /* formatNumber */])(i.transformer_capacity_count),
        icon: 'cap',
        tone: 'primary'
      }, {
        label: '33 kV feeders',
        value: Object(controlCenterApi["e" /* formatNumber */])(i.feeders_33kva),
        icon: 'feeder',
        tone: 'ca'
      }, {
        label: 'Injection substations',
        value: Object(controlCenterApi["e" /* formatNumber */])(i.iss_count),
        icon: 'station',
        tone: 'accent'
      }, {
        label: 'Distribution transformers',
        value: Object(controlCenterApi["e" /* formatNumber */])(i.total_transformers),
        icon: 'dt',
        tone: 'info'
      }];
    },
    dtStatus() {
      const g = this.grid;
      const total = Number(g.dt_count) || 0;
      const p = v => total ? (Number(v) / total * 100).toFixed(1) + '%' : '0%';
      return [{
        key: 'online',
        label: 'Online',
        value: Object(controlCenterApi["e" /* formatNumber */])(g.online_dts),
        pct: p(g.online_dts),
        color: 'var(--success)'
      }, {
        key: 'offline',
        label: 'Offline',
        value: Object(controlCenterApi["e" /* formatNumber */])(g.offline_dts),
        pct: p(g.offline_dts),
        color: 'var(--danger)'
      }, {
        key: 'inactive',
        label: 'Inactive',
        value: Object(controlCenterApi["e" /* formatNumber */])(g.inactive_dts),
        pct: p(g.inactive_dts),
        color: 'var(--warning)'
      }];
    },
    visibleMarkers() {
      return this.gnFilter ? this.mapMarkers.filter(m => m.status === this.gnFilter) : this.mapMarkers;
    },
    gnResults() {
      const q = this.gnQuery.trim().toLowerCase();
      if (!q) return [];
      return this.mapMarkers.filter(m => (m.label || '').toLowerCase().includes(q) || (m.feederName || '').toLowerCase().includes(q));
    }
  },
  async mounted() {
    document.addEventListener('mousedown', this.onDocDown);
    await this.loadOverview();
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.onDocDown);
  },
  methods: {
    fmt: controlCenterApi["e" /* formatNumber */],
    pct(v) {
      return v == null || !Number.isFinite(v) ? '—' : v.toFixed(1) + '%';
    },
    barW(v) {
      return v == null || !Number.isFinite(v) ? '0%' : Math.min(100, v).toFixed(1) + '%';
    },
    onDateChange(value) {
      this.dateTouched = true;
      this.selectedDate = value;
      this.loadOverview();
    },
    onDocDown(e) {
      if (this.gnFocused && this.$refs.gnSearch && !this.$refs.gnSearch.contains(e.target)) this.gnFocused = false;
    },
    openMarker(m) {
      this.gnFocused = false;
      this.selectedMarker = m;
    },
    async loadOverview() {
      this.loading = true;
      this.error = null;
      try {
        // marker_limit caps the payload — omitting it returns every one of ~19,700 DTs
        // ("several megabytes" per the API doc).
        const data = await Object(controlCenterApi["j" /* getEndToEndOverview */])({
          date: this.selectedDate || undefined,
          business_unit: this.selectedBusinessUnit,
          marker_limit: 500
        });
        this.applyOverview(data);
        this.loaded = true;
      } catch (err) {
        this.error = err.message || 'Failed to load End-to-End overview data';
      } finally {
        this.loading = false;
      }
    },
    applyOverview(data) {
      // Backfill the date filter with the server's own default ("latest complete
      // month") on first load, so the picker reflects what's actually on screen —
      // but only until the user picks a date themselves.
      if (!this.dateTouched && data.period) {
        this.selectedDate = data.period;
      }
      this.kpi = data.kpis || {};
      this.periodLabel = this.kpi.period_label || data.period || '';
      this.infraRaw = data.infrastructure_summary || {};
      this.grid = data.grid_network || {};
      const markers = (data.dt_markers || []).filter(m => m.latitude != null && m.longitude != null).map(m => ({
        lat: m.latitude,
        lng: m.longitude,
        status: ['online', 'offline', 'inactive'].includes((m.status || '').toLowerCase()) ? m.status.toLowerCase() : 'inactive',
        label: m.dt_name,
        feederName: m.feeder_name,
        band: m.band,
        dtId: m.dt_id
      }));
      this.mapMarkers = markers;
      if (markers.length) {
        this.mapCenter = [markers.reduce((sum, m) => sum + m.lat, 0) / markers.length, markers.reduce((sum, m) => sum + m.lng, 0) / markers.length];
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/end_to_end_energy_dashboard.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_end_to_end_energy_dashboardvue_type_script_lang_js = (end_to_end_energy_dashboardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/end_to_end_energy_dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_end_to_end_energy_dashboardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "78eabec0",
  "3913e43d"
  
)

/* harmony default export */ var end_to_end_energy_dashboard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AnimatedValue: __webpack_require__(90).default,GridNetworkMap: __webpack_require__(126).default,DTDetailsModal: __webpack_require__(127).default})


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

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0ecb21cd", content, true, context)
};

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
//# sourceMappingURL=end_to_end_energy_dashboard.js.map