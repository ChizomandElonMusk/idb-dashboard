<template>
    <div ref="root" class="fs" :class="{ block }">
        <button type="button" class="fs-btn" :class="{ open, compact }" :disabled="disabled" @click="toggle">
            <Icon v-if="icon" :name="icon" :size="15" class="fs-ico" />
            <span v-if="!compact" class="fs-text">
                <span class="fs-label">{{ label }}</span>
                <span class="fs-value" :title="currentLabel">{{ currentLabel }}</span>
            </span>
            <span v-else class="fs-value fs-value--compact" :title="currentLabel">{{ currentLabel }}</span>
            <Icon name="chevDown" :size="14" class="fs-chev" :style="{ transform: open ? 'rotate(180deg)' : 'none' }" />
        </button>
        <div v-if="open" class="fs-pop ie-fadeup" :style="{ minWidth: popWidth }">
            <div v-if="isSearchable" class="fs-search">
                <Icon name="search" :size="15" />
                <input ref="q" v-model="query" placeholder="Search…" @keydown.esc="open = false" @keydown.enter="pickFirst" />
            </div>
            <div class="fs-list ie-scroll">
                <div
                    v-for="o in shown"
                    :key="String(o.value)"
                    class="fs-opt"
                    :class="{ on: o.value === value }"
                    @click="pick(o)"
                >
                    <span class="fs-opt-text" :title="o.label">{{ o.label }}</span>
                    <Icon v-if="o.value === value" name="check" :size="15" class="fs-check" />
                </div>
                <div v-if="!shown.length" class="fs-empty">No match</div>
                <div v-if="clipped" class="fs-empty">Showing first {{ maxShown }} · type to narrow</div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'

// Header filter dropdown from the design: icon + small caps label + current value,
// opening a searchable list. `options` may be strings or { value, label } objects.
export default {
    name: 'FilterSelect',
    components: { Icon },
    props: {
        value: { type: [String, Number], default: null },
        options: { type: Array, default: () => [] },
        label: { type: String, default: '' },
        icon: { type: String, default: '' },
        searchable: { type: Boolean, default: null },
        disabled: { type: Boolean, default: false },
        compact: { type: Boolean, default: false },
        block: { type: Boolean, default: false },
        popWidth: { type: String, default: '240px' }
    },
    data() {
        return { open: false, query: '', maxShown: 300 }
    },
    computed: {
        normalized() {
            return this.options.map((o) => (o !== null && typeof o === 'object' ? o : { value: o, label: String(o) }))
        },
        isSearchable() {
            return this.searchable === null ? this.normalized.length > 8 : this.searchable
        },
        filtered() {
            const q = this.query.trim().toLowerCase()
            return q ? this.normalized.filter((o) => o.label.toLowerCase().includes(q)) : this.normalized
        },
        shown() {
            return this.filtered.slice(0, this.maxShown)
        },
        clipped() {
            return this.filtered.length > this.maxShown
        },
        currentLabel() {
            const hit = this.normalized.find((o) => o.value === this.value)
            return hit ? hit.label : (this.value == null || this.value === '' ? '—' : String(this.value))
        }
    },
    mounted() {
        document.addEventListener('mousedown', this.onDoc)
    },
    beforeDestroy() {
        document.removeEventListener('mousedown', this.onDoc)
    },
    methods: {
        toggle() {
            this.open = !this.open
            this.query = ''
            if (this.open && this.isSearchable) this.$nextTick(() => this.$refs.q && this.$refs.q.focus())
        },
        pick(o) {
            this.open = false
            if (o.value !== this.value) {
                this.$emit('input', o.value)
                this.$emit('change', o.value)
            }
        },
        pickFirst() {
            if (this.shown.length) this.pick(this.shown[0])
        },
        onDoc(e) {
            if (this.open && this.$refs.root && !this.$refs.root.contains(e.target)) this.open = false
        }
    }
}
</script>

<style scoped>
.fs { position: relative; }
.fs.block { width: 100%; }
.fs-btn {
    display: flex; align-items: center; gap: 8px; background: var(--surface-2); border: 1px solid var(--border-strong);
    border-radius: 9px; padding: 0 11px; height: 38px; cursor: pointer; color: var(--text); max-width: 340px; text-align: left;
}
.fs.block .fs-btn { width: 100%; max-width: none; }
.fs-btn.compact { height: auto; padding: 6px 9px 6px 10px; border-radius: 8px; background: var(--surface); border-color: var(--border); }
.fs-btn.open { border-color: var(--primary); }
.fs-btn:disabled { opacity: .5; cursor: default; }
.fs-ico, .fs-chev { color: var(--text-3); flex: none; }
.fs-chev { margin-left: auto; transition: transform .2s; }
.fs-text { display: flex; flex-direction: column; align-items: flex-start; line-height: 1.05; min-width: 0; }
.fs-label { font-size: 9px; font-weight: 700; letter-spacing: .06em; color: var(--text-3); text-transform: uppercase; white-space: nowrap; }
.fs-value { font-size: 12.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 240px; }
.fs-value--compact { flex: 1; min-width: 0; max-width: none; }
.fs-pop {
    position: absolute; left: 0; top: calc(100% + 8px); z-index: 45; max-width: min(400px, calc(100vw - 40px));
    background: var(--surface); border: 1px solid var(--border); border-radius: 12px; box-shadow: var(--shadow-xl); padding: 6px;
}
.fs.block .fs-pop { width: 100%; }
.fs-search { display: flex; align-items: center; gap: 8px; background: var(--surface-2); border: 1px solid var(--border-strong); border-radius: 8px; padding: 7px 10px; margin-bottom: 5px; color: var(--text-3); }
.fs-search input { flex: 1; min-width: 0; border: none; background: transparent; font-size: 12.5px; color: var(--text); outline: none; }
.fs-list { max-height: 300px; overflow-y: auto; overflow-x: hidden; display: flex; flex-direction: column; gap: 1px; }
.fs-opt { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 8px; cursor: pointer; font-size: 12.5px; font-weight: 600; color: var(--text); }
.fs-opt:hover { background: var(--surface-2); }
.fs-opt.on { background: var(--primary-soft); font-weight: 800; }
.fs-opt-text { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fs-check { color: var(--primary-press); }
.fs-empty { padding: 12px 10px; text-align: center; font-size: 12px; color: var(--text-3); }
</style>
