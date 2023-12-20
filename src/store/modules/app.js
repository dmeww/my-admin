import {defineStore} from "pinia";
import {filterMenuFromRoutes} from '@/utils/menu'

export const useAppStore = defineStore('app', {
    state: () => ({
        sideMenu: {
            collapsed: false,               // 侧边菜单折叠状态
            defaultOpenMenu: '',            // 默认展开的菜单
            defaultSelectedMenuItem: '',    // 默认选中的菜单项
            list: []                        // 菜单列表
        },
        router: {
            init: false                     // 路由状态
        },
        theme: 'light',                     // 系统主题
    }),
    getters: {},
    actions: {
        collapseSideMenu(status) {
            this.sideMenu.collapsed = status
        },
        loadRoleMenu(routes) {
            this.sideMenu.list = filterMenuFromRoutes(routes)
            console.log('生成菜单 ', this.sideMenu.list)
        },
    }
})



