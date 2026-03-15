<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="row header-row">
                <div class="col s12">
                    <h5 class="light">IDB Dashboard</h5>
                    <div class="tabs-container">
                        <ul class="tabs tabs-transparent">
                            <li class="tab"><a class="active pink-text" href="#dashboard">Dashboard</a></li>
                            <li class="tab"><a class="active pink-text" href="#feeder-loss">Feeder to DT loss Table</a>
                            </li>
                            <li class="tab"><a class="active pink-text" href="#customer-loss">Customer to DT loss
                                    Table</a></li>
                        </ul>
                    </div>
                </div>
            </div>



            <!-- this is the dashboard section -->

            <div class="row" id="dashboard">
                <div class="row">
                    <div class="col s12 m4">
                        <div class="card-panel stats-card">
                            <div class="valign-wrapper">
                                <div class="icon-circle orange"><i class="material-icons white-text">bolt</i></div>
                                <div class="stats-text">
                                    <AnimatedValue class="value" :value="energy_total" />
                                    <p class="grey-text">Total Energy (MWh)</p>
                                </div>
                                <span class="badge green white-text">+13.6% ↑</span>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card-panel stats-card">
                            <div class="valign-wrapper">
                                <div class="icon-circle red darken-2"><i class="material-icons white-text">router</i>
                                </div>
                                <div class="stats-text">
                                    <AnimatedValue class="value" :value="total_feeders" />
                                    <p class="grey-text">Total Feeders</p>
                                </div>
                                <span class="badge green white-text">+3.6% ↑</span>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card-panel stats-card">
                            <div class="valign-wrapper">
                                <div class="icon-circle green"><i
                                        class="material-icons white-text">battery_charging_full</i></div>
                                <div class="stats-text">
                                    <AnimatedValue class="value" :value="total_flagged" />
                                    <p class="grey-text">Total flagged IDB meters</p>
                                </div>
                                <span class="badge green white-text">+13.6% ↑</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m4">
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2">Feeder - to - DT Loss</p>
                            <h5>
                                <AnimatedValue :value="feeder_loss" />
                            </h5>
                            <p class="tiny-text grey-text">Loss (%) <span class="right">
                                    <AnimatedValue :value="feeder_loss_pct" />
                                </span></p>
                            <div class="progress red lighten-4">
                                <div class="determinate red" :style="{ width: feeder_loss_pct }"></div>
                            </div>
                        </div>
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2">Billing Efficiency</p>
                            <p class="tiny-text grey-text">Billing Efficiency <span class="right">
                                    <AnimatedValue :value="billing_eff" />
                                </span></p>
                            <div class="progress green lighten-4">
                                <div class="determinate green" :style="{ width: billing_eff }"></div>
                            </div>

                        </div>
                    </div>

                    <div class="col s12 m4">
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2">Customer - to - DT Loss</p>
                            <h5>
                                <AnimatedValue :value="customer_loss" />
                            </h5>
                            <p class="tiny-text grey-text">Loss (%) <span class="right">
                                    <AnimatedValue :value="customer_loss_pct" />
                                </span></p>
                            <div class="progress red lighten-4">
                                <div class="determinate red" :style="{ width: customer_loss_pct }"></div>
                            </div>
                        </div>
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2">ATC & C</p>
                            <p class="tiny-text grey-text">ATC & C <span class="right">
                                    <AnimatedValue :value="atc_c" />
                                </span></p>
                            <div class="progress light-blue lighten-4">
                                <div class="determinate light-blue" :style="{ width: atc_c }"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m4">
                        <div class="card-panel dt-summary-card mini-chart-card" style="padding-bottom: 82px">
                            <div class="row center-align">
                                <div class="col s12">
                                    <!-- <div class="icon-circle-small  center-align" style="margin: 0 auto;">
                                    <div class="icon-circle red darken-2"><i
                                            class="material-icons white-text">router</i></div>
                                </div> -->


                                    <h3>
                                        <div class="icon-circle red darken-2" style="margin: 0 auto;"><i
                                                class="material-icons white-text">router</i></div>
                                        <AnimatedValue :value="total_dts" />
                                    </h3>
                                    <p class="grey-text">Total DTs</p>
                                    <div class="divider"></div>
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
                </div>


                <div class="row">
                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2 center">Total Customers</p>
                            <ChartPie v-if="doughnutData" chart-type="doughnut" :chart-data="doughnutData"
                                :chart-options="pieOptions">
                                <AnimatedValue :value="total_customers" />
                            </ChartPie>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card">
                            <p class="grey-text text-darken-2 center">Revenue</p>
                            <ChartPie v-if="revenueData" chart-type="pie" :chart-data="revenueData"
                                :chart-options="pieOptions">
                                <AnimatedValue :value="revenue" />
                            </ChartPie>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card" style="padding-bottom: 115px;">
                            <p class="grey-text text-darken-2 center">Energy</p>
                            <div class="progress green lighten-4">
                                <div class="determinate blue" :style="{ width: md_energy }"></div>
                            </div>
                            <div class="progress green lighten-4">
                                <div class="determinate green" :style="{ width: nmd_energy }"></div>
                            </div>

                            <div class="col s6">
                                <p>
                                    <span class="circle blue"
                                        style="width: 10px; height: 10px; display: inline-block; margin-left: 5px;"></span>
                                    <span style="font-size: 12px;">MD Energy</span>

                                    <span>336.79</span>
                                    <span>80.93%</span>
                                </p>
                            </div>
                            <div class="col s6">
                                <p>
                                    <span class="circle green"
                                        style="width: 10px; height: 10px; display: inline-block; margin-left: 5px;"></span>
                                    <span style="font-size: 12px;">NMD Energy</span>
                                    <span>336.79</span>
                                    <span>80.93%</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card-panel mini-chart-card" style="padding-bottom: 60px;">
                            <MeterCommunication :percentage="meterValue" />

                        </div>
                    </div>


                </div>
            </div>
            <!-- dashboard ends here -->


            <!-- feeder list section -->
            <div class="row" id="feeder-loss">
                <div class="col s12">

                    <div class="table-wrapper">
                        <table class="rounded-header striped highlight">
                            <thead class="orange white-text" style="border: 1px solid #ff9800;">
                                <tr>
                                    <th>Feeder</th>
                                    <th>Date</th>
                                    <th>Band</th>
                                    <th>Total Public DTs</th>
                                    <th>Public DTs</th>
                                    <th>Total Private DTs</th>
                                    <th>Private DTs Energy</th>
                                    <th>Total DT Energy</th>
                                    <th>Feeder Energy</th>
                                    <th>Feeder to DT Loss</th>
                                    <th>Feeder Loss</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="value in feeder_to_dt_loss_data" :key="value.feeder + value.date">
                                    <td style="font-size: 12px; font-weight: 600;">{{ value.feeder }}</td>
                                    <td style="font-size: 12px;">{{ value.date }}</td>
                                    <td style="font-size: 12px;">{{ value.band }}</td>
                                    <td style="font-size: 12px;">{{ value.total_public_dts }}</td>
                                    <td style="font-size: 12px;">{{ value.public_dts }}</td>
                                    <td style="font-size: 12px;">{{ value.total_private_dts }}</td>
                                    <td style="font-size: 12px;">{{ value.private_dts_energy }}</td>
                                    <td style="font-size: 12px;">{{ value.total_dt_energy }}</td>
                                    <td style="font-size: 12px;">{{ value.feeder_energy }}</td>
                                    <td style="font-size: 12px;">{{ value.feeder_to_dt_loss }}</td>
                                    <td style="font-size: 12px;">{{ value.feeder_loss }}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
            <!-- end of feeder list section -->




            <!-- customer dt to loss list section -->
            <div class="row" id="customer-loss">
                <div class="col s12">

                    <div class="table-wrapper">
                        <table class="rounded-header2 striped highlight">
                            <thead class="red-accent-4 white-text" style="border: 1px solid #ff9800;">
                                <tr>
                                    <th>Feeders</th>
                                    <th>All Customers</th>
                                    <th>Post MD</th>
                                    <th>Comms %</th>
                                    <th>Total Meters Communicating</th>
                                    <th>Prepaid MD</th>
                                    <th>IDB Prepay</th>
                                    <th>DT Consumption</th>
                                    <th>IDB Prepay Consumption</th>
                                    <th>MD Prepay Consumption</th>
                                    <th>Postpaid Consumption</th>
                                    <th>IDB MD Consumption</th>
                                    <th>CE</th>
                                    <th>BE</th>
                                    <th>ATC</th>
                                    <th>Current Loss</th>
                                    <th>Customer to DT Loss</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="value in customer_loss_pct_data" :key="value.feeder + value.date">
                                    <td>{{ value.feeder }}</td>
                                    <td>{{ value.all_customers }}</td>
                                    <td>{{ value.post_md }}</td>
                                    <td>{{ value.comms_pct }}</td>
                                    <td>{{ value.total_meters_communicating }}</td>
                                    <td>{{ value.prepaid_md }}</td>
                                    <td>{{ value.idb_prepay }}</td>
                                    <td>{{ value.dt_consumption }}</td>
                                    <td>{{ value.idb_prepay_consumption }}</td>
                                    <td>{{ value.md_prepay_consumption }}</td>
                                    <td>{{ value.postpaid_consumption }}</td>
                                    <td>{{ value.idb_md_consumption }}</td>
                                    <td>{{ value.ce }}</td>
                                    <td>{{ value.be }}</td>
                                    <td>{{ value.atc }}</td>
                                    <td>{{ value.current_loss }}</td>
                                    <td>{{ value.customer_to_dt_loss }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <!-- end of customer dt to loss list section -->


        </main>
    </div>
</template>

<script>

import SideNav from '~/components/SideNav/SideNav.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import ChartPie from '~/components/ChartPie.vue'
import MeterCommunication from '~/components/MeterCommunication.vue';
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
                { feeder: '11 - IgbobilNJ-T1 - Apata', date: '2024-01-01', band: 'A', total_public_dts: 10, public_dts: 8, total_private_dts: 5, private_dts_energy: '50 MWh', total_dt_energy: '100 MWh', feeder_energy: '1,291,260.00', feeder_to_dt_loss: '50,994.33', feeder_loss: '25%' },
                { feeder: '11 - IgbobilNJ-T1 - Apata', date: '2024-01-02', band: 'B', total_public_dts: 15, public_dts: 12, total_private_dts: 7, private_dts_energy: '70 MWh', total_dt_energy: '140 MWh', feeder_energy: '1,291,260.00', feeder_to_dt_loss: '50,994.33', feeder_loss: '25%' },
                { feeder: '11 - IgbobilNJ-T1 - Apata', date: '2024-01-03', band: 'C', total_public_dts: 20, public_dts: 18, total_private_dts: 10, private_dts_energy: '100 MWh', total_dt_energy: '200 MWh', feeder_energy: '1,291,260.00', feeder_to_dt_loss: '50,994.33', feeder_loss: '25%' },
            ],
            customer_loss_pct_data: [
                { feeder: '11 - IgbobilNJ-T1 - Apata', all_customers: 1000, post_md: 800, comms_pct: '80%', total_meters_communicating: 900, prepaid_md: 700, idb_prepay: 50, dt_consumption: '81,807.62', idb_prepay_consumption: '48,000.42', md_prepay_consumption: '15.33', postpaid_consumption: '15,114.30', idb_md_consumption: '16,692.89', ce: '80.93%', be: '85.75%', atc: '7.87%', current_loss: '7.87%', customer_to_dt_loss: '18,0828.35' },
                { feeder: '11 - IgbobilNJ-T1 - Apata', all_customers: 1500, post_md: 1200, comms_pct: '80%', total_meters_communicating: 1400, prepaid_md: 1100, idb_prepay: 70, dt_consumption: '81,807.62', idb_prepay_consumption: '48,000.42', md_prepay_consumption: '15.33', postpaid_consumption: '15,114.30', idb_md_consumption: '16,692.89', ce: '80.93%', be: '85.75%', atc: '7.87%', current_loss: '7.87%', customer_to_dt_loss: '18,0828.35' },
                { feeder: '11 - IgbobilNJ-T1 - Apata', all_customers: 2000, post_md: 1800, comms_pct: '90%', total_meters_communicating: 1900, prepaid_md: 1700, idb_prepay: 100, dt_consumption: '81,807', idb_prepay_consumption: '48,000.42', md_prepay_consumption: '15.33', postpaid_consumption: '15,114.30', idb_md_consumption: '16,692.89', ce: '80.93%', be: '85.75%', atc: '7.87%', current_loss: '7.87%', customer_to_dt_loss: '18,0828.35' },
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
            revenue: '0',
            doughnutData: null,
            revenueData: null,
            pieOptions: { responsive: true, maintainAspectRatio: false }
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
                private_dts: '30'
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
            // set revenue pie chart values
            this.revenue = '45,200';
            const revenueSegments = [
                { value: 50, color: '#f2a10a', name: 'Revenue Billed' },
                { value: 25, color: '#f191c5', name: 'Revenue Collected' },
            ];
            this.revenueData = {
                labels: revenueSegments.map(s => s.name),
                datasets: [{
                    data: revenueSegments.map(s => s.value),
                    backgroundColor: revenueSegments.map(s => s.color)
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


/* wrapper to allow horizontal scrolling */
.table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
/* ensure tables take intrinsic width so overflow occurs */
.table-wrapper table {
    width: max-content;
}

@media only screen and (max-width: 992px) {
    .main-content {
        padding-left: 20px;
    }
}
</style>