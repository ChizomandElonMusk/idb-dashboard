<script>
// Stroke icon set from the IE Grid Intelligence design. Usage: <Icon name="bolt" :size="16" />
const PATHS = {
  bolt: ['M13 2 4 14h7l-1 8 9-12h-7l1-8z'],
  grid: ['M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z'],
  flow: ['M4 6h6M4 6v12h6M14 6h6M14 18h6', 'M10 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0M10 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0'],
  radar: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8', 'M12 12l6-6'],
  gauge: ['M4.5 18a7.5 7.5 0 1 1 15 0', 'M12 18l3.6-4.2'],
  dt: ['M6 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z', 'M9 8V4.5M15 8V4.5', 'M8 4.5h2M14 4.5h2', 'M9 12.5h6M9 15.5h6', 'M4 21h16'],
  feeder: ['M6 3v6M18 3v6M4 9h16l-2 12H6L4 9z', 'M10 13v4M14 13v4'],
  loss: ['M3 6l6 6-3 3 8 3-2-6 4 1-6-8'],
  users: ['M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8', 'M22 20v-2a4 4 0 0 0-3-3.87', 'M16 3.13A4 4 0 0 1 16 11'],
  chat: ['M21 12a8 8 0 0 1-8 8H7l-4 3v-6a8 8 0 0 1 8-8h2a8 8 0 0 1 8 3z'],
  noData: ['M3 3l18 18', 'M12 22a10 10 0 0 0 9.5-13.1', 'M4.2 6A10 10 0 0 0 12 22'],
  tower: ['M6 21 12 3l6 18', 'M8.4 13h7.2', 'M7 17h10', 'M12 3v18'],
  station: ['M3 4h18', 'M8 4v2.5M16 4v2.5', 'M8 6.5a2.2 2.2 0 1 0 0 4.4a2.2 2.2 0 1 0 0-4.4z', 'M8 9.5a2.2 2.2 0 1 0 0 4.4a2.2 2.2 0 1 0 0-4.4z', 'M16 6.5a2.2 2.2 0 1 0 0 4.4a2.2 2.2 0 1 0 0-4.4z', 'M16 9.5a2.2 2.2 0 1 0 0 4.4a2.2 2.2 0 1 0 0-4.4z', 'M8 13.9V17M16 13.9V17', 'M4 17h16', 'M3 20.5h18'],
  cap: ['M9 3v6H5l10 12v-6h4L9 3z'],
  search: ['M11 4a7 7 0 1 0 0 14 7 7 0 1 0 0-14z', 'M20 20l-4-4'],
  bell: ['M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6', 'M10.4 20a1.8 1.8 0 0 0 3.2 0'],
  chevDown: ['M6 9l6 6 6-6'],
  chevRight: ['M9 6l6 6-6 6'],
  arrowR: ['M5 12h14', 'M13 5l7 7-7 7'],
  arrowL: ['M19 12H5', 'M11 5l-7 7 7 7'],
  trendUp: ['M3 17l6-6 4 4 8-8', 'M15 7h6v6'],
  trendDown: ['M3 7l6 6 4-4 8 8', 'M15 17h6v-6'],
  user: ['M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8'],
  lock: ['M6 10V8a6 6 0 0 1 12 0v2', 'M5 10h14v10H5z'],
  eye: ['M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
  eyeOff: ['M3 3l18 18', 'M10.6 10.6a3 3 0 0 0 4.2 4.2', 'M9.4 5.2A9.6 9.6 0 0 1 12 5c6.5 0 10 7 10 7a15 15 0 0 1-3.6 4.2', 'M6.1 6.1A15 15 0 0 0 2 12s3.5 7 10 7a9.6 9.6 0 0 0 3-.5'],
  shield: ['M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z', 'M9 12l2 2 4-4'],
  logout: ['M9 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4', 'M16 17l5-5-5-5', 'M21 12H9'],
  sun: ['M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z', 'M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4'],
  moon: ['M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z'],
  clock: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 7v5l3 2'],
  calendar: ['M5 5h14v16H5z', 'M5 10h14', 'M9 3v4M15 3v4'],
  building: ['M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16', 'M15 9h4a1 1 0 0 1 1 1v11', 'M4 21h17', 'M8 8h3M8 12h3M8 16h3'],
  info: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 11v5', 'M12 8h.01'],
  check: ['M5 12l5 5 9-11'],
  alert: ['M12 8v5', 'M12 17h.01', 'M10.3 3.9 2.4 18a1.8 1.8 0 0 0 1.6 2.7h16a1.8 1.8 0 0 0 1.6-2.7L13.7 3.9a1.9 1.9 0 0 0-3.4 0z'],
  filter: ['M3 5h18l-7 8v6l-4 2v-8L3 5z'],
  plug: ['M9 3v6M15 3v6', 'M7 9h10v3a5 5 0 0 1-10 0V9z', 'M12 17v4'],
  panelL: ['M4 4h16v16H4z', 'M9 4v16', 'M15 10l-2 2 2 2'],
  panelR: ['M4 4h16v16H4z', 'M9 4v16', 'M13 10l2 2-2 2'],
  fsIn: ['M4 9V4h5', 'M20 9V4h-5', 'M4 15v5h5', 'M20 15v5h-5'],
  fsOut: ['M9 4v5H4', 'M15 4v5h5', 'M9 20v-5H4', 'M15 20v-5h5'],
  table: ['M4 5h16v14H4z', 'M4 10h16M10 10v9'],
  x: ['M6 6l12 12', 'M18 6L6 18'],
  flag: ['M5 21V4', 'M5 4h12l-2.5 4L17 12H5'],
  clipboard: ['M9 3h6v3H9z', 'M8 4.5H5.5v16.5h13V4.5H16', 'M9 11h6M9 15h4'],
  wave: ['M3 12h3l2-6 4 12 3-9 2 3h4'],
  load: ['M4 20V10M10 20V4M16 20v-7M22 20H2'],
  volt: ['M12 3v4M12 17v4', 'M8 12h8', 'M6 8l12 8'],
  mail: ['M4 6h16v12H4z', 'M4 7l8 6 8-6'],
  pin: ['M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z', 'M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z']
}

export default {
  name: 'Icon',
  functional: true,
  props: {
    name: { type: String, required: true },
    size: { type: [Number, String], default: 18 },
    stroke: { type: [Number, String], default: 1.8 }
  },
  render(h, { props, data }) {
    const paths = PATHS[props.name] || []
    return h('svg', {
      ...data,
      class: ['ie-icon', data.class],
      attrs: {
        width: props.size, height: props.size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
        'stroke-width': props.stroke, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true',
        ...(data.attrs || {})
      },
      style: { flex: 'none', display: 'block', ...(data.style || {}) }
    }, paths.map((d) => h('path', { attrs: { d } })))
  }
}
</script>
