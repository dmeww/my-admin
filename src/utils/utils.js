/**
 * 表单验证
 */
export const formRules = {
    username: [
        {required: true, message: '请输入邮箱', trigger: 'blur'},
        {type: 'email', message: '请输入有效的邮箱地址', trigger: ['blur', 'change']}
    ],
    password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
        {min: 6, max: 15, message: '密码长度在6到15个字符之间', trigger: 'blur'},
    ],
    email_code: [
        {required: true, message: '验证码不能为空', trigger: 'blur'},
        {min: 4, max: 4, message: '长度为 4 个字符', trigger: 'blur'}
    ],
}
