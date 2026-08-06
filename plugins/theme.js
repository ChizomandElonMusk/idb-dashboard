import Vue from 'vue'

const STORAGE_KEY = 'theme'

function systemPrefersDark() {
  return process.client && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function readInitialTheme() {
  if (!process.client) return 'light'
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark' || stored === 'light') return stored
  } catch (e) {}
  return systemPrefersDark() ? 'dark' : 'light'
}

const state = Vue.observable({
  value: readInitialTheme()
})

function applyTheme(theme) {
  if (!process.client) return
  document.documentElement.setAttribute('data-theme', theme)
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch (e) {}
}

if (process.client) applyTheme(state.value)

const theme = {
  get value() {
    return state.value
  },
  get isDark() {
    return state.value === 'dark'
  },
  set(next) {
    state.value = next
    applyTheme(next)
  },
  toggle() {
    theme.set(state.value === 'dark' ? 'light' : 'dark')
  }
}

Vue.prototype.$theme = theme
