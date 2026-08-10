<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="avail-header">
                <h5 class="avail-title">Feeders MYTO Energy Dashboard</h5>
            </div>

            <!-- Filter Row -->
            <div class="row filter-row">
                <div class="col s3 offset-s9">
                    <div class="filter-pill">
                        <span class="filter-label">Feeder Band</span>
                        <i class="material-icons filter-arrow">arrow_drop_down</i>
                    </div>
                </div>
            </div>

            <div v-if="loading" class="state-panel">
                <PreLoader />
            </div>
            <div v-else-if="error" class="state-panel">
                <p class="state-message">Could not load MYTO dashboard data: {{ error }}</p>
                <button class="btn-flat retry-btn" @click="getData">Retry</button>
            </div>

            <div v-else class="row">
                <!-- LEFT: Summary + Band Cards -->
                <div class="col s12 m4">

                    <!-- Total Consumption Card -->
                    <div class="card-panel total-card">
                        <div class="total-card-inner">
                            <div class="total-icon">
                                <i class="material-icons white-text">bolt</i>
                            </div>
                            <div class="total-info">
                                <p class="total-value"><AnimatedValue :value="total_consumption" /></p>
                                <p class="total-label">Total DT Energy Raw</p>
                                <p class="total-date">{{ consumption_date }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Band Cards (chunked 2 per row) -->
                    <div class="row band-row" v-for="(chunk, ci) in bandChunks" :key="ci">
                        <div
                            class="col s6"
                            v-for="(band, bi) in chunk"
                            :key="bi"
                            :style="bi === 0 ? 'padding-right:5px;' : 'padding-left:5px;'"
                        >
                            <div class="card-panel band-card">
                                <p class="band-name">{{ band.name }}</p>
                                <p class="band-pct"><AnimatedValue :value="band.pct" /></p>
                                <p class="band-target">share of total DT energy</p>
                                <p class="band-target">DTs in band: {{ band.count }}</p>
                            </div>
                        </div>
                    </div>
                    <p v-if="!bands.length" class="pending-note">No band energy data returned</p>
                </div>

                <!-- RIGHT: Charts -->
                <div class="col s12 m8">

                    <!-- Energy Consumption Trend -->
                    <div class="card-panel trend-card">
                        <div class="trend-header">
                            <span class="trend-title">DT Energy Raw Trend (last 6 months)</span>
                        </div>
                        <div style="position: relative; height: 200px;">
                            <canvas id="energyTrendChart"></canvas>
                        </div>
                    </div>

                    <!-- Bottom Row: Doughnut + Gauge -->
                    <div class="row" style="margin-bottom: 0;">
                        <div class="col s12 m6">
                            <div class="card-panel mini-card">
                                <p class="mini-title">DT Energy Raw by Band</p>
                                <ChartPie
                                    v-if="energyPerFeederData"
                                    chart-type="doughnut"
                                    :chart-data="energyPerFeederData"
                                    :chart-options="doughnutOptions"
                                />
                                <div class="feeder-legend">
                                    <div class="feeder-legend-item" v-for="item in energyLegend" :key="item.name">
                                        <span class="fleg-dot" :style="{ backgroundColor: item.color }"></span>
                                        <span class="fleg-name">{{ item.name }}</span>
                                        <span class="fleg-val">{{ item.value }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m6">
                            <div class="card-panel mini-card pending-card">
                                <p class="mini-title">Feeder Communication Status</p>
                                <CertificationBadge status="pending" />
                                <p class="pending-note">Meter communication data pending source onboarding</p>
                            </div>
                        </div>
                    </div>

                    <div class="row" style="margin-bottom: 0;">
                        <div class="col s12">
                            <div class="card-panel mini-card">
                                <p class="mini-title">Availability by Band</p>
                                <CertificationBadge status="pending" text="Not certified — no confirmed TG/band mapping key" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import Chart from '~/assets/js/Chart.js'
import SideNav from '~/components/SideNav/SideNav.vue'
import ChartPie from '~/components/ChartPie.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import * as controlCenterApi from '~/js_modules/controlCenterApi.js'
import { pick, formatNumber, lastNMonths, monthLabel } from '~/js_modules/controlCenterApi.js'

const BAND_COLORS = ['#5b7cfa', '#6dd4c7', '#c87dff', '#e74c3c', '#ffa94e', '#4ecdc4']

export default {
    components: { SideNav, ChartPie, AnimatedValue },
    data() {
        return {
            loading: true,
            error: null,
            total_consumption: '0',
            consumption_date: '',
            bands: [],
            energyPerFeederData: null,
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false },
                cutoutPercentage: 65
            },
            energyLegend: [],
            trendChart: null
        }
    },
    computed: {
        bandChunks() {
            const result = []
            for (let i = 0; i < this.bands.length; i += 2) {
                result.push(this.bands.slice(i, i + 2))
            }
            return result
        }
    },
    methods: {
        async getData() {
            this.loading = true
            this.error = null
            try {
                const myto = await controlCenterApi.getMytoDashboard()

                const totalDtEnergy = pick(myto, ['summary.total_dt_energy_raw'], null)
                this.total_consumption = totalDtEnergy != null ? formatNumber(totalDtEnergy) : '0'

                const monthStart = pick(myto, ['month', 'summary.month_start'], null)
                this.consumption_date = this.formatMonth(monthStart)

                // band_summary is an array of per-band rows (band_code, total_dts, dt_energy_raw, ...),
                // not an object keyed by band name
                const bandSummary = pick(myto, ['band_summary'], []) || []
                this.bands = this.buildBands(bandSummary, totalDtEnergy)

                if (this.bands.length) {
                    this.energyLegend = this.bands.map((b, i) => ({
                        name: b.name,
                        color: BAND_COLORS[i % BAND_COLORS.length],
                        value: formatNumber(b.energy)
                    }))
                    this.energyPerFeederData = {
                        labels: this.bands.map(b => b.name),
                        datasets: [{
                            data: this.bands.map(b => b.energy),
                            backgroundColor: this.bands.map((_, i) => BAND_COLORS[i % BAND_COLORS.length]),
                            borderWidth: 0
                        }]
                    }
                } else {
                    this.energyLegend = []
                    this.energyPerFeederData = null
                }

                await this.loadTrend(monthStart)
            } catch (err) {
                this.error = err.message
                console.error('myto dashboard load failed', err)
            } finally {
                this.loading = false
            }
        },
        formatMonth(monthStr) {
            const d = monthStr ? new Date(monthStr) : new Date()
            return Number.isNaN(d.getTime()) ? '' : d.toLocaleString('en-US', { month: 'short', year: 'numeric' })
        },
        buildBands(bandSummary, totalEnergy) {
            const denom = totalEnergy || bandSummary.reduce((sum, b) => sum + (Number(pick(b, ['dt_energy_raw'], 0)) || 0), 0) || 1
            return bandSummary.map(b => {
                const energy = Number(pick(b, ['dt_energy_raw'], 0)) || 0
                const totalDts = pick(b, ['total_dts'], null)
                const count = totalDts != null ? formatNumber(totalDts) : '—'
                const pct = denom ? (energy / denom) * 100 : 0
                return {
                    name: `Band ${pick(b, ['band_code'], '—')}`,
                    pct: `${pct.toFixed(2)}%`,
                    count,
                    energy
                }
            })
        },
        async loadTrend(baseMonth) {
            const months = lastNMonths(baseMonth, 6)
            const responses = await Promise.all(
                months.map(m => controlCenterApi.getMytoDashboard({ month: m }).catch(() => null))
            )
            this.renderTrendChart(
                months.map(monthLabel),
                responses.map(r => pick(r, ['summary.total_dt_energy_raw'], null))
            )
        },
        renderTrendChart(labels, data) {
            const canvas = document.getElementById('energyTrendChart')
            if (!canvas) return
            if (this.trendChart) this.trendChart.destroy()
            this.trendChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels,
                    datasets: [{
                        label: 'DT Energy Raw',
                        data,
                        borderColor: '#4ecb71',
                        backgroundColor: 'rgba(78,203,113,0.08)',
                        pointBackgroundColor: '#4ecb71',
                        pointBorderColor: '#fff',
                        pointRadius: 6,
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
                            label: function(tooltipItems) { return formatNumber(tooltipItems.yLabel) + ' (raw)' }
                        }
                    },
                    scales: {
                        yAxes: [{ gridLines: { color: 'rgba(0,0,0,0.04)' }, ticks: { display: false } }],
                        xAxes: [{ gridLines: { color: 'rgba(0,0,0,0.04)', borderDash: [4, 4] } }]
                    }
                }
            })
        }
    },
    async mounted() {
        await this.getData()
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

/* Filter */
.filter-row { margin-bottom: 10px; }

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

.filter-label { font-size: 13px; color: var(--text-secondary); }
.filter-arrow { color: var(--text-muted); font-size: 20px !important; }

/* Total Consumption Card */
.total-card {
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 8px;
    position: relative;
}

.total-card-inner {
    display: flex;
    align-items: center;
    gap: 14px;
}

.total-icon {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #f39c12;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.total-value {
    font-size: 26px;
    font-weight: 700;
    margin: 0 0 2px 0;
    color: var(--text-primary);
}

.total-label {
    font-size: 12px;
    color: var(--text-secondary);
    margin: 0 0 2px 0;
}

.total-date {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0;
}

/* Band Cards */
.band-row { margin-bottom: 0; }

.band-card {
    border-radius: 12px;
    padding: 14px;
    margin-bottom: 10px;
}

.band-name {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0 0 4px 0;
    font-weight: 500;
}

.band-pct {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 2px 0;
}

.band-target {
    font-size: 11px;
    color: var(--text-faint);
    margin: 4px 0 0 0;
}

/* Trend Chart Card */
.trend-card {
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 10px;
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

/* Mini Cards (bottom row) */
.mini-card {
    border-radius: 12px;
    padding: 16px;
}

.mini-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 12px 0;
}

/* Feeder Legend */
.feeder-legend {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 4px;
    margin-top: 12px;
}

.feeder-legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
}

.fleg-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
}

.fleg-name {
    font-size: 12px;
    color: var(--text-secondary);
    flex: 1;
}

.fleg-val {
    font-size: 12px;
    font-weight: 700;
    color: var(--text-primary);
}

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
}
</style>
