<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <LoadingOverlay :visible="loading" />

            <!-- header -->
            <div class="avail-header">
                <h5 class="avail-title">Availability Summary</h5>
                <div class="avail-filters">
                    <div class="filter-input filter-date" @click="openDatePicker">
                        <input
                            type="date"
                            class="filter-date-input"
                            :value="selectedDate"
                            :max="maxDate"
                            @change="onDateChange"
                        />
                        <i class="material-icons filter-icon">calendar_today</i>
                    </div>
                    <div class="filter-input filter-select-wrap">
                        <select class="filter-select" v-model="selectedFeederBand" @change="loadSummary">
                            <option v-for="fb in feederBands" :key="fb" :value="fb">{{ fb === 'All' ? 'Feeder Band' : fb }}</option>
                        </select>
                        <i class="material-icons filter-icon">arrow_drop_down</i>
                    </div>
                    <div class="filter-input filter-select-wrap">
                        <select class="filter-select" v-model="selectedBusinessUnit" @change="loadSummary">
                            <option v-for="bu in businessUnits" :key="bu" :value="bu">{{ bu === 'All' ? 'Business Unit' : bu }}</option>
                        </select>
                        <i class="material-icons filter-icon">arrow_drop_down</i>
                    </div>
                </div>
            </div>

            <div v-if="error" class="avail-error">
                Couldn't load live data: {{ error }}
                <button class="avail-retry" @click="loadSummary">Retry</button>
            </div>

            <!-- top 3 cards -->
            <div class="row">
                <!-- Feeders Availability Status -->
                <div class="col s12 m4">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">Feeders Availability Status</p>
                        <ChartPie chart-type="doughnut"
                            :chart-data="feedersAvailData"
                            :chart-options="doughnutOptions"
                            :center-text="feedersAvailTotal"
                            :show-value-legend="true"
                            :legend-cols="1">
                        </ChartPie>
                    </div>
                </div>

                <!-- Total DTs -->
                <div class="col s12 m4">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">Total DTs</p>
                        <ChartPie chart-type="doughnut"
                            :chart-data="totalDtsData"
                            :chart-options="doughnutOptions"
                            :center-text="totalDtsTotal"
                            :show-value-legend="true"
                            :legend-cols="1">
                        </ChartPie>
                    </div>
                </div>

                <!-- DT Availability Status -->
                <div class="col s12 m4">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">DT Availability Status</p>
                        <div class="dt-status-row">
                            <div class="dt-status-chart">
                                <canvas id="dtAvailChart"></canvas>
                            </div>
                            <div class="dt-status-legend">
                                <span class="dt-status-legend-item"><span class="legend-dot" style="background:#1a2b5c;"></span> Met</span>
                                <span class="dt-status-legend-item"><span class="legend-dot" style="background:#c0392b;"></span> Not Met</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- horizontal bar charts -->
            <div class="row">
                <div class="col s12 m6">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">Feeders By Business Unit</p>
                        <div style="position: relative; height: 220px;">
                            <canvas id="feedersByBuChart"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">DTs By Business Units</p>
                        <div style="position: relative; height: 220px;">
                            <canvas id="dtsByBuChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
import LoadingOverlay from '~/components/LoadingOverlay.vue'
import ChartPie from '~/components/ChartPie.vue'
import Chart from '~/assets/js/Chart.js'
import { getAvailabilitySummary, formatNumber, todayStr, BUSINESS_UNITS, FEEDER_BANDS, openDatePicker } from '~/js_modules/controlCenterApi'
// Matches the Figma "Availability Summary" screen, wired to GET /api/v1/availability/summary
// (see static/api_live_responses3.md #4). date/feeder_band/business_unit are all live filters —
// changing any of them refetches and redraws every chart on the page.

const valueLabelPlugin = {
    afterDatasetsDraw(chart) {
        const ctx = chart.ctx
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i)
            if (meta.hidden) return
            meta.data.forEach((bar, index) => {
                const value = dataset.data[index]
                const model = bar._model
                ctx.save()
                ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#ececf2' : '#333'
                ctx.font = 'bold 11px sans-serif'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'bottom'
                ctx.fillText(value.toLocaleString(), model.x, model.y - 3)
                ctx.restore()
            })
        })
    }
}

// The original mock hardcoded a fixed axis ceiling per chart (4300, 95) tuned to its own
// numbers. Real, filterable data can shrink drastically (e.g. one business unit selected),
// so compute headroom from whatever's actually being drawn instead of clipping bars.
function chartSuggestedMax(values) {
    const max = values.length ? Math.max(...values) : 0
    return max > 0 ? Math.ceil(max * 1.15) : 10
}

const horizontalValueLabelPlugin = {
    afterDatasetsDraw(chart) {
        const ctx = chart.ctx
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i)
            if (meta.hidden) return
            meta.data.forEach((bar, index) => {
                const value = dataset.data[index]
                const model = bar._model
                ctx.save()
                ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#ececf2' : '#333'
                ctx.font = 'bold 11px sans-serif'
                ctx.textAlign = 'left'
                ctx.textBaseline = 'middle'
                ctx.fillText(value.toLocaleString(), model.x + 8, model.y)
                ctx.restore()
            })
        })
    }
}

export default {
    components: { SideNav, ChartPie, LoadingOverlay },
    data() {
        return {
            loading: true,
            error: null,

            // Left unset so the request omits `date` and the server resolves its own "latest
            // complete day" — the API doc's own sample query for this endpoint used a date 3
            // days before its stated generation date, suggesting day-level readings lag by more
            // than 1 day. Guessing "yesterday" risked querying a day with genuinely zero rows
            // yet (indistinguishable from a bug), and this endpoint doesn't echo the resolved
            // date back the way end-to-end/overview's `period` does, so there's nothing to
            // backfill the picker with either way.
            selectedDate: '',
            maxDate: todayStr(),
            selectedFeederBand: 'All',
            feederBands: FEEDER_BANDS,
            selectedBusinessUnit: 'All',
            businessUnits: BUSINESS_UNITS,

            feedersAvailTotal: '—',
            feedersAvailData: {
                labels: ['Met', 'Not Met'],
                datasets: [{ data: [0, 0], backgroundColor: ['#1a2b5c', '#c0392b'] }]
            },
            totalDtsTotal: '—',
            totalDtsData: {
                labels: ['Public DTs', 'Private DTs'],
                datasets: [{ data: [0, 0], backgroundColor: ['#7b8cf0', '#8de8c5'] }]
            },
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 70,
                legend: { display: false }
            },

            dtStatusMet: [0, 0],
            dtStatusNotMet: [0, 0],
            feedersByBuLabels: [],
            feedersByBuValues: [],
            dtsByBuLabels: [],
            dtsByBuValues: [],

            barCharts: []
        }
    },
    async mounted() {
        await this.loadSummary()
    },
    methods: {
        openDatePicker,
        onDateChange(e) {
            this.selectedDate = e.target.value
            this.loadSummary()
        },
        async loadSummary() {
            this.loading = true
            this.error = null
            try {
                const data = await getAvailabilitySummary({
                    date: this.selectedDate,
                    feeder_band: this.selectedFeederBand,
                    business_unit: this.selectedBusinessUnit
                })
                this.applySummary(data)
            } catch (err) {
                this.error = err.message || 'Failed to load Availability Summary'
            } finally {
                this.loading = false
            }
        },
        applySummary(data) {
            const feeders = data.feeders_availability || {}
            this.feedersAvailTotal = formatNumber(feeders.total)
            this.feedersAvailData = {
                labels: ['Met', 'Not Met'],
                datasets: [{ data: [feeders.met || 0, feeders.not_met || 0], backgroundColor: ['#1a2b5c', '#c0392b'] }]
            }

            const dts = data.dts || {}
            this.totalDtsTotal = formatNumber(dts.total)
            this.totalDtsData = {
                labels: ['Public DTs', 'Private DTs'],
                datasets: [{ data: [dts.public_dts || 0, dts.private_dts || 0], backgroundColor: ['#7b8cf0', '#8de8c5'] }]
            }

            const dtStatus = data.dt_availability_status || {}
            this.dtStatusMet = [dtStatus.private_dts_met || 0, dtStatus.public_dts_met || 0]
            this.dtStatusNotMet = [dtStatus.private_dts_not_met || 0, dtStatus.public_dts_not_met || 0]

            const feedersByBu = data.feeders_by_business_unit || []
            this.feedersByBuLabels = feedersByBu.map((b) => b.business_unit)
            this.feedersByBuValues = feedersByBu.map((b) => b.count)

            const dtsByBu = data.dts_by_business_unit || []
            this.dtsByBuLabels = dtsByBu.map((b) => b.business_unit)
            this.dtsByBuValues = dtsByBu.map((b) => b.count)

            this.$nextTick(() => this.initCharts())
        },
        initCharts() {
            this.barCharts.forEach(chart => chart && chart.destroy())
            this.barCharts = []

            const statusCanvas = document.getElementById('dtAvailChart')
            if (statusCanvas) {
                this.barCharts.push(new Chart(statusCanvas.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: ['Private DTs', 'Public DTs'],
                        datasets: [
                            { label: 'Met', data: this.dtStatusMet, backgroundColor: '#1a2b5c' },
                            { label: 'Not Met', data: this.dtStatusNotMet, backgroundColor: '#c0392b' }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: { display: false },
                        scales: {
                            xAxes: [{ gridLines: { display: false } }],
                            yAxes: [{ gridLines: { display: false }, ticks: { beginAtZero: true } }]
                        }
                    },
                    plugins: [valueLabelPlugin]
                }))
            }

            const feedersByBuCanvas = document.getElementById('feedersByBuChart')
            if (feedersByBuCanvas) {
                this.barCharts.push(new Chart(feedersByBuCanvas.getContext('2d'), {
                    type: 'horizontalBar',
                    data: {
                        labels: this.feedersByBuLabels,
                        datasets: [{
                            data: this.feedersByBuValues,
                            backgroundColor: '#f5a623'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: { display: false },
                        scales: {
                            xAxes: [{ gridLines: { display: false }, ticks: { display: false, suggestedMax: chartSuggestedMax(this.feedersByBuValues) } }],
                            yAxes: [{ gridLines: { display: false } }]
                        }
                    },
                    plugins: [horizontalValueLabelPlugin]
                }))
            }

            const dtsByBuCanvas = document.getElementById('dtsByBuChart')
            if (dtsByBuCanvas) {
                this.barCharts.push(new Chart(dtsByBuCanvas.getContext('2d'), {
                    type: 'horizontalBar',
                    data: {
                        labels: this.dtsByBuLabels,
                        datasets: [{
                            data: this.dtsByBuValues,
                            backgroundColor: '#a13a3a'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: { display: false },
                        scales: {
                            xAxes: [{ gridLines: { display: false }, ticks: { display: false, suggestedMax: chartSuggestedMax(this.dtsByBuValues) } }],
                            yAxes: [{ gridLines: { display: false } }]
                        }
                    },
                    plugins: [horizontalValueLabelPlugin]
                }))
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
    position: relative;
    min-height: 100vh;
}

/* header */
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

.avail-filters {
    display: flex;
    gap: 12px;
}

.filter-input {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 6px 14px;
    cursor: pointer;
    min-width: 130px;
}

.filter-label {
    font-size: 13px;
    color: var(--text-secondary);
    flex: 1;
}

.filter-icon {
    font-size: 18px;
    color: var(--text-muted);
}

.filter-date-input,
.filter-select {
    border: none;
    background: transparent;
    outline: none;
    font-size: 13px;
    color: var(--text-secondary);
    font-family: inherit;
    flex: 1;
    min-width: 0;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

/* The native date input draws its own calendar icon next to our Material icon, showing
   two icons — hide it visually (not removed) so clicking there still opens the picker. */
.filter-date-input::-webkit-calendar-picker-indicator {
    opacity: 0;
}

.filter-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.filter-select option {
    color: #222;
    background: #fff;
}

.avail-error {
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

.avail-retry {
    background: #c0392b;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 4px 12px;
    font-size: 12px;
    cursor: pointer;
}


/* cards */
.avail-card {
    border-radius: 14px;
    background: var(--bg-card);
    box-shadow: 0 2px 8px var(--shadow-color);
    padding: 20px;
    margin-bottom: 16px;
}

.avail-card-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 12px;
}

.dt-status-row {
    display: flex;
    align-items: center;
    gap: 12px;
}

.dt-status-chart {
    position: relative;
    height: 200px;
    flex: 1;
}

.dt-status-legend {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-shrink: 0;
}

.dt-status-legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-secondary);
}

.legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
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
