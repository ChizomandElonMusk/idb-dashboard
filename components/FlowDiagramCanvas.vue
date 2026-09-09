<template>
    <div class="flow-canvas-wrap" ref="wrap">
        <div class="flow-canvas-content" ref="content">
            <slot />
        </div>
        <svg class="flow-canvas-svg" :width="size.w" :height="size.h">
            <defs>
                <marker id="flow-arrowhead" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" class="flow-connector-arrowhead" />
                </marker>
            </defs>
            <path
                v-for="seg in segments"
                :key="seg.id"
                :d="seg.d"
                class="flow-connector-path"
                marker-end="url(#flow-arrowhead)"
            />
        </svg>
    </div>
</template>

<script>
// Draws the curved connector lines between FlowLane cards (replacing plain
// arrow icons), matching the look of static/PHOTO-2026-09-09-20-46-09.jpg -
// a smooth bezier from one card's edge to the next, not a boxy straight
// arrow. FlowLane instances register/unregister their own connections here
// via the injected `flowConnectorApi`; this component owns the single SVG
// overlay and recomputes every path whenever the diagram's size changes
// (new cards appearing/disappearing, window resize).

export default {
    name: 'FlowDiagramCanvas',
    // register()/unregister() are called directly by FlowLane instances,
    // which receive this component as a plain prop (see connectorApi in
    // FlowLane.vue) rather than via provide/inject - inject through default
    // slot content is ambiguous in Vue 2, so this sidesteps it entirely.
    data() {
        return {
            connectors: {},
            segments: [],
            size: { w: 0, h: 0 }
        }
    },
    mounted() {
        this._ro = new ResizeObserver(() => this.scheduleRecompute())
        this._ro.observe(this.$refs.wrap)
        window.addEventListener('resize', this.scheduleRecompute)
        this.scheduleRecompute()
    },
    beforeDestroy() {
        if (this._ro) this._ro.disconnect()
        window.removeEventListener('resize', this.scheduleRecompute)
        if (this._raf) cancelAnimationFrame(this._raf)
    },
    methods: {
        // orientation: 'right' (edge-to-edge, mostly horizontal curve) or
        // 'down' (edge-to-edge, mostly vertical curve)
        register(id, fromEl, toEl, orientation) {
            this.connectors[id] = { fromEl, toEl, orientation }
            this.scheduleRecompute()
        },
        unregister(id) {
            if (this.connectors[id]) {
                delete this.connectors[id]
                this.scheduleRecompute()
            }
        },
        scheduleRecompute() {
            if (this._raf) cancelAnimationFrame(this._raf)
            this._raf = requestAnimationFrame(() => this.recompute())
        },
        recompute() {
            const wrap = this.$refs.wrap
            if (!wrap) return
            const wrapRect = wrap.getBoundingClientRect()
            const segs = []

            Object.keys(this.connectors).forEach((id) => {
                const { fromEl, toEl, orientation } = this.connectors[id]
                if (!fromEl || !toEl || !fromEl.isConnected || !toEl.isConnected) return
                const fr = fromEl.getBoundingClientRect()
                const tr = toEl.getBoundingClientRect()

                let x1, y1, x2, y2, d
                if (orientation === 'down') {
                    x1 = fr.left + fr.width / 2 - wrapRect.left
                    y1 = fr.bottom - wrapRect.top
                    x2 = tr.left + tr.width / 2 - wrapRect.left
                    y2 = tr.top - wrapRect.top
                    const dy = Math.max(20, (y2 - y1) * 0.5)
                    d = `M ${x1} ${y1} C ${x1} ${y1 + dy}, ${x2} ${y2 - dy}, ${x2} ${y2}`
                } else {
                    x1 = fr.right - wrapRect.left
                    y1 = fr.top + fr.height / 2 - wrapRect.top
                    x2 = tr.left - wrapRect.left
                    y2 = tr.top + tr.height / 2 - wrapRect.top
                    const dx = Math.max(24, (x2 - x1) * 0.5)
                    d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`
                }
                segs.push({ id, d })
            })

            this.segments = segs
            // Measure the content column, not the wrap's scrollWidth/Height -
            // the SVG is an absolutely-positioned sibling that would
            // otherwise inflate the wrap's scroll size, which we'd then read
            // back in as this size on the next pass (never shrinking back
            // down once the diagram had grown, e.g. after Reset).
            const content = this.$refs.content
            this.size = content ? { w: content.offsetWidth, h: content.offsetHeight } : { w: 0, h: 0 }
        }
    }
}
</script>

<style scoped>
.flow-canvas-wrap {
    position: relative;
}

.flow-canvas-content {
    position: relative;
    z-index: 1;
}

.flow-canvas-svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    pointer-events: none;
    overflow: visible;
}

.flow-connector-path {
    fill: none;
    stroke: var(--border-strong);
    stroke-width: 1.5;
}

.flow-connector-arrowhead {
    fill: var(--border-strong);
}
</style>
