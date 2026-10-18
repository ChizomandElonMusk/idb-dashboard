<template>
    <div>
        <PageHeader page="control" :loading="loading" />

        <div class="ie-page">
            <div v-if="error" class="ie-error">
                <Icon name="alert" :size="16" />Couldn't load live data: {{ error }}
                <button class="ie-btn" @click="loadSummary">Retry</button>
            </div>

            <SkeletonPage v-if="loading && !loaded" />

            <div v-else class="ie-fadein">
                <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(228px, 1fr))">
                    <div class="ie-card kpi">
                        <div class="ie-kpi-head"><span class="ie-ico tone-success"><Icon name="feeder" :size="16" /></span><span class="ie-kpi-label">Online feeders</span></div>
                        <div class="ie-kpi-value"><AnimatedValue :value="fmt(feeder.online_feeders)" /></div>
                        <div class="ie-kpi-split">
                            <div><div class="ie-kpi-split-label">11 kV</div><div class="ie-kpi-split-value">{{ fmt(feeder.online_feeders_11kv) }}</div></div>
                            <div><div class="ie-kpi-split-label">33 kV</div><div class="ie-kpi-split-value">{{ fmt(feeder.online_feeders_33kv) }}</div></div>
                        </div>
                    </div>
                    <div class="ie-card kpi">
                        <div class="ie-kpi-head"><span class="ie-ico tone-primary"><Icon name="dt" :size="16" /></span><span class="ie-kpi-label">Online DTs</span></div>
                        <div class="ie-kpi-value"><AnimatedValue :value="fmt(feeder.online_dts)" /></div>
                        <div class="ie-kpi-split">
                            <div><div class="ie-kpi-split-label">Public</div><div class="ie-kpi-split-value">{{ fmt(feeder.online_dts_public) }}</div></div>
                            <div><div class="ie-kpi-split-label">Private</div><div class="ie-kpi-split-value">{{ fmt(feeder.online_dts_private) }}</div></div>
                        </div>
                    </div>
                    <div class="ie-card kpi" style="display:flex;flex-direction:column">
                        <div class="ie-kpi-head"><span class="ie-ico tone-soe"><Icon name="chat" :size="16" /></span><span class="ie-kpi-label">Customer complaints</span></div>
                        <template v-if="hasComplaints">
                            <div class="ie-kpi-value"><AnimatedValue :value="fmt(complaints.total)" /></div>
                            <div class="ie-kpi-split">
                                <div><div class="ie-kpi-split-label">Open</div><div class="ie-kpi-split-value">{{ fmt(complaints.open) }}</div></div>
                                <div><div class="ie-kpi-split-label">Closed</div><div class="ie-kpi-split-value">{{ fmt(complaints.closed) }}</div></div>
                            </div>
                        </template>
                        <div v-else class="no-feed">
                            <Icon name="noData" :size="22" style="color:var(--text-3)" />
                            <div class="no-feed-title">Feed not connected</div>
                            <div class="no-feed-sub">Complaints service returns no data<br>in this environment</div>
                        </div>
                    </div>
                    <div class="ie-card kpi">
                        <div class="ie-kpi-head" style="margin-bottom:16px"><span class="ie-ico tone-ca"><Icon name="users" :size="16" /></span><span class="ie-kpi-label">Metered customers</span></div>
                        <div v-for="m in meters" :key="m.label" style="margin-bottom:13px">
                            <div class="ie-bar-row"><span style="font-size:12px;white-space:nowrap">{{ m.label }}</span><span class="mono" style="font-size:12px;color:var(--text-2)">{{ m.value }}</span></div>
                            <div class="ie-track"><div class="ie-fill" :style="{ width: m.pct, background: m.color }"></div></div>
                        </div>
                        <div style="font-size:10.5px;color:var(--text-3);font-weight:600">Actual against target</div>
                    </div>
                </div>

                <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))">
                    <div class="ie-card wide">
                        <div class="chart-head">
                            <div><div class="ie-card-title">Energy delivered</div><div class="ie-card-sub">Monthly, MWh</div></div>
                            <div style="text-align:right">
                                <div class="mono" style="font-size:24px;font-weight:700;letter-spacing:-1px">{{ energySel.value }}</div>
                                <div style="font-size:11px;color:var(--text-3);font-weight:600">MWh · {{ energySel.label }}</div>
                            </div>
                        </div>
                        <LineChart
                            :labels="energyLabels"
                            :series="[{ name: 'Energy', values: energyValues, color: 'var(--primary)', area: true }]"
                            :height="200"
                            unit="MWh"
                            :format="fmt"
                            @pick="energyPick = $event"
                        />
                        <div class="ie-card-note"><Icon name="info" :size="14" />Hover or click a month to see its figure</div>
                    </div>
                    <div class="ie-card">
                        <div class="ie-card-title">Energy allocation by band</div>
                        <div class="ie-card-sub" style="margin-bottom:12px">Share of delivered energy</div>
                        <div style="display:flex;align-items:center;gap:18px">
                            <Donut :segments="allocation.map((a) => ({ value: a.pct, color: bandColorVar(a.band), title: 'Band ' + a.band + ' · ' + a.pct + '%' }))" :size="140" :r="54" :stroke="20" />
                            <div style="flex:1;display:flex;flex-direction:column;gap:8px;min-width:0">
                                <div v-for="a in allocation" :key="a.band" style="display:flex;align-items:center;gap:9px">
                                    <span class="ie-swatch" :style="{ background: bandColorVar(a.band) }"></span>
                                    <span style="flex:1;font-size:12.5px;font-weight:700">Band {{ a.band }}</span>
                                    <span class="mono" style="font-size:12.5px;font-weight:700;color:var(--text-2)">{{ a.pct }}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))">
                    <div class="ie-card wide">
                        <div class="chart-head" style="flex-wrap:wrap;gap:12px;margin-bottom:14px">
                            <div><div class="ie-card-title">Vending &amp; collection</div><div class="ie-card-sub">{{ vendingTab === 'Day' ? 'Daily' : vendingTab === 'Week' ? 'Weekly' : 'Monthly' }}, ₦</div></div>
                            <div class="ie-seg">
                                <button v-for="t in ['Day', 'Week', 'Month']" :key="t" :class="{ on: vendingTab === t }" @click="vendingTab = t">{{ t }}</button>
                            </div>
                        </div>
                        <div class="vend-stats">
                            <div><div class="vend-label">VENDED MTD</div><div class="mono vend-val" style="color:var(--primary-press)">{{ naira(vending.amount_vended_mtd) }}</div></div>
                            <div><div class="vend-label">COLLECTED MTD</div><div class="mono vend-val" style="color:var(--soe)">{{ naira(vending.amount_collected_mtd) }}</div></div>
                            <div class="vend-sep"><div class="vend-label">CUSTOMERS VENDED TODAY</div><div class="mono vend-val">{{ fmt(vending.customer_vended_today) }}</div></div>
                            <div><div class="vend-label">COLLECTED TODAY</div><div class="mono vend-val" style="color:var(--success)">{{ naira(vending.total_collection_today) }}</div></div>
                        </div>
                        <LineChart
                            :labels="vendingPoints.map((p) => p.label)"
                            :series="[
                                { name: 'Vended', values: vendingPoints.map((p) => p.vended), color: 'var(--primary)' },
                                { name: 'Collected', values: vendingPoints.map((p) => p.collected), color: 'var(--soe)' }
                            ]"
                            :height="180"
                            :dots="vendingPoints.length <= 6"
                            :format="(v) => '₦' + fmt(v)"
                            :max-x-labels="8"
                        />
                        <div class="ie-legend" style="margin-top:8px">
                            <span><span class="ie-swatch" style="width:14px;height:3px;border-radius:2px;background:var(--primary)"></span>Vended</span>
                            <span><span class="ie-swatch" style="width:14px;height:3px;border-radius:2px;background:var(--soe)"></span>Collected</span>
                            <span style="margin-left:auto;color:var(--text-3);font-weight:600">Vended today {{ naira(vending.amount_vended_today) }}</span>
                        </div>
                    </div>
                    <div class="ie-card">
                        <div style="display:flex;align-items:baseline;justify-content:space-between">
                            <div class="ie-card-title">Feeders by band</div>
                            <span class="mono" style="font-size:13px;font-weight:700;color:var(--text-2)">{{ fmt(feedersByBand.total) }}</span>
                        </div>
                        <div class="ie-card-sub" style="margin-bottom:16px">Distribution across service bands</div>
                        <div style="display:flex;flex-direction:column;gap:13px">
                            <div v-for="f in feederBands" :key="f.band">
                                <div class="ie-bar-row" style="font-size:12.5px">
                                    <span>Band {{ f.band }} <span v-if="f.hours" style="font-size:11px;color:var(--text-3);font-weight:600">· {{ f.hours }}h target</span></span>
                                    <span class="mono">{{ fmt(f.count) }}</span>
                                </div>
                                <div class="ie-track" style="height:8px"><div class="ie-fill" :style="{ width: f.pct, background: bandColorVar(f.band) }"></div></div>
                            </div>
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
import SkeletonPage from '~/components/ui/SkeletonPage.vue'
import Donut from '~/components/ui/Donut.vue'
import LineChart from '~/components/ui/LineChart.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import { getControlCenterSummary, formatNumber, monthLabel, aggregateDailyTrend } from '~/js_modules/controlCenterApi'
import { bandColorVar } from '~/js_modules/pages'
// Wired to GET /api/v1/control-center/summary (see static/api_live_responses3.md #3). That
// endpoint takes no query params and always returns the latest snapshot, so there's nothing
// to filter on this screen.

const BAND_HOURS = { A: 20, B: 16, C: 12, D: 8, E: 4 }

// customers.metered_*_target can't be assumed non-zero; a zero/blank target would
// otherwise divide-by-zero into a NaN width on the progress bar.
function pctString(actual, target) {
    const a = Number(actual)
    const t = Number(target)
    if (!Number.isFinite(a) || !Number.isFinite(t) || t <= 0) return '0%'
    return `${Math.min(100, (a / t) * 100).toFixed(2)}%`
}

export default {
    layout: 'dashboard',
    components: { Icon, PageHeader, SkeletonPage, Donut, LineChart, AnimatedValue },
    data() {
        return {
            loading: true,
            loaded: false,
            error: null,
            feeder: {},
            complaints: {},
            customers: {},
            energy: {},
            allocation: [],
            vending: {},
            feedersByBand: {},
            energyPick: null,
            // vending_collection.trend is real daily data, so Day/Week/Month are client-side
            // aggregations of it — this endpoint has no period param.
            vendingTab: 'Day'
        }
    },
    computed: {
        hasComplaints() {
            const c = this.complaints
            return c.total != null || c.open != null || c.closed != null
        },
        meters() {
            const c = this.customers
            return [
                { label: 'Metered NMD', value: `${formatNumber(c.metered_nmd_actual)} / ${formatNumber(c.metered_nmd_target)}`, pct: pctString(c.metered_nmd_actual, c.metered_nmd_target), color: 'var(--ca)' },
                { label: 'Metered MD', value: `${formatNumber(c.metered_md_actual)} / ${formatNumber(c.metered_md_target)}`, pct: pctString(c.metered_md_actual, c.metered_md_target), color: 'var(--soe)' }
            ]
        },
        energyTrend() {
            return this.energy.trend || []
        },
        energyLabels() {
            return this.energyTrend.map((t) => monthLabel(t.date))
        },
        energyValues() {
            return this.energyTrend.map((t) => t.mwh)
        },
        energySel() {
            const i = this.energyPick
            if (i !== null && this.energyTrend[i]) {
                return { value: formatNumber(this.energyTrend[i].mwh), label: this.energyLabels[i] }
            }
            return { value: formatNumber(this.energy.total_mwh), label: 'total' }
        },
        vendingPoints() {
            return aggregateDailyTrend(this.vending.trend || [], this.vendingTab, ['vended', 'collected'])
        },
        feederBands() {
            const breakdown = this.feedersByBand.breakdown || []
            const max = Math.max(1, ...breakdown.map((b) => Number(b.count) || 0))
            return breakdown.map((b) => ({ ...b, hours: BAND_HOURS[b.band], pct: ((Number(b.count) || 0) / max * 100).toFixed(1) + '%' }))
        }
    },
    async mounted() {
        await this.loadSummary()
    },
    methods: {
        fmt: formatNumber,
        bandColorVar,
        naira(v) {
            const n = Number(v)
            if (v === null || v === undefined || !Number.isFinite(n)) return '—'
            if (n >= 1e9) return '₦' + (n / 1e9).toFixed(2) + 'bn'
            if (n >= 1e6) return '₦' + (n / 1e6).toFixed(1) + 'm'
            if (n >= 1e3) return '₦' + (n / 1e3).toFixed(0) + 'k'
            return '₦' + formatNumber(n)
        },
        async loadSummary() {
            this.loading = true
            this.error = null
            try {
                const data = await getControlCenterSummary()
                this.feeder = data.feederDTinfo || {}
                // total/open/closed have no source system and are always null per the API doc.
                this.complaints = data.customercomplaints || {}
                this.customers = data.customers || {}
                this.energy = data.energy || {}
                this.allocation = data.energy_allocation_by_band || []
                this.vending = data.vending_collection || {}
                this.feedersByBand = data.feeders_by_band || {}
                this.loaded = true
            } catch (err) {
                this.error = err.message || 'Failed to load Control Center summary'
            } finally {
                this.loading = false
            }
        }
    }
}
</script>

<style scoped>
.kpi { padding: 18px 20px; border-radius: 16px; }
.no-feed { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; padding: 14px 0 6px; }
.no-feed-title { font-size: 12.5px; font-weight: 700; color: var(--text-2); }
.no-feed-sub { font-size: 11px; color: var(--text-3); text-align: center; line-height: 1.4; }
.chart-head { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 6px; }
.vend-stats { display: flex; gap: 18px; flex-wrap: wrap; margin-bottom: 14px; }
.vend-label { font-size: 10.5px; color: var(--text-3); font-weight: 700; letter-spacing: .04em; }
.vend-val { font-size: 17px; font-weight: 700; }
.vend-sep { border-left: 1px solid var(--border); padding-left: 18px; }
@media (min-width: 1100px) {
    .wide { grid-column: span 2; }
}
</style>
