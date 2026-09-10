<template>
    <div class="flow-row">
        <div class="flow-card-col" :class="{ 'has-right': !!forwardKind }">
            <div class="flow-card" :class="{ 'flow-card-updating': dtLocalLoading }" ref="cardEl">
                <p class="flow-card-title">{{ title }}</p>

                <div class="flow-filters">
                    <div class="flow-filter">
                        <select :value="selected" @change="selected = $event.target.value">
                            <option v-if="mode === 'level'" value="" disabled>-- Select --</option>
                            <option :value="allValue">{{ allValue }}</option>
                            <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
                        </select>
                        <i class="material-icons tiny">arrow_drop_down</i>
                    </div>
                </div>

                <p class="flow-total-label">Total Energy</p>
                <p class="flow-total-value">{{ fmt(total) }} MWH</p>

                <template v-if="mode !== 'customer'">
                    <div class="flow-bar">
                        <div class="flow-bar-fill" :style="{ width: outgoingPct + '%' }"></div>
                        <div class="flow-bar-loss" :style="{ width: lossPct + '%' }"></div>
                    </div>
                    <div class="flow-stats-row">
                        <div class="flow-stat">
                            <span class="flow-stat-pct">{{ outgoingPct }}% Outgoing</span>
                            <span class="flow-stat-val">{{ fmt(outgoingVal) }} MWH</span>
                        </div>
                        <div class="flow-stat right">
                            <span class="flow-stat-pct loss">{{ lossPct }}% Loss</span>
                            <span class="flow-stat-val">{{ fmt(lossVal) }} MWH</span>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="flow-bar single">
                        <div class="flow-bar-fill" :style="{ width: fillPct + '%' }"></div>
                    </div>
                </template>

                <div class="flow-divider"></div>

                <div class="flow-bottom-row">
                    <span>{{ bottomLabel }}</span>
                    <b>{{ bottomVal }}</b>
                </div>
            </div>

            <!-- DT always drops straight down from whatever card is calling
                 it - both when every reachable child is a dead end (per
                 static/TSrelationship.xlsx branches with nothing beneath
                 them) and when it's a mix of "continues normally" and "dead
                 end" (only possible when "All" fans out several branches).
                 Matches the reference Figma energy flow diagram, where e.g.
                 33kV Outgoing Feeders drops straight down to a DT card
                 sitting right under it - never inline with the rightward
                 chain, and never under wherever that chain happens to end.
                 The connecting curve itself is drawn by FlowDiagramCanvas,
                 modeled on static/PHOTO-2026-09-09-20-46-09.jpg. -->
            <div v-if="dtBelow" class="flow-below-branch">
                <FlowLane
                    ref="belowChild"
                    :key="selfPathKey"
                    mode="dt"
                    :path-key="selfPathKey"
                    :incoming-total="outgoingVal"
                    :connector-api="connectorApi"
                    :flow-data="flowData"
                    :on-filter-change="onFilterChange"
                    :dt-name-index="dtNameIndex"
                    :request-dt-names="requestDtNames"
                />
            </div>
        </div>

        <template v-if="forwardKind">
            <FlowLane
                v-if="forwardKind === 'continue'"
                ref="rightChild"
                :key="selfPathKey"
                mode="level"
                :level="level + 1"
                :node-list="nonEmptyChildren"
                :path-key="selfPathKey"
                :incoming-total="outgoingVal"
                :connector-api="connectorApi"
                :flow-data="flowData"
                :on-filter-change="onFilterChange"
                :dt-name-index="dtNameIndex"
                :request-dt-names="requestDtNames"
            />
            <FlowLane
                v-else-if="forwardKind === 'customer'"
                ref="rightChild"
                :key="selfPathKey"
                mode="customer"
                :path-key="selfPathKey"
                :incoming-total="outgoingVal"
                :connector-api="connectorApi"
                :flow-data="dtLocalFlowData || flowData"
                :on-filter-change="onFilterChange"
                :dt-name-index="dtNameIndex"
                :request-dt-names="requestDtNames"
            />
        </template>
    </div>
</template>

<script>
import { LEVEL_LABELS, LEVEL_COUNT, LEVEL_RESPONSE_KEYS, LEVEL_COUNT_KEYS, FILTERABLE_LEVEL_COUNT, seededRange, fmt, extractFeederFromPathKey } from '~/assets/js/energyFlowSim'
import { getEnergyFlow } from '~/js_modules/controlCenterApi'
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

export default {
    name: 'FlowLane',
    props: {
        mode: { type: String, default: 'level' }, // 'level' | 'dt' | 'customer'
        level: { type: Number, default: 0 },
        nodeList: { type: Array, default: () => [] },
        pathKey: { type: String, default: '' },
        incomingTotal: { type: Number, default: null },
        // The FlowDiagramCanvas instance (has register()/unregister()) -
        // passed as a plain prop and threaded down through every recursive
        // level, rather than via provide/inject, since inject through
        // default slot content is ambiguous in Vue 2.
        connectorApi: { type: Object, default: null },
        // Latest GET /energy-flow response (or null while loading/unfetched), threaded down
        // the same way as connectorApi. Only ts/transformer/feeder_33kva/dt/dt_type are real
        // API filters - see the comment atop assets/js/energyFlowSim.js.
        flowData: { type: Object, default: null },
        // Called as onFilterChange({ level, value }) when a TS/Transformer/33kV Feeder card's
        // selection changes, so the page can refetch. Not called for deeper levels since the
        // API has no param for them.
        onFilterChange: { type: Function, default: null },
        // { byFeeder: Map<feederName, Set<dtName>>, all: string[] } built from real
        // dt-availability/table rows by the page (see ensureDtNames() there), or null before
        // that's been requested/has finished loading.
        dtNameIndex: { type: Object, default: null },
        // Lets a DT card (mode === 'dt') ask the page to start building dtNameIndex the first
        // time one is actually rendered, rather than eagerly on page load.
        requestDtNames: { type: Function, default: null }
    },
    data() {
        return {
            selected: this.mode === 'level' ? '' : (this.mode === 'dt' ? 'All DTs' : 'All'),
            // Set only when this specific DT card has picked a named DT - overrides flowData
            // for THIS card and its Customer child only (see the customer FlowLane's :flow-data
            // binding below), so picking a DT in one branch never changes numbers shown
            // elsewhere in the diagram.
            dtLocalFlowData: null,
            dtLocalLoading: false
        }
    },
    watch: {
        selected(val) {
            if (this.mode === 'level') {
                // Only meaningful for the root (TS) card - the page listens on it
                // alone to know when to show the Reset button.
                this.$emit('change', val)
                if (this.level < FILTERABLE_LEVEL_COUNT && this.onFilterChange) {
                    this.onFilterChange({ level: this.level, value: val })
                }
            } else if (this.mode === 'dt') {
                this.fetchDtFlow(val)
            }
        }
    },
    mounted() {
        this.$nextTick(this.syncConnectors)
        if (this.mode === 'dt' && this.requestDtNames) this.requestDtNames()
    },
    updated() {
        this.$nextTick(this.syncConnectors)
    },
    beforeDestroy() {
        if (!this.connectorApi) return
        this.connectorApi.unregister(`${this._uid}:right`)
        this.connectorApi.unregister(`${this._uid}:below`)
    },
    computed: {
        title() {
            if (this.mode === 'level') return LEVEL_LABELS[this.level]
            if (this.mode === 'dt') return 'DT'
            return 'Customer'
        },
        allValue() {
            return this.mode === 'dt' ? 'All DTs' : 'All'
        },
        options() {
            if (this.mode === 'level') {
                const set = new Set()
                this.nodeList.forEach((n) => Object.keys(n).forEach((k) => set.add(k)))
                return Array.from(set).sort()
            }
            if (this.mode === 'dt') {
                if (!this.dtNameIndex) return []
                const feeder = extractFeederFromPathKey(this.pathKey)
                if (feeder && this.dtNameIndex.byFeeder.has(feeder)) {
                    return Array.from(this.dtNameIndex.byFeeder.get(feeder)).sort()
                }
                // DT hanging off an earlier level (Path B dead-end) or no match found for this
                // specific feeder in the sample we fetched - fall back to every real DT name
                // known, rather than showing nothing or a fake name.
                return this.dtNameIndex.all
            }
            return []
        },
        selfPathKey() {
            return `${this.pathKey}>${this.title}=${this.selected}`
        },
        resolvedNodeList() {
            if (this.mode !== 'level' || this.selected === '') return []
            const list = []
            this.nodeList.forEach((n) => {
                if (this.selected === 'All') {
                    Object.values(n).forEach((c) => list.push(c))
                } else if (n[this.selected]) {
                    list.push(n[this.selected])
                }
            })
            return list
        },
        nonEmptyChildren() {
            if (this.level >= LEVEL_COUNT - 1) return []
            return this.resolvedNodeList.filter((n) => Object.keys(n).length > 0)
        },
        emptyChildren() {
            return this.resolvedNodeList.filter((n) => Object.keys(n).length === 0)
        },
        forwardKind() {
            if (this.mode === 'level') {
                if (this.selected === '') return null
                return this.nonEmptyChildren.length > 0 ? 'continue' : null
            }
            if (this.mode === 'dt') return 'customer'
            return null
        },
        // DT always renders as a downward branch under this card - whether
        // every reachable child is a dead end, or only some of them are.
        dtBelow() {
            return this.mode === 'level' && this.selected !== '' && this.emptyChildren.length > 0
        },
        // The /energy-flow section matching this card, if flowData has loaded. Note this is
        // NOT scoped to this card's own local selection for level >= 3 (ISS onward) - see the
        // comment atop assets/js/energyFlowSim.js. Levels 0-2 and dt/customer ARE accurate to
        // whatever TS/Transformer/33kV Feeder is currently selected, since those drive the fetch.
        apiSection() {
            if (this.mode === 'dt') {
                // A DT-specific fetch (see fetchDtFlow) takes priority over the shared
                // flowData's dt=All aggregate, once one has loaded for this card.
                if (this.dtLocalFlowData) return this.dtLocalFlowData.dts || null
                return this.flowData ? (this.flowData.dts || null) : null
            }
            if (!this.flowData) return null
            if (this.mode === 'level') return this.flowData[LEVEL_RESPONSE_KEYS[this.level]] || null
            if (this.mode === 'customer') return this.flowData.customer || null
            return null
        },
        total() {
            if (this.apiSection && this.apiSection.total_energy_mwh != null) return this.apiSection.total_energy_mwh
            if (this.incomingTotal != null) return this.incomingTotal
            // Fallback while flowData hasn't loaded yet (covered by the page's loading overlay).
            return Math.round(seededRange(`TOTAL:${this.selfPathKey}`, 40000, 480000))
        },
        lossPct() {
            if (this.mode === 'customer') return 0
            if (this.apiSection && this.apiSection.loss_pct != null) return this.apiSection.loss_pct
            const [min, max] = this.mode === 'dt' ? [8, 18] : [2, 12]
            return Math.round(seededRange(`LOSS:${this.selfPathKey}`, min, max))
        },
        outgoingPct() {
            if (this.apiSection && this.apiSection.transmission_pct != null) return this.apiSection.transmission_pct
            return 100 - this.lossPct
        },
        outgoingVal() {
            if (this.apiSection && this.apiSection.transmission_mwh != null) return this.apiSection.transmission_mwh
            return (this.total * this.outgoingPct) / 100
        },
        lossVal() {
            if (this.apiSection && this.apiSection.loss_mwh != null) return this.apiSection.loss_mwh
            return this.total - this.outgoingVal
        },
        fillPct() {
            // customer has no comparable real percentage in the API response - a full bar
            // beats fabricating a number that looks meaningful but isn't.
            if (this.apiSection) return 100
            return Math.round(seededRange(`FILL:${this.selfPathKey}`, 82, 96))
        },
        bottomLabel() {
            if (this.mode === 'customer') return 'Total Customers'
            if (this.mode === 'dt') return 'Total DTs'
            return `Total ${this.title}`
        },
        bottomVal() {
            if (this.mode === 'customer') {
                if (this.apiSection && this.apiSection.total_customers != null) return this.fmt(this.apiSection.total_customers)
                return this.fmt(Math.round(seededRange(`CUST:${this.selfPathKey}`, 800, 210000)))
            }
            if (this.mode === 'dt') {
                if (this.apiSection) {
                    return this.fmt((this.apiSection.total_public_dts || 0) + (this.apiSection.total_private_dts || 0))
                }
                return this.options.length
            }
            if (this.apiSection) {
                const countKey = LEVEL_COUNT_KEYS[this.level]
                if (this.apiSection[countKey] != null) return this.fmt(this.apiSection[countKey])
            }
            return this.options.length
        }
    },
    methods: {
        fmt,
        // Called when THIS DT card's own dropdown changes. Refetches /energy-flow with the
        // same ts/transformer/feeder_33kva the shared flowData was fetched with, plus this
        // specific dt name, and stores the result locally - only this card and its Customer
        // child (via the :flow-data="dtLocalFlowData || flowData" binding below) read it.
        // Other DT cards elsewhere in the diagram, and the main TS..11kV Outgoing Feeder
        // chain, keep reading the shared flowData untouched.
        async fetchDtFlow(dtName) {
            if (!dtName || dtName === 'All DTs' || dtName === 'All') {
                this.dtLocalFlowData = null
                return
            }
            this.dtLocalLoading = true
            try {
                const base = this.flowData || {}
                this.dtLocalFlowData = await getEnergyFlow({
                    ts: (base.ts && base.ts.name) || 'All',
                    transformer: (base.transformer_capacity && base.transformer_capacity.selected) || 'All',
                    feeder_33kva: (base.feeders_33kva && base.feeders_33kva.selected) || 'All',
                    dt: dtName,
                    dt_type: 'All'
                })
            } catch (err) {
                // Non-critical - falls back to the shared flowData's dt=All aggregate.
                console.error('[FlowLane] failed to load DT-specific energy flow', err)
                this.dtLocalFlowData = null
            } finally {
                this.dtLocalLoading = false
            }
        },
        syncConnectors() {
            if (!this.connectorApi) return
            const rightId = `${this._uid}:right`
            const belowId = `${this._uid}:below`
            const rightChild = this.$refs.rightChild
            if ((this.forwardKind === 'continue' || this.forwardKind === 'customer') && rightChild && rightChild.$refs.cardEl) {
                this.connectorApi.register(rightId, this.$refs.cardEl, rightChild.$refs.cardEl, 'right')
            } else {
                this.connectorApi.unregister(rightId)
            }
            const belowChild = this.$refs.belowChild
            if (this.dtBelow && belowChild && belowChild.$refs.cardEl) {
                this.connectorApi.register(belowId, this.$refs.cardEl, belowChild.$refs.cardEl, 'down')
            } else {
                this.connectorApi.unregister(belowId)
            }
        }
    }
}
</script>

<style scoped>
/* Card-to-card connectors are curved SVG paths drawn by the ancestor
   FlowDiagramCanvas (see components/FlowDiagramCanvas.vue), not DOM arrows -
   these gaps just leave room for the curve. */
.flow-row {
    display: flex;
    align-items: flex-start;
}

.flow-card-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
}

.flow-card-col.has-right {
    margin-right: 70px;
}

.flow-below-branch {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 60px;
}

.flow-card {
    position: relative;
    width: 230px;
    flex-shrink: 0;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 14px 16px;
    box-shadow: 0 2px 8px var(--shadow-color);
    align-self: flex-start;
    transition: opacity 0.15s ease;
}

.flow-card-updating {
    opacity: 0.55;
}

.flow-card-title {
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 10px;
}

.flow-filters {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 10px;
}

.flow-filter {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 12px;
    color: var(--text-secondary);
}

.flow-filter select {
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 12px;
    width: 100%;
    padding: 0;
    padding-right: 18px;
    height: auto;
    cursor: pointer;
}

.flow-filter select:focus {
    outline: none;
}

.flow-filter .material-icons {
    font-size: 16px !important;
    color: var(--text-muted);
    pointer-events: none;
    position: absolute;
    right: 6px;
}

.flow-total-label { font-size: 11px; color: var(--text-muted); margin: 0; }
.flow-total-value { font-size: 15px; font-weight: 700; color: #2fa360; margin: 2px 0 8px; }

.flow-bar {
    display: flex;
    height: 6px;
    border-radius: 4px;
    overflow: hidden;
    background: var(--border-color);
    margin-bottom: 8px;
}

.flow-bar-fill { background: #3ec97a; height: 100%; }
.flow-bar-loss { background: #e05353; height: 100%; }

.flow-stats-row {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    margin-bottom: 8px;
    gap: 8px;
}

.flow-stat { display: flex; flex-direction: column; gap: 2px; }
.flow-stat.right { align-items: flex-end; text-align: right; }
.flow-stat-pct { color: var(--text-secondary); font-weight: 600; }
.flow-stat-pct.loss { color: #c0392b; }
.flow-stat-val { color: var(--text-muted); }

.flow-divider { height: 1px; background: var(--divider); margin: 6px 0; }

.flow-bottom-row {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--text-secondary);
    padding-top: 4px;
}

.flow-bottom-row b { color: var(--text-primary); }
</style>
