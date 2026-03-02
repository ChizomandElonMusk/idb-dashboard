// debug.js
const options = JSON.parse(`{"namespace":"customSelect"}`)
const { debug, namespace } = options
if (debug) {
  console.log(`${namespace} options: `, options)
}
