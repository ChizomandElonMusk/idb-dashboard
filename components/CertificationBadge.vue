<template>
  <span class="cert-badge" :class="`cert-badge--${tone}`">
    <i class="material-icons cert-badge__icon">{{ icon }}</i>
    {{ label }}
  </span>
</template>

<script>
const STATUS_MAP = {
  ready: { label: 'Ready', tone: 'ready', icon: 'check_circle' },
  requires_validation: { label: 'Requires business validation', tone: 'warning', icon: 'warning' },
  pending: { label: 'Pending source', tone: 'pending', icon: 'schedule' },
  partial: { label: 'Partial', tone: 'warning', icon: 'info' }
}

export default {
  name: 'CertificationBadge',
  props: {
    status: {
      type: String,
      required: true,
      validator: value => Object.keys(STATUS_MAP).includes(value)
    },
    text: {
      type: String,
      default: null
    }
  },
  computed: {
    label() {
      return this.text || STATUS_MAP[this.status].label
    },
    tone() {
      return STATUS_MAP[this.status].tone
    },
    icon() {
      return STATUS_MAP[this.status].icon
    }
  }
}
</script>

<style scoped>
.cert-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  border: 1px solid var(--border-strong);
  color: var(--text-secondary);
  background: var(--bg-card-alt);
}

.cert-badge__icon {
  font-size: 13px;
  line-height: 1;
}

.cert-badge--ready {
  color: #1b8a5a;
  background: rgba(27, 138, 90, 0.12);
  border-color: rgba(27, 138, 90, 0.3);
}

.cert-badge--warning {
  color: #b8790a;
  background: rgba(184, 121, 10, 0.12);
  border-color: rgba(184, 121, 10, 0.3);
}

.cert-badge--pending {
  color: var(--text-muted);
  background: var(--bg-card-alt);
  border-color: var(--border-strong);
}
</style>
