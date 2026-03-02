<template>
    <div class="row">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <!-- <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet"> -->

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
        <meta name="viewport" content="viewport-fit=contain, width=device-width, initial-scale=1">


        <nuxt />


    </div>
</template>

<script>
export default {
    data() {
        return {
            activityTimeout: null,
            inactivityDuration: 600000 // 1 minute
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
        
    }
}
</script>

<style></style>
