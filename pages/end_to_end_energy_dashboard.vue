<template>
    <div class="dashboard-wrapper">
        <SideNav />
        <main class="main-content">
            <LoadingOverlay :visible="loading" />

            <!-- header -->
            <div class="avail-header">
                <h5 class="avail-title">Overview</h5>
                <div class="avail-filters">
                    <div class="filter-input filter-date" @click="openDatePicker">
                        <input
                            type="month"
                            class="filter-date-input"
                            :value="selectedDate"
                            :max="maxMonth"
                            @change="onDateChange"
                        />
                        <i class="material-icons filter-icon">calendar_today</i>
                    </div>
                    <div class="filter-input filter-select-wrap">
                        <select class="filter-select" v-model="selectedBusinessUnit" @change="loadOverview">
                            <option v-for="bu in businessUnits" :key="bu" :value="bu">{{ bu }}</option>
                        </select>
                        <i class="material-icons filter-icon">arrow_drop_down</i>
                    </div>
                </div>
            </div>

            <div v-if="error" class="e2e-error">
                Couldn't load live data: {{ error }}
                <button class="e2e-retry" @click="loadOverview">Retry</button>
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
                            <span v-if="kpi.trend" class="kpi-trend" :class="kpi.up ? 'trend-up' : 'trend-down'">
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
import LoadingOverlay from '~/components/LoadingOverlay.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import GridNetworkMap from '~/components/GridNetworkMap.vue'
import DTDetailsModal from '~/components/DTDetailsModal.vue'
import { getEndToEndOverview, formatNumber, BUSINESS_UNITS, currentMonthStr, openDatePicker } from '~/js_modules/controlCenterApi'
// Matches the Figma "End-To-End Energy Dashboard" (Overview) screen, wired to
// GET /api/v1/end-to-end/overview (see static/api_live_responses3.md #1). The map uses
// Leaflet + OpenStreetMap tiles (no API key required), plotting the DT markers the API
// returns — the API does not expose separate feeder coordinates, only DTs.

const DEFAULT_CENTER = [6.6386, 3.3730]

// Only total_energy_on_grid_mwh carries a period-over-period trend in the API response
// (kpis.energy_vs_prev_period_pct). The other two KPI cards have no trend figure to show.
function formatTrendPct(pct) {
    if (pct === null || pct === undefined) return null
    const sign = pct >= 0 ? '+' : ''
    return `${sign}${pct}%`
}

export default {
    components: { SideNav, AnimatedValue, GridNetworkMap, DTDetailsModal, LoadingOverlay },
    data() {
        return {
            loading: true,
            error: null,
            selectedMarker: null,
            selectedDate: '',
            dateTouched: false,
            maxMonth: currentMonthStr(),
            selectedBusinessUnit: 'All',
            businessUnits: BUSINESS_UNITS,
            kpis: [
                { label: 'Total Energy on Grid (MWh)', value: '—', date: '', trend: null, up: true, icon: '/Total Energy on Grid (MWh).svg', customArrow: true },
                { label: 'Total energy on DTs(MWh)', value: '—', date: '', trend: null, up: true, icon: '/Total energy on DTs(MWh).svg', customArrow: true },
                { label: 'Total Grid  to DT loss(MWh)', value: '—', date: '', trend: null, up: false, icon: '/Total Grid to DT loss(MWh).svg', customArrow: true }
            ],
            gnStats: [
                { label: 'TS', value: '—' },
                { label: 'Transformer Capacity', value: '—' },
                { label: '33KVA Feeders', value: '—' },
                { label: 'ISS', value: '—' },
                { label: 'Total Transformer', value: '—' }
            ],
            gnCounts: [
                { label: '11KVA Incomer', value: '—' },
                { label: '11KVA Outgoing Feeders', value: '—' },
                { label: 'DT', value: '—' }
            ],
            gnStatuses: [
                { label: 'Online', cls: 'status-online', dotCls: 'green', textCls: 'text-green', dt: '—', feeder: '—' },
                { label: 'Offline', cls: 'status-offline', dotCls: 'red', textCls: 'text-red', dt: '—', feeder: '—' },
                { label: 'Inactive', cls: 'status-inactive', dotCls: 'gray', textCls: 'text-gray', dt: '—', feeder: '—' }
            ],
            mapCenter: DEFAULT_CENTER,
            mapMarkers: []
        }
    },
    async mounted() {
        await this.loadOverview()
    },
    methods: {
        openDatePicker,
        onDateChange(e) {
            this.dateTouched = true
            this.selectedDate = e.target.value
            this.loadOverview()
        },
        async loadOverview() {
            this.loading = true
            this.error = null
            try {
                // marker_limit caps the payload — omitting it returns every one of ~19,700 DTs
                // ("several megabytes" per the API doc).
                const data = await getEndToEndOverview({
                    date: this.selectedDate || undefined,
                    business_unit: this.selectedBusinessUnit,
                    marker_limit: 500
                })
                this.applyOverview(data)
            } catch (err) {
                this.error = err.message || 'Failed to load End-to-End overview data'
            } finally {
                this.loading = false
            }
        },
        applyOverview(data) {
            // Backfill the date filter with the server's own default ("latest complete
            // month") on first load, so the picker reflects what's actually on screen —
            // but only until the user picks a date themselves.
            if (!this.dateTouched && data.period) {
                this.selectedDate = data.period
            }

            const kpis = data.kpis || {}
            // The API returns only one comparison figure — energy_vs_prev_period_pct — with no
            // separate trend for total_energy_on_dts_mwh or total_grid_to_dt_loss_mwh. Reusing
            // it across all three cards (rather than only the grid-energy one it technically
            // describes) since it's the only period-over-period signal the API provides at all.
            const trend = formatTrendPct(kpis.energy_vs_prev_period_pct)
            const up = (kpis.energy_vs_prev_period_pct ?? 0) >= 0
            this.kpis = [
                {
                    label: 'Total Energy on Grid (MWh)',
                    value: formatNumber(kpis.total_energy_on_grid_mwh),
                    date: kpis.period_label || '',
                    trend,
                    up,
                    icon: '/Total Energy on Grid (MWh).svg',
                    customArrow: true
                },
                {
                    label: 'Total energy on DTs(MWh)',
                    value: formatNumber(kpis.total_energy_on_dts_mwh),
                    date: kpis.period_label || '',
                    trend,
                    up,
                    icon: '/Total energy on DTs(MWh).svg',
                    customArrow: true
                },
                {
                    label: 'Total Grid  to DT loss(MWh)',
                    value: formatNumber(kpis.total_grid_to_dt_loss_mwh),
                    date: kpis.period_label || '',
                    trend,
                    up,
                    icon: '/Total Grid to DT loss(MWh).svg',
                    customArrow: true
                }
            ]

            const infra = data.infrastructure_summary || {}
            this.gnStats = [
                { label: 'TS', value: formatNumber(infra.ts_count) },
                { label: 'Transformer Capacity', value: formatNumber(infra.transformer_capacity_count) },
                { label: '33KVA Feeders', value: formatNumber(infra.feeders_33kva) },
                { label: 'ISS', value: formatNumber(infra.iss_count) },
                { label: 'Total Transformer', value: formatNumber(infra.total_transformers) }
            ]

            const grid = data.grid_network || {}
            this.gnCounts = [
                { label: '11KVA Incomer', value: formatNumber(grid['11kva_incomer']) },
                { label: '11KVA Outgoing Feeders', value: formatNumber(grid['11kva_outgoing_feeders']) },
                { label: 'DT', value: formatNumber(grid.dt_count) }
            ]

            this.gnStatuses = [
                { label: 'Online', cls: 'status-online', dotCls: 'green', textCls: 'text-green', dt: formatNumber(grid.online_dts), feeder: formatNumber(grid.online_feeders) },
                { label: 'Offline', cls: 'status-offline', dotCls: 'red', textCls: 'text-red', dt: formatNumber(grid.offline_dts), feeder: formatNumber(grid.offline_feeders) },
                // The API doesn't report an inactive-feeder count, only inactive_dts.
                { label: 'Inactive', cls: 'status-inactive', dotCls: 'gray', textCls: 'text-gray', dt: formatNumber(grid.inactive_dts), feeder: '—' }
            ]

            const markers = (data.dt_markers || [])
                .filter((m) => m.latitude != null && m.longitude != null)
                .map((m) => ({
                    lat: m.latitude,
                    lng: m.longitude,
                    status: (m.status || '').toLowerCase(),
                    label: m.dt_name,
                    feederName: m.feeder_name,
                    band: m.band,
                    dtId: m.dt_id
                }))
            this.mapMarkers = markers
            if (markers.length) {
                this.mapCenter = [
                    markers.reduce((sum, m) => sum + m.lat, 0) / markers.length,
                    markers.reduce((sum, m) => sum + m.lng, 0) / markers.length
                ]
            }
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
    position: relative;
    min-height: 100vh;
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

.filter-date-input,
.filter-select {
    border: none;
    background: transparent;
    outline: none;
    font-size: 13px;
    color: var(--text-secondary);
    font-family: inherit;
    flex: 1;
    min-width: 0;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

/* The native month input draws its own calendar icon next to our Material icon, showing
   two icons — hide it visually (not removed) so clicking there still opens the picker. */
.filter-date-input::-webkit-calendar-picker-indicator {
    opacity: 0;
}

.filter-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

/* Native option lists are OS-rendered and ignore the page's CSS variables/theme, so pin
   readable colors explicitly rather than let dark-theme text disappear on a light popup. */
.filter-select option {
    color: #222;
    background: #fff;
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

.e2e-error {
    background: #fdecec;
    color: #c0392b;
    border-radius: 10px;
    padding: 10px 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
}

.e2e-retry {
    background: #c0392b;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 4px 12px;
    font-size: 12px;
    cursor: pointer;
}


@media only screen and (max-width: 992px) {
    .main-content { padding-left: 20px; }
    .gn-body { flex-direction: column; }
    .gn-side-panel { width: 100%; flex-direction: row; flex-wrap: wrap; }
    .gn-count-box, .gn-status-box { flex: 1; min-width: 200px; }
}
</style>
