<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="avail-header">
                <h5 class="avail-title">Feeders MYTO Energy Dashboard</h5>
            </div>

            <!-- Filter Row -->
            <div class="row filter-row">
                <div class="col s3 offset-s9">
                    <div class="filter-pill">
                        <span class="filter-label">Feeder Band</span>
                        <i class="material-icons filter-arrow">arrow_drop_down</i>
                    </div>
                </div>
            </div>

            <div v-if="loading" class="state-panel">
                <PreLoader />
            </div>
            <div v-else-if="error" class="state-panel">
                <p class="state-message">Could not load MYTO dashboard data: {{ error }}</p>
                <button class="btn-flat retry-btn" @click="getData">Retry</button>
            </div>

            <div v-else class="row">
                <!-- LEFT: Summary + Band Cards -->
                <div class="col s12 m4">

                    <!-- Total Consumption Card -->
                    <div class="card-panel total-card">
                        <div class="total-card-inner">
                            <div class="total-icon">
                                <i class="material-icons white-text">bolt</i>
                            </div>
                            <div class="total-info">
                                <p class="total-value"><AnimatedValue :value="total_consumption" /></p>
                                <p class="total-label">Total DT Energy Raw</p>
                                <p class="total-date">{{ consumption_date }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Band Cards (chunked 2 per row) -->
                    <div class="row band-row" v-for="(chunk, ci) in bandChunks" :key="ci">
                        <div
                            class="col s6"
                            v-for="(band, bi) in chunk"
                            :key="bi"
                            :style="bi === 0 ? 'padding-right:5px;' : 'padding-left:5px;'"
                        >
                            <div class="card-panel band-card">
                                <p class="band-name">{{ band.name }}</p>
                                <p class="band-pct"><AnimatedValue :value="band.pct" /></p>
                                <p class="band-status" :class="band.statusClass">{{ band.status }}</p>
                                <p class="band-target">NERC Target {{ band.target }}</p>
                            </div>
                        </div>
                    </div>
                    <p v-if="!bands.length" class="pending-note">No band energy data returned</p>
                </div>

                <!-- RIGHT: Charts -->
                <div class="col s12 m8">

                    <!-- Energy Consumption Trend -->
                    <div class="card-panel trend-card">
                        <div class="trend-header">
                            <span class="trend-title">DT Energy Raw Trend (last 6 months)</span>
                        </div>
                        <div style="position: relative; height: 200px;">
                            <canvas id="energyTrendChart"></canvas>
                        </div>
                    </div>

                    <!-- Bottom Row: Doughnut + Gauge -->
                    <div class="row" style="margin-bottom: 0;">
                        <div class="col s12 m6">
                            <div class="card-panel mini-card">
                                <p class="mini-title">DT Energy Raw by Band</p>
                                <ChartPie
                                    v-if="energyPerFeederData"
                                    chart-type="doughnut"
                                    :chart-data="energyPerFeederData"
                                    :chart-options="doughnutOptions"
                                />
                                <div class="feeder-legend">
                                    <div class="feeder-legend-item" v-for="item in energyLegend" :key="item.name">
                                        <span class="fleg-dot" :style="{ backgroundColor: item.color }"></span>
                                        <span class="fleg-name">{{ item.name }}</span>
                                        <span class="fleg-val">{{ item.value }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m6">
                            <div class="card-panel mini-card" style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
                                <p class="mini-title">Feeder Communication Status</p>
                                <MeterCommunication :percentage="commStatus" />
                            </div>
                        </div>
                    </div>

                    <div class="row" style="margin-bottom: 0;">
                        <div class="col s12">
                            <div class="card-panel mini-card">
                                <p class="mini-title">Availability by Band</p>
                                <div class="table-wrapper">
                                    <table class="band-avail-table striped">
                                        <thead>
                                            <tr>
                                                <th>Band</th>
                                                <th>Avg Availability (Hrs)</th>
                                                <th>Target (Hrs)</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="band in bandAvailability" :key="band.name">
                                                <td>{{ band.name }}</td>
                                                <td>{{ band.avail_hours }}</td>
                                                <td>{{ band.target }}</td>
                                                <td><span :class="['band-status', band.statusClass]">{{ band.status }}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
import ChartPie from '~/components/ChartPie.vue'
import MeterCommunication from '~/components/MeterCommunication.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
// Live API wiring (js_modules/controlCenterApi.js) stays in the codebase but is not
// called right now — this page is intentionally running on demo data. To go live again,
// restore the async getData()/loadTrend() that call controlCenterApi.*.
// import * as controlCenterApi from '~/js_modules/controlCenterApi.js'
// import { pick, formatNumber, lastNMonths, monthLabel } from '~/js_modules/controlCenterApi.js'

const BAND_COLORS = ['#5b7cfa', '#6dd4c7', '#c87dff', '#e74c3c', '#ffa94e', '#4ecdc4']

export default {
    components: { SideNav, ChartPie, MeterCommunication, AnimatedValue },
    data() {
        return {
            loading: true,
            error: null,
            total_consumption: '0',
            consumption_date: '',
            commStatus: 0,
            bands: [],
            bandAvailability: [],
            energyPerFeederData: null,
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false },
                cutoutPercentage: 65
            },
            energyLegend: [],
            trendChart: null
        }
    },
    computed: {
        bandChunks() {
            const result = []
            for (let i = 0; i < this.bands.length; i += 2) {
                result.push(this.bands.slice(i, i + 2))
            }
            return result
        }
    },
    methods: {
        getData() {
            // DEMO MODE — hardcoded values for today's demo, no network calls.
            this.loading = true
            this.error = null

            this.total_consumption = '48,060.44'
            this.consumption_date = 'Jan 2026'
            this.commStatus = 70

            this.bands = [
                { name: 'Band A', pct: '37.10%', status: 'Not met',  statusClass: 'status-red',    target: '45%' },
                { name: 'Band B', pct: '25.00%', status: 'Exceeded', statusClass: 'status-green',  target: '22.98%' },
                { name: 'Band C', pct: '20.41%', status: 'Met',      statusClass: 'status-orange', target: '20.41%' },
                { name: 'Band D', pct: '1.49%',  status: 'Not met',  statusClass: 'status-red',    target: '11.46%' },
                { name: 'Band E', pct: '0.1%',   status: 'Not met',  statusClass: 'status-red',    target: '0.15%' }
            ]

            this.bandAvailability = [
                { name: 'Band A', avail_hours: '11.20', target: '20.00', status: 'Not met', statusClass: 'status-red' },
                { name: 'Band B', avail_hours: '18.40', target: '20.00', status: 'Not met', statusClass: 'status-red' },
                { name: 'Band C', avail_hours: '20.05', target: '20.00', status: 'Met', statusClass: 'status-orange' },
                { name: 'Band D', avail_hours: '22.80', target: '20.00', status: 'Exceeded', statusClass: 'status-green' },
                { name: 'Band E', avail_hours: '19.10', target: '20.00', status: 'Not met', statusClass: 'status-red' }
            ]

            this.energyLegend = [
                { name: 'Band A', color: '#5b7cfa', value: '17,737.08' },
                { name: 'Band B', color: '#6dd4c7', value: '14,636.88' },
                { name: 'Band C', color: '#c87dff', value: '11,125.60' },
                { name: 'Band D', color: '#e74c3c', value: '4,306.36' },
                { name: 'Band E', color: '#ffa94e', value: '254.52' }
            ]
            this.energyPerFeederData = {
                labels: this.energyLegend.map(l => l.name),
                datasets: [{
                    data: [17737.08, 14636.88, 11125.60, 4306.36, 254.52],
                    backgroundColor: this.energyLegend.map(l => l.color),
                    borderWidth: 0
                }]
            }

            this.loading = false
            this.$nextTick(() => this.initTrendChart())
        },
        initTrendChart() {
            this.renderTrendChart(
                ['Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026', 'Jul 2026', 'Aug 2026'],
                [42500, 39800, 43200, 40600, 46100, 48060]
            )
        },
        renderTrendChart(labels, data) {
            const canvas = document.getElementById('energyTrendChart')
            if (!canvas) return
            if (this.trendChart) this.trendChart.destroy()
            this.trendChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels,
                    datasets: [{
                        label: 'DT Energy Raw',
                        data,
                        borderColor: '#4ecb71',
                        backgroundColor: 'rgba(78,203,113,0.08)',
                        pointBackgroundColor: '#4ecb71',
                        pointBorderColor: '#fff',
                        pointRadius: 6,
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
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#fff',
                        titleFontColor: '#9b9faa',
                        bodyFontColor: '#222',
                        bodyFontStyle: 'bold',
                        borderColor: '#eee',
                        borderWidth: 1,
                        callbacks: {
                            label: function(tooltipItems) { return Number(tooltipItems.yLabel).toLocaleString() + ' (raw)' }
                        }
                    },
                    scales: {
                        yAxes: [{ gridLines: { color: 'rgba(0,0,0,0.04)' }, ticks: { display: false } }],
                        xAxes: [{ gridLines: { color: 'rgba(0,0,0,0.04)', borderDash: [4, 4] } }]
                    }
                }
            })
        }
    },
    mounted() {
        this.getData()
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

.state-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    gap: 12px;
}

.state-message {
    color: var(--text-secondary);
    text-align: center;
}

.retry-btn {
    color: var(--text-primary);
    border: 1px solid var(--border-strong);
    border-radius: 6px;
}

.pending-card {
    text-align: center;
}

.band-avail-table {
    width: 100%;
    font-size: 13px;
}

.band-status {
    font-weight: 600;
}

.status-red    { color: #e74c3c; }
.status-green  { color: #27ae60; }
.status-orange { color: #f39c12; }

.pending-note {
    font-size: 12px;
    color: var(--text-muted);
    margin: 8px 0 0 0;
}

/* Filter */
.filter-row { margin-bottom: 10px; }

.filter-pill {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--border-strong);
    border-radius: 8px;
    padding: 8px 12px;
    background: var(--bg-card);
    cursor: pointer;
}

.filter-label { font-size: 13px; color: var(--text-secondary); }
.filter-arrow { color: var(--text-muted); font-size: 20px !important; }

/* Total Consumption Card */
.total-card {
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 8px;
    position: relative;
}

.total-card-inner {
    display: flex;
    align-items: center;
    gap: 14px;
}

.total-icon {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #f39c12;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.total-value {
    font-size: 26px;
    font-weight: 700;
    margin: 0 0 2px 0;
    color: var(--text-primary);
}

.total-label {
    font-size: 12px;
    color: var(--text-secondary);
    margin: 0 0 2px 0;
}

.total-date {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0;
}

/* Band Cards */
.band-row { margin-bottom: 0; }

.band-card {
    border-radius: 12px;
    padding: 14px;
    margin-bottom: 10px;
}

.band-name {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0 0 4px 0;
    font-weight: 500;
}

.band-pct {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 2px 0;
}

.band-target {
    font-size: 11px;
    color: var(--text-faint);
    margin: 4px 0 0 0;
}

/* Trend Chart Card */
.trend-card {
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 10px;
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

/* Mini Cards (bottom row) */
.mini-card {
    border-radius: 12px;
    padding: 16px;
}

.mini-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 12px 0;
}

/* Feeder Legend */
.feeder-legend {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 4px;
    margin-top: 12px;
}

.feeder-legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
}

.fleg-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
}

.fleg-name {
    font-size: 12px;
    color: var(--text-secondary);
    flex: 1;
}

.fleg-val {
    font-size: 12px;
    font-weight: 700;
    color: var(--text-primary);
}

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
}
</style>
