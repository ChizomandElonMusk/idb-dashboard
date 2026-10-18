<template>
    <div class="lc" @mouseleave="hover = null">
        <svg :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="none" class="lc-svg" :style="{ height: height + 'px' }">
            <defs>
                <linearGradient v-for="(s, i) in series" :id="gid + i" :key="'g' + i" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" :stop-color="s.color" stop-opacity=".30" />
                    <stop offset="100%" :stop-color="s.color" stop-opacity="0" />
                </linearGradient>
            </defs>
            <line v-for="g in grid" :key="'l' + g.y" :x1="padL" :y1="g.y" :x2="W" :y2="g.y" stroke="var(--border)" stroke-width="1" vector-effect="non-scaling-stroke" />
            <template v-for="(p, i) in paths">
                <path v-if="series[i].area" :key="'a' + i" :d="p.area" :fill="`url(#${gid}${i})`" />
                <path :key="'p' + i" :d="p.line" fill="none" :stroke="series[i].color" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
            </template>
            <line v-if="hover !== null" :x1="xAt(hover)" y1="0" :x2="xAt(hover)" :y2="H - padB" stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="3 3" vector-effect="non-scaling-stroke" />
            <rect
                v-for="(l, i) in labels"
                :key="'h' + i"
                :x="xAt(i) - step / 2" y="0" :width="step" :height="H - padB"
                fill="transparent" style="cursor: crosshair"
                @mouseenter="hover = i" @click="$emit('pick', i)"
            />
        </svg>
        <div class="lc-overlay">
            <template v-for="(s, si) in series">
                <span
                    v-for="(v, i) in s.values"
                    v-show="dots || hover === i"
                    :key="si + '-' + i"
                    class="lc-dot"
                    :style="{ left: pctX(i), top: pctY(v), borderColor: s.color, width: hover === i ? '11px' : '9px', height: hover === i ? '11px' : '9px' }"
                ></span>
            </template>
            <span v-for="g in grid" v-show="yAxis" :key="'yl' + g.y" class="lc-ylabel" :style="{ top: (g.y / H * 100) + '%' }">{{ g.label }}</span>
            <span v-for="(l, i) in labels" v-show="showXLabel(i)" :key="'x' + i" class="lc-xlabel" :style="{ left: pctX(i) }">{{ l }}</span>
            <div v-if="hover !== null" class="ie-tip" :style="{ left: pctX(hover), top: pctY(maxAt(hover)) }">
                <div class="ie-tip-l1">{{ tipTitle ? tipTitle(hover) : labels[hover] }}</div>
                <div v-for="s in series" :key="s.name" class="ie-tip-l2">
                    <span v-if="series.length > 1" class="lc-tip-sw" :style="{ background: s.color }"></span>{{ fmt(s.values[hover]) }}<span v-if="unit"> {{ unit }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let uid = 0

// Responsive SVG line/area chart with hover guide + tooltip, styled per the design.
// series: [{ name, values: Number[], color, area? }]
export default {
    name: 'LineChart',
    props: {
        labels: { type: Array, default: () => [] },
        series: { type: Array, default: () => [] },
        height: { type: Number, default: 200 },
        format: { type: Function, default: (v) => (v == null ? '—' : Number(v).toLocaleString()) },
        unit: { type: String, default: '' },
        tipTitle: { type: Function, default: null },
        dots: { type: Boolean, default: true },
        yAxis: { type: Boolean, default: false },
        yFormat: { type: Function, default: null },
        maxXLabels: { type: Number, default: 12 }
    },
    data() {
        return { hover: null, gid: 'lcg' + uid++, W: 620, H: 200, padB: 26, padT: 12 }
    },
    computed: {
        padL() {
            return this.yAxis ? 44 : 0
        },
        n() {
            return this.labels.length
        },
        step() {
            return this.n > 1 ? (this.W - this.padL - 24) / (this.n - 1) : this.W - this.padL
        },
        max() {
            const all = this.series.flatMap((s) => s.values).map(Number).filter(Number.isFinite)
            const m = all.length ? Math.max(...all) : 0
            return m > 0 ? m * 1.08 : 1
        },
        grid() {
            const f = this.yFormat || ((v) => compact(v))
            return [0, 1, 2, 3].map((k) => {
                const v = this.max * (1 - k / 3)
                return { y: this.yAt(v), label: f(v) }
            })
        },
        paths() {
            const base = this.H - this.padB
            return this.series.map((s) => {
                const pts = s.values.map((v, i) => [this.xAt(i), this.yAt(v)])
                const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ')
                const area = pts.length ? `${line} L${pts[pts.length - 1][0].toFixed(1)},${base} L${pts[0][0].toFixed(1)},${base} Z` : ''
                return { line, area }
            })
        }
    },
    methods: {
        xAt(i) {
            return this.n > 1 ? this.padL + 12 + i * this.step : this.padL + (this.W - this.padL) / 2
        },
        yAt(v) {
            const n = Number(v)
            const val = Number.isFinite(n) ? n : 0
            return this.padT + (1 - val / this.max) * (this.H - this.padB - this.padT)
        },
        pctX(i) {
            return (this.xAt(i) / this.W * 100) + '%'
        },
        pctY(v) {
            return (this.yAt(v) / this.H * 100) + '%'
        },
        maxAt(i) {
            return Math.max(...this.series.map((s) => Number(s.values[i]) || 0))
        },
        fmt(v) {
            return this.format(v)
        },
        showXLabel(i) {
            const every = Math.max(1, Math.ceil(this.n / this.maxXLabels))
            return i % every === 0 || i === this.n - 1
        }
    }
}

function compact(v) {
    const a = Math.abs(v)
    if (a >= 1e9) return (v / 1e9).toFixed(1) + 'bn'
    if (a >= 1e6) return (v / 1e6).toFixed(1) + 'm'
    if (a >= 1e3) return (v / 1e3).toFixed(0) + 'k'
    return Math.round(v).toString()
}
</script>

<style scoped>
.lc { position: relative; width: 100%; }
.lc-svg { width: 100%; display: block; overflow: visible; }
.lc-overlay { position: absolute; inset: 0; pointer-events: none; }
.lc-dot { position: absolute; transform: translate(-50%, -50%); border-radius: 50%; background: var(--surface); border: 2.5px solid; transition: width .12s, height .12s; }
.lc-xlabel { position: absolute; bottom: 0; transform: translateX(-50%); font-size: 11px; font-weight: 600; color: var(--text-3); white-space: nowrap; }
.lc-ylabel { position: absolute; left: 0; width: 38px; text-align: right; transform: translateY(-50%); font-family: var(--mono); font-size: 10px; font-weight: 600; color: var(--text-3); }
.lc-tip-sw { display: inline-block; width: 8px; height: 8px; border-radius: 2px; margin-right: 6px; }
</style>
