<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">

            <div class="avail-header">
                <h5 class="avail-title">Energy Flow Diagram</h5>
            </div>

            <div class="card-panel flow-panel">
                <div class="flow-scroll">
                    <div class="flow-canvas">

                        <div
                            v-for="c in connectors"
                            :key="c.id"
                            :class="['connector', c.type]"
                            :style="{ gridColumn: c.col, gridRow: c.row }"
                        ></div>

                        <div
                            v-for="card in flowCards"
                            :key="card.id"
                            class="flow-card"
                            :style="{ gridColumn: card.col, gridRow: card.row }"
                        >
                            <p class="flow-card-title">{{ card.title }}</p>

                            <div class="flow-filters">
                                <div class="flow-filter" v-for="(f, i) in card.filters" :key="i">
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
                                <div class="flow-bottom-row" v-for="(b, i) in card.bottomRows" :key="i">
                                    <span>{{ b.label }}</span>
                                    <b>{{ b.val }}</b>
                                </div>
                            </template>
                            <div class="flow-bottom-row" v-else>
                                <span>{{ card.bottomLabel }}</span>
                                <b>{{ card.bottomVal }}</b>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
// UI-first rebuild to match the Figma "Energy Flow Diagram" screen exactly. Data below is static
// mock content taken from the Figma mockup — real API wiring will be reintroduced once the
// backend team ships the matching endpoint shape.

export default {
    components: { SideNav },
    data() {
        return {
            flowCards: [
                {
                    id: 'tc', title: 'Transformer Capacity', filters: ['All'],
                    total: '265,899 MWH',
                    leftLabel: 'Outgoing', rightLabel: 'Loss', leftPct: 90, rightPct: 10,
                    leftVal: '216,487.71 MWH', rightVal: '0 MWH',
                    bottomLabel: 'Total Feeder', bottomVal: 3,
                    col: 1, row: 1
                },
                {
                    id: 'ofeeders', title: '33KVA Outgoing Feeders', filters: ['All'],
                    total: '240,043 MWH',
                    leftLabel: 'Outgoing', rightLabel: 'Loss', leftPct: 85, rightPct: 15,
                    leftVal: '216,487.71 MWH', rightVal: '0 MWH',
                    bottomLabel: 'Total Feeder', bottomVal: 300,
                    col: 3, row: 1
                },
                {
                    id: 'iss', title: 'ISS', filters: ['All'],
                    total: '203,890 MWH',
                    leftLabel: 'Outgoing', rightLabel: 'Loss', leftPct: 90, rightPct: 10,
                    leftVal: '190,543 MWH', rightVal: '20,832 MWH',
                    bottomLabel: 'Total Feeder', bottomVal: 30,
                    col: 5, row: 1
                },
                {
                    id: 'transformer', title: 'Transformer', filters: ['T2'],
                    total: '170,890 MWH',
                    leftLabel: 'Incoming', rightLabel: 'Loss', leftPct: 90, rightPct: 10,
                    leftVal: '158,000 MWH', rightVal: '0 MWH',
                    bottomLabel: 'Total Feeder', bottomVal: 15,
                    col: 7, row: 1
                },
                {
                    id: 'ts', title: 'TS Incoming Energy', filters: ['Alausa TS'],
                    total: '465,899 MWH',
                    leftLabel: 'Incoming', rightLabel: 'Loss', leftPct: 100, rightPct: 0,
                    leftVal: '465,899 MWH', rightVal: '0 MWH',
                    bottomLabel: 'Total Feeder', bottomVal: 30,
                    col: 1, row: 3
                },
                {
                    id: 'dtsAll', title: 'DTs', filters: ['All DTs', 'Public & Private'],
                    total: '40,320 MWH',
                    leftLabel: 'Incoming', rightLabel: 'Loss', leftPct: 80, rightPct: 20,
                    leftVal: '216,487.71 MWH', rightVal: '0 MWH',
                    bottomRows: [
                        { label: 'Total Public DTs', val: 3 },
                        { label: 'Total Private DTs', val: 4 }
                    ],
                    col: 3, row: 3
                },
                {
                    id: 'cust1', title: 'Customer', filters: ['T2'],
                    total: '10,396.77 MWH',
                    single: true, fillPct: 88,
                    bottomLabel: 'Total Customers', bottomVal: '200000',
                    col: 5, row: 3
                },
                {
                    id: 'incomer', title: '11KVA Incomer', filters: ['All'],
                    total: '10,396.77 MWH',
                    leftLabel: 'Incoming', rightLabel: 'Loss', leftPct: 60, rightPct: 40,
                    leftVal: '216,487.71 MWH', rightVal: '0 MWH',
                    bottomLabel: 'Total Feeder', bottomVal: 12,
                    col: 7, row: 3
                },
                {
                    id: 'cust2', title: 'Customer', filters: ['T2'],
                    total: '10,396.77 MWH',
                    single: true, fillPct: 88,
                    bottomLabel: 'Total Customers', bottomVal: '200000',
                    col: 3, row: 5
                },
                {
                    id: 'dtsT2', title: 'DTs', filters: ['T2'],
                    total: '10,396.77 MWH',
                    leftLabel: 'Incoming', rightLabel: 'Loss', leftPct: 80, rightPct: 20,
                    leftVal: '216,487.71 MWH', rightVal: '0 MWH',
                    bottomLabel: 'Total Feeder', bottomVal: 23,
                    col: 5, row: 5
                },
                {
                    id: 'outFeeder', title: '11KVA Outgoing Feeder', filters: ['T2'],
                    total: '10,396.77 MWH',
                    leftLabel: 'Incoming', rightLabel: 'Loss', leftPct: 70, rightPct: 30,
                    leftVal: '216,487.71 MWH', rightVal: '0 MWH',
                    bottomLabel: 'Total Feeder', bottomVal: 23,
                    col: 7, row: 5
                }
            ],
            connectors: [
                { id: 'c1', type: 'h', col: 2, row: 1 },
                { id: 'c2', type: 'h', col: 4, row: 1 },
                { id: 'c3', type: 'h', col: 6, row: 1 },
                { id: 'c4', type: 'v', col: 1, row: 2 },
                { id: 'c5', type: 'v', col: 3, row: 2 },
                { id: 'c6', type: 'h', col: 4, row: 3 },
                { id: 'c7', type: 'v', col: 7, row: 2 },
                { id: 'c8', type: 'v', col: 3, row: 4 },
                { id: 'c9', type: 'h', col: 4, row: 5 },
                { id: 'c10', type: 'h', col: 6, row: 5 },
                { id: 'c11', type: 'v', col: 7, row: 4 }
            ]
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

.flow-scroll {
    overflow-x: auto;
    padding-bottom: 8px;
}

.flow-canvas {
    display: grid;
    grid-template-columns: 230px 36px 230px 36px 230px 36px 230px;
    grid-template-rows: minmax(180px, auto) 40px minmax(200px, auto) 40px minmax(170px, auto);
    min-width: 1080px;
}

.connector.h {
    align-self: center;
    height: 2px;
    width: 100%;
    background: var(--border-strong);
}

.connector.v {
    justify-self: center;
    width: 2px;
    height: 100%;
    background: var(--border-strong);
}

.flow-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 14px 16px;
    box-shadow: 0 2px 8px var(--shadow-color);
    align-self: start;
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
}
</style>
