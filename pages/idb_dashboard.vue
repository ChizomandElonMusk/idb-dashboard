<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="row header-row" style="margin-bottom: 0;">
                <div class="col s12">
                    <h5 class="avail-title">IDB Dashboard</h5>
                    <ul class="tabs">
                        <li class="tab">
                            <a href="#idb-dashboard" class="active tab-link tab-1">
                                <i class="material-icons tiny tab-icon">speed</i> Dashboard
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#idb-feeder-loss" class="tab-link tab-2">
                                <i class="material-icons tiny tab-icon">apps</i> Feeder to DT loss Table
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#idb-customer-loss" class="tab-link tab-3">
                                <i class="material-icons tiny tab-icon">apps</i> Customer to DT loss Table
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="row filter-row">
                <div class="col s3 offset-s6">
                    <div class="filter-pill">
                        <span class="filter-label">All feeders</span>
                        <i class="material-icons filter-arrow">arrow_drop_down</i>
                    </div>
                </div>
                <div class="col s3">
                    <div class="filter-pill">
                        <span class="filter-label">Date</span>
                        <i class="material-icons filter-arrow" style="font-size:18px;">calendar_today</i>
                    </div>
                </div>
            </div>

            <!-- Dashboard Tab -->
            <div id="idb-dashboard">
                <div class="row">
                    <div class="col s12 m4">
                        <div class="card-panel top-stat-card">
                            <div class="top-stat-header">
                                <div class="top-stat-icon-wrap amber-icon-wrap">
                                    <i class="material-icons top-stat-icon amber-icon">bolt</i>
                                </div>
                                <div class="top-stat-info">
                                    <p class="top-stat-value"><AnimatedValue :value="total_energy" /></p>
                                    <p class="top-stat-label">Total Energy (MWh)</p>
                                </div>
                            </div>
                            <div class="top-stat-footer-right">
                                <span class="footer-pill footer-pill-up">{{ total_energy_change }} <i class="material-icons tiny">arrow_upward</i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card-panel top-stat-card">
                            <div class="top-stat-header">
                                <div class="top-stat-icon-wrap red-icon-wrap">
                                    <i class="material-icons top-stat-icon red-icon">device_hub</i>
                                </div>
                                <div class="top-stat-info">
                                    <p class="top-stat-value"><AnimatedValue :value="total_feeders" /></p>
                                    <p class="top-stat-label">Total Feeders</p>
                                </div>
                            </div>
                            <div class="top-stat-footer-right">
                                <span class="footer-pill footer-pill-up">{{ total_feeders_change }} <i class="material-icons tiny">arrow_upward</i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card-panel top-stat-card">
                            <div class="top-stat-header">
                                <div class="top-stat-icon-wrap green-icon-wrap">
                                    <i class="material-icons top-stat-icon green-icon">speed</i>
                                </div>
                                <div class="top-stat-info">
                                    <p class="top-stat-value"><AnimatedValue :value="flagged_meters" /></p>
                                    <p class="top-stat-label">Total flagged IDB meters</p>
                                </div>
                            </div>
                            <div class="top-stat-footer-right">
                                <span class="footer-pill footer-pill-up">{{ flagged_meters_change }} <i class="material-icons tiny">arrow_upward</i></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m4">
                        <div class="card-panel progress-card">
                            <p class="progress-card-title">Feeder – to – DT Loss</p>
                            <p class="progress-card-value">{{ feeder_dt_loss }} <span class="unit">MWh</span></p>
                            <div class="progress-row">
                                <span class="progress-label">Loss (%)</span>
                                <span class="progress-pct">{{ feeder_dt_loss_pct }}</span>
                            </div>
                            <div class="mini-track"><span class="mini-thumb red-thumb" style="left: 0%;"></span></div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card-panel progress-card">
                            <p class="progress-card-title">Customer – to – DT Loss</p>
                            <p class="progress-card-value">{{ customer_dt_loss }} <span class="unit">MWh</span></p>
                            <div class="progress-row">
                                <span class="progress-label">Loss (%)</span>
                                <span class="progress-pct">{{ customer_dt_loss_pct }}</span>
                            </div>
                            <div class="mini-track"><span class="mini-thumb red-thumb" style="left: 0%;"></span></div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card-panel top-stat-card">
                            <div class="top-stat-header">
                                <div class="top-stat-icon-wrap red-icon-wrap">
                                    <i class="material-icons top-stat-icon red-icon">device_hub</i>
                                </div>
                                <div class="top-stat-info">
                                    <p class="top-stat-value"><AnimatedValue :value="total_dts" /></p>
                                    <p class="top-stat-label">Total DTs</p>
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
                </div>

                <div class="row">
                    <div class="col s12 m6">
                        <div class="card-panel progress-card">
                            <p class="progress-card-title">Biling Efficiency</p>
                            <div class="progress-row">
                                <span class="progress-label">Biling Efficiency</span>
                                <span class="progress-pct">{{ billing_efficiency }}</span>
                            </div>
                            <div class="mini-track"><span class="mini-fill green-fill" :style="{ width: billing_efficiency }"></span></div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card-panel progress-card">
                            <p class="progress-card-title">ATC &amp; C</p>
                            <div class="progress-row">
                                <span class="progress-label">ATC &amp; C</span>
                                <span class="progress-pct">{{ atc_c }}</span>
                            </div>
                            <div class="mini-track"><span class="mini-thumb red-thumb" style="left: 0%;"></span></div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Total Customers</p>
                            <ChartPie chart-type="doughnut" :chart-data="totalCustomersData" :chart-options="doughnutOptions"
                                center-text="5,390" :show-value-legend="true" :legend-cols="1"
                                :value-labels="['88k(78.29%)', '24.4k(21.71%)']" />
                        </div>
                    </div>
                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Revenue</p>
                            <ChartPie chart-type="pie" :chart-data="revenueData" :chart-options="pieOptions"
                                :show-value-legend="true" :legend-cols="1"
                                :value-labels="['258.19M(78.29%)', '280.4M(21.71%)']" />
                        </div>
                    </div>
                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Energy</p>
                            <div class="bars-stack">
                                <div class="bar-track"><span class="bar-fill" style="width:80.93%; background:#5b7cfa;"></span></div>
                                <div class="bar-track"><span class="bar-fill" style="width:19.07%; background:#4ecb71;"></span></div>
                            </div>
                            <div class="bars-legend">
                                <div class="bars-legend-item"><span class="legend-dot" style="background:#5b7cfa;"></span> MD Energy<br><b>336.79</b><br><span class="muted">80.93%</span></div>
                                <div class="bars-legend-item"><span class="legend-dot" style="background:#4ecb71;"></span> NMD Energy<br><b>1,429.65k</b><br><span class="muted">19.07%</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Meter Communication</p>
                            <MeterCommunication :percentage="93.21" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Feeder to DT loss Table Tab -->
            <div id="idb-feeder-loss">
                <div class="table-wrapper">
                    <table class="idb-table amber-header">
                        <thead>
                            <tr>
                                <th>Feeder</th>
                                <th>Date</th>
                                <th>Band</th>
                                <th>Total Public DTs</th>
                                <th>Public DTs Energy</th>
                                <th>Total Private DTs</th>
                                <th>Private DTs Energy</th>
                                <th>Total DT Energy</th>
                                <th>Feeder Energy</th>
                                <th>Feeder to DT Loss</th>
                                <th>Feeder Loss %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in feederLossRows" :key="i">
                                <td>{{ row.feeder }}</td>
                                <td>{{ row.date }}</td>
                                <td>{{ row.band }}</td>
                                <td>{{ row.total_public_dts }}</td>
                                <td>{{ row.public_dts_energy }}</td>
                                <td>{{ row.total_private_dts }}</td>
                                <td>{{ row.private_dts_energy }}</td>
                                <td>{{ row.total_dt_energy }}</td>
                                <td>{{ row.feeder_energy }}</td>
                                <td>{{ row.feeder_to_dt_loss }}</td>
                                <td>{{ row.feeder_loss_pct }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Customer to DT loss Table Tab -->
            <div id="idb-customer-loss">
                <div class="table-wrapper">
                    <table class="idb-table red-header">
                        <thead>
                            <tr>
                                <th>Feeders</th>
                                <th>All Customers</th>
                                <th>Postpaid MD</th>
                                <th>Comms %</th>
                                <th>Total Meters Communicating</th>
                                <th>Prepaid MD</th>
                                <th>IDB Prepay</th>
                                <th>DT Consumption</th>
                                <th>IDB Prepay Consumption</th>
                                <th>MD Prepay Consumption</th>
                                <th>Postpaid Consumption</th>
                                <th>IDB + MD Consumption</th>
                                <th>CE</th>
                                <th>BE</th>
                                <th>ATC</th>
                                <th>%Current Loss</th>
                                <th>Customer - to - dt - loss</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in customerLossRows" :key="i">
                                <td>{{ row.feeder }}</td>
                                <td>{{ row.all_customers }}</td>
                                <td>{{ row.postpaid_md }}</td>
                                <td>{{ row.comms_pct }}</td>
                                <td>{{ row.total_meters_communicating }}</td>
                                <td>{{ row.prepaid_md }}</td>
                                <td>{{ row.idb_prepay }}</td>
                                <td>{{ row.dt_consumption }}</td>
                                <td>{{ row.idb_prepay_consumption }}</td>
                                <td>{{ row.md_prepay_consumption }}</td>
                                <td>{{ row.postpaid_consumption }}</td>
                                <td>{{ row.idb_md_consumption }}</td>
                                <td>{{ row.ce }}</td>
                                <td>{{ row.be }}</td>
                                <td>{{ row.atc }}</td>
                                <td>{{ row.current_loss_pct }}</td>
                                <td>{{ row.customer_to_dt_loss }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import ChartPie from '~/components/ChartPie.vue'
import MeterCommunication from '~/components/MeterCommunication.vue'
// UI-first rebuild to match the Figma "IDB Dashboard" screen exactly. Data below is static mock
// content taken from the Figma mockup — real API wiring will be reintroduced once the backend
// team ships the matching endpoint shape.

export default {
    components: { SideNav, AnimatedValue, ChartPie, MeterCommunication },
    data() {
        return {
            total_energy: '1,917.66',
            total_energy_change: '+13.6%',
            total_feeders: '2',
            total_feeders_change: '+3.6%',
            flagged_meters: '32',
            flagged_meters_change: '+13.6%',
            feeder_dt_loss: '151.22',
            feeder_dt_loss_pct: '0.00%',
            customer_dt_loss: '116.91',
            customer_dt_loss_pct: '0.00%',
            total_dts: '61',
            public_dts: '31',
            private_dts: '30',
            billing_efficiency: '10.20%',
            atc_c: '0.00%',
            totalCustomersData: {
                labels: ['NMD Customers', 'MD Customers'],
                datasets: [{ data: [88000, 24400], backgroundColor: ['#5b7cfa', '#8de8c5'] }]
            },
            revenueData: {
                labels: ['Revenue Billed', 'Revenue Collected'],
                datasets: [{ data: [258.19, 280.4], backgroundColor: ['#e991c4', '#f0a83a'] }]
            },
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 68,
                legend: { display: false }
            },
            pieOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false }
            },
            feederLossRows: Array.from({ length: 8 }, () => ({
                feeder: '11 - IgbobiINJ-T1 - Apata',
                date: '2026 - Jan',
                band: 'A',
                total_public_dts: 21,
                public_dts_energy: '1,179.05',
                total_private_dts: 18,
                private_dts_energy: '53.22',
                total_dt_energy: '1,232,265.67',
                feeder_energy: '1,291,260.00',
                feeder_to_dt_loss: '58,994.33',
                feeder_loss_pct: '4.57%'
            })),
            customerLossRows: Array.from({ length: 8 }, () => ({
                feeder: '11 - IgbobiINJ-T1 - Apata',
                all_customers: 211,
                postpaid_md: 5,
                comms_pct: '90.84%',
                total_meters_communicating: 119,
                prepaid_md: 1,
                idb_prepay: 203,
                dt_consumption: '81,807.62',
                idb_prepay_consumption: '48,649.64',
                md_prepay_consumption: '15.33',
                postpaid_consumption: '15,114.30',
                idb_md_consumption: '63,779.27',
                ce: '107.48%',
                be: '77.96%',
                atc: '16.21%',
                current_loss_pct: '22.04%',
                customer_to_dt_loss: '18,028.35'
            }))
        }
    },
    mounted() {
        this.$nextTick(() => {
            const el = document.querySelector('.tabs')
            if (el) M.Tabs.init(el, {})
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

.avail-title {
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

/* Tabs */
.tabs {
    background: transparent;
    border-bottom: 1px solid var(--border-strong);
    margin-bottom: 10px;
}

.tabs .tab a {
    color: var(--text-muted);
    text-transform: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.tabs .tab a .tab-icon {
    font-size: 16px !important;
}

.tabs .tab a.active.tab-1 {
    color: #c0392b;
    border-bottom: 2px solid #c0392b;
}

.tabs .tab a.active.tab-2 {
    color: #e8941a;
    border-bottom: 2px solid #e8941a;
}

.tabs .tab a.active.tab-3 {
    color: #c0392b;
    border-bottom: 2px solid #c0392b;
}

.tabs .indicator {
    display: none;
}

/* Filters */
.filter-row {
    margin-bottom: 14px;
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
}

.filter-label {
    font-size: 13px;
    color: var(--text-secondary);
}

.filter-arrow {
    color: var(--text-muted);
    font-size: 20px !important;
}

/* Top stat cards */
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
.red-icon-wrap { background-color: #fdeaeb; }
.green-icon-wrap { background-color: #e3f7ea; }

.top-stat-icon { font-size: 22px !important; }
.amber-icon { color: #f5a623; }
.red-icon { color: #c0392b; }
.green-icon { color: #27ae60; }

.top-stat-info { flex: 1; }

.top-stat-value {
    font-size: 24px;
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

.top-stat-footer-right {
    display: flex;
    justify-content: flex-end;
    margin-top: 6px;
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

.top-stat-divider {
    height: 1px;
    background: var(--divider);
    margin: 10px 0;
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

/* Progress cards */
.progress-card {
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 12px;
    background: var(--bg-card);
}

.progress-card-title {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0 0 8px 0;
}

.progress-card-value {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 12px 0;
}

.progress-card-value .unit {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-muted);
}

.progress-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
}

.progress-label {
    font-size: 12px;
    color: var(--text-muted);
}

.progress-pct {
    font-size: 12px;
    color: var(--text-muted);
}

.mini-track {
    position: relative;
    height: 6px;
    border-radius: 4px;
    background: rgba(91,124,250,0.12);
}

.mini-thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.red-thumb { background: #c0392b; }

.mini-fill {
    display: block;
    height: 100%;
    border-radius: 4px;
}

.green-fill { background: #27ae60; }

/* Mini chart cards */
.mini-chart-card {
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 12px;
    background: var(--bg-card);
    min-height: 260px;
}

.pie-card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 10px 0;
}

.bars-stack {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 14px;
}

.bar-track {
    height: 8px;
    border-radius: 4px;
    background: rgba(0,0,0,0.06);
    overflow: hidden;
}

.bar-fill {
    display: block;
    height: 100%;
    border-radius: 4px;
}

.bars-legend {
    display: flex;
    gap: 16px;
}

.bars-legend-item {
    font-size: 11px;
    color: var(--text-secondary);
    line-height: 1.6;
}

.bars-legend-item b {
    color: var(--text-primary);
    font-size: 13px;
}

.bars-legend-item .muted {
    color: var(--text-muted);
}

.legend-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 4px;
}

/* Tables */
.table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.idb-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 6px;
}

.idb-table.amber-header thead tr th { background-color: #e8941a; }
.idb-table.red-header thead tr th { background-color: #c0392b; }

.idb-table thead tr th {
    color: #fff;
    padding: 14px 16px;
    font-weight: 500;
    font-size: 13px;
    white-space: nowrap;
}

.idb-table thead tr th:first-child {
    border-radius: 10px 0 0 10px;
}

.idb-table thead tr th:last-child {
    border-radius: 0 10px 10px 0;
}

.idb-table tbody tr td {
    background: var(--bg-card);
    padding: 12px 16px;
    font-size: 13px;
    color: var(--text-secondary);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    white-space: nowrap;
}

.idb-table tbody tr td:first-child {
    border-left: 1px solid var(--border-color);
    border-radius: 8px 0 0 8px;
}

.idb-table tbody tr td:last-child {
    border-right: 1px solid var(--border-color);
    border-radius: 0 8px 8px 0;
}

@media only screen and (max-width: 992px) {
    .main-content {
        padding-left: 20px;
    }
}
</style>
