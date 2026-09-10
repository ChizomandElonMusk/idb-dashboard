<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="row header-row" style="margin-bottom: 0;">
                <div class="col s12">
                    <h5 class="avail-title">DT Availability Dashboard</h5>
                    <ul class="tabs">
                        <li class="tab">
                            <a href="#dt-dashboard" class="active tab-link dashboard-tab">
                                <i class="material-icons tiny tab-icon">speed</i> Dashboard
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#dt-table" class="tab-link table-tab">
                                <i class="material-icons tiny tab-icon">apps</i> DT Availability Table
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Dashboard Tab -->
            <div id="dt-dashboard" class="tab-panel">
                <LoadingOverlay :visible="dashboardLoading" />
                <div class="row filter-row">
                    <div class="col s4 offset-s8">
                        <div class="filter-pill filter-pill-select">
                            <select class="filter-pill-input" v-model="dtSearchInput" @change="searchDt">
                                <option value="All">All</option>
                                <option v-for="name in knownDtNames" :key="name" :value="name">{{ name }}</option>
                            </select>
                            <i class="material-icons filter-arrow">arrow_drop_down</i>
                        </div>
                    </div>
                </div>

                <div v-if="dashboardError" class="dt-status-banner dt-error">
                    Couldn't load DT dashboard: {{ dashboardError }}
                </div>
                <div v-else-if="!dashboardLoading && !dtNameQuery" class="dt-status-banner dt-empty">
                    Select a DT above to see its availability dashboard.
                </div>

                <div v-if="dtNameQuery" class="row">
                    <!-- Left: Metric Cards (2x3 grid) -->
                    <div class="col s12 m4">
                        <div class="row" style="margin-bottom: 0;">
                            <div class="col s6" style="padding: 0 6px 0 0;">
                                <div class="card-panel metric-card">
                                    <p class="metric-label">DT Target Availability (Hrs)</p>
                                    <p class="metric-value">{{ dt_target_availability }}</p>
                                </div>
                            </div>
                            <div class="col s6" style="padding: 0 0 0 6px;">
                                <div class="card-panel metric-card">
                                    <p class="metric-label">Feeder Target Availability(Hrs)</p>
                                    <p class="metric-value">{{ feeder_target_availability }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 0;">
                            <div class="col s6" style="padding: 0 6px 0 0;">
                                <div class="card-panel metric-card">
                                    <p class="metric-label">DT Actual Availability (Hrs)</p>
                                    <p class="metric-value green-value"><AnimatedValue :value="dt_actual_availability" /></p>
                                </div>
                            </div>
                            <div class="col s6" style="padding: 0 0 0 6px;">
                                <div class="card-panel metric-card">
                                    <p class="metric-label">Feeder Actual Availability (Hrs)</p>
                                    <p class="metric-value green-value">
                                        <AnimatedValue class="value" :value="feeder_actual_availability" />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 0;">
                            <div class="col s6" style="padding: 0 6px 0 0;">
                                <div class="card-panel metric-card">
                                    <p class="metric-label">Availability Rate(%)</p>
                                    <p class="metric-value green-value"><AnimatedValue :value="dt_availability_rate" /></p>
                                </div>
                            </div>
                            <div class="col s6" style="padding: 0 0 0 6px;">
                                <div class="card-panel metric-card">
                                    <p class="metric-label">Feeder Availability Status</p>
                                    <p class="metric-value green-value">{{ feeder_availability_status }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Availability Trend Chart -->
                    <div class="col s12 m8">
                        <div class="card-panel trend-card">
                            <div class="trend-header">
                                <span class="trend-title">Availability Trend</span>
                                <div class="chart-tabs">
                                    <span class="chart-tab" :class="{ active: trendTab === 'Day' }" @click="setTrendTab('Day')">Day</span>
                                    <span class="chart-tab" :class="{ active: trendTab === 'Week' }" @click="setTrendTab('Week')">Week</span>
                                    <span class="chart-tab" :class="{ active: trendTab === 'Month' }" @click="setTrendTab('Month')">Month</span>
                                    <span class="chart-icon-btn"><i class="material-icons tiny">calendar_today</i></span>
                                </div>
                            </div>
                            <div class="chart-callout-wrap">
                                <div style="position: relative; height: 250px;">
                                    <canvas id="availabilityChart"></canvas>
                                </div>
                                <div v-if="trendCallout" class="chart-callout" :style="{ left: trendCallout.leftPct + '%', top: '20px' }">
                                    <span class="callout-title">{{ trendCallout.title }}</span>
                                    <span class="callout-value">{{ trendCallout.value }}</span>
                                </div>
                            </div>
                            <div class="trend-legend">
                                <span class="legend-item">
                                    <span class="legend-ring green-ring"></span>
                                    <span class="legend-text">Average Availability</span>
                                </span>
                                <span class="legend-item">
                                    <span class="legend-ring blue-ring"></span>
                                    <span class="legend-text">Average Target</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DT Availability Table Tab -->
            <div id="dt-table" class="tab-panel">
                <LoadingOverlay :visible="tableLoading" />
                <div class="row filter-row">
                    <div class="col s3 offset-s6">
                        <div class="filter-pill filter-pill-select">
                            <select class="filter-pill-input" v-model="tableDtName" @change="onTableDtNameChange">
                                <option value="All">All DTs</option>
                                <option v-for="name in knownDtNames" :key="name" :value="name">{{ name }}</option>
                            </select>
                            <i class="material-icons filter-arrow">arrow_drop_down</i>
                        </div>
                    </div>
                    <div class="col s3">
                        <div class="filter-pill filter-pill-date" @click="openDatePicker">
                            <input
                                type="date"
                                class="filter-pill-input"
                                :value="tableDate"
                                :max="maxDate"
                                @change="onTableDateChange"
                            />
                            <i class="material-icons filter-arrow" style="font-size:18px;">calendar_today</i>
                        </div>
                    </div>
                </div>

                <div v-if="tableError" class="dt-status-banner dt-error">
                    Couldn't load DT table: {{ tableError }}
                </div>

                <div class="table-wrapper">
                    <table class="dt-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>DT Name</th>
                                <th>Name_Of_Feeder</th>
                                <th>Band</th>
                                <th>Consumption</th>
                                <th>DT Actual Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in dt_availability_rows" :key="i">
                                <td>{{ row.date }}</td>
                                <td>{{ row.dt_name }}</td>
                                <td>{{ row.feeder_name }}</td>
                                <td>{{ row.band }}</td>
                                <td>{{ row.consumption }}</td>
                                <td>{{ row.availability }}</td>
                            </tr>
                            <tr v-if="!tableLoading && !dt_availability_rows.length">
                                <td colspan="6" class="dt-table-empty">No rows for this filter combination.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="table-pagination">
                    <span class="table-pagination-info">{{ tablePaginationLabel }}</span>
                    <div class="table-pagination-btns">
                        <button class="pagination-btn" :disabled="tablePage <= 1" @click="goToPage(-1)">Prev</button>
                        <button class="pagination-btn" :disabled="tableTotalPages > 0 && tablePage >= tableTotalPages" @click="goToPage(1)">Next</button>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import Chart from '~/assets/js/Chart.js'
import SideNav from '~/components/SideNav/SideNav.vue'
import LoadingOverlay from '~/components/LoadingOverlay.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import {
    getDtAvailabilityDashboard,
    getDtAvailabilityTable,
    formatNumber,
    pick,
    todayStr,
    buildTrendCallout,
    openDatePicker
} from '~/js_modules/controlCenterApi'
// Matches the Figma "DT Availability Dashboard" screen, wired to two endpoints (see
// static/api_live_responses3.md #5 and #6):
//   - Dashboard tab: GET /dt-availability/dashboard?dt_name=...&period=Day|Week|Month
//     The doc's own examples only ever name a specific DT (no "All" is documented for this
//     endpoint), but "All" loads by default here anyway per request - if the API rejects it,
//     the error banner surfaces that and the user can pick a real DT name instead.
//   - Table tab: GET /dt-availability/table?dt_name=All&date=...&page=...&page_size=...
//     dt_name defaults to 'All' and is genuinely optional here.

const TABLE_PAGE_SIZE = 20

export default {
    components: { SideNav, AnimatedValue, LoadingOverlay },
    data() {
        return {
            // Dashboard tab
            dtSearchInput: 'All',
            dtNameQuery: '',
            dashboardLoading: false,
            dashboardError: null,
            trendTab: 'Month',
            dt_target_availability: '—',
            feeder_target_availability: '—',
            dt_actual_availability: '—',
            feeder_actual_availability: '—',
            dt_availability_rate: '—',
            feeder_availability_status: '—',
            trendLabels: [],
            trendAvailability: [],
            trendTarget: [],
            trendCallout: null,
            trendChart: null,
            // Accumulates across every table fetch (not just the currently-displayed page) so
            // the Dashboard's DT picker offers more than whatever 20 rows are on screen right
            // now. Still only ever real names the table endpoint actually returned — there's no
            // endpoint that lists every DT name, so this can't be an exhaustive list.
            knownDtNames: [],

            // Table tab
            tableDtName: 'All',
            // Left unset (not defaulted to "yesterday") so the request omits `date` entirely
            // and the server resolves its own "latest complete day" — the doc's own sample
            // query used a date 3 days before its stated generation date, suggesting day-level
            // readings lag by more than 1 day. Guessing "yesterday" risked querying a day that
            // genuinely has zero rows yet, which looks identical to a bug.
            tableDate: '',
            maxDate: todayStr(),
            tablePage: 1,
            tablePageSize: TABLE_PAGE_SIZE,
            tableTotal: 0,
            tableTotalPages: 0,
            tableLoading: false,
            tableError: null,
            dt_availability_rows: []
        }
    },
    computed: {
        tablePaginationLabel() {
            if (!this.tableTotal) return ''
            return `Page ${this.tablePage} of ${this.tableTotalPages} · ${formatNumber(this.tableTotal)} rows`
        }
    },
    async mounted() {
        const el = document.querySelector('.tabs')
        if (el) M.Tabs.init(el, {})

        // Seed the Dashboard's DT picker with a bigger batch than the visible table's own
        // page size (20) so there's a reasonable number of options to choose from, without
        // changing the table's own pagination. Runs alongside the table's own first-page
        // load rather than after it.
        await Promise.all([this.loadTable(), this.seedDtNameOptions()])

        // "All" loads by default — if the API doesn't actually support it for this endpoint,
        // the existing error banner below surfaces that, and the user can pick a real DT name.
        this.dtNameQuery = this.dtSearchInput
        await this.loadDashboard()
    },
    methods: {
        openDatePicker,
        // --- Dashboard tab ---
        async seedDtNameOptions() {
            try {
                const data = await getDtAvailabilityTable({ dt_name: 'All', date: this.tableDate, page: 1, page_size: 100 })
                this.mergeKnownDtNames(data.data || [])
            } catch (err) {
                // Non-critical — the dropdown just falls back to whatever loadTable() finds.
                console.error('[dt_availability] failed to seed DT name options', err)
            }
        },
        mergeKnownDtNames(rows) {
            const seen = new Set(this.knownDtNames)
            rows.forEach((r) => { if (r.dt_name) seen.add(r.dt_name) })
            this.knownDtNames = [...seen].sort()
        },
        searchDt() {
            const name = this.dtSearchInput.trim()
            if (!name) return
            this.dtNameQuery = name
            this.loadDashboard()
        },
        setTrendTab(tab) {
            this.trendTab = tab
            if (this.dtNameQuery) this.loadDashboard()
        },
        async loadDashboard() {
            this.dashboardLoading = true
            this.dashboardError = null
            try {
                const data = await getDtAvailabilityDashboard({ dt_name: this.dtNameQuery, period: this.trendTab })
                this.applyDashboard(data)
            } catch (err) {
                this.dashboardError = err.message || 'Failed to load DT dashboard'
            } finally {
                this.dashboardLoading = false
            }
        },
        applyDashboard(data) {
            const dt = data.dt || {}
            const feeder = data.feeder || {}
            this.dt_target_availability = formatNumber(dt.target_hours)
            this.feeder_target_availability = formatNumber(feeder.target_hours)
            this.dt_actual_availability = formatNumber(dt.actual_hours)
            this.feeder_actual_availability = formatNumber(feeder.actual_hours)
            this.dt_availability_rate = formatNumber(dt.availability_rate_pct)
            this.feeder_availability_status = feeder.status || '—'

            const trend = data.trend || []
            // The doc only shows a Month-period sample, whose points are keyed "month" — Day/Week
            // periods aren't documented, so probe the likely alternate key names defensively.
            const labelOf = (t) => pick(t, ['month', 'week', 'day', 'date', 'label'], '')
            this.trendLabels = trend.map(labelOf)
            this.trendAvailability = trend.map((t) => t.avg_availability)
            this.trendTarget = trend.map((t) => t.avg_target)
            this.trendCallout = buildTrendCallout(trend, 'avg_availability', labelOf, (v) => formatNumber(v))

            this.$nextTick(() => this.renderTrendChart())
        },
        renderTrendChart() {
            const canvas = document.getElementById('availabilityChart')
            if (!canvas) return
            if (this.trendChart) this.trendChart.destroy()
            this.trendChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels: this.trendLabels,
                    datasets: [
                        {
                            label: 'Average Availability',
                            data: this.trendAvailability,
                            borderColor: '#4ecb71',
                            backgroundColor: 'rgba(78,203,113,0.08)',
                            pointBackgroundColor: '#4ecb71',
                            pointBorderColor: '#fff',
                            pointRadius: 6,
                            pointBorderWidth: 2,
                            borderWidth: 2,
                            tension: 0.4,
                            fill: false
                        },
                        {
                            label: 'Average Target',
                            data: this.trendTarget,
                            borderColor: '#5b7cfa',
                            backgroundColor: 'rgba(91,124,250,0.08)',
                            pointBackgroundColor: '#5b7cfa',
                            pointBorderColor: '#fff',
                            pointRadius: 6,
                            pointBorderWidth: 2,
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
                        yAxes: [{
                            gridLines: { color: 'rgba(0,0,0,0.05)' }
                        }],
                        xAxes: [{
                            gridLines: { color: 'rgba(0,0,0,0.05)', borderDash: [4, 4] }
                        }]
                    }
                }
            })
        },

        // --- Table tab ---
        onTableDtNameChange() {
            this.tablePage = 1
            this.loadTable()
        },
        onTableDateChange(e) {
            this.tableDate = e.target.value
            this.tablePage = 1
            this.loadTable()
        },
        goToPage(delta) {
            const next = this.tablePage + delta
            if (next < 1) return
            if (this.tableTotalPages && next > this.tableTotalPages) return
            this.tablePage = next
            this.loadTable()
        },
        async loadTable() {
            this.tableLoading = true
            this.tableError = null
            try {
                const data = await getDtAvailabilityTable({
                    dt_name: this.tableDtName,
                    date: this.tableDate,
                    page: this.tablePage,
                    page_size: this.tablePageSize
                })
                this.tableTotal = data.total || 0
                this.tableTotalPages = data.total_pages || 0
                this.dt_availability_rows = (data.data || []).map((row) => ({
                    date: row.date,
                    dt_name: row.dt_name,
                    feeder_name: row.feeder_name,
                    band: row.band,
                    consumption: formatNumber(row.consumption_kwh),
                    availability: formatNumber(row.dt_actual_availability_hrs)
                }))
                this.mergeKnownDtNames(data.data || [])
            } catch (err) {
                this.tableError = err.message || 'Failed to load DT availability table'
            } finally {
                this.tableLoading = false
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
    margin-bottom: 20px;
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

.tabs .tab a.active.dashboard-tab {
    color: #c0392b;
    border-bottom: 2px solid #c0392b;
}

.tabs .tab a.active.table-tab {
    color: #e8941a;
    border-bottom: 2px solid #e8941a;
}

.tabs .indicator {
    display: none;
}

/* Filters */
.filter-row {
    margin-bottom: 10px;
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
}

.filter-pill-date .filter-pill-input {
    cursor: pointer;
}

/* The native date input draws its own calendar icon next to our Material icon, showing
   two icons — hide it visually (not removed) so clicking there still opens the picker. */
.filter-pill-date .filter-pill-input::-webkit-calendar-picker-indicator {
    opacity: 0;
}

.filter-pill-select {
    cursor: default;
}

select.filter-pill-input {
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

select.filter-pill-input option {
    color: #222;
    background: #fff;
}

.dt-status-banner {
    border-radius: 10px;
    padding: 10px 16px;
    margin-bottom: 16px;
    font-size: 13px;
}

.dt-error {
    background: #fdecec;
    color: #c0392b;
}

.dt-empty {
    background: var(--bg-card-alt);
    color: var(--text-secondary);
}

.dt-table-empty {
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

/* Metric Cards */
.metric-card {
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 12px;
    min-height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.metric-label {
    font-size: 11px;
    color: var(--text-muted);
    margin: 0 0 8px 0;
    line-height: 1.4;
}

.metric-value {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    color: var(--text-primary);
}

.green-value {
    color: #27ae60;
}

/* Trend Chart Card */
.trend-card {
    border-radius: 12px;
    padding: 20px;
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

.trend-legend {
    display: flex;
    gap: 24px;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--divider);
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--text-secondary);
}

.legend-ring {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 3px solid transparent;
    display: inline-block;
}

.green-ring {
    border-color: #4ecb71;
    background: rgba(78,203,113,0.15);
}

.blue-ring {
    border-color: #5b7cfa;
    background: rgba(91,124,250,0.15);
}

/* Table */
.table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.dt-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 6px;
}

.dt-table thead tr th {
    background-color: #e8941a;
    color: #fff;
    padding: 14px 16px;
    font-weight: 500;
    font-size: 13px;
    white-space: nowrap;
}

.dt-table thead tr th:first-child {
    border-radius: 10px 0 0 10px;
}

.dt-table thead tr th:last-child {
    border-radius: 0 10px 10px 0;
}

.dt-table tbody tr td {
    background: var(--bg-card);
    padding: 12px 16px;
    font-size: 13px;
    color: var(--text-secondary);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
}

.dt-table tbody tr td:first-child {
    border-left: 1px solid var(--border-color);
    border-radius: 8px 0 0 8px;
}

.dt-table tbody tr td:last-child {
    border-right: 1px solid var(--border-color);
    border-radius: 0 8px 8px 0;
}

@media only screen and (max-width: 992px) {
    .main-content {
        padding-left: 20px;
    }
}
</style>
