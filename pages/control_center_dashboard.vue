<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="avail-header">
                <h5 class="avail-title">Control Center Dashboard</h5>
            </div>

            <div class="row">
                <!-- Card 1: Online Feeders -->
                <div class="col s12 m3">
                    <div class="card-panel top-stat-card">
                        <div class="top-stat-header">
                            <div class="top-stat-icon-wrap red-icon-wrap">
                                <i class="material-icons top-stat-icon red-icon">device_hub</i>
                            </div>
                            <div class="top-stat-info">
                                <p class="top-stat-value"><AnimatedValue :value="online_feeders" /></p>
                                <p class="top-stat-label">Online feeders</p>
                            </div>
                        </div>
                        <div class="top-stat-divider"></div>
                        <div class="top-stat-sub-row">
                            <div class="top-stat-sub border-right">
                                <p class="sub-label">11kv</p>
                                <p class="sub-value">{{ kv11 }}</p>
                            </div>
                            <div class="top-stat-sub">
                                <p class="sub-label">33kv</p>
                                <p class="sub-value">{{ kv33 }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Online DTs -->
                <div class="col s12 m3">
                    <div class="card-panel top-stat-card">
                        <div class="top-stat-header">
                            <div class="top-stat-icon-wrap red-icon-wrap">
                                <i class="material-icons top-stat-icon red-icon">bolt</i>
                            </div>
                            <div class="top-stat-info">
                                <p class="top-stat-value"><AnimatedValue :value="online_dts" /></p>
                                <p class="top-stat-label">Online DTs</p>
                            </div>
                        </div>
                        <div class="top-stat-divider"></div>
                        <div class="top-stat-sub-row">
                            <div class="top-stat-sub border-right">
                                <p class="sub-label">Public</p>
                                <p class="sub-value">{{ public_dts }}</p>
                            </div>
                            <div class="top-stat-sub">
                                <p class="sub-label">Private</p>
                                <p class="sub-value">{{ private_dts }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Total Customer Complaints -->
                <div class="col s12 m3">
                    <div class="card-panel top-stat-card">
                        <div class="top-stat-header">
                            <div class="top-stat-icon-wrap blue-icon-wrap">
                                <i class="material-icons top-stat-icon blue-icon">group</i>
                            </div>
                            <div class="top-stat-info">
                                <p class="top-stat-value"><AnimatedValue :value="complaints_total" /></p>
                                <p class="top-stat-label">Total Customer Complaints</p>
                            </div>
                        </div>
                        <div class="top-stat-divider"></div>
                        <div class="top-stat-sub-row">
                            <div class="top-stat-sub border-right">
                                <p class="sub-label">Open</p>
                                <p class="sub-value">{{ complaints_open }}</p>
                            </div>
                            <div class="top-stat-sub">
                                <p class="sub-label">Closed</p>
                                <p class="sub-value">{{ complaints_closed }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Total Customers -->
                <div class="col s12 m3">
                    <div class="card-panel top-stat-card">
                        <p class="customers-card-title">Total Customers</p>
                        <div class="progress-item">
                            <div class="progress-label-row">
                                <span class="progress-name">Metered NMD</span>
                                <span class="progress-fraction">{{ nmd_value }}/{{ nmd_total }}</span>
                            </div>
                            <div class="progress indigo lighten-4" style="height:8px; border-radius:4px;">
                                <div class="determinate indigo accent-2" :style="{ width: nmd_pct }"></div>
                            </div>
                        </div>
                        <div class="progress-item" style="margin-top: 14px;">
                            <div class="progress-label-row">
                                <span class="progress-name">Metered MD</span>
                                <span class="progress-fraction">{{ md_value }}/{{ md_total }}</span>
                            </div>
                            <div class="progress green lighten-4" style="height:8px; border-radius:4px;">
                                <div class="determinate green" :style="{ width: md_pct }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Energy + Allocation Row -->
            <div class="row">
                <div class="col s12 m7">
                    <div class="card-panel mini-chart-card energy-card">
                        <div class="energy-card-header">
                            <p class="energy-card-title">Energy</p>
                            <div class="chart-tabs">
                                <span class="chart-tab" :class="{ active: energyTab === 'Day' }" @click="energyTab = 'Day'">Day</span>
                                <span class="chart-tab" :class="{ active: energyTab === 'Week' }" @click="energyTab = 'Week'">Week</span>
                                <span class="chart-tab" :class="{ active: energyTab === 'Month' }" @click="energyTab = 'Month'">Month</span>
                                <span class="chart-icon-btn"><i class="material-icons tiny">calendar_today</i></span>
                                <span class="chart-icon-btn chart-icon-btn-accent"><i class="material-icons tiny">description</i></span>
                            </div>
                        </div>
                        <p class="energy-card-value">{{ energyTotal }}</p>
                        <div class="chart-callout-wrap">
                            <div style="position: relative; height:190px;">
                                <canvas id="energyChart"></canvas>
                            </div>
                            <div class="chart-callout" style="left: 40%; top: 6px;">
                                <span class="callout-title">March</span>
                                <span class="callout-value">43.00 MWh</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s12 m5">
                    <div class="card-panel mini-chart-card">
                        <p class="pie-card-title center">Energy Allocation per Feeder Band</p>
                        <ChartPie
                            chart-type="pie"
                            :chart-data="energyAllocationData"
                            :chart-options="pieOptions"
                        />
                        <div class="band-pct-legend">
                            <span v-for="item in bandPctLegend" :key="item.label" class="band-pct-item" :style="{ color: item.color }">
                                {{ item.label }} {{ item.pct }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Vending & Total Feeder Row -->
            <div class="row">
                <div class="col s12 m7">
                    <div class="card-panel mini-chart-card energy-card">
                        <div class="energy-card-header">
                            <p class="energy-card-title">Vending &amp; Collection</p>
                            <div class="chart-tabs">
                                <span class="chart-tab" :class="{ active: vendingTab === 'Day' }" @click="vendingTab = 'Day'">Day</span>
                                <span class="chart-tab" :class="{ active: vendingTab === 'Week' }" @click="vendingTab = 'Week'">Week</span>
                                <span class="chart-tab" :class="{ active: vendingTab === 'Month' }" @click="vendingTab = 'Month'">Month</span>
                                <span class="chart-icon-btn"><i class="material-icons tiny">calendar_today</i></span>
                            </div>
                        </div>
                        <div class="chart-callout-wrap">
                            <div style="position: relative; height:190px;">
                                <canvas id="vendingChart"></canvas>
                            </div>
                            <div class="chart-callout" style="left: 46%; top: 6px;">
                                <span class="callout-title">June 16</span>
                                <span class="callout-value">400,000,000</span>
                            </div>
                        </div>
                        <div class="vending-stats-grid">
                            <div class="vending-stats-col">
                                <div class="vending-stat-row">
                                    <span class="vstat-dot vstat-dot-green"></span>
                                    <span class="vstat-label">Total customer Vended Today</span>
                                    <span class="vstat-value">30,400,000</span>
                                </div>
                                <div class="vending-stat-row">
                                    <span class="vstat-dot vstat-dot-green"></span>
                                    <span class="vstat-label">Amount Vended Today</span>
                                    <span class="vstat-value">30,400,000</span>
                                </div>
                                <div class="vending-stat-row">
                                    <span class="vstat-dot vstat-dot-green"></span>
                                    <span class="vstat-label">Amount Vended MTD</span>
                                    <span class="vstat-value">2,000,000,000</span>
                                </div>
                            </div>
                            <div class="vending-stats-col">
                                <div class="vending-stat-row">
                                    <span class="vstat-dot vstat-dot-blue"></span>
                                    <span class="vstat-label">Total Collection Today</span>
                                    <span class="vstat-value">50,000,000</span>
                                </div>
                                <div class="vending-stat-row">
                                    <span class="vstat-dot vstat-dot-blue"></span>
                                    <span class="vstat-label">Amount Collected MTD</span>
                                    <span class="vstat-value">7,000,000,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s12 m5">
                    <div class="card-panel mini-chart-card">
                        <p class="pie-card-title center">Total Feeder</p>
                        <ChartPie
                            chart-type="doughnut"
                            :chart-data="totalFeederData"
                            :chart-options="doughnutOptions"
                            center-text="421"
                            :show-value-legend="true"
                            :legend-cols="2"
                        />
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import ChartPie from '~/components/ChartPie.vue'
import Chart from '~/assets/js/Chart.js'
// UI-first rebuild to match the Figma "Control Center Dashboard" screen exactly. Data below is
// static mock content taken from the Figma mockup — real API wiring will be reintroduced once
// the backend team ships the matching endpoint shape.

const BAND_COLORS = ['#5b7cfa', '#3ec9a7', '#a56ef0', '#e74c3c', '#f5a623']

export default {
    components: { SideNav, AnimatedValue, ChartPie },
    data() {
        return {
            online_feeders: '200',
            kv11: '150',
            kv33: '50',
            online_dts: '1200',
            public_dts: '1000',
            private_dts: '200',
            complaints_total: '50',
            complaints_open: '20',
            complaints_closed: '30',
            nmd_value: '900000',
            nmd_total: '1033000',
            nmd_pct: `${((900000 / 1033000) * 100).toFixed(2)}%`,
            md_value: '5000',
            md_total: '7000',
            md_pct: `${((5000 / 7000) * 100).toFixed(2)}%`,
            energyTotal: '350.00MWh',
            energyTab: 'Month',
            vendingTab: 'Month',
            bandPctLegend: [
                { label: 'A', pct: '40%', color: BAND_COLORS[0] },
                { label: 'B', pct: '25%', color: BAND_COLORS[1] },
                { label: 'C', pct: '15%', color: BAND_COLORS[2] },
                { label: 'D', pct: '15%', color: BAND_COLORS[3] },
                { label: 'E', pct: '5%', color: BAND_COLORS[4] }
            ],
            energyAllocationData: {
                labels: ['A', 'B', 'C', 'D', 'E'],
                datasets: [{ data: [40, 25, 15, 15, 5], backgroundColor: BAND_COLORS, borderWidth: 0 }]
            },
            pieOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false }
            },
            totalFeederData: {
                labels: ['Band A', 'Band B', 'Band C', 'Band D', 'Band E'],
                datasets: [{ data: [188, 78, 132, 18, 5], backgroundColor: BAND_COLORS, borderWidth: 0 }]
            },
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 68,
                legend: { display: false }
            },
            energyChart: null,
            vendingChart: null
        }
    },
    methods: {
        initEnergyChart() {
            const canvas = document.getElementById('energyChart')
            if (!canvas) return
            if (this.energyChart) this.energyChart.destroy()
            this.energyChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul'],
                    datasets: [{
                        data: [55, 40, 68, 45, 50, 62],
                        borderColor: '#4ecb71',
                        backgroundColor: 'rgba(78,203,113,0.08)',
                        pointBackgroundColor: '#4ecb71',
                        pointBorderColor: '#fff',
                        pointRadius: (ctx) => ctx.dataIndex === 2 ? 6 : 3,
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
        },
        initVendingChart() {
            const canvas = document.getElementById('vendingChart')
            if (!canvas) return
            if (this.vendingChart) this.vendingChart.destroy()
            this.vendingChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Vending',
                            data: [40, 25, 15, 55, 80, 95, 70, 50, 60, 75, 60],
                            borderColor: '#4ecb71',
                            backgroundColor: 'rgba(78,203,113,0.06)',
                            pointRadius: (ctx) => ctx.dataIndex === 4 ? 6 : 0,
                            pointBackgroundColor: '#4ecb71',
                            pointBorderColor: '#fff',
                            pointBorderWidth: 2,
                            borderWidth: 2,
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Collection',
                            data: [70, 55, 30, 15, 25, 55, 70, 60, 45, 55, 70],
                            borderColor: '#5b7cfa',
                            backgroundColor: 'transparent',
                            pointRadius: 0,
                            borderWidth: 2,
                            tension: 0.4,
                            fill: false
                        }
                    ]
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
        this.$nextTick(() => {
            this.initEnergyChart()
            this.initVendingChart()
        })
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

/* Top Stat Cards */
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
    margin-bottom: 14px;
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

.red-icon-wrap  { background-color: #fdeaeb; }
.blue-icon-wrap { background-color: #eaedff; }

.top-stat-icon { font-size: 22px !important; }
.red-icon  { color: #c0392b; }
.blue-icon { color: #4a5fa5; }

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

.top-stat-divider {
    height: 1px;
    background: var(--divider);
    margin-bottom: 12px;
}

.top-stat-sub-row { display: flex; }
.top-stat-sub { flex: 1; text-align: center; }

.sub-label {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0 0 2px 0;
}

.sub-value {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
}

.border-right { border-right: 1px solid var(--border-color); }

/* Total Customers Card */
.customers-card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 14px 0;
    text-align: center;
}

.progress-item { margin-bottom: 4px; }

.progress-label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
}

.progress-name { font-size: 12px; color: var(--text-secondary); }
.progress-fraction { font-size: 11px; color: var(--text-muted); }

/* Chart Cards */
.mini-chart-card {
    border-radius: 14px;
    padding: 20px;
    margin-bottom: 12px;
    background: var(--bg-card);
}

.energy-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
}

.energy-card-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.energy-card-value {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 8px 0;
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

.chart-icon-btn-accent {
    background: #d7f5e3;
    color: #27ae60;
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

.pie-card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 10px 0;
}

.band-pct-legend {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.band-pct-item {
    font-size: 12px;
    font-weight: 700;
}

/* Vending Section */
.vending-stats-grid {
    display: flex;
    gap: 20px;
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid var(--divider);
}

.vending-stats-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.vending-stat-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
}

.vstat-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
}

.vstat-dot-green { background-color: #4ecb71; }
.vstat-dot-blue { background-color: #5b7cfa; }

.vstat-label { color: var(--text-secondary); flex: 1; }
.vstat-value { font-weight: 700; color: var(--text-primary); white-space: nowrap; }

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
}
</style>
