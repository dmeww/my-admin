import {createPinia} from "pinia";
import {useAppStore} from "@/store/modules/app.js";
import {useUserStore} from "@/store/modules/user.js";

function clearStores() {
    const appStore = useAppStore()
    const userStore = useUserStore()
    window.sessionStorage.removeItem('user')
    appStore.$reset()
    userStore.$reset()
}

const pinia = createPinia()

export {useAppStore, useUserStore,clearStores}

export default pinia


