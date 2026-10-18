<template>
    <div>
        <PageHeader page="idb" :loading="loading || feederLossLoading || customerLossLoading">
            <FilterSelect
                v-model="selectedFeeder"
                label="Feeder"
                icon="feeder"
                :options="[{ value: 'All', label: 'All IDB feeders' }, ...knownFeeders]"
                :searchable="true"
                pop-width="340px"
                @change="onFilterChange"
            />
            <FilterDate type="month" label="Month" :value="selectedDate" :max="maxMonth" @change="onDateChange" />
        </PageHeader>

        <div class="ie-page">
            <div class="ie-tabs" role="tablist">
                <button v-for="t in tabs" :key="t.key" role="tab" :aria-selected="tab === t.key" :class="{ on: tab === t.key }" @click="tab = t.key">
                    <Icon :name="t.icon" :size="15" />{{ t.label }}
                </button>
            </div>

            <template v-if="tab === 'dash'">
                <div v-if="error" class="ie-error">
                    <Icon name="alert" :size="16" />Couldn't load IDB dashboard: {{ error }}
                    <button class="ie-btn" @click="loadDashboard">Retry</button>
                </div>

                <SkeletonPage v-if="loading && !loaded" />

                <div v-else class="ie-fadein">
                    <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(230px, 1fr))">
                        <div class="ie-hero" style="padding:20px 22px">
                            <div class="ie-hero-kicker">Total energy</div>
                            <div class="ie-hero-value" style="font-size:36px;margin-top:12px"><AnimatedValue :value="fmt(kpis.total_energy_mwh)" /></div>
                            <div class="ie-hero-unit">MWh · {{ dash.period || '—' }}</div>
                        </div>
                        <div class="ie-card" style="padding:20px 22px">
                            <div class="ie-kpi-head"><span class="ie-ico tone-soe"><Icon name="feeder" :size="16" /></span><span class="ie-kpi-label">Feeders monitored</span></div>
                            <div class="ie-kpi-value" style="font-weight:600"><AnimatedValue :value="fmt(kpis.total_feeders)" /></div>
                            <div class="ie-kpi-unit" style="font-size:11.5px;margin-top:4px">IDB feeders</div>
                        </div>
                        <div class="ie-card ie-card--accent" style="padding:20px 22px">
                            <div class="ie-diag ie-layer" style="color:var(--accent);opacity:.06"></div>
                            <div class="ie-kpi-head"><span class="ie-ico tone-accent"><Icon name="alert" :size="16" /></span><span class="ie-kpi-label">Flagged IDB meters</span></div>
                            <div class="ie-kpi-value" style="font-weight:600;color:var(--accent)"><AnimatedValue :value="fmt(kpis.total_flagged_idb_meters)" /></div>
                            <nuxt-link to="/idb_events" class="review-link">Review in IDB Events<Icon name="arrowR" :size="14" /></nuxt-link>
                        </div>
                        <div class="ie-card" style="padding:20px 22px">
                            <div class="ie-kpi-head"><span class="ie-ico tone-primary"><Icon name="dt" :size="16" /></span><span class="ie-kpi-label">Total DTs</span></div>
                            <div class="ie-kpi-value" style="font-weight:600"><AnimatedValue :value="fmt(dtSummary.total_dts)" /></div>
                            <div class="split-mini">
                                <div class="ie-grow" :style="{ width: share(dtSummary.public_dts, dtSummary.total_dts), background: 'var(--soe)' }"></div>
                                <div class="ie-grow" :style="{ width: share(dtSummary.private_dts, dtSummary.total_dts), background: 'var(--primary)' }"></div>
                            </div>
                            <div class="ie-legend" style="margin-top:8px;gap:12px">
                                <span><span class="ie-swatch" style="width:7px;height:7px;border-radius:2px;background:var(--soe)"></span>{{ fmt(dtSummary.public_dts) }} public</span>
                                <span><span class="ie-swatch" style="width:7px;height:7px;border-radius:2px;background:var(--primary)"></span>{{ fmt(dtSummary.private_dts) }} private</span>
                            </div>
                        </div>
                    </div>

                    <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(340px, 1fr))">
                        <div class="ie-card" style="padding:20px 22px">
                            <div class="ie-card-title">Loss along the chain</div>
                            <div style="height:18px"></div>
                            <div v-for="l in losses" :key="l.label" style="margin-bottom:18px">
                                <div style="display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:7px">
                                    <span style="font-size:13px;font-weight:700">{{ l.label }}</span>
                                    <span style="display:flex;align-items:baseline;gap:10px">
                                        <span class="mono" style="font-size:12.5px;font-weight:600;color:var(--text-2)">{{ fmt(l.mwh) }} MWh</span>
                                        <span class="mono" style="font-size:18px;font-weight:600;color:var(--danger)">{{ pctText(l.pct) }}</span>
                                    </span>
                                </div>
                                <div class="ie-track" style="height:10px"><div class="ie-fill" :style="{ width: clampW(l.pct), background: 'var(--danger)' }"></div></div>
                            </div>
                            <div class="ie-card-note" style="margin-top:0"><Icon name="info" :size="14" />Only about a third of IDB DTs carry a reading, so loss reflects metering coverage as much as real loss.</div>
                        </div>
                        <div class="ie-card" style="padding:20px 22px">
                            <div class="ie-card-title">Commercial efficiency</div>
                            <div class="ie-card-sub" style="margin-bottom:18px">ATC&amp;C = 1 − (billing × collection)</div>
                            <div v-for="e in efficiency" :key="e.label" class="eff-row">
                                <div style="font-size:12.5px;font-weight:700">{{ e.label }}<span v-if="e.derived" class="derived">derived</span></div>
                                <div class="ie-track" style="height:10px"><div class="ie-fill" :style="{ width: clampW(e.value), background: e.color }"></div></div>
                                <div class="mono" style="text-align:right;font-size:15px;font-weight:600" :style="{ color: e.color }">{{ pctText(e.value) }}</div>
                            </div>
                            <div class="ie-card-note" style="margin-top:4px"><Icon name="info" :size="14" />Billing efficiency can exceed 100% where DT metering is incomplete.</div>
                        </div>
                    </div>

                    <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))">
                        <div class="ie-card">
                            <div class="ie-card-title" style="font-size:14px;margin-bottom:12px">Customers</div>
                            <div style="display:flex;align-items:center;gap:14px">
                                <Donut :segments="customerSegments" :size="104" :r="54" :stroke="18">
                                    <span class="mono" style="font-size:16px;font-weight:600">{{ fmt(customers.total) }}</span>
                                </Donut>
                                <div style="display:flex;flex-direction:column;gap:10px">
                                    <div v-for="c in customerLegend" :key="c.label">
                                        <div class="leg-head"><span class="ie-swatch" style="width:8px;height:8px;border-radius:2px" :style="{ background: c.color }"></span>{{ c.label }}</div>
                                        <div class="mono leg-val">{{ c.value }} <span>{{ c.pct }}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ie-card">
                            <div class="ie-card-title" style="font-size:14px;margin-bottom:14px">Revenue</div>
                            <div v-for="r in revenueRows" :key="r.label" style="margin-bottom:12px">
                                <div class="ie-bar-row"><span style="font-size:12px;color:var(--text-2)">{{ r.label }}</span><span class="mono" style="font-size:15px;font-weight:600">{{ r.value }}</span></div>
                                <div class="ie-track" style="height:8px"><div class="ie-fill" :style="{ width: r.w, background: r.color }"></div></div>
                            </div>
                            <div v-if="collRatio" style="font-size:11px;color:var(--text-3);font-weight:600;line-height:1.4">Collected is {{ collRatio }} of billed — payments include arrears.</div>
                        </div>
                        <div class="ie-card">
                            <div class="ie-card-title" style="font-size:14px;margin-bottom:14px">Energy by customer type</div>
                            <div class="split-big">
                                <div class="ie-grow" :style="{ width: clampW(energy.nmd_energy_pct), background: 'var(--ca)' }"></div>
                                <div class="ie-grow" :style="{ width: clampW(energy.md_energy_pct), background: 'var(--soe)' }"></div>
                            </div>
                            <div style="display:flex;justify-content:space-between;gap:10px;margin-top:12px">
                                <div>
                                    <div class="leg-head"><span class="ie-swatch" style="width:8px;height:8px;border-radius:2px;background:var(--ca)"></span>NMD</div>
                                    <div class="mono leg-val">{{ fmt(nmdMwh) }} <span>MWh</span></div>
                                    <div style="font-size:11px;color:var(--text-3);font-weight:600">{{ pctText(energy.nmd_energy_pct) }}</div>
                                </div>
                                <div style="text-align:right">
                                    <div class="leg-head" style="justify-content:flex-end"><span class="ie-swatch" style="width:8px;height:8px;border-radius:2px;background:var(--soe)"></span>MD</div>
                                    <div class="mono leg-val">{{ fmt(energy.md_energy_mwh) }} <span>MWh</span></div>
                                    <div style="font-size:11px;color:var(--text-3);font-weight:600">{{ pctText(energy.md_energy_pct) }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="ie-card" style="display:flex;flex-direction:column;align-items:center">
                            <div class="ie-card-title" style="font-size:14px;align-self:flex-start">Meter communication</div>
                            <Gauge :pct="commPct" :color="commColor" :width="176" style="margin-top:10px">
                                <span class="mono" style="font-size:24px;font-weight:600" :style="{ color: commColor }">{{ commPct.toFixed(1) }}%</span>
                            </Gauge>
                            <div style="font-size:11px;color:var(--text-3);font-weight:600;margin-top:8px">of meters communicating</div>
                        </div>
                    </div>
                </div>
            </template>

            <DataTable
                v-else-if="tab === 'feeder'"
                class="ie-fadein"
                title="Feeder → DT loss"
                :sub="feederLossTotal ? fmt(feederLossTotal) + ' feeder-months' + (dash.period ? ' · ' + dash.period : '') : ''"
                note="About a third of IDB DTs carry a reading — loss % reflects metering coverage."
                :columns="feederLossColumns"
                :groups="feederLossGroups"
                :rows="feederLossRows"
                :loading="feederLossLoading"
                :error="feederLossError ? 'Couldn\'t load Feeder to DT loss table: ' + feederLossError : ''"
                min-width="1480px"
                searchable
                search-placeholder="Filter by feeder…"
                :footer="pageLabel(feederLossPage, feederLossTotalPages, feederLossTotal)"
                :page="feederLossPage"
                :pages="feederLossTotalPages"
                @page="goToFeederLossPage"
            />

            <DataTable
                v-else
                class="ie-fadein"
                title="Customer → DT loss"
                :sub="customerLossTotal ? fmt(customerLossTotal) + ' feeders' + (dash.period ? ' · ' + dash.period : '') : ''"
                note="Postpaid MD consumption reads 0 until that month's schedule posts."
                :columns="customerLossColumns"
                :groups="customerLossGroups"
                :rows="customerLossRows"
                :loading="customerLossLoading"
                :error="customerLossError ? 'Couldn\'t load Customer to DT loss table: ' + customerLossError : ''"
                min-width="2000px"
                searchable
                search-placeholder="Filter by feeder…"
                :footer="pageLabel(customerLossPage, customerLossTotalPages, customerLossTotal)"
                :page="customerLossPage"
                :pages="customerLossTotalPages"
                @page="goToCustomerLossPage"
            />
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
import Gauge from '~/components/ui/Gauge.vue'
import DataTable from '~/components/ui/DataTable.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import { getIdbDashboard, getIdbFeederDtLoss, getIdbCustomerDtLoss, formatNumber, currentMonthStr } from '~/js_modules/controlCenterApi'
// Wired to three endpoints sharing one filter row (see static/api_live_responses3.md #8–#10):
//   - Dashboard tab: GET /idb/dashboard?feeder=...&date=YYYY-MM
//   - Feeder → DT loss tab: GET /idb/feeder-dt-loss?feeder=...&date=YYYY-MM&page=...&page_size=...
//   - Customer → DT loss tab: GET /idb/customer-dt-loss?feeder=...&date=YYYY-MM&page=...&page_size=...
// Changing feeder/date refetches all three together since the filters aren't per-tab.

const IDB_PAGE_SIZE = 50

function num(v) {
    const n = Number(v)
    return v === null || v === undefined || !Number.isFinite(n) ? null : n
}
function pct(v) {
    const n = num(v)
    return n === null ? '—' : n.toFixed(2) + '%'
}
function lossTone(v) {
    const n = num(v)
    if (n === null) return 'var(--text-3)'
    return n >= 40 ? 'var(--danger)' : n >= 15 ? 'var(--warning)' : 'var(--success)'
}

export default {
    layout: 'dashboard',
    components: { Icon, PageHeader, FilterSelect, FilterDate, SkeletonPage, Donut, Gauge, DataTable, AnimatedValue },
    data() {
        return {
            tab: 'dash',
            tabs: [
                { key: 'dash', label: 'Dashboard', icon: 'gauge' },
                { key: 'feeder', label: 'Feeder → DT loss', icon: 'table' },
                { key: 'customer', label: 'Customer → DT loss', icon: 'table' }
            ],
            selectedFeeder: 'All',
            selectedDate: '',
            maxMonth: currentMonthStr(),
            knownFeeders: [],

            loading: true,
            loaded: false,
            error: null,
            dash: {},

            feederLossLoading: false,
            feederLossError: null,
            feederLossPage: 1,
            feederLossTotal: 0,
            feederLossTotalPages: 0,
            feederLossRows: [],

            customerLossLoading: false,
            customerLossError: null,
            customerLossPage: 1,
            customerLossTotal: 0,
            customerLossTotalPages: 0,
            customerLossRows: [],

            feederLossGroups: [
                { label: 'Feeder', span: 3 },
                { label: 'Public DTs', span: 2, color: 'var(--soe)' },
                { label: 'Private DTs', span: 2, color: 'var(--primary-press)' },
                { label: 'Energy · kWh', span: 2 },
                { label: 'Loss', span: 2, color: 'var(--danger)' }
            ],
            feederLossColumns: [
                { key: 'feeder', label: 'Feeder', width: 'minmax(240px, 2.4fr)' },
                { key: 'date', label: 'Month', width: '90px', mono: true },
                { key: 'band', label: 'Band', width: '64px', type: 'band' },
                { key: 'total_public_dts', label: 'Count', width: '80px', align: 'right', mono: true, format: formatNumber },
                { key: 'public_dts_energy_kwh', label: 'Energy', width: 'minmax(132px, 1fr)', align: 'right', mono: true, format: formatNumber },
                { key: 'total_private_dts', label: 'Count', width: '80px', align: 'right', mono: true, format: formatNumber },
                { key: 'private_dts_energy_kwh', label: 'Energy', width: 'minmax(132px, 1fr)', align: 'right', mono: true, format: formatNumber },
                { key: 'total_dt_energy_kwh', label: 'At DTs', width: 'minmax(132px, 1fr)', align: 'right', mono: true, format: formatNumber },
                { key: 'feeder_energy_kwh', label: 'At feeder', width: 'minmax(132px, 1fr)', align: 'right', mono: true, format: formatNumber },
                { key: 'feeder_to_dt_loss_kwh', label: 'kWh', width: 'minmax(132px, 1fr)', align: 'right', mono: true, weight: 700, format: formatNumber, color: () => 'var(--danger)' },
                { key: 'feeder_loss_pct', label: 'Loss %', width: '150px', align: 'right', mono: true, weight: 700, type: 'bar', format: pct, color: lossTone }
            ],
            customerLossGroups: [
                { label: 'Feeder', span: 1 },
                { label: 'Customers', span: 4, color: 'var(--ca)' },
                { label: 'Communication', span: 2, color: 'var(--info)' },
                { label: 'Consumption · MWh', span: 5, color: 'var(--primary-press)' },
                { label: 'Efficiency', span: 3, color: 'var(--soe)' },
                { label: 'Customer → DT loss', span: 2, color: 'var(--danger)' }
            ],
            customerLossColumns: [
                { key: 'feeder', label: 'Feeder', width: 'minmax(240px, 2.4fr)' },
                { key: 'all_customers', label: 'All', width: '84px', align: 'right', mono: true, format: formatNumber },
                { key: 'postpaid_md', label: 'Postpaid MD', width: '96px', align: 'right', mono: true, format: formatNumber },
                { key: 'prepaid_md', label: 'Prepaid MD', width: '92px', align: 'right', mono: true, format: formatNumber },
                { key: 'idb_prepay', label: 'IDB prepay', width: '92px', align: 'right', mono: true, format: formatNumber },
                { key: 'comms_pct', label: 'Comms', width: '80px', align: 'right', mono: true, format: pct },
                { key: 'total_meters_communicating', label: 'Meters', width: '76px', align: 'right', mono: true, format: formatNumber },
                { key: 'dt_consumption_mwh', label: 'DT', width: 'minmax(132px, 1fr)', align: 'right', mono: true, format: formatNumber },
                { key: 'idb_prepay_consumption_mwh', label: 'IDB prepay', width: 'minmax(132px, 1fr)', align: 'right', mono: true, format: formatNumber },
                { key: 'md_prepay_consumption_mwh', label: 'MD prepay', width: 'minmax(132px, 1fr)', align: 'right', mono: true, format: formatNumber },
                { key: 'postpaid_md_consumption_mwh', label: 'Postpaid', width: 'minmax(132px, 1fr)', align: 'right', mono: true, format: formatNumber },
                { key: 'idb_md_consumption_mwh', label: 'IDB + MD', width: 'minmax(132px, 1fr)', align: 'right', mono: true, weight: 700, format: formatNumber },
                { key: 'collection_efficiency_pct', label: 'CE', width: '84px', align: 'right', mono: true, format: pct },
                { key: 'billing_efficiency_pct', label: 'BE', width: '84px', align: 'right', mono: true, format: pct, color: (v) => (num(v) > 100 ? 'var(--warning)' : '') },
                { key: 'atc_and_c_pct', label: 'ATC&C', width: '84px', align: 'right', mono: true, weight: 700, format: pct, color: (v) => (num(v) < 0 ? 'var(--warning)' : lossTone(v)) },
                { key: 'customer_to_dt_loss_mwh', label: 'MWh', width: 'minmax(132px, 1fr)', align: 'right', mono: true, weight: 700, format: formatNumber, color: () => 'var(--danger)' },
                { key: 'customer_to_dt_loss_pct', label: 'Loss %', width: '150px', align: 'right', mono: true, weight: 700, type: 'bar', format: pct, color: lossTone }
            ]
        }
    },
    computed: {
        kpis() {
            return this.dash.kpis || {}
        },
        dtSummary() {
            return this.dash.dt_summary || {}
        },
        customers() {
            return this.dash.customers || {}
        },
        energy() {
            return this.dash.energy_breakdown || {}
        },
        // The API reports NMD energy in kWh and MD in MWh (doc #8) — normalise to MWh.
        nmdMwh() {
            const k = num(this.energy.nmd_energy_kwh)
            return k === null ? null : Math.round(k / 10) / 100
        },
        losses() {
            const l = this.dash.loss_metrics || {}
            return [
                { label: 'Feeder → DT', mwh: l.feeder_to_dt_loss_mwh, pct: num(l.feeder_to_dt_loss_pct) },
                { label: 'DT → customer', mwh: l.customer_to_dt_loss_mwh, pct: num(l.customer_to_dt_loss_pct) }
            ]
        },
        efficiency() {
            const e = this.dash.efficiency || {}
            const be = num(e.billing_efficiency_pct)
            const atc = num(e.atc_and_c_pct)
            // Collection efficiency isn't returned at dashboard level; it follows from the
            // ATC&C identity shown in the card subtitle.
            const ce = be && atc !== null ? (1 - atc / 100) / (be / 100) * 100 : null
            return [
                { label: 'Billing efficiency', value: be, color: 'var(--soe)' },
                { label: 'Collection efficiency', value: ce, color: 'var(--success)', derived: true },
                { label: 'ATC&C loss', value: atc, color: 'var(--danger)' }
            ]
        },
        customerSegments() {
            return [
                { value: this.customers.nmd_count || 0, color: 'var(--ca)', title: 'NMD' },
                { value: this.customers.md_count || 0, color: 'var(--soe)', title: 'MD' }
            ]
        },
        customerLegend() {
            const c = this.customers
            return [
                { label: 'NMD', value: formatNumber(c.nmd_count), pct: pct(c.nmd_pct), color: 'var(--ca)' },
                { label: 'MD', value: formatNumber(c.md_count), pct: pct(c.md_pct), color: 'var(--soe)' }
            ]
        },
        revenueRows() {
            const r = this.dash.revenue || {}
            const billed = num(r.billed) || 0
            const coll = num(r.collected) || 0
            const max = Math.max(billed, coll, 1)
            return [
                { label: 'Billed', value: this.naira(r.billed), w: (billed / max * 100).toFixed(1) + '%', color: 'var(--primary)' },
                { label: 'Collected', value: this.naira(r.collected), w: (coll / max * 100).toFixed(1) + '%', color: 'var(--success)' }
            ]
        },
        collRatio() {
            const r = this.dash.revenue || {}
            const b = num(r.billed)
            const c = num(r.collected)
            return b && c !== null ? (c / b * 100).toFixed(1) + '%' : ''
        },
        commPct() {
            return num((this.dash.meter_communication || {}).communicating_pct) || 0
        },
        commColor() {
            return this.commPct >= 80 ? 'var(--success)' : this.commPct >= 50 ? 'var(--warning)' : 'var(--danger)'
        }
    },
    async mounted() {
        await this.loadAll()
    },
    methods: {
        fmt: formatNumber,
        pctText(v) {
            return v === null || v === undefined || !Number.isFinite(Number(v)) ? '—' : Number(v).toFixed(2) + '%'
        },
        clampW(v) {
            const n = Number(v)
            return Number.isFinite(n) ? Math.max(0, Math.min(100, n)) + '%' : '0%'
        },
        share(part, total) {
            const p = Number(part) || 0
            const t = Number(total) || 0
            return t > 0 ? (p / t * 100).toFixed(1) + '%' : '0%'
        },
        naira(v) {
            const n = num(v)
            if (n === null) return '—'
            if (n >= 1e9) return '₦' + (n / 1e9).toFixed(2) + 'bn'
            if (n >= 1e6) return '₦' + (n / 1e6).toFixed(1) + 'm'
            if (n >= 1e3) return '₦' + (n / 1e3).toFixed(0) + 'k'
            return '₦' + formatNumber(n)
        },
        pageLabel(page, pages, total) {
            return total ? `Page ${page} of ${formatNumber(pages)} · ${formatNumber(total)} rows` : ''
        },
        mergeKnownFeeders(names) {
            const seen = new Set(this.knownFeeders)
            names.forEach((n) => { if (n) seen.add(n) })
            this.knownFeeders = [...seen].sort()
        },
        onFilterChange() {
            this.feederLossPage = 1
            this.customerLossPage = 1
            this.loadAll()
        },
        onDateChange(value) {
            this.selectedDate = value
            this.onFilterChange()
        },
        async loadAll() {
            await Promise.all([this.loadDashboard(), this.loadFeederLossTable(), this.loadCustomerLossTable()])
        },
        async loadDashboard() {
            this.loading = true
            this.error = null
            try {
                const data = await getIdbDashboard({ feeder: this.selectedFeeder, date: this.selectedDate })
                this.dash = data || {}
                this.loaded = true
                if (data.feeder_filter && data.feeder_filter !== 'All') this.mergeKnownFeeders([data.feeder_filter])
            } catch (err) {
                this.error = err.message || 'Failed to load IDB dashboard'
            } finally {
                this.loading = false
            }
        },
        goToFeederLossPage(next) {
            if (next < 1) return
            if (this.feederLossTotalPages && next > this.feederLossTotalPages) return
            this.feederLossPage = next
            this.loadFeederLossTable()
        },
        async loadFeederLossTable() {
            this.feederLossLoading = true
            this.feederLossError = null
            try {
                const data = await getIdbFeederDtLoss({ feeder: this.selectedFeeder, date: this.selectedDate, page: this.feederLossPage, page_size: IDB_PAGE_SIZE })
                this.feederLossTotal = data.total || 0
                this.feederLossTotalPages = data.total_pages || 0
                this.feederLossRows = data.data || []
                this.mergeKnownFeeders(this.feederLossRows.map((r) => r.feeder))
            } catch (err) {
                this.feederLossError = err.message || 'Failed to load Feeder to DT loss table'
            } finally {
                this.feederLossLoading = false
            }
        },
        goToCustomerLossPage(next) {
            if (next < 1) return
            if (this.customerLossTotalPages && next > this.customerLossTotalPages) return
            this.customerLossPage = next
            this.loadCustomerLossTable()
        },
        async loadCustomerLossTable() {
            this.customerLossLoading = true
            this.customerLossError = null
            try {
                const data = await getIdbCustomerDtLoss({ feeder: this.selectedFeeder, date: this.selectedDate, page: this.customerLossPage, page_size: IDB_PAGE_SIZE })
                this.customerLossTotal = data.total || 0
                this.customerLossTotalPages = data.total_pages || 0
                this.customerLossRows = data.data || []
                this.mergeKnownFeeders(this.customerLossRows.map((r) => r.feeder))
            } catch (err) {
                this.customerLossError = err.message || 'Failed to load Customer to DT loss table'
            } finally {
                this.customerLossLoading = false
            }
        }
    }
}
</script>

<style scoped>
.review-link { position: relative; margin-top: 8px; color: var(--accent); font-size: 12px; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; }
.review-link:hover { color: var(--accent); text-decoration: underline; }
.split-mini { display: flex; height: 7px; border-radius: 999px; overflow: hidden; background: var(--surface-3); margin-top: 12px; }
.split-big { display: flex; height: 26px; border-radius: 8px; overflow: hidden; background: var(--surface-3); }
.eff-row { display: grid; grid-template-columns: 196px minmax(0, 1fr) 80px; gap: 14px; align-items: center; margin-bottom: 15px; }
.derived { margin-left: 6px; font-size: 9.5px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: var(--text-3); border: 1px solid var(--border); border-radius: 4px; padding: 0 4px; }
.leg-head { display: flex; align-items: center; gap: 6px; font-size: 11.5px; font-weight: 700; color: var(--text-2); }
.leg-val { font-size: 15px; font-weight: 600; margin-top: 2px; }
.leg-val span { font-size: 11px; color: var(--text-3); }
@media (max-width: 520px) { .eff-row { grid-template-columns: 1fr 64px; } .eff-row > .ie-track { grid-column: 1 / -1; grid-row: 2; } }
</style>
