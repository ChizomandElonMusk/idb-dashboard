<template>
    <div class="ph">
        <div v-if="loading" class="ph-prog"><div class="ie-prog"></div></div>
        <div class="ph-pattern"><div :class="meta.pattern" :style="{ color: meta.color }"></div></div>
        <div v-if="meta.photo" class="ph-photo ie-fadein">
            <img src="/grid-hero.jpg" alt="" />
            <div class="ph-photo-fade"></div>
        </div>
        <div class="ph-inner">
            <div>
                <div class="ph-kicker" :style="{ color: meta.color }">{{ meta.kicker }}</div>
                <h1 class="ph-title">{{ meta.title }}</h1>
                <div class="ph-sub">{{ meta.sub }}</div>
            </div>
            <div v-if="$slots.default" class="ph-filters">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import { PAGE_META } from '~/js_modules/pages'

export default {
    name: 'PageHeader',
    props: {
        page: { type: String, required: true },
        loading: { type: Boolean, default: false }
    },
    computed: {
        meta() {
            return PAGE_META[this.page] || {}
        }
    }
}
</script>

<style scoped>
.ph { position: relative; z-index: 20; background: var(--surface); border-bottom: 1px solid var(--border); }
.ph-prog { position: absolute; left: 0; right: 0; top: -1px; height: 2px; overflow: hidden; background: color-mix(in srgb, var(--primary) 18%, transparent); z-index: 2; }
.ph-prog .ie-prog { height: 100%; width: 38%; background: var(--primary); border-radius: 2px; }
.ph-pattern { position: absolute; inset: 0; opacity: .5; overflow: hidden; pointer-events: none; }
.ph-pattern > div { width: 100%; height: 100%; opacity: .09; }
.ph-photo { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.ph-photo img { position: absolute; right: 0; top: 0; width: 64%; height: 100%; object-fit: cover; object-position: center 58%; }
.ph-photo-fade { position: absolute; inset: 0; background: linear-gradient(90deg, var(--surface) 36%, color-mix(in srgb, var(--surface) 62%, transparent) 58%, color-mix(in srgb, var(--surface) 8%, transparent) 100%); }
.ph-inner { position: relative; max-width: 1460px; margin: 0 auto; padding: 22px 28px; display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
.ph-kicker { font-size: 10.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; }
.ph-title { font-size: 26px; font-weight: 800; letter-spacing: -.9px; margin: 5px 0 0; line-height: 1.2; }
.ph-sub { font-size: 13px; color: var(--text-2); margin-top: 3px; }
.ph-filters { display: flex; gap: 9px; flex-wrap: wrap; align-items: center; align-self: stretch; }
@media (max-width: 720px) {
    .ph-inner { padding: 18px 16px; }
    .ph-photo img { width: 100%; opacity: .35; }
}
</style>
