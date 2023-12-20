import {createRouter, createWebHistory} from "vue-router";

import {defaultRoutes} from "@/router/routes/modules/default.js";

import setRouteGuard from "@/router/guard/index.js";


const router = createRouter({
    history: createWebHistory(),
    routes: defaultRoutes
})

setRouteGuard(router)

export default router




