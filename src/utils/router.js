import {useAppStore} from "@/store/index.js";
import {defaultRoutes} from "@/router/routes/modules/default.js";
import getRoutesByRole from "@/router/routes/index.js";
import Router from "@/router/index.js";

function addRoutes(router, routes) {
    console.log(`获取的路由`, routes)
    routes.forEach(route => {
        router.addRoute(route)
    })
}


export function resetRouter(router) {
    // 清空路由表
    router.getRoutes().forEach(route => {
        const {name} = route
        if (name) {
            router.hasRoute(name) && router.removeRoute(name)
        }
    })
    // 重新添加默认路由
    defaultRoutes.forEach((route) => {
        router.addRoute(route)
    })

}


export function loadRoleRoutes(router = Router, role = 'guest') {
    const appStore = useAppStore()
    // 先重置路由
    resetRouter(router)

    // 使用部分路由，只加载角色模块中的路由
    // 获取角色路由
    const routes = getRoutesByRole(role)
    // 加入路由
    addRoutes(router, routes)
    // 生成菜单
    appStore.loadRoleMenu(routes)
}



