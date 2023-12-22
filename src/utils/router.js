import {useAppStore} from "@/store/index.js";
import {defaultRoutes} from "@/router/routes/modules/default.js";
import getRoutesByRole from "@/router/routes/index.js";
import Router from "@/router/index.js";

function addRoutes(router, routes) {
    console.log(`准备添加路由`, router.getRoutes())
    routes.forEach(route => {
        // console.log('添加路由中：',route)
        router.addRoute(route)
        // console.log('添加路由完成：',router.getRoutes())
    })
}


export function resetRouter(router) {
    // 清空路由表
    router.getRoutes().forEach(route => {
        const {name} = route
        router.hasRoute(name) && router.removeRoute(name)
    })
    // 重新添加默认路由
    defaultRoutes.forEach((route) => {
        router.addRoute(route)
    })
    console.log('重置路由完成', router.getRoutes())
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



