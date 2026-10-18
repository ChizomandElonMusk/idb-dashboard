<template>
    <div class="ie-card ie-card--flush dt">
        <div class="ie-card-head">
            <div>
                <div class="ie-card-title">{{ title }}</div>
                <div v-if="sub" class="ie-card-sub">{{ sub }}</div>
            </div>
            <div class="dt-tools">
                <div v-if="note" class="ie-note"><Icon name="info" :size="14" style="color:var(--warning)" />{{ note }}</div>
                <div v-if="searchable" class="ie-search">
                    <Icon name="search" :size="16" />
                    <input v-model="query" :placeholder="searchPlaceholder" />
                </div>
                <slot name="tools" />
            </div>
        </div>
        <slot name="above" />
        <div v-if="error" class="ie-error" style="margin:14px 20px 0"><Icon name="alert" :size="16" />{{ error }}</div>
        <div class="ie-table-scroll ie-scroll" :class="{ busy: loading }">
            <div :style="{ minWidth: minWidth }">
                <div v-if="groups.length" class="dt-groups" :style="gridStyle">
                    <div
                        v-for="(g, i) in groups"
                        :key="i"
                        class="dt-group"
                        :class="{ sticky: i === 0 && stickyFirst, edge: i > 0 }"
                        :style="{ gridColumn: 'span ' + g.span, color: g.color || 'var(--text-3)' }"
                    >{{ g.label }}</div>
                </div>
                <div class="dt-head" :style="gridStyle">
                    <div
                        v-for="(c, i) in columns"
                        :key="i"
                        class="dt-th"
                        :class="{ sticky: i === 0 && stickyFirst }"
                        :style="{ textAlign: c.align || 'left' }"
                    >{{ c.label }}</div>
                </div>
                <div
                    v-for="(r, ri) in shownRows"
                    :key="rowKey ? r[rowKey] : ri"
                    class="dt-row"
                    :class="{ click: clickable }"
                    :style="gridStyle"
                    @click="clickable && $emit('row-click', r)"
                >
                    <div
                        v-for="(c, i) in columns"
                        :key="i"
                        class="dt-td"
                        :class="{ sticky: i === 0 && stickyFirst, mono: c.mono }"
                        :style="{ textAlign: c.align || 'left', fontWeight: c.weight || (i === 0 ? 700 : 500), color: cellColor(c, r) }"
                    >
                        <span v-if="c.type === 'band'" class="ie-band" :style="{ background: bandSoftVar(r[c.key]), color: bandColorVar(r[c.key]) }">{{ r[c.key] || '—' }}</span>
                        <span v-else-if="c.type === 'pill'" class="ie-pill" :style="pillStyle(c, r)"><span class="ie-pill-dot"></span>{{ display(c, r) }}</span>
                        <div v-else-if="c.type === 'bar'" class="dt-bar">
                            <div class="ie-track" style="width:54px;height:6px"><div style="height:100%;border-radius:999px" :style="{ width: barWidth(c, r), background: cellColor(c, r) || 'var(--primary)' }"></div></div>
                            <span>{{ display(c, r) }}</span>
                        </div>
                        <div v-else class="ie-ellip" :title="String(display(c, r))">{{ display(c, r) }}</div>
                    </div>
                </div>
                <div v-if="!loading && !shownRows.length" class="ie-empty">{{ query ? 'No rows on this page match “' + query + '”.' : emptyText }}</div>
                <div v-if="loading && !rows.length" class="dt-loading">
                    <div v-for="i in 6" :key="i" class="dt-skel-row"><div v-for="j in 4" :key="j" class="ie-skel" style="height:10px"></div></div>
                </div>
            </div>
        </div>
        <div class="ie-table-foot">
            <span>{{ footer }}</span>
            <div v-if="paged" style="display:flex;gap:7px">
                <button class="ie-btn" :disabled="page <= 1 || loading" @click="$emit('page', page - 1)"><Icon name="arrowL" :size="14" />Previous</button>
                <button class="ie-btn" :disabled="(pages > 0 && page >= pages) || loading" @click="$emit('page', page + 1)">Next<Icon name="arrowR" :size="14" /></button>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'
import { bandColorVar, bandSoftVar } from '~/js_modules/pages'

// The design's shared data table: optional group header row, primary-rule header,
// dotted row dividers, sticky first column, and cell types (text | band | pill | bar).
// columns: [{ key, label, width?, align?, mono?, weight?, type?, format?(v,row), color?(v,row), soft?(v,row), pct?(v,row) }]
export default {
    name: 'DataTable',
    components: { Icon },
    props: {
        title: { type: String, default: '' },
        sub: { type: String, default: '' },
        note: { type: String, default: '' },
        columns: { type: Array, required: true },
        groups: { type: Array, default: () => [] },
        rows: { type: Array, default: () => [] },
        rowKey: { type: String, default: '' },
        loading: { type: Boolean, default: false },
        error: { type: String, default: '' },
        minWidth: { type: String, default: '900px' },
        stickyFirst: { type: Boolean, default: true },
        searchable: { type: Boolean, default: false },
        searchKeys: { type: Array, default: () => [] },
        searchPlaceholder: { type: String, default: 'Filter this page…' },
        clickable: { type: Boolean, default: false },
        footer: { type: String, default: '' },
        paged: { type: Boolean, default: true },
        page: { type: Number, default: 1 },
        pages: { type: Number, default: 0 },
        emptyText: { type: String, default: 'No rows for this filter combination.' }
    },
    data() {
        return { query: '' }
    },
    computed: {
        gridStyle() {
            return { gridTemplateColumns: this.columns.map((c) => c.width || 'minmax(0, 1fr)').join(' ') }
        },
        shownRows() {
            const q = this.query.trim().toLowerCase()
            if (!q) return this.rows
            const keys = this.searchKeys.length ? this.searchKeys : [this.columns[0].key]
            return this.rows.filter((r) => keys.some((k) => String(r[k] ?? '').toLowerCase().includes(q)))
        }
    },
    methods: {
        bandColorVar,
        bandSoftVar,
        display(c, r) {
            const v = r[c.key]
            if (c.format) return c.format(v, r)
            return v === null || v === undefined || v === '' ? '—' : v
        },
        cellColor(c, r) {
            return c.color ? c.color(r[c.key], r) : ''
        },
        pillStyle(c, r) {
            return { color: this.cellColor(c, r) || 'var(--text-2)', background: c.soft ? c.soft(r[c.key], r) : 'var(--surface-3)' }
        },
        barWidth(c, r) {
            const p = c.pct ? c.pct(r[c.key], r) : Number(r[c.key])
            return Number.isFinite(p) ? Math.max(0, Math.min(100, p)) + '%' : '0%'
        }
    }
}
</script>

<style scoped>
.dt-tools { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.ie-table-scroll { overflow-x: auto; transition: opacity .2s; }
.ie-table-scroll.busy { opacity: .6; }
.dt-groups, .dt-head, .dt-row { display: grid; }
.dt-groups { background: var(--surface-2); border-bottom: 1px solid var(--border); }
.dt-group { padding: 8px 14px; text-align: center; font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; background: var(--surface-2); }
.dt-group.edge { border-left: 1px solid var(--border); }
.dt-head { border-bottom: 2px solid var(--primary); }
.dt-th { padding: 10px 14px; font-size: 10.5px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: var(--text-2); background: var(--surface); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dt-row { align-items: center; border-bottom: 1.5px dotted var(--border-strong); }
.dt-row.click { cursor: pointer; }
.dt-row:hover, .dt-row:hover .dt-td.sticky { background: var(--surface-2); }
.dt-td { padding: 13px 14px; font-size: 12.5px; min-width: 0; background: transparent; }
.dt-td.mono { font-family: var(--mono); }
.sticky { position: sticky; left: 0; z-index: 2; background: var(--surface); box-shadow: 1px 0 0 var(--border); }
.dt-group.sticky { background: var(--surface-2); }
.dt-bar { display: flex; align-items: center; justify-content: flex-end; gap: 9px; }
.dt-bar span { min-width: 52px; text-align: right; }
.dt-loading { padding: 4px 14px; }
.dt-skel-row { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 16px; padding: 14px 0; border-bottom: 1.5px dotted var(--border-strong); }
</style>
