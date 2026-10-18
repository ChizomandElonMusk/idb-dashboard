<template>
    <div class="ie-bolts shell">
        <aside class="side" :class="{ hidden: focusMode }" :aria-hidden="focusMode ? 'true' : 'false'">
            <div class="side-circuit"><div class="pt-circuit"></div></div>
            <div class="side-rule"></div>
            <div class="side-brand">
                <div class="side-logo"><img src="~/assets/images/logo.png" alt="Ikeja Electric" /></div>
                <div class="side-brand-text">
                    <div class="side-brand-name">Grid Intelligence</div>
                    <div class="side-brand-org">IKEJA ELECTRIC</div>
                </div>
            </div>
            <nav class="side-nav ie-scroll">
                <template v-for="g in groups">
                    <div :key="g.label + '-h'" class="side-group">{{ g.label.toUpperCase() }}</div>
                    <component
                        :is="n.soon ? 'div' : 'nuxt-link'"
                        v-for="n in g.items"
                        :key="n.key"
                        :to="n.url"
                        class="side-item"
                        :class="{ on: n.key === currentKey, soon: n.soon }"
                    >
                        <span v-if="n.key === currentKey" class="side-item-bar"></span>
                        <Icon :name="n.icon" :size="17" class="side-item-icon" />
                        <span class="side-item-label">{{ n.label }}</span>
                        <span v-if="n.soon" class="side-soon">SOON</span>
                    </component>
                </template>
            </nav>
            <div class="side-foot">
                <div class="side-user">
                    <div class="side-avatar">{{ initials }}</div>
                    <div class="side-user-text">
                        <div class="side-user-name">{{ displayName }}</div>
                        <div class="side-user-role">Control Centre</div>
                    </div>
                    <button class="side-logout" title="Sign out" @click="logout"><Icon name="logout" :size="16" /></button>
                </div>
            </div>
        </aside>

        <div ref="main" class="main ie-scroll">
            <header class="top">
                <div class="top-left">
                    <button class="ie-icon-btn" :class="{ active: focusMode }" :title="focusTip" :aria-label="focusTip" @click="toggleFocus">
                        <Icon :name="focusMode ? 'panelR' : 'panelL'" :size="17" />
                    </button>
                    <button class="ie-icon-btn" :class="{ active: isFs }" :title="fsTip" :aria-label="fsTip" @click="toggleFs">
                        <Icon :name="isFs ? 'fsOut' : 'fsIn'" :size="16" />
                    </button>
                    <div v-if="!focusMode && meta" class="crumb">
                        <span>{{ meta.group }}</span><Icon name="chevRight" :size="13" /><span class="crumb-now">{{ meta.title }}</span>
                    </div>
                    <div v-if="focusMode && meta" ref="ps" class="ps">
                        <button class="ps-btn ie-fadein" :class="{ open: psOpen }" @click="togglePs">
                            <span class="ps-logo"><img src="~/assets/images/logo.png" alt="" /></span>
                            <span class="ps-text"><span class="ps-group">{{ meta.group }}</span><span class="ps-title">{{ meta.title }}</span></span>
                            <Icon name="chevDown" :size="14" class="ps-chev" />
                            <span class="kbd">{{ modKey }}K</span>
                        </button>
                        <div v-if="psOpen" class="ps-pop ie-fadeup">
                            <div class="ps-search">
                                <Icon name="search" :size="16" />
                                <input ref="psInput" v-model="psQuery" placeholder="Jump to a page…" @keydown="onPsKey" />
                                <span class="kbd">esc</span>
                            </div>
                            <div class="ps-list ie-scroll">
                                <div v-for="g in psGroups" :key="g.label">
                                    <div class="ps-group-label">{{ g.label }}</div>
                                    <div v-for="it in g.items" :key="it.key" class="ps-item" :class="{ on: it.key === currentKey }" @click="go(it)">
                                        <span class="ps-item-ico"><Icon :name="it.icon" :size="15" /></span>
                                        <span class="ps-item-label">{{ it.label }}</span>
                                        <span v-if="it.key === currentKey" class="ps-current">Current</span>
                                        <span v-else-if="it.soon" class="ps-soon">Soon</span>
                                    </div>
                                </div>
                                <div v-if="!psGroups.length" class="ps-empty">No page matches “{{ psQuery }}”</div>
                            </div>
                            <div class="ps-foot"><span>↵ to open</span><span>{{ modKey }}B toggles sidebar</span></div>
                        </div>
                    </div>
                </div>
                <div class="top-right">
                    <div class="live">
                        <span class="live-dot ie-pulse"></span>
                        <span class="live-text">Live · {{ lastSync }}</span>
                    </div>
                    <button class="ie-icon-btn" title="Toggle theme" aria-label="Toggle theme" @click="$theme.toggle()">
                        <client-only><Icon :name="$theme.isDark ? 'sun' : 'moon'" :size="17" /></client-only>
                    </button>
                    <div class="ie-icon-btn bell" title="Notifications"><Icon name="bell" :size="17" /><span class="bell-dot"></span></div>
                </div>
            </header>

            <nuxt />
        </div>
    </div>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'
import { NAV_GROUPS, PAGE_META, pageKeyForPath } from '~/js_modules/pages'

const MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default {
    components: { Icon },
    data() {
        return {
            groups: NAV_GROUPS,
            focusMode: false,
            isFs: false,
            psOpen: false,
            psQuery: '',
            lastSync: '',
            username: '',
            modKey: 'Ctrl+',
            activityTimeout: null,
            inactivityDuration: 600000
        }
    },
    computed: {
        currentKey() {
            return pageKeyForPath(this.$route.path)
        },
        meta() {
            return PAGE_META[this.currentKey] || null
        },
        focusTip() {
            return (this.focusMode ? 'Show sidebar' : 'Hide sidebar') + ' (' + this.modKey + 'B)'
        },
        fsTip() {
            return this.isFs ? 'Exit full screen' : 'Full screen'
        },
        displayName() {
            if (!this.username) return 'Signed in'
            return this.username.split(/[._\s]+/).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
        },
        initials() {
            const parts = this.displayName.split(' ').filter(Boolean)
            return ((parts[0] || '?')[0] + ((parts[1] || '')[0] || '')).toUpperCase()
        },
        psGroups() {
            const q = this.psQuery.trim().toLowerCase()
            return NAV_GROUPS
                .map((g) => ({ label: g.label, items: g.items.filter((i) => !q || i.label.toLowerCase().includes(q)) }))
                .filter((g) => g.items.length)
        }
    },
    watch: {
        $route() {
            this.psOpen = false
            this.stampSync()
            if (this.$refs.main) this.$refs.main.scrollTop = 0
        }
    },
    mounted() {
        this.modKey = /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘' : 'Ctrl+'
        try {
            this.username = localStorage.getItem('username') || ''
            this.focusMode = localStorage.getItem('ie-focus') === '1'
        } catch (e) {}
        if (window.innerWidth < 900) this.focusMode = true
        this.stampSync()
        window.addEventListener('keydown', this.onKey)
        document.addEventListener('mousedown', this.onDocDown)
        document.addEventListener('fullscreenchange', this.onFsChange)
        this.initializeActivityTracking()
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.onKey)
        document.removeEventListener('mousedown', this.onDocDown)
        document.removeEventListener('fullscreenchange', this.onFsChange)
        this.cleanupActivityTracking()
    },
    methods: {
        stampSync() {
            const d = new Date()
            this.lastSync = `${d.getDate()} ${MN[d.getMonth()]}, ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
        },
        toggleFocus() {
            this.focusMode = !this.focusMode
            this.psOpen = false
            try { localStorage.setItem('ie-focus', this.focusMode ? '1' : '0') } catch (e) {}
        },
        async toggleFs() {
            try {
                if (document.fullscreenElement) await document.exitFullscreen()
                else await document.documentElement.requestFullscreen()
            } catch (e) {}
        },
        onFsChange() {
            this.isFs = !!document.fullscreenElement
        },
        togglePs() {
            this.psOpen = !this.psOpen
            this.psQuery = ''
            if (this.psOpen) this.$nextTick(() => this.$refs.psInput && this.$refs.psInput.focus())
        },
        onPsKey(e) {
            if (e.key === 'Escape') this.psOpen = false
            if (e.key === 'Enter') {
                const first = this.psGroups.flatMap((g) => g.items).find((i) => !i.soon)
                if (first) this.go(first)
            }
        },
        go(item) {
            if (item.soon || !item.url) return
            this.psOpen = false
            this.$router.push(item.url)
        },
        onKey(e) {
            const mod = e.metaKey || e.ctrlKey
            if (mod && e.key.toLowerCase() === 'b') {
                e.preventDefault()
                this.toggleFocus()
            } else if (mod && e.key.toLowerCase() === 'k') {
                e.preventDefault()
                if (!this.focusMode) this.focusMode = true
                this.$nextTick(() => this.togglePs())
            } else if (e.key === 'Escape') {
                this.psOpen = false
            }
        },
        onDocDown(e) {
            if (this.psOpen && this.$refs.ps && !this.$refs.ps.contains(e.target)) this.psOpen = false
        },
        logout() {
            this.$router.push('/')
        },
        initializeActivityTracking() {
            this.resetActivityTimer()
            window.addEventListener('touchstart', this.resetActivityTimer)
            window.addEventListener('touchmove', this.resetActivityTimer)
            window.addEventListener('click', this.resetActivityTimer)
            document.addEventListener('visibilitychange', this.handleVisibilityChange)
        },
        cleanupActivityTracking() {
            this.clearActivityTimer()
            window.removeEventListener('touchstart', this.resetActivityTimer)
            window.removeEventListener('touchmove', this.resetActivityTimer)
            window.removeEventListener('click', this.resetActivityTimer)
            document.removeEventListener('visibilitychange', this.handleVisibilityChange)
        },
        resetActivityTimer() {
            this.clearActivityTimer()
            this.activityTimeout = setTimeout(() => this.logout(), this.inactivityDuration)
        },
        handleVisibilityChange() {
            if (document.visibilityState === 'hidden') this.clearActivityTimer()
            else this.resetActivityTimer()
        },
        clearActivityTimer() {
            if (this.activityTimeout) clearTimeout(this.activityTimeout)
        }
    }
}
</script>

<style scoped>
.shell { display: flex; min-height: 100vh; background-color: var(--canvas); color: var(--text); }

/* sidebar */
.side {
    width: 248px; flex: none; margin-left: 0; transition: margin-left .3s cubic-bezier(.2,.8,.2,1);
    z-index: 35; background: #1A1814; display: flex; flex-direction: column;
    position: sticky; top: 0; height: 100vh; border-right: 1px solid rgba(255,255,255,.07); overflow: hidden;
}
.side.hidden { margin-left: -248px; }
.side-circuit {
    position: absolute; left: 0; right: 0; bottom: 0; height: 260px; pointer-events: none;
    -webkit-mask-image: linear-gradient(to top, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%);
    mask-image: linear-gradient(to top, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%);
}
.side-circuit .pt-circuit { width: 100%; height: 100%; color: var(--primary); opacity: .2; }
.side-rule { position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: linear-gradient(90deg, var(--primary), var(--accent)); pointer-events: none; }
.side-brand { position: relative; display: flex; align-items: center; gap: 11px; padding: 18px; border-bottom: 1px solid rgba(255,255,255,.08); }
.side-logo { width: 38px; height: 38px; border-radius: 10px; background: #fff; display: flex; align-items: center; justify-content: center; flex: none; }
.side-logo img { width: 28px; height: 28px; object-fit: contain; }
.side-brand-text { line-height: 1.1; }
.side-brand-name { font-weight: 800; font-size: 14.5px; color: #fff; letter-spacing: -.3px; }
.side-brand-org { font-size: 10px; color: rgba(255,255,255,.45); font-weight: 600; letter-spacing: .05em; }
.side-nav { position: relative; flex: 1; overflow-y: auto; padding: 12px 10px; display: flex; flex-direction: column; gap: 2px; }
.side-group { font-size: 9.5px; font-weight: 700; letter-spacing: .09em; color: rgba(255,255,255,.35); padding: 16px 12px 6px; }
.side-group:first-child { padding-top: 8px; }
.side-item {
    display: flex; align-items: center; gap: 11px; padding: 9px 12px; border-radius: 9px;
    font-size: 12.5px; font-weight: 600; color: rgba(255,255,255,.66); cursor: pointer; position: relative;
}
.side-item:hover { background: rgba(255,255,255,.055); color: #fff; }
.side-item.on { background: rgba(255,255,255,.08); color: #fff; font-weight: 700; }
.side-item.on .side-item-icon { color: var(--primary); }
.side-item.soon { cursor: default; color: rgba(255,255,255,.4); }
.side-item.soon:hover { background: transparent; color: rgba(255,255,255,.4); }
.side-item-icon { color: rgba(255,255,255,.5); }
.side-item-bar { position: absolute; left: 0; top: 9px; bottom: 9px; width: 3px; border-radius: 0 3px 3px 0; background: var(--primary); }
.side-item-label { flex: 1; line-height: 1.25; }
.side-soon { font-size: 8.5px; font-weight: 700; letter-spacing: .05em; color: rgba(255,255,255,.4); border: 1px solid rgba(255,255,255,.16); border-radius: 4px; padding: 1px 5px; }
.side-foot { position: relative; padding: 10px 10px 13px; border-top: 1px solid rgba(255,255,255,.08); }
.side-user { display: flex; align-items: center; gap: 10px; padding: 8px; border-radius: 10px; background: rgba(255,255,255,.05); }
.side-avatar { width: 32px; height: 32px; border-radius: 999px; background: var(--accent); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 12px; flex: none; }
.side-user-text { line-height: 1.2; flex: 1; min-width: 0; }
.side-user-name { font-size: 12px; font-weight: 700; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.side-user-role { font-size: 10px; color: rgba(255,255,255,.45); }
.side-logout { flex: none; background: none; border: none; color: rgba(255,255,255,.45); cursor: pointer; display: flex; padding: 4px; }
.side-logout:hover { color: #fff; }

/* main */
.main { flex: 1; min-width: 0; height: 100vh; overflow-y: auto; overflow-x: hidden; }

/* topbar */
.top {
    display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 0 28px; height: 58px;
    background: color-mix(in srgb, var(--canvas) 86%, transparent); backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 30;
}
.top-left { display: flex; align-items: center; gap: 12px; min-width: 0; }
.top-right { display: flex; align-items: center; gap: 9px; }
.ie-icon-btn.active { background: var(--primary-soft); border-color: color-mix(in srgb, var(--primary) 40%, transparent); color: var(--primary-press); }
.crumb { display: flex; align-items: center; gap: 10px; font-size: 12.5px; color: var(--text-3); font-weight: 600; white-space: nowrap; }
.crumb-now { color: var(--text); font-weight: 700; }
.live { display: flex; align-items: center; gap: 7px; background: var(--success-soft); border: 1px solid color-mix(in srgb, var(--success) 26%, transparent); border-radius: 999px; padding: 5px 11px; }
.live-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--success); }
.live-text { font-size: 11px; font-weight: 700; color: var(--success); white-space: nowrap; }
.bell { position: relative; cursor: default; }
.bell-dot { position: absolute; top: 7px; right: 8px; width: 7px; height: 7px; border-radius: 50%; background: var(--accent); border: 2px solid var(--surface); }

/* page switcher (focus mode) */
.ps { position: relative; min-width: 0; }
.ps-btn {
    display: flex; align-items: center; gap: 10px; background: var(--surface); border: 1px solid var(--border);
    border-radius: 10px; padding: 5px 10px 5px 6px; cursor: pointer; color: var(--text); box-shadow: var(--shadow-xs); max-width: 100%;
}
.ps-btn.open { border-color: var(--primary); }
.ps-logo { width: 26px; height: 26px; border-radius: 7px; background: #fff; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; flex: none; }
.ps-logo img { width: 18px; height: 18px; object-fit: contain; }
.ps-text { display: flex; flex-direction: column; align-items: flex-start; line-height: 1.1; min-width: 0; }
.ps-group { font-size: 9.5px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--text-3); }
.ps-title { font-size: 13px; font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ps-chev { color: var(--text-3); }
.kbd { font-family: var(--mono); font-size: 10px; font-weight: 700; color: var(--text-3); border: 1px solid var(--border); border-radius: 5px; padding: 1px 5px; flex: none; white-space: nowrap; }
.ps-pop {
    position: absolute; left: 0; top: calc(100% + 8px); z-index: 60; width: 340px; max-width: calc(100vw - 40px);
    background: var(--surface); border: 1px solid var(--border); border-radius: 14px; box-shadow: var(--shadow-xl); overflow: hidden;
}
.ps-search { display: flex; align-items: center; gap: 9px; padding: 11px 13px; border-bottom: 1px solid var(--border); color: var(--text-3); }
.ps-search input { flex: 1; border: none; background: transparent; font-size: 13px; color: var(--text); outline: none; }
.ps-list { max-height: 420px; overflow-y: auto; overflow-x: hidden; padding: 6px; }
.ps-group-label { font-size: 9.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; color: var(--text-3); padding: 10px 10px 5px; }
.ps-item { display: flex; align-items: center; gap: 11px; padding: 8px 10px; border-radius: 9px; cursor: pointer; }
.ps-item:hover { background: var(--surface-2); }
.ps-item.on { background: var(--primary-soft); }
.ps-item-ico { width: 28px; height: 28px; border-radius: 8px; background: var(--surface-3); color: var(--text-2); display: flex; align-items: center; justify-content: center; flex: none; }
.ps-item.on .ps-item-ico { background: var(--primary); color: var(--on-primary); }
.ps-item-label { flex: 1; font-size: 13px; font-weight: 600; }
.ps-item.on .ps-item-label { font-weight: 800; }
.ps-current { font-size: 10.5px; font-weight: 700; color: var(--primary-press); }
.ps-soon { font-size: 10.5px; font-weight: 700; color: var(--text-3); }
.ps-empty { padding: 18px 10px; text-align: center; font-size: 12.5px; color: var(--text-3); }
.ps-foot { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 9px 13px; border-top: 1px solid var(--border); background: var(--surface-2); font-size: 11px; color: var(--text-3); font-weight: 600; }

@media (max-width: 900px) {
    .side { position: fixed; left: 0; top: 0; }
    .top { padding: 0 16px; }
    .crumb { display: none; }
    .live { display: none; }
    .ps-btn .kbd { display: none; }
    .top-left { gap: 8px; }
}
</style>
