import http from "../../utils/http.js";

import {useUserStore} from "../../stores/user.js";

const userStore = useUserStore()

export function getUserMeetingList(params) {
    return http.post('/meeting/user/list', params)
}

export function joinMeeting(params) {
    return http.post('/meeting/join', params)
}

export function exitMeeting(params) {
    return http.post('/meeting/exit', params)
}

export function getUserMeetingNoticeList(params){
    return http.get('/notice/user/list',params)
}

export function getUserIndexInfo(){
    return http.get('/meeting/user/count')
}

export function updateUserInfo(params){
    return http.post('/user/info/modify',params)
}

