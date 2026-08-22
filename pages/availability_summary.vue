<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">

            <!-- header -->
            <div class="avail-header">
                <h5 class="avail-title">Availability Summary</h5>
                <div class="avail-filters">
                    <div class="filter-input">
                        <span class="filter-label">Date</span>
                        <i class="material-icons filter-icon">calendar_today</i>
                    </div>
                </div>
            </div>

            <div v-if="loading" class="state-panel">
                <PreLoader />
            </div>
            <div v-else-if="error" class="state-panel">
                <p class="state-message">Could not load availability summary: {{ error }}</p>
                <button class="btn-flat retry-btn" @click="getData">Retry</button>
            </div>

            <template v-else>

            <!-- top 3 cards -->
            <div class="row">
                <!-- Feeders Availability Status -->
                <div class="col s12 m4">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">Feeders Meeting 20h+ ({{ feeder_date }})</p>
                        <ChartPie v-if="feedersAvailData" chart-type="doughnut"
                            :chart-data="feedersAvailData"
                            :chart-options="doughnutOptions"
                            :center-text="feeders_total"
                            :show-value-legend="true"
                            :legend-cols="1">
                        </ChartPie>
                    </div>
                </div>

                <!-- DTs Availability Status -->
                <div class="col s12 m4">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">DTs Meeting 20h+ ({{ dt_date }})</p>
                        <ChartPie v-if="dtsAvailData" chart-type="doughnut"
                            :chart-data="dtsAvailData"
                            :chart-options="doughnutOptions"
                            :center-text="total_dts"
                            :show-value-legend="true"
                            :legend-cols="1">
                        </ChartPie>
                    </div>
                </div>

                <!-- DT Availability Bands -->
                <div class="col s12 m4">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">DT Availability Bands</p>
                        <div style="position: relative; height: 200px;">
                            <canvas id="dtAvailChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <!-- bottom section: no business-unit / geographic breakdown available yet -->
            <div class="row">
                <div class="col s12">
                    <div class="card-panel avail-card pending-card">
                        <p class="avail-card-title center-align">Feeders &amp; DTs By Business Unit</p>
                        <CertificationBadge status="pending" />
                        <p class="pending-note">Business unit / geographic breakdown not provided by the current endpoints</p>
                    </div>
                </div>
            </div>

            </template>

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
import ChartPie from '~/components/ChartPie.vue'
import Chart from '~/assets/js/Chart.js'
// Live API wiring — see static/control_center_api_doc.md §8 (Availability Summary).
import * as controlCenterApi from '~/js_modules/controlCenterApi.js'
import { pick, formatNumber } from '~/js_modules/controlCenterApi.js'

const valueLabelPlugin = {
    afterDatasetsDraw(chart) {
        const ctx = chart.ctx;
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach((bar, index) => {
                    const value = dataset.data[index];
                    const model = bar._model;
                    ctx.save();
                    ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#ececf2' : '#333';
                    ctx.font = 'bold 11px sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    ctx.fillText(value.toLocaleString(), model.x, model.y - 3);
                    ctx.restore();
                });
            }
        });
    }
};

export default {
    components: { SideNav, ChartPie },
    data() {
        return {
            loading: true,
            error: null,
            feeders_total: '0',
            total_dts: '0',
            feeder_date: '—',
            dt_date: '—',
            feedersAvailData: null,
            dtsAvailData: null,
            dtBands: null,
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 70,
                legend: { display: false }
            },
            barCharts: [],
        }
    },
    watch: {
        '$theme.value'() {
            this.barCharts.forEach(chart => chart && chart.update());
        }
    },
    methods: {
        async getData() {
            this.loading = true
            this.error = null
            try {
                const summaryRes = await controlCenterApi.getAvailabilitySummary()
                // /dashboard/availability-summary wraps its fields in a `data` envelope
                const summary = pick(summaryRes, ['data'], summaryRes)

                const totalFeederMeters = Number(pick(summary, ['total_feeder_meters'], 0))
                const feederMet20 = Number(pick(summary, ['feeder_met_20_hours'], 0))
                this.feeders_total = formatNumber(totalFeederMeters)
                this.feeder_date = pick(summary, ['feeder_availability_date'], '—')
                this.feedersAvailData = {
                    labels: ['Met 20h+', 'Not Met'],
                    datasets: [{ data: [feederMet20, Math.max(totalFeederMeters - feederMet20, 0)], backgroundColor: ['#1a237e', '#c62828'] }]
                }

                const totalDtMeters = Number(pick(summary, ['total_dt_meters'], 0))
                const dtMet20 = Number(pick(summary, ['dt_met_20_hours'], 0))
                this.total_dts = formatNumber(totalDtMeters)
                this.dt_date = pick(summary, ['dt_availability_date'], '—')
                this.dtsAvailData = {
                    labels: ['Met 20h+', 'Not Met'],
                    datasets: [{ data: [dtMet20, Math.max(totalDtMeters - dtMet20, 0)], backgroundColor: ['#7986cb', '#80cbc4'] }]
                }

                const dtZero = Number(pick(summary, ['dt_zero_hours'], 0))
                const dtBelow12 = Number(pick(summary, ['dt_below_12_hours'], 0))
                const dt12to20 = Number(pick(summary, ['dt_12_to_20_hours'], 0))
                const dtFull24 = Number(pick(summary, ['dt_full_24_hours'], 0))
                const dt20to24 = Math.max(dtMet20 - dtFull24, 0)
                this.dtBands = { labels: ['0h', '0-12h', '12-20h', '20-24h', '24h'], data: [dtZero, dtBelow12, dt12to20, dt20to24, dtFull24] }

                this.$nextTick(() => this.initCharts())
            } catch (err) {
                this.error = err.message
                console.error('availability summary load failed', err)
            } finally {
                this.loading = false
            }
        },
        initCharts() {
            this.barCharts.forEach(chart => chart && chart.destroy())
            this.barCharts = []

            const canvas = document.getElementById('dtAvailChart')
            if (!canvas || !this.dtBands) return

            this.barCharts.push(new Chart(canvas.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: this.dtBands.labels,
                    datasets: [{ data: this.dtBands.data, backgroundColor: ['#c62828', '#e8941a', '#f5a623', '#7986cb', '#1a237e'] }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: { display: false },
                    scales: {
                        xAxes: [{ gridLines: { display: false } }],
                        yAxes: [{ gridLines: { display: false }, ticks: { beginAtZero: true } }]
                    }
                },
                plugins: [valueLabelPlugin]
            }))
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

/* header */
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

.avail-filters {
    display: flex;
    gap: 12px;
}

.filter-input {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 6px 14px;
    cursor: pointer;
    min-width: 130px;
}

.filter-label {
    font-size: 13px;
    color: var(--text-secondary);
    flex: 1;
}

.filter-icon {
    font-size: 18px;
    color: var(--text-muted);
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

/* cards */
.avail-card {
    border-radius: 14px;
    background: var(--bg-card);
    box-shadow: 0 2px 8px var(--shadow-color);
    padding: 20px;
    margin-bottom: 16px;
}

.avail-card-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 12px;
}

@media only screen and (max-width: 992px) {
    .main-content {
        padding-left: 20px;
    }
    .avail-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}
</style>
