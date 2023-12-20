export const ROLES = ['user', 'admin','guest']

// 空对象定义
/**
 * 样例空会议
 */
export const sampleMeeting = {
    creatorId: '',
    title: '',
    desc: '',
    deadline: '',
    eventTime: '',
    location: '',
    host: '',
    capacity: 10,
}
/**
 *  样例用户认证信息
 */
export const sampleUser = {
    username: '',
    password: ''
}
/**
 * 样例用户信息
 */
export const sampleUserInfoVO = {
    username: '',
    userInfo: {
        birth: '',
        contact: '',
        dbId: -1,
        name: '',
        role: -1,
        sex: '',
        userId: -1
    }
}

/**
 * 会议查询： 报名时间选项
 */
export const typeSelect = [
    {label: '已过期', value: -1},
    {label: '全部', value: 0},
    {label: '可报名', value: 1}
]


/**
 *
 */
export const mTypeSelect = [
    {label: '已举行', value: -1},
    {label: '全部', value: 0},
    {label: '未举行', value: 1}
]


/**
 * 用户
 */
export const sexSelect = ['男', '女', '未知']
/**
 * 用户查询：审核状态选项
 */
export const statusSelect = [
    {label: '全部', value: -1},
    {label: '未审核', value: 0},
    {label: '已审核', value: 1}
]


/**
 * 会议查询：会议操作菜单
 */
export const meetingOptions = [
    {label: '请选择', value: -1},
    {label: '详细信息', value: 0},
    {label: '查看与会人员', value: 1},
    {label: '导出会议信息', value: 2},
    {label: '发布会议消息', value: 3}
]

/**
 * 用户管理：未审核用户操作菜单
 */
export const auditOptions = [
    {label: '请选择', value: -1},
    {label: '详细信息', value: 0},
    {label: '修改密码', value: 1},
    {label: '审核', value: 2}
]
/**
 * 用户管理：已审核用户操作菜单
 */
export const userOptions = [
    {label: '请选择', value: -1},
    {label: '详细信息', value: 0},
    {label: '修改密码', value: 1},
]


