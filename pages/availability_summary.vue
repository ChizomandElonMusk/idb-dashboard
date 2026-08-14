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
                        <p class="avail-card-title center-align">Feeder Availability Status</p>
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
                        <p class="avail-card-title center-align">DT Availability Status</p>
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

            <!-- bottom section: business-unit / geographic breakdown -->
            <div class="row">
                <div class="col s12 m6">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">Feeders By Business Unit</p>
                        <div style="position: relative; height: 220px;">
                            <canvas id="feedersByBuChart"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">DTs By Business Unit</p>
                        <div style="position: relative; height: 220px;">
                            <canvas id="dtsByBuChart"></canvas>
                        </div>
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
// Live API wiring (js_modules/controlCenterApi.js) stays in the codebase but is not
// called right now — this page is intentionally running on demo data. To go live again,
// restore the async getData() that calls controlCenterApi.getAvailabilitySummary().
// import * as controlCenterApi from '~/js_modules/controlCenterApi.js'
// import { pick, formatNumber } from '~/js_modules/controlCenterApi.js'

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
                    if (chart.config.type === 'horizontalBar') {
                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(value.toLocaleString(), model.x + 5, model.y);
                    } else {
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillText(value.toLocaleString(), model.x, model.y - 3);
                    }
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
        getData() {
            // DEMO MODE — hardcoded values for today's demo, no network calls.
            this.loading = true
            this.error = null

            this.feeders_total = '392'
            this.feeder_date = 'Aug 09'
            this.feedersAvailData = {
                labels: ['Met 20h+', 'Not Met'],
                datasets: [{ data: [256, 136], backgroundColor: ['#1a237e', '#c62828'] }]
            }

            this.total_dts = '5,390'
            this.dt_date = 'Aug 09'
            this.dtsAvailData = {
                labels: ['Met 20h+', 'Not Met'],
                datasets: [{ data: [3200, 2190], backgroundColor: ['#7986cb', '#80cbc4'] }]
            }

            this.dtBands = { labels: ['0h', '0-12h', '12-20h', '20-24h', '24h'], data: [40, 1200, 1300, 400, 700] }

            this.loading = false
            this.$nextTick(() => this.initCharts())
        },
        initCharts() {
            this.barCharts.forEach(chart => chart && chart.destroy())
            this.barCharts = []

            const dtCanvas = document.getElementById('dtAvailChart')
            if (dtCanvas && this.dtBands) {
                this.barCharts.push(new Chart(dtCanvas.getContext('2d'), {
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

            const feedersByBuCanvas = document.getElementById('feedersByBuChart')
            if (feedersByBuCanvas) {
                this.barCharts.push(new Chart(feedersByBuCanvas.getContext('2d'), {
                    type: 'horizontalBar',
                    data: {
                        labels: ['Ikeja', 'Akowonjo', 'Oshodi', 'Ikorodu', 'Shomolu', 'Abule Egba'],
                        datasets: [{ data: [3719, 3446, 2870, 2724, 2447, 1844], backgroundColor: '#f5a623' }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: { display: false },
                        scales: {
                            xAxes: [{ display: false, ticks: { beginAtZero: true } }],
                            yAxes: [{ gridLines: { display: false } }]
                        }
                    },
                    plugins: [valueLabelPlugin]
                }))
            }

            const dtsByBuCanvas = document.getElementById('dtsByBuChart')
            if (dtsByBuCanvas) {
                this.barCharts.push(new Chart(dtsByBuCanvas.getContext('2d'), {
                    type: 'horizontalBar',
                    data: {
                        labels: ['Oshodi', 'Shomolu', 'Ikeja', 'Akowonjo', 'Ikorodu', 'Abule Egba'],
                        datasets: [{ data: [83, 82, 74, 71, 60, 41], backgroundColor: '#8b1a1a' }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: { display: false },
                        scales: {
                            xAxes: [{ display: false, ticks: { beginAtZero: true } }],
                            yAxes: [{ gridLines: { display: false } }]
                        }
                    },
                    plugins: [valueLabelPlugin]
                }))
            }
        }
    },
    mounted() {
        this.getData()
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
