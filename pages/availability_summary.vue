<template>
    <div>
        <PageHeader page="availability" :loading="loading">
            <FilterDate type="date" label="Date" :value="selectedDate" :max="maxDate" @change="onDateChange" />
            <FilterSelect v-model="selectedFeederBand" label="Feeder band" icon="feeder" :options="bandOptions" @change="loadSummary" />
            <FilterSelect v-model="selectedBusinessUnit" label="Business unit" icon="building" :options="businessUnits" @change="loadSummary" />
        </PageHeader>

        <div class="ie-page">
            <div v-if="error" class="ie-error">
                <Icon name="alert" :size="16" />Couldn't load live data: {{ error }}
                <button class="ie-btn" @click="loadSummary">Retry</button>
            </div>

            <SkeletonPage v-if="loading && !loaded" />

            <div v-else class="ie-fadein">
                <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))">
                    <div class="ie-card">
                        <div class="ie-card-title" style="font-size:14.5px">Feeder availability</div>
                        <div class="ie-card-sub" style="margin-bottom:8px">Against band target hours</div>
                        <div class="donut-row">
                            <Donut :segments="feederSegments" :size="132" :r="55" :stroke="18">
                                <span class="mono donut-total">{{ fmt(feeders.total) }}</span>
                                <span class="donut-unit">FEEDERS</span>
                            </Donut>
                            <div class="donut-legend">
                                <div v-for="l in feederLegend" :key="l.label">
                                    <div class="dl-head"><span class="ie-swatch" :style="{ background: l.color }"></span>{{ l.label }}</div>
                                    <div class="mono dl-val">{{ l.value }} <span>{{ l.pct }}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ie-card">
                        <div class="ie-card-title" style="font-size:14.5px">Transformers in scope</div>
                        <div class="ie-card-sub" style="margin-bottom:8px">Public vs private ownership</div>
                        <div class="donut-row">
                            <Donut :segments="dtSegments" :size="132" :r="55" :stroke="18">
                                <span class="mono donut-total">{{ fmt(dts.total) }}</span>
                                <span class="donut-unit">DTs</span>
                            </Donut>
                            <div class="donut-legend">
                                <div v-for="l in dtLegend" :key="l.label">
                                    <div class="dl-head"><span class="ie-swatch" :style="{ background: l.color }"></span>{{ l.label }}</div>
                                    <div class="mono dl-val">{{ l.value }} <span>{{ l.pct }}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ie-card" style="border-color:color-mix(in srgb,var(--danger) 26%,transparent)">
                        <div class="ie-diag ie-layer" style="color:var(--danger);opacity:.05"></div>
                        <div class="ie-card-title" style="font-size:14.5px">DT availability status</div>
                        <div class="ie-card-sub" style="margin-bottom:16px">Met vs not met, by ownership</div>
                        <div style="display:flex;flex-direction:column;gap:16px">
                            <div v-for="d in dtStatus" :key="d.label">
                                <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:6px">
                                    <span style="font-size:12.5px;font-weight:700">{{ d.label }}</span>
                                    <span style="font-size:11.5px;font-weight:700" :style="{ color: d.metPct >= 50 ? 'var(--success)' : 'var(--danger)' }">{{ d.metPct.toFixed(1) }}% met</span>
                                </div>
                                <div class="split-bar">
                                    <div class="ie-grow" :style="{ width: d.metW, background: 'var(--success)' }" :title="d.met + ' met'"><span class="mono">{{ fmt(d.met) }}</span></div>
                                    <div class="ie-grow" :style="{ width: d.notW, background: 'var(--danger)' }" :title="d.not + ' not met'"><span class="mono">{{ fmt(d.not) }}</span></div>
                                </div>
                            </div>
                            <div class="ie-legend">
                                <span><span class="ie-swatch" style="background:var(--success)"></span>Met</span>
                                <span><span class="ie-swatch" style="background:var(--danger)"></span>Not met</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))">
                    <div v-for="chart in buCharts" :key="chart.title" class="ie-card">
                        <div class="ie-card-title" style="font-size:14.5px;margin-bottom:16px">{{ chart.title }}</div>
                        <div style="display:flex;flex-direction:column;gap:12px">
                            <div v-for="b in chart.rows" :key="b.business_unit" class="hbar">
                                <span class="hbar-name">{{ b.business_unit }}</span>
                                <div class="hbar-track"><div class="ie-grow" :style="{ width: b.pct, background: chart.color }"></div></div>
                                <span class="mono hbar-val">{{ fmt(b.count) }}</span>
                            </div>
                            <div v-if="!chart.rows.length" class="ie-empty" style="padding:20px">No business units in this selection.</div>
                        </div>
                    </div>
                </div>

                <div class="ie-card" style="padding:18px 20px">
                    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
                        <Icon name="clock" :size="16" style="color:var(--primary)" />
                        <span style="font-size:13.5px;font-weight:800;letter-spacing:-.2px">NERC target hours by band</span>
                    </div>
                    <div class="targets">
                        <div v-for="t in targets" :key="t.band" class="target">
                            <div style="font-size:11.5px;font-weight:800" :style="{ color: bandColorVar(t.band) }">Band {{ t.band }}</div>
                            <div class="mono target-val">{{ t.hours }}<span>h</span></div>
                            <div style="font-size:11px;color:var(--text-3);font-weight:600">minimum daily supply</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'
import PageHeader from '~/components/ui/PageHeader.vue'
import FilterSelect from '~/components/ui/FilterSelect.vue'
import FilterDate from '~/components/ui/FilterDate.vue'
import SkeletonPage from '~/components/ui/SkeletonPage.vue'
import Donut from '~/components/ui/Donut.vue'
import { getAvailabilitySummary, formatNumber, todayStr, BUSINESS_UNITS, FEEDER_BANDS } from '~/js_modules/controlCenterApi'
import { bandColorVar } from '~/js_modules/pages'
// Wired to GET /api/v1/availability/summary (see static/api_live_responses3.md #4).
// date/feeder_band/business_unit are all live filters.

function share(part, total) {
    const p = Number(part) || 0
    const t = Number(total) || 0
    return t > 0 ? p / t * 100 : 0
}

export default {
    layout: 'dashboard',
    components: { Icon, PageHeader, FilterSelect, FilterDate, SkeletonPage, Donut },
    data() {
        return {
            loading: true,
            loaded: false,
            error: null,
            // Left unset so the request omits `date` and the server resolves its own "latest
            // complete day" — day-level readings lag, and this endpoint doesn't echo the
            // resolved date back, so there's nothing to backfill the picker with.
            selectedDate: '',
            maxDate: todayStr(),
            selectedFeederBand: 'All',
            selectedBusinessUnit: 'All',
            businessUnits: BUSINESS_UNITS,
            bandOptions: FEEDER_BANDS.map((b) => ({ value: b, label: b === 'All' ? 'All bands' : 'Band ' + b })),
            feeders: {},
            dts: {},
            status: {},
            feedersByBu: [],
            dtsByBu: [],
            // Target hours are per band (API doc #4): A 20, B 16, C 12, D 8, E 4.
            targets: [{ band: 'A', hours: 20 }, { band: 'B', hours: 16 }, { band: 'C', hours: 12 }, { band: 'D', hours: 8 }, { band: 'E', hours: 4 }]
        }
    },
    computed: {
        feederSegments() {
            return [
                { value: this.feeders.met || 0, color: 'var(--success)', title: 'Met' },
                { value: this.feeders.not_met || 0, color: 'var(--danger)', title: 'Not met' }
            ]
        },
        feederLegend() {
            const f = this.feeders
            return [
                { label: 'Met target', value: formatNumber(f.met), pct: share(f.met, f.total).toFixed(1) + '%', color: 'var(--success)' },
                { label: 'Below target', value: formatNumber(f.not_met), pct: share(f.not_met, f.total).toFixed(1) + '%', color: 'var(--danger)' }
            ]
        },
        dtSegments() {
            return [
                { value: this.dts.public_dts || 0, color: 'var(--soe)', title: 'Public' },
                { value: this.dts.private_dts || 0, color: 'var(--primary)', title: 'Private' }
            ]
        },
        dtLegend() {
            const d = this.dts
            return [
                { label: 'Public', value: formatNumber(d.public_dts), pct: share(d.public_dts, d.total).toFixed(1) + '%', color: 'var(--soe)' },
                { label: 'Private', value: formatNumber(d.private_dts), pct: share(d.private_dts, d.total).toFixed(1) + '%', color: 'var(--primary)' }
            ]
        },
        dtStatus() {
            const s = this.status
            return [
                { label: 'Public DTs', met: s.public_dts_met || 0, not: s.public_dts_not_met || 0 },
                { label: 'Private DTs', met: s.private_dts_met || 0, not: s.private_dts_not_met || 0 }
            ].map((d) => {
                const metPct = share(d.met, d.met + d.not)
                return { ...d, metPct, metW: metPct.toFixed(2) + '%', notW: (d.met + d.not ? 100 - metPct : 0).toFixed(2) + '%' }
            })
        },
        buCharts() {
            const rows = (list) => {
                const max = Math.max(1, ...list.map((b) => Number(b.count) || 0))
                return list.map((b) => ({ ...b, pct: ((Number(b.count) || 0) / max * 100).toFixed(1) + '%' }))
            }
            return [
                { title: 'Feeders by business unit', rows: rows(this.feedersByBu), color: 'var(--primary)' },
                { title: 'Transformers by business unit', rows: rows(this.dtsByBu), color: 'var(--soe)' }
            ]
        }
    },
    async mounted() {
        await this.loadSummary()
    },
    methods: {
        fmt: formatNumber,
        bandColorVar,
        onDateChange(value) {
            this.selectedDate = value
            this.loadSummary()
        },
        async loadSummary() {
            this.loading = true
            this.error = null
            try {
                const data = await getAvailabilitySummary({
                    date: this.selectedDate,
                    feeder_band: this.selectedFeederBand,
                    business_unit: this.selectedBusinessUnit
                })
                this.feeders = data.feeders_availability || {}
                this.dts = data.dts || {}
                this.status = data.dt_availability_status || {}
                this.feedersByBu = data.feeders_by_business_unit || []
                this.dtsByBu = data.dts_by_business_unit || []
                this.loaded = true
            } catch (err) {
                this.error = err.message || 'Failed to load Availability Summary'
            } finally {
                this.loading = false
            }
        }
    }
}
</script>

<style scoped>
.donut-row { display: flex; align-items: center; gap: 16px; }
.donut-total { font-size: 24px; font-weight: 700; letter-spacing: -1px; }
.donut-unit { font-size: 10.5px; color: var(--text-3); font-weight: 700; }
.donut-legend { flex: 1; display: flex; flex-direction: column; gap: 11px; min-width: 0; }
.dl-head { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; font-size: 12px; font-weight: 700; }
.dl-val { font-size: 19px; font-weight: 700; letter-spacing: -.5px; }
.dl-val span { font-size: 11.5px; color: var(--text-3); }
.split-bar { display: flex; height: 26px; border-radius: 8px; overflow: hidden; background: var(--surface-3); }
.split-bar > div { display: flex; align-items: center; padding-left: 9px; overflow: hidden; }
.split-bar span { font-size: 11px; font-weight: 700; color: #fff; white-space: nowrap; }
.hbar { display: flex; align-items: center; gap: 12px; }
.hbar-name { width: 86px; flex: none; font-size: 12px; font-weight: 700; text-align: right; }
.hbar-track { flex: 1; height: 22px; border-radius: 6px; background: var(--surface-3); overflow: hidden; }
.hbar-track > div { height: 100%; border-radius: 6px; }
.hbar-val { width: 44px; flex: none; font-size: 12.5px; font-weight: 700; }
.targets { display: grid; grid-template-columns: repeat(auto-fit, minmax(132px, 1fr)); gap: 10px; }
.target { background: var(--surface-2); border: 1px solid var(--border); border-radius: 12px; padding: 13px 15px; }
.target-val { font-size: 24px; font-weight: 700; letter-spacing: -.8px; margin-top: 5px; }
.target-val span { font-size: 13px; color: var(--text-3); }
</style>
