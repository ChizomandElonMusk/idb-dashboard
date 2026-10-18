<template>
    <div>
        <PageHeader page="myto" :loading="loading">
            <FilterSelect v-model="selectedFeederBand" label="Feeder band" icon="feeder" :options="bandOptions" @change="loadSummary" />
        </PageHeader>

        <div class="ie-page">
            <div v-if="error" class="ie-error">
                <Icon name="alert" :size="16" />Couldn't load live data: {{ error }}
                <button class="ie-btn" @click="loadSummary">Retry</button>
            </div>

            <SkeletonPage v-if="loading && !loaded" />

            <div v-else class="ie-fadein">
                <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(290px, 1fr))">
                    <div class="ie-hero">
                        <div class="ie-hero-kicker">Total consumption</div>
                        <div class="ie-hero-value"><AnimatedValue :value="fmt(summary.total_consumption_mwh)" /></div>
                        <div class="ie-hero-unit">MWh · {{ summary.period || '—' }}</div>
                        <div v-if="changeText" style="display:flex;align-items:center;gap:8px;margin-top:16px">
                            <span class="ie-hero-trend"><Icon :name="changeUp ? 'trendUp' : 'trendDown'" :size="13" />{{ changeText }}</span>
                            <span style="font-size:11.5px;font-weight:600;opacity:.75">vs previous month</span>
                        </div>
                    </div>

                    <div class="ie-card">
                        <div class="ie-card-title" style="font-size:14.5px">Energy by band</div>
                        <div class="ie-card-sub" style="margin-bottom:10px">MWh consumed per feeder band</div>
                        <div style="display:flex;align-items:center;gap:16px">
                            <Donut :segments="perBand.map((b) => ({ value: b.mwh, color: bandColorVar(b.band), title: 'Band ' + b.band }))" :size="118" :r="54" :stroke="20" />
                            <div style="flex:1;display:flex;flex-direction:column;gap:7px;min-width:0">
                                <div v-for="b in perBand" :key="b.band" style="display:flex;align-items:center;gap:8px">
                                    <span class="ie-swatch" :style="{ background: bandColorVar(b.band) }"></span>
                                    <span style="flex:1;font-size:12px;font-weight:700">Band {{ b.band }}</span>
                                    <span class="mono" style="font-size:12px;font-weight:600;color:var(--text-2)">{{ fmt(Math.round(b.mwh)) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ie-card" style="display:flex;flex-direction:column;align-items:center">
                        <div class="ie-card-title" style="font-size:14.5px;align-self:flex-start">Feeder communication</div>
                        <div class="ie-card-sub" style="align-self:flex-start">Feeders reporting readings</div>
                        <Gauge :pct="commPct" :color="commColor" :width="196" style="margin-top:8px">
                            <span class="mono" style="font-size:28px;font-weight:600" :style="{ color: commColor }">{{ commPct.toFixed(0) }}%</span>
                        </Gauge>
                        <div v-if="commPct < 60" class="ie-note" style="margin-top:10px;width:100%">
                            <Icon name="info" :size="14" style="color:var(--warning)" />Most feeders aren't reporting, so band shares may shift as data lands.
                        </div>
                    </div>
                </div>

                <div class="ie-card" style="padding:20px 22px;margin-bottom:14px">
                    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:14px;flex-wrap:wrap;margin-bottom:6px">
                        <div>
                            <div class="ie-card-title">Band compliance against NERC target</div>
                            <div class="ie-card-sub">Each band's share of total consumption, against the share NERC expects</div>
                        </div>
                        <div class="ie-legend">
                            <span><span class="ie-swatch" style="width:16px;background:var(--primary)"></span>Actual share</span>
                            <span><span class="ie-swatch" style="width:3px;height:14px;border-radius:2px;background:var(--text)"></span>NERC target</span>
                        </div>
                    </div>
                    <div v-for="b in compliance" :key="b.band" class="comp-row" :style="{ opacity: b.dim ? .4 : 1 }">
                        <div style="display:flex;align-items:center;gap:10px">
                            <span class="comp-band" :style="{ background: bandSoftVar(b.band), color: bandColorVar(b.band) }">{{ b.band }}</span>
                            <div><div style="font-size:13px;font-weight:800">Band {{ b.band }}</div><div style="font-size:11px;color:var(--text-3);font-weight:600">{{ b.hours }}h daily supply</div></div>
                        </div>
                        <div class="comp-track">
                            <div class="ie-grow comp-fill" :style="{ width: b.actualW, background: bandColorVar(b.band) }"></div>
                            <div class="comp-target" :style="{ left: b.targetL }" :title="'NERC target ' + b.nerc_target_pct + '%'"></div>
                        </div>
                        <div style="text-align:right">
                            <div class="mono" style="font-size:16px;font-weight:600">{{ b.actual_pct }}%</div>
                            <div style="font-size:11px;color:var(--text-3);font-weight:600">target {{ b.nerc_target_pct }}%</div>
                        </div>
                        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
                            <span class="ie-pill" :style="{ background: b.soft, color: b.color }"><Icon :name="b.ok ? 'check' : 'alert'" :size="13" />{{ b.status }}</span>
                            <span class="mono" style="font-size:11px;font-weight:600" :style="{ color: b.color }">{{ b.delta }} pts</span>
                        </div>
                    </div>
                    <div class="comp-row comp-axis">
                        <div></div>
                        <div class="mono comp-ticks"><span v-for="t in ticks" :key="t">{{ t }}%</span></div>
                    </div>
                </div>

                <div class="ie-card" style="padding:20px 22px">
                    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:14px;flex-wrap:wrap;margin-bottom:12px">
                        <div>
                            <div class="ie-card-title">Energy consumption trend</div>
                            <div class="ie-card-sub">{{ trendSub }}</div>
                        </div>
                        <div class="ie-seg">
                            <button v-for="t in ['Day', 'Week', 'Month']" :key="t" :class="{ on: trendTab === t }" @click="trendTab = t">{{ t }}</button>
                        </div>
                    </div>
                    <BarChart
                        v-if="trendBars.length"
                        :bars="trendBars"
                        :height="260"
                        unit="MWh"
                        :value-labels="trendBars.length <= 12"
                        :gap="trendBars.length > 20 ? '4px' : '10px'"
                        :max-bar="trendTab === 'Month' ? '120px' : '64px'"
                        :max-x-labels="10"
                        :format="fmt"
                    />
                    <div v-else class="ie-empty">No consumption trend for this selection.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'
import PageHeader from '~/components/ui/PageHeader.vue'
import FilterSelect from '~/components/ui/FilterSelect.vue'
import SkeletonPage from '~/components/ui/SkeletonPage.vue'
import Donut from '~/components/ui/Donut.vue'
import Gauge from '~/components/ui/Gauge.vue'
import BarChart from '~/components/ui/BarChart.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import { getMytoSummary, formatNumber, FEEDER_BANDS, aggregateDailyTrend } from '~/js_modules/controlCenterApi'
import { bandColorVar, bandSoftVar } from '~/js_modules/pages'
// Wired to GET /api/v1/myto/summary (see static/api_live_responses3.md #7). feeder_band is a
// confirmed filter, so changing it refetches. The Day/Week/Month trend tabs do NOT refetch —
// the doc only confirms period=Month, so we always fetch the Month response (daily
// energy_trend for the month) and aggregate Day/Week/Month client-side.

const BAND_HOURS = { A: 20, B: 16, C: 12, D: 8, E: 4 }

export default {
    layout: 'dashboard',
    components: { Icon, PageHeader, FilterSelect, SkeletonPage, Donut, Gauge, BarChart, AnimatedValue },
    data() {
        return {
            loading: true,
            loaded: false,
            error: null,
            selectedFeederBand: 'All',
            bandOptions: FEEDER_BANDS.map((b) => ({ value: b, label: b === 'All' ? 'All bands' : 'Band ' + b })),
            trendTab: 'Day',
            summary: {}
        }
    },
    computed: {
        changeText() {
            const p = this.summary.period_vs_prev_pct
            if (p === null || p === undefined) return null
            return `${p >= 0 ? '+' : ''}${p}%`
        },
        changeUp() {
            return (this.summary.period_vs_prev_pct ?? 0) >= 0
        },
        perBand() {
            return this.summary.energy_per_feeder_mwh || []
        },
        commPct() {
            const p = Number((this.summary.feeder_communication_status || {}).communicating_pct)
            return Number.isFinite(p) ? p : 0
        },
        commColor() {
            return this.commPct >= 80 ? 'var(--success)' : this.commPct >= 50 ? 'var(--warning)' : 'var(--danger)'
        },
        scaleMax() {
            const vals = (this.summary.band_compliance || []).flatMap((b) => [Number(b.actual_pct) || 0, Number(b.nerc_target_pct) || 0])
            const m = vals.length ? Math.max(...vals) : 60
            return Math.max(10, Math.ceil(m / 10) * 10)
        },
        ticks() {
            const step = this.scaleMax <= 60 ? 10 : 20
            const out = []
            for (let t = 0; t <= this.scaleMax; t += step) out.push(t)
            return out
        },
        compliance() {
            const sel = this.selectedFeederBand
            return (this.summary.band_compliance || []).map((b) => {
                const exceeded = b.status === 'Exceeded'
                const met = b.status === 'Met'
                const tone = exceeded ? 'success' : met ? 'primary' : 'danger'
                const delta = (Number(b.actual_pct) || 0) - (Number(b.nerc_target_pct) || 0)
                return {
                    ...b,
                    hours: BAND_HOURS[b.band],
                    ok: exceeded || met,
                    color: tone === 'primary' ? 'var(--primary-press)' : `var(--${tone})`,
                    soft: `var(--${tone}-soft)`,
                    delta: (delta >= 0 ? '+' : '') + delta.toFixed(2),
                    actualW: Math.min(100, (Number(b.actual_pct) || 0) / this.scaleMax * 100).toFixed(2) + '%',
                    targetL: Math.min(100, (Number(b.nerc_target_pct) || 0) / this.scaleMax * 100).toFixed(2) + '%',
                    dim: sel !== 'All' && sel !== b.band
                }
            })
        },
        trendPoints() {
            return aggregateDailyTrend(this.summary.energy_trend || [], this.trendTab, ['mwh'])
        },
        trendBars() {
            return this.trendPoints.map((p) => ({ label: p.label, value: p.mwh, color: 'var(--primary)', short: compact(p.mwh) }))
        },
        trendSub() {
            const unit = { Day: 'Daily', Week: 'Weekly', Month: 'Monthly' }[this.trendTab]
            return `${unit} MWh · ${this.summary.period || ''}`
        }
    },
    async mounted() {
        await this.loadSummary()
    },
    methods: {
        fmt: formatNumber,
        bandColorVar,
        bandSoftVar,
        async loadSummary() {
            this.loading = true
            this.error = null
            try {
                this.summary = await getMytoSummary({ feeder_band: this.selectedFeederBand, period: 'Month' })
                this.loaded = true
            } catch (err) {
                this.error = err.message || 'Failed to load MYTO summary'
            } finally {
                this.loading = false
            }
        }
    }
}

function compact(v) {
    const n = Number(v) || 0
    if (n >= 1e6) return (n / 1e6).toFixed(1) + 'm'
    if (n >= 1e3) return (n / 1e3).toFixed(n >= 1e4 ? 0 : 1) + 'k'
    return Math.round(n).toString()
}
</script>

<style scoped>
.comp-row { display: grid; grid-template-columns: 128px minmax(0, 1fr) 110px 120px; gap: 18px; align-items: center; padding: 14px 0; border-bottom: 1.5px dotted var(--border-strong); transition: opacity .2s; }
.comp-axis { border-bottom: none; padding: 8px 0 0; }
.comp-band { width: 32px; height: 32px; border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; flex: none; }
.comp-track { position: relative; height: 24px; background: var(--surface-3); border-radius: 7px; }
.comp-fill { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 7px; }
.comp-target { position: absolute; top: -6px; bottom: -6px; width: 3px; margin-left: -1.5px; background: var(--text); border-radius: 2px; }
.comp-ticks { display: flex; justify-content: space-between; font-size: 10px; font-weight: 600; color: var(--text-3); }
@media (max-width: 760px) {
    .comp-row { grid-template-columns: 1fr; gap: 10px; }
    .comp-row > div:nth-child(3), .comp-row > div:nth-child(4) { text-align: left; align-items: flex-start; }
    .comp-axis { display: none; }
}
</style>
