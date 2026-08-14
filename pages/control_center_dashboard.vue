<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="avail-header">
                <h5 class="avail-title">Control Center Dashboard</h5>
            </div>

            <div v-if="loading" class="state-panel">
                <PreLoader />
            </div>

            <div v-else-if="error" class="state-panel">
                <p class="state-message">Could not load Control Center data: {{ error }}</p>
                <button class="btn-flat retry-btn" @click="getData">Retry</button>
            </div>

            <!-- dashboard section -->
            <div v-else class="row" id="dashboard">

                <!-- Top Stats Row -->
                <div class="row top-cards-row">

                    <!-- Card 1: Total Feeders -->
                    <div class="col s12 m3">
                        <div class="card-panel top-stat-card">
                            <div class="top-stat-header">
                                <div class="top-stat-icon-wrap red-icon-wrap">
                                    <i class="material-icons top-stat-icon red-icon">device_hub</i>
                                </div>
                                <div class="top-stat-info">
                                    <p class="top-stat-value"><AnimatedValue :value="online_feeders" /></p>
                                    <p class="top-stat-label">Total feeders</p>
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

                    <!-- Card 2: Total DTs -->
                    <div class="col s12 m3">
                        <div class="card-panel top-stat-card">
                            <div class="top-stat-header">
                                <div class="top-stat-icon-wrap red-icon-wrap">
                                    <i class="material-icons top-stat-icon red-icon">bolt</i>
                                </div>
                                <div class="top-stat-info">
                                    <p class="top-stat-value"><AnimatedValue :value="online_dts" /></p>
                                    <p class="top-stat-label">Total DTs</p>
                                </div>
                            </div>
                            <div class="top-stat-divider"></div>
                            <div class="top-stat-sub-row">
                                <div class="top-stat-sub border-right">
                                    <p class="sub-label">Public</p>
                                    <p class="sub-value"><AnimatedValue :value="public_dts" /></p>
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
                                    <p class="top-stat-value"><AnimatedValue :value="total_complaints" /></p>
                                    <p class="top-stat-label">Total Customer Complaints</p>
                                </div>
                            </div>
                            <div class="top-stat-divider"></div>
                            <div class="top-stat-sub-row">
                                <div class="top-stat-sub border-right">
                                    <p class="sub-label">Open</p>
                                    <p class="sub-value"><AnimatedValue :value="open_complaints" /></p>
                                </div>
                                <div class="top-stat-sub">
                                    <p class="sub-label">Closed</p>
                                    <p class="sub-value"><AnimatedValue :value="closed_complaints" /></p>
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
                                    <span class="progress-name">NMD</span>
                                    <span class="progress-fraction">
                                        <AnimatedValue :value="nmd_value" />/{{ nmd_total }}
                                    </span>
                                </div>
                                <div class="progress indigo lighten-4" style="height:8px; border-radius:4px;">
                                    <div class="determinate indigo accent-2" :style="{ width: nmd_pct }"></div>
                                </div>
                            </div>
                            <div class="progress-item" style="margin-top: 14px;">
                                <div class="progress-label-row">
                                    <span class="progress-name">MD</span>
                                    <span class="progress-fraction">
                                        <AnimatedValue :value="md_value" />/{{ md_total }}
                                    </span>
                                </div>
                                <div class="progress green lighten-4" style="height:8px; border-radius:4px;">
                                    <div class="determinate green" :style="{ width: md_pct }"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Energy + Pie Row -->
                <div class="row">
                    <div class="col s12 m9">
                        <div class="card-panel mini-chart-card" style="padding-bottom: 20px;">
                            <div class="energy-card-header">
                                <div>
                                    <p class="energy-card-title">Energy</p>
                                    <p class="energy-card-value">{{ energyTotal }}</p>
                                    <div class="loss-row">
                                        <span class="loss-label">Feeder&rarr;DT loss: {{ lossPctDisplay }}</span>
                                    </div>
                                </div>
                            </div>
                            <div style="position: relative; height:180px; overflow:visible;">
                                <canvas id="energyChart"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Energy Allocation per MYTO Band</p>
                            <ChartPie
                                v-if="energyAllocationData"
                                chart-type="pie"
                                :chart-data="energyAllocationData"
                                :chart-options="pieOptions"
                            />
                        </div>
                    </div>
                </div>

                <!-- Vending & Collection -->
                <div class="row">
                    <div class="col s12">
                        <div class="card-panel mini-chart-card" style="padding-bottom: 20px;">
                            <span class="vending-card-title">Vending &amp; Collection</span>
                            <div style="position: relative; height:160px; padding-bottom:20px; overflow:visible; margin-top: 14px;">
                                <canvas id="vendingChart"></canvas>
                            </div>
                            <hr style="margin-top: 40px;">
                            <div class="vending-stats-grid">
                                <div class="vending-stats-col">
                                    <div class="vending-stat-row">
                                        <span class="vstat-dot vstat-dot-green"></span>
                                        <span class="vstat-label">Total Customers Vended Today</span>
                                        <span class="vstat-value">{{ total_customer_vended_today }}</span>
                                    </div>
                                    <div class="vending-stat-row">
                                        <span class="vstat-dot vstat-dot-green"></span>
                                        <span class="vstat-label">Amount Vended Today</span>
                                        <span class="vstat-value">{{ amount_vended_today }}</span>
                                    </div>
                                    <div class="vending-stat-row">
                                        <span class="vstat-dot vstat-dot-green"></span>
                                        <span class="vstat-label">Amount Vended MTD</span>
                                        <span class="vstat-value">{{ amount_vended_mtd }}</span>
                                    </div>
                                </div>
                                <div class="vending-stats-col">
                                    <div class="vending-stat-row">
                                        <span class="vstat-dot vstat-dot-blue"></span>
                                        <span class="vstat-label">Total Collection Today</span>
                                        <span class="vstat-value">{{ total_collection_today }}</span>
                                    </div>
                                    <div class="vending-stat-row">
                                        <span class="vstat-dot vstat-dot-blue"></span>
                                        <span class="vstat-label">Amount Collected MTD</span>
                                        <span class="vstat-value">{{ amount_collected_mtd }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- dashboard ends here -->

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import ChartPie from '~/components/ChartPie.vue'
import Chart from '~/assets/js/Chart.js'
// Live API wiring (js_modules/controlCenterApi.js) stays in the codebase but is not
// called right now — this page is intentionally running on demo data. To go live again,
// restore the async getData()/loadEnergyTrend() that call controlCenterApi.*.
// import * as controlCenterApi from '~/js_modules/controlCenterApi.js'
// import { pick, formatNumber, lastNMonths, monthLabel } from '~/js_modules/controlCenterApi.js'

export default {
    components: { SideNav, AnimatedValue, ChartPie },
    data() {
        return {
            loading: true,
            error: null,
            /* top stat cards */
            online_feeders: '0',
            kv11: '0',
            kv33: '0',
            online_dts: '0',
            public_dts: '0',
            private_dts: '0',
            total_complaints: '0',
            open_complaints: '0',
            closed_complaints: '0',
            nmd_value: '0',
            nmd_total: '1,033,000',
            nmd_pct: '0%',
            md_value: '0',
            md_total: '7,000',
            md_pct: '0%',
            /* vending stats */
            total_customer_vended_today: '0',
            amount_vended_today: '0',
            amount_vended_mtd: '0',
            total_collection_today: '0',
            amount_collected_mtd: '0',
            /* loss */
            lossPctDisplay: '—',
            /* chart data */
            energyAllocationData: null,
            pieOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false },
                plugins: {
                    labels: { render: 'label', fontColor: '#fff', fontSize: 11 }
                }
            },
            /* energy chart */
            energyChart: null,
            energyData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Feeder Energy (MWh)',
                    data: [30, 25, 43, 38, 28, 32, 36],
                    borderColor: '#5ebd8d',
                    backgroundColor: 'rgba(235,250,243,0.6)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 4,
                    pointBackgroundColor: '#5ebd8d',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            energyOptions: {
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
                        label: function(tooltipItems) { return tooltipItems.yLabel + ' MWh' }
                    }
                },
                scales: {
                    xAxes: [{ gridLines: { display: false }, ticks: { fontColor: '#aaa' } }],
                    yAxes: [{ gridLines: { color: 'rgba(0,0,0,0.04)' }, ticks: { display: false } }]
                }
            },
            energyTotal: '—',
            /* vending chart */
            vendingChart: null,
            vendingData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Vending',
                        data: [350, 250, 180, 320, 480, 400, 220, 150, 260, 380, 420, 380],
                        borderColor: '#5ebd8d',
                        backgroundColor: 'rgba(94,189,141,0.1)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: '#5ebd8d'
                    },
                    {
                        label: 'Collection',
                        data: [200, 150, 200, 380, 280, 180, 150, 200, 320, 280, 350, 390],
                        borderColor: '#5b7cfa',
                        backgroundColor: 'rgba(91,124,250,0.08)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: '#5b7cfa'
                    }
                ]
            },
            vendingOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: true },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItems) { return tooltipItems.yLabel + ' MWh' }
                    }
                },
                scales: {
                    xAxes: [{ gridLines: { display: false }, ticks: { fontColor: '#888' } }],
                    yAxes: [{ gridLines: { display: false }, ticks: { beginAtZero: true } }]
                }
            }
        }
    },
    methods: {
        getData() {
            // DEMO MODE — hardcoded values for today's demo, no network calls.
            this.loading = true
            this.error = null

            this.online_feeders = '200'
            this.kv11 = '150'
            this.kv33 = '50'
            this.online_dts = '1,200'
            this.public_dts = '1,000'
            this.private_dts = '200'
            this.total_complaints = '50'
            this.open_complaints = '20'
            this.closed_complaints = '30'
            this.nmd_value = '900,000'
            this.nmd_pct = '87%'
            this.md_value = '5,000'
            this.md_pct = '71%'
            this.total_customer_vended_today = '30,400,000'
            this.amount_vended_today = '₦30,400,000'
            this.amount_vended_mtd = '₦2,000,000,000'
            this.total_collection_today = '₦50,000,000'
            this.amount_collected_mtd = '₦7,000,000,000'
            this.lossPctDisplay = '7.87%'
            this.energyTotal = '350.00 MWh'

            this.energyAllocationData = {
                labels: ['Band A', 'Band B', 'Band C', 'Band D', 'Band E'],
                datasets: [{
                    data: [35, 25, 20, 12, 8],
                    backgroundColor: this.bandColors,
                    borderWidth: 0
                }]
            }

            this.loading = false
        },
        initEnergyChart() {
            const canvas = document.getElementById('energyChart')
            if (!canvas) return
            if (this.energyChart) this.energyChart.destroy()
            this.energyChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: this.energyData,
                options: this.energyOptions
            })
        },
        initVendingChart() {
            const canvas = document.getElementById('vendingChart')
            if (!canvas) return
            if (this.vendingChart) this.vendingChart.destroy()
            this.vendingChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: this.vendingData,
                options: this.vendingOptions
            })
        }
    },
    computed: {
        bandColors() {
            return ['#5b7cfa', '#6dd4c7', '#c87dff', '#ff6b6b', '#ffa94e', '#4ecdc4']
        }
    },
    mounted() {
        this.getData()
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

.pending-note {
    font-size: 12px;
    color: var(--text-muted);
    margin: 8px 0 0 0;
}

.pending-card {
    padding: 20px;
    text-align: center;
}

.loss-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
}

.loss-label {
    font-size: 11px;
    color: var(--text-muted);
}

/* ── Top Stat Cards ── */
.top-cards-row {
    margin-bottom: 0;
}

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
    border-radius: 10px;
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

.top-stat-info {
    flex: 1;
}

.top-stat-value {
    font-size: 28px;
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

.top-stat-sub-row {
    display: flex;
}

.top-stat-sub {
    flex: 1;
    text-align: center;
}

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

.border-right {
    border-right: 1px solid var(--border-color);
}

/* ── Total Customers Card ── */
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

.progress-name {
    font-size: 12px;
    color: var(--text-secondary);
}

.progress-fraction {
    font-size: 11px;
    color: var(--text-muted);
}

/* ── Energy Chart Card ── */
.mini-chart-card {
    border-radius: 14px;
    margin-bottom: 12px;
    background: var(--bg-card);
}

.energy-card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 8px;
}

.energy-card-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 2px 0;
}

.energy-card-value {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
}

.pie-card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 10px 0;
}

/* ── Vending Section ── */
.vending-card-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    margin-right: 8px;
}

.vending-stats-grid {
    display: flex;
    gap: 20px;
    margin-top: 12px;
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
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.vstat-dot::after {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
}

.vstat-dot-green { border-color: #5ebd8d; }
.vstat-dot-green::after { background-color: #5ebd8d; }
.vstat-dot-blue { border-color: #5b7cfa; }
.vstat-dot-blue::after { background-color: #5b7cfa; }

.vstat-label { color: var(--text-secondary); flex: 1; }
.vstat-value { font-weight: 700; color: var(--text-primary); white-space: nowrap; }

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
}
</style>
