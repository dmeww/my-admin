import http from "../../utils/http.js";

/**
 * 会议查询
 * @param pageNum
 * @param pageSize
 * @param over
 * @param keyword
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function queryPublicMeetings(pageNum, pageSize, over, keyword) {
    if (!pageSize) {
        pageSize = 5
    }
    if (!over) {
        over = 0
    }

    return http.post('/meeting/public/query', {pageNum, pageSize, over, keyword})
}

/**
 * 新建会议
 * @param params
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function publishMeeting(params) {
    return http.post('/meeting/publish', params)
}

/**
 * 修改会议信息
 * @param params
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function updateMeeting(params) {
    return http.post('/meeting/update', params)
}


/**
 * 获取用户列表
 */
export function getUserList(pageNum, pageSize, audit, keyword) {

    return http.post('/user/manage/list/query', {pageNum, pageSize, audit, keyword})
}

/**
 * 添加新用户
 */
export function addNewUser(params) {
    return http.post('/user/manage/add', params)
}

/**
 * 审核用户
 * @param params
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function auditUser(params) {
    return http.post('/user/manage/audit', params)
}

/**
 * 用户修改自己的密码
 * @param params
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function updatePassword(params) {
    return http.post('/user/info/newpass', params)
}

/**
 * 用户修改自己的信息
 */
export function updateInfo(params) {
    return http.post('/user/info/modify', params)
}

/**
 * 作为管理员修改密码
 * @param params
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function updateUserPassword(params) {
    return http.post('/user/manage/info/update', params)
}


/**
 * 用户获取自己的信息
 */
export function getInfo() {
    return http.post('/user/info')
}


/**
 * 管理员获取每日计数
 */
export function getAdminToadyCount() {
    return http.get("/meeting/admin/count")
}

export function deleteNotice(params) {
    return http.get('/notice/delete', params)
}

export function publishNotice(params) {
    return http.post('/notice/publish', params)
}

/**
 * 管理员 清退用户
 * @param params
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function adminExitMeeting(params) {
    return http.post('/meeting/manage/exit', params)
}
