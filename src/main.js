import {createApp} from 'vue'
import '@/assets/style/gloabal.css'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import pinia from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import PiniaPluginPersistence from 'pinia-plugin-persistedstate'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

pinia.use(PiniaPluginPersistence)

app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
