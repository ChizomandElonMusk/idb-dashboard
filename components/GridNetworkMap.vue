<template>
    <div class="grid-map-wrap">
        <div ref="mapEl" class="grid-map-el"></div>
    </div>
</template>

<script>
// Leaflet + OpenStreetMap tiles — no API key required. Leaflet touches `window`/`document`
// at import time, so it must only ever be loaded on the client, hence the dynamic import
// inside mounted() rather than a top-level `import`.
export default {
    name: 'GridNetworkMap',
    props: {
        markers: {
            type: Array,
            default: () => []
        },
        center: {
            type: Array,
            default: () => [6.6386, 3.3730]
        },
        zoom: {
            type: Number,
            default: 14
        }
    },
    data() {
        return {
            map: null,
            markerLayer: null,
            L: null
        }
    },
    mounted() {
        this.initMap()
    },
    beforeDestroy() {
        if (this.map) {
            this.map.remove()
            this.map = null
        }
    },
    watch: {
        // Markers arrive after an async API call resolves, well after mount, so the map
        // must redraw them rather than only plotting whatever was passed in at mount time.
        markers() {
            this.renderMarkers()
        },
        center(next) {
            if (this.map) this.map.setView(next, this.zoom)
        }
    },
    methods: {
        async initMap() {
            const L = await import('leaflet')
            this.L = L

            this.map = L.map(this.$refs.mapEl, {
                scrollWheelZoom: false
            }).setView(this.center, this.zoom)

            // Esri's free World Street Map tiles — no API key required, unlike Google/Carto.
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, HERE, Garmin, OpenStreetMap contributors',
                maxZoom: 19
            }).addTo(this.map)

            this.markerLayer = L.layerGroup().addTo(this.map)
            this.renderMarkers()
        },
        renderMarkers() {
            if (!this.L || !this.markerLayer) return

            const iconFor = (status) => this.L.icon({
                iconUrl: `/${status}.svg`,
                iconSize: [26, 26],
                iconAnchor: [13, 13],
                popupAnchor: [0, -13]
            })

            const icons = {
                online: iconFor('online'),
                offline: iconFor('offline'),
                inactive: iconFor('inactive')
            }

            this.markerLayer.clearLayers()
            this.markers.forEach((m) => {
                const marker = this.L.marker([m.lat, m.lng], { icon: icons[m.status] || icons.online })
                marker.on('click', () => this.$emit('marker-click', m))
                marker.addTo(this.markerLayer)
            })
        }
    }
}
</script>

<style scoped>
.grid-map-wrap {
    width: 100%;
    height: 100%;
}

.grid-map-el {
    width: 100%;
    height: 100%;
    min-height: 380px;
}
</style>
