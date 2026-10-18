<template>
    <transition name="dt-modal-fade">
        <div v-if="marker" class="ie-backdrop" @click.self="$emit('close')">
            <div class="ie-modal ie-fadeup" role="dialog" aria-modal="true">
                <div class="dm-head" :style="{ background: meta.soft }">
                    <div class="pt-circuit ie-layer" :style="{ color: meta.color, opacity: .12 }"></div>
                    <div class="dm-head-row">
                        <span class="dm-head-ico"><img :src="'/' + status + '.svg'" alt="" /></span>
                        <div style="flex:1;min-width:0">
                            <div class="dm-kicker" :style="{ color: meta.color }">Distribution transformer</div>
                            <div class="dm-title">{{ marker.label }}</div>
                            <div class="dm-feeder mono">{{ marker.feederName || '—' }}</div>
                        </div>
                        <button class="ie-icon-btn" aria-label="Close" @click="$emit('close')"><Icon name="x" :size="15" /></button>
                    </div>
                </div>

                <div class="dm-grid">
                    <div class="ie-stat-box">
                        <div class="ie-stat-label">Status</div>
                        <div style="display:flex;align-items:center;gap:7px;margin-top:5px">
                            <span class="dm-dot" :style="{ background: meta.color }"></span>
                            <span class="ie-stat-value" style="margin:0" :style="{ color: meta.color }">{{ meta.label }}</span>
                        </div>
                    </div>
                    <div class="ie-stat-box">
                        <div class="ie-stat-label">Type</div>
                        <div class="ie-stat-value">{{ details.type }}</div>
                    </div>
                    <div class="ie-stat-box dm-wide">
                        <div class="ie-stat-label">Address</div>
                        <div class="ie-stat-value" style="display:flex;align-items:center;gap:6px;font-size:13.5px;font-weight:700">
                            <Icon name="pin" :size="14" style="color:var(--primary)" />{{ details.address }}
                        </div>
                    </div>
                    <div class="ie-stat-box">
                        <div class="ie-stat-label">Total energy</div>
                        <div class="mono ie-stat-value" style="font-size:15px;color:var(--primary-press)">{{ details.totalEnergy }} <span style="font-size:11px;color:var(--text-3)">kWh</span></div>
                    </div>
                    <div class="ie-stat-box">
                        <div class="ie-stat-label">Voltage</div>
                        <div class="mono ie-stat-value" style="font-size:15px">{{ details.voltage }}</div>
                    </div>
                    <div class="ie-stat-box dm-wide">
                        <div style="display:flex;align-items:baseline;justify-content:space-between">
                            <span class="ie-stat-label">Loss</span>
                            <span class="mono" style="font-size:14px;font-weight:700" :style="{ color: lossColor }">{{ details.loss }}%</span>
                        </div>
                        <div class="ie-track" style="margin-top:8px"><div class="ie-fill" :style="{ width: details.loss + '%', background: lossColor }"></div></div>
                    </div>

                    <template v-if="showFullDetails">
                        <div class="ie-stat-box">
                            <div class="ie-stat-label">Feeder band</div>
                            <div style="display:flex;align-items:center;gap:8px;margin-top:5px">
                                <span class="ie-band" :style="{ background: bandSoft, color: bandColor }">{{ band }}</span>
                                <span v-if="bandTarget" style="font-size:12px;color:var(--text-3);font-weight:600">{{ bandTarget }}h target</span>
                            </div>
                        </div>
                        <div class="ie-stat-box">
                            <div class="ie-stat-label">Availability</div>
                            <div class="mono ie-stat-value" style="font-size:15px;color:var(--success)">{{ details.availabilityHrs }}<span style="font-size:11px;color:var(--text-3)"> hrs</span></div>
                        </div>
                        <div class="ie-stat-box dm-wide" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
                            <div><div class="ie-stat-label">Last updated</div><div style="font-size:13px;font-weight:700;margin-top:5px">{{ details.lastUpdated }}</div></div>
                            <div style="text-align:right"><div class="ie-stat-label">Coordinates</div><div class="mono" style="font-size:12.5px;font-weight:700;margin-top:5px">{{ details.coordinates }}</div></div>
                        </div>
                    </template>
                </div>

                <div class="dm-actions">
                    <button v-if="!showFullDetails" class="ie-btn dm-btn" @click="showFullDetails = true">View full details</button>
                    <button class="ie-btn dm-btn" @click="openDt">Open in DT Availability<Icon name="arrowR" :size="14" /></button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'
import { bandColorVar, bandSoftVar } from '~/js_modules/pages'

const BAND_TARGET = { A: 20, B: 16, C: 12, D: 8, E: 4 }
const STATUS = {
    online: { label: 'Online', color: 'var(--success)', soft: 'var(--success-soft)' },
    offline: { label: 'Offline', color: 'var(--danger)', soft: 'var(--danger-soft)' },
    inactive: { label: 'Inactive', color: 'var(--warning)', soft: 'var(--warning-soft)' }
}

// Detail fields (type, address, energy readings, etc.) are not yet exposed by the backend
// for individual grid network assets, so they're derived deterministically from the
// marker's own data here. Swap `details` for real API data once that endpoint ships.
export default {
    name: 'DTDetailsModal',
    components: { Icon },
    props: {
        marker: { type: Object, default: null }
    },
    data() {
        return { showFullDetails: false }
    },
    computed: {
        status() {
            return STATUS[this.marker?.status] ? this.marker.status : 'online'
        },
        meta() {
            return STATUS[this.status]
        },
        band() {
            return this.marker?.band || this.details.feederBand
        },
        bandColor() {
            return bandColorVar(this.band)
        },
        bandSoft() {
            return bandSoftVar(this.band)
        },
        bandTarget() {
            return BAND_TARGET[this.band] || null
        },
        lossColor() {
            const l = this.details.loss || 0
            return l >= 50 ? 'var(--danger)' : l >= 25 ? 'var(--warning)' : 'var(--success)'
        },
        details() {
            if (!this.marker) return {}
            const seed = this.seedFromString(this.marker.label || '')
            const isFeeder = /feeder/i.test(this.marker.label || '')
            return {
                type: seed % 2 === 0 ? 'Public' : 'Private',
                address: this.marker.address || 'Adeniyi Jones ISS',
                totalEnergy: (200 + (seed % 400) + (seed % 100) / 100).toFixed(2),
                voltage: isFeeder ? (seed % 2 === 0 ? '33kV' : '11kV') : '33kV',
                loss: 30 + (seed % 60),
                feederBand: String.fromCharCode(65 + (seed % 4)),
                availabilityHrs: 12 + (seed % 12),
                lastUpdated: this.formatDate(new Date(Date.now() - (seed % 72) * 3600 * 1000)),
                coordinates: `${this.marker.lat.toFixed(4)}, ${this.marker.lng.toFixed(4)}`
            }
        }
    },
    watch: {
        marker() {
            this.showFullDetails = false
        }
    },
    mounted() {
        window.addEventListener('keydown', this.onKey)
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.onKey)
    },
    methods: {
        onKey(e) {
            if (e.key === 'Escape' && this.marker) this.$emit('close')
        },
        openDt() {
            const name = this.marker && this.marker.label
            this.$emit('close')
            this.$router.push({ path: '/dt_availability', query: name ? { dt: name } : {} })
        },
        seedFromString(str) {
            let hash = 0
            for (let i = 0; i < str.length; i++) {
                hash = (hash * 31 + str.charCodeAt(i)) >>> 0
            }
            return hash
        },
        formatDate(date) {
            return date.toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
        }
    }
}
</script>

<style scoped>
.ie-backdrop { z-index: 2000; }
.dm-head { position: relative; overflow: hidden; border-bottom: 1px solid var(--border); padding: 18px 20px; }
.dm-head-row { position: relative; display: flex; align-items: flex-start; gap: 13px; }
.dm-head-ico { width: 44px; height: 44px; border-radius: 12px; background: var(--surface); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; flex: none; box-shadow: var(--shadow-xs); }
.dm-head-ico img { width: 26px; height: 26px; }
.dm-kicker { font-size: 10.5px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; }
.dm-title { font-size: 16px; font-weight: 800; letter-spacing: -.3px; margin-top: 3px; line-height: 1.25; word-break: break-word; }
.dm-feeder { font-size: 11.5px; color: var(--text-2); margin-top: 3px; }
.dm-grid { padding: 16px 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.dm-wide { grid-column: 1 / -1; }
.dm-dot { width: 8px; height: 8px; border-radius: 50%; }
.dm-actions { display: flex; gap: 9px; padding: 0 20px 18px; }
.dm-btn { flex: 1; padding: 11px; font-size: 13px; border-radius: 10px; background: var(--surface); }
.dt-modal-fade-enter-active, .dt-modal-fade-leave-active { transition: opacity .15s ease; }
.dt-modal-fade-enter, .dt-modal-fade-leave-to { opacity: 0; }
@media (max-width: 600px) { .dm-grid { grid-template-columns: 1fr; } .dm-actions { flex-direction: column; } }
</style>
