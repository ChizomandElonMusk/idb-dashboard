<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="row" style="margin-bottom: 0;">
                <div class="col s12">
                    <h5 class="page-title">IDB Events</h5>
                    <ul class="tabs">
                        <li class="tab">
                            <a href="#events-dashboard" class="active tab-link dashboard-tab">
                                <i class="material-icons tiny tab-icon">speed</i> Dashboard
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#event-table" class="tab-link event-tab">
                                <i class="material-icons tiny tab-icon">apps</i> Event Table
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#vending-table" class="tab-link vending-tab">
                                <i class="material-icons tiny tab-icon">apps</i> Vending Vs Consumption Table
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Dashboard Tab -->
            <div id="events-dashboard">
                <div class="row">
                    <!-- Left: Stat cards + Charts -->
                    <div class="col s12 m8">
                        <!-- Stat Cards -->
                        <div class="row" style="margin-bottom: 0;">
                            <div class="col s6">
                                <div class="card-panel stat-card">
                                    <div class="stat-inner">
                                        <div class="stat-icon grey-icon">
                                            <i class="material-icons">people</i>
                                        </div>
                                        <div>
                                            <p class="stat-value"><AnimatedValue :value="total_events" /></p>
                                            <p class="stat-label">Total Events</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s6">
                                <div class="card-panel stat-card">
                                    <div class="stat-inner">
                                        <div class="stat-icon green-icon">
                                            <i class="material-icons">bolt</i>
                                        </div>
                                        <div>
                                            <p class="stat-value"><AnimatedValue :value="unique_meters" /></p>
                                            <p class="stat-label">Unique Meters</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Charts Row -->
                        <div class="row" style="margin-bottom: 0;">
                            <!-- Event Names Doughnut -->
                            <div class="col s12 m6">
                                <div class="card-panel chart-card">
                                    <p class="chart-title">Event Names</p>
                                    <ChartPie v-if="eventNamesData" chart-type="doughnut"
                                        :chart-data="eventNamesData" :chart-options="doughnutOptions" />
                                    <div class="event-legend">
                                        <div class="event-legend-item" v-for="e in eventNames" :key="e.name">
                                            <span class="eleg-dot" :style="{ backgroundColor: e.color }"></span>
                                            <span class="eleg-name">{{ e.name }}</span>
                                            <span class="eleg-pct">{{ e.pct }}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Event Status + Vending stacked -->
                            <div class="col s12 m6">
                                <div class="card-panel chart-card">
                                    <p class="chart-title">Event Status</p>
                                    <div class="small-chart">
                                        <ChartPie v-if="eventStatusData" chart-type="doughnut"
                                            :chart-data="eventStatusData" :chart-options="doughnutOptions"
                                            center-text="112.41K" />
                                    </div>
                                    <div class="status-legend">
                                        <div class="status-legend-item" v-for="item in eventStatusLegend" :key="item.label">
                                            <span class="sleg-dot" :style="{ backgroundColor: item.color }"></span>
                                            <span class="sleg-label">{{ item.label }}</span>
                                            <span class="sleg-val">{{ item.value }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-panel chart-card">
                                    <p class="chart-title">Vending VS Consumption Comparison</p>
                                    <div class="small-chart">
                                        <ChartPie v-if="vendingCompData" chart-type="pie"
                                            :chart-data="vendingCompData" :chart-options="pieOptions" />
                                    </div>
                                    <div class="status-legend">
                                        <div class="status-legend-item" v-for="item in vendingLegend" :key="item.label">
                                            <span class="sleg-dot" :style="{ backgroundColor: item.color }"></span>
                                            <span class="sleg-label">{{ item.label }}</span>
                                            <span class="sleg-val">{{ item.value }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Event Names List -->
                    <div class="col s12 m4">
                        <div class="card-panel event-list-card">
                            <div class="event-list-header">
                                <span>Event Names</span>
                                <span>Total Meter Number</span>
                            </div>
                            <div class="event-list-row" v-for="e in eventNames" :key="e.name + e.count">
                                <div class="elist-left">
                                    <span class="elist-dot" :style="{ backgroundColor: e.color }"></span>
                                    <span class="elist-name">{{ e.name }}</span>
                                </div>
                                <span class="elist-count">{{ e.count.toLocaleString() }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Event Table Tab -->
            <div id="event-table">
                <div class="filter-row-right">
                    <div class="filter-pill">
                        <span class="filter-label">Meter Number</span>
                        <i class="material-icons filter-arrow">arrow_drop_down</i>
                    </div>
                    <div class="filter-pill">
                        <span class="filter-label">Event Title</span>
                        <i class="material-icons filter-arrow">arrow_drop_down</i>
                    </div>
                    <div class="filter-pill">
                        <span class="filter-label">Date</span>
                        <i class="material-icons" style="font-size:18px; color:#888;">calendar_today</i>
                    </div>
                </div>
                <div class="table-wrapper">
                    <table class="ev-table">
                        <thead>
                            <tr class="orange-hdr">
                                <th>Event_Time</th>
                                <th>MSNO</th>
                                <th>Event_Title</th>
                                <th>Event_Description</th>
                                <th>Event_Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in event_table_data" :key="i">
                                <td>{{ row.event_time }}</td>
                                <td>{{ row.msno }}</td>
                                <td>{{ row.event_title }}</td>
                                <td>{{ row.event_description }}</td>
                                <td>{{ row.event_status }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Vending Vs Consumption Table Tab -->
            <div id="vending-table">
                <div class="filter-row-right">
                    <div class="filter-pill">
                        <span class="filter-label">Meter Number</span>
                        <i class="material-icons filter-arrow">arrow_drop_down</i>
                    </div>
                    <div class="filter-pill">
                        <span class="filter-label">Event Title</span>
                        <i class="material-icons filter-arrow">arrow_drop_down</i>
                    </div>
                    <div class="filter-pill">
                        <span class="filter-label">Date</span>
                        <i class="material-icons" style="font-size:18px; color:#888;">calendar_today</i>
                    </div>
                </div>
                <div class="table-wrapper">
                    <table class="ev-table">
                        <thead>
                            <tr class="red-hdr">
                                <th>Meter</th>
                                <th>Total_Consumption</th>
                                <th>Vending</th>
                                <th>Target</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in vending_table_data" :key="i">
                                <td>{{ row.meter }}</td>
                                <td>{{ row.total_consumption }}</td>
                                <td>{{ row.vending }}</td>
                                <td>{{ row.target }}</td>
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

export default {
    components: { SideNav, AnimatedValue, ChartPie },
    data() {
        return {
            total_events: '0',
            unique_meters: '0',
            eventNamesData: null,
            eventStatusData: null,
            vendingCompData: null,
            doughnutOptions: { responsive: true, maintainAspectRatio: false, legend: { display: false }, cutoutPercentage: 65 },
            pieOptions: { responsive: true, maintainAspectRatio: false, legend: { display: false } },
            eventNames: [
                { name: 'Current_bypass_end',    color: '#0d1b4b', pct: 59.29, count: 68818 },
                { name: 'Current_reverse_L2',    color: '#3b82f6', pct: 11.09, count: 12869 },
                { name: 'Current_reverse_L3',    color: '#60a5fa', pct: 10.94, count: 12696 },
                { name: 'Meter_box_closed',      color: '#f97316', pct: 4.07,  count: 4720  },
                { name: 'open_box',              color: '#ec4899', pct: 4.02,  count: 4670  },
                { name: 'Association_authenti...', color: '#8b5cf6', pct: 3.15, count: 3657 },
                { name: 'Current_reverse_L3_...', color: '#c084fc', pct: 1.59, count: 1815 },
                { name: 'negative_balance',      color: '#22c55e', pct: 0.57,  count: 933   },
                { name: 'Terminal_cover_closed', color: '#2dd4bf', pct: 0.01,  count: 663   },
                { name: 'Terminal_cover_rem...',  color: '#67e8f9', pct: 0.01, count: 659   },
                { name: 'modem_cover_closed',    color: '#a5b4fc', pct: 0.01,  count: 245   },
                { name: 'modem_cover_remo...',   color: '#fbbf24', pct: 0.01,  count: 0     },
            ],
            eventStatusLegend: [
                { label: 'Treated',     value: '88k(78.29%)',  color: '#0d1b4b' },
                { label: 'Not Treated', value: '24.4k(21.71%)', color: '#b91c1c' },
            ],
            vendingLegend: [
                { label: 'Met',     value: '46.8k(88.03%)', color: '#0d1b4b' },
                { label: 'Not Met', value: '6.4k(11.97%)',  color: '#b91c1c' },
            ],
            event_table_data: Array.from({ length: 10 }, () => ({
                event_time: '1 jan 2026',
                msno: '92112052961',
                event_title: 'Negative Balance',
                event_description: '92112052961 has a negative balance',
                event_status: 'Not Treated'
            })),
            vending_table_data: Array.from({ length: 7 }, () => ({
                meter: '92112052961',
                total_consumption: '399.35',
                vending: '210.19',
                target: 'Not Met'
            }))
        }
    },
    methods: {
        getData() {
            this.total_events = '116,065'
            this.unique_meters = '4,553'
            this.eventNamesData = {
                labels: this.eventNames.map(e => e.name),
                datasets: [{ data: this.eventNames.map(e => e.pct), backgroundColor: this.eventNames.map(e => e.color), borderWidth: 0 }]
            }
            this.eventStatusData = {
                labels: ['Treated', 'Not Treated'],
                datasets: [{ data: [78.29, 21.71], backgroundColor: ['#0d1b4b', '#b91c1c'], borderWidth: 0 }]
            }
            this.vendingCompData = {
                labels: ['Met', 'Not Met'],
                datasets: [{ data: [88.03, 11.97], backgroundColor: ['#0d1b4b', '#b91c1c'], borderWidth: 0 }]
            }
        }
    },
    mounted() {
        const el = document.querySelector('.tabs')
        if (el) M.Tabs.init(el, {})
        this.getData()
    }
}
</script>

<style scoped>
.dashboard-wrapper { background-color: #f8f9fd; min-height: 100vh; }
.main-content { padding-left: 280px; padding-right: 20px; padding-top: 20px; }
.page-title { font-weight: 400; margin-bottom: 8px; }

/* Tabs */
.tabs { background: transparent; border-bottom: 1px solid #ddd; margin-bottom: 20px; }
.tabs .tab a { color: #888; text-transform: none; font-size: 14px; display: flex; align-items: center; gap: 6px; }
.tabs .tab a .tab-icon { font-size: 16px !important; }
.tabs .tab a.active.dashboard-tab { color: #c0392b; border-bottom: 2px solid #c0392b; }
.tabs .tab a.active.event-tab     { color: #e8941a; border-bottom: 2px solid #e8941a; }
.tabs .tab a.active.vending-tab   { color: #c0392b; border-bottom: 2px solid #c0392b; }
.tabs .indicator { display: none; }

/* Stat Cards */
.stat-card { border-radius: 12px; padding: 16px; margin-bottom: 10px; }
.stat-inner { display: flex; align-items: center; gap: 14px; }
.stat-icon {
    width: 48px; height: 48px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.grey-icon  { background-color: #e8eaf0; color: #555; }
.green-icon { background-color: #22c55e; color: #fff; }
.stat-value { font-size: 24px; font-weight: 700; color: #222; margin: 0 0 2px 0; }
.stat-label { font-size: 12px; color: #888; margin: 0; }

/* Chart Cards */
.chart-card { border-radius: 12px; padding: 16px; margin-bottom: 10px; }
.chart-title { font-size: 14px; font-weight: 600; color: #222; margin: 0 0 10px 0; }

/* Small charts (Event Status + Vending) override ChartPie canvas height */
.small-chart ::v-deep .chart-canvas-container { height: 140px; }

/* Event Names legend (2 columns) */
.event-legend { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 8px; margin-top: 12px; }
.event-legend-item { display: flex; align-items: center; gap: 5px; }
.eleg-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.eleg-name { font-size: 11px; color: #555; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.eleg-pct { font-size: 11px; font-weight: 600; color: #222; white-space: nowrap; }

/* Event Status / Vending legend */
.status-legend { display: flex; gap: 16px; margin-top: 10px; flex-wrap: wrap; }
.status-legend-item { display: flex; align-items: center; gap: 6px; }
.sleg-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.sleg-label { font-size: 12px; color: #555; }
.sleg-val { font-size: 12px; font-weight: 700; color: #222; }

/* Event Names List (right column) */
.event-list-card { border-radius: 12px; padding: 16px; }
.event-list-header {
    display: flex; justify-content: space-between;
    font-size: 13px; font-weight: 700; color: #222;
    padding-bottom: 10px; border-bottom: 1px solid #f0f0f0; margin-bottom: 6px;
}
.event-list-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 7px 0; border-bottom: 1px solid #f8f8f8;
}
.elist-left { display: flex; align-items: center; gap: 8px; min-width: 0; }
.elist-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.elist-name { font-size: 12px; color: #444; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 160px; }
.elist-count { font-size: 12px; font-weight: 700; color: #222; white-space: nowrap; }

/* Filters */
.filter-row-right { display: flex; justify-content: flex-end; gap: 10px; margin-bottom: 16px; }
.filter-pill {
    display: flex; align-items: center; justify-content: space-between; gap: 6px;
    border: 1px solid #ddd; border-radius: 8px; padding: 8px 12px; background: #fff;
    cursor: pointer; min-width: 120px;
}
.filter-label { font-size: 13px; color: #555; }
.filter-arrow { color: #888; font-size: 20px !important; }

/* Tables */
.table-wrapper { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.ev-table { width: 100%; border-collapse: separate; border-spacing: 0 6px; }
.ev-table thead tr th { padding: 14px 16px; font-weight: 500; font-size: 13px; color: #fff; }
.ev-table thead tr.orange-hdr th { background-color: #e8941a; }
.ev-table thead tr.red-hdr th    { background-color: #b91c1c; }
.ev-table thead tr th:first-child { border-radius: 10px 0 0 10px; }
.ev-table thead tr th:last-child  { border-radius: 0 10px 10px 0; }
.ev-table tbody tr td {
    background: #fff; padding: 12px 16px; font-size: 13px; color: #444;
    border-top: 1px solid #eee; border-bottom: 1px solid #eee;
}
.ev-table tbody tr td:first-child { border-left: 1px solid #eee; border-radius: 8px 0 0 8px; }
.ev-table tbody tr td:last-child  { border-right: 1px solid #eee; border-radius: 0 8px 8px 0; }

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
}
</style>
