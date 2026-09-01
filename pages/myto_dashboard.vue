<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="avail-header">
                <h5 class="avail-title">Feeders MYTO Energy Dashboard</h5>
                <div class="filter-pill">
                    <span class="filter-label">Feeder Band</span>
                    <i class="material-icons filter-arrow">arrow_drop_down</i>
                </div>
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
                            <span class="footer-pill footer-pill-up">{{ consumption_change }} <i class="material-icons tiny">arrow_upward</i></span>
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
                                <span class="chart-tab" :class="{ active: trendTab === 'Day' }" @click="trendTab = 'Day'">Day</span>
                                <span class="chart-tab" :class="{ active: trendTab === 'Week' }" @click="trendTab = 'Week'">Week</span>
                                <span class="chart-tab" :class="{ active: trendTab === 'Month' }" @click="trendTab = 'Month'">Month</span>
                                <span class="chart-icon-btn"><i class="material-icons tiny">calendar_today</i></span>
                            </div>
                        </div>
                        <div style="position: relative; height: 220px;">
                            <canvas id="consumptionTrendChart"></canvas>
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
                                <MeterCommunication :percentage="70" />
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
import AnimatedValue from '~/components/AnimatedValue.vue'
import ChartPie from '~/components/ChartPie.vue'
import MeterCommunication from '~/components/MeterCommunication.vue'
// UI-first rebuild to match the Figma "Feeders MYTO Energy Dashboard" screen exactly. Data below
// is static mock content taken from the Figma mockup — real API wiring will be reintroduced once
// the backend team ships the matching endpoint shape.

const FEEDER_BAND_COLORS = ['#5b7cfa', '#3ec9a7', '#a56ef0', '#e74c3c']

export default {
    components: { SideNav, AnimatedValue, ChartPie, MeterCommunication },
    data() {
        return {
            trendTab: 'Day',
            total_consumption: '48,060.44',
            consumption_month: 'Jan 2026',
            consumption_change: '+13.6%',
            bandsRow1: [
                { name: 'Band A', pct: '37.10%', status: 'Not met', target: '45%', color: '#c0392b' },
                { name: 'Band B', pct: '25.00%', status: 'Exceeded', target: '22.98%', color: '#27ae60' }
            ],
            bandsRow2: [
                { name: 'Band C', pct: '20.41%', status: 'Met', target: '20.41%', color: '#d4a017' },
                { name: 'Band D', pct: '1.49%', status: 'Not met', target: '11.46%', color: '#c0392b' }
            ],
            bandsRow3: [
                { name: 'Band E', pct: '0.1%', status: 'Not met', target: '0.15%', color: '#c0392b' }
            ],
            energyPerFeederData: {
                labels: ['Band A', 'Band B', 'Band C', 'Band D'],
                datasets: [{ data: [17737.08, 14636.88, 11125.60, 4306.36], backgroundColor: FEEDER_BAND_COLORS, borderWidth: 0 }]
            },
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 65,
                legend: { display: false }
            },
            trendChart: null
        }
    },
    methods: {
        renderTrendChart() {
            const canvas = document.getElementById('consumptionTrendChart')
            if (!canvas) return
            if (this.trendChart) this.trendChart.destroy()
            this.trendChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Jan 01', 'Jan 02', 'Jan 03', 'Jan 04', 'Jan 05', 'Jan 06'],
                    datasets: [{
                        data: [40, 45, 60, 48, 65, 30],
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
                    tooltips: { enabled: false },
                    scales: {
                        xAxes: [{ gridLines: { display: false }, ticks: { fontColor: '#aaa' } }],
                        yAxes: [{ gridLines: { color: 'rgba(0,0,0,0.04)' }, ticks: { display: false } }]
                    }
                }
            })
        }
    },
    mounted() {
        this.$nextTick(() => this.renderTrendChart())
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

.footer-pill-up .material-icons { font-size: 13px !important; }

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
