<template>
  <div>

    <div class="row full-width">
      <div class="col s12 m6" style="margin-top: 130px">
        <Logo />
        <div class="container">
          <div class="row">
            <h5 class="center red-text">
              IE Commercial Workforce <br>
              <b class="center red-text" style="font-weight: 300; font-size: 12px;">Version: {{ version_number }}</b>
            </h5>
            
            <PreLoader class="center" :class="{ 'hide': hidePreLoader }" />
          </div>
          <form @submit.prevent>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" class="black-text focus" placeholder="" id="username" ref="username"
                  v-model="username" focused>
                <label for="username">Username</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="password" class="black-text" placeholder="" id="password" v-model="password">
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <button class="red btn btn-large col s12" @click="signIn" :disabled="disabled" style="background: linear-gradient(to right, #E75309, #C60606);">
                  Login
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>

      <div class="col s12 m6 full-width hide-on-small-and-down" :style="{ backgroundImage: `url(${backgroundUrl})` }">

      </div>

    </div>
  </div>
</template>

<script>

import backgroundUrl from '~/assets/images/angled_background.jpg'
import PreLoader from '~/components/PreLoader.vue'
import { getCurrentPosition } from '~/js_modules/mods'


export default {
  head() {
    return {// Other meta information
      script: [
        { hid: 'cryptojs', src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js', defer: true }
      ]
    }
  },
  data() {
    return {
      backgroundUrl,
      user_test: '',
      password_test: '',
      username: 'cechehieuka',
      password: '@@@1KingGod1234567890123456',
      
      version_number: '1.13.7', //production
      // version_number: '1.13.4',//test
      disabled: false,
      lat: '',
      long: '',
      hidePreLoader: true,
    }
  },

  methods: {





    signIn() {
      M.toast({ html: '<b class="yellow-text">Please wait...</b>' })
      this.$router.push('./control_center_dashboard')
      this.username = this.username.trim()
      this.password = this.password.trim()

      this.user_test = this.user_test.trim()
      this.password_test = this.password_test.trim()
      // this.convertEmail(this.username, this.password)

      // console.log(`username -> ${this.username}     password -> ${this.password}`)
      // if (this.username === '' || this.password === '') {
      //   M.toast({ html: '<b class="red-text">Username or Password is empty!</b>' })
      // } else {
      //   this.convertEmail(this.username, this.password)
      // }

    },



    async convertEmail(uname, password) {

      let encrptionKey = 'astsk@#$001!!!*&^'
      let username = uname
      let pWord = password

      // let encrytedUsername = this.encryptWithAes256(username, encrptionKey)
      let encrytedUsername = username
      let encrytedPassword = this.encryptWithAes256(pWord, encrptionKey)

     

      try {


        this.disabled = true
        const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/auth/login', {
        // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/auth/login', {   
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6',
          },
          body: JSON.stringify({
            usernameOrEmail: encrytedUsername,
            password: encrytedPassword,
            latitude: this.lat,
            longitude: this.long,
            versionNumber: this.version_number
          })

        });
        
        console.log('content is being converted to json')
        const content = await rawResponse.json();

        console.log(content)


        let responseCode = content.code
        let message = content.message

        console.log('if statement is being ran to check response')
        if (responseCode == "09" || responseCode == null || responseCode == undefined) {

          M.toast({ html: `<b class="red-text">${message}</b>` })
          this.hidePreLoader = true
          this.disabled = false

        } else if (responseCode === '00') {

          M.toast({ html: `<b class="green-text">Welcome</b>` })
          this.disabled = false
          let token = content.token
          let forms = content.forms
          let userId = content.userId
          let username = this.username

          if (process.client) {
            localStorage.setItem('token', token)
            localStorage.setItem('forms', forms)
            localStorage.setItem('userId', userId)
            localStorage.setItem('username', username)
            
          }

          this.hidePreLoader = true
          this.$router.push('./menu')
        } else {
          M.toast({ html: `<b class="green-text">${content.message}</b>` })
          this.disabled = false
        }





      } catch (error) {
        console.log(`Your error says -> ${error}`)
        M.toast({ html: `<b class="red-text">${error}</b>` })
        this.hidePreLoader = true
      }



    },


    encryptWithAes256(messageToEncrypt, encryptorKey) {

      // Generate random 16 bytes salt
      var salt = CryptoJS.lib.WordArray.random(128 / 8);

      // Derive key
      var key = CryptoJS.PBKDF2(
        encryptorKey,
        salt,
        { keySize: 256 / 32, iterations: 1000, hasher: CryptoJS.algo.SHA512 }     // Apply SHA512
      );
      // console.log("derived key:\n" + key);

      // Generate random 16 bytes init vector (iv)
      var iv = CryptoJS.lib.WordArray.random(128 / 8);

      // Encrypt
      var cipherText = CryptoJS.AES.encrypt(messageToEncrypt, key, { iv: iv });

      // Concatenate
      var encryptedData = salt.clone().concat(iv).concat(cipherText.ciphertext);  // Concatenate on binary level
      var encryptedDataB64 = encryptedData.toString(CryptoJS.enc.Base64);         // Base64 encode the result
      
      return encryptedDataB64.replace(/(.{56})/g, '$1\n');
    },

    getUsernameFromLocalStorage() {
      try {
        let uname = localStorage.getItem('username')
        if (uname == null || uname == undefined) {
          this.username = ''
        } else {
          this.username = uname
        }
        // if(uname)
      } catch (error) {

      }
    },

  },

  async mounted() {
    try {
      const { long, lat } = await getCurrentPosition()
      console.log(long, lat);
      this.long = long
      this.lat = lat
    } catch (error) {

    }

    this.getUsernameFromLocalStorage()
  },
}
</script>