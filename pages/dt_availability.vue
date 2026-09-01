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
                                    <p class="metric-label">Availability Rate(%)</p>
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
                                    <span class="chart-tab" :class="{ active: trendTab === 'Day' }" @click="trendTab = 'Day'">Day</span>
                                    <span class="chart-tab" :class="{ active: trendTab === 'Week' }" @click="trendTab = 'Week'">Week</span>
                                    <span class="chart-tab" :class="{ active: trendTab === 'Month' }" @click="trendTab = 'Month'">Month</span>
                                    <span class="chart-icon-btn"><i class="material-icons tiny">calendar_today</i></span>
                                </div>
                            </div>
                            <div class="chart-callout-wrap">
                                <div style="position: relative; height: 250px;">
                                    <canvas id="availabilityChart"></canvas>
                                </div>
                                <div class="chart-callout" style="left: 58%; top: 20px;">
                                    <span class="callout-title">July 16</span>
                                    <span class="callout-value">21.5</span>
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
                        </tbody>
                    </table>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import Chart from '~/assets/js/Chart.js'
import SideNav from '~/components/SideNav/SideNav.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
// UI-first rebuild to match the Figma "DT Availability Dashboard" screen exactly. Data below is
// static mock content taken from the Figma mockup — real API wiring will be reintroduced once
// the backend team ships the matching endpoint shape.

export default {
    components: { SideNav, AnimatedValue },
    data() {
        return {
            trendTab: 'Month',
            dt_target_availability: '20.00',
            feeder_target_availability: '20.00',
            dt_actual_availability: '22.03',
            feeder_actual_availability: '20.03',
            dt_availability_rate: '110.16',
            feeder_availability_status: 'Exceeded',
            dt_availability_rows: Array.from({ length: 8 }, () => ({
                date: '07/01/2026',
                dt_name: '11-OgudulNJ-T1Ogudu-94 VICTORIA STREET CSP',
                feeder_name: '11-OgudulNJ-T1-Ogudu',
                band: 'A',
                consumption: '10.90',
                availability: '19.35'
            })),
            trendChart: null
        }
    },
    methods: {
        renderTrendChart() {
            const canvas = document.getElementById('availabilityChart')
            if (!canvas) return
            if (this.trendChart) this.trendChart.destroy()
            this.trendChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Average Availability',
                            data: [21, 20.5, 19, 21, 22.5, 24, 22.5, 20, 19.5, 21.5, 23, 22.5],
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
                            data: Array(12).fill(20),
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
    mounted() {
        this.$nextTick(() => {
            this.renderTrendChart()
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
