<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">

            <div class="avail-header">
                <h5 class="avail-title">Energy Flow Diagram</h5>
                <div class="flow-path-tabs">
                    <button
                        v-for="opt in pathOptions"
                        :key="opt.key"
                        type="button"
                        :class="['flow-tab', { active: selectedPath === opt.key }]"
                        @click="selectedPath = opt.key"
                    >
                        {{ opt.label }}
                    </button>
                </div>
            </div>

            <div class="card-panel flow-panel">
                <div class="flow-path-row">
                    <p class="flow-path-desc">{{ activePath.description }}</p>
                    <button v-if="revealedCount > 1" type="button" class="flow-reset-btn" @click="resetFlow">
                        <i class="material-icons tiny">replay</i> Reset
                    </button>
                </div>

                <div class="flow-scroll">
                    <div class="flow-canvas">
                        <template v-for="(card, i) in visibleCards">
                            <div
                                :key="card.id"
                                :class="['flow-card', { 'is-frontier': isFrontier(i) }]"
                                @click="selectCard(i)"
                            >
                                <span v-if="isFrontier(i)" class="flow-card-hint">Click to continue</span>
                                <span v-else-if="i === visibleCards.length - 1" class="flow-card-hint complete">Flow complete</span>
                                <p class="flow-card-title">{{ card.title }}</p>

                                <div class="flow-filters">
                                    <div class="flow-filter" v-for="(f, fi) in card.filters" :key="fi">
                                        <span>{{ f }}</span>
                                        <i class="material-icons tiny">arrow_drop_down</i>
                                    </div>
                                </div>

                                <p class="flow-total-label">Total Energy</p>
                                <p class="flow-total-value">{{ card.total }}</p>

                                <template v-if="!card.single">
                                    <div class="flow-bar">
                                        <div class="flow-bar-fill" :style="{ width: card.leftPct + '%' }"></div>
                                        <div class="flow-bar-loss" :style="{ width: card.rightPct + '%' }"></div>
                                    </div>
                                    <div class="flow-stats-row">
                                        <div class="flow-stat">
                                            <span class="flow-stat-pct">{{ card.leftPct }}% {{ card.leftLabel }}</span>
                                            <span class="flow-stat-val">{{ card.leftVal }}</span>
                                        </div>
                                        <div class="flow-stat right">
                                            <span class="flow-stat-pct loss">{{ card.rightPct }}% {{ card.rightLabel }}</span>
                                            <span class="flow-stat-val">{{ card.rightVal }}</span>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="flow-bar single">
                                        <div class="flow-bar-fill" :style="{ width: card.fillPct + '%' }"></div>
                                    </div>
                                </template>

                                <div class="flow-divider"></div>

                                <template v-if="card.bottomRows">
                                    <div class="flow-bottom-row" v-for="(b, bi) in card.bottomRows" :key="bi">
                                        <span>{{ b.label }}</span>
                                        <b>{{ b.val }}</b>
                                    </div>
                                </template>
                                <div class="flow-bottom-row" v-else>
                                    <span>{{ card.bottomLabel }}</span>
                                    <b>{{ card.bottomVal }}</b>
                                </div>
                            </div>

                            <div v-if="i < visibleCards.length - 1" :key="card.id + '-arrow'" class="flow-arrow">
                                <i class="material-icons">arrow_forward</i>
                            </div>
                        </template>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
// The diagram renders one of two real network chains end-to-end, picked via the Path A / Path B
// tabs. Each node only declares its loss % and a starting total lives on the path (TS incoming
// energy); `computeChain` derives every other node's total from the previous node's outgoing
// energy, so the numbers on screen always satisfy outgoing + loss = total and
// nodeN.total === nodeN-1.outgoing — that invariant is what makes the view testable rather than
// a set of disconnected mock numbers.

export default {
    components: { SideNav },
    data() {
        return {
            selectedPath: 'A',
            revealedCount: 1,
            pathOptions: [
                { key: 'A', label: 'Path A' },
                { key: 'B', label: 'Path B' }
            ],
            pathDefs: {
                A: {
                    description: 'TS → Transformer → 33kV Feeder → ISS → Transformer 2 → 11kV Incomer → 11kV Outgoing Feeder → DT → Customer',
                    startTotal: 465899,
                    nodes: [
                        { id: 'a-ts', title: 'TS Incoming Energy', filters: ['Alausa TS'], lossPct: 0, bottomLabel: 'Total Feeder', bottomVal: 15 },
                        { id: 'a-transformer', title: 'Transformer', filters: ['T1'], lossPct: 3, bottomLabel: 'Total Feeder', bottomVal: 85 },
                        { id: 'a-feeder33', title: '33kV Feeder', filters: ['All'], lossPct: 8, bottomLabel: 'Total Feeder', bottomVal: 108 },
                        { id: 'a-iss', title: 'ISS', filters: ['All'], lossPct: 6, bottomLabel: 'Total ISS', bottomVal: 356 },
                        { id: 'a-transformer2', title: 'Transformer 2', filters: ['T2'], lossPct: 4, bottomLabel: 'Total Transformer', bottomVal: 16712 },
                        { id: 'a-incomer11', title: '11kV Incomer', filters: ['All'], lossPct: 5, bottomLabel: 'Total Incomer', bottomVal: 345 },
                        { id: 'a-outfeeder11', title: '11kV Outgoing Feeder', filters: ['All'], lossPct: 4, bottomLabel: 'Total Feeder', bottomVal: 85 },
                        { id: 'a-dt', title: 'DT', filters: ['All DTs', 'Public & Private'], lossPct: 15, bottomRows: [{ label: 'Total Public DTs', val: 9 }, { label: 'Total Private DTs', val: 6 }] },
                        { id: 'a-customer', title: 'Customer', filters: ['All'], customer: true, fillPct: 92, bottomLabel: 'Total Customers', bottomVal: '200,000' }
                    ]
                },
                B: {
                    description: 'TS → Transformer → 33kV Feeder → DT → Customer',
                    startTotal: 92450,
                    nodes: [
                        { id: 'b-ts', title: 'TS Incoming Energy', filters: ['Ikeja TS'], lossPct: 0, bottomLabel: 'Total Feeder', bottomVal: 4 },
                        { id: 'b-transformer', title: 'Transformer', filters: ['T1'], lossPct: 3, bottomLabel: 'Total Feeder', bottomVal: 20 },
                        { id: 'b-feeder33', title: '33kV Feeder', filters: ['All'], lossPct: 8, bottomLabel: 'Total Feeder', bottomVal: 26 },
                        { id: 'b-dt', title: 'DT', filters: ['All DTs'], lossPct: 15, bottomRows: [{ label: 'Total Public DTs', val: 3 }, { label: 'Total Private DTs', val: 2 }] },
                        { id: 'b-customer', title: 'Customer', filters: ['All'], customer: true, fillPct: 90, bottomLabel: 'Total Customers', bottomVal: '48,500' }
                    ]
                }
            }
        }
    },
    computed: {
        activePath() {
            return this.pathDefs[this.selectedPath]
        },
        flowCards() {
            return this.computeChain(this.activePath)
        },
        visibleCards() {
            return this.flowCards.slice(0, this.revealedCount)
        }
    },
    watch: {
        selectedPath() {
            this.revealedCount = 1
        }
    },
    methods: {
        isFrontier(i) {
            return i === this.visibleCards.length - 1 && this.revealedCount < this.flowCards.length
        },
        selectCard(i) {
            if (this.isFrontier(i)) {
                this.revealedCount++
            }
        },
        resetFlow() {
            this.revealedCount = 1
        },
        computeChain(pathDef) {
            let runningTotal = pathDef.startTotal

            return pathDef.nodes.map((n) => {
                if (n.customer) {
                    return {
                        id: n.id,
                        title: n.title,
                        filters: n.filters,
                        total: this.fmt(runningTotal) + ' MWH',
                        single: true,
                        fillPct: n.fillPct,
                        bottomLabel: n.bottomLabel,
                        bottomVal: n.bottomVal
                    }
                }

                const total = runningTotal
                const outgoingPct = 100 - n.lossPct
                const outgoingVal = (total * outgoingPct) / 100
                const lossVal = total - outgoingVal
                runningTotal = outgoingVal

                return {
                    id: n.id,
                    title: n.title,
                    filters: n.filters,
                    total: this.fmt(total) + ' MWH',
                    leftLabel: 'Outgoing',
                    rightLabel: 'Loss',
                    leftPct: outgoingPct,
                    rightPct: n.lossPct,
                    leftVal: this.fmt(outgoingVal) + ' MWH',
                    rightVal: this.fmt(lossVal) + ' MWH',
                    bottomLabel: n.bottomLabel,
                    bottomVal: n.bottomVal,
                    bottomRows: n.bottomRows
                }
            })
        },
        fmt(n) {
            return Number(n).toLocaleString('en-US', { maximumFractionDigits: 2 })
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

.flow-path-tabs {
    display: flex;
    gap: 8px;
}

.flow-tab {
    border: 1px solid var(--border-color);
    background: var(--bg-card);
    color: var(--text-secondary);
    border-radius: 8px;
    padding: 7px 16px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}

.flow-tab.active {
    background: #2266ee;
    border-color: #2266ee;
    color: #fff;
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
    overflow-x: auto;
    padding-bottom: 8px;
}

.flow-canvas {
    display: flex;
    align-items: center;
    min-width: max-content;
}

.flow-arrow {
    flex-shrink: 0;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--border-strong);
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
    animation: flow-card-in 0.25s ease;
}

.flow-card.is-frontier {
    cursor: pointer;
    border-color: #2266ee;
    box-shadow: 0 0 0 3px rgba(34, 102, 238, 0.15), 0 2px 8px var(--shadow-color);
}

.flow-card.is-frontier:hover {
    box-shadow: 0 0 0 4px rgba(34, 102, 238, 0.22), 0 2px 8px var(--shadow-color);
}

.flow-card-hint {
    position: absolute;
    top: -11px;
    left: 50%;
    transform: translateX(-50%);
    background: #2266ee;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 10px;
    white-space: nowrap;
}

.flow-card-hint.complete {
    background: #2fa360;
}

@keyframes flow-card-in {
    from { opacity: 0; transform: translateX(-12px); }
    to { opacity: 1; transform: translateX(0); }
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 12px;
    color: var(--text-secondary);
}

.flow-filter .material-icons { font-size: 16px !important; color: var(--text-muted); }

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

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
    .avail-header { flex-direction: column; align-items: flex-start; gap: 12px; }
}
</style>
