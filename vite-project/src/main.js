import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const BASE_URL = 'https://data.cityofnewyork.us/resource/ykvb-493p.json'

async function getData(URL) {
}