<template>
    <div class="row">
        <AdminNavBar />
        <nuxt />
    </div>
</template>

<script>
import AdminNavBar from '~/components/AdminNavBar.vue';
export default {
    components: { AdminNavBar },
    data() {
        return {
            activityTimeout: null,
            inactivityDuration: 1800000 // 1 minute
        }
    },

    beforeUnmount() {
        this.cleanupActivityTracking()
    },

    methods: {
        initializeActivityTracking() {
            // Reset initial timer
            this.resetActivityTimer()

            // Add event listeners
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
            if (this.activityTimeout) {
                clearTimeout(this.activityTimeout)
            }

            this.activityTimeout = setTimeout(() => {
                this.logoutUser()
            }, this.inactivityDuration)
        },
        handleVisibilityChange() {
            if (document.visibilityState === 'hidden') {
                this.clearActivityTimer()
            } else {
                this.resetActivityTimer()
            }
        },
        async logoutUser() {
            try {

                // Redirect to login
                this.$router.push('/')
            } catch (error) {
                console.error('Logout error:', error)
            }
        },
        clearActivityTimer() {
            if (this.activityTimeout) {
                clearTimeout(this.activityTimeout)
            }
        },
    },

    mounted() {
        this.initializeActivityTracking()
    },

    created() {

    },
}
</script>

<style></style>