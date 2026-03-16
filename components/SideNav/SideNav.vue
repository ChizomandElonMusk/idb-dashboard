<template>
    <div>
        <ul id="slide-out" class="sidenav sidenav-fixed z-depth-0">
            <li class="logo-container center-align">
                <img src="~/assets/images/logo.png" alt="Logo" class="responsive-img"
                    style="width: 60px; margin-top: 20px;">
            </li>
            <li v-for="item in menuItems" :key="item.title" :class="{ active: isActive(item) }">
                <nuxt-link :to="item.url" :class="{ 'red-text text-darken-2': isActive(item) }">
                    <i class="material-icons">{{ item.icon }}</i>
                    <b style="font-weight: 500; font-size: 10px;">
                        {{ item.title }}
                    </b>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/" class="red-text">
                    <i class="material-icons">lock</i>
                    <b style="font-weight: 500; font-size: 10px;">
                        Logout
                    </b>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SideNav',
    data() {
        return {
            menuItems: [
                // { title: 'End-To-End Energy Dashboard', icon: 'dashboard' },
                // { title: 'Energy Flow Diagram', icon: 'dashboard' },
                { title: 'Control Center Dashboard', icon: 'dashboard', url: '/control_center_dashboard' },
                { title: 'Availability Summary', icon: 'dashboard', url: '/availability_summary' },
                { title: 'DT Availability', icon: 'dashboard', url: '/dt_availability' },
                { title: 'MYTO Dashboard', icon: 'dashboard', url: '/myto_dashboard' },
                { title: 'IDB Dashboard', icon: 'dashboard', url: '/idb_dashboard' },
                { title: 'IDB Events', icon: 'dashboard', url: '/idb_events' },
            ]
        }
    },
    methods: {
        isActive(item) {
            return this.$route.path === item.url
        }
    }
}
</script>

<style scoped>
.dashboard-wrapper {
    background-color: #f8f9fd;
    min-height: 100vh;
}

.sidenav {
    width: 260px;
    border-right: 1px solid #eee;
}

.main-content {
    padding-left: 280px;
    padding-right: 20px;
    padding-top: 20px;
}

.stats-card {
    border-radius: 12px;
    position: relative;
}

.icon-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}

.stats-text .value {
    font-size: 24px;
    font-weight: bold;
}

.stats-text p {
    margin: 0;
    font-size: 12px;
}

.badge {
    position: absolute;
    top: 15px;
    right: 15px;
    border-radius: 4px !important;
}

.mini-chart-card {
    border-radius: 12px;
    margin-bottom: 10px;
}

.tiny-text {
    font-size: 11px;
    margin-bottom: 5px;
}

.border-right {
    border-right: 1px solid #eee;
}

.tabs {
    background: transparent;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
}

.tabs .tab a {
    color: #888;
    text-transform: none;
}

.tabs .tab a.active {
    border-bottom: 2px solid #e91e63;
}

@media only screen and (max-width: 992px) {
    .main-content {
        padding-left: 20px;
    }
}
</style>