<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="row" style="margin-bottom: 0;">
                <div class="col s12">
                    <h5 class="page-title">Feeders MYTO Energy Dashboard</h5>
                </div>
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

            <div class="row">
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
                                <p class="total-label">Total Consumption (MWh)</p>
                                <p class="total-date">{{ consumption_date }}</p>
                            </div>
                        </div>
                        <span class="total-badge">+13.6% ↑</span>
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
                </div>

                <!-- RIGHT: Charts -->
                <div class="col s12 m8">

                    <!-- Energy Consumption Trend -->
                    <div class="card-panel trend-card">
                        <div class="trend-header">
                            <span class="trend-title">Energy Consumption Trend</span>
                            <div class="period-btns">
                                <button class="btn-flat period-btn active-period">Day</button>
                                <button class="btn-flat period-btn">Week</button>
                                <button class="btn-flat period-btn">Month</button>
                                <button class="btn-flat period-btn icon-btn">
                                    <i class="material-icons" style="font-size:18px;">calendar_today</i>
                                </button>
                            </div>
                        </div>
                        <div style="position: relative; height: 200px;">
                            <canvas id="energyTrendChart"></canvas>
                        </div>
                    </div>

                    <!-- Bottom Row: Doughnut + Gauge -->
                    <div class="row" style="margin-bottom: 0;">
                        <div class="col s12 m6">
                            <div class="card-panel mini-card">
                                <p class="mini-title">Energy Per Feeder (MWh)</p>
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
                            <div class="card-panel mini-card">
                                <p class="mini-title">Feeder Communication Status</p>
                                <MeterCommunication :percentage="commStatus" />
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

export default {
    components: { SideNav, ChartPie, MeterCommunication, AnimatedValue },
    data() {
        return {
            total_consumption: '0',
            consumption_date: 'Jan 2026',
            commStatus: 70,
            bands: [
                { name: 'Band A', pct: '0%', status: 'Not met',  statusClass: 'status-red',    target: '45%' },
                { name: 'Band B', pct: '0%', status: 'Exceeded', statusClass: 'status-green',  target: '22.98%' },
                { name: 'Band C', pct: '0%', status: 'Met',      statusClass: 'status-orange', target: '20.41%' },
                { name: 'Band D', pct: '0%', status: 'Not met',  statusClass: 'status-red',    target: '11.46%' },
                { name: 'Band E', pct: '0%', status: 'Not met',  statusClass: 'status-red',    target: '0.15%' },
            ],
            energyPerFeederData: null,
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false },
                cutoutPercentage: 65
            },
            energyLegend: [
                { name: 'Band A', color: '#5b7cfa', value: '17,737.08' },
                { name: 'Band B', color: '#6dd4c7', value: '14,636.88' },
                { name: 'Band C', color: '#c87dff', value: '11,125.60' },
                { name: 'Band D', color: '#e74c3c', value: '4,306.36' },
            ]
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
            this.total_consumption = '48,060.44'
            this.bands = [
                { name: 'Band A', pct: '37.10%', status: 'Not met',  statusClass: 'status-red',    target: '45%' },
                { name: 'Band B', pct: '25.00%', status: 'Exceeded', statusClass: 'status-green',  target: '22.98%' },
                { name: 'Band C', pct: '20.41%', status: 'Met',      statusClass: 'status-orange', target: '20.41%' },
                { name: 'Band D', pct: '1.49%',  status: 'Not met',  statusClass: 'status-red',    target: '11.46%' },
                { name: 'Band E', pct: '0.1%',   status: 'Not met',  statusClass: 'status-red',    target: '0.15%' },
            ]
            this.energyPerFeederData = {
                labels: this.energyLegend.map(l => l.name),
                datasets: [{
                    data: [17737.08, 14636.88, 11125.60, 4306.36],
                    backgroundColor: this.energyLegend.map(l => l.color),
                    borderWidth: 0
                }]
            }
        },
        initTrendChart() {
            const ctx = document.getElementById('energyTrendChart')
            if (!ctx) return
            new Chart(ctx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Jan 01', 'Jan 02', 'Jan 03', 'Jan 04', 'Jan 05', 'Jan 06'],
                    datasets: [{
                        label: 'Energy Consumption',
                        data: [4200, 3900, 4250, 4050, 4600, 3600],
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
                        borderWidth: 1
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
        this.initTrendChart()
    }
}
</script>

<style scoped>
.dashboard-wrapper {
    background-color: #f8f9fd;
    min-height: 100vh;
}

.main-content {
    padding-left: 280px;
    padding-right: 20px;
    padding-top: 20px;
}

.page-title {
    font-weight: 400;
    margin-bottom: 8px;
}

/* Filter */
.filter-row { margin-bottom: 10px; }

.filter-pill {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 8px 12px;
    background: #fff;
    cursor: pointer;
}

.filter-label { font-size: 13px; color: #555; }
.filter-arrow { color: #888; font-size: 20px !important; }

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
    color: #222;
}

.total-label {
    font-size: 12px;
    color: #666;
    margin: 0 0 2px 0;
}

.total-date {
    font-size: 12px;
    color: #999;
    margin: 0;
}

.total-badge {
    position: absolute;
    bottom: 18px;
    right: 18px;
    background: #27ae60;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 6px;
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
    color: #555;
    margin: 0 0 4px 0;
    font-weight: 500;
}

.band-pct {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 2px 0;
}

.band-target {
    font-size: 11px;
    color: #aaa;
    margin: 4px 0 0 0;
}

.band-status {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
}

.status-red    { color: #e74c3c; }
.status-green  { color: #27ae60; }
.status-orange { color: #f39c12; }

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
    color: #222;
}

.period-btns {
    display: flex;
    align-items: center;
    gap: 4px;
}

.period-btn {
    font-size: 13px;
    color: #9b9faa;
    padding: 0 10px;
    height: 32px;
    line-height: 32px;
    border-radius: 6px;
    text-transform: none;
}

.active-period {
    color: #222;
    font-weight: 600;
    border: 1px solid #ddd;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.icon-btn {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 0 8px;
    display: flex;
    align-items: center;
}

/* Mini Cards (bottom row) */
.mini-card {
    border-radius: 12px;
    padding: 16px;
}

.mini-title {
    font-size: 14px;
    font-weight: 600;
    color: #222;
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
    color: #666;
    flex: 1;
}

.fleg-val {
    font-size: 12px;
    font-weight: 700;
    color: #222;
}

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
}
</style>
