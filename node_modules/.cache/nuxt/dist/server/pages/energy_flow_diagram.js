exports.ids = [31,22,25,26];
exports.modules = {

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LEVEL_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LEVEL_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LEVEL_RESPONSE_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LEVEL_COUNT_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FILTERABLE_LEVEL_COUNT; });
/* unused harmony export seededFloat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return seededRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fmt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return extractFeederFromPathKey; });
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

const LEVEL_LABELS = ['TS', 'Transformer', '33kV Feeder', 'ISS', 'Transformer 2', '11kV Incomer', '11kV Outgoing Feeder'];
const LEVEL_COUNT = LEVEL_LABELS.length;

// Maps each level index to the matching key in the /energy-flow response, and to the field
// within that section holding the entity count (shown as the card's "Total X" footer).
const LEVEL_RESPONSE_KEYS = ['ts', 'transformer_capacity', 'feeders_33kva', 'iss', 'transformer2', 'incomer_11kva', 'outgoing_feeder_11kva'];
const LEVEL_COUNT_KEYS = ['total_ts', 'total_transformers', 'total_feeders', 'total_iss', 'total_transformer2', 'total_incomers', 'total_feeders'];

// Only these levels correspond to real, documented query params (ts/transformer/feeder_33kva) -
// a selection change at level 3+ (ISS onward) can't be sent to the API at all.
const FILTERABLE_LEVEL_COUNT = 3;
function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  }
  return h;
}
function seededFloat(seedStr) {
  const x = Math.sin(hashCode(seedStr)) * 10000;
  return x - Math.floor(x);
}
function seededRange(seedStr, min, max) {
  return min + seededFloat(seedStr) * (max - min);
}
function fmt(n) {
  return Number(n).toLocaleString('en-US', {
    maximumFractionDigits: 2
  });
}

// Pulls the "11kV Outgoing Feeder" value back out of a card's selfPathKey (built as
// "...>11kV Outgoing Feeder=<value>..."), so the DT card below it can look up real DTs for
// that specific feeder. Returns null if DT is hanging off an earlier level instead (the
// Path B dead-end branch - see FlowLane.vue), since there's no single feeder to key by then.
function extractFeederFromPathKey(pathKey) {
  const marker = '>11kV Outgoing Feeder=';
  const idx = pathKey.lastIndexOf(marker);
  if (idx === -1) return null;
  const rest = pathKey.slice(idx + marker.length);
  const nextGt = rest.indexOf('>');
  return nextGt === -1 ? rest : rest.slice(0, nextGt);
}

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(157);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4b24f007", content, true, context)
};

/***/ }),

/***/ 155:
/***/ (function(module) {

module.exports = JSON.parse("{\"AKOKA TS\":{\"T3\":{\"33-AkokaTCN-New Yaba\":{\"NEW YABA INJ\":{\"T2\":{\"11-New YabaINJ-T2-Incomer\":{\"11-New YabaINJ-T2-Jibowu\":{}}}}},\"33-AkokaTCN-T3A\":{\"AKOKA INJ\":{\"T3\":{\"11-AkokaINJ-T3-Incomer\":{\"11-AkokaINJ-T3-Akoka\":{},\"11-AkokaINJ-T3-Community\":{}}}}}}},\"ALAUSA TS\":{\"T1\":{\"33-AlausaTCN-OJODU\":{\"OPEBI INJ\":{\"T1\":{\"11-OpebiINJ-T1-Incomer\":{\"11-OpebiINJ-T1-Agbaoku\":{},\"11-OpebiINJ-T1-Olusosun\":{},\"11-OpebiINJ-T1-Salvation\":{}}}}},\"33-AlausaTCN-T4\":{\"NEW ALAUSA INJ\":{\"T4\":{\"11-New AlausaINJ-T4-Incomer\":{\"11-New AlausaINJ-T4-Allen\":{},\"11-New AlausaINJ-T4-Aromire\":{},\"11-New AlausaINJ-T4-Oregun\":{}}},\"T5\":{\"11-New AlausaINJ-T5-Incomer\":{\"11-New AlausaINJ-T5-Alausa\":{},\"11-New AlausaINJ-T5-Kudirat\":{},\"11-New AlausaINJ-T5-Morrison\":{}}}}},\"33-AlausaTCN-T6\":{\"NEW ALAUSA INJ\":{\"T6\":{\"11-New AlausaINJ-T6-Incomer\":{\"11-New AlausaINJ-T6-Awolowo\":{},\"11-New AlausaINJ-T6-Ogundana\":{},\"11-New AlausaINJ-T6-Siyanbola\":{}}}}}},\"T2\":{\"33-AlausaTCN-ALAUSA\":{\"SECRETARIAT INJ\":{\"T1\":{\"11-SecretariatINJ-T1-Incomer\":{\"11-SecretariatINJ-T1-Estate\":{},\"11-SecretariatINJ-T1-Lateef Jakande\":{},\"11-SecretariatINJ-T1-Omole\":{}}},\"T2\":{\"11-SecretariatINJ-T2-Incomer\":{\"11-SecretariatINJ-T2-7UP\":{},\"11-SecretariatINJ-T2-Agidingbi\":{},\"11-SecretariatINJ-T2-UAC\":{}}}}},\"33-AlausaTCN-MAGODO\":{\"MAGODO INJ\":{\"T1\":{\"11-MagodoINJ-T1-Incomer\":{\"11-MagodoINJ-T1-Emmanuel Keshi\":{},\"11-MagodoINJ-T1-Oluyombo\":{},\"11-MagodoINJ-T1-Owulade\":{},\"11-MagodoINJ-T1-Shangisha\":{}}},\"T2\":{\"11-MagodoINJ-T2-Incomer\":{\"11-MagodoINJ-T2-Bashiru\":{},\"11-MagodoINJ-T2-CMD\":{}}}}},\"33-AlausaTCN-OPIC\":{\"ISHERI INJ\":{\"T1\":{\"11-IsheriINJ-T1-Incomer\":{\"11-IsheriINJ-T1-Bankole\":{},\"11-IsheriINJ-T1-Isheri\":{},\"11-IsheriINJ-T1-Olowora\":{}}}},\"OLOWORA INJ\":{\"T1\":{\"11-OloworaINJ-T1-Incomer\":{\"11-OloworaINJ-T1-Orisha\":{},\"11-OloworaINJ-T1-UNILAG\":{}}}}}},\"T3\":{\"33-AlausaTCN-OPEBI\":{},\"33-AlausaTCN-T5\":{}}},\"ALIMOSHO TS\":{\"T1\":{\"33-AlimoshoTCN-T4\":{\"ALIMOSHO INJ\":{\"T4\":{\"11-AlimoshoINJ-T4-Incomer\":{\"11-AlimoshoINJ-T4-Akowonjo\":{},\"11-AlimoshoINJ-T4-FHA\":{},\"11-AlimoshoINJ-T4-Oki\":{}}}}},\"33-AlimoshoTCN-T6\":{\"ALIMOSHO INJ\":{\"T6\":{\"11-AlimoshoINJ-T6-Incomer\":{\"11-AlimoshoINJ-T6-Orelope\":{},\"11-AlimoshoINJ-T6-Shasha\":{}}}}}},\"T2\":{\"33-AlimoshoTCN-AGEGE\":{\"AGEGE INJ\":{\"T2\":{\"11-AgegeINJ-T2-Incomer\":{\"11-AgegeINJ-T2-Abule Egba\":{},\"11-AgegeINJ-T2-Orile Agege\":{},\"11-AgegeINJ-T2-Power Line\":{}}},\"T3\":{\"11-AgegeINJ-T3-Incomer\":{\"11-AgegeINJ-T3-Oyemekun\":{},\"11-AgegeINJ-T3-Pen Cinema\":{},\"11-AgegeINJ-T3-Tabon Tabon\":{}}}},\"HILLTOP INJ\":{\"T1\":{\"11-HilltopINJ-T1-Incomer\":{\"11-HilltopINJ-T1-Hilltop\":{}}}}},\"33-AlimoshoTCN-T8\":{\"ALIMOSHO INJ\":{\"T8\":{\"11-AlimoshoINJ-T8-Incomer\":{\"11-AlimoshoINJ-T8-Alimosho\":{},\"11-AlimoshoINJ-T8-Okunola\":{},\"11-AlimoshoINJ-T8-Wole Omo Osho\":{}}}}}},\"T3\":{\"33-AlimoshoTCN-ADIYAN\":{\"NEW GOWON INJ\":{\"T1\":{\"11-New GowonINJ-T1-Incomer\":{\"11-New GowonINJ-T1-Kuwait\":{},\"11-New GowonINJ-T1-Olorunadaba\":{},\"11-New GowonINJ-T1-Unity\":{}}}}},\"33-AlimoshoTCN-EKORO\":{\"AGEGE INJ\":{\"T1\":{\"11-AgegeINJ-T1-Incomer\":{\"11-AgegeINJ-T1-Abattoir\":{},\"11-AgegeINJ-T1-Iju Road\":{},\"11-AgegeINJ-T1-Oko Oba\":{}}}},\"EKORO INJ\":{\"T2\":{\"11-EkoroINJ-T2-Incomer\":{\"11-EkoroINJ-T2-Agbele\":{},\"11-EkoroINJ-T2-Oke Odo\":{},\"11-EkoroINJ-T2-Olota\":{}}}}},\"33-AlimoshoTCN-TOWER IPAJA\":{\"ADARANIJO INJ\":{\"T1\":{\"11-AdaranijoINJ-T1-Incomer\":{\"11-AdaranijoINJ-T1-Arigbanla\":{},\"11-AdaranijoINJ-T1-NYSC\":{},\"11-AdaranijoINJ-T1-Oyewole\":{}}}}}}},\"AMUWO TS\":{\"T1\":{\"33-AmuwoTCN-FESTAC1\":{}},\"T3\":{\"33-AmuwoTCN-HONGXING 2\":{}},\"T5\":{\"33-AmuwoTCN-AMUKOKO\":{\"AMUWO INJ\":{\"T1\":{\"11-AmuwoINJ-T1-Incomer\":{\"11-AmuwoINJ-T1-Ijesha Express\":{},\"11-AmuwoINJ-T1-Old Ojo Road\":{}}},\"T2\":{\"11-AmuwoINJ-T2-Incomer\":{\"11-AmuwoINJ-T2-Jakande 1\":{},\"11-AmuwoINJ-T2-Jakande 2\":{}}}}},\"33-AmuwoTCN-HONGXING 1\":{}}},\"AYOBO TS\":{\"T1 & T2\":{\"33-AyoboTCN-ABESAN\":{\"ABESAN INJ\":{\"T1\":{\"11-AbesanINJ-T1-Incomer\":{\"11-AbesanINJ-T1-Aboru\":{},\"11-AbesanINJ-T1-Baruwa\":{},\"11-AbesanINJ-T1-Ipaja\":{}}},\"T2\":{\"11-AbesanINJ-T2-Incomer\":{\"11-AbesanINJ-T2-Abesan\":{},\"11-AbesanINJ-T2-Shagari\":{}}}}},\"33-AyoboTCN-ABULE TAYLOR\":{\"ABULE TAYLOR INJ\":{\"T1\":{\"11-Abule TaylorINJ-T1-Incomer\":{\"11-Abule TaylorINJ-T1-Bode Williams\":{},\"11-Abule TaylorINJ-T1-Walter Anderm\":{}}}},\"EKORO INJ\":{\"T1\":{\"11-EkoroINJ-T1-Incomer\":{\"11-EkoroINJ-T1-Ajasa\":{},\"11-EkoroINJ-T1-Ekoro\":{}}}}},\"33-AyoboTCN-AIYETORO\":{\"ALAJA INJ\":{\"T1\":{\"11-AlajaINJ-T1-Incomer\":{\"11-AlajaINJ-T1-Fadayomi\":{},\"11-AlajaINJ-T1-Koloba\":{},\"11-AlajaINJ-T1-Megida\":{}}}},\"AYETORO INJ\":{\"T1\":{\"11-AyetoroINJ-T1-Incomer\":{\"11-AyetoroINJ-T1-Bada\":{},\"11-AyetoroINJ-T1-Itele\":{},\"11-AyetoroINJ-T1-Lafenwa\":{}}}}},\"33-AyoboTCN-AMIKANLE\":{\"AMIKANLE INJ\":{\"T1\":{\"11-AmikanleINJ-T1-Incomer\":{\"11-AmikanleINJ-T1-Aiyetobi\":{},\"11-AmikanleINJ-T1-Ige\":{},\"11-AmikanleINJ-T1-Isoto\":{}}}},\"ILAPO INJ\":{\"T1\":{\"11-IlapoINJ-T1-Incomer\":{\"11-IlapoINJ-T1-Ilapo\":{}}}}},\"33-AyoboTCN-AYOBO\":{\"AYOBO INJ\":{\"T1\":{\"11-AyoboINJ-T1-Incomer\":{\"11-AyoboINJ-T1-Atanla\":{},\"11-AyoboINJ-T1-Ayobo\":{},\"11-AyoboINJ-T1-Ikola\":{}}}}}}},\"EGBIN TS\":{\"T1\":{\"33-EgbinTCN-AMBER\":{},\"33-EgbinTCN-OKE ELETU\":{\"IJEDE INJ\":{\"T1\":{\"11-IjedeINJ-T1-Incomer\":{\"11-IjedeINJ-T1-Gberibe\":{},\"11-IjedeINJ-T1-Luwasa\":{}}}}}}},\"EJIGBO TS\":{\"T1\":{\"33-EjigboTCN-AIRPORT\":{},\"33-EjigboTCN-OKE AFA 1\":{\"OKE AFA INJ\":{\"T2\":{\"11-Oke AfaINJ-T2-Incomer\":{\"11-Oke AfaINJ-T2-Ilamoshe\":{},\"11-Oke AfaINJ-T2-LCHE\":{},\"11-Oke AfaINJ-T2-Osolo\":{}}}}},\"33-EjigboTCN-OKEAFA 2\":{\"OKE AFA INJ\":{\"T1\":{\"11-Oke AfaINJ-T1-Incomer\":{\"11-Oke AfaINJ-T1-Bucknor\":{},\"11-Oke AfaINJ-T1-Ejigbo\":{},\"11-Oke AfaINJ-T1-Ire-Akari\":{}}},\"T3\":{\"11-Oke AfaINJ-T3-Incomer\":{\"11-Oke AfaINJ-T3-Bungalow\":{},\"11-Oke AfaINJ-T3-NNPC\":{},\"11-Oke AfaINJ-T3-Ori Oke\":{}}}}}},\"T2\":{\"33-EjigboTCN-IGANDO\":{\"IGANDO INJ\":{\"T1\":{\"11-IgandoINJ-T1-Incomer\":{\"11-IgandoINJ-T1-Egan\":{},\"11-IgandoINJ-T1-New Igando\":{},\"11-IgandoINJ-T1-Obadore\":{}}},\"T2\":{\"11-IgandoINJ-T2-Incomer\":{\"11-IgandoINJ-T2-Agric Road\":{},\"11-IgandoINJ-T2-Akesan\":{},\"11-IgandoINJ-T2-General Hospital\":{},\"11-IgandoINJ-T2-Ikotun Igando\":{}}}},\"LAGOS HOMS INJ\":{\"T1\":{\"11-Lagos HomsINJ-T1-Incomer\":{\"11-Lagos HomsINJ-T1-Estate\":{}}}}},\"33-EjigboTCN-IJEGUN\":{\"IJEGUN INJ\":{\"T1\":{\"11-IjegunINJ-T1-Incomer\":{\"11-IjegunINJ-T1-Ikotun\":{},\"11-IjegunINJ-T1-Obalagbe\":{},\"11-IjegunINJ-T1-Okerube\":{}}},\"T2\":{\"11-IjegunINJ-T2-Incomer\":{\"11-IjegunINJ-T2-Ijegun\":{},\"11-IjegunINJ-T2-Isheri Oshun\":{},\"11-IjegunINJ-T2-Pipeline\":{}}}}}},\"T3\":{\"33-EjigboTCN-AGODO\":{\"AGODO EGBE INJ\":{\"T1\":{\"11-Agodo EgbeINJ-T1-Incomer\":{\"11-Agodo EgbeINJ-T1-Abanishe\":{},\"11-Agodo EgbeINJ-T1-Kudaki\":{}}}}},\"33-EjigboTCN-EGBE\":{\"BOLORUNPELU INJ\":{\"T1\":{\"11-BolorunpeluINJ-T1-Incomer\":{\"11-BolorunpeluINJ-T1-Abaranje\":{},\"11-BolorunpeluINJ-T1-Idimu\":{},\"11-BolorunpeluINJ-T1-Isijola\":{}},\"11-BolorunpeluINJ-T3-Incomer\":{\"11-BolorunpeluINJ-T3-Governor\":{},\"11-BolorunpeluINJ-T3-Liasu\":{}}}},\"KWARU INJ\":{\"T1\":{\"11-KwaruINJ-T1-Incomer\":{\"11-KwaruINJ-T1-Asalu\":{},\"11-KwaruINJ-T1-Osunba\":{}}}}},\"33-EjigboTCN-SHASHA\":{\"SHASHA INJ\":{\"T1\":{\"11-ShashaINJ-T1-Incomer\":{\"11-ShashaINJ-T1-Coker Estate\":{},\"11-ShashaINJ-T1-Foursquare\":{},\"11-ShashaINJ-T1-NAF\":{},\"11-ShashaINJ-T1-Oguntade\":{},\"11-ShashaINJ-T1-Orisunbare\":{}}}}}},\"T4\":{\"33-EjigboTCN-BOLORUNPELU\":{}}},\"IKORODU TS\":{\"T1\":{\"33-IkoroduTCN-IJEDE\":{},\"33-IkoroduTCN-T1A\":{\"SABO INJ\":{\"T1\":{\"11-SaboINJ-T1-Incomer\":{\"11-SaboINJ-T1-Ayangburen\":{},\"11-SaboINJ-T1-Ijebu Ode\":{},\"11-SaboINJ-T1-Lasunwon\":{},\"11-SaboINJ-T1-Mary Hill\":{}}}}},\"33-IkoroduTCN-UNTL\":{}},\"T2\":{\"33-IkoroduTCN-INDUSTRIAL\":{},\"33-IkoroduTCN-IPAKODO\":{\"IPAKODO INJ\":{\"T1\":{\"11-Ipakodo (Ebute)INJ-T1-Incomer\":{\"11-Ipakodo (Ebute)INJ-T1-Abuja\":{},\"11-Ipakodo (Ebute)INJ-T1-Ipakodo\":{},\"11-Ipakodo (Ebute)INJ-T1-WAEC\":{}}}}},\"33-IkoroduTCN-T2A\":{\"SABO INJ\":{\"T2\":{\"11-SaboINJ-T2-Incomer\":{\"11-SaboINJ-T2-Erunwen\":{},\"11-SaboINJ-T2-Eyita\":{},\"11-SaboINJ-T2-Igbogbo\":{},\"11-SaboINJ-T2-Ladega\":{},\"11-SaboINJ-T2-Lagos Road\":{}}}}}},\"T3\":{\"33-IkoroduTCN-DANGOTE\":{},\"33-IkoroduTCN-FAKALE Source\":{},\"33-IkoroduTCN-IBESHE\":{\"AJEGUNLE INJ\":{\"T1\":{\"11-AjegunleINJ-T1-Incomer\":{\"11-AjegunleINJ-T1-Owode Onirin\":{},\"11-AjegunleINJ-T1-Thomas Olaniyan\":{}}}}},\"33-IkoroduTCN-OWUTU\":{\"OWUTU INJ\":{\"T1\":{\"11-OwutuINJ-T1-Incomer\":{\"11-OwutuINJ-T1-Agric\":{},\"11-OwutuINJ-T1-Ori Okuta\":{}}},\"T2\":{\"11-OwutuINJ-T2-Incomer\":{\"11-OwutuINJ-T2-Asolo\":{},\"11-OwutuINJ-T2-Isawo\":{},\"11-OwutuINJ-T2-Majidun\":{}}}}},\"33-IkoroduTCN-PULKIT\":{}},\"T4\":{\"33-IkoroduTCN-AGBOWA\":{\"EPE INJ\":{\"T1\":{\"11-EpeINJ-T1-Incomer\":{\"11-EpeINJ-T1-LASU\":{},\"11-EpeINJ-T1-Township\":{},\"11-EpeINJ-T1-Water Works\":{}}}}},\"33-IkoroduTCN-IGBOGBO\":{\"IGBOGBO INJ\":{\"T1\":{\"11-IgbogboINJ-T1-Incomer\":{\"11-IgbogboINJ-T1-Bayeku\":{},\"11-IgbogboINJ-T1-Ofin\":{}}},\"T2\":{\"11-IgbogboINJ-T2-Incomer\":{\"11-IgbogboINJ-T2-Agbele\":{},\"11-IgbogboINJ-T2-Agunfoye\":{},\"11-IgbogboINJ-T2-Odofin\":{}}}}},\"33-IkoroduTCN-SPINTEX\":{}}},\"ILUPEJU TS\":{\"T1 & T3\":{\"11-IlupejuINJ-T1-Incomer\":{\"ILUPEJU INJ\":{\"T1\":{\"11-IlupejuINJ-T1-Incomer\":{\"11-IlupejuINJ-T1-ATM\":{},\"11-IlupejuINJ-T1-Bhojson\":{},\"11-IlupejuINJ-T1-Rida Plastic\":{}}}}},\"11-IlupejuINJ-T3-Incomer\":{\"ILUPEJU INJ\":{\"T3\":{\"11-IlupejuINJ-T3-Incomer\":{\"11-IlupejuINJ-T3-Coker\":{},\"11-IlupejuINJ-T3-L & K\":{},\"11-IlupejuINJ-T3-PZ\":{},\"11-IlupejuINJ-T3-Palmgrove\":{}}}}}},\"T2\":{\"33-IlupejuTCN-ILUPEJU IGBOBI\":{\"IGBOBI INJ\":{\"T2\":{\"11-IgbobiINJ-T2-Incomer\":{\"11-IgbobiINJ-T2-Adurosakin\":{},\"11-IgbobiINJ-T2-Igbobi\":{},\"11-IgbobiINJ-T2-Market\":{}}},\"T3\":{\"11-IgbobiINJ-T3-Incomer\":{\"11-IgbobiINJ-T3-Ikorodu\":{},\"11-IgbobiINJ-T3-Mushin\":{},\"11-IgbobiINJ-T3-Railway\":{}}}}},\"33-IlupejuTCN-ILUPEJU PACEGATE\":{}},\"T4\":{\"33-IlupejuTCN-ILUPEJU BY-PASS\":{\"ILUPEJU BYPASS INJ\":{\"T1\":{\"11-Ilupeju BypassINJ-T1-Incomer\":{\"11-Ilupeju BypassINJ-T1-Bypass\":{},\"11-Ilupeju BypassINJ-T1-Industrial\":{},\"11-Ilupeju BypassINJ-T1-Obanikoro\":{}}}},\"MUSHIN INJ\":{\"T1\":{\"11-MushinINJ-T1-Incomer\":{\"11-MushinINJ-T1-Mushin\":{},\"11-MushinINJ-T1-Mushin 2\":{}}}}},\"33-IlupejuTCN-ILUPEJU PRIME\":{},\"33-IlupejuTCN-T4A\":{\"ILUPEJU INJ\":{\"T4\":{\"11-IlupejuINJ-T4-Incomer\":{\"11-IlupejuINJ-T4-Army Cant.\":{},\"11-IlupejuINJ-T4-Ikorodu\":{}}}}}}},\"ISOLO TS\":{\"T1\":{\"33-IsoloTCN-PTC Interface\":{\"ALASIA INJ\":{\"T1\":{\"11-AlasiaINJ-T1-Incomer\":{\"11-AlasiaINJ-T1-Alasia\":{},\"11-AlasiaINJ-T1-Council\":{},\"11-AlasiaINJ-T1-Owoseni\":{}}}}}},\"T2\":{\"(Unspecified Feeder)\":{\"EKO MUSHIN INJ\":{}},\"33-IsoloTCN-AFPRINT\":{},\"33-IsoloTCN-AJAO\":{\"AJAO INJ\":{\"T1\":{\"11-AjaoINJ-T1-Incomer\":{\"11-AjaoINJ-T1-Airport Road\":{},\"11-AjaoINJ-T1-Domino\":{}}},\"T2\":{\"11-AjaoINJ-T2-Incomer\":{\"11-AjaoINJ-T2-New Estate\":{},\"11-AjaoINJ-T2-Run View\":{},\"11-AjaoINJ-T2-Sholanke\":{}}}},\"MAFOLUKU INJ\":{\"T1\":{\"11-MafolukuINJ-T1-Incomer\":{\"11-MafolukuINJ-T1-Dosunmu\":{},\"11-MafolukuINJ-T1-Makinde\":{},\"11-MafolukuINJ-T1-Saubana\":{}}}}},\"33-IsoloTCN-PURE HYGIENE\":{}},\"T3\":{\"33-IsoloTCN-AIRPORT\":{},\"33-IsoloTCN-ASWANI\":{}}},\"ITIRE TS\":{\"T1\":{\"33-ItireTCN-AGO II\":{},\"33-ItireTCN-T3A\":{\"ITIRE INJ\":{\"T3\":{\"11-ItireINJ-T3-Incomer\":{\"11-ItireINJ-T3-Ago\":{},\"11-ItireINJ-T3-Apena\":{}}}}}},\"T3\":{\"33-ItireTCN-AGO I\":{\"AGO OKOTA INJ\":{\"T1\":{\"11-Ago OkotaINJ-T1-Incomer\":{\"11-Ago OkotaINJ-T1-Amuwo Ind.\":{},\"11-Ago OkotaINJ-T1-Fasheun\":{}}},\"T2\":{\"11-Ago OkotaINJ-T2-Incomer\":{\"11-Ago OkotaINJ-T2-Lake View\":{},\"11-Ago OkotaINJ-T2-Oke Ogbere\":{}}}}},\"33-ItireTCN-ITIRE 1\":{\"ITIRE INJ\":{\"T1\":{\"11-ItireINJ-T1-Incomer\":{\"11-ItireINJ-T1-Ademulegun\":{},\"11-ItireINJ-T1-Okota\":{}}},\"T2\":{\"11-ItireINJ-T2-Incomer\":{\"11-ItireINJ-T2-Amuwo-Ijesha\":{},\"11-ItireINJ-T2-Canal\":{},\"11-ItireINJ-T2-Ibalex\":{}}}}}}},\"LANDCRAFT TS\":{\"T1\":{\"132-EgbinTCN-MARYLAND-LANDCRAFT\":{}}},\"MARYLAND TS\":{\"T1 & T3\":{\"33-MarylandTCN-M/ALAUSA\":{},\"33-MarylandTCN-RACK CENTRE\":{},\"33-MarylandTCN-T1A\":{\"MARYLAND INJ\":{\"T1\":{\"11-MarylandINJ-T1-Incomer\":{\"11-MarylandINJ-T1-Ketu\":{},\"11-MarylandINJ-T1-Okupe\":{},\"11-MarylandINJ-T1-PTC\":{}}}}},\"33-MarylandTCN-T3A\":{\"MARYLAND INJ\":{\"T3\":{\"11-MarylandINJ-T3-Incomer\":{\"11-MarylandINJ-T3-Demurin\":{},\"11-MarylandINJ-T3-Ikosi\":{},\"11-MarylandINJ-T3-Sylvia\":{}}}}}},\"T2\":{\"33-MarylandTCN-AJEGUNLE\":{\"WASIMI INJ\":{\"T1\":{\"11-WasimiINJ-T1-Incomer\":{\"11-WasimiINJ-T1-Agiliti\":{},\"11-WasimiINJ-T1-Akanimodo\":{},\"11-WasimiINJ-T1-Araromi\":{}}},\"T2\":{\"11-WasimiINJ-T2-Incomer\":{\"11-WasimiINJ-T2-Agidi\":{},\"11-WasimiINJ-T2-Wasimi\":{}}}}},\"33-MarylandTCN-PTC\":{\"ADEKUNLE FAJUYI INJ\":{\"T1\":{\"11-Adekunle FajuyiINJ-T1-Incomer\":{\"11-Adekunle FajuyiINJ-T1-Isaac John\":{},\"11-Adekunle FajuyiINJ-T1-Oduduwa\":{}}}}},\"33-MarylandTCN-T2A\":{\"MARYLAND INJ\":{\"T2\":{\"11-MarylandINJ-T2-Incomer\":{\"11-MarylandINJ-T2-GRA\":{},\"11-MarylandINJ-T2-Ojota\":{},\"11-MarylandINJ-T2-Westex\":{}}}}}}},\"MONARCH TS\":{\"T1\":{\"132-Egbin-TCN-SAGAMU-MONARCH ALLOYS\":{}}},\"ODOGUNYAN TS\":{\"T1\":{\"33-OdogunyanTCN-AGBEDE\":{},\"33-OdogunyanTCN-MEGA STEEL\":{}},\"T2\":{\"33-OdogunyanTCN-CHIKKICHIKKI\":{},\"33-OdogunyanTCN-FAKALE MAYA\":{},\"33-OdogunyanTCN-ODOGUNYAN\":{\"ODOGUNYAN INJ\":{\"T1\":{\"11-OdogunyanINJ-T1-Incomer\":{\"11-OdogunyanINJ-T1-Agodo\":{},\"11-OdogunyanINJ-T1-Centex\":{},\"11-OdogunyanINJ-T1-Industrial\":{}}},\"T2\":{\"11-OdogunyanINJ-T2-Incomer\":{\"11-OdogunyanINJ-T2-Cantonment\":{},\"11-OdogunyanINJ-T2-Ita Oluwo\":{},\"11-OdogunyanINJ-T2-Odokekere\":{}}}}}}},\"OGBA TS\":{\"T1 & T2\":{\"33-OgbaTCN-ABEOKUTA EXP.\":{\"BECKLEY INJ\":{\"T1\":{\"11-BeckleyINJ-T1-Incomer\":{\"11-BeckleyINJ-T1-Agbe road\":{},\"11-BeckleyINJ-T1-Beckley\":{}}}},\"IJAIYE OJOKORO INJ\":{\"T1\":{\"11-Ijaiye OjokoroINJ-T1-Incomer\":{\"11-Ijaiye OjokoroINJ-T1-Abeokuta Express\":{},\"11-Ijaiye OjokoroINJ-T1-Agbado 2\":{},\"11-Ijaiye OjokoroINJ-T1-Jankara\":{}}}},\"MAPLEWOOD INJ\":{\"T1\":{\"11-MaplewoodINJ-T1-Incomer\":{\"11-MaplewoodINJ-T1-Maplewood\":{}}}}},\"33-OgbaTCN-FEEDER 2\":{\"OGBA INJ\":{\"T1\":{\"11-OgbaINJ-T1-Incomer\":{\"11-OgbaINJ-T1-Ijaye\":{},\"11-OgbaINJ-T1-Isokoko\":{}}}}},\"33-OgbaTCN-PTC DUNLOP\":{\"MONGORO INJ\":{\"T1\":{\"11-MongoroINJ-T1-Incomer\":{\"11-MongoroINJ-T1-Capitol\":{},\"11-MongoroINJ-T1-New Dopemu\":{},\"11-MongoroINJ-T1-Sule\":{}}}}},\"33-OgbaTCN-SANKYO\":{}},\"T3\":{\"33-OgbaTCN-FEEDER 8\":{\"OGBA INJ\":{\"T2\":{\"11-OgbaINJ-T2-Incomer\":{\"11-OgbaINJ-T2-Ifako\":{},\"11-OgbaINJ-T2-Mangoro\":{}}},\"T3\":{\"11-OgbaINJ-T3-Incomer\":{\"11-OgbaINJ-T3-Agege\":{},\"11-OgbaINJ-T3-Oba Akran\":{}}}}},\"33-OgbaTCN-IJU WATER WORKS\":{\"OBAWOLE INJ\":{\"T1\":{\"11-ObawoleINJ-T1-Incomer\":{\"11-ObawoleINJ-T1-Rotimi Williams\":{},\"11-ObawoleINJ-T1-Shonubi\":{},\"11-ObawoleINJ-T1-Youdeowei\":{}}}}},\"33-OgbaTCN-UNIVERSAL STEEL\":{\"ADENIYI JONES INJ\":{\"T1\":{\"11-Adeniyi JonesINJ-T1-Incomer\":{\"11-Adeniyi JonesINJ-T1-Adeniyi Jones\":{},\"11-Adeniyi JonesINJ-T1-Ajao\":{},\"11-Adeniyi JonesINJ-T1-Anifowoshe\":{}}}}}},\"T4\":{\"33-OgbaTCN-MTN\":{},\"33-OgbaTCN-NEW OJODU\":{\"OJODU INJ\":{\"T1\":{\"11-OjoduINJ-T1-Incomer\":{\"11-OjoduINJ-T1-Alagbole\":{},\"11-OjoduINJ-T1-King Avenue\":{},\"11-OjoduINJ-T1-Ojodu\":{}}},\"T2\":{\"11-OjoduINJ-T2-Incomer\":{\"11-OjoduINJ-T2-Express\":{},\"11-OjoduINJ-T2-River Valley\":{},\"11-OjoduINJ-T2-Yakoyo\":{}}}}},\"33-OgbaTCN-PTC EXP.\":{\"PTC INJ\":{\"T1\":{\"11-PTCINJ-T1-Incomer\":{\"11-PTCINJ-T1-Olowu\":{},\"11-PTCINJ-T1-Opebi\":{}}},\"T2\":{\"11-PTCINJ-T2-Incomer\":{\"11-PTCINJ-T2-Awuse\":{},\"11-PTCINJ-T2-Medical\":{}}},\"T3\":{\"11-PTCINJ-T3-Incomer\":{\"11-PTCINJ-T3-General Hospital\":{},\"11-PTCINJ-T3-Oba Akinjobi\":{}}}}}},\"T4 Mobitra\":{\"33-OgbaTCN-CISCO\":{\"OKE IRA INJ\":{\"T1\":{\"11-Oke IraINJ-T1-Incomer\":{\"11-Oke IraINJ-T1-Ayo Alabi\":{},\"11-Oke IraINJ-T1-Nob Oluwa\":{},\"11-Oke IraINJ-T1-Oke Ira\":{}}},\"T2\":{\"11-Oke IraINJ-T2-Incomer\":{\"11-Oke IraINJ-T2-Abiodun Jagun\":{},\"11-Oke IraINJ-T2-Kayode\":{},\"11-Oke IraINJ-T2-Thomas Salako\":{}}}}}}},\"OJO TS\":{\"T2\":{\"33-OjoTCN-FESTAC II INTERFACE\":{}}},\"OKE ARO TS\":{\"T5 & T6\":{\"33-Oke-AroTCN-AKUTE\":{},\"33-Oke-AroTCN-LAMBE\":{\"AKUTE INJ\":{\"T1\":{\"11-AkuteINJ-T1-Incomer\":{\"11-AkuteINJ-T1-Ishashi\":{},\"11-AkuteINJ-T1-Majente\":{},\"11-AkuteINJ-T1-Oyeyemi\":{}}}},\"LAMBE INJ\":{\"T1\":{\"11-LambeINJ-T1-Incomer\":{\"11-LambeINJ-T1-Jolasco\":{},\"11-LambeINJ-T1-Matogun\":{},\"11-LambeINJ-T1-Olambe\":{}}}}},\"33-Oke-AroTCN-NEW IJU W/WORKS\":{\"IJU INJ\":{\"T1\":{\"11-IjuINJ-T1-Incomer\":{\"11-IjuINJ-T1-Ajuwon\":{},\"11-IjuINJ-T1-Asore\":{},\"11-IjuINJ-T1-Galilee\":{},\"11-IjuINJ-T1-Grailand\":{}}},\"T2\":{\"11-IjuINJ-T2-Incomer\":{\"11-IjuINJ-T2-Agbado 1\":{},\"11-IjuINJ-T2-Ishaga\":{},\"11-IjuINJ-T2-Water works\":{}}}}},\"33-Oke-AroTCN-YIDI\":{\"OPE ILU INJ\":{\"T1\":{\"11-Ope IluINJ-T1-Incomer\":{\"11-Ope IluINJ-T1-Aboro\":{},\"11-Ope IluINJ-T1-Adiyan\":{},\"11-Ope IluINJ-T1-Ijoko\":{}}}},\"YIDI INJ\":{\"T1\":{\"11-YidiINJ-T1-Incomer\":{\"11-YidiINJ-T1-Opeilu\":{},\"11-YidiINJ-T1-Osoba\":{}}}}}}},\"OMINIK TS\":{\"T1\":{\"132-EgbinTCN-MARYLAND-OMNIK\":{}}},\"OTA TS\":{\"T2\":{\"33-OtaTCN-AMJE\":{\"ABULE IROKO INJ\":{\"T1\":{\"11-Abule IrokoINJ-T1-Incomer\":{\"11-Abule IrokoINJ-T1-Abule Iroko\":{},\"11-Abule IrokoINJ-T1-Alakuko\":{},\"11-Abule IrokoINJ-T1-Books\":{}}}},\"YUSUF INJ\":{\"T1\":{\"11-YusufINJ-T1-Incomer\":{\"11-YusufINJ-T1-Yusuf\":{}}},\"T2\":{\"11-YusufINJ-T2-Incomer\":{\"11-YusufINJ-T2-Agbefa\":{},\"11-YusufINJ-T2-Akera\":{}}}}}}},\"OWORO TS\":{\"T1\":{\"33-OworonshokiTCN-OWORO 1\":{\"OWORO INJ\":{\"T1\":{\"11-OworoINJ-T1-Incomer\":{\"11-OworoINJ-T1-Bariga\":{},\"11-OworoINJ-T1-Hospital\":{},\"11-OworoINJ-T1-Ifako\":{}}}}},\"33-OworonshokiTCN-OWORO 2\":{\"OWORO INJ\":{\"T2\":{\"11-OworoINJ-T2-Incomer\":{\"11-OworoINJ-T2-Ladilac\":{},\"11-OworoINJ-T2-Oworo\":{},\"11-OworoINJ-T2-Pedro\":{}}}}},\"33-OworonshokiTCN-OWORO 3\":{\"OWORO INJ\":{\"T3\":{\"11-OworoINJ-T3-Incomer\":{\"11-OworoINJ-T3-Anthony\":{},\"11-OworoINJ-T3-GTB\":{},\"11-OworoINJ-T3-Gbagada\":{}}}}}},\"T2\":{\"33-OworonshokiTCN-IGBOBI\":{\"IGBOBI INJ\":{\"T1\":{\"11-IgbobiINJ-T1-Incomer\":{\"11-IgbobiINJ-T1-Apata\":{},\"11-IgbobiINJ-T1-Military\":{},\"11-IgbobiINJ-T1-Orthopaedic\":{}}}}},\"33-OworonshokiTCN-NEW OWORO\":{\"NEW OWORO INJ\":{\"T1\":{\"11-New OworoINJ-T1-Incomer\":{\"11-New OworoINJ-T1-Finbars\":{},\"11-New OworoINJ-T1-Odunsi\":{}}}}},\"33-OworonshokiTCN-OGUDU 1\":{\"OGUDU INJ\":{\"T1\":{\"11-OguduINJ-T1-Incomer\":{\"11-OguduINJ-T1-CAC\":{},\"11-OguduINJ-T1-Express\":{},\"11-OguduINJ-T1-Ogudu\":{}}},\"T2\":{\"11-OguduINJ-T2-Incomer\":{\"11-OguduINJ-T2-Alapere\":{},\"11-OguduINJ-T2-Oriola\":{}}},\"T3\":{\"11-OguduINJ-T3-Incomer\":{\"11-OguduINJ-T3-Balogun\":{},\"11-OguduINJ-T3-Kola Adeshina\":{},\"11-OguduINJ-T3-Soluyi\":{}}}}}},\"T3\":{\"33-OworonshokiTCN-ALAPERE\":{\"ALAPERE INJ\":{\"T1\":{\"11-AlapereINJ-T1-Incomer\":{\"11-AlapereINJ-T1-Agboyi\":{},\"11-AlapereINJ-T1-Araba\":{},\"11-AlapereINJ-T1-Bakare\":{}}}}}}},\"SUNFLAG\":{\"T1\":{\"132-EgbinTCN-SAGAMU-SUNFLAG\":{}}},\"TOP-STEEL TS\":{\"T1\":{\"132-EgbinTCN-SAGAMU-TOPSTEEL\":{}}}}");

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_cf5f48fe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_cf5f48fe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_cf5f48fe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_cf5f48fe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_energy_flow_diagram_vue_vue_type_style_index_0_id_cf5f48fe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flow-layout[data-v-cf5f48fe]{display:grid;grid-template-columns:minmax(0,2fr) minmax(280px,1fr);grid-gap:16px;align-items:start;gap:16px}.flow-main[data-v-cf5f48fe]{min-width:0}.sld[data-v-cf5f48fe]{padding:24px 20px 28px}.sld[data-v-cf5f48fe],.sld-step[data-v-cf5f48fe]{align-items:center;display:flex;flex-direction:column;position:relative}.sld-step[data-v-cf5f48fe]{max-width:600px;width:100%;z-index:1}.sld-step[data-v-cf5f48fe]:focus-within,.sld-step[data-v-cf5f48fe]:hover{z-index:20}.sld-node[data-v-cf5f48fe]{display:grid;grid-template-columns:44px minmax(0,1fr) auto;position:relative;width:100%;grid-gap:14px;align-items:center;background:var(--surface);border:1.5px solid var(--border);border-radius:14px;box-shadow:var(--shadow-xs);gap:14px;padding:12px 14px}.sld-node.picked[data-v-cf5f48fe]{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 14%,transparent)}.sld-node.open[data-v-cf5f48fe]{border-color:var(--danger)}.sld-level[data-v-cf5f48fe]{align-items:center;display:flex;flex-wrap:wrap;gap:8px}.sld-level>span[data-v-cf5f48fe]:first-child{color:var(--text-3);font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase}.sld-count[data-v-cf5f48fe]{background:var(--surface-3);border-radius:5px;color:var(--text-2);font-size:10.5px;font-weight:700;padding:1px 6px}.sld-energy[data-v-cf5f48fe]{text-align:right}.sld-energy-val[data-v-cf5f48fe]{font-size:17px;font-weight:700;letter-spacing:-.4px;transition:opacity .2s}.sld-energy-val.updating[data-v-cf5f48fe]{opacity:.4}.sld-energy-unit[data-v-cf5f48fe]{color:var(--text-3);font-size:10.5px;font-weight:700}.sld-bus[data-v-cf5f48fe]{display:flex;height:58px;justify-content:center;position:relative;width:100%}.sld-bus .ie-bus[data-v-cf5f48fe]{border-radius:3px;transition:width .4s}.sld-arrow[data-v-cf5f48fe]{border-left:7px solid transparent;border-right:7px solid transparent;border-top:8px solid;bottom:0;height:0;left:50%;position:absolute;transform:translateX(-50%);width:0}.sld-loss[data-v-cf5f48fe]{align-items:center;border:1.5px solid;border-radius:999px;box-shadow:var(--shadow-xs);cursor:pointer;display:flex;font-size:11.5px;font-weight:800;gap:7px;left:calc(50% + 24px);padding:5px 12px;position:absolute;top:50%;transform:translateY(-50%);white-space:nowrap}.sld-loss--danger[data-v-cf5f48fe]{background:var(--danger-soft);border-color:color-mix(in srgb,var(--danger) 40%,transparent);color:var(--danger)}.sld-loss--warning[data-v-cf5f48fe]{background:var(--warning-soft);border-color:color-mix(in srgb,var(--warning) 40%,transparent);color:var(--warning)}.sld-pass[data-v-cf5f48fe]{color:var(--text-3);font-size:11px;font-weight:600;left:calc(50% + 24px);position:absolute;top:50%;transform:translateY(-50%);white-space:nowrap}.sld-cust[data-v-cf5f48fe]{background:linear-gradient(145deg,#1f1c17,#12100d);border-radius:14px;color:#f5f3ef;display:grid;grid-template-columns:44px minmax(0,1fr) auto;max-width:600px;overflow:hidden;padding:16px 18px;width:100%;grid-gap:14px;align-items:center;box-shadow:var(--shadow-md);gap:14px}.sld-cust[data-v-cf5f48fe],.sld-cust[data-v-cf5f48fe]>:not(.ie-layer){position:relative}.sld-cust-ico[data-v-cf5f48fe]{align-items:center;background:var(--primary);border-radius:12px;color:var(--on-primary);display:flex;height:44px;justify-content:center;width:44px}.sld-cust-label[data-v-cf5f48fe]{color:hsla(0,0%,100%,.55);font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase}.sld-cust-sub[data-v-cf5f48fe]{color:hsla(0,0%,100%,.75);font-size:12.5px;font-weight:600;margin-top:3px}.sld-cust-val[data-v-cf5f48fe]{color:var(--primary);font-size:24px;font-weight:700;letter-spacing:-.8px}.sld-cust-unit[data-v-cf5f48fe]{color:hsla(0,0%,100%,.55);font-size:10.5px;font-weight:700}.sld-note[data-v-cf5f48fe]{align-items:center;color:var(--text-3);display:flex;font-size:11.5px;font-weight:600;gap:8px;margin-top:14px;max-width:600px;position:relative;width:100%}.flow-side[data-v-cf5f48fe]{display:flex;flex-direction:column;gap:12px;min-width:0;position:sticky;top:78px}.side-card[data-v-cf5f48fe]{border-radius:16px;padding:16px 18px}.side-label[data-v-cf5f48fe]{color:var(--text-2);font-size:11.5px;font-weight:700}.side-val[data-v-cf5f48fe]{font-size:26px;font-weight:700;letter-spacing:-1px;margin-top:6px}.side-unit[data-v-cf5f48fe]{color:var(--text-3);font-size:11.5px;font-weight:600}.stage-kicker[data-v-cf5f48fe]{color:var(--danger);font-size:10.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase}.stage-title[data-v-cf5f48fe]{font-size:14px;font-weight:800;letter-spacing:-.2px;margin-top:3px}.stage-share[data-v-cf5f48fe]{color:var(--text-3);font-size:11px;font-weight:600;margin:4px 0 8px}.stage-row[data-v-cf5f48fe]{border-bottom:1.5px dotted var(--border-strong);display:flex;font-size:12px;font-weight:700;gap:10px;justify-content:space-between;padding:9px 0}.stage-hint[data-v-cf5f48fe],.stage-row span[data-v-cf5f48fe]{color:var(--text-2)}.stage-hint[data-v-cf5f48fe]{align-items:flex-start;background:var(--surface-2);border:1px dashed var(--border-strong);border-radius:14px;display:flex;font-size:12px;font-weight:600;gap:10px;line-height:1.5;padding:14px 16px}@media (max-width:1000px){.flow-layout[data-v-cf5f48fe]{grid-template-columns:1fr}.flow-side[data-v-cf5f48fe]{position:static}}@media (max-width:640px){.sld[data-v-cf5f48fe]{padding:18px 12px}.sld-node[data-v-cf5f48fe]{grid-template-columns:1fr}.sld-node .ie-ico[data-v-cf5f48fe]{display:none}.sld-energy[data-v-cf5f48fe]{text-align:left}.sld-loss[data-v-cf5f48fe],.sld-pass[data-v-cf5f48fe]{font-size:10.5px;left:auto;right:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/energy_flow_diagram.vue?vue&type=template&id=cf5f48fe&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('PageHeader', {
    attrs: {
      "page": "flow",
      "loading": _vm.loading
    }
  }, [_c('FilterSelect', {
    attrs: {
      "label": "DT type",
      "icon": "dt",
      "options": ['All', 'Public', 'Private']
    },
    on: {
      "change": _vm.fetchFlow
    },
    model: {
      value: _vm.dtType,
      callback: function ($$v) {
        _vm.dtType = $$v;
      },
      expression: "dtType"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ie-page\" data-v-cf5f48fe>", "</div>", [_vm.error ? _vm._ssrNode("<div class=\"ie-error\" data-v-cf5f48fe>", "</div>", [_c('Icon', {
    attrs: {
      "name": "alert",
      "size": 16
    }
  }), _vm._ssrNode(_vm._ssrEscape("Couldn't load live data: " + _vm._s(_vm.error) + "\n            ") + "<button class=\"ie-btn\" data-v-cf5f48fe>Retry</button>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.loading && !_vm.flowData ? _c('SkeletonPage') : _c('div', {
    staticClass: "flow-layout ie-fadein"
  }, [_c('div', {
    staticClass: "ie-card ie-card--flush flow-main"
  }, [_c('div', {
    staticClass: "ie-card-head"
  }, [_c('div', [_c('div', {
    staticClass: "ie-card-title",
    staticStyle: {
      "font-size": "15.5px"
    }
  }, [_vm._v("Single-line diagram")]), _vm._v(" "), _c('div', {
    staticClass: "ie-card-sub"
  }, [_vm._v("Pick an asset at any level to follow its energy down the network")])]), _vm._v(" "), _vm.hasSelection ? _c('button', {
    staticClass: "ie-btn",
    on: {
      "click": _vm.resetFlow
    }
  }, [_c('Icon', {
    attrs: {
      "name": "x",
      "size": 15
    }
  }), _vm._v("Clear selections")], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "sld"
  }, [_c('div', {
    staticClass: "pt-circuit ie-layer",
    staticStyle: {
      "color": "var(--text-3)",
      "opacity": ".05"
    }
  }), _vm._v(" "), _vm._l(_vm.nodes, function (n, i) {
    return _c('div', {
      key: n.key,
      staticClass: "sld-step"
    }, [_c('div', {
      staticClass: "sld-node",
      class: {
        picked: !String(n.selected).startsWith('All'),
        open: _vm.openStage === i
      }
    }, [_c('span', {
      staticClass: "ie-ico ie-ico--lg",
      class: 'tone-' + n.tone
    }, [_c('Icon', {
      attrs: {
        "name": n.icon,
        "size": 20
      }
    })], 1), _vm._v(" "), _c('div', {
      staticStyle: {
        "min-width": "0"
      }
    }, [_c('div', {
      staticClass: "sld-level"
    }, [_c('span', [_vm._v(_vm._s(n.label))]), _vm._v(" "), _c('span', {
      staticClass: "sld-count mono"
    }, [_vm._v(_vm._s(n.count))])]), _vm._v(" "), _c('div', {
      staticStyle: {
        "margin-top": "5px"
      }
    }, [_c('FilterSelect', {
      attrs: {
        "compact": "",
        "block": "",
        "value": n.selected,
        "options": n.options,
        "searchable": true,
        "pop-width": "280px"
      },
      on: {
        "change": v => _vm.pick(i, v)
      }
    })], 1)]), _vm._v(" "), _c('div', {
      staticClass: "sld-energy"
    }, [_c('div', {
      staticClass: "mono sld-energy-val",
      class: {
        updating: n.key === 'dts' && _vm.dtLoading
      }
    }, [_vm._v(_vm._s(_vm.fmt(n.energy)))]), _vm._v(" "), _c('div', {
      staticClass: "sld-energy-unit"
    }, [_vm._v("MWh in")])])]), _vm._v(" "), _c('div', {
      staticClass: "sld-bus"
    }, [_c('div', {
      staticClass: "ie-bus",
      style: {
        width: n.busW,
        backgroundColor: n.busColor
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "sld-arrow",
      style: {
        borderTopColor: n.busColor
      }
    }), _vm._v(" "), n.lossMwh > 0 ? _c('button', {
      staticClass: "sld-loss",
      class: 'sld-loss--' + n.lossTone,
      attrs: {
        "title": "See this step's loss breakdown"
      },
      on: {
        "click": function ($event) {
          _vm.openStage = _vm.openStage === i ? null : i;
        }
      }
    }, [_c('Icon', {
      attrs: {
        "name": "loss",
        "size": 14
      }
    }), _vm._v("−" + _vm._s(_vm.fmt(n.lossMwh)) + " MWh · " + _vm._s(n.lossPct.toFixed(1)) + "%\n                            ")], 1) : _c('span', {
      staticClass: "sld-pass"
    }, [_vm._v("pass-through · not metered")])])]);
  }), _vm._v(" "), _c('div', {
    staticClass: "sld-cust"
  }, [_c('div', {
    staticClass: "pt-circuit ie-layer",
    staticStyle: {
      "color": "var(--primary)",
      "opacity": ".1"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "sld-cust-ico"
  }, [_c('Icon', {
    attrs: {
      "name": "users",
      "size": 20
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "min-width": "0"
    }
  }, [_c('div', {
    staticClass: "sld-cust-label"
  }, [_vm._v("Customers")]), _vm._v(" "), _c('div', {
    staticClass: "sld-cust-sub ie-ellip"
  }, [_vm._v(_vm._s(_vm.custSub))])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_c('div', {
    staticClass: "mono sld-cust-val"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.cust.total_customers)))]), _vm._v(" "), _c('div', {
    staticClass: "sld-cust-unit"
  }, [_vm._v("customers")])])]), _vm._v(" "), _c('div', {
    staticClass: "sld-note"
  }, [_c('Icon', {
    attrs: {
      "name": "info",
      "size": 14
    }
  }), _vm._v("Only TS, transformer, 33 kV feeder and DT picks refine the figures — the API has no filter for the levels in between.")], 1)], 2)]), _vm._v(" "), _c('div', {
    staticClass: "flow-side"
  }, [_c('div', {
    staticClass: "ie-card side-card"
  }, [_c('div', {
    staticClass: "side-label"
  }, [_vm._v("Injected at transmission")]), _vm._v(" "), _c('div', {
    staticClass: "mono side-val"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.injected)))]), _vm._v(" "), _c('div', {
    staticClass: "side-unit"
  }, [_vm._v("MWh")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-card ie-card--danger side-card"
  }, [_c('div', {
    staticClass: "ie-diag ie-layer",
    staticStyle: {
      "color": "var(--danger)",
      "opacity": ".06"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "side-label"
  }, [_vm._v("Lost across the chain")]), _vm._v(" "), _c('div', {
    staticClass: "mono side-val",
    staticStyle: {
      "color": "var(--danger)"
    }
  }, [_vm._v(_vm._s(_vm.fmt(_vm.chainLoss)))]), _vm._v(" "), _c('div', {
    staticClass: "side-unit"
  }, [_vm._v("MWh · " + _vm._s(_vm.pctText(_vm.chainLossPct)) + " of injected")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-hero side-card",
    staticStyle: {
      "padding": "16px 18px"
    }
  }, [_c('div', {
    staticStyle: {
      "font-size": "11.5px",
      "font-weight": "800"
    }
  }, [_vm._v("Reached customers")]), _vm._v(" "), _c('div', {
    staticClass: "mono side-val"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.cust.total_energy_mwh)))]), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "11.5px",
      "font-weight": "700",
      "opacity": ".8"
    }
  }, [_vm._v("MWh · " + _vm._s(_vm.pctText(_vm.efficiency)) + " end-to-end")])]), _vm._v(" "), _vm.stage ? _c('div', {
    staticClass: "ie-card side-card ie-fadeup"
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "flex-start",
      "justify-content": "space-between",
      "gap": "10px"
    }
  }, [_c('div', [_c('div', {
    staticClass: "stage-kicker"
  }, [_vm._v(_vm._s(_vm.stage.from) + " → " + _vm._s(_vm.stage.to))]), _vm._v(" "), _c('div', {
    staticClass: "stage-title"
  }, [_vm._v("Step loss")])]), _vm._v(" "), _c('button', {
    staticClass: "ie-icon-btn",
    staticStyle: {
      "width": "28px",
      "height": "28px"
    },
    attrs: {
      "aria-label": "Close"
    },
    on: {
      "click": function ($event) {
        _vm.openStage = null;
      }
    }
  }, [_c('Icon', {
    attrs: {
      "name": "x",
      "size": 15
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "stage-share"
  }, [_vm._v(_vm._s(_vm.pctText(_vm.stage.share)) + " of everything lost between transmission and customer")]), _vm._v(" "), _c('div', {
    staticClass: "stage-row"
  }, [_c('span', [_vm._v("Energy in")]), _c('b', {
    staticClass: "mono"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.stage.energy)) + " MWh")])]), _vm._v(" "), _c('div', {
    staticClass: "stage-row"
  }, [_c('span', [_vm._v("Passed on")]), _c('b', {
    staticClass: "mono"
  }, [_vm._v(_vm._s(_vm.fmt(_vm.stage.out)) + " MWh")])]), _vm._v(" "), _c('div', {
    staticClass: "stage-row"
  }, [_c('span', [_vm._v("Lost")]), _c('b', {
    staticClass: "mono",
    staticStyle: {
      "color": "var(--danger)"
    }
  }, [_vm._v(_vm._s(_vm.fmt(_vm.stage.lossMwh)) + " MWh")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-bar-row",
    staticStyle: {
      "margin-top": "12px"
    }
  }, [_c('span', {
    staticStyle: {
      "color": "var(--text-3)"
    }
  }, [_vm._v("Loss rate")]), _c('span', {
    staticStyle: {
      "color": "var(--danger)"
    }
  }, [_vm._v(_vm._s(_vm.stage.lossPct.toFixed(2)) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "ie-track"
  }, [_c('div', {
    staticClass: "ie-fill",
    style: {
      width: Math.min(100, _vm.stage.lossPct) + '%',
      background: 'var(--danger)'
    }
  })])]) : _c('div', {
    staticClass: "stage-hint"
  }, [_c('Icon', {
    staticStyle: {
      "color": "var(--danger)",
      "margin-top": "1px"
    },
    attrs: {
      "name": "loss",
      "size": 14
    }
  }), _vm._v("\n                    Click a red loss marker on the diagram to see that step's breakdown.\n                ")], 1)])])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/energy_flow_diagram.vue?vue&type=template&id=cf5f48fe&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(65);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(66);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(67);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(68);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(69);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(70);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(71);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(72);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(73);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(74);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(75);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(76);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(77);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(49);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(50);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(51);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(52);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(53);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(54);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(55);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(56);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(57);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(58);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(59);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(60);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(61);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(62);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(63);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(64);

// EXTERNAL MODULE: ./components/ui/Icon.vue + 2 modules
var Icon = __webpack_require__(13);

// EXTERNAL MODULE: ./components/ui/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(87);

// EXTERNAL MODULE: ./components/ui/FilterSelect.vue + 4 modules
var FilterSelect = __webpack_require__(92);

// EXTERNAL MODULE: ./components/ui/SkeletonPage.vue + 4 modules
var SkeletonPage = __webpack_require__(95);

// EXTERNAL MODULE: ./assets/data/ts_relationship.json
var ts_relationship = __webpack_require__(155);

// EXTERNAL MODULE: ./assets/js/energyFlowSim.js
var energyFlowSim = __webpack_require__(125);

// EXTERNAL MODULE: ./js_modules/controlCenterApi.js
var controlCenterApi = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/energy_flow_diagram.vue?vue&type=script&lang=js




































// The TS -> Customer chain as a vertical single-line diagram. Each level's dropdown is
// narrowed by the picks above it using the static TS relationship tree
// (assets/data/ts_relationship.json). Numbers come from GET /energy-flow (see
// static/api_live_responses3.md #2) — only ts / transformer / feeder_33kva / dt / dt_type
// are real API filters, so picks at ISS..11kV Outgoing only narrow the dropdowns below.

const LEVELS = [{
  label: 'Transmission stations',
  icon: 'tower',
  tone: 'soe',
  unit: 'stations'
}, {
  label: 'Transformer capacity',
  icon: 'cap',
  tone: 'primary',
  unit: 'transformers'
}, {
  label: '33 kV feeders',
  icon: 'feeder',
  tone: 'ca',
  unit: 'feeders'
}, {
  label: 'Injection substations',
  icon: 'station',
  tone: 'accent',
  unit: 'substations'
}, {
  label: 'Secondary transformers',
  icon: 'cap',
  tone: 'primary',
  unit: 'transformers'
}, {
  label: '11 kV incomers',
  icon: 'plug',
  tone: 'soe',
  unit: 'incomers'
}, {
  label: '11 kV outgoing feeders',
  icon: 'feeder',
  tone: 'ca',
  unit: 'feeders'
}];
const SHORT = ['TS', 'Transformer', '33 kV', 'ISS', 'Transformer 2', 'Incomer', '11 kV', 'DT', 'Customer'];
/* harmony default export */ var energy_flow_diagramvue_type_script_lang_js = ({
  layout: 'dashboard',
  components: {
    Icon: Icon["default"],
    PageHeader: PageHeader["default"],
    FilterSelect: FilterSelect["default"],
    SkeletonPage: SkeletonPage["default"]
  },
  data() {
    return {
      loading: true,
      error: null,
      flowData: null,
      dtFlowData: null,
      dtLoading: false,
      dtType: 'All',
      // One pick per tree level (TS .. 11kV Outgoing), plus the DT pick.
      picks: LEVELS.map(() => 'All'),
      dtPick: 'All DTs',
      openStage: null,
      // Real DT names, built once on demand from dt-availability/table (no endpoint lists
      // DT names directly; that table's dt_name/feeder_name pairs are the closest source).
      dtNameIndex: null,
      dtNamesFetchStarted: false
    };
  },
  computed: {
    data() {
      return this.dtFlowData || this.flowData || {};
    },
    // Tree nodes reachable at each depth given the picks above it.
    levelNodes() {
      const out = [];
      let frontier = [ts_relationship];
      for (let i = 0; i < LEVELS.length; i++) {
        out.push(frontier);
        const pick = this.picks[i];
        const next = [];
        frontier.forEach(n => {
          Object.keys(n).forEach(k => {
            if (pick === 'All' || pick === k) next.push(n[k]);
          });
        });
        frontier = next;
      }
      return out;
    },
    nodes() {
      const d = this.data;
      const injected = this.injected || 0;
      const list = LEVELS.map((lv, i) => {
        const sec = d[energyFlowSim["e" /* LEVEL_RESPONSE_KEYS */][i]] || {};
        const opts = new Set();
        this.levelNodes[i].forEach(n => Object.keys(n).forEach(k => opts.add(k)));
        return this.decorate({
          key: energyFlowSim["e" /* LEVEL_RESPONSE_KEYS */][i],
          ...lv,
          count: Object(controlCenterApi["e" /* formatNumber */])(sec[energyFlowSim["c" /* LEVEL_COUNT_KEYS */][i]]) + ' ' + lv.unit,
          options: ['All', ...Array.from(opts).sort()],
          selected: this.picks[i],
          sec
        }, injected);
      });
      const dts = d.dts || {};
      const pub = dts.total_public_dts || 0;
      const priv = dts.total_private_dts || 0;
      list.push(this.decorate({
        key: 'dts',
        label: 'Distribution transformers',
        icon: 'dt',
        tone: 'info',
        count: `${Object(controlCenterApi["e" /* formatNumber */])(pub + priv)} · ${Object(controlCenterApi["e" /* formatNumber */])(pub)} public / ${Object(controlCenterApi["e" /* formatNumber */])(priv)} private`,
        options: ['All DTs', ...this.dtOptions],
        selected: this.dtPick,
        sec: dts
      }, injected));
      return list;
    },
    dtOptions() {
      if (!this.dtNameIndex) return [];
      const feeder = this.picks[LEVELS.length - 1];
      if (feeder !== 'All' && this.dtNameIndex.byFeeder.has(feeder)) {
        return Array.from(this.dtNameIndex.byFeeder.get(feeder)).sort();
      }
      return this.dtNameIndex.all;
    },
    cust() {
      return this.data.customer || {};
    },
    custSub() {
      if (this.dtPick !== 'All DTs') return 'Served by ' + this.dtPick;
      const last = [...this.picks].reverse().find(p => p !== 'All');
      return last ? 'Downstream of ' + last : 'Across the whole network';
    },
    injected() {
      const ts = this.data.ts || {};
      return Number(ts.total_energy_mwh) || 0;
    },
    chainLoss() {
      const out = Number(this.cust.total_energy_mwh);
      return this.injected && Number.isFinite(out) ? this.injected - out : null;
    },
    chainLossPct() {
      return this.injected && this.chainLoss != null ? this.chainLoss / this.injected * 100 : null;
    },
    efficiency() {
      const out = Number(this.cust.total_energy_mwh);
      return this.injected && Number.isFinite(out) ? out / this.injected * 100 : null;
    },
    stage() {
      if (this.openStage === null) return null;
      const n = this.nodes[this.openStage];
      if (!n || !(n.lossMwh > 0)) return null;
      return {
        ...n,
        from: SHORT[this.openStage],
        to: SHORT[this.openStage + 1],
        share: this.chainLoss ? n.lossMwh / this.chainLoss * 100 : null
      };
    },
    hasSelection() {
      return this.picks.some(p => p !== 'All') || this.dtPick !== 'All DTs';
    }
  },
  async mounted() {
    await this.fetchFlow();
    this.ensureDtNames();
  },
  methods: {
    fmt(v) {
      if (v === null || v === undefined || !Number.isFinite(Number(v))) return '—';
      return Number(v).toLocaleString('en-US', {
        maximumFractionDigits: 2
      });
    },
    pctText(v) {
      return v == null || !Number.isFinite(v) ? '—' : v.toFixed(1) + '%';
    },
    decorate(n, injected) {
      const sec = n.sec || {};
      const energy = Number(sec.total_energy_mwh);
      const out = Number(sec.transmission_mwh);
      const lossMwh = Number(sec.loss_mwh) || 0;
      const lossPct = Number(sec.loss_pct) || 0;
      const ratio = injected && Number.isFinite(out) ? Math.max(0, Math.min(1, out / injected)) : 1;
      return {
        ...n,
        energy: Number.isFinite(energy) ? energy : null,
        out: Number.isFinite(out) ? out : null,
        lossMwh,
        lossPct,
        lossTone: lossPct >= 15 ? 'danger' : 'warning',
        busW: (6 + ratio * 28).toFixed(1) + 'px',
        busColor: lossMwh > 0 ? 'color-mix(in srgb, var(--primary) 70%, var(--danger))' : 'var(--primary)'
      };
    },
    pick(level, value) {
      this.openStage = null;
      if (level === LEVELS.length) {
        this.dtPick = value;
        this.fetchDtFlow();
        return;
      }
      const picks = this.picks.slice();
      picks[level] = value;
      for (let i = level + 1; i < picks.length; i++) picks[i] = 'All';
      this.picks = picks;
      this.dtPick = 'All DTs';
      this.dtFlowData = null;
      if (level < energyFlowSim["a" /* FILTERABLE_LEVEL_COUNT */]) this.fetchFlow();
    },
    async fetchFlow() {
      this.loading = true;
      this.error = null;
      try {
        this.flowData = await Object(controlCenterApi["k" /* getEnergyFlow */])({
          ts: this.picks[0],
          transformer: this.picks[1],
          feeder_33kva: this.picks[2],
          dt: 'All',
          dt_type: this.dtType
        });
        if (this.dtPick !== 'All DTs') await this.fetchDtFlow();
      } catch (err) {
        this.error = err.message || 'Failed to load energy flow data';
      } finally {
        this.loading = false;
      }
    },
    async fetchDtFlow() {
      if (this.dtPick === 'All DTs') {
        this.dtFlowData = null;
        return;
      }
      this.dtLoading = true;
      try {
        this.dtFlowData = await Object(controlCenterApi["k" /* getEnergyFlow */])({
          ts: this.picks[0],
          transformer: this.picks[1],
          feeder_33kva: this.picks[2],
          dt: this.dtPick,
          dt_type: this.dtType
        });
      } catch (err) {
        // Non-critical — falls back to the dt=All aggregate.
        console.error('[energy_flow_diagram] failed to load DT-specific energy flow', err);
        this.dtFlowData = null;
      } finally {
        this.dtLoading = false;
      }
    },
    resetFlow() {
      this.picks = LEVELS.map(() => 'All');
      this.dtPick = 'All DTs';
      this.dtFlowData = null;
      this.openStage = null;
      this.fetchFlow();
    },
    // Fetches every page of dt-availability/table once (it has no feeder filter) and
    // indexes dt_name by feeder_name, so the DT dropdown can list real names.
    async ensureDtNames() {
      if (this.dtNamesFetchStarted) return;
      this.dtNamesFetchStarted = true;
      const pageSize = 200;
      const byFeeder = new Map();
      const all = new Set();
      const addRows = rows => {
        (rows || []).forEach(r => {
          if (!r.dt_name) return;
          all.add(r.dt_name);
          if (r.feeder_name) {
            if (!byFeeder.has(r.feeder_name)) byFeeder.set(r.feeder_name, new Set());
            byFeeder.get(r.feeder_name).add(r.dt_name);
          }
        });
      };
      try {
        const first = await Object(controlCenterApi["i" /* getDtAvailabilityTable */])({
          dt_name: 'All',
          page: 1,
          page_size: pageSize
        });
        addRows(first.data);
        const totalPages = Math.min(first.total_pages || 1, 50);
        const rest = await Promise.all(Array.from({
          length: Math.max(0, totalPages - 1)
        }, (_, i) => Object(controlCenterApi["i" /* getDtAvailabilityTable */])({
          dt_name: 'All',
          page: i + 2,
          page_size: pageSize
        })));
        rest.forEach(r => addRows(r.data));
        this.dtNameIndex = {
          byFeeder,
          all: Array.from(all).sort()
        };
      } catch (err) {
        // Non-critical — the DT dropdown just offers "All DTs" if this fails.
        console.error('[energy_flow_diagram] failed to build DT name index', err);
        this.dtNamesFetchStarted = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/energy_flow_diagram.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_energy_flow_diagramvue_type_script_lang_js = (energy_flow_diagramvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/energy_flow_diagram.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(156)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_energy_flow_diagramvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cf5f48fe",
  "1fc1aef5"
  
)

/* harmony default export */ var energy_flow_diagram = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("bc765b12", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("704eab78", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4d7f107a", content, true, context)
};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3404a146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3404a146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3404a146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3404a146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3404a146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ph[data-v-3404a146]{background:var(--surface);border-bottom:1px solid var(--border);position:relative;z-index:20}.ph-prog[data-v-3404a146]{background:color-mix(in srgb,var(--primary) 18%,transparent);height:2px;left:0;overflow:hidden;position:absolute;right:0;top:-1px;z-index:2}.ph-prog .ie-prog[data-v-3404a146]{background:var(--primary);border-radius:2px;height:100%;width:38%}.ph-pattern[data-v-3404a146]{bottom:0;left:0;opacity:.5;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0}.ph-pattern>div[data-v-3404a146]{height:100%;opacity:.09;width:100%}.ph-photo[data-v-3404a146]{bottom:0;left:0;overflow:hidden;pointer-events:none}.ph-photo[data-v-3404a146],.ph-photo img[data-v-3404a146]{position:absolute;right:0;top:0}.ph-photo img[data-v-3404a146]{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center 58%;object-position:center 58%;width:64%}.ph-photo-fade[data-v-3404a146]{background:linear-gradient(90deg,var(--surface) 36%,color-mix(in srgb,var(--surface) 62%,transparent) 58%,color-mix(in srgb,var(--surface) 8%,transparent) 100%);bottom:0;left:0;position:absolute;right:0;top:0}.ph-inner[data-v-3404a146]{align-items:flex-start;display:flex;flex-direction:column;gap:16px;margin:0 auto;max-width:1460px;padding:22px 28px;position:relative}.ph-kicker[data-v-3404a146]{font-size:10.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase}.ph-title[data-v-3404a146]{font-size:26px;font-weight:800;letter-spacing:-.9px;line-height:1.2;margin:5px 0 0}.ph-sub[data-v-3404a146]{color:var(--text-2);font-size:13px;margin-top:3px}.ph-filters[data-v-3404a146]{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;gap:9px}@media (max-width:720px){.ph-inner[data-v-3404a146]{padding:18px 16px}.ph-photo img[data-v-3404a146]{opacity:.35;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* unused harmony export openDatePicker */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return formatNumber; });
/* unused harmony export lastNMonths */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return monthLabel; });
/* unused harmony export lastNDays */
/* unused harmony export dayLabel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return todayStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return currentMonthStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return aggregateDailyTrend; });
/* unused harmony export formatPct */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BUSINESS_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FEEDER_BANDS; });
/* unused harmony export bandColor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getEndToEndOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getEnergyFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getControlCenterSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getAvailabilitySummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getDtAvailabilityDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getDtAvailabilityTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getMytoSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getIdbDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getIdbFeederDtLoss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getIdbCustomerDtLoss; });
/* unused harmony export buildTrendCallout */
// Client for the streaming-dashboard-api Control Center backend.
// See static/api_live_responses3.md for endpoint/field documentation and live response samples.
// Endpoints are added here incrementally as each screen gets wired up.

// Native calendar/month inputs draw their own picker-open icon, which we hide (see
// ::-webkit-calendar-picker-indicator rules) in favor of our own Material icon sitting next to
// them. But that icon is a separate DOM element from the (now invisible) native one, so
// clicking it does nothing on its own — this opens the picker programmatically instead. Bind
// it with @click on the wrapping pill/box (its currentTarget), not the icon itself, so a click
// anywhere in the filter box works, not just a pixel-precise hit on the icon.
function openDatePicker(e) {
  const input = e.currentTarget.querySelector('input[type="date"], input[type="month"]');
  if (!input) return;
  try {
    if (typeof input.showPicker === 'function') {
      input.showPicker();
    } else {
      input.focus();
    }
  } catch (err) {
    // showPicker() can throw (e.g. not called from a direct user gesture in some browsers) —
    // focusing the input is a harmless fallback that still lets the user type/tab into it.
    input.focus();
  }
}
const BASE_URL = "http://10.50.32.108:8090/api/v1";
function buildQuery(params = {}) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      search.append(key, value);
    }
  });
  const qs = search.toString();
  return qs ? `?${qs}` : '';
}

// The doc's per-endpoint timings are explicitly "warm second-call" numbers (i.e. cache
// hits). A first-time query against an uncached filter combination (e.g. a specific
// business_unit) can take a good deal longer, so give those room before giving up.
const REQUEST_TIMEOUT_MS = 40000;
async function get(path, params) {
  const url = `${BASE_URL}${path}${buildQuery(params)}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  console.log(`[controlCenterApi] GET ${url}`);
  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    if (!response.ok) {
      throw new Error(`Control Center API error: ${response.status} ${response.statusText} (${path})`);
    }
    const data = await response.json();
    console.log(`[controlCenterApi] response for ${path}`, data);
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      const timeoutErr = new Error(`Request to ${path} timed out after ${REQUEST_TIMEOUT_MS / 1000}s — is ${BASE_URL} reachable? (VPN connected?)`);
      console.error(`[controlCenterApi] ${timeoutErr.message}`);
      throw timeoutErr;
    }
    console.error(`[controlCenterApi] request failed for ${path}`, err);
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}

// Reads the first defined value found at any of the given dot-paths.
// The API doc doesn't always show a full example JSON shape for every
// section, so callers probe a few plausible field names and fall back
// gracefully instead of crashing or silently showing a fabricated number.
function pick(obj, paths, fallback = undefined) {
  for (const path of paths) {
    const value = path.split('.').reduce((acc, key) => acc == null ? undefined : acc[key], obj);
    if (value !== undefined && value !== null) return value;
  }
  return fallback;
}
function formatNumber(value) {
  // Number(null) is 0, not NaN — without this check a genuinely-absent value (e.g.
  // control-center/summary's always-null customercomplaints fields) would render as "0"
  // instead of the "—" that actually reflects "no data".
  if (value === null || value === undefined) return '—';
  const n = Number(value);
  return Number.isFinite(n) ? n.toLocaleString() : '—';
}

// Builds N ascending 'YYYY-MM-01' month strings ending at baseMonth (or today).
function lastNMonths(baseMonthStr, n) {
  const base = baseMonthStr ? new Date(baseMonthStr) : new Date();
  const months = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(base.getFullYear(), base.getMonth() - i, 1);
    months.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-01`);
  }
  return months;
}
function monthLabel(monthStr) {
  const d = new Date(monthStr);
  return Number.isNaN(d.getTime()) ? monthStr : d.toLocaleString('en-US', {
    month: 'short'
  });
}

// Builds N ascending 'YYYY-MM-DD' date strings ending at baseDate (or today).
function lastNDays(baseDateStr, n) {
  const base = baseDateStr ? new Date(baseDateStr) : new Date();
  const days = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() - i);
    days.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`);
  }
  return days;
}
function dayLabel(dateStr) {
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? dateStr : d.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

// 'YYYY-MM-DD' for today — used to cap date pickers so they can't select a future day.
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// 'YYYY-MM' for the current month — used to cap <input type="month"> pickers.
function currentMonthStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

// Aggregates a daily {date, ...values} trend into Day/Week/Month buckets client-side — for
// screens whose API has no period/granularity param (or one we can't confirm actually changes
// anything server-side) but does return full daily data for the current month. valueKeys lists
// which numeric fields to sum per bucket (e.g. ['vended', 'collected']). Month collapses the
// whole series to one point since these trends never span more than a single month.
function aggregateDailyTrend(trend, mode, valueKeys) {
  if (!trend || !trend.length) return [];
  const sumKeys = rows => {
    const out = {};
    valueKeys.forEach(k => {
      out[k] = rows.reduce((sum, r) => sum + (r[k] || 0), 0);
    });
    return out;
  };
  if (mode === 'Day') {
    return trend.map(t => ({
      label: dayLabel(t.date),
      ...sumKeys([t])
    }));
  }
  if (mode === 'Week') {
    const buckets = [];
    for (let i = 0; i < trend.length; i += 7) {
      const slice = trend.slice(i, i + 7);
      const label = slice.length > 1 ? `${dayLabel(slice[0].date)}–${dayLabel(slice[slice.length - 1].date)}` : dayLabel(slice[0].date);
      buckets.push({
        label,
        ...sumKeys(slice)
      });
    }
    return buckets;
  }
  return [{
    label: monthLabel(trend[0].date),
    ...sumKeys(trend)
  }];
}

// Formats a percentage value for display; null/undefined render as "—" rather than "null%".
function formatPct(value) {
  if (value === null || value === undefined) return '—';
  return `${value}%`;
}

// The business units that appear across the API's business_unit-keyed responses
// (availability/summary is the canonical source — see its feeders_by_business_unit /
// dts_by_business_unit sample). Shared across screens since it's the same dimension.
const BUSINESS_UNITS = ['All', 'Oshodi', 'Shomolu', 'Akowonjo', 'Ikeja', 'Ikorodu', 'Abule Egba', 'Md Kam'];

// Feeder/energy bands used across the API's band-keyed responses (energy_allocation_by_band,
// feeders_by_band, myto/summary's band_compliance, etc).
const FEEDER_BANDS = ['All', 'A', 'B', 'C', 'D', 'E'];
const BAND_ORDER = ['A', 'B', 'C', 'D', 'E'];
const BAND_COLORS = ['#128A5B', '#E58E0A', '#48598B', '#B7791F', '#DB362C'];

// Consistent color per band across every chart that breaks data down by band, keyed by
// band letter rather than array position so it stays correct even if an endpoint ever
// returns bands in a different order (or a subset).
function bandColor(band) {
  const i = BAND_ORDER.indexOf(band);
  return i >= 0 ? BAND_COLORS[i] : '#999';
}

// 1. End-to-End Overview — top KPI cards + Grid Network map on the
// End-to-End Energy Dashboard screen.
function getEndToEndOverview({
  date,
  business_unit,
  marker_limit
} = {}) {
  return get('/end-to-end/overview', {
    date,
    business_unit,
    marker_limit
  });
}

// 2. Energy Flow — the TS -> Customer cascade on the Energy Flow Diagram screen. Only these
// five params are real filters; there's no way to filter specifically by ISS / Transformer 2 /
// 11kV Incomer / 11kV Outgoing Feeder even though the UI lets a user browse the relationship
// tree that deep — see energy_flow_diagram.vue for how that's handled.
function getEnergyFlow({
  ts,
  transformer,
  feeder_33kva,
  dt,
  dt_type
} = {}) {
  return get('/energy-flow', {
    ts,
    transformer,
    feeder_33kva,
    dt,
    dt_type
  });
}

// 3. Control Center Summary — Control Center Dashboard screen. No params, always the
// latest snapshot.
function getControlCenterSummary() {
  return get('/control-center/summary');
}

// 4. Availability Summary — Availability Summary screen.
function getAvailabilitySummary({
  date,
  feeder_band,
  business_unit
} = {}) {
  return get('/availability/summary', {
    date,
    feeder_band,
    business_unit
  });
}

// 5. DT Availability — Dashboard screen (single-DT target/actual metrics + trend).
// Every doc example passes a specific dt_name and there's no documented "All" behavior for
// this endpoint (unlike #6 below), so treat it as effectively required.
function getDtAvailabilityDashboard({
  dt_name,
  period
} = {}) {
  return get('/dt-availability/dashboard', {
    dt_name,
    period
  });
}

// 6. DT Availability — Table (paginated). dt_name defaults to 'All'.
function getDtAvailabilityTable({
  dt_name,
  date,
  page,
  page_size
} = {}) {
  return get('/dt-availability/table', {
    dt_name,
    date,
    page,
    page_size
  });
}

// 7. MYTO Summary — Feeders MYTO Energy Dashboard screen.
function getMytoSummary({
  feeder_band,
  period
} = {}) {
  return get('/myto/summary', {
    feeder_band,
    period
  });
}

// 8. IDB Dashboard — IDB Dashboard screen's Dashboard tab.
function getIdbDashboard({
  feeder,
  date
} = {}) {
  return get('/idb/dashboard', {
    feeder,
    date
  });
}

// 9. IDB Feeder to DT Loss (paginated) — "Feeder to DT loss Table" tab.
function getIdbFeederDtLoss({
  feeder,
  date,
  page,
  page_size
} = {}) {
  return get('/idb/feeder-dt-loss', {
    feeder,
    date,
    page,
    page_size
  });
}

// 10. IDB Customer to DT Loss (paginated) — "Customer to DT loss Table" tab.
function getIdbCustomerDtLoss({
  feeder,
  date,
  page,
  page_size
} = {}) {
  return get('/idb/customer-dt-loss', {
    feeder,
    date,
    page,
    page_size
  });
}

// Highlights the peak point in a trend series, matching the Figma mocks' static callout
// bubbles. leftPct is index-based (evenly spaced x-axis) rather than pixel-measured against
// actual Chart.js geometry, so it's a close approximation, not exact.
function buildTrendCallout(trend, valueKey, titleFn, valueLabel) {
  if (!trend || !trend.length) return null;
  let peakIdx = 0;
  trend.forEach((t, i) => {
    if ((t[valueKey] || 0) > (trend[peakIdx][valueKey] || 0)) peakIdx = i;
  });
  const leftPct = trend.length > 1 ? peakIdx / (trend.length - 1) * 100 : 50;
  return {
    title: titleFn(trend[peakIdx]),
    value: valueLabel(trend[peakIdx][valueKey]),
    leftPct: Math.min(90, Math.max(5, leftPct))
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48)["URLSearchParams"]))

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/PageHeader.vue?vue&type=template&id=3404a146&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ph"
  }, [_vm._ssrNode((_vm.loading ? "<div class=\"ph-prog\" data-v-3404a146><div class=\"ie-prog\" data-v-3404a146></div></div>" : "<!---->") + " <div class=\"ph-pattern\" data-v-3404a146><div" + _vm._ssrClass(null, _vm.meta.pattern) + _vm._ssrStyle(null, {
    color: _vm.meta.color
  }, null) + " data-v-3404a146></div></div> " + (_vm.meta.photo ? "<div class=\"ph-photo ie-fadein\" data-v-3404a146><img src=\"/grid-hero.jpg\" alt data-v-3404a146> <div class=\"ph-photo-fade\" data-v-3404a146></div></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"ph-inner\" data-v-3404a146>", "</div>", [_vm._ssrNode("<div data-v-3404a146><div class=\"ph-kicker\"" + _vm._ssrStyle(null, {
    color: _vm.meta.color
  }, null) + " data-v-3404a146>" + _vm._ssrEscape(_vm._s(_vm.meta.kicker)) + "</div> <h1 class=\"ph-title\" data-v-3404a146>" + _vm._ssrEscape(_vm._s(_vm.meta.title)) + "</h1> <div class=\"ph-sub\" data-v-3404a146>" + _vm._ssrEscape(_vm._s(_vm.meta.sub)) + "</div></div> "), _vm.$slots.default ? _vm._ssrNode("<div class=\"ph-filters\" data-v-3404a146>", "</div>", [_vm._t("default")], 2) : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/PageHeader.vue?vue&type=template&id=3404a146&scoped=true

// EXTERNAL MODULE: ./js_modules/pages.js
var pages = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/PageHeader.vue?vue&type=script&lang=js

/* harmony default export */ var PageHeadervue_type_script_lang_js = ({
  name: 'PageHeader',
  props: {
    page: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    meta() {
      return pages["b" /* PAGE_META */][this.page] || {};
    }
  }
});
// CONCATENATED MODULE: ./components/ui/PageHeader.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_PageHeadervue_type_script_lang_js = (PageHeadervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/PageHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_PageHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3404a146",
  "1902ffe7"
  
)

/* harmony default export */ var PageHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSelect_vue_vue_type_style_index_0_id_d78a8f62_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSelect_vue_vue_type_style_index_0_id_d78a8f62_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSelect_vue_vue_type_style_index_0_id_d78a8f62_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSelect_vue_vue_type_style_index_0_id_d78a8f62_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterSelect_vue_vue_type_style_index_0_id_d78a8f62_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fs[data-v-d78a8f62]{position:relative}.fs.block[data-v-d78a8f62]{width:100%}.fs-btn[data-v-d78a8f62]{align-items:center;background:var(--surface-2);border:1px solid var(--border-strong);border-radius:9px;color:var(--text);cursor:pointer;display:flex;gap:8px;height:38px;max-width:340px;padding:0 11px;text-align:left}.fs.block .fs-btn[data-v-d78a8f62]{max-width:none;width:100%}.fs-btn.compact[data-v-d78a8f62]{background:var(--surface);border-color:var(--border);border-radius:8px;height:auto;padding:6px 9px 6px 10px}.fs-btn.open[data-v-d78a8f62]{border-color:var(--primary)}.fs-btn[data-v-d78a8f62]:disabled{cursor:default;opacity:.5}.fs-chev[data-v-d78a8f62],.fs-ico[data-v-d78a8f62]{color:var(--text-3);flex:none}.fs-chev[data-v-d78a8f62]{margin-left:auto;transition:transform .2s}.fs-text[data-v-d78a8f62]{align-items:flex-start;display:flex;flex-direction:column;line-height:1.05;min-width:0}.fs-label[data-v-d78a8f62]{color:var(--text-3);font-size:9px;letter-spacing:.06em;text-transform:uppercase}.fs-label[data-v-d78a8f62],.fs-value[data-v-d78a8f62]{font-weight:700;white-space:nowrap}.fs-value[data-v-d78a8f62]{font-size:12.5px;max-width:240px;overflow:hidden;text-overflow:ellipsis}.fs-value--compact[data-v-d78a8f62]{flex:1;max-width:none;min-width:0}.fs-pop[data-v-d78a8f62]{background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow-xl);left:0;max-width:min(400px,calc(100vw - 40px));padding:6px;position:absolute;top:calc(100% + 8px);z-index:45}.fs.block .fs-pop[data-v-d78a8f62]{width:100%}.fs-search[data-v-d78a8f62]{align-items:center;background:var(--surface-2);border:1px solid var(--border-strong);border-radius:8px;color:var(--text-3);display:flex;gap:8px;margin-bottom:5px;padding:7px 10px}.fs-search input[data-v-d78a8f62]{background:transparent;border:none;color:var(--text);flex:1;font-size:12.5px;min-width:0;outline:none}.fs-list[data-v-d78a8f62]{display:flex;flex-direction:column;gap:1px;max-height:300px;overflow-x:hidden;overflow-y:auto}.fs-opt[data-v-d78a8f62]{align-items:center;border-radius:8px;color:var(--text);cursor:pointer;display:flex;font-size:12.5px;font-weight:600;gap:10px;padding:8px 10px}.fs-opt[data-v-d78a8f62]:hover{background:var(--surface-2)}.fs-opt.on[data-v-d78a8f62]{background:var(--primary-soft);font-weight:800}.fs-opt-text[data-v-d78a8f62]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fs-check[data-v-d78a8f62]{color:var(--primary-press)}.fs-empty[data-v-d78a8f62]{color:var(--text-3);font-size:12px;padding:12px 10px;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/FilterSelect.vue?vue&type=template&id=d78a8f62&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "root",
    staticClass: "fs",
    class: {
      block: _vm.block
    }
  }, [_vm._ssrNode("<button type=\"button\"" + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrClass("fs-btn", {
    open: _vm.open,
    compact: _vm.compact
  }) + " data-v-d78a8f62>", "</button>", [_vm.icon ? _c('Icon', {
    staticClass: "fs-ico",
    attrs: {
      "name": _vm.icon,
      "size": 15
    }
  }) : _vm._e(), _vm._ssrNode(" " + (!_vm.compact ? "<span class=\"fs-text\" data-v-d78a8f62><span class=\"fs-label\" data-v-d78a8f62>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</span> <span" + _vm._ssrAttr("title", _vm.currentLabel) + " class=\"fs-value\" data-v-d78a8f62>" + _vm._ssrEscape(_vm._s(_vm.currentLabel)) + "</span></span>" : "<span" + _vm._ssrAttr("title", _vm.currentLabel) + " class=\"fs-value fs-value--compact\" data-v-d78a8f62>" + _vm._ssrEscape(_vm._s(_vm.currentLabel)) + "</span>") + " "), _c('Icon', {
    staticClass: "fs-chev",
    style: {
      transform: _vm.open ? 'rotate(180deg)' : 'none'
    },
    attrs: {
      "name": "chevDown",
      "size": 14
    }
  })], 2), _vm._ssrNode(" "), _vm.open ? _vm._ssrNode("<div class=\"fs-pop ie-fadeup\"" + _vm._ssrStyle(null, {
    minWidth: _vm.popWidth
  }, null) + " data-v-d78a8f62>", "</div>", [_vm.isSearchable ? _vm._ssrNode("<div class=\"fs-search\" data-v-d78a8f62>", "</div>", [_c('Icon', {
    attrs: {
      "name": "search",
      "size": 15
    }
  }), _vm._ssrNode(" <input placeholder=\"Search…\"" + _vm._ssrAttr("value", _vm.query) + " data-v-d78a8f62>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"fs-list ie-scroll\" data-v-d78a8f62>", "</div>", [_vm._l(_vm.shown, function (o) {
    return _vm._ssrNode("<div" + _vm._ssrClass("fs-opt", {
      on: o.value === _vm.value
    }) + " data-v-d78a8f62>", "</div>", [_vm._ssrNode("<span" + _vm._ssrAttr("title", o.label) + " class=\"fs-opt-text\" data-v-d78a8f62>" + _vm._ssrEscape(_vm._s(o.label)) + "</span> "), o.value === _vm.value ? _c('Icon', {
      staticClass: "fs-check",
      attrs: {
        "name": "check",
        "size": 15
      }
    }) : _vm._e()], 2);
  }), _vm._ssrNode(" " + (!_vm.shown.length ? "<div class=\"fs-empty\" data-v-d78a8f62>No match</div>" : "<!---->") + " " + (_vm.clipped ? "<div class=\"fs-empty\" data-v-d78a8f62>" + _vm._ssrEscape("Showing first " + _vm._s(_vm.maxShown) + " · type to narrow") + "</div>" : "<!---->"))], 2)], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/FilterSelect.vue?vue&type=template&id=d78a8f62&scoped=true

// EXTERNAL MODULE: ./components/ui/Icon.vue + 2 modules
var Icon = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/FilterSelect.vue?vue&type=script&lang=js


// Header filter dropdown from the design: icon + small caps label + current value,
// opening a searchable list. `options` may be strings or { value, label } objects.
/* harmony default export */ var FilterSelectvue_type_script_lang_js = ({
  name: 'FilterSelect',
  components: {
    Icon: Icon["default"]
  },
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    searchable: {
      type: Boolean,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    popWidth: {
      type: String,
      default: '240px'
    }
  },
  data() {
    return {
      open: false,
      query: '',
      maxShown: 300
    };
  },
  computed: {
    normalized() {
      return this.options.map(o => o !== null && typeof o === 'object' ? o : {
        value: o,
        label: String(o)
      });
    },
    isSearchable() {
      return this.searchable === null ? this.normalized.length > 8 : this.searchable;
    },
    filtered() {
      const q = this.query.trim().toLowerCase();
      return q ? this.normalized.filter(o => o.label.toLowerCase().includes(q)) : this.normalized;
    },
    shown() {
      return this.filtered.slice(0, this.maxShown);
    },
    clipped() {
      return this.filtered.length > this.maxShown;
    },
    currentLabel() {
      const hit = this.normalized.find(o => o.value === this.value);
      return hit ? hit.label : this.value == null || this.value === '' ? '—' : String(this.value);
    }
  },
  mounted() {
    document.addEventListener('mousedown', this.onDoc);
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.onDoc);
  },
  methods: {
    toggle() {
      this.open = !this.open;
      this.query = '';
      if (this.open && this.isSearchable) this.$nextTick(() => this.$refs.q && this.$refs.q.focus());
    },
    pick(o) {
      this.open = false;
      if (o.value !== this.value) {
        this.$emit('input', o.value);
        this.$emit('change', o.value);
      }
    },
    pickFirst() {
      if (this.shown.length) this.pick(this.shown[0]);
    },
    onDoc(e) {
      if (this.open && this.$refs.root && !this.$refs.root.contains(e.target)) this.open = false;
    }
  }
});
// CONCATENATED MODULE: ./components/ui/FilterSelect.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_FilterSelectvue_type_script_lang_js = (FilterSelectvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/FilterSelect.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_FilterSelectvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d78a8f62",
  "6f1693bf"
  
)

/* harmony default export */ var FilterSelect = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonPage_vue_vue_type_style_index_0_id_9e7985aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonPage_vue_vue_type_style_index_0_id_9e7985aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonPage_vue_vue_type_style_index_0_id_9e7985aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonPage_vue_vue_type_style_index_0_id_9e7985aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SkeletonPage_vue_vue_type_style_index_0_id_9e7985aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sk-grid[data-v-9e7985aa]{display:grid;grid-gap:14px;gap:14px;margin-bottom:14px}.sk-grid--kpi[data-v-9e7985aa]{grid-template-columns:repeat(auto-fit,minmax(230px,1fr))}.sk-grid--charts[data-v-9e7985aa]{grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}.sk-bars[data-v-9e7985aa]{align-items:flex-end;display:flex;gap:10px;height:190px;margin-top:20px}.sk-bars>div[data-v-9e7985aa]{flex:1}.sk-donut-row[data-v-9e7985aa]{align-items:center;display:flex;gap:18px;margin-top:22px}.sk-donut[data-v-9e7985aa]{border-radius:50%;flex:none;height:128px;-webkit-mask:radial-gradient(circle,transparent 42px,#000 43px);mask:radial-gradient(circle,transparent 42px,#000 43px);width:128px}.sk-lines[data-v-9e7985aa]{display:flex;flex:1;flex-direction:column;gap:12px}.sk-rule[data-v-9e7985aa]{background:color-mix(in srgb,var(--primary) 35%,transparent);height:2px;margin:18px 0 2px}.sk-row[data-v-9e7985aa]{display:grid;grid-template-columns:2fr 1.4fr 1fr 1fr;grid-gap:16px;border-bottom:1.5px dotted var(--border-strong);gap:16px;padding:14px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/SkeletonPage.vue?vue&type=template&id=9e7985aa&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ie-fadein",
    attrs: {
      "aria-busy": "true",
      "aria-label": "Loading"
    }
  }, [_vm._ssrNode("<div class=\"sk-grid sk-grid--kpi\" data-v-9e7985aa>" + _vm._ssrList(4, function (i) {
    return "<div class=\"ie-card\" data-v-9e7985aa><div class=\"ie-skel\" style=\"width:30px;height:30px;border-radius:8px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:46%;height:10px;margin-top:16px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:68%;height:28px;margin-top:10px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:100%;height:7px;margin-top:18px;border-radius:999px\" data-v-9e7985aa></div></div>";
  }) + "</div> <div class=\"sk-grid sk-grid--charts\" data-v-9e7985aa><div class=\"ie-card\" data-v-9e7985aa><div class=\"ie-skel\" style=\"width:34%;height:13px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:22%;height:9px;margin-top:8px\" data-v-9e7985aa></div> <div class=\"sk-bars\" data-v-9e7985aa>" + _vm._ssrList([42, 68, 54, 86, 61, 74, 48], function (h, i) {
    return "<div class=\"ie-skel\"" + _vm._ssrStyle(null, {
      height: h + '%'
    }, null) + " data-v-9e7985aa></div>";
  }) + "</div></div> <div class=\"ie-card\" data-v-9e7985aa><div class=\"ie-skel\" style=\"width:48%;height:13px\" data-v-9e7985aa></div> <div class=\"sk-donut-row\" data-v-9e7985aa><div class=\"ie-skel sk-donut\" data-v-9e7985aa></div> <div class=\"sk-lines\" data-v-9e7985aa><div class=\"ie-skel\" style=\"width:80%;height:10px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:64%;height:10px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:72%;height:10px\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"width:52%;height:10px\" data-v-9e7985aa></div></div></div></div></div> <div class=\"ie-card\" data-v-9e7985aa><div class=\"ie-skel\" style=\"width:22%;height:13px\" data-v-9e7985aa></div> <div class=\"sk-rule\" data-v-9e7985aa></div> " + _vm._ssrList(5, function (i) {
    return "<div class=\"sk-row\" data-v-9e7985aa><div class=\"ie-skel\" style=\"height:10px;width:82%\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"height:10px;width:70%\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"height:10px;width:60%\" data-v-9e7985aa></div> <div class=\"ie-skel\" style=\"height:10px;width:50%;justify-self:end\" data-v-9e7985aa></div></div>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/SkeletonPage.vue?vue&type=template&id=9e7985aa&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/SkeletonPage.vue?vue&type=script&lang=js
/* harmony default export */ var SkeletonPagevue_type_script_lang_js = ({
  name: 'SkeletonPage'
});
// CONCATENATED MODULE: ./components/ui/SkeletonPage.vue?vue&type=script&lang=js
 /* harmony default export */ var ui_SkeletonPagevue_type_script_lang_js = (SkeletonPagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/SkeletonPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_SkeletonPagevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9e7985aa",
  "37e664b2"
  
)

/* harmony default export */ var SkeletonPage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=energy_flow_diagram.js.map