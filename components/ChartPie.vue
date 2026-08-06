<template>
  <div class="chart-pie-wrapper">
    <div class="chart-canvas-container">
      <canvas ref="canvas"></canvas>
      <div class="chart-center-text" v-if="centerText">{{ centerText }}</div>
    </div>
    <div class="chart-legend" v-if="showValueLegend && chartData">
      <div class="legend-grid" :style="{ gridTemplateColumns: `repeat(${legendCols}, 1fr)` }">
        <div class="legend-item" v-for="(label, i) in chartData.labels" :key="i">
          <span class="legend-dot" :style="{ backgroundColor: chartData.datasets[0].backgroundColor[i] }"></span>
          <span class="legend-label">{{ label }}</span>
          <span class="legend-value">{{ chartData.datasets[0].data[i] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    },
    centerText: {
      type: String,
      default: null
    },
    showValueLegend: {
      type: Boolean,
      default: false
    },
    legendCols: {
      type: Number,
      default: 2
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
.chart-pie-wrapper {
  width: 100%;
}

.chart-canvas-container {
  position: relative;
  height: 200px;
}

.chart-center-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-primary);
  pointer-events: none;
}

.chart-legend {
  margin-top: 16px;
}

.legend-grid {
  display: grid;
  gap: 8px 16px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.legend-label {
  color: var(--text-secondary);
  flex: 1;
}

.legend-value {
  font-weight: bold;
  color: var(--text-primary);
}
</style>
