exports.ids = [34];
exports.modules = {

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0d537ee5", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3fca5dc8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3fca5dc8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3fca5dc8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3fca5dc8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3fca5dc8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".login[data-v-3fca5dc8]{background:var(--canvas);color:var(--text);display:grid;grid-template-columns:1.1fr .9fr;min-height:100vh}.login-hero[data-v-3fca5dc8]{background:#100e0b;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;padding:44px 52px;position:relative}.login-hero-img[data-v-3fca5dc8]{height:100%;-o-object-fit:cover;object-fit:cover;opacity:.92;width:100%}.login-hero-img[data-v-3fca5dc8],.login-hero-shade[data-v-3fca5dc8]{bottom:0;left:0;position:absolute;right:0;top:0}.login-hero-shade[data-v-3fca5dc8]{background:linear-gradient(155deg,rgba(12,9,5,.82),rgba(12,9,5,.52) 45%,rgba(120,50,4,.44))}.login-hero-brand[data-v-3fca5dc8]{align-items:center;display:flex;gap:12px;position:relative}.login-hero-logo[data-v-3fca5dc8]{align-items:center;background:#fff;border-radius:12px;box-shadow:var(--shadow-sm);display:flex;height:44px;justify-content:center;width:44px}.login-hero-logo img[data-v-3fca5dc8]{height:32px;-o-object-fit:contain;object-fit:contain;width:32px}.login-hero-org[data-v-3fca5dc8]{color:#fff;font-size:16px;font-weight:800;letter-spacing:-.2px}.login-hero-copy[data-v-3fca5dc8]{max-width:470px;position:relative}.login-hero-tag[data-v-3fca5dc8]{align-items:center;backdrop-filter:blur(6px);background:hsla(0,0%,100%,.14);border-radius:999px;color:#fff;display:inline-flex;font-size:11px;font-weight:700;gap:7px;letter-spacing:.08em;margin-bottom:22px;padding:6px 13px;text-transform:uppercase}.login-hero-title[data-v-3fca5dc8]{color:#fff;font-size:58px;font-weight:800;letter-spacing:-2.4px;line-height:1}.login-hero-sub[data-v-3fca5dc8]{color:hsla(0,0%,100%,.74);font-size:15px;line-height:1.6;margin-top:16px;max-width:420px}.login-hero-ver[data-v-3fca5dc8]{color:hsla(0,0%,100%,.45);font-size:11.5px;font-weight:600;position:relative}.login-panel[data-v-3fca5dc8]{align-items:center;background:var(--canvas);display:flex;flex-direction:column;justify-content:center;overflow:hidden;padding:40px;position:relative}.login-circuit[data-v-3fca5dc8]{color:var(--primary);opacity:.07}.login-glow[data-v-3fca5dc8]{border-radius:50%;pointer-events:none;position:absolute}.login-glow--a[data-v-3fca5dc8]{background:radial-gradient(circle,color-mix(in srgb,var(--primary) 22%,transparent) 0,transparent 68%);height:520px;right:-180px;top:-180px;width:520px}.login-glow--b[data-v-3fca5dc8]{background:radial-gradient(circle,color-mix(in srgb,var(--accent) 12%,transparent) 0,transparent 68%);bottom:-200px;height:460px;left:-160px;width:460px}.login-theme[data-v-3fca5dc8]{position:absolute;right:20px;top:20px;z-index:2}.login-form[data-v-3fca5dc8]{max-width:380px;position:relative;width:100%}.login-brand[data-v-3fca5dc8]{gap:10px;margin-bottom:22px}.login-brand[data-v-3fca5dc8],.login-brand-logo[data-v-3fca5dc8]{align-items:center;display:flex}.login-brand-logo[data-v-3fca5dc8]{background:var(--surface);border:1px solid var(--border);border-radius:11px;box-shadow:var(--shadow-xs);height:40px;justify-content:center;width:40px}.login-brand-logo img[data-v-3fca5dc8]{height:28px;-o-object-fit:contain;object-fit:contain;width:28px}.login-brand-text[data-v-3fca5dc8]{line-height:1.15}.login-brand-name[data-v-3fca5dc8]{font-size:13.5px;font-weight:800;letter-spacing:-.2px}.login-brand-org[data-v-3fca5dc8]{color:var(--text-3);font-size:10.5px;font-weight:700;letter-spacing:.06em}.login-welcome[data-v-3fca5dc8]{font-size:27px;font-weight:800;letter-spacing:-.9px}.login-lede[data-v-3fca5dc8]{color:var(--text-2);font-size:14px;margin-top:6px}.login-field[data-v-3fca5dc8]{margin-top:16px}.login-field[data-v-3fca5dc8]:first-of-type{margin-top:28px}.login-field label[data-v-3fca5dc8]{color:var(--text);display:block;font-size:12.5px;font-weight:700;margin-bottom:7px}.login-input[data-v-3fca5dc8]{align-items:center;background:var(--surface);border:1px solid var(--border-strong);border-radius:10px;color:var(--text-3);display:flex;gap:9px;padding:0 13px}.login-input[data-v-3fca5dc8]:focus-within{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 18%,transparent)}.login-input input[data-v-3fca5dc8]{background:transparent;border:none;color:var(--text);flex:1;font-size:14px;min-width:0;outline:none;padding:12px 0}.login-eye[data-v-3fca5dc8]{background:none;border:none;color:var(--text-3);cursor:pointer;display:flex;flex:none;padding:4px}.login-notice[data-v-3fca5dc8]{border-radius:9px;font-size:12.5px;font-weight:700;margin-top:16px;padding:9px 12px}.login-notice--error[data-v-3fca5dc8]{background:var(--danger-soft);color:var(--danger)}.login-notice--ok[data-v-3fca5dc8]{background:var(--success-soft);color:var(--success)}.login-submit[data-v-3fca5dc8]{align-items:center;background:var(--primary);border:none;border-radius:10px;box-shadow:var(--shadow-xs);color:var(--on-primary);cursor:pointer;display:flex;font-size:14.5px;font-weight:800;gap:9px;justify-content:center;margin-top:24px;padding:13px;width:100%}.login-submit[data-v-3fca5dc8]:hover:not(:disabled){background:var(--primary-hover)}.login-submit[data-v-3fca5dc8]:disabled{cursor:progress}.login-spin[data-v-3fca5dc8]{animation:ie-spin .7s linear infinite;border:2px solid rgba(0,0,0,.25);border-radius:50%;border-top-color:currentcolor;display:inline-block;height:16px;width:16px}.login-links[data-v-3fca5dc8]{align-items:center;display:flex;flex-wrap:wrap;font-size:12.5px;font-weight:600;gap:10px;justify-content:space-between;margin-top:16px}.login-links span[data-v-3fca5dc8]{color:var(--text-3)}@media (max-width:900px){.login[data-v-3fca5dc8]{grid-template-columns:1fr}.login-hero[data-v-3fca5dc8]{min-height:280px;padding:28px 24px}.login-hero-title[data-v-3fca5dc8]{font-size:38px;letter-spacing:-1.4px}.login-hero-sub[data-v-3fca5dc8]{display:none}.login-panel[data-v-3fca5dc8]{padding:36px 16px 48px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3fca5dc8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "login ie-fadein"
  }, [_vm._ssrNode("<div class=\"login-hero\" data-v-3fca5dc8><img src=\"/grid-hero.jpg\" alt class=\"login-hero-img\" data-v-3fca5dc8> <div class=\"login-hero-shade\" data-v-3fca5dc8></div> <div class=\"login-hero-brand\" data-v-3fca5dc8><div class=\"login-hero-logo\" data-v-3fca5dc8><img" + _vm._ssrAttr("src", __webpack_require__(14)) + " alt=\"Ikeja Electric\" data-v-3fca5dc8></div> <div class=\"login-hero-org\" data-v-3fca5dc8>Ikeja Electric</div></div> <div class=\"login-hero-copy\" data-v-3fca5dc8><div class=\"login-hero-tag\" data-v-3fca5dc8>Grid Intelligence Platform</div> <div class=\"login-hero-title\" data-v-3fca5dc8>Every megawatt,<br data-v-3fca5dc8>end to end.</div> <div class=\"login-hero-sub\" data-v-3fca5dc8>Grid to transformer to customer — energy, losses and availability across the Ikeja Electric network, in one live picture.</div></div> <div class=\"login-hero-ver\" data-v-3fca5dc8>" + _vm._ssrEscape("Version " + _vm._s(_vm.version_number) + " · Control Centre Build") + "</div></div> "), _vm._ssrNode("<div class=\"login-panel\" data-v-3fca5dc8>", "</div>", [_vm._ssrNode("<div class=\"pt-circuit ie-layer login-circuit\" data-v-3fca5dc8></div> <div class=\"login-glow login-glow--a\" data-v-3fca5dc8></div> <div class=\"login-glow login-glow--b\" data-v-3fca5dc8></div> "), _c('client-only', [_c('button', {
    staticClass: "ie-icon-btn login-theme",
    attrs: {
      "type": "button",
      "title": "Toggle theme"
    },
    on: {
      "click": function ($event) {
        return _vm.$theme.toggle();
      }
    }
  }, [_c('Icon', {
    attrs: {
      "name": _vm.$theme.isDark ? 'sun' : 'moon',
      "size": 17
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<form class=\"login-form ie-fadeup\" data-v-3fca5dc8>", "</form>", [_vm._ssrNode("<div class=\"login-brand\" data-v-3fca5dc8><div class=\"login-brand-logo\" data-v-3fca5dc8><img" + _vm._ssrAttr("src", __webpack_require__(14)) + " alt=\"Ikeja Electric\" data-v-3fca5dc8></div> <div class=\"login-brand-text\" data-v-3fca5dc8><div class=\"login-brand-name\" data-v-3fca5dc8>Grid Intelligence</div><div class=\"login-brand-org\" data-v-3fca5dc8>IKEJA ELECTRIC</div></div></div> <div class=\"login-welcome\" data-v-3fca5dc8>Welcome back</div> <div class=\"login-lede\" data-v-3fca5dc8>Sign in with your Ikeja Electric staff account.</div> "), _vm._ssrNode("<div class=\"login-field\" data-v-3fca5dc8>", "</div>", [_vm._ssrNode("<label for=\"username\" data-v-3fca5dc8>Username</label> "), _vm._ssrNode("<div class=\"login-input\" data-v-3fca5dc8>", "</div>", [_c('Icon', {
    attrs: {
      "name": "user",
      "size": 18
    }
  }), _vm._ssrNode(" <input id=\"username\" type=\"text\" placeholder=\"firstname.lastname\" autocomplete=\"username\"" + _vm._ssrAttr("value", _vm.username) + " data-v-3fca5dc8>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"login-field\" data-v-3fca5dc8>", "</div>", [_vm._ssrNode("<label for=\"password\" data-v-3fca5dc8>Password</label> "), _vm._ssrNode("<div class=\"login-input\" data-v-3fca5dc8>", "</div>", [_c('Icon', {
    attrs: {
      "name": "lock",
      "size": 18
    }
  }), _vm._ssrNode(" " + ((_vm.showPw ? 'text' : 'password') === 'checkbox' ? "<input id=\"password\" placeholder=\"••••••••\" autocomplete=\"current-password\" type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.password) ? _vm._i(_vm.password, null) > -1 : _vm.password) + " data-v-3fca5dc8>" : (_vm.showPw ? 'text' : 'password') === 'radio' ? "<input id=\"password\" placeholder=\"••••••••\" autocomplete=\"current-password\" type=\"radio\"" + _vm._ssrAttr("checked", _vm._q(_vm.password, null)) + " data-v-3fca5dc8>" : "<input id=\"password\" placeholder=\"••••••••\" autocomplete=\"current-password\"" + _vm._ssrAttr("type", _vm.showPw ? 'text' : 'password') + _vm._ssrAttr("value", _vm.password) + " data-v-3fca5dc8>") + " "), _vm._ssrNode("<button type=\"button\"" + _vm._ssrAttr("aria-label", _vm.showPw ? 'Hide password' : 'Show password') + " class=\"login-eye\" data-v-3fca5dc8>", "</button>", [_c('Icon', {
    attrs: {
      "name": _vm.showPw ? 'eyeOff' : 'eye',
      "size": 18
    }
  })], 1)], 2)], 2), _vm._ssrNode(" " + (_vm.notice ? "<div" + _vm._ssrClass("login-notice", 'login-notice--' + _vm.notice.tone) + " data-v-3fca5dc8>" + _vm._ssrEscape(_vm._s(_vm.notice.text)) + "</div>" : "<!---->") + " <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.disabled) + " class=\"login-submit\" data-v-3fca5dc8>" + (_vm.disabled ? "<span class=\"login-spin\" data-v-3fca5dc8></span>" : "<!---->") + _vm._ssrEscape("\n        " + _vm._s(_vm.disabled ? 'Signing in…' : 'Sign in') + "\n      ") + "</button> <div class=\"login-links\" data-v-3fca5dc8><a href=\"#\" data-v-3fca5dc8>Forgot password?</a> <span data-v-3fca5dc8>Need access? Contact IT Service Desk</span></div>")], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3fca5dc8&scoped=true

// EXTERNAL MODULE: ./components/ui/Icon.vue + 2 modules
var Icon = __webpack_require__(13);

// CONCATENATED MODULE: ./js_modules/mods.js
async function checkCustomerMeterNumber(meterNumber, internal) {
  var CustomerMeterNumber = "";
  CustomerMeterNumber = {
    param1: meterNumber
  };
  CustomerMeterNumber = JSON.stringify(CustomerMeterNumber);
  try {
    const rawResponse = await fetch("https://api.ikejaelectric.com/ie/harmony/v1/customer/accountlookup", {
      method: "POST",
      headers: {
        Authorization: "Bearer 1ba5295b-3525-3a8c-9b23-69a82e45fb2d",
        "Content-Type": "application/json"
      },
      body: CustomerMeterNumber
    });
    const response = await rawResponse.json();
    // return response

    // console.log(response)

    // console.log(response.accountNumber)
    console.log(response);
    let users_meter_number = response.meterNumber;
    if (users_meter_number == "") {
      if (internal == true) {
        M.toast({
          html: `<b class="yellow-text">Please wait</b>`
        });
      } else {
        M.toast({
          html: `<b class="red-text">Please check meter number agian</b>`
        });
      }
      return response;
    } else {
      if (response.status == 500) {
        await logOut();
      } else {
        return response;
      }
      // let users_account_number = response.accountNumber
      // console.log(users_account_number)
      // users_account_number = users_account_number.trim()
      // await getCustomerInfoApi(users_account_number)
    }
  } catch (error) {
    console.log(error);
    console.log(this.service_type);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getCustomerInfoApi(accountNumber) {
  M.toast({
    html: `<b class="yellow-text">Please wait</b>`
  });
  var CustomerAccountNumber = "";
  CustomerAccountNumber = {
    accountNumber: accountNumber
  };
  CustomerAccountNumber = JSON.stringify(CustomerAccountNumber);
  try {
    const rawResponse = await fetch("https://api.ikejaelectric.com/ie/harmony/v1/customer/info", {
      method: "POST",
      headers: {
        Authorization: "Bearer 1ba5295b-3525-3a8c-9b23-69a82e45fb2d",
        "Content-Type": "application/json"
      },
      body: CustomerAccountNumber
    });
    const response = await rawResponse.json();
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getCustomerInfoApi2(meterNumber, service_type) {
  M.toast({
    html: `<b class="yellow-text">Please wait</b>`
  });
  let token = localStorage.getItem("token");
  var customer_meter_number = "";
  customer_meter_number = meterNumber;
  // "https://api.ikejaelectric.com/ie/harmony/v1/customer/info",
  // use the customer2 api here when you wake up by God's grace. Jesus is Lord

  try {
    // const rawResponse = await fetch(
    //   "https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/customerinfo2?meterNo=" +
    //     customer_meter_number + "&serviceType=" + service_type,

    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/customerinfo2?meterNo=" + customer_meter_number + "&serviceType=" + service_type, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json"
      }
    });
    const response = await rawResponse.json();
    console.log(`This is the response ${response}`);
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}

// this is DT customerInfoApi 43901910984
async function getIDBCustomerInfoApi(accountNumber) {
  console.log(`this is the meter number from the mode ${accountNumber}`);
  M.toast({
    html: `<b class="yellow-text">Please wait</b>`
  });
  let token = localStorage.getItem("token");
  console.log(token);
  var CustomerAccountNumber = "";
  // CustomerAccountNumber = {
  //   accountNumber: accountNumber,
  // };
  // CustomerAccountNumber = JSON.stringify(CustomerAccountNumber);
  try {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/customerinfo?meterNo=" + accountNumber,
    // "https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/customerinfo?meterNo="+accountNumber,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json"
      }
    });
    // http://192.168.6.183:8087/cwfrestapi/api/v1/customerinfo?meterNo=43901910984
    const response = await rawResponse.json();
    console.log(`This is the response ${response}`);
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getRequestDetailsWithTrackingId(trackingId) {
  console.log("this is the trackingId", trackingId);
  try {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getRequestDetails?trackingId=" + trackingId,
    // const rawResponse = await fetch(
    //   "https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/getRequestDetails?trackingId=" +
    //     trackingId,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json"
      }
    });
    const response = await rawResponse.json();
    // return response

    // console.log(response)

    // console.log(response.accountNumber)
    console.log(response);

    // let users_meter_number = response.meterNumber;

    // if (users_meter_number == "") {
    //   if(internal == true){
    //     M.toast({
    //       html: `<b class="yellow-text">Please wait</b>`,
    //     });
    //   } else {
    //     M.toast({
    //       html: `<b class="red-text">Please check meter number agian</b>`,
    //     });
    //   }
    //   return response;
    // } else {
    //   if (response.status == 500) {
    //     await logOut();
    //   } else {
    //     return response;
    //   }
    // }

    // if (users_meter_number == "") {
    //   if(internal == true){
    //     M.toast({
    //       html: `<b class="yellow-text">Please wait</b>`,
    //     });
    //   } else {
    //     M.toast({
    //       html: `<b class="red-text">Please check meter number agian</b>`,
    //     });
    //   }
    //   return response;
    // } else {
    //   if (response.status == 500) {
    //     await logOut();
    //   } else {
    //     return response;
    //   }
    // }

    return response;
  } catch (error) {
    console.log(error);
    // console.log(this.service_type);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
function generateRandomString() {
  let result = "";
  let new_date = Date();
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
async function uploadImage(userId, accountNumber, docType, file) {
  // run an open minded check on the accountNumber/Meternumber on next version control (11th April 11:52 2025)
  // if (accountNumber == '' || empty(accountNumber)) {
  //   accountNumber = `IE_CWA_${generateRandomString()}`
  // }

  // console.log(`this is a dummy account ${accountNumber}`);
  // console.log(`this is a dummy account ${accountNumber}`);
  // console.log(`this is a dummy account ${accountNumber}`);

  M.toast({
    html: `<b class="yellow-text">Uploading </b>`
  });
  console.log(userId, accountNumber, docType, file);
  var formData = new FormData();
  formData.append("userId", userId);
  formData.append("accountNo", accountNumber);
  formData.append("docType", docType);
  formData.append("file", file);
  try {
    // 92802433505
    // const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/upload/document",

    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/upload/document", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      },
      body: formData
    });
    const response = await rawResponse.json();
    if (response.statusMsg == "Success") {
      M.toast({
        html: `<b class="green-text">Success </b>`
      });
    }
    // console.log(response)

    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
    return error;
  }
}
async function getPaymentHistory(meter_numberX, date_from, date_to) {
  // let token = localStorage.getItem('jdotwdott')
  // var passwords = ""
  // meter_number = {
  //     param: "0102327327",
  // }
  // meter_number = JSON.stringify(meter_number)
  // let meter_number = '0102111612'
  let meter_number = meter_numberX;
  let x = await checkCustomerMeterNumber(meter_number, true);
  console.log(`this is the account number ${x}`);
  if (x.meterNumber == "" || x == "undefined") {
    try {
      console.log(date_from, date_to);
      // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
      const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=" + meter_number + "&startDate=" + date_from + "&endDate=" + date_to, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
        }
      });
      const response = await rawResponse.json();
      // console.log(response)
      if (response.status == 500) {
        await logOut();
      } else {
        return response;
      }

      // console.log(response)

      // console.log(response.passwords)
      // console.log(response)
      // return response
    } catch (error) {
      console.log(error);
      M.toast({
        html: `<b class="red-text">${error}</b>`
      });
    }
  } else if (x.accountNumber != "" && x.code == "00") {
    meter_number = x.accountNumber;
    try {
      console.log(date_from, date_to);
      // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
      const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=" + meter_number + "&startDate=" + date_from + "&endDate=" + date_to, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
        }
      });
      const response = await rawResponse.json();
      // console.log(response)
      if (response.status == 500) {
        await logOut();
      } else {
        return response;
      }

      // console.log(response)

      // console.log(response.passwords)
      // console.log(response)
      // return response
    } catch (error) {
      console.log(error);
      M.toast({
        html: `<b class="red-text">${error}</b>`
      });
    }
  }
}
async function getBillingHistory(meter_number, date_from, date_to) {
  // let token = localStorage.getItem('jdotwdott')
  // var passwords = ""
  // meter_number = {
  //     param: "0102327327",
  // }
  // meter_number = JSON.stringify(meter_number)
  // let meter_number = '0102111612'

  try {
    console.log(date_from, date_to);
    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getBillingHistory?accountNumber=" + meter_number + "&startDate=" + date_from + "&endDate=" + date_to, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      }
    });
    const response = await rawResponse.json();
    console.log(response);
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getAllDTList(username) {
  // username = 'paseeperi'
  console.log(username);
  try {
    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getESRDTLink?username=" + username, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      }
    });
    const response = await rawResponse.json();
    // console.log(response)
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getDTSearch(searchString) {
  searchString = searchString.toLowerCase();
  try {
    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getDTSearch?searchString=" + searchString, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      }
    });
    console.log(response);
    const response = await rawResponse.json();
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getDCUSearch(searchString) {
  searchString = searchString.toLowerCase();
  try {
    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getidbboxinfo?dcuNo=" + searchString, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      }
    });
    console.log(response);
    const response = await rawResponse.json();
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getEsrFormHistory(date_from, date_to) {
  // let token = localStorage.getItem('jdotwdott')
  // var passwords = ""
  // meter_number = {
  //     param: "0102327327",
  // }
  // meter_number = JSON.stringify(meter_number)
  // let meter_number = '0102111612'

  try {
    console.log(date_from, date_to);
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getFormReport?startDate=" + date_from + "&endDate=" + date_to, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      }
    });
    const response = await rawResponse.json();
    console.log(response.status);
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function logOut() {
  if (false) {}
}

// export function getCoordinates() {
//   return new Promise((resolve, reject) => {
//     if (!process.client) {
//       M.toast({
//         html: `<b class="red-text">Geolocation is not available on the server side</b>`,
//       });
//       reject(new Error("Geolocation is not available on the server side"));
//       return;
//     }

//     if (!navigator.geolocation) {
//       M.toast({
//         html: `<b class="red-text">Geolocation is not supported by your browser</b>`,
//       });
//       reject(new Error("Geolocation is not supported by your browser"));
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const long = position.coords.longitude;
//         const lat = position.coords.latitude;
//         resolve({ long, lat });
//       },
//       (error) => {
//         handleError(error);
//         console.log('this is geo error: ', error);
//         const long = 0;
//         const lat = 0;
//         resolve({ long, lat });

//         // resolve(error);
//       },
//       { enableHighAccuracy: true, timeout: 7000, maximumAge: 0 }
//     );
//   });
// }

// function handleError(error) {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       M.toast({
//         html: `<b class="red-text">User denied the request for geolocation</b>`,
//       });
//       break;
//     case error.POSITION_UNAVAILABLE:
//       M.toast({
//         html: `<b class="red-text">Location information is unavailable</b>`,
//       });
//       break;
//     case error.TIMEOUT:
//       M.toast({
//         html: `<b class="red-text">The request to get user location timed out</b>`,
//       });
//       break;
//     default:
//       M.toast({
//         html: `<b class="red-text">The request to get user location timed out</b>`,
//       });
//       break;
//   }
// }

// export function getCurrentPosition (){
//     return getCoordinates()
//       .then(({ long, lat }) => {
//         // console.log(`Longitude: ${long}, Latitude: ${lat}`)
//         // this.long = long
//         // this.lat = lat
//         // Do something with the coordinates
//         return { long, lat }
//       })
//       .catch(error => {
//         console.error('Error getting coordinates:', error)
//       })
// }

function getCoordinates() {
  return new Promise((resolve, reject) => {
    // Check if running on the client side
    if (true) {
      M.toast({
        html: `<b class="red-text">Geolocation is not available on the server side</b>`
      });
      resolve({
        long: 0,
        lat: 0
      }); // Resolve with default values
      return;
    }

    // Check if geolocation is supported by the browser
    if (!navigator.geolocation) {
      M.toast({
        html: `<b class="red-text">Geolocation is not supported by your browser</b>`
      });
      resolve({
        long: 0,
        lat: 0
      }); // Resolve with default values
      return;
    }

    // Get the current position
    navigator.geolocation.getCurrentPosition(position => {
      const long = position.coords.longitude;
      const lat = position.coords.latitude;
      resolve({
        long,
        lat
      }); // Resolve with coordinates
    }, error => {
      handleError(error); // Show error toast

      // Handle specific errors
      if (error.code === error.POSITION_UNAVAILABLE || error.message.includes("kCLErrorLocationUnknown")) {
        console.warn("Location unknown. Retrying or falling back to default values.");
        resolve({
          long: 0,
          lat: 0
        }); // Resolve with default values
      } else {
        resolve({
          long: 0,
          lat: 0
        }); // Resolve with default values for other errors
      }
    }, {
      enableHighAccuracy: true,
      timeout: 7000,
      maximumAge: 0
    });
  });
}

// Handle geolocation errors
function handleError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      M.toast({
        html: `<b class="red-text">User denied the request for geolocation</b>`
      });
      break;
    case error.POSITION_UNAVAILABLE:
      M.toast({
        html: `<b class="red-text">Location information is unavailable</b>`
      });
      break;
    case error.TIMEOUT:
      M.toast({
        html: `<b class="red-text">The request to get user location timed out</b>`
      });
      break;
    default:
      M.toast({
        html: `<b class="red-text">An unknown error occurred while fetching location</b>`
      });
      break;
  }
}

// Wrapper function to get the current position
function getCurrentPosition() {
  return getCoordinates().then(({
    long,
    lat
  }) => {
    console.log(`Longitude: ${long}, Latitude: ${lat}`);
    return {
      long,
      lat
    };
  }).catch(error => {
    console.error("Error getting coordinates:", error);
    return {
      long: 0,
      lat: 0
    }; // Fallback to default values
  });
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  head() {
    return {
      script: [{
        hid: 'cryptojs',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js',
        defer: true
      }]
    };
  },
  components: {
    Icon: Icon["default"]
  },
  data() {
    return {
      user_test: '',
      password_test: '',
      username: 'cechehieuka',
      password: '@@@1KingGod1234567890123456',
      version_number: '1.13.7',
      disabled: false,
      lat: '',
      long: '',
      hidePreLoader: true,
      showPw: false,
      notice: null
    };
  },
  methods: {
    signIn() {
      this.disabled = true;
      this.notice = null;
      if (false) {}
      this.$router.push('./end_to_end_energy_dashboard');
      this.username = this.username.trim();
      this.password = this.password.trim();
      this.user_test = this.user_test.trim();
      this.password_test = this.password_test.trim();
    },
    async convertEmail(uname, password) {
      let encrptionKey = 'astsk@#$001!!!*&^';
      let username = uname;
      let pWord = password;
      let encrytedUsername = username;
      let encrytedPassword = this.encryptWithAes256(pWord, encrptionKey);
      try {
        this.disabled = true;
        const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6'
          },
          body: JSON.stringify({
            usernameOrEmail: encrytedUsername,
            password: encrytedPassword,
            latitude: this.lat,
            longitude: this.long,
            versionNumber: this.version_number
          })
        });
        const content = await rawResponse.json();
        let responseCode = content.code;
        let message = content.message;
        if (responseCode == "09" || responseCode == null || responseCode == undefined) {
          this.notice = {
            tone: 'error',
            text: message
          };
          this.hidePreLoader = true;
          this.disabled = false;
        } else if (responseCode === '00') {
          this.notice = {
            tone: 'ok',
            text: 'Welcome'
          };
          this.disabled = false;
          if (false) {}
          this.hidePreLoader = true;
          this.$router.push('./menu');
        } else {
          this.notice = {
            tone: 'ok',
            text: content.message
          };
          this.disabled = false;
        }
      } catch (error) {
        this.notice = {
          tone: 'error',
          text: String(error)
        };
        this.disabled = false;
        this.hidePreLoader = true;
      }
    },
    encryptWithAes256(messageToEncrypt, encryptorKey) {
      var salt = CryptoJS.lib.WordArray.random(128 / 8);
      var key = CryptoJS.PBKDF2(encryptorKey, salt, {
        keySize: 256 / 32,
        iterations: 1000,
        hasher: CryptoJS.algo.SHA512
      });
      var iv = CryptoJS.lib.WordArray.random(128 / 8);
      var cipherText = CryptoJS.AES.encrypt(messageToEncrypt, key, {
        iv: iv
      });
      var encryptedData = salt.clone().concat(iv).concat(cipherText.ciphertext);
      var encryptedDataB64 = encryptedData.toString(CryptoJS.enc.Base64);
      return encryptedDataB64.replace(/(.{56})/g, '$1\n');
    },
    getUsernameFromLocalStorage() {
      try {
        let uname = localStorage.getItem('username');
        this.username = uname == null || uname == undefined ? '' : uname;
      } catch (error) {}
    }
  },
  async mounted() {
    try {
      const {
        long,
        lat
      } = await getCurrentPosition();
      this.long = long;
      this.lat = lat;
    } catch (error) {}
    this.getUsernameFromLocalStorage();
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3fca5dc8",
  "d8ed49a4"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map