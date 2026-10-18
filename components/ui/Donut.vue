<template>
    <div class="donut" :style="{ width: size + 'px', height: size + 'px' }">
        <svg viewBox="0 0 140 140" :width="size" :height="size" class="donut-svg">
            <circle cx="70" cy="70" :r="r" fill="none" stroke="var(--surface-3)" :stroke-width="stroke" />
            <circle
                v-for="(a, i) in arcs"
                :key="i"
                class="ie-arc"
                cx="70" cy="70" :r="r" fill="none"
                :stroke="a.color" :stroke-width="stroke"
                :stroke-dasharray="a.dash" :stroke-dashoffset="a.offset"
            >
                <title v-if="a.title">{{ a.title }}</title>
            </circle>
        </svg>
        <div v-if="$slots.default" class="donut-center"><slot /></div>
    </div>
</template>

<script>
// Ring chart from the design. segments: [{ value, color, title? }]
export default {
    name: 'Donut',
    props: {
        segments: { type: Array, default: () => [] },
        size: { type: Number, default: 132 },
        r: { type: Number, default: 54 },
        stroke: { type: Number, default: 18 }
    },
    computed: {
        arcs() {
            const total = this.segments.reduce((s, x) => s + (Number(x.value) || 0), 0)
            if (!total) return []
            const C = 2 * Math.PI * this.r
            let acc = 0
            return this.segments.map((s) => {
                const len = (Number(s.value) || 0) / total * C
                const arc = { color: s.color, title: s.title, dash: `${len.toFixed(2)} ${(C - len).toFixed(2)}`, offset: (-acc).toFixed(2) }
                acc += len
                return arc
            })
        }
    }
}
</script>

<style scoped>
.donut { position: relative; flex: none; }
.donut-svg { display: block; transform: rotate(-90deg); }
.donut-center { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
</style>
