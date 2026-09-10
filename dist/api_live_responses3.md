# Control Center API — Live Response Reference

**Generated:** 2026-09-10 from the running API at `http://192.168.80.108:8090`. Interactive docs: `/docs` (Swagger) and `/redoc`.

Real captures from the running API. Figures move as data lands; field names do not. Names match the supplied samples exactly — the one addition is the `transformer2` node in Energy Flow.

## Endpoint index

| # | Endpoint | Response |
|---|---|---:|
| 1 | `GET /api/v1/end-to-end/overview` | 0.72 s |
| 2 | `GET /api/v1/energy-flow` | 2.4 s |
| 3 | `GET /api/v1/control-center/summary` | 0.87 s |
| 4 | `GET /api/v1/availability/summary` | 0.17 s |
| 5 | `GET /api/v1/dt-availability/dashboard` | 0.10 s |
| 6 | `GET /api/v1/dt-availability/table` | 0.21 s |
| 7 | `GET /api/v1/myto/summary` | 0.36 s |
| 8 | `GET /api/v1/idb/dashboard` | 9.3 s |
| 9 | `GET /api/v1/idb/feeder-dt-loss` | 1.8 s |
| 10 | `GET /api/v1/idb/customer-dt-loss` | 4.5 s |

Warm second-call timings.

---

## 1. End-to-End Overview

Top KPI cards and the Grid Network map.

`GET /api/v1/end-to-end/overview?date=2026-08&business_unit=All&marker_limit=2`

Query parameters: `date` (YYYY-MM, defaults to the latest **complete** month), `business_unit` (name or `All`), `marker_limit` (omit for every DT).

```json
{
  "period": "2026-08",
  "business_unit": "All",
  "kpis": {
    "total_energy_on_grid_mwh": 617205.74,
    "total_energy_on_dts_mwh": 113467.89,
    "total_grid_to_dt_loss_mwh": 503737.84,
    "period_label": "Aug 2026",
    "energy_vs_prev_period_pct": 1.02
  },
  "infrastructure_summary": {
    "ts_count": 23,
    "transformer_capacity_count": 26,
    "feeders_33kva": 108,
    "iss_count": 73,
    "total_transformers": 19687
  },
  "grid_network": {
    "11kva_incomer": 116,
    "11kva_outgoing_feeders": 306,
    "dt_count": 19687,
    "online_dts": 6288,
    "offline_dts": 3037,
    "inactive_dts": 10362,
    "online_feeders": 321,
    "offline_feeders": 86
  },
  "dt_markers": [
    {
      "dt_id": "1000002001",
      "dt_name": "11-AgegeINJ-T1-Iju Road-OLUGBENGA FASHEUN 3 CLOSE",
      "feeder_name": "11-AgegeINJ-T1-Iju Road",
      "latitude": 6.63842,
      "longitude": 3.32547,
      "status": "Inactive",
      "band": "C"
    },
    {
      "dt_id": "1000003001",
      "dt_name": "11-SaboINJ-T1-Ijebu Ode-HILLTOP ESTATE",
      "feeder_name": "11-SaboINJ-T1-Ijebu Ode",
      "latitude": 6.62478,
      "longitude": 3.53402,
      "status": "Online",
      "band": "D"
    }
  ]
}
```

Without `marker_limit`, `dt_markers` returns every DT — several megabytes. `online_dts`, `offline_dts` and `inactive_dts` sum to `dt_count`; a DT with no coordinates counts as Inactive.

---

## 2. Energy Flow

The TS → Customer cascade.

`GET /api/v1/energy-flow?ts=All&transformer=All&feeder_33kva=All&dt=All&dt_type=All`

```json
{
  "ts": {
    "name": "All",
    "total_energy_mwh": 350120.1,
    "transmission_pct": 100.0,
    "loss_pct": 0.0,
    "transmission_mwh": 350120.1,
    "loss_mwh": 0.0,
    "total_ts": 23
  },
  "transformer_capacity": {
    "selected": "All",
    "total_energy_mwh": 350120.1,
    "transmission_pct": 100.0,
    "loss_pct": 0.0,
    "transmission_mwh": 350120.1,
    "loss_mwh": 0.0,
    "total_transformers": 26
  },
  "feeders_33kva": {
    "selected": "All",
    "total_energy_mwh": 350120.1,
    "transmission_pct": 79.87,
    "loss_pct": 20.13,
    "transmission_mwh": 279625.41,
    "loss_mwh": 70494.69,
    "total_feeders": 108
  },
  "iss": {
    "selected": "All",
    "total_energy_mwh": 279625.41,
    "transmission_pct": 100.0,
    "loss_pct": 0.0,
    "transmission_mwh": 279625.41,
    "loss_mwh": 0.0,
    "total_iss": 73
  },
  "transformer2": {
    "selected": "All",
    "total_energy_mwh": 279625.41,
    "transmission_pct": 100.0,
    "loss_pct": 0.0,
    "transmission_mwh": 279625.41,
    "loss_mwh": 0.0,
    "total_transformer2": 7
  },
  "incomer_11kva": {
    "selected": "All",
    "total_energy_mwh": 279625.41,
    "transmission_pct": 93.3,
    "loss_pct": 6.7,
    "transmission_mwh": 260889.16,
    "loss_mwh": 18736.25,
    "total_incomers": 116
  },
  "outgoing_feeder_11kva": {
    "selected": "All",
    "total_energy_mwh": 260889.16,
    "transmission_pct": 39.22,
    "loss_pct": 60.78,
    "transmission_mwh": 102325.93,
    "loss_mwh": 158563.23,
    "total_feeders": 306
  },
  "dts": {
    "selected": "All",
    "total_energy_mwh": 102325.93,
    "transmission_pct": 78.79,
    "loss_pct": 21.21,
    "transmission_mwh": 80617.83,
    "loss_mwh": 21708.1,
    "total_public_dts": 10779,
    "dt_type_filter": "All",
    "total_private_dts": 6536
  },
  "customer": {
    "total_energy_mwh": 80617.83,
    "total_customers": 1252823
  }
}
```

`ts`, `transformer_capacity`, `iss` and `transformer2` report `loss_pct` of 0 because there is no meter between them and the level below. That is not a measurement of zero loss. The metered steps are 33kV → incomer, incomer → 11kV, 11kV → DT and DT → customer.

---

## 3. Control Center Summary

`GET /api/v1/control-center/summary` — no parameters, always the latest snapshot.

```json
{
  "feederDTinfo": {
    "online_feeders": 321,
    "online_feeders_11kv": 240,
    "online_feeders_33kv": 81,
    "online_dts": 6296,
    "online_dts_public": 6023,
    "online_dts_private": 273
  },
  "customercomplaints": {
    "total": null,
    "open": null,
    "closed": null
  },
  "customers": {
    "metered_nmd_actual": 1177680,
    "metered_nmd_target": 1177680,
    "metered_md_actual": 16498,
    "metered_md_target": 16498
  },
  "energy": {
    "total_mwh": 113538.0,
    "period": "Month",
    "trend": [
      {
        "date": "2026-06",
        "mwh": 108753.99
      },
      {
        "date": "2026-07",
        "mwh": 113076.12
      },
      {
        "date": "2026-08",
        "mwh": 113467.89
      },
      {
        "date": "2026-09",
        "mwh": 30244.86
      }
    ]
  },
  "energy_allocation_by_band": [
    {
      "band": "A",
      "pct": 36.45
    },
    {
      "band": "B",
      "pct": 29.66
    },
    {
      "band": "C",
      "pct": 24.44
    },
    {
      "band": "D",
      "pct": 9.42
    },
    {
      "band": "E",
      "pct": 0.02
    }
  ],
  "vending_collection": {
    "customer_vended_today": 3,
    "amount_vended_today": 345290.79,
    "amount_vended_mtd": 86482400.1,
    "total_collection_today": 0.0,
    "amount_collected_mtd": 10807679522.10997,
    "trend": [
      {
        "date": "2026-08-10",
        "vended": 10753324.38,
        "collected": 0.0
      },
      {
        "date": "2026-08-11",
        "vended": 10312459.0,
        "collected": 0.0
      },
      {
        "date": "2026-08-12",
        "vended": 8931400.0,
        "collected": 41349788.63
      },
      {
        "date": "2026-08-13",
        "vended": 11149047.72,
        "collected": 849609263.46
      },
      {
        "date": "2026-08-14",
        "vended": 7807526.11,
        "collected": 969296808.41
      },
      {
        "date": "2026-08-15",
        "vended": 10669033.2,
        "collected": 47774373.28
      },
      {
        "date": "2026-08-16",
        "vended": 8214807.85,
        "collected": 313269987.44
      },
      {
        "date": "2026-08-17",
        "vended": 9878569.72,
        "collected": 1072488796.67
      },
      {
        "date": "2026-08-18",
        "vended": 10598712.05,
        "collected": 599473993.03
      },
      {
        "date": "2026-08-19",
        "vended": 11957434.0,
        "collected": 1508511758.22
      },
      {
        "date": "2026-08-20",
        "vended": 8557793.5,
        "collected": 396646921.35
      },
      {
        "date": "2026-08-21",
        "vended": 11516021.67,
        "collected": 403101617.18
      },
      {
        "date": "2026-08-22",
        "vended": 6718784.5,
        "collected": 59454542.83
      },
      {
        "date": "2026-08-23",
        "vended": 7486386.22,
        "collected": 46174044.55
      },
      {
        "date": "2026-08-24",
        "vended": 11471671.28,
        "collected": 303315892.81
      },
      {
        "date": "2026-08-25",
        "vended": 10801226.6,
        "collected": 602722439.62
      },
      {
        "date": "2026-08-26",
        "vended": 11356548.79,
        "collected": 471597778.39
      },
      {
        "date": "2026-08-27",
        "vended": 11982959.78,
        "collected": 321328282.0
      },
      {
        "date": "2026-08-28",
        "vended": 12114092.95,
        "collected": 264139658.93
      },
      {
        "date": "2026-08-29",
        "vended": 10635673.74,
        "collected": 12529070.76
      },
      {
        "date": "2026-08-30",
        "vended": 8804973.87,
        "collected": 9944660.88
      },
      {
        "date": "2026-08-31",
        "vended": 13340097.98,
        "collected": 2514949843.67
      },
      {
        "date": "2026-09-01",
        "vended": 15011563.59,
        "collected": 0.0
      },
      {
        "date": "2026-09-02",
        "vended": 8104521.8,
        "collected": 0.0
      },
      {
        "date": "2026-09-03",
        "vended": 12351020.0,
        "collected": 0.0
      },
      {
        "date": "2026-09-04",
        "vended": 9275910.27,
        "collected": 0.0
      },
      {
        "date": "2026-09-05",
        "vended": 13087297.12,
        "collected": 0.0
      },
      {
        "date": "2026-09-06",
        "vended": 9888147.99,
        "collected": 0.0
      },
      {
        "date": "2026-09-07",
        "vended": 12036691.54,
        "collected": 0.0
      },
      {
        "date": "2026-09-08",
        "vended": 6381957.0,
        "collected": 0.0
      },
      {
        "date": "2026-09-09",
        "vended": 345290.79,
        "collected": 0.0
      }
    ]
  },
  "feeders_by_band": {
    "total": 407,
    "breakdown": [
      {
        "band": "A",
        "count": 189
      },
      {
        "band": "B",
        "count": 79
      },
      {
        "band": "C",
        "count": 85
      },
      {
        "band": "D",
        "count": 43
      },
      {
        "band": "E",
        "count": 11
      }
    ]
  }
}
```

`trend` arrays are abbreviated in this capture; the live response returns a point per day. `customercomplaints` is null. The two `metered_*_target` fields currently mirror the matching actual, so the ratio reads 100%. `total_collection_today` and `amount_vended_today` share one reference day, so the panel never shows two different todays.

---

## 4. Availability Summary

`GET /api/v1/availability/summary?date=2026-09-07&feeder_band=All&business_unit=All`

```json
{
  "feeders_availability": {
    "total": 283,
    "met": 141,
    "not_met": 142
  },
  "dts": {
    "total": 3230,
    "public_dts": 2786,
    "private_dts": 444
  },
  "dt_availability_status": {
    "private_dts_met": 100,
    "private_dts_not_met": 344,
    "public_dts_met": 365,
    "public_dts_not_met": 2421
  },
  "feeders_by_business_unit": [
    {
      "business_unit": "Oshodi",
      "count": 58
    },
    {
      "business_unit": "Shomolu",
      "count": 50
    },
    {
      "business_unit": "Akowonjo",
      "count": 43
    },
    {
      "business_unit": "Ikeja",
      "count": 41
    },
    {
      "business_unit": "Ikorodu",
      "count": 29
    },
    {
      "business_unit": "Abule Egba",
      "count": 29
    },
    {
      "business_unit": "Md Kam",
      "count": 25
    }
  ],
  "dts_by_business_unit": [
    {
      "business_unit": "Ikeja",
      "count": 788
    },
    {
      "business_unit": "Akowonjo",
      "count": 594
    },
    {
      "business_unit": "Oshodi",
      "count": 521
    },
    {
      "business_unit": "Shomolu",
      "count": 470
    },
    {
      "business_unit": "Ikorodu",
      "count": 445
    },
    {
      "business_unit": "Abule Egba",
      "count": 364
    },
    {
      "business_unit": "Md Kam",
      "count": 48
    }
  ]
}
```

Target hours are per band: A 20, B 16, C 12, D 8, E 4, with Bilateral counted as A. `date` defaults to the latest complete day. In the business-unit arrays the feeder counts are the smaller ones.

---

## 5. DT Availability — Dashboard

`GET /api/v1/dt-availability/dashboard?dt_name=11-AgegeINJ-T2-Orile Agege-OLAROKUN STR POLE 2&period=Month`

```json
{
  "dt_name": "11-AgegeINJ-T2-Orile Agege-OLAROKUN STR POLE 2",
  "period": "Month",
  "dt": {
    "target_hours": 12.0,
    "actual_hours": 3.51,
    "availability_rate_pct": 29.25,
    "status": "Not met"
  },
  "feeder": {
    "target_hours": 12.0,
    "actual_hours": 8.25,
    "availability_rate_pct": 68.75,
    "status": "Not met"
  },
  "trend": [
    {
      "month": "Aug",
      "avg_availability": 4.72,
      "avg_target": 12.0
    },
    {
      "month": "Sep",
      "avg_availability": 2.07,
      "avg_target": 12.0
    }
  ]
}
```

`status` is `Exceeded`, `Met` or `Not met`. `period` accepts `Day`, `Week` or `Month`.

---

## 6. DT Availability — Table

`GET /api/v1/dt-availability/table?dt_name=All&date=2026-09-07&page=1&page_size=2`

```json
{
  "total": 3232,
  "page": 1,
  "page_size": 2,
  "total_pages": 1616,
  "data": [
    {
      "date": "2026-09-07",
      "dt_name": "11-AbesanINJ-T1-Aboru-AYO-AFOLABI 2",
      "feeder_name": "11-AbesanINJ-T1-Aboru",
      "band": "D",
      "consumption_kwh": 611.4,
      "dt_actual_availability_hrs": 0.75
    },
    {
      "date": "2026-09-07",
      "dt_name": "11-AbesanINJ-T1-Aboru-ERO FAMILY",
      "feeder_name": "11-AbesanINJ-T1-Aboru",
      "band": "D",
      "consumption_kwh": 6235.2,
      "dt_actual_availability_hrs": 0.75
    }
  ]
}
```

`consumption_kwh` is energy since the meter's previous reading, summed over the DT's meters. Readings are not daily, so it adds up across a month but is not a per-day figure.

---

## 7. MYTO Summary

`GET /api/v1/myto/summary?feeder_band=All&period=Month`

```json
{
  "period": "Aug 2026",
  "total_consumption_mwh": 113482.27,
  "period_vs_prev_pct": 0.34,
  "band_compliance": [
    {
      "band": "A",
      "actual_pct": 36.42,
      "nerc_target_pct": 45.0,
      "status": "Not met"
    },
    {
      "band": "B",
      "actual_pct": 29.68,
      "nerc_target_pct": 22.98,
      "status": "Exceeded"
    },
    {
      "band": "C",
      "actual_pct": 24.46,
      "nerc_target_pct": 20.41,
      "status": "Exceeded"
    },
    {
      "band": "D",
      "actual_pct": 9.43,
      "nerc_target_pct": 11.46,
      "status": "Not met"
    },
    {
      "band": "E",
      "actual_pct": 0.02,
      "nerc_target_pct": 0.15,
      "status": "Not met"
    }
  ],
  "energy_trend": [
    {
      "date": "2026-08-01",
      "mwh": 0.37
    },
    {
      "date": "2026-08-03",
      "mwh": 4.23
    },
    {
      "date": "2026-08-04",
      "mwh": 2.18
    },
    {
      "date": "2026-08-05",
      "mwh": 177.3
    },
    {
      "date": "2026-08-06",
      "mwh": 34.79
    },
    {
      "date": "2026-08-07",
      "mwh": 49.15
    },
    {
      "date": "2026-08-08",
      "mwh": 30.94
    },
    {
      "date": "2026-08-09",
      "mwh": 54.86
    },
    {
      "date": "2026-08-10",
      "mwh": 11.79
    },
    {
      "date": "2026-08-11",
      "mwh": 48.53
    },
    {
      "date": "2026-08-12",
      "mwh": 69.83
    },
    {
      "date": "2026-08-13",
      "mwh": 428.4
    },
    {
      "date": "2026-08-14",
      "mwh": 10.88
    },
    {
      "date": "2026-08-15",
      "mwh": 115.37
    },
    {
      "date": "2026-08-16",
      "mwh": 106.73
    },
    {
      "date": "2026-08-17",
      "mwh": 219.81
    },
    {
      "date": "2026-08-18",
      "mwh": 244.52
    },
    {
      "date": "2026-08-19",
      "mwh": 50.66
    },
    {
      "date": "2026-08-20",
      "mwh": 336.2
    },
    {
      "date": "2026-08-21",
      "mwh": 180.78
    },
    {
      "date": "2026-08-22",
      "mwh": 126.98
    },
    {
      "date": "2026-08-23",
      "mwh": 566.99
    },
    {
      "date": "2026-08-24",
      "mwh": 3693.46
    },
    {
      "date": "2026-08-25",
      "mwh": 5901.56
    },
    {
      "date": "2026-08-26",
      "mwh": 84116.01
    },
    {
      "date": "2026-08-27",
      "mwh": 4970.45
    },
    {
      "date": "2026-08-28",
      "mwh": 6263.59
    },
    {
      "date": "2026-08-29",
      "mwh": 5121.03
    },
    {
      "date": "2026-08-30",
      "mwh": 5444.76
    },
    {
      "date": "2026-08-31",
      "mwh": 17651.21
    }
  ],
  "energy_per_feeder_mwh": [
    {
      "band": "A",
      "mwh": 41330.4
    },
    {
      "band": "B",
      "mwh": 33676.71
    },
    {
      "band": "C",
      "mwh": 27752.2
    },
    {
      "band": "D",
      "mwh": 10697.79
    },
    {
      "band": "E",
      "mwh": 25.17
    }
  ],
  "feeder_communication_status": {
    "communicating_pct": 41.0
  }
}
```

`actual_pct` is band consumption over total consumption, so the bands sum to 100. `energy_trend` gives daily deltas, not register values.

---

## 8. IDB Dashboard

The postpaid schedule arrives one to two months after the month it covers, so the postpaid-derived revenue fields fill in later than the rest.

`GET /api/v1/idb/dashboard?feeder=All&date=2026-08`

```json
{
  "period": "Aug 2026",
  "feeder_filter": "All",
  "kpis": {
    "total_energy_mwh": 1545.0,
    "total_feeders": 2,
    "total_flagged_idb_meters": 7
  },
  "loss_metrics": {
    "feeder_to_dt_loss_mwh": 552.78,
    "feeder_to_dt_loss_pct": 35.78,
    "customer_to_dt_loss_mwh": 788.31,
    "customer_to_dt_loss_pct": 79.45
  },
  "efficiency": {
    "billing_efficiency_pct": 89.24,
    "atc_and_c_pct": 10.76
  },
  "dt_summary": {
    "total_dts": 77,
    "public_dts": 30,
    "private_dts": 35
  },
  "customers": {
    "total": 6965,
    "nmd_count": 6705,
    "nmd_pct": 96.27,
    "md_count": 260,
    "md_pct": 3.73
  },
  "revenue": {
    "billed": 329303015.86,
    "billed_pct_of_total": 47.5,
    "collected": 364028588.29,
    "collected_pct_of_total": 52.5
  },
  "energy_breakdown": {
    "md_energy_mwh": 61.96,
    "md_energy_pct": 5.92,
    "nmd_energy_kwh": 984711.56,
    "nmd_energy_pct": 94.08
  },
  "meter_communication": {
    "communicating_pct": 32.94
  }
}
```

`public_dts` and `private_dts` do not sum to `total_dts`: some running DTs carry neither an assessment nor a settlement meter.

In `energy_breakdown` the MD side is MWh and the NMD side is kWh, as named in the sample.

`billing_efficiency_pct` can exceed 100; see *Notes on values* at the end.

---

## 9. IDB Feeder to DT Loss

`GET /api/v1/idb/feeder-dt-loss?feeder=All&date=2026-07&page=1&page_size=50`

```json
{
  "total": 2,
  "page": 1,
  "page_size": 50,
  "total_pages": 1,
  "data": [
    {
      "feeder": "11-IgbobiINJ-T1-Apata-COMERCIO",
      "date": "2026-07",
      "band": "A",
      "total_public_dts": 21,
      "public_dts_energy_kwh": 354497.16,
      "total_private_dts": 19,
      "private_dts_energy_kwh": 18625.48,
      "total_dt_energy_kwh": 373122.65,
      "feeder_energy_kwh": 882240.0,
      "feeder_to_dt_loss_kwh": 509117.35,
      "feeder_loss_pct": 57.71
    },
    {
      "feeder": "33-IkoroduTCN-FAKALE Source-COMERCIO",
      "date": "2026-07",
      "band": "A",
      "total_public_dts": 9,
      "public_dts_energy_kwh": 78179.73,
      "total_private_dts": 16,
      "private_dts_energy_kwh": 0.0,
      "total_dt_energy_kwh": 78179.73,
      "feeder_energy_kwh": 358200.0,
      "feeder_to_dt_loss_kwh": 280020.27,
      "feeder_loss_pct": 78.17
    }
  ]
}
```

Only about a third of the IDB DTs carry a reading, so these loss percentages reflect metering coverage as much as real loss.

## 10. IDB Customer to DT Loss

`GET /api/v1/idb/customer-dt-loss?feeder=All&date=2026-08&page=1&page_size=50`

```json
{
  "total": 2,
  "page": 1,
  "page_size": 50,
  "total_pages": 1,
  "data": [
    {
      "feeder": "11-IgbobiINJ-T1-Apata-COMERCIO",
      "all_customers": 5084,
      "postpaid_md": 227,
      "comms_pct": 32.94,
      "total_meters_communicating": 28,
      "prepaid_md": 41,
      "idb_prepay": 4857,
      "dt_consumption_mwh": 899.57,
      "idb_prepay_consumption_mwh": 801.32,
      "md_prepay_consumption_mwh": 61.9,
      "postpaid_md_consumption_mwh": 0.0,
      "idb_md_consumption_mwh": 863.23,
      "customer_to_dt_loss_mwh": 36.34,
      "customer_to_dt_loss_pct": 4.04,
      "billing_efficiency_pct": 82.3,
      "collection_efficiency_pct": 100.0,
      "atc_and_c_pct": 17.7
    },
    {
      "feeder": "33-IkoroduTCN-FAKALE Source-COMERCIO",
      "all_customers": 1881,
      "postpaid_md": 33,
      "comms_pct": 32.94,
      "total_meters_communicating": 28,
      "prepaid_md": 3,
      "idb_prepay": 1848,
      "dt_consumption_mwh": 92.65,
      "idb_prepay_consumption_mwh": 183.39,
      "md_prepay_consumption_mwh": 0.05,
      "postpaid_md_consumption_mwh": 0.0,
      "idb_md_consumption_mwh": 183.44,
      "customer_to_dt_loss_mwh": null,
      "customer_to_dt_loss_pct": null,
      "billing_efficiency_pct": 156.63,
      "collection_efficiency_pct": 100.0,
      "atc_and_c_pct": -56.63
    }
  ]
}
```

`idb_md_consumption_mwh` is IDB Prepay plus MD Prepay plus Postpaid MD. `customer_to_dt_loss_mwh` is DT consumption minus that total, and is null where the total exceeds DT consumption, which happens on a feeder whose DT metering is short. `postpaid_md_consumption_mwh` reads 0.00 until that month's schedule posts.

---

## Notes on values

**Nulls.** `customercomplaints.total`, `open` and `closed` have no source system and are always null; the keys are present so binding does not break. `customer_to_dt_loss_mwh` is null on a feeder whose DT metering is short. Every other field returns a value.

**Figures grow.** The postpaid schedule arrives one to two months after the month it covers, so any figure with a postpaid component carries only its prepaid half for the most recent month and rises when the schedule posts.

**Billing efficiency.** `BE = energy billed / energy on DT × 100`, and `ATC&C = (1 − BE × CE) × 100`. A BE above 100 means DT metering is incomplete while billing covers every customer, not that customers were over-billed; a negative ATC&C follows from it and means the same. A collection efficiency above 100 is normal, since a month's payments can include arrears.

**Loss and metering coverage.** Only a fraction of DTs carry a reading, so any loss measured between a fully metered level and the DT level compares complete energy above with incomplete energy below, and overstates loss by the unmetered remainder.
