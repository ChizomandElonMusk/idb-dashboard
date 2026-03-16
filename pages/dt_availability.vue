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
                                    <p class="metric-value dark-value"><AnimatedValue :value="dt_target_availability" /></p>
                                </div>
                            </div>
                            <div class="col s6" style="padding: 0 0 0 6px;">
                                <div class="card-panel metric-card">
                                    <p class="metric-label">Feeder Target Availability(Hrs)</p>
                                    <p class="metric-value dark-value"><AnimatedValue :value="feeder_target_availability" /></p>
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
                                    <p class="metric-value green-value"><AnimatedValue :value="feeder_availability_rate" /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Availability Trend Chart -->
                    <div class="col s12 m8">
                        <div class="card-panel trend-card">
                            <div class="trend-header">
                                <span class="trend-title">Availability Trend</span>
                                <div class="period-btns">
                                    <button class="btn-flat period-btn">Day</button>
                                    <button class="btn-flat period-btn">Week</button>
                                    <button class="btn-flat period-btn active-period">Month</button>
                                    <button class="btn-flat period-btn icon-btn">
                                        <i class="material-icons" style="font-size:18px;">calendar_today</i>
                                    </button>
                                </div>
                            </div>
                            <div style="position: relative; height: 250px;">
                                <canvas id="availabilityChart"></canvas>
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
                                <th>Name_Of _Feeder</th>
                                <th>Band</th>
                                <th>Consumption</th>
                                <th>DT Actual<br>Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in dt_availability_data" :key="i">
                                <td>{{ row.date }}</td>
                                <td>{{ row.dt_name }}</td>
                                <td>{{ row.feeder_name }}</td>
                                <td>{{ row.band }}</td>
                                <td>{{ row.consumption }}</td>
                                <td>{{ row.dt_actual_availability }}</td>
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

export default {
    components: { SideNav, AnimatedValue },
    data() {
        return {
            dt_target_availability: '0',
            feeder_target_availability: '0',
            dt_actual_availability: '0',
            feeder_actual_availability: '0',
            dt_availability_rate: '0',
            feeder_availability_rate: '0',
            dt_availability_data: Array.from({ length: 10 }, () => ({
                date: '07/01/2026',
                dt_name: '11-OguduINJ-T1Ogudu-94 VICTORIA STREET CSP',
                feeder_name: '11-OguduINJ-T1-Ogudu',
                band: 'A',
                consumption: '10.90',
                dt_actual_availability: '19.35'
            }))
        }
    },
    methods: {
        getData() {
            this.dt_target_availability = '20.00'
            this.feeder_target_availability = '20.00'
            this.dt_actual_availability = '22.03'
            this.feeder_actual_availability = '20.03'
            this.dt_availability_rate = '110.16'
            this.feeder_availability_rate = 'Exceeded'
        },
        initChart() {
            const ctx = document.getElementById('availabilityChart')
            if (!ctx) return
            new Chart(ctx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Average Availability',
                            data: [21, 20.5, 19.8, 21.2, 23.8, 21.5, 19.5, 19.2, 20, 22, 21.8, 21.2],
                            borderColor: '#4ecb71',
                            backgroundColor: 'rgba(78,203,113,0.08)',
                            pointBackgroundColor: '#4ecb71',
                            pointBorderColor: '#fff',
                            pointRadius: 6,
                            pointBorderWidth: 2,
                            borderWidth: 2,
                            tension: 0.4,
                            fill: false,
                        },
                        {
                            label: 'Average Target',
                            data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                            borderColor: '#5b7cfa',
                            backgroundColor: 'rgba(91,124,250,0.08)',
                            pointBackgroundColor: '#5b7cfa',
                            pointBorderColor: '#fff',
                            pointRadius: 6,
                            pointBorderWidth: 2,
                            borderWidth: 2,
                            tension: 0,
                            fill: false,
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
                        borderWidth: 1,
                        callbacks: {
                            title: (items) => items[0].xLabel + ' 16'
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: { min: 19, max: 24, stepSize: 1 },
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
        const el = document.querySelector('.tabs')
        if (el) M.Tabs.init(el, {})
        this.getData()
        this.initChart()
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

.avail-title {
    font-weight: 600;
    color: #222;
    margin: 0;
}

/* Tabs */
.tabs {
    background: transparent;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
}

.tabs .tab a {
    color: #888;
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
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 8px 12px;
    background: #fff;
    cursor: pointer;
}

.filter-label {
    font-size: 13px;
    color: #555;
}

.filter-arrow {
    color: #888;
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
    color: #888;
    margin: 0 0 8px 0;
    line-height: 1.4;
}

.metric-value {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
}

.dark-value {
    color: #222;
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
    color: #222;
}

.period-btns {
    display: flex;
    align-items: center;
    gap: 4px;
}

.period-btn {
    font-size: 13px;
    color: #9b9faa;
    padding: 0 10px;
    height: 32px;
    line-height: 32px;
    border-radius: 6px;
    text-transform: none;
}

.active-period {
    color: #222;
    font-weight: 600;
    border: 1px solid #ddd;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.icon-btn {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 0 8px;
    display: flex;
    align-items: center;
}

.trend-legend {
    display: flex;
    gap: 24px;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #f0f0f0;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #555;
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
    background: #fff;
    padding: 12px 16px;
    font-size: 13px;
    color: #444;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.dt-table tbody tr td:first-child {
    border-left: 1px solid #eee;
    border-radius: 8px 0 0 8px;
}

.dt-table tbody tr td:last-child {
    border-right: 1px solid #eee;
    border-radius: 0 8px 8px 0;
}

@media only screen and (max-width: 992px) {
    .main-content {
        padding-left: 20px;
    }
}
</style>
