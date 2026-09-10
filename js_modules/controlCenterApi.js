// Client for the streaming-dashboard-api Control Center backend.
// See static/api_live_responses3.md for endpoint/field documentation and live response samples.
// Endpoints are added here incrementally as each screen gets wired up.

// Native calendar/month inputs draw their own picker-open icon, which we hide (see
// ::-webkit-calendar-picker-indicator rules) in favor of our own Material icon sitting next to
// them. But that icon is a separate DOM element from the (now invisible) native one, so
// clicking it does nothing on its own — this opens the picker programmatically instead. Bind
// it with @click on the wrapping pill/box (its currentTarget), not the icon itself, so a click
// anywhere in the filter box works, not just a pixel-precise hit on the icon.
export function openDatePicker(e) {
  const input = e.currentTarget.querySelector('input[type="date"], input[type="month"]')
  if (!input) return
  try {
    if (typeof input.showPicker === 'function') {
      input.showPicker()
    } else {
      input.focus()
    }
  } catch (err) {
    // showPicker() can throw (e.g. not called from a direct user gesture in some browsers) —
    // focusing the input is a harmless fallback that still lets the user type/tab into it.
    input.focus()
  }
}

const BASE_URL = process.env.CONTROL_CENTER_API_BASE_URL

function buildQuery(params = {}) {
  const search = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      search.append(key, value)
    }
  })
  const qs = search.toString()
  return qs ? `?${qs}` : ''
}

// The doc's per-endpoint timings are explicitly "warm second-call" numbers (i.e. cache
// hits). A first-time query against an uncached filter combination (e.g. a specific
// business_unit) can take a good deal longer, so give those room before giving up.
const REQUEST_TIMEOUT_MS = 40000

async function get(path, params) {
  const url = `${BASE_URL}${path}${buildQuery(params)}`
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  console.log(`[controlCenterApi] GET ${url}`)
  try {
    const response = await fetch(url, { signal: controller.signal })
    if (!response.ok) {
      throw new Error(`Control Center API error: ${response.status} ${response.statusText} (${path})`)
    }
    const data = await response.json()
    console.log(`[controlCenterApi] response for ${path}`, data)
    return data
  } catch (err) {
    if (err.name === 'AbortError') {
      const timeoutErr = new Error(`Request to ${path} timed out after ${REQUEST_TIMEOUT_MS / 1000}s — is ${BASE_URL} reachable? (VPN connected?)`)
      console.error(`[controlCenterApi] ${timeoutErr.message}`)
      throw timeoutErr
    }
    console.error(`[controlCenterApi] request failed for ${path}`, err)
    throw err
  } finally {
    clearTimeout(timeoutId)
  }
}

// Reads the first defined value found at any of the given dot-paths.
// The API doc doesn't always show a full example JSON shape for every
// section, so callers probe a few plausible field names and fall back
// gracefully instead of crashing or silently showing a fabricated number.
export function pick(obj, paths, fallback = undefined) {
  for (const path of paths) {
    const value = path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj)
    if (value !== undefined && value !== null) return value
  }
  return fallback
}

export function formatNumber(value) {
  // Number(null) is 0, not NaN — without this check a genuinely-absent value (e.g.
  // control-center/summary's always-null customercomplaints fields) would render as "0"
  // instead of the "—" that actually reflects "no data".
  if (value === null || value === undefined) return '—'
  const n = Number(value)
  return Number.isFinite(n) ? n.toLocaleString() : '—'
}

// Builds N ascending 'YYYY-MM-01' month strings ending at baseMonth (or today).
export function lastNMonths(baseMonthStr, n) {
  const base = baseMonthStr ? new Date(baseMonthStr) : new Date()
  const months = []
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(base.getFullYear(), base.getMonth() - i, 1)
    months.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-01`)
  }
  return months
}

export function monthLabel(monthStr) {
  const d = new Date(monthStr)
  return Number.isNaN(d.getTime()) ? monthStr : d.toLocaleString('en-US', { month: 'short' })
}

// Builds N ascending 'YYYY-MM-DD' date strings ending at baseDate (or today).
export function lastNDays(baseDateStr, n) {
  const base = baseDateStr ? new Date(baseDateStr) : new Date()
  const days = []
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() - i)
    days.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`)
  }
  return days
}

export function dayLabel(dateStr) {
  const d = new Date(dateStr)
  return Number.isNaN(d.getTime()) ? dateStr : d.toLocaleString('en-US', { month: 'short', day: 'numeric' })
}

// 'YYYY-MM-DD' for today — used to cap date pickers so they can't select a future day.
export function todayStr() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// 'YYYY-MM' for the current month — used to cap <input type="month"> pickers.
export function currentMonthStr() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

// Aggregates a daily {date, ...values} trend into Day/Week/Month buckets client-side — for
// screens whose API has no period/granularity param (or one we can't confirm actually changes
// anything server-side) but does return full daily data for the current month. valueKeys lists
// which numeric fields to sum per bucket (e.g. ['vended', 'collected']). Month collapses the
// whole series to one point since these trends never span more than a single month.
export function aggregateDailyTrend(trend, mode, valueKeys) {
  if (!trend || !trend.length) return []
  const sumKeys = (rows) => {
    const out = {}
    valueKeys.forEach((k) => { out[k] = rows.reduce((sum, r) => sum + (r[k] || 0), 0) })
    return out
  }
  if (mode === 'Day') {
    return trend.map((t) => ({ label: dayLabel(t.date), ...sumKeys([t]) }))
  }
  if (mode === 'Week') {
    const buckets = []
    for (let i = 0; i < trend.length; i += 7) {
      const slice = trend.slice(i, i + 7)
      const label = slice.length > 1
        ? `${dayLabel(slice[0].date)}–${dayLabel(slice[slice.length - 1].date)}`
        : dayLabel(slice[0].date)
      buckets.push({ label, ...sumKeys(slice) })
    }
    return buckets
  }
  return [{ label: monthLabel(trend[0].date), ...sumKeys(trend) }]
}

// Formats a percentage value for display; null/undefined render as "—" rather than "null%".
export function formatPct(value) {
  if (value === null || value === undefined) return '—'
  return `${value}%`
}

// The business units that appear across the API's business_unit-keyed responses
// (availability/summary is the canonical source — see its feeders_by_business_unit /
// dts_by_business_unit sample). Shared across screens since it's the same dimension.
export const BUSINESS_UNITS = ['All', 'Oshodi', 'Shomolu', 'Akowonjo', 'Ikeja', 'Ikorodu', 'Abule Egba', 'Md Kam']

// Feeder/energy bands used across the API's band-keyed responses (energy_allocation_by_band,
// feeders_by_band, myto/summary's band_compliance, etc).
export const FEEDER_BANDS = ['All', 'A', 'B', 'C', 'D', 'E']

const BAND_ORDER = ['A', 'B', 'C', 'D', 'E']
const BAND_COLORS = ['#5b7cfa', '#3ec9a7', '#a56ef0', '#e74c3c', '#f5a623']

// Consistent color per band across every chart that breaks data down by band, keyed by
// band letter rather than array position so it stays correct even if an endpoint ever
// returns bands in a different order (or a subset).
export function bandColor(band) {
  const i = BAND_ORDER.indexOf(band)
  return i >= 0 ? BAND_COLORS[i] : '#999'
}

// 1. End-to-End Overview — top KPI cards + Grid Network map on the
// End-to-End Energy Dashboard screen.
export function getEndToEndOverview({ date, business_unit, marker_limit } = {}) {
  return get('/end-to-end/overview', { date, business_unit, marker_limit })
}

// 2. Energy Flow — the TS -> Customer cascade on the Energy Flow Diagram screen. Only these
// five params are real filters; there's no way to filter specifically by ISS / Transformer 2 /
// 11kV Incomer / 11kV Outgoing Feeder even though the UI lets a user browse the relationship
// tree that deep — see energy_flow_diagram.vue for how that's handled.
export function getEnergyFlow({ ts, transformer, feeder_33kva, dt, dt_type } = {}) {
  return get('/energy-flow', { ts, transformer, feeder_33kva, dt, dt_type })
}

// 3. Control Center Summary — Control Center Dashboard screen. No params, always the
// latest snapshot.
export function getControlCenterSummary() {
  return get('/control-center/summary')
}

// 4. Availability Summary — Availability Summary screen.
export function getAvailabilitySummary({ date, feeder_band, business_unit } = {}) {
  return get('/availability/summary', { date, feeder_band, business_unit })
}

// 5. DT Availability — Dashboard screen (single-DT target/actual metrics + trend).
// Every doc example passes a specific dt_name and there's no documented "All" behavior for
// this endpoint (unlike #6 below), so treat it as effectively required.
export function getDtAvailabilityDashboard({ dt_name, period } = {}) {
  return get('/dt-availability/dashboard', { dt_name, period })
}

// 6. DT Availability — Table (paginated). dt_name defaults to 'All'.
export function getDtAvailabilityTable({ dt_name, date, page, page_size } = {}) {
  return get('/dt-availability/table', { dt_name, date, page, page_size })
}

// 7. MYTO Summary — Feeders MYTO Energy Dashboard screen.
export function getMytoSummary({ feeder_band, period } = {}) {
  return get('/myto/summary', { feeder_band, period })
}

// 8. IDB Dashboard — IDB Dashboard screen's Dashboard tab.
export function getIdbDashboard({ feeder, date } = {}) {
  return get('/idb/dashboard', { feeder, date })
}

// 9. IDB Feeder to DT Loss (paginated) — "Feeder to DT loss Table" tab.
export function getIdbFeederDtLoss({ feeder, date, page, page_size } = {}) {
  return get('/idb/feeder-dt-loss', { feeder, date, page, page_size })
}

// 10. IDB Customer to DT Loss (paginated) — "Customer to DT loss Table" tab.
export function getIdbCustomerDtLoss({ feeder, date, page, page_size } = {}) {
  return get('/idb/customer-dt-loss', { feeder, date, page, page_size })
}

// Highlights the peak point in a trend series, matching the Figma mocks' static callout
// bubbles. leftPct is index-based (evenly spaced x-axis) rather than pixel-measured against
// actual Chart.js geometry, so it's a close approximation, not exact.
export function buildTrendCallout(trend, valueKey, titleFn, valueLabel) {
  if (!trend || !trend.length) return null
  let peakIdx = 0
  trend.forEach((t, i) => {
    if ((t[valueKey] || 0) > (trend[peakIdx][valueKey] || 0)) peakIdx = i
  })
  const leftPct = trend.length > 1 ? (peakIdx / (trend.length - 1)) * 100 : 50
  return {
    title: titleFn(trend[peakIdx]),
    value: valueLabel(trend[peakIdx][valueKey]),
    leftPct: Math.min(90, Math.max(5, leftPct))
  }
}
