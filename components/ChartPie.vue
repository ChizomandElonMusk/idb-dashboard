<template>
  <div class="chart-pie">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
// use local Chart.js asset located in assets/js/Chart.js (v2.x UMD build)
import Chart from '~/assets/js/Chart.js'

export default {
  name: 'ChartPie',
  props: {
    chartType: {
      type: String,
      default: 'pie'
    },
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => ({ responsive: true, maintainAspectRatio: false })
    }
  },
  data() {
    return {
      chartInstance: null
    }
  },
  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      if (this.chartInstance) {
        this.chartInstance.destroy()
      }
      const ctx = this.$refs.canvas.getContext('2d')
      this.chartInstance = new Chart(ctx, {
        type: this.chartType,
        data: this.chartData,
        options: this.chartOptions
      })
    }
  },
  watch: {
    chartData: {
      handler(newData) {
        if (this.chartInstance) {
          this.chartInstance.data = newData
          this.chartInstance.update()
        } else {
          this.createChart()
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.chart-pie {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
