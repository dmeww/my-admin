import {defineStore} from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        token: '', // token
        username: '', // 用户名
        info: {
            birth: '',
            contact: '',
            dbId: -1,
            name: '',
            role: 2,
            sex: '',
            userId: -1
        }
    }),
    getters: {},
    actions: {
    },
    persist: {
        enabled: true,
        key: 'user',
        storage: window.sessionStorage
    }
})
