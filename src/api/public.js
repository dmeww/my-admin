import http from "@/utils/http.js";
import {defaultConfig} from "@/utils/request.js";
import {useUserStore} from "@/store/index";



export function login(params) {
    return http.post('/user/login', params)
}

export function logout() {
    return http.get('/user/exit')
}


export function register(params) {
    return http.post('/user/register', params)
}

export function getMailCode(params) {
    return http.post('/user/register/code', params)
}


export function getMeetingUserList(params) {
    return http.post('/meeting/join/list', params)
}

export function getSystemNoticeList(params) {
    return http.get('/notice/system/list', params)
}

export function getSystemRecentNoticeList(params) {
    return http.get('/notice/system/recent', params)
}

export function getMeetingNoticeList(params) {
    return http.get('/notice/meeting', params)
}

export function getMeetingExcelFile(meeingId) {
    const userStore = useUserStore()
    const headers = new Headers()
    headers.set('token', userStore.token)
    // headers.set('Content-Type', 'application/octet-stream')
    return fetch(`${defaultConfig.baseURL}/meeting/info/export?meetingId=${meeingId}`, {
        method: 'GET',
        headers: headers,
        responseType: 'blob'
    })

}



