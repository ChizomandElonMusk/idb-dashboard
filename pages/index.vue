<template>
  <div class="login ie-fadein">
    <div class="login-hero">
      <img src="/grid-hero.jpg" alt="" class="login-hero-img" />
      <div class="login-hero-shade"></div>
      <div class="login-hero-brand">
        <div class="login-hero-logo"><img src="~/assets/images/logo.png" alt="Ikeja Electric" /></div>
        <div class="login-hero-org">Ikeja Electric</div>
      </div>
      <div class="login-hero-copy">
        <div class="login-hero-tag">Grid Intelligence Platform</div>
        <div class="login-hero-title">Every megawatt,<br>end to end.</div>
        <div class="login-hero-sub">Grid to transformer to customer — energy, losses and availability across the Ikeja Electric network, in one live picture.</div>
      </div>
      <div class="login-hero-ver">Version {{ version_number }} · Control Centre Build</div>
    </div>

    <div class="login-panel">
      <div class="pt-circuit ie-layer login-circuit"></div>
      <div class="login-glow login-glow--a"></div>
      <div class="login-glow login-glow--b"></div>
      <client-only>
        <button type="button" class="ie-icon-btn login-theme" title="Toggle theme" @click="$theme.toggle()">
          <Icon :name="$theme.isDark ? 'sun' : 'moon'" :size="17" />
        </button>
      </client-only>

      <form class="login-form ie-fadeup" @submit.prevent="signIn">
        <div class="login-brand">
          <div class="login-brand-logo"><img src="~/assets/images/logo.png" alt="Ikeja Electric" /></div>
          <div class="login-brand-text"><div class="login-brand-name">Grid Intelligence</div><div class="login-brand-org">IKEJA ELECTRIC</div></div>
        </div>
        <div class="login-welcome">Welcome back</div>
        <div class="login-lede">Sign in with your Ikeja Electric staff account.</div>

        <div class="login-field">
          <label for="username">Username</label>
          <div class="login-input">
            <Icon name="user" :size="18" />
            <input id="username" ref="username" v-model="username" type="text" placeholder="firstname.lastname" autocomplete="username" />
          </div>
        </div>
        <div class="login-field">
          <label for="password">Password</label>
          <div class="login-input">
            <Icon name="lock" :size="18" />
            <input id="password" v-model="password" :type="showPw ? 'text' : 'password'" placeholder="••••••••" autocomplete="current-password" />
            <button type="button" class="login-eye" :aria-label="showPw ? 'Hide password' : 'Show password'" @click="showPw = !showPw">
              <Icon :name="showPw ? 'eyeOff' : 'eye'" :size="18" />
            </button>
          </div>
        </div>

        <div v-if="notice" class="login-notice" :class="'login-notice--' + notice.tone">{{ notice.text }}</div>

        <button type="submit" class="login-submit" :disabled="disabled">
          <span v-if="disabled" class="login-spin"></span>
          {{ disabled ? 'Signing in…' : 'Sign in' }}
        </button>
        <div class="login-links">
          <a href="#" @click.prevent>Forgot password?</a>
          <span>Need access? Contact IT Service Desk</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/ui/Icon.vue'
import { getCurrentPosition } from '~/js_modules/mods'

export default {
  head() {
    return {
      script: [
        { hid: 'cryptojs', src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js', defer: true }
      ]
    }
  },
  components: { Icon },
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
      notice: null,
    }
  },

  methods: {
    signIn() {
      this.disabled = true
      this.notice = null
      if (process.client) {
        try { localStorage.setItem('username', this.username.trim()) } catch (e) {}
      }
      this.$router.push('./end_to_end_energy_dashboard')
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
          this.notice = { tone: 'error', text: message }
          this.hidePreLoader = true
          this.disabled = false
        } else if (responseCode === '00') {
          this.notice = { tone: 'ok', text: 'Welcome' }
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
          this.notice = { tone: 'ok', text: content.message }
          this.disabled = false
        }
      } catch (error) {
        this.notice = { tone: 'error', text: String(error) }
        this.disabled = false
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
.login { min-height: 100vh; display: grid; grid-template-columns: 1.1fr .9fr; background: var(--canvas); color: var(--text); }

.login-hero { position: relative; overflow: hidden; background: #100E0B; display: flex; flex-direction: column; justify-content: space-between; padding: 44px 52px; }
.login-hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .92; }
.login-hero-shade { position: absolute; inset: 0; background: linear-gradient(155deg, rgba(12,9,5,.82) 0%, rgba(12,9,5,.52) 45%, rgba(120,50,4,.44) 100%); }
.login-hero-brand { position: relative; display: flex; align-items: center; gap: 12px; }
.login-hero-logo { width: 44px; height: 44px; border-radius: 12px; background: #fff; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm); }
.login-hero-logo img { width: 32px; height: 32px; object-fit: contain; }
.login-hero-org { font-weight: 800; font-size: 16px; color: #fff; letter-spacing: -.2px; }
.login-hero-copy { position: relative; max-width: 470px; }
.login-hero-tag { display: inline-flex; align-items: center; gap: 7px; background: rgba(255,255,255,.14); backdrop-filter: blur(6px); color: #fff; font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: 6px 13px; border-radius: 999px; margin-bottom: 22px; }
.login-hero-title { font-size: 58px; line-height: 1; font-weight: 800; letter-spacing: -2.4px; color: #fff; }
.login-hero-sub { font-size: 15px; line-height: 1.6; color: rgba(255,255,255,.74); margin-top: 16px; max-width: 420px; }
.login-hero-ver { position: relative; font-size: 11.5px; color: rgba(255,255,255,.45); font-weight: 600; }

.login-panel { position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; background: var(--canvas); }
.login-circuit { color: var(--primary); opacity: .07; }
.login-glow { position: absolute; border-radius: 50%; pointer-events: none; }
.login-glow--a { right: -180px; top: -180px; width: 520px; height: 520px; background: radial-gradient(circle, color-mix(in srgb, var(--primary) 22%, transparent) 0%, transparent 68%); }
.login-glow--b { left: -160px; bottom: -200px; width: 460px; height: 460px; background: radial-gradient(circle, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 68%); }
.login-theme { position: absolute; top: 20px; right: 20px; z-index: 2; }

.login-form { position: relative; width: 100%; max-width: 380px; }
.login-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
.login-brand-logo { width: 40px; height: 40px; border-radius: 11px; background: var(--surface); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-xs); }
.login-brand-logo img { width: 28px; height: 28px; object-fit: contain; }
.login-brand-text { line-height: 1.15; }
.login-brand-name { font-size: 13.5px; font-weight: 800; letter-spacing: -.2px; }
.login-brand-org { font-size: 10.5px; font-weight: 700; letter-spacing: .06em; color: var(--text-3); }
.login-welcome { font-size: 27px; font-weight: 800; letter-spacing: -.9px; }
.login-lede { font-size: 14px; color: var(--text-2); margin-top: 6px; }

.login-field { margin-top: 16px; }
.login-field:first-of-type { margin-top: 28px; }
.login-field label { display: block; font-size: 12.5px; font-weight: 700; margin-bottom: 7px; color: var(--text); }
.login-input { display: flex; align-items: center; gap: 9px; background: var(--surface); border: 1px solid var(--border-strong); border-radius: 10px; padding: 0 13px; color: var(--text-3); }
.login-input:focus-within { border-color: var(--primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 18%, transparent); }
.login-input input { flex: 1; min-width: 0; border: none; background: transparent; font-size: 14px; color: var(--text); outline: none; padding: 12px 0; }
.login-eye { flex: none; background: none; border: none; color: var(--text-3); cursor: pointer; display: flex; padding: 4px; }

.login-notice { margin-top: 16px; border-radius: 9px; padding: 9px 12px; font-size: 12.5px; font-weight: 700; }
.login-notice--error { background: var(--danger-soft); color: var(--danger); }
.login-notice--ok { background: var(--success-soft); color: var(--success); }

.login-submit { width: 100%; margin-top: 24px; background: var(--primary); color: var(--on-primary); border: none; border-radius: 10px; padding: 13px; font-size: 14.5px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 9px; box-shadow: var(--shadow-xs); }
.login-submit:hover:not(:disabled) { background: var(--primary-hover); }
.login-submit:disabled { cursor: progress; }
.login-spin { width: 16px; height: 16px; border: 2px solid rgba(0,0,0,.25); border-top-color: currentColor; border-radius: 50%; animation: ie-spin .7s linear infinite; display: inline-block; }
.login-links { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 16px; font-size: 12.5px; font-weight: 600; flex-wrap: wrap; }
.login-links span { color: var(--text-3); }

@media (max-width: 900px) {
  .login { grid-template-columns: 1fr; }
  .login-hero { min-height: 280px; padding: 28px 24px; }
  .login-hero-title { font-size: 38px; letter-spacing: -1.4px; }
  .login-hero-sub { display: none; }
  .login-panel { padding: 36px 16px 48px; }
}
</style>
