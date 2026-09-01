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
                    <div class="filter-input">
                        <span class="filter-label">Feeder Band</span>
                        <i class="material-icons filter-icon">arrow_drop_down</i>
                    </div>
                    <div class="filter-input">
                        <span class="filter-label">Business Unit</span>
                        <i class="material-icons filter-icon">arrow_drop_down</i>
                    </div>
                </div>
            </div>

            <!-- top 3 cards -->
            <div class="row">
                <!-- Feeders Availability Status -->
                <div class="col s12 m4">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">Feeders Availability Status</p>
                        <ChartPie chart-type="doughnut"
                            :chart-data="feedersAvailData"
                            :chart-options="doughnutOptions"
                            center-text="392"
                            :show-value-legend="true"
                            :legend-cols="1">
                        </ChartPie>
                    </div>
                </div>

                <!-- Total DTs -->
                <div class="col s12 m4">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">Total DTs</p>
                        <ChartPie chart-type="doughnut"
                            :chart-data="totalDtsData"
                            :chart-options="doughnutOptions"
                            center-text="5,390"
                            :show-value-legend="true"
                            :legend-cols="1">
                        </ChartPie>
                    </div>
                </div>

                <!-- DT Availability Status -->
                <div class="col s12 m4">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">DT Availability Status</p>
                        <div class="dt-status-row">
                            <div class="dt-status-chart">
                                <canvas id="dtAvailChart"></canvas>
                            </div>
                            <div class="dt-status-legend">
                                <span class="dt-status-legend-item"><span class="legend-dot" style="background:#1a2b5c;"></span> Met</span>
                                <span class="dt-status-legend-item"><span class="legend-dot" style="background:#c0392b;"></span> Not Met</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- horizontal bar charts -->
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
                        <p class="avail-card-title center-align">DTs By Business Units</p>
                        <div style="position: relative; height: 220px;">
                            <canvas id="dtsByBuChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
import ChartPie from '~/components/ChartPie.vue'
import Chart from '~/assets/js/Chart.js'
// UI-first rebuild to match the Figma "Availability Summary" screen exactly. Data below is
// static mock content taken from the Figma mockup — real API wiring will be reintroduced once
// the backend team ships the matching endpoint shape.

const valueLabelPlugin = {
    afterDatasetsDraw(chart) {
        const ctx = chart.ctx
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i)
            if (meta.hidden) return
            meta.data.forEach((bar, index) => {
                const value = dataset.data[index]
                const model = bar._model
                ctx.save()
                ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#ececf2' : '#333'
                ctx.font = 'bold 11px sans-serif'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'bottom'
                ctx.fillText(value.toLocaleString(), model.x, model.y - 3)
                ctx.restore()
            })
        })
    }
}

const horizontalValueLabelPlugin = {
    afterDatasetsDraw(chart) {
        const ctx = chart.ctx
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i)
            if (meta.hidden) return
            meta.data.forEach((bar, index) => {
                const value = dataset.data[index]
                const model = bar._model
                ctx.save()
                ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#ececf2' : '#333'
                ctx.font = 'bold 11px sans-serif'
                ctx.textAlign = 'left'
                ctx.textBaseline = 'middle'
                ctx.fillText(value.toLocaleString(), model.x + 8, model.y)
                ctx.restore()
            })
        })
    }
}

export default {
    components: { SideNav, ChartPie },
    data() {
        return {
            feedersAvailData: {
                labels: ['Met', 'Not Met'],
                datasets: [{ data: [256, 136], backgroundColor: ['#1a2b5c', '#c0392b'] }]
            },
            totalDtsData: {
                labels: ['Public DTs', 'Private DTs'],
                datasets: [{ data: [5113, 188], backgroundColor: ['#7b8cf0', '#8de8c5'] }]
            },
            doughnutOptions: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 70,
                legend: { display: false }
            },
            barCharts: []
        }
    },
    methods: {
        initCharts() {
            this.barCharts.forEach(chart => chart && chart.destroy())
            this.barCharts = []

            const statusCanvas = document.getElementById('dtAvailChart')
            if (statusCanvas) {
                this.barCharts.push(new Chart(statusCanvas.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: ['Private DTs', 'Public DTs'],
                        datasets: [
                            { label: 'Met', data: [150, 2639], backgroundColor: '#1a2b5c' },
                            { label: 'Not Met', data: [38, 2494], backgroundColor: '#c0392b' }
                        ]
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
                        datasets: [{
                            data: [3719, 3446, 2870, 2724, 2447, 1844],
                            backgroundColor: '#f5a623'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: { display: false },
                        scales: {
                            xAxes: [{ gridLines: { display: false }, ticks: { display: false, suggestedMax: 4300 } }],
                            yAxes: [{ gridLines: { display: false } }]
                        }
                    },
                    plugins: [horizontalValueLabelPlugin]
                }))
            }

            const dtsByBuCanvas = document.getElementById('dtsByBuChart')
            if (dtsByBuCanvas) {
                this.barCharts.push(new Chart(dtsByBuCanvas.getContext('2d'), {
                    type: 'horizontalBar',
                    data: {
                        labels: ['Oshodi', 'Shomolu', 'Ikeja', 'Akowonjo', 'Ikorodu', 'Abule Egba'],
                        datasets: [{
                            data: [83, 82, 74, 71, 60, 41],
                            backgroundColor: '#a13a3a'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: { display: false },
                        scales: {
                            xAxes: [{ gridLines: { display: false }, ticks: { display: false, suggestedMax: 95 } }],
                            yAxes: [{ gridLines: { display: false } }]
                        }
                    },
                    plugins: [horizontalValueLabelPlugin]
                }))
            }
        }
    },
    mounted() {
        this.$nextTick(() => this.initCharts())
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

.dt-status-row {
    display: flex;
    align-items: center;
    gap: 12px;
}

.dt-status-chart {
    position: relative;
    height: 200px;
    flex: 1;
}

.dt-status-legend {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-shrink: 0;
}

.dt-status-legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-secondary);
}

.legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
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
