<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="row header-row">
                <div class="col s12">
                    <h5 class="light">Control Center Dashboard</h5>
                </div>
            </div>



            <!-- this is the dashboard section -->

            <div class="row" id="dashboard">
                <div class="row">
                    <div class="col s12 m2">
                        <div class="card-panel dt-summary-card mini-chart-card" style="padding-bottom: 0px">
                            <div class="row center-align">
                                <div class="col s12">


                                    <div class="row">
                                        <div class="icon-circle red darken-2 col s4" style="margin: 0 auto;">
                                            <i class="material-icons white-text">router</i>
                                        </div>
                                        <div class="col s8">
                                            <AnimatedValue :value="total_dts" style="font-size: 30px;" />
                                            <p class="grey-text">Total DTs</p>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col s12">
                                            <div class="divider"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s6 border-right">
                                    <h5>
                                        <AnimatedValue :value="public_dts" />
                                    </h5>
                                    <p class="grey-text">Public</p>
                                </div>
                                <div class="col s6">
                                    <h5>
                                        <AnimatedValue :value="private_dts" />
                                    </h5>
                                    <p class="grey-text">Private</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="col s12 m2">
                        <div class="card-panel dt-summary-card mini-chart-card" style="padding-bottom: 0px">
                            <div class="row center-align">
                                <div class="col s12">


                                    <div class="row">
                                        <div class="icon-circle red darken-2 col s4" style="margin: 0 auto;">
                                            <i class="material-icons white-text">router</i>
                                        </div>
                                        <div class="col s8">
                                            <AnimatedValue :value="total_dts" style="font-size: 30px;" />
                                            <p class="grey-text">Total DTs</p>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col s12">
                                            <div class="divider"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s6 border-right">
                                    <h5>
                                        <AnimatedValue :value="public_dts" />
                                    </h5>
                                    <p class="grey-text">Public</p>
                                </div>
                                <div class="col s6">
                                    <h5>
                                        <AnimatedValue :value="private_dts" />
                                    </h5>
                                    <p class="grey-text">Private</p>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div class="col s12 m2">
                        <div class="card-panel dt-summary-card mini-chart-card" style="padding-bottom: 0px">
                            <div class="row center-align">
                                <div class="col s12">


                                    <div class="row">
                                        <div class="icon-circle red darken-2 col s4" style="margin: 0 auto;">
                                            <i class="material-icons white-text">router</i>
                                        </div>
                                        <div class="col s8">
                                            <AnimatedValue :value="total_dts" style="font-size: 30px;" />
                                            <p class="grey-text">Total DTs</p>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col s12">
                                            <div class="divider"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s6 border-right">
                                    <h5>
                                        <AnimatedValue :value="public_dts" />
                                    </h5>
                                    <p class="grey-text">Public</p>
                                </div>
                                <div class="col s6">
                                    <h5>
                                        <AnimatedValue :value="private_dts" />
                                    </h5>
                                    <p class="grey-text">Private</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col s6">
                        <div class="card-panel mini-chart-card" style="padding-bottom: 14px;">
                            <p class="grey-text text-darken-2 center">Total Customers</p>
                            <p class="tiny-text black-text">
                                Metered NMD
                                <span class="right">
                                    <AnimatedValue :value="billing_eff" />
                                </span>
                            </p>
                            <div class="progress indigo lighten-4">
                                <div class="determinate indigo accent-2" :style="{ width: billing_eff }"></div>
                            </div>

                            <p class="tiny-text black-text">
                                Metered MD
                                <span class="right">
                                    <AnimatedValue :value="billing_eff" />
                                </span>
                            </p>
                            <div class="progress green lighten-4">
                                <div class="determinate green" :style="{ width: billing_eff }"></div>
                            </div>

                        </div>
                    </div>



                </div>



                <!-- energy graph -->
                <div class="row">
                    <div class="col s9">
                        <div class="right" style="margin-top:10px;">
                            <button class="btn-flat btn-small">Day</button>
                            <button class="btn-flat btn-small">Week</button>
                            <button class="btn-flat btn-small">Month</button>
                        </div>
                        <div class="card-panel mini-chart-card" style="padding-bottom: 20px;">
                            <p class="grey-text text-darken-2 left-align">Energy</p>
                            <p class="left" style="margin:0 0 10px;">{{ energyTotal }}</p>
                            <div style="position: relative; height:160px; padding-bottom:20px; overflow:visible;">
                                <canvas id="energyChart"></canvas>
                            </div>

                        </div>
                    </div>

                    <div class="col s3">
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2 center">Energy Allocation per Feeder Band</p>
                            <ChartPie v-if="energyAllocationData" chart-type="pie" :chart-data="energyAllocationData"
                                :chart-options="pieOptions">
                                <AnimatedValue :value="energy_allocation" />
                            </ChartPie>
                        </div>
                    </div>
                </div>
                <!-- end of energy graph -->



                <!-- vending allocation -->
                <div class="row">
                    <div class="col s9">
                        <div class="card-panel mini-chart-card" style="padding-bottom: 20px;">
                            <div class="vending-card-header">
                                <span class="vending-card-title">Vending &amp; Collection</span>
                                <div class="vending-period-btns">
                                    <button class="btn-flat btn-small period-btn">Day</button>
                                    <button class="btn-flat btn-small period-btn">Week</button>
                                    <button class="btn-flat btn-small period-btn period-btn-active">Month</button>
                                    <button class="btn-flat btn-small period-btn period-btn-icon">
                                        <i class="material-icons tiny">calendar_today</i>
                                    </button>
                                </div>
                            </div>
                            <div style="position: relative; height:160px; padding-bottom:20px; overflow:visible;">
                                <canvas id="vendingChart"></canvas>
                            </div>
                            <hr style="margin-top: 40px;">
                            <div class="vending-stats-grid">
                                <div class="vending-stats-col">
                                    <div class="vending-stat-row">
                                        <span class="vstat-dot vstat-dot-green"></span>
                                        <span class="vstat-label">Total customer Vended Today</span>
                                        <span class="vstat-value">{{ total_customer_vended_today }}</span>
                                    </div>
                                    <div class="vending-stat-row">
                                        <span class="vstat-dot vstat-dot-green"></span>
                                        <span class="vstat-label">Amount Vended Today</span>
                                        <span class="vstat-value">{{ amount_vended_today }}</span>
                                    </div>
                                    <div class="vending-stat-row">
                                        <span class="vstat-dot vstat-dot-green"></span>
                                        <span class="vstat-label">Amount Vended MTD</span>
                                        <span class="vstat-value">{{ amount_vended_mtd }}</span>
                                    </div>
                                </div>
                                <div class="vending-stats-col">
                                    <div class="vending-stat-row">
                                        <span class="vstat-dot vstat-dot-blue"></span>
                                        <span class="vstat-label">Total Collection Today</span>
                                        <span class="vstat-value">{{ total_collection_today }}</span>
                                    </div>
                                    <div class="vending-stat-row">
                                        <span class="vstat-dot vstat-dot-blue"></span>
                                        <span class="vstat-label">Amount Collected MTD</span>
                                        <span class="vstat-value">{{ amount_collected_mtd }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col s3">
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2 center">Total Feeder</p>
                            <ChartPie v-if="vendingAllocationData" chart-type="doughnut"
                                :chart-data="vendingAllocationData"
                                :chart-options="vendingPieOptions"
                                :center-text="vending_allocation"
                                :show-value-legend="true">
                            </ChartPie>
                        </div>
                    </div>
                </div>
                <!-- end of vending allocation -->








                
            </div>
            <!-- dashboard ends here -->


        </main>
    </div>
</template>

<script>

import SideNav from '~/components/SideNav/SideNav.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import ChartPie from '~/components/ChartPie.vue'
import MeterCommunication from '~/components/MeterCommunication.vue';
import Chart from '~/assets/js/Chart.js';
export default {
    components: {
        SideNav,
        AnimatedValue,
        ChartPie,
        MeterCommunication,
    },
    data() {
        return {
            feeder_to_dt_loss_data: [
                { feeder: '11 - IgbobilNJ-T1 - Apata', date: '2024-01-01', band: 'A', total_public_dts: 10, public_dts: 8, total_private_dts: 5, private_dts_energy: '50 MWh' },
                { feeder: '11 - IgbobilNJ-T1 - Apata', date: '2024-01-02', band: 'B', total_public_dts: 15, public_dts: 12, total_private_dts: 7, private_dts_energy: '70 MWh' },
                { feeder: '11 - IgbobilNJ-T1 - Apata', date: '2024-01-03', band: 'C', total_public_dts: 20, public_dts: 18, total_private_dts: 10, private_dts_energy: '100 MWh' },
            ],
            customer_loss_pct_data: [
                { feeder: '11 - IgbobilNJ-T1 - Apata', all_customers: 1000, post_md: 800, comms_pct: '80%', total_meters_communicating: 900, prepaid_md: 700, idb_prepay: 50 },
                { feeder: '11 - IgbobilNJ-T1 - Apata', all_customers: 1500, post_md: 1200, comms_pct: '80%', total_meters_communicating: 1400, prepaid_md: 1100, idb_prepay: 70 },
                { feeder: '11 - IgbobilNJ-T1 - Apata', all_customers: 2000, post_md: 1800, comms_pct: '90%', total_meters_communicating: 1900, prepaid_md: 1700, idb_prepay: 100 },
            ],
            meterValue: 100,
            energy_total: '0',
            total_feeders: '0',
            total_flagged: '0',
            feeder_loss: '0',
            feeder_loss_pct: '0%',
            billing_eff: '0%',
            md_energy: '0%',
            nmd_energy: '0%',
            customer_loss: '0',
            customer_loss_pct: '0%',
            atc_c: '0%',
            total_dts: '0',
            public_dts: '0',
            private_dts: '0',
            total_customers: '0',
            energy_allocation: '0',
            vending_allocation: '0',
            total_customer_vended_today: '0',
            amount_vended_today: '0',
            amount_vended_mtd: '0',
            total_collection_today: '0',
            amount_collected_mtd: '0',
            doughnutData: null,
            energyAllocationData: null,
            pieOptions: { responsive: true, maintainAspectRatio: false },
            vendingPieOptions: { responsive: true, maintainAspectRatio: false, legend: { display: false } },
            /* energy chart config */
            vendingChart: null,
            vendingData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Vending',
                        data: [350, 250, 180, 320, 480, 400, 220, 150, 260, 380, 420, 380],
                        borderColor: '#5ebd8d',
                        backgroundColor: 'rgba(94,189,141,0.1)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: '#5ebd8d'
                    },
                    {
                        label: 'Collection',
                        data: [200, 150, 200, 380, 280, 180, 150, 200, 320, 280, 350, 390],
                        borderColor: '#5b7cfa',
                        backgroundColor: 'rgba(91,124,250,0.08)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: '#5b7cfa'
                    }
                ]
            },
            /* options formatted for Chart.js v2.x */
            vendingOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: true },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItems/*, data*/) {
                            return tooltipItems.yLabel + ' MWh';
                        }
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: { display: false },
                        ticks: { fontColor: '#888' }
                    }],
                    yAxes: [{
                        gridLines: { display: false },
                        ticks: { beginAtZero: true }
                    }]
                }
            },
            vendingTotal: '350.00MWh',
            energyChart: null,
            energyData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Energy (MWh)',
                    data: [30, 25, 43, 38, 28, 32, 36],
                    borderColor: '#5ebd8d',
                    backgroundColor: '#f9faff',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 4,
                    pointBackgroundColor: '#5ebd8d'
                }]
            },
            
            /* options formatted for Chart.js v2.x */
            energyOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: false },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItems/*, data*/) {
                            return tooltipItems.yLabel + ' MWh';
                        }
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: { display: false },
                        ticks: { fontColor: '#888' }
                    }],
                    yAxes: [{
                        gridLines: { display: false },
                        ticks: { beginAtZero: true }
                    }]
                }
            },
            energyTotal: '350.00MWh'
        }
    },

    methods: {
        getData() {
            // Fetch data from API and update values
            // Example stubbed data below
            const data = {
                energy_total: '2,345.78',
                total_feeders: '2',
                total_flagged: '32',
                feeder_loss: '151.22 MWh',
                feeder_loss_pct: '7.87%',
                billing_eff: '85.75%',
                md_energy: '85.75%',
                nmd_energy: '35.75%',
                customer_loss: '116.91 MWh',
                customer_loss_pct: '7.87%',
                atc_c: '7.87%',
                total_dts: '61',
                public_dts: '31',
                private_dts: '30',
                total_customer_vended_today: '30,400,000',
                amount_vended_today: '30,400,000',
                amount_vended_mtd: '2,000,000,000',
                total_collection_today: '50,000,000',
                amount_collected_mtd: '7,000,000,000'
            };
            Object.assign(this, data);
            // set customer doughnut chart values
            this.total_customers = '12,450';
            const doughnutSegments = [
                { value: 45, color: '#5f82ef', name: 'NMD Customer' },
                { value: 30, color: '#93f1ba', name: '' },
            ];
            this.doughnutData = {
                // labels: doughnutSegments.map((_, i) => `${i} ${i + 1}`),
                labels: doughnutSegments.map(s => s.name),
                datasets: [{
                    data: doughnutSegments.map(s => s.value),
                    backgroundColor: doughnutSegments.map(s => s.color)
                }]
            };
            // set energy_allocation pie chart values
            this.energy_allocation = '45,200';
            const energy_allocationSegments = [
                { value: 40, color: '#5b7cfa', name: 'A' },
                { value: 25, color: '#6dd4c7', name: 'B' },
                { value: 15, color: '#c87dff', name: 'C' },
                { value: 15, color: '#ff6b6b', name: 'D' },
                { value: 5, color: '#ffa94e', name: 'E' },
            ];
            this.energyAllocationData = {
                labels: energy_allocationSegments.map(s => s.name),
                datasets: [{
                    data: energy_allocationSegments.map(s => s.value),
                    backgroundColor: energy_allocationSegments.map(s => s.color)
                }]
            };


            // set vending pie chart values
            const vending_allocationSegments = [
                { value: 188, color: '#5b7cfa', name: 'Band A' },
                { value: 78, color: '#6dd4c7', name: 'Band B' },
                { value: 132, color: '#c87dff', name: 'Band C' },
                { value: 18, color: '#ff6b6b', name: 'Band D' },
                { value: 5, color: '#ffa94e', name: 'Band E' },
            ];
            this.vending_allocation = String(vending_allocationSegments.reduce((sum, s) => sum + s.value, 0));
            this.vendingAllocationData = {
                labels: vending_allocationSegments.map(s => s.name),
                datasets: [{
                    data: vending_allocationSegments.map(s => s.value),
                    backgroundColor: vending_allocationSegments.map(s => s.color)
                }]
            };
        }
        // signIn() {
        //     M.toast({ html: '<b class=\"yellow-text\">Please wait...</b>' })
        //     this.$router.push('./dashboard')
        // }
    },
    mounted() {
        this.getData(); // Fetch data when component is mounted
        // initialize energy chart after DOM
        const ctx = document.getElementById('energyChart').getContext('2d');
        this.energyChart = new Chart(ctx, {
            type: 'line',
            data: this.energyData,
            options: this.energyOptions
        });

        const ctx2 = document.getElementById('vendingChart').getContext('2d');
        this.vendingChart = new Chart(ctx2, {
            type: 'line',
            data: this.vendingData,
            options: this.vendingOptions
        });

        // var instance = M.Tabs.init(el, options);
        // Initialize Materialize tabs
        var el = document.querySelector('.tabs');
        var instance = M.Tabs.init(el, {});
    }
}
</script>

<style scoped>
.dashboard-wrapper {
    background-color: #f8f9fd;
    min-height: 100vh;
}

.sidenav {
    width: 260px;
    border-right: 1px solid #eee;
}

.main-content {
    padding-left: 280px;
    padding-right: 20px;
    padding-top: 20px;
}

.stats-card {
    border-radius: 12px;
    position: relative;
}

.icon-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}

.stats-text .value {
    font-size: 24px;
    font-weight: bold;
    display: inline-block;
    /* so transform works */
}

/* animation class applied while counting */
.counting {
    animation: pop 1s ease-out;
}

@keyframes pop {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.4);
    }

    100% {
        transform: scale(1);
    }
}

.stats-text p {
    margin: 0;
    font-size: 12px;
}

.badge {
    position: absolute;
    top: 15px;
    right: 15px;
    border-radius: 4px !important;
}

.mini-chart-card {
    border-radius: 12px;
    margin-bottom: 10px;
    box-sizing: unset;
}

/* keep certain cards the same height */
.equal-height {
    min-height: 260px; /* adjust as needed */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.tiny-text {
    font-size: 11px;
    margin-bottom: 5px;
}

.border-right {
    border-right: 1px solid #eee;
}

/* simple circle indicator used in MD Energy section */
.circle {
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
}

.circle.orange {
    background-color: orange;
}

.circle.green {
    background-color: green;
}

.tabs {
    background: transparent;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
}

.tabs .tab a {
    color: #888;
    text-transform: none;
}

.tabs .tab a.active {
    border-bottom: 2px solid #e91e63;
}


/* For thead with orange background */
table.rounded-header thead.orange {
    border-radius: 20px;
    overflow: hidden;
    display: table-header-group;
    /* Keep table behavior but allow radius */
}

table.rounded-header2 thead.red-accent-4 {
    border-radius: 20px;
    overflow: hidden;
    display: table-header-group;
    /* Keep table behavior but allow radius */
}

/* If the above doesn't work, wrap thead in a div */
table.rounded-header {
    border-collapse: separate;
    /* Required for border-radius to work */
    border-spacing: 0;
}

table.rounded-header2 {
    border-collapse: separate;
    /* Required for border-radius to work */
    border-spacing: 0;
}

table.rounded-header thead.orange th {
    background-color: orange;
    color: white;
    padding: 10px 15px;
}

table.rounded-header2 thead.red-accent-4 th {
    background-color: #d50000;
    color: white;
    padding: 10px 15px;
}

/* Round all th corners */
table.rounded-header thead.orange th:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

table.rounded-header2 thead.red-accent-4 th:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

table.rounded-header thead.orange th:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

table.rounded-header2 thead.red-accent-4 th:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

/* This makes the middle th have no radius */
table.rounded-header thead.orange th:not(:first-child):not(:last-child) {
    border-radius: 0;
}

table.rounded-header2 thead.red-accent-4 th:not(:first-child):not(:last-child) {
    border-radius: 0;
}


.vending-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.vending-card-title {
    font-size: 16px;
    font-weight: 600;
    color: #222;
}

.vending-period-btns {
    display: flex;
    align-items: center;
    gap: 2px;
}

.period-btn {
    color: #aaa;
    font-size: 12px;
    padding: 0 10px;
    border-radius: 6px;
}

.period-btn-active {
    background: #fff;
    color: #222;
    font-weight: 600;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}

.period-btn-icon {
    border: 1px solid #eee;
    border-radius: 6px;
    color: #888;
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

.vstat-dot-green {
    border-color: #5ebd8d;
}

.vstat-dot-green::after {
    background-color: #5ebd8d;
}

.vstat-dot-blue {
    border-color: #5b7cfa;
}

.vstat-dot-blue::after {
    background-color: #5b7cfa;
}

.vstat-label {
    color: #666;
    flex: 1;
}

.vstat-value {
    font-weight: 700;
    color: #222;
    white-space: nowrap;
}

@media only screen and (max-width: 992px) {
    .main-content {
        padding-left: 20px;
    }
}
</style>