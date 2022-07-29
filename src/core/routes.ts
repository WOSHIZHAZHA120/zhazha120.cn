import {RouteRecordRaw} from "vue-router";

export default [
    {
        path: '/',
        component: () => import('../components/Home.vue')
    }
] as RouteRecordRaw[];
