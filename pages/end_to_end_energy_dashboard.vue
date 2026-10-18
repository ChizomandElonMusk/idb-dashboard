<template>
    <div>
        <PageHeader page="overview" :loading="loading">
            <FilterDate type="month" label="Period" :value="selectedDate" :max="maxMonth" @change="onDateChange" />
            <FilterSelect v-model="selectedBusinessUnit" label="Business unit" icon="building" :options="businessUnits" @change="loadOverview" />
        </PageHeader>

        <div class="ie-page">
            <div v-if="error" class="ie-error">
                <Icon name="alert" :size="16" />Couldn't load live data: {{ error }}
                <button class="ie-btn" @click="loadOverview">Retry</button>
            </div>

            <SkeletonPage v-if="loading && !loaded" />

            <div v-else class="ie-fadein">
                <!-- headline band -->
                <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(252px, 1fr))">
                    <div class="ie-hero">
                        <div class="ie-hero-kicker"><Icon name="bolt" :size="18" />Energy on grid</div>
                        <div class="ie-hero-value" style="font-size:clamp(28px, 2.6vw, 44px)"><AnimatedValue :value="fmt(kpi.total_energy_on_grid_mwh)" /></div>
                        <div class="ie-hero-unit">MWh · {{ periodLabel }}</div>
                        <div v-if="trendText" style="display:flex;align-items:center;gap:8px;margin-top:16px">
                            <span class="ie-hero-trend"><Icon :name="trendUp ? 'trendUp' : 'trendDown'" :size="13" />{{ trendText }}</span>
                            <span style="font-size:11.5px;font-weight:600;opacity:.75">vs previous period</span>
                        </div>
                    </div>

                    <div class="ie-card" style="padding:22px 24px">
                        <div class="ie-layer watermark">DT</div>
                        <div class="ie-kpi-head"><span class="ie-ico tone-success"><Icon name="dt" :size="16" /></span><span class="ie-kpi-label">Energy delivered to DTs</span></div>
                        <div class="ie-kpi-value" style="font-size:34px;margin-top:16px"><AnimatedValue :value="fmt(kpi.total_energy_on_dts_mwh)" /></div>
                        <div class="ie-kpi-unit">MWh</div>
                        <div style="margin-top:16px">
                            <div class="ie-bar-row"><span style="color:var(--text-3)">Share of grid energy</span><span style="color:var(--success)">{{ pct(dtsPct) }}</span></div>
                            <div class="ie-track"><div class="ie-fill" :style="{ width: barW(dtsPct), background: 'var(--success)' }"></div></div>
                        </div>
                    </div>

                    <div class="ie-card ie-card--danger" style="padding:22px 24px">
                        <div class="ie-diag ie-layer" style="color:var(--danger);opacity:.06"></div>
                        <div class="ie-kpi-head"><span class="ie-ico tone-danger"><Icon name="loss" :size="16" /></span><span class="ie-kpi-label">Grid → DT loss</span></div>
                        <div class="ie-kpi-value" style="font-size:34px;margin-top:16px;color:var(--danger)"><AnimatedValue :value="fmt(kpi.total_grid_to_dt_loss_mwh)" /></div>
                        <div class="ie-kpi-unit">MWh</div>
                        <div style="margin-top:16px">
                            <div class="ie-bar-row"><span style="color:var(--text-3)">Loss rate</span><span style="color:var(--danger)">{{ pct(lossPct) }}</span></div>
                            <div class="ie-track"><div class="ie-fill" :style="{ width: barW(lossPct), background: 'var(--danger)' }"></div></div>
                        </div>
                    </div>

                    <div class="ie-card ie-card--success" style="padding:22px 24px">
                        <div class="pt-chev ie-layer" style="color:var(--success);opacity:.05"></div>
                        <div class="ie-kpi-head"><span class="ie-ico tone-success" style="font-size:15px;font-weight:800">₦</span><span class="ie-kpi-label">Revenue expected</span></div>
                        <div class="ie-kpi-value" style="font-size:34px;margin-top:16px;color:var(--success)">{{ revenueShort }}</div>
                        <div class="ie-kpi-unit">WAT – ₦{{ WAT }}</div>
                        <div class="mono" style="margin-top:16px;font-size:11px;font-weight:700;color:var(--text-3)">{{ revenueFull }}</div>
                    </div>
                </div>

                <!-- network status -->
                <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(210px, 1fr))">
                    <div v-for="c in netCards" :key="c.label" class="ie-card net-card" :class="'tone-' + c.tone">
                        <span class="ie-ico ie-ico--lg"><Icon :name="c.icon" :size="20" /></span>
                        <div style="min-width:0">
                            <div class="mono net-value">{{ c.value }}</div>
                            <div class="net-label">{{ c.label }}</div>
                        </div>
                    </div>
                </div>

                <!-- infrastructure strip -->
                <div class="infra">
                    <div v-for="i in infra" :key="i.label" class="infra-cell" :class="'tone-' + i.tone">
                        <span class="ie-ico ie-ico--md"><Icon :name="i.icon" :size="17" /></span>
                        <div style="min-width:0">
                            <div class="mono infra-value">{{ i.value }}</div>
                            <div class="infra-label ie-ellip">{{ i.label }}</div>
                        </div>
                    </div>
                </div>

                <!-- grid network -->
                <div class="ie-card ie-card--flush">
                    <div class="ie-card-head">
                        <div>
                            <div class="ie-card-title" style="font-size:15.5px">Grid network</div>
                            <div class="ie-card-sub">{{ fmt(grid.dt_count) }} distribution transformers across the network</div>
                        </div>
                        <div ref="gnSearch" class="gn-search-wrap">
                            <div class="ie-search">
                                <Icon name="search" :size="16" />
                                <input v-model="gnQuery" placeholder="Search by DT or feeder…" @focus="gnFocused = true" />
                                <span v-if="gnQuery" class="mono" style="font-size:10.5px;font-weight:700">{{ gnResults.length }}</span>
                            </div>
                            <div v-if="gnFocused && gnQuery.trim()" class="gn-results ie-fadeup ie-scroll">
                                <div v-for="r in gnResults.slice(0, 40)" :key="r.dtId || r.label" class="gn-result" @click="openMarker(r)">
                                    <img :src="'/' + r.status + '.svg'" alt="" class="gn-result-ico" />
                                    <div style="min-width:0;flex:1">
                                        <div class="ie-ellip" style="font-size:12.5px;font-weight:700">{{ r.label }}</div>
                                        <div class="ie-ellip" style="font-size:11px;color:var(--text-3)">{{ r.feederName }}</div>
                                    </div>
                                    <span style="font-size:10.5px;font-weight:700" :style="{ color: statusMeta[r.status].color }">{{ statusMeta[r.status].label }}</span>
                                </div>
                                <div v-if="!gnResults.length" class="gn-none">No transformer or feeder matches “{{ gnQuery }}”</div>
                            </div>
                        </div>
                    </div>
                    <div class="gn-body">
                        <div class="gn-side">
                            <div class="gn-side-label">Transformers</div>
                            <div v-for="g in dtStatus" :key="g.key" class="gn-stat" :style="{ opacity: !gnFilter || gnFilter === g.key ? 1 : .38 }" @click="gnFilter = gnFilter === g.key ? null : g.key">
                                <div class="gn-stat-row">
                                    <span style="display:flex;align-items:center;gap:7px"><span class="gn-dot" :style="{ background: g.color }"></span>{{ g.label }}</span>
                                    <span class="mono">{{ g.value }}</span>
                                </div>
                                <div class="ie-track" style="height:6px"><div class="ie-fill" :style="{ width: g.pct, background: g.color }"></div></div>
                            </div>
                            <div class="gn-side-label" style="margin-top:6px">Feeders</div>
                            <div class="gn-feeders">
                                <div><span class="gn-dot" style="background:var(--success)"></span>Online<b class="mono">{{ fmt(grid.online_feeders) }}</b></div>
                                <div><span class="gn-dot" style="background:var(--danger)"></span>Offline<b class="mono">{{ fmt(grid.offline_feeders) }}</b></div>
                            </div>
                            <div class="gn-hint">Click a status to filter the map.</div>
                        </div>
                        <div class="gn-map">
                            <GridNetworkMap :markers="visibleMarkers" :center="mapCenter" :zoom="11" @marker-click="openMarker" />
                            <div class="gn-legend">
                                <span v-for="g in dtStatus" :key="g.key"><img :src="'/' + g.key + '.svg'" alt="" />{{ g.label }}</span>
                            </div>
                            <div class="gn-sample">Sampled view · {{ fmt(visibleMarkers.length) }} of {{ fmt(grid.dt_count) }} · click a transformer for details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <DTDetailsModal :marker="selectedMarker" @close="selectedMarker = null" />
    </div>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'
import PageHeader from '~/components/ui/PageHeader.vue'
import FilterSelect from '~/components/ui/FilterSelect.vue'
import FilterDate from '~/components/ui/FilterDate.vue'
import SkeletonPage from '~/components/ui/SkeletonPage.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import GridNetworkMap from '~/components/GridNetworkMap.vue'
import DTDetailsModal from '~/components/DTDetailsModal.vue'
import { getEndToEndOverview, formatNumber, BUSINESS_UNITS, currentMonthStr } from '~/js_modules/controlCenterApi'
// Wired to GET /api/v1/end-to-end/overview (see static/api_live_responses3.md #1). The map
// uses Leaflet + Esri tiles (no API key), plotting the DT markers the API returns.

const DEFAULT_CENTER = [6.6386, 3.3730]
// Weighted average tariff (₦/kWh) the design uses for "Revenue expected".
const WAT = 118.54

function naira(v) {
    if (!Number.isFinite(v)) return '—'
    if (v >= 1e9) return '₦' + (v / 1e9).toFixed(2) + 'bn'
    if (v >= 1e6) return '₦' + (v / 1e6).toFixed(1) + 'm'
    if (v >= 1e3) return '₦' + (v / 1e3).toFixed(0) + 'k'
    return '₦' + Math.round(v).toLocaleString()
}

export default {
    layout: 'dashboard',
    components: { Icon, PageHeader, FilterSelect, FilterDate, SkeletonPage, AnimatedValue, GridNetworkMap, DTDetailsModal },
    data() {
        return {
            WAT,
            loading: true,
            loaded: false,
            error: null,
            selectedMarker: null,
            selectedDate: '',
            dateTouched: false,
            maxMonth: currentMonthStr(),
            selectedBusinessUnit: 'All',
            businessUnits: BUSINESS_UNITS,
            kpi: {},
            infraRaw: {},
            grid: {},
            periodLabel: '',
            mapCenter: DEFAULT_CENTER,
            mapMarkers: [],
            gnQuery: '',
            gnFocused: false,
            gnFilter: null,
            statusMeta: {
                online: { label: 'Online', color: 'var(--success)' },
                offline: { label: 'Offline', color: 'var(--danger)' },
                inactive: { label: 'Inactive', color: 'var(--warning)' }
            }
        }
    },
    computed: {
        dtsPct() {
            return this.kpi.total_energy_on_grid_mwh ? this.kpi.total_energy_on_dts_mwh / this.kpi.total_energy_on_grid_mwh * 100 : null
        },
        lossPct() {
            return this.kpi.total_energy_on_grid_mwh ? this.kpi.total_grid_to_dt_loss_mwh / this.kpi.total_energy_on_grid_mwh * 100 : null
        },
        trendText() {
            const p = this.kpi.energy_vs_prev_period_pct
            if (p === null || p === undefined) return null
            return (p >= 0 ? '+' : '') + Number(p).toFixed(2) + '%'
        },
        trendUp() {
            return (this.kpi.energy_vs_prev_period_pct ?? 0) >= 0
        },
        revenue() {
            const g = Number(this.kpi.total_energy_on_grid_mwh)
            return Number.isFinite(g) ? g * 1000 * WAT : NaN
        },
        revenueShort() {
            return naira(this.revenue)
        },
        revenueFull() {
            return Number.isFinite(this.revenue) ? '₦' + Math.round(this.revenue).toLocaleString() : ''
        },
        netCards() {
            const g = this.grid
            return [
                { label: '11kV incomers', value: formatNumber(g['11kva_incomer']), icon: 'plug', tone: 'soe' },
                { label: '11kV outgoing feeders', value: formatNumber(g['11kva_outgoing_feeders']), icon: 'feeder', tone: 'primary' },
                { label: 'Online feeders', value: formatNumber(g.online_feeders), icon: 'check', tone: 'success' },
                { label: 'Offline feeders', value: formatNumber(g.offline_feeders), icon: 'alert', tone: 'danger' }
            ]
        },
        infra() {
            const i = this.infraRaw
            return [
                { label: 'Transmission stations', value: formatNumber(i.ts_count), icon: 'tower', tone: 'soe' },
                { label: 'Transformer capacity', value: formatNumber(i.transformer_capacity_count), icon: 'cap', tone: 'primary' },
                { label: '33 kV feeders', value: formatNumber(i.feeders_33kva), icon: 'feeder', tone: 'ca' },
                { label: 'Injection substations', value: formatNumber(i.iss_count), icon: 'station', tone: 'accent' },
                { label: 'Distribution transformers', value: formatNumber(i.total_transformers), icon: 'dt', tone: 'info' }
            ]
        },
        dtStatus() {
            const g = this.grid
            const total = Number(g.dt_count) || 0
            const p = (v) => (total ? (Number(v) / total * 100).toFixed(1) + '%' : '0%')
            return [
                { key: 'online', label: 'Online', value: formatNumber(g.online_dts), pct: p(g.online_dts), color: 'var(--success)' },
                { key: 'offline', label: 'Offline', value: formatNumber(g.offline_dts), pct: p(g.offline_dts), color: 'var(--danger)' },
                { key: 'inactive', label: 'Inactive', value: formatNumber(g.inactive_dts), pct: p(g.inactive_dts), color: 'var(--warning)' }
            ]
        },
        visibleMarkers() {
            return this.gnFilter ? this.mapMarkers.filter((m) => m.status === this.gnFilter) : this.mapMarkers
        },
        gnResults() {
            const q = this.gnQuery.trim().toLowerCase()
            if (!q) return []
            return this.mapMarkers.filter((m) => (m.label || '').toLowerCase().includes(q) || (m.feederName || '').toLowerCase().includes(q))
        }
    },
    async mounted() {
        document.addEventListener('mousedown', this.onDocDown)
        await this.loadOverview()
    },
    beforeDestroy() {
        document.removeEventListener('mousedown', this.onDocDown)
    },
    methods: {
        fmt: formatNumber,
        pct(v) {
            return v == null || !Number.isFinite(v) ? '—' : v.toFixed(1) + '%'
        },
        barW(v) {
            return v == null || !Number.isFinite(v) ? '0%' : Math.min(100, v).toFixed(1) + '%'
        },
        onDateChange(value) {
            this.dateTouched = true
            this.selectedDate = value
            this.loadOverview()
        },
        onDocDown(e) {
            if (this.gnFocused && this.$refs.gnSearch && !this.$refs.gnSearch.contains(e.target)) this.gnFocused = false
        },
        openMarker(m) {
            this.gnFocused = false
            this.selectedMarker = m
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
                this.loaded = true
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
            this.kpi = data.kpis || {}
            this.periodLabel = this.kpi.period_label || data.period || ''
            this.infraRaw = data.infrastructure_summary || {}
            this.grid = data.grid_network || {}

            const markers = (data.dt_markers || [])
                .filter((m) => m.latitude != null && m.longitude != null)
                .map((m) => ({
                    lat: m.latitude,
                    lng: m.longitude,
                    status: ['online', 'offline', 'inactive'].includes((m.status || '').toLowerCase()) ? m.status.toLowerCase() : 'inactive',
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
.watermark { right: 10px; top: -18px; left: auto; bottom: auto; font-family: var(--mono); font-size: 92px; font-weight: 700; color: var(--text); opacity: .045; user-select: none; }

.net-card { padding: 16px 18px; display: flex; align-items: center; gap: 14px; border-radius: 16px; }
.net-value { font-size: 30px; font-weight: 700; letter-spacing: -1.2px; line-height: 1; color: var(--chip-fg); }
.net-label { font-size: 12.5px; font-weight: 700; color: var(--text-2); margin-top: 5px; }

.infra { display: grid; grid-template-columns: repeat(auto-fit, minmax(186px, 1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; margin-bottom: 14px; }
.infra-cell { background: var(--surface); padding: 15px 18px; display: flex; align-items: center; gap: 12px; min-width: 0; }
.infra-value { font-size: 19px; font-weight: 700; letter-spacing: -.6px; }
.infra-label { font-size: 11px; color: var(--text-2); font-weight: 600; }

.gn-search-wrap { position: relative; min-width: 290px; }
.gn-results { position: absolute; left: 0; right: 0; top: calc(100% + 6px); z-index: 1100; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; box-shadow: var(--shadow-lg); padding: 5px; max-height: 300px; overflow-y: auto; }
.gn-result { display: flex; align-items: center; gap: 10px; padding: 8px 9px; border-radius: 8px; cursor: pointer; }
.gn-result:hover { background: var(--surface-2); }
.gn-result-ico { width: 20px; height: 20px; flex: none; }
.gn-none { padding: 14px 10px; font-size: 12px; color: var(--text-3); text-align: center; }

.gn-body { display: grid; grid-template-columns: 280px minmax(0, 1fr); }
.gn-side { border-right: 1px solid var(--border); padding: 18px 20px; display: flex; flex-direction: column; gap: 10px; }
.gn-side-label { font-size: 10.5px; font-weight: 700; letter-spacing: .07em; color: var(--text-3); text-transform: uppercase; }
.gn-stat { cursor: pointer; transition: opacity .2s; }
.gn-stat-row { display: flex; align-items: center; justify-content: space-between; font-size: 12px; font-weight: 700; margin-bottom: 5px; }
.gn-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; flex: none; }
.gn-feeders { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.gn-feeders > div { display: flex; flex-direction: column; gap: 3px; background: var(--surface-2); border: 1px solid var(--border); border-radius: 10px; padding: 9px 11px; font-size: 11px; font-weight: 700; color: var(--text-2); }
.gn-feeders > div .gn-dot { margin-bottom: 2px; }
.gn-feeders b { font-size: 17px; color: var(--text); letter-spacing: -.5px; }
.gn-hint { margin-top: auto; font-size: 11px; color: var(--text-3); font-weight: 600; }
.gn-map { position: relative; min-height: 420px; background: var(--surface-2); overflow: hidden; }
.gn-map ::v-deep .grid-map-el { min-height: 420px; height: 100%; }
.gn-legend { position: absolute; left: 16px; bottom: 14px; z-index: 500; display: flex; gap: 14px; background: color-mix(in srgb, var(--surface) 88%, transparent); backdrop-filter: blur(6px); border: 1px solid var(--border); border-radius: 999px; padding: 7px 14px; }
.gn-legend span { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; color: var(--text-2); }
.gn-legend img { width: 15px; height: 15px; }
.gn-sample { position: absolute; right: 16px; top: 14px; z-index: 500; font-size: 10.5px; font-weight: 700; color: var(--text-3); background: color-mix(in srgb, var(--surface) 88%, transparent); border: 1px solid var(--border); border-radius: 7px; padding: 5px 10px; }

@media (max-width: 900px) {
    .gn-body { grid-template-columns: 1fr; }
    .gn-side { border-right: none; border-bottom: 1px solid var(--border); }
    .gn-search-wrap { min-width: 0; width: 100%; }
    .gn-sample { display: none; }
}
</style>
