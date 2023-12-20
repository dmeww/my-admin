import {useUserStore} from "@/store/modules/user.js";
import {useAppStore} from "@/store/index.js";

import {loadRoleRoutes} from "@/utils/router.js";
import {ElNotification} from "element-plus";
import {ROLES} from "@/utils/static.js";


export default function loadRoleRoutesGuard(router) {

    router.beforeEach((to, from, next) => {
        console.log('Enter Guard')
        const appStore = useAppStore()
        const userStore = useUserStore()

        // 检测登录
        if (userStore.token.length) {
            console.log('已登录')
            if (!appStore.router.init) {
                console.log('未加载路由')
                loadRoleRoutes(router, ROLES[userStore.info.role])
                console.log('加载完成', router.getRoutes())
                appStore.router.init = true
                // 重定向
                next(to.path)
            } else {
                console.log('已加载路由', router.getRoutes())
                // 防止重复登录
                if (to.path === '/login') {
                    next(from.path)
                    return
                }
                // 判断目标地址在不在路由表中，不在就重定向到404
                let hasRoute = router.getRoutes().filter(route => route.path === to.path).length
                if (hasRoute) {
                    // 权限检查部分
                    // 不设置页面权限默认无法访问
                    const metaInfo = to.meta || {roles: []}
                    // TODO * 表示任何角色都可以访问
                    if (metaInfo.roles.includes('*') || metaInfo.roles.includes(ROLES[userStore.info.role])) {
                        next()
                    } else { // 重定向回回上一个页面
                        ElNotification.error({message: '权限不足', duration: 2000})
                        next(from.path)
                    }
                } else {
                    next('/404')
                }
            }

        } else {
            console.log('未登录，重定向至登录页面')
            // 重定向回登录
            if (to.path === '/login') {
                next()
            } else {
                next('/login')
            }
        }

    })


}
