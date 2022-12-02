import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/assets/css/nucleo-icons.css"
import "@/assets/css/nucleo-svg.css"

import VueTilt from "vue-tilt.js";
import VueSweetalert2 from "vue-sweetalert2";
import SoftUIDashboard from "./soft-ui-dashboard";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTilt)
app.use(VueSweetalert2)
app.use(SoftUIDashboard)
app.mount('#app')
