exports.ids = [22,6,7,10,15,17];
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

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("091acbf4", content, true, context)
};

/***/ }),

/***/ 135:
/***/ (function(module) {

module.exports = JSON.parse("{\"AKOKA TS\":{\"T3\":{\"33-AkokaTCN-New Yaba\":{\"NEW YABA INJ\":{\"T2\":{\"11-New YabaINJ-T2-Incomer\":{\"11-New YabaINJ-T2-Jibowu\":{}}}}},\"33-AkokaTCN-T3A\":{\"AKOKA INJ\":{\"T3\":{\"11-AkokaINJ-T3-Incomer\":{\"11-AkokaINJ-T3-Akoka\":{},\"11-AkokaINJ-T3-Community\":{}}}}}}},\"ALAUSA TS\":{\"T1\":{\"33-AlausaTCN-OJODU\":{\"OPEBI INJ\":{\"T1\":{\"11-OpebiINJ-T1-Incomer\":{\"11-OpebiINJ-T1-Agbaoku\":{},\"11-OpebiINJ-T1-Olusosun\":{},\"11-OpebiINJ-T1-Salvation\":{}}}}},\"33-AlausaTCN-T4\":{\"NEW ALAUSA INJ\":{\"T4\":{\"11-New AlausaINJ-T4-Incomer\":{\"11-New AlausaINJ-T4-Allen\":{},\"11-New AlausaINJ-T4-Aromire\":{},\"11-New AlausaINJ-T4-Oregun\":{}}},\"T5\":{\"11-New AlausaINJ-T5-Incomer\":{\"11-New AlausaINJ-T5-Alausa\":{},\"11-New AlausaINJ-T5-Kudirat\":{},\"11-New AlausaINJ-T5-Morrison\":{}}}}},\"33-AlausaTCN-T6\":{\"NEW ALAUSA INJ\":{\"T6\":{\"11-New AlausaINJ-T6-Incomer\":{\"11-New AlausaINJ-T6-Awolowo\":{},\"11-New AlausaINJ-T6-Ogundana\":{},\"11-New AlausaINJ-T6-Siyanbola\":{}}}}}},\"T2\":{\"33-AlausaTCN-ALAUSA\":{\"SECRETARIAT INJ\":{\"T1\":{\"11-SecretariatINJ-T1-Incomer\":{\"11-SecretariatINJ-T1-Estate\":{},\"11-SecretariatINJ-T1-Lateef Jakande\":{},\"11-SecretariatINJ-T1-Omole\":{}}},\"T2\":{\"11-SecretariatINJ-T2-Incomer\":{\"11-SecretariatINJ-T2-7UP\":{},\"11-SecretariatINJ-T2-Agidingbi\":{},\"11-SecretariatINJ-T2-UAC\":{}}}}},\"33-AlausaTCN-MAGODO\":{\"MAGODO INJ\":{\"T1\":{\"11-MagodoINJ-T1-Incomer\":{\"11-MagodoINJ-T1-Emmanuel Keshi\":{},\"11-MagodoINJ-T1-Oluyombo\":{},\"11-MagodoINJ-T1-Owulade\":{},\"11-MagodoINJ-T1-Shangisha\":{}}},\"T2\":{\"11-MagodoINJ-T2-Incomer\":{\"11-MagodoINJ-T2-Bashiru\":{},\"11-MagodoINJ-T2-CMD\":{}}}}},\"33-AlausaTCN-OPIC\":{\"ISHERI INJ\":{\"T1\":{\"11-IsheriINJ-T1-Incomer\":{\"11-IsheriINJ-T1-Bankole\":{},\"11-IsheriINJ-T1-Isheri\":{},\"11-IsheriINJ-T1-Olowora\":{}}}},\"OLOWORA INJ\":{\"T1\":{\"11-OloworaINJ-T1-Incomer\":{\"11-OloworaINJ-T1-Orisha\":{},\"11-OloworaINJ-T1-UNILAG\":{}}}}}},\"T3\":{\"33-AlausaTCN-OPEBI\":{},\"33-AlausaTCN-T5\":{}}},\"ALIMOSHO TS\":{\"T1\":{\"33-AlimoshoTCN-T4\":{\"ALIMOSHO INJ\":{\"T4\":{\"11-AlimoshoINJ-T4-Incomer\":{\"11-AlimoshoINJ-T4-Akowonjo\":{},\"11-AlimoshoINJ-T4-FHA\":{},\"11-AlimoshoINJ-T4-Oki\":{}}}}},\"33-AlimoshoTCN-T6\":{\"ALIMOSHO INJ\":{\"T6\":{\"11-AlimoshoINJ-T6-Incomer\":{\"11-AlimoshoINJ-T6-Orelope\":{},\"11-AlimoshoINJ-T6-Shasha\":{}}}}}},\"T2\":{\"33-AlimoshoTCN-AGEGE\":{\"AGEGE INJ\":{\"T2\":{\"11-AgegeINJ-T2-Incomer\":{\"11-AgegeINJ-T2-Abule Egba\":{},\"11-AgegeINJ-T2-Orile Agege\":{},\"11-AgegeINJ-T2-Power Line\":{}}},\"T3\":{\"11-AgegeINJ-T3-Incomer\":{\"11-AgegeINJ-T3-Oyemekun\":{},\"11-AgegeINJ-T3-Pen Cinema\":{},\"11-AgegeINJ-T3-Tabon Tabon\":{}}}},\"HILLTOP INJ\":{\"T1\":{\"11-HilltopINJ-T1-Incomer\":{\"11-HilltopINJ-T1-Hilltop\":{}}}}},\"33-AlimoshoTCN-T8\":{\"ALIMOSHO INJ\":{\"T8\":{\"11-AlimoshoINJ-T8-Incomer\":{\"11-AlimoshoINJ-T8-Alimosho\":{},\"11-AlimoshoINJ-T8-Okunola\":{},\"11-AlimoshoINJ-T8-Wole Omo Osho\":{}}}}}},\"T3\":{\"33-AlimoshoTCN-ADIYAN\":{\"NEW GOWON INJ\":{\"T1\":{\"11-New GowonINJ-T1-Incomer\":{\"11-New GowonINJ-T1-Kuwait\":{},\"11-New GowonINJ-T1-Olorunadaba\":{},\"11-New GowonINJ-T1-Unity\":{}}}}},\"33-AlimoshoTCN-EKORO\":{\"AGEGE INJ\":{\"T1\":{\"11-AgegeINJ-T1-Incomer\":{\"11-AgegeINJ-T1-Abattoir\":{},\"11-AgegeINJ-T1-Iju Road\":{},\"11-AgegeINJ-T1-Oko Oba\":{}}}},\"EKORO INJ\":{\"T2\":{\"11-EkoroINJ-T2-Incomer\":{\"11-EkoroINJ-T2-Agbele\":{},\"11-EkoroINJ-T2-Oke Odo\":{},\"11-EkoroINJ-T2-Olota\":{}}}}},\"33-AlimoshoTCN-TOWER IPAJA\":{\"ADARANIJO INJ\":{\"T1\":{\"11-AdaranijoINJ-T1-Incomer\":{\"11-AdaranijoINJ-T1-Arigbanla\":{},\"11-AdaranijoINJ-T1-NYSC\":{},\"11-AdaranijoINJ-T1-Oyewole\":{}}}}}}},\"AMUWO TS\":{\"T1\":{\"33-AmuwoTCN-FESTAC1\":{}},\"T3\":{\"33-AmuwoTCN-HONGXING 2\":{}},\"T5\":{\"33-AmuwoTCN-AMUKOKO\":{\"AMUWO INJ\":{\"T1\":{\"11-AmuwoINJ-T1-Incomer\":{\"11-AmuwoINJ-T1-Ijesha Express\":{},\"11-AmuwoINJ-T1-Old Ojo Road\":{}}},\"T2\":{\"11-AmuwoINJ-T2-Incomer\":{\"11-AmuwoINJ-T2-Jakande 1\":{},\"11-AmuwoINJ-T2-Jakande 2\":{}}}}},\"33-AmuwoTCN-HONGXING 1\":{}}},\"AYOBO TS\":{\"T1 & T2\":{\"33-AyoboTCN-ABESAN\":{\"ABESAN INJ\":{\"T1\":{\"11-AbesanINJ-T1-Incomer\":{\"11-AbesanINJ-T1-Aboru\":{},\"11-AbesanINJ-T1-Baruwa\":{},\"11-AbesanINJ-T1-Ipaja\":{}}},\"T2\":{\"11-AbesanINJ-T2-Incomer\":{\"11-AbesanINJ-T2-Abesan\":{},\"11-AbesanINJ-T2-Shagari\":{}}}}},\"33-AyoboTCN-ABULE TAYLOR\":{\"ABULE TAYLOR INJ\":{\"T1\":{\"11-Abule TaylorINJ-T1-Incomer\":{\"11-Abule TaylorINJ-T1-Bode Williams\":{},\"11-Abule TaylorINJ-T1-Walter Anderm\":{}}}},\"EKORO INJ\":{\"T1\":{\"11-EkoroINJ-T1-Incomer\":{\"11-EkoroINJ-T1-Ajasa\":{},\"11-EkoroINJ-T1-Ekoro\":{}}}}},\"33-AyoboTCN-AIYETORO\":{\"ALAJA INJ\":{\"T1\":{\"11-AlajaINJ-T1-Incomer\":{\"11-AlajaINJ-T1-Fadayomi\":{},\"11-AlajaINJ-T1-Koloba\":{},\"11-AlajaINJ-T1-Megida\":{}}}},\"AYETORO INJ\":{\"T1\":{\"11-AyetoroINJ-T1-Incomer\":{\"11-AyetoroINJ-T1-Bada\":{},\"11-AyetoroINJ-T1-Itele\":{},\"11-AyetoroINJ-T1-Lafenwa\":{}}}}},\"33-AyoboTCN-AMIKANLE\":{\"AMIKANLE INJ\":{\"T1\":{\"11-AmikanleINJ-T1-Incomer\":{\"11-AmikanleINJ-T1-Aiyetobi\":{},\"11-AmikanleINJ-T1-Ige\":{},\"11-AmikanleINJ-T1-Isoto\":{}}}},\"ILAPO INJ\":{\"T1\":{\"11-IlapoINJ-T1-Incomer\":{\"11-IlapoINJ-T1-Ilapo\":{}}}}},\"33-AyoboTCN-AYOBO\":{\"AYOBO INJ\":{\"T1\":{\"11-AyoboINJ-T1-Incomer\":{\"11-AyoboINJ-T1-Atanla\":{},\"11-AyoboINJ-T1-Ayobo\":{},\"11-AyoboINJ-T1-Ikola\":{}}}}}}},\"EGBIN TS\":{\"T1\":{\"33-EgbinTCN-AMBER\":{},\"33-EgbinTCN-OKE ELETU\":{\"IJEDE INJ\":{\"T1\":{\"11-IjedeINJ-T1-Incomer\":{\"11-IjedeINJ-T1-Gberibe\":{},\"11-IjedeINJ-T1-Luwasa\":{}}}}}}},\"EJIGBO TS\":{\"T1\":{\"33-EjigboTCN-AIRPORT\":{},\"33-EjigboTCN-OKE AFA 1\":{\"OKE AFA INJ\":{\"T2\":{\"11-Oke AfaINJ-T2-Incomer\":{\"11-Oke AfaINJ-T2-Ilamoshe\":{},\"11-Oke AfaINJ-T2-LCHE\":{},\"11-Oke AfaINJ-T2-Osolo\":{}}}}},\"33-EjigboTCN-OKEAFA 2\":{\"OKE AFA INJ\":{\"T1\":{\"11-Oke AfaINJ-T1-Incomer\":{\"11-Oke AfaINJ-T1-Bucknor\":{},\"11-Oke AfaINJ-T1-Ejigbo\":{},\"11-Oke AfaINJ-T1-Ire-Akari\":{}}},\"T3\":{\"11-Oke AfaINJ-T3-Incomer\":{\"11-Oke AfaINJ-T3-Bungalow\":{},\"11-Oke AfaINJ-T3-NNPC\":{},\"11-Oke AfaINJ-T3-Ori Oke\":{}}}}}},\"T2\":{\"33-EjigboTCN-IGANDO\":{\"IGANDO INJ\":{\"T1\":{\"11-IgandoINJ-T1-Incomer\":{\"11-IgandoINJ-T1-Egan\":{},\"11-IgandoINJ-T1-New Igando\":{},\"11-IgandoINJ-T1-Obadore\":{}}},\"T2\":{\"11-IgandoINJ-T2-Incomer\":{\"11-IgandoINJ-T2-Agric Road\":{},\"11-IgandoINJ-T2-Akesan\":{},\"11-IgandoINJ-T2-General Hospital\":{},\"11-IgandoINJ-T2-Ikotun Igando\":{}}}},\"LAGOS HOMS INJ\":{\"T1\":{\"11-Lagos HomsINJ-T1-Incomer\":{\"11-Lagos HomsINJ-T1-Estate\":{}}}}},\"33-EjigboTCN-IJEGUN\":{\"IJEGUN INJ\":{\"T1\":{\"11-IjegunINJ-T1-Incomer\":{\"11-IjegunINJ-T1-Ikotun\":{},\"11-IjegunINJ-T1-Obalagbe\":{},\"11-IjegunINJ-T1-Okerube\":{}}},\"T2\":{\"11-IjegunINJ-T2-Incomer\":{\"11-IjegunINJ-T2-Ijegun\":{},\"11-IjegunINJ-T2-Isheri Oshun\":{},\"11-IjegunINJ-T2-Pipeline\":{}}}}}},\"T3\":{\"33-EjigboTCN-AGODO\":{\"AGODO EGBE INJ\":{\"T1\":{\"11-Agodo EgbeINJ-T1-Incomer\":{\"11-Agodo EgbeINJ-T1-Abanishe\":{},\"11-Agodo EgbeINJ-T1-Kudaki\":{}}}}},\"33-EjigboTCN-EGBE\":{\"BOLORUNPELU INJ\":{\"T1\":{\"11-BolorunpeluINJ-T1-Incomer\":{\"11-BolorunpeluINJ-T1-Abaranje\":{},\"11-BolorunpeluINJ-T1-Idimu\":{},\"11-BolorunpeluINJ-T1-Isijola\":{}},\"11-BolorunpeluINJ-T3-Incomer\":{\"11-BolorunpeluINJ-T3-Governor\":{},\"11-BolorunpeluINJ-T3-Liasu\":{}}}},\"KWARU INJ\":{\"T1\":{\"11-KwaruINJ-T1-Incomer\":{\"11-KwaruINJ-T1-Asalu\":{},\"11-KwaruINJ-T1-Osunba\":{}}}}},\"33-EjigboTCN-SHASHA\":{\"SHASHA INJ\":{\"T1\":{\"11-ShashaINJ-T1-Incomer\":{\"11-ShashaINJ-T1-Coker Estate\":{},\"11-ShashaINJ-T1-Foursquare\":{},\"11-ShashaINJ-T1-NAF\":{},\"11-ShashaINJ-T1-Oguntade\":{},\"11-ShashaINJ-T1-Orisunbare\":{}}}}}},\"T4\":{\"33-EjigboTCN-BOLORUNPELU\":{}}},\"IKORODU TS\":{\"T1\":{\"33-IkoroduTCN-IJEDE\":{},\"33-IkoroduTCN-T1A\":{\"SABO INJ\":{\"T1\":{\"11-SaboINJ-T1-Incomer\":{\"11-SaboINJ-T1-Ayangburen\":{},\"11-SaboINJ-T1-Ijebu Ode\":{},\"11-SaboINJ-T1-Lasunwon\":{},\"11-SaboINJ-T1-Mary Hill\":{}}}}},\"33-IkoroduTCN-UNTL\":{}},\"T2\":{\"33-IkoroduTCN-INDUSTRIAL\":{},\"33-IkoroduTCN-IPAKODO\":{\"IPAKODO INJ\":{\"T1\":{\"11-Ipakodo (Ebute)INJ-T1-Incomer\":{\"11-Ipakodo (Ebute)INJ-T1-Abuja\":{},\"11-Ipakodo (Ebute)INJ-T1-Ipakodo\":{},\"11-Ipakodo (Ebute)INJ-T1-WAEC\":{}}}}},\"33-IkoroduTCN-T2A\":{\"SABO INJ\":{\"T2\":{\"11-SaboINJ-T2-Incomer\":{\"11-SaboINJ-T2-Erunwen\":{},\"11-SaboINJ-T2-Eyita\":{},\"11-SaboINJ-T2-Igbogbo\":{},\"11-SaboINJ-T2-Ladega\":{},\"11-SaboINJ-T2-Lagos Road\":{}}}}}},\"T3\":{\"33-IkoroduTCN-DANGOTE\":{},\"33-IkoroduTCN-FAKALE Source\":{},\"33-IkoroduTCN-IBESHE\":{\"AJEGUNLE INJ\":{\"T1\":{\"11-AjegunleINJ-T1-Incomer\":{\"11-AjegunleINJ-T1-Owode Onirin\":{},\"11-AjegunleINJ-T1-Thomas Olaniyan\":{}}}}},\"33-IkoroduTCN-OWUTU\":{\"OWUTU INJ\":{\"T1\":{\"11-OwutuINJ-T1-Incomer\":{\"11-OwutuINJ-T1-Agric\":{},\"11-OwutuINJ-T1-Ori Okuta\":{}}},\"T2\":{\"11-OwutuINJ-T2-Incomer\":{\"11-OwutuINJ-T2-Asolo\":{},\"11-OwutuINJ-T2-Isawo\":{},\"11-OwutuINJ-T2-Majidun\":{}}}}},\"33-IkoroduTCN-PULKIT\":{}},\"T4\":{\"33-IkoroduTCN-AGBOWA\":{\"EPE INJ\":{\"T1\":{\"11-EpeINJ-T1-Incomer\":{\"11-EpeINJ-T1-LASU\":{},\"11-EpeINJ-T1-Township\":{},\"11-EpeINJ-T1-Water Works\":{}}}}},\"33-IkoroduTCN-IGBOGBO\":{\"IGBOGBO INJ\":{\"T1\":{\"11-IgbogboINJ-T1-Incomer\":{\"11-IgbogboINJ-T1-Bayeku\":{},\"11-IgbogboINJ-T1-Ofin\":{}}},\"T2\":{\"11-IgbogboINJ-T2-Incomer\":{\"11-IgbogboINJ-T2-Agbele\":{},\"11-IgbogboINJ-T2-Agunfoye\":{},\"11-IgbogboINJ-T2-Odofin\":{}}}}},\"33-IkoroduTCN-SPINTEX\":{}}},\"ILUPEJU TS\":{\"T1 & T3\":{\"11-IlupejuINJ-T1-Incomer\":{\"ILUPEJU INJ\":{\"T1\":{\"11-IlupejuINJ-T1-Incomer\":{\"11-IlupejuINJ-T1-ATM\":{},\"11-IlupejuINJ-T1-Bhojson\":{},\"11-IlupejuINJ-T1-Rida Plastic\":{}}}}},\"11-IlupejuINJ-T3-Incomer\":{\"ILUPEJU INJ\":{\"T3\":{\"11-IlupejuINJ-T3-Incomer\":{\"11-IlupejuINJ-T3-Coker\":{},\"11-IlupejuINJ-T3-L & K\":{},\"11-IlupejuINJ-T3-PZ\":{},\"11-IlupejuINJ-T3-Palmgrove\":{}}}}}},\"T2\":{\"33-IlupejuTCN-ILUPEJU IGBOBI\":{\"IGBOBI INJ\":{\"T2\":{\"11-IgbobiINJ-T2-Incomer\":{\"11-IgbobiINJ-T2-Adurosakin\":{},\"11-IgbobiINJ-T2-Igbobi\":{},\"11-IgbobiINJ-T2-Market\":{}}},\"T3\":{\"11-IgbobiINJ-T3-Incomer\":{\"11-IgbobiINJ-T3-Ikorodu\":{},\"11-IgbobiINJ-T3-Mushin\":{},\"11-IgbobiINJ-T3-Railway\":{}}}}},\"33-IlupejuTCN-ILUPEJU PACEGATE\":{}},\"T4\":{\"33-IlupejuTCN-ILUPEJU BY-PASS\":{\"ILUPEJU BYPASS INJ\":{\"T1\":{\"11-Ilupeju BypassINJ-T1-Incomer\":{\"11-Ilupeju BypassINJ-T1-Bypass\":{},\"11-Ilupeju BypassINJ-T1-Industrial\":{},\"11-Ilupeju BypassINJ-T1-Obanikoro\":{}}}},\"MUSHIN INJ\":{\"T1\":{\"11-MushinINJ-T1-Incomer\":{\"11-MushinINJ-T1-Mushin\":{},\"11-MushinINJ-T1-Mushin 2\":{}}}}},\"33-IlupejuTCN-ILUPEJU PRIME\":{},\"33-IlupejuTCN-T4A\":{\"ILUPEJU INJ\":{\"T4\":{\"11-IlupejuINJ-T4-Incomer\":{\"11-IlupejuINJ-T4-Army Cant.\":{},\"11-IlupejuINJ-T4-Ikorodu\":{}}}}}}},\"ISOLO TS\":{\"T1\":{\"33-IsoloTCN-PTC Interface\":{\"ALASIA INJ\":{\"T1\":{\"11-AlasiaINJ-T1-Incomer\":{\"11-AlasiaINJ-T1-Alasia\":{},\"11-AlasiaINJ-T1-Council\":{},\"11-AlasiaINJ-T1-Owoseni\":{}}}}}},\"T2\":{\"(Unspecified Feeder)\":{\"EKO MUSHIN INJ\":{}},\"33-IsoloTCN-AFPRINT\":{},\"33-IsoloTCN-AJAO\":{\"AJAO INJ\":{\"T1\":{\"11-AjaoINJ-T1-Incomer\":{\"11-AjaoINJ-T1-Airport Road\":{},\"11-AjaoINJ-T1-Domino\":{}}},\"T2\":{\"11-AjaoINJ-T2-Incomer\":{\"11-AjaoINJ-T2-New Estate\":{},\"11-AjaoINJ-T2-Run View\":{},\"11-AjaoINJ-T2-Sholanke\":{}}}},\"MAFOLUKU INJ\":{\"T1\":{\"11-MafolukuINJ-T1-Incomer\":{\"11-MafolukuINJ-T1-Dosunmu\":{},\"11-MafolukuINJ-T1-Makinde\":{},\"11-MafolukuINJ-T1-Saubana\":{}}}}},\"33-IsoloTCN-PURE HYGIENE\":{}},\"T3\":{\"33-IsoloTCN-AIRPORT\":{},\"33-IsoloTCN-ASWANI\":{}}},\"ITIRE TS\":{\"T1\":{\"33-ItireTCN-AGO II\":{},\"33-ItireTCN-T3A\":{\"ITIRE INJ\":{\"T3\":{\"11-ItireINJ-T3-Incomer\":{\"11-ItireINJ-T3-Ago\":{},\"11-ItireINJ-T3-Apena\":{}}}}}},\"T3\":{\"33-ItireTCN-AGO I\":{\"AGO OKOTA INJ\":{\"T1\":{\"11-Ago OkotaINJ-T1-Incomer\":{\"11-Ago OkotaINJ-T1-Amuwo Ind.\":{},\"11-Ago OkotaINJ-T1-Fasheun\":{}}},\"T2\":{\"11-Ago OkotaINJ-T2-Incomer\":{\"11-Ago OkotaINJ-T2-Lake View\":{},\"11-Ago OkotaINJ-T2-Oke Ogbere\":{}}}}},\"33-ItireTCN-ITIRE 1\":{\"ITIRE INJ\":{\"T1\":{\"11-ItireINJ-T1-Incomer\":{\"11-ItireINJ-T1-Ademulegun\":{},\"11-ItireINJ-T1-Okota\":{}}},\"T2\":{\"11-ItireINJ-T2-Incomer\":{\"11-ItireINJ-T2-Amuwo-Ijesha\":{},\"11-ItireINJ-T2-Canal\":{},\"11-ItireINJ-T2-Ibalex\":{}}}}}}},\"LANDCRAFT TS\":{\"T1\":{\"132-EgbinTCN-MARYLAND-LANDCRAFT\":{}}},\"MARYLAND TS\":{\"T1 & T3\":{\"33-MarylandTCN-M/ALAUSA\":{},\"33-MarylandTCN-RACK CENTRE\":{},\"33-MarylandTCN-T1A\":{\"MARYLAND INJ\":{\"T1\":{\"11-MarylandINJ-T1-Incomer\":{\"11-MarylandINJ-T1-Ketu\":{},\"11-MarylandINJ-T1-Okupe\":{},\"11-MarylandINJ-T1-PTC\":{}}}}},\"33-MarylandTCN-T3A\":{\"MARYLAND INJ\":{\"T3\":{\"11-MarylandINJ-T3-Incomer\":{\"11-MarylandINJ-T3-Demurin\":{},\"11-MarylandINJ-T3-Ikosi\":{},\"11-MarylandINJ-T3-Sylvia\":{}}}}}},\"T2\":{\"33-MarylandTCN-AJEGUNLE\":{\"WASIMI INJ\":{\"T1\":{\"11-WasimiINJ-T1-Incomer\":{\"11-WasimiINJ-T1-Agiliti\":{},\"11-WasimiINJ-T1-Akanimodo\":{},\"11-WasimiINJ-T1-Araromi\":{}}},\"T2\":{\"11-WasimiINJ-T2-Incomer\":{\"11-WasimiINJ-T2-Agidi\":{},\"11-WasimiINJ-T2-Wasimi\":{}}}}},\"33-MarylandTCN-PTC\":{\"ADEKUNLE FAJUYI INJ\":{\"T1\":{\"11-Adekunle FajuyiINJ-T1-Incomer\":{\"11-Adekunle FajuyiINJ-T1-Isaac John\":{},\"11-Adekunle FajuyiINJ-T1-Oduduwa\":{}}}}},\"33-MarylandTCN-T2A\":{\"MARYLAND INJ\":{\"T2\":{\"11-MarylandINJ-T2-Incomer\":{\"11-MarylandINJ-T2-GRA\":{},\"11-MarylandINJ-T2-Ojota\":{},\"11-MarylandINJ-T2-Westex\":{}}}}}}},\"MONARCH TS\":{\"T1\":{\"132-Egbin-TCN-SAGAMU-MONARCH ALLOYS\":{}}},\"ODOGUNYAN TS\":{\"T1\":{\"33-OdogunyanTCN-AGBEDE\":{},\"33-OdogunyanTCN-MEGA STEEL\":{}},\"T2\":{\"33-OdogunyanTCN-CHIKKICHIKKI\":{},\"33-OdogunyanTCN-FAKALE MAYA\":{},\"33-OdogunyanTCN-ODOGUNYAN\":{\"ODOGUNYAN INJ\":{\"T1\":{\"11-OdogunyanINJ-T1-Incomer\":{\"11-OdogunyanINJ-T1-Agodo\":{},\"11-OdogunyanINJ-T1-Centex\":{},\"11-OdogunyanINJ-T1-Industrial\":{}}},\"T2\":{\"11-OdogunyanINJ-T2-Incomer\":{\"11-OdogunyanINJ-T2-Cantonment\":{},\"11-OdogunyanINJ-T2-Ita Oluwo\":{},\"11-OdogunyanINJ-T2-Odokekere\":{}}}}}}},\"OGBA TS\":{\"T1 & T2\":{\"33-OgbaTCN-ABEOKUTA EXP.\":{\"BECKLEY INJ\":{\"T1\":{\"11-BeckleyINJ-T1-Incomer\":{\"11-BeckleyINJ-T1-Agbe road\":{},\"11-BeckleyINJ-T1-Beckley\":{}}}},\"IJAIYE OJOKORO INJ\":{\"T1\":{\"11-Ijaiye OjokoroINJ-T1-Incomer\":{\"11-Ijaiye OjokoroINJ-T1-Abeokuta Express\":{},\"11-Ijaiye OjokoroINJ-T1-Agbado 2\":{},\"11-Ijaiye OjokoroINJ-T1-Jankara\":{}}}},\"MAPLEWOOD INJ\":{\"T1\":{\"11-MaplewoodINJ-T1-Incomer\":{\"11-MaplewoodINJ-T1-Maplewood\":{}}}}},\"33-OgbaTCN-FEEDER 2\":{\"OGBA INJ\":{\"T1\":{\"11-OgbaINJ-T1-Incomer\":{\"11-OgbaINJ-T1-Ijaye\":{},\"11-OgbaINJ-T1-Isokoko\":{}}}}},\"33-OgbaTCN-PTC DUNLOP\":{\"MONGORO INJ\":{\"T1\":{\"11-MongoroINJ-T1-Incomer\":{\"11-MongoroINJ-T1-Capitol\":{},\"11-MongoroINJ-T1-New Dopemu\":{},\"11-MongoroINJ-T1-Sule\":{}}}}},\"33-OgbaTCN-SANKYO\":{}},\"T3\":{\"33-OgbaTCN-FEEDER 8\":{\"OGBA INJ\":{\"T2\":{\"11-OgbaINJ-T2-Incomer\":{\"11-OgbaINJ-T2-Ifako\":{},\"11-OgbaINJ-T2-Mangoro\":{}}},\"T3\":{\"11-OgbaINJ-T3-Incomer\":{\"11-OgbaINJ-T3-Agege\":{},\"11-OgbaINJ-T3-Oba Akran\":{}}}}},\"33-OgbaTCN-IJU WATER WORKS\":{\"OBAWOLE INJ\":{\"T1\":{\"11-ObawoleINJ-T1-Incomer\":{\"11-ObawoleINJ-T1-Rotimi Williams\":{},\"11-ObawoleINJ-T1-Shonubi\":{},\"11-ObawoleINJ-T1-Youdeowei\":{}}}}},\"33-OgbaTCN-UNIVERSAL STEEL\":{\"ADENIYI JONES INJ\":{\"T1\":{\"11-Adeniyi JonesINJ-T1-Incomer\":{\"11-Adeniyi JonesINJ-T1-Adeniyi Jones\":{},\"11-Adeniyi JonesINJ-T1-Ajao\":{},\"11-Adeniyi JonesINJ-T1-Anifowoshe\":{}}}}}},\"T4\":{\"33-OgbaTCN-MTN\":{},\"33-OgbaTCN-NEW OJODU\":{\"OJODU INJ\":{\"T1\":{\"11-OjoduINJ-T1-Incomer\":{\"11-OjoduINJ-T1-Alagbole\":{},\"11-OjoduINJ-T1-King Avenue\":{},\"11-OjoduINJ-T1-Ojodu\":{}}},\"T2\":{\"11-OjoduINJ-T2-Incomer\":{\"11-OjoduINJ-T2-Express\":{},\"11-OjoduINJ-T2-River Valley\":{},\"11-OjoduINJ-T2-Yakoyo\":{}}}}},\"33-OgbaTCN-PTC EXP.\":{\"PTC INJ\":{\"T1\":{\"11-PTCINJ-T1-Incomer\":{\"11-PTCINJ-T1-Olowu\":{},\"11-PTCINJ-T1-Opebi\":{}}},\"T2\":{\"11-PTCINJ-T2-Incomer\":{\"11-PTCINJ-T2-Awuse\":{},\"11-PTCINJ-T2-Medical\":{}}},\"T3\":{\"11-PTCINJ-T3-Incomer\":{\"11-PTCINJ-T3-General Hospital\":{},\"11-PTCINJ-T3-Oba Akinjobi\":{}}}}}},\"T4 Mobitra\":{\"33-OgbaTCN-CISCO\":{\"OKE IRA INJ\":{\"T1\":{\"11-Oke IraINJ-T1-Incomer\":{\"11-Oke IraINJ-T1-Ayo Alabi\":{},\"11-Oke IraINJ-T1-Nob Oluwa\":{},\"11-Oke IraINJ-T1-Oke Ira\":{}}},\"T2\":{\"11-Oke IraINJ-T2-Incomer\":{\"11-Oke IraINJ-T2-Abiodun Jagun\":{},\"11-Oke IraINJ-T2-Kayode\":{},\"11-Oke IraINJ-T2-Thomas Salako\":{}}}}}}},\"OJO TS\":{\"T2\":{\"33-OjoTCN-FESTAC II INTERFACE\":{}}},\"OKE ARO TS\":{\"T5 & T6\":{\"33-Oke-AroTCN-AKUTE\":{},\"33-Oke-AroTCN-LAMBE\":{\"AKUTE INJ\":{\"T1\":{\"11-AkuteINJ-T1-Incomer\":{\"11-AkuteINJ-T1-Ishashi\":{},\"11-AkuteINJ-T1-Majente\":{},\"11-AkuteINJ-T1-Oyeyemi\":{}}}},\"LAMBE INJ\":{\"T1\":{\"11-LambeINJ-T1-Incomer\":{\"11-LambeINJ-T1-Jolasco\":{},\"11-LambeINJ-T1-Matogun\":{},\"11-LambeINJ-T1-Olambe\":{}}}}},\"33-Oke-AroTCN-NEW IJU W/WORKS\":{\"IJU INJ\":{\"T1\":{\"11-IjuINJ-T1-Incomer\":{\"11-IjuINJ-T1-Ajuwon\":{},\"11-IjuINJ-T1-Asore\":{},\"11-IjuINJ-T1-Galilee\":{},\"11-IjuINJ-T1-Grailand\":{}}},\"T2\":{\"11-IjuINJ-T2-Incomer\":{\"11-IjuINJ-T2-Agbado 1\":{},\"11-IjuINJ-T2-Ishaga\":{},\"11-IjuINJ-T2-Water works\":{}}}}},\"33-Oke-AroTCN-YIDI\":{\"OPE ILU INJ\":{\"T1\":{\"11-Ope IluINJ-T1-Incomer\":{\"11-Ope IluINJ-T1-Aboro\":{},\"11-Ope IluINJ-T1-Adiyan\":{},\"11-Ope IluINJ-T1-Ijoko\":{}}}},\"YIDI INJ\":{\"T1\":{\"11-YidiINJ-T1-Incomer\":{\"11-YidiINJ-T1-Opeilu\":{},\"11-YidiINJ-T1-Osoba\":{}}}}}}},\"OMINIK TS\":{\"T1\":{\"132-EgbinTCN-MARYLAND-OMNIK\":{}}},\"OTA TS\":{\"T2\":{\"33-OtaTCN-AMJE\":{\"ABULE IROKO INJ\":{\"T1\":{\"11-Abule IrokoINJ-T1-Incomer\":{\"11-Abule IrokoINJ-T1-Abule Iroko\":{},\"11-Abule IrokoINJ-T1-Alakuko\":{},\"11-Abule IrokoINJ-T1-Books\":{}}}},\"YUSUF INJ\":{\"T1\":{\"11-YusufINJ-T1-Incomer\":{\"11-YusufINJ-T1-Yusuf\":{}}},\"T2\":{\"11-YusufINJ-T2-Incomer\":{\"11-YusufINJ-T2-Agbefa\":{},\"11-YusufINJ-T2-Akera\":{}}}}}}},\"OWORO TS\":{\"T1\":{\"33-OworonshokiTCN-OWORO 1\":{\"OWORO INJ\":{\"T1\":{\"11-OworoINJ-T1-Incomer\":{\"11-OworoINJ-T1-Bariga\":{},\"11-OworoINJ-T1-Hospital\":{},\"11-OworoINJ-T1-Ifako\":{}}}}},\"33-OworonshokiTCN-OWORO 2\":{\"OWORO INJ\":{\"T2\":{\"11-OworoINJ-T2-Incomer\":{\"11-OworoINJ-T2-Ladilac\":{},\"11-OworoINJ-T2-Oworo\":{},\"11-OworoINJ-T2-Pedro\":{}}}}},\"33-OworonshokiTCN-OWORO 3\":{\"OWORO INJ\":{\"T3\":{\"11-OworoINJ-T3-Incomer\":{\"11-OworoINJ-T3-Anthony\":{},\"11-OworoINJ-T3-GTB\":{},\"11-OworoINJ-T3-Gbagada\":{}}}}}},\"T2\":{\"33-OworonshokiTCN-IGBOBI\":{\"IGBOBI INJ\":{\"T1\":{\"11-IgbobiINJ-T1-Incomer\":{\"11-IgbobiINJ-T1-Apata\":{},\"11-IgbobiINJ-T1-Military\":{},\"11-IgbobiINJ-T1-Orthopaedic\":{}}}}},\"33-OworonshokiTCN-NEW OWORO\":{\"NEW OWORO INJ\":{\"T1\":{\"11-New OworoINJ-T1-Incomer\":{\"11-New OworoINJ-T1-Finbars\":{},\"11-New OworoINJ-T1-Odunsi\":{}}}}},\"33-OworonshokiTCN-OGUDU 1\":{\"OGUDU INJ\":{\"T1\":{\"11-OguduINJ-T1-Incomer\":{\"11-OguduINJ-T1-CAC\":{},\"11-OguduINJ-T1-Express\":{},\"11-OguduINJ-T1-Ogudu\":{}}},\"T2\":{\"11-OguduINJ-T2-Incomer\":{\"11-OguduINJ-T2-Alapere\":{},\"11-OguduINJ-T2-Oriola\":{}}},\"T3\":{\"11-OguduINJ-T3-Incomer\":{\"11-OguduINJ-T3-Balogun\":{},\"11-OguduINJ-T3-Kola Adeshina\":{},\"11-OguduINJ-T3-Soluyi\":{}}}}}},\"T3\":{\"33-OworonshokiTCN-ALAPERE\":{\"ALAPERE INJ\":{\"T1\":{\"11-AlapereINJ-T1-Incomer\":{\"11-AlapereINJ-T1-Agboyi\":{},\"11-AlapereINJ-T1-Araba\":{},\"11-AlapereINJ-T1-Bakare\":{}}}}}}},\"SUNFLAG\":{\"T1\":{\"132-EgbinTCN-SAGAMU-SUNFLAG\":{}}},\"TOP-STEEL TS\":{\"T1\":{\"132-EgbinTCN-SAGAMU-TOPSTEEL\":{}}}}");

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_19490b90_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_19490b90_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_19490b90_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_19490b90_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_19490b90_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dashboard-wrapper[data-v-19490b90]{background-color:var(--bg-page);min-height:100vh}.main-content[data-v-19490b90]{padding-left:280px;padding-right:20px;padding-top:20px}.avail-header[data-v-19490b90]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.avail-title[data-v-19490b90]{color:var(--text-primary);font-weight:600;margin:0}.flow-panel[data-v-19490b90]{background:var(--bg-card);border-radius:14px;min-height:300px;padding:24px;position:relative}.flow-error[data-v-19490b90]{align-items:center;background:#fdecec;border-radius:10px;color:#c0392b;display:flex;font-size:13px;gap:12px;margin-bottom:16px;padding:10px 16px}.flow-retry[data-v-19490b90]{background:#c0392b;border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:12px;padding:4px 12px}.flow-api-note[data-v-19490b90]{color:var(--text-muted);font-size:12px;margin:-12px 0 18px}.flow-path-row[data-v-19490b90]{align-items:center;display:flex;gap:12px;justify-content:space-between;margin-bottom:18px}.flow-path-desc[data-v-19490b90]{color:var(--text-secondary);font-size:13px;margin:0}.flow-reset-btn[data-v-19490b90]{align-items:center;background:none;border:1px solid var(--border-color);border-radius:8px;color:var(--text-secondary);cursor:pointer;display:flex;flex-shrink:0;font-size:12px;font-weight:600;gap:4px;padding:5px 12px}.flow-reset-btn[data-v-19490b90]:hover{color:var(--text-primary)}.flow-scroll[data-v-19490b90]{overflow:auto;padding-bottom:8px}@media only screen and (max-width:992px){.main-content[data-v-19490b90]{padding-left:20px}.avail-header[data-v-19490b90]{align-items:flex-start;flex-direction:column;gap:12px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/energy_flow_diagram.vue?vue&type=template&id=19490b90&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dashboard-wrapper"
  }, [_c('SideNav'), _vm._ssrNode(" "), _vm._ssrNode("<main class=\"main-content\" data-v-19490b90>", "</main>", [_vm._ssrNode("<div class=\"avail-header\" data-v-19490b90><h5 class=\"avail-title\" data-v-19490b90>Energy Flow Diagram</h5></div> " + (_vm.error ? "<div class=\"flow-error\" data-v-19490b90>" + _vm._ssrEscape("\n            Couldn't load live data: " + _vm._s(_vm.error) + "\n            ") + "<button class=\"flow-retry\" data-v-19490b90>Retry</button></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"card-panel flow-panel\" data-v-19490b90>", "</div>", [_c('LoadingOverlay', {
    attrs: {
      "visible": _vm.loading
    }
  }), _vm._ssrNode(" <div class=\"flow-path-row\" data-v-19490b90><p class=\"flow-path-desc\" data-v-19490b90>Select a Transmission Station to begin — each choice narrows the next step.</p> " + (_vm.hasStarted ? "<button type=\"button\" class=\"flow-reset-btn\" data-v-19490b90><i class=\"material-icons tiny\" data-v-19490b90>replay</i> Reset\n                </button>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"flow-scroll\" data-v-19490b90>", "</div>", [_c('FlowDiagramCanvas', {
    ref: "canvas"
  }, [_c('FlowLane', {
    key: _vm.resetKey,
    attrs: {
      "mode": "level",
      "level": 0,
      "node-list": [_vm.tsTree],
      "path-key": "",
      "connector-api": _vm.connectorApi,
      "flow-data": _vm.flowData,
      "on-filter-change": _vm.onFilterChange,
      "dt-name-index": _vm.dtNameIndex,
      "request-dt-names": _vm.ensureDtNames
    },
    on: {
      "change": _vm.onRootChange
    }
  })], 1)], 1)], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/energy_flow_diagram.vue?vue&type=template&id=19490b90&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(61);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(62);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(63);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(64);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(65);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(66);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(67);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(68);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(69);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(70);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(71);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(72);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(73);

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

// EXTERNAL MODULE: ./components/SideNav/SideNav.vue + 4 modules
var SideNav = __webpack_require__(78);

// EXTERNAL MODULE: ./components/LoadingOverlay.vue + 4 modules
var LoadingOverlay = __webpack_require__(80);

// EXTERNAL MODULE: ./components/FlowDiagramCanvas.vue + 4 modules
var FlowDiagramCanvas = __webpack_require__(114);

// EXTERNAL MODULE: ./assets/data/ts_relationship.json
var ts_relationship = __webpack_require__(135);

// EXTERNAL MODULE: ./js_modules/controlCenterApi.js
var controlCenterApi = __webpack_require__(87);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/energy_flow_diagram.vue?vue&type=script&lang=js


































// The drill-down itself (TS -> Transformer -> 33kV Feeder -> ISS ->
// Transformer 2 -> 11kV Incomer -> 11kV Outgoing Feeder -> DT -> Customer,
// including the Path B "direct to DT" shortcut and its fork when a level's
// "All" selection mixes both) lives in the recursive <FlowLane> component -
// see components/FlowLane.vue. The numbers each card shows now come from
// GET /energy-flow (see static/api_live_responses3.md #2 and the header
// comment in assets/js/energyFlowSim.js for which levels are real filters).

/* harmony default export */ var energy_flow_diagramvue_type_script_lang_js = ({
  components: {
    SideNav: SideNav["default"],
    FlowDiagramCanvas: FlowDiagramCanvas["default"],
    LoadingOverlay: LoadingOverlay["default"]
  },
  data() {
    return {
      tsTree: ts_relationship,
      resetKey: 0,
      hasStarted: false,
      connectorApi: null,
      loading: true,
      error: null,
      flowData: null,
      // Only these three map to real /energy-flow query params - picking a new value at
      // an earlier level clears the ones after it, mirroring the FlowLane :key reset that
      // already happens visually when an ancestor selection changes.
      tsSelected: 'All',
      transformerSelected: 'All',
      feeder33kvaSelected: 'All',
      // Real DT names for the DT card - built once, on demand, from dt-availability/table
      // (no endpoint lists DT names directly; that table's dt_name/feeder_name pairs are
      // the closest real source - see the comment atop assets/js/energyFlowSim.js).
      dtNameIndex: null,
      dtNamesFetchStarted: false
    };
  },
  async mounted() {
    this.connectorApi = this.$refs.canvas;
    await this.fetchFlow();
  },
  methods: {
    onRootChange(val) {
      this.hasStarted = val !== '';
    },
    onFilterChange({
      level,
      value
    }) {
      const v = value || 'All';
      if (level === 0) {
        this.tsSelected = v;
        this.transformerSelected = 'All';
        this.feeder33kvaSelected = 'All';
      } else if (level === 1) {
        this.transformerSelected = v;
        this.feeder33kvaSelected = 'All';
      } else if (level === 2) {
        this.feeder33kvaSelected = v;
      }
      this.fetchFlow();
    },
    async fetchFlow() {
      this.loading = true;
      this.error = null;
      try {
        this.flowData = await Object(controlCenterApi["n" /* getEnergyFlow */])({
          ts: this.tsSelected,
          transformer: this.transformerSelected,
          feeder_33kva: this.feeder33kvaSelected,
          dt: 'All',
          dt_type: 'All'
        });
      } catch (err) {
        this.error = err.message || 'Failed to load energy flow data';
      } finally {
        this.loading = false;
      }
    },
    resetFlow() {
      this.resetKey++;
      this.hasStarted = false;
      this.tsSelected = 'All';
      this.transformerSelected = 'All';
      this.feeder33kvaSelected = 'All';
      this.fetchFlow();
      this.$nextTick(() => {
        if (this.$refs.scrollBox) {
          this.$refs.scrollBox.scrollLeft = 0;
          this.$refs.scrollBox.scrollTop = 0;
        }
      });
    },
    // Fetches every page of dt-availability/table once (it has no feeder filter, so there's
    // no way to ask the server for just one feeder's DTs) and indexes dt_name by
    // feeder_name, so DT cards can show real names instead of faking them. Triggered
    // lazily by the first DT card that mounts (FlowLane's requestDtNames prop), not
    // eagerly on page load, since a user may never drill that deep.
    async ensureDtNames() {
      if (this.dtNamesFetchStarted) return;
      this.dtNamesFetchStarted = true;
      const pageSize = 200;
      const byFeeder = new Map();
      const all = new Set();
      const addRows = rows => {
        (rows || []).forEach(r => {
          if (!r.dt_name) return;
          all.add(r.dt_name);
          if (r.feeder_name) {
            if (!byFeeder.has(r.feeder_name)) byFeeder.set(r.feeder_name, new Set());
            byFeeder.get(r.feeder_name).add(r.dt_name);
          }
        });
      };
      try {
        const first = await Object(controlCenterApi["l" /* getDtAvailabilityTable */])({
          dt_name: 'All',
          page: 1,
          page_size: pageSize
        });
        addRows(first.data);
        const totalPages = Math.min(first.total_pages || 1, 50);
        const rest = await Promise.all(Array.from({
          length: Math.max(0, totalPages - 1)
        }, (_, i) => Object(controlCenterApi["l" /* getDtAvailabilityTable */])({
          dt_name: 'All',
          page: i + 2,
          page_size: pageSize
        })));
        rest.forEach(r => addRows(r.data));
        this.dtNameIndex = {
          byFeeder,
          all: Array.from(all).sort()
        };
      } catch (err) {
        // Non-critical - DT cards just show "All DTs" only (no name list) if this fails.
        console.error('[energy_flow_diagram] failed to build DT name index', err);
        this.dtNamesFetchStarted = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/energy_flow_diagram.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_energy_flow_diagramvue_type_script_lang_js = (energy_flow_diagramvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/energy_flow_diagram.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_energy_flow_diagramvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "19490b90",
  "1fc1aef5"
  
)

/* harmony default export */ var energy_flow_diagram = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SideNav: __webpack_require__(78).default,LoadingOverlay: __webpack_require__(80).default,FlowLane: __webpack_require__(103).default,FlowDiagramCanvas: __webpack_require__(114).default})


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.d2f3c61.png";

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ThemeToggle.vue?vue&type=template&id=2e254ded
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', {
    scopedSlots: _vm._u([{
      key: "placeholder",
      fn: function () {
        return [_c('button', {
          staticClass: "theme-toggle-btn",
          attrs: {
            "type": "button",
            "disabled": ""
          }
        }, [_c('i', {
          staticClass: "material-icons"
        }, [_vm._v("dark_mode")]), _vm._v(" "), _c('span', [_vm._v("Dark mode")])])];
      },
      proxy: true
    }])
  }, [_c('button', {
    staticClass: "theme-toggle-btn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.$theme.toggle();
      }
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v(_vm._s(_vm.$theme.isDark ? 'light_mode' : 'dark_mode'))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$theme.isDark ? 'Light mode' : 'Dark mode'))])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ThemeToggle.vue?vue&type=template&id=2e254ded

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ThemeToggle.vue?vue&type=script&lang=js
/* harmony default export */ var ThemeTogglevue_type_script_lang_js = ({
  name: 'ThemeToggle'
});
// CONCATENATED MODULE: ./components/ThemeToggle.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ThemeTogglevue_type_script_lang_js = (ThemeTogglevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ThemeToggle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ThemeTogglevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "37bdce66"
  
)

/* harmony default export */ var ThemeToggle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3fada58a", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideNav/SideNav.vue?vue&type=template&id=8411a820&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<ul id=\"slide-out\" class=\"sidenav sidenav-fixed z-depth-0\" data-v-8411a820>", "</ul>", [_vm._ssrNode("<li class=\"logo-container center-align\" data-v-8411a820><img" + _vm._ssrAttr("src", __webpack_require__(75)) + " alt=\"Logo\" class=\"responsive-img\" style=\"width: 60px; margin-top: 20px;\" data-v-8411a820></li> "), _vm._ssrNode("<li class=\"theme-toggle-container\" data-v-8411a820>", "</li>", [_c('ThemeToggle')], 1), _vm._ssrNode(" "), _vm._l(_vm.menuItems, function (item) {
    return _vm._ssrNode("<li" + _vm._ssrClass(null, {
      active: _vm.isActive(item)
    }) + " data-v-8411a820>", "</li>", [_c('nuxt-link', {
      class: {
        'red-text text-darken-2': _vm.isActive(item)
      },
      attrs: {
        "to": item.url
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v(_vm._s(item.icon))]), _vm._v(" "), _c('b', {
      staticStyle: {
        "font-weight": "500",
        "font-size": "10px"
      }
    }, [_vm._v("\n                    " + _vm._s(item.title) + "\n                ")])])], 1);
  }), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-8411a820>", "</li>", [_c('nuxt-link', {
    staticClass: "red-text",
    attrs: {
      "to": "/"
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("lock")]), _vm._v(" "), _c('b', {
    staticStyle: {
      "font-weight": "500",
      "font-size": "10px"
    }
  }, [_vm._v("\n                    Logout\n                ")])])], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SideNav/SideNav.vue?vue&type=template&id=8411a820&scoped=true

// EXTERNAL MODULE: ./components/ThemeToggle.vue + 4 modules
var ThemeToggle = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideNav/SideNav.vue?vue&type=script&lang=js

/* harmony default export */ var SideNavvue_type_script_lang_js = ({
  name: 'SideNav',
  components: {
    ThemeToggle: ThemeToggle["default"]
  },
  data() {
    return {
      menuItems: [{
        title: 'End-To-End Energy Dashboard',
        icon: 'dashboard',
        url: '/end_to_end_energy_dashboard'
      }, {
        title: 'Energy Flow Diagram',
        icon: 'dashboard',
        url: '/energy_flow_diagram'
      }, {
        title: 'Control Center Dashboard',
        icon: 'dashboard',
        url: '/control_center_dashboard'
      }, {
        title: 'Availability Summary',
        icon: 'dashboard',
        url: '/availability_summary'
      }, {
        title: 'DT Availability',
        icon: 'dashboard',
        url: '/dt_availability'
      }, {
        title: 'MYTO Dashboard',
        icon: 'dashboard',
        url: '/myto_dashboard'
      }, {
        title: 'IDB Dashboard',
        icon: 'dashboard',
        url: '/idb_dashboard'
      }, {
        title: 'IDB Events',
        icon: 'dashboard',
        url: '/idb_events'
      }]
    };
  },
  methods: {
    isActive(item) {
      return this.$route.path === item.url;
    }
  }
});
// CONCATENATED MODULE: ./components/SideNav/SideNav.vue?vue&type=script&lang=js
 /* harmony default export */ var SideNav_SideNavvue_type_script_lang_js = (SideNavvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SideNav/SideNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SideNav_SideNavvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8411a820",
  "0f3f648e"
  
)

/* harmony default export */ var SideNav = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ThemeToggle: __webpack_require__(76).default})


/***/ }),

/***/ 79:
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
  add("6881e304", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoadingOverlay.vue?vue&type=template&id=702659cf&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "loading-overlay-fade"
    }
  }, [_vm.visible ? _c('div', {
    staticClass: "loading-overlay"
  }, [_c('svg', {
    staticClass: "waves-svg",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 1200 600",
      "preserveAspectRatio": "xMidYMid slice"
    }
  }, [_c('path', {
    staticClass: "e-wave w1",
    attrs: {
      "d": "M 0,300 C 50,220 100,380 150,300 C 200,220 250,380 300,300 C 350,220 400,380 450,300\n                   C 500,220 550,380 600,300 C 650,220 700,380 750,300 C 800,220 850,380 900,300\n                   C 950,220 1000,380 1050,300 C 1100,220 1150,380 1200,300\n                   C 1250,220 1300,380 1350,300 C 1400,220 1450,380 1500,300\n                   C 1550,220 1600,380 1650,300 C 1700,220 1750,380 1800,300\n                   C 1850,220 1900,380 1950,300 C 2000,220 2050,380 2100,300",
      "fill": "none",
      "stroke": "#00d4ff",
      "stroke-width": "2.5"
    }
  }), _vm._v(" "), _c('path', {
    staticClass: "e-wave w2",
    attrs: {
      "d": "M 0,340 C 50,270 100,410 150,340 C 200,270 250,410 300,340 C 350,270 400,410 450,340\n                   C 500,270 550,410 600,340 C 650,270 700,410 750,340 C 800,270 850,410 900,340\n                   C 950,270 1000,410 1050,340 C 1100,270 1150,410 1200,340\n                   C 1250,270 1300,410 1350,340 C 1400,270 1450,410 1500,340\n                   C 1550,270 1600,410 1650,340 C 1700,270 1750,410 1800,340\n                   C 1850,270 1900,410 1950,340 C 2000,270 2050,410 2100,340",
      "fill": "none",
      "stroke": "#5b7cfa",
      "stroke-width": "1.8"
    }
  }), _vm._v(" "), _c('path', {
    staticClass: "e-wave w3",
    attrs: {
      "d": "M 0,260 C 50,190 100,330 150,260 C 200,190 250,330 300,260 C 350,190 400,330 450,260\n                   C 500,190 550,330 600,260 C 650,190 700,330 750,260 C 800,190 850,330 900,260\n                   C 950,190 1000,330 1050,260 C 1100,190 1150,330 1200,260\n                   C 1250,190 1300,330 1350,260 C 1400,190 1450,330 1500,260\n                   C 1550,190 1600,330 1650,260 C 1700,190 1750,330 1800,260\n                   C 1850,190 1900,330 1950,260 C 2000,190 2050,330 2100,260",
      "fill": "none",
      "stroke": "#c87dff",
      "stroke-width": "1.2"
    }
  }), _vm._v(" "), _c('path', {
    staticClass: "e-wave w4",
    attrs: {
      "d": "M 0,400 C 50,340 100,460 150,400 C 200,340 250,460 300,400 C 350,340 400,460 450,400\n                   C 500,340 550,460 600,400 C 650,340 700,460 750,400 C 800,340 850,460 900,400\n                   C 950,340 1000,460 1050,400 C 1100,340 1150,460 1200,400\n                   C 1250,340 1300,460 1350,400 C 1400,340 1450,460 1500,400\n                   C 1550,340 1600,460 1650,400 C 1700,340 1750,460 1800,400\n                   C 1850,340 1900,460 1950,400 C 2000,340 2050,460 2100,400",
      "fill": "none",
      "stroke": "#00d4ff",
      "stroke-width": "0.8"
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "spark sp1"
  }), _vm._v(" "), _c('span', {
    staticClass: "spark sp2"
  }), _vm._v(" "), _c('span', {
    staticClass: "spark sp3"
  }), _vm._v(" "), _c('span', {
    staticClass: "spark sp4"
  }), _vm._v(" "), _c('span', {
    staticClass: "spark sp5"
  }), _vm._v(" "), _c('span', {
    staticClass: "spark sp6"
  }), _vm._v(" "), _c('div', {
    staticClass: "e-center"
  }, [_c('div', {
    staticClass: "e-ring r1"
  }), _vm._v(" "), _c('div', {
    staticClass: "e-ring r2"
  }), _vm._v(" "), _c('div', {
    staticClass: "e-ring r3"
  }), _vm._v(" "), _c('div', {
    staticClass: "logo-circle"
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-width": "70px",
      "max-height": "70px"
    },
    attrs: {
      "src": __webpack_require__(75),
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "e-brand"
  }, [_vm._v(_vm._s(_vm.message))])])]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LoadingOverlay.vue?vue&type=template&id=702659cf&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoadingOverlay.vue?vue&type=script&lang=js
// The login page's "electric panel" animation (logo, pulsing rings, scrolling waves), reused
// as a loading overlay: same animation, but with a translucent background instead of an opaque
// one so it overlays existing dashboard content rather than replacing it.
/* harmony default export */ var LoadingOverlayvue_type_script_lang_js = ({
  name: 'LoadingOverlay',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: 'Loading live data…'
    }
  }
});
// CONCATENATED MODULE: ./components/LoadingOverlay.vue?vue&type=script&lang=js
 /* harmony default export */ var components_LoadingOverlayvue_type_script_lang_js = (LoadingOverlayvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LoadingOverlay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LoadingOverlayvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "702659cf",
  "695f3a58"
  
)

/* harmony default export */ var LoadingOverlay = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_8411a820_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_8411a820_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_8411a820_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_8411a820_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_8411a820_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dashboard-wrapper[data-v-8411a820]{min-height:100vh}.dashboard-wrapper[data-v-8411a820],.sidenav[data-v-8411a820]{background-color:var(--bg-sidenav)}.sidenav[data-v-8411a820]{border-right:1px solid var(--border-color);width:260px}.sidenav li>a[data-v-8411a820]{align-items:center;display:flex;height:auto;line-height:1.3;min-height:48px;padding:10px 32px}.sidenav li>a>i.material-icons[data-v-8411a820]{flex-shrink:0;height:auto;line-height:1.3}.theme-toggle-container[data-v-8411a820]{padding:0 16px}.main-content[data-v-8411a820]{padding-left:280px;padding-right:20px;padding-top:20px}.stats-card[data-v-8411a820]{border-radius:12px;position:relative}.icon-circle[data-v-8411a820]{align-items:center;border-radius:50%;display:flex;height:50px;justify-content:center;margin-right:15px;width:50px}.stats-text .value[data-v-8411a820]{font-size:24px;font-weight:700}.stats-text p[data-v-8411a820]{font-size:12px;margin:0}.badge[data-v-8411a820]{border-radius:4px!important;position:absolute;right:15px;top:15px}.mini-chart-card[data-v-8411a820]{border-radius:12px;margin-bottom:10px}.tiny-text[data-v-8411a820]{font-size:11px;margin-bottom:5px}.border-right[data-v-8411a820]{border-right:1px solid var(--border-color)}.tabs[data-v-8411a820]{background:transparent;border-bottom:1px solid var(--border-strong);margin-bottom:20px}.tabs .tab a[data-v-8411a820]{color:var(--text-muted);text-transform:none}.tabs .tab a.active[data-v-8411a820]{border-bottom:2px solid #e91e63}@media only screen and (max-width:992px){.main-content[data-v-8411a820]{padding-left:20px}}", ""]);
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

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOverlay_vue_vue_type_style_index_0_id_702659cf_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOverlay_vue_vue_type_style_index_0_id_702659cf_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOverlay_vue_vue_type_style_index_0_id_702659cf_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOverlay_vue_vue_type_style_index_0_id_702659cf_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOverlay_vue_vue_type_style_index_0_id_702659cf_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-overlay[data-v-702659cf]{align-items:center;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:linear-gradient(160deg,rgba(42,3,0,.6),rgba(107,13,0,.55) 40%,rgba(231,83,9,.5));border-radius:inherit;bottom:0;display:flex;justify-content:center;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:1500}.loading-overlay-fade-enter-active[data-v-702659cf],.loading-overlay-fade-leave-active[data-v-702659cf]{transition:opacity .2s ease}.loading-overlay-fade-enter[data-v-702659cf],.loading-overlay-fade-leave-to[data-v-702659cf]{opacity:0}.waves-svg[data-v-702659cf]{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.e-wave[data-v-702659cf]{animation:loading-waveScroll-702659cf linear infinite;filter:drop-shadow(0 0 6px currentColor);stroke-opacity:.6}.w1[data-v-702659cf]{animation-duration:6s;filter:drop-shadow(0 0 8px rgba(255,255,255,.8));stroke:#fff;stroke-opacity:.75}.w2[data-v-702659cf]{animation-duration:9s;filter:drop-shadow(0 0 6px #ffd180);stroke:#ffd180;stroke-opacity:.6}.w3[data-v-702659cf]{animation-duration:7s;filter:drop-shadow(0 0 5px #ffab76);stroke:#ffab76;stroke-opacity:.45}.w4[data-v-702659cf]{animation-duration:11s;filter:drop-shadow(0 0 4px #fff3e0);stroke:#fff3e0;stroke-opacity:.25}@keyframes loading-waveScroll-702659cf{0%{transform:translateX(0)}to{transform:translateX(-600px)}}.spark[data-v-702659cf]{animation:loading-sparkFloat-702659cf linear infinite;border-radius:50%;box-shadow:0 0 10px 2px #fff;height:4px;opacity:0;position:absolute;width:4px}.sp1[data-v-702659cf],.spark[data-v-702659cf]{background:#fff}.sp1[data-v-702659cf]{animation-delay:0s;animation-duration:5s;bottom:10%;box-shadow:0 0 10px 2px hsla(0,0%,100%,.8);left:15%}.sp2[data-v-702659cf]{animation-delay:1.2s;animation-duration:7s;background:#ffd180;bottom:20%;box-shadow:0 0 10px 2px #ffd180;left:30%}.sp3[data-v-702659cf]{animation-delay:.5s;animation-duration:6s;background:#ffab76;bottom:5%;box-shadow:0 0 10px 2px #ffab76;left:55%}.sp4[data-v-702659cf]{animation-delay:2s;animation-duration:8s;background:#fff;bottom:15%;box-shadow:0 0 10px 2px hsla(0,0%,100%,.8);left:70%}.sp5[data-v-702659cf]{animation-delay:.8s;animation-duration:5.5s;background:#ffd180;bottom:30%;box-shadow:0 0 10px 2px #ffd180;left:82%}.sp6[data-v-702659cf]{animation-delay:3s;animation-duration:9s;background:#ffab76;bottom:8%;box-shadow:0 0 10px 2px #ffab76;left:45%}@keyframes loading-sparkFloat-702659cf{0%{opacity:0;transform:translateY(0) scale(1)}10%{opacity:1}80%{opacity:.6}to{opacity:0;transform:translateY(-300px) scale(.3)}}.e-center[data-v-702659cf]{align-items:center;display:flex;flex-direction:column;gap:10px;position:relative;z-index:2}.e-ring[data-v-702659cf]{animation:loading-ringPulse-702659cf ease-out infinite;border:1px solid rgba(255,220,160,.5);border-radius:50%;position:absolute}.r1[data-v-702659cf]{animation-delay:0s;height:120px;width:120px}.r1[data-v-702659cf],.r2[data-v-702659cf]{animation-duration:2.4s}.r2[data-v-702659cf]{animation-delay:.6s;height:180px;width:180px}.r3[data-v-702659cf]{animation-delay:1.2s;animation-duration:2.4s;height:240px;width:240px}@keyframes loading-ringPulse-702659cf{0%{opacity:.8;transform:scale(.8)}to{opacity:0;transform:scale(1.4)}}.logo-circle[data-v-702659cf]{align-items:center;background:#fff;border-radius:50%;box-shadow:0 0 30px hsla(0,0%,100%,.4),0 4px 20px rgba(0,0,0,.2);display:flex;height:90px;justify-content:center;width:90px}.e-brand[data-v-702659cf]{color:#fff;font-size:14px;font-weight:600;letter-spacing:.5px;margin:6px 0 0;text-align:center;text-shadow:0 0 14px rgba(255,200,100,.7)}@media only screen and (max-width:600px){.r1[data-v-702659cf]{height:90px;width:90px}.r2[data-v-702659cf]{height:135px;width:135px}.r3[data-v-702659cf]{height:180px;width:180px}.logo-circle[data-v-702659cf]{height:70px;width:70px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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
//# sourceMappingURL=energy_flow_diagram.js.map