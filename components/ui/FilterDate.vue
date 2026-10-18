<template>
    <label class="fd" @click="open">
        <Icon name="calendar" :size="15" class="fd-ico" />
        <span class="fd-text">
            <span class="fd-label">{{ label }}</span>
            <span class="fd-value">{{ display }}</span>
        </span>
        <Icon name="chevDown" :size="14" class="fd-ico" />
        <input
            ref="input"
            class="fd-input"
            :type="type"
            :value="value"
            :max="max"
            :min="min"
            tabindex="-1"
            @change="$emit('change', $event.target.value)"
        />
    </label>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'

const MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Design-styled date/month filter pill. Uses the browser's native picker underneath so
// keyboard + mobile pickers keep working; emits `change` with YYYY-MM or YYYY-MM-DD.
export default {
    name: 'FilterDate',
    components: { Icon },
    props: {
        value: { type: String, default: '' },
        type: { type: String, default: 'date' }, // 'date' | 'month'
        label: { type: String, default: 'Date' },
        max: { type: String, default: undefined },
        min: { type: String, default: undefined }
    },
    computed: {
        display() {
            if (!this.value) return 'Latest'
            const [y, m, d] = this.value.split('-').map(Number)
            if (!y || !m) return this.value
            return this.type === 'month' ? `${MN[m - 1]} ${y}` : `${String(d).padStart(2, '0')} ${MN[m - 1]} ${y}`
        }
    },
    methods: {
        open() {
            const el = this.$refs.input
            try {
                if (typeof el.showPicker === 'function') el.showPicker()
                else el.focus()
            } catch (e) {
                el.focus()
            }
        }
    }
}
</script>

<style scoped>
.fd {
    position: relative; display: flex; align-items: center; gap: 8px; background: var(--surface-2); border: 1px solid var(--border-strong);
    border-radius: 9px; padding: 0 11px; height: 38px; cursor: pointer; color: var(--text);
}
.fd:focus-within { border-color: var(--primary); }
.fd-ico { color: var(--text-3); }
.fd-text { display: flex; flex-direction: column; align-items: flex-start; line-height: 1.05; }
.fd-label { font-size: 9px; font-weight: 700; letter-spacing: .06em; color: var(--text-3); text-transform: uppercase; }
.fd-value { font-family: var(--mono); font-size: 12px; font-weight: 700; white-space: nowrap; }
.fd-input { position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; opacity: 0; pointer-events: none; border: 0; padding: 0; margin: 0; }
</style>
