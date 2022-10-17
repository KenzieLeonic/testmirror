import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import { createAuth0 } from '@auth0/auth0-vue'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './assets/index.css'
import 'flowbite';

const app = createApp(App)

const axiosInstance = axios.create({
    baseURL: 'http://localhost/api',
})

app.use(
    createAuth0({
        domain: '<AUTH0_DOMAIN>',
        client_id: '<AUTH0_CLIENT_ID>',
        redirect_uri: '<MY_CALLBACK_URL>'
    })
);


app.config.globalProperties.$axios = { ...axiosInstance }
app.use(createPinia())
app.use(router)
app.mount('#app')

