<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="row header-row" style="margin-bottom: 0;">
                <div class="col s12">
                    <h5 class="avail-title">IDB Dashboard</h5>
                    <ul class="tabs">
                        <li class="tab">
                            <a href="#dashboard" class="active tab-link dashboard-tab">
                                <i class="material-icons tiny tab-icon">speed</i> Dashboard
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#feeder-loss" class="tab-link feeder-tab">
                                <i class="material-icons tiny tab-icon">apps</i> Feeder to DT Loss Table
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#customer-loss" class="tab-link customer-tab">
                                <i class="material-icons tiny tab-icon">apps</i> Customer to DT loss Table
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Filters -->
            <div class="filter-row-right">
                <div class="filter-pill">
                    <span class="filter-label">All feeders</span>
                    <i class="material-icons filter-arrow">arrow_drop_down</i>
                </div>
                <div class="filter-pill">
                    <span class="filter-label">Date</span>
                    <i class="material-icons" style="font-size:18px; color:#888;">calendar_today</i>
                </div>
            </div>

            <div v-if="loading" class="state-panel">
                <PreLoader />
            </div>
            <div v-else-if="error" class="state-panel">
                <p class="state-message">Could not load IDB dashboard data: {{ error }}</p>
                <button class="btn-flat retry-btn" @click="getData">Retry</button>
            </div>

            <template v-else>

            <!-- this is the dashboard section -->

            <div class="row" id="dashboard">
                <div class="row">
                    <div class="col s12 m4">
                        <div class="card-panel stats-card">
                            <div class="valign-wrapper">
                                <div class="icon-circle orange"><i class="material-icons white-text">bolt</i></div>
                                <div class="stats-text">
                                    <AnimatedValue class="value" :value="energy_total" />
                                    <p class="grey-text">Total Feeder Energy Raw</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card-panel stats-card">
                            <div class="valign-wrapper">
                                <div class="icon-circle red darken-2"><i class="material-icons white-text">router</i>
                                </div>
                                <div class="stats-text">
                                    <AnimatedValue class="value" :value="total_feeders" />
                                    <p class="grey-text">Total Feeders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card-panel stats-card">
                            <div class="valign-wrapper">
                                <div class="icon-circle green"><i
                                        class="material-icons white-text">battery_charging_full</i></div>
                                <div class="stats-text">
                                    <AnimatedValue class="value" :value="total_flagged" />
                                    <p class="grey-text">High-impact feeders (P99 flag)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m4">
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2">Feeder - to - DT Loss</p>
                            <h5>
                                <AnimatedValue :value="feeder_loss" />
                            </h5>
                            <p class="tiny-text grey-text">Loss (%) <span class="right">
                                    <AnimatedValue :value="feeder_loss_pct" />
                                </span></p>
                            <div class="progress red lighten-4">
                                <div class="determinate red" :style="{ width: feeder_loss_pct }"></div>
                            </div>
                        </div>
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2">Billing Efficiency</p>
                            <h5><AnimatedValue :value="billing_eff" /></h5>
                        </div>
                    </div>

                    <div class="col s12 m4">
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2">Customer - to - DT Loss</p>
                            <h5><AnimatedValue :value="customer_loss" /></h5>
                            <p class="tiny-text grey-text">Loss (%) <span class="right">
                                    <AnimatedValue :value="customer_loss_pct" />
                                </span></p>
                        </div>
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2">ATC &amp; C</p>
                            <h5><AnimatedValue :value="atc_c" /></h5>
                        </div>
                    </div>

                    <div class="col s12 m4">
                        <div class="card-panel dt-summary-card mini-chart-card" style="padding-bottom: 82px">
                            <div class="row center-align">
                                <div class="col s12">
                                    <h3>
                                        <div class="icon-circle red darken-2" style="margin: 0 auto;"><i
                                                class="material-icons white-text">router</i></div>
                                        <AnimatedValue :value="total_dts" />
                                    </h3>
                                    <p class="grey-text">Total DTs</p>
                                    <div class="divider"></div>
                                </div>
                                <div class="col s6 border-right">
                                    <h5>
                                        <AnimatedValue :value="public_dts" />
                                    </h5>
                                    <p class="grey-text">Public</p>
                                </div>
                                <div class="col s6">
                                    <h5>
                                        <AnimatedValue :value="private_dts" />
                                    </h5>
                                    <p class="grey-text">Private</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2 center">Total Customers</p>
                            <ChartPie v-if="doughnutData" chart-type="doughnut" :chart-data="doughnutData"
                                :chart-options="pieOptions" :center-text="total_customers" />
                            <div class="chart-legend-list">
                                <div class="cleg-item" v-for="item in customerLegend" :key="item.label">
                                    <span class="cleg-dot" :style="{ backgroundColor: item.color }"></span>
                                    <span class="cleg-label">{{ item.label }}</span>
                                    <span class="cleg-val">{{ item.value }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2 center">Revenue</p>
                            <ChartPie v-if="revenueData" chart-type="doughnut" :chart-data="revenueData"
                                :chart-options="pieOptions" :center-text="revenue" />
                            <div class="chart-legend-list">
                                <div class="cleg-item" v-for="item in revenueLegend" :key="item.label">
                                    <span class="cleg-dot" :style="{ backgroundColor: item.color }"></span>
                                    <span class="cleg-label">{{ item.label }}</span>
                                    <span class="cleg-val">{{ item.value }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2 center">Energy by Demand Type</p>
                            <ChartPie v-if="demandData" chart-type="doughnut" :chart-data="demandData"
                                :chart-options="pieOptions" />
                            <div class="chart-legend-list">
                                <div class="cleg-item" v-for="item in demandLegend" :key="item.label">
                                    <span class="cleg-dot" :style="{ backgroundColor: item.color }"></span>
                                    <span class="cleg-label">{{ item.label }}</span>
                                    <span class="cleg-val">{{ item.value }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card" style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
                            <p class="grey-text text-darken-2 center">Meter Communication</p>
                            <MeterCommunication :percentage="meter_comm_pct" />
                        </div>
                    </div>


                </div>
            </div>
            <!-- dashboard ends here -->


            <!-- feeder to DT loss table section -->
            <div class="row" id="feeder-loss">
                <div class="col s12">
                    <div class="table-wrapper">
                        <table class="rounded-header striped highlight">
                            <thead class="orange white-text" style="border: 1px solid #ff9800;">
                                <tr>
                                    <th>Feeder</th>
                                    <th>Date</th>
                                    <th>Band</th>
                                    <th>Total Public DTs</th>
                                    <th>Public DTs</th>
                                    <th>Total Private DTs</th>
                                    <th>Private DTs Energy</th>
                                    <th>Total DT Energy</th>
                                    <th>Feeder Energy</th>
                                    <th>Feeder to DT Loss</th>
                                    <th>Feeder Loss</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="value in feeder_to_dt_loss_data" :key="value.feeder + value.date">
                                    <td style="font-size: 12px; font-weight: 600;">{{ value.feeder }}</td>
                                    <td style="font-size: 12px;">{{ value.date }}</td>
                                    <td style="font-size: 12px;">{{ value.band }}</td>
                                    <td style="font-size: 12px;">{{ value.total_public_dts }}</td>
                                    <td style="font-size: 12px;">{{ value.public_dts }}</td>
                                    <td style="font-size: 12px;">{{ value.total_private_dts }}</td>
                                    <td style="font-size: 12px;">{{ value.private_dts_energy }}</td>
                                    <td style="font-size: 12px;">{{ value.total_dt_energy }}</td>
                                    <td style="font-size: 12px;">{{ value.feeder_energy }}</td>
                                    <td style="font-size: 12px;">{{ value.feeder_to_dt_loss }}</td>
                                    <td style="font-size: 12px;">{{ value.feeder_loss }}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
            <!-- end of feeder to DT loss table section -->




            <!-- customer dt to loss list section -->
            <div class="row" id="customer-loss">
                <div class="col s12">
                    <div class="table-wrapper">
                        <table class="rounded-header2 striped highlight">
                            <thead class="red-accent-4 white-text" style="border: 1px solid #ff9800;">
                                <tr>
                                    <th>Feeders</th>
                                    <th>All Customers</th>
                                    <th>Post MD</th>
                                    <th>Comms %</th>
                                    <th>Total Meters Communicating</th>
                                    <th>Prepaid MD</th>
                                    <th>IDB Prepay</th>
                                    <th>DT Consumption</th>
                                    <th>IDB Prepay Consumption</th>
                                    <th>MD Prepay Consumption</th>
                                    <th>Postpaid Consumption</th>
                                    <th>IDB MD Consumption</th>
                                    <th>CE</th>
                                    <th>BE</th>
                                    <th>ATC</th>
                                    <th>Current Loss</th>
                                    <th>Customer to DT Loss</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="(value, i) in customer_loss_pct_data" :key="value.feeder + i">
                                    <td>{{ value.feeder }}</td>
                                    <td>{{ value.all_customers }}</td>
                                    <td>{{ value.post_md }}</td>
                                    <td>{{ value.comms_pct }}</td>
                                    <td>{{ value.total_meters_communicating }}</td>
                                    <td>{{ value.prepaid_md }}</td>
                                    <td>{{ value.idb_prepay }}</td>
                                    <td>{{ value.dt_consumption }}</td>
                                    <td>{{ value.idb_prepay_consumption }}</td>
                                    <td>{{ value.md_prepay_consumption }}</td>
                                    <td>{{ value.postpaid_consumption }}</td>
                                    <td>{{ value.idb_md_consumption }}</td>
                                    <td>{{ value.ce }}</td>
                                    <td>{{ value.be }}</td>
                                    <td>{{ value.atc }}</td>
                                    <td>{{ value.current_loss }}</td>
                                    <td>{{ value.customer_to_dt_loss }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- end of customer dt to loss list section -->

            </template>

        </main>
    </div>
</template>

<script>

import SideNav from '~/components/SideNav/SideNav.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import ChartPie from '~/components/ChartPie.vue'
import MeterCommunication from '~/components/MeterCommunication.vue';
// Live API wiring (js_modules/controlCenterApi.js) stays in the codebase but is not
// called right now — this page is intentionally running on demo data. To go live again,
// restore the async getData() that calls controlCenterApi.getIdbDashboard().
// import * as controlCenterApi from '~/js_modules/controlCenterApi.js'
// import { pick, formatNumber } from '~/js_modules/controlCenterApi.js'

export default {
    components: {
        SideNav,
        AnimatedValue,
        ChartPie,
        MeterCommunication,
    },
    data() {
        return {
            loading: true,
            error: null,
            feeder_to_dt_loss_data: [],
            customer_loss_pct_data: [],
            energy_total: '0',
            total_feeders: '0',
            total_flagged: '—',
            feeder_loss: '0',
            feeder_loss_pct: '0%',
            billing_eff: '0%',
            customer_loss: '0',
            customer_loss_pct: '0%',
            atc_c: '0%',
            total_dts: '0',
            public_dts: '0',
            private_dts: '—',
            total_customers: '0',
            revenue: '0',
            meter_comm_pct: 0,
            doughnutData: null,
            revenueData: null,
            demandData: null,
            pieOptions: { responsive: true, maintainAspectRatio: false, legend: { display: false } },
            customerLegend: [],
            revenueLegend: [],
            demandLegend: []
        }
    },

    methods: {
        getData() {
            // DEMO MODE — hardcoded values for today's demo, no network calls.
            this.loading = true
            this.error = null

            this.energy_total = '1,917.66'
            this.total_feeders = '2'
            this.total_flagged = '32'
            this.feeder_loss = '151.22'
            this.feeder_loss_pct = '7.87%'
            this.billing_eff = '85.75%'
            this.customer_loss = '116.91'
            this.customer_loss_pct = '7.87%'
            this.atc_c = '7.87%'
            this.total_dts = '61'
            this.public_dts = '31'
            this.private_dts = '30'
            this.total_customers = '5,390'
            this.revenue = '45,200'
            this.meter_comm_pct = 87

            this.doughnutData = {
                labels: ['NMD Customers', 'MD Customers'],
                datasets: [{ data: [45, 30], backgroundColor: ['#5f82ef', '#93f1ba'] }]
            }
            this.customerLegend = [
                { label: 'NMD Customers', color: '#5f82ef', value: '4,220 (78.29%)' },
                { label: 'MD Customers', color: '#93f1ba', value: '1,170 (21.71%)' }
            ]

            this.revenueData = {
                labels: ['Revenue Billed', 'Revenue Collected'],
                datasets: [{ data: [50, 25], backgroundColor: ['#f2a10a', '#f191c5'] }]
            }
            this.revenueLegend = [
                { label: 'Revenue Billed', color: '#f2a10a', value: '₦258.19M (78.29%)' },
                { label: 'Revenue Collected', color: '#f191c5', value: '₦280.4M (21.71%)' }
            ]

            this.demandData = {
                labels: ['MD Energy', 'NMD Energy'],
                datasets: [{ data: [85.75, 35.75], backgroundColor: ['#7986cb', '#4ecdc4'] }]
            }
            this.demandLegend = [
                { label: 'MD Energy', color: '#7986cb', value: '85.75%' },
                { label: 'NMD Energy', color: '#4ecdc4', value: '35.75%' }
            ]

            this.feeder_to_dt_loss_data = [
                { feeder: '11 - IgbobilNJ-T1 - Apata', date: '2024-01-01', band: 'A', total_public_dts: 10, public_dts: 8, total_private_dts: 5, private_dts_energy: '50 MWh', total_dt_energy: '100 MWh', feeder_energy: '1,291,260.00', feeder_to_dt_loss: '50,994.33', feeder_loss: '25%' },
                { feeder: '11 - IgbobilNJ-T1 - Apata', date: '2024-01-02', band: 'B', total_public_dts: 15, public_dts: 12, total_private_dts: 7, private_dts_energy: '70 MWh', total_dt_energy: '140 MWh', feeder_energy: '1,291,260.00', feeder_to_dt_loss: '50,994.33', feeder_loss: '25%' },
                { feeder: '11 - IgbobilNJ-T1 - Apata', date: '2024-01-03', band: 'C', total_public_dts: 20, public_dts: 18, total_private_dts: 10, private_dts_energy: '100 MWh', total_dt_energy: '200 MWh', feeder_energy: '1,291,260.00', feeder_to_dt_loss: '50,994.33', feeder_loss: '25%' }
            ]

            this.customer_loss_pct_data = [
                { feeder: '11 - IgbobilNJ-T1 - Apata', all_customers: 1000, post_md: 800, comms_pct: '80%', total_meters_communicating: 900, prepaid_md: 700, idb_prepay: 50, dt_consumption: '81,807.62', idb_prepay_consumption: '48,000.42', md_prepay_consumption: '15.33', postpaid_consumption: '15,114.30', idb_md_consumption: '16,692.89', ce: '80.93%', be: '85.75%', atc: '7.87%', current_loss: '7.87%', customer_to_dt_loss: '18,0828.35' },
                { feeder: '11 - IgbobilNJ-T1 - Apata', all_customers: 1500, post_md: 1200, comms_pct: '80%', total_meters_communicating: 1400, prepaid_md: 1100, idb_prepay: 70, dt_consumption: '81,807.62', idb_prepay_consumption: '48,000.42', md_prepay_consumption: '15.33', postpaid_consumption: '15,114.30', idb_md_consumption: '16,692.89', ce: '80.93%', be: '85.75%', atc: '7.87%', current_loss: '7.87%', customer_to_dt_loss: '18,0828.35' },
                { feeder: '11 - IgbobilNJ-T1 - Apata', all_customers: 2000, post_md: 1800, comms_pct: '90%', total_meters_communicating: 1900, prepaid_md: 1700, idb_prepay: 100, dt_consumption: '81,807', idb_prepay_consumption: '48,000.42', md_prepay_consumption: '15.33', postpaid_consumption: '15,114.30', idb_md_consumption: '16,692.89', ce: '80.93%', be: '85.75%', atc: '7.87%', current_loss: '7.87%', customer_to_dt_loss: '18,0828.35' }
            ]

            this.loading = false
        }
    },
    mounted() {
        this.getData()
        this.$nextTick(() => {
            var el = document.querySelector('.tabs')
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

.sidenav {
    width: 260px;
    border-right: 1px solid var(--border-color);
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

.pending-note {
    font-size: 12px;
    color: var(--text-muted);
    margin: 8px 0 0 0;
}

.stats-card {
    border-radius: 12px;
    position: relative;
}

.icon-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}

.stats-text .value {
    font-size: 24px;
    font-weight: bold;
    display: inline-block;
    /* so transform works */
}

/* animation class applied while counting */
.counting {
    animation: pop 1s ease-out;
}

@keyframes pop {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.4);
    }

    100% {
        transform: scale(1);
    }
}

.stats-text p {
    margin: 0;
    font-size: 12px;
}

.mini-chart-card {
    border-radius: 12px;
    margin-bottom: 10px;
}

.tiny-text {
    font-size: 11px;
    margin-bottom: 5px;
}

.border-right {
    border-right: 1px solid var(--border-color);
}

/* simple circle indicator used in MD Energy section */
.circle {
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
}

.circle.orange {
    background-color: orange;
}

.circle.green {
    background-color: green;
}

.tabs {
    background: transparent;
    border-bottom: 1px solid var(--border-strong);
    margin-bottom: 8px;
}

.tabs .tab a {
    color: var(--text-muted);
    text-transform: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.tabs .tab a .tab-icon { font-size: 16px !important; }
.tabs .tab a.active.dashboard-tab { color: #c0392b; border-bottom: 2px solid #c0392b; }
.tabs .tab a.active.feeder-tab    { color: #e8941a; border-bottom: 2px solid #e8941a; }
.tabs .tab a.active.customer-tab  { color: #e8941a; border-bottom: 2px solid #e8941a; }
.tabs .indicator { display: none; }

/* Filters */
.filter-row-right {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 16px;
}
.filter-pill {
    display: flex; align-items: center; gap: 6px;
    border: 1px solid var(--border-strong); border-radius: 8px;
    padding: 8px 12px; background: var(--bg-card); cursor: pointer; min-width: 110px;
}
.filter-label { font-size: 13px; color: var(--text-secondary); }
.filter-arrow { color: var(--text-muted); font-size: 20px !important; }

/* Chart legend */
.chart-legend-list { margin-top: 10px; }
.cleg-item { display: flex; align-items: center; gap: 6px; margin-bottom: 5px; }
.cleg-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.cleg-label { font-size: 12px; color: var(--text-secondary); flex: 1; }
.cleg-val { font-size: 12px; font-weight: 700; color: var(--text-primary); }


/* For thead with orange background */
table.rounded-header thead.orange {
    border-radius: 20px;
    overflow: hidden;
    display: table-header-group;
    /* Keep table behavior but allow radius */
}

/* If the above doesn't work, wrap thead in a div */
table.rounded-header {
    border-collapse: separate;
    /* Required for border-radius to work */
    border-spacing: 0;
}

table.rounded-header thead.orange th {
    background-color: orange;
    color: white;
    padding: 10px 15px;
}

/* Round all th corners */
table.rounded-header thead.orange th:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

table.rounded-header thead.orange th:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

/* This makes the middle th have no radius */
table.rounded-header thead.orange th:not(:first-child):not(:last-child) {
    border-radius: 0;
}


/* wrapper to allow horizontal scrolling */
.table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
/* ensure tables take intrinsic width so overflow occurs */
.table-wrapper table {
    width: max-content;
}

@media only screen and (max-width: 992px) {
    .main-content {
        padding-left: 20px;
    }
}
</style>
