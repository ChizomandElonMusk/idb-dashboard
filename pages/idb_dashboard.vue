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
                                <i class="material-icons tiny tab-icon">apps</i> High-Impact Feeders
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
                            <CertificationBadge status="requires_validation" />
                        </div>
                        <div class="card-panel mini-chart-card pending-card">
                            <p class="grey-text text-darken-2">Billing Efficiency</p>
                            <CertificationBadge status="pending" />
                        </div>
                    </div>

                    <div class="col s12 m4">
                        <div class="card-panel mini-chart-card pending-card">
                            <p class="grey-text text-darken-2">Customer - to - DT Loss</p>
                            <CertificationBadge status="pending" />
                            <p class="pending-note">Requires customer consumption source</p>
                        </div>
                        <div class="card-panel mini-chart-card pending-card">
                            <p class="grey-text text-darken-2">ATC &amp; C</p>
                            <CertificationBadge status="pending" />
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
                        <div class="card-panel mini-chart-card pending-card" style="display:flex; flex-direction:column; justify-content:center;">
                            <p class="grey-text text-darken-2 center">Revenue</p>
                            <CertificationBadge status="pending" />
                            <p class="pending-note center">Revenue data pending source onboarding</p>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card pending-card" style="display:flex; flex-direction:column; justify-content:center;">
                            <p class="grey-text text-darken-2 center">Energy by Demand Type</p>
                            <CertificationBadge status="pending" />
                            <p class="pending-note center">MD/NMD energy split not yet available from this endpoint</p>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card pending-card" style="display:flex; flex-direction:column; justify-content:center;">
                            <p class="grey-text text-darken-2 center">Meter Communication</p>
                            <CertificationBadge status="pending" />
                        </div>
                    </div>


                </div>
            </div>
            <!-- dashboard ends here -->


            <!-- high-impact feeders section (doc §2.2 / §11 top_contributors) -->
            <div class="row" id="feeder-loss">
                <div class="col s12">
                    <p class="grey-text" style="margin: 0 0 10px 4px;">
                        High-impact feeder rows dominate total feeder energy — treat contribution % as
                        <CertificationBadge status="requires_validation" />
                    </p>
                    <div class="table-wrapper">
                        <table class="rounded-header striped highlight">
                            <thead class="orange white-text" style="border: 1px solid #ff9800;">
                                <tr>
                                    <th>Feeder</th>
                                    <th>Feeder Energy Raw</th>
                                    <th>Contribution %</th>
                                    <th>P99 Flag</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="value in data_quality_rows" :key="value.feeder">
                                    <td style="font-size: 12px; font-weight: 600;">{{ value.feeder }}</td>
                                    <td style="font-size: 12px;">{{ value.energy }}</td>
                                    <td style="font-size: 12px;">{{ value.contribution_pct }}</td>
                                    <td style="font-size: 12px;">{{ value.p99_flag ? 'Yes' : 'No' }}</td>
                                </tr>
                                <tr v-if="!data_quality_rows.length">
                                    <td colspan="4" class="center-align pending-note">No high-impact feeder rows returned</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
            <!-- end of high-impact feeders section -->




            <!-- customer dt to loss list section (pending — needs customer consumption source) -->
            <div class="row" id="customer-loss">
                <div class="col s12">
                    <div class="card-panel pending-card">
                        <CertificationBadge status="pending" />
                        <p class="pending-note">Customer-to-DT loss data pending customer consumption source onboarding</p>
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
import * as controlCenterApi from '~/js_modules/controlCenterApi.js'
import { pick, formatNumber } from '~/js_modules/controlCenterApi.js'

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
            data_quality_rows: [],
            energy_total: '0',
            total_feeders: '0',
            total_flagged: '—',
            feeder_loss: '0',
            feeder_loss_pct: '0%',
            total_dts: '0',
            public_dts: '0',
            private_dts: '—',
            total_customers: '0',
            doughnutData: null,
            pieOptions: { responsive: true, maintainAspectRatio: false, legend: { display: false } },
            customerLegend: []
        }
    },

    methods: {
        async getData() {
            this.loading = true
            this.error = null
            try {
                const idb = await controlCenterApi.getIdbDashboard()

                this.energy_total = formatNumber(pick(idb, ['monthly_energy.total_feeder_energy_raw'], 0))
                this.total_feeders = formatNumber(pick(idb, ['cards.total_feeders', 'availability.total_feeder_meters'], 0))

                const lossRaw = pick(idb, ['monthly_energy.feeder_to_dt_loss_raw'], null)
                const lossPct = pick(idb, ['monthly_energy.feeder_to_dt_loss_pct'], null)
                this.feeder_loss = lossRaw != null ? formatNumber(lossRaw) : '—'
                this.feeder_loss_pct = lossPct != null ? `${lossPct}%` : '0%'

                this.total_dts = formatNumber(pick(idb, ['cards.total_dts'], 0))
                this.public_dts = formatNumber(pick(idb, ['cards.public_dts'], 0))
                const privatePublic = Number(pick(idb, ['cards.private_public_dts'], 0))
                const privateSingle = Number(pick(idb, ['cards.private_single_dts'], 0))
                this.private_dts = (privatePublic || privateSingle) ? formatNumber(privatePublic + privateSingle) : '—'

                const totalCustomers = pick(idb, ['cards.total_customers'], null)
                const nmdCustomers = pick(idb, ['cards.nmd_customers'], null)
                const mdCustomers = pick(idb, ['cards.md_customers'], null)
                this.total_customers = totalCustomers != null ? formatNumber(totalCustomers) : '0'
                if (nmdCustomers != null && mdCustomers != null) {
                    this.doughnutData = {
                        labels: ['NMD', 'MD'],
                        datasets: [{ data: [nmdCustomers, mdCustomers], backgroundColor: ['#5f82ef', '#93f1ba'] }]
                    }
                    const total = nmdCustomers + mdCustomers || 1
                    this.customerLegend = [
                        { label: 'NMD Customers', color: '#5f82ef', value: `${formatNumber(nmdCustomers)} (${((nmdCustomers / total) * 100).toFixed(1)}%)` },
                        { label: 'MD Customers', color: '#93f1ba', value: `${formatNumber(mdCustomers)} (${((mdCustomers / total) * 100).toFixed(1)}%)` }
                    ]
                }

                const topContributors = pick(idb, ['data_quality.top_contributors'], [])
                this.data_quality_rows = (topContributors || []).map(row => ({
                    feeder: pick(row, ['feeder', 'feeder_name'], '—'),
                    energy: formatNumber(pick(row, ['feeder_energy_raw', 'energy_raw', 'total_energy_raw'], 0)),
                    contribution_pct: `${pick(row, ['contribution_pct', 'contribution'], 0)}%`,
                    p99_flag: !!pick(row, ['p99_flag', 'is_p99'], false)
                }))
                this.total_flagged = this.data_quality_rows.length ? formatNumber(this.data_quality_rows.length) : '—'
            } catch (err) {
                this.error = err.message
                console.error('idb dashboard load failed', err)
            } finally {
                this.loading = false
            }
        }
    },
    async mounted() {
        await this.getData()
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
