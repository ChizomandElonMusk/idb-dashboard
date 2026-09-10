<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">

            <div class="avail-header">
                <h5 class="avail-title">Energy Flow Diagram</h5>
            </div>

            <div v-if="error" class="flow-error">
                Couldn't load live data: {{ error }}
                <button class="flow-retry" @click="fetchFlow">Retry</button>
            </div>

            <div class="card-panel flow-panel">
                <LoadingOverlay :visible="loading" />
                <div class="flow-path-row">
                    <p class="flow-path-desc">Select a Transmission Station to begin — each choice narrows the next step.</p>
                    <button v-if="hasStarted" type="button" class="flow-reset-btn" @click="resetFlow">
                        <i class="material-icons tiny">replay</i> Reset
                    </button>
                </div>
                <!-- <p class="flow-api-note">
                    Numbers reflect the live API for the selected TS / Transformer / 33kV Feeder. The API has no filter
                    for ISS, Transformer 2, 11kV Incomer or 11kV Outgoing Feeder individually, so cards past 33kV Feeder
                    show totals for "All" beneath your 33kV Feeder selection, not the specific node you've drilled into.
                </p> -->

                <div class="flow-scroll" ref="scrollBox">
                    <FlowDiagramCanvas ref="canvas">
                        <FlowLane
                            :key="resetKey"
                            mode="level"
                            :level="0"
                            :node-list="[tsTree]"
                            path-key=""
                            :connector-api="connectorApi"
                            :flow-data="flowData"
                            :on-filter-change="onFilterChange"
                            :dt-name-index="dtNameIndex"
                            :request-dt-names="ensureDtNames"
                            @change="onRootChange"
                        />
                    </FlowDiagramCanvas>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
import LoadingOverlay from '~/components/LoadingOverlay.vue'
import FlowDiagramCanvas from '~/components/FlowDiagramCanvas.vue'
import tsTree from '~/assets/data/ts_relationship.json'
import { getEnergyFlow, getDtAvailabilityTable } from '~/js_modules/controlCenterApi'
// The drill-down itself (TS -> Transformer -> 33kV Feeder -> ISS ->
// Transformer 2 -> 11kV Incomer -> 11kV Outgoing Feeder -> DT -> Customer,
// including the Path B "direct to DT" shortcut and its fork when a level's
// "All" selection mixes both) lives in the recursive <FlowLane> component -
// see components/FlowLane.vue. The numbers each card shows now come from
// GET /energy-flow (see static/api_live_responses3.md #2 and the header
// comment in assets/js/energyFlowSim.js for which levels are real filters).

export default {
    components: { SideNav, FlowDiagramCanvas, LoadingOverlay },
    data() {
        return {
            tsTree,
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
        }
    },
    async mounted() {
        this.connectorApi = this.$refs.canvas
        await this.fetchFlow()
    },
    methods: {
        onRootChange(val) {
            this.hasStarted = val !== ''
        },
        onFilterChange({ level, value }) {
            const v = value || 'All'
            if (level === 0) {
                this.tsSelected = v
                this.transformerSelected = 'All'
                this.feeder33kvaSelected = 'All'
            } else if (level === 1) {
                this.transformerSelected = v
                this.feeder33kvaSelected = 'All'
            } else if (level === 2) {
                this.feeder33kvaSelected = v
            }
            this.fetchFlow()
        },
        async fetchFlow() {
            this.loading = true
            this.error = null
            try {
                this.flowData = await getEnergyFlow({
                    ts: this.tsSelected,
                    transformer: this.transformerSelected,
                    feeder_33kva: this.feeder33kvaSelected,
                    dt: 'All',
                    dt_type: 'All'
                })
            } catch (err) {
                this.error = err.message || 'Failed to load energy flow data'
            } finally {
                this.loading = false
            }
        },
        resetFlow() {
            this.resetKey++
            this.hasStarted = false
            this.tsSelected = 'All'
            this.transformerSelected = 'All'
            this.feeder33kvaSelected = 'All'
            this.fetchFlow()
            this.$nextTick(() => {
                if (this.$refs.scrollBox) {
                    this.$refs.scrollBox.scrollLeft = 0
                    this.$refs.scrollBox.scrollTop = 0
                }
            })
        },
        // Fetches every page of dt-availability/table once (it has no feeder filter, so there's
        // no way to ask the server for just one feeder's DTs) and indexes dt_name by
        // feeder_name, so DT cards can show real names instead of faking them. Triggered
        // lazily by the first DT card that mounts (FlowLane's requestDtNames prop), not
        // eagerly on page load, since a user may never drill that deep.
        async ensureDtNames() {
            if (this.dtNamesFetchStarted) return
            this.dtNamesFetchStarted = true
            const pageSize = 200
            const byFeeder = new Map()
            const all = new Set()
            const addRows = (rows) => {
                (rows || []).forEach((r) => {
                    if (!r.dt_name) return
                    all.add(r.dt_name)
                    if (r.feeder_name) {
                        if (!byFeeder.has(r.feeder_name)) byFeeder.set(r.feeder_name, new Set())
                        byFeeder.get(r.feeder_name).add(r.dt_name)
                    }
                })
            }
            try {
                const first = await getDtAvailabilityTable({ dt_name: 'All', page: 1, page_size: pageSize })
                addRows(first.data)
                const totalPages = Math.min(first.total_pages || 1, 50)
                const rest = await Promise.all(
                    Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) =>
                        getDtAvailabilityTable({ dt_name: 'All', page: i + 2, page_size: pageSize })
                    )
                )
                rest.forEach((r) => addRows(r.data))
                this.dtNameIndex = { byFeeder, all: Array.from(all).sort() }
            } catch (err) {
                // Non-critical - DT cards just show "All DTs" only (no name list) if this fails.
                console.error('[energy_flow_diagram] failed to build DT name index', err)
                this.dtNamesFetchStarted = false
            }
        }
    }
}
</script>

<style scoped>
.dashboard-wrapper {
    background-color: var(--bg-page);
    min-height: 100vh;
}

.main-content {
    padding-left: 280px;
    padding-right: 20px;
    padding-top: 20px;
}

.avail-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.avail-title {
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.flow-panel {
    position: relative;
    border-radius: 14px;
    background: var(--bg-card);
    padding: 24px;
    min-height: 300px;
}

.flow-error {
    background: #fdecec;
    color: #c0392b;
    border-radius: 10px;
    padding: 10px 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
}

.flow-retry {
    background: #c0392b;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 4px 12px;
    font-size: 12px;
    cursor: pointer;
}

.flow-api-note {
    font-size: 12px;
    color: var(--text-muted);
    margin: -12px 0 18px;
}

.flow-path-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
    gap: 12px;
}

.flow-path-desc {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
}

.flow-reset-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 5px 12px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary);
    cursor: pointer;
    flex-shrink: 0;
}

.flow-reset-btn:hover { color: var(--text-primary); }

.flow-scroll {
    overflow: auto;
    padding-bottom: 8px;
}

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
    .avail-header { flex-direction: column; align-items: flex-start; gap: 12px; }
}
</style>
