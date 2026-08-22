<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="avail-header">
                <h5 class="avail-title">Control Center Dashboard</h5>
            </div>

            <div v-if="loading" class="state-panel">
                <PreLoader />
            </div>

            <div v-else-if="error" class="state-panel">
                <p class="state-message">Could not load Control Center data: {{ error }}</p>
                <button class="btn-flat retry-btn" @click="getData">Retry</button>
            </div>

            <!-- dashboard section -->
            <div v-else class="row" id="dashboard">

                <!-- Top Stats Row -->
                <div class="row top-cards-row">

                    <!-- Card 1: Total Feeders -->
                    <div class="col s12 m3">
                        <div class="card-panel top-stat-card">
                            <div class="top-stat-header">
                                <div class="top-stat-icon-wrap red-icon-wrap">
                                    <i class="material-icons top-stat-icon red-icon">device_hub</i>
                                </div>
                                <div class="top-stat-info">
                                    <p class="top-stat-value"><AnimatedValue :value="online_feeders" /></p>
                                    <p class="top-stat-label">Total feeders</p>
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

                    <!-- Card 2: Total DTs -->
                    <div class="col s12 m3">
                        <div class="card-panel top-stat-card">
                            <div class="top-stat-header">
                                <div class="top-stat-icon-wrap red-icon-wrap">
                                    <i class="material-icons top-stat-icon red-icon">bolt</i>
                                </div>
                                <div class="top-stat-info">
                                    <p class="top-stat-value"><AnimatedValue :value="online_dts" /></p>
                                    <p class="top-stat-label">Total DTs</p>
                                </div>
                            </div>
                            <div class="top-stat-divider"></div>
                            <div class="top-stat-sub-row">
                                <div class="top-stat-sub border-right">
                                    <p class="sub-label">Public</p>
                                    <p class="sub-value"><AnimatedValue :value="public_dts" /></p>
                                </div>
                                <div class="top-stat-sub">
                                    <p class="sub-label">Private</p>
                                    <p class="sub-value">{{ private_dts }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Total Customer Complaints (pending — not an Oracle-backed KPI yet) -->
                    <div class="col s12 m3">
                        <div class="card-panel top-stat-card">
                            <div class="top-stat-header">
                                <div class="top-stat-icon-wrap blue-icon-wrap">
                                    <i class="material-icons top-stat-icon blue-icon">group</i>
                                </div>
                                <div class="top-stat-info">
                                    <p class="top-stat-label" style="margin-bottom: 6px;">Total Customer Complaints</p>
                                    <CertificationBadge status="pending" />
                                </div>
                            </div>
                            <div class="top-stat-divider"></div>
                            <p class="pending-note">Complaints data pending source onboarding</p>
                        </div>
                    </div>

                    <!-- Card 4: Total Customers -->
                    <div class="col s12 m3">
                        <div class="card-panel top-stat-card">
                            <p class="customers-card-title">Total Customers</p>
                            <div class="progress-item">
                                <div class="progress-label-row">
                                    <span class="progress-name">NMD</span>
                                    <span class="progress-fraction">
                                        <AnimatedValue :value="nmd_value" />/{{ total_customers_display }}
                                    </span>
                                </div>
                                <div class="progress indigo lighten-4" style="height:8px; border-radius:4px;">
                                    <div class="determinate indigo accent-2" :style="{ width: nmd_pct }"></div>
                                </div>
                            </div>
                            <div class="progress-item" style="margin-top: 14px;">
                                <div class="progress-label-row">
                                    <span class="progress-name">MD</span>
                                    <span class="progress-fraction">
                                        <AnimatedValue :value="md_value" />/{{ total_customers_display }}
                                    </span>
                                </div>
                                <div class="progress green lighten-4" style="height:8px; border-radius:4px;">
                                    <div class="determinate green" :style="{ width: md_pct }"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Energy + Pie Row -->
                <div class="row">
                    <div class="col s12 m9">
                        <div class="card-panel mini-chart-card" style="padding-bottom: 20px;">
                            <div class="energy-card-header">
                                <div>
                                    <p class="energy-card-title">Energy</p>
                                    <p class="energy-card-value">{{ energyTotal }}</p>
                                    <div class="loss-row">
                                        <span class="loss-label">Feeder&rarr;DT loss: {{ lossPctDisplay }}</span>
                                        <CertificationBadge status="requires_validation" />
                                    </div>
                                </div>
                            </div>
                            <div style="position: relative; height:180px; overflow:visible;">
                                <canvas id="energyChart"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="pie-card-title center">Energy Allocation per MYTO Band</p>
                            <ChartPie
                                v-if="energyAllocationData"
                                chart-type="pie"
                                :chart-data="energyAllocationData"
                                :chart-options="pieOptions"
                            />
                            <p v-else class="pending-note center">No band energy data returned</p>
                        </div>
                    </div>
                </div>

                <!-- Vending & Collection (pending — vending-collection endpoint is certified,
                     but doesn't yet expose the day-level/MTD split these cards need) -->
                <div class="row">
                    <div class="col s12">
                        <div class="card-panel mini-chart-card pending-card">
                            <span class="vending-card-title">Vending &amp; Collection</span>
                            <CertificationBadge status="pending" />
                            <p class="pending-note">Day-level and MTD vending/collection breakdown pending business confirmation of reporting granularity</p>
                        </div>
                    </div>
                </div>

            </div>
            <!-- dashboard ends here -->

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import ChartPie from '~/components/ChartPie.vue'
import Chart from '~/assets/js/Chart.js'
// Live API wiring — see static/control_center_api_doc.md (§7 Control Center Dashboard,
// §6 Overview) for the certified response shape. control-center's own `cards`/`feeder_summary`
// sections don't document a public/private DT or NMD/MD customer split, so those fall back
// to /dashboard/overview's confirmed field names.
import * as controlCenterApi from '~/js_modules/controlCenterApi.js'
import { pick, formatNumber, lastNMonths, monthLabel } from '~/js_modules/controlCenterApi.js'

export default {
    components: { SideNav, AnimatedValue, ChartPie },
    data() {
        return {
            loading: true,
            error: null,
            /* top stat cards */
            online_feeders: '0',
            kv11: '—',
            kv33: '—',
            online_dts: '0',
            public_dts: '0',
            private_dts: '—',
            nmd_value: '0',
            nmd_pct: '0%',
            md_value: '0',
            md_pct: '0%',
            total_customers_display: '—',
            /* loss */
            lossPctDisplay: '—',
            /* chart data */
            energyAllocationData: null,
            pieOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false },
                plugins: {
                    labels: { render: 'label', fontColor: '#fff', fontSize: 11 }
                }
            },
            /* energy chart */
            energyChart: null,
            energyData: {
                labels: [],
                datasets: [{
                    label: 'Feeder Energy Raw',
                    data: [],
                    borderColor: '#5ebd8d',
                    backgroundColor: 'rgba(235,250,243,0.6)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 4,
                    pointBackgroundColor: '#5ebd8d',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            energyOptions: {
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
                    xAxes: [{ gridLines: { display: false }, ticks: { fontColor: '#aaa' } }],
                    yAxes: [{ gridLines: { color: 'rgba(0,0,0,0.04)' }, ticks: { display: false } }]
                }
            },
            energyTotal: '—'
        }
    },
    methods: {
        async getData() {
            this.loading = true
            this.error = null
            try {
                const [cc, overviewRes] = await Promise.all([
                    controlCenterApi.getControlCenter(),
                    controlCenterApi.getOverview().catch(() => null)
                ])
                const overview = pick(overviewRes, ['data'], {}) || {}

                this.online_feeders = formatNumber(pick(cc, ['cards.total_feeders', 'feeder_summary.total_feeders', 'total_feeders'], 0))
                const kv11Raw = pick(cc, ['cards.feeders_11kv', 'feeder_summary.feeders_11kv'], null)
                const kv33Raw = pick(cc, ['cards.feeders_33kv', 'feeder_summary.feeders_33kv'], null)
                this.kv11 = kv11Raw != null ? formatNumber(kv11Raw) : '—'
                this.kv33 = kv33Raw != null ? formatNumber(kv33Raw) : '—'

                this.online_dts = formatNumber(pick(cc, ['cards.total_dts', 'total_dts'], null) ?? pick(overview, ['total_dts'], 0))
                const publicDts = pick(cc, ['cards.public_dts', 'public_dts'], null) ?? pick(overview, ['public_dts'], 0)
                this.public_dts = formatNumber(publicDts)
                const privatePublic = Number(pick(cc, ['cards.private_public_dts', 'private_public_dts'], null) ?? pick(overview, ['private_public_dts'], 0))
                const privateSingle = Number(pick(cc, ['cards.private_single_dts', 'private_single_dts'], null) ?? pick(overview, ['private_single_dts'], 0))
                this.private_dts = (privatePublic || privateSingle) ? formatNumber(privatePublic + privateSingle) : '—'

                const totalCustomers = pick(cc, ['cards.total_customers', 'total_customers'], null) ?? pick(overview, ['total_customers'], null)
                const nmdCustomers = pick(cc, ['cards.nmd_customers', 'nmd_customers'], null) ?? pick(overview, ['nmd_customers'], null)
                const mdCustomers = pick(cc, ['cards.md_customers', 'md_customers'], null) ?? pick(overview, ['md_customers'], null)
                this.total_customers_display = totalCustomers != null ? formatNumber(totalCustomers) : '—'
                this.nmd_value = nmdCustomers != null ? formatNumber(nmdCustomers) : '0'
                this.md_value = mdCustomers != null ? formatNumber(mdCustomers) : '0'
                this.nmd_pct = (totalCustomers && nmdCustomers != null) ? `${Math.min(100, (nmdCustomers / totalCustomers) * 100)}%` : '0%'
                this.md_pct = (totalCustomers && mdCustomers != null) ? `${Math.min(100, (mdCustomers / totalCustomers) * 100)}%` : '0%'

                // Feeder-to-DT loss is API-confirmed but flagged requires_business_validation
                // (doc §3.2) — always show the CertificationBadge alongside this value.
                const lossPct = pick(cc, ['monthly_energy.feeder_to_dt_loss_pct', 'monthly_energy.summary.feeder_to_dt_loss_pct'], null)
                this.lossPctDisplay = lossPct != null ? `${lossPct}%` : '—'

                // Energy values are raw source-derived numbers (doc §3.1) — do not label as kWh/MWh/GWh.
                const latestMonth = pick(cc, ['monthly_energy.month_start', 'monthly_energy.summary.month_start'], null)
                const latestFeederEnergy = pick(cc, ['monthly_energy.total_feeder_energy_raw', 'monthly_energy.summary.total_feeder_energy_raw'], null)
                this.energyTotal = latestFeederEnergy != null ? `${formatNumber(latestFeederEnergy)} Raw` : '—'

                const bandEntries = this.normalizeBandEntries(pick(cc, ['energy_by_band', 'monthly_energy.energy_by_band'], null))
                this.energyAllocationData = bandEntries.length ? {
                    labels: bandEntries.map(e => e.band),
                    datasets: [{
                        data: bandEntries.map(e => e.value),
                        backgroundColor: bandEntries.map((_, i) => this.bandColors[i % this.bandColors.length]),
                        borderWidth: 0
                    }]
                } : null

                await this.loadEnergyTrend(latestMonth)
            } catch (err) {
                this.error = err.message
                console.error('control-center dashboard load failed', err)
            } finally {
                this.loading = false
            }
        },
        normalizeBandEntries(raw) {
            if (!raw) return []
            const entries = Array.isArray(raw) ? raw : Object.entries(raw)
            return entries.map(e => {
                if (Array.isArray(e)) return { band: String(e[0]), value: Number(e[1]) || 0 }
                const band = e.band ?? e.band_code ?? e.myto_band ?? e.name
                const value = e.dt_energy_raw ?? e.energy_raw ?? e.value ?? e.total
                return { band: String(band), value: Number(value) || 0 }
            }).filter(e => e.band && e.band !== 'undefined')
        },
        async loadEnergyTrend(latestMonth) {
            const months = lastNMonths(latestMonth, 7)
            const responses = await Promise.all(
                months.map(m => controlCenterApi.getMonthlyEnergy({ month: m }).catch(() => null))
            )
            this.energyData = {
                ...this.energyData,
                labels: months.map(monthLabel),
                datasets: [{
                    ...this.energyData.datasets[0],
                    data: responses.map(r => pick(r, ['summary.total_feeder_energy_raw', 'total_feeder_energy_raw'], null))
                }]
            }
        },
        initEnergyChart() {
            const canvas = document.getElementById('energyChart')
            if (!canvas) return
            if (this.energyChart) this.energyChart.destroy()
            this.energyChart = new Chart(canvas.getContext('2d'), {
                type: 'line',
                data: this.energyData,
                options: this.energyOptions
            })
        }
    },
    computed: {
        bandColors() {
            return ['#5b7cfa', '#6dd4c7', '#c87dff', '#ff6b6b', '#ffa94e', '#4ecdc4']
        }
    },
    async mounted() {
        await this.getData()
        this.$nextTick(() => this.initEnergyChart())
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

.pending-note {
    font-size: 12px;
    color: var(--text-muted);
    margin: 8px 0 0 0;
}

.pending-card {
    padding: 20px;
    text-align: center;
}

.loss-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
}

.loss-label {
    font-size: 11px;
    color: var(--text-muted);
}

/* ── Top Stat Cards ── */
.top-cards-row {
    margin-bottom: 0;
}

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
    border-radius: 10px;
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

.top-stat-info {
    flex: 1;
}

.top-stat-value {
    font-size: 28px;
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

.top-stat-sub-row {
    display: flex;
}

.top-stat-sub {
    flex: 1;
    text-align: center;
}

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

.border-right {
    border-right: 1px solid var(--border-color);
}

/* ── Total Customers Card ── */
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

.progress-name {
    font-size: 12px;
    color: var(--text-secondary);
}

.progress-fraction {
    font-size: 11px;
    color: var(--text-muted);
}

/* ── Energy Chart Card ── */
.mini-chart-card {
    border-radius: 14px;
    margin-bottom: 12px;
    background: var(--bg-card);
}

.energy-card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 8px;
}

.energy-card-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 2px 0;
}

.energy-card-value {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
}

.pie-card-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 10px 0;
}

/* ── Vending Section ── */
.vending-card-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    margin-right: 8px;
}

.vending-stats-grid {
    display: flex;
    gap: 20px;
    margin-top: 12px;
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
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.vstat-dot::after {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
}

.vstat-dot-green { border-color: #5ebd8d; }
.vstat-dot-green::after { background-color: #5ebd8d; }
.vstat-dot-blue { border-color: #5b7cfa; }
.vstat-dot-blue::after { background-color: #5b7cfa; }

.vstat-label { color: var(--text-secondary); flex: 1; }
.vstat-value { font-weight: 700; color: var(--text-primary); white-space: nowrap; }

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
}
</style>
