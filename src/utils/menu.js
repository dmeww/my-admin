/**
 * 递归从路由中过滤出菜单
 */
export function filterMenuFromRoutes(routes = [], parentPath = '/') {
    let result = []
    for (let i = 0; i < routes.length; i++) {
        let routeMeta = routes[i].meta
        // 路由 --> 菜单 规则
        // 1. 没设置meta属性的路由
        // 2. 设置了meta属性，但是没有设置hidden属性的路由
        // 2. 设置了meta属性，设置hidden为false的路由
        if (!routeMeta || (routeMeta.hidden && routeMeta.hidden === true)) {
            continue
        }
        // 拼接完整菜单URL，用于菜单跳转
        routeMeta.url = parentPath.endsWith('/') ? `${parentPath}${routes[i].path}` : `${parentPath}/${routes[i].path}`
        // 去除了重复的 /
        routeMeta.url = routeMeta.url.replace("//", "/")
        // 去除尾部的 /
        if (routeMeta.url.endsWith('/')) routeMeta.url = routeMeta.url.substring(0, routeMeta.url.length - 1)

        // 子菜单添加
        if (routes[i].children) {
            routeMeta.children = filterMenuFromRoutes(routes[i].children, routeMeta.url)
        }
        result.push(routeMeta)
    }
    return result
}

