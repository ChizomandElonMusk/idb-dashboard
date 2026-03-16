<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="avail-header">
                <h5 class="avail-title">Control Center Dashboard</h5>
            </div>

            <!-- dashboard section -->
            <div class="row" id="dashboard">

                <!-- Top Stats Row -->
                <div class="row top-cards-row">

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
                                    <p class="sub-value"><AnimatedValue :value="kv11" /></p>
                                </div>
                                <div class="top-stat-sub">
                                    <p class="sub-label">33kv</p>
                                    <p class="sub-value"><AnimatedValue :value="kv33" /></p>
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
                                    <p class="sub-value"><AnimatedValue :value="public_dts" /></p>
                                </div>
                                <div class="top-stat-sub">
                                    <p class="sub-label">Private</p>
                                    <p class="sub-value"><AnimatedValue :value="private_dts" /></p>
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
                                    <span class="progress-name">Metered NMD</span>
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
                                    <span class="progress-name">Metered MD</span>
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
                                </div>
                                <div class="energy-period-btns">
                                    <button class="btn-flat btn-small period-btn">Day</button>
                                    <button class="btn-flat btn-small period-btn">Week</button>
                                    <button class="btn-flat btn-small period-btn period-btn-active">Month</button>
                                    <button class="btn-flat btn-small period-btn period-btn-icon">
                                        <i class="material-icons tiny">calendar_today</i>
                                    </button>
                                    <button class="btn-flat btn-small period-btn period-btn-icon">
                                        <i class="material-icons tiny">grid_on</i>
                                    </button>
                                </div>
                            </div>
                            <div style="position: relative; height:180px; overflow:visible;">
                                <canvas id="energyChart"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Energy Allocation per Feeder Band</p>
                            <ChartPie
                                v-if="energyAllocationData"
                                chart-type="pie"
                                :chart-data="energyAllocationData"
                                :chart-options="pieOptions"
                            />
                        </div>
                    </div>
                </div>

                <!-- Vending & Collection + Doughnut Row -->
                <div class="row">
                    <div class="col s12 m9">
                        <div class="card-panel mini-chart-card" style="padding-bottom: 20px;">
                            <div class="vending-card-header">
                                <span class="vending-card-title">Vending &amp; Collection</span>
                                <div class="vending-period-btns">
                                    <button class="btn-flat btn-small period-btn">Day</button>
                                    <button class="btn-flat btn-small period-btn">Week</button>
                                    <button class="btn-flat btn-small period-btn period-btn-active">Month</button>
                                    <button class="btn-flat btn-small period-btn period-btn-icon">
                                        <i class="material-icons tiny">calendar_today</i>
                                    </button>
                                </div>
                            </div>
                            <div style="position: relative; height:160px; padding-bottom:20px; overflow:visible;">
                                <canvas id="vendingChart"></canvas>
                            </div>
                            <hr style="margin-top: 40px;">
                            <div class="vending-stats-grid">
                                <div class="vending-stats-col">
                                    <div class="vending-stat-row">
                                        <span class="vstat-dot vstat-dot-green"></span>
                                        <span class="vstat-label">Total customer Vended Today</span>
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

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Total Feeder</p>
                            <ChartPie
                                v-if="vendingAllocationData"
                                chart-type="doughnut"
                                :chart-data="vendingAllocationData"
                                :chart-options="vendingPieOptions"
                                :center-text="vending_allocation"
                                :show-value-legend="true"
                            />
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

export default {
    components: { SideNav, AnimatedValue, ChartPie },
    data() {
        return {
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
            /* chart data */
            energy_allocation: '0',
            vending_allocation: '0',
            energyAllocationData: null,
            vendingAllocationData: null,
            pieOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false },
                plugins: {
                    labels: { render: 'label', fontColor: '#fff', fontSize: 11 }
                }
            },
            vendingPieOptions: { responsive: true, maintainAspectRatio: false, legend: { display: false } },
            /* energy chart */
            energyChart: null,
            energyData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Energy (MWh)',
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
            energyTotal: '350.00MWh',
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
            this.online_feeders = '200'
            this.kv11 = '150'
            this.kv33 = '50'
            this.online_dts = '1200'
            this.public_dts = '1000'
            this.private_dts = '200'
            this.total_complaints = '50'
            this.open_complaints = '20'
            this.closed_complaints = '30'
            this.nmd_value = '900,000'
            this.nmd_pct = '87%'
            this.md_value = '5,000'
            this.md_pct = '71%'
            this.total_customer_vended_today = '30,400,000'
            this.amount_vended_today = '30,400,000'
            this.amount_vended_mtd = '2,000,000,000'
            this.total_collection_today = '50,000,000'
            this.amount_collected_mtd = '7,000,000,000'

            const energy_allocationSegments = [
                { value: 40, color: '#5b7cfa', name: 'A' },
                { value: 25, color: '#6dd4c7', name: 'B' },
                { value: 15, color: '#c87dff', name: 'C' },
                { value: 15, color: '#ff6b6b', name: 'D' },
                { value: 5,  color: '#ffa94e', name: 'E' },
            ]
            this.energyAllocationData = {
                labels: energy_allocationSegments.map(s => s.name),
                datasets: [{
                    data: energy_allocationSegments.map(s => s.value),
                    backgroundColor: energy_allocationSegments.map(s => s.color),
                    borderWidth: 0
                }]
            }

            const vending_allocationSegments = [
                { value: 188, color: '#5b7cfa', name: 'Band A' },
                { value: 78,  color: '#6dd4c7', name: 'Band B' },
                { value: 132, color: '#c87dff', name: 'Band C' },
                { value: 18,  color: '#ff6b6b', name: 'Band D' },
                { value: 5,   color: '#ffa94e', name: 'Band E' },
            ]
            this.vending_allocation = String(vending_allocationSegments.reduce((sum, s) => sum + s.value, 0))
            this.vendingAllocationData = {
                labels: vending_allocationSegments.map(s => s.name),
                datasets: [{
                    data: vending_allocationSegments.map(s => s.value),
                    backgroundColor: vending_allocationSegments.map(s => s.color),
                    borderWidth: 0
                }]
            }
        }
    },
    mounted() {
        this.getData()

        const ctx = document.getElementById('energyChart').getContext('2d')
        this.energyChart = new Chart(ctx, {
            type: 'line',
            data: this.energyData,
            options: this.energyOptions
        })

        const ctx2 = document.getElementById('vendingChart').getContext('2d')
        this.vendingChart = new Chart(ctx2, {
            type: 'line',
            data: this.vendingData,
            options: this.vendingOptions
        })
    }
}
</script>

<style scoped>
.dashboard-wrapper {
    background-color: #f0f2f8;
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
    color: #222;
    margin: 0;
}

/* ── Top Stat Cards ── */
.top-cards-row {
    margin-bottom: 0;
}

.top-stat-card {
    border-radius: 14px;
    padding: 18px 16px 14px;
    margin-bottom: 12px;
    background: #fff;
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
    color: #1a1a2e;
    margin: 0 0 2px 0;
    line-height: 1.1;
}

.top-stat-label {
    font-size: 12px;
    color: #888;
    margin: 0;
}

.top-stat-divider {
    height: 1px;
    background: #f0f0f0;
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
    color: #999;
    margin: 0 0 2px 0;
}

.sub-value {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0;
}

.border-right {
    border-right: 1px solid #eee;
}

/* ── Total Customers Card ── */
.customers-card-title {
    font-size: 13px;
    font-weight: 600;
    color: #555;
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
    color: #666;
}

.progress-fraction {
    font-size: 11px;
    color: #888;
}

/* ── Energy Chart Card ── */
.mini-chart-card {
    border-radius: 14px;
    margin-bottom: 12px;
    background: #fff;
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
    color: #1a1a2e;
    margin: 0 0 2px 0;
}

.energy-card-value {
    font-size: 22px;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0;
}

.energy-period-btns {
    display: flex;
    align-items: center;
    gap: 2px;
}

.pie-card-title {
    font-size: 13px;
    font-weight: 600;
    color: #444;
    margin: 0 0 10px 0;
}

/* ── Period Buttons ── */
.period-btn {
    color: #aaa;
    font-size: 12px;
    padding: 0 10px;
    border-radius: 6px;
    text-transform: none;
    height: 30px;
    line-height: 30px;
}

.period-btn-active {
    background: #fff;
    color: #222;
    font-weight: 600;
    box-shadow: 0 1px 4px rgba(0,0,0,0.12);
    border: 1px solid #e8e8e8;
}

.period-btn-icon {
    border: 1px solid #eee;
    border-radius: 6px;
    color: #888;
    padding: 0 8px;
    display: flex;
    align-items: center;
}

/* ── Vending Section ── */
.vending-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.vending-card-title {
    font-size: 15px;
    font-weight: 600;
    color: #1a1a2e;
}

.vending-period-btns {
    display: flex;
    align-items: center;
    gap: 2px;
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

.vstat-label { color: #666; flex: 1; }
.vstat-value { font-weight: 700; color: #222; white-space: nowrap; }

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
}
</style>
