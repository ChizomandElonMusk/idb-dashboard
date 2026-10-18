<template>
    <div class="gauge" :style="{ width: width + 'px' }">
        <svg viewBox="0 0 200 116" :width="width" :height="Math.round(width * 0.58)" class="gauge-svg">
            <path :d="ARC" fill="none" stroke="var(--surface-3)" stroke-width="17" stroke-linecap="round" />
            <path v-if="pctClamped > 0" class="ie-arc" :d="ARC" fill="none" :stroke="color" stroke-width="17" stroke-linecap="round" :stroke-dasharray="dash" />
        </svg>
        <div class="gauge-center"><slot /></div>
    </div>
</template>

<script>
const ARC = 'M 18 104 A 82 82 0 0 1 182 104'
const LEN = Math.PI * 82

// Semi-circle gauge from the design. pct is 0–100.
export default {
    name: 'Gauge',
    props: {
        pct: { type: Number, default: 0 },
        color: { type: String, default: 'var(--primary)' },
        width: { type: Number, default: 200 }
    },
    data() {
        return { ARC }
    },
    computed: {
        pctClamped() {
            const p = Number(this.pct)
            return Number.isFinite(p) ? Math.max(0, Math.min(100, p)) : 0
        },
        dash() {
            const len = LEN * this.pctClamped / 100
            return `${len.toFixed(2)} ${LEN.toFixed(2)}`
        }
    }
}
</script>

<style scoped>
.gauge { position: relative; }
.gauge-svg { display: block; width: 100%; height: auto; }
.gauge-center { position: absolute; left: 0; right: 0; bottom: 2px; display: flex; flex-direction: column; align-items: center; }
</style>
