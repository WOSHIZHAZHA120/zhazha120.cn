import {createApp} from 'vue'
import Component from '../App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import routes from "./routes";
import {createPinia} from "pinia";

export const app = createApp(Component);
export const el = document.createElement('div');
export const pinia = createPinia();
export const router = createRouter({history: createWebHashHistory(), routes});

export function deploy() {
    el.id = 'app';
    document.body.prepend(el);

    app.use(pinia);
    app.use(router);
    app.mount(el);
}
