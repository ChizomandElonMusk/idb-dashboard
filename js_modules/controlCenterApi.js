// Client for the streaming-dashboard-api Control Center backend.
// See static/control_center_api_doc.md for endpoint/field documentation.

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

const REQUEST_TIMEOUT_MS = 15000

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

export function getHealth() {
  return get('/health')
}

export function getOracleStatus() {
  return get('/oracle/status')
}

export function getOverview() {
  return get('/dashboard/overview')
}

export function getControlCenter({ month, date, limit } = {}) {
  return get('/dashboard/control-center', { month, date, limit })
}

export function getEnergyFlow({ month, limit } = {}) {
  return get('/dashboard/energy-flow', { month, limit })
}

export function getAvailabilitySummary() {
  return get('/dashboard/availability-summary')
}

export function getDtAvailability({ date, limit } = {}) {
  return get('/dashboard/dt-availability', { date, limit })
}

export function getFeederAvailability({ date, limit } = {}) {
  return get('/dashboard/feeder-availability', { date, limit })
}

export function getMonthlyEnergy({ month, limit } = {}) {
  return get('/dashboard/monthly-energy', { month, limit })
}

export function getMonthlyEnergyQuality({ month, limit } = {}) {
  return get('/dashboard/monthly-energy-quality', { month, limit })
}

export function getIdbDashboard({ month, quality_limit } = {}) {
  return get('/dashboard/idb', { month, quality_limit })
}

export function getVendingCollection({ limit } = {}) {
  return get('/dashboard/vending-collection', { limit })
}

export function getMytoDashboard({ month, date, limit } = {}) {
  return get('/dashboard/myto', { month, date, limit })
}

export function getIdbEvents({ month, date, limit } = {}) {
  return get('/dashboard/idb-events', { month, date, limit })
}
