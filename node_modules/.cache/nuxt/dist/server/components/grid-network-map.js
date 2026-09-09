exports.ids = [7];
exports.modules = {

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9903d3d2", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_67995a5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_67995a5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_67995a5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_67995a5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridNetworkMap_vue_vue_type_style_index_0_id_67995a5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".grid-map-el[data-v-67995a5e],.grid-map-wrap[data-v-67995a5e]{height:100%;width:100%}.grid-map-el[data-v-67995a5e]{min-height:380px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GridNetworkMap.vue?vue&type=template&id=67995a5e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "grid-map-wrap"
  }, [_vm._ssrNode("<div class=\"grid-map-el\" data-v-67995a5e></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GridNetworkMap.vue?vue&type=template&id=67995a5e&scoped=true

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
      map: null
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
  methods: {
    async initMap() {
      const L = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 44, 7));
      this.map = L.map(this.$refs.mapEl, {
        scrollWheelZoom: false
      }).setView(this.center, this.zoom);

      // Esri's free World Street Map tiles — no API key required, unlike Google/Carto.
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, HERE, Garmin, OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(this.map);
      const iconFor = status => L.icon({
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
      this.markers.forEach(m => {
        const marker = L.marker([m.lat, m.lng], {
          icon: icons[m.status] || icons.online
        });
        marker.on('click', () => this.$emit('marker-click', m));
        marker.addTo(this.map);
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
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GridNetworkMapvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "67995a5e",
  "0096b0d8"
  
)

/* harmony default export */ var GridNetworkMap = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=grid-network-map.js.map