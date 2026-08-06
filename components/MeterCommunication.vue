<template>
  <div class="meter-container">
    <div class="meter-box">
      <div class="meter">
        <div class="outer-circle" :style="gradientStyle">
          <div class="inner-circle">
            <div class="needle" :style="{ transform: currentRotation }"></div>
          </div>
        </div>
      </div>
      
      <div class="label center-align">
        <span :style="{ color: statusColor }">{{ percentage }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      // Start at the far left (Level 0 position)
      currentRotation: 'translate(-50%, -50%) rotate(-100deg)'
    };
  },
  computed: {
    // Dynamic color for the text and gradient logic
    statusColor() {
      const p = parseFloat(this.percentage);
      if (p < 40) return '#ea3e3e'; // Red
      if (p < 75) return '#fdd835'; // Yellow/Gold
      return '#2e7d32'; // Green
    },
    gradientStyle() {
      const p = parseFloat(this.percentage) || 0;
      const color = this.statusColor;
      // Fills the arc with the status color up to the percentage point
      return {
        backgroundImage: `conic-gradient(from 270deg at 50% 100%, ${color} 0deg, ${color} ${ (p/100) * 180 }deg, #eee 0deg)`
      };
    }
  },
  watch: {
    // Watch for prop changes to re-trigger animation
    percentage(newVal) {
      this.animateNeedle(newVal);
    }
  },
  mounted() {
    // Small timeout ensures the DOM is ready to transition from the default -100deg
    setTimeout(() => {
      this.animateNeedle(this.percentage);
    }, 100);
  },
  methods: {
    animateNeedle(val) {
      const p = parseFloat(val) || 0;
      // Map 0-100 to -100deg to +80deg
      const deg = (p / 100) * 180 - 100;
      this.currentRotation = `translate(-50%, -50%) rotate(${deg}deg)`;
    }
  }
};
</script>

<style scoped>
.meter-container {
  display: flex;
  justify-content: center;
  width: 100%;
  /* add some breathing room inside the card */
  padding: 12px 50px 10px 50px;
}

.meter-box {
  width: 200px;
  /* ensure meter is centered and spaced away from card edges */
  margin: 0 8px;
}

.meter {
  position: relative;
  height: 100px; /* Semi-circle height */
  width: 200px;
  overflow: hidden;
}

.outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  height: 200px; /* Full circle diameter */
  width: 200px;
  border-radius: 50%;
  background-color: var(--meter-track);
  /* Smooth transition for the background color fill */
  transition: background-image 0.5s ease;
}

.inner-circle {
  position: absolute;
  top: 20px;
  left: 20px;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background: var(--bg-card);
  z-index: 2;
}

.needle {
  position: absolute;
  top: 80px; /* Pivot point at the bottom center of the semi-circle */
  left: 100px;
  height: 16px;
  width: 16px;
  background-color: var(--meter-needle);
  border-radius: 50%;
  z-index: 5;
  /* CRITICAL: The transition property must be here */
  transition: transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform-origin: center center;
}

.needle::before {
  content: "";
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 70px;
  background-color: var(--meter-needle);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.label {
  margin-top: 10px;
}

.label span {
  font-size: 28px;
  font-weight: bold;
}
</style>