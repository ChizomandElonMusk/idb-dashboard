<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">

            <div class="avail-header">
                <h5 class="avail-title">Energy Flow Diagram</h5>
            </div>

            <div class="card-panel flow-panel">
                <div class="flow-path-row">
                    <p class="flow-path-desc">Select a Transmission Station to begin — each choice narrows the next step.</p>
                    <button v-if="hasStarted" type="button" class="flow-reset-btn" @click="resetFlow">
                        <i class="material-icons tiny">replay</i> Reset
                    </button>
                </div>

                <div class="flow-scroll" ref="scrollBox">
                    <FlowDiagramCanvas ref="canvas">
                        <FlowLane
                            :key="resetKey"
                            mode="level"
                            :level="0"
                            :node-list="[tsTree]"
                            path-key=""
                            :connector-api="connectorApi"
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
import FlowDiagramCanvas from '~/components/FlowDiagramCanvas.vue'
import tsTree from '~/assets/data/ts_relationship.json'
// The drill-down itself (TS -> Transformer -> 33kV Feeder -> ISS ->
// Transformer 2 -> 11kV Incomer -> 11kV Outgoing Feeder -> DT -> Customer,
// including the Path B "direct to DT" shortcut and its fork when a level's
// "All" selection mixes both) lives in the recursive <FlowLane> component -
// see components/FlowLane.vue.

export default {
    components: { SideNav, FlowDiagramCanvas },
    data() {
        return {
            tsTree,
            resetKey: 0,
            hasStarted: false,
            connectorApi: null
        }
    },
    mounted() {
        this.connectorApi = this.$refs.canvas
    },
    methods: {
        onRootChange(val) {
            this.hasStarted = val !== ''
        },
        resetFlow() {
            this.resetKey++
            this.hasStarted = false
            this.$nextTick(() => {
                if (this.$refs.scrollBox) {
                    this.$refs.scrollBox.scrollLeft = 0
                    this.$refs.scrollBox.scrollTop = 0
                }
            })
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
    border-radius: 14px;
    background: var(--bg-card);
    padding: 24px;
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
