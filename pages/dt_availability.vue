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

            <div v-if="loading" class="state-panel">
                <PreLoader />
            </div>
            <div v-else-if="error" class="state-panel">
                <p class="state-message">Could not load availability data: {{ error }}</p>
                <button class="btn-flat retry-btn" @click="getData">Retry</button>
            </div>

            <template v-else>

            <!-- Dashboard Tab -->
            <div id="dt-dashboard">
                <div class="row filter-row">
                    <div class="col s3 offset-s9">
                        <div class="filter-pill">
                            <span class="filter-label">DT Name</span>
                            <i class="material-icons filter-arrow">arrow_drop_down</i>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <!-- Left: Metric Cards (2x3 grid) -->
                    <div class="col s12 m4">
                        <div class="row" style="margin-bottom: 0;">
                            <div class="col s6" style="padding: 0 6px 0 0;">
                                <div class="card-panel metric-card pending-card">
                                    <p class="metric-label">DT Target Availability (Hrs)</p>
                                    <CertificationBadge status="pending" />
                                </div>
                            </div>
                            <div class="col s6" style="padding: 0 0 0 6px;">
                                <div class="card-panel metric-card pending-card">
                                    <p class="metric-label">Feeder Target Availability(Hrs)</p>
                                    <CertificationBadge status="pending" />
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
                                    <p class="metric-label">DT Meeting 20h+ (%)</p>
                                    <p class="metric-value green-value"><AnimatedValue :value="dt_availability_rate" /></p>
                                </div>
                            </div>
                            <div class="col s6" style="padding: 0 0 0 6px;">
                                <div class="card-panel metric-card">
                                    <p class="metric-label">Feeder Meeting 20h+ (%)</p>
                                    <p class="metric-value green-value"><AnimatedValue :value="feeder_availability_rate" /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Availability Trend Chart -->
                    <div class="col s12 m8">
                        <div class="card-panel trend-card">
                            <div class="trend-header">
                                <span class="trend-title">Availability Trend (last 7 days)</span>
                            </div>
                            <div style="position: relative; height: 250px;">
                                <canvas id="availabilityChart"></canvas>
                            </div>
                            <div class="trend-legend">
                                <span class="legend-item">
                                    <span class="legend-ring green-ring"></span>
                                    <span class="legend-text">Average DT Availability</span>
                                </span>
                                <span class="legend-item">
                                    <span class="legend-ring blue-ring"></span>
                                    <span class="legend-text">Average Feeder Availability</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DT Availability Table Tab -->
            <div id="dt-table">
                <div class="row filter-row">
                    <div class="col s3 offset-s6">
                        <div class="filter-pill">
                            <span class="filter-label">All DTs</span>
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
                <p class="pending-note" style="margin: 0 0 10px 4px;">Worst-performing DT meters for {{ resolvedDate }}</p>

                <div class="table-wrapper">
                    <table class="dt-table">
                        <thead>
                            <tr>
                                <th>DT Name</th>
                                <th>Feeder</th>
                                <th>Band</th>
                                <th>Availability (Hrs)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in dt_availability_data" :key="i">
                                <td>{{ row.dt_name }}</td>
                                <td>{{ row.feeder_name }}</td>
                                <td>{{ row.band }}</td>
                                <td>{{ row.availability_hours }}</td>
                            </tr>
                            <tr v-if="!dt_availability_data.length">
                                <td colspan="4" class="center-align pending-note">No worst-performer rows returned</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            </template>

        </main>
    </div>
</template>

<script>
import Chart from '~/assets/js/Chart.js'
import SideNav from '~/components/SideNav/SideNav.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import * as controlCenterApi from '~/js_modules/controlCenterApi.js'
import { pick, formatNumber, lastNDays, dayLabel } from '~/js_modules/controlCenterApi.js'

export default {
    components: { SideNav, AnimatedValue },
    data() {
        return {
            loading: true,
            error: null,
            dt_actual_availability: '0',
            feeder_actual_availability: '0',
            dt_availability_rate: '0',
            feeder_availability_rate: '0',
            dt_availability_data: [],
            resolvedDate: '',
            trendChart: null
        }
    },
    methods: {
        async getData() {
            this.loading = true
            this.error = null
            try {
                const [dtAvail, feederAvail] = await Promise.all([
                    controlCenterApi.getDtAvailability({ limit: 10 }),
                    controlCenterApi.getFeederAvailability({ limit: 10 })
                ])

                const dtAvgHours = pick(dtAvail, ['summary.avg_dt_availability_hours', 'summary.avg_availability_hours'], null)
                const feederAvgHours = pick(feederAvail, ['summary.avg_feeder_availability_hours', 'summary.avg_availability_hours'], null)
                this.dt_actual_availability = dtAvgHours != null ? Number(dtAvgHours).toFixed(2) : '0'
                this.feeder_actual_availability = feederAvgHours != null ? Number(feederAvgHours).toFixed(2) : '0'

                const dtMetPct = pick(dtAvail, ['summary.dt_met_20_hours_pct', 'summary.met_20_hours_pct'], null)
                const feederMetPct = pick(feederAvail, ['summary.feeder_met_20_hours_pct', 'summary.met_20_hours_pct'], null)
                this.dt_availability_rate = dtMetPct != null ? `${dtMetPct}` : '0'
                this.feeder_availability_rate = feederMetPct != null ? `${feederMetPct}` : '0'

                this.resolvedDate = pick(dtAvail, ['summary.data_date', 'summary.dt_availability_date', 'summary.date'], '—')

                const worstMeters = pick(dtAvail, ['worst_dt_meters'], []) || []
                this.dt_availability_data = worstMeters.map(row => ({
                    dt_name: pick(row, ['dt_name', 'name', 'r_meter_id'], '—'),
                    // feeder/band are not joinable from this endpoint yet — see doc §2.4
                    feeder_name: pick(row, ['feeder_name', 'feeder'], '—'),
                    band: pick(row, ['band', 'myto_band'], '—'),
                    availability_hours: formatNumber(pick(row, ['dt_availability', 'availability_hours', 'dt_actual_availability_hours', 'hours'], 0))
                }))

                await this.loadTrend(pick(dtAvail, ['summary.data_date', 'summary.dt_availability_date'], null))
            } catch (err) {
                this.error = err.message
                console.error('dt availability load failed', err)
            } finally {
                this.loading = false
            }
        },
        async loadTrend(baseDate) {
            const days = lastNDays(baseDate, 7)
            const [dtResponses, feederResponses] = await Promise.all([
                Promise.all(days.map(d => controlCenterApi.getDtAvailability({ date: d }).catch(() => null))),
                Promise.all(days.map(d => controlCenterApi.getFeederAvailability({ date: d }).catch(() => null)))
            ])
            this.renderTrendChart(
                days.map(dayLabel),
                dtResponses.map(r => pick(r, ['summary.avg_dt_availability_hours'], null)),
                feederResponses.map(r => pick(r, ['summary.avg_feeder_availability_hours'], null))
            )
        },
        renderTrendChart(labels, dtData, feederData) {
            const canvas = document.getElementById('availabilityChart')
            if (!canvas) return
            if (this.trendChart) this.trendChart.destroy()
            this.trendChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Average DT Availability',
                            data: dtData,
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
                            label: 'Average Feeder Availability',
                            data: feederData,
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
        }
    },
    async mounted() {
        await this.getData()
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
    justify-content: center !important;
}

.pending-note {
    font-size: 12px;
    color: var(--text-muted);
    margin: 8px 0 0 0;
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
