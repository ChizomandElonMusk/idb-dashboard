<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">

            <!-- header -->
            <div class="avail-header">
                <h5 class="avail-title">Overview</h5>
                <div class="avail-filters">
                    <div class="filter-input">
                        <span class="filter-label">Date</span>
                        <i class="material-icons filter-icon">calendar_today</i>
                    </div>
                    <div class="filter-input">
                        <span class="filter-label">Business Unit</span>
                        <i class="material-icons filter-icon">arrow_drop_down</i>
                    </div>
                </div>
            </div>

            <!-- top 3 KPI cards -->
            <div class="row">
                <div class="col s12 m4" v-for="kpi in kpis" :key="kpi.label">
                    <div class="card-panel kpi-card">
                        <div class="kpi-top">
                            <img :src="kpi.icon" :alt="kpi.label" class="kpi-icon-img" />
                            <div class="kpi-info">
                                <p class="kpi-value"><AnimatedValue :value="kpi.value" /></p>
                                <p class="kpi-label">{{ kpi.label }}</p>
                            </div>
                        </div>
                        <div class="kpi-divider"></div>
                        <div class="kpi-footer">
                            <span class="kpi-date">{{ kpi.date }}</span>
                            <span class="kpi-trend" :class="kpi.up ? 'trend-up' : 'trend-down'">
                                {{ kpi.trend }}
                                <img
                                    v-if="kpi.customArrow"
                                    :src="kpi.up ? '/mdi_arrow-up-bold.png' : '/mdi_arrow-down-bold.png'"
                                    :alt="kpi.up ? 'up' : 'down'"
                                    class="kpi-trend-icon"
                                />
                                <i v-else class="material-icons tiny">{{ kpi.up ? 'arrow_upward' : 'arrow_downward' }}</i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Grid Network -->
            <div class="card-panel grid-network-card">
                <div class="gn-header">
                    <p class="gn-title">Grid Network</p>
                    <div class="gn-search">
                        <i class="material-icons tiny">search</i>
                        <input type="text" placeholder="Search by DT or Feeder" />
                    </div>
                </div>

                <div class="gn-stat-strip">
                    <div class="gn-stat" v-for="(s, i) in gnStats" :key="s.label" :class="{ 'border-right': i !== gnStats.length - 1 }">
                        <span class="gn-stat-label">{{ s.label }}</span>
                        <span class="gn-stat-value">{{ s.value }}</span>
                    </div>
                </div>

                <div class="gn-body">
                    <div class="gn-side-panel">
                        <div class="gn-count-box">
                            <div class="gn-count-row" v-for="(c, i) in gnCounts" :key="c.label" :class="{ 'gn-count-divider': i !== gnCounts.length - 1 }">
                                <span>{{ c.label }}</span>
                                <b>{{ c.value }}</b>
                            </div>
                        </div>

                        <div class="gn-status-box" v-for="st in gnStatuses" :key="st.label" :class="st.cls">
                            <div class="gn-status-head">
                                <span class="gn-status-dot" :class="st.dotCls"></span>
                                {{ st.label }}
                            </div>
                            <div class="gn-status-cols">
                                <div class="gn-status-col">
                                    <span class="gn-status-sub">DT</span>
                                    <b :class="st.textCls">{{ st.dt }}</b>
                                </div>
                                <div class="gn-status-col">
                                    <span class="gn-status-sub">Feeder</span>
                                    <b :class="st.textCls">{{ st.feeder }}</b>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="gn-map">
                        <GridNetworkMap :markers="mapMarkers" :center="mapCenter" :zoom="14" @marker-click="selectedMarker = $event" />
                        <div class="gn-map-legend">
                            <span><i class="marker-dot green"></i> Online</span>
                            <span><i class="marker-dot red"></i> Offline</span>
                            <span><i class="marker-dot orange"></i> Inactive</span>
                        </div>
                    </div>
                </div>
            </div>

        </main>

        <DTDetailsModal :marker="selectedMarker" @close="selectedMarker = null" />
    </div>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import GridNetworkMap from '~/components/GridNetworkMap.vue'
import DTDetailsModal from '~/components/DTDetailsModal.vue'
// UI-first rebuild to match the Figma "End-To-End Energy Dashboard" (Overview) screen exactly.
// Data below is static mock content taken from the Figma mockup — real API wiring will be
// reintroduced once the backend team ships the matching endpoint shape. The map uses Leaflet +
// OpenStreetMap tiles (no API key required) plotting mock feeder/DT coordinates around Ojodu,
// Lagos — the area referenced in the Figma mockup.

export default {
    components: { SideNav, AnimatedValue, GridNetworkMap, DTDetailsModal },
    data() {
        return {
            selectedMarker: null,
            kpis: [
                {
                    label: 'Total Energy on Grid (MWh)',
                    value: '4,917.66',
                    date: 'Jan 2026',
                    trend: '+13.6%',
                    up: true,
                    icon: '/Total Energy on Grid (MWh).svg'
                },
                {
                    label: 'Total energy on DTs(MWh)',
                    value: '2,000',
                    date: 'Jan 2026',
                    trend: '+3.6%',
                    up: true,
                    icon: '/Total energy on DTs(MWh).svg',
                    customArrow: true
                },
                {
                    label: 'Total Grid  to DT loss(MWh)',
                    value: '1,123',
                    date: 'Jan 2026',
                    trend: '-13.6%',
                    up: false,
                    icon: '/Total Grid to DT loss(MWh).svg',
                    customArrow: true
                }
            ],
            gnStats: [
                { label: 'TS', value: '15' },
                { label: 'Transformer Capacity', value: '85' },
                { label: '33KVA Feeders', value: '108' },
                { label: 'ISS', value: '356' },
                { label: 'Total Transformer', value: '16,712' }
            ],
            gnCounts: [
                { label: '11KVA Incomer', value: '345' },
                { label: '11KVA Outgoing Feeders', value: '85' },
                { label: 'DT', value: '15' }
            ],
            gnStatuses: [
                { label: 'Online', cls: 'status-online', dotCls: 'green', textCls: 'text-green', dt: 100, feeder: 80 },
                { label: 'Offline', cls: 'status-offline', dotCls: 'red', textCls: 'text-red', dt: 70, feeder: 40 },
                { label: 'Inactive', cls: 'status-inactive', dotCls: 'gray', textCls: 'text-gray', dt: 10, feeder: 20 }
            ],
            // Mock feeder/DT coordinates scattered around Ojodu, Lagos (the area referenced in
            // the Figma mockup). Real coordinates will replace these once the backend ships them.
            mapCenter: [6.6386, 3.3730],
            mapMarkers: [
                { lat: 6.6440, lng: 3.3612, status: 'offline', label: 'Feeder 33kV-014' },
                { lat: 6.6462, lng: 3.3701, status: 'inactive', label: 'DT-1042' },
                { lat: 6.6321, lng: 3.3560, status: 'online', label: 'Feeder 11kV-027' },
                { lat: 6.6495, lng: 3.3822, status: 'offline', label: 'DT-1108' },
                { lat: 6.6218, lng: 3.3499, status: 'offline', label: 'Feeder 33kV-009' },
                { lat: 6.6355, lng: 3.3650, status: 'online', label: 'DT-1056' },
                { lat: 6.6408, lng: 3.3745, status: 'inactive', label: 'Feeder 11kV-033' },
                { lat: 6.6516, lng: 3.3880, status: 'offline', label: 'DT-1123' },
                { lat: 6.6198, lng: 3.3420, status: 'online', label: 'Feeder 33kV-011' },
                { lat: 6.6289, lng: 3.3560, status: 'offline', label: 'DT-1071' },
                { lat: 6.6372, lng: 3.3690, status: 'inactive', label: 'Feeder 11kV-041' },
                { lat: 6.6444, lng: 3.3810, status: 'offline', label: 'DT-1089' },
                { lat: 6.6140, lng: 3.3390, status: 'inactive', label: 'Feeder 33kV-006' },
                { lat: 6.6252, lng: 3.3530, status: 'online', label: 'DT-1034' },
                { lat: 6.6330, lng: 3.3620, status: 'offline', label: 'Feeder 11kV-018' },
                { lat: 6.6470, lng: 3.3900, status: 'online', label: 'DT-1147' },
                { lat: 6.6170, lng: 3.3450, status: 'offline', label: 'Feeder 33kV-004' },
                { lat: 6.6395, lng: 3.3730, status: 'inactive', label: 'DT-1063' },
                { lat: 6.6540, lng: 3.3960, status: 'offline', label: 'Feeder 11kV-052' },
                { lat: 6.6300, lng: 3.3480, status: 'online', label: 'DT-1097' },
                { lat: 6.6120, lng: 3.3350, status: 'offline', label: 'Feeder 33kV-002' },
                { lat: 6.6420, lng: 3.3560, status: 'offline', label: 'DT-1112' },
                { lat: 6.6270, lng: 3.3690, status: 'inactive', label: 'Feeder 11kV-029' },
                { lat: 6.6480, lng: 3.3650, status: 'online', label: 'DT-1005' },
                { lat: 6.6355, lng: 3.3440, status: 'offline', label: 'Feeder 33kV-013' },
                { lat: 6.6210, lng: 3.3620, status: 'offline', label: 'DT-1131' },
                { lat: 6.6500, lng: 3.3760, status: 'inactive', label: 'Feeder 11kV-047' },
                { lat: 6.6155, lng: 3.3560, status: 'online', label: 'DT-1019' },
                { lat: 6.6430, lng: 3.3920, status: 'offline', label: 'Feeder 33kV-016' },
                { lat: 6.6310, lng: 3.3390, status: 'offline', label: 'DT-1152' },
                { lat: 6.6240, lng: 3.3760, status: 'online', label: 'Feeder 11kV-038' },
                { lat: 6.6460, lng: 3.3500, status: 'offline', label: 'DT-1027' }
            ]
        }
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

/* KPI cards */
.kpi-card {
    border-radius: 14px;
    padding: 18px 16px 14px;
    margin-bottom: 12px;
    background: var(--bg-card);
}

.kpi-top {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 14px;
}

.kpi-icon-img {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
}

.kpi-info { flex: 1; }

.kpi-value {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 2px 0;
    line-height: 1.1;
}

.kpi-label {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0;
}

.kpi-divider {
    height: 1px;
    background: var(--divider);
    margin-bottom: 10px;
}

.kpi-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.kpi-date { font-size: 12px; color: var(--text-muted); }

.kpi-trend {
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 2px 8px;
    border-radius: 10px;
}

.trend-up   { color: #2fa360; background: #e3f7ea; }
.trend-down { color: #c0392b; background: #fdeaeb; }
.kpi-trend .material-icons { font-size: 13px !important; }
.kpi-trend-icon { width: 14px; height: 14px; }

/* Grid Network card */
.grid-network-card {
    border-radius: 14px;
    background: var(--bg-card);
    padding: 20px;
    margin-bottom: 16px;
}

.gn-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
}

.gn-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.gn-search {
    display: flex;
    align-items: center;
    gap: 6px;
    background: var(--bg-card-alt);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 6px 12px;
    color: var(--text-muted);
    min-width: 240px;
}

.gn-search input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 13px;
    color: var(--text-primary);
    height: auto;
    margin: 0;
    width: 100%;
}

.gn-stat-strip {
    display: flex;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    margin-bottom: 16px;
    overflow: hidden;
}

.gn-stat {
    flex: 1;
    padding: 10px 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.gn-stat-label { font-size: 12px; color: var(--text-muted); }
.gn-stat-value { font-size: 16px; font-weight: 700; color: var(--text-primary); }

.gn-body {
    display: flex;
    gap: 16px;
    align-items: stretch;
}

.gn-side-panel {
    width: 230px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.gn-count-box {
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 4px 14px;
}

.gn-count-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 12px;
    color: var(--text-secondary);
}

.gn-count-row b { font-size: 15px; color: var(--text-primary); }
.gn-count-divider { border-bottom: 1px solid var(--divider); }

.gn-status-box {
    border-radius: 10px;
    padding: 10px 14px;
}

.status-online   { background: #e9f8ef; }
.status-offline  { background: #fdecec; }
.status-inactive { background: var(--bg-card-alt); }

.gn-status-head {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 8px;
}

.gn-status-cols {
    display: flex;
    justify-content: space-between;
}

.gn-status-col { display: flex; flex-direction: column; gap: 2px; }
.gn-status-sub { font-size: 11px; color: var(--text-muted); }
.gn-status-col b { font-size: 18px; }

.text-green { color: #2fa360; }
.text-red   { color: #c0392b; }
.text-gray  { color: var(--text-secondary); }

.marker-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.marker-dot.green  { background: #2fa360; }
.marker-dot.red    { background: #c0392b; }
.marker-dot.orange { background: #e8a325; }

/* Map */
.gn-map {
    position: relative;
    flex: 1;
    min-height: 380px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--border-color);
}

.gn-map-legend {
    position: absolute;
    bottom: 12px;
    left: 12px;
    z-index: 1000;
    display: flex;
    gap: 14px;
    background: rgba(255, 255, 255, 0.9);
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 12px;
    color: #333;
}

.gn-map-legend span {
    display: flex;
    align-items: center;
    gap: 6px;
}

.border-right { border-right: 1px solid var(--border-color); }

@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
    .gn-body { flex-direction: column; }
    .gn-side-panel { width: 100%; flex-direction: row; flex-wrap: wrap; }
    .gn-count-box, .gn-status-box { flex: 1; min-width: 200px; }
}
</style>
