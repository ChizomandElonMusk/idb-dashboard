// GET /api/v1/energy-flow now backs the Energy Flow Diagram's real numbers (see
// static/api_live_responses3.md #2) - but it only accepts ts/transformer/feeder_33kva/dt/
// dt_type as filters. There's no query param for ISS, Transformer 2, 11kV Incomer, or 11kV
// Outgoing Feeder individually, even though the local relationship tree (ts_relationship.json)
// lets a user browse the hierarchy that deep. So FlowLane.vue only refetches when a TS,
// Transformer, or 33kV Feeder selection changes; the numbers shown for ISS/Transformer 2/11kV
// Incomer/11kV Outgoing Feeder reflect the API's response for whatever TS/Transformer/33kV
// Feeder is currently selected above them (i.e. "All" beneath that point), not the specific
// sub-node the user has drilled into locally. seededRange below is now only used as a
// last-resort fallback for the numeric fields if flowData hasn't loaded yet.
//
// DT names: dt-availability/table's rows carry both dt_name and feeder_name, and feeder_name
// uses the exact same naming convention as this tree's "11kV Outgoing Feeder" leaf keys (e.g.
// "11-AgegeINJ-T1-Iju Road" appears in both places) - so real DT names for the feeder a user
// has drilled into can be looked up from that table instead of faked. See
// energy_flow_diagram.vue's ensureDtNames() for the (paginated, fetched-once) index build, and
// extractFeederFromPathKey() below for pulling the feeder name back out of a card's path.

export const LEVEL_LABELS = ['TS', 'Transformer', '33kV Feeder', 'ISS', 'Transformer 2', '11kV Incomer', '11kV Outgoing Feeder']
export const LEVEL_COUNT = LEVEL_LABELS.length

// Maps each level index to the matching key in the /energy-flow response, and to the field
// within that section holding the entity count (shown as the card's "Total X" footer).
export const LEVEL_RESPONSE_KEYS = ['ts', 'transformer_capacity', 'feeders_33kva', 'iss', 'transformer2', 'incomer_11kva', 'outgoing_feeder_11kva']
export const LEVEL_COUNT_KEYS = ['total_ts', 'total_transformers', 'total_feeders', 'total_iss', 'total_transformer2', 'total_incomers', 'total_feeders']

// Only these levels correspond to real, documented query params (ts/transformer/feeder_33kva) -
// a selection change at level 3+ (ISS onward) can't be sent to the API at all.
export const FILTERABLE_LEVEL_COUNT = 3

function hashCode(str) {
    let h = 0
    for (let i = 0; i < str.length; i++) {
        h = (Math.imul(31, h) + str.charCodeAt(i)) | 0
    }
    return h
}

export function seededFloat(seedStr) {
    const x = Math.sin(hashCode(seedStr)) * 10000
    return x - Math.floor(x)
}

export function seededRange(seedStr, min, max) {
    return min + seededFloat(seedStr) * (max - min)
}

export function fmt(n) {
    return Number(n).toLocaleString('en-US', { maximumFractionDigits: 2 })
}

// Pulls the "11kV Outgoing Feeder" value back out of a card's selfPathKey (built as
// "...>11kV Outgoing Feeder=<value>..."), so the DT card below it can look up real DTs for
// that specific feeder. Returns null if DT is hanging off an earlier level instead (the
// Path B dead-end branch - see FlowLane.vue), since there's no single feeder to key by then.
export function extractFeederFromPathKey(pathKey) {
    const marker = '>11kV Outgoing Feeder='
    const idx = pathKey.lastIndexOf(marker)
    if (idx === -1) return null
    const rest = pathKey.slice(idx + marker.length)
    const nextGt = rest.indexOf('>')
    return nextGt === -1 ? rest : rest.slice(0, nextGt)
}
