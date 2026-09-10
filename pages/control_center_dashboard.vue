<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <LoadingOverlay :visible="loading" />

            <div class="avail-header">
                <h5 class="avail-title">Control Center Dashboard</h5>
            </div>

            <div v-if="error" class="cc-error">
                Couldn't load live data: {{ error }}
                <button class="cc-retry" @click="loadSummary">Retry</button>
            </div>

            <div class="row">
                <!-- Card 1: Online Feeders -->
                <div class="col s12 m3">
                    <div class="card-panel top-stat-card">
                        <div class="top-stat-header">
                            <div class="top-stat-icon-wrap red-icon-wrap">
                                <i class="material-icons top-stat-icon red-icon">device_hub</i>
                            </div>
                            <div class="top-stat-info">
                                <p class="top-stat-value"><AnimatedValue :value="online_feeders" /></p>
                                <p class="top-stat-label">Online feeders</p>
                            </div>
                        </div>
                        <div class="top-stat-divider"></div>
                        <div class="top-stat-sub-row">
                            <div class="top-stat-sub border-right">
                                <p class="sub-label">11kv</p>
                                <p class="sub-value">{{ kv11 }}</p>
                            </div>
                            <div class="top-stat-sub">
                                <p class="sub-label">33kv</p>
                                <p class="sub-value">{{ kv33 }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Online DTs -->
                <div class="col s12 m3">
                    <div class="card-panel top-stat-card">
                        <div class="top-stat-header">
                            <div class="top-stat-icon-wrap red-icon-wrap">
                                <i class="material-icons top-stat-icon red-icon">bolt</i>
                            </div>
                            <div class="top-stat-info">
                                <p class="top-stat-value"><AnimatedValue :value="online_dts" /></p>
                                <p class="top-stat-label">Online DTs</p>
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

                <!-- Card 3: Total Customer Complaints -->
                <div class="col s12 m3">
                    <div class="card-panel top-stat-card">
                        <div class="top-stat-header">
                            <div class="top-stat-icon-wrap blue-icon-wrap">
                                <i class="material-icons top-stat-icon blue-icon">group</i>
                            </div>
                            <div class="top-stat-info">
                                <p class="top-stat-value"><AnimatedValue :value="complaints_total" /></p>
                                <p class="top-stat-label">Total Customer Complaints</p>
                            </div>
                        </div>
                        <div class="top-stat-divider"></div>
                        <div class="top-stat-sub-row">
                            <div class="top-stat-sub border-right">
                                <p class="sub-label">Open</p>
                                <p class="sub-value">{{ complaints_open }}</p>
                            </div>
                            <div class="top-stat-sub">
                                <p class="sub-label">Closed</p>
                                <p class="sub-value">{{ complaints_closed }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Total Customers -->
                <div class="col s12 m3">
                    <div class="card-panel top-stat-card">
                        <p class="customers-card-title">Total Customers</p>
                        <div class="progress-item">
                            <div class="progress-label-row">
                                <span class="progress-name">Metered NMD</span>
                                <span class="progress-fraction">{{ nmd_value }}/{{ nmd_total }}</span>
                            </div>
                            <div class="progress indigo lighten-4" style="height:8px; border-radius:4px;">
                                <div class="determinate indigo accent-2" :style="{ width: nmd_pct }"></div>
                            </div>
                        </div>
                        <div class="progress-item" style="margin-top: 14px;">
                            <div class="progress-label-row">
                                <span class="progress-name">Metered MD</span>
                                <span class="progress-fraction">{{ md_value }}/{{ md_total }}</span>
                            </div>
                            <div class="progress green lighten-4" style="height:8px; border-radius:4px;">
                                <div class="determinate green" :style="{ width: md_pct }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Energy + Allocation Row -->
            <div class="row">
                <div class="col s12 m7">
                    <div class="card-panel mini-chart-card energy-card">
                        <div class="energy-card-header">
                            <p class="energy-card-title">Energy</p>
                            <div class="chart-tabs">
                                <!-- control-center/summary's energy.trend is fixed at monthly grain (no
                                     day/week breakdown exists to switch to), so this isn't a clickable
                                     filter — it just states what's being shown. -->
                                <span class="chart-tab active">Month</span>
                                <span class="chart-icon-btn"><i class="material-icons tiny">calendar_today</i></span>
                                <span class="chart-icon-btn chart-icon-btn-accent"><i class="material-icons tiny">description</i></span>
                            </div>
                        </div>
                        <p class="energy-card-value">{{ energyTotal }}</p>
                        <div class="chart-callout-wrap">
                            <div style="position: relative; height:190px;">
                                <canvas id="energyChart"></canvas>
                            </div>
                            <div v-if="energyCallout" class="chart-callout" :style="{ left: energyCallout.leftPct + '%', top: '6px' }">
                                <span class="callout-title">{{ energyCallout.title }}</span>
                                <span class="callout-value">{{ energyCallout.value }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s12 m5">
                    <div class="card-panel mini-chart-card">
                        <p class="pie-card-title center">Energy Allocation per Feeder Band</p>
                        <ChartPie
                            chart-type="pie"
                            :chart-data="energyAllocationData"
                            :chart-options="pieOptions"
                        />
                        <div class="band-pct-legend">
                            <span v-for="item in bandPctLegend" :key="item.label" class="band-pct-item" :style="{ color: item.color }">
                                {{ item.label }} {{ item.pct }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Vending & Total Feeder Row -->
            <div class="row">
                <div class="col s12 m7">
                    <div class="card-panel mini-chart-card energy-card">
                        <div class="energy-card-header">
                            <p class="energy-card-title">Vending &amp; Collection</p>
                            <div class="chart-tabs">
                                <span class="chart-tab" :class="{ active: vendingTab === 'Day' }" @click="setVendingTab('Day')">Day</span>
                                <span class="chart-tab" :class="{ active: vendingTab === 'Week' }" @click="setVendingTab('Week')">Week</span>
                                <span class="chart-tab" :class="{ active: vendingTab === 'Month' }" @click="setVendingTab('Month')">Month</span>
                                <span class="chart-icon-btn"><i class="material-icons tiny">calendar_today</i></span>
                            </div>
                        </div>
                        <div class="chart-callout-wrap">
                            <div style="position: relative; height:190px;">
                                <canvas id="vendingChart"></canvas>
                            </div>
                            <div v-if="vendingCallout" class="chart-callout" :style="{ left: vendingCallout.leftPct + '%', top: '6px' }">
                                <span class="callout-title">{{ vendingCallout.title }}</span>
                                <span class="callout-value">{{ vendingCallout.value }}</span>
                            </div>
                        </div>
                        <div class="vending-stats-grid">
                            <div class="vending-stats-col">
                                <div class="vending-stat-row">
                                    <span class="vstat-dot vstat-dot-green"></span>
                                    <span class="vstat-label">Total customer Vended Today</span>
                                    <span class="vstat-value">{{ vendingStats.customerVendedToday }}</span>
                                </div>
                                <div class="vending-stat-row">
                                    <span class="vstat-dot vstat-dot-green"></span>
                                    <span class="vstat-label">Amount Vended Today</span>
                                    <span class="vstat-value">{{ vendingStats.amountVendedToday }}</span>
                                </div>
                                <div class="vending-stat-row">
                                    <span class="vstat-dot vstat-dot-green"></span>
                                    <span class="vstat-label">Amount Vended MTD</span>
                                    <span class="vstat-value">{{ vendingStats.amountVendedMtd }}</span>
                                </div>
                            </div>
                            <div class="vending-stats-col">
                                <div class="vending-stat-row">
                                    <span class="vstat-dot vstat-dot-blue"></span>
                                    <span class="vstat-label">Total Collection Today</span>
                                    <span class="vstat-value">{{ vendingStats.totalCollectionToday }}</span>
                                </div>
                                <div class="vending-stat-row">
                                    <span class="vstat-dot vstat-dot-blue"></span>
                                    <span class="vstat-label">Amount Collected MTD</span>
                                    <span class="vstat-value">{{ vendingStats.amountCollectedMtd }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s12 m5">
                    <div class="card-panel mini-chart-card">
                        <p class="pie-card-title center">Total Feeder</p>
                        <ChartPie
                            chart-type="doughnut"
                            :chart-data="totalFeederData"
                            :chart-options="doughnutOptions"
                            :center-text="totalFeederCenterText"
                            :show-value-legend="true"
                            :legend-cols="2"
                        />
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
import Chart from '~/assets/js/Chart.js'
import { getControlCenterSummary, formatNumber, monthLabel, buildTrendCallout, bandColor, aggregateDailyTrend } from '~/js_modules/controlCenterApi'
// Matches the Figma "Control Center Dashboard" screen, wired to GET /api/v1/control-center/summary
// (see static/api_live_responses3.md #3). That endpoint takes no query params and always returns
// the latest snapshot, so there's nothing to filter on this screen.

// customers.metered_*_target can't be assumed non-zero; a zero/blank target would
// otherwise divide-by-zero into a NaN width on the progress bar.
function pctString(actual, target) {
    const a = Number(actual)
    const t = Number(target)
    if (!Number.isFinite(a) || !Number.isFinite(t) || t <= 0) return '0%'
    return `${((a / t) * 100).toFixed(2)}%`
}



export default {
    components: { SideNav, AnimatedValue, ChartPie, LoadingOverlay },
    data() {
        return {
            loading: true,
            error: null,

            online_feeders: '—',
            kv11: '—',
            kv33: '—',
            online_dts: '—',
            public_dts: '—',
            private_dts: '—',

            complaints_total: '—',
            complaints_open: '—',
            complaints_closed: '—',

            nmd_value: '—',
            nmd_total: '—',
            nmd_pct: '0%',
            md_value: '—',
            md_total: '—',
            md_pct: '0%',

            energyTotal: '—',
            energyChartLabels: [],
            energyChartValues: [],
            energyCallout: null,

            // vending_collection.trend is real daily data, so Day/Week/Month here are genuine
            // client-side aggregations of it (see aggregateVendingTrend below) rather than
            // separate API calls — this endpoint has no period param to ask the server for
            // different granularities.
            vendingTab: 'Day',
            vendingRawTrend: [],
            vendingChartLabels: [],
            vendingVendedValues: [],
            vendingCollectedValues: [],
            vendingCallout: null,
            vendingStats: {
                customerVendedToday: '—',
                amountVendedToday: '—',
                amountVendedMtd: '—',
                totalCollectionToday: '—',
                amountCollectedMtd: '—'
            },

            bandPctLegend: [],
            energyAllocationData: {
                labels: [],
                datasets: [{ data: [], backgroundColor: [], borderWidth: 0 }]
            },
            pieOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false }
            },

            totalFeederCenterText: '—',
            totalFeederData: {
                labels: [],
                datasets: [{ data: [], backgroundColor: [], borderWidth: 0 }]
            },
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 68,
                legend: { display: false }
            },

            energyChart: null,
            vendingChart: null
        }
    },
    async mounted() {
        await this.loadSummary()
    },
    methods: {
        async loadSummary() {
            this.loading = true
            this.error = null
            try {
                const data = await getControlCenterSummary()
                this.applySummary(data)
            } catch (err) {
                this.error = err.message || 'Failed to load Control Center summary'
            } finally {
                this.loading = false
            }
        },
        applySummary(data) {
            const feeder = data.feederDTinfo || {}
            this.online_feeders = formatNumber(feeder.online_feeders)
            this.kv11 = formatNumber(feeder.online_feeders_11kv)
            this.kv33 = formatNumber(feeder.online_feeders_33kv)
            this.online_dts = formatNumber(feeder.online_dts)
            this.public_dts = formatNumber(feeder.online_dts_public)
            this.private_dts = formatNumber(feeder.online_dts_private)

            // total/open/closed have no source system and are always null per the API doc —
            // formatNumber renders that as "—" rather than a misleading "0".
            const complaints = data.customercomplaints || {}
            this.complaints_total = formatNumber(complaints.total)
            this.complaints_open = formatNumber(complaints.open)
            this.complaints_closed = formatNumber(complaints.closed)

            const customers = data.customers || {}
            this.nmd_value = formatNumber(customers.metered_nmd_actual)
            this.nmd_total = formatNumber(customers.metered_nmd_target)
            this.nmd_pct = pctString(customers.metered_nmd_actual, customers.metered_nmd_target)
            this.md_value = formatNumber(customers.metered_md_actual)
            this.md_total = formatNumber(customers.metered_md_target)
            this.md_pct = pctString(customers.metered_md_actual, customers.metered_md_target)

            const energy = data.energy || {}
            this.energyTotal = `${formatNumber(energy.total_mwh)}MWh`
            const energyTrend = energy.trend || []
            this.energyChartLabels = energyTrend.map((t) => monthLabel(t.date))
            this.energyChartValues = energyTrend.map((t) => t.mwh)
            this.energyCallout = buildTrendCallout(energyTrend, 'mwh', (t) => monthLabel(t.date), (v) => `${formatNumber(v)} MWh`)

            const allocation = data.energy_allocation_by_band || []
            this.bandPctLegend = allocation.map((a) => ({ label: a.band, pct: `${a.pct}%`, color: bandColor(a.band) }))
            this.energyAllocationData = {
                labels: allocation.map((a) => a.band),
                datasets: [{ data: allocation.map((a) => a.pct), backgroundColor: allocation.map((a) => bandColor(a.band)), borderWidth: 0 }]
            }

            const vending = data.vending_collection || {}
            this.vendingStats = {
                customerVendedToday: formatNumber(vending.customer_vended_today),
                amountVendedToday: formatNumber(vending.amount_vended_today),
                amountVendedMtd: formatNumber(vending.amount_vended_mtd),
                totalCollectionToday: formatNumber(vending.total_collection_today),
                amountCollectedMtd: formatNumber(vending.amount_collected_mtd)
            }
            this.vendingRawTrend = vending.trend || []
            this.updateVendingView()

            const feedersByBand = data.feeders_by_band || {}
            this.totalFeederCenterText = formatNumber(feedersByBand.total)
            const breakdown = feedersByBand.breakdown || []
            this.totalFeederData = {
                labels: breakdown.map((b) => `Band ${b.band}`),
                datasets: [{ data: breakdown.map((b) => b.count), backgroundColor: breakdown.map((b) => bandColor(b.band)), borderWidth: 0 }]
            }

            this.$nextTick(() => {
                this.initEnergyChart()
                this.initVendingChart()
            })
        },
        updateVendingView() {
            const points = aggregateDailyTrend(this.vendingRawTrend, this.vendingTab, ['vended', 'collected'])
            this.vendingChartLabels = points.map((p) => p.label)
            this.vendingVendedValues = points.map((p) => p.vended)
            this.vendingCollectedValues = points.map((p) => p.collected)
            this.vendingCallout = buildTrendCallout(points, 'vended', (p) => p.label, (v) => formatNumber(v))
        },
        setVendingTab(tab) {
            this.vendingTab = tab
            this.updateVendingView()
            this.$nextTick(() => this.initVendingChart())
        },
        initEnergyChart() {
            const canvas = document.getElementById('energyChart')
            if (!canvas) return
            if (this.energyChart) this.energyChart.destroy()
            this.energyChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels: this.energyChartLabels,
                    datasets: [{
                        data: this.energyChartValues,
                        borderColor: '#4ecb71',
                        backgroundColor: 'rgba(78,203,113,0.08)',
                        pointBackgroundColor: '#4ecb71',
                        pointBorderColor: '#fff',
                        pointRadius: 3,
                        pointBorderWidth: 2,
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: { display: false },
                    tooltips: { enabled: false },
                    scales: {
                        xAxes: [{ gridLines: { display: false }, ticks: { fontColor: '#aaa' } }],
                        yAxes: [{ gridLines: { color: 'rgba(0,0,0,0.04)' }, ticks: { display: false } }]
                    }
                }
            })
        },
        initVendingChart() {
            const canvas = document.getElementById('vendingChart')
            if (!canvas) return
            if (this.vendingChart) this.vendingChart.destroy()
            this.vendingChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels: this.vendingChartLabels,
                    datasets: [
                        {
                            label: 'Vending',
                            data: this.vendingVendedValues,
                            borderColor: '#4ecb71',
                            backgroundColor: 'rgba(78,203,113,0.06)',
                            pointRadius: 0,
                            pointBackgroundColor: '#4ecb71',
                            pointBorderColor: '#fff',
                            pointBorderWidth: 2,
                            borderWidth: 2,
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Collection',
                            data: this.vendingCollectedValues,
                            borderColor: '#5b7cfa',
                            backgroundColor: 'transparent',
                            pointRadius: 0,
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
                    tooltips: { enabled: false },
                    scales: {
                        xAxes: [{ gridLines: { display: false }, ticks: { fontColor: '#aaa', maxRotation: 0, autoSkip: true, maxTicksLimit: 8 } }],
                        yAxes: [{ gridLines: { color: 'rgba(0,0,0,0.04)' }, ticks: { display: false } }]
                    }
                }
            })
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
    position: relative;
    min-height: 100vh;
}

.avail-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.avail-title {
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

/* Top Stat Cards */
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
    margin-bottom: 14px;
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

.red-icon-wrap  { background-color: #fdeaeb; }
.blue-icon-wrap { background-color: #eaedff; }

.top-stat-icon { font-size: 22px !important; }
.red-icon  { color: #c0392b; }
.blue-icon { color: #4a5fa5; }

.top-stat-info { flex: 1; }

.top-stat-value {
    font-size: 26px;
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

.top-stat-divider {
    height: 1px;
    background: var(--divider);
    margin-bottom: 12px;
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

/* Total Customers Card */
.customers-card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 14px 0;
    text-align: center;
}

.progress-item { margin-bottom: 4px; }

.progress-label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
}

.progress-name { font-size: 12px; color: var(--text-secondary); }
.progress-fraction { font-size: 11px; color: var(--text-muted); }

/* Chart Cards */
.mini-chart-card {
    border-radius: 14px;
    padding: 20px;
    margin-bottom: 12px;
    background: var(--bg-card);
}

.energy-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
}

.energy-card-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.energy-card-value {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 8px 0;
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

.chart-icon-btn-accent {
    background: #d7f5e3;
    color: #27ae60;
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

.pie-card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 10px 0;
}

.band-pct-legend {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.band-pct-item {
    font-size: 12px;
    font-weight: 700;
}

/* Vending Section */
.vending-stats-grid {
    display: flex;
    gap: 20px;
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid var(--divider);
}

.vending-stats-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.vending-stat-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
}

.vstat-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
}

.vstat-dot-green { background-color: #4ecb71; }
.vstat-dot-blue { background-color: #5b7cfa; }

.vstat-label { color: var(--text-secondary); flex: 1; }
.vstat-value { font-weight: 700; color: var(--text-primary); white-space: nowrap; }

.cc-error {
    background: #fdecec;
    color: #c0392b;
    border-radius: 10px;
    padding: 10px 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
}

.cc-retry {
    background: #c0392b;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 4px 12px;
    font-size: 12px;
    cursor: pointer;
}


@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
}
</style>
