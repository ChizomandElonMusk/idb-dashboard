// Deterministic placeholder-number generator for the Energy Flow Diagram.
// No backend endpoint currently accepts per-level filters (getEnergyFlow only
// takes month/limit), so figures here are derived from the selected path
// string rather than faked randomly - the same selection always reproduces
// the same numbers. Swap this out once the API supports per-node filtering.

export const LEVEL_LABELS = ['TS', 'Transformer', '33kV Feeder', 'ISS', 'Transformer 2', '11kV Incomer', '11kV Outgoing Feeder']
export const LEVEL_COUNT = LEVEL_LABELS.length

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

// A small deterministic list of placeholder DT names for a given path.
// Real DT-level detail isn't in the TSrelationship sheet (it only goes down
// to 11kV Outgoing Feeder / the "33kV DTs" marker) - this stands in until a
// backend endpoint can return the actual DTs connected to a given node.
export function pseudoDtNames(seedStr) {
    const count = Math.round(seededRange(`${seedStr}:count`, 3, 9))
    const names = []
    for (let i = 1; i <= count; i++) {
        const tag = Math.round(seededRange(`${seedStr}:dt:${i}`, 100, 999))
        names.push(`DT-${tag}`)
    }
    return names
}
