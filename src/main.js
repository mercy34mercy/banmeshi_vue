import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag-next";
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css"

createApp(App).use(store).use(router).use(VueGtag, { property: { id: 'G-6YKFL621J8', router } }).mount('#app')