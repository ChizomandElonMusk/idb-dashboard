<template>
    <div>
        <PageHeader page="idbe">
            <FilterSelect v-model="evMeter" label="Meter number" icon="gauge" :options="meterOptions" :searchable="true" />
            <FilterSelect v-model="evTitle" label="Event title" icon="alert" :options="titleOptions" />
        </PageHeader>

        <div class="ie-page">
            <div class="ie-tabs" role="tablist">
                <button v-for="t in tabs" :key="t.key" role="tab" :aria-selected="tab === t.key" :class="{ on: tab === t.key }" @click="tab = t.key">
                    <Icon :name="t.icon" :size="15" />{{ t.label }}
                </button>
            </div>

            <div class="ie-note sample-note"><Icon name="info" :size="14" style="color:var(--warning)" />Sample data — the IDB events feed isn't connected yet, so these figures are placeholders.</div>

            <div v-if="tab === 'dash'" class="ie-fadein">
                <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(230px, 1fr))">
                    <div class="ie-hero ie-hero--red" style="padding:20px 22px">
                        <div class="ie-hero-kicker" style="opacity:.9">Total events</div>
                        <div class="ie-hero-value" style="font-size:36px;margin-top:12px"><AnimatedValue :value="fmt(totalEvents)" /></div>
                        <div class="ie-hero-unit" style="font-weight:600">raised by IDB meters</div>
                    </div>
                    <div class="ie-card" style="padding:20px 22px">
                        <div class="ie-kpi-head"><span class="ie-ico tone-soe"><Icon name="gauge" :size="16" /></span><span class="ie-kpi-label">Unique meters</span></div>
                        <div class="ie-kpi-value" style="font-weight:600"><AnimatedValue :value="fmt(UNIQUE_METERS)" /></div>
                        <div class="ie-kpi-unit" style="font-size:11.5px;margin-top:4px">≈ {{ Math.round(totalEvents / UNIQUE_METERS) }} events per meter</div>
                    </div>
                    <div class="ie-card" style="padding:20px 22px">
                        <div class="ie-kpi-head"><span class="ie-ico tone-success"><Icon name="check" :size="16" /></span><span class="ie-kpi-label">Events treated</span></div>
                        <div class="ie-kpi-value" style="font-weight:600">{{ treatedPct }}</div>
                        <div class="ie-track" style="margin-top:12px"><div class="ie-fill" :style="{ width: treatedPct, background: 'var(--success)' }"></div></div>
                        <div class="kpi-foot">{{ fmt(STATUS.treated) }} treated · {{ fmt(STATUS.open) }} open</div>
                    </div>
                    <div class="ie-card" style="padding:20px 22px">
                        <div class="ie-kpi-head"><span class="ie-ico tone-primary"><Icon name="trendUp" :size="16" /></span><span class="ie-kpi-label">Vending covers consumption</span></div>
                        <div class="ie-kpi-value" style="font-weight:600">{{ metPct }}</div>
                        <div class="ie-track" style="margin-top:12px"><div class="ie-fill" :style="{ width: metPct, background: 'var(--primary)' }"></div></div>
                        <div class="kpi-foot">{{ fmt(VENDING.met) }} met · {{ fmt(VENDING.notMet) }} not met</div>
                    </div>
                </div>

                <div class="ie-grid" style="grid-template-columns: repeat(auto-fit, minmax(360px, 1fr))">
                    <div class="ie-card" style="padding:20px 22px">
                        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:14px">
                            <div>
                                <div class="ie-card-title">What the meters are reporting</div>
                                <div class="ie-card-sub">Meters raising each event · click to see them in the event log</div>
                            </div>
                            <div class="ie-legend">
                                <span v-for="g in groupList" :key="g.key"><span class="ie-swatch" :style="{ background: g.color }"></span>{{ g.label }}</span>
                            </div>
                        </div>
                        <div v-for="e in eventBars" :key="e.k" class="ev-bar" @click="openTitle(e.k)">
                            <span class="ie-ellip" style="font-size:12.5px;font-weight:700">{{ e.label }}</span>
                            <div class="ev-track"><div class="ie-grow" :style="{ width: e.w, minWidth: e.n ? '3px' : '0', background: GROUPS[e.g].color }"></div></div>
                            <span class="mono" style="text-align:right;font-size:12.5px;font-weight:600">{{ fmt(e.n) }}</span>
                        </div>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:14px">
                        <div v-for="d in donuts" :key="d.title" class="ie-card" style="padding:20px 22px">
                            <div class="ie-card-title" style="font-size:14.5px">{{ d.title }}</div>
                            <div class="ie-card-sub" style="margin-bottom:12px">{{ d.sub }}</div>
                            <div style="display:flex;align-items:center;gap:18px">
                                <Donut :segments="d.legend" :size="112" :r="54" :stroke="18">
                                    <span class="mono" style="font-size:17px;font-weight:600">{{ d.center }}</span>
                                </Donut>
                                <div style="flex:1;display:flex;flex-direction:column;gap:11px">
                                    <div v-for="l in d.legend" :key="l.label">
                                        <div class="leg-head"><span class="ie-swatch" :style="{ background: l.color }"></span>{{ l.label }}</div>
                                        <div class="mono leg-val">{{ fmt(l.value) }} <span>{{ l.pct }}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DataTable
                v-else-if="tab === 'events'"
                class="ie-fadein"
                title="Event log"
                sub="Most recent first · click an event to see its resolution progress"
                :columns="eventColumns"
                :rows="eventPageRows"
                min-width="1000px"
                :sticky-first="false"
                searchable
                :search-keys="['msno', 'label']"
                search-placeholder="Meter number or event…"
                clickable
                :footer="pageLabel(evPage, evPages, eventRows.length)"
                :page="evPage"
                :pages="evPages"
                @page="evPage = $event"
                @row-click="evSel = $event"
            >
                <template v-if="evTitle !== 'All'" #tools>
                    <button class="title-chip" @click="evTitle = 'All'">{{ EV_BY_KEY[evTitle].label }}<Icon name="x" :size="14" /></button>
                </template>
            </DataTable>

            <DataTable
                v-else
                class="ie-fadein"
                title="Vending vs consumption"
                sub="Energy each meter topped up against energy it used · kWh"
                :columns="vendColumns"
                :rows="vendPageRows"
                min-width="820px"
                searchable
                :search-keys="['meter']"
                search-placeholder="Meter number…"
                :footer="pageLabel(vdPage, vdPages, vendRows.length)"
                :page="vdPage"
                :pages="vdPages"
                @page="vdPage = $event"
            />
        </div>

        <transition name="drawer">
            <div v-if="ev" class="drawer-back" @click.self="evSel = null">
                <div class="drawer ie-scroll" role="dialog" aria-modal="true">
                    <div class="drawer-head" :style="{ background: ev.soft }">
                        <div class="ie-diag ie-layer" :style="{ color: ev.color, opacity: .08 }"></div>
                        <div style="position:relative;display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
                            <div>
                                <div class="drawer-kicker" :style="{ color: ev.color }">{{ ev.group }}</div>
                                <div class="drawer-title">{{ ev.title }}</div>
                                <div class="mono" style="font-size:12px;color:var(--text-2);margin-top:4px">Meter {{ ev.msno }}</div>
                            </div>
                            <button class="ie-icon-btn" aria-label="Close" @click="evSel = null"><Icon name="x" :size="15" /></button>
                        </div>
                    </div>
                    <div style="padding:20px 22px;display:flex;flex-direction:column;gap:18px">
                        <div style="font-size:13.5px;line-height:1.55">{{ ev.desc }}</div>
                        <div>
                            <div class="ie-stat-label" style="margin-bottom:14px;font-size:10.5px">Resolution progress</div>
                            <div v-for="(st, i) in ev.steps" :key="st.title" style="display:flex;gap:13px">
                                <div style="display:flex;flex-direction:column;align-items:center;flex:none">
                                    <span class="step-mark" :style="{ background: st.bg, borderColor: st.bd, color: st.fg }">{{ st.mark }}</span>
                                    <span v-if="i < ev.steps.length - 1" class="step-line" :style="{ background: st.line }"></span>
                                </div>
                                <div style="padding:3px 0 16px">
                                    <div style="font-size:13px;font-weight:700" :style="{ color: st.titleColor }">{{ st.title }}</div>
                                    <div style="font-size:11.5px;color:var(--text-3);margin-top:2px">{{ st.sub }}</div>
                                </div>
                            </div>
                        </div>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
                            <div class="ie-stat-box"><div class="ie-stat-label">Raised</div><div class="ie-stat-value" style="font-size:13px;font-weight:700">{{ ev.time }}</div></div>
                            <div class="ie-stat-box"><div class="ie-stat-label">Status</div><div class="ie-stat-value" style="font-size:13px" :style="{ color: ev.statusColor }">{{ ev.status }}</div></div>
                            <div class="ie-stat-box" style="grid-column:1 / -1"><div class="ie-stat-label">Feeder</div><div class="mono ie-stat-value" style="font-size:12.5px;font-weight:700">{{ ev.feeder }}</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'
import PageHeader from '~/components/ui/PageHeader.vue'
import FilterSelect from '~/components/ui/FilterSelect.vue'
import Donut from '~/components/ui/Donut.vue'
import DataTable from '~/components/ui/DataTable.vue'
import AnimatedValue from '~/components/AnimatedValue.vue'
import { formatNumber } from '~/js_modules/controlCenterApi'
// IDB Events. There is no events endpoint yet (see static/api_live_responses3.md — none of the
// ten endpoints cover meter event logs), so everything here is static sample content: the
// headline counts carried over from the Figma mock, and a deterministic generated event log
// so the table and drawer can be exercised. Swap in real data once the backend ships it.

const IDB_FEEDERS = ['11-IgbobiINJ-T1-Apata-COMERCIO', '33-IkoroduTCN-FAKALE Source-COMERCIO']
const GROUPS = {
    tamper: { key: 'tamper', label: 'Tamper', color: 'var(--danger)', soft: 'var(--danger-soft)' },
    physical: { key: 'physical', label: 'Enclosure', color: 'var(--warning)', soft: 'var(--warning-soft)' },
    comms: { key: 'comms', label: 'Comms', color: 'var(--soe)', soft: 'var(--soe-soft)' },
    commercial: { key: 'commercial', label: 'Commercial', color: 'var(--ca)', soft: 'var(--ca-soft)' }
}
const EV = [
    { k: 'Current_bypass_end', label: 'Current bypass ended', g: 'tamper', n: 68818, d: 'Current bypass on the meter terminals has ended; consumption during the bypass window was not registered.' },
    { k: 'Current_reverse_L2', label: 'Current reversal · L2', g: 'tamper', n: 12869, d: 'Reverse current detected on phase L2, a common sign of an inverted CT or deliberate tampering.' },
    { k: 'Current_reverse_L3', label: 'Current reversal · L3', g: 'tamper', n: 12696, d: 'Reverse current detected on phase L3, a common sign of an inverted CT or deliberate tampering.' },
    { k: 'Meter_box_closed', label: 'Meter box closed', g: 'physical', n: 4720, d: 'The meter enclosure was closed after being opened.' },
    { k: 'open_box', label: 'Meter box opened', g: 'physical', n: 4670, d: 'The meter enclosure was opened. Confirm whether an authorised visit was scheduled.' },
    { k: 'Association_authentication', label: 'Authentication failure', g: 'comms', n: 3657, d: 'The meter rejected an association request from the head-end system.' },
    { k: 'Current_reverse_L3_end', label: 'L3 reversal ended', g: 'tamper', n: 1815, d: 'Reverse current on phase L3 has cleared.' },
    { k: 'negative_balance', label: 'Negative balance', g: 'commercial', n: 933, d: 'The prepaid account has gone into negative balance while supply continued.' },
    { k: 'Terminal_cover_closed', label: 'Terminal cover closed', g: 'physical', n: 663, d: 'The terminal cover was refitted.' },
    { k: 'Terminal_cover_removed', label: 'Terminal cover removed', g: 'physical', n: 659, d: 'The terminal cover was removed, exposing the meter connections.' },
    { k: 'modem_cover_closed', label: 'Modem cover closed', g: 'physical', n: 245, d: 'The communications modem cover was refitted.' },
    { k: 'modem_cover_removed', label: 'Modem cover removed', g: 'physical', n: 0, d: 'The communications modem cover was removed.' }
]
const EV_BY_KEY = Object.fromEntries(EV.map((e) => [e.k, e]))
const UNIQUE_METERS = 4553
const STATUS = { treated: 88000, open: 24400 }
const VENDING = { met: 46800, notMet: 6400 }
const PAGE_SIZE = 15

function lcg(seed) {
    let s = seed
    return () => {
        s = (s * 1664525 + 1013904223) % 4294967296
        return s / 4294967296
    }
}

function buildEventRows() {
    const rnd = lcg(19)
    const tot = EV.reduce((a, e) => a + e.n, 0)
    const out = []
    for (let i = 0; i < 64; i++) {
        let r = rnd() * tot
        let e = EV[0]
        for (const x of EV) { if ((r -= x.n) <= 0) { e = x; break } }
        const day = 1 + Math.floor(rnd() * 40)
        const month = day > 31 ? 9 : 8
        const dd = day > 31 ? day - 31 : day
        const hh = Math.floor(rnd() * 24)
        const mm = Math.floor(rnd() * 60)
        out.push({
            id: i,
            k: e.k,
            label: e.label,
            msno: '9211205' + String(2900 + Math.floor(rnd() * 900)).padStart(4, '0'),
            sort: month * 100000 + dd * 1440 + hh * 60 + mm,
            time: String(dd).padStart(2, '0') + (month === 8 ? ' Aug' : ' Sep') + ' 2026, ' + String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0'),
            treated: rnd() < 0.78,
            feeder: IDB_FEEDERS[rnd() < 0.72 ? 0 : 1]
        })
    }
    return out.sort((a, b) => b.sort - a.sort)
}

function buildVendRows(evRows) {
    const rnd = lcg(41)
    return Array.from(new Set(evRows.map((r) => r.msno))).map((m) => {
        const c = 60 + rnd() * 420
        const met = rnd() < 0.88
        const v = met ? c * (1 + rnd() * 0.6) : c * (0.35 + rnd() * 0.55)
        return { meter: m, consumed: c, vended: v, coverage: v / c * 100 }
    })
}

const EVENT_ROWS = buildEventRows()
const VEND_ROWS = buildVendRows(EVENT_ROWS)

export default {
    layout: 'dashboard',
    components: { Icon, PageHeader, FilterSelect, Donut, DataTable, AnimatedValue },
    data() {
        return {
            GROUPS,
            EV_BY_KEY,
            UNIQUE_METERS,
            STATUS,
            VENDING,
            tab: 'dash',
            tabs: [
                { key: 'dash', label: 'Dashboard', icon: 'gauge' },
                { key: 'events', label: 'Event log', icon: 'table' },
                { key: 'vending', label: 'Vending vs consumption', icon: 'table' }
            ],
            evMeter: 'All',
            evTitle: 'All',
            evPage: 1,
            vdPage: 1,
            evSel: null,
            eventColumns: [
                { key: 'time', label: 'Raised', width: 'minmax(150px, 1fr)', color: () => 'var(--text-2)', weight: 600 },
                { key: 'msno', label: 'Meter', width: 'minmax(124px, .85fr)', mono: true, weight: 600 },
                { key: 'label', label: 'Event', width: 'minmax(200px, 1.2fr)', type: 'pill', color: (v, r) => GROUPS[EV_BY_KEY[r.k].g].color, soft: (v, r) => GROUPS[EV_BY_KEY[r.k].g].soft },
                { key: 'k', label: 'Description', width: 'minmax(300px, 2.2fr)', weight: 500, color: () => 'var(--text-2)', format: (v, r) => r.msno + ' — ' + EV_BY_KEY[v].d.charAt(0).toLowerCase() + EV_BY_KEY[v].d.slice(1) },
                { key: 'treated', label: 'Status', width: '130px', type: 'pill', format: (v) => (v ? 'Treated' : 'Not treated'), color: (v) => (v ? 'var(--success)' : 'var(--danger)'), soft: (v) => (v ? 'var(--success-soft)' : 'var(--danger-soft)') }
            ],
            vendColumns: [
                { key: 'meter', label: 'Meter', width: 'minmax(170px, 1fr)', mono: true },
                { key: 'consumed', label: 'Consumed', width: 'minmax(150px, 1fr)', align: 'right', mono: true, format: (v) => v.toFixed(2) },
                { key: 'vended', label: 'Vended', width: 'minmax(150px, 1fr)', align: 'right', mono: true, format: (v) => v.toFixed(2) },
                { key: 'coverage', label: 'Coverage', width: 'minmax(190px, 1.1fr)', align: 'right', mono: true, weight: 700, type: 'bar', format: (v) => v.toFixed(0) + '%', color: (v) => (v >= 100 ? 'var(--success)' : 'var(--danger)') },
                { key: 'coverage', label: 'Target', width: '130px', align: 'right', type: 'pill', format: (v) => (v >= 100 ? 'Met' : 'Not met'), color: (v) => (v >= 100 ? 'var(--success)' : 'var(--danger)'), soft: (v) => (v >= 100 ? 'var(--success-soft)' : 'var(--danger-soft)') }
            ]
        }
    },
    computed: {
        totalEvents() {
            return EV.reduce((a, e) => a + e.n, 0)
        },
        treatedPct() {
            return (STATUS.treated / (STATUS.treated + STATUS.open) * 100).toFixed(1) + '%'
        },
        metPct() {
            return (VENDING.met / (VENDING.met + VENDING.notMet) * 100).toFixed(1) + '%'
        },
        groupList() {
            return Object.values(GROUPS)
        },
        eventBars() {
            const max = Math.max(...EV.map((e) => e.n))
            return EV.map((e) => ({ ...e, w: (e.n / max * 100).toFixed(2) + '%' }))
        },
        donuts() {
            const mk = (title, sub, a, b, la, lb, ca, cb) => {
                const t = a + b
                return {
                    title,
                    sub,
                    center: (t / 1000).toFixed(1) + 'k',
                    legend: [
                        { label: la, value: a, pct: '(' + (a / t * 100).toFixed(1) + '%)', color: ca },
                        { label: lb, value: b, pct: '(' + (b / t * 100).toFixed(1) + '%)', color: cb }
                    ]
                }
            }
            return [
                mk('Event status', 'Whether each event has been followed up', STATUS.treated, STATUS.open, 'Treated', 'Not treated', 'var(--success)', 'var(--danger)'),
                mk('Vending vs consumption', 'Meters whose top-ups cover what they use', VENDING.met, VENDING.notMet, 'Met', 'Not met', 'var(--primary)', 'var(--danger)')
            ]
        },
        meterOptions() {
            return [{ value: 'All', label: 'All meters' }, ...Array.from(new Set(EVENT_ROWS.map((r) => r.msno))).sort()]
        },
        titleOptions() {
            return [{ value: 'All', label: 'All events' }, ...EV.map((e) => ({ value: e.k, label: e.label }))]
        },
        eventRows() {
            return EVENT_ROWS.filter((r) => (this.evMeter === 'All' || r.msno === this.evMeter) && (this.evTitle === 'All' || r.k === this.evTitle))
        },
        evPages() {
            return Math.max(1, Math.ceil(this.eventRows.length / PAGE_SIZE))
        },
        eventPageRows() {
            return this.eventRows.slice((this.evPage - 1) * PAGE_SIZE, this.evPage * PAGE_SIZE)
        },
        vendRows() {
            return VEND_ROWS.filter((r) => this.evMeter === 'All' || r.meter === this.evMeter)
        },
        vdPages() {
            return Math.max(1, Math.ceil(this.vendRows.length / PAGE_SIZE))
        },
        vendPageRows() {
            return this.vendRows.slice((this.vdPage - 1) * PAGE_SIZE, this.vdPage * PAGE_SIZE)
        },
        ev() {
            const r = this.evSel
            if (!r) return null
            const e = EV_BY_KEY[r.k]
            const g = GROUPS[e.g]
            const done = r.treated
            const steps = [
                { title: 'Detected', sub: r.time + ' · head-end system' },
                { title: 'Assigned', sub: 'Revenue Protection · ' + (r.feeder.includes('Ikorodu') ? 'Ikorodu BU' : 'Shomolu BU') },
                { title: 'Investigated', sub: done ? 'Field visit completed' : 'Field visit in progress' },
                { title: 'Treated', sub: done ? 'Closed out' : 'Awaiting sign-off' }
            ]
            const cur = done ? 4 : 2
            return {
                title: e.label,
                group: g.label + ' event',
                color: g.color,
                soft: g.soft,
                msno: r.msno,
                desc: e.d,
                time: r.time,
                feeder: r.feeder,
                status: done ? 'Treated' : 'Not treated',
                statusColor: done ? 'var(--success)' : 'var(--danger)',
                steps: steps.map((st, i) => {
                    const isDone = i < cur
                    const isCur = i === cur
                    return {
                        ...st,
                        mark: isDone ? '✓' : String(i + 1),
                        bg: isDone ? 'var(--success)' : isCur ? 'var(--primary-soft)' : 'var(--surface-2)',
                        bd: isDone ? 'var(--success)' : isCur ? 'var(--primary)' : 'var(--border-strong)',
                        fg: isDone ? '#fff' : isCur ? 'var(--primary-press)' : 'var(--text-3)',
                        line: isDone ? 'var(--success)' : 'var(--border-strong)',
                        titleColor: isDone || isCur ? 'var(--text)' : 'var(--text-3)'
                    }
                })
            }
        }
    },
    watch: {
        evMeter() {
            this.evPage = 1
            this.vdPage = 1
        },
        evTitle() {
            this.evPage = 1
        }
    },
    mounted() {
        window.addEventListener('keydown', this.onKey)
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.onKey)
    },
    methods: {
        fmt: formatNumber,
        pageLabel(page, pages, total) {
            return total ? `Page ${page} of ${pages} · ${formatNumber(total)} rows` : ''
        },
        openTitle(k) {
            this.evTitle = k
            this.tab = 'events'
        },
        onKey(e) {
            if (e.key === 'Escape') this.evSel = null
        }
    }
}
</script>

<style scoped>
.sample-note { margin-bottom: 14px; }
.kpi-foot { font-size: 11px; color: var(--text-3); font-weight: 600; margin-top: 6px; }
.ev-bar { display: grid; grid-template-columns: 190px minmax(0, 1fr) 70px; gap: 14px; align-items: center; padding: 6px 8px; margin: 0 -8px; border-radius: 8px; cursor: pointer; }
.ev-bar:hover { background: var(--surface-2); }
.ev-track { height: 14px; border-radius: 5px; background: var(--surface-3); overflow: hidden; }
.ev-track > div { height: 100%; border-radius: 5px; }
.leg-head { display: flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 700; color: var(--text-2); }
.leg-val { font-size: 17px; font-weight: 600; margin-top: 2px; }
.leg-val span { font-size: 11.5px; color: var(--text-3); }
.title-chip { display: flex; align-items: center; gap: 6px; background: var(--primary-soft); color: var(--primary-press); border: none; border-radius: 999px; padding: 6px 8px 6px 12px; font-size: 12px; font-weight: 700; cursor: pointer; }

.drawer-back { position: fixed; inset: 0; z-index: 60; background: rgba(20,17,12,.45); backdrop-filter: blur(2px); display: flex; justify-content: flex-end; }
.drawer { width: 100%; max-width: 440px; height: 100%; overflow-y: auto; background: var(--surface); border-left: 1px solid var(--border); box-shadow: var(--shadow-xl); display: flex; flex-direction: column; }
.drawer-head { position: relative; overflow: hidden; flex: none; border-bottom: 1px solid var(--border); padding: 20px 22px; }
.drawer-kicker { font-size: 10.5px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; }
.drawer-title { font-size: 18px; font-weight: 800; letter-spacing: -.4px; margin-top: 4px; }
.step-mark { width: 28px; height: 28px; border-radius: 50%; border: 2px solid; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; }
.step-line { width: 2px; flex: 1; min-height: 22px; margin: 3px 0; }
.drawer-enter-active, .drawer-leave-active { transition: opacity .2s ease; }
.drawer-enter-active .drawer, .drawer-leave-active .drawer { transition: transform .25s cubic-bezier(.2,.8,.2,1); }
.drawer-enter, .drawer-leave-to { opacity: 0; }
.drawer-enter .drawer, .drawer-leave-to .drawer { transform: translateX(40px); }
@media (max-width: 520px) { .ev-bar { grid-template-columns: 120px minmax(0, 1fr) 56px; } }
</style>
