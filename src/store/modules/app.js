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
        navbar: {
          breadcrumb: [{title: '控制台', url: '/'},{title: '首页', url: '/'}]  // 默认面包屑
        },
        router: {
            init: false                     // 路由状态
        },
        theme: 'light',                     // 系统主题
    }),
    getters: {},
    actions: {
        loadRoleMenu(routes) {
            this.sideMenu.list = filterMenuFromRoutes(routes)
            console.log('生成菜单 ', this.sideMenu.list)
        },
    }
})



