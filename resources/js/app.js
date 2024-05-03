import './bootstrap';
import '../css/app.css';
import { createApp, markRaw } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHistory, useRoute } from 'vue-router'
import { routes } from './route';
import { createPinia } from 'pinia';

// components
import Navbar from "./Components/Navbar.vue"

const router = createRouter({
    history: createWebHistory(),
    routes : routes
})

const pinia = createPinia()

pinia.use(({store}) => {
    store.router = markRaw(router)
    store.route = markRaw(useRoute())
})

const app = createApp({

});
app.component('Navbar', Navbar);
app.use(pinia)
app.use(router);
app.mount("#app");