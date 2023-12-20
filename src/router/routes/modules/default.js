import LoginView from "@/views/login/index.vue";

export const defaultRoutes = [
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta:{
            roles: ['*'],
            hidden: true
        }
    },
]
