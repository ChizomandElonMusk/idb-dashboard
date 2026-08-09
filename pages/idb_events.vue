<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <div class="row" style="margin-bottom: 0;">
                <div class="col s12">
                    <h5 class="avail-title">IDB Events</h5>
                    <ul class="tabs">
                        <li class="tab">
                            <a href="#events-dashboard" class="active tab-link dashboard-tab">
                                <i class="material-icons tiny tab-icon">speed</i> Dashboard
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#event-table" class="tab-link event-tab">
                                <i class="material-icons tiny tab-icon">apps</i> Event Table
                            </a>
                        </li>
                        <li class="tab">
                            <a href="#vending-table" class="tab-link vending-tab">
                                <i class="material-icons tiny tab-icon">apps</i> Vending Vs Consumption Table
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!--
                Per static/control_center_api_doc.md §2.3 / §16: /dashboard/idb-events is
                intentionally partial and the frontend must not infer event counts from
                availability or consumption data. Every tab shows the required pending
                banner instead of fabricated charts/tables until a real events source
                (meter logs, event logs, downtime/trip-off records) is onboarded.
            -->
            <div id="events-dashboard">
                <div class="card-panel pending-banner">
                    <CertificationBadge status="partial" />
                    <p class="pending-note">Events data pending source onboarding</p>
                    <p class="pending-note-small">Real event/vending data requires meter logs, event logs, downtime, and trip-off records that are not yet connected.</p>
                </div>
            </div>

            <div id="event-table">
                <div class="card-panel pending-banner">
                    <CertificationBadge status="partial" />
                    <p class="pending-note">Events data pending source onboarding</p>
                </div>
            </div>

            <div id="vending-table">
                <div class="card-panel pending-banner">
                    <CertificationBadge status="pending" />
                    <p class="pending-note">Vending vs consumption data pending source onboarding</p>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
import * as controlCenterApi from '~/js_modules/controlCenterApi.js'

export default {
    components: { SideNav },
    data() {
        return {
            eventsResponse: null
        }
    },
    methods: {
        async getData() {
            try {
                this.eventsResponse = await controlCenterApi.getIdbEvents()
            } catch (err) {
                console.error('idb events load failed', err)
            }
        }
    },
    async mounted() {
        const el = document.querySelector('.tabs')
        if (el) M.Tabs.init(el, {})
        await this.getData()
    }
}
</script>

<style scoped>
.dashboard-wrapper { background-color: var(--bg-page); min-height: 100vh; }
.main-content { padding-left: 280px; padding-right: 20px; padding-top: 20px; }
.avail-title { font-weight: 600; color: var(--text-primary); margin: 0; }

/* Tabs */
.tabs { background: transparent; border-bottom: 1px solid var(--border-strong); margin-bottom: 20px; }
.tabs .tab a { color: var(--text-muted); text-transform: none; font-size: 14px; display: flex; align-items: center; gap: 6px; }
.tabs .tab a .tab-icon { font-size: 16px !important; }
.tabs .tab a.active.dashboard-tab { color: #c0392b; border-bottom: 2px solid #c0392b; }
.tabs .tab a.active.event-tab     { color: #e8941a; border-bottom: 2px solid #e8941a; }
.tabs .tab a.active.vending-tab   { color: #c0392b; border-bottom: 2px solid #c0392b; }
.tabs .indicator { display: none; }

.pending-banner {
    border-radius: 12px;
    padding: 40px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.pending-note {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 4px 0 0 0;
}

.pending-note-small {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0;
    max-width: 480px;
}

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
}
</style>
