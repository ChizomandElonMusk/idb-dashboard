<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <LoadingOverlay :visible="loading" />

            <div class="avail-header">
                <h5 class="avail-title">Feeders MYTO Energy Dashboard</h5>
                <div class="filter-pill filter-pill-select">
                    <select class="filter-pill-input" v-model="selectedFeederBand" @change="loadSummary">
                        <option v-for="fb in feederBands" :key="fb" :value="fb">{{ fb === 'All' ? 'Feeder Band' : `Band ${fb}` }}</option>
                    </select>
                    <i class="material-icons filter-arrow">arrow_drop_down</i>
                </div>
            </div>

            <div v-if="error" class="myto-error">
                Couldn't load live data: {{ error }}
                <button class="myto-retry" @click="loadSummary">Retry</button>
            </div>

            <div class="row">
                <!-- Left column -->
                <div class="col s12 m5">
                    <div class="card-panel top-stat-card">
                        <div class="top-stat-header">
                            <div class="top-stat-icon-wrap amber-icon-wrap">
                                <i class="material-icons top-stat-icon amber-icon">bolt</i>
                            </div>
                            <div class="top-stat-info">
                                <p class="top-stat-value"><AnimatedValue :value="total_consumption" /></p>
                                <p class="top-stat-label">Total Consumption (MWh)</p>
                            </div>
                        </div>
                        <div class="top-stat-footer">
                            <span class="footer-month">{{ consumption_month }}</span>
                            <span class="footer-pill" :class="consumptionUp ? 'footer-pill-up' : 'footer-pill-down'">
                                {{ consumption_change }}
                                <i class="material-icons tiny">{{ consumptionUp ? 'arrow_upward' : 'arrow_downward' }}</i>
                            </span>
                        </div>
                    </div>

                    <div class="row" style="margin-bottom: 0;">
                        <div class="col s6" style="padding: 0 6px 0 0;" v-for="band in bandsRow1" :key="band.name">
                            <div class="card-panel band-card">
                                <p class="band-name">{{ band.name }}</p>
                                <p class="band-pct">{{ band.pct }}</p>
                                <p class="band-status" :style="{ color: band.color }">{{ band.status }}</p>
                                <p class="band-target">NERC Target {{ band.target }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-bottom: 0;">
                        <div class="col s6" style="padding: 0 6px 0 0;" v-for="band in bandsRow2" :key="band.name">
                            <div class="card-panel band-card">
                                <p class="band-name">{{ band.name }}</p>
                                <p class="band-pct">{{ band.pct }}</p>
                                <p class="band-status" :style="{ color: band.color }">{{ band.status }}</p>
                                <p class="band-target">NERC Target {{ band.target }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s6" style="padding: 0 6px 0 0;" v-for="band in bandsRow3" :key="band.name">
                            <div class="card-panel band-card">
                                <p class="band-name">{{ band.name }}</p>
                                <p class="band-pct">{{ band.pct }}</p>
                                <p class="band-status" :style="{ color: band.color }">{{ band.status }}</p>
                                <p class="band-target">NERC Target {{ band.target }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right column -->
                <div class="col s12 m7">
                    <div class="card-panel trend-card">
                        <div class="trend-header">
                            <span class="trend-title">Energy Consumption Trend</span>
                            <div class="chart-tabs">
                                <span class="chart-tab" :class="{ active: trendTab === 'Day' }" @click="setTrendTab('Day')">Day</span>
                                <span class="chart-tab" :class="{ active: trendTab === 'Week' }" @click="setTrendTab('Week')">Week</span>
                                <span class="chart-tab" :class="{ active: trendTab === 'Month' }" @click="setTrendTab('Month')">Month</span>
                                <span class="chart-icon-btn"><i class="material-icons tiny">calendar_today</i></span>
                            </div>
                        </div>
                        <div class="chart-callout-wrap">
                            <div style="position: relative; height: 220px;">
                                <canvas id="consumptionTrendChart"></canvas>
                            </div>
                            <div v-if="trendCallout" class="chart-callout" :style="{ left: trendCallout.leftPct + '%', top: '6px' }">
                                <span class="callout-title">{{ trendCallout.title }}</span>
                                <span class="callout-value">{{ trendCallout.value }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12 m6">
                            <div class="card-panel mini-chart-card">
                                <p class="pie-card-title center">Energy Per Feeder (MWh)</p>
                                <ChartPie
                                    chart-type="doughnut"
                                    :chart-data="energyPerFeederData"
                                    :chart-options="doughnutOptions"
                                    :show-value-legend="true"
                                    :legend-cols="2"
                                />
                            </div>
                        </div>
                        <div class="col s12 m6">
                            <div class="card-panel mini-chart-card">
                                <p class="pie-card-title center">Feeder Communication Status</p>
                                <MeterCommunication :percentage="feederCommunicationPct" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import Chart from '~/assets/js/Chart.js'
import SideNav from '~/components/SideNav/SideNav.vue'
import LoadingOverlay from '~/components/LoadingOverlay.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import ChartPie from '~/components/ChartPie.vue'
import MeterCommunication from '~/components/MeterCommunication.vue'
import { getMytoSummary, formatNumber, bandColor, FEEDER_BANDS, buildTrendCallout, aggregateDailyTrend } from '~/js_modules/controlCenterApi'
// Matches the Figma "Feeders MYTO Energy Dashboard" screen, wired to GET /api/v1/myto/summary
// (see static/api_live_responses3.md #7). feeder_band is a documented, confirmed filter, so
// changing it refetches. The Day/Week/Month trend tabs do NOT refetch with period=Day/Week —
// the doc only confirms period=Month works for this endpoint, so instead we always fetch the
// Month-grain response (which is itself daily energy_trend data for the month) and aggregate
// Day/Week/Month client-side from that, the same way Control Center's Vending & Collection
// card does. That's correct regardless of what the server actually does with `period`.

function statusColor(status) {
    if (status === 'Exceeded') return '#27ae60'
    if (status === 'Met') return '#d4a017'
    if (status === 'Not met') return '#c0392b'
    return '#999'
}

export default {
    components: { SideNav, AnimatedValue, ChartPie, MeterCommunication, LoadingOverlay },
    data() {
        return {
            loading: true,
            error: null,

            selectedFeederBand: 'All',
            feederBands: FEEDER_BANDS,
            trendTab: 'Day',

            total_consumption: '—',
            consumption_month: '',
            consumption_change: '—',
            consumptionUp: true,

            bands: [],

            energyPerFeederData: {
                labels: [],
                datasets: [{ data: [], backgroundColor: [], borderWidth: 0 }]
            },
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 65,
                legend: { display: false }
            },

            feederCommunicationPct: 0,

            energyRawTrend: [],
            trendLabels: [],
            trendValues: [],
            trendCallout: null,
            trendChart: null
        }
    },
    computed: {
        bandsRow1() { return this.bands.slice(0, 2) },
        bandsRow2() { return this.bands.slice(2, 4) },
        bandsRow3() { return this.bands.slice(4, 5) }
    },
    async mounted() {
        await this.loadSummary()
    },
    methods: {
        setTrendTab(tab) {
            this.trendTab = tab
            this.updateTrendView()
            this.$nextTick(() => this.renderTrendChart())
        },
        async loadSummary() {
            this.loading = true
            this.error = null
            try {
                const data = await getMytoSummary({ feeder_band: this.selectedFeederBand, period: 'Month' })
                this.applySummary(data)
            } catch (err) {
                this.error = err.message || 'Failed to load MYTO summary'
            } finally {
                this.loading = false
            }
        },
        applySummary(data) {
            this.total_consumption = formatNumber(data.total_consumption_mwh)
            this.consumption_month = data.period || ''
            const pct = data.period_vs_prev_pct
            this.consumptionUp = (pct ?? 0) >= 0
            this.consumption_change = pct === null || pct === undefined ? '—' : `${pct >= 0 ? '+' : ''}${pct}%`

            this.bands = (data.band_compliance || []).map((b) => ({
                name: `Band ${b.band}`,
                pct: `${b.actual_pct}%`,
                status: b.status,
                target: `${b.nerc_target_pct}%`,
                color: statusColor(b.status)
            }))

            const perFeeder = data.energy_per_feeder_mwh || []
            this.energyPerFeederData = {
                labels: perFeeder.map((b) => `Band ${b.band}`),
                datasets: [{ data: perFeeder.map((b) => b.mwh), backgroundColor: perFeeder.map((b) => bandColor(b.band)), borderWidth: 0 }]
            }

            this.feederCommunicationPct = (data.feeder_communication_status || {}).communicating_pct || 0

            this.energyRawTrend = data.energy_trend || []
            this.updateTrendView()

            this.$nextTick(() => this.renderTrendChart())
        },
        updateTrendView() {
            const points = aggregateDailyTrend(this.energyRawTrend, this.trendTab, ['mwh'])
            this.trendLabels = points.map((p) => p.label)
            this.trendValues = points.map((p) => p.mwh)
            this.trendCallout = buildTrendCallout(points, 'mwh', (p) => p.label, (v) => `${formatNumber(v)} MWh`)
        },
        renderTrendChart() {
            const canvas = document.getElementById('consumptionTrendChart')
            if (!canvas) return
            if (this.trendChart) this.trendChart.destroy()
            this.trendChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels: this.trendLabels,
                    datasets: [{
                        data: this.trendValues,
                        borderColor: '#4ecb71',
                        backgroundColor: 'rgba(78,203,113,0.08)',
                        pointBackgroundColor: '#4ecb71',
                        pointBorderColor: '#fff',
                        pointRadius: 0,
                        pointBorderWidth: 2,
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: { display: false },
                    tooltips: { enabled: false },
                    scales: {
                        xAxes: [{ gridLines: { display: false }, ticks: { fontColor: '#aaa', maxRotation: 0, autoSkip: true, maxTicksLimit: 8 } }],
                        yAxes: [{ gridLines: { color: 'rgba(0,0,0,0.04)' }, ticks: { display: false } }]
                    }
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
    position: relative;
    min-height: 100vh;
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

.filter-pill {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--border-strong);
    border-radius: 8px;
    padding: 8px 12px;
    background: var(--bg-card);
    cursor: pointer;
    min-width: 140px;
}

.filter-label {
    font-size: 13px;
    color: var(--text-secondary);
}

.filter-arrow {
    color: var(--text-muted);
    font-size: 20px !important;
}

.filter-pill-select {
    cursor: default;
}

.filter-pill-input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 13px;
    color: var(--text-secondary);
    font-family: inherit;
    flex: 1;
    min-width: 0;
    height: auto;
    padding: 0;
    margin: 0;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.filter-pill-input option {
    color: #222;
    background: #fff;
}

.myto-error {
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

.myto-retry {
    background: #c0392b;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 4px 12px;
    font-size: 12px;
    cursor: pointer;
}


/* Total Consumption card */
.top-stat-card {
    border-radius: 14px;
    padding: 18px 16px 14px;
    margin-bottom: 12px;
    background: var(--bg-card);
}

.top-stat-header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 10px;
}

.top-stat-icon-wrap {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.amber-icon-wrap { background-color: #fdf1de; }
.top-stat-icon { font-size: 22px !important; }
.amber-icon { color: #f5a623; }

.top-stat-info { flex: 1; }

.top-stat-value {
    font-size: 26px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 2px 0;
    line-height: 1.1;
}

.top-stat-label {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0;
}

.top-stat-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer-month {
    font-size: 12px;
    color: var(--text-muted);
}

.footer-pill {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    font-size: 11px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 999px;
}

.footer-pill-up {
    color: #1b8a5a;
    background: rgba(27, 138, 90, 0.12);
}

.footer-pill-down {
    color: #c0392b;
    background: rgba(192, 57, 43, 0.12);
}

.footer-pill .material-icons { font-size: 13px !important; }

/* Band cards */
.band-card {
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 12px;
    text-align: center;
    background: var(--bg-card);
}

.band-name {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0 0 8px 0;
}

.band-pct {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 4px 0;
}

.band-status {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 6px 0;
}

.band-target {
    font-size: 11px;
    color: var(--text-muted);
    margin: 0;
}

/* Trend card */
.trend-card {
    border-radius: 14px;
    padding: 20px;
    margin-bottom: 12px;
    background: var(--bg-card);
}

.trend-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
}

.trend-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
}

.chart-tabs {
    display: flex;
    align-items: center;
    gap: 14px;
}

.chart-tab {
    font-size: 13px;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px 6px;
}

.chart-tab.active {
    color: var(--text-primary);
    font-weight: 600;
    border: 1px solid var(--border-strong);
    border-radius: 6px;
    padding: 4px 10px;
}

.chart-icon-btn {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    background: var(--bg-card-alt, rgba(0,0,0,0.05));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
}

.chart-callout-wrap { position: relative; }

.chart-callout {
    position: absolute;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 6px 12px;
    box-shadow: 0 2px 8px var(--shadow-color, rgba(0,0,0,0.08));
    display: flex;
    flex-direction: column;
    line-height: 1.3;
    pointer-events: none;
}

.callout-title { font-size: 11px; color: var(--text-muted); }
.callout-value { font-size: 13px; font-weight: 700; color: var(--text-primary); }

/* Mini chart cards */
.mini-chart-card {
    border-radius: 14px;
    padding: 20px;
    margin-bottom: 12px;
    background: var(--bg-card);
}

.pie-card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 10px 0;
}

@media only screen and (max-width: 992px) {
    .main-content {
        padding-left: 20px;
    }
    .avail-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}
</style>
