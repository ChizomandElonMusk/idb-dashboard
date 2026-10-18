<template>
    <div class="ie-fadein" aria-busy="true" aria-label="Loading">
        <div class="sk-grid sk-grid--kpi">
            <div v-for="i in 4" :key="'k' + i" class="ie-card">
                <div class="ie-skel" style="width:30px;height:30px;border-radius:8px"></div>
                <div class="ie-skel" style="width:46%;height:10px;margin-top:16px"></div>
                <div class="ie-skel" style="width:68%;height:28px;margin-top:10px"></div>
                <div class="ie-skel" style="width:100%;height:7px;margin-top:18px;border-radius:999px"></div>
            </div>
        </div>
        <div class="sk-grid sk-grid--charts">
            <div class="ie-card">
                <div class="ie-skel" style="width:34%;height:13px"></div>
                <div class="ie-skel" style="width:22%;height:9px;margin-top:8px"></div>
                <div class="sk-bars">
                    <div v-for="(h, i) in [42, 68, 54, 86, 61, 74, 48]" :key="i" class="ie-skel" :style="{ height: h + '%' }"></div>
                </div>
            </div>
            <div class="ie-card">
                <div class="ie-skel" style="width:48%;height:13px"></div>
                <div class="sk-donut-row">
                    <div class="ie-skel sk-donut"></div>
                    <div class="sk-lines">
                        <div class="ie-skel" style="width:80%;height:10px"></div>
                        <div class="ie-skel" style="width:64%;height:10px"></div>
                        <div class="ie-skel" style="width:72%;height:10px"></div>
                        <div class="ie-skel" style="width:52%;height:10px"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ie-card">
            <div class="ie-skel" style="width:22%;height:13px"></div>
            <div class="sk-rule"></div>
            <div v-for="i in 5" :key="'r' + i" class="sk-row">
                <div class="ie-skel" style="height:10px;width:82%"></div>
                <div class="ie-skel" style="height:10px;width:70%"></div>
                <div class="ie-skel" style="height:10px;width:60%"></div>
                <div class="ie-skel" style="height:10px;width:50%;justify-self:end"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default { name: 'SkeletonPage' }
</script>

<style scoped>
.sk-grid { display: grid; gap: 14px; margin-bottom: 14px; }
.sk-grid--kpi { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }
.sk-grid--charts { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
.sk-bars { display: flex; align-items: flex-end; gap: 10px; height: 190px; margin-top: 20px; }
.sk-bars > div { flex: 1; }
.sk-donut-row { display: flex; align-items: center; gap: 18px; margin-top: 22px; }
.sk-donut { width: 128px; height: 128px; border-radius: 50%; flex: none; -webkit-mask: radial-gradient(circle, transparent 42px, #000 43px); mask: radial-gradient(circle, transparent 42px, #000 43px); }
.sk-lines { flex: 1; display: flex; flex-direction: column; gap: 12px; }
.sk-rule { height: 2px; background: color-mix(in srgb, var(--primary) 35%, transparent); margin: 18px 0 2px; }
.sk-row { display: grid; grid-template-columns: 2fr 1.4fr 1fr 1fr; gap: 16px; padding: 14px 0; border-bottom: 1.5px dotted var(--border-strong); }
</style>
