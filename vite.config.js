import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // 设置路径
            '~': resolve(__dirname, './'),
            // 设置别名
            '@': resolve(__dirname, './src')
        }
    },
    plugins: [vue()],
})
