import {adminRoutes} from "@/router/routes/modules/admin.js";
import {userRoutes} from "@/router/routes/modules/user.js";
import {errorRoutes} from "@/router/routes/modules/error.js";


const routesMap = {
    "user": [...userRoutes, ...errorRoutes],
    "admin": [...adminRoutes, ...errorRoutes],
    "all": [...adminRoutes, ...userRoutes, ...errorRoutes], // 用于权限检测路由
}


export default function getRoutesByRole(role) {
    console.log("你的角色是 ", role)
    return routesMap[role]
}




