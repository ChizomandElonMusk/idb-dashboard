# Control Center Dashboard API Documentation

**API service:** `streaming-dashboard-api`  
**Container:** `streaming-dashboard-api`  
**Port:** `8090`  
**Base URL on server:** `http://127.0.0.1:8090`  
**Base URL for frontend/VPN:** `http://192.168.80.108:8090`  
**API prefix:** `/api/v1`  
**Updated:** 2026-08-20  
**Current backend status:** API regression passed for the certified dashboard scope.

---

## 1. Current Certified Standing

The Control Center dashboard API is live and connected to the PostgreSQL/TimescaleDB warehouse.

Latest regression check passed with HTTP `200` on all certified dashboard endpoints:

| Area | Endpoint | Latest regression | Frontend status |
|---|---|---:|---|
| Health | `/api/v1/health` | 200 | Ready |
| Overview dashboard | `/api/v1/dashboard/overview` | 200 | Ready |
| Control Center dashboard | `/api/v1/dashboard/control-center` | 200 | Ready |
| Availability Summary | `/api/v1/dashboard/availability-summary` | 200 | Ready |
| DT Availability | `/api/v1/dashboard/dt-availability` | 200 | Ready, enriched |
| Feeder Availability | `/api/v1/dashboard/feeder-availability` | 200 | Ready, enriched |
| MYTO Dashboard | `/api/v1/dashboard/myto` | 200 | Ready, certified by enriched mappings |
| IDB Dashboard | `/api/v1/dashboard/idb` | 200 | Ready, filtered IDB prepaid/vending subset |
| Vending Collection | `/api/v1/dashboard/vending-collection` | 200 | Ready |

Additional backend/admin/context endpoints remain available where implemented, but the table above is the certified dashboard set for frontend integration.

---

## 2. Latest Regression Result

| Endpoint | HTTP | Response size |
|---|---:|---:|
| `/api/v1/health` | 200 | 31 bytes |
| `/api/v1/dashboard/overview` | 200 | 799 bytes |
| `/api/v1/dashboard/control-center` | 200 | 8,654 bytes |
| `/api/v1/dashboard/availability-summary` | 200 | 9,983 bytes |
| `/api/v1/dashboard/dt-availability` | 200 | 19,261 bytes |
| `/api/v1/dashboard/feeder-availability` | 200 | 19,965 bytes |
| `/api/v1/dashboard/myto` | 200 | 9,593 bytes |
| `/api/v1/dashboard/idb` | 200 | 9,459 bytes |
| `/api/v1/dashboard/vending-collection` | 200 | 25,080 bytes |

---

## 3. Important Frontend Notes

### 3.1 Energy unit handling

All energy values are currently returned as raw source-derived values from `monthly_consumption`.

Do not label these values as final `kWh`, `MWh`, or `GWh` until the business confirms the correct display unit convention.

Recommended labels:

```text
Energy Raw
Feeder Energy Raw
DT Energy Raw
Consumption Raw
```

### 3.2 Feeder-to-DT loss warning

The API returns feeder-to-DT loss values, but the KPI must show a warning.

Current status:

```text
requires_business_validation
```

Reason:

```text
High-impact feeder rows dominate total feeder energy. Values are retained but flagged.
```

Frontend display recommendation:

```text
Requires business validation
```

or show a warning badge beside the loss KPI.

### 3.3 IDB dashboard scope

Prepaid/Vending and IDB are not the same population.

```text
Prepaid/Vending = wider/global prepaid vending population.
IDB = filtered prepaid/vending subset only.
```

Certified IDB subset filter:

```text
IDB feeders:
- 33-IkoroduTCN-FAKALE SOURCE
- 11-IgbobiINJ-T1-Apata
```

Certified IDB scope flag:

```text
prepaid_vending_only_filtered_to_fakale_source_and_apata
```

The IDB API applies this filter at query level using feeder/customer feeder fields containing `FAKALE` or `APATA`.

Do not include postpaid collection inside the IDB dashboard.

Use `/api/v1/dashboard/vending-collection` if the team needs the wider vending/collection reporting endpoint outside the strict IDB dashboard scope.

### 3.4 Unassigned feeder band

For feeder availability, `Unassigned` means the Oracle feeder master has a `NULL` `G_LINE.band_code`.

This is not a mapping failure.

### 3.5 Unknown voltage handling

Control Center feeder voltage classification uses source voltage/volt code mapping.

Known dashboard voltage classes:

```text
11kV
33kV
```

Unknown voltage feeders are excluded from the main Control Center voltage totals but retained in quality checks.

---

## 4. Common Query Parameters

| Parameter | Type | Used by | Example | Description |
|---|---|---|---|---|
| `month` | string/date | Control Center, MYTO, IDB, energy endpoints | `2026-08-01` | Month start date. Defaults to latest available month. |
| `date` | string/date | DT Availability, Feeder Availability, MYTO, Control Center | `2026-08-19` | Availability date. Defaults to latest available date. |
| `band_code` | string | DT Availability, Feeder Availability | `A` | Optional MYTO band filter. |
| `feeder_voltage_class` | string | DT Availability, Feeder Availability | `11kV` | Optional feeder voltage class filter. |
| `limit` | integer | DT Availability, Feeder Availability, MYTO, Vending Collection | `20` | Number of top/worst/detail records to return. |
| `quality_limit` | integer | IDB Dashboard | `5` | Number of high-impact data-quality rows and top IDB vending rows to return. |

---

## 5. Health Endpoint

### `GET /api/v1/health`

Purpose: confirms API and database connectivity.

Request path:

```text
/api/v1/health
```

Main response keys:

| Key | Description |
|---|---|
| `status` | API status. |
| `database` | Database connection status. |

Example response:

```json
{
  "status": "ok",
  "database": "ok"
}
```

Frontend use:

Use this endpoint for API heartbeat checks.

---

## 6. Overview Dashboard

### `GET /api/v1/dashboard/overview`

Purpose: high-level operational metrics for customers, DTs, feeders, availability and energy.

Request path:

```text
/api/v1/dashboard/overview
```

Query parameters:

None currently required.

Main response fields include:

| Field | Description |
|---|---|
| `latest_month_start` | Latest loaded energy month. |
| `latest_dt_availability_date` | Latest DT availability date. |
| `latest_feeder_availability_date` | Latest feeder availability date. |
| `total_customers` | Total customers from `all_customers`. |
| `metered_customers` | Customers with meter number. |
| `unmetered_customers` | Customers without meter number. |
| `md_customers` | Maximum Demand customers. |
| `nmd_customers` | Non-Maximum Demand customers. |
| `total_dts` | Total DTs. |
| `public_dts` | Public DTs. |
| `private_public_dts` | Private-Public DTs. |
| `private_single_dts` | Private DT-Single. |
| `total_feeders` | Distinct feeders. |
| `total_feeder_energy_raw` | Raw feeder monthly energy. |
| `total_dt_energy_raw` | Raw DT/CLOU monthly energy. |
| `feeder_to_dt_loss_raw` | Raw feeder minus DT energy. |
| `feeder_to_dt_loss_pct` | Feeder-to-DT loss percentage; requires business validation. |
| `avg_dt_availability_hours` | Average DT availability in hours. |
| `avg_feeder_availability_hours` | Average feeder availability in hours. |

Latest validated card values from the IDB/overview-aligned build:

```json
{
  "total_customers": 1769856,
  "metered_customers": 1191035,
  "unmetered_customers": 578821,
  "md_customers": 47915,
  "nmd_customers": 1721941,
  "total_dts": 22283,
  "total_feeders": 407
}
```

---

## 7. Control Center Dashboard

### `GET /api/v1/dashboard/control-center`

Purpose: landing-page dashboard for key customer, DT, feeder, capacity, availability and energy metrics.

Request path:

```text
/api/v1/dashboard/control-center
```

Query parameters:

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest loaded energy month. |
| `date` | No | `2026-08-19` | Defaults to latest availability date. |
| `limit` | No | `10` | Number of detail/top/worst records returned where applicable. |

Main response sections:

| Section | Description |
|---|---|
| `cards` | Main KPI cards. |
| `feeder_summary` | Feeder totals by voltage class and band. |
| `availability` | Combined availability summary. |
| `monthly_energy` | Feeder/DT energy and loss. |
| `quality` | Data-quality/status notes. |

Frontend notes:

```text
Use Control Center endpoint for the dashboard landing page.
Preserve the feeder-to-DT loss validation warning.
Preserve raw energy unit labels.
```

---

## 8. Availability Summary

### `GET /api/v1/dashboard/availability-summary`

Purpose: combined DT and feeder availability summary using enriched DT and feeder mapping views.

Request path:

```text
/api/v1/dashboard/availability-summary
```

Query parameters:

None currently required for the certified summary endpoint.

Main response sections:

| Section | Description |
|---|---|
| `summary` | Combined DT and feeder availability metrics. |
| `by_band` | Availability grouped by MYTO band. |
| `by_band_voltage` | Availability grouped by MYTO band and voltage class. |
| `quality` | Source and mapping notes. |

Certified sources:

```text
curated.v_availability_summary_dashboard
curated.v_dt_availability_enriched
curated.v_feeder_availability_enriched
```

Frontend notes:

```text
Use this endpoint for combined availability summary cards and band-level availability breakdowns.
```

---

## 9. DT Availability

### `GET /api/v1/dashboard/dt-availability`

Purpose: enriched DT availability with DT, feeder, band and voltage context.

Request path:

```text
/api/v1/dashboard/dt-availability
```

Query parameters:

| Parameter | Required | Example | Allowed / expected values | Description |
|---|---:|---|---|---|
| `date` | No | `2026-08-18` | `YYYY-MM-DD` | Defaults to latest DT availability date. |
| `band_code` | No | `A` | `A`, `B`, `C`, `D`, `E`, `Bilateral`, `Unmapped` | Filters DT availability by mapped MYTO band. |
| `feeder_voltage_class` | No | `11kV` | `11kV`, `33kV`, `Unmapped` | Filters by feeder voltage class. |
| `limit` | No | `20` | `1` to `100` | Number of best/worst/unmapped rows returned. |

Main response keys:

| Key | Description |
|---|---|
| `status` | API status. |
| `selected_date` | Date used for the result. |
| `filters` | Echoes applied filters. |
| `summary` | Date-level DT availability summary. |
| `bands` | Availability band counts. |
| `by_band` | DT availability grouped by MYTO band. |
| `by_band_voltage` | DT availability grouped by band and voltage class. |
| `worst_dt_meters` | Lowest availability DT meters with enriched feeder/DT details. |
| `best_dt_meters` | Highest availability DT meters with enriched feeder/DT details. |
| `unmapped_dt_meters` | DT availability rows not mapped to DT power object type 2. |
| `quality` | Source and mapping notes. |

`summary` fields:

| Field | Description |
|---|---|
| `total_dt_meters` | Total DT availability meter rows. |
| `mapped_dt_rows` | Rows mapped using `edw_idb.dt_availability_meter_map`. |
| `unmapped_dt_rows` | Rows not mapped to a DT. |
| `avg_dt_availability_hours` | Average DT availability in hours. |
| `min_dt_availability_hours` | Minimum availability. |
| `max_dt_availability_hours` | Maximum availability. |
| `zero_hours` | DTs with 0 availability hours. |
| `below_12_hours` | DTs above 0 and below 12 hours. |
| `between_12_and_20_hours` | DTs from 12 to under 20 hours. |
| `met_20_hours` | DTs with at least 20 hours. |
| `full_24_hours` | DTs with exactly 24 hours. |
| `met_20_hours_pct` | Percentage of DTs meeting 20+ hours. |

Latest detailed validation:

```json
{
  "selected_date": "2026-08-18",
  "total_dt_meters": 3571,
  "mapped_dt_rows": 3570,
  "unmapped_dt_rows": 1,
  "avg_dt_availability_hours": 11.17,
  "zero_hours": 27,
  "below_12_hours": 2110,
  "between_12_and_20_hours": 895,
  "met_20_hours": 539,
  "full_24_hours": 177,
  "met_20_hours_pct": 15.09
}
```

Certified chain:

```text
edw_crm_cis.dt_availability_clou
→ edw_idb.dt_availability_meter_map
→ curated.v_dt_availability_enriched
→ /api/v1/dashboard/dt-availability
```

---

## 10. Feeder Availability

### `GET /api/v1/dashboard/feeder-availability`

Purpose: enriched feeder availability with feeder name, line number, band and voltage class.

Request path:

```text
/api/v1/dashboard/feeder-availability
```

Query parameters:

| Parameter | Required | Example | Allowed / expected values | Description |
|---|---:|---|---|---|
| `date` | No | `2026-08-19` | `YYYY-MM-DD` | Defaults to latest feeder availability date. |
| `band_code` | No | `A` | `A`, `B`, `C`, `D`, `E`, `Bilateral`, `Unassigned` | Filters feeder availability by MYTO band. |
| `feeder_voltage_class` | No | `33kV` | `11kV`, `33kV` | Filters by feeder voltage class. |
| `limit` | No | `20` | `1` to `100` | Number of best/worst/unassigned rows returned. |

Main response keys:

| Key | Description |
|---|---|
| `status` | API status. |
| `selected_date` | Date used for the result. |
| `filters` | Echoes applied filters. |
| `summary` | Date-level feeder availability summary. |
| `bands` | Availability band counts. |
| `by_band` | Feeder availability grouped by band. |
| `by_band_voltage` | Feeder availability grouped by band and voltage class. |
| `worst_feeder_meters` | Lowest feeder availability rows with enriched feeder details. |
| `best_feeder_meters` | Highest feeder availability rows with enriched feeder details. |
| `unassigned_band_feeders` | Feeders where Oracle `G_LINE.band_code` is null. |
| `quality` | Source and mapping notes. |

`summary` fields:

| Field | Description |
|---|---|
| `total_feeder_meters` | Total feeder meter availability rows. |
| `mapped_feeder_rows` | Rows mapped to feeder master. |
| `unmapped_feeder_rows` | Rows without feeder mapping. |
| `unassigned_band_rows` | Rows where feeder band is `Unassigned`. |
| `unknown_voltage_rows` | Rows with missing/unknown voltage class. |
| `avg_feeder_availability_hours` | Average feeder availability in hours. |
| `min_feeder_availability_hours` | Minimum availability. |
| `max_feeder_availability_hours` | Maximum availability. |
| `zero_hours` | Feeders with 0 availability hours. |
| `below_12_hours` | Feeders above 0 and below 12 hours. |
| `between_12_and_20_hours` | Feeders from 12 to under 20 hours. |
| `met_20_hours` | Feeders with at least 20 hours. |
| `full_24_hours` | Feeders with exactly 24 hours. |
| `met_20_hours_pct` | Percentage of feeders meeting 20+ hours. |

Latest detailed validation:

```json
{
  "selected_date": "2026-08-19",
  "total_feeder_meters": 307,
  "mapped_feeder_rows": 307,
  "unmapped_feeder_rows": 0,
  "unassigned_band_rows": 17,
  "unknown_voltage_rows": 0,
  "avg_feeder_availability_hours": 14.70,
  "zero_hours": 22,
  "below_12_hours": 78,
  "between_12_and_20_hours": 96,
  "met_20_hours": 111,
  "full_24_hours": 24,
  "met_20_hours_pct": 36.16
}
```

Certified chain:

```text
edw_crm_cis.feeder_availability
→ edw_idb.feeder_monthly_readings
→ edw_idb.feeder_attributes
→ curated.v_feeder_availability_enriched
→ /api/v1/dashboard/feeder-availability
```

Frontend note:

```text
Unassigned means Oracle G_LINE.band_code is NULL.
```

---

## 11. MYTO Dashboard

### `GET /api/v1/dashboard/myto`

Purpose: MYTO band-level availability and energy reporting.

Request path:

```text
/api/v1/dashboard/myto
```

Query parameters:

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest loaded month. |
| `date` | No | `2026-08-18` | Availability date. Defaults to latest availability date. |
| `limit` | No | `20` | Number of top DT rows returned. |

Main response keys:

| Key | Description |
|---|---|
| `status` | API status. |
| `selected_month` | Month used for energy results. |
| `selected_dt_availability_date` | Date used for DT availability. |
| `selected_feeder_availability_date` | Date used for feeder availability. |
| `unit_note` | Raw energy unit note. |
| `certification_status` | Readiness status by MYTO data area. |
| `summary` | Month/date-level total metrics. |
| `band_summary` | MYTO band counts, DT energy and DT availability by band. |
| `feeder_energy_by_band` | Feeder energy grouped by band. |
| `top_dts_by_band_energy` | Top DTs by energy. |
| `quality` | Source and certification note. |

Certified status:

```json
{
  "myto_band_counts": "ready_from_oracle_band_code",
  "dt_energy_by_band": "ready_from_clou_monthly_readings_joined_by_tg_no",
  "dt_availability_by_band": "certified_from_curated.v_dt_availability_enriched",
  "feeder_energy_by_band": "ready_from_feeder_monthly_readings_joined_to_feeder_attributes",
  "overall_availability": "ready_from_enriched_dt_and_feeder_availability_views"
}
```

Latest detailed validation:

```json
{
  "selected_month": "2026-08-01",
  "selected_dt_availability_date": "2026-08-18",
  "selected_feeder_availability_date": "2026-08-18",
  "total_dts": 22283,
  "total_feeders": 407,
  "metered_dt_count": 4204,
  "total_dt_energy_raw": 63896312880.0,
  "metered_feeder_count": 378,
  "total_feeder_energy_raw": 10027338127600.0,
  "dt_availability_meter_count": 3571,
  "mapped_dt_rows": 3570,
  "unmapped_dt_rows": 1,
  "avg_dt_availability_hours": 11.17,
  "feeder_availability_meter_count": 310,
  "mapped_feeder_rows": 310,
  "unmapped_feeder_rows": 0,
  "feeder_unassigned_band_rows": 17,
  "avg_feeder_availability_hours": 13.41
}
```

Certified sources:

```text
edw_idb.clou_monthly_readings
edw_idb.dt_to_feeder_attributes
curated.v_dt_availability_enriched
edw_idb.feeder_monthly_readings
edw_idb.feeder_attributes
```

---

## 12. IDB Dashboard

### `GET /api/v1/dashboard/idb`

Purpose: IDB dashboard for the filtered IDB prepaid/vending subset only.

The IDB endpoint is not the same as the wider prepaid/vending endpoint. It only reports prepaid/vending records attached to the certified IDB feeder scope.

Request path:

```text
/api/v1/dashboard/idb
```

Query parameters:

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest loaded IDB vending month. |
| `quality_limit` | No | `5` | Number of high-impact feeder rows, top BU rows and top IDB vending rows returned. |

Certified IDB scope:

```json
{
  "applied": true,
  "scope_note": "IDB is a subset of prepaid/vending only, filtered to Fakale Source and Apata feeders.",
  "included_feeders": [
    "33-IkoroduTCN-FAKALE SOURCE",
    "11-IgbobiINJ-T1-Apata"
  ],
  "filter_logic": "feeder/customer_feeder_no contains FAKALE or APATA"
}
```

Main response keys:

| Key | Description |
|---|---|
| `status` | API status. |
| `selected_month` | Month used for IDB metrics. |
| `idb_scope` | Confirms the IDB subset filter applied by the API. |
| `certification_status` | Readiness and IDB scope status. |
| `unit_note` | Raw energy unit note. |
| `cards` | IDB KPI cards, including IDB-prefixed prepaid/vending fields. |
| `availability` | Availability summary context. |
| `monthly_energy` | Energy/loss summary for IDB-related dashboard context. |
| `vending_collection` | Certified filtered IDB prepaid/vending collection section. |
| `data_quality` | Feeder energy distribution and high-impact feeders. |
| `pending_non_oracle_kpis` | KPI areas requiring business formula/source confirmation. |

Certified status fields:

```json
{
  "api_status": "ready",
  "oracle_tables_status": "loaded",
  "commercial_collection_status": "ready_from_enriched_idb_vending_only",
  "commercial_mapping_status": "certified_all_idb_vending_rows_mapped_to_bu_ut_feeder_dt_band",
  "idb_scope": "prepaid_vending_only_filtered_to_fakale_source_and_apata",
  "idb_scope_filter": "feeder/customer_feeder_no contains FAKALE or APATA",
  "feeder_to_dt_loss_status": "requires_business_validation"
}
```

Frontend card fields for IDB vending:

| Field | Meaning |
|---|---|
| `cards.idb_prepaid_rows` | Number of filtered IDB vending rows. |
| `cards.idb_prepaid_accounts` | Distinct IDB prepaid accounts in the filtered scope. |
| `cards.idb_prepaid_meters` | Distinct IDB prepaid meters in the filtered scope. |
| `cards.idb_prepaid_total_amount` | Total IDB vending amount for the filtered scope. |
| `cards.idb_prepaid_total_kwh` | Total IDB vending kWh for the filtered scope. |
| `cards.idb_total_collection_amount` | Same filtered IDB vending amount, exposed for collection card use. |

`vending_collection` response sections:

| Section | Description |
|---|---|
| `summary` | IDB-prefixed prepaid/vending rows, accounts, meters, amount and kWh. |
| `mapping_quality` | Confirms all filtered IDB vending rows map to BU, UT, feeder, DT and band. |
| `collection_by_band` | Filtered IDB vending amount/kWh by band. |
| `collection_by_bu` | Filtered IDB vending amount/kWh by business unit and undertaking. |
| `top_prepaid_vending` | Highest filtered IDB prepaid/vending transactions. |

Important frontend rule:

```text
Use IDB-prefixed fields for this endpoint.
Do not label IDB values as global prepaid totals.
Do not expect or consume postpaid keys under IDB.
Postpaid summary keys have been removed from the IDB response.
Postpaid mapping rows have been removed from the IDB response.
```

Latest detailed validation:

```json
{
  "selected_month": "2026-08-01",
  "idb_prepaid_rows": 14602,
  "idb_prepaid_accounts": 8808,
  "idb_prepaid_meters": 8808,
  "idb_prepaid_min_date": "2026-08-11",
  "idb_prepaid_max_date": "2026-08-19",
  "idb_prepaid_total_amount": 2817803034.5999875,
  "idb_prepaid_total_kwh": 656690.7000000186,
  "cards_and_summary_rows_match": true,
  "generic_prepaid_keys_in_cards": false
}
```

Certified source:

```text
curated.v_idb_vending_enriched
```

Certified chain:

```text
curated.v_idb_vending_enriched
→ query-level filter: FAKALE or APATA
→ IDB prepaid amount / kWh / BU / UT / feeder / DT / band
→ /api/v1/dashboard/idb
```

---

## 13. Vending Collection Dashboard

### `GET /api/v1/dashboard/vending-collection`

Purpose: broader vending and collection reporting endpoint.

Request path:

```text
/api/v1/dashboard/vending-collection
```

Confirmed query parameter:

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `limit` | No | `20` | Number of top/detail rows returned. |

Main response areas:

| Area | Description |
|---|---|
| `summary` | Overall vending/collection metrics. |
| `prepaid_vending` | Prepaid vending reporting. |
| `postpaid_collection` | Postpaid collection reporting where applicable. |
| `quality` | Source and certification notes. |

Frontend note:

```text
This endpoint may include both prepaid vending and postpaid collection reporting.
For IDB dashboard specifically, use only /api/v1/dashboard/idb and its prepaid/vending-only response.
```

Latest certified source notes:

```text
Prepaid vending is enriched through curated.v_idb_vending_enriched.
Postpaid collection is enriched through curated.v_idb_postpaid_collection_enriched where applicable.
```

---

## 14. Monthly Energy

### `GET /api/v1/dashboard/monthly-energy`

Purpose: monthly feeder energy, DT energy, feeder-to-DT loss, top feeders, top DTs and feeder loss breakdown.

Request path:

```text
/api/v1/dashboard/monthly-energy
```

Query parameters:

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest month. |
| `limit` | No | `10` | Number of top records to return. |

Main response sections:

| Section | Description |
|---|---|
| `unit_note` | Warning that energy unit is raw until confirmed. |
| `summary` | Month-level energy and loss summary. |
| `top_feeders` | Highest feeder energy rows. |
| `top_dts` | Highest DT energy rows. |
| `feeder_loss_breakdown` | Feeder-level feeder-to-DT loss breakdown. |

Frontend note:

```text
Continue to display feeder-to-DT loss with requires-business-validation warning.
```

---

## 15. Monthly Energy Quality

### `GET /api/v1/dashboard/monthly-energy-quality`

Purpose: distribution and high-impact feeder flags for monthly feeder energy validation.

Request path:

```text
/api/v1/dashboard/monthly-energy-quality
```

Query parameters:

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest month. |
| `limit` | No | `10` | Number of high-impact feeders to return. |

Main response sections:

| Section | Description |
|---|---|
| `distribution` | Min, median, p90, p95, p99, max and total. |
| `prefix_breakdown` | 11kV / 33kV / Unknown grouping where available. |
| `top_contributors` | Top feeder rows with contribution percentage and P99 flag. |

Frontend note:

```text
Do not remove high-impact feeder rows automatically.
Show them as validation flags.
```

---

## 16. Energy Flow Dashboard

### `GET /api/v1/dashboard/energy-flow`

Purpose: Energy Flow Diagram screen.

Request path:

```text
/api/v1/dashboard/energy-flow
```

Query parameters:

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest month. |
| `limit` | No | `10` | Number of top feeder flows to return. |

Current certification status:

```json
{
  "grid_or_transmission_energy": "pending_upstream_source",
  "injection_substation_energy": "pending_upstream_source",
  "feeder_energy": "ready_from_feeder_monthly_readings_but_high_impact_rows_require_business_validation",
  "dt_energy": "ready_from_clou_monthly_readings",
  "customer_energy": "pending_customer_consumption_source",
  "feeder_to_dt_loss": "calculated_but_requires_business_validation"
}
```

Frontend note:

```text
Use as available context only. Full upstream grid / ISS source is still pending.
```

---

## 17. IDB Events Dashboard

### `GET /api/v1/dashboard/idb-events`

Purpose: placeholder/partial endpoint until real IDB event sources are onboarded.

Request path:

```text
/api/v1/dashboard/idb-events
```

Query parameters:

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest month. |
| `date` | No | `2026-08-19` | Defaults to latest availability date. |
| `limit` | No | `10` | Number of context rows to return. |

Frontend rule:

```text
Do not infer event counts from availability or consumption.
Show events as pending source onboarding until meter/event log sources are connected.
```

Required event sources:

```text
meter logs
event logs
downtime records
trip-off records
meter readings/event flags
```

---

## 18. Pending / Requires Validation

| Data area | Current status | Needed for |
|---|---|---|
| Feeder-to-DT loss | Requires business validation | Loss KPI display |
| Final energy display unit | Requires business confirmation | kWh/MWh/GWh labels |
| Upstream grid / transmission / ISS energy | Pending source | Full energy flow from grid to feeders |
| Customer consumption | Pending source | Customer-to-DT loss and ATC&C |
| Billing | Pending source/formula | Billing efficiency |
| Collection efficiency formula | Requires business formula | Collection efficiency KPI |
| Meter communication | Pending source | Communication status and flagged meters |
| Meter/event logs | Pending source | IDB Events, downtime, trip-off |
| GIS coordinates | Pending source | Map markers and location views |

No longer pending for IDB dashboard:

```text
IDB prepaid vending subset is ready and certified from curated.v_idb_vending_enriched, filtered at query level to Fakale Source and Apata.
```

---

## 19. Recommended Frontend Screen Mapping

| Frontend screen | Primary endpoint |
|---|---|
| API heartbeat | `/api/v1/health` |
| Overview | `/api/v1/dashboard/overview` |
| Control Center landing page | `/api/v1/dashboard/control-center` |
| Availability Summary | `/api/v1/dashboard/availability-summary` |
| DT Availability Dashboard | `/api/v1/dashboard/dt-availability` |
| Feeder Availability Dashboard | `/api/v1/dashboard/feeder-availability` |
| MYTO Dashboard | `/api/v1/dashboard/myto` |
| IDB Dashboard | `/api/v1/dashboard/idb` |
| Vending Collection Report | `/api/v1/dashboard/vending-collection` |
| Energy Flow Diagram | `/api/v1/dashboard/energy-flow` |
| Monthly Energy Drilldown | `/api/v1/dashboard/monthly-energy` |
| Monthly Energy Quality Panel | `/api/v1/dashboard/monthly-energy-quality` |
| IDB Events | `/api/v1/dashboard/idb-events` |

---

## 20. Frontend Implementation Guidance

### 20.1 Use certification fields

For endpoints returning `certification_status` or `quality`, display status badges rather than hiding warnings.

Recommended badge states:

```text
Ready
Certified
Partial
Pending source
Requires validation
```

### 20.2 Preserve raw unit note

Where the API returns `unit_note`, display it or use safe labels until final unit convention is confirmed.

### 20.3 Use enriched availability endpoints

For detailed availability pages, use the enriched endpoints:

```text
/api/v1/dashboard/dt-availability
/api/v1/dashboard/feeder-availability
```

These now provide band, voltage and mapping-quality context.

### 20.4 IDB frontend rule

Use only the IDB endpoint for IDB dashboard:

```text
/api/v1/dashboard/idb
```

Do not merge global prepaid/vending totals into IDB.

Do not merge postpaid collection into IDB.

Use IDB-prefixed card fields:

```text
cards.idb_prepaid_rows
cards.idb_prepaid_accounts
cards.idb_prepaid_meters
cards.idb_prepaid_total_amount
cards.idb_prepaid_total_kwh
cards.idb_total_collection_amount
```

The wider/global prepaid vending population belongs outside the IDB dashboard context.

---

## 21. Example Frontend Fetch

```javascript
const BASE_URL = "http://192.168.80.108:8090/api/v1";

async function fetchJson(path, params = {}) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      query.set(key, value);
    }
  });

  const url = `${BASE_URL}${path}${query.toString() ? `?${query}` : ""}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API error ${response.status} for ${path}`);
  }

  return response.json();
}

export function getOverview() {
  return fetchJson("/dashboard/overview");
}

export function getDtAvailability({ date, bandCode, voltageClass, limit = 20 } = {}) {
  return fetchJson("/dashboard/dt-availability", {
    date,
    band_code: bandCode,
    feeder_voltage_class: voltageClass,
    limit
  });
}

export function getFeederAvailability({ date, bandCode, voltageClass, limit = 20 } = {}) {
  return fetchJson("/dashboard/feeder-availability", {
    date,
    band_code: bandCode,
    feeder_voltage_class: voltageClass,
    limit
  });
}

export function getMyto({ month, date, limit = 20 } = {}) {
  return fetchJson("/dashboard/myto", {
    month,
    date,
    limit
  });
}

export function getIdb({ month, qualityLimit = 5 } = {}) {
  return fetchJson("/dashboard/idb", {
    month,
    quality_limit: qualityLimit
  });
}
```

---

## 22. Swagger / OpenAPI

FastAPI provides automatic OpenAPI documentation.

Use:

```text
http://192.168.80.108:8090/docs
http://192.168.80.108:8090/redoc
http://192.168.80.108:8090/openapi.json
```

Frontend developers can use `/openapi.json` to generate typed clients.

---

## 23. Deployment Notes

API container:

```text
streaming-dashboard-api
```

Port mapping:

```text
0.0.0.0:8090->8090/tcp
```

API compose file:

```text
docker-compose.api.yml
```

Safe rebuild command:

```bash
docker compose -f docker-compose.api.yml build dashboard-api
docker compose -f docker-compose.api.yml up -d dashboard-api
```

Do not run:

```bash
docker compose -f docker-compose.api.yml up -d --build dashboard-api --remove-orphans
```

Reason:

```text
The orphan warning is expected because the API compose file is separate from the main streaming platform compose file.
Removing orphans may stop or remove the main streaming platform containers.
```

---

## 24. Final Status

Current frontend-ready dashboard endpoints are certified for the present scope:

```text
Control Center
Availability Summary
DT Availability
Feeder Availability
MYTO
IDB prepaid/vending-only
Vending Collection
```

Remaining work is source onboarding or business validation, not API shell creation.
