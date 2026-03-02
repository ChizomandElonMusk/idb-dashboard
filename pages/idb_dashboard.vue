<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="row header-row">
                <div class="col s12">
                    <h5 class="light">IDB Dashboard</h5>
                    <div class="tabs-container">
                        <ul class="tabs tabs-transparent">
                            <li class="tab"><a class="active pink-text" href="#">Dashboard</a></li>
                            <li class="tab"><a href="#">Feeder to DT loss Table</a></li>
                            <li class="tab"><a href="#">Customer to DT loss Table</a></li>
                        </ul>
                    </div>
                </div>
            </div>

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
                            <div class="icon-circle red darken-2"><i class="material-icons white-text">router</i></div>
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
                        <div class="col s6">
                            
                        </div>
                        <div class="col s6"></div>
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
                    <div class="card-panel dt-summary-card mini-chart-card">
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
                        <ChartPie v-if="doughnutData" chart-type="doughnut" :chart-data="doughnutData" :chart-options="pieOptions">
                            <AnimatedValue :value="total_customers" />
                        </ChartPie>
                    </div>
                </div>

                <div class="col s12 m3">
                    <div class="card-panel mini-chart-card">
                        <p class="grey-text text-darken-2 center">Revenue</p>
                        <ChartPie v-if="revenueData" chart-type="pie" :chart-data="revenueData" :chart-options="pieOptions">
                          <AnimatedValue :value="revenue" />
                        </ChartPie>
                    </div>
                </div>

                <div class="col s12 m3">
                    <div class="card-panel mini-chart-card">
                        <p class="grey-text text-darken-2 center">Energy</p>
                        <div class="progress green lighten-4">
                            <div class="determinate blue" :style="{ width: md_energy }"></div>
                        </div>
                        <div class="progress green lighten-4">
                            <div class="determinate green" :style="{ width: nmd_energy }"></div>
                        </div>
                    </div>
                </div>

                <div class="col s12 m3">
                    <div class="card-panel mini-chart-card" style="padding-bottom: 60px;">
                        <MeterCommunication :percentage="meterValue" />
                        
                    </div>
                </div>


            </div>


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
                nmd_energy: '85.75%',
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

@media only screen and (max-width: 992px) {
    .main-content {
        padding-left: 20px;
    }
}
</style>