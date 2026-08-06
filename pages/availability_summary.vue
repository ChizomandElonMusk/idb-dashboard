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
                    <div class="filter-select">
                        <span class="filter-label">Feeder Band</span>
                        <i class="material-icons filter-icon">arrow_drop_down</i>
                    </div>
                    <div class="filter-select">
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
                        <ChartPie v-if="feedersAvailData" chart-type="doughnut"
                            :chart-data="feedersAvailData"
                            :chart-options="doughnutOptions"
                            :center-text="feeders_total"
                            :show-value-legend="true"
                            :legend-cols="1">
                        </ChartPie>
                    </div>
                </div>

                <!-- Total DTs -->
                <div class="col s12 m4">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">Total DTs</p>
                        <ChartPie v-if="totalDtsData" chart-type="doughnut"
                            :chart-data="totalDtsData"
                            :chart-options="doughnutOptions"
                            :center-text="total_dts"
                            :show-value-legend="true"
                            :legend-cols="1">
                        </ChartPie>
                    </div>
                </div>

                <!-- DT Availability Status grouped bar -->
                <div class="col s12 m4">
                    <div class="card-panel avail-card">
                        <p class="avail-card-title center-align">DT Availability Status</p>
                        <div style="position: relative; height: 200px;">
                            <canvas id="dtAvailChart"></canvas>
                        </div>
                        <div class="bar-legend">
                            <span class="bar-legend-item">
                                <span class="bar-legend-dot" style="background:#1a237e;"></span> Met
                            </span>
                            <span class="bar-legend-item">
                                <span class="bar-legend-dot" style="background:#c62828;"></span> Not Met
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- bottom horizontal bar charts -->
            <div class="row">
                <div class="col s12">
                    <div class="card-panel avail-card">
                        <div class="bottom-charts-grid">
                            <div class="bottom-chart-section">
                                <p class="avail-card-title center-align">Feeders By Business Unit</p>
                                <div style="position: relative; height: 260px;">
                                    <canvas id="feedersByBuChart"></canvas>
                                </div>
                            </div>
                            <div class="bottom-chart-divider"></div>
                            <div class="bottom-chart-section">
                                <p class="avail-card-title center-align">DTs By Business Units</p>
                                <div style="position: relative; height: 260px;">
                                    <canvas id="dtsByBuChart"></canvas>
                                </div>
                            </div>
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
                    // horizontal bar: text to the right of bar end
                    if (chart.config.type === 'horizontalBar') {
                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(value.toLocaleString(), model.x + 5, model.y);
                    } else {
                        // vertical bar: text above bar
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
            feeders_total: '392',
            total_dts: '5,390',
            feedersAvailData: null,
            totalDtsData: null,
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
            this.feedersAvailData = {
                labels: ['Met', 'Not Met'],
                datasets: [{ data: [256, 136], backgroundColor: ['#1a237e', '#c62828'] }]
            };
            this.totalDtsData = {
                labels: ['Public DTs', 'Private DTs'],
                datasets: [{ data: [5113, 188], backgroundColor: ['#7986cb', '#80cbc4'] }]
            };
        },
        initCharts() {
            // DT Availability Status — grouped vertical bar
            this.barCharts.push(new Chart(document.getElementById('dtAvailChart').getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Private DTs', 'Public DTs'],
                    datasets: [
                        { label: 'Met',     data: [150, 2639], backgroundColor: '#1a237e' },
                        { label: 'Not Met', data: [38, 2494],  backgroundColor: '#c62828' }
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
            }));

            // Feeders By Business Unit — horizontal bar
            this.barCharts.push(new Chart(document.getElementById('feedersByBuChart').getContext('2d'), {
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
                        xAxes: [{ display: false, ticks: { beginAtZero: true } }],
                        yAxes: [{ gridLines: { display: false } }]
                    }
                },
                plugins: [valueLabelPlugin]
            }));

            // DTs By Business Units — horizontal bar
            this.barCharts.push(new Chart(document.getElementById('dtsByBuChart').getContext('2d'), {
                type: 'horizontalBar',
                data: {
                    labels: ['Oshodi', 'Shomolu', 'Ikeja', 'Akowonjo', 'Ikorodu', 'Abule Egba'],
                    datasets: [{
                        data: [83, 82, 74, 71, 60, 41],
                        backgroundColor: '#8b1a1a'
                    }]
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
            }));
        }
    },
    mounted() {
        this.getData();
        this.$nextTick(() => { this.initCharts(); });
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

.filter-input,
.filter-select {
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

/* DT availability bar legend */
.bar-legend {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 8px;
}

.bar-legend-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: var(--text-secondary);
}

.bar-legend-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
}

/* bottom charts */
.bottom-charts-grid {
    display: flex;
    gap: 0;
}

.bottom-chart-section {
    flex: 1;
    padding: 0 16px;
}

.bottom-chart-divider {
    width: 1px;
    background: var(--border-color);
    margin: 0 8px;
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
    .bottom-charts-grid {
        flex-direction: column;
    }
    .bottom-chart-divider {
        width: 100%;
        height: 1px;
        margin: 16px 0;
    }
}
</style>
