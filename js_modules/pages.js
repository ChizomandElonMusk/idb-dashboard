// Sidebar navigation + page header meta for every dashboard screen, from the
// IE Grid Intelligence design. `soon` entries are shown in the sidebar but not routed yet.

export const NAV_GROUPS = [
  {
    label: 'Network',
    items: [
      { key: 'overview', label: 'End-to-End Energy', icon: 'grid', url: '/end_to_end_energy_dashboard' },
      { key: 'flow', label: 'Energy Flow Diagram', icon: 'flow', url: '/energy_flow_diagram' },
      { key: 'control', label: 'Control Centre', icon: 'radar', url: '/control_center_dashboard' }
    ]
  },
  {
    label: 'Availability',
    items: [
      { key: 'availability', label: 'Availability Summary', icon: 'gauge', url: '/availability_summary' },
      { key: 'dt', label: 'DT Availability', icon: 'dt', url: '/dt_availability' }
    ]
  },
  {
    label: 'Commercial',
    items: [
      { key: 'myto', label: 'MYTO Dashboard', icon: 'trendUp', url: '/myto_dashboard' },
      { key: 'idb', label: 'IDB Dashboard', icon: 'shield', url: '/idb_dashboard' },
      { key: 'idbe', label: 'IDB Events', icon: 'alert', url: '/idb_events' }
    ]
  },
  {
    label: 'Operations',
    items: [
      { key: 'alerts', label: 'Asset Notifications', icon: 'bell', soon: true },
      { key: 'flags', label: 'DT/MD Event Flag', icon: 'flag', soon: true },
      { key: 'report', label: 'Reporting Tool', icon: 'clipboard', soon: true }
    ]
  }
]

export const PAGE_META = {
  overview: { group: 'Network', kicker: 'Network performance', title: 'End-to-End Energy', sub: 'Grid injection through to transformer delivery', color: 'var(--primary)', pattern: 'pt-bolts', photo: true },
  flow: { group: 'Network', kicker: 'Loss analysis', title: 'Energy Flow Diagram', sub: 'Where energy is lost between transmission and the customer', color: 'var(--danger)', pattern: 'ie-diag' },
  control: { group: 'Network', kicker: 'Live operations', title: 'Control Centre', sub: 'Network status, energy, vending and collection', color: 'var(--soe)', pattern: 'pt-circuit' },
  availability: { group: 'Availability', kicker: 'Service delivery', title: 'Availability Summary', sub: 'Feeder and transformer performance against band targets', color: 'var(--ca)', pattern: 'pt-chev' },
  dt: { group: 'Availability', kicker: 'Asset detail', title: 'DT Availability', sub: 'Supply hours for a single distribution transformer', color: 'var(--soe)', pattern: 'pt-circuit' },
  myto: { group: 'Commercial', kicker: 'Regulatory compliance', title: 'MYTO Dashboard', sub: 'Feeder band energy shares against the NERC multi-year tariff order', color: 'var(--primary)', pattern: 'pt-chev' },
  idb: { group: 'Commercial', kicker: 'Revenue assurance', title: 'IDB Dashboard', sub: 'Loss and efficiency on Integrated Distribution Business feeders', color: 'var(--soe)', pattern: 'pt-circuit' },
  idbe: { group: 'Commercial', kicker: 'Revenue assurance', title: 'IDB Events', sub: 'Tamper, cover and balance events raised by IDB smart meters', color: 'var(--accent)', pattern: 'ie-diag' }
}

export function pageKeyForPath(path) {
  for (const g of NAV_GROUPS) {
    const hit = g.items.find((i) => i.url && path.replace(/\/$/, '') === i.url)
    if (hit) return hit.key
  }
  return null
}

// Band colours follow the design: A green → E red.
export function bandTone(band) {
  return { A: 'success', B: 'primary', C: 'soe', D: 'warning', E: 'danger' }[band] || null
}
export function bandColorVar(band) {
  const t = bandTone(band)
  return t ? `var(--${t})` : 'var(--text-3)'
}
export function bandSoftVar(band) {
  const t = bandTone(band)
  return t ? `var(--${t}-soft)` : 'var(--surface-3)'
}
