// 导入axios
import axios from 'axios'

import {useUserStore,clearStores} from "../store/index.js";
import router from "../router/index.js";

// const store = useUserStore()

export const defaultConfig = {
    // baseURL 将自动加在 url`前面，除非 url 是一个绝对 URL。
    // 它可以通过设置一个 baseURL 便于为 axios 实例的方法传递相对 URL
    baseURL: 'http://127.0.0.1:7777',
    // timeout设置一个请求超时时间，如果请求时间超过了timeout，请求将被中断，单位为毫秒（ms）
    timeout: 60000,
    // headers是被发送的自定义请求头，请求头内容需要根据后端要求去设置，这里我们使用本项目请求头。
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

const instance = axios.create(defaultConfig)

// http request 请求拦截器
// 请求拦截器
instance.interceptors.request.use(config => {
    // 这里可以进行请求加密等操作。如添加token,cookie，修改数据传输格式等。
    config.headers['token'] = '123456';
    config.headers['Content-type'] = 'application/json';
    return config;
})

// 响应拦截器
instance.interceptors.response.use(response => {
    // 请求成功进行的操作。// 可以使用switch/if...else对数据先进行处理。
    if (response.status === 200) {
        // 处理自定义特殊响应码
        switch (response.data.code) {
            case 200: {
                return Promise.resolve(response.data)
            }
            case 403: {
                // 提醒用户重新登录
                setTimeout(() => {
                    clearStores()
                    location.reload()
                }, 1000)
                break
            }
            default: {

            }
        }
        return Promise.reject(response.data)
    } else {
        return Promise.reject(response)
    }

}, error => {
    // 请求失败进行的操作
    if (error.message) {
        console.log('Error: ' + error.message)
    }

    return Promise.reject({
        message: `请求失败：${error.message}`
    });
})


export default instance

