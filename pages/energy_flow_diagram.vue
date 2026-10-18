<template>
    <div>
        <PageHeader page="flow" :loading="loading">
            <FilterSelect v-model="dtType" label="DT type" icon="dt" :options="['All', 'Public', 'Private']" @change="fetchFlow" />
        </PageHeader>

        <div class="ie-page">
            <div v-if="error" class="ie-error">
                <Icon name="alert" :size="16" />Couldn't load live data: {{ error }}
                <button class="ie-btn" @click="fetchFlow">Retry</button>
            </div>

            <SkeletonPage v-if="loading && !flowData" />

            <div v-else class="flow-layout ie-fadein">
                <div class="ie-card ie-card--flush flow-main">
                    <div class="ie-card-head">
                        <div>
                            <div class="ie-card-title" style="font-size:15.5px">Single-line diagram</div>
                            <div class="ie-card-sub">Pick an asset at any level to follow its energy down the network</div>
                        </div>
                        <button v-if="hasSelection" class="ie-btn" @click="resetFlow"><Icon name="x" :size="15" />Clear selections</button>
                    </div>
                    <div class="sld">
                        <div class="pt-circuit ie-layer" style="color:var(--text-3);opacity:.05"></div>
                        <div v-for="(n, i) in nodes" :key="n.key" class="sld-step">
                            <div class="sld-node" :class="{ picked: !String(n.selected).startsWith('All'), open: openStage === i }">
                                <span class="ie-ico ie-ico--lg" :class="'tone-' + n.tone"><Icon :name="n.icon" :size="20" /></span>
                                <div style="min-width:0">
                                    <div class="sld-level">
                                        <span>{{ n.label }}</span>
                                        <span class="sld-count mono">{{ n.count }}</span>
                                    </div>
                                    <div style="margin-top:5px">
                                        <FilterSelect
                                            compact block
                                            :value="n.selected"
                                            :options="n.options"
                                            :searchable="true"
                                            pop-width="280px"
                                            @change="(v) => pick(i, v)"
                                        />
                                    </div>
                                </div>
                                <div class="sld-energy">
                                    <div class="mono sld-energy-val" :class="{ updating: n.key === 'dts' && dtLoading }">{{ fmt(n.energy) }}</div>
                                    <div class="sld-energy-unit">MWh in</div>
                                </div>
                            </div>
                            <div class="sld-bus">
                                <div class="ie-bus" :style="{ width: n.busW, backgroundColor: n.busColor }"></div>
                                <span class="sld-arrow" :style="{ borderTopColor: n.busColor }"></span>
                                <button
                                    v-if="n.lossMwh > 0"
                                    class="sld-loss"
                                    :class="'sld-loss--' + n.lossTone"
                                    title="See this step's loss breakdown"
                                    @click="openStage = openStage === i ? null : i"
                                >
                                    <Icon name="loss" :size="14" />−{{ fmt(n.lossMwh) }} MWh · {{ n.lossPct.toFixed(1) }}%
                                </button>
                                <span v-else class="sld-pass">pass-through · not metered</span>
                            </div>
                        </div>
                        <div class="sld-cust">
                            <div class="pt-circuit ie-layer" style="color:var(--primary);opacity:.1"></div>
                            <span class="sld-cust-ico"><Icon name="users" :size="20" /></span>
                            <div style="min-width:0">
                                <div class="sld-cust-label">Customers</div>
                                <div class="sld-cust-sub ie-ellip">{{ custSub }}</div>
                            </div>
                            <div style="text-align:right">
                                <div class="mono sld-cust-val">{{ fmt(cust.total_customers) }}</div>
                                <div class="sld-cust-unit">customers</div>
                            </div>
                        </div>
                        <div class="sld-note"><Icon name="info" :size="14" />Only TS, transformer, 33 kV feeder and DT picks refine the figures — the API has no filter for the levels in between.</div>
                    </div>
                </div>

                <div class="flow-side">
                    <div class="ie-card side-card">
                        <div class="side-label">Injected at transmission</div>
                        <div class="mono side-val">{{ fmt(injected) }}</div>
                        <div class="side-unit">MWh</div>
                    </div>
                    <div class="ie-card ie-card--danger side-card">
                        <div class="ie-diag ie-layer" style="color:var(--danger);opacity:.06"></div>
                        <div class="side-label">Lost across the chain</div>
                        <div class="mono side-val" style="color:var(--danger)">{{ fmt(chainLoss) }}</div>
                        <div class="side-unit">MWh · {{ pctText(chainLossPct) }} of injected</div>
                    </div>
                    <div class="ie-hero side-card" style="padding:16px 18px">
                        <div style="font-size:11.5px;font-weight:800">Reached customers</div>
                        <div class="mono side-val">{{ fmt(cust.total_energy_mwh) }}</div>
                        <div style="font-size:11.5px;font-weight:700;opacity:.8">MWh · {{ pctText(efficiency) }} end-to-end</div>
                    </div>

                    <div v-if="stage" class="ie-card side-card ie-fadeup">
                        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
                            <div>
                                <div class="stage-kicker">{{ stage.from }} → {{ stage.to }}</div>
                                <div class="stage-title">Step loss</div>
                            </div>
                            <button class="ie-icon-btn" style="width:28px;height:28px" aria-label="Close" @click="openStage = null"><Icon name="x" :size="15" /></button>
                        </div>
                        <div class="stage-share">{{ pctText(stage.share) }} of everything lost between transmission and customer</div>
                        <div class="stage-row"><span>Energy in</span><b class="mono">{{ fmt(stage.energy) }} MWh</b></div>
                        <div class="stage-row"><span>Passed on</span><b class="mono">{{ fmt(stage.out) }} MWh</b></div>
                        <div class="stage-row"><span>Lost</span><b class="mono" style="color:var(--danger)">{{ fmt(stage.lossMwh) }} MWh</b></div>
                        <div class="ie-bar-row" style="margin-top:12px"><span style="color:var(--text-3)">Loss rate</span><span style="color:var(--danger)">{{ stage.lossPct.toFixed(2) }}%</span></div>
                        <div class="ie-track"><div class="ie-fill" :style="{ width: Math.min(100, stage.lossPct) + '%', background: 'var(--danger)' }"></div></div>
                    </div>
                    <div v-else class="stage-hint">
                        <Icon name="loss" :size="14" style="color:var(--danger);margin-top:1px" />
                        Click a red loss marker on the diagram to see that step's breakdown.
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
import SkeletonPage from '~/components/ui/SkeletonPage.vue'
import tsTree from '~/assets/data/ts_relationship.json'
import { LEVEL_RESPONSE_KEYS, LEVEL_COUNT_KEYS, FILTERABLE_LEVEL_COUNT } from '~/assets/js/energyFlowSim'
import { getEnergyFlow, getDtAvailabilityTable, formatNumber } from '~/js_modules/controlCenterApi'
// The TS -> Customer chain as a vertical single-line diagram. Each level's dropdown is
// narrowed by the picks above it using the static TS relationship tree
// (assets/data/ts_relationship.json). Numbers come from GET /energy-flow (see
// static/api_live_responses3.md #2) — only ts / transformer / feeder_33kva / dt / dt_type
// are real API filters, so picks at ISS..11kV Outgoing only narrow the dropdowns below.

const LEVELS = [
    { label: 'Transmission stations', icon: 'tower', tone: 'soe', unit: 'stations' },
    { label: 'Transformer capacity', icon: 'cap', tone: 'primary', unit: 'transformers' },
    { label: '33 kV feeders', icon: 'feeder', tone: 'ca', unit: 'feeders' },
    { label: 'Injection substations', icon: 'station', tone: 'accent', unit: 'substations' },
    { label: 'Secondary transformers', icon: 'cap', tone: 'primary', unit: 'transformers' },
    { label: '11 kV incomers', icon: 'plug', tone: 'soe', unit: 'incomers' },
    { label: '11 kV outgoing feeders', icon: 'feeder', tone: 'ca', unit: 'feeders' }
]
const SHORT = ['TS', 'Transformer', '33 kV', 'ISS', 'Transformer 2', 'Incomer', '11 kV', 'DT', 'Customer']

export default {
    layout: 'dashboard',
    components: { Icon, PageHeader, FilterSelect, SkeletonPage },
    data() {
        return {
            loading: true,
            error: null,
            flowData: null,
            dtFlowData: null,
            dtLoading: false,
            dtType: 'All',
            // One pick per tree level (TS .. 11kV Outgoing), plus the DT pick.
            picks: LEVELS.map(() => 'All'),
            dtPick: 'All DTs',
            openStage: null,
            // Real DT names, built once on demand from dt-availability/table (no endpoint lists
            // DT names directly; that table's dt_name/feeder_name pairs are the closest source).
            dtNameIndex: null,
            dtNamesFetchStarted: false
        }
    },
    computed: {
        data() {
            return this.dtFlowData || this.flowData || {}
        },
        // Tree nodes reachable at each depth given the picks above it.
        levelNodes() {
            const out = []
            let frontier = [tsTree]
            for (let i = 0; i < LEVELS.length; i++) {
                out.push(frontier)
                const pick = this.picks[i]
                const next = []
                frontier.forEach((n) => {
                    Object.keys(n).forEach((k) => {
                        if (pick === 'All' || pick === k) next.push(n[k])
                    })
                })
                frontier = next
            }
            return out
        },
        nodes() {
            const d = this.data
            const injected = this.injected || 0
            const list = LEVELS.map((lv, i) => {
                const sec = d[LEVEL_RESPONSE_KEYS[i]] || {}
                const opts = new Set()
                this.levelNodes[i].forEach((n) => Object.keys(n).forEach((k) => opts.add(k)))
                return this.decorate({
                    key: LEVEL_RESPONSE_KEYS[i],
                    ...lv,
                    count: formatNumber(sec[LEVEL_COUNT_KEYS[i]]) + ' ' + lv.unit,
                    options: ['All', ...Array.from(opts).sort()],
                    selected: this.picks[i],
                    sec
                }, injected)
            })
            const dts = d.dts || {}
            const pub = dts.total_public_dts || 0
            const priv = dts.total_private_dts || 0
            list.push(this.decorate({
                key: 'dts',
                label: 'Distribution transformers',
                icon: 'dt',
                tone: 'info',
                count: `${formatNumber(pub + priv)} · ${formatNumber(pub)} public / ${formatNumber(priv)} private`,
                options: ['All DTs', ...this.dtOptions],
                selected: this.dtPick,
                sec: dts
            }, injected))
            return list
        },
        dtOptions() {
            if (!this.dtNameIndex) return []
            const feeder = this.picks[LEVELS.length - 1]
            if (feeder !== 'All' && this.dtNameIndex.byFeeder.has(feeder)) {
                return Array.from(this.dtNameIndex.byFeeder.get(feeder)).sort()
            }
            return this.dtNameIndex.all
        },
        cust() {
            return this.data.customer || {}
        },
        custSub() {
            if (this.dtPick !== 'All DTs') return 'Served by ' + this.dtPick
            const last = [...this.picks].reverse().find((p) => p !== 'All')
            return last ? 'Downstream of ' + last : 'Across the whole network'
        },
        injected() {
            const ts = this.data.ts || {}
            return Number(ts.total_energy_mwh) || 0
        },
        chainLoss() {
            const out = Number(this.cust.total_energy_mwh)
            return this.injected && Number.isFinite(out) ? this.injected - out : null
        },
        chainLossPct() {
            return this.injected && this.chainLoss != null ? this.chainLoss / this.injected * 100 : null
        },
        efficiency() {
            const out = Number(this.cust.total_energy_mwh)
            return this.injected && Number.isFinite(out) ? out / this.injected * 100 : null
        },
        stage() {
            if (this.openStage === null) return null
            const n = this.nodes[this.openStage]
            if (!n || !(n.lossMwh > 0)) return null
            return {
                ...n,
                from: SHORT[this.openStage],
                to: SHORT[this.openStage + 1],
                share: this.chainLoss ? n.lossMwh / this.chainLoss * 100 : null
            }
        },
        hasSelection() {
            return this.picks.some((p) => p !== 'All') || this.dtPick !== 'All DTs'
        }
    },
    async mounted() {
        await this.fetchFlow()
        this.ensureDtNames()
    },
    methods: {
        fmt(v) {
            if (v === null || v === undefined || !Number.isFinite(Number(v))) return '—'
            return Number(v).toLocaleString('en-US', { maximumFractionDigits: 2 })
        },
        pctText(v) {
            return v == null || !Number.isFinite(v) ? '—' : v.toFixed(1) + '%'
        },
        decorate(n, injected) {
            const sec = n.sec || {}
            const energy = Number(sec.total_energy_mwh)
            const out = Number(sec.transmission_mwh)
            const lossMwh = Number(sec.loss_mwh) || 0
            const lossPct = Number(sec.loss_pct) || 0
            const ratio = injected && Number.isFinite(out) ? Math.max(0, Math.min(1, out / injected)) : 1
            return {
                ...n,
                energy: Number.isFinite(energy) ? energy : null,
                out: Number.isFinite(out) ? out : null,
                lossMwh,
                lossPct,
                lossTone: lossPct >= 15 ? 'danger' : 'warning',
                busW: (6 + ratio * 28).toFixed(1) + 'px',
                busColor: lossMwh > 0 ? 'color-mix(in srgb, var(--primary) 70%, var(--danger))' : 'var(--primary)'
            }
        },
        pick(level, value) {
            this.openStage = null
            if (level === LEVELS.length) {
                this.dtPick = value
                this.fetchDtFlow()
                return
            }
            const picks = this.picks.slice()
            picks[level] = value
            for (let i = level + 1; i < picks.length; i++) picks[i] = 'All'
            this.picks = picks
            this.dtPick = 'All DTs'
            this.dtFlowData = null
            if (level < FILTERABLE_LEVEL_COUNT) this.fetchFlow()
        },
        async fetchFlow() {
            this.loading = true
            this.error = null
            try {
                this.flowData = await getEnergyFlow({
                    ts: this.picks[0],
                    transformer: this.picks[1],
                    feeder_33kva: this.picks[2],
                    dt: 'All',
                    dt_type: this.dtType
                })
                if (this.dtPick !== 'All DTs') await this.fetchDtFlow()
            } catch (err) {
                this.error = err.message || 'Failed to load energy flow data'
            } finally {
                this.loading = false
            }
        },
        async fetchDtFlow() {
            if (this.dtPick === 'All DTs') {
                this.dtFlowData = null
                return
            }
            this.dtLoading = true
            try {
                this.dtFlowData = await getEnergyFlow({
                    ts: this.picks[0],
                    transformer: this.picks[1],
                    feeder_33kva: this.picks[2],
                    dt: this.dtPick,
                    dt_type: this.dtType
                })
            } catch (err) {
                // Non-critical — falls back to the dt=All aggregate.
                console.error('[energy_flow_diagram] failed to load DT-specific energy flow', err)
                this.dtFlowData = null
            } finally {
                this.dtLoading = false
            }
        },
        resetFlow() {
            this.picks = LEVELS.map(() => 'All')
            this.dtPick = 'All DTs'
            this.dtFlowData = null
            this.openStage = null
            this.fetchFlow()
        },
        // Fetches every page of dt-availability/table once (it has no feeder filter) and
        // indexes dt_name by feeder_name, so the DT dropdown can list real names.
        async ensureDtNames() {
            if (this.dtNamesFetchStarted) return
            this.dtNamesFetchStarted = true
            const pageSize = 200
            const byFeeder = new Map()
            const all = new Set()
            const addRows = (rows) => {
                (rows || []).forEach((r) => {
                    if (!r.dt_name) return
                    all.add(r.dt_name)
                    if (r.feeder_name) {
                        if (!byFeeder.has(r.feeder_name)) byFeeder.set(r.feeder_name, new Set())
                        byFeeder.get(r.feeder_name).add(r.dt_name)
                    }
                })
            }
            try {
                const first = await getDtAvailabilityTable({ dt_name: 'All', page: 1, page_size: pageSize })
                addRows(first.data)
                const totalPages = Math.min(first.total_pages || 1, 50)
                const rest = await Promise.all(
                    Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) =>
                        getDtAvailabilityTable({ dt_name: 'All', page: i + 2, page_size: pageSize })
                    )
                )
                rest.forEach((r) => addRows(r.data))
                this.dtNameIndex = { byFeeder, all: Array.from(all).sort() }
            } catch (err) {
                // Non-critical — the DT dropdown just offers "All DTs" if this fails.
                console.error('[energy_flow_diagram] failed to build DT name index', err)
                this.dtNamesFetchStarted = false
            }
        }
    }
}
</script>

<style scoped>
.flow-layout { display: grid; grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr); gap: 16px; align-items: start; }
.flow-main { min-width: 0; }

.sld { position: relative; padding: 24px 20px 28px; display: flex; flex-direction: column; align-items: center; }
.sld-step { position: relative; z-index: 1; width: 100%; max-width: 600px; display: flex; flex-direction: column; align-items: center; }
.sld-step:hover, .sld-step:focus-within { z-index: 20; }
.sld-node {
    position: relative; width: 100%; display: grid; grid-template-columns: 44px minmax(0, 1fr) auto; gap: 14px; align-items: center;
    background: var(--surface); border: 1.5px solid var(--border); border-radius: 14px; padding: 12px 14px; box-shadow: var(--shadow-xs);
}
.sld-node.picked { border-color: var(--primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 14%, transparent); }
.sld-node.open { border-color: var(--danger); }
.sld-level { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.sld-level > span:first-child { font-size: 10px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--text-3); }
.sld-count { font-size: 10.5px; font-weight: 700; color: var(--text-2); background: var(--surface-3); border-radius: 5px; padding: 1px 6px; }
.sld-energy { text-align: right; }
.sld-energy-val { font-size: 17px; font-weight: 700; letter-spacing: -.4px; transition: opacity .2s; }
.sld-energy-val.updating { opacity: .4; }
.sld-energy-unit { font-size: 10.5px; color: var(--text-3); font-weight: 700; }
.sld-bus { position: relative; height: 58px; width: 100%; display: flex; justify-content: center; }
.sld-bus .ie-bus { border-radius: 3px; transition: width .4s; }
.sld-arrow { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 7px solid transparent; border-right: 7px solid transparent; border-top: 8px solid; }
.sld-loss {
    position: absolute; left: calc(50% + 24px); top: 50%; transform: translateY(-50%); display: flex; align-items: center; gap: 7px;
    border-radius: 999px; padding: 5px 12px; font-size: 11.5px; font-weight: 800; cursor: pointer; white-space: nowrap; box-shadow: var(--shadow-xs); border: 1.5px solid;
}
.sld-loss--danger { background: var(--danger-soft); border-color: color-mix(in srgb, var(--danger) 40%, transparent); color: var(--danger); }
.sld-loss--warning { background: var(--warning-soft); border-color: color-mix(in srgb, var(--warning) 40%, transparent); color: var(--warning); }
.sld-pass { position: absolute; left: calc(50% + 24px); top: 50%; transform: translateY(-50%); font-size: 11px; font-weight: 600; color: var(--text-3); white-space: nowrap; }
.sld-cust {
    position: relative; overflow: hidden; width: 100%; max-width: 600px; border-radius: 14px; background: linear-gradient(145deg, #1F1C17 0%, #12100D 100%);
    color: #F5F3EF; padding: 16px 18px; display: grid; grid-template-columns: 44px minmax(0, 1fr) auto; gap: 14px; align-items: center; box-shadow: var(--shadow-md);
}
.sld-cust > :not(.ie-layer) { position: relative; }
.sld-cust-ico { width: 44px; height: 44px; border-radius: 12px; background: var(--primary); color: var(--on-primary); display: flex; align-items: center; justify-content: center; }
.sld-cust-label { font-size: 10px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: rgba(255,255,255,.55); }
.sld-cust-sub { font-size: 12.5px; font-weight: 600; color: rgba(255,255,255,.75); margin-top: 3px; }
.sld-cust-val { font-size: 24px; font-weight: 700; letter-spacing: -.8px; color: var(--primary); }
.sld-cust-unit { font-size: 10.5px; color: rgba(255,255,255,.55); font-weight: 700; }
.sld-note { position: relative; max-width: 600px; width: 100%; display: flex; align-items: center; gap: 8px; margin-top: 14px; font-size: 11.5px; color: var(--text-3); font-weight: 600; }

.flow-side { position: sticky; top: 78px; display: flex; flex-direction: column; gap: 12px; min-width: 0; }
.side-card { padding: 16px 18px; border-radius: 16px; }
.side-label { font-size: 11.5px; font-weight: 700; color: var(--text-2); }
.side-val { font-size: 26px; font-weight: 700; letter-spacing: -1px; margin-top: 6px; }
.side-unit { font-size: 11.5px; color: var(--text-3); font-weight: 600; }
.stage-kicker { font-size: 10.5px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--danger); }
.stage-title { font-size: 14px; font-weight: 800; letter-spacing: -.2px; margin-top: 3px; }
.stage-share { font-size: 11px; color: var(--text-3); font-weight: 600; margin: 4px 0 8px; }
.stage-row { display: flex; justify-content: space-between; gap: 10px; padding: 9px 0; border-bottom: 1.5px dotted var(--border-strong); font-size: 12px; font-weight: 700; }
.stage-row span { color: var(--text-2); }
.stage-hint { display: flex; gap: 10px; align-items: flex-start; background: var(--surface-2); border: 1px dashed var(--border-strong); border-radius: 14px; padding: 14px 16px; font-size: 12px; color: var(--text-2); font-weight: 600; line-height: 1.5; }

@media (max-width: 1000px) {
    .flow-layout { grid-template-columns: 1fr; }
    .flow-side { position: static; }
}
@media (max-width: 640px) {
    .sld { padding: 18px 12px; }
    .sld-node { grid-template-columns: 1fr; }
    .sld-node .ie-ico { display: none; }
    .sld-energy { text-align: left; }
    .sld-loss, .sld-pass { left: auto; right: 0; font-size: 10.5px; }
}
</style>
