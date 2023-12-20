import setLoadingProgress from "@/router/guard/modules/nprogress";
import loadRoleRoutesGuard from "@/router/guard/modules/permission";
import setPageTitle from "@/router/guard/modules/title";

/**
 * 用于为路由添加不同用途的守卫
 */
export default function setRouteGuard(router) {
    setLoadingProgress(router)  // 设置导航时的进度条
    setPageTitle(router)        // 设置页面标题
    loadRoleRoutesGuard(router) // 检测权限，添加路由
}




