<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="row header-row" style="margin-bottom: 0;">
                <div class="col s12">
                    <h5 class="avail-title">IDB Events</h5>
                    <ul class="tabs">
                        <li class="tab">
                            <a href="#events-dashboard" class="active tab-link tab-1">
                                <i class="material-icons tiny tab-icon">speed</i> Dashboard
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#events-table" class="tab-link tab-2">
                                <i class="material-icons tiny tab-icon">apps</i> Event Table
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#vending-consumption-table" class="tab-link tab-3">
                                <i class="material-icons tiny tab-icon">apps</i> Vending Vs Consumption Table
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Dashboard Tab -->
            <div id="events-dashboard">
                <div class="row">
                    <div class="col s12 m3">
                        <div class="card-panel top-stat-card">
                            <div class="top-stat-header">
                                <div class="top-stat-icon-wrap purple-icon-wrap">
                                    <i class="material-icons top-stat-icon purple-icon">group</i>
                                </div>
                                <div class="top-stat-info">
                                    <p class="top-stat-value"><AnimatedValue :value="total_events" /></p>
                                    <p class="top-stat-label">Total Events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m3">
                        <div class="card-panel top-stat-card">
                            <div class="top-stat-header">
                                <div class="top-stat-icon-wrap green-icon-wrap">
                                    <i class="material-icons top-stat-icon green-icon">speed</i>
                                </div>
                                <div class="top-stat-info">
                                    <p class="top-stat-value"><AnimatedValue :value="unique_meters" /></p>
                                    <p class="top-stat-label">Unique Meters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m5">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Event Names</p>
                            <ChartPie chart-type="doughnut" :chart-data="eventNamesData" :chart-options="doughnutOptions"
                                :show-value-legend="true" :legend-cols="2" />
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Event Status</p>
                            <ChartPie chart-type="doughnut" :chart-data="eventStatusData" :chart-options="doughnutOptions"
                                center-text="112.41K" :show-value-legend="true" :legend-cols="1"
                                :value-labels="['88k(78.29%)', '24.4k(21.71%)']" />
                        </div>
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Vending VS Consumption Comparison</p>
                            <ChartPie chart-type="pie" :chart-data="vendingVsConsumptionData" :chart-options="pieOptions"
                                :show-value-legend="true" :legend-cols="1"
                                :value-labels="['46.8k(88.03%)', '6.4k(11.97%)']" />
                        </div>
                    </div>
                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card ranked-list-card">
                            <div class="ranked-list-header">
                                <span>Event Names</span>
                                <span>Total Meter Number</span>
                            </div>
                            <div class="ranked-list-row" v-for="(item, i) in eventRankedList" :key="i">
                                <span class="ranked-list-name"><span class="legend-dot" :style="{ background: item.color }"></span>{{ item.name }}</span>
                                <span class="ranked-list-value">{{ item.value }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Event Table Tab -->
            <div id="events-table">
                <div class="row filter-row">
                    <div class="col s3 offset-s3">
                        <div class="filter-pill">
                            <span class="filter-label">Meter Number</span>
                            <i class="material-icons filter-arrow">arrow_drop_down</i>
                        </div>
                    </div>
                    <div class="col s3">
                        <div class="filter-pill">
                            <span class="filter-label">Event Title</span>
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
                    <table class="events-table amber-header">
                        <thead>
                            <tr>
                                <th>Event_Time</th>
                                <th>MSNO</th>
                                <th>Event_Title</th>
                                <th>Event_Description</th>
                                <th>Event_Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in eventTableRows" :key="i">
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
            <div id="vending-consumption-table">
                <div class="row filter-row">
                    <div class="col s3 offset-s3">
                        <div class="filter-pill">
                            <span class="filter-label">Meter Number</span>
                            <i class="material-icons filter-arrow">arrow_drop_down</i>
                        </div>
                    </div>
                    <div class="col s3">
                        <div class="filter-pill">
                            <span class="filter-label">Event Title</span>
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
                    <table class="events-table red-header">
                        <thead>
                            <tr>
                                <th>Meter</th>
                                <th>Total_Consumption</th>
                                <th>Vending</th>
                                <th>Target</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in vendingConsumptionRows" :key="i">
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
// UI-first rebuild to match the Figma "IDB Events" screen exactly. Data below is static mock
// content taken from the Figma mockup — real API wiring will be reintroduced once the backend
// team ships the matching endpoint shape (real events require meter/event-log sources).

const EVENT_COLORS = {
    'Current_bypass_end': '#1a2b5c',
    'Current_reverse_L2': '#4a6cf7',
    'Current_reverse_L3': '#6ba8f5',
    'Meter_box_closed': '#f0a83a',
    'open_box': '#a13a5c',
    'Association_authenti...': '#d94fb0',
    'Current_reverse_L3_...': '#9b59d0',
    'negative_balance': '#6fcf97',
    'Terminal_cover_closed': '#4ecdc4',
    'Terminal_cover_rem...': '#7fd8d8',
    'modem_cover_closed': '#6ba8f5',
    'modem_cover_remo...': '#f0a83a'
}

export default {
    components: { SideNav, AnimatedValue, ChartPie },
    data() {
        return {
            total_events: '116,065',
            unique_meters: '4,553',
            eventNamesData: {
                labels: Object.keys(EVENT_COLORS),
                datasets: [{
                    data: [59.29, 11.09, 10.94, 4.07, 4.02, 3.15, 1.59, 0.57, 0.01, 0.01, 0.01, 0.01],
                    backgroundColor: Object.values(EVENT_COLORS),
                    borderWidth: 0
                }]
            },
            eventStatusData: {
                labels: ['Treated', 'Not Treated'],
                datasets: [{ data: [88000, 24400], backgroundColor: ['#1a2b5c', '#c0392b'] }]
            },
            vendingVsConsumptionData: {
                labels: ['Met', 'Not Met'],
                datasets: [{ data: [46800, 6400], backgroundColor: ['#1a2b5c', '#c0392b'] }]
            },
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 65,
                legend: { display: false }
            },
            pieOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false }
            },
            eventRankedList: [
                { name: 'Current_bypass_end', value: '68,818', color: EVENT_COLORS['Current_bypass_end'] },
                { name: 'Current_reverse_L2', value: '12,869', color: EVENT_COLORS['Current_reverse_L2'] },
                { name: 'Current_reverse_L3', value: '12,696', color: EVENT_COLORS['Current_reverse_L3'] },
                { name: 'Meter_box_closed', value: '4,720', color: EVENT_COLORS['Meter_box_closed'] },
                { name: 'Meter_box_closed', value: '4,720', color: EVENT_COLORS['Meter_box_closed'] },
                { name: 'Meter_box_closed', value: '4,720', color: EVENT_COLORS['Meter_box_closed'] },
                { name: 'open_box', value: '4,670', color: EVENT_COLORS['open_box'] },
                { name: 'Association_authenti...', value: '3,657', color: EVENT_COLORS['Association_authenti...'] },
                { name: 'Current_reverse_L3_...', value: '1,815', color: EVENT_COLORS['Current_reverse_L3_...'] },
                { name: 'negative_balance', value: '933', color: EVENT_COLORS['negative_balance'] },
                { name: 'Terminal_cover_closed', value: '663', color: EVENT_COLORS['Terminal_cover_closed'] },
                { name: 'Terminal_cover_rem...', value: '659', color: EVENT_COLORS['Terminal_cover_rem...'] },
                { name: 'modem_cover_closed', value: '245', color: EVENT_COLORS['modem_cover_closed'] },
                { name: 'modem_cover_closed', value: '245', color: EVENT_COLORS['modem_cover_closed'] },
                { name: 'modem_cover_remo...', value: '0', color: EVENT_COLORS['modem_cover_remo...'] }
            ],
            eventTableRows: Array.from({ length: 10 }, () => ({
                event_time: '1 jan 2026',
                msno: '92112052961',
                event_title: 'Negative Balance',
                event_description: '92112052961 has a negative balance',
                event_status: 'Not Treated'
            })),
            vendingConsumptionRows: Array.from({ length: 7 }, () => ({
                meter: '92112052961',
                total_consumption: '399.35',
                vending: '210.19',
                target: 'Not Met'
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
    padding: 18px 16px;
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

.purple-icon-wrap { background-color: #ece6fb; }
.green-icon-wrap { background-color: #e3f7ea; }

.top-stat-icon { font-size: 22px !important; }
.purple-icon { color: #7b5fd0; }
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

/* Mini chart cards */
.mini-chart-card {
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 12px;
    background: var(--bg-card);
}

.pie-card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 10px 0;
}

.legend-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 6px;
}

/* Ranked list card */
.ranked-list-card {
    min-height: 540px;
}

.ranked-list-header {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-primary);
    padding-bottom: 8px;
    border-bottom: 1px solid var(--divider);
    margin-bottom: 8px;
}

.ranked-list-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    font-size: 12px;
    color: var(--text-secondary);
}

.ranked-list-name {
    display: flex;
    align-items: center;
}

.ranked-list-value {
    font-weight: 600;
    color: var(--text-primary);
}

/* Tables */
.table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.events-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 6px;
}

.events-table.amber-header thead tr th { background-color: #e8941a; }
.events-table.red-header thead tr th { background-color: #c0392b; }

.events-table thead tr th {
    color: #fff;
    padding: 14px 16px;
    font-weight: 500;
    font-size: 13px;
    white-space: nowrap;
}

.events-table thead tr th:first-child {
    border-radius: 10px 0 0 10px;
}

.events-table thead tr th:last-child {
    border-radius: 0 10px 10px 0;
}

.events-table tbody tr td {
    background: var(--bg-card);
    padding: 12px 16px;
    font-size: 13px;
    color: var(--text-secondary);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    white-space: nowrap;
}

.events-table tbody tr td:first-child {
    border-left: 1px solid var(--border-color);
    border-radius: 8px 0 0 8px;
}

.events-table tbody tr td:last-child {
    border-right: 1px solid var(--border-color);
    border-radius: 0 8px 8px 0;
}

@media only screen and (max-width: 992px) {
    .main-content {
        padding-left: 20px;
    }
}
</style>
