# Control Center Dashboard API Documentation

**API service:** `streaming-dashboard-api`  
**Port:** `8090`  
**Base URL on server:** `http://localhost:8090`  
**Base URL for frontend/VPN:** `http://192.168.80.108:8090`  
**API prefix:** `/api/v1`  
**Generated:** 2026-08-07

---

## 1. Current API Status

The API layer is live and connected to the PostgreSQL/TimescaleDB warehouse.

The following endpoints are currently available:

| Area | Endpoint | Status |
|---|---|---|
| Health | `/api/v1/health` | Ready |
| Oracle pipeline status | `/api/v1/oracle/status` | Ready |
| Overview dashboard | `/api/v1/dashboard/overview` | Ready |
| Control Center dashboard | `/api/v1/dashboard/control-center` | Ready |
| Energy Flow dashboard | `/api/v1/dashboard/energy-flow` | Ready, upstream/grid pending |
| Availability Summary | `/api/v1/dashboard/availability-summary` | Ready |
| DT Availability | `/api/v1/dashboard/dt-availability` | Ready |
| Feeder Availability | `/api/v1/dashboard/feeder-availability` | Ready |
| Monthly Energy | `/api/v1/dashboard/monthly-energy` | Ready with quality warning |
| Monthly Energy Quality | `/api/v1/dashboard/monthly-energy-quality` | Ready |
| IDB Dashboard | `/api/v1/dashboard/idb` | Ready with pending non-Oracle KPIs |
| MYTO Dashboard | `/api/v1/dashboard/myto` | Ready, availability-by-band pending mapping key |
| IDB Events | `/api/v1/dashboard/idb-events` | Partial/pending real event source |

---

## 2. Important Frontend Notes

### 2.1 Energy unit handling

All energy values are currently returned as raw source-derived values from `monthly_consumption`.

The frontend must not label these values as kWh, MWh, GWh, or any final unit until the business confirms the correct unit convention.

Use labels such as:

```text
Energy Raw
Feeder Energy Raw
DT Energy Raw
Consumption Raw
```

### 2.2 Feeder-to-DT loss warning

The API returns feeder-to-DT loss values, but they should be displayed with a warning because high-impact feeder rows dominate total feeder energy.

Known high-impact feeders for `2026-08-01`:

| Feeder | Contribution |
|---|---:|
| `11-WasimiINJ-T2-Wasimi` | 49.12% |
| `11-AbesanINJ-T2-Shagari` | 36.07% |
| `11-Startimes EstateINJ-T1-Startimes` | 11.61% |

The frontend should display loss values as:

```text
Requires business validation
```

or show a small warning badge beside the KPI.

### 2.3 IDB Events page

IDB Events data is not the same as energy, consumption, or availability. Events should come from:

- meter logs
- event logs
- downtime records
- trip-off records
- meter readings/event flags

The current `/api/v1/dashboard/idb-events` endpoint is intentionally partial. Do not infer event counts from availability or consumption.

### 2.4 MYTO availability by band

MYTO band counts and DT energy by band are ready. However, availability by band is not certified because the current DT availability table does not yet have a confirmed mapping key back to TG/band.

---

## 3. Common Query Parameters

Several dashboard endpoints support these query parameters:

| Parameter | Type | Example | Description |
|---|---|---|---|
| `month` | string/date | `2026-08-01` | Month start date. Defaults to latest available month. |
| `date` | string/date | `2026-08-06` | Availability date. Defaults to latest available date. |
| `limit` | integer | `10` | Number of records to return for top/worst lists. Usually max 50 or 100 depending on endpoint. |
| `quality_limit` | integer | `5` | Number of high-impact feeder rows to return for IDB quality checks. |

---

## 4. Health Endpoint

### `GET /api/v1/health`

Checks API and database connection health.

#### Example request

```bash
curl -s http://192.168.80.108:8090/api/v1/health
```

#### Example response

```json
{
  "status": "ok",
  "database": "ok"
}
```

#### Frontend use

Use this for API heartbeat or connection testing.

---

## 5. Oracle Pipeline Status

### `GET /api/v1/oracle/status`

Returns loaded Oracle table freshness, max data dates, ingestion time, and row counts.

#### Example request

```bash
curl -s http://192.168.80.108:8090/api/v1/oracle/status
```

#### Response fields

| Field | Description |
|---|---|
| `status` | API response status. |
| `tables` | Array of loaded Oracle-backed tables. |
| `table_name` | Logical table name. |
| `max_data_date` | Latest data date for dated tables. Static full-refresh tables return `null`. |
| `last_ingested_at` | Last ingestion timestamp. |
| `rows_loaded` | Current rows loaded in Postgres. |

#### Example response shape

```json
{
  "status": "ok",
  "tables": [
    {
      "table_name": "all_customers",
      "max_data_date": null,
      "last_ingested_at": "2026-08-07T01:50:57.632073+00:00",
      "rows_loaded": 1768087
    }
  ]
}
```

#### Frontend use

Use this for an admin/data freshness panel.

---

## 6. Overview Dashboard

### `GET /api/v1/dashboard/overview`

Returns high-level customer, DT, feeder, availability, and energy overview metrics.

#### Example request

```bash
curl -s http://192.168.80.108:8090/api/v1/dashboard/overview
```

#### Main response fields

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
| `total_feeders` | Distinct feeders from DT-to-feeder attributes. |
| `total_feeder_energy_raw` | Raw feeder monthly energy. |
| `total_dt_energy_raw` | Raw DT/CLOU monthly energy. |
| `feeder_to_dt_loss_raw` | Raw feeder minus DT energy. |
| `feeder_to_dt_loss_pct` | Feeder-to-DT loss percentage; requires validation. |
| `avg_dt_availability_hours` | Average DT availability in hours. |
| `avg_feeder_availability_hours` | Average feeder availability in hours. |

#### Latest confirmed values

```json
{
  "total_customers": 1768087,
  "metered_customers": 1193051,
  "unmetered_customers": 575036,
  "md_customers": 47869,
  "nmd_customers": 1720218,
  "total_dts": 22239,
  "public_dts": 14220,
  "private_public_dts": 6410,
  "private_single_dts": 1609,
  "total_feeders": 407
}
```

---

## 7. Availability Summary

### `GET /api/v1/dashboard/availability-summary`

Returns overall DT and feeder availability distribution for the latest available date.

#### Example request

```bash
curl -s http://192.168.80.108:8090/api/v1/dashboard/availability-summary
```

#### Main response fields

| Field | Description |
|---|---|
| `dt_availability_date` | Latest DT availability date. |
| `total_dt_meters` | DT meters with availability reading. |
| `avg_dt_availability_hours` | Average DT availability. |
| `dt_zero_hours` | DT meters with 0 hours. |
| `dt_below_12_hours` | DT meters above 0 but below 12 hours. |
| `dt_12_to_20_hours` | DT meters from 12 to under 20 hours. |
| `dt_met_20_hours` | DT meters with at least 20 hours. |
| `dt_full_24_hours` | DT meters with 24 hours. |
| `dt_met_20_hours_pct` | Percentage of DT meters meeting 20+ hours. |
| `feeder_availability_date` | Latest feeder availability date. |
| `total_feeder_meters` | Feeder meters with availability reading. |
| `avg_feeder_availability_hours` | Average feeder availability. |
| `feeder_met_20_hours_pct` | Percentage of feeder meters meeting 20+ hours. |

#### Latest confirmed values

```json
{
  "dt_availability_date": "2026-08-06",
  "total_dt_meters": 3908,
  "avg_dt_availability_hours": 13.056998464687819,
  "dt_met_20_hours": 770,
  "dt_full_24_hours": 356,
  "dt_met_20_hours_pct": 19.7,
  "feeder_availability_date": "2026-08-06",
  "total_feeder_meters": 309,
  "avg_feeder_availability_hours": 15.869741100323624,
  "feeder_met_20_hours": 134,
  "feeder_full_24_hours": 73,
  "feeder_met_20_hours_pct": 43.37
}
```

---

## 8. DT Availability

### `GET /api/v1/dashboard/dt-availability`

Returns DT availability summary, bands, worst DT meters, and best DT meters.

#### Query parameters

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `date` | No | `2026-08-06` | Defaults to latest DT availability date. |
| `limit` | No | `10` | Number of best/worst DT meters to return. |

#### Example request

```bash
curl -s 'http://192.168.80.108:8090/api/v1/dashboard/dt-availability?date=2026-08-06&limit=10'
```

#### Response sections

| Section | Description |
|---|---|
| `summary` | Date-level DT availability metrics. |
| `bands` | Availability band counts. |
| `worst_dt_meters` | Lowest availability DT meters. |
| `best_dt_meters` | Highest availability DT meters. |

#### Availability bands

```text
0 hours
0-12 hours
12-20 hours
20-24 hours
24 hours
```

---

## 9. Feeder Availability

### `GET /api/v1/dashboard/feeder-availability`

Returns feeder availability summary, bands, worst feeder meters, and best feeder meters.

#### Query parameters

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `date` | No | `2026-08-06` | Defaults to latest feeder availability date. |
| `limit` | No | `10` | Number of best/worst feeder meters to return. |

#### Example request

```bash
curl -s 'http://192.168.80.108:8090/api/v1/dashboard/feeder-availability?date=2026-08-06&limit=10'
```

#### Latest confirmed summary

```json
{
  "total_feeder_meters": 309,
  "avg_feeder_availability_hours": 15.869741100323624,
  "zero_hours": 23,
  "below_12_hours": 65,
  "between_12_and_20_hours": 87,
  "met_20_hours": 134,
  "full_24_hours": 73,
  "met_20_hours_pct": 43.37
}
```

---

## 10. Monthly Energy

### `GET /api/v1/dashboard/monthly-energy`

Returns monthly feeder energy, DT energy, feeder-to-DT loss, top feeders, top DTs, and feeder loss breakdown.

#### Query parameters

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest month. |
| `limit` | No | `10` | Number of top records to return. |

#### Example request

```bash
curl -s 'http://192.168.80.108:8090/api/v1/dashboard/monthly-energy?month=2026-08-01&limit=10'
```

#### Response sections

| Section | Description |
|---|---|
| `unit_note` | Warning that energy unit is raw until confirmed. |
| `summary` | Month-level energy and loss summary. |
| `top_feeders` | Highest feeder energy rows. |
| `top_dts` | Highest DT energy rows. |
| `feeder_loss_breakdown` | Feeder-level feeder-to-DT loss breakdown. |

#### Latest confirmed summary

```json
{
  "month_start": "2026-08-01",
  "latest_feeder_data_date": "2026-08-06",
  "latest_dt_data_date": "2026-08-06",
  "feeder_reading_rows": 376,
  "feeder_count": 374,
  "dt_reading_rows": 4092,
  "dt_count": 4032,
  "total_feeder_energy_raw": 2861435915800.0,
  "total_dt_energy_raw": 16968318120.0,
  "feeder_to_dt_loss_raw": 2844467597680.0,
  "feeder_to_dt_loss_pct": 99.41
}
```

---

## 11. Monthly Energy Quality

### `GET /api/v1/dashboard/monthly-energy-quality`

Returns distribution and high-impact feeder flags for monthly feeder energy validation.

#### Query parameters

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest month. |
| `limit` | No | `10` | Number of high-impact feeders to return. |

#### Example request

```bash
curl -s 'http://192.168.80.108:8090/api/v1/dashboard/monthly-energy-quality?month=2026-08-01&limit=10'
```

#### Response sections

| Section | Description |
|---|---|
| `distribution` | Min, median, p90, p95, p99, max, total. |
| `prefix_breakdown` | 11kV/33kV/Unknown grouping. |
| `top_contributors` | Top feeder rows with contribution percentage and P99 flag. |

#### Latest known concern

Top three feeders contribute about 96.8% of total feeder energy. Do not remove them automatically. Show as high-impact validation flags.

---

## 12. IDB Dashboard

### `GET /api/v1/dashboard/idb`

Returns IDB dashboard cards, availability, monthly energy, data-quality diagnostics, and pending non-Oracle KPIs.

#### Query parameters

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest month. |
| `quality_limit` | No | `5` | Number of high-impact feeders to return. |

#### Example request

```bash
curl -s 'http://192.168.80.108:8090/api/v1/dashboard/idb?month=2026-08-01&quality_limit=5'
```

#### Response sections

| Section | Description |
|---|---|
| `certification_status` | API and KPI readiness status. |
| `cards` | IDB KPI cards. |
| `availability` | Availability summary. |
| `monthly_energy` | Energy/loss summary. |
| `data_quality` | Feeder energy distribution and high-impact feeders. |
| `pending_non_oracle_kpis` | Revenue, billing, collection, ATC&C, comms, events pending. |

#### Important certification status

```json
{
  "feeder_to_dt_loss_status": "requires_business_validation",
  "reason": "High-impact feeder rows dominate total feeder energy. Values are retained but flagged."
}
```

---

## 13. MYTO Dashboard

### `GET /api/v1/dashboard/myto`

Returns MYTO band counts, DT energy by band, top DTs by band energy, and overall availability.

#### Query parameters

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest month. |
| `date` | No | `2026-08-06` | Defaults to latest availability date. |
| `limit` | No | `10` | Top DT rows to return. |

#### Example request

```bash
curl -s 'http://192.168.80.108:8090/api/v1/dashboard/myto?month=2026-08-01&date=2026-08-06&limit=10'
```

#### Response sections

| Section | Description |
|---|---|
| `summary` | Total DTs/feeders, total DT capacity, metered DT count, DT energy. |
| `band_summary` | MYTO band counts and DT energy by band. |
| `overall_availability` | Overall DT/feeder availability summary. |
| `availability_mapping_check` | Validates whether DT availability can currently map to band. |
| `top_dts_by_band_energy` | Highest DT energy rows with band code. |
| `multi_band_feeders` | Feeders with multiple bands if any. |

#### Current certification status

```json
{
  "myto_band_counts": "ready_from_oracle_band_code",
  "dt_energy_by_band": "ready_from_clou_monthly_readings_joined_by_tg_no",
  "feeder_energy_by_band": "not_certified_because_feeder_band_mix_must_be_business_validated",
  "availability_by_band": "not_certified_current_dt_availability_table_does_not_have_confirmed_tg_or_band_mapping_key",
  "overall_availability": "ready_from_dt_availability_clou_and_feeder_availability"
}
```

#### Latest confirmed summary

```json
{
  "total_dts": 22239,
  "total_feeders": 407,
  "total_dt_capacity_raw": 5005059.0,
  "metered_dt_count": 4032,
  "total_dt_energy_raw": 16968318120.0
}
```

---

## 14. Control Center Dashboard

### `GET /api/v1/dashboard/control-center`

Returns a combined operational dashboard endpoint for the control center landing page.

#### Query parameters

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest month. |
| `date` | No | `2026-08-06` | Defaults to latest availability date. |
| `limit` | No | `10` | Number of top/worst records. |

#### Example request

```bash
curl -s 'http://192.168.80.108:8090/api/v1/dashboard/control-center?month=2026-08-01&date=2026-08-06&limit=10'
```

#### Response sections

| Section | Description |
|---|---|
| `cards` | Main KPI cards. |
| `availability` | Overall availability summary. |
| `feeder_status` | Feeder availability counts. |
| `dt_status` | DT availability counts. |
| `monthly_energy` | Feeder/DT energy and loss. |
| `energy_by_band` | DT energy grouped by MYTO band. |
| `top_feeders_by_energy` | Top feeder energy rows. |
| `worst_feeders_by_availability` | Worst feeder availability rows. |
| `worst_dts_by_availability` | Worst DT availability rows. |
| `pending_non_oracle_widgets` | Complaints, vending, revenue, comms pending. |

---

## 15. Energy Flow Dashboard

### `GET /api/v1/dashboard/energy-flow`

Returns data for the Energy Flow Diagram screen.

#### Query parameters

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest month. |
| `limit` | No | `10` | Number of top feeder flows to return. |

#### Example request

```bash
curl -s 'http://192.168.80.108:8090/api/v1/dashboard/energy-flow?month=2026-08-01&limit=10'
```

#### Response sections

| Section | Description |
|---|---|
| `flow_summary` | Overall feeder, DT, customer, and energy summary. |
| `flow_nodes` | Node structure for grid → injection substations → feeders → DTs → customers. |
| `feeder_voltage_groups` | 11kV/33kV/Unknown feeder capacity and energy. |
| `dt_band_flow` | DT count/capacity/energy by band. |
| `top_feeder_flows` | Top feeder flows with DT energy and loss. |

#### Current certification status

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

#### Latest corrected capacity values

```json
{
  "total_feeder_capacity_raw": 223139.0,
  "total_dt_capacity_raw": 5005059.0
}
```

---

## 16. IDB Events Dashboard

### `GET /api/v1/dashboard/idb-events`

Returns a partial endpoint for the IDB Events page until the real events source is onboarded.

#### Query parameters

| Parameter | Required | Example | Description |
|---|---:|---|---|
| `month` | No | `2026-08-01` | Defaults to latest month. |
| `date` | No | `2026-08-06` | Defaults to latest availability date. |
| `limit` | No | `10` | Number of context rows to return. |

#### Example request

```bash
curl -s 'http://192.168.80.108:8090/api/v1/dashboard/idb-events?month=2026-08-01&date=2026-08-06&limit=10'
```

#### Response sections

| Section | Description |
|---|---|
| `status` | Currently returns `partial`. |
| `certification_status` | Identifies events/vending/comms as pending. |
| `available_oracle_data` | Current availability/consumption context only. |
| `pending_non_oracle_data` | Event/vending/comms placeholders. |
| `frontend_note` | Explains that event data is not inferred. |

#### Frontend rule

The frontend should show this page as:

```text
Events data pending source onboarding
```

Do not show event counts from availability or consumption.

---

## 17. Pending Source Systems

The API shell is complete, but these feeds are still needed for final business completeness:

| Data area | Status | Needed for |
|---|---|---|
| Meter logs / event logs | Pending | IDB Events, downtime, trip-off |
| Vending | Pending | Vending vs consumption, revenue proxy |
| Billing | Pending | Billing efficiency |
| Collections | Pending | Collection efficiency |
| Customer consumption | Pending | Customer-to-DT loss, ATC&C |
| Meter communication | Pending | Comms status, flagged meters |
| GIS coordinates | Pending | Map markers and location views |
| Upstream grid / TS / ISS energy | Pending | Full energy flow from grid to feeders |

---

## 18. Recommended Frontend Handling

### 18.1 Always show certification status

For endpoints that include `certification_status`, the frontend should use it to show status badges:

```text
Ready
Partial
Pending source
Requires validation
```

### 18.2 Do not hide warnings

The frontend should preserve these notes:

- raw energy units are not final display units
- feeder-to-DT loss requires validation
- MYTO band availability is not certified yet
- IDB Events is partial until event logs/downtime/trip-off data arrives

### 18.3 Suggested dashboard mapping

| Frontend screen | API endpoint |
|---|---|
| Overview | `/api/v1/dashboard/overview` |
| Control Center Dashboard | `/api/v1/dashboard/control-center` |
| Energy Flow Diagram | `/api/v1/dashboard/energy-flow` |
| Availability Summary | `/api/v1/dashboard/availability-summary` |
| DT Availability Dashboard | `/api/v1/dashboard/dt-availability` |
| Feeder Availability Dashboard | `/api/v1/dashboard/feeder-availability` |
| MYTO Dashboard | `/api/v1/dashboard/myto` |
| IDB Dashboard | `/api/v1/dashboard/idb` |
| IDB Events | `/api/v1/dashboard/idb-events` |
| Data quality panel | `/api/v1/dashboard/monthly-energy-quality` |

---

## 19. Swagger / OpenAPI

FastAPI provides automatic OpenAPI documentation.

Use these URLs:

```text
http://192.168.80.108:8090/docs
http://192.168.80.108:8090/redoc
http://192.168.80.108:8090/openapi.json
```

For frontend developers, `/openapi.json` can be used to generate typed clients.

---

## 20. Example Frontend Fetch

```javascript
const BASE_URL = "http://192.168.80.108:8090/api/v1";

async function getOverview() {
  const response = await fetch(`${BASE_URL}/dashboard/overview`);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

async function getControlCenter(month, date) {
  const params = new URLSearchParams({
    month,
    date,
    limit: "10"
  });

  const response = await fetch(`${BASE_URL}/dashboard/control-center?${params}`);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
```

---

## 21. Deployment Notes

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

Rebuild command:

```bash
docker compose -f docker-compose.api.yml up -d --build dashboard-api
```

Do not run:

```bash
docker compose -f docker-compose.api.yml up -d --build dashboard-api --remove-orphans
```

The orphan warning is expected because the API compose file is separate from the main streaming platform compose file. Removing orphans may stop/remove the main containers.

---

## 22. Final Status

Endpoint coverage is complete for the current dashboard scope.

Remaining work is data onboarding/enrichment, not API shell creation.

