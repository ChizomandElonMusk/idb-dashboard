<template>
  <div>
    <div class="row full-width">
      <div class="col s12 m6" style="margin-top: 130px">
        <!-- <Logo /> -->
        <div class="container">
          <div class="row">
            <h5 class="center red-text">
              <!-- IE Commercial Workforce <br> -->
              Login <br>
              
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

      <!-- Electric wave animation panel -->
      <div class="col s12 m6 hide-on-small-and-down electric-panel">

        <!-- Scrolling sine waves -->
        <svg class="waves-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <!-- Wave 1 — cyan, large amplitude -->
          <path class="e-wave w1"
            d="M 0,300 C 50,220 100,380 150,300 C 200,220 250,380 300,300 C 350,220 400,380 450,300
               C 500,220 550,380 600,300 C 650,220 700,380 750,300 C 800,220 850,380 900,300
               C 950,220 1000,380 1050,300 C 1100,220 1150,380 1200,300
               C 1250,220 1300,380 1350,300 C 1400,220 1450,380 1500,300
               C 1550,220 1600,380 1650,300 C 1700,220 1750,380 1800,300
               C 1850,220 1900,380 1950,300 C 2000,220 2050,380 2100,300"
            fill="none" stroke="#00d4ff" stroke-width="2.5"/>
          <!-- Wave 2 — blue, mid offset -->
          <path class="e-wave w2"
            d="M 0,340 C 50,270 100,410 150,340 C 200,270 250,410 300,340 C 350,270 400,410 450,340
               C 500,270 550,410 600,340 C 650,270 700,410 750,340 C 800,270 850,410 900,340
               C 950,270 1000,410 1050,340 C 1100,270 1150,410 1200,340
               C 1250,270 1300,410 1350,340 C 1400,270 1450,410 1500,340
               C 1550,270 1600,410 1650,340 C 1700,270 1750,410 1800,340
               C 1850,270 1900,410 1950,340 C 2000,270 2050,410 2100,340"
            fill="none" stroke="#5b7cfa" stroke-width="1.8"/>
          <!-- Wave 3 — purple, upper offset -->
          <path class="e-wave w3"
            d="M 0,260 C 50,190 100,330 150,260 C 200,190 250,330 300,260 C 350,190 400,330 450,260
               C 500,190 550,330 600,260 C 650,190 700,330 750,260 C 800,190 850,330 900,260
               C 950,190 1000,330 1050,260 C 1100,190 1150,330 1200,260
               C 1250,190 1300,330 1350,260 C 1400,190 1450,330 1500,260
               C 1550,190 1600,330 1650,260 C 1700,190 1750,330 1800,260
               C 1850,190 1900,330 1950,260 C 2000,190 2050,330 2100,260"
            fill="none" stroke="#c87dff" stroke-width="1.2"/>
          <!-- Wave 4 — faint bottom -->
          <path class="e-wave w4"
            d="M 0,400 C 50,340 100,460 150,400 C 200,340 250,460 300,400 C 350,340 400,460 450,400
               C 500,340 550,460 600,400 C 650,340 700,460 750,400 C 800,340 850,460 900,400
               C 950,340 1000,460 1050,400 C 1100,340 1150,460 1200,400
               C 1250,340 1300,460 1350,400 C 1400,340 1450,460 1500,400
               C 1550,340 1600,460 1650,400 C 1700,340 1750,460 1800,400
               C 1850,340 1900,460 1950,400 C 2000,340 2050,460 2100,400"
            fill="none" stroke="#00d4ff" stroke-width="0.8"/>
        </svg>

        <!-- Floating sparks -->
        <span class="spark sp1"></span>
        <span class="spark sp2"></span>
        <span class="spark sp3"></span>
        <span class="spark sp4"></span>
        <span class="spark sp5"></span>
        <span class="spark sp6"></span>

        <!-- Center bolt + rings -->
        <div class="e-center">
          <div class="e-ring r1"></div>
          <div class="e-ring r2"></div>
          <div class="e-ring r3"></div>
          <!-- <div class="e-bolt-wrap">
            <i class="material-icons e-bolt">bolt</i>
          </div> -->
          <div class="logo-circle">
            <img src="~assets/images/logo.png" class="responsive-img" alt="" style="max-width:70px; max-height:70px;">
          </div>
          <p class="e-brand">IDB Dashboard</p>
          <p class="e-sub">Ikeja Electric</p>
          <b class="center white-text" style="font-weight: 300; font-size: 12px;">Version: {{ version_number }}</b>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import PreLoader from '~/components/PreLoader.vue'
import { getCurrentPosition } from '~/js_modules/mods'

export default {
  head() {
    return {
      script: [
        { hid: 'cryptojs', src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js', defer: true }
      ]
    }
  },
  components: { PreLoader },
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
    },

    async convertEmail(uname, password) {
      let encrptionKey = 'astsk@#$001!!!*&^'
      let username = uname
      let pWord = password
      let encrytedUsername = username
      let encrytedPassword = this.encryptWithAes256(pWord, encrptionKey)

      try {
        this.disabled = true
        const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/auth/login', {
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
        })

        const content = await rawResponse.json()
        let responseCode = content.code
        let message = content.message

        if (responseCode == "09" || responseCode == null || responseCode == undefined) {
          M.toast({ html: `<b class="red-text">${message}</b>` })
          this.hidePreLoader = true
          this.disabled = false
        } else if (responseCode === '00') {
          M.toast({ html: `<b class="green-text">Welcome</b>` })
          this.disabled = false
          if (process.client) {
            localStorage.setItem('token', content.token)
            localStorage.setItem('forms', content.forms)
            localStorage.setItem('userId', content.userId)
            localStorage.setItem('username', this.username)
          }
          this.hidePreLoader = true
          this.$router.push('./menu')
        } else {
          M.toast({ html: `<b class="green-text">${content.message}</b>` })
          this.disabled = false
        }
      } catch (error) {
        M.toast({ html: `<b class="red-text">${error}</b>` })
        this.hidePreLoader = true
      }
    },

    encryptWithAes256(messageToEncrypt, encryptorKey) {
      var salt = CryptoJS.lib.WordArray.random(128 / 8)
      var key = CryptoJS.PBKDF2(encryptorKey, salt, { keySize: 256 / 32, iterations: 1000, hasher: CryptoJS.algo.SHA512 })
      var iv = CryptoJS.lib.WordArray.random(128 / 8)
      var cipherText = CryptoJS.AES.encrypt(messageToEncrypt, key, { iv: iv })
      var encryptedData = salt.clone().concat(iv).concat(cipherText.ciphertext)
      var encryptedDataB64 = encryptedData.toString(CryptoJS.enc.Base64)
      return encryptedDataB64.replace(/(.{56})/g, '$1\n')
    },

    getUsernameFromLocalStorage() {
      try {
        let uname = localStorage.getItem('username')
        this.username = (uname == null || uname == undefined) ? '' : uname
      } catch (error) {}
    },
  },

  async mounted() {
    try {
      const { long, lat } = await getCurrentPosition()
      this.long = long
      this.lat = lat
    } catch (error) {}
    this.getUsernameFromLocalStorage()
  },
}
</script>

<style scoped>
/* ── Electric Panel ── */
.electric-panel {
  position: relative;
  background: linear-gradient(160deg, #2a0300 0%, #6b0d00 40%, #e75309 100%);
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
}

/* ── SVG Waves ── */
.waves-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.e-wave {
  stroke-opacity: 0.6;
  filter: drop-shadow(0 0 6px currentColor);
  animation: waveScroll linear infinite;
}

/* On red: white = crisp contrast, golden-orange = warm energy, light pink = depth, pale yellow = faint shimmer */
.w1 { animation-duration: 6s;  stroke: #ffffff;  stroke-opacity: 0.75; filter: drop-shadow(0 0 8px rgba(255,255,255,0.8)); }
.w2 { animation-duration: 9s;  stroke: #ffd180;  stroke-opacity: 0.6;  filter: drop-shadow(0 0 6px #ffd180); }
.w3 { animation-duration: 7s;  stroke: #ffab76;  stroke-opacity: 0.45; filter: drop-shadow(0 0 5px #ffab76); }
.w4 { animation-duration: 11s; stroke: #fff3e0;  stroke-opacity: 0.25; filter: drop-shadow(0 0 4px #fff3e0); }

@keyframes waveScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-600px); }
}

/* ── Floating Sparks ── */
.spark {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 10px 2px #ffffff;
  animation: sparkFloat linear infinite;
  opacity: 0;
}

.sp1 { left: 15%;  bottom: 10%; animation-duration: 5s;   animation-delay: 0s;   background: #ffffff; box-shadow: 0 0 10px 2px rgba(255,255,255,0.8); }
.sp2 { left: 30%;  bottom: 20%; animation-duration: 7s;   animation-delay: 1.2s; background: #ffd180; box-shadow: 0 0 10px 2px #ffd180; }
.sp3 { left: 55%;  bottom: 5%;  animation-duration: 6s;   animation-delay: 0.5s; background: #ffab76; box-shadow: 0 0 10px 2px #ffab76; }
.sp4 { left: 70%;  bottom: 15%; animation-duration: 8s;   animation-delay: 2s;   background: #ffffff; box-shadow: 0 0 10px 2px rgba(255,255,255,0.8); }
.sp5 { left: 82%;  bottom: 30%; animation-duration: 5.5s; animation-delay: 0.8s; background: #ffd180; box-shadow: 0 0 10px 2px #ffd180; }
.sp6 { left: 45%;  bottom: 8%;  animation-duration: 9s;   animation-delay: 3s;   background: #ffab76; box-shadow: 0 0 10px 2px #ffab76; }

@keyframes sparkFloat {
  0%   { transform: translateY(0)   scale(1);   opacity: 0; }
  10%  { opacity: 1; }
  80%  { opacity: 0.6; }
  100% { transform: translateY(-300px) scale(0.3); opacity: 0; }
}

/* ── Center Element ── */
.e-center {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

/* Pulsing rings */
.e-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 220, 160, 0.5);
  animation: ringPulse ease-out infinite;
}

.r1 { width: 120px; height: 120px; animation-duration: 2.4s; animation-delay: 0s; }
.r2 { width: 180px; height: 180px; animation-duration: 2.4s; animation-delay: 0.6s; }
.r3 { width: 240px; height: 240px; animation-duration: 2.4s; animation-delay: 1.2s; }

@keyframes ringPulse {
  0%   { transform: scale(0.8); opacity: 0.8; }
  100% { transform: scale(1.4); opacity: 0; }
}

/* Logo circle */
.logo-circle {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(255,255,255,0.4), 0 4px 20px rgba(0,0,0,0.2);
}

/* Bolt icon */
.e-bolt-wrap {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,220,160,0.25) 0%, rgba(255,180,80,0.05) 70%);
  border: 2px solid rgba(255,220,160,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(255,200,100,0.4), inset 0 0 20px rgba(255,200,100,0.1);
  animation: boltGlow 2s ease-in-out infinite alternate;
}

.e-bolt {
  font-size: 42px !important;
  color: #fff;
  text-shadow: 0 0 20px #ffd180, 0 0 40px #ffa040;
}

@keyframes boltGlow {
  0%   { box-shadow: 0 0 20px rgba(255,200,100,0.3), inset 0 0 10px rgba(255,200,100,0.1); }
  100% { box-shadow: 0 0 60px rgba(255,220,140,0.7), inset 0 0 30px rgba(255,200,100,0.2); }
}

.e-brand {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 6px 0 0 0;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 0 0 14px rgba(255,200,100,0.7);
}

.e-sub {
  font-size: 12px;
  color: rgba(255,220,160,0.85);
  margin: 0;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>
