<template>
    <transition name="dt-modal-fade">
        <div v-if="marker" class="dt-modal-overlay" @click.self="$emit('close')">
            <div class="dt-modal-card">
                <div class="dt-modal-header">
                    <h4 class="dt-modal-title">{{ marker.label }}<br />Details</h4>
                    <button class="dt-modal-close" aria-label="Close" @click="$emit('close')">
                        <i class="material-icons">close</i>
                    </button>
                </div>

                <div class="dt-modal-grid">
                    <div class="dt-modal-box">
                        <span class="dt-modal-label">Status</span>
                        <div class="dt-modal-status">
                            <i class="marker-dot" :class="statusDotClass"></i>
                            <b class="dt-modal-value">{{ statusLabel }}</b>
                        </div>
                    </div>
                    <div class="dt-modal-box">
                        <span class="dt-modal-label">Type</span>
                        <b class="dt-modal-value">{{ details.type }}</b>
                    </div>

                    <div class="dt-modal-box">
                        <span class="dt-modal-label">Address</span>
                        <b class="dt-modal-value dt-modal-address">
                            <i class="material-icons tiny">place</i>{{ details.address }}
                        </b>
                    </div>
                    <div class="dt-modal-box">
                        <span class="dt-modal-label">Total Energy</span>
                        <b class="dt-modal-value dt-modal-accent">{{ details.totalEnergy }}</b>
                    </div>

                    <div class="dt-modal-box">
                        <span class="dt-modal-label">Voltage</span>
                        <b class="dt-modal-value dt-modal-voltage">{{ details.voltage }}</b>
                    </div>
                    <div class="dt-modal-box">
                        <span class="dt-modal-label">Loss</span>
                        <div class="dt-modal-loss">
                            <div class="dt-modal-loss-track">
                                <div class="dt-modal-loss-fill" :style="{ width: details.loss + '%' }"></div>
                            </div>
                            <b class="dt-modal-value">{{ details.loss }}%</b>
                        </div>
                    </div>

                    <template v-if="showFullDetails">
                        <div class="dt-modal-box">
                            <span class="dt-modal-label">Feeder Band</span>
                            <b class="dt-modal-value dt-modal-band">{{ details.feederBand }}</b>
                        </div>
                        <div class="dt-modal-box">
                            <span class="dt-modal-label">Availability (Hrs)</span>
                            <b class="dt-modal-value dt-modal-accent">{{ details.availabilityHrs }}</b>
                        </div>

                        <div class="dt-modal-box dt-modal-box-wide">
                            <span class="dt-modal-label">Last Updated</span>
                            <b class="dt-modal-value">{{ details.lastUpdated }}</b>
                        </div>

                        <div class="dt-modal-box dt-modal-box-wide">
                            <span class="dt-modal-label">Location Coordinates</span>
                            <b class="dt-modal-value dt-modal-mono">{{ details.coordinates }}</b>
                        </div>
                    </template>
                </div>

                <button v-if="!showFullDetails" class="dt-modal-full-btn" @click="showFullDetails = true">
                    View Full Details
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
// Detail fields (type, address, energy readings, feeder band, etc.) are not yet exposed by the
// backend for individual grid network assets, so they're derived deterministically from the
// marker's own data here. Swap `details` for real API data once that endpoint ships.
export default {
    name: 'DTDetailsModal',
    props: {
        marker: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            showFullDetails: false
        }
    },
    computed: {
        statusLabel() {
            const status = this.marker?.status || 'online'
            return status.charAt(0).toUpperCase() + status.slice(1)
        },
        statusDotClass() {
            const map = { online: 'green', offline: 'red', inactive: 'orange' }
            return map[this.marker?.status] || 'green'
        },
        details() {
            if (!this.marker) return {}
            const seed = this.seedFromString(this.marker.label || '')
            const isFeeder = /feeder/i.test(this.marker.label || '')

            return {
                type: seed % 2 === 0 ? 'Public' : 'Private',
                address: this.marker.address || 'Adeniyi Jones ISS',
                totalEnergy: `${(200 + (seed % 400) + (seed % 100) / 100).toFixed(2)}KWH`,
                voltage: isFeeder ? (seed % 2 === 0 ? '33kV' : '11kV') : '33kV',
                loss: 30 + (seed % 60),
                feederBand: `Band ${String.fromCharCode(65 + (seed % 4))}`,
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
    methods: {
        seedFromString(str) {
            let hash = 0
            for (let i = 0; i < str.length; i++) {
                hash = (hash * 31 + str.charCodeAt(i)) >>> 0
            }
            return hash
        },
        formatDate(date) {
            return date.toLocaleString('en-US', {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            })
        }
    }
}
</script>

<style scoped>
.dt-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 20px;
}

.dt-modal-card {
    background: var(--bg-card);
    border-radius: 16px;
    width: 100%;
    max-width: 560px;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    padding: 24px 28px 28px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.dt-modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
}

.dt-modal-title {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.25;
    color: var(--text-primary);
    margin: 0;
}

.dt-modal-close {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-muted);
    padding: 4px;
    line-height: 0;
    flex-shrink: 0;
}

.dt-modal-close:hover { color: var(--text-primary); }

.dt-modal-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 20px;
}

.dt-modal-box {
    background: var(--bg-card-alt);
    border-radius: 10px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.dt-modal-box-wide {
    grid-column: 1 / -1;
    background: rgba(66, 133, 244, 0.08);
}

.dt-modal-label {
    font-size: 12px;
    color: var(--text-muted);
}

.dt-modal-value {
    font-size: 16px;
    color: var(--text-primary);
    font-weight: 700;
}

.dt-modal-mono {
    font-family: monospace;
}

.dt-modal-status {
    display: flex;
    align-items: center;
    gap: 8px;
}

.dt-modal-address {
    display: flex;
    align-items: center;
    gap: 4px;
}

.dt-modal-address .material-icons {
    font-size: 16px;
    color: var(--text-muted);
}

.dt-modal-accent { color: #2fa360; }
.dt-modal-voltage { color: #2266dd; }
.dt-modal-band { color: #8a3fd1; }

.dt-modal-loss {
    display: flex;
    align-items: center;
    gap: 10px;
}

.dt-modal-loss-track {
    flex: 1;
    height: 6px;
    border-radius: 3px;
    background: var(--divider);
    overflow: hidden;
}

.dt-modal-loss-fill {
    height: 100%;
    background: #c0392b;
    border-radius: 3px;
}

.marker-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
}

.marker-dot.green  { background: #2fa360; }
.marker-dot.red    { background: #c0392b; }
.marker-dot.orange { background: #e8a325; }

.dt-modal-full-btn {
    width: 100%;
    background: #2266ee;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 14px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
}

.dt-modal-full-btn:hover { background: #1a52c4; }

.dt-modal-fade-enter-active,
.dt-modal-fade-leave-active {
    transition: opacity 0.15s ease;
}

.dt-modal-fade-enter,
.dt-modal-fade-leave-to {
    opacity: 0;
}

@media only screen and (max-width: 600px) {
    .dt-modal-grid { grid-template-columns: 1fr; }
}
</style>
