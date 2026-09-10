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
                    <div class="filter-pill filter-pill-select">
                        <select class="filter-pill-input" v-model="selectedFeeder" @change="onFilterChange">
                            <option value="All">All feeders</option>
                            <option v-for="name in knownFeeders" :key="name" :value="name">{{ name }}</option>
                        </select>
                        <i class="material-icons filter-arrow">arrow_drop_down</i>
                    </div>
                </div>
                <div class="col s3">
                    <div class="filter-pill filter-pill-date" @click="openDatePicker">
                        <input
                            type="month"
                            class="filter-pill-input"
                            :value="selectedDate"
                            :max="maxMonth"
                            @change="onDateChange"
                        />
                        <i class="material-icons filter-arrow" style="font-size:18px;">calendar_today</i>
                    </div>
                </div>
            </div>
            <p v-if="resolvedPeriod" class="resolved-period">Showing: {{ resolvedPeriod }} · {{ selectedFeeder }}</p>

            <!-- Dashboard Tab -->
            <div id="idb-dashboard" class="tab-panel">
                <LoadingOverlay :visible="loading" />
                <div v-if="error" class="idb-status-banner idb-error">
                    Couldn't load IDB dashboard: {{ error }}
                    <button class="idb-retry" @click="loadDashboard">Retry</button>
                </div>

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
                                <span class="progress-pct">{{ feeder_dt_loss_pct.toFixed(2) }}%</span>
                            </div>
                            <div class="mini-track"><span class="mini-thumb red-thumb" :style="{ left: clampPct(feeder_dt_loss_pct) + '%' }"></span></div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card-panel progress-card">
                            <p class="progress-card-title">Customer – to – DT Loss</p>
                            <p class="progress-card-value">{{ customer_dt_loss }} <span class="unit">MWh</span></p>
                            <div class="progress-row">
                                <span class="progress-label">Loss (%)</span>
                                <span class="progress-pct">{{ customer_dt_loss_pct.toFixed(2) }}%</span>
                            </div>
                            <div class="mini-track"><span class="mini-thumb red-thumb" :style="{ left: clampPct(customer_dt_loss_pct) + '%' }"></span></div>
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
                                <span class="progress-pct">{{ billing_efficiency_pct.toFixed(2) }}%</span>
                            </div>
                            <div class="mini-track"><span class="mini-fill green-fill" :style="{ width: clampPct(billing_efficiency_pct) + '%' }"></span></div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card-panel progress-card">
                            <p class="progress-card-title">ATC &amp; C</p>
                            <div class="progress-row">
                                <span class="progress-label">ATC &amp; C</span>
                                <span class="progress-pct">{{ atc_c_pct.toFixed(2) }}%</span>
                            </div>
                            <div class="mini-track"><span class="mini-thumb red-thumb" :style="{ left: clampPct(atc_c_pct) + '%' }"></span></div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Total Customers</p>
                            <ChartPie chart-type="doughnut" :chart-data="totalCustomersData" :chart-options="doughnutOptions"
                                :center-text="totalCustomersCenterText" :show-value-legend="true" :legend-cols="1"
                                :value-labels="totalCustomersValueLabels" />
                        </div>
                    </div>
                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Revenue</p>
                            <ChartPie chart-type="pie" :chart-data="revenueData" :chart-options="pieOptions"
                                :show-value-legend="true" :legend-cols="1"
                                :value-labels="revenueValueLabels" />
                        </div>
                    </div>
                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Energy</p>
                            <div class="bars-stack">
                                <div class="bar-track"><span class="bar-fill" :style="{ width: clampPct(energyBreakdown.mdPct) + '%', background: '#5b7cfa' }"></span></div>
                                <div class="bar-track"><span class="bar-fill" :style="{ width: clampPct(energyBreakdown.nmdPct) + '%', background: '#4ecb71' }"></span></div>
                            </div>
                            <div class="bars-legend">
                                <div class="bars-legend-item"><span class="legend-dot" style="background:#5b7cfa;"></span> MD Energy (MWh)<br><b>{{ energyBreakdown.mdValue }}</b><br><span class="muted">{{ energyBreakdown.mdPct.toFixed(2) }}%</span></div>
                                <div class="bars-legend-item"><span class="legend-dot" style="background:#4ecb71;"></span> NMD Energy (kWh)<br><b>{{ energyBreakdown.nmdValue }}</b><br><span class="muted">{{ energyBreakdown.nmdPct.toFixed(2) }}%</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Meter Communication</p>
                            <MeterCommunication :percentage="meterCommunicationPct" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Feeder to DT loss Table Tab -->
            <div id="idb-feeder-loss" class="tab-panel">
                <LoadingOverlay :visible="feederLossLoading" />
                <div v-if="feederLossError" class="idb-status-banner idb-error">
                    Couldn't load Feeder to DT loss table: {{ feederLossError }}
                </div>

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
                            <tr v-if="!feederLossLoading && !feederLossRows.length">
                                <td colspan="11" class="idb-table-empty">No rows for this filter combination.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="table-pagination">
                    <span class="table-pagination-info">{{ feederLossPaginationLabel }}</span>
                    <div class="table-pagination-btns">
                        <button class="pagination-btn" :disabled="feederLossPage <= 1" @click="goToFeederLossPage(-1)">Prev</button>
                        <button class="pagination-btn" :disabled="feederLossTotalPages > 0 && feederLossPage >= feederLossTotalPages" @click="goToFeederLossPage(1)">Next</button>
                    </div>
                </div>
            </div>

            <!-- Customer to DT loss Table Tab -->
            <div id="idb-customer-loss" class="tab-panel">
                <LoadingOverlay :visible="customerLossLoading" />
                <div v-if="customerLossError" class="idb-status-banner idb-error">
                    Couldn't load Customer to DT loss table: {{ customerLossError }}
                </div>

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
                            <tr v-if="!customerLossLoading && !customerLossRows.length">
                                <td colspan="17" class="idb-table-empty">No rows for this filter combination.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="table-pagination">
                    <span class="table-pagination-info">{{ customerLossPaginationLabel }}</span>
                    <div class="table-pagination-btns">
                        <button class="pagination-btn" :disabled="customerLossPage <= 1" @click="goToCustomerLossPage(-1)">Prev</button>
                        <button class="pagination-btn" :disabled="customerLossTotalPages > 0 && customerLossPage >= customerLossTotalPages" @click="goToCustomerLossPage(1)">Next</button>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
import LoadingOverlay from '~/components/LoadingOverlay.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import ChartPie from '~/components/ChartPie.vue'
import MeterCommunication from '~/components/MeterCommunication.vue'
import {
    getIdbDashboard,
    getIdbFeederDtLoss,
    getIdbCustomerDtLoss,
    formatNumber,
    formatPct,
    currentMonthStr,
    openDatePicker
} from '~/js_modules/controlCenterApi'
// Matches the Figma "IDB Dashboard" screen, wired to three endpoints that share one filter row
// above the tabs (see static/api_live_responses3.md #8, #9, #10):
//   - Dashboard tab: GET /idb/dashboard?feeder=...&date=YYYY-MM
//   - Feeder to DT loss Table tab: GET /idb/feeder-dt-loss?feeder=...&date=YYYY-MM&page=...&page_size=...
//   - Customer to DT loss Table tab: GET /idb/customer-dt-loss?feeder=...&date=YYYY-MM&page=...&page_size=...
// Changing feeder/date refetches all three together since the filter row isn't per-tab.

const IDB_PAGE_SIZE = 50

export default {
    components: { SideNav, AnimatedValue, ChartPie, MeterCommunication, LoadingOverlay },
    data() {
        return {
            selectedFeeder: 'All',
            selectedDate: '',
            maxMonth: currentMonthStr(),
            knownFeeders: [],
            resolvedPeriod: '',

            // Dashboard tab
            loading: true,
            error: null,
            total_energy: '—',
            total_feeders: '—',
            flagged_meters: '—',
            feeder_dt_loss: '—',
            feeder_dt_loss_pct: 0,
            customer_dt_loss: '—',
            customer_dt_loss_pct: 0,
            total_dts: '—',
            public_dts: '—',
            private_dts: '—',
            billing_efficiency_pct: 0,
            atc_c_pct: 0,
            totalCustomersCenterText: '—',
            totalCustomersValueLabels: [],
            totalCustomersData: {
                labels: ['NMD Customers', 'MD Customers'],
                datasets: [{ data: [0, 0], backgroundColor: ['#5b7cfa', '#8de8c5'] }]
            },
            revenueValueLabels: [],
            revenueData: {
                labels: ['Revenue Billed', 'Revenue Collected'],
                datasets: [{ data: [0, 0], backgroundColor: ['#e991c4', '#f0a83a'] }]
            },
            energyBreakdown: { mdValue: '—', mdPct: 0, nmdValue: '—', nmdPct: 0 },
            meterCommunicationPct: 0,
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

            // Feeder to DT loss table tab
            feederLossLoading: false,
            feederLossError: null,
            feederLossPage: 1,
            feederLossTotal: 0,
            feederLossTotalPages: 0,
            feederLossRows: [],

            // Customer to DT loss table tab
            customerLossLoading: false,
            customerLossError: null,
            customerLossPage: 1,
            customerLossTotal: 0,
            customerLossTotalPages: 0,
            customerLossRows: []
        }
    },
    computed: {
        feederLossPaginationLabel() {
            if (!this.feederLossTotal) return ''
            return `Page ${this.feederLossPage} of ${this.feederLossTotalPages} · ${formatNumber(this.feederLossTotal)} rows`
        },
        customerLossPaginationLabel() {
            if (!this.customerLossTotal) return ''
            return `Page ${this.customerLossPage} of ${this.customerLossTotalPages} · ${formatNumber(this.customerLossTotal)} rows`
        }
    },
    async mounted() {
        const el = document.querySelector('.tabs')
        if (el) M.Tabs.init(el, {})
        await this.loadAll()
    },
    methods: {
        openDatePicker,
        clampPct(v) {
            return Math.max(0, Math.min(100, v || 0))
        },
        mergeKnownFeeders(names) {
            const seen = new Set(this.knownFeeders)
            names.forEach((n) => { if (n) seen.add(n) })
            this.knownFeeders = [...seen].sort()
        },
        onFilterChange() {
            this.feederLossPage = 1
            this.customerLossPage = 1
            this.loadAll()
        },
        onDateChange(e) {
            this.selectedDate = e.target.value
            this.onFilterChange()
        },
        async loadAll() {
            await Promise.all([this.loadDashboard(), this.loadFeederLossTable(), this.loadCustomerLossTable()])
        },
        async loadDashboard() {
            this.loading = true
            this.error = null
            try {
                const data = await getIdbDashboard({ feeder: this.selectedFeeder, date: this.selectedDate })
                this.applyDashboard(data)
            } catch (err) {
                this.error = err.message || 'Failed to load IDB dashboard'
            } finally {
                this.loading = false
            }
        },
        applyDashboard(data) {
            this.resolvedPeriod = data.period || ''

            const kpis = data.kpis || {}
            this.total_energy = formatNumber(kpis.total_energy_mwh)
            this.total_feeders = formatNumber(kpis.total_feeders)
            this.flagged_meters = formatNumber(kpis.total_flagged_idb_meters)

            const loss = data.loss_metrics || {}
            this.feeder_dt_loss = formatNumber(loss.feeder_to_dt_loss_mwh)
            this.feeder_dt_loss_pct = Number(loss.feeder_to_dt_loss_pct) || 0
            this.customer_dt_loss = formatNumber(loss.customer_to_dt_loss_mwh)
            this.customer_dt_loss_pct = Number(loss.customer_to_dt_loss_pct) || 0

            const dtSummary = data.dt_summary || {}
            this.total_dts = formatNumber(dtSummary.total_dts)
            this.public_dts = formatNumber(dtSummary.public_dts)
            this.private_dts = formatNumber(dtSummary.private_dts)

            const eff = data.efficiency || {}
            // billing_efficiency_pct can exceed 100 and atc_and_c_pct can go negative — that's
            // a real, documented outcome of incomplete DT metering, not a bug. clampPct() only
            // clamps the *bar's visual position*, the text still shows the true number.
            this.billing_efficiency_pct = Number(eff.billing_efficiency_pct) || 0
            this.atc_c_pct = Number(eff.atc_and_c_pct) || 0

            const customers = data.customers || {}
            this.totalCustomersData = {
                labels: ['NMD Customers', 'MD Customers'],
                datasets: [{ data: [customers.nmd_count || 0, customers.md_count || 0], backgroundColor: ['#5b7cfa', '#8de8c5'] }]
            }
            this.totalCustomersCenterText = formatNumber(customers.total)
            this.totalCustomersValueLabels = [
                `${formatNumber(customers.nmd_count)} (${formatPct(customers.nmd_pct)})`,
                `${formatNumber(customers.md_count)} (${formatPct(customers.md_pct)})`
            ]

            const revenue = data.revenue || {}
            this.revenueData = {
                labels: ['Revenue Billed', 'Revenue Collected'],
                datasets: [{ data: [revenue.billed || 0, revenue.collected || 0], backgroundColor: ['#e991c4', '#f0a83a'] }]
            }
            this.revenueValueLabels = [
                `${formatNumber(revenue.billed)} (${formatPct(revenue.billed_pct_of_total)})`,
                `${formatNumber(revenue.collected)} (${formatPct(revenue.collected_pct_of_total)})`
            ]

            const eb = data.energy_breakdown || {}
            // Named exactly as the API doc warns: MD is MWh, NMD is kWh — not a typo, don't convert.
            this.energyBreakdown = {
                mdValue: formatNumber(eb.md_energy_mwh),
                mdPct: Number(eb.md_energy_pct) || 0,
                nmdValue: formatNumber(eb.nmd_energy_kwh),
                nmdPct: Number(eb.nmd_energy_pct) || 0
            }

            this.meterCommunicationPct = (data.meter_communication || {}).communicating_pct || 0

            if (data.feeder_filter && data.feeder_filter !== 'All') this.mergeKnownFeeders([data.feeder_filter])
        },
        goToFeederLossPage(delta) {
            const next = this.feederLossPage + delta
            if (next < 1) return
            if (this.feederLossTotalPages && next > this.feederLossTotalPages) return
            this.feederLossPage = next
            this.loadFeederLossTable()
        },
        async loadFeederLossTable() {
            this.feederLossLoading = true
            this.feederLossError = null
            try {
                const data = await getIdbFeederDtLoss({
                    feeder: this.selectedFeeder,
                    date: this.selectedDate,
                    page: this.feederLossPage,
                    page_size: IDB_PAGE_SIZE
                })
                this.feederLossTotal = data.total || 0
                this.feederLossTotalPages = data.total_pages || 0
                this.feederLossRows = (data.data || []).map((row) => ({
                    feeder: row.feeder,
                    date: row.date,
                    band: row.band,
                    total_public_dts: formatNumber(row.total_public_dts),
                    public_dts_energy: formatNumber(row.public_dts_energy_kwh),
                    total_private_dts: formatNumber(row.total_private_dts),
                    private_dts_energy: formatNumber(row.private_dts_energy_kwh),
                    total_dt_energy: formatNumber(row.total_dt_energy_kwh),
                    feeder_energy: formatNumber(row.feeder_energy_kwh),
                    feeder_to_dt_loss: formatNumber(row.feeder_to_dt_loss_kwh),
                    feeder_loss_pct: formatPct(row.feeder_loss_pct)
                }))
                this.mergeKnownFeeders((data.data || []).map((r) => r.feeder))
            } catch (err) {
                this.feederLossError = err.message || 'Failed to load Feeder to DT loss table'
            } finally {
                this.feederLossLoading = false
            }
        },
        goToCustomerLossPage(delta) {
            const next = this.customerLossPage + delta
            if (next < 1) return
            if (this.customerLossTotalPages && next > this.customerLossTotalPages) return
            this.customerLossPage = next
            this.loadCustomerLossTable()
        },
        async loadCustomerLossTable() {
            this.customerLossLoading = true
            this.customerLossError = null
            try {
                const data = await getIdbCustomerDtLoss({
                    feeder: this.selectedFeeder,
                    date: this.selectedDate,
                    page: this.customerLossPage,
                    page_size: IDB_PAGE_SIZE
                })
                this.customerLossTotal = data.total || 0
                this.customerLossTotalPages = data.total_pages || 0
                this.customerLossRows = (data.data || []).map((row) => ({
                    feeder: row.feeder,
                    all_customers: formatNumber(row.all_customers),
                    postpaid_md: formatNumber(row.postpaid_md),
                    comms_pct: formatPct(row.comms_pct),
                    total_meters_communicating: formatNumber(row.total_meters_communicating),
                    prepaid_md: formatNumber(row.prepaid_md),
                    idb_prepay: formatNumber(row.idb_prepay),
                    dt_consumption: formatNumber(row.dt_consumption_mwh),
                    idb_prepay_consumption: formatNumber(row.idb_prepay_consumption_mwh),
                    md_prepay_consumption: formatNumber(row.md_prepay_consumption_mwh),
                    postpaid_consumption: formatNumber(row.postpaid_md_consumption_mwh),
                    idb_md_consumption: formatNumber(row.idb_md_consumption_mwh),
                    ce: formatPct(row.collection_efficiency_pct),
                    be: formatPct(row.billing_efficiency_pct),
                    atc: formatPct(row.atc_and_c_pct),
                    current_loss_pct: formatPct(row.customer_to_dt_loss_pct),
                    customer_to_dt_loss: formatNumber(row.customer_to_dt_loss_mwh)
                }))
                this.mergeKnownFeeders((data.data || []).map((r) => r.feeder))
            } catch (err) {
                this.customerLossError = err.message || 'Failed to load Customer to DT loss table'
            } finally {
                this.customerLossLoading = false
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
}

.tab-panel {
    position: relative;
    min-height: 60vh;
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

.filter-pill-select,
.filter-pill-date {
    cursor: default;
}

.filter-pill-input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 13px;
    color: var(--text-secondary);
    font-family: inherit;
    flex: 1;
    min-width: 0;
    height: auto;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

select.filter-pill-input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

/* The native month input draws its own calendar icon next to our Material icon, showing
   two icons — hide it visually (not removed) so clicking there still opens the picker. */
.filter-pill-date .filter-pill-input::-webkit-calendar-picker-indicator {
    opacity: 0;
}

select.filter-pill-input option {
    color: #222;
    background: #fff;
}

.resolved-period {
    font-size: 12px;
    color: var(--text-muted);
    margin: -8px 0 14px;
    text-align: right;
}

.idb-status-banner {
    border-radius: 10px;
    padding: 10px 16px;
    margin-bottom: 16px;
    font-size: 13px;
}

.idb-error {
    background: #fdecec;
    color: #c0392b;
    display: flex;
    align-items: center;
    gap: 12px;
}

.idb-retry {
    background: #c0392b;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 4px 12px;
    font-size: 12px;
    cursor: pointer;
}

.idb-table-empty {
    text-align: center;
    color: var(--text-muted);
    background: var(--bg-card);
    padding: 20px 16px;
}

.table-pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
}

.table-pagination-info {
    font-size: 12px;
    color: var(--text-muted);
}

.table-pagination-btns {
    display: flex;
    gap: 8px;
}

.pagination-btn {
    border: 1px solid var(--border-strong);
    background: var(--bg-card);
    color: var(--text-secondary);
    border-radius: 6px;
    padding: 6px 14px;
    font-size: 13px;
    cursor: pointer;
}

.pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
