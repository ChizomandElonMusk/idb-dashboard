<template>
    <div>
        <PageHeader page="dt" :loading="dashboardLoading || tableLoading">
            <FilterSelect
                :value="dtName"
                label="Transformer"
                icon="dt"
                :options="dtOptions"
                :searchable="true"
                pop-width="400px"
                @change="selectDt"
            />
            <div class="ie-seg period-seg">
                <button v-for="t in ['Day', 'Week', 'Month']" :key="t" :class="{ on: trendTab === t }" @click="setTrendTab(t)">{{ t }}</button>
            </div>
            <FilterDate type="date" label="Readings date" :value="tableDate" :max="maxDate" @change="onTableDateChange" />
        </PageHeader>

        <div class="ie-page">
            <div v-if="dashboardError" class="ie-error">
                <Icon name="alert" :size="16" />Couldn't load DT dashboard: {{ dashboardError }}
                <button class="ie-btn" @click="loadDashboard">Retry</button>
            </div>

            <div class="ie-card sel-card">
                <div class="pt-circuit ie-layer" style="color:var(--soe);opacity:.07"></div>
                <div class="sel-row">
                    <span class="ie-ico tone-soe" style="width:38px;height:38px;border-radius:10px"><Icon name="dt" :size="16" /></span>
                    <div style="flex:1;min-width:220px">
                        <div class="sel-kicker">Selected transformer</div>
                        <div class="sel-name">{{ dtName === 'All' ? 'All transformers' : dtName }}</div>
                    </div>
                    <div style="display:flex;align-items:center;gap:9px;flex-wrap:wrap">
                        <span v-if="dtMeta.feeder" class="sel-chip">Feeder · {{ dtMeta.feeder }}</span>
                        <span v-if="dtMeta.band" class="sel-band" :style="{ background: bandSoftVar(dtMeta.band), color: bandColorVar(dtMeta.band) }">Band {{ dtMeta.band }}<template v-if="dash.dt && dash.dt.target_hours != null"> · {{ fmt(dash.dt.target_hours) }}h target</template></span>
                    </div>
                </div>
            </div>

            <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(266px, 1fr))">
                <div v-for="g in gauges" :key="g.title" class="ie-card gauge-card" :class="{ 'is-loading': dashboardLoading }">
                    <div class="ie-card-title" style="font-size:14.5px;align-self:flex-start">{{ g.title }}</div>
                    <div class="ie-card-sub" style="align-self:flex-start">{{ g.sub }}</div>
                    <Gauge :pct="g.pct" :color="g.color" :width="210" style="margin-top:10px">
                        <span class="mono" style="font-size:30px;font-weight:700;letter-spacing:-1.2px" :style="{ color: g.color }">{{ g.pctLabel }}</span>
                        <span style="font-size:11px;color:var(--text-3);font-weight:700">of target</span>
                    </Gauge>
                    <div class="ie-kpi-split" style="width:100%;text-align:center">
                        <div><div class="mono" style="font-size:17px;font-weight:700">{{ g.actual }}h</div><div class="ie-kpi-split-label">ACTUAL</div></div>
                        <div><div class="mono" style="font-size:17px;font-weight:700">{{ g.target }}h</div><div class="ie-kpi-split-label">TARGET</div></div>
                    </div>
                    <div class="gauge-badge" :style="{ background: g.badgeSoft, color: g.badgeColor }">
                        <Icon :name="g.ok ? 'check' : 'alert'" :size="15" />{{ g.status }}
                    </div>
                </div>

                <div class="ie-card">
                    <div class="ie-card-title" style="font-size:14.5px">Availability trend</div>
                    <div class="ie-card-sub" style="margin-bottom:10px">Average daily hours vs target · by {{ trendTab.toLowerCase() }}</div>
                    <BarChart
                        v-if="trendBars.length"
                        :bars="trendBars"
                        :height="200"
                        :target="trendTarget"
                        :target-label="trendTarget != null ? 'Target ' + fmt(trendTarget) + 'h' : ''"
                        unit="hrs"
                        max-bar="56px"
                    />
                    <div v-else class="ie-empty">No trend data for this selection.</div>
                </div>
            </div>

            <div class="ie-card ie-card--flush">
                <div class="ie-card-head">
                    <div>
                        <div class="ie-card-title">Transformer readings</div>
                        <div class="ie-card-sub">{{ fmt(tableTotal) }} records{{ tableDate ? ' for ' + tableDateLabel : ' · latest complete day' }}</div>
                    </div>
                    <div class="ie-search" style="min-width:250px">
                        <Icon name="search" :size="16" />
                        <input v-model="tableQuery" placeholder="Filter this page by DT or feeder…" />
                    </div>
                </div>
                <div v-if="tableError" class="ie-error" style="margin:14px 20px 0">
                    <Icon name="alert" :size="16" />Couldn't load DT table: {{ tableError }}
                </div>
                <div class="ie-table-scroll">
                    <div style="min-width:820px">
                        <div class="ie-thead cols">
                            <div>Transformer</div><div>Feeder</div><div>Band</div><div class="ie-right">Consumption (kWh)</div><div class="ie-right">Availability (hrs)</div><div class="ie-right">Status</div>
                        </div>
                        <div
                            v-for="(r, i) in visibleRows"
                            :key="i + r.dt_name"
                            class="ie-trow ie-trow--click cols"
                            :style="{ background: r.dt_name === dtName ? 'var(--primary-soft)' : '' }"
                            @click="selectDt(r.dt_name)"
                        >
                            <div class="ie-ellip" style="font-weight:600" :title="r.dt_name">{{ r.dt_name }}</div>
                            <div class="ie-ellip" style="font-size:12px;color:var(--text-2)" :title="r.feeder_name">{{ r.feeder_name }}</div>
                            <div><span class="ie-band" :style="{ background: bandSoftVar(r.band), color: bandColorVar(r.band) }">{{ r.band || '—' }}</span></div>
                            <div class="ie-right mono" style="font-weight:600">{{ fmt(r.consumption_kwh) }}</div>
                            <div class="ie-right avail-cell">
                                <div class="ie-track" style="width:56px;height:6px"><div style="height:100%;border-radius:999px" :style="{ width: r.availPct, background: r.color }"></div></div>
                                <span class="mono" style="font-weight:700;min-width:34px" :style="{ color: r.color }">{{ fmt(r.dt_actual_availability_hrs) }}</span>
                            </div>
                            <div class="ie-right">
                                <span class="ie-pill" :style="{ background: r.soft, color: r.color }"><span class="ie-pill-dot"></span>{{ r.status }}</span>
                            </div>
                        </div>
                        <div v-if="!tableLoading && !visibleRows.length" class="ie-empty">{{ tableQuery ? 'No rows on this page match “' + tableQuery + '”.' : 'No rows for this date.' }}</div>
                    </div>
                </div>
                <div class="ie-table-foot">
                    <span>{{ tableTotalPages ? 'Page ' + tablePage + ' of ' + fmt(tableTotalPages) + ' · showing ' + rows.length + ' records' : '' }}</span>
                    <div style="display:flex;gap:7px">
                        <button class="ie-btn" :disabled="tablePage <= 1 || tableLoading" @click="goToPage(-1)"><Icon name="arrowL" :size="14" />Previous</button>
                        <button class="ie-btn" :disabled="(tableTotalPages > 0 && tablePage >= tableTotalPages) || tableLoading" @click="goToPage(1)">Next<Icon name="arrowR" :size="14" /></button>
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
import Gauge from '~/components/ui/Gauge.vue'
import BarChart from '~/components/ui/BarChart.vue'
import { getDtAvailabilityDashboard, getDtAvailabilityTable, formatNumber, pick, todayStr } from '~/js_modules/controlCenterApi'
import { bandColorVar, bandSoftVar } from '~/js_modules/pages'
// Wired to two endpoints (see static/api_live_responses3.md #5 and #6):
//   - GET /dt-availability/dashboard?dt_name=...&period=Day|Week|Month  (gauges + trend)
//   - GET /dt-availability/table?dt_name=All&date=...&page=...&page_size=...  (readings)
// "All" loads the dashboard by default; if the API rejects it the error banner says so and
// the user can pick a real DT name (from the combobox or by clicking a table row).

const TABLE_PAGE_SIZE = 20
const BAND_TARGET = { A: 20, B: 16, C: 12, D: 8, E: 4 }
const MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function tone(rate) {
    if (rate >= 100) return { color: 'var(--success)', soft: 'var(--success-soft)' }
    if (rate >= 60) return { color: 'var(--warning)', soft: 'var(--warning-soft)' }
    return { color: 'var(--danger)', soft: 'var(--danger-soft)' }
}

export default {
    layout: 'dashboard',
    components: { Icon, PageHeader, FilterSelect, FilterDate, Gauge, BarChart },
    data() {
        return {
            dtName: 'All',
            dashboardLoading: false,
            dashboardError: null,
            trendTab: 'Month',
            dash: {},
            // Accumulates names (and their feeder/band) from every table fetch so the
            // transformer picker offers more than the 20 rows on screen. There's no endpoint
            // that lists every DT, so this is never exhaustive.
            knownDts: {},

            // Left unset so the request omits `date` and the server resolves its own latest
            // complete day — day-level readings lag by more than a day.
            tableDate: '',
            maxDate: todayStr(),
            tablePage: 1,
            tableTotal: 0,
            tableTotalPages: 0,
            tableLoading: false,
            tableError: null,
            tableQuery: '',
            rawRows: []
        }
    },
    computed: {
        dtOptions() {
            return [{ value: 'All', label: 'All transformers' }, ...Object.keys(this.knownDts).sort()]
        },
        dtMeta() {
            return this.knownDts[this.dtName] || {}
        },
        gauges() {
            const mk = (title, sub, s) => {
                s = s || {}
                const rate = Number(s.availability_rate_pct)
                const t = tone(Number.isFinite(rate) ? rate : 0)
                const status = s.status || '—'
                return {
                    title,
                    sub,
                    pct: Number.isFinite(rate) ? rate : 0,
                    pctLabel: Number.isFinite(rate) ? rate.toFixed(1) + '%' : '—',
                    actual: formatNumber(s.actual_hours),
                    target: formatNumber(s.target_hours),
                    color: t.color,
                    status,
                    ok: /met|exceed/i.test(status) && !/not/i.test(status),
                    badgeColor: t.color,
                    badgeSoft: t.soft
                }
            }
            return [
                mk('Transformer availability', 'Supply hours at the DT', this.dash.dt),
                mk('Feeder availability', 'Supply hours on the parent feeder', this.dash.feeder)
            ]
        },
        trend() {
            return this.dash.trend || []
        },
        trendTarget() {
            const t = this.trend.find((p) => p.avg_target != null)
            return t ? Number(t.avg_target) : null
        },
        trendBars() {
            // The doc only shows a Month-period sample keyed "month" — probe likely alternates.
            const labelOf = (t) => String(pick(t, ['month', 'week', 'day', 'date', 'label'], ''))
            return this.trend.map((t) => {
                const v = Number(t.avg_availability)
                const met = t.avg_target != null && v >= Number(t.avg_target)
                return {
                    label: labelOf(t),
                    value: Number.isFinite(v) ? v : 0,
                    color: met ? 'var(--success)' : 'var(--soe)',
                    tip2: t.avg_target != null ? 'Target ' + formatNumber(t.avg_target) + ' hrs' : ''
                }
            })
        },
        rows() {
            return this.rawRows.map((r) => {
                const target = BAND_TARGET[r.band]
                const hrs = Number(r.dt_actual_availability_hrs)
                const ratio = target && Number.isFinite(hrs) ? hrs / target * 100 : null
                const t = ratio == null ? { color: 'var(--text-3)', soft: 'var(--surface-3)' } : tone(ratio)
                return {
                    ...r,
                    availPct: ratio == null ? '0%' : Math.min(100, ratio).toFixed(0) + '%',
                    color: t.color,
                    soft: t.soft,
                    status: ratio == null ? 'No target' : ratio >= 100 ? 'Met' : 'Not met'
                }
            })
        },
        visibleRows() {
            const q = this.tableQuery.trim().toLowerCase()
            if (!q) return this.rows
            return this.rows.filter((r) => (r.dt_name || '').toLowerCase().includes(q) || (r.feeder_name || '').toLowerCase().includes(q))
        },
        tableDateLabel() {
            const [y, m, d] = (this.tableDate || '').split('-').map(Number)
            return y ? `${String(d).padStart(2, '0')} ${MN[m - 1]} ${y}` : ''
        }
    },
    async mounted() {
        const fromQuery = this.$route.query.dt
        if (fromQuery) this.dtName = String(fromQuery)
        await Promise.all([this.loadTable(), this.seedDtNameOptions(), this.loadDashboard()])
    },
    methods: {
        fmt: formatNumber,
        bandColorVar,
        bandSoftVar,
        async seedDtNameOptions() {
            try {
                const data = await getDtAvailabilityTable({ dt_name: 'All', date: this.tableDate, page: 1, page_size: 100 })
                this.mergeKnownDts(data.data || [])
            } catch (err) {
                // Non-critical — the picker just falls back to whatever loadTable() finds.
                console.error('[dt_availability] failed to seed DT name options', err)
            }
        },
        mergeKnownDts(rows) {
            const next = { ...this.knownDts }
            rows.forEach((r) => {
                if (r.dt_name && !next[r.dt_name]) next[r.dt_name] = { feeder: r.feeder_name, band: r.band }
            })
            this.knownDts = next
        },
        selectDt(name) {
            if (!name || name === this.dtName) return
            this.dtName = name
            this.loadDashboard()
        },
        setTrendTab(tab) {
            if (tab === this.trendTab) return
            this.trendTab = tab
            this.loadDashboard()
        },
        async loadDashboard() {
            this.dashboardLoading = true
            this.dashboardError = null
            try {
                this.dash = await getDtAvailabilityDashboard({ dt_name: this.dtName, period: this.trendTab })
            } catch (err) {
                this.dashboardError = err.message || 'Failed to load DT dashboard'
                this.dash = {}
            } finally {
                this.dashboardLoading = false
            }
        },
        onTableDateChange(value) {
            this.tableDate = value
            this.tablePage = 1
            this.loadTable()
        },
        goToPage(delta) {
            const next = this.tablePage + delta
            if (next < 1) return
            if (this.tableTotalPages && next > this.tableTotalPages) return
            this.tablePage = next
            this.loadTable()
        },
        async loadTable() {
            this.tableLoading = true
            this.tableError = null
            try {
                const data = await getDtAvailabilityTable({
                    dt_name: 'All',
                    date: this.tableDate,
                    page: this.tablePage,
                    page_size: TABLE_PAGE_SIZE
                })
                this.tableTotal = data.total || 0
                this.tableTotalPages = data.total_pages || 0
                this.rawRows = data.data || []
                this.mergeKnownDts(this.rawRows)
            } catch (err) {
                this.tableError = err.message || 'Failed to load DT availability table'
            } finally {
                this.tableLoading = false
            }
        }
    }
}
</script>

<style scoped>
.period-seg { height: 38px; align-items: center; }
.period-seg button { padding: 7px 13px; }
.sel-card { padding: 18px 20px; margin-bottom: 14px; }
.sel-row { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
.sel-kicker { font-size: 10.5px; font-weight: 700; letter-spacing: .06em; color: var(--text-3); text-transform: uppercase; }
.sel-name { font-size: 15px; font-weight: 800; letter-spacing: -.3px; margin-top: 2px; word-break: break-word; }
.sel-chip { background: var(--surface-2); border: 1px solid var(--border); border-radius: 8px; padding: 6px 11px; font-size: 11.5px; font-weight: 700; color: var(--text-2); }
.sel-band { border-radius: 8px; padding: 6px 11px; font-size: 11.5px; font-weight: 800; }
.gauge-card { display: flex; flex-direction: column; align-items: center; transition: opacity .2s; }
.gauge-card.is-loading { opacity: .55; }
.gauge-badge { margin-top: 12px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 7px; border-radius: 9px; padding: 8px; font-size: 12.5px; font-weight: 800; }
.cols { grid-template-columns: 2.2fr 1.5fr 60px 1fr 1.1fr 104px; }
.avail-cell { display: flex; align-items: center; justify-content: flex-end; gap: 9px; }
</style>
