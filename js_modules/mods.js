export async function checkCustomerMeterNumber(meterNumber, internal) {
  var CustomerMeterNumber = "";
  CustomerMeterNumber = {
    param1: meterNumber,
  };
  CustomerMeterNumber = JSON.stringify(CustomerMeterNumber);

  try {
    const rawResponse = await fetch(
      "https://api.ikejaelectric.com/ie/harmony/v1/customer/accountlookup",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer 1ba5295b-3525-3a8c-9b23-69a82e45fb2d",
          "Content-Type": "application/json",
        },
        body: CustomerMeterNumber,
      }
    );

    const response = await rawResponse.json();
    // return response

    // console.log(response)

    // console.log(response.accountNumber)
    console.log(response);

    let users_meter_number = response.meterNumber;

    if (users_meter_number == "") {
      if (internal == true) {
        M.toast({
          html: `<b class="yellow-text">Please wait</b>`,
        });
      } else {
        M.toast({
          html: `<b class="red-text">Please check meter number agian</b>`,
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
    M.toast({ html: `<b class="red-text">${error}</b>` });
  }
}

export async function getCustomerInfoApi(accountNumber) {
  M.toast({ html: `<b class="yellow-text">Please wait</b>` });
  var CustomerAccountNumber = "";
  CustomerAccountNumber = {
    accountNumber: accountNumber,
  };
  CustomerAccountNumber = JSON.stringify(CustomerAccountNumber);
  try {
    const rawResponse = await fetch(
      "https://api.ikejaelectric.com/ie/harmony/v1/customer/info",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer 1ba5295b-3525-3a8c-9b23-69a82e45fb2d",
          "Content-Type": "application/json",
        },
        body: CustomerAccountNumber,
      }
    );

    const response = await rawResponse.json();
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    M.toast({ html: `<b class="red-text">${error}</b>` });
  }
}

export async function getCustomerInfoApi2(meterNumber, service_type) {
  M.toast({ html: `<b class="yellow-text">Please wait</b>` });
  let token = localStorage.getItem("token");
  var customer_meter_number = "";
  customer_meter_number = meterNumber;
  // "https://api.ikejaelectric.com/ie/harmony/v1/customer/info",
  // use the customer2 api here when you wake up by God's grace. Jesus is Lord

  try {
    
    // const rawResponse = await fetch(
    //   "https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/customerinfo2?meterNo=" +
    //     customer_meter_number + "&serviceType=" + service_type,

    const rawResponse = await fetch(
      "https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/customerinfo2?meterNo=" +
        customer_meter_number + "&serviceType=" + service_type,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
          "Content-Type": "application/json",
        },
      }
    );

    const response = await rawResponse.json();
    console.log(`This is the response ${response}`);
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    M.toast({ html: `<b class="red-text">${error}</b>` });
  }
}

// this is DT customerInfoApi 43901910984
export async function getIDBCustomerInfoApi(accountNumber) {
  console.log(`this is the meter number from the mode ${accountNumber}`);
  M.toast({ html: `<b class="yellow-text">Please wait</b>` });
  let token = localStorage.getItem("token");
  console.log(token);
  var CustomerAccountNumber = "";
  // CustomerAccountNumber = {
  //   accountNumber: accountNumber,
  // };
  // CustomerAccountNumber = JSON.stringify(CustomerAccountNumber);
  try {
    const rawResponse = await fetch(
      "https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/customerinfo?meterNo=" +
        accountNumber,
      // "https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/customerinfo?meterNo="+accountNumber,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
          "Content-Type": "application/json",
        },
      }
    );
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
    M.toast({ html: `<b class="red-text">${error}</b>` });
  }
}

export async function getRequestDetailsWithTrackingId(trackingId) {
  console.log("this is the trackingId", trackingId);

  try {
    const rawResponse = await fetch(
      "https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getRequestDetails?trackingId=" +
        trackingId,
    // const rawResponse = await fetch(
    //   "https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/getRequestDetails?trackingId=" +
    //     trackingId,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
          "Content-Type": "application/json",
        },
      }
    );

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
    M.toast({ html: `<b class="red-text">${error}</b>` });
  }
}

export function generateRandomString() {
  let result = "";
  let new_date = Date();
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export async function uploadImage(userId, accountNumber, docType, file) {
  // run an open minded check on the accountNumber/Meternumber on next version control (11th April 11:52 2025)
  // if (accountNumber == '' || empty(accountNumber)) {
  //   accountNumber = `IE_CWA_${generateRandomString()}`
  // }

  // console.log(`this is a dummy account ${accountNumber}`);
  // console.log(`this is a dummy account ${accountNumber}`);
  // console.log(`this is a dummy account ${accountNumber}`);

  M.toast({ html: `<b class="yellow-text">Uploading </b>` });
  console.log(userId, accountNumber, docType, file);

  var formData = new FormData();
  formData.append("userId", userId);
  formData.append("accountNo", accountNumber);
  formData.append("docType", docType);
  formData.append("file", file);

  try {
    // 92802433505
    // const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/upload/document",

    const rawResponse = await fetch(
      "https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/upload/document",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        },
        body: formData,
      }
    );

    const response = await rawResponse.json();
    if (response.statusMsg == "Success") {
      M.toast({ html: `<b class="green-text">Success </b>` });
    }
    // console.log(response)

    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    M.toast({ html: `<b class="red-text">${error}</b>` });
    return error;
  }
}

export async function getPaymentHistory(meter_numberX, date_from, date_to) {
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
      const rawResponse = await fetch(
        "https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=" +
          meter_number +
          "&startDate=" +
          date_from +
          "&endDate=" +
          date_to,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.token,
            Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
          },
        }
      );

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
      M.toast({ html: `<b class="red-text">${error}</b>` });
    }
  } else if (x.accountNumber != "" && x.code == "00") {
    meter_number = x.accountNumber;

    try {
      console.log(date_from, date_to);
      // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
      const rawResponse = await fetch(
        "https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=" +
          meter_number +
          "&startDate=" +
          date_from +
          "&endDate=" +
          date_to,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.token,
            Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
          },
        }
      );

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
      M.toast({ html: `<b class="red-text">${error}</b>` });
    }
  }
}

export async function getBillingHistory(meter_number, date_from, date_to) {
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
    const rawResponse = await fetch(
      "https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getBillingHistory?accountNumber=" +
        meter_number +
        "&startDate=" +
        date_from +
        "&endDate=" +
        date_to,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        },
      }
    );

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
    M.toast({ html: `<b class="red-text">${error}</b>` });
  }
}

export async function getAllDTList(username) {
  // username = 'paseeperi'
  console.log(username);

  try {
    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
    const rawResponse = await fetch(
      "https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getESRDTLink?username=" +
        username,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        },
      }
    );

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
    M.toast({ html: `<b class="red-text">${error}</b>` });
  }
}

export async function getDTSearch(searchString) {
  searchString = searchString.toLowerCase();

  try {
    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
    const rawResponse = await fetch(
      "https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getDTSearch?searchString=" +
        searchString,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        },
      }
    );

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
    M.toast({ html: `<b class="red-text">${error}</b>` });
  }
}

export async function getDCUSearch(searchString) {
  searchString = searchString.toLowerCase();

  try {
    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
    const rawResponse = await fetch(
      "https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getidbboxinfo?dcuNo=" +
        searchString,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        },
      }
    );

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
    M.toast({ html: `<b class="red-text">${error}</b>` });
  }
}

export async function getEsrFormHistory(date_from, date_to) {
  // let token = localStorage.getItem('jdotwdott')
  // var passwords = ""
  // meter_number = {
  //     param: "0102327327",
  // }
  // meter_number = JSON.stringify(meter_number)
  // let meter_number = '0102111612'

  try {
    console.log(date_from, date_to);
    const rawResponse = await fetch(
      "https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getFormReport?startDate=" +
        date_from +
        "&endDate=" +
        date_to,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        },
      }
    );

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
    M.toast({ html: `<b class="red-text">${error}</b>` });
  }
}

export async function logOut() {
  if (process.client) {
    M.toast({ html: `<b class="red-text">Session expired</b>` });
    localStorage.removeItem("token");
    localStorage.setItem("service_type", "");
    localStorage.setItem("meter_number", "");
    localStorage.setItem("token", "");
    localStorage.setItem("forms", "");
    localStorage.setItem("userId", "");

    window.location.href = "/";
  }
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

export function getCoordinates() {
  return new Promise((resolve, reject) => {
    // Check if running on the client side
    if (!process.client) {
      M.toast({
        html: `<b class="red-text">Geolocation is not available on the server side</b>`,
      });
      resolve({ long: 0, lat: 0 }); // Resolve with default values
      return;
    }

    // Check if geolocation is supported by the browser
    if (!navigator.geolocation) {
      M.toast({
        html: `<b class="red-text">Geolocation is not supported by your browser</b>`,
      });
      resolve({ long: 0, lat: 0 }); // Resolve with default values
      return;
    }

    // Get the current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        resolve({ long, lat }); // Resolve with coordinates
      },
      (error) => {
        handleError(error); // Show error toast

        // Handle specific errors
        if (
          error.code === error.POSITION_UNAVAILABLE ||
          error.message.includes("kCLErrorLocationUnknown")
        ) {
          console.warn(
            "Location unknown. Retrying or falling back to default values."
          );
          resolve({ long: 0, lat: 0 }); // Resolve with default values
        } else {
          resolve({ long: 0, lat: 0 }); // Resolve with default values for other errors
        }
      },
      { enableHighAccuracy: true, timeout: 7000, maximumAge: 0 }
    );
  });
}

// Handle geolocation errors
function handleError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      M.toast({
        html: `<b class="red-text">User denied the request for geolocation</b>`,
      });
      break;
    case error.POSITION_UNAVAILABLE:
      M.toast({
        html: `<b class="red-text">Location information is unavailable</b>`,
      });
      break;
    case error.TIMEOUT:
      M.toast({
        html: `<b class="red-text">The request to get user location timed out</b>`,
      });
      break;
    default:
      M.toast({
        html: `<b class="red-text">An unknown error occurred while fetching location</b>`,
      });
      break;
  }
}

// Wrapper function to get the current position
export function getCurrentPosition() {
  return getCoordinates()
    .then(({ long, lat }) => {
      console.log(`Longitude: ${long}, Latitude: ${lat}`);
      return { long, lat };
    })
    .catch((error) => {
      console.error("Error getting coordinates:", error);
      return { long: 0, lat: 0 }; // Fallback to default values
    });
}
