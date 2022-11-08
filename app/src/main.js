import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue';
import axios from 'axios'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './assets/index.css'
import 'flowbite';

const app = createApp(App)

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8095/api',
})


app.config.globalProperties.$axios = { ...axiosInstance }
app.use(createPinia())
app.use(router)
app.use(  createAuth0({
  domain: "reina.jp.auth0.com",
  client_id: "jc24Sjqsy5UZNfXedTjFv7aWG17QOySF",
  redirect_uri: window.location.origin,
  audience: "https://angel-baby-db/api",
  }))
app.mount('#app')

