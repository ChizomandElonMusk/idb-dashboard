<template>
    <div class="bc" :style="{ height: height + 'px' }" @mouseleave="hover = null">
        <div class="bc-plot" :style="{ left: yAxis ? '46px' : '0' }">
            <div class="bc-area">
                <div v-for="g in grid" :key="g.pct" class="bc-grid" :style="{ bottom: g.pct + '%' }">
                    <span v-if="yAxis" class="bc-ylabel">{{ g.label }}</span>
                </div>
            </div>
            <div class="bc-bars" :style="{ gap: gap }">
                <div
                    v-for="(b, i) in bars"
                    :key="i"
                    class="bc-col"
                    @mouseenter="hover = i"
                    @click="$emit('pick', i)"
                >
                    <div class="bc-bar-wrap">
                        <span v-if="valueLabels" class="bc-vl" :style="{ bottom: 'calc(' + pctOf(b.value) + '% + 4px)', color: b.labelColor || 'var(--text)' }">{{ b.short || fmt(b.value) }}</span>
                        <div
                            class="bc-bar"
                            :class="{ hatch: b.hatch, dim: hover !== null && hover !== i }"
                            :style="{ height: pctOf(b.value) + '%', background: b.color || 'var(--primary)', maxWidth: maxBar }"
                        ></div>
                    </div>
                    <span class="bc-xl" :class="{ hide: !showXLabel(i) }">{{ b.label }}</span>
                </div>
            </div>
            <div class="bc-area bc-area--tip">
                <div v-if="target != null" class="bc-target" :style="{ bottom: pctOf(target) + '%' }">
                    <span class="bc-target-label">{{ targetLabel }}</span>
                </div>
                <div v-if="hover !== null && bars[hover]" class="ie-tip" :style="{ left: ((hover + 0.5) / bars.length * 100) + '%', top: (100 - pctOf(bars[hover].value)) + '%' }">
                    <div class="ie-tip-l1">{{ bars[hover].tip || bars[hover].label }}</div>
                    <div class="ie-tip-l2">{{ fmt(bars[hover].value) }}<span v-if="unit"> {{ unit }}</span></div>
                    <div v-if="bars[hover].tip2" class="ie-tip-l2">{{ bars[hover].tip2 }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Vertical bar chart from the design (rounded bars, value labels, optional target line,
// hatched "partial" bars). bars: [{ label, value, color?, hatch?, tip?, tip2?, short? }]
export default {
    name: 'BarChart',
    props: {
        bars: { type: Array, default: () => [] },
        height: { type: Number, default: 220 },
        format: { type: Function, default: (v) => (v == null ? '—' : Number(v).toLocaleString()) },
        unit: { type: String, default: '' },
        target: { type: Number, default: null },
        targetLabel: { type: String, default: '' },
        valueLabels: { type: Boolean, default: true },
        yAxis: { type: Boolean, default: true },
        yFormat: { type: Function, default: null },
        gap: { type: String, default: '10px' },
        maxBar: { type: String, default: '64px' },
        maxXLabels: { type: Number, default: 16 }
    },
    data() {
        return { hover: null }
    },
    computed: {
        max() {
            const vals = this.bars.map((b) => Number(b.value)).filter(Number.isFinite)
            if (this.target != null) vals.push(this.target)
            const m = vals.length ? Math.max(...vals) : 0
            return m > 0 ? m * 1.15 : 1
        },
        grid() {
            const f = this.yFormat || compact
            return [0, 1, 2, 3].map((k) => ({ pct: k / 3 * 100, label: f(this.max * k / 3) }))
        }
    },
    methods: {
        pctOf(v) {
            const n = Number(v)
            return Number.isFinite(n) ? Math.max(0, Math.min(100, n / this.max * 100)) : 0
        },
        fmt(v) {
            return this.format(v)
        },
        showXLabel(i) {
            const every = Math.max(1, Math.ceil(this.bars.length / this.maxXLabels))
            return i % every === 0 || i === this.bars.length - 1
        }
    }
}

function compact(v) {
    const a = Math.abs(v)
    if (a >= 1e9) return (v / 1e9).toFixed(1) + 'bn'
    if (a >= 1e6) return (v / 1e6).toFixed(1) + 'm'
    if (a >= 1e3) return (v / 1e3).toFixed(a >= 1e4 ? 0 : 1) + 'k'
    return (Math.round(v * 10) / 10).toString()
}
</script>

<style scoped>
.bc { position: relative; width: 100%; }
.bc-plot { position: absolute; right: 0; top: 0; bottom: 0; }
.bc-area { position: absolute; left: 0; right: 0; top: 0; bottom: 22px; pointer-events: none; }
.bc-area--tip { z-index: 5; }
.bc-grid { position: absolute; left: 0; right: 0; height: 0; border-top: 1px solid var(--border); }
.bc-ylabel { position: absolute; right: calc(100% + 8px); top: -7px; font-family: var(--mono); font-size: 10px; font-weight: 600; color: var(--text-3); white-space: nowrap; }
.bc-target { position: absolute; left: 0; right: 0; height: 0; border-top: 2px dashed var(--warning); z-index: 2; }
.bc-target-label { position: absolute; right: 0; bottom: 3px; font-size: 10.5px; font-weight: 700; color: var(--warning); background: color-mix(in srgb, var(--surface) 80%, transparent); padding: 0 3px; border-radius: 3px; }
.bc-bars { position: absolute; inset: 0; display: flex; align-items: stretch; }
.bc-col { flex: 1; min-width: 0; display: flex; flex-direction: column; cursor: crosshair; }
.bc-bar-wrap { position: relative; flex: 1; display: flex; align-items: flex-end; justify-content: center; }
.bc-bar { width: 100%; border-radius: 5px 5px 2px 2px; transform-origin: bottom; animation: bc-rise .7s cubic-bezier(.2,.8,.2,1) both; transition: opacity .15s; }
.bc-bar.dim { opacity: .55; }
.bc-bar.hatch { background-image: repeating-linear-gradient(45deg, color-mix(in srgb, var(--surface) 55%, transparent) 0 3px, transparent 3px 7px) !important; background-color: var(--text-3); }
.bc-vl { position: absolute; left: 0; right: 0; text-align: center; font-family: var(--mono); font-size: 11px; font-weight: 700; white-space: nowrap; pointer-events: none; }
.bc-xl { height: 22px; line-height: 22px; text-align: center; font-size: 11px; font-weight: 600; color: var(--text-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.bc-xl.hide { visibility: hidden; }
@keyframes bc-rise { from { transform: scaleY(0) } to { transform: scaleY(1) } }
@media (prefers-reduced-motion: reduce) { .bc-bar { animation: none; } }
</style>
