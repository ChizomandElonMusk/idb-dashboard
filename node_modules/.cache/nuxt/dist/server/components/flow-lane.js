exports.ids = [7];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6ac87367", content, true, context)
};

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlowLane.vue?vue&type=template&id=d1ec2ee4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flow-row"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("flow-card-col", {
    'has-right': !!_vm.forwardKind
  }) + " data-v-d1ec2ee4>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("flow-card", {
    'flow-card-updating': _vm.dtLocalLoading
  }) + " data-v-d1ec2ee4><p class=\"flow-card-title\" data-v-d1ec2ee4>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</p> <div class=\"flow-filters\" data-v-d1ec2ee4><div class=\"flow-filter\" data-v-d1ec2ee4><select" + _vm._ssrAttr("value", _vm.selected) + " data-v-d1ec2ee4>" + (_vm.mode === 'level' ? "<option value disabled=\"disabled\" data-v-d1ec2ee4>-- Select --</option>" : "<!---->") + " <option" + _vm._ssrAttr("value", _vm.allValue) + " data-v-d1ec2ee4>" + _vm._ssrEscape(_vm._s(_vm.allValue)) + "</option> " + _vm._ssrList(_vm.options, function (opt) {
    return "<option" + _vm._ssrAttr("value", opt) + " data-v-d1ec2ee4>" + _vm._ssrEscape(_vm._s(opt)) + "</option>";
  }) + "</select> <i class=\"material-icons tiny\" data-v-d1ec2ee4>arrow_drop_down</i></div></div> <p class=\"flow-total-label\" data-v-d1ec2ee4>Total Energy</p> <p class=\"flow-total-value\" data-v-d1ec2ee4>" + _vm._ssrEscape(_vm._s(_vm.fmt(_vm.total)) + " MWH") + "</p> " + (_vm.mode !== 'customer' ? "<div class=\"flow-bar\" data-v-d1ec2ee4><div class=\"flow-bar-fill\"" + _vm._ssrStyle(null, {
    width: _vm.outgoingPct + '%'
  }, null) + " data-v-d1ec2ee4></div> <div class=\"flow-bar-loss\"" + _vm._ssrStyle(null, {
    width: _vm.lossPct + '%'
  }, null) + " data-v-d1ec2ee4></div></div> <div class=\"flow-stats-row\" data-v-d1ec2ee4><div class=\"flow-stat\" data-v-d1ec2ee4><span class=\"flow-stat-pct\" data-v-d1ec2ee4>" + _vm._ssrEscape(_vm._s(_vm.outgoingPct) + "% Outgoing") + "</span> <span class=\"flow-stat-val\" data-v-d1ec2ee4>" + _vm._ssrEscape(_vm._s(_vm.fmt(_vm.outgoingVal)) + " MWH") + "</span></div> <div class=\"flow-stat right\" data-v-d1ec2ee4><span class=\"flow-stat-pct loss\" data-v-d1ec2ee4>" + _vm._ssrEscape(_vm._s(_vm.lossPct) + "% Loss") + "</span> <span class=\"flow-stat-val\" data-v-d1ec2ee4>" + _vm._ssrEscape(_vm._s(_vm.fmt(_vm.lossVal)) + " MWH") + "</span></div></div>" : "<div class=\"flow-bar single\" data-v-d1ec2ee4><div class=\"flow-bar-fill\"" + _vm._ssrStyle(null, {
    width: _vm.fillPct + '%'
  }, null) + " data-v-d1ec2ee4></div></div>") + " <div class=\"flow-divider\" data-v-d1ec2ee4></div> <div class=\"flow-bottom-row\" data-v-d1ec2ee4><span data-v-d1ec2ee4>" + _vm._ssrEscape(_vm._s(_vm.bottomLabel)) + "</span> <b data-v-d1ec2ee4>" + _vm._ssrEscape(_vm._s(_vm.bottomVal)) + "</b></div></div> "), _vm.dtBelow ? _vm._ssrNode("<div class=\"flow-below-branch\" data-v-d1ec2ee4>", "</div>", [_c('FlowLane', {
    key: _vm.selfPathKey,
    ref: "belowChild",
    attrs: {
      "mode": "dt",
      "path-key": _vm.selfPathKey,
      "incoming-total": _vm.outgoingVal,
      "connector-api": _vm.connectorApi,
      "flow-data": _vm.flowData,
      "on-filter-change": _vm.onFilterChange,
      "dt-name-index": _vm.dtNameIndex,
      "request-dt-names": _vm.requestDtNames
    }
  })], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm.forwardKind ? [_vm.forwardKind === 'continue' ? _c('FlowLane', {
    key: _vm.selfPathKey,
    ref: "rightChild",
    attrs: {
      "mode": "level",
      "level": _vm.level + 1,
      "node-list": _vm.nonEmptyChildren,
      "path-key": _vm.selfPathKey,
      "incoming-total": _vm.outgoingVal,
      "connector-api": _vm.connectorApi,
      "flow-data": _vm.flowData,
      "on-filter-change": _vm.onFilterChange,
      "dt-name-index": _vm.dtNameIndex,
      "request-dt-names": _vm.requestDtNames
    }
  }) : _vm.forwardKind === 'customer' ? _c('FlowLane', {
    key: _vm.selfPathKey,
    ref: "rightChild",
    attrs: {
      "mode": "customer",
      "path-key": _vm.selfPathKey,
      "incoming-total": _vm.outgoingVal,
      "connector-api": _vm.connectorApi,
      "flow-data": _vm.dtLocalFlowData || _vm.flowData,
      "on-filter-change": _vm.onFilterChange,
      "dt-name-index": _vm.dtNameIndex,
      "request-dt-names": _vm.requestDtNames
    }
  }) : _vm._e()] : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FlowLane.vue?vue&type=template&id=d1ec2ee4&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(45);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(46);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(48);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(49);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(50);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(51);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(52);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(53);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(54);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(55);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(56);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(57);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(58);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(59);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(60);

// CONCATENATED MODULE: ./assets/js/energyFlowSim.js
// GET /api/v1/energy-flow now backs the Energy Flow Diagram's real numbers (see
// static/api_live_responses3.md #2) - but it only accepts ts/transformer/feeder_33kva/dt/
// dt_type as filters. There's no query param for ISS, Transformer 2, 11kV Incomer, or 11kV
// Outgoing Feeder individually, even though the local relationship tree (ts_relationship.json)
// lets a user browse the hierarchy that deep. So FlowLane.vue only refetches when a TS,
// Transformer, or 33kV Feeder selection changes; the numbers shown for ISS/Transformer 2/11kV
// Incomer/11kV Outgoing Feeder reflect the API's response for whatever TS/Transformer/33kV
// Feeder is currently selected above them (i.e. "All" beneath that point), not the specific
// sub-node the user has drilled into locally. seededRange below is now only used as a
// last-resort fallback for the numeric fields if flowData hasn't loaded yet.
//
// DT names: dt-availability/table's rows carry both dt_name and feeder_name, and feeder_name
// uses the exact same naming convention as this tree's "11kV Outgoing Feeder" leaf keys (e.g.
// "11-AgegeINJ-T1-Iju Road" appears in both places) - so real DT names for the feeder a user
// has drilled into can be looked up from that table instead of faked. See
// energy_flow_diagram.vue's ensureDtNames() for the (paginated, fetched-once) index build, and
// extractFeederFromPathKey() below for pulling the feeder name back out of a card's path.

const LEVEL_LABELS = ['TS', 'Transformer', '33kV Feeder', 'ISS', 'Transformer 2', '11kV Incomer', '11kV Outgoing Feeder'];
const LEVEL_COUNT = LEVEL_LABELS.length;

// Maps each level index to the matching key in the /energy-flow response, and to the field
// within that section holding the entity count (shown as the card's "Total X" footer).
const LEVEL_RESPONSE_KEYS = ['ts', 'transformer_capacity', 'feeders_33kva', 'iss', 'transformer2', 'incomer_11kva', 'outgoing_feeder_11kva'];
const LEVEL_COUNT_KEYS = ['total_ts', 'total_transformers', 'total_feeders', 'total_iss', 'total_transformer2', 'total_incomers', 'total_feeders'];

// Only these levels correspond to real, documented query params (ts/transformer/feeder_33kva) -
// a selection change at level 3+ (ISS onward) can't be sent to the API at all.
const FILTERABLE_LEVEL_COUNT = 3;
function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  }
  return h;
}
function seededFloat(seedStr) {
  const x = Math.sin(hashCode(seedStr)) * 10000;
  return x - Math.floor(x);
}
function seededRange(seedStr, min, max) {
  return min + seededFloat(seedStr) * (max - min);
}
function fmt(n) {
  return Number(n).toLocaleString('en-US', {
    maximumFractionDigits: 2
  });
}

// Pulls the "11kV Outgoing Feeder" value back out of a card's selfPathKey (built as
// "...>11kV Outgoing Feeder=<value>..."), so the DT card below it can look up real DTs for
// that specific feeder. Returns null if DT is hanging off an earlier level instead (the
// Path B dead-end branch - see FlowLane.vue), since there's no single feeder to key by then.
function extractFeederFromPathKey(pathKey) {
  const marker = '>11kV Outgoing Feeder=';
  const idx = pathKey.lastIndexOf(marker);
  if (idx === -1) return null;
  const rest = pathKey.slice(idx + marker.length);
  const nextGt = rest.indexOf('>');
  return nextGt === -1 ? rest : rest.slice(0, nextGt);
}
// EXTERNAL MODULE: ./js_modules/controlCenterApi.js
var controlCenterApi = __webpack_require__(87);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlowLane.vue?vue&type=script&lang=js


















// Recursive card: one instance renders one card plus whatever legitimately
// follows it. A "level" card (TS..11kV Outgoing Feeder) starts unselected -
// the next card only appears once something is picked, and every recursive
// child is :key'd to the selection path above it, so picking a new value
// anywhere destroys and rebuilds everything downstream (the same reset the
// page's Reset button does, just scoped to whatever changed). What follows
// a level card depends on the hierarchy data at this point:
//  - every reachable child has its own children -> continue right to the
//    next standard card, no DT branch
//  - any reachable child is a dead end (no ISS beneath a 33kV feeder, etc,
//    per static/TSrelationship.xlsx) -> a DT card drops straight down from
//    THIS card (Path B) - whether that's the only outcome, or a branch
//    alongside the normal rightward continuation (only possible when "All"
//    fans out several branches, some of which dead-end and some don't).
//    Matches the reference Figma energy flow diagram.
// DT and Customer are always terminal display cards; DT defaults to "All
// DTs" already selected since nothing gates behind it except Customer, which
// still continues rightward from DT.
//
// The numbers each card shows (total/loss/transmission/count) now come from the live
// GET /energy-flow response (flowData prop, fetched by the page) wherever available - see
// the apiSection computed property and assets/js/energyFlowSim.js's header comment for which
// levels the API can actually be filtered by.

/* harmony default export */ var FlowLanevue_type_script_lang_js = ({
  name: 'FlowLane',
  props: {
    mode: {
      type: String,
      default: 'level'
    },
    // 'level' | 'dt' | 'customer'
    level: {
      type: Number,
      default: 0
    },
    nodeList: {
      type: Array,
      default: () => []
    },
    pathKey: {
      type: String,
      default: ''
    },
    incomingTotal: {
      type: Number,
      default: null
    },
    // The FlowDiagramCanvas instance (has register()/unregister()) -
    // passed as a plain prop and threaded down through every recursive
    // level, rather than via provide/inject, since inject through
    // default slot content is ambiguous in Vue 2.
    connectorApi: {
      type: Object,
      default: null
    },
    // Latest GET /energy-flow response (or null while loading/unfetched), threaded down
    // the same way as connectorApi. Only ts/transformer/feeder_33kva/dt/dt_type are real
    // API filters - see the comment atop assets/js/energyFlowSim.js.
    flowData: {
      type: Object,
      default: null
    },
    // Called as onFilterChange({ level, value }) when a TS/Transformer/33kV Feeder card's
    // selection changes, so the page can refetch. Not called for deeper levels since the
    // API has no param for them.
    onFilterChange: {
      type: Function,
      default: null
    },
    // { byFeeder: Map<feederName, Set<dtName>>, all: string[] } built from real
    // dt-availability/table rows by the page (see ensureDtNames() there), or null before
    // that's been requested/has finished loading.
    dtNameIndex: {
      type: Object,
      default: null
    },
    // Lets a DT card (mode === 'dt') ask the page to start building dtNameIndex the first
    // time one is actually rendered, rather than eagerly on page load.
    requestDtNames: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      selected: this.mode === 'level' ? '' : this.mode === 'dt' ? 'All DTs' : 'All',
      // Set only when this specific DT card has picked a named DT - overrides flowData
      // for THIS card and its Customer child only (see the customer FlowLane's :flow-data
      // binding below), so picking a DT in one branch never changes numbers shown
      // elsewhere in the diagram.
      dtLocalFlowData: null,
      dtLocalLoading: false
    };
  },
  watch: {
    selected(val) {
      if (this.mode === 'level') {
        // Only meaningful for the root (TS) card - the page listens on it
        // alone to know when to show the Reset button.
        this.$emit('change', val);
        if (this.level < FILTERABLE_LEVEL_COUNT && this.onFilterChange) {
          this.onFilterChange({
            level: this.level,
            value: val
          });
        }
      } else if (this.mode === 'dt') {
        this.fetchDtFlow(val);
      }
    }
  },
  mounted() {
    this.$nextTick(this.syncConnectors);
    if (this.mode === 'dt' && this.requestDtNames) this.requestDtNames();
  },
  updated() {
    this.$nextTick(this.syncConnectors);
  },
  beforeDestroy() {
    if (!this.connectorApi) return;
    this.connectorApi.unregister(`${this._uid}:right`);
    this.connectorApi.unregister(`${this._uid}:below`);
  },
  computed: {
    title() {
      if (this.mode === 'level') return LEVEL_LABELS[this.level];
      if (this.mode === 'dt') return 'DT';
      return 'Customer';
    },
    allValue() {
      return this.mode === 'dt' ? 'All DTs' : 'All';
    },
    options() {
      if (this.mode === 'level') {
        const set = new Set();
        this.nodeList.forEach(n => Object.keys(n).forEach(k => set.add(k)));
        return Array.from(set).sort();
      }
      if (this.mode === 'dt') {
        if (!this.dtNameIndex) return [];
        const feeder = extractFeederFromPathKey(this.pathKey);
        if (feeder && this.dtNameIndex.byFeeder.has(feeder)) {
          return Array.from(this.dtNameIndex.byFeeder.get(feeder)).sort();
        }
        // DT hanging off an earlier level (Path B dead-end) or no match found for this
        // specific feeder in the sample we fetched - fall back to every real DT name
        // known, rather than showing nothing or a fake name.
        return this.dtNameIndex.all;
      }
      return [];
    },
    selfPathKey() {
      return `${this.pathKey}>${this.title}=${this.selected}`;
    },
    resolvedNodeList() {
      if (this.mode !== 'level' || this.selected === '') return [];
      const list = [];
      this.nodeList.forEach(n => {
        if (this.selected === 'All') {
          Object.values(n).forEach(c => list.push(c));
        } else if (n[this.selected]) {
          list.push(n[this.selected]);
        }
      });
      return list;
    },
    nonEmptyChildren() {
      if (this.level >= LEVEL_COUNT - 1) return [];
      return this.resolvedNodeList.filter(n => Object.keys(n).length > 0);
    },
    emptyChildren() {
      return this.resolvedNodeList.filter(n => Object.keys(n).length === 0);
    },
    forwardKind() {
      if (this.mode === 'level') {
        if (this.selected === '') return null;
        return this.nonEmptyChildren.length > 0 ? 'continue' : null;
      }
      if (this.mode === 'dt') return 'customer';
      return null;
    },
    // DT always renders as a downward branch under this card - whether
    // every reachable child is a dead end, or only some of them are.
    dtBelow() {
      return this.mode === 'level' && this.selected !== '' && this.emptyChildren.length > 0;
    },
    // The /energy-flow section matching this card, if flowData has loaded. Note this is
    // NOT scoped to this card's own local selection for level >= 3 (ISS onward) - see the
    // comment atop assets/js/energyFlowSim.js. Levels 0-2 and dt/customer ARE accurate to
    // whatever TS/Transformer/33kV Feeder is currently selected, since those drive the fetch.
    apiSection() {
      if (this.mode === 'dt') {
        // A DT-specific fetch (see fetchDtFlow) takes priority over the shared
        // flowData's dt=All aggregate, once one has loaded for this card.
        if (this.dtLocalFlowData) return this.dtLocalFlowData.dts || null;
        return this.flowData ? this.flowData.dts || null : null;
      }
      if (!this.flowData) return null;
      if (this.mode === 'level') return this.flowData[LEVEL_RESPONSE_KEYS[this.level]] || null;
      if (this.mode === 'customer') return this.flowData.customer || null;
      return null;
    },
    total() {
      if (this.apiSection && this.apiSection.total_energy_mwh != null) return this.apiSection.total_energy_mwh;
      if (this.incomingTotal != null) return this.incomingTotal;
      // Fallback while flowData hasn't loaded yet (covered by the page's loading overlay).
      return Math.round(seededRange(`TOTAL:${this.selfPathKey}`, 40000, 480000));
    },
    lossPct() {
      if (this.mode === 'customer') return 0;
      if (this.apiSection && this.apiSection.loss_pct != null) return this.apiSection.loss_pct;
      const [min, max] = this.mode === 'dt' ? [8, 18] : [2, 12];
      return Math.round(seededRange(`LOSS:${this.selfPathKey}`, min, max));
    },
    outgoingPct() {
      if (this.apiSection && this.apiSection.transmission_pct != null) return this.apiSection.transmission_pct;
      return 100 - this.lossPct;
    },
    outgoingVal() {
      if (this.apiSection && this.apiSection.transmission_mwh != null) return this.apiSection.transmission_mwh;
      return this.total * this.outgoingPct / 100;
    },
    lossVal() {
      if (this.apiSection && this.apiSection.loss_mwh != null) return this.apiSection.loss_mwh;
      return this.total - this.outgoingVal;
    },
    fillPct() {
      // customer has no comparable real percentage in the API response - a full bar
      // beats fabricating a number that looks meaningful but isn't.
      if (this.apiSection) return 100;
      return Math.round(seededRange(`FILL:${this.selfPathKey}`, 82, 96));
    },
    bottomLabel() {
      if (this.mode === 'customer') return 'Total Customers';
      if (this.mode === 'dt') return 'Total DTs';
      return `Total ${this.title}`;
    },
    bottomVal() {
      if (this.mode === 'customer') {
        if (this.apiSection && this.apiSection.total_customers != null) return this.fmt(this.apiSection.total_customers);
        return this.fmt(Math.round(seededRange(`CUST:${this.selfPathKey}`, 800, 210000)));
      }
      if (this.mode === 'dt') {
        if (this.apiSection) {
          return this.fmt((this.apiSection.total_public_dts || 0) + (this.apiSection.total_private_dts || 0));
        }
        return this.options.length;
      }
      if (this.apiSection) {
        const countKey = LEVEL_COUNT_KEYS[this.level];
        if (this.apiSection[countKey] != null) return this.fmt(this.apiSection[countKey]);
      }
      return this.options.length;
    }
  },
  methods: {
    fmt: fmt,
    // Called when THIS DT card's own dropdown changes. Refetches /energy-flow with the
    // same ts/transformer/feeder_33kva the shared flowData was fetched with, plus this
    // specific dt name, and stores the result locally - only this card and its Customer
    // child (via the :flow-data="dtLocalFlowData || flowData" binding below) read it.
    // Other DT cards elsewhere in the diagram, and the main TS..11kV Outgoing Feeder
    // chain, keep reading the shared flowData untouched.
    async fetchDtFlow(dtName) {
      if (!dtName || dtName === 'All DTs' || dtName === 'All') {
        this.dtLocalFlowData = null;
        return;
      }
      this.dtLocalLoading = true;
      try {
        const base = this.flowData || {};
        this.dtLocalFlowData = await Object(controlCenterApi["n" /* getEnergyFlow */])({
          ts: base.ts && base.ts.name || 'All',
          transformer: base.transformer_capacity && base.transformer_capacity.selected || 'All',
          feeder_33kva: base.feeders_33kva && base.feeders_33kva.selected || 'All',
          dt: dtName,
          dt_type: 'All'
        });
      } catch (err) {
        // Non-critical - falls back to the shared flowData's dt=All aggregate.
        console.error('[FlowLane] failed to load DT-specific energy flow', err);
        this.dtLocalFlowData = null;
      } finally {
        this.dtLocalLoading = false;
      }
    },
    syncConnectors() {
      if (!this.connectorApi) return;
      const rightId = `${this._uid}:right`;
      const belowId = `${this._uid}:below`;
      const rightChild = this.$refs.rightChild;
      if ((this.forwardKind === 'continue' || this.forwardKind === 'customer') && rightChild && rightChild.$refs.cardEl) {
        this.connectorApi.register(rightId, this.$refs.cardEl, rightChild.$refs.cardEl, 'right');
      } else {
        this.connectorApi.unregister(rightId);
      }
      const belowChild = this.$refs.belowChild;
      if (this.dtBelow && belowChild && belowChild.$refs.cardEl) {
        this.connectorApi.register(belowId, this.$refs.cardEl, belowChild.$refs.cardEl, 'down');
      } else {
        this.connectorApi.unregister(belowId);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/FlowLane.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FlowLanevue_type_script_lang_js = (FlowLanevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FlowLane.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(110)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FlowLanevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d1ec2ee4",
  "3c1eb2cc"
  
)

/* harmony default export */ var FlowLane = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FlowLane: __webpack_require__(103).default})


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowLane_vue_vue_type_style_index_0_id_d1ec2ee4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowLane_vue_vue_type_style_index_0_id_d1ec2ee4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowLane_vue_vue_type_style_index_0_id_d1ec2ee4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowLane_vue_vue_type_style_index_0_id_d1ec2ee4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlowLane_vue_vue_type_style_index_0_id_d1ec2ee4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flow-card-col[data-v-d1ec2ee4],.flow-row[data-v-d1ec2ee4]{align-items:flex-start;display:flex}.flow-card-col[data-v-d1ec2ee4]{flex-direction:column;flex-shrink:0}.flow-card-col.has-right[data-v-d1ec2ee4]{margin-right:70px}.flow-below-branch[data-v-d1ec2ee4]{align-items:flex-start;display:flex;flex-direction:column;margin-top:60px}.flow-card[data-v-d1ec2ee4]{align-self:flex-start;background:var(--bg-card);border:1px solid var(--border-color);border-radius:12px;box-shadow:0 2px 8px var(--shadow-color);flex-shrink:0;padding:14px 16px;position:relative;transition:opacity .15s ease;width:230px}.flow-card-updating[data-v-d1ec2ee4]{opacity:.55}.flow-card-title[data-v-d1ec2ee4]{color:var(--text-primary);font-size:13px;font-weight:600;margin:0 0 10px;text-align:center}.flow-filters[data-v-d1ec2ee4]{display:flex;flex-direction:column;gap:6px;margin-bottom:10px}.flow-filter[data-v-d1ec2ee4]{align-items:center;border:1px solid var(--border-color);border-radius:6px;display:flex;justify-content:space-between;padding:4px 8px;position:relative}.flow-filter[data-v-d1ec2ee4],.flow-filter select[data-v-d1ec2ee4]{color:var(--text-secondary);font-size:12px}.flow-filter select[data-v-d1ec2ee4]{-moz-appearance:none;appearance:none;-webkit-appearance:none;background:transparent;border:none;cursor:pointer;height:auto;padding:0 18px 0 0;width:100%}.flow-filter select[data-v-d1ec2ee4]:focus{outline:none}.flow-filter .material-icons[data-v-d1ec2ee4]{color:var(--text-muted);font-size:16px!important;pointer-events:none;position:absolute;right:6px}.flow-total-label[data-v-d1ec2ee4]{color:var(--text-muted);font-size:11px;margin:0}.flow-total-value[data-v-d1ec2ee4]{color:#2fa360;font-size:15px;font-weight:700;margin:2px 0 8px}.flow-bar[data-v-d1ec2ee4]{background:var(--border-color);border-radius:4px;display:flex;height:6px;margin-bottom:8px;overflow:hidden}.flow-bar-fill[data-v-d1ec2ee4]{background:#3ec97a;height:100%}.flow-bar-loss[data-v-d1ec2ee4]{background:#e05353;height:100%}.flow-stats-row[data-v-d1ec2ee4]{display:flex;font-size:11px;gap:8px;justify-content:space-between;margin-bottom:8px}.flow-stat[data-v-d1ec2ee4]{display:flex;flex-direction:column;gap:2px}.flow-stat.right[data-v-d1ec2ee4]{align-items:flex-end;text-align:right}.flow-stat-pct[data-v-d1ec2ee4]{color:var(--text-secondary);font-weight:600}.flow-stat-pct.loss[data-v-d1ec2ee4]{color:#c0392b}.flow-stat-val[data-v-d1ec2ee4]{color:var(--text-muted)}.flow-divider[data-v-d1ec2ee4]{background:var(--divider);height:1px;margin:6px 0}.flow-bottom-row[data-v-d1ec2ee4]{color:var(--text-secondary);display:flex;font-size:12px;justify-content:space-between;padding-top:4px}.flow-bottom-row b[data-v-d1ec2ee4]{color:var(--text-primary)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return openDatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return formatNumber; });
/* unused harmony export lastNMonths */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return monthLabel; });
/* unused harmony export lastNDays */
/* unused harmony export dayLabel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return todayStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return currentMonthStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return aggregateDailyTrend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return formatPct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BUSINESS_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FEEDER_BANDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return bandColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getEndToEndOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getEnergyFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getControlCenterSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getAvailabilitySummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getDtAvailabilityDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getDtAvailabilityTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getMytoSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getIdbDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getIdbFeederDtLoss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getIdbCustomerDtLoss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return buildTrendCallout; });
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
const BASE_URL = "http://192.168.80.108:8090/api/v1";
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
const BAND_COLORS = ['#5b7cfa', '#3ec9a7', '#a56ef0', '#e74c3c', '#f5a623'];

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(44)["URLSearchParams"]))

/***/ })

};;
//# sourceMappingURL=flow-lane.js.map